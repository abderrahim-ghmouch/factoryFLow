import installationService from '../services/installationService.js'


export async function getStatus(req, res, next) {


    try {
      
        const status = await installationService.getStatus()
        
        return res.status(200).json(status)
        
    } catch (error) {
        
        if (next) return next(error)
        

    }
  }


export default installationController
