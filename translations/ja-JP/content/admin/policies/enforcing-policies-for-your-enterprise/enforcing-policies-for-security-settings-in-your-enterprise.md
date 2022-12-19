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
ms.openlocfilehash: 7a383ed586d084a7e2562a5927dd198caca65037
ms.sourcegitcommit: 7a74d5796695bb21c30e4031679253cbc16ceaea
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/28/2022
ms.locfileid: '148183965'
---
## Enterprise でのセキュリティ設定のポリシーについて

ポリシーを適用して、{% data variables.product.product_name %} で Enterprise が所有する Organization のセキュリティ設定を制御できます。 既定では、Organization の所有者はセキュリティ設定を管理できます。 

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

## Enterprise の SSH 証明機関を管理する

SSH 証明機関 (CA) を使うと、Enterprise が所有するすべての Organization のメンバーに、指定した SSH 証明書を使ってその Organization のリポジトリにアクセスするのを許可できます。 {% data reusables.organizations.can-require-ssh-cert %} 詳細については、「[SSH 認証局について](/organizations/managing-git-access-to-your-organizations-repositories/about-ssh-certificate-authorities)」を参照してください。

{% data reusables.organizations.add-extension-to-cert %}

### SSH認証局を追加する

Enterprise に SSH 証明書が必要な場合、Enterprise メンバーは SSH 経由の Git 操作に特別な URL を使用する必要があります。 詳細については、「[SSH 認証局について](/organizations/managing-git-access-to-your-organizations-repositories/about-ssh-certificate-authorities#about-ssh-urls-with-ssh-certificates)」を参照してください。

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %} {% data reusables.organizations.new-ssh-ca %} {% data reusables.organizations.require-ssh-cert %}

### SSH認証局を削除する

CAを削除すると、元に戻すことはできません。 同じCAを使用したくなった場合には、そのCAを再びアップロードする必要があります。

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %} {% data reusables.organizations.delete-ssh-ca %}

{% ifversion sso-redirect %}
## 認証されていないユーザーに対する SSO の管理

{% data reusables.enterprise-managed.sso-redirect-release-phase %}

Enterprise で {% data variables.product.prodname_emus %} を使用している場合は、認証されていないユーザーが Enterprise のリソースにアクセスしようとしたときに表示される内容を選ぶことができます。 {% data variables.product.prodname_emus %} の詳しい情報については、「[{% data variables.product.prodname_emus %} について](/enterprise-cloud@latest/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-enterprise-managed-users)」を参照してください。

既定では、プライベート リソースの存在を隠すために、認証されていないユーザーがお客様の Enterprise にアクセスしようとすると、{% data variables.product.company_short %} に 404 エラーが表示されます。

開発者の混乱を防ぐために、ID プロバイダー (IdP) を介してユーザーがシングル サインオン (SSO) に自動的にリダイレクトされるように、この動作を変更できます。 自動リダイレクトを有効にすると、Enterprise のリソースのいずれかの URL にアクセスするすべてのユーザーは、リソースが存在することを確認できます。 しかし、リソースを確認できるのは、IdP で認証した後に適切なアクセス権を持っている場合のみです。

{% note %}

**注:** ユーザーが Enterprise のいずれかのリソースにアクセスしようとしたときに個人アカウントにサインインすると、自動的にサインアウトされ、SSO にリダイレクトされ、{% data variables.enterprise.prodname_managed_user %} にサインインすることになります。 詳しくは、「[複数のアカウントの管理](/enterprise-cloud@latest/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-your-personal-account/managing-multiple-accounts)」をご覧ください。

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %}
1. [シングル サインオン設定] で、 **[ユーザーをサインインに自動的にリダイレクトする]** を選択または選択解除します。

   ![ユーザーをサインインに自動的にリダイレクトするチェックボックス](/assets/images/enterprise/security/Enterprise-Redirect-Users-To-Sign-In-Checkbox.png) {% endif %}

## 参考資料

- [エンタープライズの ID およびアクセス管理について](/admin/authentication/managing-identity-and-access-for-your-enterprise/about-identity-and-access-management-for-your-enterprise) {%- ifversion ghec %}
- [エンタープライズのコンプライアンス レポートにアクセスする](/admin/overview/accessing-compliance-reports-for-your-enterprise) {%- endif %} {%- ifversion ghec or ghae %}
- [IP 許可リストを使用したネットワーク トラフィックの制限](/admin/configuration/configuring-your-enterprise/restricting-network-traffic-to-your-enterprise-with-an-ip-allow-list){%- endif %}
