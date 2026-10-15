import mongoose from 'mongoose'

const installationSchema = new mongoose.Schema(
  {
    installed: {
      type: Boolean,
      required: true,
      default: false
    },

    installedAt: {
      
      type: Date,
      default: null
    }
  },
  { timestamps: false }
)

const Installation = mongoose.model('Installation', installationSchema)

export default Installation






         