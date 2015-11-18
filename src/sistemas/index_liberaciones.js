var data, dataOpciones;
var msgError = ""
var column1 = 1;
var column2 = 2;
var column3 = 3;
var column4 = 4;
var column5 = 5;
var column6 = 6;
var column7 = 7;
var column8 = 8;
var columnMes = 23;
var columnAnho = 22;
var column10 = 10;
var column15 = 15;
var column_extra = 9;
/* LAB 


Formulario: https://docs.google.com/a/bbva.com/forms/d/15ni4yE2ZM1f3LnuulNT0Ju70fbfvBN0nE020Dd_ZI1Y/edit#
Respuestas: https://docs.google.com/spreadsheets/d/1ffUP24fddrOvGrE4SjAnFVvHaaC9t9XhtI5EyL9PlAM/edit#gid=818855330

https://docs.google.com/spreadsheets/d/1ffUP24fddrOvGrE4SjAnFVvHaaC9t9XhtI5EyL9PlAM/edit#gid=2045532491

var keysheet = "1ffUP24fddrOvGrE4SjAnFVvHaaC9t9XhtI5EyL9PlAM"
var keySheetForm = "15ni4yE2ZM1f3LnuulNT0Ju70fbfvBN0nE020Dd_ZI1Y"
*/

/* QA 

Formulario: https://docs.google.com/a/bbva.com/forms/d/1iiWoKJC4ClhIubn4G36vJZxh0D17uanzCfzHw27g_ZM/edit#
Respuestas: https://docs.google.com/spreadsheets/d/1kjF-W-k2OLSGpDMXgSJDIv2gRSeVx8aUf-1o1X82A9w/edit#gid=1478430670

https://docs.google.com/spreadsheets/d/1kjF-W-k2OLSGpDMXgSJDIv2gRSeVx8aUf-1o1X82A9w/edit#gid=2045532491 
*/
var keysheet = "1kjF-W-k2OLSGpDMXgSJDIv2gRSeVx8aUf-1o1X82A9w"
var keySheetForm = "1iiWoKJC4ClhIubn4G36vJZxh0D17uanzCfzHw27g_ZM"

/* PROD 
https://docs.google.com/spreadsheets/d/1GfcOXHs56_oSGSoQlkYUgnwNLPRc7QkpzwLT9pwTJWQ/edit#gid=2045532491

Formulario: https://docs.google.com/a/bbva.com/forms/d/1kCPOgOLcu1-2_bGfKjM1e47t-C_HoDIpN59zFPJmC58/edit#
Respuestas: https://docs.google.com/spreadsheets/d/1GfcOXHs56_oSGSoQlkYUgnwNLPRc7QkpzwLT9pwTJWQ/edit#gid=297742010

var keysheet = "1GfcOXHs56_oSGSoQlkYUgnwNLPRc7QkpzwLT9pwTJWQ"
var keySheetForm = "1kCPOgOLcu1-2_bGfKjM1e47t-C_HoDIpN59zFPJmC58"
*/

var arrayVariables = [["nivl1Sistms","entry.525199900","Nivel 1 Sistemas","TEXTO",""],
					  ["nivl2Sistms","entry.1508970526","Nivel 2 Sistemas","TEXTO",""],
					  ["nivl3Sistms","entry.616136887","Nivel 3 Sistemas","TEXTO",""],
					  ["lidrPromtr","entry.1956820680","L\u00edder promotor","TEXTO",""],
					  ["aplccn","entry.1242859388","Aplicaci\u00f3n","TEXTO",""],
					  ["nombrCamb","entry.516981761","Nombre de Cambio","TEXTO",""],
					  ["objetivo","entry.1579382464","Objetivo","TEXTO",""],
					  ["platfrm","entry.855313895","Plataforma","TEXTO",""],
					  ["tipoCamb","entry.1847083512","Tipo de Cambio","TEXTO",""],
					  ["CRQ","entry.249180109","CRQ","ENTERO",""],
					  ["ventnCon","entry.425074740","Ventana de Congelamiento","TEXTO",""],
					  ["fchIniInst01","entry.611655675_day","Fecha Inicio de Instalaci\u00f3n","FECHA",""],
					  ["cdgPlnTrabj","entry.115995904","C\u00f3digo Plan de Trabajo","TEXTO",""],
					  ["planTrbj","entry.758402360","Plan de Trabajo","TEXTO",""],
					  ["fchPlnTrbj01","entry.1303593104_day","Fecha Final Plan de Trabajo","FECHA",""],
					  ["fchPstPrd01","entry.850554363_day","Fecha Puesta en Producci\u00f3n","FECHA",""],
					  ["tipoPlan","entry.1231302035","Tipo de Plan","TEXTO",""],
					  ["tipProyct","entry.1241056301","Tipo de Proyecto","TEXTO",""],
					  ["comntrsFU","entry.2006234014","Comentarios a FU","TEXTO",""],
					  ["numrCompnnts","entry.491907284","N\u00famero de Componentes","ENTERO",""],
					  ["fchIniInst02","entry.611655675_month","Mes de Fecha Inicio de Instalaci\u00f3n","TEXTO","FUENTEMESPROCS"],
					  ["fchIniInst03","entry.611655675_year","Anho de Fecha Inicio de Instalaci\u00f3n","TEXTO","FUENTEANHOPROCS"],
					  ["fchPlnTrbj02","entry.1303593104_month","Mes de Fecha Plan de Trabajo","TEXTO",""],
					  ["fchPlnTrbj03","entry.1303593104_year","Anho de Fecha Plan de Trabajo","TEXTO",""],
					  ["fchPstPrd02","entry.850554363_month","Mes de Fecha Puesta en Producci\u00f3n","TEXTO",""],
					  ["fchPstPrd03","entry.850554363_year","Anho de Fecha Puesta en Producci\u00f3n","TEXTO",""],
					  ["anhoProcs","entry.754688533","Anho","TEXTO","DESTINOANHOPROCS"],
					  ["mesProcs","entry.233918444","Mes","TEXTO","DESTINOMESPROCS"]]
var monthNames = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ags", "Sep", "Oct", "Nov", "Dic"];


if(typeof String.prototype.trim !== 'function') {
  String.prototype.trim = function() {
	return this.replace(/^\s+|\s+$/g, ''); 
  }
}                        
google.load('visualization', '1.1', {packages: ['controls','table']});
google.setOnLoadCallback(draw);

function draw() {
	
	/* QA
	https://drive.google.com/open?id=1kjF-W-k2OLSGpDMXgSJDIv2gRSeVx8aUf-1o1X82A9w
	*/
	
	var query = new google.visualization.Query('https://docs.google.com/a/bbva.com/spreadsheet/ccc?key=' + keysheet + '&usp=drive_web#gid=0');
	query.send(handleQueryResponse);
	
	var queryOpciones = new google.visualization.Query('https://spreadsheets.google.com/a/bbva.com/tq?&tq=&key=' + keysheet + '&gid=374148063');
	queryOpciones.send(handleQueryResponseOpciones);
}

function handleQueryResponseOpciones(responseOpciones) {
	if (responseOpciones.isError()) {
		alert('Error in query: ' + responseOpciones.getMessage() + ' ' + responseOpciones.getDetailedMessage());
		return;
	}
	dataOpciones = responseOpciones.getDataTable();
}

function handleQueryResponse(response) {
		if (response.isError()) {
			alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
			return;
		}
		data = response.getDataTable();
									   
		var category_filtro1 = new google.visualization.ControlWrapper({
								'controlType': 'CategoryFilter',
								'containerId': 'filtro1',
								'options': {
									'filterColumnIndex': '0',
									'ui': {
										'labelSeparator' : '',
										'label' : '',
										'caption' : 'Selecciona',
										'allowMultiple': true,
										'allowTyping': false,
										'selectedValuesLayout': 'aside'
									}
								}
							});
		
		var category_filtro2 = new google.visualization.ControlWrapper({
								'controlType': 'CategoryFilter',
								'containerId': 'filtro2',
								'options': {
									'filterColumnIndex': '1',
									'ui': {
										'labelSeparator' : '',
										'label' : '',
										'caption' : 'Selecciona',
										'allowMultiple': true,
										'allowTyping': false,
										'selectedValuesLayout': 'aside'
									}
								}
							});
		
		var category_filtro3 = new google.visualization.ControlWrapper({
								'controlType': 'CategoryFilter',
								'containerId': 'filtro3',
								'options': {
									'filterColumnIndex': '2',
									'ui': {
										'labelSeparator' : '',
										'label' : '',
										'caption' : 'Selecciona',
										'allowMultiple': true,
										'allowTyping': false,
										'selectedValuesLayout': 'aside'
									}
								}
							});
		
		var category_filtro4 = new google.visualization.ControlWrapper({
								'controlType': 'CategoryFilter',
								'containerId': 'filtro4',
								'options': {
									'filterColumnIndex': '8',
									'ui': {
										'labelSeparator' : '',
										'label' : '',
										'caption' : 'Selecciona',
										'allowMultiple': true,
										'allowTyping': false,
										'selectedValuesLayout': 'aside'
									}
								}
							});

		var category_filtro5 = new google.visualization.ControlWrapper({
								'controlType': 'CategoryFilter',
								'containerId': 'filtro5',
								'options': {
									'filterColumnIndex': '9',
									'ui': {
										'labelSeparator' : '',
										'label' : '',
										'caption' : 'Selecciona',
										'allowMultiple': true,
										'allowTyping': false,
										'selectedValuesLayout': 'aside'
									}
								}
							});

		var cssClassNames = {
			'headerRow': 'header_hide_style',
			'tableCell': 'cell_style'
		};
		
		var options = {'allowHtml': true, 'cssClassNames': cssClassNames, 'sort': 'disable', 'height': '100%', 'width': '100%'};
		
		var table = new google.visualization.ChartWrapper({
						'chartType': 'Table',
						'containerId': 'table',
						'options': options
						});

		var formatter_fecha_reporte = new google.visualization.DateFormat({pattern: 'dd.LLLyy'});
		formatter_fecha_reporte.format(data, 4);
		var formatter_fecha_compromiso = new google.visualization.DateFormat({pattern: 'dd.LLLyy'});
		formatter_fecha_compromiso.format(data, 5);
		
		
		var extra;
		for (var row = 0; row < data.getNumberOfRows(); row++) {
			data.setCell(row, column1, data.getValue(row, column1), data.getFormattedValue(row, column1), {'className': 'cell_style_justify'});
			data.setCell(row, column2, data.getValue(row, column2), data.getFormattedValue(row, column2), {'className': 'cell_style cell_width_120'});
			data.setCell(row, column3, data.getValue(row, column3), data.getFormattedValue(row, column3), {'className': 'cell_style cell_width_120'});
			data.setCell(row, column4, data.getValue(row, column4), data.getFormattedValue(row, column4), {'className': 'cell_style cell_width_85'});
			data.setCell(row, column5, data.getValue(row, column5), data.getFormattedValue(row, column5), {'className': 'cell_style cell_width_60'});
			data.setCell(row, column6, data.getValue(row, column6), data.getFormattedValue(row, column6), {'className': 'cell_style cell_width_85'});
			data.setCell(row, column7, data.getValue(row, column7), data.getFormattedValue(row, column7), {'className': 'cell_style_justify'});
			data.setCell(row, column8, data.getValue(row, column8), data.getFormattedValue(row, column8), {'className': 'cell_style cell_width_100'});                                                                        
			data.setCell(row, columnMes, data.getValue(row, columnMes), data.getFormattedValue(row, columnMes), {'className': 'cell_style cell_width_60'});
			data.setCell(row, columnAnho, data.getValue(row, columnAnho), data.getFormattedValue(row, columnAnho), {'className': 'cell_style cell_width_60'});                                                                        

			extra = data.getValue(row, column_extra);
			extra = extra.split('>').join('&#62');
			extra = extra.split('<').join('&#60');
			extra = extra.split('"').join('&#34');
			data.setCell(row, column_extra, extra, extra, {'className': ''});
		}
		
		var hrefIframe = "https://docs.google.com/a/bbva.com/spreadsheet/ccc?key=" + keysheet + "&usp=drive_web"
		
		var formatter_link = new google.visualization.PatternFormat('<a class="inline" href="#inline_content" onclick="getDatosExtra(this);">{0}</a><div class="iframe" style="display:none"></div>');
		formatter_link.format(data, [10, 4, 12, 6, 5, 17, 18, 16, 23, 22]);
		
		var view = new google.visualization.DataView(data);
		view.setColumns([10, 4, 12, 6, 5, 17, 18, 16, 23, 22]);
		
		new google.visualization.Dashboard(document.getElementById('dashboard')).
						bind([category_filtro1, category_filtro2, category_filtro3, category_filtro4, category_filtro5], table).
						draw(view);

		google.visualization.events.addListener(table, 'ready',
				function(event) {
						$(".inline").colorbox({inline:true, width:"90%", height:"90%"});
						$('#contenido_tabla').perfectScrollbar({
							wheelSpeed: 20,
							wheelPropagation: false
						});
						
						$("#table table tbody tr:last-child td").each(function(index){
							if ($("#w"+(index+1)).val() > $(this).width()) {
								$(this).width($("#w"+(index+1)).val());
								$("#h"+(index+1)).width($("#w"+(index+1)).val());
							} else {
								$("#h"+(index+1)).width($(this).width());
							}

						});
						$("#table table tbody tr:last-child td").each(function(index){
							$("#h"+(index+1)).width($(this).width());
						});
						
						
		});
}

function getDatosExtra(elemento) {
	for (var row = 0; row < data.getNumberOfRows(); row++) {
		if (elemento.text == data.getValue(row, column10)) {
			var table = document.getElementById('consltRegstr');
			if (table.rows.length > 1) {
				deleteRow(table.id)
			}
			var elemntsTabl = [];
			for (var col = 1; col < data.getNumberOfColumns() - 1; col++) {
				if(arrayVariables[col - 1][3] == "FECHA"){
					fechaAct = data.getValue(row, col)
					datoAct = formatoFecha(fechaAct)
				}else{
					datoAct = data.getValue(row, col)
				}
				if (col < data.getNumberOfColumns() - 4){
					elemntsTabl.push(datoAct);
				}
			}
			addRow(table.id, elemntsTabl)
		}
	}
}

function seleccionar(el) {
	var body = document.body, range, sel;
	if (document.createRange && window.getSelection) {
		range = document.createRange();
		sel = window.getSelection();
		sel.removeAllRanges();
		try {
			range.selectNodeContents(el);
			sel.addRange(range);
			range.execCommand('copy');
		} catch (e) {
			range.selectNode(el);
			sel.addRange(range);
		}
	} else if (body.createTextRange) {
		range = body.createTextRange();
		range.moveToElementText(el);
		range.select();
	}
}

function cambia_detalle() {
	$(".inline").each(function(index, elemento){
		if ($('#chk_editar').prop('checked')) {
			$(".iframe").show();
			$(".inline").hide();
			//$.colorbox.remove();
		} else {
			$(".inline").show();
			$(".iframe").hide();
			//$(".inline").colorbox({iframe:true, width:"100%", height:"95%"});
		}
	});
}

function addRow(tableID, arrayEtiqts) {
	var table = document.getElementById(tableID);
	var rowCount = table.rows.length;
	var row = table.insertRow(rowCount);
	for(var cellAct=0; cellAct < arrayEtiqts.length; cellAct++){
		var cell = row.insertCell(cellAct);
		cell.innerHTML = arrayEtiqts[cellAct];
		cell.className = "cell_style"
	}
}

function deleteRow(tableID) {
	try {
		var table = document.getElementById(tableID);
		while (table.rows.length > 1){
			lastRow = table.rows.length - 1
			table.deleteRow(lastRow);
		}
	}catch(e) {
		alert(e);
	}
}

function llenarDropDown(dropDownId, NoColDatos) {
	var row = 1
	var strDatosAct = ''
	var vacioFlg = false
	var dropDownObj = document.getElementById(dropDownId);
	removeOptions(dropDownObj);
	while(vacioFlg == false && row < dataOpciones.getNumberOfRows()){
		strDatosAct = dataOpciones.getValue(row, NoColDatos)
		if(strDatosAct==null) strDatosAct = ''
		if(strDatosAct.trim().length == 0){
			vacioFlg = true
		}else{
			var option = document.createElement('option');
			option.text = option.value = strDatosAct;
			dropDownObj.add(option, 0);
			row++
		}
	}
	var option = document.createElement('option');
	option.text = 'Elija una opci\u00f3n'
	option.value = '';
	dropDownObj.add(option, 0);
}

function llenarDropDownFecha(dropDownId, opcionFecha) {
	var cntdrIni = 0
	var cntdrFin = 0
	var prmrElmnt = ""
	var dropDownObj = document.getElementById(dropDownId);
	removeOptions(dropDownObj);
	switch(opcionFecha){
		case 'DIAS':
			cntdrIni = 1
			cntdrFin = 31
			break
		case 'MESES':
			cntdrIni = 1
			cntdrFin = 12
			break
		case 'ANHOS':
			cntdrIni = 2013
			cntdrFin = 2025
			break
	}
	for(var contdr = cntdrFin; contdr >= cntdrIni; contdr--){
		var option = document.createElement('option');
		option.text = option.value = contdr;
		dropDownObj.add(option, 0);
	}
}

function llenarTodosContrls(){
	//Nivel 1 Sistemas
	llenarDropDown(arrayVariables[0][0], 0);
	SortOptions(arrayVariables[0][0]);
	prepDrowDown(arrayVariables[0][0]);
	
	//Nivel 2 Sistemas
	llenarDropDown(arrayVariables[1][0], 1);
	SortOptions(arrayVariables[1][0]);
	prepDrowDown(arrayVariables[1][0]);
	
	//Nivel 3 Sistemas
	llenarDropDown(arrayVariables[2][0], 2);
	SortOptions(arrayVariables[2][0]);
	prepDrowDown(arrayVariables[2][0]);
	
	//Lider promotor
	llenarDropDown(arrayVariables[3][0], 3);
	SortOptions(arrayVariables[3][0]);
	prepDrowDown(arrayVariables[3][0]);
	
	//Aplicacion
	llenarDropDown(arrayVariables[4][0], 4);
	SortOptions(arrayVariables[4][0]);
	prepDrowDown(arrayVariables[4][0]);

	limpiaControl(arrayVariables[5][0]);
	limpiaControl(arrayVariables[6][0]);
	
	//Plataforma
	llenarDropDown(arrayVariables[7][0], 5);
	SortOptions(arrayVariables[7][0]);
	prepDrowDown(arrayVariables[7][0]);

	//Tipo de cambio
	llenarDropDown(arrayVariables[8][0], 6);
	SortOptions(arrayVariables[8][0]);
	prepDrowDown(arrayVariables[8][0]);

	//No. de Cambio (CRQ)
	limpiaControl(arrayVariables[9][0]);
	
	//Ventana de Congelamiento
	ventnConRadioSi = document.getElementById("ventnConRadioSi")
	ventnConRadioSi.checked = true;
	insrtValr(ventnConRadioSi)

	//Fecha de Inicio de Instalacion
	llenarDropDownFecha(arrayVariables[11][0], 'DIAS');
	prepDrowDown(arrayVariables[11][0])
	llenarDropDownFecha(arrayVariables[20][0], 'MESES');
	prepDrowDown(arrayVariables[20][0])
	llenarDropDownFecha(arrayVariables[21][0], 'ANHOS');
	prepDrowDown(arrayVariables[21][0])

	//Codigo plan de trabajo
	limpiaControl(arrayVariables[12][0]);
	
	//Plan de trabajo
	limpiaControl(arrayVariables[13][0]);

	//Fecha fin de Plan de Trabajo
	llenarDropDownFecha(arrayVariables[14][0], 'DIAS');
	prepDrowDown(arrayVariables[14][0])
	llenarDropDownFecha(arrayVariables[22][0], 'MESES');
	prepDrowDown(arrayVariables[22][0])
	llenarDropDownFecha(arrayVariables[23][0], 'ANHOS');
	prepDrowDown(arrayVariables[23][0])

	//Fecha Puesta en produccion
	llenarDropDownFecha(arrayVariables[15][0], 'DIAS');
	prepDrowDown(arrayVariables[15][0])
	llenarDropDownFecha(arrayVariables[24][0], 'MESES');
	prepDrowDown(arrayVariables[24][0])
	llenarDropDownFecha(arrayVariables[25][0], 'ANHOS');
	prepDrowDown(arrayVariables[25][0])

	//Tipo de plan
	llenarDropDown(arrayVariables[16][0], 7);
	SortOptions(arrayVariables[16][0]);
	prepDrowDown(arrayVariables[16][0]);

	//Tipo de proyecto
	llenarDropDown(arrayVariables[17][0], 8);
	SortOptions(arrayVariables[17][0]);
	prepDrowDown(arrayVariables[17][0]);

	//Comentarios a FU
	limpiaControl(arrayVariables[18][0]);
	
	//Numero de componentes
	limpiaControl(arrayVariables[19][0]);
}

function enviaDatosAForm(){
	var cdnSumbit = ""
	var cdnAct = ""
	var enviaDatos
	if(procValdcn([0,1,2,3,4,5,6,7,8,9,10,12,13,16,17,18,19], "NOVACIO") && procValdcn([11,20,21,14,22,23,15,24,25], "FECHAVALIDA") && procValdcn([9,19], "NUMEROENTERO")){
		enviaDatos = true
	}
	if(enviaDatos){
		if(obtenMesAnhoProcs()){
			for(var varAct = 0; varAct < arrayVariables.length; varAct++){
				var objtAct = document.getElementById(arrayVariables[varAct][0])
				if(objtAct != null){
					if(objtAct.value.trim().length > 0){
						cdnAct = objtAct.value
					}else{
						cdnAct = ""
					}
					cdnSumbit = cdnSumbit + arrayVariables[varAct][1] + "=" + cdnAct
					if(varAct < arrayVariables.length - 1){
						cdnSumbit = cdnSumbit + "&"
					}
				}
			}
			submitFinal = 'https://docs.google.com/a/bbva.com/forms/d/' + keySheetForm + '/formResponse?ifq&' + cdnSumbit + '&submit=Submit&hl=es'
			window.open(submitFinal, "_self")
		}else{
			alert('La configuracion de los campos es incorrecta. Porfavor verifiquela y vuelvalo a intentar.')
		}
	}
}

function procValdcn(arrayCntrls, procValdccn){
	msgError = ""
	var bandrValdcn = true
	var objtAct
	var diaCamp = ""
	var mesCamp = ""
	var anhoCamp = ""
	for(var eleAct = 0; eleAct <= arrayCntrls.length - 1; eleAct++){
		if(procValdccn == 'FECHAVALIDA'){
			objtAct = document.getElementById(arrayVariables[arrayCntrls[eleAct]][0])
			if(objtAct != null){
				if(eleAct==0 || eleAct==3 || eleAct==6 || eleAct==9 || eleAct==12 || eleAct==15){
					//Dia
					nombrCamp = arrayVariables[arrayCntrls[eleAct]][2]
					diaCamp = objtAct.value
				}else if(eleAct==1 || eleAct==4 || eleAct==7 || eleAct==10 || eleAct==13 || eleAct==16){
					//Mes
					mesCamp = objtAct.value
				}else if(eleAct==2 || eleAct==5 || eleAct==8 || eleAct==11 || eleAct==12 || eleAct==17){
					//Anho
					anhoCamp = objtAct.value
				}
			}
			if(anhoCamp != ''){
				if(!existeFecha(diaCamp + "/" + mesCamp + "/" + anhoCamp)){
					msgError += "La fecha '" + nombrCamp + "' no es v\u00e1lida. \n"
					bandrValdcn = false
				}
				nombrCamp = ""
				diaCamp = ""
				mesCamp = ""
				anhoCamp = ""
			}
		}else{
			objtAct = document.getElementById(arrayVariables[arrayCntrls[eleAct]][0])
			if(objtAct != null){
				if(procValdccn == 'NOVACIO'){
					if(objtAct.value == ''){
						msgError += "El campo '" + arrayVariables[arrayCntrls[eleAct]][2] + "' no puede estar vac\u00edo. \n"
						bandrValdcn = false
					}
				}else if(procValdccn == 'NUMEROENTERO'){
					if(!esEntero(objtAct.value)){
						msgError += "El campo '" + arrayVariables[arrayCntrls[eleAct]][2] + "' debe ser un n\u00famero entero. \n"
						bandrValdcn = false
					}
				}
			}
		}
	}
	if(!bandrValdcn || msgError != ''){
		alert(msgError)
	}
	return bandrValdcn
}

function SortOptions(id) {
    var prePrepend = "#";
    if (id.match("^#") == "#") prePrepend = "";
    $(prePrepend + id).html($(prePrepend + id + " option").sort(
        function (a, b) { return a.value == b.value ? 0 : a.value < b.value ? -1 : 1 })
    );
}

function prepDrowDown(dropDownId) {
	var dropDownObj = document.getElementById(dropDownId);
	dropDownObj.selectedIndex = 0
}

function limpiaControl(objId){
	var objct = document.getElementById(objId)
	if(objct != null){
		objct.value = ''
	}
}

function removeOptions(selectbox) {
    var i;
    for(i=selectbox.options.length-1; i>=0; i--) {
        selectbox.remove(i);
    }
}

function existeFecha(fecha){
	var fechaf = fecha.split("/");
	var day = fechaf[0];
	var month = fechaf[1];
	var year = fechaf[2];
	var date = new Date(year,month,'0');
	if((day-0) > (date.getDate()-0)){
		return false;
	}
	return true;
}

function formatoFecha(dato){
	var date = new Date(dato);
	var day = date.getDate();
	var monthIndex = date.getMonth();
	var year = date.getFullYear();

	return (day + '/' + monthNames[monthIndex] + '/' + year);
}

function insrtValr(objRadio){
	ventnCon = document.getElementById(arrayVariables[10][0])
	ventnCon.value = objRadio.value
}

function esEntero(numero){
    if (numero - Math.floor(numero) == 0) {
        return true
    }
    else{
        return false
    }
}

function obtenMesAnhoProcs(){
	for(var varAct = 0; varAct < arrayVariables.length; varAct++){
		if(arrayVariables[varAct][4] == 'FUENTEANHOPROCS') var objtFUENTEANHOPROCS = document.getElementById(arrayVariables[varAct][0])
		if(arrayVariables[varAct][4] == 'FUENTEMESPROCS') var objtFUENTEMESPROCS = document.getElementById(arrayVariables[varAct][0])
		if(arrayVariables[varAct][4] == 'DESTINOANHOPROCS') var objtDESTINOANHOPROCS = document.getElementById(arrayVariables[varAct][0])
		if(arrayVariables[varAct][4] == 'DESTINOMESPROCS') var objtDESTINOMESPROCS = document.getElementById(arrayVariables[varAct][0])
	}
	if(objtFUENTEANHOPROCS != null && objtFUENTEMESPROCS != null && objtDESTINOANHOPROCS != null && objtDESTINOMESPROCS != null){
		objtDESTINOANHOPROCS.value = objtFUENTEANHOPROCS.value
		objtDESTINOMESPROCS.value = monthNames[objtFUENTEMESPROCS.value - 1]
		return true
	}else{
		return false
	}
}
