sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"br/com/salesorderapproval/SalesOrderApproval/util/Formatter",
	"br/com/salesorderapproval/SalesOrderApproval/util/Grouper"
], function(Controller, Formatter, Grouper) {
	"use strict";

	return Controller.extend("br.com.salesorderapproval.SalesOrderApproval.controller.Master", {
		Formatter: Formatter,
		Grouper: Grouper,

		handleListItemPress: function(evt){
			
			var salesOrderID = evt.getSource().getBindingContext().getProperty("SalesOrderID");
			
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("Detail",{
				orderID: salesOrderID
			});
			
		},
		
		handleSearch: function(evt) {
			var filters = [];
			var query = evt.getSource().getValue();

			var filters2 = new sap.ui.model.Filter({
				filters: [
					new sap.ui.model.Filter("SalesOrderID", sap.ui.model.FilterOperator.Contains, query),
					new sap.ui.model.Filter("CustomerName", sap.ui.model.FilterOperator.Contains, query)
				],
				and: false
			});

			if (query && query.length > 0) {
				var filter = new sap.ui.model.Filter("SalesOrderID", sap.ui.model.FilterOperator.Contains, query);
				filters.push(filter);
			}

			var list = this.getView().byId("__list0");
			var binding = list.getBinding("items");
			binding.filter(filters2);

		},

		handleGroup: function(evt) {

			var sorters = [];
			var item = evt.getParameter("selectedItem");
			var key = (item) ? item.getKey() : null;

			if (key === "GrossAmount" || key === "LifecycleStatus") {
				Grouper.bundle = this.getView().getModel("i18n").getResourceBundle();
				var grouper = Grouper[key];
				sorters.push(new sap.ui.model.Sorter(key, true, grouper));
			}

			var list = this.getView().byId("__list0");
			var binding = list.getBinding("items");
			binding.sort(sorters);

		}
		

	});
});