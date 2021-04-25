const mysql = require('mysql');

const con = mysql.createConnection({
  host: 'pfa_sql',
  user: 'root',
  password: 'rootpfa',
  database: 'pfa',
})

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