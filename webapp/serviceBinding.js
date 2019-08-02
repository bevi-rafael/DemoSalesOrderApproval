function initModel() {
	var sUrl = "/Gateway_SAPES5/sap/opu/odata/IWBEP/gwsample_basic/";
	var oModel = new sap.ui.model.odata.ODataModel(sUrl, true);
	sap.ui.getCore().setModel(oModel);
}