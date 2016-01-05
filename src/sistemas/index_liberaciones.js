/* LAB 
Formulario: https://docs.google.com/a/bbva.com/forms/d/15ni4yE2ZM1f3LnuulNT0Ju70fbfvBN0nE020Dd_ZI1Y/edit#
Respuestas: https://docs.google.com/spreadsheets/d/1ffUP24fddrOvGrE4SjAnFVvHaaC9t9XhtI5EyL9PlAM/edit#gid=818855330
Opciones: https://docs.google.com/spreadsheets/d/1ffUP24fddrOvGrE4SjAnFVvHaaC9t9XhtI5EyL9PlAM/edit#gid=374148063
https://docs.google.com/spreadsheets/d/1ffUP24fddrOvGrE4SjAnFVvHaaC9t9XhtI5EyL9PlAM/edit#gid=2045532491
var keysheet = "1ffUP24fddrOvGrE4SjAnFVvHaaC9t9XhtI5EyL9PlAM";
var keySheetGIDResp = "818855330";
var keySheetGIDOpt = "374148063";
var keySheetForm = "15ni4yE2ZM1f3LnuulNT0Ju70fbfvBN0nE020Dd_ZI1Y";
*/

/* QA 
Formulario: https://docs.google.com/a/bbva.com/forms/d/1iiWoKJC4ClhIubn4G36vJZxh0D17uanzCfzHw27g_ZM/edit#
Respuestas: https://docs.google.com/spreadsheets/d/1kjF-W-k2OLSGpDMXgSJDIv2gRSeVx8aUf-1o1X82A9w/edit#gid=1478430670
Opciones: https://docs.google.com/spreadsheets/d/1kjF-W-k2OLSGpDMXgSJDIv2gRSeVx8aUf-1o1X82A9w/edit#gid=374148063
https://docs.google.com/spreadsheets/d/1kjF-W-k2OLSGpDMXgSJDIv2gRSeVx8aUf-1o1X82A9w/edit#gid=1478430670 */
var keysheet = "1kjF-W-k2OLSGpDMXgSJDIv2gRSeVx8aUf-1o1X82A9w";
var keySheetGIDResp = "1478430670";
var keySheetGIDOpt = "374148063";
var keySheetForm = "1iiWoKJC4ClhIubn4G36vJZxh0D17uanzCfzHw27g_ZM";

/* PROD 
Formulario: https://docs.google.com/a/bbva.com/forms/d/1kCPOgOLcu1-2_bGfKjM1e47t-C_HoDIpN59zFPJmC58/edit#
Respuestas: https://docs.google.com/spreadsheets/d/1GfcOXHs56_oSGSoQlkYUgnwNLPRc7QkpzwLT9pwTJWQ/edit#gid=297742010
Opciones: https://docs.google.com/spreadsheets/d/1GfcOXHs56_oSGSoQlkYUgnwNLPRc7QkpzwLT9pwTJWQ/edit#gid=374148063
var keysheet = "1GfcOXHs56_oSGSoQlkYUgnwNLPRc7QkpzwLT9pwTJWQ";
var keySheetGIDResp = "297742010";
var keySheetGIDOpt = "374148063";
var keySheetForm = "1kCPOgOLcu1-2_bGfKjM1e47t-C_HoDIpN59zFPJmC58";
*/

var data, dataOpciones;
var msgError = ""
var column1 = 11;			//Numero de columna EN EL SPREADSHEET (No de Cambio)
var column2 = 5;			//Numero de columna EN EL SPREADSHEET (Lider promotor)
var column3 = 13;			//Numero de columna EN EL SPREADSHEET (Fecha Inicio instalacion)
var column4 = 7;			//Numero de columna EN EL SPREADSHEET (Nombre del cambio)
var column5 = 6;			//Numero de columna EN EL SPREADSHEET (Aplicacion)
var column6 = 24;			//Numero de columna EN EL SPREADSHEET (Tipo de plan)
var column7 = 25;			//Numero de columna EN EL SPREADSHEET (Tipo de proyecto)
var column8 = 23;			//Numero de columna EN EL SPREADSHEET (Fecha puesta en produccion)
var columnMes = 30;			//Numero de columna EN EL SPREADSHEET (Columna del mes)
var columnAnho = 29;		//Numero de columna EN EL SPREADSHEET (Columna del anho)
var columnPK = 11;			//Numero de columna EN EL SPREADSHEET (No de Cambio)
var column_extra = 10;		//Numero de columna EN EL SPREADSHEET

//  arrayVariables = 	0)Nombre de ID en HTML (archivo identificado por tener extensión XML)(este texto puede cambiar dependiendo del ID del control en el HTML)
//						1)Nombre de ID en HTML del formulario (este nombre debe ser el mismo que está definido dentro del HTML del formulario, cambia dependiendo del formulario en google)
//						2)Texto que aparecerá como mensaje en las validaciones
//						3)texto para identificar el tipo de dato (usado dentro de las validaciones)
//						4)Texto utilizado para identificar los controles (tanto origen y destino) que tendran el año y mes del procesamiento
//						5)Texto utilizado por este JS para identificar cada control en el array 'arrayVariables' (NUNCA CAMBIAR ESTE TEXTO)
var arrayVariables = [["nivl1Sistms","entry.525199900","Nivel 1 Sistemas","TEXTO","","NIVEL1SISTEMAS"],
					  ["nivl2Sistms","entry.1508970526","Nivel 2 Sistemas","TEXTO","","NIVEL2SISTEMAS"],
					  ["nivl3Sistms","entry.616136887","Nivel 3 Sistemas","TEXTO","","NIVEL3SISTEMAS"],
					  ["subdrctr","entry.1132274491","Subdirector","TEXTO","","SUBDIRECTOR"],
					  ["lidrPromtr","entry.1956820680","L\u00edder promotor","TEXTO","","LIDERPROMOTOR"],
					  ["aplccn","entry.1242859388","Aplicaci\u00f3n","TEXTO","","APLICACION"],
					  ["nombrCamb","entry.516981761","Nombre de Cambio","TEXTO","","NOMBRECAMBIO"],
					  ["objetivo","entry.1579382464","Objetivo","TEXTO","","OBJETIVO"],
					  ["platfrm","entry.855313895","Plataforma","TEXTO","","PLATAFORMA"],
					  ["tipoCamb","entry.1847083512","Tipo de Cambio","TEXTO","","TIPODECAMBIO"],
					  ["CRQ","entry.249180109","CRQ","ENTERO","","NUMERODECAMBIO"],
					  ["ventnCon","entry.425074740","Ventana de Congelamiento","TEXTO","","VENTANACONGELAMIENTO"],
					  ["fchIniInst01","entry.611655675_day","Fecha Inicio de Instalaci\u00f3n","FECHA","","FECHAINICIOINSTALACION"],
					  ["cdgPlnTrabj","entry.115995904","C\u00f3digo Plan de Trabajo","TEXTO","","CODIGOPLANTRABAJO"],
					  ["planTrbj","entry.758402360","Plan de Trabajo","TEXTO","","PLANTRABAJO"],
					  ["cdgEntrgbl","entry.1875396515","C\u00f3digo Entregable (IN)","TEXTO","","CODIGOENTREGABLE"],
					  ["servdr","entry.1580670647","Servidor","TEXTO","","SERVIDOR"],
					  ["prtcpntLdr","entry.2055894973","Participante o Lider","TEXTO","","PARTICIPANTELIDER"],
					  ["folioDyD","entry.1847130248","Folio DyD","TEXTO","","FOLIODYD"],
					  ["fchPlnTrbj01","entry.1303593104_day","Fecha Plan de Trabajo","FECHA","","FECHAFINPLANTRABAJO"],
					  ["instlcnFasd","entry.1665085289","Instalaci\u00f3n Faseada","TEXTO","","INSTALACIONFASEADA"],
					  ["FasActlProyct","entry.1308767878","Fase actual del Proyecto","TEXTO","","FASEACTUALPROYECTO"],
					  ["fchPstPrd01","entry.850554363_day","Fecha Puesta en Producci\u00f3n","FECHA","","FECHAPUESTAPRODUCCION"],
					  ["tipoPlan","entry.1231302035","Tipo de Plan","TEXTO","","TIPOPLAN"],
					  ["tipProyct","entry.1241056301","Tipo de Proyecto","TEXTO","","TIPOPROYECTO"],
					  ["comntrsFU","entry.2006234014","Comentarios a FU","TEXTO","","COMENTARIOSFU"],
					  ["numrCompnnts","entry.491907284","N\u00famero de Componentes","ENTERO","","NUMEROCOMPONENTES"],
					  ["comntrsDYD","entry.988835814","Comentarios a DyD","TEXTO","","COMENTARIOSDYD"],
					  ["fchIniInst02","entry.611655675_month","Mes de Fecha Inicio de Instalaci\u00f3n","TEXTO","FUENTEMESPROCS","FECHAINICIOINSTALACION_MES"],
					  ["fchIniInst03","entry.611655675_year","Anho de Fecha Inicio de Instalaci\u00f3n","TEXTO","FUENTEANHOPROCS","FECHAINICIOINSTALACION_ANHO"],
					  ["fchPlnTrbj02","entry.1303593104_month","Mes de Fecha Plan de Trabajo","TEXTO","","FECHAFINPLANTRABAJO_MES"],
					  ["fchPlnTrbj03","entry.1303593104_year","Anho de Fecha Plan de Trabajo","TEXTO","","FECHAFINPLANTRABAJO_ANHO"],
					  ["fchPstPrd02","entry.850554363_month","Mes de Fecha Puesta en Producci\u00f3n","TEXTO","","FECHAPUESTAPRODUCCION_MES"],
					  ["fchPstPrd03","entry.850554363_year","Anho de Fecha Puesta en Producci\u00f3n","TEXTO","","FECHAPUESTAPRODUCCION_ANHO"],
					  ["anhoProcs","entry.754688533","Anho","TEXTO","DESTINOANHOPROCS","PROCESAMIENTO_ANHO"],
					  ["mesProcs","entry.233918444","Mes","TEXTO","DESTINOMESPROCS","PROCESAMIENTO_MES"]]

var nmrCntrlArray00 = locCntrlIDEnArray("NIVEL1SISTEMAS")
var nmrCntrlArray01 = locCntrlIDEnArray("NIVEL2SISTEMAS")
var nmrCntrlArray02 = locCntrlIDEnArray("NIVEL3SISTEMAS")
var nmrCntrlArray021 = locCntrlIDEnArray("SUBDIRECTOR")
var nmrCntrlArray03 = locCntrlIDEnArray("LIDERPROMOTOR")
var nmrCntrlArray04 = locCntrlIDEnArray("APLICACION")
var nmrCntrlArray05 = locCntrlIDEnArray("NOMBRECAMBIO")
var nmrCntrlArray06 = locCntrlIDEnArray("OBJETIVO")
var nmrCntrlArray07 = locCntrlIDEnArray("PLATAFORMA")
var nmrCntrlArray08 = locCntrlIDEnArray("TIPODECAMBIO")
var nmrCntrlArray09 = locCntrlIDEnArray("NUMERODECAMBIO")
var nmrCntrlArray10 = locCntrlIDEnArray("VENTANACONGELAMIENTO")
var nmrCntrlArray11 = locCntrlIDEnArray("FECHAINICIOINSTALACION")
var nmrCntrlArray12 = locCntrlIDEnArray("FECHAINICIOINSTALACION_MES")
var nmrCntrlArray13 = locCntrlIDEnArray("FECHAINICIOINSTALACION_ANHO")
var nmrCntrlArray14 = locCntrlIDEnArray("CODIGOPLANTRABAJO")
var nmrCntrlArray15 = locCntrlIDEnArray("PLANTRABAJO")
var nmrCntrlArray151 = locCntrlIDEnArray("CODIGOENTREGABLE")
var nmrCntrlArray152 = locCntrlIDEnArray("SERVIDOR")
var nmrCntrlArray153 = locCntrlIDEnArray("PARTICIPANTELIDER")
var nmrCntrlArray154 = locCntrlIDEnArray("FOLIODYD")
var nmrCntrlArray16 = locCntrlIDEnArray("FECHAFINPLANTRABAJO")
var nmrCntrlArray17 = locCntrlIDEnArray("FECHAFINPLANTRABAJO_MES")
var nmrCntrlArray18 = locCntrlIDEnArray("FECHAFINPLANTRABAJO_ANHO")
var nmrCntrlArray181 = locCntrlIDEnArray("INSTALACIONFASEADA")
var nmrCntrlArray182 = locCntrlIDEnArray("FASEACTUALPROYECTO")
var nmrCntrlArray19 = locCntrlIDEnArray("FECHAPUESTAPRODUCCION")
var nmrCntrlArray20 = locCntrlIDEnArray("FECHAPUESTAPRODUCCION_MES")
var nmrCntrlArray21 = locCntrlIDEnArray("FECHAPUESTAPRODUCCION_ANHO")
var nmrCntrlArray22 = locCntrlIDEnArray("TIPOPLAN")
var nmrCntrlArray23 = locCntrlIDEnArray("TIPOPROYECTO")
var nmrCntrlArray24 = locCntrlIDEnArray("COMENTARIOSFU")
var nmrCntrlArray25 = locCntrlIDEnArray("NUMEROCOMPONENTES")
var nmrCntrlArray251 = locCntrlIDEnArray("COMENTARIOSDYD")

var monthNames = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ags", "Sep", "Oct", "Nov", "Dic"];
var anhoInicial = 2013
var anhoFinal = 2025

if(typeof String.prototype.trim !== 'function') {
  String.prototype.trim = function() {
	return this.replace(/^\s+|\s+$/g, ''); 
  }
}                        
google.load('visualization', '1.1', {packages: ['controls','table']});
google.setOnLoadCallback(draw);

function draw() {
	var query = new google.visualization.Query('https://docs.google.com/a/bbva.com/spreadsheet/ccc?key=' + keysheet + '&usp=drive_web#gid=' + keySheetGIDResp);
	//query.setQuery('select column, sum(column) group by column');
	query.send(handleQueryResponse);
	
	var queryOpciones = new google.visualization.Query('https://spreadsheets.google.com/a/bbva.com/tq?&tq=&key=' + keysheet + '&gid=' + keySheetGIDOpt);
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
									'useFormattedValue': 'true',
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

		var extra;
		
		var formatterFecha01 = new google.visualization.DateFormat({pattern: 'dd.LLLyyyy', timeZone: -6});
		formatterFecha01.format(data, column3); 
		formatterFecha01.format(data, column8); 
		
		for (var row = 0; row < data.getNumberOfRows(); row++) {
			data.setCell(row, column1, data.getValue(row, column1), data.getFormattedValue(row, column1), {'className': 'cell_style cell_width_60'});
			data.setCell(row, column2, data.getValue(row, column2), data.getFormattedValue(row, column2), {'className': 'cell_style cell_width_60'});
			data.setCell(row, column3, data.getValue(row, column3), data.getFormattedValue(row, column3), {'className': 'cell_style cell_width_60'});
			data.setCell(row, column4, data.getValue(row, column4), data.getFormattedValue(row, column4), {'className': 'cell_style cell_width_120'});
			data.setCell(row, column5, data.getValue(row, column5), data.getFormattedValue(row, column5), {'className': 'cell_style cell_width_60'});
			data.setCell(row, column6, data.getValue(row, column6), data.getFormattedValue(row, column6), {'className': 'cell_style cell_width_85'});
			data.setCell(row, column7, data.getValue(row, column7), data.getFormattedValue(row, column7), {'className': 'cell_style cell_width_60'});
			data.setCell(row, column8, data.getValue(row, column8), data.getFormattedValue(row, column8), {'className': 'cell_style cell_width_60'});    

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
		formatter_link.format(data, [column1, column2, column3, column4, column5, column6, column7, column8, columnMes, columnAnho]);
		
		var view = new google.visualization.DataView(data);
		view.setColumns([column1, column2, column3, column4, column5, column6, column7, column8, columnMes, columnAnho]);
		
		new google.visualization.Dashboard(document.getElementById('dashboard')).
						bind([category_filtro1, category_filtro2, category_filtro3, category_filtro4, category_filtro5], table).
						draw(view);

		google.visualization.events.addListener(table, 'ready',
				function(event) {
						$(".inline").colorbox({inline:true, width:"85%", height:"85%"});
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
		
		//$('a').click( function() { your_code_here; return false; } );
}

function locCntrlIDEnArray(nombrFijoCamp){
	var enctrd = false
	for(var varAct = 0; varAct < arrayVariables.length; varAct++){
		if(arrayVariables[varAct][5] == nombrFijoCamp){
			enctrd = true
			return varAct
		}
	}
	if(enctrd == false){
		alert('Error de configuraci\u00f3n: ' + nombrFijoCamp)
	}
}

function getDatosExtra(elemento) {
	try{
		data.setCell(0, 4, "valorPrueba")
		
		for (var row = 0; row < data.getNumberOfRows(); row++) {
			if (elemento.text == data.getValue(row, columnPK)) {
				var table = document.getElementById('consltRegstr');
				if (table.rows.length > 1) {
					deleteRow(table.id)
				}
				var elemntsTabl = [];
				for (var col = 1; col < data.getNumberOfColumns(); col++) {
					if(arrayVariables[col - 1][3] == "FECHA"){
						fechaAct = data.getValue(row, col)
						datoAct = formatoFecha(fechaAct)
					}else{
						datoAct = data.getValue(row, col)
					}
					if (col < data.getNumberOfColumns() - 6){
						elemntsTabl.push(datoAct);
					}
				}
				addRow(table.id, elemntsTabl)
			}
		}
	}catch(err){
		alert(err)
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
//dropDownId - Id del control dentro del codigo HTML
//NoColDatos - Corresponde al número de columna del spreadsheet de donde provienen los datos con los que el combo se va a llenar
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
			cntdrIni = anhoInicial
			cntdrFin = anhoFinal
			break
	}
	for(var contdr = cntdrFin; contdr >= cntdrIni; contdr--){
		var option = document.createElement('option');
		option.text = option.value = contdr;
		dropDownObj.add(option, 0);
	}
}

function llenarTodosContrls(){
	var fechaHoy = new Date();
	var diaAct = fechaHoy.getDate()
	var mesAct = fechaHoy.getMonth()
	var anhoAct = fechaHoy.getFullYear()
	var eleSelectListAnhos = anhoAct - anhoInicial

	//Nivel 1 Sistemas
	llenarDropDown(arrayVariables[nmrCntrlArray00][0], 0);
	SortOptions(arrayVariables[nmrCntrlArray00][0]);
	prepDrowDown(arrayVariables[nmrCntrlArray00][0], 0);
	
	//Nivel 2 Sistemas
	llenarDropDown(arrayVariables[nmrCntrlArray01][0], 1);
	SortOptions(arrayVariables[nmrCntrlArray01][0]);
	prepDrowDown(arrayVariables[nmrCntrlArray01][0], 0);
	
	//Nivel 3 Sistemas
	llenarDropDown(arrayVariables[nmrCntrlArray02][0], 2);
	SortOptions(arrayVariables[nmrCntrlArray02][0]);
	prepDrowDown(arrayVariables[nmrCntrlArray02][0], 0);
	
	//Subdirector
	llenarDropDown(arrayVariables[nmrCntrlArray021][0], 9);
	SortOptions(arrayVariables[nmrCntrlArray021][0]);
	prepDrowDown(arrayVariables[nmrCntrlArray021][0], 0);

	//Lider promotor
	llenarDropDown(arrayVariables[nmrCntrlArray03][0], 3);
	SortOptions(arrayVariables[nmrCntrlArray03][0]);
	prepDrowDown(arrayVariables[nmrCntrlArray03][0], 0);
	
	//Aplicacion
	llenarDropDown(arrayVariables[nmrCntrlArray04][0], 4);
	SortOptions(arrayVariables[nmrCntrlArray04][0]);
	prepDrowDown(arrayVariables[nmrCntrlArray04][0], 0);

	//Nombre de cambio
	limpiaControl(arrayVariables[nmrCntrlArray05][0]);
	
	//Objetivo
	limpiaControl(arrayVariables[nmrCntrlArray06][0]);
	
	//Plataforma
	llenarDropDown(arrayVariables[nmrCntrlArray07][0], 5);
	SortOptions(arrayVariables[nmrCntrlArray07][0]);
	prepDrowDown(arrayVariables[nmrCntrlArray07][0], 0);

	//Tipo de cambio
	llenarDropDown(arrayVariables[nmrCntrlArray08][0], 6);
	SortOptions(arrayVariables[nmrCntrlArray08][0]);
	prepDrowDown(arrayVariables[nmrCntrlArray08][0], 0);

	//No. de Cambio (CRQ)
	limpiaControl(arrayVariables[nmrCntrlArray09][0]);
	
	//Ventana de Congelamiento
	var ventnConRadioSi = document.getElementById("ventnConRadioSi")
	ventnConRadioSi.checked = true;
	insrtValr(ventnConRadioSi, "ventnCon")

	//Fecha de Inicio de Instalacion
	llenarDropDownFecha(arrayVariables[nmrCntrlArray11][0], 'DIAS');
	prepDrowDown(arrayVariables[nmrCntrlArray11][0], diaAct - 1)
	llenarDropDownFecha(arrayVariables[nmrCntrlArray12][0], 'MESES');
	prepDrowDown(arrayVariables[nmrCntrlArray12][0], mesAct)
	llenarDropDownFecha(arrayVariables[nmrCntrlArray13][0], 'ANHOS');
	prepDrowDown(arrayVariables[nmrCntrlArray13][0], eleSelectListAnhos)

	//Codigo plan de trabajo
	limpiaControl(arrayVariables[nmrCntrlArray14][0]);
	
	//Plan de trabajo
	limpiaControl(arrayVariables[nmrCntrlArray15][0]);

	//Codigo entregable
	limpiaControl(arrayVariables[nmrCntrlArray151][0]);
	
	//Servidor
	limpiaControl(arrayVariables[nmrCntrlArray152][0]);

	//Participante o lider
	llenarDropDown(arrayVariables[nmrCntrlArray153][0], 10);
	SortOptions(arrayVariables[nmrCntrlArray153][0]);
	prepDrowDown(arrayVariables[nmrCntrlArray153][0], 0);

	//Folio DyD
	limpiaControl(arrayVariables[nmrCntrlArray154][0]);

	//Fecha fin de Plan de Trabajo
	llenarDropDownFecha(arrayVariables[nmrCntrlArray16][0], 'DIAS');
	prepDrowDown(arrayVariables[nmrCntrlArray16][0], diaAct - 1)
	llenarDropDownFecha(arrayVariables[nmrCntrlArray17][0], 'MESES');
	prepDrowDown(arrayVariables[nmrCntrlArray17][0], mesAct)
	llenarDropDownFecha(arrayVariables[nmrCntrlArray18][0], 'ANHOS');
	prepDrowDown(arrayVariables[nmrCntrlArray18][0], eleSelectListAnhos)

	//Istalacion faseada
	var instlcnFasdRadioSi = document.getElementById("instlcnFasdRadioSi")
	instlcnFasdRadioSi.checked = true;
	insrtValr(instlcnFasdRadioSi, 'instlcnFasd')
	
	//Fase actual del proyecto
	llenarDropDown(arrayVariables[nmrCntrlArray182][0], 11);
	SortOptions(arrayVariables[nmrCntrlArray182][0]);
	prepDrowDown(arrayVariables[nmrCntrlArray182][0], 0);

	//Fecha Puesta en produccion
	llenarDropDownFecha(arrayVariables[nmrCntrlArray19][0], 'DIAS');
	prepDrowDown(arrayVariables[nmrCntrlArray19][0], diaAct - 1)
	llenarDropDownFecha(arrayVariables[nmrCntrlArray20][0], 'MESES');
	prepDrowDown(arrayVariables[nmrCntrlArray20][0], mesAct)
	llenarDropDownFecha(arrayVariables[nmrCntrlArray21][0], 'ANHOS');
	prepDrowDown(arrayVariables[nmrCntrlArray21][0], eleSelectListAnhos)

	//Tipo de plan
	llenarDropDown(arrayVariables[nmrCntrlArray22][0], 7);
	SortOptions(arrayVariables[nmrCntrlArray22][0]);
	prepDrowDown(arrayVariables[nmrCntrlArray22][0], 0);

	//Tipo de proyecto
	llenarDropDown(arrayVariables[nmrCntrlArray23][0], 8);
	SortOptions(arrayVariables[nmrCntrlArray23][0]);
	prepDrowDown(arrayVariables[nmrCntrlArray23][0], 0);

	//Comentarios a FU
	limpiaControl(arrayVariables[nmrCntrlArray24][0]);
	
	//Numero de componentes
	limpiaControl(arrayVariables[nmrCntrlArray25][0]);

	//Comentarios a DyD
	limpiaControl(arrayVariables[nmrCntrlArray251][0]);
}

function enviaDatosAForm(){
	var cdnSumbit = ""
	var cdnAct = ""
	var enviaDatos
	var cmpsVldcnNoVacio = [nmrCntrlArray00, nmrCntrlArray01, nmrCntrlArray02, nmrCntrlArray021, nmrCntrlArray03, nmrCntrlArray04, nmrCntrlArray05, 
							nmrCntrlArray06, nmrCntrlArray07, nmrCntrlArray08, nmrCntrlArray09, nmrCntrlArray14, nmrCntrlArray15, nmrCntrlArray151, 
							nmrCntrlArray152, nmrCntrlArray153, nmrCntrlArray154, nmrCntrlArray182, nmrCntrlArray22, nmrCntrlArray23, nmrCntrlArray24, 
							nmrCntrlArray25, nmrCntrlArray251]
	var cmpsVldcnFechaValida = [nmrCntrlArray11, nmrCntrlArray12, nmrCntrlArray13,
								nmrCntrlArray16, nmrCntrlArray17, nmrCntrlArray18,
								nmrCntrlArray19, nmrCntrlArray20, nmrCntrlArray21]
	var cmpsVldcnNumEntero = [nmrCntrlArray25]

	if(procValdcn(cmpsVldcnNoVacio, "NOVACIO") && procValdcn(cmpsVldcnFechaValida, "FECHAVALIDA") && procValdcn(cmpsVldcnNumEntero, "NUMEROENTERO")){
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
			abrirVentana(submitFinal)
			window.setTimeout(terminarProceso,2000)
		}else{
			alert('La configuracion de los campos es incorrecta. Porfavor verifiquela y vuelvalo a intentar.')
		}
	}
}

function terminarProceso(){
	cerrarVentana()
	location.reload(true)
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

function prepDrowDown(dropDownId, NoElemento) {
	var dropDownObj = document.getElementById(dropDownId);
	if(NoElemento < 2000){
		dropDownObj.selectedIndex = NoElemento
	}else{
		dropDownObj.selectedIndex = 3
	}
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

function insrtValr(objRadio, nmbrObj){
	var objTextoDestino = document.getElementById(nmbrObj)
	objTextoDestino.value = objRadio.value
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

function abrirVentana(submitFinal){
	ventana_secundaria = window.open(submitFinal,"miventana","width=500,height=600,menubar=no")
}

function cerrarVentana(){
	ventana_secundaria.close()
} 

function procSubmit(strProceso){
	var strSubmit = ''
	if(strProceso == 'EDICION'){
		strSubmit = 'https://docs.google.com/a/bbva.com/spreadsheet/ccc?key=' + keysheet + '&usp=drive_web#gid=' + keySheetGIDResp
	}else if(strProceso == 'DESCARGA'){
		strSubmit = 'https://docs.google.com/a/bbva.com/spreadsheet/fm?key=' + keysheet + '&fmcmd=420'
	}
	location.href = strSubmit
}

function add_text(message) {

    //url = 'https://spreadsheets.google.com/feeds/cells/' + keysheet + '/default/private/basic/R2C4?access_token=' + token;
	url = 'https://spreadsheets.google.com/feeds/cells/' + keysheet + '/default/private/basic/R2C4'

    function constructAtomXML(message){
        var atom = ["<?xml version='1.0' encoding='UTF-8'?>",
            '<entry xmlns="http://www.w3.org/2005/Atom" xmlns:gs="http://schemas.google.com/spreadsheets/2006">',
            '<id>https://spreadsheets.google.com/feeds/cells/key/private/basic/R2C4</id>',
            '<link rel="edit" type="application/atom+xml" href="https://spreadsheets.google.com/feeds/cells/key/default/private/basic/R2C4"/>',
            '<gs:cell row="2" col="4" inputValue="' + message + '"/>',
            '</entry>'].join('');
        return atom;
    };

    var params = constructAtomXML(message);

    var z = new XMLHttpRequest();
    z.open("PUT", url);
    z.setRequestHeader("Content-type", "application/atom+xml");
    z.setRequestHeader("GData-Version", "3.0");
    z.setRequestHeader("Authorization", "GoogleLogin");
    z.setRequestHeader("If-Match", "*");
    z.send(params);

}
