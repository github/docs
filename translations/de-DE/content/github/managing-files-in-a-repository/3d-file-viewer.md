---
title: 3D-Dateianzeige
redirect_from:
  - /articles/stl-file-viewer/
  - /articles/3d-file-viewer
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - repositorys
---

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
