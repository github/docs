---
title: Bilder rendern und vergleichen
intro: '{% data variables.product.product_name %} kann verschiedene gängige Bildformate wie PNG, JPG, GIF, PSD und SVG darstellen. Neben der einfachen Wiedergabe bestehen aber auch verschiedene Möglichkeiten, Differenzen zwischen Versionen dieser Bildformate zu vergleichen.'
redirect_from:
  - /articles/rendering-and-diffing-images
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

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
