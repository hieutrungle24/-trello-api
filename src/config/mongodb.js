import { MongoClient } from 'mongodb'
import { env } from '../config/environtment'


// eslint-disable-next-line no-unused-vars
const client = new MongoClient(env.MONGODB_URI, {
  useUnifiedTopology: true,
  useNewUrlParser:true
})

// export const connectDB = async() => {
//     try {
//         await client.connect()
//     } catch (error) {

//     }
// }