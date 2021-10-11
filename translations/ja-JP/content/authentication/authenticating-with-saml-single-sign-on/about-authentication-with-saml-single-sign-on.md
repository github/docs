---
title: SAMLのシングルサインオンでの認証について
intro: 'You can access {% ifversion ghae %}{% data variables.product.product_location %}{% elsif fpt %}an organization that uses SAML single sign-on (SSO){% endif %} by authenticating {% ifversion ghae %}with SAML single sign-on (SSO) {% endif %}through an identity provider (IdP).{% ifversion fpt %} After you authenticate with the IdP successfully from {% data variables.product.product_name %}, you must authorize any personal access token, SSH key, or {% data variables.product.prodname_oauth_app %} you would like to access the organization''s resources.{% endif %}'
product: '{% data reusables.gated-features.saml-sso %}'
redirect_from:
  - /articles/about-authentication-with-saml-single-sign-on
  - /github/authenticating-to-github/about-authentication-with-saml-single-sign-on
  - /github/authenticating-to-github/authenticating-with-saml-single-sign-on/about-authentication-with-saml-single-sign-on
versions:
  fpt: '*'
  ghae: '*'
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

{% ifversion fpt %}

{% data reusables.saml.dotcom-saml-explanation %}Organization のオーナーは、{% data variables.product.prodname_dotcom %}でユーザアカウントを SAML SSO を使用する Organization に招待できます。これにより、Organization に貢献することができ、{% data variables.product.prodname_dotcom %}の既存の ID とコントリビューションを保持できます。

If you're a member of an {% data variables.product.prodname_emu_enterprise %}, you will use a new account that is provisioned for you. {% data reusables.enterprise-accounts.emu-more-info-account %}


SAML SSO を使用する Organization のリソースにアクセスすると、{% data variables.product.prodname_dotcom %}は認証のために Organization の SAML IdP にリダイレクトします。 IdP でアカウントが正常に認証されると、IdP は{% data variables.product.prodname_dotcom %}に戻り、Organization のリソースにアクセスできます。

{% data reusables.saml.outside-collaborators-exemption %}

最近ブラウザで Organization の SAML IdP が認証された場合、SAML SSO を使う {% data variables.product.prodname_dotcom %} の Organization へのアクセスは自動的に認可されます。 最近ブラウザで Organization の SAML IdP が認証されていない場合は、Organization にアクセスする前に SAML IdP で認証を受ける必要があります。

{% data reusables.saml.you-must-periodically-authenticate %}

SAML SSL を要求する Organization 内の保護されたコンテンツにアクセスするために API またはコマンドライン上の Git を利用するには、認可された個人のアクセストークンを HTTPS 経由で使うか、認可された SSH キーを使う必要があります。

個人のアクセストークンあるいは SSH キーを持っていない場合、コマンドライン用の個人のアクセストークンを作成するか、新しい SSH キーを生成できます。 詳しい情報については、「[個人アクセストークンを作成する](/github/authenticating-to-github/creating-a-personal-access-token)」または「[新しい SSH キーを生成して ssh-agent へ追加する](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)」を参照してください。

新しい、または既存の個人のアクセストークンか SSH キーを、SAML SSO を使用または要求する Organization で利用するには、SAML SSO Organization で使うためにそのトークンや SSH キーを認可する必要があります。 詳しい情報については、[SAMLシングルサインオンで利用するために個人アクセストークンを認可する](/articles/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)」または「[SAML シングルサインオンで使用するために SSH キーを認可する](/articles/authorizing-an-ssh-key-for-use-with-saml-single-sign-on)」を参照してください。

## {% data variables.product.prodname_oauth_apps %} と SAML SSO について

SAML SSO を使用または要求する Organization にアクセスする {% data variables.product.prodname_oauth_app %} を認証するたびにアクティブなSAML セッションが必要です。

Enterprise または Organization のオーナーが Organization の SAML SSO を有効化または要求したら、Organization にアクセスするには以前に認可した {% data variables.product.prodname_oauth_app %} を再度認可する必要があります。 {% data variables.product.prodname_oauth_app %} を認可または再認可した {% data variables.product.prodname_oauth_apps %} を確認するには、[{% data variables.product.prodname_oauth_apps %} ページ](https://github.com/settings/applications)にアクセスしてください。

{% endif %}

## 参考リンク

{% ifversion fpt %}- "[About identity and access management with SAML single sign-on](/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on)"{% endif %}
{% ifversion ghae %}- "[About identity and access management for your enterprise](/admin/authentication/about-identity-and-access-management-for-your-enterprise)"{% endif %}
