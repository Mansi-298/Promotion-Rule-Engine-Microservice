const yaml = require('js-yaml');
const fs = require('fs');
const RuleEngine = require('./ruleEngine');

// Simple YAML loader
const yamlLoader = {
    loadYaml: (filePath) => yaml.load(fs.readFileSync(filePath, 'utf8'))
};

const engine = new RuleEngine(yamlLoader);
engine.loadRules('../config/rules.yaml');

// Example player attributes
const player1 = { level: 15, country: 'US', daysSinceLastPurchase: 7 };
const player2 = { level: 5, country: 'US' };
const player3 = { level: 25, country: 'IN' };

console.log('Player 1 Promotion:', engine.evaluateRules(player1));
console.log('Player 2 Promotion:', engine.evaluateRules(player2));
console.log('Player 3 Promotion:', engine.evaluateRules(player3));