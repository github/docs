---
title: Enterprise でセキュリティ設定のポリシーを適用する
intro: Enterprise の Organization 内のセキュリティ設定を管理するようにポリシーを適用することも、各 Organization でポリシーを設定することもできます。
permissions: Enterprise owners can enforce policies for security settings in an enterprise.
miniTocMaxHeadingLevel: 3
redirect_from:
  - /articles/enforcing-security-settings-for-organizations-in-your-business-account
  - /articles/enforcing-security-settings-for-organizations-in-your-enterprise-account
  - /articles/enforcing-security-settings-in-your-enterprise-account
  - /github/articles/managing-allowed-ip-addresses-for-organizations-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise-account/enforcing-security-settings-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/enforcing-security-settings-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/setting-policies-for-organizations-in-your-enterprise-account/enforcing-security-settings-in-your-enterprise-account
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - Policies
  - Security
shortTitle: Policies for security settings
ms.openlocfilehash: f04f345b37701353f539a970a8f891574b4ec447
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147707284'
---
## Enterprise でのセキュリティ設定のポリシーについて

ポリシーを適用して、{% data variables.product.product_name %} で Enterprise が所有する Organization のセキュリティ設定を制御できます。 既定では、Organization の所有者はセキュリティ設定を管理できます。 詳しくは、「[Organization を安全に保つ](/organizations/keeping-your-organization-secure)」をご覧ください。

{% ifversion ghec or ghes %}

## Enterprise で Organization に対して 2 要素認証を必須にする

Enterprise の所有者は、Enterprise が所有するすべての Organization の Organization メンバー、支払いマネージャー、外部コラボレーターに対し、ユーザー アカウントをセキュリティで保護するために 2 要素認証を使うことを要求できます。

Enterprise が所有するすべての Organization で 2 要素認証を要求する前に、所有者自身のアカウントの 2 要素認証を有効にする必要があります。 詳細については、「[2 要素認証 (2FA) を使用したアカウントのセキュリティ保護](/articles/securing-your-account-with-two-factor-authentication-2fa/)」を参照してください。

{% warning %}

**警告:**

- Enterprise で 2 要素認証を要求すると、Enterprise が所有するすべての Organization 内のメンバー、外部コラボレーター、支払いマネージャー (ボットアカウントを含む) で、2 要素認証を使わないものは、Organization から削除され、そのリポジトリにアクセスできなくなります。 Organization のプライベートリポジトリのフォークへのアクセスも失います。 Organization から削除されてから 3 か月以内にユーザーが自分のアカウントで 2 要素認証を有効にすれば、そのユーザーのアクセス特権と設定を復帰できます。 詳細については、「[Oraganization の以前のメンバーを復帰させる](/articles/reinstating-a-former-member-of-your-organization)」を参照してください。
- 2 要素認証の要求を有効にした後、その Enterprise アカウントで所有されるすべての Organization の所有者、メンバー、支払いマネージャー、または外部コラボレーターが、各自のアカウントで 2 要素認証を無効にすると、Organization から自動的に削除されます。
- 2 要素認証を要求するエンタープライズに所有者が 1 人しかいない場合は、エンタープライズに対する 2 要素認証の要求を無効にしない限り、所有者のユーザー アカウントの 2 要素認証を無効にすることはできません。

{% endwarning %}

2 要素認証の使用を義務化する前に、Organization のメンバー、外部コラボレーター、支払いマネージャーに通知をして、各自に自分のアカウントで 2 要素認証をセットアップしてもらってください。 Organization のオーナーは、メンバーと外部コラボレーターがすでに 2 要素認証を使用しているかどうかを、各 Organization の [People] ページで確認できます。 詳細については、「[組織内のユーザーが 2 要素認証を有効にしているかどうかの表示](/articles/viewing-whether-users-in-your-organization-have-2fa-enabled)」を参照してください。

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %}
4. [Two-factor authentication] で、設定変更に関する情報を確認します。 {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
5. [2 要素認証] で、 **[会社のすべての Organizations に 2 要素認証を要求する]** をオンにして、 **[保存]** をクリックします。
  ![2 要素認証を要求するチェックボックス](/assets/images/help/business-accounts/require-2fa-checkbox.png)
6. メッセージが表示されたら、Enterprise が所有する Organization から削除されるメンバーと外部コラボレーターに関する情報を読みます。 変更を確定するには、Enterprise の名前を入力して、 **[メンバーを削除し、2 要素認証を必須にする]** をクリックします。
  ![[2 要素の強制を確認する] ボックス](/assets/images/help/business-accounts/confirm-require-2fa.png)
7. Enterprise によって所有される Organization から削除されるメンバーまたは外部コラボレーターがいる場合、Organization への元の権限とアクセス権を復帰するための招待状を、それらのユーザーに送信することをお勧めします。 彼らが招待状を受け取ることができるようにするには、まず各ユーザーが 2 要素認証を有効にする必要があります。

{% endif %}

{% ifversion ghec or ghae %}

## Enterprise 内の Organization で許可される IP アドレスを管理する

{% ifversion ghae %}

{% data variables.product.product_name %} で Enterprise へのネットワーク トラフィックを制限できます。 詳細については、「[Enterprise へのネットワーク トラフィックを制限する](/admin/configuration/configuring-your-enterprise/restricting-network-traffic-to-your-enterprise)」を参照してください。

{% elsif ghec %}

Enterprise の所有者は、特定の IP アドレスに対する許可リストを構成することで、Enterprise 内の Organization が所有するプライベート アセットへのアクセスを制限できます。 {% data reusables.identity-and-permissions.ip-allow-lists-example-and-restrictions %}

{% data reusables.identity-and-permissions.ip-allow-lists-cidr-notation %}

{% data reusables.identity-and-permissions.ip-allow-lists-enable %} {% data reusables.identity-and-permissions.ip-allow-lists-enterprise %}

許可 IP アドレスを、Organization ごとに設定することもできます。 詳しくは、「[Organization に対する許可 IP アドレスを管理する](/organizations/keeping-your-organization-secure/managing-allowed-ip-addresses-for-your-organization)」をご覧ください。

### 許可 IP アドレスを追加する

{% data reusables.identity-and-permissions.about-adding-ip-allow-list-entries %}

{% data reusables.identity-and-permissions.ipv6-allow-lists %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %} {% data reusables.identity-and-permissions.ip-allow-lists-add-ip %} {% data reusables.identity-and-permissions.ip-allow-lists-add-description %} {% data reusables.identity-and-permissions.ip-allow-lists-add-entry %} {% data reusables.identity-and-permissions.check-ip-address %}

### {% data variables.product.prodname_github_apps %}によるアクセスの許可

{% data reusables.identity-and-permissions.ip-allow-lists-githubapps-enterprise %}

### 許可 IP アドレスを有効化する

{% data reusables.identity-and-permissions.about-enabling-allowed-ip-addresses %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %}
3. [IP 許可リスト] で、 **[IP 許可リストを有効にする]** を選択します。
  ![IP アドレスを許可するチェックボックス](/assets/images/help/security/enable-ip-allowlist-enterprise-checkbox.png)
4. **[保存]** をクリックします。

### 許可 IP アドレスを編集する

{% data reusables.identity-and-permissions.about-editing-ip-allow-list-entries %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %} {% data reusables.identity-and-permissions.ip-allow-lists-edit-entry %} {% data reusables.identity-and-permissions.ip-allow-lists-edit-ip %} {% data reusables.identity-and-permissions.ip-allow-lists-edit-description %}
8. **[Update]** をクリックします。
{% data reusables.identity-and-permissions.check-ip-address %}

{% ifversion ip-allow-list-address-check %}
### IP アドレスが許可されているかどうかを確認する

{% data reusables.identity-and-permissions.about-checking-ip-address %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %} {% data reusables.identity-and-permissions.check-ip-address-step %} {% endif %}

### 許可 IP アドレスを削除する

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %} {% data reusables.identity-and-permissions.ip-allow-lists-delete-entry %} {% data reusables.identity-and-permissions.ip-allow-lists-confirm-deletion %}

### IP許可リストで {% data variables.product.prodname_actions %} を使用する

{% data reusables.actions.ip-allow-list-self-hosted-runners %}

{% endif %}

{% endif %}

## Enterprise の SSH 証明機関を管理する

SSH 証明機関 (CA) を使うと、Enterprise が所有するすべての Organization のメンバーに、指定した SSH 証明書を使ってその Organization のリポジトリにアクセスするのを許可できます。 {% data reusables.organizations.can-require-ssh-cert %} 詳細については、「[SSH 認証局について](/organizations/managing-git-access-to-your-organizations-repositories/about-ssh-certificate-authorities)」を参照してください。

{% data reusables.organizations.add-extension-to-cert %}

### SSH認証局を追加する

Enterprise に SSH 証明書が必要な場合、Enterprise メンバーは SSH 経由の Git 操作に特別な URL を使用する必要があります。 詳細については、「[SSH 認証局について](/organizations/managing-git-access-to-your-organizations-repositories/about-ssh-certificate-authorities#about-ssh-urls-with-ssh-certificates)」を参照してください。

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %} {% data reusables.organizations.new-ssh-ca %} {% data reusables.organizations.require-ssh-cert %}

### SSH認証局を削除する

CAを削除すると、元に戻すことはできません。 同じCAを使用したくなった場合には、そのCAを再びアップロードする必要があります。

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %} {% data reusables.organizations.delete-ssh-ca %}

{% ifversion ghec or ghae %}
## 参考資料

- [Enterprise の ID とアクセス管理について](/admin/authentication/managing-identity-and-access-for-your-enterprise/about-identity-and-access-management-for-your-enterprise){% ifversion ghec %}
- [Enterprise のコンプライアンス レポートにアクセスする](/admin/overview/accessing-compliance-reports-for-your-enterprise){% endif %} {% endif %}
