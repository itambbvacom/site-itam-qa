if(typeof String.prototype.trim !== 'function') {
  String.prototype.trim = function() {
	return this.replace(/^\s+|\s+$/g, ''); 
  }
}                        
google.load('visualization', '1.1', {packages: ['controls','table']});
google.setOnLoadCallback(draw);

function draw() {
	var query = new google.visualization.Query('https://docs.google.com/a/bbva.com/spreadsheet/ccc?key=1sF34PZhGuULMgmYq_ct1ARQWOr6Nq3sXh-YN9Am0l0s&usp=drive_web#gid=0');
	query.send(handleQueryResponse);
}

function handleQueryResponse(response) {
		if (response.isError()) {
			alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
			return;
		}
		var data = response.getDataTable();
									   
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
									'filterColumnIndex': '3',
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

		//var formatter_link = new google.visualization.PatternFormat('<a class="inline" href="#inline_content" onclick="getComentario(this);"><input type="hidden" value="{8}"/>{0}</a>');
		//formatter_link.format(data, [0, 1, 2, 3, 4, 5, 6, 7, 8]);
		
		var formatter_fecha_reporte = new google.visualization.DateFormat({pattern: 'dd.LLLyy'});
		formatter_fecha_reporte.format(data, 3);
		var formatter_fecha_compromiso = new google.visualization.DateFormat({pattern: 'dd.LLLyy'});
		formatter_fecha_compromiso.format(data, 5);
		
		var column_nivel1 = 0;
		var column_nivel2 = 1;
		var column_nivel3 = 2;
		var column_subdirector = 3;
		var column_lider = 4;
		var column_aplicacion = 5;
		var column_nombreCambio = 6;
		var column_Objetivo = 7;
		var column_plataforma = 8;
		var plataforma;
		for (var row = 0; row < data.getNumberOfRows(); row++) {
			data.setCell(row, column_nivel1, data.getValue(row, column_nivel1), data.getFormattedValue(row, column_nivel1), {'className': 'cell_left_style cell_width_100'});
			data.setCell(row, column_nivel2, data.getValue(row, column_nivel2), data.getFormattedValue(row, column_nivel2), {'className': 'cell_style bold_style cell_width_120'});
			data.setCell(row, column_nivel3, data.getValue(row, column_nivel3), data.getFormattedValue(row, column_nivel3), {'className': 'cell_style bold_style cell_width_120'});
			data.setCell(row, column_subdirector, data.getValue(row, column_subdirector), data.getFormattedValue(row, column_subdirector), {'className': 'cell_style bold_style cell_width_85'});
			data.setCell(row, column_lider, data.getValue(row, column_lider), data.getFormattedValue(row, column_lider), {'className': 'cell_style cell_width_60'});
			data.setCell(row, column_aplicacion, data.getValue(row, column_aplicacion), data.getFormattedValue(row, column_aplicacion), {'className': 'cell_style bold_style cell_width_85'});
			data.setCell(row, column_nombreCambio, data.getValue(row, column_nombreCambio), data.getFormattedValue(row, column_nombreCambio), {'className': 'cell_style_justify'});
			data.setCell(row, column_Objetivo, data.getValue(row, column_Objetivo), data.getFormattedValue(row, column_Objetivo), {'className': 'cell_style cell_width_100'});                                                                        

			plataforma = data.getValue(row, column_plataforma);
			plataforma = plataforma.split('>').join('&#62');
			plataforma = plataforma.split('<').join('&#60');
			plataforma = plataforma.split('"').join('&#34');
			data.setCell(row, column_plataforma, plataforma, plataforma, {'className': ''});
		}
		
		var formatter_link = new google.visualization.PatternFormat('<a class="inline" href="#inline_content" onclick="getPlataforma(this);"><input type="hidden" value="{8}"/>{0}</a>');
		formatter_link.format(data, [0, 1, 2, 3, 4, 5, 6, 7, 8]);
		
		var view = new google.visualization.DataView(data);
		view.setColumns([0, 1, 2, 3, 4, 5, 6, 7]);
		
		new google.visualization.Dashboard(document.getElementById('dashboard')).
						bind([category_filtro1, category_filtro2, category_filtro3, category_filtro4], table).
						draw(view);

		google.visualization.events.addListener(table, 'ready',
				function(event) {
						$(".inline").colorbox({inline:true, width:"40%", height:"40%"});
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
function getPlataforma(elemento) {
	$("#plataforma_text").text(elemento.firstChild.value);
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
