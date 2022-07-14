---
title: SAML シングルサインオンを使うアイデンティティおよびアクセス管理について
intro: 'ユーザのアイデンティティとアプリケーションをアイデンティティプロバイダ (IdP) で集中管理する場合、Security Assertion Markup Language (SAML) シングルサインオン (SSO) を設定して {% data variables.product.prodname_dotcom %} での Organization のリソースを保護することができます。'
redirect_from:
  - /articles/about-identity-and-access-management-with-saml-single-sign-on
  - /github/setting-up-and-managing-organizations-and-teams/about-identity-and-access-management-with-saml-single-sign-on
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: SAML SSOを使うIAM
---

{% data reusables.enterprise-accounts.emu-saml-note %}

## SAML SSO について

{% data reusables.saml.dotcom-saml-explanation %}

{% data reusables.saml.ghec-only %}

{% data reusables.saml.saml-accounts %}

Organization のオーナーは、個々の Organization に SAML SSO を適用できます。または、Enterprise のオーナーは、Enterprise アカウント内のすべての Organization に SAML SSO を適用できます。 詳しい情報については、「[Enterprise 向けのSAML シングルサインオンを設定する](/enterprise-cloud@latest/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise)」を参照してください。

{% data reusables.saml.outside-collaborators-exemption %}

Organization で SAML SSO を有効化する前に、IdP を Organization に接続する必要があります。 詳細は「[アイデンティティプロバイダを Organization に接続する](/organizations/managing-saml-single-sign-on-for-your-organization/connecting-your-identity-provider-to-your-organization)」を参照してください。

1 つの Organization に対して、SAML SSO は無効化、強制なしの有効化、強制ありの有効化ができます。 Organization に対して SAML SSO を有効にし、Organization のメンバーが IdP での認証に成功した後、SAML SSO 設定を強制できます。 {% data variables.product.prodname_dotcom %} Organization に対して SAML SSO を強制する方法については、「[Organization で SAML シングルサインオンを施行する](/articles/enforcing-saml-single-sign-on-for-your-organization)」を参照してください。

認証を受けて Organization のリソースにアクセスするために、メンバーは定期的に IdP の認証を受ける必要があります。 このログイン間隔は利用しているアイデンティティプロバイダ (IdP) によって指定されますが、一般的には 24 時間です。 このように定期的にログインしなければならないことから、アクセスの長さには制限があり、ユーザがアクセスを続行するには再認証が必要になります。

コマンドラインで API と Git を使用して、Organization の保護されているリソースにアクセスするには、メンバーが個人アクセストークンまたは SSH キーで認可および認証を受ける必要があります。 詳しい情報については、「[SAMLシングルサインオンで利用するために個人アクセストークンを認可する](/github/authenticating-to-github/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)」と、「[SAML シングルサインオンで使用するために SSH キーを認可する](/github/authenticating-to-github/authorizing-an-ssh-key-for-use-with-saml-single-sign-on)」を参照してください。

Organizationへのアクセスにメンバーが初めてSAML SSOを使うとき、{% data variables.product.prodname_dotcom %}は自動的にOrganizaton、{% data variables.product.product_location %}上のメンバーアカウント、IdP上のメンバーアカウントをリンクさせるレコードを作成します。 Organization または Enterprise アカウントのメンバーについて、リンクされた SAML アイデンティティ、アクティブセッション、認可されたクレデンシャルの表示と取り消しが可能です。 詳細は、「[Organization へのメンバーの SAML アクセスの表示と管理](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization)」と「[Enterprise アカウントへのユーザの SAML アクセスの表示および管理](/enterprise-cloud@latest/admin/user-management/managing-users-in-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise)」を参照してください。

新しいリポジトリを作成するときにメンバーが SAML SSO セッションでサインインする場合、そのリポジトリのデフォルトの可視性はプライベートになります。 それ以外の場合、デフォルトの可視性はパブリックです。 リポジトリの可視性に関する詳しい情報については「[リポジトリについて](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility)」を参照してください。

{% data variables.product.prodname_oauth_app %}を認可するために、Organization メンバーにはアクティブな SAML セッションが必要です。 {% data variables.contact.contact_support %} に連絡すれば、この要件をオプトアウトできます。 ただし、この要件をオプトアウトすることを {% data variables.product.product_name %} はお勧めしません。Organization でアカウント乗っ取りやデータ漏えいのリスクが高くなるからです。

{% data reusables.saml.saml-single-logout-not-supported %}

## サポートされているSAMLサービス

{% data reusables.saml.saml-supported-idps %}

一部の IdPは、SCIM を介した {% data variables.product.prodname_dotcom %} Organization へのプロビジョニングアクセスをサポートしています。 詳しい情報については、「[OrganizationのSCIMについて](/organizations/managing-saml-single-sign-on-for-your-organization/about-scim-for-organizations)」を参照してください。

{% data reusables.scim.enterprise-account-scim %}

## SAML SSO で Organization にメンバーを追加する

SAML SSO を有効化後、Organization に新しいメンバーを追加する方法はいくつかあります。 Organization のオーナーは、{% data variables.product.product_name %} で手作業または API を使って、新しいメンバーを招待できます。 詳細は {} の「[Organization に参加するようユーザを招待する](/articles/inviting-users-to-join-your-organization)」および「[メンバー](/rest/reference/orgs#add-or-update-organization-membership)」を参照してください。

新しいユーザを、Organization のオーナーから招待せずにプロビジョニングするには、`https://github.com/orgs/ORGANIZATION/sso/sign_up` の URL の _ORGANIZATION_ をあなたの Organization 名に置き換えてアクセスします。 たとえば、あなたの IdP にアクセスできる人なら誰でも、IdP のダッシュボードにあるリンクをクリックして、あなたの {% data variables.product.prodname_dotcom %} Organization に参加できるよう、IdP を設定できます。

IdP が SCIM をサポートしている場合、{% data variables.product.prodname_dotcom %} は、IdP でアクセス権限が付与されたとき Organization に参加するよう自動的にメンバーを招待できます。 SAML IdP での メンバーの {% data variables.product.prodname_dotcom %} Organization へのアクセス権限を削除すると、そのメンバーは {% data variables.product.prodname_dotcom %} Organization から自動的に削除されます。 詳しい情報については、「[OrganizationのSCIMについて](/organizations/managing-saml-single-sign-on-for-your-organization/about-scim-for-organizations)」を参照してください。

{% data reusables.organizations.team-synchronization %}

{% data reusables.saml.saml-single-logout-not-supported %}

## 参考リンク

- 「[SAML設定のリファレンス](/admin/identity-and-access-management/using-saml-for-enterprise-iam/saml-configuration-reference)」
- [2要素認証とSAMLシングルサインオンについて](/articles/about-two-factor-authentication-and-saml-single-sign-on)
- [SAML シングルサインオンでの認証について](/github/authenticating-to-github/about-authentication-with-saml-single-sign-on)
