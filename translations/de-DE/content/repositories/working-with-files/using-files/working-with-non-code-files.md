---
title: Mit Nicht-Codedateien arbeiten
intro: '{% data variables.product.product_name %} supports rendering and diffing in a number of non-code file formats.'
redirect_from:
  - /articles/rendering-and-diffing-images
  - /github/managing-files-in-a-repository/rendering-and-diffing-images
  - /github/managing-files-in-a-repository/working-with-non-code-files/rendering-and-diffing-images
  - /articles/stl-file-viewer
  - /articles/3d-file-viewer
  - /github/managing-files-in-a-repository/3d-file-viewer
  - /github/managing-files-in-a-repository/working-with-non-code-files/3d-file-viewer
  - /articles/rendering-csv-and-tsv-data
  - /github/managing-files-in-a-repository/rendering-csv-and-tsv-data
  - /github/managing-files-in-a-repository/working-with-non-code-files/rendering-csv-and-tsv-data
  - /articles/rendering-pdf-documents
  - /github/managing-files-in-a-repository/rendering-pdf-documents
  - /github/managing-files-in-a-repository/working-with-non-code-files/rendering-pdf-documents
  - /articles/rendering-differences-in-prose-documents
  - /github/managing-files-in-a-repository/rendering-differences-in-prose-documents
  - /github/managing-files-in-a-repository/working-with-non-code-files/rendering-differences-in-prose-documents
  - /articles/mapping-geojson-files-on-github
  - /github/managing-files-in-a-repository/mapping-geojson-files-on-github
  - /github/managing-files-in-a-repository/working-with-non-code-files/mapping-geojson-files-on-github
  - /articles/working-with-jupyter-notebook-files-on-github
  - /github/managing-files-in-a-repository/working-with-jupyter-notebook-files-on-github
  - /github/managing-files-in-a-repository/working-with-non-code-files/working-with-jupyter-notebook-files-on-github
  - /github/managing-files-in-a-repository/working-with-non-code-files
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Repositories
shortTitle: Mit Nicht-Codedateien arbeiten
---

## Bilder rendern und vergleichen

{% data variables.product.product_name %} kann verschiedene gängige Bildformate wie PNG, JPG, GIF, PSD und SVG darstellen. Neben der einfachen Wiedergabe bestehen aber auch verschiedene Möglichkeiten, Differenzen zwischen Versionen dieser Bildformate zu vergleichen.'

{% note %}

**Hinweis:** Bei Verwendung des Firefox-Browsers werden SVGs auf {% data variables.product.prodname_dotcom %} unter Umständen nicht gerendert.

{% endnote %}

### Bilder anzeigen

Sie können Bilder direkt in Ihrem {% data variables.product.product_name %}-Repository suchen und aus dem Repository anzeigen:

![Inline-Bild](/assets/images/help/images/view.png)

SVGs unterstützen derzeit noch kein Inline-Scripting und keine Animation.

### Unterschiede anzeigen

Du kannst Bilder visuell in drei verschiedenen Modi vergleichen: [2-up](#2-up), [swipe](#swipe) (Wischen) und [onion skin](#onion-skin) (Zwiebelhaut).

#### 2-up

**2-up** ist der Standardmodus. In diesem Modus erhältst Du einen schnellen Überblick über beide Bilder. Falls sich die Bildgröße zwischen den beiden Versionen geändert hat, wird auch die tatsächliche Größenänderung angezeigt. Dadurch erkennst Du Größenänderungen deutlich, beispielsweise, wenn Objekte mit höheren Auflösungen dargestellt werden.

![2-up](/assets/images/help/repository/images-2up-view.png)

#### Swipe (Wischen)

Mit **Wischen** kannst Du Ausschnitte Deiner Bilder nebeneinander anzeigen. Du bist nicht sicher, ob sich die Farben zwischen den Versionen geändert hat? Ziehe den Wisch-Schieberegler über den fraglichen Bildbereich und vergleiche die Pixel manuell.

![Swipe (Wischen)](/assets/images/help/repository/images-swipe-view.png)

#### Onion skin (Zwiebelhaut)

Der Modus **Zwiebelhaut** ist besonders dann hilfreich, wenn sich winzige Bildelemente kaum erkennbar geändert haben. Wurde ein Symbol um zwei Pixel nach links verschoben? Ziehe den Opazitäts-Schieberegler ein Stück zurück, und beobachte, ob sich die Bildelemente bewegen.

![Onion skin (Zwiebelhaut)](/assets/images/help/repository/images-onion-view.gif)

## 3D-Dateianzeige

{% data variables.product.product_name %} kann 3D-Dateien mit der Erweiterung *.stl* hosten und rendern.

Wenn Sie eine STL-Datei direkt auf {% data variables.product.product_name %} betrachten, können Sie Folgendes tun:

* Modell durch Anklicken und Ziehen drehen
* Ansicht durch Rechtsklick und Ziehen verschieben
* Ansicht durch Scrollen vergrößern und verkleinern
* Ansicht durch Anklicken der verschiedenen Ansichtsmodi ändern

### Diffs

Wenn Du Dir einen Commit oder einen Satz von Änderungen ansiehst, der eine STL-Datei enthält, kannst Du Dir Vorher- und Nachher-Diff der Datei ansehen.

Standardmäßig erhältst Du eine Ansicht, in der alles Unveränderte in einem Drahtgittermodell angezeigt wird. Ergänzungen sind grün und entfernte Teile rot markiert.

![Drahtgittermodell](/assets/images/help/repository/stl_wireframe.png)

Du kannst auch die Option **Revision Slider** (Revisions-Schieberegler) auswählen, über die Du mit einem Schieberegler am oberen Rand der Datei zwischen der aktuellen und der vorherigen Revision wechseln kannst.

### Langsame Leistung beheben

Wenn Du dieses Symbol in der Ecke der Anzeige siehst, ist die WebGL-Technologie in Deinem Browser nicht verfügbar:

![WebGL-Pop-Fehler](/assets/images/help/repository/render_webgl_error.png)

WebGL ist notwendig, um das Potenzial der Hardware Deines Computers voll auszuschöpfen. Wir empfehlen Dir, Browser wie [Chrome](https://www.google.com/intl/en/chrome/browser/) oder [Firefox](https://www.mozilla.org/en-US/firefox/new/) zu verwenden, die mit aktiviertem WebGL bereitgestellt werden.

### Fehler: „Unable to display“ (Anzeige nicht möglich)

Wenn Dein Modell ungültig ist, kann GitHub die Datei möglicherweise nicht anzeigen. Darüber hinaus sind Dateien mit mehr als 10 MB für die Anzeige durch GitHub zu groß.

### Dein Modell an anderer Stelle einbetten

Um Deine 3D-Datei an anderer Stelle im Internet anzuzeigen, passe diese Vorlage an und platziere sie auf einer beliebigen HTML-Seite mit JavaScript-Unterstützung:

```html
<script src="https://embed.github.com/view/3d/<username>/<repo>/<ref>/<path_to_file>"></script>
```

Wenn die URL Deines Modells beispielsweise [github.com/skalnik/secret-bear-clip/blob/master/stl/clip.stl](https://github.com/skalnik/secret-bear-clip/blob/master/stl/clip.stl) lautet, ist der Einbettungscode:

```html
<script src="https://embed.github.com/view/3d/skalnik/secret-bear-clip/master/stl/clip.stl"></script>
```

Standardmäßig ist der eingebettete Renderer 420 Pixel breit und 620 Pixel hoch. Du kannst die Ausgabe jedoch anpassen, indem Du Höhe- und Breitevariablen als Parameter am Ende der URL angibst, beispielsweise `?height=300&width=500`.

{% tip %}

**Note**: `ref` can be a branch or the hash to an individual commit (like `2391ae`).

{% endtip %}

## CSV- und TSV-Daten rendern

GitHub unterstützt das Rendering von Tabellendaten in den Formaten *.csv* (kommagetrennt) und *.tsv* (tabulatorgetrennt).

![Beispiel für eine gerenderte CSV-Datei](/assets/images/help/repository/rendered_csv.png)

In der Anzeige wird jede _CSV_- oder _TSV_-Datei, die in einem {% data variables.product.product_name %}-Repository festgeschrieben ist, automatisch als interaktive Tabelle mit Kopfzeile und Zeilennummerierung wiedergegeben. Standardmäßig wird davon ausgegangen, dass die erste Zeile die Kopfzeile mit den Spaltenüberschriften ist.

Durch Klicken auf die Zeilennummer kannst Du eine bestimmte Zeile verknüpfen, oder durch drücken der Umschalttaste mehrere Zeilen auswählen. Kopiere einfach die URL, und sende sie einem anderen Benutzer.

### Daten durchsuchen

Wenn Du in Deinem Datensatz einen bestimmten Wert suchst, gib einfach den Anfang des gesuchten Werts in die Suchleiste über der Datei ein. The rows will filter automatically:

![Suche nach Werten](/assets/images/help/repository/searching_csvs.gif)

### Fehlerbehandlung

Gelegentlich wird eine CSV- oder TSV-Datei nicht korrekt dargestellt. In diesem Fall wird unter dem Rohtext eine Fehlermeldung mit einem Hinweis auf die Fehlerursache angezeigt.

![Fehlermeldung beim Rendern einer CSV-Datei](/assets/images/help/repository/csv_render_error.png)

Die folgenden Fehler kommen häufig vor:

* Die Zeilen enthalten nicht die gleiche Anzahl an Spalten. Jede Zeile muss die gleiche Anzahl an Trennzeichen enthalten, selbst wenn eine Zelle leer bleibt.
* Das Dateigrößenlimit wurde überschritten. Das Rendering funktioniert nur bei Dateien mit einer Größe von bis zu 512 KB. Das Rendering größerer Dateien würde den Browser verlangsamen.

## PDF-Dokumente rendern

GitHub unterstützt das Rendering von PDF-Dokumenten.

![Gerendertes PDF-Dokument](/assets/images/help/repository/rendered-pdf.png)

Links innerhalb von PDF-Dokumenten werden derzeit noch ignoriert.

## Unterschiede in Dokumenten mit Fließtext rendern

Commits und Pull Requests an Fließtextdokumenten unterstützen die Darstellung dieser Dokumente im *Quell-* und im *gerenderten* Format.

In der Quellansicht wird der eingegebene Rohtext angezeigt. In der gerenderten Ansicht wird der Text dagegen so angezeigt, wie er gerendert auf {% data variables.product.product_name %} aussehen würde. Beispielsweise wird fett ausgezeichneter Text in der Quellansicht in Markdown `**fett**` dargestellt, in der gerenderten Ansicht dagegen als **fett**.

Das Rendering von Fließtext wird für gerenderte Dokumente unterstützt, die von [github/markup](https://github.com/github/markup) unterstützt werden:

* Markdown
* AsciiDoc
* Textile
* ReStructured Text
* Rdoc
* Org
* Creole
* MediaWiki
* Pod

![Papiersymbol zum Anzeigen gerenderter Dokumente mit Fließtext](/assets/images/help/repository/rendered_prose_diff.png)

Zum Anzeigen der im Zuge eines Commits vorgenommenen Änderungen an einem Dokument klicke auf das Symbol {% octicon "file" aria-label="The paper icon" %}.

![Änderungen an gerendertem Fließtext](/assets/images/help/repository/rendered_prose_changes.png)

### Attributänderungen visualisieren

Zu Attributänderungen, die im Gegensatz zu Worten im gerenderten Dokument nicht sichtbar werden, geben wir gerne einen Toolhinweis. Beispielsweise erhältst Du bei der Änderung einer Link-URL von einer Website zu einer anderen einen Toolhinweis wie diesen:

![Attributänderungen an gerendertem Fließtext](/assets/images/help/repository/prose_diff_attributes.png)

### Kommentare zu Änderungen

[Kommentare zu Commits](/articles/commenting-on-differences-between-files) können nur zu Dateien in der *Quellansicht* Zeile für Zeile hinzugefügt werden.

### Zu Headern verknüpfen

Wie bei [anderen gerenderten Dokumenten mit Fließtext](/articles/about-readmes) wird ein Linksymbol erstellt, sobald Du den Mauszeiger über einen Dokumentheader bewegst. Du kannst die Leser Deines gerenderten Fließtextes über Links zu bestimmten Abschnitten leiten.

### Komplexe Unterschiede anzeigen

Einige Pull Requests umfassen sehr viele Änderungen an großen und komplexen Dokumenten. When the changes take too long to analyze, {% data variables.product.product_name %} can't always produce a rendered view of the changes. If this happens, you'll see an error message when you click the rendered button.

![Message when view can't be rendered](/assets/images/help/repository/prose_diff_rendering.png)

Jedoch kannst Du die Änderungen auch in der Quellansicht analysieren und kommentieren.

### HTML-Elemente anzeigen

Gerenderte Ansichten der Commits an HTML-Dokumenten werden nicht direkt unterstützt. In einigen Formaten wie Markdown kannst Du beliebig HTML im Dokument einbetten. Wenn diese Dokumente in {% data variables.product.product_name %} dargestellt werden, kann ein Teil dieser eingebetteten HTML in einer Vorschau angezeigt werden, manch andere HTML (wie ein eingebettetes YouTube-Video) hingegen nicht.

Im Allgemeinen zeigen gerenderte Ansichten von Dokumentänderungen, die eingebettete HTML enthalten, diejenigen Änderungen an den Elementen an, die in der {% data variables.product.product_name %}-Ansicht des Dokuments unterstützt werden. Aus Gründen der Vollständigkeit sollten Änderungen an Dokumenten, die eingebettete HTML enthalten, immer sowohl in der gerenderten als auch in der Quellansicht überprüft werden.

## Mapping geoJSON files on {% data variables.product.prodname_dotcom %}

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

## Working with Jupyter Notebook files on {% data variables.product.prodname_dotcom %}

When you add Jupyter Notebook or IPython Notebook files with a *.ipynb* extension on {% data variables.product.product_location %}, they will render as static HTML files in your repository.

Die interaktiven Features des Notebooks, beispielsweise benutzerdefinierte JavaScript-Plots, funktionieren in Ihrem Repository auf {% data variables.product.product_location %} nicht. Ein Beispiel findest Du unter [*Linking and Interactions.ipynb*](https://github.com/bokeh/bokeh-notebooks/blob/main/tutorial/06%20-%20Linking%20and%20Interactions.ipynb).

Du kannst [nbviewer](https://nbviewer.jupyter.org/) verwenden, um Dein Jupyter Notebook mit dargestelltem JavaScript-Inhalt anzuzeigen oder um Deine Notebook-Dateien mit anderen zu teilen. Ein Beispiel zu auf nbviewer gerenderten Elementen findest Du unter [*Linking and Interactions.ipynb*](https://nbviewer.jupyter.org/github/bokeh/bokeh-notebooks/blob/main/tutorial/06%20-%20Linking%20and%20Interactions.ipynb).

Wenn Du eine vollständig interaktive Version Deines Jupyter Notebook anzeigen möchtest, kannst Du einen Notebook-Server lokal einrichten. Weitere Informationen findest Du in der [offiziellen Dokumentation von Jupyter](http://jupyter.readthedocs.io/en/latest/index.html).

### Problemlösungen

Falls Du Probleme hast, Jupyter Notebook-Dateien in statischen HTML-Dateien darzustellen, kannst Du die Datei lokal umwandeln. Benutze dazu den [`nbconvert`-Befehl](https://github.com/jupyter/nbconvert) auf der Befehlszeile:

```shell
$ jupyter nbconvert --to html <em>NOTEBOOK-NAME.ipynb</em>
```

### Weiterführende Informationen

- [GitHub-Repository für Jupyter Notebook](https://github.com/jupyter/jupyter_notebook)
- [Galerie der Jupyter Notebooks](https://github.com/jupyter/jupyter/wiki/A-gallery-of-interesting-Jupyter-Notebooks)
