var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Datosdelazona_1 = new ol.format.GeoJSON();
var features_Datosdelazona_1 = format_Datosdelazona_1.readFeatures(json_Datosdelazona_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Datosdelazona_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Datosdelazona_1.addFeatures(features_Datosdelazona_1);
var lyr_Datosdelazona_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Datosdelazona_1, 
                style: style_Datosdelazona_1,
                popuplayertitle: 'Datos de la zona',
                interactive: true,
    title: 'Datos de la zona<br />\
    <img src="styles/legend/Datosdelazona_1_0.png" /> Riesgo Alto<br />\
    <img src="styles/legend/Datosdelazona_1_1.png" /> Riesgo Bajo<br />'
        });
var group_Datospoblacionales = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: 'Datos poblacionales'});
var group_Famaillaurbano = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: 'Famailla urbano'});
var group_ALOSPALSARDEM = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: 'ALOS PALSAR DEM'});
var group_GoogleSatelite = new ol.layer.Group({
                                layers: [lyr_GoogleSatelliteHybrid_0,],
                                fold: "open",
                                title: 'Google Satelite'});

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_Datosdelazona_1.setVisible(true);
var layersList = [group_GoogleSatelite,lyr_Datosdelazona_1];
lyr_Datosdelazona_1.set('fieldAliases', {'fid': 'fid', 'SUMA_P_TOTAL': ' Población Total', 'SUMA_MUJERES_TOTAL': 'Población Femenina', 'SUMA_VARONES_T': 'Población Masculina', 'SUMA_HOGARES': 'Cantidad de Hogares', 'Riesgo de Inundación': 'Estado', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', 'auxiliary_storage_labeling_lineanchorpercent': 'auxiliary_storage_labeling_lineanchorpercent', 'auxiliary_storage_labeling_lineanchorclipping': 'auxiliary_storage_labeling_lineanchorclipping', 'auxiliary_storage_labeling_lineanchortype': 'auxiliary_storage_labeling_lineanchortype', 'auxiliary_storage_labeling_lineanchortextpoint': 'auxiliary_storage_labeling_lineanchortextpoint', });
lyr_Datosdelazona_1.set('fieldImages', {'fid': 'TextEdit', 'SUMA_P_TOTAL': 'Range', 'SUMA_MUJERES_TOTAL': 'Range', 'SUMA_VARONES_T': 'Range', 'SUMA_HOGARES': 'Range', 'Riesgo de Inundación': 'TextEdit', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', 'auxiliary_storage_labeling_lineanchorpercent': '', 'auxiliary_storage_labeling_lineanchorclipping': '', 'auxiliary_storage_labeling_lineanchortype': '', 'auxiliary_storage_labeling_lineanchortextpoint': '', });
lyr_Datosdelazona_1.set('fieldLabels', {'fid': 'hidden field', 'SUMA_P_TOTAL': 'inline label - always visible', 'SUMA_MUJERES_TOTAL': 'inline label - always visible', 'SUMA_VARONES_T': 'inline label - always visible', 'SUMA_HOGARES': 'inline label - always visible', 'Riesgo de Inundación': 'inline label - always visible', 'auxiliary_storage_labeling_lineanchorpercent': 'no label', 'auxiliary_storage_labeling_lineanchorclipping': 'no label', 'auxiliary_storage_labeling_lineanchortype': 'no label', 'auxiliary_storage_labeling_lineanchortextpoint': 'no label', });
lyr_Datosdelazona_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});