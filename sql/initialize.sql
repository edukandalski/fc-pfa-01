USE pfa;

CREATE TABLE IF NOT EXISTS topics (id INT NOT NULL AUTO_INCREMENT, name varchar(255) NOT NULL, PRIMARY KEY (id) );

TRUNCATE TABLE topics;

INSERT INTO topics (name) VALUES
  ('Docker'),
  ('Integração Contínua'),
  ('Kubernetes'),
  ('RabbitMQ'),
  ('Apache Kafka'),
  ('Service Discovery');