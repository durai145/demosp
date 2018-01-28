define(function (require, exports, module) {
	"use strict";
	var USS = require("ufi.core").USS;
	var FG = USS;
	FG.prototype.hasChild = function (fieldObj) {
		if (Array.isArray(fieldObj.childs)) {

			if (fieldObj.childs.length == 0) {
				return false;
			} else {
				return true;
			}
		} else {
			return false;
		}
	}

	var data = {};
	FG.prototype.commFrameGen = function (rec, recSch, func) {
		var commonHeader = "var us = new USS(); var USSContainer0 =    us.USSCreateContainer(); var USSHeader    = ''";
		var vcommonFrameGen = this.frameGenerationJson(recSch, {
			name: 'Dashboard',
			label: 'Dashboard',
			task: 'NONE',
			desc: '',
			htmlType: 'PARENT',
			entitle: 'READONLY',
			enttlname: 255,
			editorRole: 255,
			mndf: 'N',
			dataType: 'CONTAINER',
			cclass: 'ctable',
			validate: '',
			parent: 'Dashboard_0_0',
			dflt: '',
			min: '0',
			max: '20',
			tips: '',
			onkeyup: 'onKeyUp(this);',
			onchange: 'onChange(this);',
			onkeydown: 'onKeyDown(this);',
			onkeypress: 'onKeyPress(this);',
			onclick: 'onClick(this);',
			listVal: '||A|A-ADD|M|M-MODIFY|I|I-INQURY|C|C-CANCEL|V|V-VERIFY',
			help: 'N',
			helpLink: 'helpload',
			xml: 'Y',
			Xpath: '/',
			childs: recSch
		});
		var commonTailer = ""
		commonTailer += "\n document.getElementById('middleid').appendChild(USSContainer0); ";
		return commonHeader + vcommonFrameGen + commonTailer;
	}

	FG.prototype.sprint = function (str) {
		console.log(" " + str + " ");
		return "\n " + str + " ";
	}
	FG.prototype.debug = function (str) {
		console.log("<!--### " + str + "--> ");
	}
	FG.prototype.commFrameGen = function (rec, recSch, func, pageNameId, pageNameLabel) {
		var commonHeader = "var us = new ufiframegen.FG(); var USSContainer0 =    us.USSCreateContainer(); var USSHeader    = ''";
		var vcommonFrameGen = this.frameGenerationJson(recSch, {
			name: pageNameId,
			label: pageNameLabel,
			task: 'NONE',
			desc: '',
			htmlType: 'PARENT',
			entitle: 'READONLY',
			enttlname: 0xFF,
			editorRole: 0xFF,
			mndf: 'N',
			dataType: 'CONTAINER',
			cclass: 'ctable',
			validate: '',
			parent: 'Dashboard_0_0',
			dflt: '',
			min: '0',
			max: '20',
			tips: '',
			onkeyup: 'onKeyUp(this);',
			onchange: 'onChange(this);',
			onkeydown: 'onKeyDown(this);',
			onkeypress: 'onKeyPress(this);',
			onclick: 'onClick(this);',
			listVal: '||A|A-ADD|M|M-MODIFY|I|I-INQURY|C|C-CANCEL|V|V-VERIFY',
			help: 'N',
			helpLink: 'helpload',
			xml: 'Y',
			Xpath: '/',
			childs: recSch
		});
		var commonTailer = ""
		commonTailer += "\n document.getElementById('middleid').appendChild(USSContainer0); ";
		return commonHeader + vcommonFrameGen + commonTailer;
	}
	FG.prototype.sprint = function (str) {
		console.log(" " + str + " ");
		return "\n " + str + " ";
	}
	FG.prototype.debug = function (str) {
		console.log("<!--### " + str + "--> ");
	}
	FG.prototype.frameGenerationJson = function (
		recSch, parent
	) {
		var retContainer = {};
		recSch.forEach(function (recSchObj) {
			if (this.hasChild(recSchObj)) {
				retContainer[recSchObj.name] = this.frameGenerationJson(recSchObj.childs, recSchObj)[recSchObj.name];
			} else {
				retContainer[recSchObj.name] = recSchObj.dflt;
			}
		}, this);
		var retObj = {};
		retObj[parent.name] = retContainer;
		return retObj;
	}
	FG.prototype.frameGenerationResoure = function (
		recSch, parent
	) {
		var retContainer = {};
		recSch.forEach(function (recSchObj) {
			if (this.hasChild(recSchObj)) {
				retContainer[recSchObj.name] = this.frameGenerationResoure(recSchObj.childs, recSchObj)[recSchObj.name];
			} else {
				retContainer[recSchObj.name] = recSchObj.label;
			}
		}, this);
		var retObj = {};
		retObj[parent.name] = retContainer;
		return retObj;
	}

	FG.prototype.frameGenerationListVal = function (
		recSch, parent
	) {
		var retContainer = {};
		recSch.forEach(function (recSchObj) {
			if (this.hasChild(recSchObj)) {
				retContainer[recSchObj.name] = this.frameGenerationListVal(recSchObj.childs, recSchObj)[recSchObj.name];
			} else {
				retContainer[recSchObj.name] = this.listValToJson(recSchObj.listVal);
			}
		}, this);
		var retObj = {};
		retObj[parent.name] = retContainer;
		return retObj;
	}

	FG.prototype.listValToJson = function (listVal) {
		var retJson = {};
		var key = "";
		listVal.split("|").forEach(function (listValObj, i) {
			if (i % 2 == 0) {
				key = listValObj;
			} else {
				if (key == "") {
					retJson["NONE"] = "NONE";
				} else {
					retJson[key] = listValObj;
				}
			}
		}, this);
		return retJson;
	}

	FG.prototype.jsonToListVal = function (list, obj) {
		var listArr = list.split('|');
		var returnStr = "";
		try {

			for (var i = 0; i < listArr.length; i += 2) {
				if (i == 0) {
					returnStr += listArr[i] + "|" + obj[listArr[i]];
				} else {
					returnStr += "|" + listArr[i] + "|" + obj[listArr[i]];
				}
			}
		} catch (e) {
			console.log("jsonToListVal:Exception" + e);
		}
		return returnStr
	}

	FG.prototype.frameField = function (recSch, varStrVal, varLabelStrVal, varStrListVal, func, level, mode, role) {
		this.debug('frameField start');
		var lv_str = "";
		if (varStrVal === undefined)
			varStrVal == "";
		if ((recSch.col % recSch.maxCol) == 1) {
			lv_str += "\n USSTableRow" + level + " = new us.USSCreateTableRow_();	";
		}
		/*
		if (recSch.col == 1) {
			lv_str += "\n USSTableRow" + level + " = new  us.USSCreateTableRow_();	";
		}
		*/
		lv_str += "\n USSField    = new us.USSField_(); ";
		lv_str += "\n USSField" + "." + "group" + "=" + "'" + recSch.group + "'" + ";"
		lv_str += "\n USSField" + "." + "name" + "=" + "'" + recSch.name + "'" + ";"
		lv_str += "\n USSField" + "." + "label" + "=" + "'" + varLabelStrVal + "'" + ";"
		lv_str += "\n USSField" + "." + "task" + "=" + "'" + recSch.task + "'" + ";"
		lv_str += "\n USSField" + "." + "desc" + "=" + "'" + recSch.desc + "'" + ";"
		lv_str += "\n USSField" + "." + "htmlType" + "=" + "'" + recSch.htmlType + "'" + ";"
		if ((func == "Y") && (parseInt(recSch.editorRole) & parseInt(role))) {
			lv_str += "\n USSField" + "." + "entitle" + "=" + "'" + recSch.entitle + "'" + ";"
		} else {
			lv_str += "\n USSField" + "." + "entitle" + "=" + "'READONLY'" + ";"
		}
		lv_str += "\n USSField" + "." + "enttlname" + "=" + "'" + recSch.enttlname + "'" + ";"
		lv_str += "\n USSField" + "." + "editorRole" + "=" + "'" + recSch.editorRole + "'" + ";"
		lv_str += "\n USSField" + "." + "mndf" + "=" + "'" + recSch.mndf + "'" + ";"
		lv_str += "\n USSField" + "." + "dataType" + "=" + "'" + recSch.dataType + "'" + ";"
		lv_str += "\n USSField" + "." + "cclass" + "=" + "'" + recSch.cclass + "'" + ";"
		lv_str += "\n USSField" + "." + "validate" + "=" + "'" + recSch.validate + "'" + ";"
		lv_str += "\n USSField" + "." + "parent" + "=" + "'" + recSch.parent + "'" + ";"
		lv_str += "\n USSField" + "." + "parentHtmlType" + "=" + "'" + recSch.parentHtmlType + "'" + ";"
		lv_str += "\n USSField" + "." + "dflt" + "=" + "'" + varStrVal + "'" + ";"
		lv_str += "\n USSField" + "." + "min" + "=" + "'" + recSch.min + "'" + ";"
		lv_str += "\n USSField" + "." + "max" + "=" + "'" + recSch.max + "'" + ";"
		lv_str += "\n USSField" + "." + "tips" + "=" + "'" + recSch.tips + "'" + ";"
		lv_str += "\n USSField" + "." + "onkeyup" + "=" + "'" + recSch.onkeyup + "'" + ";"
		lv_str += "\n USSField" + "." + "onchange" + "=" + "'" + recSch.onchange + "'" + ";"
		lv_str += "\n USSField" + "." + "onchange" + "=" + "'" + recSch.onchange + "'" + ";"
		lv_str += "\n USSField" + "." + "onkeydown" + "=" + "'" + recSch.onkeydown + "'" + ";"
		lv_str += "\n USSField" + "." + "onkeypress" + "=" + "'" + recSch.onkeypress + "'" + ";"
		lv_str += "\n USSField" + "." + "onclick" + "=" + "'" + recSch.onclick + "'" + ";"
		if (recSch.htmlType == 'LIST' || recSch.htmlType == 'OPTION') {
			lv_str += "\n USSField" + "." + "listVal" + "=" + "'" + this.jsonToListVal(recSch.listVal, varStrListVal) + "'" + ";"
		} else {
			lv_str += "\n USSField" + "." + "listVal" + "=" + "'" + recSch.listVal + "'" + ";"
		}
		lv_str += "\n USSField" + "." + "col" + "=" + "'" + recSch.col + "'" + ";"
		lv_str += "\n USSField" + "." + "maxCol" + "=" + "'" + recSch.maxCol + "'" + ";"
		lv_str += "\n USSField" + "." + "help" + "=" + "'" + recSch.help + "'" + ";"
		lv_str += "\n USSField" + "." + "helpLink" + "=" + "'" + recSch.helpLink + "'" + ";"
		lv_str += "\n USSField" + "." + "xml" + "=" + "'" + recSch.xml + "'" + ";"
		lv_str += "\n USSField" + "." + "xmlname" + "=" + "'" + recSch.xmlname + "'" + ";"
		lv_str += "\n USSField" + "." + "Xpath" + "=" + "'" + recSch.Xpath + "'" + ";"
		lv_str += "\n USSTableRow" + level + "=us.CreateField(USSField,USSTableRow" + level + ");";
		this.debug(newFunction());
		return lv_str;
	}

	FG.prototype.frameGeneration = function (
		listVal, recLabel, rec, recSch, parent, level, func, parentCnt, mode
	) {
		var lv_str = "";
		var lv_rtStr = "";

		if (parent.Xpath == "/") {
			parent.Xpath = "$" + parent.name;
		}
		lv_str += this.sprint("USSContainer" + level + "   =   us.USSCreateContainer();");
		lv_str += this.sprint('USSTable' + level + '     =   new us.USSCreateTable_();');
		lv_str += this.sprint('USSTableRow' + level + '    =   new us.USSCreateTableRow_();');
		if (parent.task == "NONE") {
			lv_str += this.sprint('USSHeader' + level + '     =   us.USSCreateHeader("' + parent.label + '");');
		} else {
			lv_str += this.sprint('USSHeader' + level + '     =   us.USSCreateHeader("' + parent.label + '","' + parent.task + '" ,"' + parent.name + '" ,"' + mode + '"   );');
		}
		lv_str += this.sprint('USSSession' + level + '     =   us.USSCreateSession();');
		lv_rtStr = this.frameField(parent, '', '', func, parent.name, level);
		lv_str += this.sprint(lv_rtStr);
		lv_str += this.sprint('USSSession' + level + '.appendChild(USSTableRow' + level + ');');

		var recObjArr = [];
		if (Array.isArray(rec)) {
			recObjArr = rec;
		} else {
			recObjArr.push(rec);
		}
		recObjArr.forEach(function (recObj) {
			recSch.forEach(function (recSchObj, recSchCnt) {
				recSchObj.parent = parent.name;
				recSchObj.parentHtmlType = parent.htmlType;
				recSchObj.col = parent.col++;
				recSchObj.maxCol = parent.maxCol;

				var listValObjEvalStr = listVal[recSchObj.name];
				var labelObjEvalStr = recLabel[recSchObj.name];
				var objEvalStr = recObj[recSchObj.name];

				if (this.hasChild(recSchObj)) {
					lv_rtStr = this.frameGeneration(listValObjEvalStr, labelObjEvalStr, objEvalStr, recSchObj.childs, recSchObj, level + 1, func, recSchCnt, mode);
					lv_str += this.sprint(lv_rtStr);
					lv_str += this.sprint("USSSession" + level + ".appendChild(USSContainer" + (level + 1) + ");");
				} else {
					lv_rtStr = this.frameField(recSchObj, objEvalStr, labelObjEvalStr, listValObjEvalStr, func, level, recSchCnt);
					lv_str += this.sprint(lv_rtStr);
					lv_str += this.sprint('USSSession' + level + '.appendChild(USSTableRow' + level + ');');
				}
			}, this);
		}, this);
		lv_str += this.sprint("USSContainer" + level + ".appendChild(USSHeader" + level + " );");
		lv_str += this.sprint("USSContainer" + level + ".appendChild(USSSession" + level + " );");
		this.debug(level + "_" + parentCnt + " end ##### frameGeneration ###### ");
		return lv_str;
	}

	FG.prototype.frameGenerationV1 = function (
		listVal, recLabel, rec, recSch, parent, level, func, parentCnt, mode, role
	) {
		var lv_str = "";
		var lv_rtStr = "";
		this.debug(level + "_" + parentCnt + " start ##### frameGeneration V1 ###### ");
		if (parseInt(parent.enttlname) & parseInt(role)) {
			if (parent.Xpath == "/") {
				parent.Xpath = "$" + parent.name;
			}
			lv_str += this.sprint("USSContainer" + level + "   =   us.USSCreateContainer();");
			lv_str += this.sprint('USSTable' + level + '     =   new us.USSCreateTable_();');
			lv_str += this.sprint('USSTableRow' + level + '    =   new us.USSCreateTableRow_();');
			if (parent.task == "NONE") {
				lv_str += this.sprint('USSHeader' + level + '     =   us.USSCreateHeader("' + parent.label + '");');
			} else {
				lv_str += this.sprint('USSHeader' + level + '     =   us.USSCreateHeader("' + parent.label + '","' + parent.task + '" ,"' + parent.name + '" ,"' + mode + '"   );');
			}
			lv_str += this.sprint('USSSession' + level + '     =   us.USSCreateSession();');
			//recSch, varStrVal, varLabelStrVal, varStrListVal, func, level, mode, role
			lv_rtStr = this.frameField(parent, '', '', '', func, level, "NONE", parent.enttlname);
			lv_str += this.sprint(lv_rtStr);
			lv_str += this.sprint('USSSession' + level + '.appendChild(USSTableRow' + level + ');');

			var recObjArr = [];
			if (Array.isArray(rec)) {
				recObjArr = rec;
			} else {
				recObjArr.push(rec);
			}


			if (parent.htmlType == 'TABLE') {
				recSch.forEach(function (recSchObj, recSchCnt) {

					var objEvalStr = "";
					var labelObjEvalStr = recLabel[recSchObj.name];
					var listValObjEvalStr = listVal[recSchObj.name];
					recSchObj.col = parent.col++;
					recSchObj.maxCol = parent.maxCol;

					var recHdr = Object.assign({}, recSchObj);
					recHdr.parentHtmlType = 'HEADER';

					lv_rtStr = this.frameField(recHdr, objEvalStr, labelObjEvalStr, listValObjEvalStr, func, level, recSchCnt);
					lv_str += this.sprint(lv_rtStr);
					lv_str += this.sprint('USSSession' + level + '.appendChild(USSTableRow' + level + ');');
				}, this);
			}
			recObjArr.forEach(function (recObj) {
				recSch.forEach(function (recSchObj, recSchCnt) {
					recSchObj.parent = parent.name;
					recSchObj.parentHtmlType = parent.htmlType;
					recSchObj.col = parent.col++;
					recSchObj.maxCol = parent.maxCol;

					var listValObjEvalStr = listVal[recSchObj.name];
					var labelObjEvalStr = recLabel[recSchObj.name];
					var objEvalStr = recObj[recSchObj.name];
					if (parseInt(recSchObj.enttlname) & parseInt(role)) {
						if (this.hasChild(recSchObj)) {
							lv_rtStr = this.frameGenerationV1(listValObjEvalStr, labelObjEvalStr, objEvalStr, recSchObj.childs, recSchObj, level + 1, func, recSchCnt, mode, role);
							lv_str += this.sprint(lv_rtStr);
							lv_str += this.sprint("USSSession" + level + ".appendChild(USSContainer" + (level + 1) + ");");
						} else {
							//recSch, varStrVal, varLabelStrVal, varStrListVal, func, level, mode, role
							lv_rtStr = this.frameField(recSchObj, objEvalStr, labelObjEvalStr, listValObjEvalStr, func, level, mode, role);
							lv_str += this.sprint(lv_rtStr);
							lv_str += this.sprint('USSSession' + level + '.appendChild(USSTableRow' + level + ');');
						}
					}
				}, this);
			}, this);
			lv_str += this.sprint("USSContainer" + level + ".appendChild(USSHeader" + level + " );");
			lv_str += this.sprint("USSContainer" + level + ".appendChild(USSSession" + level + " );");
		}
		this.debug(level + "_" + parentCnt + " end ##### frameGeneration V1 ###### ");
		return lv_str;
	}

	FG.prototype.valWithSch = function (rec, recSch) {
		for (var r = 0; r < rec.length; r++) {
			for (var s = 0; s < recSch.length; s++) {
				var varStr = 'rec[' + r + '].' + recSch[s].name;
				var varStrVal = eval(varStr);
				if (recSch[s].dataType != "CONTAINER" || recSch[s].dataType != "PAGE") {
					value = varStrVal;
					if (value === undefined) {
						value = '';
					}
					if (recSch[s].childs === undefined) {
						recSch[s].childs = new Array();
					}
					if (recSch[s].htmlType === undefined) {
						recSch[s].htmlType = '';
					}
					if (recSch[s].dataType === undefined) {
						recSch[s].dataType = '';
					}
					if (recSch[s].groupId === undefined) {
						recSch[s].groupId = '';
					}
					switch (recSch[s].dataType) {
						case "DATE":
							re = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
							if (value != '' && !value.match(re)) {
								alert(recSch[s].name + "Invalid date format: " + value);
								return false;
							}
							break;
						case "TIME":
							// regular expression to match required time format
							re = /^\d{1,2}:\d{2}([ap]m)?$/;
							if (value != '' && !value.match(re)) {
								alert(recSch[s].name + "Invalid time format: " + value);
								return false;
							}
							break;
						case "NUMBER":
							if (recSch[s].max != "unlimited") {
								re = RegExp("^[0-9.]{" + recSch[s].min + "," + recSch[s].max + "}$");
								if (value != '' && !re.test(value)) {
									alert(recSch[s].name + " Exceed  limit " + recSch[s].min + " to " + recSch[s].max);
									return false;
								}
							} else {
								re = /^[A-Za-z0-9_]$/;
								if (value != '' && !value.match(re)) {
									alert(recSch[s].name + " Invalid time format: " + value);
									return false;
								}
							}
							break;
						case "VARCHAR":
							if (recSch[s].max != "unlimited") {
								re = RegExp("^[A-Za-z0-9_]{" + recSch[s].min + "," + recSch[s].max + "}$");
								if (value != '' && !value.match(re)) {
									alert(recSch[s].name + "Exceed  limit " + recSch[s].min + " to " + recSch[s].max + "[ " + value + "]");
									return false;
								}
							} else {
								re = /^[A-Za-z0-9_]$/;
								if (value != '' && !value.match(re)) {
									alert(recSch[s].name + "Invalid time format: " + value);
									return false;
								}
							}
							break;
						case "LIST":
						case "OPTION":
							recSch[s].listVal
							if (value != '') {
								var inpStrArr = recSch[s].listVal.split('|');
								var chk = 0;
								for (var i = 0; i < inpStrArr.length; i += 2) {
									if (value == inpStrArr[i]) {
										chk = 1;
									}
								}
								if (chk != 1) {
									alert(recSch[s].name + " Invalid time format: " + value);
									return false;
								}
							}
					}
				}
				if (recSch[s].childs === undefined) {
					recSch[s].childs = new Array();
				}
				valWithSch(varStrVal, recSch[s].childs);
			}
		}
	}

	var PersonalInfo = [{
		psnlInfo: [{
			BasicDet: [{
					name: "durai"
				},
				{
					name: "Akbar"
				}
			]
		}]
	}];


	var PersonalInfoSch = [{
		group: 'ussms',
		name: 'psnlInfo',
		label: 'Personal Information ',
		task: 'NONE',
		desc: 'VARCHAR',
		htmlType: 'TAP',
		entitle: 'N',
		enttlname: '',
		mndf: 'N',
		dataType: 'CONTAINER',
		cclass: 'ctext',
		validate: '',
		dflt: '',
		min: '0',
		max: '60',
		tips: '',
		onkeyup: '',
		onchange: '',
		onkeydown: '',
		onkeypress: '',
		onclick: '',
		listVal: '""',
		help: 'N',
		helpLink: '',
		xml: 'N',
		Xpath: 'N',
		childs: [{
			group: 'ussms',
			name: 'BasicDet',
			label: 'Basic Details',
			task: 'NONE',
			desc: 'VARCHAR',
			htmlType: 'CONTAINER',
			entitle: 'N',
			enttlname: '',
			mndf: 'N',
			dataType: 'COLLECTION',
			cclass: 'ctext',
			validate: '',
			dflt: '',
			min: '0',
			max: '2',
			tips: '',
			onkeyup: '',
			onchange: '',
			onkeydown: '',
			onkeypress: '',
			onclick: '',
			listVal: '',
			help: 'N',
			helpLink: '',
			xml: 'N',
			Xpath: 'N',
			childs: [{
				group: 'ussms',
				name: 'name',
				label: 'Name ',
				task: 'NONE',
				desc: 'VARCHAR',
				htmlType: 'TEXT',
				entitle: 'N',
				enttlname: '',
				mndf: 'N',
				dataType: 'VARCHAR',
				cclass: 'ctext',
				validate: '',
				dflt: '',
				min: '0',
				max: '2',
				tips: '',
				onkeyup: '',
				onchange: '',
				onkeydown: '',
				onkeypress: '',
				onclick: '',
				listVal: '',
				help: 'N',
				helpLink: '',
				xml: 'N',
				Xpath: 'N',
				childs: 'N'
			}]
		}]
	}];
	exports.FG = FG;
});

function newFunction() {
	return 'frameField end';
}