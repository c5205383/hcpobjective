sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"hcpobjective/model/models"
], function(UIComponent, Device, models) {
	"use strict";

	return UIComponent.extend("hcpobjective.Component", {
		metadata: {
			name: "xtit.shellTitle",
			includes: ["css/style.css"],
			dependencies: {
				libs: ["sap.m", "sap.ushell"],
				components: []
			},
			rootView: "hcpobjective.view.MainView",
			config: {
				resourceBundle: "i18n/i18n.properties"
			},
			routing: {
				config : {
	                viewType : "XML",
	                viewPath : "hcpobjective.view",
	                targetAggregation : "pages",
	                targetControl: "objectiveContent",
	                clearTarget : false
	            },
				routes: [
				  {
                    name : "ObjectivePage",
                    pattern : ":all*:",
                    view : "ProfileObjectivePage"

                   }
			    ]
			}
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function() {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
			this.getRouter().initialize();
		}
	});

});