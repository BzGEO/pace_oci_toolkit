/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*

Last updated: 10.06.2025
*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 1: LOAD DEPENDENCIES, INCLUDING EMIT / PACE PACKAGE
var a = require('users/servirbz/packages:hyperspectral/emit_pace_misc');

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 2: DEFINE REGION OF INTEREST AND SPECIFIC SITES
var roi = ee.Geometry.Rectangle(-87.28, 15.85, -89.27, 18.544); // Region of Interest: all of Belize
var pt = ee.Geometry.Point([-88.0678, 17.4944]);                // Point: northern Drowned Cayes

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 3: SELECT EMIT SR DATA
var dataset = a.emit_sr2(roi,"2023-01-01","2025-12-31");

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 4: DEFINE DATES FOR EXTRACTION OF EMIT DATA

var date27 = "2024-04-29" // ** Northern Turneffe + LHR Atoll; cloudy over southern Amergris Caye **
var date26 = "2024-05-17" // sliver over Puerto Cortes, Honduras
var date25 = "2024-06-08" // very cloudy over BZ City
var date24 = "2024-06-12" // unknown
var date23 = "2024-06-23" // very cloudy over Sarstoon River
var date22 = "2024-06-27" // * fairly cloudy over southern BZ
var date21 = "2024-07-16" // recently unavailable
var date20 = "2024-07-20" // very cloudy over coastal BZ
var date19 = "2024-08-16" // ** clear over northern Ambergris Caye **
var date18 = "2024-08-27" // fairly cloudy slivers over southern BZ
var date17 = "2024-09-27" // fairly cloudy sliver over Calakmul, MX
var date16 = "2024-10-01" // fairly cloudy over Orange Walk
var date15 = "2024-10-05" // very cloudy over northern to central BZ
var date14 = "2024-10-17" // cloudy sliver over sea near southern MX

var date12 = "2024-11-27" // small sliver due east of Hopkins
var date11 = "2024-12-04" // recently unavailable
var date10 = "2024-12-16" // sliver near sea near Calakmul, MX
var date9 = "2024-12-23" // slivers near western BZ border with Melchor, GT
var date8 = "2025-01-22" // tiny cloudy sliver near Dangriga - not useful
var date7 = "2025-01-26" // unknown
var date6 = "2025-02-02" // cloudy sliver near Calakmul, MX
var date5 = "2025-02-14" // cloudy, mainly over sea near Isla Mujeres, MX
var date4 = "2025-02-25" // recently unavailable
var date3 = "2025-03-20" // ** cloudy, but fairly decent over Ambergris Caye through Belize City and central BZ **
var date2 = "2025-03-24" // ** somewhat cloudy over inland BZ (and Turneffe), but fairly clear over coastal BZ and Manabique, GT **
var date1 = "2025-03-28" // sliver over coastal GT (Manabique) and Honduras (Puerto Cortes)
var date0 = "2025-04-01" // sliver over sea near Puerto Cortes, Honduras
var date00 = "2025-04-20" // fairly cloudy
var date0x1 = "2025-04-28" // very cloudy, from OW to Turneffe
var date0x2 = "2025-05-02" // fairly cloudy, from OW to Turneffe
var date0x3 = "2025-05-17" // somewhat cloudy, but from Ambergris to Turneffe to Sarstoon
var date0x4 = "2025-05-25" // sliver over coastal GT (Manabique) and Honduras (Puerto Cortes)
var date0x5 = "2025-05-29" // sliver over sea near Puerto Cortes, Honduras

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 5: PRINT OUT LIST OF AVAILABLE EMIT IMAGES

var emit = a.coll_emit_sub.filterBounds(roi)
        .filterDate("2023-01-01", "2025-12-31");

print(emit);
//print(dataset);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 6: DISPLAY EMIT DATA IN THE MAP VIEWER BELOW

Map.centerObject(roi, 6);
Map.setCenter(-88.3577, 17.497, 8);
Map.addLayer(dataset, a.viz1_emit, 'EMIT SR all', 0);

Map.addLayer(a.emit_sr_bz(date0x5), a.viz1_emit, 'EMIT SR '+date0x5, 0);
Map.addLayer(a.emit_sr_bz(date0x4), a.viz1_emit, 'EMIT SR '+date0x4, 0);
Map.addLayer(a.emit_sr_bz(date0x3), a.viz1_emit, 'EMIT SR '+date0x3, 0);
Map.addLayer(a.emit_sr_bz(date0x2), a.viz1_emit, 'EMIT SR '+date0x2, 0);
Map.addLayer(a.emit_sr_bz(date0x1), a.viz1_emit, 'EMIT SR '+date0x1, 0);

Map.addLayer(a.emit_sr_bz(date00), a.viz1_emit, 'EMIT SR '+date00, 0);
Map.addLayer(a.emit_sr_bz(date0), a.viz1_emit, 'EMIT SR '+date0, 0);
Map.addLayer(a.emit_sr_bz(date1), a.viz1_emit, 'EMIT SR '+date1, 0);
Map.addLayer(a.emit_sr_bz(date2), a.viz1_emit, 'EMIT SR '+date2, 1);
Map.addLayer(a.emit_sr_bz(date3), a.viz1_emit, 'EMIT SR '+date3, 1);
//Map.addLayer(a.emit_sr_bz(date4), a.viz1_emit, 'EMIT SR '+date4, 0);
Map.addLayer(a.emit_sr_bz(date5), a.viz1_emit, 'EMIT SR '+date5, 0);
Map.addLayer(a.emit_sr_bz(date6), a.viz1_emit, 'EMIT SR '+date6, 0);
Map.addLayer(a.emit_sr_bz(date7), a.viz1_emit, 'EMIT SR '+date7, 0);
Map.addLayer(a.emit_sr_bz(date8), a.viz1_emit, 'EMIT SR '+date8, 0);
Map.addLayer(a.emit_sr_bz(date9), a.viz1_emit, 'EMIT SR '+date9, 0);
Map.addLayer(a.emit_sr_bz(date10), a.viz1_emit, 'EMIT SR '+date10, 0);
//Map.addLayer(a.emit_sr_bz(date11), a.viz1_emit, 'EMIT SR '+date11, 0);
Map.addLayer(a.emit_sr_bz(date12), a.viz1_emit, 'EMIT SR '+date12, 0);
//Map.addLayer(a.emit_sr_bz(date13), a.viz1_emit, 'EMIT SR '+date13, 0);
Map.addLayer(a.emit_sr_bz(date14), a.viz1_emit, 'EMIT SR '+date14, 0);
Map.addLayer(a.emit_sr_bz(date15), a.viz1_emit, 'EMIT SR '+date15, 0);
Map.addLayer(a.emit_sr_bz(date16), a.viz1_emit, 'EMIT SR '+date16, 0);
Map.addLayer(a.emit_sr_bz(date17), a.viz1_emit, 'EMIT SR '+date17, 0);
Map.addLayer(a.emit_sr_bz(date18), a.viz1_emit, 'EMIT SR '+date18, 0);
Map.addLayer(a.emit_sr_bz(date19), a.viz1_emit, 'EMIT SR '+date19, 1);
Map.addLayer(a.emit_sr_bz(date20), a.viz1_emit, 'EMIT SR '+date20, 0);
//Map.addLayer(a.emit_sr_bz(date21), a.viz1_emit, 'EMIT SR '+date21, 0);
Map.addLayer(a.emit_sr_bz(date22), a.viz1_emit, 'EMIT SR '+date22, 1);
Map.addLayer(a.emit_sr_bz(date23), a.viz1_emit, 'EMIT SR '+date23, 0);
Map.addLayer(a.emit_sr_bz(date24), a.viz1_emit, 'EMIT SR '+date24, 0);
Map.addLayer(a.emit_sr_bz(date25), a.viz1_emit, 'EMIT SR '+date25, 0);
Map.addLayer(a.emit_sr_bz(date26), a.viz1_emit, 'EMIT SR '+date26, 0);
Map.addLayer(a.emit_sr_bz(date27), a.viz1_emit, 'EMIT SR '+date27, 1);
//Map.addLayer(dataset, a.viz1_emit, 'EMIT SR ', 0);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 7: PRINT SPECTRAL SIGNATURES IN CONSOLE ON THE RIGHT -> SPECIFIED AS 'PT' ABOVE

var emit = a.coll_emit_sub.filterBounds(pt)
                          .map(function(i){return i.set('any', i.select(0).mask()
                          .reduceRegion(ee.Reducer.anyNonZero(), pt).values().get(0))})
                          .filter(ee.Filter.eq('any', 1)).getRegion(pt, 60).slice(1)
                          .map(function(l) {return ee.List(l).slice(4)});

print(ui.Chart.array.values(emit, 1, a.wl_emit_sub)
      .setOptions({title: 'EMIT surface reflectance', pointsVisible: false, lineWidth: 1,
      hAxis: {viewWindow: {min:380, max:2500}}, vAxis: {viewWindow: {min:0, max:0.50}}
      }));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////