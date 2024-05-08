const express = require('express')
const router = express.Router()

const parkRouter = require('../controllers/parks')

router.get('/', parkRouter.index)
router.post('/', parkRouter.create)
router.get('/:id', parkRouter.show)

module.exports = router