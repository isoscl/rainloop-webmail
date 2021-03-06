
(function () {

	'use strict';

	var
		_ = require('_'),
		ko = require('ko'),

		Settings = require('Storage/Settings')
	;

	/**
	 * @constructor
	 */
	function AccountUserStore()
	{
		this.email = ko.observable('');
//		this.incLogin = ko.observable('');
//		this.outLogin = ko.observable('');

		this.signature = ko.observable('');

		this.accounts = ko.observableArray([]);
		this.accounts.loading = ko.observable(false).extend({'throttle': 100});

		this.accountsEmails = ko.computed(function () {
			return _.compact(_.map(this.accounts(), function (oItem) {
				return oItem ? oItem.email : null;
			}));
		}, this);

		this.accountsUnreadCount = ko.computed(function () {

			var iResult = 0;

//			_.each(this.accounts(), function (oItem) {
//				if (oItem)
//				{
//					iResult += oItem.count();
//				}
//			});

			return iResult;

		}, this);
	}

	AccountUserStore.prototype.populate = function ()
	{
		this.email(Settings.settingsGet('Email'));
	};

	module.exports = new AccountUserStore();

}());
