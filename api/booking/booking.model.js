//TODO: implement mongoose.js ODM for mongodb
const Store = [
  {
    id: '1234567',
    driver: 'test@driver.com',
    user: 'siba4269@gmail.com',
    status: 'booked', // canceled, end
  },
];

exports.Booking = {
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
  tripEnd: async (id) => {
    const booking = Store.find((s) => s.id == id);
    booking.status = 'end';
    return booking;
  },
};
