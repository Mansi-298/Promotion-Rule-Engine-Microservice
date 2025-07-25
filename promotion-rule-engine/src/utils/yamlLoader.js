const fs = require('fs');
const yaml = require('js-yaml');

function loadYaml(filePath) {
    try {
        const fileContents = fs.readFileSync(filePath, 'utf8');
        return yaml.load(fileContents);
    } catch (e) {
        console.error(`Error loading YAML file: ${e.message}`);
        return null;
    }
}

module.exports = {
    loadYaml,
};