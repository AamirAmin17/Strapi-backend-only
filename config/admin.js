module.exports = ({ env }) => ({
  auth: {
    secret: env("JWT_SECRET", "c80c35316451706eb2b8d20b06ee97a7"),
  },
});
