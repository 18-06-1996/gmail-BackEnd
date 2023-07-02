const express =require('express');
const  saveSentEmails = require('../controller/email.controller.js');
const getEmails = require('../controller/email.controller.js')
const moveEmailsToBin = require('../controller/email.controller.js')
const toggleStarredEmails= require('../controller/email.controller.js')
const deleteEmails = require('../controller/email.controller.js')

const routes = express.Router();


routes.post('/save',saveSentEmails)
routes.get('/emails/:type',getEmails)
routes.post('/save-draft',saveSentEmails)
routes.post('/bin',moveEmailsToBin)
routes.post('/starred',toggleStarredEmails)
routes.delete('/delete',deleteEmails)



module.exports = routes