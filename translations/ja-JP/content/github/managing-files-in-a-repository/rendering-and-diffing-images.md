---
title: 画像をレンダリングして違いを見極める
intro: '{% data variables.product.product_name %} では、一般的な画像形式のいくつか (PNG、JPG、GIF、PSD、SVG など) を表示できます。 単に表示するだけではなく、画像を異なるバージョン間で比較する方法もいくつかあります。'
redirect_from:
  - /articles/rendering-and-diffing-images
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---

{% note %}

**メモ:** Firefox ブラウザを使用している場合、{% data variables.product.prodname_dotcom %} では SVG がレンダリングされない可能性があります。

{% endnote %}

### 画像を表示する

{% data variables.product.product_name %} リポジトリにある画像は、直接アクセスして表示することができます。

![インライン画像](/assets/images/help/images/view.png)

SVG では現在、インラインスクリプトやアニメーションはサポートされていません。

### 差異を見る

画像は、[見開き (2-Up)](#2-up)、[スワイプ (Swipe)](#swipe)、および[オニオンスキン (Onion Skin)](#onion-skin)の 3 種類のモードで表示して比較できます。

#### 見開き(2-Up)

**見開き (2-Up)** はデフォルトモードで、一度に両方の画像を見ることができます。 加えて、画像のサイズがバージョン間で変わっていれば、その違いがそのまま表れます。 このモードではサイズの違いが明瞭にわかります。アセットがより高い解像度にアップグレードされた場合などにサイズが変わります。

![見開き(2-Up)](/assets/images/help/repository/images-2up-view.png)

#### スワイプ

**スワイプ**では画像の部分を並べて表示することができます。 新旧画像間でなされた微妙な色変更がわかりづらいといった場合、 スワイプスライダーを問題の領域までドラッグして注目すると、違いが見えてきます。

![スワイプ](/assets/images/help/repository/images-swipe-view.png)

#### オニオンスキン

**オニオンスキン**は、要素の移動量が小さくてわかりづらい場合に役立ちます。 ほとんど変わっていないように見えるアイコンが、もしかしたら 2 ピクセルほど左にずらされているかもしれません。その場合、 スライダーで不透明度を調節して、それが動くかどうかを見てください。

![オニオンスキン](/assets/images/help/repository/images-onion-view.gif)
