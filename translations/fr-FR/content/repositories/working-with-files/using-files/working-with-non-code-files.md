---
title: Travailler avec des fichiers non basés sur du code
intro: '{% data variables.product.product_name %} prend en charge le rendu et la différence dans un certain nombre de formats de fichiers autres que du code.'
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
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107604'
---
## Rendu et comparaison d’images

{% data variables.product.product_name %} peut afficher plusieurs formats d’image courants, à savoir PNG, JPG, GIF, PSD et SVG. En plus de les afficher simplement, il existe plusieurs façons de comparer les différences entre les versions de ces formats d’image.

{% note %}

**Remarque :** 
- {% data variables.product.prodname_dotcom %} ne prend pas en charge la comparaison des différences entre les fichiers PSD. 
- Si vous utilisez le navigateur Firefox, il se peut que les images SVG sur {% data variables.product.prodname_dotcom %} ne s’affichent pas.

{% endnote %}

### Affichage d’images

Vous pouvez parcourir et afficher directement des images dans votre dépôt sur {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %} :

![Image incluse](/assets/images/help/images/view.png)

Les images SVG ne prennent actuellement pas en charge les scripts ou animations inclus.

### Affichage des différences

Vous pouvez comparer visuellement des images dans trois modes : [côte-à-côte](#2-up), [balayage](#swipe) et [peau d’oignon](#onion-skin).

#### Côte-à-côte

Le mode **Côte-à-côte** est le mode par défaut. Il donne un aperçu rapide des deux images. En outre, si l’image a changé de taille entre les versions, le changement de dimension réel s’affiche. Cela devrait montrer très clairement quand des éléments sont redimensionnés, par exemple, quand des composants sont mis à niveau vers des résolutions plus élevées.

![Côte-à-côte](/assets/images/help/repository/images-2up-view.png)

#### Balayer

Le mode **Balayage** vous permet d’afficher des parties de votre image côte-à-côte. Vous vous demandez si des couleurs ont changé entre les différentes versions ? Faites glisser le curseur de balayage sur la zone en question et comparez les pixels par vous-même.

![Balayer](/assets/images/help/repository/images-swipe-view.png)

#### Peau d’oignon

Le mode **Peau d’oignon** est vraiment pratique quand des éléments sont très légèrement déplacés, de manière presque imperceptible. Une icône est-elle décalée de deux pixels vers la gauche ? Faites glisser le curseur d’opacité un peu vers l’arrière, et observez si des éléments se déplacent.

![Peau d’oignon](/assets/images/help/repository/images-onion-view.gif)

## Visionneuse de fichier 3D

{% data variables.product.product_name %} peut héberger et afficher des fichiers 3D avec l’extension *.stl*.

Lorsque vous regardez directement un fichier STL sur {% data variables.product.product_name %} vous pouvez :

* Cliquer et faire glisser pour faire pivoter le modèle.
* Cliquer avec le bouton droit et faire glisser pour translater l’affichage.
* Faire défiler pour effectuer un zoom avant et arrière.
* Cliquez sur les différents modes d’affichage pour changer d’affichage.

### Différences

En regardant une validation ou un ensemble de modifications incluant un fichier STL, vous pourrez voir une différence avant et après du fichier.

Par défaut, vous obtiendrez un affichage où tout ce qui est inchangé figure dans une maquette. Les éléments ajoutés sont colorés en vert, et les éléments supprimés en rouge.

![maquette](/assets/images/help/repository/stl_wireframe.png)

Vous pouvez également sélectionner l’option **Curseur de révision**, qui vous permet d’utiliser un curseur en haut du fichier pour basculer entre les révisions actuelles et précédentes.

### Correction de la lenteur des performances

Si vous voyez cette icône dans l’angle de la visionneuse, cela signifie que la technologie WebGL n’est pas disponible sur votre navigateur :

![Erreur de fenêtre contextuelle WebGL](/assets/images/help/repository/render_webgl_error.png)

WebGL est nécessaire pour tirer pleinement parti du matériel de votre ordinateur. Nous vous recommandons d’essayer des navigateurs tels que [Chrome](https://www.google.com/intl/en/chrome/browser/) ou [Firefox](https://www.mozilla.org/en-US/firefox/new/), qui sont fournis avec WebGL activé.

### Erreur : « Affichage impossible »

Si votre modèle n’est pas valide, il se peut que GitHub ne puisse pas afficher le fichier. En outre, les fichiers d’une taille supérieure à 10 Mo sont trop volumineux pour être affichés dans GitHub.

### Incorporation de votre modèle ailleurs

Pour afficher votre fichier 3D ailleurs sur Internet, modifiez ce modèle et placez-le sur n’importe quelle page HTML prenant en charge JavaScript :

```html
<script src="https://embed.github.com/view/3d/<username>/<repo>/<ref>/<path_to_file>"></script>
```

Par exemple, si l’URL de votre modèle est [`github.com/skalnik/secret-bear-clip/blob/master/stl/clip.stl`](https://github.com/skalnik/secret-bear-clip/blob/master/stl/clip.stl), votre code incorporé est :

```html
<script src="https://embed.github.com/view/3d/skalnik/secret-bear-clip/master/stl/clip.stl"></script>
```

Par défaut, le moteur de rendu incorporé affiche 420 pixels en largeur et 620 pixels en hauteur, mais vous pouvez personnaliser la sortie en passant des variables de hauteur et de largeur en tant que paramètres à la fin de l’URL, par exemple `?height=300&width=500`.

{% tip %}

**Remarque** : `ref` peut être une branche ou le hachage d’une validation individuelle (par exemple `2391ae`).

{% endtip %}

{% ifversion mermaid %}
### Rendu dans Markdown

Vous pouvez incorporer la syntaxe STL ASCII directement dans Markdown. Pour plus d’informations, consultez « [Création de diagrammes](/get-started/writing-on-github/working-with-advanced-formatting/creating-diagrams#creating-stl-3d-models) ».
{% endif %}

## Rendu de données CSV et TSV

GitHub prend en charge le rendu de données tabulaires sous la forme de fichiers *.csv* (séparés par des virgules) et *.tsv* (séparés par des tabulations).

![Exemple de CSV rendu](/assets/images/help/repository/rendered_csv.png)

Quand il est affiché, tout fichier _.csv_ ou _.tsv_ commité dans un dépôt sur {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %} s’affiche automatiquement comme une table interactive, complète avec des en-têtes et une numérotation des lignes. Par défaut, nous partons toujours du principe que la première ligne est celle de l’en-tête.

Vous pouvez lier à une ligne particulière en cliquant sur son numéro, ou sélectionner plusieurs lignes tout en maintenant la touche Maj enfoncée. Copiez simplement l’URL et envoyez-la à un ami.

### Recherche de données

Si vous souhaitez trouver une certaine valeur dans votre jeu de données, vous pouvez commencer à taper dans la barre de recherche directement au-dessus du fichier. Les lignes sont filtrées automatiquement :

![Recherche de valeurs](/assets/images/help/repository/searching_csvs.gif)

### Gestion des erreurs

Il peut arriver que vous découvriez que votre fichier CSV ou TSV ne s’affiche pas. Dans ces cas, une boîte d’erreur s’affiche en bas de votre texte brut, ce suggérant la nature possible de l’erreur.

![Message d’erreur d’affichage de CSV](/assets/images/help/repository/csv_render_error.png)

Les erreurs courantes sont les suivantes :

* Nombres de colonnes discordants. Vous devez avoir le même nombre de séparateurs dans chaque ligne, même si la cellule est vide
* Dépassement de la taille du fichier. Notre rendu ne fonctionne que pour des fichiers d’une taille maximale de 512 Ko. Tout fichier d’une taille supérieure ralentit le navigateur.

## Rendu de documents PDF

GitHub prend en charge le rendu de documents PDF.

![Document PDF affiché](/assets/images/help/repository/rendered-pdf.png)

Actuellement, les liens au sein des fichiers PDF sont ignorés.

## Rendu des différences dans documents en prose

Les validations et demandes de tirage qui incluent des documents en prose ont la possibilité de représenter ces documents avec des affichage *source* et *rendue*.

L’affichage source montre le texte brut qui a été tapé, tandis que l’affichage rendu montre à quoi ce texte ressemblerait une fois rendu sur {% data variables.product.product_name %}. Par exemple, il pourrait s’agir de la différence entre afficher `**bold**` dans Markdown et **bold** dans l’affichage rendu.

Le rendu de prose est pris en charge pour les documents rendus que [github/markup](https://github.com/github/markup) prend en charge :

* Markdown
* AsciiDoc
* Textile
* ReStructuredText
* Rdoc
* Org
* Creole
* MediaWiki
* Pod

![Icône Papier pour afficher un document en prose rendu](/assets/images/help/repository/rendered_prose_diff.png)

Vous pouvez cliquer sur {% octicon "file" aria-label="The paper icon" %} pour voir les modifications apportées au document dans le cadre d’une validation.

![Modifications de prose affichées](/assets/images/help/repository/rendered_prose_changes.png)

### Désactivation de l’affichage de Markdown

{% data reusables.repositories.disabling-markdown-rendering %}

### Visualisation de modifications d’attribut

Nous fournissons une info-bulle décrivant les modifications apportées aux attributs qui, contrairement aux mots, ne seraient pas visibles autrement dans le document affiché. Par exemple, si une URL de lien change d’un site web à un autre, nous affichons une info-bulle comme la suivante :

![Modifications apportées à l’attribut Prose affiché](/assets/images/help/repository/prose_diff_attributes.png)

### Commentaires sur les modifications

Des [commentaires de validation](/articles/commenting-on-differences-between-files) ne peuvent être ajoutés qu’à des fichiers au sein de l’affichage *source*, ligne par ligne.

### Liaison à des en-têtes

Comme avec d’[autres documents en prose affichés](/articles/about-readmes), le positionnement du curseur sur un en-tête dans votre document a pour effet de créer une icône de lien. Vous pouvez lier des lecteurs de votre prose affichée à des sections spécifiques.

### Affichage des différences complexes

Certaines demandes de tirage impliquent un grand nombre de modifications avec des documents volumineux et complexes. Quand l’analyse des modifications prend trop de temps, {% data variables.product.product_name %} ne peut pas toujours produire un affichage des modifications. Dans ce cas, un message d’erreur s’affiche lorsque vous cliquez sur le bouton de rendu.

![Message quand un affichage ne peut pas être rendu](/assets/images/help/repository/prose_diff_rendering.png)

Vous pouvez toujours utiliser la vue source pour analyser et commenter les modifications.

### Affichage d’éléments HTML

Nous ne prenons pas directement en charge les rendus de validations dans des documents HTML. Certains formats, tels que Markdown, vous permettent d’incorporer du code HTML arbitraire dans un document. Lorsque ces documents sont affichés sur {% data variables.product.product_name %}, certains éléments de ce code HTML incorporé peuvent être affichés dans un aperçu, tandis que d’autres (comme une vidéo YouTube incorporée) ne le peuvent pas.

En général, les affichages de modifications apportées à un document contenant du code HTML incorporé montrent les modifications apportées aux éléments pris en charge dans l’affichage {% data variables.product.product_name %} du document. Les modifications apportées à des documents contenant du code HTML incorporé doivent toujours être révisées dans les affichages rendus et sources par souci d’exhaustivité.

## Cartographie de fichiers GeoJSON/TopoJSON sur {% data variables.product.prodname_dotcom %}

{% data variables.product.product_name %} prend en charge le rendu des fichiers de carte GeoJSON et TopoJSON au sein de dépôts {% data variables.product.product_name %}. Validez simplement le fichier comme vous le feriez normalement à l’aide d’une extension `.geojson` ou `.topojson`. Les fichiers avec une extension `.json` sont également pris en charge, mais uniquement si `type` est défini sur `FeatureCollection`, `GeometryCollection` ou `topology`. Accédez ensuite au chemin du fichier GeoJSON/TopoJSON sur GitHub.com.

En cliquant sur l’icône Papier à droite, vous verrez également les modifications apportées à ce fichier dans le cadre d’une validation.

![Capture d’écran de bascule du rendu source](/assets/images/help/repository/source-render-toggle-geojson.png)

### Type de géométries

Les cartes sur {% data variables.product.product_name %} utilisent [Leaflet.js](http://leafletjs.com) et prennent en charge tous les types de géométries décrits dans la [spécification geoJSON](http://www.geojson.org/geojson-spec.html) (Point, LineString, Polygon, MultiPoint, MultiLineString, MultiPolygon et GeometryCollection). Les fichiers TopoJSON doivent être de type « Topologie » et respecter la [spécification TopoJSON](https://github.com/mbostock/topojson/wiki/Specification).

{% ifversion geoJSON-with-MapBox %}
### Styles des fonctionnalités

Vous pouvez personnaliser la façon dont les caractéristiques s’affichent, par exemple spécifier une couleur particulière ou ajouter une icône descriptive, en passant des métadonnées supplémentaires dans les propriétés de l’objet GeoJSON. Les options sont :

* `marker-size` - `small`, `medium` ou `large`
* `marker-color` - Couleur hexadécimale RVB valide
* `marker-symbol` - ID d’icône du [projet Maki](http://mapbox.com/maki/) ou caractère alphanumérique unique (a-z ou 0-9).
* `stroke` - couleur d’une bordure de polygone ou d’une ligne (RVB)
* `stroke-opacity` - opacité d’une bordure de polygone ou d’une ligne (0.0 - 1.0)
* `stroke-width` - largeur d’une bordure de polygone ou d’une ligne
* `fill` - couleur de l’intérieur d’un polygone (RVB)
* `fill-opacity` - opacité de l’intérieur d’un polygone (0.0 - 1.0)

Pour plus d’informations, consultez la [version 1.1.0 de la spécification open simplestyle ouverte](https://github.com/mapbox/simplestyle-spec/tree/master/1.1.0).
{% endif %}

### Incorporation de votre carte ailleurs

Vous voulez rendre votre carte GeoJSON disponible ailleurs que dans {% data variables.product.product_name %} ? Modifiez simplement ce modèle et placez-le dans n’importe quelle page HTML prenant en charge Javascript (par exemple [{% data variables.product.prodname_pages %}](http://pages.github.com)) :

```html
<script src="https://embed.github.com/view/geojson/<username>/<repo>/<ref>/<path_to_file>"></script>
```

Par exemple, si l’URL de votre carte est [github.com/benbalter/dc-wifi-social/blob/master/bars.geojson](https://github.com/benbalter/dc-wifi-social/blob/master/bars.geojson), votre code incorporé est le suivant :

```html
<script src="https://embed.github.com/view/geojson/benbalter/dc-wifi-social/master/bars.geojson"></script>
```

Par défaut, la taille de la carte incorporée est de 420 x 620 pixels, mais vous pouvez personnaliser la sortie en passant des variables de hauteur et de largeur en tant que paramètres à la fin, comme `?height=300&width=500`.

{% tip %}

**Remarque** : `ref` peut être une branche ou le hachage d’une validation individuelle (par exemple `2391ae`).

{% endtip %}

{% ifversion mermaid %}
### Cartographie dans Markdown

Vous pouvez incorporer des fichiers GeoJSON et TopoJSON directement dans Markdown. Pour plus d’informations, consultez « [Création de diagrammes](/get-started/writing-on-github/working-with-advanced-formatting/creating-diagrams#creating-geojson-and-topojson-maps) ».
{% endif %}

### Clustering

Si votre carte contient un grand nombre de marqueurs (en gros plus de 750), GitHub regroupera automatiquement les marqueurs à proximité à des niveaux de zoom supérieurs. Cliquez simplement ou effectuez un zoom avant sur le cluster pour afficher des marqueurs individuels.

### Il y a un problème avec la carte sous-jacente

Les données de la carte sous-jacente (noms de rue, routes, etc.) sont pilotées par [OpenStreetMap](http://www.openstreetmap.org/), un projet collaboratif visant à créer une carte du monde éditable gratuite. Si vous remarquez que quelque chose n’est pas tout à fait correct, car il s’agit d’un projet open source, il vous suffit de [vous inscrire](https://www.openstreetmap.org/user/new) et d’envoyer un correctif.

### Dépannage

Si vous rencontrez des problèmes de rendu de fichiers GeoJSON, vérifiez que le fichier dont vous disposez est valide en l’exécutant via un [linter GeoJSON](http://geojsonlint.com/). Si vos points n’apparaissent pas là où vous vous y attendez (<em>par exemple</em>, au milieu de l’océan), il est probable que les données se trouvent dans une projection qui n’est actuellement pas prise en charge. Actuellement, {% data variables.product.product_name %} ne prend en charge que la `urn:ogc:def:crs:OGC:1.3:CRS84` projection.

En outre, si votre fichier `.geojson` est particulièrement volumineux (plus de 10 Mo), il n’est pas possible de l’afficher dans le navigateur. Dans ce cas, vous verrez généralement un message ressemblant à ceci :

![Fichier volumineux](/assets/images/help/repository/view_raw.png)

Il est peut-être encore possible d’afficher les données en convertissant le fichier `.geojson` en fichier [TopoJSON](https://github.com/mbostock/topojson), un format de compression qui, dans certains cas, peut réduire la taille d’une fichier de jusqu’à 80 %. Bien sûr, vous pouvez toujours morceler le fichier en blocs plus petits (par exemple, par état ou année), et de stocker les données sous forme de fichiers multiples dans le dépôt.

### Pour aller plus loin

{% ifversion geoJSON-with-MapBox %}
* [Documentation Leaflet.js](https://leafletjs.com/)
* [Documentation sur les styles de marqueurs MapBox](http://www.mapbox.com/developers/simplestyle/) {%- else %}
* [Documentation Azure Maps](https://docs.microsoft.com/en-us/azure/azure-maps/) {%- endif %}
* [Wiki TopoJSON](https://github.com/mbostock/topojson/wiki)

## Utilisation de fichiers Jupyter Notebook sur {% data variables.product.prodname_dotcom %}

Quand vous ajoutez des fichiers Jupyter Notebook ou IPython Notebook avec une extension *.ipynb* sur {% data variables.location.product_location %}, ils s’affichent en tant que fichiers HTML statiques dans votre dépôt.

Les fonctionnalités interactives du notebook, telles que les tracés JavaScript personnalisés, ne fonctionnent pas dans votre dépôt sur {% data variables.location.product_location %}. Pour obtenir un exemple, consultez [*Liaison et Interactions.ipynb*](https://github.com/bokeh/bokeh-notebooks/blob/main/tutorial/06%20-%20Linking%20and%20Interactions.ipynb).

Pour afficher votre Jupyter Notebook avec du contenu JavaScript affiché, ou pour partager vos fichiers de notebook avec d’autres personnes, vous pouvez utiliser [nbviewer](https://nbviewer.jupyter.org/). Pour obtenir un exemple, consultez [*Liaison et Interactions.ipynb*](https://nbviewer.jupyter.org/github/bokeh/bokeh-notebooks/blob/main/tutorial/06%20-%20Linking%20and%20Interactions.ipynb) affichés sur nbviewer.

Pour afficher une version pleinement interactive de votre Jupyter Notebook, vous pouvez configurer un serveur de notebook localement. Pour plus d’informations, consultez la [documentation officielle de Jupyter](http://jupyter.readthedocs.io/en/latest/index.html).

### Dépannage

Si vous éprouvez des difficultés à afficher un fichier Jupyter Notebook en HTML statique, vous pouvez le convertir localement sur la ligne de commande à l’aide de la [commande `nbconvert`](https://github.com/jupyter/nbconvert) :

```shell
$ jupyter nbconvert --to html NOTEBOOK-NAME.ipynb
```

### Pour aller plus loin

- [Dépôt GitHub du Jupyter Notebook](https://github.com/jupyter/jupyter_notebook)
- [Galerie de notebooks Jupyter](https://github.com/jupyter/jupyter/wiki)

{% ifversion mermaid %}
## Affichage de fichiers Mermaid sur {% data variables.product.prodname_dotcom %}

{% data variables.product.product_name %} prend en charge le rendu de fichiers Mermaid dans des dépôts. Validez le fichier comme vous le feriez normalement à l’aide d’une extension `.mermaid` ou `.mmd`. Accédez ensuite au chemin du fichier Mermaid sur {% data variables.product.prodname_dotcom %}.

Par exemple, si vous ajoutez un fichier `.mmd` avec le contenu suivant à votre dépôt :

```
graph TD
    A[Friend's Birthday] -->|Get money| B(Go shopping)
    B --> C{Let me think}
    C -->|One| D["Cool <br> Laptop"]
    C -->|Two| E[iPhone]
    C -->|Three| F[fa:fa-car Car]
```

Lorsque vous affichez le fichier dans le dépôt, il est rendu sous la forme d’un organigramme.
![Diagramme de fichier Mermaid rendu](/assets/images/help/repository/mermaid-file-diagram.png)

### Dépannage

Si votre graphique ne s’affiche pas du tout, assurez-vous qu’il contient une syntaxe Markdown Mermaid valide en le vérifiant avec l’[éditeur en direct Mermaid](https://mermaid.live/edit).

Si le graphique s’affiche, mais ne présente pas l’aspect prévu, vous pouvez créer une [discussion {% data variables.product.prodname_github_community %}](https://github.com/orgs/community/discussions/categories/general) et ajouter l’étiquette `Mermaid`. 

#### Problèmes connus

* Diagrammes de séquence s’affichent fréquemment avec un remplissage supplémentaire sous le graphique, du remplissage étant ajouté à mesure que la taille du graphique augmente. Il s’agit d’un problème connu avec la bibliothèque Mermaid.
* Les nœuds d’acteur avec des menus contextuels ne fonctionnent pas comme prévu à l’intérieur des diagrammes de séquence. Cela est dû à une différence dans la façon dont les événements JavaScript sont ajoutés à un graphique quand l’API de la bibliothèque Mermaid est utilisée pour afficher un graphique.
* Les graphiques ne sont pas tous conformes à a11y. Cela peut affecter des utilisateurs qui dépendent d’un lecteur d’écran.

### Mermaid dans Markdown

Vous pouvez incorporer de la syntaxe Mermaid directement dans Markdown. Pour plus d’informations, consultez « [Création de diagrammes](/get-started/writing-on-github/working-with-advanced-formatting/creating-diagrams#creating-mermaid-diagrams) ».

### Pour aller plus loin

* [Documentation Mermaid.js](https://mermaid-js.github.io/mermaid/#/)
* [Éditeur en direct Mermaid.js](https://mermaid.live/edit) {% endif %}

