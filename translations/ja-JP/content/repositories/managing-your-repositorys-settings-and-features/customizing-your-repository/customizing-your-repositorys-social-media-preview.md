---
title: リポジトリのソーシャルメディア向けプレビューをカスタマイズする
intro: リポジトリにリンクされた時にソーシャルメディアプラットフォームに表示される画像をカスタマイズできます。
redirect_from:
  - /articles/customizing-your-repositorys-social-media-preview
  - /github/administering-a-repository/customizing-your-repositorys-social-media-preview
  - /github/administering-a-repository/managing-repository-settings/customizing-your-repositorys-social-media-preview
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Social media preview
---

画像を追加するまでは、リポジトリへのリンクは、リポジトリの基本的な情報とオーナーのアバターを表示します。 リポジトリに画像を追加すると、さまざまなソーシャルプラットフォーム上で、あなたのプロジェクトが見つかりやすくなります。

## Adding an image to customize the social media preview of your repository

{% ifversion not ghae %}画像をプライベートリポジトリにアップロードできますが、画像はパブリックリポジトリからのみ共有できます。{% endif %}

{% tip %}

**Tip:** Your image should be a PNG, JPG, or GIF file under 1 MB in size. 最高の画質を得るため、画像は 640 × 320 ピクセルに収めるようおすすめします。

{% endtip %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. [Social preview] の下にある [**Edit**] をクリックします。
    - 新しい画像を追加するには、[**Upload an image...**] をクリックします。
    - 画像を削除するには、[**Remove image**] をクリックします。

    ![ソーシャルプレビューのドロップダウン](/assets/images/help/repository/social-preview.png)

## About transparency

We support PNG images with transparency. Many communication platforms support a dark mode, so using a transparent social preview may be beneficial. The transparent image below is acceptable on a dark background; however, this may not always be the case.

When using an image with transparency, keep in mind how it may look on different color backgrounds or platforms that don't support transparency.

{% tip %}

**Tip:** If you aren't sure, we recommend using an image with a solid background.
{% endtip %}

![Social preview transparency](/assets/images/help/repository/social-preview-transparency.png)
