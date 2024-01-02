exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('products').del()
  await knex('products').insert([
      {id: 1, description: 'Smartphone 128GB', price: 299.99, brand: 'ElectroMax'},
      {id: 2, description: 'Laptop Gamer 15\'', price: 899.99, brand: 'TechGear'},
      {id: 3, description: 'Smartwatch Fitness Tracker', price: 199.99, brand: 'GadgetPro'},
      {id: 4, description: 'Wireless Headphones', price: 129.99, brand: 'FutureTech'},
      {id: 5, description: 'Bluetooth Speaker', price: 79.99, brand: 'DigitalWave'},
      {id: 6, description: '4K UHD TV 50\'', price: 499.99, brand: 'NextGen'},
      {id: 7, description: 'Espresso Coffee Machine', price: 250.00, brand: 'Innovate'},
      {id: 8, description: 'Electric Toothbrush', price: 39.99, brand: 'TechTrend'},
      {id: 9, description: 'Gaming Console', price: 399.99, brand: 'GizmoZone'},
      {id: 10, description: 'Tablet 10.5\' Screen', price: 349.99, brand: 'DeviceWorld'},
      {id: 11, description: 'E-book Reader', price: 129.99, brand: 'ElectroMax'},
      {id: 12, description: 'Digital Camera 20MP', price: 249.99, brand: 'TechGear'},
      {id: 13, description: 'Wireless Mouse', price: 24.99, brand: 'GadgetPro'},
      {id: 14, description: 'External Hard Drive 1TB', price: 99.99, brand: 'FutureTech'},
      {id: 15, description: 'Noise Cancelling Earbuds', price: 59.99, brand: 'DigitalWave'},
      {id: 16, description: 'Action Camera 4K', price: 299.99, brand: 'NextGen'},
      {id: 17, description: 'Smart Home Hub', price: 199.99, brand: 'Innovate'},
      {id: 18, description: 'LED Desk Lamp', price: 49.99, brand: 'TechTrend'},
      {id: 19, description: 'Wireless Keyboard', price: 59.99, brand: 'GizmoZone'},
      {id: 20, description: 'Portable Power Bank 10000mAh', price: 29.99, brand: 'DeviceWorld'}
    ]
  );
};
