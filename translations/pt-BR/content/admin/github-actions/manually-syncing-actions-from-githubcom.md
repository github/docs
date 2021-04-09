---
title: Sincronização manual de ações do GitHub.com
intro: 'Para usuários que precisam acessar ações a partir de {% data variables.product.prodname_dotcom_the_website %}, você pode sincronizar ações específicas para sua instância do {% data variables.product.prodname_ghe_server %}.'
redirect_from:
  - /enterprise/admin/github-actions/manually-syncing-actions-from-githubcom
versions:
  enterprise-server: '>=2.22'
topics:
  - enterprise
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

{% data reusables.actions.enterprise-no-internet-actions %}

A abordagem recomendada de habilitar o acesso a ações a partir de {% data variables.product.prodname_dotcom_the_website %} é permitir o acesso automático para todas as ações. Você pode fazer isso usando {% data variables.product.prodname_github_connect %} para integrar {% data variables.product.prodname_ghe_server %} a {% data variables.product.prodname_ghe_cloud %}. Para obter mais informações, consulte "[Habilitar acesso automático a ações de {% data variables.product.prodname_dotcom_the_website %} usando {% data variables.product.prodname_github_connect %}](/enterprise/admin/github-actions/enabling-automatic-access-to-githubcom-actions-using-github-connect)".

No entanto, se você quer ter um controle mais rigoroso sobre quais as ações permitidas na sua empresa, você pode seguir esse guia para usar a ferramenta de código aberto de {% data variables.product.company_short %}de [`actions-sync`](https://github.com/actions/actions-sync) para sincronizar repositórios de ações individuais de {% data variables.product.prodname_dotcom_the_website %} com sua instância corporativa.

### Sobre a ferramenta `actions-sync`

A ferramenta `actions-sync` deve ser executada em uma máquina que pode acessar a API de {% data variables.product.prodname_dotcom_the_website %} e sua API da instância do {% data variables.product.prodname_ghe_server %}. A máquina não precisa estar conectada a ambos ao mesmo tempo.

Se sua máquina tiver acesso aos dois sistemas ao mesmo tempo, você poderá fazer a sincronização com um único comando de `actions-sync`. Se você só puder acessar um sistema de cada vez, pode usar os comandos `actions-sync pull` e `push`.

A ferramenta `actions-sync` só pode fazer download de ações de {% data variables.product.prodname_dotcom_the_website %} armazenadas em repositórios públicos.

### Pré-requisitos

* Antes de usar a ferramenta `actions-sync`, você deve garantir que todas as organizações de destino já existam na instância corporativa. O exemplo a seguir demonstra como sincronizar ações com uma organização denominada `synced-actions` em uma instância corporativa. Para obter mais informações, consulte "[Criar uma nova organização do zero](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch)".
* Você deve criar um token de acesso pessoal (PAT) na instância corporativa que pode criar e gravar em repositórios nas organizações de destino. Para mais informação, consulte "[Criando um token de acesso pessoal](/github/authenticating-to-github/creating-a-personal-access-token)."
* If you want to sync the bundled actions in the `actions` organization on {% data variables.product.product_location %}, you must be an owner of the `actions` organization.

  {% note %}

  **Note:** By default, even site administrators are not owners of the bundled `actions` organization.

  {% endnote %}

  Site administrators can use the `ghe-org-admin-promote` command in the administrative shell to promote a user to be an owner of the bundled `actions` organization. For more information, see "[Accessing the administrative shell (SSH)](/admin/configuration/accessing-the-administrative-shell-ssh)" and "[`ghe-org-admin-promote`](/admin/configuration/command-line-utilities#ghe-org-admin-promote)."

  ```shell
  ghe-org-admin-promote -u <em>USERNAME</em> -o actions
  ```

### Exemplo: Usando a ferramenta de `actions-sync`

Este exemplo demonstra o uso da ferramenta de `actions-sync` para sincronizar uma ação individual do {% data variables.product.prodname_dotcom_the_website %} com uma instância corporativa.

{% note %}

**Observação:** Este exemplo usa o comando `actions-sync`, que exige acesso simultâneo à API do {% data variables.product.prodname_dotcom_the_website %} e à API da instância do {% data variables.product.prodname_ghe_server %} a partir da sua máquina. Se você só puder acessar um sistema de cada vez, pode usar os comandos `actions-sync pull` e `push`. Para obter mais informações, consulte o README de [`actions-sync`](https://github.com/actions/actions-sync#not-connected-instances).

{% endnote %}

1. Faça o download e extraia as últimas versões [`actions-sync`](https://github.com/actions/actions-sync/releases) para o sistema operacional da sua máquina.
1. Crie um diretório para armazenar arquivos de cache para a ferramenta.
1. Execute o comando `actions-sync sync`:

   ```shell
   ./actions-sync sync \
     --cache-dir "cache" \
     --destination-token "aabbccddeeffgg" \
     --destination-url "https://my-ghes-instance" \
     --repo-name "docker/build-push-action:synced-actions/docker-build-push-action"
   ```

   O comando acima usa os seguintes argumentos:

   * `--cache-dir`: O diretório de cache na máquina que está executando o comando.
   * `--destination-token`: Um token de acesso pessoal para a instância empresarial de destino.
   * `--destination-url`: A URL da instância empresarial de destino.
   * `--repo-name`: O repositório da ação a ser sincronizado. Ele aceita o formato de `owner/repository:destination_owner/destination_repository`.

     * O exemplo acima sincroniza o repositório [`docker/build-push-action`](https://github.com/docker/build-push-action) com o repositório `synced-actions/docker-build-push-action` na instância de destino de {% data variables.product.prodname_ghe_server %}. Você deve criar a organização denominada `synced-actions` na instância da empresa antes de executar o comando acima.
     * Se você omitir `:destination_owner/destination_repository`, a ferramenta usará o proprietário original e o nome do repositório para a instância corporativa. Antes de executar o comando, você deve criar uma nova organização na sua instância que corresponde ao nome do proprietário da ação. Considere usar uma organização central para armazenar as ações sincronizadas na sua instância, já que isso significa que você não precisará criar várias novas organizações se sincronizar ações de diferentes proprietários.
     * Você pode sincronizar várias ações substituindo o parâmetro `--repo-name` por `--repo-name-list` ou `--repo-name-list-file`. Para obter mais informações, consulte o README de [`actions-sync`](https://github.com/actions/actions-sync#actions-sync).
1. Depois que o repositório de ação é criada na instância corporativa, as pessoas da sua empresa podem usar o repositório de destino para fazer referência à ação nos fluxos de trabalho. Para o exemplo da ação mostrado acima:

   ```yaml
   uses: synced-actions/docker-build-push-action@v1
   ```

   Para obter mais informações, consulte "[Sintaxe do fluxo de trabalho para o GitHub Actions](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepsuses)".
