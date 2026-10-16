import Installation from '../models/installationModel.js'

const installationRepository = {
  async getStatus() {
    return Installation.findOne()
  },

  async setInstalled(session) {

    const existing = await Installation.findOne().session(session)

    if (existing) {

      existing.installed = true

      existing.installedAt = new Date()

      return existing.save({ session })
    }
    const [doc] = await Installation.create(
      
      [{ installed: true, installedAt: new Date() }],
      { session }
    )
    return doc
  }
}

export default installationRepository
