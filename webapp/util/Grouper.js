sap.ui.define(function(){
	"use strict";
	
	var Grouper = {
		
		bundle: null,
		
		LifecycleStatus: function(oContext){
			
			var status = oContext.getProperty("LifecycleStatus");
			var text = Grouper.bundle.getText("StatusText" + status, "?");
			
			return {
				key: status,
				text: text
			};
		},
		
		GrossAmount: function(oContext){
			var price = oContext.getProperty("GrossAmount");
			var currency = oContext.getProperty("CurrencyCode");
			
			var key = null;
			var text = null;
			
			if(price <= 5000){
				key = "<";
				text = "< 5000 " + currency;
			} else if(price > 5000 && price <= 10000){
				key = "";
				text = "< 10000 " + currency;
			} else if(price > 10000){
				key = ">";
				text = "> 10000 " + currency;
			}
			
			return {
				key: key,
				text: text
			};
			
			
		}
		
	};
	
	return Grouper;
	
},true);