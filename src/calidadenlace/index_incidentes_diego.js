
(function($) {
    $.fn.hasVerticalScrollbar = function() {
        return this.get(0).scrollHeight > this.height();
    }
    
})(jQuery);

Array.prototype.contains = function(v) {
    for(var i = 0; i < this.length; i++) {
        if(this[i] === v) return true;
    }
    return false;
};

Array.prototype.unique = function() {
    var arr = [];
    for(var i = 0; i < this.length; i++) {
        if(!arr.contains(this[i])) {
            arr.push(this[i]);
        }
    }
    return arr; 
}

var column_folio = 0;
var column_titulo = 1;
var column_aplicativo = 2;
var column_fecha_registro = 3;
var column_estatus = 4;
var column_fecha_estatus = 5;
var column_fecha_compromiso = 6;
var column_ind = 7;
var column_oc = 8;
var column_area_resolutoria = 9;
var column_area_responsable = 10;
var column_usuario_afectado = 11;
var column_area_negocio = 12;   
var column_folio_usuario = 13;
var column_folio_1 = 14;
var column_folio_2 = 15;
var column_folio_3 = 16;
var data = [];
var data_area_responsable = [];
var data_area_resolutoria = [];
var data_aplicativo = [];
var data_usuario_afectado = [];
var data_area_negocio = [];
var data_estatus = [];

if(typeof String.prototype.trim !== 'function') { 
  String.prototype.trim = function() {
	return this.replace(/^\s+|\s+$/g, ''); 
  }
}                          
google.load('visualization', '1.1', {packages: ['controls','table']});
google.setOnLoadCallback(draw);

function draw() {

	var query = new google.visualization.Query('https://spreadsheets.google.com/a/bbva.com/tq?&tq=&key=1bvYvZzkrODKRFDfJ2QS6RYMqrWWTI1TI9O4614Ab__M&gid=0');
	query.send(handleQueryResponse);
		
}

function handleQueryResponse(response) {
		if (response.isError()) {
				alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
				return;
		}
		data = response.getDataTable();
		loadSelect();
		loadDataTable()
}



function loadSelect() {
	data_area_responsable = [];
	data_area_resolutoria = [];
	data_aplicativo = [];
	data_usuario_afectado = [];
	data_area_negocio = [];
	data_estatus = [];
	for (var row = 0; row < data.getNumberOfRows(); row++) {
		data_area_responsable.push(data.getValue(row, column_area_responsable));
		data_area_resolutoria.push(data.getValue(row, column_area_resolutoria));
		data_aplicativo.push(data.getValue(row, column_aplicativo));
		data_usuario_afectado.push(data.getValue(row, column_usuario_afectado));
		data_area_negocio.push(data.getValue(row, column_area_negocio));
		data_estatus.push(data.getValue(row, column_estatus));
		//data table
	}
	data_area_responsable = data_area_responsable.unique();
	data_area_resolutoria = data_area_resolutoria.unique();
	data_aplicativo = data_aplicativo.unique();
	data_usuario_afectado = data_usuario_afectado.unique();
	data_area_negocio = data_area_negocio.unique();
	data_estatus = data_estatus.unique();
	loadSelectOptions($("#sAreaResponsable"), data_area_responsable);
	loadSelectOptions($("#sAreaResolutoria"), data_area_resolutoria);
	loadSelectOptions($("#sAplicativo"), data_aplicativo);
	loadSelectOptions($("#sUsuarioAfectado"), data_usuario_afectado);
	loadSelectOptions($("#sAreaNegocio"), data_area_negocio);
	loadSelectOptions($("#sEstatus"), data_estatus);
	$(".es-input").blur(function() {
		var id = $(this).get(0).parentNode.id;
		id = id.replace("c","h");
		$("#"+id).val($(this).val().trim());
		loadDataTable();
	});
	$("#sFolio").blur(function() {
		loadDataTable();
	});
}

function loadSelectOptions(combo, data_select) {
	var cad = "";
	for (var i = 0; i < data_select.length; i++) {
		cad = cad + '<option value="' + data_select[i] + '">' + data_select[i] + '</option>';
	}
	combo.empty();
	combo.append(cad);
	combo.editableSelect({
		onSelect: function (x) {
			var id = $(this).get(0).parentNode.id;
			id = id.replace("c","h");
			$("#"+id).val($(this).val().trim());
			loadDataTable();
			
		}
	});
}

function loadDataTable() {
	var cad = "";
	var found = true;
	for (var row = 0; row < data.getNumberOfRows(); row++) {
		found = true;
		if ($("#sFolio").val() != '') {
			if (!($("#sFolio").val().trim() == data.getValue(row, column_folio)
				|| $("#sFolio").val().trim() == data.getValue(row, column_folio_usuario)
				|| $("#sFolio").val().trim() == data.getValue(row, column_folio_1)
				|| $("#sFolio").val().trim() == data.getValue(row, column_folio_2)
				|| $("#sFolio").val().trim() == data.getValue(row, column_folio_3))) {
					found = false;
				}
		}
		
		
		if (found == true && $("#hAreaResponsable").val() != '') {
			if (!($("#hAreaResponsable").val() == data.getValue(row, column_area_responsable))) {
					found = false;
				}
		}
		
		if (found == true && $("#hAreaResolutoria").val() != '') {
			if (!($("#hAreaResolutoria").val() == data.getValue(row, column_area_resolutoria))) {
					found = false;
				}
		}
		
		if (found == true && $("#hAplicativo").val() != '') {
			if (!($("#hAplicativo").val() == data.getValue(row, column_aplicativo))) {
					found = false;
				}
		}
		
		if (found == true && $("#hUsuarioAfectado").val() != '') {
			if (!($("#hUsuarioAfectado").val() == data.getValue(row, column_usuario_afectado))) {
					found = false;
				}
		}
		
		if (found == true && $("#hAreaNegocio").val() != '') {
			if (!($("#hAreaNegocio").val() == data.getValue(row, column_area_negocio))) {
					found = false;
				}
		}
		
		if (found == true && $("#hEstatus").val() != '') {
			if (!($("#hEstatus").val() == data.getValue(row, column_estatus))) {
					found = false;
				}
		}
		if (found == true) {
			cad = cad + '<tr>';
			//cad = cad + '<td class="vcenter-row">' + data.getValue(row, column_folio) + '</td>';
			cad = cad + '<td class="vcenter-row"><a id="' + data.getValue(row, column_folio) + '" class="detalle_inc" href="#detalle_inc_content" onclick="getDetalle(this);">' + data.getValue(row, column_folio) + '</a></td>';
			cad = cad + '<td class="vcenter-row">' + data.getValue(row, column_titulo) + '</td>';
			cad = cad + '<td class="vcenter-row hcenter-row ">' + data.getValue(row, column_aplicativo) + '</td>';
			cad = cad + '<td class="vcenter-row hcenter-row ">' + data.getValue(row, column_fecha_registro) + '</td>';
			cad = cad + '<td class="vcenter-row">' + data.getValue(row, column_estatus) + '</td>';
			cad = cad + '<td class="vcenter-row hcenter-row ">' + data.getValue(row, column_fecha_estatus) + '</td>';
			cad = cad + '<td class="vcenter-row hcenter-row ">' + data.getValue(row, column_fecha_compromiso) + '</td>';
			cad = cad + '<td class="vcenter-row hcenter-row ">' + data.getValue(row, column_ind) + '</td>';
			cad = cad + '<td class="vcenter-row hcenter-row ">' + data.getValue(row, column_oc) + '</td>';
			cad = cad + '<td class="vcenter-row hcenter-row ">' + data.getValue(row, column_area_resolutoria) + '</td>';
			cad = cad + '</tr>';
		}
		
	}
	$("#tabla-incidencias tbody").empty();
	$("#tabla-incidencias tbody").append(cad);
	$('#tabla-incidencias').fixedHeaderTable('destroy');
	$('#tabla-incidencias').fixedHeaderTable();
	$('#tabla-incidencias').fixedHeaderTable('show', 1000);
	ajustar();
	$(".detalle_inc").colorbox({inline:true, width:"60%", height:"50%"});
}

function ajustar() {

	if ($('.fht-tbody').hasVerticalScrollbar() == false) {
		$(".fht-thead th:last").css("padding-right","6px");
	}
}

function getDetalle(elemento) {
	alert(elemento.id);
}