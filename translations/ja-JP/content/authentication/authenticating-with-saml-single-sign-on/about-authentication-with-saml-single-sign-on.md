---
title: SAMLのシングルサインオンでの認証について
intro: 'You can access {% ifversion ghae %}{% data variables.product.product_location %}{% elsif ghec %}an organization that uses SAML single sign-on (SSO){% endif %} by authenticating {% ifversion ghae %}with SAML single sign-on (SSO) {% endif %}through an identity provider (IdP).{% ifversion ghec %} After you authenticate with the IdP successfully from {% data variables.product.product_name %}, you must authorize any personal access token, SSH key, or {% data variables.product.prodname_oauth_app %} you would like to access the organization''s resources.{% endif %}'
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

If you're a member of an {% data variables.product.prodname_emu_enterprise %}, you will use a new account that is provisioned for you. {% data reusables.enterprise-accounts.emu-more-info-account %}


SAML SSO を使用する Organization のリソースにアクセスすると、{% data variables.product.prodname_dotcom %}は認証のために Organization の SAML IdP にリダイレクトします。 IdP でアカウントが正常に認証されると、IdP は{% data variables.product.prodname_dotcom %}に戻り、Organization のリソースにアクセスできます。

{% data reusables.saml.outside-collaborators-exemption %}

最近ブラウザで Organization の SAML IdP が認証された場合、SAML SSO を使う {% data variables.product.prodname_dotcom %} の Organization へのアクセスは自動的に認可されます。 最近ブラウザで Organization の SAML IdP が認証されていない場合は、Organization にアクセスする前に SAML IdP で認証を受ける必要があります。

{% data reusables.saml.you-must-periodically-authenticate %}

SAML SSL を要求する Organization 内の保護されたコンテンツにアクセスするために API またはコマンドライン上の Git を利用するには、認可された個人のアクセストークンを HTTPS 経由で使うか、認可された SSH キーを使う必要があります。

個人のアクセストークンあるいは SSH キーを持っていない場合、コマンドライン用の個人のアクセストークンを作成するか、新しい SSH キーを生成できます。 詳しい情報については、「[個人アクセストークンを作成する](/github/authenticating-to-github/creating-a-personal-access-token)」または「[新しい SSH キーを生成して ssh-agent へ追加する](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)」を参照してください。

新しい、または既存の個人のアクセストークンか SSH キーを、SAML SSO を使用または要求する Organization で利用するには、SAML SSO Organization で使うためにそのトークンや SSH キーを認可する必要があります。 詳しい情報については、[SAMLシングルサインオンで利用するために個人アクセストークンを認可する](/articles/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)」または「[SAML シングルサインオンで使用するために SSH キーを認可する](/articles/authorizing-an-ssh-key-for-use-with-saml-single-sign-on)」を参照してください。

## About {% data variables.product.prodname_oauth_apps %}, {% data variables.product.prodname_github_apps %}, and SAML SSO

You must have an active SAML session each time you authorize an {% data variables.product.prodname_oauth_app %} or {% data variables.product.prodname_github_app %} to access an organization that uses or enforces SAML SSO. You can create an active SAML session by navigating to `https://github.com/orgs/ORGANIZATION-NAME/sso` in your browser.

After an enterprise or organization owner enables or enforces SAML SSO for an organization, and after you authenticate via SAML for the first time, you must reauthorize any {% data variables.product.prodname_oauth_apps %} or {% data variables.product.prodname_github_apps %} that you previously authorized to access the organization.

To see the {% data variables.product.prodname_oauth_apps %} you've authorized, visit your [{% data variables.product.prodname_oauth_apps %} page](https://github.com/settings/applications). To see the {% data variables.product.prodname_github_apps %} you've authorized, visit your [{% data variables.product.prodname_github_apps %} page](https://github.com/settings/apps/authorizations).

{% endif %}

## 参考リンク

{% ifversion ghec %}- "[About identity and access management with SAML single sign-on](/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on)"{% endif %}
{% ifversion ghae %}- "[About identity and access management for your enterprise](/admin/authentication/about-identity-and-access-management-for-your-enterprise)"{% endif %}
