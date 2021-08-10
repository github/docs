---
title: Rendering and diffing images
intro: '{% data variables.product.product_name %} can display several common image formats, including PNG, JPG, GIF, PSD, and SVG. In addition to simply displaying them, there are several ways to compare differences between versions of those image formats.'
redirect_from:
  - /articles/rendering-and-diffing-images
  - /github/managing-files-in-a-repository/rendering-and-diffing-images
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Repositories
shortTitle: Render & diff images
---
{% note %}

**Note:** If you are using the Firefox browser, SVGs on {% data variables.product.prodname_dotcom %} may not render.

{% endnote %}

## Viewing images

You can directly browse and view images in your {% data variables.product.product_name %} repository:

![inline image](/assets/images/help/images/view.png)

SVGs don't currently support inline scripting or animation.

## Viewing differences

You can visually compare images in three different modes: [2-up](#2-up), [swipe](#swipe), and [onion skin](#onion-skin).

### 2-up

**2-up** is the default mode; it gives you a quick glimpse of both images. In addition, if the image has changed size between versions, the actual dimension change is displayed. This should make it very apparent when things are resized, such as when assets are upgraded to higher resolutions.

![2-up](/assets/images/help/repository/images-2up-view.png)

### Swipe

**Swipe** lets you view portions of your image side by side. Not sure if colors shifted between different versions? Drag the swipe slider over the area in question and compare the pixels for yourself.

![Swipe](/assets/images/help/repository/images-swipe-view.png)

### Onion skin

**Onion Skin** really comes in handy when elements move around by small, hard to notice amounts. Did an icon shift two pixels to the left? Drag the opacity slider back a bit and notice if things move around.

![Onion skin](/assets/images/help/repository/images-onion-view.gif)
