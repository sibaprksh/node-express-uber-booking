//TODO: implement mongoose.js ODM for mongodb

const Store = [
  {
    name: 'Siba',
    role: 'user',
    email: 'siba4269@gmail.com',
    password: 'encrypted-with-hash-value',
  },
  {
    name: 'Test Driver',
    role: 'driver',
    email: 'test@driver.com',
    password: 'encrypted-with-hash-value',
    availability: 1,
    position: {
      latitude: 17.38,
      longitude: 78.48,
    },
  },
];

exports.User = {
  create: async (user) => {
    return Store.push(user);
  },
  find: async (params) => {
    if (!params) return Store;
  },
  findOne: async (condition) => {
    const keys = Object.keys(condition);
    const found = Store.find((u) => keys.every((k) => condition[k] == u[k]));
    return found || {};
  },
  getDriver: async ({ latitude: lat, longitude: lon }) => {
    const drivers = Store.filter(
      (s) => s.availability == 1 && role == 'driver'
    );
    return drivers.find((driver) => {
      const {
        position: { latitude, longitude },
      } = driver;

      const distance = Math.sqrt(
        Math.pow(Math.pow(latitude, 2) - Math.pow(lat, 2), 2) +
          Math.pow(Math.pow(longitude, 2) - Math.pow(lon, 2), 2)
      );

      if (distance <= config.distance_threshold) return true;
    });
  },
  available: async (email, { latitude, longitude }) => {
    const driver = Store.find((s) => s.email == email);
    driver.availability = 1;
    driver.position.latitude = latitude;
    driver.position.longitude = longitude;
    return driver;
  },
  unavailable: async (email) => {
    const driver = Store.find((s) => s.email == email);
    driver.availability = 0;
    return driver;
  },
};
