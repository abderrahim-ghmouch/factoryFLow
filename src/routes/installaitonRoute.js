
import Router from 'express'


import {getStatus,install} from '../controlleres/installationController.js'

const router = Router()


router.get('/installation/status', getStatus)


router.post('/install', install)

export default router
