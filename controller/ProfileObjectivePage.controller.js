(function () {
  "use strict";
  sap.ui.controller("hcpobjective.controller.ProfileObjectivePage", {
    onInit: function () {
       
      this.createDetailview();
    },
    createDetailview: function(){
    	var container = this.getView().byId("goalPlanLayout");
    	var testCombobox = new sap.m.CheckBox({text: "Enable"});
    	container.addContent(testCombobox);
    }
  });
}());