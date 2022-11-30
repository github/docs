---
title: GitHub 上的地图 geoJSON 文件
redirect_from:
  - /articles/mapping-geojson-files-on-github
  - /github/managing-files-in-a-repository/mapping-geojson-files-on-github
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---
{% data variables.product.product_name %} 支持在 {% data variables.product.product_name %} 仓库中渲染 geoJSON 和 topoJSON 地图文件。 只需像平常一样提交扩展名为 `.geojson` 或 `.topojson` 的文件。 也支持扩展名为 `.json` 的文件，但仅当 `type` 设置为 `FeatureCollection`、`GeometryCollection` 或 `topology` 时才支持。 然后导航到 GitHub.com 上 geoJSON 文件的路径。

单击右侧的纸张图标时，您还会看到在提交时对该文件的更改。

![源渲染切换屏幕截图](/assets/images/help/repository/source-render-toggle-geojson.png)

### 几何类型

{% data variables.product.product_name %} 上的地图使用 [Leaflet.js](http://leafletjs.com)，并且支持 [geoJSON 规格](http://www.geojson.org/geojson-spec.html)中列出的所有几何类型（Point、LineString、Polygon、MultiPoint、MultiLineString、MultiPolygon 和 GeometryCollection）。 TopoJSON 文件类型应为 "Topology"（拓扑），并且遵守 [topoJSON 规格](https://github.com/mbostock/topojson/wiki/Specification)。

### 样式功能

您可以传递 geoJSON 对象属性中的其他元数据，自定义功能显示的方式，例如指定特定的颜色或添加描述性图标。 选项包括：

* `marker-size` - `small`、`medium` 或 `large`
* `marker-color` - 有效的 RGB 十六进制颜色
* `marker-symbol` - [Maki 项目](http://mapbox.com/maki/)中的图标 ID 或单一英数字符（a-z 或 0-9）。
* `stroke` - 多边形的边或线的颜色 (RGB)
* `stroke-opacity` - 多边形的边或线的不透明度 (0.0 - 1.0)
* `stroke-width` - 多边形的边或线的宽度
* `fill` - 多边形内部的颜色 (GRB)
* `fill-opacity` - 多边形内部的不透明度 (0.0-1.0)

更多信息请参阅[开放简单样式规格 1.1.0 版](https://github.com/mapbox/simplestyle-spec/tree/master/1.1.0)。

### 在其他位置嵌入您的地图

想让您的 geoJSON 地图用在 {% data variables.product.product_name %} 以外的地方？ 只需修改此模板，并将其放在任何支持 javascript 的 HTML 页面上（如 [{% data variables.product.prodname_pages %}](http://pages.github.com)）：

```html
<script src="https://embed.github.com/view/geojson/<username>/<repo>/<ref>/<path_to_file>"></script>
```

例如，如果地图的 URL 是 [github.com/benbalter/dc-wifi-social/blob/master/bars.geojson](https://github.com/benbalter/dc-wifi-social/blob/master/bars.geojson)，则嵌入的代码是：

```html
<script src="https://embed.github.com/view/geojson/benbalter/dc-wifi-social/master/bars.geojson"></script>
```

默认情况下，嵌入的地图是 420 像素 x 620 像素，但您可以在结束时将高度和宽度变量作为参数传递，以自定义输出，如 `?height=300&width=500`。

{% tip %}

**注**：`ref` 可以是分支或个别提交的哈希（如 `2391ae`）。

{% endtip %}

### 集群

如果地图包含大量标记（大约超过 750 个），GitHub 将自动以较高的缩放比例集群附近的标记。 只需单击群集或放大便可查看个别标记。

### 关于底层地图

底层地图（街道名称、道路等）由 [OpenStreetMap](http://www.openstreetmap.org/) 驱动，这是一个协作性项目，用于创建可自由编辑的世界地图。 如果您发现什么不正确，只需[注册](https://www.openstreetmap.org/user/new)并提交修复，因为它是开源项目。

### 疑难解答

如果在渲染 geoJSON 文件时遇到问题，请通过 [geoJSON 语法检查](http://geojsonlint.com/)运行 geoJSON 文件，确认该文件有效。 如果您的地点没有出现在预期的位置（<em>例如</em>在海洋中间），可能是数据在规划中，目前不受支持。 目前，{% data variables.product.product_name %} 只支持 `urn:ogc:def:crs:OGC:1.3:CRS84` 规划。

此外，如果您的 `.geojson` 文件特别大（超过 10 MB），则无法在浏览器中渲染。 在这种情况下，您一般会看到一条类似以下的消息：

![大文件](/assets/images/help/repository/view_raw.png)

如果将 `.geojson` 文件转换为 [TopoJSON](https://github.com/mbostock/topojson)，可能还是能够渲染数据，TopoJSON 是一种压缩格式，有时能将文件减小 80%。 当然，您始终可以将文件分解为更小的数据块（例如按州或年分解），并将数据在仓库中存储为多个文件。

### 其他资源

* [Leaflet.js geojson 文档](http://leafletjs.com/examples/geojson.html)
* [MapBox marker-styling 文档](http://www.mapbox.com/developers/simplestyle/)
* [TopoJSON Wiki](https://github.com/mbostock/topojson/wiki)
