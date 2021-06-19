---
title: OAuth App のカスタムバッジを作成する
intro: '{% data reusables.shortdesc.creating_custom_badges_oauth_apps %}'
redirect_from:
  - /apps/building-oauth-apps/creating-custom-badges-for-oauth-apps
  - /developers/apps/creating-a-custom-badge-for-your-oauth-app
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - OAuth Apps
---

デフォルトでは、新しい OAuth App に対して、[アイデンティコン](https://github.com/blog/1586-identicons)が自動的に生成されます。 アイデンティコンバッジとは、次のようなものです。

![アイデンティコン](/assets/images/identicon.png)

OAuth App の作成後、ロゴをアップロードし、背景色を設定することで、アプリケーションのバッジをカスタマイズできます。 バッジは、丸の中に正方形のロゴ画像があります。 バッジの背景色を選ぶと、他のアプリケーションと視覚的に区別させることができます。

ロゴは、1 MB 未満の PNG、JPG または GIF ファイルである必要があります。 最高の画質を得るため、画像の大きさは 200 x 200 ピクセル以上にすることをお勧めします。 {% if currentVersion == "free-pro-team@latest" %}バッジのカスタマイズに関する詳細については、「[ロゴとバッジ画像のためのヒント](/marketplace/listing-on-github-marketplace/writing-github-marketplace-listing-descriptions/#guidelines-for-logos)」を参照してください。{% endif %}

{% if currentVersion == "free-pro-team@latest" %}

Marketplace に掲載が承認されている GitHub App のカスタムバッジを変更するには、https://github.com/marketplace/manage に移動します。

{% endif %}

カスタムバッジを作成するには、以下の手順に従います。

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.developer_settings %}
{% data reusables.user-settings.oauth_apps %}
{% data reusables.user-settings.modify_oauth_app %}
1. [Application logo] にローカルフォルダの画像をドラッグアンドドロップするか、[**Upload new logo**] をクリックして、お手元のコンピューターから画像を選択します。 ![ロゴをアップロード](/assets/images/oauth-apps/oauth_apps_upload_logo.png)
6. 画像をクロッピングします。 完了したら、[**Set new application logo**] をクリックします。 ![ロゴをトリミングして設定](/assets/images/oauth-apps/oauth_apps_crop_and_set_logo.png)
7. [Badge background color] に、バッジの背景色を[16 進数カラーコード](http://www.color-hex.com/)で入力します。 {% if currentVersion == "free-pro-team@latest" %}**注釈:** [Badge background color] 入力フィールドは、アプリケーションロゴをアップロードした後に表示されます。{% endif %} ![バッジの背景色](/assets/images/oauth-apps/oauth_apps_badge_background_color.png)
{% data reusables.user-settings.update_oauth_app %}

{% if currentVersion == "free-pro-team@latest" %}

### 次のステップ

このアプリケーションを Marketplace に掲載する方法の詳細については、「[GitHub Marketplace に掲載する](/marketplace/listing-on-github-marketplace/)」を参照してください。

{% endif %}
