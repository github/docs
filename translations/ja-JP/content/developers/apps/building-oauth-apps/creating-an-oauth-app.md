---
title: OAuthアプリの作成
intro: '{% data reusables.shortdesc.creating_oauth_apps %}'
redirect_from:
  - /apps/building-integrations/setting-up-and-registering-oauth-apps/registering-oauth-apps
  - /apps/building-oauth-apps/creating-an-oauth-app
  - /developers/apps/creating-an-oauth-app
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - OAuth Apps
ms.openlocfilehash: 0bde9fbadc2005a67ecfc561b21cae48f768975e
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '146180344'
---
{% ifversion fpt or ghec %} {% note %}

  **注:** {% data reusables.apps.maximum-oauth-apps-allowed %}

{% endnote %} {% endif %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.oauth_apps %}
4. **[新しい OAuth アプリ]** をクリックします。
![新しい OAuth アプリを作成するボタン](/assets/images/oauth-apps/oauth_apps_new_app.png)

  {% note %}

  **注:** アプリを作成したことがない場合は、このボタンは、 **[新しいアプリケーションの登録]** と表示されます。

  {% endnote %}
6. [Application name] に、アプリケーションの名前を入力します。
![アプリの名前フィールド](/assets/images/oauth-apps/oauth_apps_application_name.png)

  {% warning %}

  **警告:** 公開されていると思われる OAuth アプリの情報のみを使用します。 OAuth App を作成する場合、内部 URL などの機密データを使用することは避けてください。

  {% endwarning %}

7. [Homepage URL] に、アプリケーションのウェブサイトの完全な URL を入力します。
![アプリのホームページ URL フィールド](/assets/images/oauth-apps/oauth_apps_homepage_url.png)
8. 必要に応じて、ユーザーに表示されるアプリケーションの説明を [Application description] に入力します。
![アプリの説明フィールド](/assets/images/oauth-apps/oauth_apps_application_description.png)
9. [Authorization callback URL] に、アプリケーションのコールバック URL を入力します。
![アプリの承認コールバック URL のフィールド](/assets/images/oauth-apps/oauth_apps_authorization_callback_url.png) {% ifversion fpt or ghes or ghec %} {% note %}

   **注:** {% data variables.product.prodname_github_apps %} とは異なり、OAuth アプリで複数のコールバック URL を持つことはできません。

   {% endnote %} {% endif %}{% ifversion device-flow-is-opt-in %}
1. OAuth アプリでデバイス フローを使用してユーザーを特定および認可する場合は、 **[デバイス フローを有効にする]** をクリックします。 デバイス フローの詳細については、「[OAuth アプリを認可する](/developers/apps/building-oauth-apps/authorizing-oauth-apps#device-flow)」を参照してください。
  ![デバイス フローを有効にするためのフィールドを示すスクリーンショット](/assets/images/oauth-apps/enable-device-flow.png){% endif %}
2.  **[Register application](アプリケーションを登録する)** をクリックします。
![アプリケーションを登録するボタン](/assets/images/oauth-apps/oauth_apps_register_application.png)
