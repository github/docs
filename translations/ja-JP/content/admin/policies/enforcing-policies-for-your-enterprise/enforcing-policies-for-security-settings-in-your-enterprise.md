---
title: Enforcing policies for security settings in your enterprise
intro: 'You can enforce policies to manage security settings in your enterprise''s organizations, or allow policies to be set in each organization.'
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
---

## About policies for security settings in your enterprise

You can enforce policies to control the security settings for organizations owned by your enterprise on {% data variables.product.product_name %}. By default, organization owners can manage security settings. For more information, see "[Keeping your organization secure](/organizations/keeping-your-organization-secure)."

{% ifversion ghec or ghes %}

## Requiring two-factor authentication for organizations in your enterprise

Enterprise owners can require that organization members, billing managers, and outside collaborators in all organizations owned by an enterprise use two-factor authentication to secure their user accounts.

Before you can require 2FA for all organizations owned by your enterprise, you must enable two-factor authentication for your own account. 詳細は「[2 要素認証 (2FA) でアカウントを保護する](/articles/securing-your-account-with-two-factor-authentication-2fa/)」を参照してください。

{% warning %}

**警告:**

- When you require two-factor authentication for your enterprise, members, outside collaborators, and billing managers (including bot accounts) in all organizations owned by your enterprise who do not use 2FA will be removed from the organization and lose access to its repositories. Organization のプライベートリポジトリのフォークへのアクセスも失います。 You can reinstate their access privileges and settings if they enable two-factor authentication for their account within three months of their removal from your organization. 詳しい情報については、「[Organization の以前のメンバーを回復する](/articles/reinstating-a-former-member-of-your-organization)」を参照してください。
- Any organization owner, member, billing manager, or outside collaborator in any of the organizations owned by your enterprise who disables 2FA for their account after you've enabled required two-factor authentication will automatically be removed from the organization.
- If you're the sole owner of a enterprise that requires two-factor authentication, you won't be able to disable 2FA for your user account without disabling required two-factor authentication for the enterprise.

{% endwarning %}

2 要素認証の使用を義務化する前に、Organization のメンバー、外部コラボレーター、支払いマネージャーに通知をして、各自に自分のアカウントで 2 要素認証をセットアップしてもらってください。 Organization のオーナーは、メンバーと外部コラボレーターがすでに 2 要素認証を使用しているかどうかを、各 Organization の [People] ページで確認できます。 詳細は「[Organization 内のユーザが 2 要素認証を有効にしているか確認する](/articles/viewing-whether-users-in-your-organization-have-2fa-enabled)」を参照してください。

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
4. [Two-factor authentication] で、設定変更に関する情報を確認します。 {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
5. [Two-factor authentication] で、[**Require two-factor authentication for all organizations in your business**] を選択し、[**Save**] をクリックします。 ![2 要素認証を義務化するチェックボックス](/assets/images/help/business-accounts/require-2fa-checkbox.png)
6. If prompted, read the information about members and outside collaborators who will be removed from the organizations owned by your enterprise. To confirm the change, type your enterprise's name, then click **Remove members & require two-factor authentication**. ![2 要素の施行の確定ボックス](/assets/images/help/business-accounts/confirm-require-2fa.png)
7. Optionally, if any members or outside collaborators are removed from the organizations owned by your enterprise, we recommend sending them an invitation to reinstate their former privileges and access to your organization. 彼らが招待状を受け取ることができるようにするには、まず各ユーザーが 2 要素認証を有効にする必要があります。

{% endif %}

{% ifversion ghec or ghae %}

## Managing allowed IP addresses for organizations in your enterprise

{% ifversion ghae %}

You can restrict network traffic to your enterprise on {% data variables.product.product_name %}. 詳しい情報については、「[Enterprise へのネットワークトラフィックを制限する](/admin/configuration/configuring-your-enterprise/restricting-network-traffic-to-your-enterprise)」を参照してください。

{% elsif ghec %}

Enterprise owners can restrict access to private assets owned by organizations in an enterprise by configuring an allow list for specific IP addresses. {% data reusables.identity-and-permissions.ip-allow-lists-example-and-restrictions %}

{% data reusables.identity-and-permissions.ip-allow-lists-cidr-notation %}

{% data reusables.identity-and-permissions.ip-allow-lists-enable %} {% data reusables.identity-and-permissions.ip-allow-lists-enterprise %}

許可 IP アドレスを、Organization ごとに設定することもできます。 詳細は「[ Organization に対する許可 IP アドレスを管理する](/organizations/keeping-your-organization-secure/managing-allowed-ip-addresses-for-your-organization)」を参照してください。

### 許可 IP アドレスを追加する

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
{% data reusables.identity-and-permissions.ip-allow-lists-add-ip %}
{% data reusables.identity-and-permissions.ip-allow-lists-add-description %}
{% data reusables.identity-and-permissions.ip-allow-lists-add-entry %}

### {% data variables.product.prodname_github_apps %}によるアクセスの許可

{% data reusables.identity-and-permissions.ip-allow-lists-githubapps-enterprise %}

### 許可 IP アドレスを有効化する

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
3. [IP allow list] で、「**Enable IP allow list**」を選択します。 ![IP アドレスを許可するチェックボックス](/assets/images/help/security/enable-ip-allowlist-enterprise-checkbox.png)
4. [**Save**] をクリックします。

### 許可 IP アドレスを編集する

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
{% data reusables.identity-and-permissions.ip-allow-lists-edit-entry %}
{% data reusables.identity-and-permissions.ip-allow-lists-edit-ip %}
{% data reusables.identity-and-permissions.ip-allow-lists-edit-description %}
8. [**Update**] をクリックします。

### 許可 IP アドレスを削除する

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
{% data reusables.identity-and-permissions.ip-allow-lists-delete-entry %}
{% data reusables.identity-and-permissions.ip-allow-lists-confirm-deletion %}

### IP許可リストで {% data variables.product.prodname_actions %} を使用する

{% data reusables.actions.ip-allow-list-self-hosted-runners %}

{% endif %}

{% endif %}

## Managing SSH certificate authorities for your enterprise

You can use a SSH certificate authorities (CA) to allow members of any organization owned by your enterprise to access that organization's repositories using SSH certificates you provide. {% data reusables.organizations.can-require-ssh-cert %}詳しい情報については、「[SSS 認証局について](/organizations/managing-git-access-to-your-organizations-repositories/about-ssh-certificate-authorities)」を参照してください。

{% data reusables.organizations.add-extension-to-cert %}

### SSH 認証局を追加する

If you require SSH certificates for your enterprise, enterprise members should use a special URL for Git operations over SSH. 詳しい情報については、「[SSH 認証局について](/organizations/managing-git-access-to-your-organizations-repositories/about-ssh-certificate-authorities#about-ssh-urls-with-ssh-certificates)」を参照してください。

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
{% data reusables.organizations.new-ssh-ca %}
{% data reusables.organizations.require-ssh-cert %}

### SSH認証局を削除する

CAを削除すると、元に戻すことはできません。 同じCAを使用したくなった場合には、そのCAを再びアップロードする必要があります。

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
{% data reusables.organizations.delete-ssh-ca %}

{% ifversion ghec or ghae %}
## 参考リンク

- "[About identity and access management for your enterprise](/admin/authentication/managing-identity-and-access-for-your-enterprise/about-identity-and-access-management-for-your-enterprise)"{% ifversion ghec %}
- "[Accessing compliance reports for your enterprise](/admin/overview/accessing-compliance-reports-for-your-enterprise)"{% endif %}
{% endif %}
