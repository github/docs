---
title: 使用非代码文件
intro: '{% data variables.product.product_name %} 支持以多种非代码文件格式呈现和比较。'
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
ms.contentlocale: zh-CN
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107603'
---
## 呈现图像和比较差异

{% data variables.product.product_name %} 可显示几种常见的图像格式，包括 PNG、JPG、GIF、PSD 和 SVG。 除了简单地显示这些图像以外，还有几种方法可以比较这些图像格式版本之间的差异。

{% note %}

**注意：** 
- {% data variables.product.prodname_dotcom %} 不支持比较 PSD 文件之间的差异。 
- 如果你使用 Firefox 浏览器，则 {% data variables.product.prodname_dotcom %} 上的 SVG 可能无法呈现。

{% endnote %}

### 查看图像

可以直接浏览和查看 {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %}上的存储库中的图像：

![内联图像](/assets/images/help/images/view.png)

SVG 目前不支持内联脚本或动画。

### 查看差异

你可以通过三种不同的模式直观地比较图像：[两张图](#2-up)、[轻扫](#swipe)和[多层皮肤](#onion-skin)。

#### 两张图

两张图是默认模式，可让你快速浏览这两个图像。 此外，如果图像在不同版本之间更改了大小，则会显示实际的尺寸更改。 这应在内容调整大小时变得非常明显，例如前端资源升级到更高分辨率时。

![两张图](/assets/images/help/repository/images-2up-view.png)

#### 轻扫

轻扫模式可让你并排查看图像的各个部分。 不确定不同版本之间颜色是否发生变化？ 将滑动滑块拖动到相关区域上并自行比较像素。

![轻扫](/assets/images/help/repository/images-swipe-view.png)

#### 多层皮肤

当元素以很小而难以察觉的量移动时，多层皮肤模式真的很方便。 图标是否向左移动了两个像素？ 稍微向后拖动不透明度滑块，注意内容是否移动。

![多层皮肤](/assets/images/help/repository/images-onion-view.gif)

## 3D 文件查看器

{% data variables.product.product_name %} 可托管和呈现扩展名为 .stl 的 3D 文件。

直接在 {% data variables.product.product_name %} 上查看 STL 文件时，可以：

* 单击并拖动以旋转模型。
* 右键单击并拖动便可转换视图。
* 滚动可放大和缩小。
* 单击不同的视图模式可切换视图。

### 差异

查看包含 STL 文件的提交或更改集时，可以看到文件前后的差异。

默认情况下，您会在线框图中获取一切尚未更改时的视图。 添加的内容为绿色，删除的部分为红色。

![线框图](/assets/images/help/repository/stl_wireframe.png)

也可选择“修订滑块”选项，通过它可使用文件顶部的滑块在当前修订与之前修订之间进行切换。

### 修复性能慢的问题

如果在查看器的角上看到此图标，则表示您的浏览器无法使用 WebGL 技术：

![WebGL 弹出错误](/assets/images/help/repository/render_webgl_error.png)

为最大程度利用计算机的硬件，必须具有 WebGL。 建议尝试使用 [Chrome](https://www.google.com/intl/en/chrome/browser/) 或 [Firefox](https://www.mozilla.org/en-US/firefox/new/) 等启用了 WebGL 的浏览器。

### 错误：“无法显示”

如果您的型号无效，GitHub 可能无法显示文件。 此外，超过 10 MB 的文件对 GitHub 过大，无法显示。

### 在其他位置嵌入您的型号

要在互联网上其他位置显示您的 3D 文件，请修改此模板并将其放入支持 JavaScript 的 HTML 页面：

```html
<script src="https://embed.github.com/view/3d/<username>/<repo>/<ref>/<path_to_file>"></script>
```

例如，如果模型 URL 为 [`github.com/skalnik/secret-bear-clip/blob/master/stl/clip.stl`](https://github.com/skalnik/secret-bear-clip/blob/master/stl/clip.stl)，则嵌入代码为：

```html
<script src="https://embed.github.com/view/3d/skalnik/secret-bear-clip/master/stl/clip.stl"></script>
```

默认情况下，嵌入呈现器是 420 像素（宽）× 620 像素（高），但你可以在 URL 结尾将高度和宽度变量作为参数传递，以自定义输出，如 `?height=300&width=500`。

{% tip %}

注意：`ref` 可以是单个提交（如 `2391ae`）的分支或哈希。

{% endtip %}

{% ifversion mermaid %}
### 在 Markdown 中渲染

您可以直接在 Markdown 中嵌入 ASCII STL 语法。 有关详细信息，请参阅“[创建关系图](/get-started/writing-on-github/working-with-advanced-formatting/creating-diagrams#creating-stl-3d-models)”。
{% endif %}

## 呈现 CSV 和 TSV 数据

GitHub 支持以 .csv（逗号分隔）和 .tsv（制表符分隔）形式的文件呈现表格数据。

![呈现的 CSV 示例](/assets/images/help/repository/rendered_csv.png)

查看时，任何提交到 {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %}上存储库的 _.csv_ 或 _.tsv_ 文件都会自动呈现为交互式表格，并带有标题和行号。 默认情况下，我们始终假设第一行是标题行。

您可以通过单击行号链接到特定行，或通过按住 Shift 键选择多行。 只需复制 URL 并将其发送给好友即可。

### 搜索数据

如果想要在数据集中查找特定值，可以在文件正上方的搜索栏中开始输入内容。 行将自动过滤：

![搜索值](/assets/images/help/repository/searching_csvs.gif)

### 处理错误

有时，您可能会发现您的 CSV 或 TSV 文件未呈现。 在这些情况下，原始文本底部会出现一个错误框，提示错误可能是什么。

![CSV 呈现错误消息](/assets/images/help/repository/csv_render_error.png)

常见错误包括：

* 列数不匹配。 即使单元格为空，也必须在每行中具有相同数量的分隔符
* 超出文件大小。 我们的呈现仅适用于最大 512KB 的文件。 大于此限制的任何内容都会降低浏览器的速度。

## 呈现 PDF 文档

GitHub 支持呈现 PDF 文档。

![呈现的 PDF 文档](/assets/images/help/repository/rendered-pdf.png)

目前，PDF 中的链接将被忽略。

## 散文文档中的呈现差异

包含散文文档的提交和拉取请求具有用源视图和呈现视图来表示这些文档的功能。

源视图显示已键入的原始文本，而呈现视图显示该文本在 {% data variables.product.product_name %} 上呈现后的外观。 例如，这可能是在 Markdown 中显示 `**bold**` 和在呈现视图中 bold 之间的区别。

散文呈现由 [github/markup](https://github.com/github/markup) 支持的呈现文档支持：

* Markdown
* AsciiDoc
* Textile
* ReStructuredText
* Rdoc
* 组织
* Creole
* MediaWiki
* Pod

![用于查看渲染的散文文档的纸张图标](/assets/images/help/repository/rendered_prose_diff.png)

可单击 {% octicon "file" aria-label="The paper icon" %} 查看在提交过程中对文档的更改。

![呈现的散文更改](/assets/images/help/repository/rendered_prose_changes.png)

### 禁用 Markdown 渲染

{% data reusables.repositories.disabling-markdown-rendering %}

### 可视化属性更改

我们提供了一个工具提示来描述对属性的更改，与字词不同，这些更改在呈现文档中不可见。 例如，如果链接 URL 从一个网站更改为另一个，会显示如下工具提示：

![呈现的散文属性更改](/assets/images/help/repository/prose_diff_attributes.png)

### 对更改的评论

[提交注释](/articles/commenting-on-differences-between-files)只能逐行添加到源视图中的文件。

### 链接到标题

与[其他呈现的散文文档](/articles/about-readmes)一样，将鼠标悬停在文档的标题上会创建一个链接图标。 你可以将呈现散文差异的读取器链接到特定部分。

### 查看复杂的差异

一些拉取请求涉及大型复杂文档的大量更改。 当更改需要太长时间来分析时，{% data variables.product.product_name %} 不能总是生成更改的渲染视图。 如果发生这种情况，当您单击渲染按钮时，将会看到错误消息。

![无法渲染视图时的消息](/assets/images/help/repository/prose_diff_rendering.png)

您仍可使用源视图来分析和评论更改。

### 查看 HTML 元素

我们不直接支持 HTML 文档提交的呈现视图。 某些格式（例如 Markdown）可让您在文档中嵌入任意 HTML。 这些文档在 {% data variables.product.product_name %} 上显示时，某些嵌入式 HTML 可以在预览中显示，而某些（例如嵌入式 YouTube 视频）则不可以。

一般来说，包含嵌入式 HTML 的文档更改的呈现视图将显示对 {% data variables.product.product_name %} 文档视图中支持元素的更改。 必须始终在呈现视图和源视图中检查对包含嵌入式 HTML 的文档的更改以确保完整性。

## 映射 {% data variables.product.prodname_dotcom %} 上的 GeoJSON/TopoJSON 文件

{% data variables.product.product_name %} 支持在 {% data variables.product.product_name %} 仓库中渲染 GeoJSON 和 TopoJSON 地图文件。 只需像平常一样使用 `.geojson` 或 `.topojson` 扩展名提交文件即可。 还支持扩展名为 `.json` 的文件，但前提是 `type` 设置为 `FeatureCollection``GeometryCollection` 或 `topology`。 然后导航到 GitHub.com 上 GeoJSON/TopoJSON 文件的路径。

单击右侧的纸张图标时，您还会看到在提交时对该文件的更改。

![源渲染切换屏幕截图](/assets/images/help/repository/source-render-toggle-geojson.png)

### 几何类型

{% data variables.product.product_name %} 上的地图使用 [Leaflet.js](http://leafletjs.com) 并支持所有 [geoJSON 规范](http://www.geojson.org/geojson-spec.html)（Point、LineString、Polygon、MultiPoint、MultiLineString、MultiPolygon 和 GeometryCollection）中概述的几何类型。 TopoJSON 文件的类型应为“拓扑”，并遵循 [TopoJSON 规范](https://github.com/mbostock/topojson/wiki/Specification)。

{% ifversion geoJSON-with-MapBox %}
### 样式功能

可以传递 GeoJSON 对象属性中的其他元数据，自定义功能显示的方式，例如指定特定的颜色或添加描述性图标。 选项包括：

* `marker-size` - `small`、`medium` 或 `large`
* `marker-color` - 有效的 RGB 十六进制颜色
* `marker-symbol` - [Maki 项目](http://mapbox.com/maki/)中的图标 ID 或单个字母数字字符（a-z 或 0-9）。
* `stroke` - 多边形边缘或线条的颜色 (RGB)
* `stroke-opacity` - 多边形边缘或线条的不透明度 (0.0 - 1.0)
* `stroke-width` - 多边形边缘或线条的宽度
* `fill` - 多边形内部的颜色 (GRB)
* `fill-opacity` - 多边形内部的不透明度 (0.0-1.0)

有关详细信息，请参阅“[开放简单式规范的 1.1.0 版本](https://github.com/mapbox/simplestyle-spec/tree/master/1.1.0)”。
{% endif %}

### 在其他位置嵌入您的地图

是否希望 GeoJSON 地图用在 {% data variables.product.product_name %} 以外的地方？ 只需修改此模板，并将其放置在支持 javascript 的任何 HTML 页面（例如 [{% data variables.product.prodname_pages %}](http://pages.github.com)）中：

```html
<script src="https://embed.github.com/view/geojson/<username>/<repo>/<ref>/<path_to_file>"></script>
```

例如，如果地图的 URL 为[github.com/benbalter/dc-wifi-social/blob/master/bars.geojson](https://github.com/benbalter/dc-wifi-social/blob/master/bars.geojson)，则嵌入代码为：

```html
<script src="https://embed.github.com/view/geojson/benbalter/dc-wifi-social/master/bars.geojson"></script>
```

默认情况下，嵌入的地图是 420 像素 × 620 像素，但可以在末尾将高度和宽度变量作为参数传递，以自定义输出，如 `?height=300&width=500`。

{% tip %}

注意：`ref` 可以是单个提交（如 `2391ae`）的分支或哈希。

{% endtip %}

{% ifversion mermaid %}
### 在 Markdown 嵌入地图

可以直接在 Markdown 中嵌入 GeoJSON 和 TopoJSON。 有关详细信息，请参阅“[创建关系图](/get-started/writing-on-github/working-with-advanced-formatting/creating-diagrams#creating-geojson-and-topojson-maps)”。
{% endif %}

### 群集

如果地图包含大量标记（大约超过 750 个），GitHub 将自动以较高的缩放比例集群附近的标记。 只需单击群集或放大便可查看个别标记。

### 关于底层地图

基础地图数据（街道名称、道路等）由 [OpenStreetMap](http://www.openstreetmap.org/)（这是一个协作项目，用于创建免费可编辑的世界地图）驱动。 因为该项目开放源代码，某些内容会不太正确，如果你注意到，只需[注册](https://www.openstreetmap.org/user/new)并提交修补程序。

### 故障排除

如果在呈现 GeoJSON 文件时遇到问题，请确保通过 [GeoJSON linter](http://geojsonlint.com/) 运行它以获得有效 GeoJSON 文件。 如果你的点没有出现在预期位置（例如在海洋中间），则数据可能处于当前不受支持的投影中。 目前，{% data variables.product.product_name %} 仅支持 `urn:ogc:def:crs:OGC:1.3:CRS84` 投影。

此外，如果 `.geojson` 文件过大（超过 10 MB），则无法在浏览器中呈现。 在这种情况下，您一般会看到一条类似以下的消息：

![大文件](/assets/images/help/repository/view_raw.png)

仍可以通过将 `.geojson` 文件转换为 [TopoJSON](https://github.com/mbostock/topojson)（这种压缩格式在某些情况下可减少高达 80% 的文件大小）来呈现数据。 当然，您始终可以将文件分解为更小的数据块（例如按州或年分解），并将数据在仓库中存储为多个文件。

### 延伸阅读

{% ifversion geoJSON-with-MapBox %}
* [Leaflet.js 文档](https://leafletjs.com/)
* [MapBox 标记样式文档](http://www.mapbox.com/developers/simplestyle/) {%- else %}
* [Azure Maps 文档](https://docs.microsoft.com/en-us/azure/azure-maps/) {%- endif %}
* [TopoJSON Wiki](https://github.com/mbostock/topojson/wiki)

## 在 {% data variables.product.prodname_dotcom %} 上使用 Jupyter Notebook 文件

当在 {% data variables.location.product_location %}上添加扩展名为 .ipynb 的 Jupyter Notebook 或 IPython Notebook 文件时，它们将在你的存储库中呈现为静态 HTML 文件。

笔记本的交互式功能（例如自定义的 JavaScript 图）在 {% data variables.location.product_location %}上的存储库中不起作用。 有关示例，请参阅“[*Linking and Interactions.ipynb*](https://github.com/bokeh/bokeh-notebooks/blob/main/tutorial/06%20-%20Linking%20and%20Interactions.ipynb)”。

要用呈现的 JavaScript 内容查看 Jupyter Notebook，或与他人共享笔记本文件，可以使用 [nbviewer](https://nbviewer.jupyter.org/)。 有关示例，请参阅 nbviewer 上呈现的“[Linking and Interactions.ipynb](https://nbviewer.jupyter.org/github/bokeh/bokeh-notebooks/blob/main/tutorial/06%20-%20Linking%20and%20Interactions.ipynb)”。

要查看 Jupyter Notebook 的完全交互式版本，您可以在本地设置笔记本服务器。 有关详细信息，请参阅“[Jupyter 官方文档](http://jupyter.readthedocs.io/en/latest/index.html)”。

### 故障排除

如果在静态 HTML 中呈现 Jupyter Notebook 文件时遇到问题，可以使用 [`nbconvert` 命令](https://github.com/jupyter/nbconvert)，在命令行上本地转换文件：

```shell
$ jupyter nbconvert --to html NOTEBOOK-NAME.ipynb
```

### 延伸阅读

- [Jupyter Notebook 的 GitHub 存储库](https://github.com/jupyter/jupyter_notebook)
- [Jupyter Notebook 库](https://github.com/jupyter/jupyter/wiki)

{% ifversion mermaid %}
## 在 {% data variables.product.prodname_dotcom %} 上显示 Mermaid 文件

{% data variables.product.product_name %} 支持在存储库中呈现 Mermaid 文件。 像平常一样使用 `.mermaid` 或 `.mmd` 扩展名提交文件。 然后，导航到 {% data variables.product.prodname_dotcom %}上的 Mermaid 文件的路径。

例如，如果将包含以下内容的 `.mmd` 文件添加到存储库中：

```
graph TD
    A[Friend's Birthday] -->|Get money| B(Go shopping)
    B --> C{Let me think}
    C -->|One| D["Cool <br> Laptop"]
    C -->|Two| E[iPhone]
    C -->|Three| F[fa:fa-car Car]
```

当您在存储库中查看文件时，它将呈现为流程图。
![呈现的 mermaid 文件图](/assets/images/help/repository/mermaid-file-diagram.png)

### 故障排除

如果图表根本没有呈现，请使用 [Mermaid 实时编辑器](https://mermaid.live/edit)检查图表，验证它是否包含有效的 Mermaid Markdown 语法。

如果显示了图表，但没有按预期显示，你可以创建新的 [{% data variables.product.prodname_github_community %} 讨论](https://github.com/orgs/community/discussions/categories/general)，并添加 `Mermaid` 标签。 

#### 已知问题

* 序列图图表经常在图表下方使用额外的填充进行呈现，随着图表大小的增加，还会添加更多的填充。 这是 Mermaid 库的已知问题。
* 具有弹出菜单的执行组件节点在序列图图表中无法按预期工作。 这是由于当 Mermaid 库的 API 用于呈现图表时，JavaScript 事件添加到图表的方式存在差异。
* 并非所有图表都符合 a11y 标准。 这可能会影响依赖屏幕阅读器的用户。

### Mermaid in Markdown

您可以直接在 Markdown 中嵌入 Mermaid 语法。 有关详细信息，请参阅“[创建关系图](/get-started/writing-on-github/working-with-advanced-formatting/creating-diagrams#creating-mermaid-diagrams)”。

### 延伸阅读

* [Mermaid.js 文档](https://mermaid-js.github.io/mermaid/#/)
* [Mermaid.js 实时编辑器](https://mermaid.live/edit){% endif %}

