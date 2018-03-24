define(function (require, exports, module) {


    USSField_ = function () {
        this.group = 'USS', /*it has been changed by author on 02-Feb-2010*/
            this.name = '',
            this.label = '',
            this.task = 'NONE',
            this.desc = '',
            this.htmlType = 'text', /* newly introduced in USS05*/
            this.entitle = 'READONLY'; // Editable /Readonly
            this.enttlname = 0xFF, //Entitle name to db
            this.editorRole = 0xFF, // Editable Role
            this.mndf = 'N',
            this.dataType = 'VARCHAR', // NUMBER/VARCHAR/DATE/EMAIL/AMOUNT/LIST/DIV/
            this.cclass = 'ctable', //
            this.parent = '',
            this.parentHtmlType = '',
            this.validate = '',
            this.dflt = '',
            this.min = '0',
            this.max = '60',
            this.tips = '',
            this.onkeyup = 'onKeyUp(this);',
            this.onchange = 'onChange(this);',
            this.onkeydown = 'onKeyDown(this);',
            this.onkeypress = 'onKeyPress(this);',
            this.onclick = 'onClick(this);',
            this.onblure = 'onBlure(this);',
            this.listVal = '||A|A-ADD',
            this.help = 'N',
            this.helpLink = 'helpload',
            this.xml = 'Y',
            this.xmlname = '',
            this.Xpath = '/',
            this.maxCol = '1',
            this.col = '0',
            this.dimensions = "", /*[]*/
            this.dimensionMax = "", /*[]*/
            this.dimensionMin = "", /*[]*/
            this.dataCategory = '',
            this.iconListVal = "|true|fa fa-check-circle|false|fa fa-times-circle"
        this.camelCase = true
        this.$ref = ""
    }

    var hasChild = function (schemaJsonObj) {
        if (schemaJsonObj && schemaJsonObj.childs && Array.isArray(schemaJsonObj.childs) && schemaJsonObj.childs.length != 0) {
            return true
        }
        return false;
    }

    var exportSchemaContext = function (schemaJson, contextObj, uri) {
        if (!uri) {
            uri = "http://localhost:5001/services/schema/" + schemaJson[0].name + "#";
        }
        schemaJson.forEach(function (schemaJsonObj) {
            var key = uri + "/" + schemaJsonObj.name;
            contextObj[key] = schemaJsonObj;
            if (hasChild(schemaJsonObj)) {
                childObj=exportSchemaContext(schemaJsonObj.childs, contextObj, key);
                    for (var key in childObj) {
                        contextObj[key] = childObj[key];
                    }
            }
        });
        return contextObj;
    }

    var expandSchemaJson = function (schemaJsonRef, context) {
        var schemaJson = [];
        schemaJsonRef.forEach(function (schemaJsonRefObj) {
            if (schemaJsonRefObj.$ref) {
                var contextObj = context[0][schemaJsonRefObj.$ref];
                for (var key in schemaJsonRefObj) {
                    if (key != "$ref") {
                        contextObj[key] = schemaJsonRefObj[key];
                    }
                }
                schemaJson.push(contextObj);
            } else {
                if (hasChild(schemaJsonRefObj)) {
                    schemaJsonRefObj.childs = expandSchemaJson(schemaJsonRefObj.childs, context);
                    schemaJson.push(schemaJsonRefObj);
                } else {
                    schemaJson.push(schemaJsonRefObj);
                }
            }
        });
    }

    exports.expandSchemaJson=expandSchemaJson;
    exports.exportSchemaContext=exportSchemaContext;
    exports.USSField_ = USSField_;

});