const mysql = require('mysql');
const express = require('express');

const conf = {
  host: 'pfa_sql',
  user: 'root',
  password: 'rootpfa',
  database: 'pfa',
}
let con = mysql.createConnection(conf);

con.connect(err => {
  if (err) throw err;
  console.log('Connected!');
});

// initialize DB tables and initial data
con.query("CREATE TABLE IF NOT EXISTS topics (id INT NOT NULL AUTO_INCREMENT, name varchar(255) NOT NULL, PRIMARY KEY (id) )", (err) => {
  if (err) throw err;
  console.log('Table created!');
});

con.query("TRUNCATE TABLE topics", (err) => {
  if (err) throw err;
  console.log('Table data cleared!');
});

con.query(`INSERT INTO topics (name) VALUES
            ('Docker'),
            ('Integracao Continua'),
            ('Kubernetes'),
            ('RabbitMQ'),
            ('Apache Kafka'),
            ('Service Discovery')
          `, (err) => {
  if (err) throw err;
  console.log('Table data added!');
});

con.query("SELECT * FROM topics", (err, result) => {
  if (err) throw err;
  console.log('Results:');
  result.forEach(r => {
    console.log(`id: ${r.id}, name: ${r.name}`);
  });

  con.end();
});

const app = express();

app.get('/', (req, res) => {
  con = mysql.createConnection(conf);
  con.connect(err => {
    if (err) res.status(500).send('DB error!');

    con.query("SELECT * FROM topics", (err, result) => {
      if (err) res.status(500).send(JSON.stringify({ message: 'Error when operating DB!' }));
      con.end();
      res.send(result);
    })

  });

});

app.listen(3000, () => {
  console.log('Server running!');
});