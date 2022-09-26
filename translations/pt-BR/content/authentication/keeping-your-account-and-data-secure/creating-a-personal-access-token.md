---
title: Criando um token de acesso pessoal
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
shortTitle: Create a PAT
ms.openlocfilehash: 437e06ba2fdf82252702106600ac6da73ee4c792
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147064423'
---
{% note %}

**Observações:**

- se você usar a {% data variables.product.prodname_cli %} para se autenticar no {% data variables.product.product_name %} na linha de comando, ignore a geração de um token de acesso pessoal e se autentique pelo navegador da Web. Para obter mais informações sobre como se autenticar com a {% data variables.product.prodname_cli %}, confira [`gh auth login`](https://cli.github.com/manual/gh_auth_login).
-  [O Gerenciador de Credenciais do Git](https://github.com/GitCredentialManager/git-credential-manager/blob/main/README.md) é uma alternativa segura e multiplataforma ao uso de PATs (tokens de acesso pessoal) e elimina a necessidade de gerenciar o escopo e a validade do PAT. Para obter instruções de instalação, confira [Baixar e instalar](https://github.com/GitCredentialManager/git-credential-manager/blob/main/README.md#download-and-install) no repositório GitCredentialManager/git-credential-manager.

{% endnote %}

Os PATs (tokens de acesso pessoal) são uma alternativa ao uso de senhas para autenticação no {% data variables.product.product_name %} ao usar a [API do GitHub](/rest/overview/other-authentication-methods#via-oauth-and-personal-access-tokens) ou a [linha de comando](#using-a-token-on-the-command-line).

{% ifversion fpt or ghec %}Caso deseje usar um PAT para acessar os recursos pertencentes a uma organização que usa o SSO do SAML, você precisa autorizar o PAT. Para obter mais informações, confira "[Sobre a autenticação com o logon único do SAML](/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/about-authentication-with-saml-single-sign-on)" e "[Como autorizar um token de acesso pessoal para uso com o logon único do SAML](/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on){% ifversion fpt %}" na documentação do {% data variables.product.prodname_ghe_cloud %}.{% else %}".{% endif %}{% endif %}

{% ifversion fpt or ghec %}{% data reusables.user-settings.removes-personal-access-tokens %}{% endif %}

Um token com nenhum escopo atribuído só pode acessar informações públicas. Para usar seu token para acessar os repositórios na linha de comando, selecione `repo`. Para obter mais informações, confira "[Escopos disponíveis](/apps/building-oauth-apps/scopes-for-oauth-apps#available-scopes)".

## Criar um token

{% ifversion fpt or ghec %}1. [Verifique seu endereço de email](/github/getting-started-with-github/verifying-your-email-address), caso ele ainda não tenha sido verificado.{% endif %} {% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.personal_access_tokens %} {% data reusables.user-settings.generate_new_token %}
5. Dê ao seu token um nome descritivo.
   ![Campo de descrição do token](/assets/images/help/settings/token_description.png){% ifversion fpt or ghes > 3.2 or ghae or ghec %}
6. Para dar uma validade ao token, selecione o menu suspenso **Validade** e clique em um padrão ou use o seletor de calendário.
   ![Campo de validade do token](/assets/images/help/settings/token_expiration.png){% endif %}
7. Selecione os escopos, ou as permissões, aos quais deseja conceder esse token. Para usar o token para acessar os repositórios na linha de comando, selecione **repositório**.
   {% ifversion fpt or ghes or ghec %} ![Seleção de escopos de token](/assets/images/help/settings/token_scopes.gif) {% elsif ghae %} ![Seleção de escopos de token](/assets/images/enterprise/github-ae/settings/access-token-scopes-for-ghae.png) {% endif %}
8. Clique em **Gerar token**.
   ![Botão Gerar token](/assets/images/help/settings/generate_token.png) {% ifversion fpt or ghec %} ![Token recém-criado](/assets/images/help/settings/personal_access_tokens.png) {% elsif ghes or ghae %} ![Token recém-criado](/assets/images/help/settings/personal_access_tokens_ghe.png) {% else %} ![Token recém-criado](/assets/images/help/settings/personal_access_tokens_ghe_legacy.png) {% endif %} {% warning %}

   **Aviso:** trate seus tokens como senhas e mantenha-os em segredo. Ao trabalhar com a API, use tokens como variáveis de ambiente em vez de embuti-los em código nos seus programas. 

   {% endwarning %}

{% ifversion fpt or ghec %}9. Para usar seu token para efetuar a autenticação em uma organização que usa o logon único SAML, autorize o token. Para obter mais informações, confira "[Como autorizar um token de acesso pessoal para uso com o logon único do SAML](/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on){% ifversion fpt %}" na documentação do {% data variables.product.prodname_ghe_cloud %}.{% else %}".{% endif %}{% endif %}

## Usar um token na linha de comando

{% data reusables.command_line.providing-token-as-password %}

Os tokens de acesso pessoais podem ser usados apenas para operações Git HTTPS. Se o repositório usar uma URL remota SSH, você precisará [alternar o repositório remoto de SSH para HTTPS](/github/getting-started-with-github/managing-remote-repositories/#switching-remote-urls-from-ssh-to-https).

Se não for solicitado a informar seu nome de usuário e a senha, suas credenciais poderão ser armazenadas em cache no seu computador. Você pode [atualizar suas credenciais no conjunto de chaves](/github/getting-started-with-github/updating-credentials-from-the-macos-keychain) para substituir sua senha antiga pelo token.

Em vez de inserir manualmente seu PAT para cada operação de HTTPS do Git, você pode armazenar seu PAT com um cliente Git. O Git irá armazenar temporariamente as suas credenciais na memória até que um intervalo de expiração tenha passado. Você também pode armazenar o token em um arquivo de texto simples que o Git pode ler antes de cada solicitação. Para obter mais informações, confira "[Como armazenar em cache suas credenciais do {% data variables.product.prodname_dotcom %} no Git](/github/getting-started-with-github/caching-your-github-credentials-in-git)".

## Leitura adicional

- "[Sobre a autenticação no GitHub](/github/authenticating-to-github/about-authentication-to-github)"{% ifversion fpt or ghae or ghes > 3.2 or ghec %}
- "[Expiração e revogação de um token](/github/authenticating-to-github/keeping-your-account-and-data-secure/token-expiration-and-revocation)"{% endif %}
