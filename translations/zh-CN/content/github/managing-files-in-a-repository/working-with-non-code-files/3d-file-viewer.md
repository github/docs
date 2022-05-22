---
title: 3D 文件查看器
redirect_from:
  - /articles/stl-file-viewer/
  - /articles/3d-file-viewer
  - /github/managing-files-in-a-repository/3d-file-viewer
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---
{% data variables.product.product_name %} 可托管和渲染扩展名为 *.stl* 的 3D 文件。

直接在 {% data variables.product.product_name %} 上查看 STL 文件时，可以：

* 单击并拖动以旋转模型。
* 右键单击并拖动便可转换视图。
* 滚动可放大和缩小。
* 单击不同的视图模式可切换视图。

### 差异

查看包含 STL 文件的提交或更改集时，可以看到文件前后的差异。

默认情况下，您会在线框图中获取一切尚未更改时的视图。 添加的内容为绿色，删除的部分为红色。

![线框图](/assets/images/help/repository/stl_wireframe.png)

也可选择 **Revision Slider（版本滑块）**选项，使用文件顶部的滑块在当前版本与之前的版本之间切换。

### 修复性能慢的问题

如果在查看器的角上看到此图标，则表示您的浏览器无法使用 WebGL 技术：

![WebGL 弹出错误](/assets/images/help/repository/render_webgl_error.png)

为最大程度利用计算机的硬件，必须具有 WebGL。 建议尝试 [Chrome](https://www.google.com/intl/en/chrome/browser/) 或 [Firefox](https://www.mozilla.org/en-US/firefox/new/) 等默认启用 WebGL 的浏览器。

### 错误：“无法显示”

如果您的型号无效，GitHub 可能无法显示文件。 此外，超过 10 MB 的文件对 GitHub 过大，无法显示。

### 在其他位置嵌入您的型号

要在互联网上其他位置显示您的 3D 文件，请修改此模板并将其放入支持 JavaScript 的 HTML 页面：

```html
<script src="https://embed.github.com/view/3d/<username>/<repo>/<ref>/<path_to_file>"></script>
```

例如，如果您的型号的 URL 是 [github.com/skalnik/secret-bear-clip/blob/master/stl/clip.stl](https://github.com/skalnik/secret-bear-clip/blob/master/stl/clip.stl)，则嵌入的代码是：

```html
<script src="https://embed.github.com/view/3d/skalnik/secret-bear-clip/master/stl/clip.stl"></script>
```

默认情况下，嵌入的渲染器是 420 像素（宽）x 620 像素（高），但您可以在 URL 结束时将高度和宽度变量作为参数传递，以自定义输出，如 `?height=300&width=500`。

{% tip %}

**注**：`ref` 可以是分支或个别提交的哈希（如 `2391ae`）。

{% endtip %}
