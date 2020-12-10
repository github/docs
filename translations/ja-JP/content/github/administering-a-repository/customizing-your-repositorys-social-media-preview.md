---
title: リポジトリのソーシャルメディア向けプレビューをカスタマイズする
intro: リポジトリにリンクされた時にソーシャルメディアプラットフォームに表示される画像をカスタマイズできます。
redirect_from:
  - /articles/customizing-your-repositorys-social-media-preview
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

画像を追加するまでは、リポジトリへのリンクは、リポジトリの基本的な情報とオーナーのアバターを表示します。 リポジトリに画像を追加すると、さまざまなソーシャルプラットフォーム上で、あなたのプロジェクトが見つかりやすくなります。

{% if currentVersion != "github-ae@latest" %}You can upload an image to a private repository, but your image can only be shared from a public repository.{% endif %}

{% tip %}
ヒント: 画像は、1 MB 未満の PNG、JPG または GIF である必要があります。 最高の画質を得るため、画像は 640 × 320 ピクセルに収めるようおすすめします。
{% endtip %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. [Social preview] の下にある [**Edit**] をクリックします。
    - 新しい画像を追加するには、[**Upload an image...**] をクリックします。
    - 画像を削除するには、[**Remove image**] をクリックします。

    ![ソーシャルプレビューのドロップダウン](/assets/images/help/repository/social-preview.png)
