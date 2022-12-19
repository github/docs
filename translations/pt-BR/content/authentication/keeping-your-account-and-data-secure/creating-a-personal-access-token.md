---
title: Criando um token de acesso pessoal
intro: 'Você pode criar um {% data variables.product.pat_generic %} a ser usado no lugar de uma senha com a linha de comando ou com a API.'
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
shortTitle: 'Create a {% data variables.product.pat_generic %}'
ms.openlocfilehash: 78928110c7a8861a9c13d093799454f945eaaf2c
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107746'
---
{% warning %}

**Aviso**: trate os tokens de acesso como uma senha.

Para acessar o {% data variables.product.company_short %} por meio da linha de comando, considere usar a {% data variables.product.prodname_cli %} ou o [Git Credential Manager](https://github.com/GitCredentialManager/git-credential-manager/blob/main/README.md) em vez de criar um {% data variables.product.pat_generic %}.

Ao usar um {% data variables.product.pat_generic %} em um script, considere armazenar o token como um segredo e executar o script por meio do {% data variables.product.prodname_actions %}. Para saber mais, confira "[Segredos criptografados](/actions/security-guides/encrypted-secrets)".{%- ifversion ghec or fpt %} Você também pode armazenar o token como um segredo dos {% data variables.product.prodname_codespaces %} e executar o script nos {% data variables.product.prodname_codespaces %}. Para obter mais informações, confira "[Como gerenciar os segredos criptografados dos seus codespaces](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)".{% endif %}

Se essas opções não forem possíveis, considere usar outro serviço, como a [CLI do 1Password](https://developer.1password.com/docs/cli/secret-references/), para armazenar seu token com segurança.

{% endwarning %}

## Sobre os {% data variables.product.pat_generic %}s

Os {% data variables.product.pat_generic_caps %} são uma alternativa ao uso de senhas para autenticação no {% data variables.product.product_name %} ao usar a [API do GitHub](/rest/overview/other-authentication-methods#via-oauth-and-personal-access-tokens) ou a [linha de comando](#using-a-token-on-the-command-line). Os {% data variables.product.pat_generic_caps %}s são usados para acessar recursos do {% data variables.product.company_short %} em nome de si mesmo. Para acessar recursos em nome de uma organização ou para integrações de longa duração, você deve usar um {% data variables.product.prodname_github_app %}. Para obter mais informações, confira "[Sobre os aplicativos](/developers/apps/getting-started-with-apps/about-apps)".

{% ifversion pat-v2 %}

No momento, o {% data variables.product.company_short %} dá suporte a dois tipos de {% data variables.product.pat_generic %}s: {% data variables.product.pat_v2 %}s e {% data variables.product.pat_v1_plural %}. O {% data variables.product.company_short %} recomenda que você use {% data variables.product.pat_v2 %}s em vez de {% data variables.product.pat_v1_plural %} sempre que possível. os {% data variables.product.pat_v2_caps %}s têm várias vantagens de segurança em relação aos {% data variables.product.pat_v1_plural %}:

- Cada token só pode acessar recursos pertencentes a um usuário ou uma organização.
- Cada token só pode acessar repositórios específicos.
- Cada token recebe permissões específicas, que oferecem mais controle do que os escopos concedidos a {% data variables.product.pat_v1_plural %}.
- Cada token precisa ter uma data de validade.
- Os proprietários da organização podem exigir aprovação para {% data variables.product.pat_v2 %}s que possam acessar recursos na organização.{% ifversion ghec or ghes or ghae %}
- Os proprietários corporativos podem exigir aprovação para {% data variables.product.pat_v2 %}s que possam acessar recursos na organização.{% endif %}

Além disso, os proprietários da organização podem restringir o acesso do {% data variables.product.pat_v1 %} à organização{% ifversion ghec or ghes or ghae %} e os proprietários corporativos podem restringir o acesso do {% data variables.product.pat_v1 %} à empresa ou às organizações pertencentes à empresa{% endif %}.

{% data reusables.user-settings.patv2-limitations %}

{% endif %}

{% ifversion fpt or ghec %}{% data reusables.user-settings.removes-personal-access-tokens %}{% endif %}

{% ifversion pat-v2 %}

## Como criar um {% data variables.product.pat_v2 %}

{% note %}

**Observação**: {% data reusables.user-settings.pat-v2-beta %}

{% endnote %}

{% ifversion fpt or ghec %}1. [Verifique seu endereço de email](/github/getting-started-with-github/verifying-your-email-address), caso ele ainda não tenha sido verificado.{% endif %} {% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %}
1. Na barra lateral esquerda, em **{% octicon "key" aria-label="The key icon" %} {% data variables.product.pat_generic_caps %}s**, clique em **Tokens refinados**.
1. Clique em **Gerar novo token**.
1. Opcionalmente, em **Nome do token**, insira um nome para ele.
1. Em **Validade**, selecione uma validade para o token.
1. Opcionalmente, em **Descrição**, adicione uma observação para descrever a finalidade do token.
1. Em **Proprietário do recurso**, selecione um proprietário de recurso. O token só poderá acessar recursos pertencentes ao proprietário do recurso selecionado. As organizações das quais você é membro não aparecerão, a menos que a organização aceite o {% data variables.product.pat_v2 %}s. Para obter mais informações, confira "[Como definir uma política de {% data variables.product.pat_generic %} para a organização](/organizations/managing-programmatic-access-to-your-organization/setting-a-personal-access-token-policy-for-your-organization)". {% ifversion ghec or ghae %} Talvez seja necessário executar o SSO (logon único) de SAML se a organização selecionada exigir e você ainda não tiver uma sessão SAML ativa.{% endif %}
1. Opcionalmente, se o proprietário do recurso for uma organização que requer aprovação para {% data variables.product.pat_v2 %}s, abaixo do proprietário do recurso, na caixa, insira uma justificativa para a solicitação.
1. Em **Acesso ao repositório**, selecione quais repositórios você deseja que o token acesse. Você deve escolher o acesso mínimo ao repositório que atenda às suas necessidades. Os tokens sempre incluem acesso somente leitura a todos os repositórios públicos no GitHub.
1. Se você selecionou **Selecionar somente repositórios** na etapa anterior, na lista suspensa **Repositórios selecionados** , selecione os repositórios que você deseja que o token acesse.
1. Em **Permissões**, selecione quais permissões quer conceder o token. Dependendo do proprietário do recurso e do acesso do repositório especificados, haverá permissões de repositório, organização e conta. Você deve escolher as permissões mínimas para suas necessidades. Para obter mais informações sobre quais permissões são necessárias para cada operação da API REST, confira "[Permissões necessárias para {% data variables.product.pat_v2 %}s](/rest/overview/permissions-required-for-fine-grained-personal-access-tokens)".
1. Clique em **Gerar token**.

Se você selecionou uma organização como o proprietário do recurso e a organização requer aprovação para {% data variables.product.pat_v2 %}s, o token será marcado como `pending` até que seja revisado por um administrador da organização. O token poderá ler apenas recursos públicos até que seja aprovado. Se você for um proprietário da organização, a solicitação será aprovada automaticamente. Para obter mais informações, confira "[Como revisar e revogar {% data variables.product.pat_generic %}s na organização](/organizations/managing-programmatic-access-to-your-organization/reviewing-and-revoking-personal-access-tokens-in-your-organization)".

{% endif %}

## Como criar um {% data variables.product.pat_v1 %}

{% ifversion pat-v2 %}

{% note %}

**Observação**: os proprietários da organização podem restringir o acesso do {% data variables.product.pat_v1 %} à organização. Se você tentar usar um {% data variables.product.pat_v1 %} para acessar recursos em uma organização que desabilitou o acesso ao {% data variables.product.pat_v1 %}, sua solicitação falhará com uma resposta 403. Nesse caso, use um {% data variables.product.prodname_github_app %}, um {% data variables.product.prodname_oauth_app %} ou um {% data variables.product.pat_v2 %}.

{% endnote %}

{% endif %}

{% ifversion pat-v2 %}

{% warning %}

**Observação**: o {% data variables.product.pat_v1 %} pode acessar todos os repositórios que você pode acessar. O {% data variables.product.company_short %} recomenda que você use {% data variables.product.pat_v2 %}s, que pode restringir a repositórios específicos. Os {% data variables.product.pat_v2_caps %}s também permitem que você especifique permissões refinadas em vez de escopos amplos.

{% endwarning %}

{% endif %}

{% ifversion fpt or ghec %}1. [Verifique seu endereço de email](/github/getting-started-with-github/verifying-your-email-address), caso ele ainda não tenha sido verificado.{% endif %} {% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %} {% ifversion pat-v2 %}1. Na barra lateral esquerda, em **{% octicon "key" aria-label="The key icon" %} {% data variables.product.pat_generic_caps %}s**, clique em **Tokens (clássicos)** .{% else %}{% data reusables.user-settings.personal_access_tokens %}{% endif %} {% ifversion pat-v2%}1. Selecione **Gerar novo token** e clique em **Gerar novo token (clássico)** .{% else %}{% data reusables.user-settings.generate_new_token %}{% endif %}
5. Dê ao seu token um nome descritivo.
   ![Campo Descrição do token](/assets/images/help/settings/token_description.png)
6. Para dar uma validade ao token, selecione o menu suspenso **Validade** e clique em um padrão ou use o seletor de calendário.
   ![Campo de validade do token](/assets/images/help/settings/token_expiration.png)
7. Selecione os escopos ou as permissões que deseja conceder a esse token. Para usar o token para acessar os repositórios na linha de comando, selecione **repositório**. Um token com nenhum escopo atribuído só pode acessar informações públicas. Para obter mais informações, confira "[Escopos disponíveis](/apps/building-oauth-apps/scopes-for-oauth-apps#available-scopes)".
   {% ifversion fpt or ghes or ghec %} ![Seleção de escopos de token](/assets/images/help/settings/token_scopes.gif) {% elsif ghae %} ![Seleção de escopos de token](/assets/images/enterprise/github-ae/settings/access-token-scopes-for-ghae.png) {% endif %}
8. Clique em **Gerar token**.
   ![Botão Gerar token](/assets/images/help/settings/generate_token.png) {% ifversion fpt or ghec %} ![Token recém-criado](/assets/images/help/settings/personal_access_tokens.png) {% elsif ghes or ghae %} ![Token recém-criado](/assets/images/help/settings/personal_access_tokens_ghe.png) {% else %} ![Token recém-criado](/assets/images/help/settings/personal_access_tokens_ghe_legacy.png){% endif %}{% ifversion fpt or ghec %}
1. Se quiser usar o token para acessar recursos pertencentes a uma organização que usa o logon único de SAML, autorize o token. Para obter mais informações, confira "[Como autorizar um {% data variables.product.pat_generic %} para ser usado com o logon único de SAML](/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on){% ifversion fpt %}" na documentação do {% data variables.product.prodname_ghe_cloud %}.{% else %}."{% endif %}{% endif %}

## Usar um token na linha de comando

{% data reusables.command_line.providing-token-as-password %}

Os {% data variables.product.pat_generic_caps %}s só podem ser usados para operações HTTP do Git. Se o repositório usar uma URL remota SSH, você precisará [alternar o repositório remoto de SSH para HTTPS](/github/getting-started-with-github/managing-remote-repositories/#switching-remote-urls-from-ssh-to-https).

Se não for solicitado a informar seu nome de usuário e a senha, suas credenciais poderão ser armazenadas em cache no seu computador. Você pode [atualizar suas credenciais no conjunto de chaves](/github/getting-started-with-github/updating-credentials-from-the-macos-keychain) para substituir sua senha antiga pelo token.

Em vez de inserir manualmente os dados do {% data variables.product.pat_generic %} para cada operação HTTPS do Git, você pode armazenar em cache os dados do {% data variables.product.pat_generic %} com um cliente Git. O Git irá armazenar temporariamente as suas credenciais na memória até que um intervalo de expiração tenha passado. Você também pode armazenar o token em um arquivo de texto simples que o Git pode ler antes de cada solicitação. Para obter mais informações, confira "[Como armazenar em cache suas credenciais do {% data variables.product.prodname_dotcom %} no Git](/github/getting-started-with-github/caching-your-github-credentials-in-git)".

## Leitura adicional

- "[Sobre a autenticação no GitHub](/github/authenticating-to-github/about-authentication-to-github)"
- "[Validade e revogação de token](/github/authenticating-to-github/keeping-your-account-and-data-secure/token-expiration-and-revocation)"
