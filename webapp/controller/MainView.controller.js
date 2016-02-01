sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function() {
	"use strict";

	
	return sap.ui.controller("hcpobjective.controller.MainView", {
		onInit: function() {
		   this._oAppControl = this.byId("objectiveContent");
		},
		hideMaster: function() {
			this._oAppControl.hideMaster();
		}
	});

});