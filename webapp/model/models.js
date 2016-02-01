sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device",
	"sap/ui/model/odata/v2/ODataModel",
	"sap/ui/model/resource/ResourceModel"
], function(JSONModel, Device, ODataModel, ResourceModel) {
	"use strict";

	return {

		createDeviceModel: function() {
			var oModel = new JSONModel(Device);
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
		},
		_createODataModel: function(sUrl, oConfig) {
			return new ODataModel(sUrl, oConfig);
		},
	    createResourceModel: function(sRootPath, resourceBundle) {
			this._resourceModel = new ResourceModel({
				bundleUrl: [sRootPath, resourceBundle].join("/")
			});
			return this._resourceModel;
		}

	};

});