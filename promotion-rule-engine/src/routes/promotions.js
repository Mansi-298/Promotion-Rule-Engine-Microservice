const express = require('express');
const router = express.Router();
const PromotionController = require('../controllers/promotionController');

const promotionController = new PromotionController();

router.post('/promotion', promotionController.evaluatePromotion.bind(promotionController));
router.get('/metrics', promotionController.getMetrics.bind(promotionController));

module.exports = router;