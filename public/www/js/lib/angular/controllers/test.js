require(["jquery", "ufi.core", "ufi.frameGen", "ufi.xml", "ufi.validate"], function ($, uficore, ufiframegen, ufixml, ufivalidate) {
    var us = new ufiframegen.FG(); 
    var USSContainer0 = us.USSCreateContainer(); 
    var USSHeader = '';
    USSContainer0 = us.USSCreateContainer();
    USSTable0 = new us.USSCreateTable_();
    USSTableRow0 = new us.USSCreateTableRow_();
    USSHeader0 = us.USSCreateHeader("Basic Details", "ES", "basicDet", "");
    USSSession0 = us.USSCreateSession();

    USSField = new us.USSField_();
    USSField.group = 'USS';
    USSField.name = 'basicDet';
    USSField.label = '';
    USSField.task = 'ES';
    USSField.desc = '';
    USSField.htmlType = 'PAGE';
    USSField.entitle = 'NONREADONLY';
    USSField.enttlname = '255';
    USSField.editorRole = '255';
    USSField.mndf = 'N';
    USSField.dataType = 'PAGE';
    USSField.cclass = 'ctable';
    USSField.validate = '';
    USSField.parent = '';
    USSField.parentHtmlType = '';
    USSField.dflt = '';
    USSField.min = '0';
    USSField.max = '60';
    USSField.tips = '';
    USSField.onkeyup = 'onKeyUp(this);';
    USSField.onchange = 'onChange(this);';
    USSField.onchange = 'onChange(this);';
    USSField.onkeydown = 'onKeyDown(this);';
    USSField.onkeypress = 'onKeyPress(this);';
    USSField.onclick = 'onClick(this);';
    USSField.listVal = '0';
    USSField.col = '0';
    USSField.maxCol = '1';
    USSField.help = 'N';
    USSField.helpLink = 'helpload';
    USSField.xml = 'Y';
    USSField.xmlname = '';
    USSField.Xpath = '$basicDet';
    USSTableRow0 = us.CreateField(USSField, USSTableRow0);
    USSSession0.appendChild(USSTableRow0);

    USSContainer1 = us.USSCreateContainer();
    USSTable1 = new us.USSCreateTable_();
    USSTableRow1 = new us.USSCreateTableRow_();
    USSHeader1 = us.USSCreateHeader("Table");
    USSSession1 = us.USSCreateSession();

    USSField = new us.USSField_();
    USSField.group = 'USS';
    USSField.name = 'table';
    USSField.label = '';
    USSField.task = 'NONE';
    USSField.desc = '';
    USSField.htmlType = 'TABLE';
    USSField.entitle = 'READONLY';
    USSField.enttlname = '255';
    USSField.editorRole = '255';
    USSField.mndf = 'N';
    USSField.dataType = 'CONTAINER';
    USSField.cclass = 'ctable';
    USSField.validate = '';
    USSField.parent = 'basicDet';
    USSField.parentHtmlType = 'PAGE';
    USSField.dflt = '';
    USSField.min = '0';
    USSField.max = '60';
    USSField.tips = '';
    USSField.onkeyup = 'onKeyUp(this);';
    USSField.onchange = 'onChange(this);';
    USSField.onchange = 'onChange(this);';
    USSField.onkeydown = 'onKeyDown(this);';
    USSField.onkeypress = 'onKeyPress(this);';
    USSField.onclick = 'onClick(this);';
    USSField.listVal = '||A|A-ADD|M|M-MODIFY|I|I-INQURY|C|C-CANCEL|V|V-VERIFY';
    USSField.col = '0';
    USSField.maxCol = '1';
    USSField.help = 'N';
    USSField.helpLink = 'helpload';
    USSField.xml = 'Y';
    USSField.xmlname = '';
    USSField.Xpath = '$table';
    USSTableRow1 = us.CreateField(USSField, USSTableRow1);
    USSSession1.appendChild(USSTableRow1);

    USSField = new us.USSField_();
    USSField.group = 'USS';
    USSField.name = 'column1';
    USSField.label = 'Column1';
    USSField.task = 'NONE';
    USSField.desc = '';
    USSField.htmlType = 'TEXT';
    USSField.entitle = 'READONLY';
    USSField.enttlname = '255';
    USSField.editorRole = '255';
    USSField.mndf = 'N';
    USSField.dataType = 'VARCHAR';
    USSField.cclass = 'ctable';
    USSField.validate = '';
    USSField.parent = '';
    USSField.parentHtmlType = 'HEADER';
    USSField.dflt = '';
    USSField.min = '0';
    USSField.max = '60';
    USSField.tips = '';
    USSField.onkeyup = 'onKeyUp(this);';
    USSField.onchange = 'onChange(this);';
    USSField.onchange = 'onChange(this);';
    USSField.onkeydown = 'onKeyDown(this);';
    USSField.onkeypress = 'onKeyPress(this);';
    USSField.onclick = 'onClick(this);';
    USSField.listVal = '||A|A-ADD|M|M-MODIFY|I|I-INQURY|C|C-CANCEL|V|V-VERIFY';
    USSField.col = '0';
    USSField.maxCol = '1';
    USSField.help = 'N';
    USSField.helpLink = 'helpload';
    USSField.xml = 'Y';
    USSField.xmlname = '';
    USSField.Xpath = '/';
    USSTableRow1 = us.CreateField(USSField, USSTableRow1);


    USSField = new us.USSField_();
    USSField.group = 'USS';
    USSField.name = 'column2';
    USSField.label = 'Column2';
    USSField.task = 'NONE';
    USSField.desc = '';
    USSField.htmlType = 'TEXT';
    USSField.entitle = 'READONLY';
    USSField.enttlname = '255';
    USSField.editorRole = '255';
    USSField.mndf = 'N';
    USSField.dataType = 'VARCHAR';
    USSField.cclass = 'ctable';
    USSField.validate = '';
    USSField.parent = '';
    USSField.parentHtmlType = 'HEADER';
    USSField.dflt = '';
    USSField.min = '0';
    USSField.max = '60';
    USSField.tips = '';
    USSField.onkeyup = 'onKeyUp(this);';
    USSField.onchange = 'onChange(this);';
    USSField.onchange = 'onChange(this);';
    USSField.onkeydown = 'onKeyDown(this);';
    USSField.onkeypress = 'onKeyPress(this);';
    USSField.onclick = 'onClick(this);';
    USSField.listVal = '||A|A-ADD|M|M-MODIFY|I|I-INQURY|C|C-CANCEL|V|V-VERIFY';
    USSField.col = '1';
    USSField.maxCol = '1';
    USSField.help = 'N';
    USSField.helpLink = 'helpload';
    USSField.xml = 'Y';
    USSField.xmlname = '';
    USSField.Xpath = '/';
    USSTableRow1 = us.CreateField(USSField, USSTableRow1);
    USSSession1.appendChild(USSTableRow1);

    USSField = new us.USSField_();
    USSField.group = 'USS';
    USSField.name = 'column1';
    USSField.label = 'Column1';
    USSField.task = 'NONE';
    USSField.desc = '';
    USSField.htmlType = 'TEXT';
    USSField.entitle = 'READONLY';
    USSField.enttlname = '255';
    USSField.editorRole = '255';
    USSField.mndf = 'N';
    USSField.dataType = 'VARCHAR';
    USSField.cclass = 'ctable';
    USSField.validate = '';
    USSField.parent = 'table';
    USSField.parentHtmlType = 'TABLE';
    USSField.dflt = 'col1';
    USSField.min = '0';
    USSField.max = '60';
    USSField.tips = '';
    USSField.onkeyup = 'onKeyUp(this);';
    USSField.onchange = 'onChange(this);';
    USSField.onchange = 'onChange(this);';
    USSField.onkeydown = 'onKeyDown(this);';
    USSField.onkeypress = 'onKeyPress(this);';
    USSField.onclick = 'onClick(this);';
    USSField.listVal = '||A|A-ADD|M|M-MODIFY|I|I-INQURY|C|C-CANCEL|V|V-VERIFY';
    USSField.col = '2';
    USSField.maxCol = '1';
    USSField.help = 'N';
    USSField.helpLink = 'helpload';
    USSField.xml = 'Y';
    USSField.xmlname = '';
    USSField.Xpath = '/';
    USSTableRow1 = us.CreateField(USSField, USSTableRow1);
    USSSession1.appendChild(USSTableRow1);

    USSField = new us.USSField_();
    USSField.group = 'USS';
    USSField.name = 'column2';
    USSField.label = 'Column2';
    USSField.task = 'NONE';
    USSField.desc = '';
    USSField.htmlType = 'TEXT';
    USSField.entitle = 'READONLY';
    USSField.enttlname = '255';
    USSField.editorRole = '255';
    USSField.mndf = 'N';
    USSField.dataType = 'VARCHAR';
    USSField.cclass = 'ctable';
    USSField.validate = '';
    USSField.parent = 'table';
    USSField.parentHtmlType = 'TABLE';
    USSField.dflt = 'col2';
    USSField.min = '0';
    USSField.max = '60';
    USSField.tips = '';
    USSField.onkeyup = 'onKeyUp(this);';
    USSField.onchange = 'onChange(this);';
    USSField.onchange = 'onChange(this);';
    USSField.onkeydown = 'onKeyDown(this);';
    USSField.onkeypress = 'onKeyPress(this);';
    USSField.onclick = 'onClick(this);';
    USSField.listVal = '||A|A-ADD|M|M-MODIFY|I|I-INQURY|C|C-CANCEL|V|V-VERIFY';
    USSField.col = '3';
    USSField.maxCol = '1';
    USSField.help = 'N';
    USSField.helpLink = 'helpload';
    USSField.xml = 'Y';
    USSField.xmlname = '';
    USSField.Xpath = '/';
    USSTableRow1 = us.CreateField(USSField, USSTableRow1);
    USSSession1.appendChild(USSTableRow1);
    USSContainer1.appendChild(USSHeader1);
    USSContainer1.appendChild(USSSession1);
    USSSession0.appendChild(USSContainer1);
    USSContainer0.appendChild(USSHeader0);
    USSContainer0.appendChild(USSSession0); document.getElementById('middleid').appendChild(USSContainer0);
});