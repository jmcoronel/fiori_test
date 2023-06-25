/*global QUnit*/

sap.ui.define([
	"jmcoronel/invoices/controller/MainView01.controller"
], function (Controller) {
	"use strict";

	QUnit.module("MainView01 Controller");

	QUnit.test("I should test the MainView01 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
