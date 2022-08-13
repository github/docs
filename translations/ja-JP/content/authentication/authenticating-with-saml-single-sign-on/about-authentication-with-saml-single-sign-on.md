---
title: SAMLのシングルサインオンでの認証について
intro: 'You can access {% ifversion ghae %}{% data variables.product.product_location %}{% elsif ghec %}an organization that uses SAML single sign-on (SSO){% endif %} by authenticating {% ifversion ghae %}with SAML single sign-on (SSO) {% endif %}through an identity provider (IdP).'
redirect_from:
  - /articles/about-authentication-with-saml-single-sign-on
  - /github/authenticating-to-github/about-authentication-with-saml-single-sign-on
  - /github/authenticating-to-github/authenticating-with-saml-single-sign-on/about-authentication-with-saml-single-sign-on
versions:
  ghae: '*'
  ghec: '*'
topics:
  - SSO
shortTitle: SAMLシングルサインオン
---

## SAML SSO での認証について

{% ifversion ghae %}

SAML SSO を使用すると、Enterprise のオーナーは、SAML IdP から {% data variables.product.product_name %} へのアクセスを一元的に制御して保護できます。 ブラウザで {% data variables.product.product_location %} にアクセスすると、{% data variables.product.product_name %} が認証のために IdP にリダイレクトします。 IdP のアカウントで正常に認証されると、IdP によって {% data variables.product.product_location %} にリダイレクトされます。 {% data variables.product.product_name %} は、IdP からのレスポンスを検証してから、アクセスを許可します。

{% data reusables.saml.you-must-periodically-authenticate %}

{% data variables.product.product_name %} にアクセスできない場合は、担当の Enterprise のオーナーまたは管理者に {% data variables.product.product_name %} についてお問い合わせください。 {% data variables.product.product_name %} のページの下部にある [**Support**] をクリックすると、Enterprise の連絡先情報を確認することができます。 {% data variables.product.company_short %} および {% data variables.contact.github_support %} は IdP にアクセスできず、認証の問題をトラブルシューティングできません。

{% endif %}

{% ifversion fpt or ghec %}

{% data reusables.saml.dotcom-saml-explanation %} Organization owners can invite your personal account on {% data variables.product.prodname_dotcom %} to join their organization that uses SAML SSO, which allows you to contribute to the organization and retain your existing identity and contributions on {% data variables.product.prodname_dotcom %}.

If you're a member of an {% data variables.product.prodname_emu_enterprise %}, you will instead use a new account that is provisioned for you and controlled by your enterprise. {% data reusables.enterprise-accounts.emu-more-info-account %}

When you access private resources within an organization that uses SAML SSO, {% data variables.product.prodname_dotcom %} will redirect you to the organization's SAML IdP to authenticate. IdP でアカウントが正常に認証されると、IdP は{% data variables.product.prodname_dotcom %}に戻り、Organization のリソースにアクセスできます。

{% data reusables.saml.outside-collaborators-exemption %}

最近ブラウザで Organization の SAML IdP が認証された場合、SAML SSO を使う {% data variables.product.prodname_dotcom %} の Organization へのアクセスは自動的に認可されます。 最近ブラウザで Organization の SAML IdP が認証されていない場合は、Organization にアクセスする前に SAML IdP で認証を受ける必要があります。

{% data reusables.saml.you-must-periodically-authenticate %}

## Linked SAML identities

When you authenticate with your IdP account and return to {% data variables.product.prodname_dotcom %}, {% data variables.product.prodname_dotcom %} will record a link in the organization or enterprise between your {% data variables.product.prodname_dotcom %} personal account and the SAML identity you signed into.  This linked identity is used to validate your membership in that organization, and depending on your organization or enterprise setup, is also used to determine which organizations and teams you're a member of as well. Each {% data variables.product.prodname_dotcom %} account can be linked to exactly one SAML identity per organization. Likewise, each SAML identity can be linked to exactly one {% data variables.product.prodname_dotcom %} account in an organization.

If you sign in with a SAML identity that is already linked to another {% data variables.product.prodname_dotcom %} account, you will receive an error message indicating that you cannot sign in with that SAML identity. This situation can occur if you are attempting to use a new {% data variables.product.prodname_dotcom %} account to work inside of your organization. If you didn't intend to use that SAML identity with that {% data variables.product.prodname_dotcom %} account, then you'll need to sign out of that SAML identity and then repeat the SAML login. If you do want to use that SAML identity with your {% data variables.product.prodname_dotcom %} account, you'll need to ask your admin to unlink your SAML identity from your old account, so that you can link it to your new account.  Depending on the setup of your organization or enterprise, your admin may also need to reassign your identity within your SAML provider.  詳細は、「[Organizationへのメンバーの SAML アクセスの表示と管理](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization#viewing-and-revoking-a-linked-identity)」を参照してください。

If the SAML identity you sign in with does not match the SAML identity that is currently linked to your {% data variables.product.prodname_dotcom %} account, you'll receive a warning that you are about to relink your account. Because your SAML identity is used to govern access and team membership, continuing with the new SAML identity can cause you to lose access to teams and organizations inside of {% data variables.product.prodname_dotcom %}. Only continue if you know that you're supposed to use that new SAML identity for authentication in the future.

## Authorizing PATs and SSH keys with SAML SSO

SAML SSL を要求する Organization 内の保護されたコンテンツにアクセスするために API またはコマンドライン上の Git を利用するには、認可された個人のアクセストークンを HTTPS 経由で使うか、認可された SSH キーを使う必要があります。

個人のアクセストークンあるいは SSH キーを持っていない場合、コマンドライン用の個人のアクセストークンを作成するか、新しい SSH キーを生成できます。 詳しい情報については、「[個人アクセストークンを作成する](/github/authenticating-to-github/creating-a-personal-access-token)」または「[新しい SSH キーを生成して ssh-agent へ追加する](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)」を参照してください。

新しい、または既存の個人のアクセストークンか SSH キーを、SAML SSO を使用または要求する Organization で利用するには、SAML SSO Organization で使うためにそのトークンや SSH キーを認可する必要があります。 詳しい情報については、[SAMLシングルサインオンで利用するために個人アクセストークンを認可する](/articles/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)」または「[SAML シングルサインオンで使用するために SSH キーを認可する](/articles/authorizing-an-ssh-key-for-use-with-saml-single-sign-on)」を参照してください。

## About {% data variables.product.prodname_oauth_apps %}, {% data variables.product.prodname_github_apps %}, and SAML SSO

You must have an active SAML session each time you authorize an {% data variables.product.prodname_oauth_app %} or {% data variables.product.prodname_github_app %} to access an organization that uses or enforces SAML SSO. You can create an active SAML session by navigating to `https://github.com/orgs/ORGANIZATION-NAME/sso` in your browser.

After an enterprise or organization owner enables or enforces SAML SSO for an organization, and after you authenticate via SAML for the first time, you must reauthorize any {% data variables.product.prodname_oauth_apps %} or {% data variables.product.prodname_github_apps %} that you previously authorized to access the organization.

To see the {% data variables.product.prodname_oauth_apps %} you've authorized, visit your [{% data variables.product.prodname_oauth_apps %} page](https://github.com/settings/applications). To see the {% data variables.product.prodname_github_apps %} you've authorized, visit your [{% data variables.product.prodname_github_apps %} page](https://github.com/settings/apps/authorizations).

{% endif %}

## 参考リンク

{% ifversion ghec %}- 「[SAML シングルサインオンを使うアイデンティティおよびアクセス管理について](/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on)」{% endif %}
{% ifversion ghae %}- 「[SAML シングルサインオンを使うアイデンティティおよびアクセス管理について](/admin/authentication/about-identity-and-access-management-for-your-enterprise)」{% endif %}
