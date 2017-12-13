const utilities = require('./utilities');

module.exports.pathUtils = {
	getAttributes(path) {
		return path.node.openingElement.attributes;
    },

    getAttributeValue(path, name) {
        console.log({ name })
        const attribute = path.node.openingElement.attributes.filter(attribute => {
            return attribute.name.name = name;
        })[0];

        return (attribute.value ? attribute.value.value : undefined)
	},

	setAttributeValue(path, name, value) {
		path.node.openingElement.attributes.forEach(attribute => {
			if (attribute.name.name === name) {
				attribute.value.value = value;
			}
		});
	},

	setAttributeName(path, name, newName) {
		path.node.openingElement.attributes.forEach(attribute => {
			if (attribute.name.name === name) {
				attribute.name.name = newName;
			}
		});
	},

	changeAttribute(path, name, updates) {
		path.node.openingElement.attributes.forEach(attribute => {
			if (attribute.name.name === name) {
				Object.entries(updates).forEach(update => {
					attribute.name[update[0]] = update[1];
				});
			}
		});
	},

	removeAttribute(path, name) {
		path.node.openingElement.attributes = path.node.openingElement.attributes.filter(
			attribute => {
				return !(attribute.name.name === name);
			}
		);
    },

    findAttribute(path, name) {
        return path.node.openingElement.attributes.find(attribute => {
			return attribute.name.name === name;
		});
    },

	hasAttribute(path, name) {
		return !!path.node.openingElement.attributes.find(attribute => {
			return attribute.name.name === name;
		});
	}
};
