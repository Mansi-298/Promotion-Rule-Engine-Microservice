class RuleEngine {
    constructor(yamlLoader) {
        this.yamlLoader = yamlLoader;
        this.rules = [];
        this.defaultPromotion = null;
    }

    loadRules(filePath) {
        const yamlData = this.yamlLoader.loadYaml(filePath);
        this.rules = yamlData.rules || [];
        this.defaultPromotion = yamlData.defaultPromotion || null;
    }

    evaluateRules(playerAttributes) {
        for (const rule of this.rules) {
            if (this.evaluateCondition(rule.condition, playerAttributes)) {
                return rule.promotion;
            }
        }
        return this.defaultPromotion;
    }

    evaluateCondition(condition, playerAttributes) {
        for (const key in condition) {
            const condValue = condition[key];
            const playerValue = playerAttributes[key];
            if (typeof condValue === 'object' && condValue !== null) {
                if (condValue.min !== undefined && playerValue < condValue.min) return false;
                if (condValue.max !== undefined && playerValue > condValue.max) return false;
            } else {
                if (playerValue === undefined || playerValue !== condValue) return false;
            }
        }
        return true;
    }

    hotReloadRules(filePath) {
        this.loadRules(filePath);
    }
}

module.exports = RuleEngine;