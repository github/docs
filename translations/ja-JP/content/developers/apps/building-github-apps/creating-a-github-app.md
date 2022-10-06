---
title: GitHub App を作成する
intro: '{% data reusables.shortdesc.creating_github_apps %}'
redirect_from:
  - /early-access/integrations/creating-an-integration
  - /apps/building-integrations/setting-up-and-registering-github-apps/registering-github-apps
  - /apps/building-github-apps/creating-a-github-app
  - /developers/apps/creating-a-github-app
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
ms.openlocfilehash: bca6b800f8ea6042e4cbcdb95bd39b56f61433c5
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '146179088'
---
{% ifversion fpt or ghec %}GitHub アプリ マニフェストを使用すると、構成済みの GitHub アプリを作成できます。使用方法については、「[マニフェストから GitHub アプリを作成する](/apps/building-github-apps/creating-github-apps-from-a-manifest/)」を参照してください。{% endif %}

{% ifversion fpt or ghec %} {% note %}

  **注:** {% data reusables.apps.maximum-github-apps-allowed %}

{% endnote %} {% endif %}

{% data reusables.apps.settings-step %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.github_apps %}
1. **[新しい GitHub アプリ]** をクリックします。
![新しい GitHub アプリを作成するためのボタン](/assets/images/github-apps/github_apps_new.png)
1. [GitHub App name] に、アプリケーションの名前を入力します。
![GitHub アプリの名前を入力するフィールド](/assets/images/github-apps/github_apps_app_name.png)

  アプリケーションには簡潔で明快な名前を付けましょう。 アプリケーションの名前は、既存の GitHub アカウントと同じ名前にできません。ただし、その名前があなた自身のユーザ名や Organization 名である場合は例外です。 インテグレーションが動作すると、ユーザインターフェース上にアプリケーション名のスラッグが表示されます。

1. 必要に応じて、ユーザーに表示されるアプリケーションの説明を [Description] に入力します。
![GitHub アプリの説明を入力するフィールド](/assets/images/github-apps/github_apps_description.png)
1. [Homepage URL] に、アプリケーションのウェブサイトの完全な URL を入力します。
![GitHub アプリのホームページの URL を入力するフィールド](/assets/images/github-apps/github_apps_homepage_url.png) {% ifversion fpt or ghes or ghec %}
1. [Callback URL] に、ユーザがインストールを認可した後にリダイレクトされる URL を完全な形で入力します。 この URL は、アプリケーションがユーザからサーバへのリクエストを識別して承認する必要がある場合に使用されます。

  **[コールバック URL の追加]** を使用して、最大 10 個のコールバック URL を追加できます。

  ![コールバック URL を追加するためのボタンとコールバック URL を入力するフィールド](/assets/images/github-apps/github_apps_callback_url_multiple.png) {% else %}
1. [User authorization callback URL] に、ユーザーがインストールを認可した後にリダイレクトされる URL を完全な形で入力します。 この URL は、アプリケーションがユーザからサーバへのリクエストを識別して承認する必要がある場合に使用されます。
![GitHub アプリのユーザー認可のコールバック URL を入力するフィールド](/assets/images/github-apps/github_apps_user_authorization.png)

{% endif %}
1. デフォルトでは、アプリケーションのセキュリティを高めるため、アプリケーションは期限付きのユーザ認可トークンを使用します。 期限付きのユーザトークンの使用をオプトアウトするには、[Expire user authorization tokens] の選択を解除する必要があります。 更新トークン フローの設定とユーザー トークンの期限設定の利点の詳細については、「[ユーザーからサーバーへのアクセス トークンの更新](/apps/building-github-apps/refreshing-user-to-server-access-tokens/)」を参照してください。
  ![GitHub アプリのセットアップ時にユーザー トークンの期限設定をオプトインするためのオプション](/assets/images/github-apps/expire-user-tokens-selection.png)
1. アプリが OAuth フローを使用してユーザーを認可する場合は、 **[インストール時にユーザーの認可 (OAuth) を要求する]** を選択して、ユーザーがアプリをインストール時に認可するように設定できます。 このオプションを選択した場合、[Setup URL] が利用できなくなり、アプリケーションのインストール後にユーザはあなたが設定した [User authorization callback URL] にリダイレクトされます。 詳細については、「[インストール中のユーザーの認可](/apps/installing-github-apps/#authorizing-users-during-installation)」を参照してください。
![インストール時のユーザーの認可の要求](/assets/images/github-apps/github_apps_request_auth_upon_install.png){% ifversion device-flow-is-opt-in %}
1. GitHub アプリでデバイス フローを使用してユーザーを特定および認可する場合は、 **[デバイス フローを有効にする]** をクリックします。 デバイス フローの詳細については、「[OAuth アプリを認可する](/developers/apps/building-oauth-apps/authorizing-oauth-apps#device-flow)」を参照してください。
  ![デバイス フローを有効にするためのフィールドを示すスクリーンショット](/assets/images/oauth-apps/enable-device-flow.png){% endif %}
1. インストール後に追加の設定が必要な場合、[Setup URL] を追加して、アプリケーションをインストールした後にユーザをリダイレクトします。
![GitHub アプリのセットアップ URL を入力するフィールド](/assets/images/github-apps/github_apps_setup_url.png)

  {% note %}

  **注:** 前の手順で **[インストール時にユーザーの認可 (OAuth) を要求する]** を選択した場合は、このフィールドを使用できません。ユーザーはアプリのインストール後に [ユーザー認可のコールバック URL] にリダイレクトされます。

  {% endnote %}

1. [Webhook URL] に、イベントが POST する URL を入力します。 各アプリケーションは、アプリケーションがインストールまたは変更されたり、アプリケーションがサブスクライブしているその他のイベントが発生したりするたびに、アプリケーションで設定した webhook を受信します。
![GitHub アプリの Webhook URL を入力するフィールド](/assets/images/github-apps/github_apps_webhook_url.png)

1. 必要に応じて、webhook を保護するための、オプションのシークレットトークンを [Webhook Secret] に入力します。
![Webhook のシークレット トークンを追加するためのフィールド](/assets/images/github-apps/github_apps_webhook_secret.png)

  {% note %}

  **注:** シークレット トークンを設定することを強くお勧めします。 詳細については、「[webhook のセキュリティ保護](/webhooks/securing/)」をご覧ください。

  {% endnote %}

1. [Permissions] で、アプリケーションが要求する権限を選択します。 アクセス許可の種類ごとに、ドロップダウン メニューを使用して **[読み取り専用]** 、 **[読み取りおよび書き込み]** 、または **[アクセス権なし]** をクリックします。
![GitHub アプリのさまざまなアクセス許可](/assets/images/github-apps/github_apps_new_permissions_post2dot13.png)
1. [Subscribe to events] で、アプリケーションが受け取るイベントを選択します。
1. アプリをインストールできる場所を選択するには、 **[このアカウントのみ]** または **[任意のアカウント]** を選択します。 インストール オプションの詳細については、「[GitHub アプリをパブリックまたはプライベートにする](/apps/managing-github-apps/making-a-github-app-public-or-private/)」を参照してください。
![GitHub アプリのインストール オプション](/assets/images/github-apps/github_apps_installation_options.png)
1. **[GitHub アプリの作成]** をクリックします。
![GitHub アプリを作成するためのボタン](/assets/images/github-apps/github_apps_create_github_app.png)
