---
title: Specification of OsmAnd's SQLite Format
versions: '*'
---
# Specification of OsmAnd's SQLite Format

The SQLIte format used in OsmAnd is based on the "BigPlanet" SQLite as supported by MOBAC. In OsmAnd we add a number of tables extending the format:

|Table|Column|Spec and Purpose|
|:----|:-----|:---------------|
|"info"|"url"|String. URL template to download tiles with zoom ≣ `{z}` ≣ `{0}`, `{x}` ≣ `{1}`, `{y}` ≣ `{2}`, server name ≣ `{rnd}`|
||"randoms"|String. The names of the mirrors of server. Comma-separated. One of these values will randomly replace the placeholder {rdn} in "url" field.|
||"referer"|String. HTTP Referer. As used for downloading.|
||"minzoom"|Integer. Min zoom level. Respective integer. (Also inverted in case of BigPlanet).|
||"maxzoom"|Integer. Max zoom level. Respective integer. (Also inverted in case of BigPlanet).|
||"ellipsoid"|Integer 0 or 1. 1 for Elliptic Mercator (Yandex tiles). 0 for regular Spheric Web Mercator (OSM, Google maps)|
||"inverted\_y"|Integer 0 or 1. 1 for inverted Y tile number (Nakarte.me tiles).|
||"timeSupported"|Bool "yes" or "no". A tiles table with a "time" column indicates when each tile was retrieved.|
||"expireminutes"|Integer. Specifies if tiles shall expire after the given number of minutes. They would still be displayed, but also re-downloaded.|
||"tilenumbering"|String "" or "BigPlanet". If "BigPlanet", zoom will be inverted and calculated as z = 17 - zoom.|
|"tiles"|"x", "y", "z"|Integer. Indicates tile Mercator coordinates. Note that zoom could be inverted for the BigPlanet case.|
||"image"|Blob of image bytes.|
||"time"|Integer. Time stamp when image was downloaded.|

The class supporting this is SQLiteTileSource at or near [https://github.com/osmandapp/Osmand/blob/master/OsmAnd/src/net/osmand/plus/SQLiteTileSource.java\#L33](https://github.com/osmandapp/Osmand/blob/master/OsmAnd/src/net/osmand/plus/SQLiteTileSource.java#L33)
