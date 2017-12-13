module.exports.isStyleOrName = name => {
	return name === 'styleName' || name === 'className';
};

module.exports.isClassName = name => {
	return name === 'className';
};

module.exports.isStyleName = name => {
	return name === 'styleName';
};

module.exports.modifyStyleName = (name, modifier) => {
	return modifier.replace('[name]', name);
};
