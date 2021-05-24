---
title: 呈现图像和比较差异
intro: '{% data variables.product.product_name %} 可显示几种常见的图像格式，包括 PNG、JPG、GIF、PSD 和 SVG。 除了简单地显示这些图像以外，还有几种方法可以比较这些图像格式版本之间的差异。'
redirect_from:
  - /articles/rendering-and-diffing-images
  - /github/managing-files-in-a-repository/rendering-and-diffing-images
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---
{% note %}

**注：**如果您使用 Firefox 浏览器，则 {% data variables.product.prodname_dotcom %} 上的 SVG 可能无法呈现。

{% endnote %}

### 查看图像

您可以在 {% data variables.product.product_name %} 仓库中直接浏览和查看图像：

![内联图像](/assets/images/help/images/view.png)

SVG 目前不支持内联脚本或动画。

### 查看差异

您可以在三种不同模式下直观比较图像：[两张图](#2-up)、[滑动](#swipe)和[多层皮肤](#onion-skin)。

#### 两张图

**两张图**是默认模式；它让您可以快速浏览两张图像。 此外，如果图像在不同版本之间更改了大小，则会显示实际的尺寸更改。 这应在内容调整大小时变得非常明显，例如前端资源升级到更高分辨率时。

![两张图](/assets/images/help/repository/images-2up-view.png)

#### 滑动

**滑动**可让您并排查看图像的各个部分。 不确定不同版本之间颜色是否发生变化？ 将滑动滑块拖动到相关区域上并自行比较像素。

![滑动](/assets/images/help/repository/images-swipe-view.png)

#### 多层皮肤

当元素以很小而难以察觉的量移动时，**多层皮肤**真的很方便。 图标是否向左移动了两个像素？ 稍微向后拖动不透明度滑块，注意内容是否移动。

![多层皮肤](/assets/images/help/repository/images-onion-view.gif)
