---
title: GeoJSON-Dateien auf GitHub zuordnen
redirect_from:
  - /articles/mapping-geojson-files-on-github
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% data variables.product.product_name %} unterstützt die Zuordnung von geoJSON- und topoJSON-Daten in {% data variables.product.product_name %}-Repositorys. Gib die Datei einfach wie gewohnt mit Commit frei, und verwende die Erweiterung `.geojson` oder `.topojson`. Dateien mit der Erweiterung `.json` werden auch unterstützt, aber nur wenn `type` auf `FeatureCollection`, `GeometryCollection` oder `topology` festgelegt ist. Navigiere dann zum Pfad der geoJSON-Datei auf GitHub.com.

Wenn Du rechts auf das Papiersymbol klickst, siehst Du auch die Änderungen, die als Teil eines Commits an dieser Datei vorgenommen wurden.

![Screenshot von Quellen-Anzeigeauswahl](/assets/images/help/repository/source-render-toggle-geojson.png)

### Geometrie-Typen

Karten auf {% data variables.product.product_name %} verwenden [Leaflet.js](http://leafletjs.com) und unterstützen alle Geometrie-Typen, die in [der geJSON-Spezifikation](http://www.geojson.org/geojson-spec.html) genannt sind (Point, LineString, Polygon, MultiPoint, MultiLineString, MultiPolygon und GeometryCollection). TopoJSON-Dateien müssen den Typ „Topology“ aufweisen und der [topoJSON-Spezifikation](https://github.com/mbostock/topojson/wiki/Specification) entsprechen.

### Funktionen stilisieren

Du kannst anpassen, wie Funktionen angezeigt werden – z. B. eine bestimmte Farbe festlegen oder ein beschreibendes Symbol hinzufügen –, indem Du zusätzliche Metadaten in den Eigenschaften des geoJSON-Objekts übergibst. Folgende Optionen sind verfügbar:

* `marker-size` – Größe der Markierung: `small` (klein), `medium` (mittel) oder `large` (groß)
* `marker-color` – Farbe der Markierung: eine gültige RGB-Farbe im Hexadezimalformat
* `marker-symbol` – Symbol für Markierung: eine Symbol-ID vom [Maki-Projekt](http://mapbox.com/maki/) oder ein einzelnes alphanumerisches Zeichen (A–Z oder 0–9).
* `stroke` – Farbe eines Polygon-Rands oder einer Linie (RGB)
* `stroke-opacity` – Opazität eines Polygon-Rands oder einer Linie (0,0–1,0)
* `stroke-width` – Breite eines Polygon-Rands oder einer Linie
* `fill` – die Farbe im Inneren eines Polygons (RGB)
* `fill-opacity` – die Opazität im Inneren eines Polygons (0,0–1,0)

Weitere Informationen findest Du in [Version 1.1.0 der Open-Simplestyle-Spezifikation](https://github.com/mapbox/simplestyle-spec/tree/master/1.1.0).

### Deine Karte an anderer Stelle einbinden

Möchtest Du Deine geoJSON-Karte an anderer Stelle als {% data variables.product.product_name %} bereitstellen? Passen Sie einfach diese Vorlage an, und integrieren Sie sie in eine HTML-Seite, die JavaScript unterstützt (z. B. [{% data variables.product.prodname_pages %}](http://pages.github.com)):

```html
<script src="https://embed.github.com/view/geojson/<username>/<repo>/<ref>/<path_to_file>"></script>
```

Wenn z. B. die URL Ihrer Karte [github.com/benbalter/dc-wifi-social/blob/master/bars.geojson](https://github.com/benbalter/dc-wifi-social/blob/master/bars.geojson) lautet, ist Dein Einbettungscode:

```html
<script src="https://embed.github.com/view/geojson/benbalter/dc-wifi-social/master/bars.geojson"></script>
```

Standardmäßig ist die eingebettete Karte 420 Pixel breit und 620 Pixel hoch. Du kannst die Ausgabe jedoch anpassen, indem Du Höhe- und Breitevariablen als Parameter am Ende angibst, beispielsweise `?height=300&width=500`.

{% tip %}

**Note**: `ref` can be a branch or the hash to an individual commit (like `2391ae`).

{% endtip %}

### Clustering

Wenn Deine Karte eine große Anzahl an Markierungen (ungefähr mehr als 750) enthält, bündelt GitHub benachbarte Markierungen automatisch in größeren Zoomstufen. Klicke einfach auf den Cluster oder zoome heran, um einzelne Markierungen zu sehen.

### Mit der zugrunde liegenden Karte stimmt etwas nicht

Die zugrunde liegenden Kartendaten (Straßennamen, Wege etc.) stammen von [OpenStreetMap](http://www.openstreetmap.org/), einem Gemeinschaftsprojekt zur Erstellung einer kostenlosen bearbeitbaren Karte der ganzen Welt. Wenn Du einen Fehler bemerkst, kannst Du – da es sich um ein Open-Source-Projekt handelt – Dich einfach [anmelden](https://www.openstreetmap.org/user/new) und eine Fehlerkorrektur einreichen.

### Problemlösungen

Wenn Du Probleme beim Rendern von geJSON-Dateien hast, überprüfe, ob Du eine gültige geoJSON-Datei vorliegen hast, indem Du den [geoJSON-Linter](http://geojsonlint.com/) über die Datei laufen lässt. Wenn Deine Punkte an anderer Stelle angezeigt werden als erwartet (<em>z. B.</em> mitten im Meer), befinden sich die Daten wahrscheinlich in einer Projektion, die derzeit nicht unterstützt wird. Aktuell unterstützt {% data variables.product.product_name %} nur die Projektion `urn:ogc:def:crs:OGC:1.3:CRS84`.

Wenn Deine `.geojson`-Datei besonders groß ist (über 10 MB), kann sie außerdem nicht im Browser dargestellt werden. Wenn dies der Fall ist, wird im Allgemeinen eine ähnliche Mitteilung wie die folgende angezeigt:

![Große Datei](/assets/images/help/repository/view_raw.png)

Möglicherweise kannst Du die Daten dennoch darstellen, indem Du die `.geojson`-Datei in [TopoJSON](https://github.com/mbostock/topojson) umwandelst, ein komprimiertes Format, das die Dateigröße in einigen Fällen um bis zu 80 Prozent verringern kann. Natürlich kannst Du immer die Datei in kleinere Abschnitte aufteilen (z. B. nach Land oder Jahr) und die Daten in Form von mehreren Dateien im Repository speichern.

### Zusätzliche Ressourcen

* [Leaflet.js-geoJSON-Dokumentation](http://leafletjs.com/examples/geojson.html)
* [MapBox-Dokumentation zu Markierungsstilen](http://www.mapbox.com/developers/simplestyle/)
* [TopoJSON-Wiki](https://github.com/mbostock/topojson/wiki)
