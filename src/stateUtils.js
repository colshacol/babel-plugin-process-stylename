const { utils } = require('./utilities');

module.exports.stateUtils = {
	getOption(state, name) {
		return state.opts[name] || '[name]';
	}
};
