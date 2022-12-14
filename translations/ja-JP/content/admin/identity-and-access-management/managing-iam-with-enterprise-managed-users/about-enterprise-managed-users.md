---
title: Enterprise Managed User について
shortTitle: About managed users
intro: You can centrally manage identity and access for your enterprise members on {% data variables.product.prodname_dotcom %} from your identity provider.
product: '{% data reusables.gated-features.emus %}'
redirect_from:
- /early-access/github/articles/get-started-with-managed-users-for-your-enterprise
- /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users
- /admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users
versions:
  ghec: '*'
type: overview
topics:
- Accounts
- Authentication
- Enterprise
- SSO
ms.openlocfilehash: 87fe1c85c8870f548fc4d7546b3056379bf85e6f
ms.sourcegitcommit: ea9a577cff7ec16ded25ed57417c83ec04816428
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 04/07/2022
ms.locfileid: "141519557"
---
## <a name="about--data-variablesproductprodname_emus-"></a>{% data variables.product.prodname_emus %} について

{% data variables.product.prodname_emus %} を使用すると、ID プロバイダー (IdP) を使用して Enterprise メンバーのユーザー アカウントを制御できます。 SAML シングル サインオン (SSO) を使用して認証を簡略化し、Enterprise メンバーのユーザー アカウントをプロビジョニング、更新、プロビジョニング解除できます。 IdP で {% data variables.product.prodname_emu_idp_application %} アプリケーションに割り当てられたユーザーは、{% data variables.product.prodname_dotcom %} の新しいユーザー アカウントとしてプロビジョニングされ、Enterprise に追加されます。 IdP からユーザー名、プロファイル データ、Team メンバーシップ、リポジトリへのアクセスを制御します。

IdP では、各 {% data variables.product.prodname_managed_user %} に、ユーザー、Enterprise 所有者、または課金マネージャーのロールを付与できます。 {% data variables.product.prodname_managed_users_caps %} は、Enterprise 内の Organization を所有でき、他の {% data variables.product.prodname_managed_users %} を Organization とその中の Team に追加できます。 詳細については、「[Enterprise におけるロール](/github/setting-up-and-managing-your-enterprise/managing-users-in-your-enterprise/roles-in-an-enterprise)」および「[Organization について](/organizations/collaborating-with-groups-in-organizations/about-organizations)」を参照してください。

{% data variables.product.prodname_managed_users %} は、Organization 内の Team に接続されている IdP に追加されるため、Organization メンバーシップは、手動で管理することも、自動的に更新することもできます。 {% data variables.product.prodname_managed_user %} を Organization に手動で追加した場合、それらを IdP 上の {% data variables.product.prodname_emu_idp_application %} アプリケーションから割り当て解除すると、ユーザーは中断されますが、Organization からは削除されません。 Organization と Team のメンバーシップを自動的に管理する方法の詳細については、「[Managing team memberships with identity provider groups](/github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/managing-team-memberships-with-identity-provider-groups)」 (ID プロバイダー グループを使用した Team メンバーシップの管理) を参照してください。

{% data variables.product.prodname_managed_users %} アクセス権と、Enterprise 内のリポジトリに投稿する機能を付与できますが、{% data variables.product.prodname_managed_users %} では、パブリック コンテンツを作成したり、残りの {% data variables.product.prodname_dotcom %} で他のユーザー、Organization、Enterprise と共同作業を行ったりすることはできません。 Enterprise 用にプロビジョニングされた {% data variables.product.prodname_managed_users %} は、Enterprise 外部の Organization またはリポジトリに招待することも、{% data variables.product.prodname_managed_users %} を他の Enterprise に招待することもできません。 外部のコラボレーターは、{% data variables.product.prodname_emus %} ではサポートされていません。

Enterprise の {% data variables.product.prodname_managed_users %} のユーザー名とそのプロファイル情報 (表示名やメール アドレスなど) は、IdP によって設定され、ユーザー自身が変更することはできません。 詳細については、「[ユーザー名とプロファイル情報](#usernames-and-profile-information)」を参照してください。

{% data reusables.enterprise-accounts.emu-forks %}

Enterprise 所有者は、{% data variables.product.prodname_dotcom %} に対する {% data variables.product.prodname_managed_users %} のすべてのアクションを監査できます。

{% data variables.product.prodname_emus %} を使用するには、{% data variables.product.prodname_emus %} を有効にした別の種類の Enterprise アカウントが必要です。 このアカウントの作成の詳細については、「[Managed User を含む Enterprise について](#about-enterprises-with-managed-users)」を参照してください。


## <a name="identity-provider-support"></a>ID プロバイダーのサポート

{% data variables.product.prodname_emus %} では、次の IdP がサポートされています。

{% data reusables.enterprise-accounts.emu-supported-idps %}

## <a name="abilities-and-restrictions-of--data-variablesproductprodname_managed_users-"></a>{% data variables.product.prodname_managed_users %} の機能と制限

{% data variables.product.prodname_managed_users_caps %} は、ユーザー アカウントが所有するエンタープライズ リポジトリとプライベート リポジトリ内のプライベート リポジトリと内部リポジトリにのみ投稿できます。 {% data variables.product.prodname_managed_users_caps %} には、より広い {% data variables.product.prodname_dotcom %} コミュニティへの読み取り専用アクセス権があります。 ユーザーとコンテンツに対するこれらの可視性とアクセスの制限は、API 要求を含むすべての要求に適用されます。

* {% data variables.product.prodname_managed_users_caps %} は、Enterprise 外部のリポジトリでの Issue または pull request の作成、リアクションに対するコメントまたはリアクションの追加、Star、Watch または Fork 操作を行うことはできません。
* {% data variables.product.prodname_managed_users_caps %} は、{% data variables.product.prodname_dotcom_the_website %} のすべてのパブリック リポジトリを表示できますが、Enterprise 外部のリポジトリにコードをプッシュすることはできません。
* {% data variables.product.prodname_managed_users_caps %} および作成したコンテンツは、Enterprise の他のメンバーにのみ表示されます。 
* {% data variables.product.prodname_managed_users_caps %} は、Enterprise 外部のユーザーをフォローできません。
* {% data variables.product.prodname_managed_users_caps %} は、gists を作成したり、gists に対してコメントしたりすることはできません。
* {% data variables.product.prodname_managed_users_caps %} は、そのユーザー アカウントに {% data variables.product.prodname_github_apps %} をインストールできません。
* 他の {% data variables.product.prodname_dotcom %} ユーザーは、{% data variables.product.prodname_managed_user %} の表示またはメンションを行ったり、共同作業に招待したりすることはできません。
* {% data variables.product.prodname_managed_users_caps %} はプライベート リポジトリのみを所有でき、{% data variables.product.prodname_managed_users %} は、所有するリポジトリで共同作業するためにのみ他のエンタープライズ メンバーを招待できます。
* Organization および Enterprise リポジトリの可視性の設定に応じて、{% data variables.product.prodname_emu_enterprise %} が所有する Organization では、プライベートおよび内部リポジトリのみを作成できます。 

## <a name="about-enterprises-with-managed-users"></a>Managed User を含む Enterprise について

{% data variables.product.prodname_emus %} を使用するには、{% data variables.product.prodname_emus %} を有効にした別の種類の Enterprise アカウントが必要です。 {% data variables.product.prodname_emus %} を試用するか、既存の Enterprise から移行するためのオプションについて検討するには、[{% data variables.product.prodname_dotcom %} の営業チーム](https://enterprise.github.com/contact)にお問い合わせください。

GitHub 営業チームの窓口担当者が、新しい {% data variables.product.prodname_emu_enterprise %} を作成するために協力します。 Enterprise を設定するユーザーのメール アドレスと、Enterprise メンバーのユーザー名のサフィックスとして使用されるショートコードを指定する必要があります。 {% data reusables.enterprise-accounts.emu-shortcode %} 詳細については、「[ユーザー名とプロファイル情報](#usernames-and-profile-information)」を参照してください。

Enterprise を作成すると、{% data variables.product.prodname_dotcom %} からメールが届き、Enterprise のセットアップ ユーザーのパスワードを選択するよう求められます。このユーザーは、Enterprise の最初の所有者になります。 パスワードを設定する際は、Incognito ウィンドウまたはプライベート ブラウズ ウィンドウを使用します。 セットアップ ユーザーは、Enterprise の SAML シングル サインオンと SCIM プロビジョニング統合を構成するためにのみ使用されます。 SAML が正常に有効になると、Enterprise アカウントを管理するためのアクセス権はなくなります。

セットアップ ユーザーのユーザー名は、Enterprise のショートコードにサフィックス `_admin` が付きます。 セットアップ ユーザーにログインすると、Enterprise 向けに SAML SSO を構成して開始できます。 詳細については、「[Configuring SAML single sign-on for Enterprise Managed Users](/github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/configuring-saml-single-sign-on-for-enterprise-managed-users)」 (Enterprise Managed Users 向けの SAML シングル サインオンの構成) を参照してください。

{% note %}

{% data reusables.enterprise-accounts.emu-password-reset-session %}

{% endnote %}

## <a name="authenticating-as-a--data-variablesproductprodname_managed_user-"></a>{% data variables.product.prodname_managed_user %} として認証を行う

{% data variables.product.prodname_managed_users_caps %} は ID プロバイダーを介して認証を行う必要があります。 {% data variables.product.prodname_managed_user %} は、認証を行うために、IdP アプリケーション ポータルにアクセスするか、{% data variables.product.prodname_dotcom_the_website %} のログイン ページを使用できます。

{% data reusables.enterprise-accounts.about-recovery-codes %} 詳細については、「[Managing recovery codes for your enterprise](/admin/identity-and-access-management/managing-recovery-codes-for-your-enterprise)」 (Enterprise の復旧コードの管理) を参照してください。

### <a name="authenticating-as-a--data-variablesproductprodname_managed_user--via--data-variablesproductprodname_dotcom_the_website-"></a>{% data variables.product.prodname_dotcom_the_website %} を介して {% data variables.product.prodname_managed_user %} として認証を行う

1. [https://github.com/login](https://github.com/login) に移動します。
1. [Username or email address] テキスト ボックスに、アンダースコアとショートコードを含むユーザー名を入力します。
  ![ログイン フォームを示すスクリーンショット](/assets/images/help/enterprises/emu-login-username.png) このフォームでユーザー名が認識されると、フォームは更新されます。 このフォームでパスワードを入力する必要はありません。
1. ID プロバイダーに進むには、 **[Sign in with your identity provider]** をクリックします。
  ![[Sign in with your identity provider] ボタンを示すスクリーンショット](/assets/images/help/enterprises/emu-login-submit.png)

## <a name="usernames-and-profile-information"></a>ユーザー名とプロファイル情報

{% data variables.product.prodname_emu_enterprise %} を作成する際、Enterprise メンバーのユーザー名のサフィックスとして使用されるショートコードを選択します。 {% data reusables.enterprise-accounts.emu-shortcode %} SAML SSO を構成するセットアップ ユーザーのユーザー名は、 **@<em>SHORT-CODE</em>_admin** の形式になります。

ID プロバイダーから新しいユーザーをプロビジョニングする場合、新しい {% data variables.product.prodname_managed_user %} のユーザー名は、 **@<em>IDP-USERNAME</em>_<em>SHORT-CODE</em>** の形式になります。

| ID プロバイダー                 | {% data variables.product.prodname_dotcom %} のユーザー名  |
|-----------------------------------|----------------------|
| Azure Active Directory (Azure AD) | <ul><li>_IDP-USERNAME_ は、UPN (ユーザー プリンシパル名) の `@` 文字の前の文字を正規化することによって形成されます。</li><li>ゲスト アカウントでは、UPN から `#EXT` が削除されます。</li></ul> |
| Okta                              | <ul><li>_IDP-USERNAME_ は、IdP によって提供される、正規化されたユーザー名属性です。</li></ul>                |

IdP によって提供されるユーザー名の一意の部分が正規化されたときに削除された場合、ユーザーのプロビジョニング時に競合が発生する可能性があります。 ユーザー名の競合が原因でユーザーをプロビジョニングできない場合は、IdP によって提供されるユーザー名を変更する必要があります。

{% data variables.product.prodname_dotcom %} 上のプロビジョニングされた新しいアカウントのユーザー名 (アンダースコアとショートコードを含む) は、39 文字以内にする必要があります。

{% data variables.product.prodname_managed_user %} のプロファイル名とメール アドレスも IdP によって提供されます。 {% data variables.product.prodname_managed_users_caps %} は、{% data variables.product.prodname_dotcom %} 上のプロファイル名またはメール アドレスを変更できません。
