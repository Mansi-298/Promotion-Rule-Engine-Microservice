class PromotionController {
    constructor(ruleEngine) {
        this.ruleEngine = ruleEngine;
    }

    async evaluatePromotion(req, res) {
        try {
            const playerAttributes = req.body;
            const promotion = await this.ruleEngine.evaluateRules(playerAttributes);
            if (promotion) {
                return res.status(200).json({ promotion });
            } else {
                return res.status(404).json({ message: 'No promotion found for the given attributes.' });
            }
        } catch (error) {
            return res.status(500).json({ message: 'An error occurred while evaluating the promotion.', error: error.message });
        }
    }
}

module.exports = PromotionController;