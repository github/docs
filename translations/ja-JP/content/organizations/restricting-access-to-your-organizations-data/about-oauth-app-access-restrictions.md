---
title: OAuthアプリケーションのアクセス制限について
intro: Organizationは、{% data variables.product.prodname_oauth_app %}アクセス制限を有効化することによって、Organizationのリポジトリやその他のリソースにどの{% data variables.product.prodname_oauth_apps %}がアクセスできるかを選択できます。
redirect_from:
- /articles/about-third-party-application-restrictions
- /articles/about-oauth-app-access-restrictions
- /github/setting-up-and-managing-organizations-and-teams/about-oauth-app-access-restrictions
versions:
  fpt: '*'
  ghec: '*'
topics:
- Organizations
- Teams
shortTitle: OAuth App access
ms.openlocfilehash: 43e12066ec9381a94fe45187d066300479aa495e
ms.sourcegitcommit: 1309b46201604c190c63bfee47dce559003899bf
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: "145140619"
---
## OAuthアプリケーションのアクセス制限について

{% data variables.product.prodname_oauth_app %}のアクセス制限が有効化されると、Organizationのメンバーは{% data variables.product.prodname_oauth_app %}のOrganizationのリソースへのアクセスを認可できなくなります。 Organizationのメンバーは、使用したい{% data variables.product.prodname_oauth_apps %}の承認をオーナーにリクエストでき、Organizationオーナーは保留になっているリクエストの通知を受信します。

{% data reusables.organizations.oauth_app_restrictions_default %}

{% tip %}

**Tip**: 組織が {% data variables.product.prodname_oauth_app %} のアクセス制限を設定していない場合、組織のメンバーが認可したすべての {% data variables.product.prodname_oauth_app %} は、組織のプライベート リソースにもアクセスできます。

{% endtip %}

{% ifversion fpt %} 組織のリソースをさらに保護するために、SAML シングル サインオンのようなセキュリティ機能を備えた {% data variables.product.prodname_ghe_cloud %} にアップグレードすることができます。 {% data reusables.enterprise.link-to-ghec-trial %} {% endif %}

## {% data variables.product.prodname_oauth_app %}のアクセス制限のセットアップ

Organizationのオーナーが{% data variables.product.prodname_oauth_app %}のアクセス制限を初めてセットアップする場合、以下のようになります。

- **組織が所有するアプリケーション** には、組織のリソースへのアクセスが自動的に付与されます。
- **{% data variables.product.prodname_oauth_apps %}** は、組織のリソースへのアクセスを即座に失います。
- **2014 年 2 月以前に作成された SSH キー** は、組織のリソースへのアクセスを即座に失います (これにはユーザーおよびデプロイ キーが含まれます)。
- **2014 年 2 月中、あるいはそれ以降に {% data variables.product.prodname_oauth_apps %} によって作成された SSH キー** は、組織のリソースへのアクセスを即座に失います。
- **プライベートの組織リポジトリからのフックの配信** は、承認されていない {% data variables.product.prodname_oauth_apps %} には送信されなくなります。
- 承認されていない {% data variables.product.prodname_oauth_apps %} でのプライベートな組織のリソースへの **API アクセス** はできなくなります。 加えて、パブリックなOrganizationリソースの作成、更新、削除のアクションの権限はありません。
- **ユーザーが作成したフックおよび 2014 年 5 月より前に作成されたフック** には影響ありません。
- **組織が所有するリポジトリのプライベート フォーク** は、組織のアクセス制限に従います。

## SSHアクセスの失敗の解決

{% data variables.product.prodname_oauth_app %}のアクセス制限が有効化されたOrganizationへのアクセスを2014年2月以前に作成されたSSHキーが失った場合、それ以降のSSHアクセスの試行は失敗します。 ユーザには、キーを認可できる、あるいは信頼されたキーをそこにアップロードできるURLを示すエラーメッセージが返されます。

## Webhooks

{% data variables.product.prodname_oauth_app %}が制限が有効化された後のOrganizationへのアクセスを許可された場合、その{% data variables.product.prodname_oauth_app %}が作成した既存のwebhookは、ディスパッチを再開します。

Organizationが以前に認可された{% data variables.product.prodname_oauth_app %}からアクセスを削除した場合、そのアプリケーションが作成した既存のwebhookはディスパッチされなくなります（それらのフックは無効化されますが、削除はされません）。

## アクセス制限の再有効化

Organizationが{% data variables.product.prodname_oauth_app %}のアクセスアプリケーション制限を無効化し、後に再び有効化した場合、以前に認可されていた{% data variables.product.prodname_oauth_app %}は自動的にOrganizationのリソースへのアクセスを許可されます。

## 参考資料

- 「[組織に対する {% data variables.product.prodname_oauth_app %} のアクセス制限を有効にする](/articles/enabling-oauth-app-access-restrictions-for-your-organization)」
- 「[組織の {% data variables.product.prodname_oauth_apps %} を承認する](/articles/approving-oauth-apps-for-your-organization)」
- 「[組織のインストール済み統合を確認する](/articles/reviewing-your-organization-s-installed-integrations)」
- 「[組織に対して以前に承認した {% data variables.product.prodname_oauth_app %} へのアクセスを拒否する](/articles/denying-access-to-a-previously-approved-oauth-app-for-your-organization)」
- 「[組織に対する {% data variables.product.prodname_oauth_app %} のアクセス制限を無効にする](/articles/disabling-oauth-app-access-restrictions-for-your-organization)」
- 「[{% data variables.product.prodname_oauth_apps %} に対する組織の承認を要求する](/articles/requesting-organization-approval-for-oauth-apps)」
- 「[{% data variables.product.prodname_oauth_apps %} の承認](/github/authenticating-to-github/keeping-your-account-and-data-secure/authorizing-oauth-apps)」
