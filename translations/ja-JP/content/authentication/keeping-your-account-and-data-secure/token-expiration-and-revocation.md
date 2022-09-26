---
title: トークンの有効期限と取り消し
intro: 'トークンは、期限切れになる可能性があり、ユーザー、承認したアプリケーション、{% data variables.product.product_name %} 自体によって取り消される場合もあります。'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Token expiration
redirect_from:
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/token-expiration-and-revocation
ms.openlocfilehash: aa1d8902fc120aa616b8a3355f1add21a482d99e
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '145088386'
---
トークンが{% ifversion fpt or ghae or ghes > 3.2 or ghec %}期限切れになるか{% endif %}取り消されると、Git 要求と API 要求の認証に使用できなくなります。 期限切れのトークンや取り消されたトークンを復元することはできません。ユーザーまたはアプリケーションが新しいトークンを作成する必要があります。

この記事では、{% data variables.product.product_name %} トークンが取り消されるか期限切れになる可能性がある理由について説明します。

{% note %}

**注:** 個人用アクセス トークンまたは OAuth トークンが期限切れになるか取り消されると、セキュリティ ログに `oauth_authorization.destroy` アクションが表示されることがあります。 詳細については、「[セキュリティ ログの確認](/github/authenticating-to-github/keeping-your-account-and-data-secure/reviewing-your-security-log)」を参照してください。

{% endnote %}

{% ifversion fpt or ghae or ghes > 3.2 or ghec %}
## 有効期限に達した後に取り消されるトークン

個人用アクセス トークンを作成するときは、トークンの有効期限を設定することをお勧めします。 有効期限に達すると、トークンは自動的に取り消されます。 詳細については、[個人アクセス トークンの作成](/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)に関する記事を参照してください。
{% endif %}

{% ifversion fpt or ghec %}
## パブリック リポジトリまたはパブリック gist にプッシュされたときに取り消されるトークン

有効な OAuth トークン、{% data variables.product.prodname_github_app %} トークン、個人用アクセス トークンがパブリック リポジトリまたはパブリック gist にプッシュされると、そのトークンは自動的に取り消されます。 

パブリック リポジトリとパブリック gist にプッシュされた OAuth トークンと個人用アクセス トークンは、そのトークンにスコープがある場合にのみ取り消されます。
{% endif %}

{% ifversion fpt or ghec %}
## 使用されないために期限切れになるトークン

{% data variables.product.product_name %} では、1 年間使用されていない OAuth トークンまたは個人用アクセス トークンを自動的に取り消します。
{% endif %}

## ユーザーによって取り消されるトークン

アカウント設定から {% data variables.product.prodname_github_app %}または {% data variables.product.prodname_oauth_app %}の認可を取り消して、アプリに関連付けられているトークンを取り消すことができます。 詳細については、「[認可された統合をレビューする](/github/authenticating-to-github/keeping-your-account-and-data-secure/reviewing-your-authorized-integrations)」および「[認可されたアプリケーション (OAuth) をレビューする](/github/authenticating-to-github/keeping-your-account-and-data-secure/reviewing-your-authorized-applications-oauth)」を参照してください。

認可が取り消されると、その認可に関連付けられているトークンも取り消されます。 アプリケーションを再認可するには、サード パーティのアプリケーションまたは Web サイトの指示に従って、{% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} でアカウントをもう一度接続します。

## {% data variables.product.prodname_oauth_app %}によって取り消されるトークン

{% data variables.product.prodname_oauth_app %}の所有者は、アプリのアカウントの認可を取り消すことができます。これにより、認可に関連付けられているトークンも取り消されます。 OAuth アプリの認可の取り消しの詳細については、「[アプリの認可の削除](/rest/reference/apps#delete-an-app-authorization)」を参照してください。

{% data variables.product.prodname_oauth_app %} 所有者は、承認に関連付けられている個々のトークンを取り消すこともできます。 OAuth アプリの個々のトークンの取り消しの詳細については、「[アプリ トークンの削除](/rest/apps/oauth-applications#delete-an-app-token)」を参照してください。

## 同じスコープを持つ {% data variables.product.prodname_oauth_app %}のトークン数が多すぎるために取り消されるトークン

{% data reusables.apps.oauth-token-limit %}

## {% data variables.product.prodname_github_app %}の構成が原因で取り消されるユーザー トークン

{% data variables.product.prodname_github_app %}で作成されたユーザーからサーバーへのトークンは、既定では 8 時間後に期限切れになります。 {% data variables.product.prodname_github_apps %}の所有者は、ユーザーからサーバーへのトークンが期限切れにならないようにアプリを構成できます。 {% data variables.product.prodname_dotcom %} アプリのユーザーからサーバーへのトークンの動作の変更の詳細については、「[アプリケーションのオプション機能を有効化する](/developers/apps/getting-started-with-apps/activating-optional-features-for-apps)」を参照してください。
