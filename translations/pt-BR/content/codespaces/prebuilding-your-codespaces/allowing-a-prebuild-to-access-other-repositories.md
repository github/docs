---
title: Permitir que um prebuild acesse outros repositórios
shortTitle: Allow external repo access
intro: 'Você pode permitir que sua pré-compilação acesse outros repositórios do {% data variables.product.prodname_dotcom %} para que ela possa ser construída com sucesso.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Set up
permissions: People with admin access to a repository can configure prebuilds for the repository.
ms.openlocfilehash: 0186078525944587bc4344e0a7d6a32468ce1cd7
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158786'
---
Por padrão, o fluxo de trabalho de {% data variables.product.prodname_actions %} para uma configuração de pré-compilação só pode acessar o próprio conteúdo do repositório. Seu projeto pode usar recursos adicionais, localizados em outro lugar, para criar o ambiente de desenvolvimento.

## Permitir que um prebuild tenha acesso de leitura a recursos externos

Você pode configurar o acesso de leitura para outros repositórios do {% data variables.product.prodname_dotcom %}, com o mesmo proprietário do repositório, especificando permissões no arquivo `devcontainer.json` usado pela configuração de prebuild. Para obter mais informações, veja "[Gerenciando o acesso a outros repositórios em seu codespace](/codespaces/managing-your-codespaces/managing-repository-access-for-your-codespaces)".

{% note %}

**Observação**: você só pode autorizar permissões de leitura dessa forma, e o proprietário do repositório de destino deve ser o mesmo que o proprietário do repositório para o qual você está criando um prebuild. Por exemplo, se você estiver criando uma configuração de prebuild para o repositório do `octo-org/octocat`, poderá conceder permissões de leitura para outros repositórios do `octo-org/*` se isso for especificado no arquivo `devcontainer.json` e desde que você tenha as permissões.

{% endnote %}

Ao criar ou editar uma configuração de prebuild para um arquivo `devcontainer.json` que configura o acesso de leitura para outros repositórios com o mesmo proprietário do repositório, você deverá conceder essas permissões quando clicar em **Criar** ou **Atualizar**. Para obter mais informações, confira "[Como configurar pré-compilações](/codespaces/prebuilding-your-codespaces/configuring-prebuilds#configuring-prebuilds)".

## Permitir que um prebuild tenha acesso de gravação a recursos externos

Se o projeto exigir acesso de gravação aos recursos ou se os recursos externos residirem em um repositório com um proprietário diferente do que o do repositório em que você está criando uma configuração de pré-build, use um {% data variables.product.pat_generic %} para permitir esse acesso.

Você precisará criar uma conta pessoal e usá-la para criar um {% data variables.product.pat_v1 %} com os escopos adequados.

1. Crie uma nova conta pessoal em {% data variables.product.prodname_dotcom %}. 
   
   {% warning %}
   
   **Aviso**: embora você possa gerar o {% data variables.product.pat_v1 %} usando a conta pessoal existente, recomendamos expressamente a criação de uma conta com acesso somente aos repositórios de destino necessários para o cenário. Isso porque a permissão `repository` do token de acesso permite acesso em todos os repositórios aos quais a conta tem acesso. Para obter mais informações, confira "[Como se inscrever em uma nova conta do GitHub](/get-started/signing-up-for-github/signing-up-for-a-new-github-account)" e "[Proteção de segurança do {% data variables.product.prodname_actions %}](/actions/security-guides/security-hardening-for-github-actions#considering-cross-repository-access)".
   
   {% endwarning %}
1. Dê a nova conta acesso de leitura aos repositórios necessários. Para obter mais informações, confira "[Como gerenciar o acesso de uma pessoa a um repositório da organização](/organizations/managing-access-to-your-organizations-repositories/managing-an-individuals-access-to-an-organization-repository)".
1. Ao entrar na nova conta, crie um {% data variables.product.pat_v1 %} com o escopo `repo`. Opcionalmente, se o pré-build precisar baixar pacotes do {% data variables.product.company_short %} {% data variables.product.prodname_container_registry %}, selecione também o escopo `read:packages`. Para obter mais informações, confira "[Como criar um {% data variables.product.pat_generic %}](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)".

   ![Escopos 'repo' e 'packages' selecionados para um {% data variables.product.pat_v1 %}](/assets/images/help/codespaces/prebuilds-select-scopes.png) 
   
   Se a pré-compilação usar um pacote do {% data variables.product.company_short %} {% data variables.product.prodname_container_registry %}, você deverá conceder o novo acesso à nova conta ao pacote ou configurar o pacote para herdar as permissões de acesso do repositório que você está pré-compilando. Para obter mais informações, confira "[Como configurar o controle de acesso e a visibilidade de um pacote](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility)".   
{% ifversion ghec %}1. Autorizar o token para uso com o logon único SAML (SSO), para que ele possa acessar repositórios que são propriedade de organizações com SSO habilitado. Para obter mais informações, confira "[Como autorizar um {% data variables.product.pat_generic %} para uso com logon único de SAML](/authentication/authenticating-with-saml-single-sign-on/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)".

   ![O botão para configurar o SSO para um {% data variables.product.pat_v1 %}](/assets/images/help/codespaces/configure-SSO-for-PAT.png) 

{% endif %}
1. Copie a string do token. Você irá atribuir isto a um segredo de repositório de {% data variables.product.prodname_codespaces %}.
1. Efetue novamente o login na conta com acesso de administrador ao repositório. 
1. No repositório para o qual você deseja criar o pré-build dos {% data variables.product.prodname_github_codespaces %}, crie um segredo de repositório do {% data variables.product.prodname_codespaces %} chamado `CODESPACES_PREBUILD_TOKEN`, fornecendo o valor do token que já criou e copiou. Para obter mais informações, confira "[Como gerenciar segredos criptografados do repositório e da organização para o {% data variables.product.prodname_github_codespaces %}](/codespaces/managing-codespaces-for-your-organization/managing-encrypted-secrets-for-your-repository-and-organization-for-github-codespaces#adding-secrets-for-a-repository)".

O {% data variables.product.pat_generic %} será usado para todos os próximos pré-buids criados para o repositório. Ao contrário de outros segredos do repositório do {% data variables.product.prodname_codespaces %}, o segredo `CODESPACES_PREBUILD_TOKEN` é usado apenas para pré-builds e não estará disponível para uso em codespaces criados por meio do seu repositório.

## Leitura adicional

- "[Como configurar pré-builds](/codespaces/prebuilding-your-codespaces/configuring-prebuilds)"
- "[Solução de problemas de pré-builds](/codespaces/troubleshooting/troubleshooting-prebuilds)"
