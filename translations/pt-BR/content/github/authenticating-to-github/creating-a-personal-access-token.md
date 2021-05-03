---
title: Criar um token de acesso pessoal
intro: Você deve criar um token de acesso pessoal para usar no lugar de uma senha com a linha de comando ou com a API.
redirect_from:
  - /articles/creating-an-oauth-token-for-command-line-use/
  - /articles/creating-an-access-token-for-command-line-use/
  - /articles/creating-a-personal-access-token-for-the-command-line
  - /github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Identity
  - Access management
---

Os tokens de acesso pessoal (PATs) são uma alternativa para o uso de senhas para autenticação no {% data variables.product.product_name %} ao usar a [API do GitHub](/rest/overview/other-authentication-methods#via-oauth-and-personal-access-tokens) ou a [linha de comando](#using-a-token-on-the-command-line).

{% if currentVersion == "free-pro-team@latest" %}Se você deseja usar um PAT para acessar recursos pertencentes a uma organização que usa SAML SSO, você deve autorizar o PAT. Para mais informações consulte "[Sobre autenticação com logon único SAML](/articles/about-authentication-with-saml-single-sign-on)" e "[Autorizando um token de acesso pessoal para uso com logon único SAML](/articles/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on).{% endif %}

{% if currentVersion == "free-pro-team@latest" %}{% data reusables.user_settings.removes-personal-access-tokens %}{% endif %}

### Criar um token

{% if currentVersion == "free-pro-team@latest" %}1. [Verifique seu endereço de e-mail](/articles/verifying-your-email-address), caso ainda não o tenha verificado.{% endif %}
{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.developer_settings %}
{% data reusables.user_settings.personal_access_tokens %}
4. Clique em **Generate new token** (Gerar novo token). ![Botão Generate new token (Gerar novo token)](/assets/images/help/settings/generate_new_token.png)
5. Dê ao seu token um nome descritivo. ![Campo Token description (Descrição do token)](/assets/images/help/settings/token_description.png)
6. Selecione os escopos, ou as permissões, aos quais deseja conceder esse token. Para usar seu token para acessar repositórios da linha de comando, selecione **repo**.
   {% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}
   ![Selecionar escopos do token](/assets/images/help/settings/token_scopes.gif)
   {% elsif currentVersion == "github-ae@latest" %}
   ![Selecionar escopos do token](/assets/images/enterprise/github-ae/settings/access-token-scopes-for-ghae.png)
   {% endif %}
7. Clique em **Generate token** (Gerar token). ![Botão Generate token (Gerar token)](/assets/images/help/settings/generate_token.png)
8. Clique em
{% octicon "clippy" aria-label="The copy to clipboard icon" %} to copy the token to your clipboard. For security reasons, after you navigate off the page, you will not be able to see the token again.
   {% if currentVersion == "free-pro-team@latest" %}
   ![Newly created token](/assets/images/help/settings/personal_access_tokens.png)
   {% elsif currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
   ![Newly created token](/assets/images/help/settings/personal_access_tokens_ghe.png)
   {% else %}
   ![Newly created token](/assets/images/help/settings/personal_access_tokens_ghe_legacy.png)
   {% endif %}

   {% warning %}

   **Aviso:** trate seus tokens como senhas e mantenha-os em segredo. Ao trabalhar com a API, use tokens como variáveis de ambiente em vez de embuti-los em código nos seus programas.

   {% endwarning %}
{% if currentVersion == "free-pro-team@latest" %}9. Para usar seu token a fim de se autenticar em uma organização que usa SAML SSO, [autorize o token para uso com uma organização de logon único SAML](/articles/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on).{% endif %}

### Usar um token na linha de comando

{% data reusables.command_line.providing-token-as-password %}

Os tokens de acesso pessoais podem ser usados apenas para operações Git HTTPS. Se seu repositório usar uma URL remote SSH, você precisará [alternar o remote de SSH para HTTPS](/github/getting-started-with-github/managing-remote-repositories/#switching-remote-urls-from-ssh-to-https).

Se não for solicitado a informar seu nome de usuário e a senha, suas credenciais poderão ser armazenadas em cache no seu computador. Você pode [atualizar suas credenciais no keychain](/articles/updating-credentials-from-the-osx-keychain) para substituir a senha antiga pelo token.

### Leia mais

- "[Sobre a autenticação no GitHub](/github/authenticating-to-github/about-authentication-to-github)"
