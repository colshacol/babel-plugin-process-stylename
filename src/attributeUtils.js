const { utils } = require('./utilities');

const defaultPair = {
    name: undefined,
    value: undefined
}

module.exports.attributeUtils = {
	getName(attribute) {
		return attribute.name.name;
	},

	setName(attribute, { name }) {
		attribute.name.name = name;
	},

	getValue(attribute) {
		return attribute.value.value;
    },

    getPair(attribute) {
        if (!attribute) return defaultPair;
        if (!attribute.name) return defaultPair;

        return {
            name: attribute.name.name,
            value: attribute.value && attribute.value.value || undefined
        }
    }
};
