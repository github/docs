{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %}
{% warning %}

**警告:** アプリケーションは、GitHub SAML Organizationで利用できるOAuthトークンを取得するのに、[Webアプリケーションフロー](/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow)を利用しなければなりません。 Authorizations APIを利用して作成されたOAuthトークンは、GitHub SAML Organizationにアクセスできなくなります。 詳しい情報については[ブログポスト](https://developer.github.com/changes/2019-11-05-deprecated-passwords-and-authorizations-api)を参照してください。

{% endwarning %}
{% endif %}
