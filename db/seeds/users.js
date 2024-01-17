const bcrypt = require('bcryptjs');

const saltRounds = 10;

exports.seed = async function(knex) {
  // Limpa a tabela de usuários
  await knex('users').del();

  // Lista de usuários com nomes reais
  const usersData = [
    { name: 'Alice Martins', email: 'alice.martins@example.com' },
    { name: 'Bruno Garcia', email: 'bruno.garcia@example.com' },
    { name: 'Carla Gomes', email: 'carla.gomes@example.com' },
    { name: 'Diego Silva', email: 'diego.silva@example.com' },
    { name: 'Eduarda Ferreira', email: 'eduarda.ferreira@example.com' },
    { name: 'Fábio Araujo', email: 'fabio.araujo@example.com' },
    { name: 'Gabriela Souza', email: 'gabriela.souza@example.com' },
    { name: 'Hector Alves', email: 'hector.alves@example.com' },
    { name: 'Íris Santos', email: 'iris.santos@example.com' },
    { name: 'João Oliveira', email: 'joao.oliveira@example.com' },
    // Administrador
    { name: 'Admin', email: 'admin@example.com', isAdmin: true }
  ];

  // Gera hashes de senha para cada usuário
  const usersWithHashedPasswords = await Promise.all(
    usersData.map(async user => {
      const hashedPassword = await bcrypt.hash(user.isAdmin ? 'admin' : 'senha123', saltRounds);
      return {
        name: user.name,
        email: user.email,
        password: hashedPassword,
        created_at: new Date(), // Adicionando timestamps
        updated_at: new Date()
      };
    })
  );

  // Insere usuários na tabela
  await knex('users').insert(usersWithHashedPasswords);
};
