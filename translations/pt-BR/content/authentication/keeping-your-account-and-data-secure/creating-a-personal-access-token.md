---
title: Criar um token de acesso pessoal
intro: Você deve criar um token de acesso pessoal para usar no lugar de uma senha com a linha de comando ou com a API.
redirect_from:
  - /articles/creating-an-oauth-token-for-command-line-use/
  - /articles/creating-an-access-token-for-command-line-use/
  - /articles/creating-a-personal-access-token-for-the-command-line
  - /github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line
  - /github/authenticating-to-github/creating-a-personal-access-token
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Identity
  - Access management
shortTitle: Criar um PAT
---

{% note %}

**Observação:** Se você usar {% data variables.product.prodname_cli %} para efetuar a autenticação para {% data variables.product.product_name %} na linha de comando você poderá ignorar a geração de um token de acesso pessoal e efetuar a autenticação por meio da web. Para mais informações sobre a autenticação com {% data variables.product.prodname_cli %}, consulte [`login gh`](https://cli.github.com/manual/gh_auth_login).

{% endnote %}

Os tokens de acesso pessoal (PATs) são uma alternativa para o uso de senhas para autenticação no {% data variables.product.product_name %} ao usar a [API do GitHub](/rest/overview/other-authentication-methods#via-oauth-and-personal-access-tokens) ou a [linha de comando](#using-a-token-on-the-command-line).

{% ifversion fpt %}Se você deseja usar um PAT para acessar recursos que pertencem a uma organização que usa o SAML SSO, você deverá autorizar o PAT. Para mais informações consulte "[Sobre autenticação com logon único SAML](/github/authenticating-to-github/about-authentication-with-saml-single-sign-on)" e "[Autorizando um token de acesso pessoal para uso com logon único SAML](/github/authenticating-to-github/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on).{% endif %}

{% ifversion fpt %}{% data reusables.user_settings.removes-personal-access-tokens %}{% endif %}

Um token com nenhum escopo atribuído só pode acessar informações públicas. Para usar seu token para acessar repositórios da linha de comando, selecione `repo`. Para obter mais informações, consulte “[Escopos disponíveis](/apps/building-oauth-apps/scopes-for-oauth-apps#available-scopes).

## Criar um token

{% ifversion fpt %}1. [Verifique seu endereço de e-mail](/github/getting-started-with-github/verifying-your-email-address), caso ainda não o tenha verificado.{% endif %}
{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.developer_settings %}
{% data reusables.user_settings.personal_access_tokens %}
{% data reusables.user_settings.generate_new_token %}
5. Dê ao seu token um nome descritivo. ![Token description field](/assets/images/help/settings/token_description.png){% ifversion fpt or ghes > 3.2 or ghae-issue-4374 %}
6. Para dar ao seu token uma data de vencimento, selecione o menu suspenso **Vencimento** e, em seguida, clique em um padrão ou use o seletor de calendário. ![Token expiration field](/assets/images/help/settings/token_expiration.png){% endif %}
7. Selecione os escopos, ou as permissões, aos quais deseja conceder esse token. Para usar seu token para acessar repositórios da linha de comando, selecione **repo**.
   {% ifversion fpt or ghes %}
   ![Selecionar escopos do token](/assets/images/help/settings/token_scopes.gif)
   {% elsif ghae %}
   ![Selecionar escopos do token](/assets/images/enterprise/github-ae/settings/access-token-scopes-for-ghae.png)
   {% endif %}
8. Clique em **Generate token** (Gerar token). ![Botão Generate token (Gerar token)](/assets/images/help/settings/generate_token.png)
   {% ifversion fpt %}
   ![Token recém-criado](/assets/images/help/settings/personal_access_tokens.png)
   {% elsif ghes > 3.1 or ghae-next %}
   ![Token recém-criado](/assets/images/help/settings/personal_access_tokens_ghe.png)
   {% else %}
   ![Token recém-criado](/assets/images/help/settings/personal_access_tokens_ghe_legacy.png)
   {% endif %}
   {% warning %}

   **Aviso:** trate seus tokens como senhas e mantenha-os em segredo. Ao trabalhar com a API, use tokens como variáveis de ambiente em vez de embuti-los em código nos seus programas.

   {% endwarning %}

{% ifversion fpt %}9. Para usar seu token a fim de se autenticar em uma organização que usa SAML SSO, [autorize o token para uso com uma organização de logon único SAML](/github/authenticating-to-github/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on).{% endif %}

## Usar um token na linha de comando

{% data reusables.command_line.providing-token-as-password %}

Os tokens de acesso pessoais podem ser usados apenas para operações Git HTTPS. Se seu repositório usar uma URL remote SSH, você precisará [alternar o remote de SSH para HTTPS](/github/getting-started-with-github/managing-remote-repositories/#switching-remote-urls-from-ssh-to-https).

Se não for solicitado a informar seu nome de usuário e a senha, suas credenciais poderão ser armazenadas em cache no seu computador. Você pode [atualizar suas credenciais no keychain](/github/getting-started-with-github/updating-credentials-from-the-macos-keychain) para substituir a senha antiga pelo token.

Em vez de inserir manualmente seu PAT para cada operação de HTTPS do Git, você pode armazenar seu PAT com um cliente Git. O Git irá armazenar temporariamente as suas credenciais na memória até que um intervalo de expiração tenha passado. Você também pode armazenar o token em um arquivo de texto simples que o Git pode ler antes de cada solicitação. Para obter mais informações, consulte "[Armazenar as suas credenciais do {% data variables.product.prodname_dotcom %} no Git](/github/getting-started-with-github/caching-your-github-credentials-in-git)".

## Leia mais

- "[Sobre a autenticação no GitHub](/github/authenticating-to-github/about-authentication-to-github)"{% ifversion fpt or ghae-issue-4374 or ghes > 3.2 %}
- "[Vencimento e revogação do Token](/github/authenticating-to-github/keeping-your-account-and-data-secure/token-expiration-and-revocation)"{% endif %}
