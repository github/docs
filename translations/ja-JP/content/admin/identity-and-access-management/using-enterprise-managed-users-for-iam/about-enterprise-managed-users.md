---
title: '{% data variables.product.prodname_emus %} について'
shortTitle: About managed users
intro: 'ID プロバイダーから {% data variables.product.prodname_dotcom %} 上のエンタープライズ メンバーの ID とアクセスを一元管理することができます。'
redirect_from:
  - /early-access/github/articles/get-started-with-managed-users-for-your-enterprise
  - /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users
  - /admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users
  - /admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/about-enterprise-managed-users
  - /admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/about-enterprise-managed-users
versions:
  ghec: '*'
type: overview
topics:
  - Accounts
  - Authentication
  - Enterprise
  - SSO
allowTitleToDifferFromFilename: true
ms.openlocfilehash: e24ae7adb9f5c2efbb08be63788dae1eff501d99
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192698'
---
## {% data variables.product.prodname_emus %} について

{% data variables.product.prodname_emus %} を使用すると、ID プロバイダー (IdP) を使用して Enterprise メンバーのユーザー アカウントを制御できます。 IdP で {% data variables.product.prodname_emu_idp_application %} アプリケーションに割り当てられたユーザーは、{% data variables.product.prodname_dotcom %} の新しいユーザー アカウントとしてプロビジョニングされ、Enterprise に追加されます。 IdP からユーザー アカウントのユーザー名、プロファイル データ、チーム メンバーシップ、リポジトリへのアクセスを制御します。

IdP では、各{% data variables.enterprise.prodname_managed_user %}に、ユーザー、Enterprise 所有者、または課金マネージャーのロールを付与できます。 {% data variables.enterprise.prodname_managed_users_caps %}は、Enterprise 内の Organization を所有でき、他の{% data variables.enterprise.prodname_managed_users %}を Organization とその中の Team に追加できます。 詳細については、「[Enterprise におけるロール](/github/setting-up-and-managing-your-enterprise/managing-users-in-your-enterprise/roles-in-an-enterprise)」および「[Organization について](/organizations/collaborating-with-groups-in-organizations/about-organizations)」を参照してください。

{% ifversion oidc-for-emu %}

{% data reusables.enterprise-accounts.emu-cap-validates %}詳細については、「[IdP の条件付きアクセス ポリシー](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-support-for-your-idps-conditional-access-policy)」を参照してください。

{% endif %}

{% data variables.enterprise.prodname_managed_users %}に、Enterprise 内のリポジトリへのアクセス権と、そこに投稿する機能を付与できますが、{% data variables.enterprise.prodname_managed_users %}では、パブリック コンテンツを作成したり、残りの {% data variables.product.prodname_dotcom %} で他のユーザー、Organization、Enterprise と共同作業を行ったりすることはできません。 詳しい情報については、「[{% data variables.enterprise.prodname_managed_users %}の機能と制限](#abilities-and-restrictions-of-enterprise-managed-users)」を参照してください。

Enterprise の{% data variables.enterprise.prodname_managed_users %}のユーザー名とそのプロファイル情報 (表示名やメール アドレスなど) は、IdP によって設定され、ユーザー自身が変更することはできません。 詳細については、「[ユーザー名とプロファイル情報](#usernames-and-profile-information)」を参照してください。

Enterprise 所有者は、{% data variables.product.prodname_dotcom %} に対する{% data variables.enterprise.prodname_managed_users %}のすべてのアクションを監査できます。 詳細については、「[エンタープライズの監査ログ イベント](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise#about-audit-log-events-for-your-enterprise)」を参照してください。

{% data variables.product.prodname_emus %} を使用するには、{% data variables.product.prodname_emus %} を有効にした別の種類の Enterprise アカウントが必要です。 このアカウントの作成の詳細については、「[Managed User を含む Enterprise について](#about-enterprises-with-managed-users)」を参照してください。

{% note %}

**注:** {% data variables.product.prodname_ghe_cloud %} を使った ID とアクセスの管理には複数のオプションがあるので、{% data variables.product.prodname_emus %} はすべてのお客様にとって最適なソリューションではありません。 {% data variables.product.prodname_emus %} がお客様の企業に適しているかどうかについては、「[企業の認証について](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise#identifying-the-best-authentication-method-for-your-enterprise)」を参照してください。

{% endnote %}

## Organization メンバーシップの管理について

Organization メンバーシップは、手動で管理することも、IdP グループを使用して自動的に更新することもできます。 IdP を使用して Organization メンバーシップを管理するには、メンバーを IdP グループに追加し、IdP グループを Organization 内の Team に接続する必要があります。 Organization および Team のメンバーシップの管理に関する詳しい情報については、「[ID プロバイダー グループによる Team メンバーシップの管理](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/managing-team-memberships-with-identity-provider-groups)」を参照してください。

Enterprise によって所有されている Organization にメンバーを追加する方法によって、Organization からメンバーを削除する方法が決定されます。 

- メンバーを手動で Organization に追加した場合、手動で削除する必要があります。 IdP 上の {% data variables.product.prodname_emu_idp_application %} アプリケーションからユーザーの割り当て解除を行うと、ユーザーは停止されますが、Organization から削除されません。
- Organization 内の 1 つ以上の Team にマップされた IdP グループに追加されたために、ユーザーが Organization のメンバーになった場合、Organization に関連付けられている "すべて" のマップされた IdP グループからユーザーを削除すると、ユーザーは Organization から削除されます。

メンバーが Organization に追加された方法を確認するには、メンバー リストを種類でフィルター処理できます。 詳細については、「[Viewing people in your enterprise](/admin/user-management/managing-users-in-your-enterprise/viewing-people-in-your-enterprise#filtering-by-member-type-in-an-enterprise-with-managed-users)」 (Enterprise のメンバーを表示する) を参照してください。

## ID プロバイダーのサポート

{% data variables.product.prodname_emus %} は、以下の IdP{% ifversion oidc-for-emu %} と認証方法をサポートしています。

|                                  | SAML                                          | OIDC                                          |
|----------------------------------|-----------------------------------------------|-----------------------------------------------|
| Azure Active Directory           | {% octicon "check" aria-label="Check icon" %} | {% octicon "check" aria-label="Check icon" %} |
| Okta                             | {% octicon "check" aria-label="Check icon" %} |                                               |
{% else %}:

{% data reusables.enterprise-accounts.emu-supported-idps %}

{% endif %}

## {% data variables.enterprise.prodname_managed_users %}の機能と制限

{% data variables.enterprise.prodname_managed_users_caps %}で投稿できるのは、その Enterprise 内のプライベートおよび内部リポジトリと、そのユーザー アカウントによって所有されているプライベート リポジトリのみです。 {% data variables.enterprise.prodname_managed_users_caps %}には、より広範な {% data variables.product.prodname_dotcom %} コミュニティへの読み取り専用アクセス権が必要です。 ユーザーとコンテンツに対するこれらの可視性とアクセスの制限は、API 要求を含むすべての要求に適用されます。

* {% data variables.enterprise.prodname_managed_users_caps %}を Enterprise 外部の Organization またはリポジトリに招待することも、{% data variables.enterprise.prodname_managed_users %}を他の Enterprise に招待することもできません。 
* 外部のコラボレーターは、{% data variables.product.prodname_emus %} ではサポートされていません。
* {% data variables.enterprise.prodname_managed_users_caps %}では、Enterprise 外部のリポジトリでの Issue または pull request の作成、Enterprise 外部のリポジトリへのリアクションの追加、Enterprise 外部のリポジトリに対する Star、Watch または Fork 操作を行うことはできません。
* {% data variables.enterprise.prodname_managed_users_caps %}で {% data variables.product.prodname_dotcom_the_website %} のすべてのパブリック リポジトリを表示することはできますが、Enterprise 外部のリポジトリにコードをプッシュすることはできません。
* {% data variables.enterprise.prodname_managed_users_caps %}と作成されたコンテンツは、その Enterprise の他のメンバーにのみ表示されます。 
* {% data variables.enterprise.prodname_managed_users_caps %}では、Enterprise 外部のユーザーをフォローできません。
* {% data variables.enterprise.prodname_managed_users_caps %}では、gists を作成したり、gists に対してコメントしたりすることはできません。
* {% data variables.enterprise.prodname_managed_users_caps %}では、{% data variables.product.prodname_actions %} のスターター ワークフローを作成できません。
* {% data variables.enterprise.prodname_managed_users_caps %}では、そのユーザー アカウントに {% data variables.product.prodname_github_apps %} をインストールできません。
* 他の {% data variables.product.prodname_dotcom %} ユーザーは、{% data variables.enterprise.prodname_managed_user %}を表示またはメンションしたり、共同作業に招待したりすることはできません。
* ユーザー アカウントによって所有されるリポジトリを{% data variables.enterprise.prodname_managed_users %}で作成できるかどうかを選ぶことができます。 詳細については、「[Enterprise でリポジトリ管理ポリシーを適用する](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-repository-creation)」を参照してください。
* ユーザー アカウントによって所有されるリポジトリの作成を{% data variables.enterprise.prodname_managed_users %}に許可した場合、所有できるのはプライベート リポジトリのみであり、他のエンタープライズ メンバーを招待して共同作業を行うことができるのは、ユーザー所有のリポジトリのみです。
* {% data reusables.enterprise-accounts.emu-forks %}
* {% data variables.enterprise.prodname_emu_enterprise %} が所有する Organization では、Organization および Enterprise リポジトリの可視性の設定に応じて、プライベートおよび内部リポジトリのみを作成できます。 
* {% data variables.enterprise.prodname_managed_users_caps %}は、{% data variables.product.prodname_pages %} の使用が制限されます。 詳細については、「[{% data variables.product.prodname_pages %} について](/pages/getting-started-with-github-pages/about-github-pages#limitations-for-enterprise-managed-users)」を参照してください。

## {% data variables.product.prodname_emus %} の概要

お客様の開発者が {% data variables.product.prodname_ghe_cloud %} と {% data variables.product.prodname_emus %} を使用できるようにするには、お客様が一連の構成手順を実行する必要があります。

1. {% data variables.product.prodname_emus %} を使用するには、{% data variables.product.prodname_emus %} を有効にした別の種類の Enterprise アカウントが必要です。 {% data variables.product.prodname_emus %} を試用するか、既存の Enterprise から移行するためのオプションについて検討するには、[{% data variables.product.prodname_dotcom %} の営業チーム](https://enterprise.github.com/contact)にお問い合わせください。
  
  GitHub セールス チームの担当者が、新しい {% data variables.enterprise.prodname_emu_enterprise %} を作成するために協力します。 Enterprise を設定するユーザーのメール アドレスと、Enterprise メンバーのユーザー名のサフィックスとして使用されるショートコードを指定する必要があります。 {% data reusables.enterprise-accounts.emu-shortcode %} 詳細については、「[ユーザー名とプロファイル情報](#usernames-and-profile-information)」を参照してください。
  
2. Enterprise を作成すると、{% data variables.product.prodname_dotcom %} からメールが届き、Enterprise のセットアップ ユーザーのパスワードを選択するよう求められます。このユーザーは、Enterprise の最初の所有者になります。 パスワードを設定する際は、Incognito ウィンドウまたはプライベート ブラウズ ウィンドウを使用します。 セットアップ ユーザーは、エンタープライズのシングル サインオンと SCIM プロビジョニング統合を構成するためにのみ使用されます。 SSO が正常に有効になると、エンタープライズ アカウントを管理するためのアクセス権はなくなります。 セットアップ ユーザーのユーザー名は、Enterprise のショートコードにサフィックス `_admin` が付きます。 
  
  {% note %}
  
  {% data reusables.enterprise-accounts.emu-password-reset-session %}
  
  {% endnote %}
  
3. セットアップ ユーザーとしたログインしたら、2 要素認証を有効にすることをお勧めします。 詳細については、「[2 要素認証の構成](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication)」を参照してください。

1. まず、{% ifversion oidc-for-emu %}メンバーが認証する方法を構成します。 Azure Active Directory を ID プロバイダーとして使っている場合、OpenID Connect (OIDC) と Security Assertion Markup Language (SAML) のいずれかを選択できます。 条件付きアクセス ポリシー (CAP) のサポートを含む OIDC をお勧めします。 {% data variables.enterprise.prodname_managed_users %} が 1 つのテナントからプロビジョニングされた複数のエンタープライズが必要な場合は、最初のエンタープライズ以降、それぞれに SAML を使用する必要があります。 ID プロバイダーとして Okta を使っている場合、SAML を使ってメンバーを認証することができます。{% else %}エンタープライズ用に SAML SSO を構成します。 詳細については、「[エンタープライズ マネージド ユーザーの SAML シングル サインオンの構成](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-saml-single-sign-on-for-enterprise-managed-users)」を参照してください。{% endif %}
  
  {% ifversion oidc-for-emu %}
  
  まず、選択した認証方法のガイドを参照してください。
  
    - 「[エンタープライズ マネージド ユーザーの OIDC の構成](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/configuring-oidc-for-enterprise-managed-users)」
    - 「[エンタープライズ マネージド ユーザーの SAML シングル サインオンの構成](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-saml-single-sign-on-for-enterprise-managed-users)」
  
  {% endif %}
  
4. SSO を構成したら、SCIM のプロビジョニングを構成できます。 SCIM は、ID プロバイダーを使って {% data variables.product.prodname_dotcom_the_website %} に{% data variables.enterprise.prodname_managed_users %}を作成する方法です。 SCIM のプロビジョニングを構成する場合の詳細については、「[エンタープライズ マネージド ユーザーの SCIM プロビジョニングの構成](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-scim-provisioning-for-enterprise-managed-users)」を参照してください。
  
5. 認証とプロビジョニングが構成されたら、IdP グループを Team と同期することで、{% data variables.enterprise.prodname_managed_users %}の Organization メンバーシップの管理を開始できます。 詳細については、「[Managing team memberships with identity provider groups](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/managing-team-memberships-with-identity-provider-groups)」 (ID プロバイダー グループを使用して Team のメンバーシップを管理する) を参照してください。

Enterprise のメンバーが 1 つのワークステーションを使って、{% data variables.enterprise.prodname_managed_user %}と個人アカウントの両方から、{% data variables.location.product_location %} のリポジトリに投稿する必要がある場合は、サポートを提供できます。 詳しくは、「[{% data variables.product.prodname_dotcom_the_website %} で複数のユーザー アカウントを持つ開発者をサポートする](#supporting-developers-with-multiple-user-accounts-on-githubcom)」をご覧ください。

## {% data variables.enterprise.prodname_managed_user %}として認証を行う

{% data variables.enterprise.prodname_managed_users_caps %}は、ID プロバイダーを介して認証を行う必要があります。 {% data variables.enterprise.prodname_managed_user %}は、認証を行うために、IdP アプリケーション ポータルにアクセスするか、{% data variables.product.prodname_dotcom_the_website %} のログイン ページを使用できます。 

既定では、認証されていないユーザーが {% data variables.product.prodname_emus %} を使用する Enterprise にアクセスしようとすると、{% data variables.product.company_short %} によって 404 エラーが表示されます。 Enterprise 所有者は、必要に応じて、404 の代わりにシングル サインオン (SSO) への自動リダイレクトを有効にすることができます。 詳細については、「[エンタープライズでのセキュリティ設定のポリシーの適用](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-sso-for-unauthenticated-users)」を参照してください。

{% data reusables.enterprise-accounts.about-recovery-codes %} 詳細については、「[Managing recovery codes for your enterprise](/admin/identity-and-access-management/managing-recovery-codes-for-your-enterprise)」 (Enterprise の復旧コードの管理) を参照してください。

### {% data variables.product.prodname_dotcom_the_website %} を介して{% data variables.enterprise.prodname_managed_user %}として認証を行う

1. [https://github.com/login](https://github.com/login) に移動します。
1. [Username or email address] テキスト ボックスに、アンダースコアとショートコードを含むユーザー名を入力します。
  ![ログイン フォームを示すスクリーンショット](/assets/images/help/enterprises/emu-login-username.png) このフォームでユーザー名が認識されると、フォームは更新されます。 このフォームでパスワードを入力する必要はありません。
1. ID プロバイダーに進むには、 **[Sign in with your identity provider]** をクリックします。
  ![[Sign in with your identity provider] ボタンを示すスクリーンショット](/assets/images/help/enterprises/emu-login-submit.png)

## ユーザー名とプロファイル情報

{% data variables.product.product_name %} は、IdP から提供された識別子を正規化することにより、各自のユーザー名を自動的に作成します。 詳細については、「[外部認証におけるユーザー名の考慮事項](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication)」を参照してください。

IdP から提供された識別子の一意の部分が正規化中に削除されると、ユーザーをプロビジョニングするときに競合が発生する場合があります。 ユーザー名の競合が原因でユーザーをプロビジョニングできない場合は、IdP によって提供されるユーザー名を変更する必要があります。 詳しい情報については、「[ユーザー名の問題の解決](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication#resolving-username-problems)」を参照してください。

{% data reusables.enterprise-accounts.emu-only-emails-within-the-enterprise-can-conflict %} 

{% data variables.enterprise.prodname_managed_user %}のプロファイル名とメール アドレスも IdP によって提供されます。 {% data variables.enterprise.prodname_managed_users_caps %}では、{% data variables.product.prodname_dotcom %} 上のプロファイル名またはメール アドレスを変更できません。IdP が提供できるメール アドレスは 1 つのみです。

## {% data variables.location.product_location %} で複数のユーザー アカウントを持つ開発者をサポートする

Team のユーザーは、{% data variables.enterprise.prodname_emu_enterprise %} の外部にある {% data variables.location.product_location %} のリソースに投稿することが必要になる場合があります。 たとえば、会社のオープンソース プロジェクト用に別のエンタープライズを保持したい場合があります。 {% data variables.enterprise.prodname_managed_user %}ではパブリック リソースに投稿できないため、ユーザーはこの作業のために個別の個人アカウントを維持する必要があります。

1 つのワークステーションを使用して {% data variables.location.product_location %} で 2 つのユーザー アカウントから投稿する必要があるユーザーは、Git を設定してプロセスを簡略化できます。 詳しくは、「[複数のアカウントの管理](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-your-personal-account/managing-multiple-accounts)」をご覧ください。
