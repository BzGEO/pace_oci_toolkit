// Last updated: 16.04.2025

var a = require('users/bzgeo/examples:_ancillary/mes');
var b = require('users/bzgeo/hyperspectral_toolkit:00_pkg/emit_hyperion_pace.js');

var roi = a.gt_main;

var dataset = b.emit_sr2(roi,"2023-01-01","2025-04-15");

var date27 = "2024-04-29"
var date26 = "2024-05-17"
var date25 = "2024-06-08"
var date24 = "2024-06-12"
var date23 = "2024-06-23"
var date22 = "2024-06-27"
var date21 = "2024-07-16"
var date20 = "2024-07-20"
var date19 = "2024-08-16"
var date18 = "2024-08-27"
var date17 = "2024-09-27"
var date16 = "2024-10-01"
var date15 = "2024-10-05"
var date14 = "2024-10-17"

var date12 = "2024-11-27"
var date11 = "2024-12-04"
var date10 = "2024-12-16"
var date9 = "2024-12-23"
var date8 = "2025-01-22"
var date7 = "2025-01-29"
var date6 = "2025-02-02"
var date5 = "2025-02-14"
var date4 = "2025-02-25"
var date3 = "2025-03-20"
var date2 = "2025-03-24"
var date1 = "2025-03-28"

var emit = ee.ImageCollection('NASA/EMIT/L2A/RFL')
        .filterDate("2023-01-01", "2025-04-15")
        .filterBounds(roi)
        .select(ee.List.sequence(0, 284));

print(emit);

print(dataset);

Map.centerObject(roi, 6);
Map.setCenter(-88.3577, 17.497, 7);
Map.addLayer(dataset, b.viz1_emit, 'EMIT SR all', 0);

/*
Map.addLayer(b.emit_sr_bz(date1), b.viz1_emit, 'EMIT SR '+date1, 0);
Map.addLayer(b.emit_sr_bz(date2), b.viz1_emit, 'EMIT SR '+date2, 0);
Map.addLayer(b.emit_sr_bz(date3), b.viz1_emit, 'EMIT SR '+date3, 0);
Map.addLayer(b.emit_sr_bz(date4), b.viz1_emit, 'EMIT SR '+date4, 0);
Map.addLayer(b.emit_sr_bz(date5), b.viz1_emit, 'EMIT SR '+date5, 0);
Map.addLayer(b.emit_sr_bz(date6), b.viz1_emit, 'EMIT SR '+date6, 0);
Map.addLayer(b.emit_sr_bz(date7), b.viz1_emit, 'EMIT SR '+date7, 0);
Map.addLayer(b.emit_sr_bz(date8), b.viz1_emit, 'EMIT SR '+date8, 0);
Map.addLayer(b.emit_sr_bz(date9), b.viz1_emit, 'EMIT SR '+date9, 0);
Map.addLayer(b.emit_sr_bz(date10), b.viz1_emit, 'EMIT SR '+date10, 0);

Map.addLayer(b.emit_sr_bz(date11), b.viz1_emit, 'EMIT SR '+date11, 0);
Map.addLayer(b.emit_sr_bz(date12), b.viz1_emit, 'EMIT SR '+date12, 0);
//Map.addLayer(b.emit_sr_bz(date13), b.viz1_emit, 'EMIT SR '+date13, 0);
Map.addLayer(b.emit_sr_bz(date14), b.viz1_emit, 'EMIT SR '+date14, 0);
Map.addLayer(b.emit_sr_bz(date15), b.viz1_emit, 'EMIT SR '+date15, 0);
Map.addLayer(b.emit_sr_bz(date16), b.viz1_emit, 'EMIT SR '+date16, 0);
Map.addLayer(b.emit_sr_bz(date17), b.viz1_emit, 'EMIT SR '+date17, 0);
Map.addLayer(b.emit_sr_bz(date18), b.viz1_emit, 'EMIT SR '+date18, 0);
Map.addLayer(b.emit_sr_bz(date19), b.viz1_emit, 'EMIT SR '+date19, 0);
Map.addLayer(b.emit_sr_bz(date20), b.viz1_emit, 'EMIT SR '+date20, 0);

Map.addLayer(b.emit_sr_bz(date21), b.viz1_emit, 'EMIT SR '+date21, 0);
Map.addLayer(b.emit_sr_bz(date22), b.viz1_emit, 'EMIT SR '+date22, 0);
Map.addLayer(b.emit_sr_bz(date23), b.viz1_emit, 'EMIT SR '+date23, 0);
Map.addLayer(b.emit_sr_bz(date24), b.viz1_emit, 'EMIT SR '+date24, 0);
Map.addLayer(b.emit_sr_bz(date25), b.viz1_emit, 'EMIT SR '+date25, 0);
Map.addLayer(b.emit_sr_bz(date26), b.viz1_emit, 'EMIT SR '+date26, 0);
Map.addLayer(b.emit_sr_bz(date27), b.viz1_emit, 'EMIT SR '+date27, 1);

//Map.addLayer(dataset, b.viz1_emit, 'EMIT SR ', 0);
*/
