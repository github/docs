---
title: GitHub Enterprise Cloud を使い始める
intro: '{% data variables.product.prodname_ghe_cloud %} の組織またはエンタープライズ アカウントの設定と管理を開始します。'
versions:
  fpt: '*'
  ghec: '*'
ms.openlocfilehash: 6af835175eb5412ca9fbf0e925175450f2a2a254
ms.sourcegitcommit: fdc4466e89467a7b13239e26c6042dc1428946b6
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/14/2022
ms.locfileid: '148163801'
---
このガイドでは、Organization または Enterprise のオーナーとして、{% data variables.product.prodname_ghe_cloud %} アカウントの設定、構成、管理を行う手順について説明します。

{% data reusables.enterprise.ghec-cta-button %}

## パート 1: アカウントの種類を選択する

{% data variables.product.prodname_dotcom %} には、次の 2 種類の Enterprise 製品が用意されています。

- **{% data variables.product.prodname_ghe_cloud %}**
- **{% data variables.product.prodname_ghe_server %}**

これらの製品の主な違いは、{% data variables.product.prodname_ghe_cloud %} は {% data variables.product.prodname_dotcom %} によってホストされるのに対して、{% data variables.product.prodname_ghe_server %} はセルフホステッドであるということです。

{% data reusables.enterprise.about-github-for-enterprises %}

{% data variables.product.prodname_ghe_cloud %} では、{% data variables.product.prodname_emus %} を使用することができます。 {% data reusables.enterprise-accounts.emu-short-summary %}

代わりに、メンバーに自分の個人アカウントを作成させて、管理させることを選択した場合、次の 2 種類のアカウントを {% data variables.product.prodname_ghe_cloud %} で使用することができます。

- 単一の Organization アカウント
- 複数の Organization を含む Enterprise アカウント

### 1. Organization アカウントと Enterprise アカウントの違いについて

Organization アカウントと Enterprise アカウントはどちらも、{% data variables.product.prodname_ghe_cloud %} で使用できます。 Organization は共有アカウントであり、ユーザー グループは一度に多数のプロジェクトでコラボレーションでき、オーナーおよび管理者は、データとプロジェクトに対するアクセスを管理できます。 Enterprise アカウントを使用すると、複数の Organization 間でコラボレーションでき、オーナーは、これらの Organization のポリシー、支払い、セキュリティを一元的に管理できます。 相違の詳細については、「[Organization と Enterprise アカウント](/organizations/collaborating-with-groups-in-organizations/about-organizations#organizations-and-enterprise-accounts)」を参照してください。

Enterprise アカウントを選択する場合、一部のポリシーは Organization レベルでのみ設定でき、その他のポリシーは、Enterprise 内のすべての Organization に適用できることに留意してください。

目的のアカウントの種類を選択したら、アカウントの設定に進むことができます。 このガイドの各セクションでは、お使いのアカウントの種類に基づいて、単一の Organization アカウントまたは Enterprise アカウントのセクションに進んでください。

## パート 2: アカウントを設定する
{% data variables.product.prodname_ghe_cloud %} を使い始めるには、Organization または Enterprise アカウントを作成し、支払い設定、プラン、使用状況を設定して表示する必要があります。
### {% data variables.product.prodname_ghe_cloud %} を使用して単一の Organization アカウントを設定する

#### 1. Organization について
Organization は、多くの人がいくつものプロジェクトにわたって同時にコラボレーションできる共有アカウントです。 {% data variables.product.prodname_ghe_cloud %} を使用すると、所有者および管理者は、高度なユーザー認証と管理、およびエスカレートされたサポートとセキュリティ オプションを使用して Organization を管理できます。 詳細については、「[Organization について](/organizations/collaborating-with-groups-in-organizations/about-organizations)」を参照してください。
#### 2. Organization アカウントの作成またはアップグレード

{% data variables.product.prodname_ghe_cloud %} で Organization アカウントを使用するには、最初に Organization を作成する必要があります。 プランの選択を求められたら、[Enterprise] を選択します。 詳細については、「[新しい Organization をゼロから作成](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch)」を参照してください。

または、既に Organization アカウントがあり、アップグレードしたい場合は、「[{% data variables.product.prodname_dotcom %} のプランをアップグレードする](/billing/managing-billing-for-your-github-account/upgrading-your-github-subscription#upgrading-your-organizations-subscription)」の手順に従います。
#### 3. 支払いの設定と管理

{% data variables.product.prodname_ghe_cloud %} で Organization アカウントを使用することを選択した場合、最初に [30 日間の試用版](/get-started/signing-up-for-github/setting-up-a-trial-of-github-enterprise-cloud) にアクセスできます。 試用期間が終了する前に {% data variables.product.prodname_enterprise %} または {% data variables.product.prodname_team %} を購入しなかった場合、Organization は {% data variables.product.prodname_free_user %} にダウングレードされ、有料製品にのみ含まれる高度なツールや機能にアクセスできなくなります。 詳細については、「[トライアルを終了する](/get-started/signing-up-for-github/setting-up-a-trial-of-github-enterprise-cloud#finishing-your-trial)」を参照してください。

Organization の [支払い設定] ページでは、支払い方法や請求期間などの設定の管理、ご使用のプランに関する情報の表示、ストレージと {% data variables.product.prodname_actions %} の利用時間のアップグレードを行うことができます。 支払い設定の管理の詳細については、「[{% data variables.product.prodname_dotcom %} の支払い設定を管理する](/billing/managing-your-github-billing-settings)」を参照してください。

*オーナー* または *支払いマネージャー* のロールを持つ Organization のメンバーのみが、Organization の支払い設定に対してアクセスしたり、変更を加えたりすることができます。 支払いマネージャーとは、Organization の支払い設定を管理し、Organization のプランで有料ライセンスを使用しないユーザーです。 支払いマネージャーを Organization に追加する方法の詳細については、「[Organization への支払いマネージャーの追加](/organizations/managing-peoples-access-to-your-organization-with-roles/adding-a-billing-manager-to-your-organization)」を参照してください。

### {% data variables.product.prodname_ghe_cloud %} を使用して Enterprise アカウントを設定する

#### 1. Enterprise アカウントについて

Enterprise アカウントを使用すると、複数の {% data variables.product.prodname_dotcom %} Organization のポリシーと設定 (メンバー アクセス、支払いと使用状況、セキュリティなど) を一元的に管理できます。 詳細については、「[Enterprise アカウントについて](/enterprise-cloud@latest/admin/overview/about-enterprise-accounts)」を参照してください。

#### 2. エンタープライズ アカウントの作成

 請求書で支払う {% data variables.product.prodname_ghe_cloud %} のお客様は、{% data variables.product.prodname_dotcom %} を通じて直接エンタープライズ アカウントを作成できます。 詳細については、「[Creating an enterprise account (エンタープライズ アカウントの作成)](/enterprise-cloud@latest/admin/overview/creating-an-enterprise-account)」を参照してください。 
 
 現在請求書で支払っていない {% data variables.product.prodname_ghe_cloud %} のお客様は、エンタープライズ アカウントを作成するよう [{% data variables.product.prodname_dotcom %} の営業チーム](https://enterprise.github.com/contact)に問い合わせることができます。

#### 3. エンタープライズ アカウントに組織を追加する

Enterprise アカウント内に、新しい Organization を作成して管理できます。 詳細については、「[Adding organizations to your enterprise](/enterprise-cloud@latest/admin/user-management/managing-organizations-in-your-enterprise/adding-organizations-to-your-enterprise)」 (Enterprise への Organization の追加) を参照してください。

既存の Organization を Enterprise アカウントに移行する場合は、{% data variables.product.prodname_dotcom %} セールス顧客担当にお問い合わせください。
#### 4. エンタープライズ アカウントのサブスクリプションと利用状況を表示する
Enterprise アカウントの現在のプラン、ライセンスの使用状況、請求書、支払い履歴、その他の支払い情報をいつでも表示できます。 Enterprise のオーナーと支払いマネージャーのどちらも、Enterprise アカウントの支払い設定にアクセスし、管理できます。 詳細については、「[Viewing the subscription and usage for your enterprise account](/enterprise-cloud@latest/billing/managing-billing-for-your-github-account/viewing-the-subscription-and-usage-for-your-enterprise-account)」 (Enterprise アカウントのプランと利用状況を表示する) を参照してください。

## パート 3: {% data variables.product.prodname_ghe_cloud %} を使用して Organization または Enterprise のメンバーと Team を管理する

### Organization のメンバーと Team の管理
Organization では、権限とメンバー ロールの設定、Team の作成と管理、リポジトリへのアクセス権の付与を行うことができます。 
#### 1. Organization のメンバーの管理
{% data reusables.getting-started.managing-org-members %}
#### 2. Organization の権限とロール
{% data reusables.getting-started.org-permissions-and-roles %}
#### 3. Team の概要と作成
{% data reusables.getting-started.about-and-creating-teams %}
#### 4. チーム設定の管理
{% data reusables.getting-started.managing-team-settings %}
#### 5. リポジトリ、プロジェクト ボード、アプリへのアクセス権をユーザーと Team に付与する
{% data reusables.getting-started.giving-access-to-repositories-projects-apps %}

### Enterprise アカウントのメンバーの管理
Enterprise のメンバーの管理は、Organization 内のメンバーまたは Team の管理とは別です。 Enterprise のオーナーまたは管理者は、Organization のオーナーになっていない限り、Organization レベルの設定にアクセスしたり、Enterprise 内の Organization のメンバーを管理したりできないことに注意してください。 詳細については、「[Organization のメンバーと Team の管理](#managing-members-and-teams-in-your-organization)」を参照してください。

Enterprise で {% data variables.product.prodname_emus %} を使用している場合、メンバーは ID プロバイダーを通じて完全に管理されます。 メンバーの追加、メンバーシップの変更、ロールの割り当てはすべて、IdP を使用して管理されます。 詳細については、「[{% data variables.product.prodname_emus %} について](/enterprise-cloud@latest/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users)」を参照してください。

Enterprise で {% data variables.product.prodname_emus %} を使用していない場合、次の手順に従います。

#### 1. Enterprise でロールを割り当てる
既定では、Enterprise 内の全員が Enterprise のメンバーです。 また、Enterprise の設定とデータに対して異なるレベルのアクセス権を持つ、Enterprise のオーナーや支払いマネージャーなどの管理ロールもあります。 詳細については、「[Enterprise におけるロール](/enterprise-cloud@latest/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise)」を参照してください。
#### 2. Enterprise を管理するようユーザーを招待する
Enterprise のオーナーまたは支払いマネージャーは、ユーザーに Enterprise の管理を要請したり、アクセスが不要になったユーザーを削除したりすることができます。 詳細については、「[Enterprise を管理するようユーザーを招待する](/enterprise-cloud@latest/admin/user-management/managing-users-in-your-enterprise/inviting-people-to-manage-your-enterprise)」を参照してください。

また、サポート ポータルでサポート チケットを管理する権限を Enterprise のメンバーに付与することもできます。 詳細については、「[Managing support entitlements for your enterprise (エンタープライズのサポート エンタイトルメントの管理)](/enterprise-cloud@latest/admin/user-management/managing-users-in-your-enterprise/managing-support-entitlements-for-your-enterprise)」を参照してください。
#### 3. Enterprise の人を表示する
Enterprise 所有のリソースまたはユーザー ライセンスの使用状況へのアクセスを監査するために、Enterprise 内のすべての Enterprise 管理者、Enterprise のメンバー、外部コラボレーターを表示できます。 メンバーが属している Organization と、外部コラボレーターがアクセスできる特定のリポジトリを確認できます。 詳細については、「[Viewing people in your enterprise](/admin/user-management/managing-users-in-your-enterprise/viewing-people-in-your-enterprise)」 (Enterprise のメンバーを表示する) を参照してください。

## パート 4: {% data variables.product.prodname_ghe_cloud %} を使用してセキュリティを管理する

* [単一の Organization のセキュリティ管理](#managing-security-for-a-single-organization)
* [{% data variables.enterprise.prodname_emu_enterprise %} のセキュリティ管理](#managing-security-for-an-enterprise-with-managed-users)
* [{% data variables.enterprise.prodname_managed_users %} を使用しないエンタープライズ アカウントのセキュリティ管理](#managing-security-for-an-enterprise-account-without-managed-users)

### 単一の Organization のセキュリティ管理
2 要素認証の要求、セキュリティ機能の構成、Organization の監査ログと統合の確認、SAML シングル サインオンと Team 同期の有効化を行うことにより、Organization の安全を維持することができます。
#### 1. 2 要素認証の要求
{% data reusables.getting-started.requiring-2fa %}
#### 2. Organization のセキュリティ機能の構成
{% data reusables.getting-started.configuring-security-features %}

#### 3. Organization の監査ログと統合の確認
{% data reusables.getting-started.reviewing-org-audit-log-and-integrations %}

#### 4. Organization の SAML シングル サインオンの有効化と強制
ID プロバイダー (IdP) を使用して、アプリケーションと、Organization のメンバーの ID を管理する場合、SAML シングル サインオン (SSO) を構成して、リポジトリ、issue、pull request などの Organization のリソースに対するアクセスを制御し、セキュリティで保護することができます。 Organization のメンバーが、SAML SSO を使用する Organization リソースにアクセスすると、{% data variables.product.prodname_dotcom %} によって IdP にリダイレクトされ、認証が行われます。 詳細については、「[SAML シングル サインオンを使うアイデンティティおよびアクセス管理について](/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on)」を参照してください。

Organization のオーナーは、SAML SSO の無効化、強制なしの有効化、または強制ありの有効化を選択できます。 詳細については、「[Organization 向けの SAML シングル サインオンを有効化してテストする](/organizations/managing-saml-single-sign-on-for-your-organization/enabling-and-testing-saml-single-sign-on-for-your-organization)」および「[Organization で SAML シングル サインオンを施行する](/organizations/managing-saml-single-sign-on-for-your-organization/enforcing-saml-single-sign-on-for-your-organization)」を参照してください。
#### 5. Organization の Team 同期を管理する
Organization のオーナーは、ID プロバイダー (IdP) と {% data variables.product.prodname_dotcom %} の間の Team 同期を有効にすることができます。これにより、Organization のオーナーおよび Team メンテナは、Organization 内の Team を IdP グループに接続できるようになります。 詳細については、「[Organization の Team 同期を管理する](/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization)」を参照してください。

### {% data variables.enterprise.prodname_emu_enterprise %} のセキュリティ管理

{% data variables.product.prodname_emus %} では、アクセスと ID は、ID プロバイダーを通じて一元的に管理されます。 IdP に対しては、2 要素認証やその他のログイン要件を有効にして強制する必要があります。 

#### 1. {% data variables.enterprise.prodname_emu_enterprise %} で SAML シングル サインオンとプロビジョニングを有効にする

{% data variables.enterprise.prodname_emu_enterprise %} では、すべてのメンバーが ID プロバイダーによってプロビジョニングされ、管理されます。 SAML SSO と SCIM プロビジョニングは、Enterprise の使用を開始する前に有効にしておく必要があります。 {% data variables.enterprise.prodname_emu_enterprise %} の SAML SSO とプロビジョニングの構成の詳細については、「[エンタープライズ マネージド ユーザーの SAML シングル サインオンの構成](/enterprise-cloud@latest/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/configuring-saml-single-sign-on-for-enterprise-managed-users)」を参照してください。

#### 2. ID プロバイダーを使用して {% data variables.enterprise.prodname_emu_enterprise %} 内のチームを管理する

Organization 内の Team を ID プロバイダーのセキュリティ グループに接続して、Team のメンバーシップや IdP を介したリポジトリへのアクセスを管理することができます。 詳細については、「[Managing team memberships with identity provider groups](/enterprise-cloud@latest/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/managing-team-memberships-with-identity-provider-groups)」 (ID プロバイダー グループを使用して Team のメンバーシップを管理する) を参照してください。

#### 3. {% data variables.enterprise.prodname_emu_enterprise %} 内の組織に対して許可されている IP アドレスを管理する

特定の IP アドレスの許可リストを構成して、{% data variables.enterprise.prodname_emu_enterprise %} 内の組織によって所有されている資産へのアクセスを制限できます。 詳細については、「[エンタープライズでのセキュリティ設定のポリシーの適用](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-allowed-ip-addresses-for-organizations-in-your-enterprise)」を参照してください。

#### 4. {% data variables.enterprise.prodname_emu_enterprise %} で Advanced Security 機能のポリシーを適用する
{% data reusables.getting-started.enterprise-advanced-security %}

### {% data variables.enterprise.prodname_managed_users %} を使用しないエンタープライズ アカウントのセキュリティ管理
Enterprise のセキュリティを管理するために、2 要素認証の要求、許可された IP アドレスの管理、Enterprise レベルでの SAML シングル サインオンと Team 同期の有効化を行うことができます。さらに、GitHub Advanced Security 機能にサインアップして適用することもできます。 

#### 1. Enterprise アカウント内の Organization で 2 要素認証を要求し、Organization に対して許可された IP アドレスを管理する
Enterprise のオーナーは、Enterprise アカウントが所有するすべての Organization で、Organization のメンバー、支払いマネージャー、外部コラボレーターに対して個人アカウントをセキュアに保つために 2 要素認証の使用を義務化できます。 それを行う前に、Enterprise 内の Organization にアクセスできるすべてのユーザーに通知することをお勧めします。 また、特定の IP アドレスの許可リストを構成して、Enterprise アカウント内の Organization によって所有されている資産へのアクセスを制限することもできます。 

2 要素認証と許可された IP アドレス リストの適用の詳細については、「[Enforcing policies for security settings in your enterprise](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise)」 (Enterprise でセキュリティ設定のポリシーを適用する) を参照してください。
#### 2. Enterprise アカウントで Organization の SAML シングル サインオンを有効にして強制する
IdP と SAM シングル サインオンを使用して、Enterprise のリソース、Organization のメンバーシップ、Team のメンバーシップへのアクセスを一元管理できます。 Enterprise のオーナーは、Enterprise アカウントによって所有されているすべての Organization に対して SAML SSO を有効にすることができます。 詳細については、[Enterprise の ID およびアクセス管理](/enterprise-cloud@latest/admin/authentication/managing-identity-and-access-for-your-enterprise/about-identity-and-access-management-for-your-enterprise)に関するページを参照してください。

#### 3. Team 同期の管理
ID プロバイダー (IdP) と {% data variables.product.prodname_dotcom %} の間の Team 同期を有効にして管理することができます。これにより、Enterprise アカウントによって所有される Organization では、IdP グループを介して Team のメンバーシップを管理できるようになります。 詳細については、「[Managing team synchronization for organizations in your enterprise account](/enterprise-cloud@latest/admin/authentication/managing-identity-and-access-for-your-enterprise/managing-team-synchronization-for-organizations-in-your-enterprise)」 (Enterprise アカウント内の Organization の Team 同期を管理する) を参照してください。

#### 4. Enterprise アカウントで Advanced Security 機能のポリシーを適用する
{% data reusables.getting-started.enterprise-advanced-security %}

## パート 5: Organization および Enterprise レベルのポリシーと設定を管理する

### 単一の Organization の設定を管理する
Organization を管理し、モデレートするために、Organization のポリシーの設定、およびリポジトリを変更するための権限の管理を行い、Organization レベルのコミュニティ健全性ファイルを使用することができます。
#### 1. Organization のポリシーの管理
{% data reusables.getting-started.managing-org-policies %}
#### 2. リポジトリの変更の管理
{% data reusables.getting-started.managing-repo-changes %}
#### 3. Organization レベルのコミュニティ健全性ファイルとモデレーション ツールの使用
{% data reusables.getting-started.using-org-community-files-and-moderation-tools %}

### Enterprise アカウントの設定を管理する
Enterprise を管理し、モデレートするために、Enterprise 内の Organization に関するポリシーの設定、監査ログの表示、Webhook の構成、メール通知の制限を行うことができます。
#### 1. Enterprise アカウント内の Organization のポリシーを管理する

Enterprise によって所有されているすべての Organization に対して多数のポリシーを適用するか、またはこれらのポリシーを各 Organization で設定できるようにするかを選択できます。 適用できるポリシーの種類としては、リポジトリ管理、プロジェクト ボード、Team ポリシーがあります。 詳細については、「[Enterprise のポリシーの設定](/enterprise-cloud@latest/admin/policies)」を参照してください。
#### 2. Enterprise の監査ログの表示、Webhook の構成、メール通知の制限
Enterprise 監査ログでは、Enterprise アカウントによって所有されているすべての Organization によるアクションを表示できます。 また、Enterprise アカウントによって所有されている Organization のイベントを受信するように Webhook を構成することもできます。 詳細については、「[Reviewing audit logs for your enterprise](/enterprise-cloud@latest/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise)」 (Enterprise の監査ログの表示) および[Enterprise の監視](/enterprise-cloud@latest/admin/monitoring-activity-in-your-enterprise)に関するページを参照してください。

また、Enterprise のメンバーが検証済みまたは承認済みドメインのメール アドレスのみを使用して通知を受信できるように、Enterprise アカウントのメール通知を制限することもできます。 詳細については、「[Restricting email notifications for your enterprise](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/restricting-email-notifications-for-your-enterprise)」 (Enterprise のメール通知を制限する) を参照してください。

## パート 6: {% data variables.product.prodname_dotcom %} での Enterprise または Organization の作業をカスタマイズおよび自動化する
Organization または Enterprise のメンバーは、{% data variables.product.prodname_marketplace %} のツール、{% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API、既存の {% data variables.product.product_name %} 機能を使用して、作業をカスタマイズしたり、自動化したりすることができます。

### 1. {% data variables.product.prodname_marketplace %} を使用する
{% data reusables.getting-started.marketplace %}
### 2. {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API の使用
{% data reusables.getting-started.api %}
### 3. {% data variables.product.prodname_actions %} のビルド
{% data reusables.getting-started.actions %}
### 4. {% data variables.product.prodname_registry %} の公開と管理 
{% data reusables.getting-started.packages %}
### 5. {% data variables.product.prodname_pages %} を使用する
{% data variables.product.prodname_pages %} は、HTML、CSS、JavaScript ファイルをリポジトリから直接取得し、Web サイトを公開する静的サイト ホスティング サービスです。 {% data variables.product.prodname_pages %} サイトの公開は、Organization レベルで管理できます。 詳細については、「[Organization の {% data variables.product.prodname_pages %} サイトの公開を管理する](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)」および「[{% data variables.product.prodname_pages %} について](/pages/getting-started-with-github-pages/about-github-pages)」を参照してください。
## パート 7: {% data variables.product.prodname_dotcom %} のコミュニティに参加する

Organization または Enterprise のメンバーは、GitHub の学習およびサポート リソースを使用して必要なヘルプを取得できます。 また、オープンソース コミュニティをサポートすることもできます。 

### 1. {% data variables.product.prodname_docs %} で {% data variables.product.prodname_ghe_cloud %} に関するドキュメントを読む
{% data variables.product.prodname_ghe_cloud %} で使用できる機能が掲載されたドキュメントを読むことができます。 詳細については、「[{% data variables.product.prodname_docs %} のバージョンについて](/get-started/learning-about-github/about-versions-of-github-docs)」を参照してください。

{% data reusables.enterprise.best-practices %}

### 2. {% data variables.product.prodname_learning %} による学習
Organization または Enterprise のメンバーは、[{% data variables.product.prodname_learning %}](https://skills.github.com/) を使用して、自分の GitHub リポジトリで、実際的なプロジェクトを楽しみながら完了することで新しいスキルを習得できます。 各コースは GitHub コミュニティによって作成された実践的なレッスンであり、親切なボットが講師を務めます。

詳細については、「[Git と {% data variables.product.prodname_dotcom %} の学習リソース](/github/getting-started-with-github/quickstart/git-and-github-learning-resources)」を参照してください。
### 3. オープンソース コミュニティのサポート
{% data reusables.getting-started.sponsors %}

### 4. {% data variables.contact.github_support %} への連絡
{% data reusables.getting-started.contact-support %}

{% data variables.product.prodname_ghe_cloud %} を使用すると、応答時間 8 時間を目標とするプライオリティ サポート リクエストを送信できます。 詳細については、「[{% data variables.product.prodname_ghe_cloud %} サポート](/github/working-with-github-support/github-enterprise-cloud-support)」を参照してください。
