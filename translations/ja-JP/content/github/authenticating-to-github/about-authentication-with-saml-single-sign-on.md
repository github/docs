---
title: SAMLのシングルサインオンでの認証について
intro: 'SAMLシングルサインオン（SSO）を使うOrganizationには、アイデンティティプロバイダ（IdP）を通じての認証を受けてアクセスできます。 Organization が SAML SSO を実施するときにコマンドラインで API または Git で認証するには、個人アクセストークンまたは SSH キーを承認する必要があります。'
product: '{% data reusables.gated-features.saml-sso %}'
redirect_from:
  - /articles/about-authentication-with-saml-single-sign-on
versions:
  free-pro-team: '*'
---

{% data reusables.saml.dotcom-saml-explanation %}Organization のオーナーは、{% data variables.product.prodname_dotcom %}でユーザアカウントを SAML SSO を使用する Organization に招待できます。これにより、Organization に貢献することができ、{% data variables.product.prodname_dotcom %}の既存の ID とコントリビューションを保持できます。

SAML SSO を使用する Organization のリソースにアクセスすると、{% data variables.product.prodname_dotcom %}は認証のために Organization の SAML IdP にリダイレクトします。 IdP でアカウントが正常に認証されると、IdP は{% data variables.product.prodname_dotcom %}に戻り、Organization のリソースにアクセスできます。

{% data reusables.saml.outside-collaborators-exemption %}

最近ブラウザで Organization の SAML IdP が認証された場合、SAML SSO を使う {% data variables.product.prodname_dotcom %} の Organization へのアクセスは自動的に認可されます。 最近ブラウザで Organization の SAML IdP が認証されていない場合は、Organization にアクセスする前に SAML IdP で認証を受ける必要があります。

{% data variables.product.prodname_dotcom %}で Organization のリソースの認証を受けてアクセスするには、SAML IdP で定期的に認証を受けておく必要があります。 このログイン間隔は利用しているアイデンティティプロバイダ (IdP) によって指定されますが、一般的には 24 時間です。 このように定期的にログインしなければならないことから、アクセスの長さには制限があり、アクセスを続行するには再認証が必要になります。 アクティブな SAMLセッションは、セキュリティの設定で表示し、管理できます。 詳細は「[アクティブなSAMLセッションの表示と管理](/articles/viewing-and-managing-your-active-saml-sessions)」を参照してください。

SAML SSL を要求する Organization 内の保護されたコンテンツにアクセスするために API またはコマンドライン上の Git を利用するには、認可された個人のアクセストークンを HTTPS 経由で使うか、認可された SSH キーを使う必要があります。 {% data variables.product.prodname_oauth_app %} アクセストークンはデフォルトで認可されます。

個人のアクセストークンあるいは SSH キーを持っていない場合、コマンドライン用の個人のアクセストークンを作成するか、新しい SSH キーを生成できます。 詳しい情報については、「[個人アクセストークンを作成する](/github/authenticating-to-github/creating-a-personal-access-token)」または「[新しい SSH キーを生成して ssh-agent へ追加する](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)」を参照してください。

新しい、または既存の個人のアクセストークンか SSH キーを、SAML SSO を要求するOrganization で利用するには、SAML SSO Organization で使うためにそのトークンや SSH キーを認可する必要があります。 詳しい情報については、[SAMLシングルサインオンで利用するために個人アクセストークンを認可する](/articles/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)」または「[SAML シングルサインオンで使用するために SSH キーを認可する](/articles/authorizing-an-ssh-key-for-use-with-saml-single-sign-on)」を参照してください。

{% data variables.product.prodname_oauth_app %}を認証するたびにアクティブなSAML セッションが必要です。

### 参考リンク

- 「[SAML シングルサインオンを使うアイデンティティおよびアクセス管理について](/github/setting-up-and-managing-organizations-and-teams/about-identity-and-access-management-with-saml-single-sign-on)」
