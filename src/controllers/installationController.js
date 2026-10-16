import { getStatus, install } from '../services/installationService.js'


//la status actuel
export async function Status(req, res) {

  try {
    const status = await getStatus()

    return res.status(200).json(status)
  }
  catch (error) {

    console.error('error founded ',error.Message)

  }
}


//fucn de creation de la premiere adimn
export async function install(req, res)
  {
    
  try {
      
    const { name, email, password} = req.body
      
    const result = await install(name, email, password)
  
    return res.status(200).json(result)
    
      
    } catch (error)
    {
      
    console.error(Message.error)
    
    return res.status
  }
}


