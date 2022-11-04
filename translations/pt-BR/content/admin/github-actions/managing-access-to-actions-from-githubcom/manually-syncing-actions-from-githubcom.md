---
title: Sincronizar ações do GitHub.com manualmente
intro: 'Para usuários que precisam acessar as ações a partir de {% data variables.product.prodname_dotcom_the_website %}, você pode sincronizar ações específicas para sua empresa.'
redirect_from:
  - /enterprise/admin/github-actions/manually-syncing-actions-from-githubcom
  - /admin/github-actions/manually-syncing-actions-from-githubcom
versions:
  ghes: '*'
  ghae: '*'
type: tutorial
topics:
  - Actions
  - Enterprise
shortTitle: Manually sync actions
ms.openlocfilehash: f4fe3aaecfa805b2a5966c0b2c41399529c2040e
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107266'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

{% data reusables.actions.enterprise-no-internet-actions %}

{% ifversion ghes or ghae %}

A abordagem recomendada de habilitar o acesso a ações a partir de {% data variables.product.prodname_dotcom_the_website %} é permitir o acesso automático para todas as ações. Faça isso usando o {% data variables.product.prodname_github_connect %} para integrar o {% data variables.product.product_name %} ao {% data variables.product.prodname_ghe_cloud %}. Para obter mais informações, confira "[Como habilitar o acesso automático às ações do {% data variables.product.prodname_dotcom_the_website %} usando o {% data variables.product.prodname_github_connect %}](/enterprise/admin/github-actions/enabling-automatic-access-to-githubcom-actions-using-github-connect)".

No entanto, se você quiser um controle mais rigoroso sobre quais as ações são permitidas na sua empresa, você{% else %}Você{% endif %} poderá seguir este guia para usar a ferramenta de código aberto [`actions-sync`](https://github.com/actions/actions-sync) do {% data variables.product.company_short %} para sincronizar repositórios de ações individuais do {% data variables.product.prodname_dotcom_the_website %} para a sua empresa.

## Sobre a ferramenta `actions-sync`

A ferramenta `actions-sync` deve ser executada em um computador que possa acessar a API do {% data variables.product.prodname_dotcom_the_website %} e a API da instância do {% data variables.product.product_name %}. A máquina não precisa estar conectada a ambos ao mesmo tempo.

Se o computador tiver acesso a ambos os sistemas ao mesmo tempo, você poderá fazer a sincronização com um único comando `actions-sync sync`. Se você só puder acessar um sistema por vez, use os comandos `actions-sync pull` e `push`.

A ferramenta `actions-sync` só pode baixar ações de {% data variables.product.prodname_dotcom_the_website %} armazenados em repositórios públicos.

{% note %}

**Nota:** a ferramenta `actions-sync` destina-se ao uso em sistemas em que o {% data variables.product.prodname_github_connect %} não está habilitado. Se você executar a ferramenta em um sistema com {% data variables.product.prodname_github_connect %} habilitado, poderá ver o erro `The repository <repo_name> has been retired and cannot be reused`. Isso indica que um fluxo de trabalho usou essa ação diretamente no {% data variables.product.prodname_dotcom_the_website %} e o namespace está desativado em {% data variables.location.product_location %}. Para obter mais informações, confira "[Desativação automática de namespaces para as ações acessadas no {% data variables.product.prodname_dotcom_the_website%}](/admin/github-actions/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect#automatic-retirement-of-namespaces-for-actions-accessed-on-githubcom)". 

{% endnote %}

## Pré-requisitos

* Antes de usar a ferramenta `actions-sync`, você deve garantir que todas as organizações de destino já existam em sua empresa. O exemplo a seguir demonstra como sincronizar ações com uma organização chamada `synced-actions`. Para obter mais informações, confira "[Como criar uma organização do zero](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch)".
* Você precisa criar um {% data variables.product.pat_generic %} na empresa que possa criar e gravar em repositórios nas organizações de destino. Para obter mais informações, confira "[Como criar um {% data variables.product.pat_generic %}](/github/authenticating-to-github/creating-a-personal-access-token)".{% ifversion ghes %}
* Se você quiser sincronizar as ações empacotadas na organização `actions` com {% data variables.location.product_location %}, precisará ser proprietário da organização `actions`.

  {% note %}
  
  **Observação**: Por padrão, os administradores do site não são proprietários da organização `actions`empacotada.
  
  {% endnote %}

  Os administradores do site podem usar o comando `ghe-org-admin-promote` no shell administrativo para promover um usuário para ser um proprietário da organização empacotada `actions`. Para obter mais informações, confira "[Como acessar o shell administrativo (SSH)](/admin/configuration/accessing-the-administrative-shell-ssh)" e "[`ghe-org-admin-promote`](/admin/configuration/command-line-utilities#ghe-org-admin-promote)".

  ```shell
  ghe-org-admin-promote -u USERNAME -o actions
  ```{% endif %}

## Example: Using the `actions-sync` tool

This example demonstrates using the `actions-sync` tool to sync an individual action from {% data variables.product.prodname_dotcom_the_website %} to an enterprise instance.

{% note %}

**Note:** This example uses the `actions-sync sync` command, which requires concurrent access to both the {% data variables.product.prodname_dotcom_the_website %} API and your enterprise instance's API from your machine. If you can only access one system at a time, you can use the `actions-sync pull` and `push` commands. For more information, see the [`actions-sync` README](https://github.com/actions/actions-sync#not-connected-instances).

{% endnote %}

1. Download and extract the latest [`actions-sync` release](https://github.com/actions/actions-sync/releases) for your machine's operating system.
1. Create a directory to store cache files for the tool.
1. Run the `actions-sync sync` command:

   ```shell
   ./actions-sync sync \
     --cache-dir "cache" \
     --destination-token "aabbccddeeffgg" \
     --destination-url "https://my-ghes-instance" \
     --repo-name "actions/stale:synced-actions/actions-stale"
   ```

   O comando acima usa os seguintes argumentos:

   * `--cache-dir`: o diretório de cache no computador que executa o comando.
   * `--destination-token`: um {% data variables.product.pat_generic %} da instância corporativa de destino.
   * `--destination-url`: a URL da instância corporativa de destino.
   * `--repo-name`: o repositório de ação a ser sincronizado. Ele usa o formato de `owner/repository:destination_owner/destination_repository`.
     
     * O exemplo acima sincroniza o repositório [`actions/stale`](https://github.com/actions/stale) com o repositório `synced-actions/actions-stale` na instância da empresa de destino. Você deve criar a organização nomeada `synced-actions` em sua empresa antes de executar o comando acima.
     * Se você omitir `:destination_owner/destination_repository`, a ferramenta usará o nome original do proprietário e do repositório da sua empresa. Antes de executar o comando, você deve criar uma nova organização em sua empresa que corresponda ao nome da ação do proprietário. Considere usar uma organização central para armazenar as ações sincronizadas na sua empresa, uma vez que isso significa que você não precisará criar várias novas organizações se sincronizar ações de diferentes proprietários.
     * Você pode sincronizar várias ações substituindo o parâmetro `--repo-name` por `--repo-name-list` ou `--repo-name-list-file`. Para obter mais informações, veja o [README `actions-sync`](https://github.com/actions/actions-sync#actions-sync).
1. Depois que o repositório de ação for criado na sua empresa, as pessoas da sua empresa poderão usar o repositório de destino para fazer referência à ação nos fluxos de trabalho. Para o exemplo da ação mostrado acima:
   
   ```yaml
   uses: synced-actions/actions-stale@v1
   ```

   Para obter mais informações, confira "[Sintaxe de fluxo de trabalho do GitHub Actions](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepsuses)".
