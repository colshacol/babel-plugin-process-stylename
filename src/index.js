const { stateUtils } = require('./stateUtils');
const { attributeUtils } = require('./attributeUtils');
const { pathUtils } = require('./pathUtils');
const utilities = require('./utilities');

module.exports = function() {
	return {
		inherits: require('babel-plugin-syntax-jsx'),
		visitor: {
			JSXElement: handler
		}
	};
};

const handler = (path, state) => {
    const classes = [];

    let foundClassName = false;
    let foundStyleName = false;

	const modifier = stateUtils.getOption(state, 'modifier');
	const attributes = pathUtils.getAttributes(path);

	attributes.forEach(attribute => {
        if (attribute.type === 'JSXSpreadAttribute') return;

        const { name, value } = attributeUtils.getPair(attribute);

        if (!name) return;

		if (utilities.isClassName(name)) {
            foundClassName = true;
			classes.push(value);
		}

		if (utilities.isStyleName(name)) {
            foundStyleName = true;
			const newValue = utilities.modifyStyleName(value, modifier);
			classes.unshift(newValue);
		}
	});

    foundStyleName && foundClassName && pathUtils.removeAttribute(path, 'styleName');
    foundStyleName && !foundClassName && pathUtils.setAttributeName(path, 'styleName', 'className');
	foundStyleName && foundClassName && pathUtils.setAttributeValue(path, 'className', classes.join(' '))
};
