---
title: OAuth App のカスタムバッジを作成する
intro: '{% data reusables.shortdesc.creating_custom_badges_oauth_apps %}'
redirect_from:
  - /apps/building-oauth-apps/creating-custom-badges-for-oauth-apps
  - /developers/apps/creating-a-custom-badge-for-your-oauth-app
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - OAuth Apps
shortTitle: Create custom badges
ms.openlocfilehash: b9f5b8048b14c11e7eb0c43a88a18b3a63ca5f34
ms.sourcegitcommit: ac00e2afa6160341c5b258d73539869720b395a4
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/09/2022
ms.locfileid: '147878536'
---
既定では、新しい OAuth アプリには、自動的に生成された[アイデンティコン](https://github.com/blog/1586-identicons)が含まれます。
アイデンティコンバッジとは、次のようなものです。

![アイデンティコン](/assets/images/identicon.png)

OAuth App の作成後、ロゴをアップロードし、背景色を設定することで、アプリケーションのバッジをカスタマイズできます。 バッジは、丸の中に正方形のロゴ画像があります。 バッジの背景色を選ぶと、他のアプリケーションと視覚的に区別させることができます。

ロゴは、1 MB 未満の PNG、JPG または GIF ファイルである必要があります。 最高の画質を得るため、画像の大きさは 200 x 200 ピクセル以上にすることをお勧めします。 {% ifversion fpt or ghec %}バッジのカスタマイズに関する詳細なガイダンスについては、「[ロゴとバッジの画像のヒント](/marketplace/listing-on-github-marketplace/writing-github-marketplace-listing-descriptions/#guidelines-for-logos)」を参照してください。{% endif %}

{% ifversion fpt or ghec %}

既に承認済みの Marketplace リストがある GitHub アプリのカスタム バッジを変更するには、 https://github.com/marketplace/manage に移動します。

{% endif %}

カスタムバッジを作成するには、以下の手順に従います。

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.oauth_apps %} {% data reusables.user-settings.modify_oauth_app %}
1. [アプリケーションのロゴ] で、ローカル フォルダーから画像をドラッグ アンド ドロップするか、 **[新しいロゴのアップロード]** をクリックしてコンピューターから画像を選択します。
![ロゴのアップロード](/assets/images/oauth-apps/oauth_apps_upload_logo.png)
6. 画像をクロッピングします。 完了したら、 **[新しいアプリケーションのロゴの設定]** をクリックします。
![ロゴのトリミングと設定](/assets/images/oauth-apps/oauth_apps_crop_and_set_logo.png)
7. [バッジの背景色] に、バッジの背景色の [16 進数の色コード](http://www.color-hex.com/)を入力します。 {% ifversion fpt or ghec %}**注:** [バッジの背景色] 入力フィールドは、アプリケーションのロゴのアップロード後に表示されます。{% endif %} ![バッジの背景色](/assets/images/oauth-apps/oauth_apps_badge_background_color.png) {% data reusables.user-settings.update_oauth_app %}

{% ifversion fpt or ghec %}

## 次の手順

このアプリの Marketplace 登録情報の作成の詳細については、「[GitHub Marketplace 上でのリスト](/marketplace/listing-on-github-marketplace/)」を参照してください。

{% endif %}
