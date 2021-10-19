var wms_layers = [];

var format_GBdistrict_borough_unitary_region_0 = new ol.format.GeoJSON();
var features_GBdistrict_borough_unitary_region_0 = format_GBdistrict_borough_unitary_region_0.readFeatures(json_GBdistrict_borough_unitary_region_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GBdistrict_borough_unitary_region_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GBdistrict_borough_unitary_region_0.addFeatures(features_GBdistrict_borough_unitary_region_0);
var lyr_GBdistrict_borough_unitary_region_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GBdistrict_borough_unitary_region_0, 
                style: style_GBdistrict_borough_unitary_region_0,
                interactive: true,
                title: '<img src="styles/legend/GBdistrict_borough_unitary_region_0.png" /> GB district_borough_unitary_region'
            });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 0.550000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

lyr_GBdistrict_borough_unitary_region_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);
var layersList = [lyr_GBdistrict_borough_unitary_region_0,lyr_OpenStreetMap_1];
lyr_GBdistrict_borough_unitary_region_0.set('fieldAliases', {'NAME': 'NAME', 'AREA_CODE': 'AREA_CODE', 'DESCRIPTIO': 'DESCRIPTIO', 'FILE_NAME': 'FILE_NAME', 'NUMBER': 'NUMBER', 'NUMBER0': 'NUMBER0', 'POLYGON_ID': 'POLYGON_ID', 'UNIT_ID': 'UNIT_ID', 'CODE': 'CODE', 'HECTARES': 'HECTARES', 'AREA': 'AREA', 'TYPE_CODE': 'TYPE_CODE', 'DESCRIPT0': 'DESCRIPT0', 'TYPE_COD0': 'TYPE_COD0', 'DESCRIPT1': 'DESCRIPT1', });
lyr_GBdistrict_borough_unitary_region_0.set('fieldImages', {'NAME': 'TextEdit', 'AREA_CODE': 'Hidden', 'DESCRIPTIO': 'Hidden', 'FILE_NAME': 'Hidden', 'NUMBER': 'Hidden', 'NUMBER0': 'Hidden', 'POLYGON_ID': 'Hidden', 'UNIT_ID': 'Hidden', 'CODE': 'Hidden', 'HECTARES': 'Hidden', 'AREA': 'Hidden', 'TYPE_CODE': 'Hidden', 'DESCRIPT0': 'Hidden', 'TYPE_COD0': 'Hidden', 'DESCRIPT1': 'Hidden', });
lyr_GBdistrict_borough_unitary_region_0.set('fieldLabels', {'NAME': 'header label', });
lyr_GBdistrict_borough_unitary_region_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});