export default {
  mongoUrl: process.env.MONGO_URL || 'mongodb://mongo:27017/auth-ts',
  port: process.env.PORT || 7070,
  jwtSecret: process.env.JWT_SECRET || 'tj670==5H'
}
