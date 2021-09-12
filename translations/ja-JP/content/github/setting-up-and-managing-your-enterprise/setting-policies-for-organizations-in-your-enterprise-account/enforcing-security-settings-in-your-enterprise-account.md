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
  - /github/setting-up-and-managing-your-enterprise-account/enforcing-security-settings-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/enforcing-security-settings-in-your-enterprise-account
versions:
  free-pro-team: '*'
topics:
  - Enterprise
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

{% data reusables.identity-and-permissions.ip-allow-lists-enable %} {% data reusables.identity-and-permissions.ip-allow-lists-enterprise %}

許可 IP アドレスを、Organization ごとに設定することもできます。 詳細は「[ Organization に対する許可 IP アドレスを管理する](/organizations/keeping-your-organization-secure/managing-allowed-ip-addresses-for-your-organization)」を参照してください。

#### 許可 IP アドレスを追加する

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
{% data reusables.identity-and-permissions.ip-allow-lists-add-ip %}
{% data reusables.identity-and-permissions.ip-allow-lists-add-description %}
{% data reusables.identity-and-permissions.ip-allow-lists-add-entry %}

#### Allowing access by {% data variables.product.prodname_github_apps %}

{% data reusables.identity-and-permissions.ip-allow-lists-githubapps-enterprise %}

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

### 参考リンク

- 「[Enterprise アカウントのアイデンティおよびアクセス管理を設定する](/github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account)」
