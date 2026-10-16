import User from '../models/userModel.js'

const userRepository = {

  async create(data, session) {

    const [user] = await User.create([data], { session })

    return user
  },



  async findByEmail(email) {


    return User.findOne({ email: email.toLowerCase() })
  },
  
  async findByEmailWithPassword(email) {

    return User.findOne({ email: email.toLowerCase() }).select('+password')
  },

  async findById(id) {


    return User.findById(id)
  },

  async findAll() {
    
    return User.find().sort({ createdAt: -1 })
  }
}

export default userRepository

    
        // password is excluded by default in the model (select:false)
        // use .select('+password') when you need to verify credentials