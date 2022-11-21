---
title: 'Работа с файлами, не связанными с кодом'
intro: '{% data variables.product.product_name %} поддерживает отрисовку изображений и поиск различий в нескольких форматах файлов, отличных от кода.'
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
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107608'
---
## Отрисовка изображений и поиск различий

{% data variables.product.product_name %} отображает популярные форматы изображений, включая PNG, JPG, GIF, PSD и SVG. Помимо простого отображения, существует несколько способов сравнения различий в версиях этих форматов изображений.

{% note %}

**Примечание**. 
- {% data variables.product.prodname_dotcom %} не поддерживает сравнение различий между PSD-файлами. 
- Если вы используете браузер Firefox, SVG на {% data variables.product.prodname_dotcom %} может не отрисовываться.

{% endnote %}

### Просмотр изображений

Вы можете напрямую просматривать и просматривать изображения в репозитории в {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %}:

![Встроенное изображение](/assets/images/help/images/view.png)

В настоящее время SVG не поддерживают встроенные скрипты и анимацию.

### Просмотр различий

Вы можете визуально сравнивать изображения в трех разных режимах: [2-up](#2-up), [swipe](#swipe) и [onion skin](#onion-skin).

#### 2-up

**2-up** — это режим по умолчанию, в котором вы смотрите на оба изображения. Кроме того, если в сравниваемых версиях у изображения разные размеры, отображается фактическое изменение размера. Это удобный способ для сравнения объектов разного размера, например при повышении разрешения.

![2-up](/assets/images/help/repository/images-2up-view.png)

#### Swipe

В режиме **swipe** можно сравнивать части изображения параллельно. Не уверены, изменились ли цвета между версиями? Перетащите ползунок в нужную область и визуально сравните фрагменты.

![Swipe](/assets/images/help/repository/images-swipe-view.png)

#### Onion skin

Режим **Onion skin** пригодится в ситуациях, когда элементы перемещаются на едва заметное расстояние. Например, значок сместился на два пикселя влево. Перетащите ползунок прозрачности немного назад и посмотрите, как сместились элементы.

![Onion skin](/assets/images/help/repository/images-onion-view.gif)

## Средство просмотра трехмерных файлов

{% data variables.product.product_name %} может размещать и отрисовывать трехмерные файлы с расширением *STL*.

Если вы напрямую просматриваете STL-файл в {% data variables.product.product_name %}, вы можете:

* Поворачивать модель с помощью перетаскивания, щелкнув левой кнопкой мыши.
* Преобразовывать представление с помощью перетаскивания, щелкнув правой кнопкой мыши.
* Увеличивать и уменьшать масштаб с помощью колесика мыши.
* Изменять представление, выбирая разные режимы.

### Различия

При просмотре фиксации или набора изменений, включающего STL-файл, вы сможете изучить файл до и после.

По умолчанию вы получите представление, в котором все элементы без изменений будут показаны контурно. Дополнения окрашены зеленым цветом, а удаленные части — красным.

![макет](/assets/images/help/repository/stl_wireframe.png)

Можно также выбрать вариант **Ползунок версии**, в котором с помощью ползунка в верхней части файла можно переключаться между текущей и предыдущей версиями.

### Решение проблемы низкой производительности

Если этот значок отображается в углу средства просмотра, технология WebGL недоступна в браузере:

![Всплывающая ошибка WebGL](/assets/images/help/repository/render_webgl_error.png)

WebGL позволяет использовать все преимущества аппаратного обеспечения вашего компьютера. Мы рекомендуем попробовать такие браузеры, как [Chrome](https://www.google.com/intl/en/chrome/browser/) или [Firefox](https://www.mozilla.org/en-US/firefox/new/), которые поставляются с включенным WebGL.

### Ошибка: "Не удается отобразить"

Если модель недопустима, GitHub может не отображать файл. Кроме того, GitHub не может отображать файлы больше 10 МБ.

### Внедрение модели в другое место

Чтобы отобразить трехмерный файл в другом месте в Интернете, измените этот шаблон и поместите его на любую HTML-страницу, поддерживающую JavaScript:

```html
<script src="https://embed.github.com/view/3d/<username>/<repo>/<ref>/<path_to_file>"></script>
```

Например, если URL-адрес модели [`github.com/skalnik/secret-bear-clip/blob/master/stl/clip.stl`](https://github.com/skalnik/secret-bear-clip/blob/master/stl/clip.stl), код внедрения будет следующим:

```html
<script src="https://embed.github.com/view/3d/skalnik/secret-bear-clip/master/stl/clip.stl"></script>
```

По умолчанию внедренный отрисовщик имеет ширину 420 пикселей на 620 пикселей, но вы можете настроить выходные данные, передав переменные высоты и ширины в качестве параметров в конце URL-адреса, например `?height=300&width=500`.

{% tip %}

**Примечание.** `ref` может быть ветвью или хэшем для отдельной фиксации (например`2391ae`).

{% endtip %}

{% ifversion mermaid %}
### Отрисовка в разметке Markdown

Синтаксис STL ASCII можно внедрить непосредственно в Markdown. Дополнительные сведения см. в разделе [Создание схем](/get-started/writing-on-github/working-with-advanced-formatting/creating-diagrams#creating-stl-3d-models).
{% endif %}

## Отрисовка данных CSV и TSV

GitHub поддерживает отрисовку табличных данных в виде *CSV*- и *TSV*-файлов.

![Пример преобразованного CSV-файла](/assets/images/help/repository/rendered_csv.png)

При просмотре _любой.csv_ или _TSV-файл_ , зафиксированный в репозитории в {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %} автоматически отображается в виде интерактивной таблицы с заголовками и нумеровкой строк. По умолчанию мы всегда предполагаем, что первая строка является строкой заголовка.

Вы можете выполнить привязку к определенной строке, щелкнув номер строки или выбрав несколько строк, удерживая клавишу SHIFT. Просто скопируйте URL-адрес и отправьте его другу.

### Поиск данных

Если вы хотите найти определенное значение в наборе данных, можно начать вводить текст в строке поиска непосредственно над файлом. Строки будут фильтроваться автоматически:

![Поиск значений](/assets/images/help/repository/searching_csvs.gif)

### Обработка ошибок

Иногда CSV-или TSV-файлы могут не отрисовываться. В этих случаях в нижней части необработанного текста появится поле с указанием предполагаемой ошибки.

![Сообщение об ошибке отрисовки CSV-файла](/assets/images/help/repository/csv_render_error.png)

Ниже перечислены распространенные ошибки.

* Несовпадение количества столбцов. В каждой строке должно быть одинаковое количество разделителей, даже если ячейка пуста
* Превышение размера файла. Отрисовка работает только для файлов размером до 512 КБ. Более крупные файлы замедляют браузер.

## Отрисовка PDF-документов

GitHub поддерживает отрисовку PDF-документов.

![Отрисованный PDF-документ](/assets/images/help/repository/rendered-pdf.png)

В настоящее время ссылки в PDF-файлах игнорируются.

## Отрисовка различий в текстовых документах

Фиксации и запросы на вытягивание, включающие текстовые документы, могут представлять эти документы с *исходным* и *отрисованным* представлениями.

В исходном представлении отображается введенный необработанный текст, в то время как отрисованное представление показывает, как этот текст будет выглядеть после отрисовки на {% data variables.product.product_name %}. Например, это может быть разница между отображением `**bold**` в Markdown и **полужирным шрифтом** в отрисованном представлении.

Отрисовка текста поддерживается для отрисованных документов, поддерживаемых [github/markup](https://github.com/github/markup):

* Markdown
* AsciiDoc
* Textile
* ReStructuredText
* Rdoc
* Организатор
* Creole
* MediaWiki
* Pod

![Значок листа бумаги для просмотра отрисованного текстового документа](/assets/images/help/repository/rendered_prose_diff.png)

Вы можете щелкнуть {% octicon "file" aria-label="The paper icon" %}, чтобы просмотреть изменения, внесенные в документ в рамках фиксации.

![Отрисованные изменения текстового документа](/assets/images/help/repository/rendered_prose_changes.png)

### Отключение отрисовки Markdown

{% data reusables.repositories.disabling-markdown-rendering %}

### Визуализация изменений атрибутов

Мы предоставляем подсказку, описывающую изменения атрибутов, которые не были бы видны в отрисованном документе. Например, если URL-адрес ссылки меняется с одного веб-сайта на другой, мы отобразим подсказку следующим образом:

![Отрисованные изменения атрибута prose](/assets/images/help/repository/prose_diff_attributes.png)

### Комментирование изменений

[Комментарии к фиксациям](/articles/commenting-on-differences-between-files) можно добавлять только в файлы в *исходном* представлении построчно.

### Связывание с заголовками

Как и в случае с [другими отрисованными текстовыми документами](/articles/about-readmes), при наведении указателя мыши на заголовок в документе создается значок ссылки. Вы можете указать читателям различий отрисованного текста на конкретные разделы.

### Просмотр сложных различий

Некоторые запросы на вытягивание включают большое количество изменений с большими сложными документами. Если анализ изменений занимает слишком много времени, {% data variables.product.product_name %} не всегда может создать отрисованное представление изменений. В этом случае при нажатии кнопки отрисовки появится сообщение об ошибке.

![Сообщение, когда представление не может быть отрисовано](/assets/images/help/repository/prose_diff_rendering.png)

Вы по-прежнему можете использовать исходное представление для анализа и комментирования изменений.

### Просмотр HTML-элементов

Мы не поддерживаем напрямую отрисованные представления фиксаций в HTML-документах. Некоторые форматы, такие как Markdown, позволяют внедрять произвольный HTML-код в документ. Если эти документы отображаются на {% data variables.product.product_name %}, некоторые из внедренных HTML могут отображаться в предварительном просмотре, а некоторые (например, внедренное видео YouTube) не могут.

Как правило, отрисованные представления изменений документа, содержащего внедренный HTML, будут отображать изменения элементов, поддерживаемых в представлении {% data variables.product.product_name %}документа. Изменения в документах, содержащих внедренный HTML, всегда следует проверять как в представлениях отрисовки, так и в исходных представлениях для полноты.

## Сопоставление файлов GeoJSON/TopoJSON на {% data variables.product.prodname_dotcom %}

{% data variables.product.product_name %} поддерживает отрисовку файлов карты GeoJSON и TopoJSON в репозиториях {% data variables.product.product_name %}. Просто зафиксируйте файл, как обычно, используя расширение `.geojson` или `.topojson`. Файлы с расширением `.json` также поддерживаются, но только в том случае, если для `type` задано значение `FeatureCollection`, `GeometryCollection`или `topology`. Затем перейдите по пути к файлу GeoJSON/TopoJSON на сайте GitHub.com.

Щелкнув значок бумаги справа, вы также увидите изменения, внесенные в этот файл в рамках фиксации.

![Снимок экрана: переключатель исходного представления](/assets/images/help/repository/source-render-toggle-geojson.png)

### Тип геометрического объекта

Карты в {% data variables.product.product_name %} используют [Leaflet.js](http://leafletjs.com) и поддерживают все геометрические типы, описанные в [спецификации geoJSON](http://www.geojson.org/geojson-spec.html) (Point, LineString, Polygon, MultiPoint, MultiLineString, MultiPolygon и GeometryCollection). Файлы TopoJSON должны иметь тип Topology и соответствовать [спецификации TopoJSON](https://github.com/mbostock/topojson/wiki/Specification).

{% ifversion geoJSON-with-MapBox %}
### Функции стиля

Вы можете настроить способ отображения функций, например указать определенный цвет или добавить описательный значок, передав дополнительные метаданные в свойствах объекта GeoJSON. Доступны следующие возможности:

* `marker-size` - `small`, `medium` или `large`
* `marker-color` — допустимый шестнадцатеричный код цвета RGB
* `marker-symbol` — идентификатор значка из [проекта Maki](http://mapbox.com/maki/) или одна буква или цифра (a-z или 0-9).
* `stroke` — цвет линии или края многоугольника (RGB)
* `stroke-opacity` — непрозрачность линии или края многоугольника (0,0–0,1)
* `stroke-width` — ширина линии или края многоугольника
* `fill` — цвет внутренней части многоугольника (RGB)
* `fill-opacity` — непрозрачность внутренней части многоугольника (0,0–1,0)

Дополнительные сведения см. в [открытой спецификации simplestyle версии 1.1.0](https://github.com/mapbox/simplestyle-spec/tree/master/1.1.0).
{% endif %}

### Внедрение карты в другое место

Хотите, чтобы карта GeoJSON была доступна в другом месте, не только на {% data variables.product.product_name %}? Просто измените этот шаблон и поместите его на любую HTML-страницу, поддерживающую JavaScript (например, [{% data variables.product.prodname_pages %}](http://pages.github.com)):

```html
<script src="https://embed.github.com/view/geojson/<username>/<repo>/<ref>/<path_to_file>"></script>
```

Например, если URL-адрес карты — [github.com/benbalter/dc-wifi-social/blob/master/bars.geojson](https://github.com/benbalter/dc-wifi-social/blob/master/bars.geojson), код внедрения будет следующим:

```html
<script src="https://embed.github.com/view/geojson/benbalter/dc-wifi-social/master/bars.geojson"></script>
```

По умолчанию внедренная карта имеет размер 420 x 620 пикселей, но вы можете настроить выходные данные, передав переменные высоты и ширины в качестве параметров в конце URL-адреса, например `?height=300&width=500`.

{% tip %}

**Примечание.** `ref` может быть ветвью или хэшем для отдельной фиксации (например`2391ae`).

{% endtip %}

{% ifversion mermaid %}
### Карты в Markdown

Вы можете внедрить GeoJSON и TopoJSON непосредственно в Markdown. Дополнительные сведения см. в разделе [Создание схем](/get-started/writing-on-github/working-with-advanced-formatting/creating-diagrams#creating-geojson-and-topojson-maps).
{% endif %}

### Кластеризация

Если карта содержит большое количество маркеров (более 750), GitHub автоматически кластеризует ближайшие маркеры при малом приближении. Просто щелкните кластер или увеличьте масштаб, чтобы просмотреть отдельные маркеры.

### Изменения базовой карты

Данные базовой карты (названия улиц, дороги и т. д.) управляются [OpenStreetMap](http://www.openstreetmap.org/), совместным проектом по созданию бесплатной редактируемой карты мира. Если вы заметили ошибку, просто [зарегистрируйтесь](https://www.openstreetmap.org/user/new) и отправьте исправление, ведь это проект с открытым кодом.

### Устранение неполадок

Если у вас возникли проблемы с отрисовкой файлов GeoJSON, убедитесь, что у вас есть действительный файл GeoJSON, запустив его с помощью [анализатора кода GeoJSON](http://geojsonlint.com/). Если точки не отображаются там, где вы ожидаете (<em>например</em>, в середине океана), скорее всего, данные находятся в проекции, которая в настоящее время не поддерживается. В настоящее время {% data variables.product.product_name %} поддерживает только проекцию `urn:ogc:def:crs:OGC:1.3:CRS84`.

Кроме того, если размер файла `.geojson` особенно велик (более 10 МБ), его невозможно отрисовать в браузере. В этом случае вы увидите примерно следующее сообщение:

![Большой файл](/assets/images/help/repository/view_raw.png)

Возможно, данные по-прежнему можно отрисовать, преобразовав файл `.geojson` в [TopoJSON](https://github.com/mbostock/topojson), формат сжатия, который в некоторых случаях может уменьшить размер файлов до 80 %. Конечно, вы всегда можете разбить файл на небольшие блоки (например, по состоянию или по годам) и хранить данные в репозитории виде нескольких файлов.

### Дополнительные материалы

{% ifversion geoJSON-with-MapBox %}
* [Документация по Leaflet.js](https://leafletjs.com/)
* [Документация по стилю маркеров MapBox](http://www.mapbox.com/developers/simplestyle/) {%- else %}
* [Документация по Azure Maps](https://docs.microsoft.com/en-us/azure/azure-maps/) {%- endif %}
* [Вики-сайт TopoJSON](https://github.com/mbostock/topojson/wiki)

## Работа с файлами Jupyter Notebook в {% data variables.product.prodname_dotcom %}

При добавлении файлов Jupyter Notebook или IPython Notebook с расширением *.ipynb* в {% data variables.location.product_location %} они будут отображаться в виде статических HTML-файлов в репозитории.

Интерактивные функции записной книжки, такие как пользовательские графики JavaScript, не будут работать в репозитории в {% data variables.location.product_location %}. Пример см. в разделе [*Связывание и Interactions.ipynb*](https://github.com/bokeh/bokeh-notebooks/blob/main/tutorial/06%20-%20Linking%20and%20Interactions.ipynb).

Чтобы просмотреть записную книжку Jupyter с отрисованным содержимым JavaScript или поделиться файлами записной книжки с другими пользователями, можно использовать [nbviewer](https://nbviewer.jupyter.org/). Пример см. в файле [*Связывание Interactions.ipynb*](https://nbviewer.jupyter.org/github/bokeh/bokeh-notebooks/blob/main/tutorial/06%20-%20Linking%20and%20Interactions.ipynb), отрисованном в nbviewer.

Чтобы просмотреть полностью интерактивную версию Jupyter Notebook, можно настроить сервер записной книжки локально. Дополнительные сведения см. в [официальной документации по Jupyter](http://jupyter.readthedocs.io/en/latest/index.html).

### Устранение неполадок

Если у вас возникли проблемы с отрисовкой файлов Jupyter Notebook в статическом HTML-коде, вы можете преобразовать файл локально в командной строке с помощью [команды `nbconvert`](https://github.com/jupyter/nbconvert):

```shell
$ jupyter nbconvert --to html NOTEBOOK-NAME.ipynb
```

### Дополнительные материалы

- [Репозиторий GitHub для Jupyter Notebook](https://github.com/jupyter/jupyter_notebook)
- [Коллекция записных книжек Jupyter Notebook](https://github.com/jupyter/jupyter/wiki)

{% ifversion mermaid %}
## Отображение файлов Mermaid на {% data variables.product.prodname_dotcom %}

{% data variables.product.product_name %} поддерживает отрисовку файлов Mermaid в репозиториях. Зафиксируйте файл, как обычно, используя расширение `.mermaid` или `.mmd`. Затем перейдите по пути файла Mermaid на {% data variables.product.prodname_dotcom %}.

Например, при добавлении файла `.mmd` со следующим содержимым в репозиторий:

```
graph TD
    A[Friend's Birthday] -->|Get money| B(Go shopping)
    B --> C{Let me think}
    C -->|One| D["Cool <br> Laptop"]
    C -->|Two| E[iPhone]
    C -->|Three| F[fa:fa-car Car]
```

При просмотре файла в репозитории он отрисовывается как блок-схема.
![Отрисованная схема файла Mermaid](/assets/images/help/repository/mermaid-file-diagram.png)

### Устранение неполадок

Если схема вообще не отрисовывается, убедитесь, что она содержит допустимый синтаксис Mermaid Markdown, проверив схему в [динамическом редакторе Mermaid](https://mermaid.live/edit).

Если схема отображается, но не так, как вы ожидали, можно создать новое [обсуждение {% data variables.product.prodname_github_community %}](https://github.com/orgs/community/discussions/categories/general) и добавить метку `Mermaid`. 

#### Известные проблемы

* Диаграммы последовательностей часто отображаются с дополнительной отбивкой под ними, причем размер отбивки увеличивается с размером диаграммы. Это известная проблема с библиотекой Mermaid.
* Узлы субъектов с всплывающими меню не работают должным образом в диаграммах последовательности. Это связано с расхождениями, которые возникают в способе добавления событий JavaScript на диаграмму, когда API библиотеки Mermaid используется для отрисовки диаграммы.
* Не все диаграммы соответствуют требованиям a11y. Это может повлиять на пользователей, которые используют средство чтения с экрана.

### Mermaid в Markdown

Синтаксис Mermaid можно внедрить непосредственно в Markdown. Дополнительные сведения см. в разделе [Создание схем](/get-started/writing-on-github/working-with-advanced-formatting/creating-diagrams#creating-mermaid-diagrams).

### Дополнительные материалы

* [Документация по Mermaid.js](https://mermaid-js.github.io/mermaid/#/)
* [Динамический редактор Mermaid.js](https://mermaid.live/edit) {% endif %}

