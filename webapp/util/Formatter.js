jQuery.sap.require("sap.ui.core.format.DateFormat");

sap.ui.define(function(){
	"use strict";
	
	var Formatter = {
		
		date:function(value){
			if(value){
				var oDateFormat = sap.ui.core.format.DateFormat.getDateInstance({pattern: "dd-MM-yyyy"});
				return oDateFormat.format(new Date(value));
			}else{
				return value;
			}
		},
		
		statusText:function(value){
			if(!value){
				value = "C";
			}
			var bundle = this.getView().getModel("i18n").getResourceBundle();
			return bundle.getText("StatusText" + value, "?");
		},
		
		_statusStateMap:{
			"C": "Success",
			"N": "Warning",
			"X": "Error"
		},
		
		statusState:function(value){
			var map = Formatter._statusStateMap;
			return (value && map[value]) ? map[value]: "None";
		}
		
		
		
	};
	
	return Formatter;
	
},true);