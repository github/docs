---
title: Autenticação automática de token
intro: '{% data variables.product.prodname_dotcom %} fornece um token que você pode usar para se autenticar em nome de {% data variables.product.prodname_actions %}.'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/authenticating-with-the-github_token
  - /actions/automating-your-workflow-with-github-actions/authenticating-with-the-github_token
  - /actions/configuring-and-managing-workflows/authenticating-with-the-github_token
  - /actions/reference/authentication-in-a-workflow
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Automatic token authentication
ms.openlocfilehash: eacf395921d9d4be949657bf421cf1b9bee6908b
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107034'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Sobre o segredo `GITHUB_TOKEN`

No início de cada execução de fluxo de trabalho, o {% data variables.product.prodname_dotcom %} cria automaticamente um segredo `GITHUB_TOKEN` exclusivo a ser usado no seu fluxo de trabalho. Use o `GITHUB_TOKEN` para se autenticar em uma execução de fluxo de trabalho.

Ao habilitar {% data variables.product.prodname_actions %}, {% data variables.product.prodname_dotcom %} instala um {% data variables.product.prodname_github_app %} no seu repositório. O segredo `GITHUB_TOKEN` é um token de acesso de instalação do {% data variables.product.prodname_github_app %}. Você pode usar o token de acesso de instalação para autenticar em nome do {% data variables.product.prodname_github_app %} instalado no seu repositório. As permissões do token são restritas ao repositório do fluxo de trabalho. Para obter mais informações, confira "[Permissões para o `GITHUB_TOKEN`](#permissions-for-the-github_token)".

Antes de iniciar cada trabalho, {% data variables.product.prodname_dotcom %} busca um token de acesso de instalação para o trabalho. {% data reusables.actions.github-token-expiration %}

O token também está disponível no contexto `github.token`. Para obter mais informações, confira "[Contextos](/actions/learn-github-actions/contexts#github-context)".

## Como usar o `GITHUB_TOKEN` em um fluxo de trabalho

Use o `GITHUB_TOKEN` usando a sintaxe padrão para referenciar segredos: {%raw%}`${{ secrets.GITHUB_TOKEN }}`{% endraw %}. Entre os exemplos de uso do token `GITHUB_TOKEN` estão a transmissão do token como uma entrada para uma ação ou o uso dele para fazer uma solicitação de API autenticada do {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}.

{% note %}

**Importante:** uma ação pode acessar o `GITHUB_TOKEN` por meio do contexto `github.token`, mesmo que o fluxo de trabalho não transmita `GITHUB_TOKEN` explicitamente para a ação. Como uma boa prática de segurança, você deve sempre garantir que as ações tenham apenas o acesso mínimo necessário limitando as permissões concedidas ao `GITHUB_TOKEN`. Para obter mais informações, confira "[Permissões para o `GITHUB_TOKEN`](#permissions-for-the-github_token)".

{% endnote %}

{% data reusables.actions.actions-do-not-trigger-workflows %}

### Exemplo 1: transmissão do `GITHUB_TOKEN` como uma entrada

{% data reusables.actions.github_token-input-example %}

### Exemplo 2: chamando a API REST

Use o `GITHUB_TOKEN` para fazer chamadas à API autenticadas. Este exemplo de fluxo de trabalho cria um problema usando a API REST de {% data variables.product.prodname_dotcom %}:

```yaml
name: Create issue on commit

on: [ push ]

jobs:
  create_issue:
    runs-on: ubuntu-latest
    permissions:
      issues: write 
    steps:
      - name: Create issue using REST API
        run: |
          curl --request POST \
          --url {% data variables.product.api_url_code %}/repos/${% raw %}{{ github.repository }}{% endraw %}/issues \
          --header 'authorization: Bearer ${% raw %}{{ secrets.GITHUB_TOKEN }}{% endraw %}' \
          --header 'content-type: application/json' \
          --data '{
            "title": "Automated issue for commit: ${% raw %}{{ github.sha }}{% endraw %}",
            "body": "This issue was automatically created by the GitHub Action workflow **${% raw %}{{ github.workflow }}{% endraw %}**. \n\n The commit hash was: _${% raw %}{{ github.sha }}{% endraw %}_."
            }' \
          --fail
```

## Permissões para o `GITHUB_TOKEN`

Para obter informações sobre os pontos de extremidade de API que podem ser acessados pelos {% data variables.product.prodname_github_apps %} com cada permissão, confira "[Permissões do {% data variables.product.prodname_github_app %}](/rest/reference/permissions-required-for-github-apps)".

A tabela a seguir mostra as permissões concedidas para a função `GITHUB_TOKEN` por padrão. As pessoas com permissões de administrador para uma empresa, organização ou repositório de {% ifversion not ghes %}{% else %}organização ou repositório{% endif %} pode definir as permissões padrão como permissivas ou restritas. Para obter informações sobre como definir as permissões padrão do `GITHUB_TOKEN` para sua empresa, sua organização ou seu repositório, confira "[Como impor políticas para o {% data variables.product.prodname_actions %} na sua empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-github-actions-policies-for-your-enterprise#enforcing-a-policy-for-workflow-permissions-in-your-enterprise)", "[Como desabilitar ou limitar o {% data variables.product.prodname_actions %} para sua organização](/github/setting-up-and-managing-organizations-and-teams/disabling-or-limiting-github-actions-for-your-organization#setting-the-permissions-of-the-github_token-for-your-organization)" ou "[Como gerenciar configurações do {% data variables.product.prodname_actions %} para um repositório](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#setting-the-permissions-of-the-github_token-for-your-repository)".

| Escopo         | Acesso padrão<br>(permissivo) | Acesso padrão<br>(restrito) | Acesso máximo<br>por repositórios com forks |
|---------------|-----------------------------|-----------------------------|--------------------------------|
| Ações       | leitura/gravação  | nenhum | leitura |
| verificações        | leitura/gravação  | nenhum | leitura |
| conteúdos      | leitura/gravação  | leitura | leitura |
| deployments   | leitura/gravação  | nenhum | leitura |{% ifversion fpt or ghec %}
| id-token      | nenhum        | nenhum | leitura |{% endif %}
| issues        | leitura/gravação  | nenhum | leitura |
| metadata      | leitura        | leitura | leitura |
| pacotes      | leitura/gravação  | nenhum | leitura |
| páginas         | leitura/gravação  | nenhum | leitura |
| pull-requests | leitura/gravação  | nenhum | leitura |
| repository-projects | leitura/gravação | nenhum | leitura |
| security-events     | leitura/gravação | nenhum | leitura |
| status      | leitura/gravação  | nenhum | leitura |

{% data reusables.actions.workflow-runs-dependabot-note %}

### Como modificar as permissões para o `GITHUB_TOKEN`

Você pode modificar as permissões para `GITHUB_TOKEN` em arquivos de fluxo de trabalho individuais. Se as permissões padrão para o `GITHUB_TOKEN` são restritivas, talvez seja preciso elevar as permissões para permitir que algumas ações e alguns comandos sejam executados com sucesso. Se as permissões padrão são permissivas, você pode editar o arquivo de fluxo de trabalho para remover algumas permissões do `GITHUB_TOKEN`. Como uma boa prática de segurança, você deve conceder ao `GITHUB_TOKEN` o acesso menos necessário.

Veja as permissões que o `GITHUB_TOKEN` tinha Em um trabalho específico na seção "Configurar trabalho" do log de execução do fluxo de trabalho. Para obter mais informações, confira "[Como usar logs de execução de fluxo de trabalho](/actions/managing-workflow-runs/using-workflow-run-logs)".

Use a chave `permissions` nos arquivos de fluxo de trabalho para modificar as permissões do `GITHUB_TOKEN` em um fluxo de trabalho inteiro ou em trabalhos individuais. Isso permite que você configure as permissões mínimas necessárias para um fluxo de trabalho ou trabalho. Quando a chave `permissions` é usada, todas as permissões não especificadas são definidas como sem acesso, com exceção do escopo `metadata`, que sempre obtém acesso de leitura.

{% data reusables.actions.forked-write-permission %}

Os dois exemplos de fluxos de trabalho já apresentados neste artigo mostram a chave `permissions` sendo usada no nível do fluxo de trabalho e no nível do trabalho. No [Exemplo 1,](#example-1-passing-the-github_token-as-an-input) as duas permissões são especificadas para todo o fluxo de trabalho. No [Exemplo 2](#example-2-calling-the-rest-api), o acesso de gravação é permitido para um escopo em um só trabalho.

Para obter detalhes completos da chave `permissions`, confira "[Sintaxe de fluxo de trabalho do {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#permissions)".

#### Como as permissões são calculadas para um trabalho de fluxo de trabalho

Inicialmente, as permissões para o `GITHUB_TOKEN` são definidas como a configuração padrão para a empresa, a organização ou o repositório. Se o padrão for definido como permissões restritas em qualquer um desses níveis, isso irá aplicar-se aos repositórios relevantes. Por exemplo, Se você escolher o padrão restrito no nível da organização, todos os repositórios nessa organização usarão as permissões restritas como padrão. As permissões serão, então, ajustadas com base em qualquer configuração dentro do arquivo de fluxo de trabalho, primeiro no nível de fluxo de trabalho e, em seguida, no nível de trabalho. Por fim, se o fluxo de trabalho foi disparado por uma solicitação de pull de um repositório com fork e a configuração **Enviar tokens de gravação para fluxos de trabalho por meio de solicitações de pull** não está selecionada, as permissões são ajustadas para alterar as permissões de gravação para somente leitura.

### Conceder permissões adicionais

Caso você precise ter um token que exija permissões que não estejam disponíveis no `GITHUB_TOKEN`, crie um {% data variables.product.pat_generic %} e defina-o como um segredo no repositório:

1. Use ou crie um token com as permissões adequadas para o repositório. Para obter mais informações, confira "[Como criar um {% data variables.product.pat_generic %}](/github/authenticating-to-github/creating-a-personal-access-token)".
1. Adicione o token como um segredo no repositório do fluxo de trabalho e referencie-o usando a sintaxe {%raw%}`${{ secrets.SECRET_NAME }}`{% endraw %}. Para obter mais informações, confira "[Como criar e usar segredos criptografados](/github/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)".

### Leitura adicional

- "[Recursos da API REST](/rest/overview/resources-in-the-rest-api#rate-limiting)"
