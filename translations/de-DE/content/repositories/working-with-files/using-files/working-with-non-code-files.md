---
title: Working with non-code files (Arbeiten mit anderen Dateien als Codedateien)
intro: '{% data variables.product.product_name %} unterstützt das Rendern und Vergleichen in einer Reihe von Nicht-Code-Dateiformaten.'
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
  ghec: '*'
topics:
  - Repositories
shortTitle: Working with non-code files
ms.openlocfilehash: c770235d94d6191d60505ba60b0f4f81ae49b6bd
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107605'
---
## Bilder rendern und vergleichen

{% data variables.product.product_name %} kann verschiedene gängige Bildformate wie PNG, JPG, GIF, PSD und SVG darstellen. Neben der einfachen Wiedergabe bestehen aber auch verschiedene Möglichkeiten, Differenzen zwischen Versionen dieser Bildformate zu vergleichen.

{% note %}

**Hinweis:** 
- {% data variables.product.prodname_dotcom %} unterstützt nicht den Vergleich der Unterschiede zwischen PSD-Dateien. 
- Bei Verwendung des Firefox-Browsers werden SVGs auf {% data variables.product.prodname_dotcom %} unter Umständen nicht gerendert.

{% endnote %}

### Anzeigen von Images

Du kannst Bilder in deinem Repository direkt auf {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %} anzeigen:

![Inline-Bild](/assets/images/help/images/view.png)

SVGs unterstützen derzeit noch kein Inline-Scripting und keine Animation.

### Unterschiede anzeigen

Du kannst Bilder in drei verschiedenen Modi visuell vergleichen: [2-up](#2-up), [swipe](#swipe) und [onion skin](#onion-skin).

#### 2-up

**2-up** ist der Standardmodus. In diesem Modus erhältst du einen schnellen Überblick über beide Bilder. Falls sich die Bildgröße zwischen den beiden Versionen geändert hat, wird auch die tatsächliche Größenänderung angezeigt. Dadurch kannst du Größenänderungen eindeutig erkennen, beispielsweise, wenn Objekte mit höheren Auflösungen dargestellt werden.

![2-up](/assets/images/help/repository/images-2up-view.png)

#### Swipe

Mit **Swipe** kannst du Ausschnitte deines Bilds nebeneinander anzeigen. Du bist nicht sicher, ob sich die Farben zwischen den Versionen geändert hat? Ziehe den Wisch-Schieberegler über den fraglichen Bildbereich und vergleiche die Pixel manuell.

![Swipe](/assets/images/help/repository/images-swipe-view.png)

#### Onion Skin (Zwiebelhaut)

Der Modus **Onion Skin** ist besonders dann hilfreich, wenn sich winzige Bildelemente kaum erkennbar geändert haben. Wurde ein Symbol um zwei Pixel nach links verschoben? Ziehe den Opazitäts-Schieberegler ein Stück zurück, und beobachte, ob sich die Bildelemente bewegen.

![Onion Skin (Zwiebelhaut)](/assets/images/help/repository/images-onion-view.gif)

## 3D-Dateianzeige

{% data variables.product.product_name %} kann 3D-Dateien mit der Erweiterung *.stl* hosten und rendern.

Wenn du eine STL-Datei direkt auf {% data variables.product.product_name %} betrachtest, kannst du Folgendes tun:

* Modell durch Anklicken und Ziehen drehen
* Ansicht durch Rechtsklick und Ziehen verschieben
* Ansicht durch Scrollen vergrößern und verkleinern
* Ansicht durch Anklicken der verschiedenen Ansichtsmodi ändern

### Diffs

Wenn du dir einen Commit oder einen Satz von Änderungen ansiehst, der eine STL-Datei enthält, kannst du die Vorher- und Nachher-Diff der Datei ansehen.

Standardmäßig erhältst du eine Ansicht, in der alles Unveränderte in einem Drahtgittermodell angezeigt wird. Ergänzungen sind grün und entfernte Teile rot markiert.

![Drahtgittermodell](/assets/images/help/repository/stl_wireframe.png)

Du kannst auch die Option **Revisionsschieberegler** auswählen, über den du mit einem Schieberegler am oberen Rand der Datei zwischen der aktuellen und der vorherigen Revision wechseln kannst.

### Langsame Leistung beheben

Wenn du dieses Symbol in der Ecke der Anzeige siehst, ist die WebGL-Technologie in deinem Browser nicht verfügbar:

![WebGL-Pop-Fehler](/assets/images/help/repository/render_webgl_error.png)

WebGL ist notwendig, um das Potenzial der Hardware deines Computers voll auszuschöpfen. Es wird empfohlen, Browser wie [Chrome](https://www.google.com/intl/en/chrome/browser/) oder [Firefox](https://www.mozilla.org/en-US/firefox/new/) zu testen, bei denen WebGL aktiviert ist.

### Fehler: „Unable to display“ (Anzeige nicht möglich)

Wenn dein Modell ungültig ist, kann GitHub die Datei möglicherweise nicht anzeigen. Darüber hinaus sind Dateien mit mehr als 10 MB für die Anzeige durch GitHub zu groß.

### Einbetten deines Modells an anderer Stelle

Um deine 3D-Datei an anderer Stelle im Internet anzuzeigen, passe diese Vorlage an, und platziere sie auf einer beliebigen HTML-Seite mit JavaScript-Unterstützung:

```html
<script src="https://embed.github.com/view/3d/<username>/<repo>/<ref>/<path_to_file>"></script>
```

Wenn beispielsweise die URL deines Modells [`github.com/skalnik/secret-bear-clip/blob/master/stl/clip.stl`](https://github.com/skalnik/secret-bear-clip/blob/master/stl/clip.stl) lautet, würde dein Einbettungscode wie folgt sein:

```html
<script src="https://embed.github.com/view/3d/skalnik/secret-bear-clip/master/stl/clip.stl"></script>
```

Standardmäßig ist der eingebettete Renderer 420 Pixel breit und 620 Pixel hoch. Du kannst die Ausgabe jedoch anpassen, indem du Variablen für Höhe und Breite als Parameter am Ende der URL übergibst, z. B. `?height=300&width=500`.

{% tip %}

**Hinweis:** `ref` kann ein Branch oder der Hash zu einem einzelnen Commit (z. B. `2391ae`) sein.

{% endtip %}

{% ifversion mermaid %}
### Rendern im Markdown

Du kannst ASCII STL-Syntax direkt in Markdown einbetten. Weitere Informationen findest du unter [Erstellen von Diagrammen](/get-started/writing-on-github/working-with-advanced-formatting/creating-diagrams#creating-stl-3d-models).
{% endif %}

## CSV- und TSV-Daten wiedergeben

GitHub unterstützt das Rendern von Tabellendaten in den Formaten *CSV* (kommagetrennt) und *TSV* (tabulatorgetrennt).

![Beispiel für eine gerenderte CSV-Datei](/assets/images/help/repository/rendered_csv.png)

Bei der Anzeige werden _CSV_- oder _TSV_-Dateien, die in einem Repository auf {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %} committet werden, automatisch als interaktive Tabelle mit Kopfzeilen und Zeilennummerierung gerendert. Standardmäßig wird davon ausgegangen, dass die erste Zeile die Kopfzeile mit den Spaltenüberschriften ist.

Du kannst durch Klicken auf die Zeilennummer eine bestimmte Zeile verknüpfen oder durch Drücken der Umschalttaste mehrere Zeilen auswählen. Kopiere einfach die URL, und sende sie einem anderen Benutzer.

### Durchsuchen von Daten

Wenn du in deinem Datensatz einen bestimmten Wert suchst, gib einfach den Anfang des gesuchten Werts in die Suchleiste über der Datei ein. Die Zeilen werden automatisch gefiltert:

![Suche nach Werten](/assets/images/help/repository/searching_csvs.gif)

### Behandlung von Fehlern

Gelegentlich wird eine CSV- oder TSV-Datei nicht korrekt dargestellt. In diesem Fall wird unter dem Rohtext eine Fehlermeldung mit einem Hinweis auf die Fehlerursache angezeigt.

![Fehlermeldung beim Rendern einer CSV-Datei](/assets/images/help/repository/csv_render_error.png)

Häufige Fehler sind z.B. folgende:

* Die Zeilen enthalten nicht die gleiche Anzahl an Spalten. Jede Zeile muss die gleiche Anzahl an Trennzeichen enthalten, selbst wenn eine Zelle leer bleibt.
* Das Dateigrößenlimit wurde überschritten. Das Rendering funktioniert nur bei Dateien mit einer Größe von bis zu 512 KB. Das Rendering größerer Dateien würde den Browser verlangsamen.

## PDF-Dokumente rendern

GitHub unterstützt das Rendering von PDF-Dokumenten.

![Gerendertes PDF-Dokument](/assets/images/help/repository/rendered-pdf.png)

Links innerhalb von PDF-Dokumenten werden derzeit noch ignoriert.

## Unterschiede in Dokumenten mit Fließtext rendern

Commits und Pull Requests an Fließtextdokumenten unterstützen die Darstellung dieser Dokumente im *Quell*- und im *gerenderten* Format.

In der Quellansicht wird der eingegebene Rohtext angezeigt. In der gerenderten Ansicht wird der Text dagegen so angezeigt, wie er gerendert auf {% data variables.product.product_name %} aussehen würde. Dies kann beispielsweise der Unterschied zwischen der Darstellung von `**bold**` in Markdown und **fett** in der gerenderten Ansicht sein.

Das Rendern von Fließtext wird für gerenderte Dokumente unterstützt, die von [github/markup](https://github.com/github/markup) unterstützt werden:

* Markdown
* AsciiDoc
* Textile
* ReStructured Text
* Rdoc
* Organisation
* Creole
* MediaWiki
* Pod

![Papiersymbol zum Anzeigen gerenderter Dokumente mit Fließtext](/assets/images/help/repository/rendered_prose_diff.png)

Zum Anzeigen der im Zuge eines Commits vorgenommenen Änderungen an einem Dokument klicke auf das Symbol {% octicon "file" aria-label="The paper icon" %}.

![Änderungen an gerendertem Fließtext](/assets/images/help/repository/rendered_prose_changes.png)

### Deaktivieren des Markdown-Renderings

{% data reusables.repositories.disabling-markdown-rendering %}

### Attributänderungen visualisieren

Zu Attributänderungen, die im Gegensatz zu Worten im gerenderten Dokument nicht sichtbar werden, wird eine QuickInfo angezeigt. Beispielsweise wird bei der Änderung einer Link-URL von einer Website zu einer anderen eine QuickInfo wie diese angezeigt:

![Attributänderungen an gerendertem Fließtext](/assets/images/help/repository/prose_diff_attributes.png)

### Kommentare zu Änderungen

[Commitkommentare](/articles/commenting-on-differences-between-files) können nur Dateien in der *Quellansicht* und nur zeilenweise hinzugefügt werden.

### Zu Headern verknüpfen

Wie bei [anderen gerenderten Fließtextdokumenten](/articles/about-readmes) wird beim Zeigen auf eine Kopfzeile in deinem Dokument ein Linksymbol erstellt. Du kannst die Leser deines gerenderten Fließtexts über Links zu bestimmten Abschnitten leiten.

### Komplexe Unterschiede anzeigen

Einige Pull Requests umfassen sehr viele Änderungen an großen und komplexen Dokumenten. Wenn die Analyse der Änderungen zu lange dauert, kann {% data variables.product.product_name %} nicht immer eine gerenderte Ansicht der Änderungen generieren. Wenn dies der Fall ist, wird beim Klicken auf die gerenderte Schaltfläche eine Fehlermeldung angezeigt.

![Meldung, wenn die Ansicht nicht gerendert werden kann](/assets/images/help/repository/prose_diff_rendering.png)

Du kannst die Änderungen jedoch auch in der Quellansicht analysieren und kommentieren.

### HTML-Elemente anzeigen

Gerenderte Ansichten der Commits an HTML-Dokumenten werden nicht direkt unterstützt. In einigen Formaten wie Markdown kannst du beliebiges HTML in ein Dokument einbetten. Wenn diese Dokumente in {% data variables.product.product_name %} dargestellt werden, kann ein Teil dieser eingebetteten HTML in einer Vorschau angezeigt werden, manch andere HTML (wie ein eingebettetes YouTube-Video) hingegen nicht.

Im Allgemeinen zeigen gerenderte Ansichten von Dokumentänderungen, die eingebettete HTML enthalten, diejenigen Änderungen an den Elementen an, die in der {% data variables.product.product_name %}-Ansicht des Dokuments unterstützt werden. Aus Gründen der Vollständigkeit sollten Änderungen an Dokumenten, die eingebettete HTML enthalten, immer sowohl in der gerenderten als auch in der Quellansicht überprüft werden.

## Zuordnen von GeoJSON- bzw. TopoJSON-Dateien zu {% data variables.product.prodname_dotcom %}

{% data variables.product.product_name %} unterstützt die Zuordnung von GeoJSON- und TopoJSON-Daten in {% data variables.product.product_name %}-Repositorys. Committe die Datei einfach so, wie bei den Erweiterungen `.geojson` oder `.topojson`. Dateien mit der Erweiterung `.json` werden ebenfalls unterstützt, aber nur, wenn `type` auf `FeatureCollection`, `GeometryCollection` oder `topology` festgelegt ist. Navigiere dann zum Pfad der GeoJSON- oder TopoJSON-Datei auf GitHub.com.

Wenn du rechts auf das Papiersymbol klickst, siehst du auch die Änderungen, die als Teil eines Commits an dieser Datei vorgenommen wurden.

![Screenshot von Quellen-Anzeigeauswahl](/assets/images/help/repository/source-render-toggle-geojson.png)

### Geometrietypen

Karten in {% data variables.product.product_name %} verwenden [Leaflet.js](http://leafletjs.com) und unterstützen alle Geometrietypen, die in der [geoJSON-Spezifikation](http://www.geojson.org/geojson-spec.html) beschrieben sind (Point, LineString, Polygon, MultiPoint, MultiLineString, MultiPolygon und GeometryCollection). TopoJSON-Dateien sollten vom Typ „Topologie“ sein und der [TopoJSON-Spezifikation](https://github.com/mbostock/topojson/wiki/Specification) entsprechen.

{% ifversion geoJSON-with-MapBox %}
### Funktionen stilisieren

Du kannst anpassen, wie Features angezeigt werden – z. B. eine bestimmte Farbe festlegen oder ein beschreibendes Symbol hinzufügen –, indem du zusätzliche Metadaten in den Eigenschaften des GeoJSON-Objekts übergibst. Die Optionen sind:

* `marker-size` - `small`, `medium` oder `large`
* `marker-color`: gültige RGB-Farbe im Hexadezimalformat
* `marker-symbol`: eine Symbol-ID aus dem [Maki-Projekt](http://mapbox.com/maki/) oder ein einzelnes alphanumerisches Zeichen (a–z oder 0–9).
* `stroke`: Farbe eines Polygonrands oder einer Linie (RGB)
* `stroke-opacity`: Deckkraft eines Polygonrands oder einer Linie (0,0–1,0)
* `stroke-width`: Breite eines Polygonrands oder einer Linie
* `fill`: Farbe im Inneren eines Polygons (RGB)
* `fill-opacity`: Deckkraft im Inneren eines Polygons (0,0–1,0)

Weitere Informationen findest du unter [Version 1.1.0 der Open-Simplestyle-Spezifikation](https://github.com/mapbox/simplestyle-spec/tree/master/1.1.0).
{% endif %}

### Einbetten deiner Karte an anderer Stelle

Möchtest du deine GeoJSON-Karte an anderer Stelle als {% data variables.product.product_name %} bereitstellen? Passe einfach diese Vorlage an, und integriere sie in eine HTML-Seite, die JavaScript unterstützt (z. B. [{% data variables.product.prodname_pages %}](http://pages.github.com)):

```html
<script src="https://embed.github.com/view/geojson/<username>/<repo>/<ref>/<path_to_file>"></script>
```

Wenn die URL deiner Karte z. B. [github.com/benbalter/dc-wifi-social/blob/master/bars.geojson](https://github.com/benbalter/dc-wifi-social/blob/master/bars.geojson) ist, lautet dein Einbettungscode:

```html
<script src="https://embed.github.com/view/geojson/benbalter/dc-wifi-social/master/bars.geojson"></script>
```

Standardmäßig ist die eingebettete Karte 420 Pixel breit und 620 Pixel hoch. Du kannst die Ausgabe jedoch anpassen, indem du die Variablen für Höhe und Breite als Parameter am Ende übergibst, beispielsweise `?height=300&width=500`.

{% tip %}

**Hinweis:** `ref` kann ein Branch oder der Hash zu einem einzelnen Commit (z. B. `2391ae`) sein.

{% endtip %}

{% ifversion mermaid %}
### Zuordnen im Markdown

Du kannst GeoJSON und TopoJSON direkt im Markdown einbetten. Weitere Informationen findest du unter [Erstellen von Diagrammen](/get-started/writing-on-github/working-with-advanced-formatting/creating-diagrams#creating-geojson-and-topojson-maps).
{% endif %}

### Clustering

Wenn deine Karte eine große Anzahl von Markierungen (ungefähr mehr als 750) enthält, bündelt GitHub benachbarte Markierungen automatisch in größeren Zoomstufen. Klicke einfach auf den Cluster oder zoome heran, um einzelne Markierungen zu sehen.

### Mit der zugrunde liegenden Karte stimmt etwas nicht

Die zugrunde liegenden Kartendaten (Straßennamen, Wege usw.) stammen von [OpenStreetMap](http://www.openstreetmap.org/), einem Gemeinschaftsprojekt zur Erstellung einer kostenlosen bearbeitbaren Karte der ganzen Welt. Wenn du feststellst, dass etwas nicht ganz richtig ist, kannst du, da es ein Open-Source-Projekt ist, dich ganz einfach [registrieren](https://www.openstreetmap.org/user/new) und eine Korrektur übermitteln.

### Problembehandlung

Wenn du Probleme beim Rendern von GeoJSON-Dateien hast, überprüfe, ob du eine gültige GeoJSON-Datei hast, indem du einen [GeoJSON-Linter](http://geojsonlint.com/) auf die Datei anwendest. Wenn deine Punkte an einer anderen Stelle angezeigt werden als erwartet (<em>z. B.</em> mitten im Meer), wurde auf die Daten wahrscheinlich eine Projektion angewandt, die derzeit nicht unterstützt wird. Derzeit unterstützt {% data variables.product.product_name %} nur die Projektion `urn:ogc:def:crs:OGC:1.3:CRS84`.

Wenn deine `.geojson`-Datei besonders groß ist (über 10 MB), kann sie außerdem nicht im Browser gerendert werden. Wenn dies der Fall ist, wird im Allgemeinen eine ähnliche Mitteilung wie die folgende angezeigt:

![Große Datei](/assets/images/help/repository/view_raw.png)

Es kann dennoch möglich sein, die Daten zu rendern, indem du die Datei `.geojson` in [TopoJSON](https://github.com/mbostock/topojson) konvertierst, ein Komprimierungsformat, das in einigen Fällen die Dateigröße um bis zu 80 % reduzieren kann. Natürlich kannst du die Datei grundsätzlich in kleinere Abschnitte aufteilen (z. B. nach Land oder Jahr) und die Daten in Form von mehreren Dateien im Repository speichern.

### Weiterführende Themen

{% ifversion geoJSON-with-MapBox %}
* [Dokumentation zu Leaflet.js](https://leafletjs.com/)
* [MapBox-Dokumentation zu Markierungsstilen](http://www.mapbox.com/developers/simplestyle/) {%- else %}
* [Azure Maps-Dokumentation](https://docs.microsoft.com/en-us/azure/azure-maps/) {%- endif %}
* [TopoJSON-Wiki](https://github.com/mbostock/topojson/wiki)

## Arbeiten mit Jupyter Notebook-Dateien in {% data variables.product.prodname_dotcom %}

Wenn du Jupyter Notebook- oder IPython Notebook-Dateien mit der Erweiterung *.ipynb* auf {% data variables.location.product_location %} hinzufügst, werden sie in deinem Repository als statische HTML-Dateien gerendert.

Die interaktiven Features des Notebooks, beispielsweise benutzerdefinierte JavaScript-Plots, funktionieren in deinem Repository auf {% data variables.location.product_location %} nicht. Ein Beispiel findest du unter [*Linking und „Interactions.ipynb“*](https://github.com/bokeh/bokeh-notebooks/blob/main/tutorial/06%20-%20Linking%20and%20Interactions.ipynb).

Du kannst [nbviewer](https://nbviewer.jupyter.org/) verwenden, um dein Jupyter Notebook mit gerendertem JavaScript-Inhalt anzuzeigen oder um deine Notebook-Dateien mit anderen zu teilen. Ein Beispiel für das Rendern mit nbviewer findest du unter [*Linking und „Interactions.ipynb“*](https://nbviewer.jupyter.org/github/bokeh/bokeh-notebooks/blob/main/tutorial/06%20-%20Linking%20and%20Interactions.ipynb).

Wenn du eine vollständig interaktive Version deines Jupyter Notebook anzeigen möchtest, kannst du einen Notebookserver lokal einrichten. Weitere Informationen findest du in der [offiziellen Dokumentation zu Jupyter](http://jupyter.readthedocs.io/en/latest/index.html).

### Problembehandlung

Wenn du Probleme beim Rendern von Jupyter Notebook-Dateien als statischen HTML-Code hast, kannst du die Datei lokal an der Befehlszeile konvertieren, indem du den [Befehl `nbconvert`](https://github.com/jupyter/nbconvert) verwendest:

```shell
$ jupyter nbconvert --to html NOTEBOOK-NAME.ipynb
```

### Weiterführende Themen

- [GitHub-Repository für Jupyter Notebook](https://github.com/jupyter/jupyter_notebook)
- [Katalog der Jupyter Notebooks](https://github.com/jupyter/jupyter/wiki)

{% ifversion mermaid %}
## Anzeigen von Mermaid-Dateien auf {% data variables.product.prodname_dotcom %}

{% data variables.product.product_name %} unterstützt das Rendern von Mermaid-Dateien in Repositorys. Committe die Datei so, wie bei den Erweiterungen `.mermaid` oder `.mmd`. Navigiere dann zum Pfad der Mermaid-Datei auf {% data variables.product.prodname_dotcom %}.

Beispiel für das Hinzufügen einer `.mmd`-Datei mit dem folgenden Inhalt in deinem Repository:

```
graph TD
    A[Friend's Birthday] -->|Get money| B(Go shopping)
    B --> C{Let me think}
    C -->|One| D["Cool <br> Laptop"]
    C -->|Two| E[iPhone]
    C -->|Three| F[fa:fa-car Car]
```

Wenn du die Datei im Repository anzeigst, wird sie als Flussdiagramm gerendert.
![Gerendertes Diagramm aus der Mermaid-Datei](/assets/images/help/repository/mermaid-file-diagram.png)

### Problembehandlung

Wenn dein Diagramm überhaupt nicht gerendert wird, vergewissere dich, dass es gültige Mermaid-Markdown-Syntax enthält, indem du dein Diagramm mit dem [Mermaid-Live-Editor](https://mermaid.live/edit) überprüfst.

Wenn das Diagramm zwar angezeigt, aber nicht wie erwartet dargestellt wird, kannst du eine neue [{% data variables.product.prodname_github_community %}-Diskussion](https://github.com/orgs/community/discussions/categories/general) erstellen und die Bezeichnung `Mermaid` hinzufügen. 

#### Bekannte Probleme

* Sequenzdiagramme werden häufig mit zusätzlicher Auffüllung unterhalb des Diagramms gerendert, die weiter zunimmt, wenn das Diagramm größer wird. Dies ist ein bekanntes Problem mit der Mermaid-Bibliothek.
* Akteurknoten mit Popupmenüs funktionieren innerhalb von Sequenzdiagrammen nicht wie erwartet. Dies liegt an einer Abweichung, wie JavaScript-Ereignisse einem Diagramm hinzugefügt werden, wenn die API der Mermaid-Bibliothek zum Rendern eines Diagramms verwendet wird.
* Nicht alle Diagramme sind a11y-konform. Dies kann sich auf Benutzer*innen auswirken, die auf eine Sprachausgabe angewiesen sind.

### Mermaid in Markdown

Du kannst Mermaid-Syntax direkt in Markdown einbetten. Weitere Informationen findest du unter [Erstellen von Diagrammen](/get-started/writing-on-github/working-with-advanced-formatting/creating-diagrams#creating-mermaid-diagrams).

### Weiterführende Themen

* [Dokumentation zu Mermaid.js](https://mermaid-js.github.io/mermaid/#/)
* [Mermaid.js-Live-Editor](https://mermaid.live/edit) {% endif %}

