---
title: Criar um token de acesso pessoal
intro: Você pode criar um token de acesso pessoal para usar no lugar de uma senha com a linha de comando ou com a API.
redirect_from:
  - /articles/creating-an-oauth-token-for-command-line-use
  - /articles/creating-an-access-token-for-command-line-use
  - /articles/creating-a-personal-access-token-for-the-command-line
  - /github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line
  - /github/authenticating-to-github/creating-a-personal-access-token
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token
  - /github/extending-github/git-automation-with-oauth-tokens
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Criar um PAT
---

{% note %}

**Notas:**

- Se você usar {% data variables.product.prodname_cli %} para efetuar a autenticação para {% data variables.product.product_name %} na linha de comando você poderá ignorar a geração de um token de acesso pessoal e efetuar a autenticação por meio da web. Para mais informações sobre a autenticação com {% data variables.product.prodname_cli %}, consulte [`login gh`](https://cli.github.com/manual/gh_auth_login).
-  O [Gerenciador de Credencial do Git](https://github.com/GitCredentialManager/git-credential-manager/blob/main/README.md) é uma alternativa segura e entre plataformas par ausar os tokens de acesso pessoal (PATs) e elimina a necessidade de gerenciar o escopo e vencimento do PAT. Para instruções de instalação, consulte [Download e instalação](https://github.com/GitCredentialManager/git-credential-manager/blob/main/README.md#download-and-install) no repositório do GitCredentialManager/git-credential-manager.

{% endnote %}

Os tokens de acesso pessoal (PATs) são uma alternativa para o uso de senhas para autenticação no {% data variables.product.product_name %} ao usar a [API do GitHub](/rest/overview/other-authentication-methods#via-oauth-and-personal-access-tokens) ou a [linha de comando](#using-a-token-on-the-command-line).

{% ifversion fpt or ghec %}Se você deseja usar um PAT para acessar recursos que pertencem a uma organização que usa o SAML SSO, você deverá autorizar o PAT. Para obter mais informações, consulte "[Sobre a autenticação com o logon único SAML](/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/about-authentication-with-saml-single-sign-on)" e "[Autorizando um token de acesso pessoal para uso com logon único SAML](/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on){% ifversion fpt %}" na documentação de {% data variables.product.prodname_ghe_cloud %}.{% else %}."{% endif %}{% endif %}

{% ifversion fpt or ghec %}{% data reusables.user-settings.removes-personal-access-tokens %}{% endif %}

Um token com nenhum escopo atribuído só pode acessar informações públicas. Para usar seu token para acessar repositórios da linha de comando, selecione `repo`. Para obter mais informações, consulte "[Escopos disponíveis](/apps/building-oauth-apps/scopes-for-oauth-apps#available-scopes)".

## Criar um token

{% ifversion fpt or ghec %}1. [Verifique seu endereço de e-mail](/github/getting-started-with-github/verifying-your-email-address), caso ainda não o tenha verificado.{% endif %}
{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.developer_settings %}
{% data reusables.user-settings.personal_access_tokens %}
{% data reusables.user-settings.generate_new_token %}
5. Dê ao seu token um nome descritivo. ![Token description field](/assets/images/help/settings/token_description.png){% ifversion fpt or ghes > 3.2 or ghae or ghec %}
6. Para dar ao seu token uma data de vencimento, selecione o menu suspenso **Vencimento** e, em seguida, clique em um padrão ou use o seletor de calendário. ![Token expiration field](/assets/images/help/settings/token_expiration.png){% endif %}
7. Selecione os escopos, ou as permissões, aos quais deseja conceder esse token. Para usar seu token para acessar repositórios da linha de comando, selecione **repo**.
   {% ifversion fpt or ghes or ghec %}
   ![Selecionar escopos do token](/assets/images/help/settings/token_scopes.gif)
   {% elsif ghae %}
   ![Selecionar escopos do token](/assets/images/enterprise/github-ae/settings/access-token-scopes-for-ghae.png)
   {% endif %}
8. Clique em **Generate token** (Gerar token). ![Botão Generate token (Gerar token)](/assets/images/help/settings/generate_token.png)
   {% ifversion fpt or ghec %}
   ![Token recém-criado](/assets/images/help/settings/personal_access_tokens.png)
   {% elsif ghes or ghae %}
   ![Token recém-criado](/assets/images/help/settings/personal_access_tokens_ghe.png)
   {% else %}
   ![Token recém-criado](/assets/images/help/settings/personal_access_tokens_ghe_legacy.png)
   {% endif %}
   {% warning %}

   **Aviso:** trate seus tokens como senhas e mantenha-os em segredo. Ao trabalhar com a API, use tokens como variáveis de ambiente em vez de embuti-los em código nos seus programas.

   {% endwarning %}

{% ifversion fpt or ghec %}9. Para usar seu token para efetuar a autenticação em uma organização que usa o logon único SAML, autorize o token. Para mais informações consulte "[Autorizando um token de acesso pessoal para usar com lgon único SAML](/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on){% ifversion fpt %}" na documentação de {% data variables.product.prodname_ghe_cloud %} .{% else %}."{% endif %}{% endif %}

## Usar um token na linha de comando

{% data reusables.command_line.providing-token-as-password %}

Os tokens de acesso pessoais podem ser usados apenas para operações Git HTTPS. Se seu repositório usar uma URL remote SSH, você precisará [alternar o remote de SSH para HTTPS](/github/getting-started-with-github/managing-remote-repositories/#switching-remote-urls-from-ssh-to-https).

Se não for solicitado a informar seu nome de usuário e a senha, suas credenciais poderão ser armazenadas em cache no seu computador. Você pode [atualizar suas credenciais no keychain](/github/getting-started-with-github/updating-credentials-from-the-macos-keychain) para substituir a senha antiga pelo token.

Em vez de inserir manualmente seu PAT para cada operação de HTTPS do Git, você pode armazenar seu PAT com um cliente Git. O Git irá armazenar temporariamente as suas credenciais na memória até que um intervalo de expiração tenha passado. Você também pode armazenar o token em um arquivo de texto simples que o Git pode ler antes de cada solicitação. Para obter mais informações, consulte "[Armazenar as suas credenciais do {% data variables.product.prodname_dotcom %} no Git](/github/getting-started-with-github/caching-your-github-credentials-in-git)".

## Leia mais

- "[Sobre autenticação no GitHub](/github/authenticating-to-github/about-authentication-to-github)"{% ifversion fpt or ghae or ghes > 3.2 or ghec %}
- "[Vencimento e revogação do Token](/github/authenticating-to-github/keeping-your-account-and-data-secure/token-expiration-and-revocation)"{% endif %}
