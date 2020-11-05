---
title: Enterprise アカウントでセキュリティ設定を強制する
intro: Enterprise のオーナーは、Enterprise アカウントが所有するすべての Organization について、特定のセキュリティポリシーを施行できます。
product: '{% data reusables.gated-features.enterprise-accounts %}'
miniTocMaxHeadingLevel: 4
redirect_from:
  - /articles/enforcing-security-settings-for-organizations-in-your-business-account/
  - /articles/enforcing-security-settings-for-organizations-in-your-enterprise-account/
  - /articles/enforcing-security-settings-in-your-enterprise-account
  - /github/articles/managing-allowed-ip-addresses-for-organizations-in-your-enterprise-account
versions:
  free-pro-team: '*'
---

### Enterprise アカウントで Organization の 2 要素認証を必須にする

Enterprise のオーナーは、Enterprise アカウントが所有するすべての Organization で、Organization のメンバー、支払いマネージャー、外部コラボレーターに対して個人アカウントをセキュアに保つために 2 要素認証の使用を義務化できます。

自分の Enterprise アカウントが所有するすべての Organization で 2 要素認証を義務化する前に、自分のアカウントの 2 要素認証を有効化する必要があります。 詳細は「[2 要素認証 (2FA) でアカウントを保護する](/articles/securing-your-account-with-two-factor-authentication-2fa/)」を参照してください。

{% warning %}

**警告:**

- Enterprise アカウントで 2 要素認証を義務化すると、自分の Enterprise アカウントが所有するすべての Organization 内の、2 要素認証を使わないメンバー、外部コラボレーター、支払いマネージャー (ボットアカウントを含む) は Organization から削除され、そのリポジトリにアクセスできなくなります。 Organization のプライベートリポジトリのフォークへのアクセスも失います。 Organization から削除されてから 3 か月以内に、削除されたユーザが自分の個人アカウントで 2 要素認証を有効にすれば、そのユーザのアクセス権限および設定を復元できます。 詳しい情報については、「[Organization の以前のメンバーを回復する](/articles/reinstating-a-former-member-of-your-organization)」を参照してください。
- 義務付けられた 2 要素認証を有効にした後に、自分の Enterprise アカウントが所有するすべての Organization では、Organization のオーナー、メンバー、支払いマネージャー、または外部コラボレーターがそれぞれの個人アカウントに対して 2 要素認証を無効にすると、それらは Organization から自動的に削除されます。
- あなたが、2 要素認証を義務付けている Enterprise アカウントの唯一のオーナーである場合、Enterprise アカウントに義務付けられた 2 要素認証を無効にしなければ、個人アカウントの 2 要素認証を無効にすることはできません。

{% endwarning %}

2 要素認証の使用を義務化する前に、Organization のメンバー、外部コラボレーター、支払いマネージャーに通知をして、各自に自分のアカウントで 2 要素認証をセットアップしてもらってください。 Organization のオーナーは、メンバーと外部コラボレーターがすでに 2 要素認証を使用しているかどうかを、各 Organization の [People] ページで確認できます。 詳細は「[Organization 内のユーザが 2 要素認証を有効にしているか確認する](/articles/viewing-whether-users-in-your-organization-have-2fa-enabled)」を参照してください。

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
4. [Two-factor authentication] で、設定変更に関する情報を確認します。 {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
5. [Two-factor authentication] で、[**Require two-factor authentication for all organizations in your business**] を選択し、[**Save**] をクリックします。 ![2 要素認証を義務化するチェックボックス](/assets/images/help/business-accounts/require-2fa-checkbox.png)
6. 求められた場合には、自分の Enterprise アカウントが所有する Organization から削除するメンバーおよび外部コラボレーターに関する情報を読んでください。 変更を確定するには、自分の Enterprise アカウントの名前を入力し、[**Remove members & require two-factor authentication**] をクリックします。 ![2 要素の施行の確定ボックス](/assets/images/help/business-accounts/confirm-require-2fa.png)
7. または、自分の Enterprise アカウント が所有する Organization から削除されるメンバーまたは外部コラボレーターが存在する場合、彼らに招待状を送信して、元の権限と Organization へのアクセス権を復元できるようにすることをおすすめします。 彼らが招待状を受け取ることができるようにするには、まず各ユーザーが 2 要素認証を有効にする必要があります。

### Enterprise アカウントで Organization に対する許可 IP アドレスを管理する

Enterprise のオーナーは、特定の IP アドレスに対する許可リストを設定することで、Enterprise アカウントの Organization が所有するアセットへのアクセスを制限できます。 {% data reusables.identity-and-permissions.ip-allow-lists-example-and-restrictions %}

{% data reusables.identity-and-permissions.ip-allow-lists-cidr-notation %}

{% data reusables.identity-and-permissions.ip-allow-lists-enable %}

許可 IP アドレスを、Organization ごとに設定することもできます。 詳細は「[ Organization に対する許可 IP アドレスを管理する](/github/setting-up-and-managing-organizations-and-teams/managing-allowed-ip-addresses-for-your-organization)」を参照してください。

#### 許可 IP アドレスを追加する

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
{% data reusables.identity-and-permissions.ip-allow-lists-add-ip %}
{% data reusables.identity-and-permissions.ip-allow-lists-add-description %}
{% data reusables.identity-and-permissions.ip-allow-lists-add-entry %}

#### 許可 IP アドレスを有効化する

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
3. [IP allow list] で、「**Enable IP allow list**」を選択します。 ![IP アドレスを許可するチェックボックス](/assets/images/help/security/enable-ip-allowlist-enterprise-checkbox.png)
4. [**Save**] をクリックします。

#### 許可 IP アドレスを編集する

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
{% data reusables.identity-and-permissions.ip-allow-lists-edit-entry %}
{% data reusables.identity-and-permissions.ip-allow-lists-edit-ip %}
{% data reusables.identity-and-permissions.ip-allow-lists-edit-description %}
8. [**Update**] をクリックします。

#### 許可 IP アドレスを削除する

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
{% data reusables.identity-and-permissions.ip-allow-lists-delete-entry %}
{% data reusables.identity-and-permissions.ip-allow-lists-confirm-deletion %}

#### IP許可リストで {% data variables.product.prodname_actions %} を使用する

{% data reusables.github-actions.ip-allow-list-self-hosted-runners %}

### Enterprise アカウントで Organization 用に SAML シングルサインオンを有効にする

{% data reusables.saml.dotcom-saml-explanation %} 詳細は「[SAML シングルサインオンを使うアイデンティティおよびアクセス管理について](/github/setting-up-and-managing-organizations-and-teams/about-identity-and-access-management-with-saml-single-sign-on)」を参照してください。

Enterprise のオーナーは、Enterprise アカウントが所有するすべての Organization 全体で、SAML IdP によって SAML SSO と中央での認証を有効にすることができます。 Enterprise アカウントで SAML SSO を有効にした後は、SAML SSO は Enterprise アカウントによって所有されているすべての Organization に対してデフォルトで有効となります。 すべてのメンバーは、自分がメンバーである Organization にアクセスするために SAML SSO を使用して認証するよう求められ、企業のオーナーは Enterprise アカウントにアクセスする際に SAML SSO を使用して認証するよう求められます。

{% data reusables.saml.about-saml-access-enterprise-account %}詳細は「[Enterprise アカウントへのユーザの SAML アクセスの表示および管理](/github/setting-up-and-managing-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise-account)」を参照してください。

{% data reusables.saml.saml-supported-idps %}

{% data reusables.scim.enterprise-account-scim %} プライベートベータに参加していない場合、Enterprise アカウント に対して SCIM はサポートされません。 詳しい情報については、「[Enterprise アカウントで Organization のユーザプロビジョニングを管理する](#managing-user-provisioning-for-organizations-in-your-enterprise-account)」参照してください。

{% note %}

**Note:** Enabling authentication with SAML single sign-on for your enterprise account will override any existing organization-level SAML configurations.

{% endnote %}

Okta を使用して SAML を有効にする方法については、「[Okta を使用して Enterprise アカウントの SAML シングルサインオンおよび SCIM を設定する](/github/setting-up-and-managing-your-enterprise/configuring-saml-single-sign-on-and-scim-for-your-enterprise-account-using-okta)」を参照してください。

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
4. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
5. [SAML single sign-on] の下で [**Enable SAML authentication**] を選択します。 ![SAML SSO を有効化するためのチェックボックス](/assets/images/help/business-accounts/enable-saml-auth-enterprise.png)
6. **Sign on URL**フィールドに、使用する IdP のシングルサインオンのリクエストのための HTTPS エンドポイントを入力してください。 この値は Idp の設定で使用できます。 ![メンバーがサインインする際にリダイレクトされる URL のフィールド](/assets/images/help/saml/saml_sign_on_url_business.png)
7. または、[**Issuer**] フィールドに、SAML の発行者の名前を入力します。 これにより、送信メッセージの信ぴょう性が検証されます。 ![SAMl 発行者の名前のフィールド](/assets/images/help/saml/saml_issuer.png)
8. [**Public Certificate**] で、証明書を貼り付けて SAML の応答を認証します。 ![アイデンティティプロバイダからの公開の証明書のフィールド](/assets/images/help/saml/saml_public_certificate.png)
9. SAML 発行者からのリクエストの完全性を確認するには、{% octicon "pencil" aria-label="The edit icon" %} をクリックします。 その後、[Signature Method] および [Digest Method] のドロップダウンから、SAML 発行者が使用するハッシュアルゴリズムを選択します。 ![SAML 発行者が使用する署名方式とダイジェスト方式のハッシュアルゴリズム用のドロップダウン](/assets/images/help/saml/saml_hashing_method.png)
10. Enterprise で SAML SSO を有効化する前に、[**Test SAML configuration**] をクリックして、入力した情報が正しいか確認します。 ![強制化の前に SAML の構成をテストするためのボタン](/assets/images/help/saml/saml_test.png)
11. [**Save**] をクリックします。

### Enterprise アカウントで Organization のユーザプロビジョニングを管理す

Enterprise のオーナーは、Enterprise アカウントの Organization のメンバーシップを直接アイデンティティプロバイダ (IdP) から管理できます。

{% data reusables.enterprise-accounts.user-provisioning-release-stage %}

{% data reusables.saml.about-user-provisioning-enterprise-account %}

{% data reusables.scim.enterprise-account-scim %} オプションで、SAML プロビジョニングを有効にして、別々にデプロビジョニングすることもできます。

IdP で SCIM を構成すると、IdP でグループのメンバーシップに変更を加えるたびに IdP が {% data variables.product.prodname_dotcom %} に SCIM 呼び出しを行い、対応する組織のメンバーシップを更新します。 SAML プロビジョニングを有効にすると、Enterprise アカウントの SAML 設定で保護されているリソースに Enterprise のメンバーがアクセスするたびに、その SAML アサーションによってプロビジョニングがトリガーされすま。

SCIM 呼び出しまたは SAML アサーションのたびに、{% data variables.product.product_name %} はユーザが所属する IdP グループをチェックし、以下の操作を実行します。

- ユーザが、Enterprise アカウントによって所有されている Organization に対応する IdP グループのメンバーであり、現在その Organization のメンバーでない場合は、そのユーザーを Organization に追加する (SAML アサーション) か、Organization に参加するよう招待メールを送信 (SCIM 呼び出し) します。
- Enterprise アカウントによって所有される Organization にそのユーザが参加する既存の招待がある場合は、キャンセルします。

SCIM 呼び出しのたびに、また SAML デプロビジョニングを有効にしている場合には SAML アサーションのたびに、 {% data variables.product.product_name %} は以下の操作も実行します。

- ユーザが、Enterprise アカウントによって所有されている Organization に対応する IdP グループのメンバーではなく、現在その Organization のメンバーである場合は、そのユーザーを Organization から削除します。

デプロビジョニングによって、最後に残ったオーナーが Organization から削除されると、その Organization はオーナーのいない状態になります。 Enterprise オーナーは、オーナーのいない Organization の所有権を取得できます。 詳しい情報については、「[Enterprise アカウントでオーナーのいない Organization を管理する](/github/setting-up-and-managing-your-enterprise/managing-unowned-organizations-in-your-enterprise-account)」参照してください。

Okta を使用して Enterprise アカウントのユーザプロビジョニングを有効にするには、「[Okta を使用して Enterprise アカウントの SAML シングルサインオンおよび SCIM を設定する](/github/setting-up-and-managing-your-enterprise/configuring-saml-single-sign-on-and-scim-for-your-enterprise-account-using-okta)」を参照してください。

### Enterprise アカウントで Organization の Team 同期を管理する

Enterprise オーナーが IdP と {% data variables.product.product_name %} の間で Team の同期を有効化すると、Organization のオーナーとチームメンテナは Enterprise アカウントで所有されている Organization の Team を IdP グループに接続できるようになります。

{% data reusables.identity-and-permissions.about-team-sync %}

Azure AD で Enterprise アカウントとの Team 同期を使用できます。

{% data reusables.identity-and-permissions.sync-team-with-idp-group %}

{% data reusables.identity-and-permissions.team-sync-disable %}

Organization ごとの Team 同期の設定と管理も可能です。 詳細は「[Organization の Team 同期を管理する](/github/setting-up-and-managing-organizations-and-teams/managing-team-synchronization-for-your-organization)」を参照してください。

#### 必要な環境

Enterprise アカウントに対して Team の同期を有効化する前提条件は、以下のとおりです。
  - あなた、または Azure AD の管理者は Azure AD のグローバル管理者、または特権ロール管理者になっている必要があります。
  - サポート対象の IdP で、Enterprise アカウントの Organization に対して SAMLシングルサインオンを有効にする必要があります。 詳しい情報については、「[Enterprise アカウントで Organization 用に SAML シングルサインオンを有効にする](#enabling-saml-single-sign-on-for-organizations-in-your-enterprise-account)」参照してください。
  - SAML SSO とサポートされる IdP を使用して Enterprise アカウントに認証される必要があります。 詳しい情報については「[SAMLシングルサインオンで認証する](/articles/authenticating-with-saml-single-sign-on)」を参照してください。

#### Azure AD で Team の同期を管理する

{% data reusables.identity-and-permissions.team-sync-azure-permissions %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
{% data reusables.identity-and-permissions.team-sync-confirm-saml %}
{% data reusables.identity-and-permissions.enable-team-sync-azure %}
{% data reusables.identity-and-permissions.team-sync-confirm %}
7. Enterprise アカウントに接続するアイデンティティプロバイダのテナント情報を確認してから、[**Approve**] をクリックします。 ![特定の IdP テナントに対して、Team の同期を有効化するペンディングリクエストと、リクエストを承認またはキャンセルするオプション](/assets/images/help/teams/approve-team-synchronization.png)
8. Team 同期を無効にするには、 [**Disable team synchronization**] をクリックします。 ![Team の同期を無効化する](/assets/images/help/teams/disable-team-synchronization.png)

### Enterprise アカウントの SSH 認証局を管理する

Enterprise オーナーは、Enterprise アカウントの SSH 認証局 (CA) を追加および削除できます。

Enterprise アカウントに SSH CA を追加することにより、その Enterprise アカウントが所有する Organization のメンバー誰でも、その Enterprise アカウントが提供する SSH 認証を使用して Organization のリポジトリにアクセスできるようになります。 {% data reusables.organizations.can-require-ssh-cert %}詳細については、「[SSH認証局について](/articles/about-ssh-certificate-authorities)」を参照してください。

#### SSH 認証局を追加する

{% data reusables.organizations.add-extension-to-cert %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
{% data reusables.organizations.new-ssh-ca %}
{% data reusables.organizations.require-ssh-cert %}

#### SSH認証局を削除する

CAを削除すると、元に戻すことはできません。 同じCAを使用したくなった場合には、そのCAを再びアップロードする必要があります。

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
{% data reusables.organizations.delete-ssh-ca %}
