module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '783fa99a7921b050a0ee74bf30ad9e22'),
  },
});
