---
title: SAMLのシングルサインオンでの認証について
intro: 'You can access {% if currentVersion == "github-ae@latest" %}{% data variables.product.product_location %}{% elsif currentVersion == "free-pro-team@latest" %}an organization that uses SAML single sign-on (SSO){% endif %} by authenticating {% if currentVersion == "github-ae@latest" %}with SAML single sign-on (SSO) {% endif %}through an identity provider (IdP).{% if currentVersion == "free-pro-team@latest" %}To authenticate with the API or Git on the command line when an organization enforces SAML SSO, you must authorize your personal access token or SSH key.{% endif %}'
product: '{% data reusables.gated-features.saml-sso %}'
redirect_from:
  - /articles/about-authentication-with-saml-single-sign-on
versions:
  free-pro-team: '*'
  github-ae: '*'
---

{% if currentVersion == "github-ae@latest" %}

SAML SSO allows an enterprise owner to centrally control and secure access to {% data variables.product.product_name %} from a SAML IdP. When you visit {% data variables.product.product_location %} in a browser, {% data variables.product.product_name %} will redirect you to your IdP to authenticate. After you successfully authenticate with an account on the IdP, the IdP redirects you back to {% data variables.product.product_location %}. {% data variables.product.product_name %} validates the response from your IdP, then grants access.

{% data reusables.saml.you-must-periodically-authenticate %}

If you can't access {% data variables.product.product_name %}, contact your local enterprise owner or administrator for {% data variables.product.product_name %}. You may be able to locate contact information for your enterprise by clicking **Support** at the bottom of any page on {% data variables.product.product_name %}. {% data variables.product.company_short %} and {% data variables.contact.github_support %} do not have access to your IdP, and cannot troubleshoot authentication problems.

{% endif %}

{% if currentVersion == "free-pro-team@latest" %}

{% data reusables.saml.dotcom-saml-explanation %}Organization のオーナーは、{% data variables.product.prodname_dotcom %}でユーザアカウントを SAML SSO を使用する Organization に招待できます。これにより、Organization に貢献することができ、{% data variables.product.prodname_dotcom %}の既存の ID とコントリビューションを保持できます。

SAML SSO を使用する Organization のリソースにアクセスすると、{% data variables.product.prodname_dotcom %}は認証のために Organization の SAML IdP にリダイレクトします。 IdP でアカウントが正常に認証されると、IdP は{% data variables.product.prodname_dotcom %}に戻り、Organization のリソースにアクセスできます。

{% data reusables.saml.outside-collaborators-exemption %}

最近ブラウザで Organization の SAML IdP が認証された場合、SAML SSO を使う {% data variables.product.prodname_dotcom %} の Organization へのアクセスは自動的に認可されます。 最近ブラウザで Organization の SAML IdP が認証されていない場合は、Organization にアクセスする前に SAML IdP で認証を受ける必要があります。

{% data reusables.saml.you-must-periodically-authenticate %}

SAML SSL を要求する Organization 内の保護されたコンテンツにアクセスするために API またはコマンドライン上の Git を利用するには、認可された個人のアクセストークンを HTTPS 経由で使うか、認可された SSH キーを使う必要があります。 {% data variables.product.prodname_oauth_app %} アクセストークンはデフォルトで認可されます。

個人のアクセストークンあるいは SSH キーを持っていない場合、コマンドライン用の個人のアクセストークンを作成するか、新しい SSH キーを生成できます。 詳しい情報については、「[個人アクセストークンを作成する](/github/authenticating-to-github/creating-a-personal-access-token)」または「[新しい SSH キーを生成して ssh-agent へ追加する](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)」を参照してください。

新しい、または既存の個人のアクセストークンか SSH キーを、SAML SSO を要求するOrganization で利用するには、SAML SSO Organization で使うためにそのトークンや SSH キーを認可する必要があります。 詳しい情報については、[SAMLシングルサインオンで利用するために個人アクセストークンを認可する](/articles/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)」または「[SAML シングルサインオンで使用するために SSH キーを認可する](/articles/authorizing-an-ssh-key-for-use-with-saml-single-sign-on)」を参照してください。

{% data variables.product.prodname_oauth_app %}を認証するたびにアクティブなSAML セッションが必要です。

{% endif %}

### 参考リンク

{% if currentVersion == "free-pro-team@latest" %}- "[About identity and access management with SAML single sign-on](/github/setting-up-and-managing-organizations-and-teams/about-identity-and-access-management-with-saml-single-sign-on)"{% endif %}
{% if currentVersion == "github-ae@latest" %}- "[About identity and access management for your enterprise](/admin/authentication/about-identity-and-access-management-for-your-enterprise)"{% endif %}
