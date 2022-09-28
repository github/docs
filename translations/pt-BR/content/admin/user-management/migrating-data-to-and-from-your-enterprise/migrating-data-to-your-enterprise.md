---
title: Migrar dados para a sua empresa
intro: 'Após gerar um arquivo de migração, você poderá importar os dados para a sua instância de destino do {% data variables.product.prodname_ghe_server %}. Antes de aplicar as alterações permanentemente na instância de destino, será possível revisá-las para resolver possíveis conflitos.'
redirect_from:
  - /enterprise/admin/guides/migrations/importing-migration-data-to-github-enterprise
  - /enterprise/admin/migrations/applying-the-imported-data-on-github-enterprise-server
  - /enterprise/admin/migrations/reviewing-migration-data
  - /enterprise/admin/migrations/completing-the-import-on-github-enterprise-server
  - /enterprise/admin/guides/migrations/applying-the-imported-data-on-github-enterprise
  - /enterprise/admin/guides/migrations/reviewing-the-imported-data
  - /enterprise/admin/guides/migrations/completing-the-import-on-github-enterprise
  - /enterprise/admin/guides/migrations/importing-migration-data-to-github-enterprise-server
  - /enterprise/admin/user-management/migrating-data-to-your-enterprise
  - /admin/user-management/migrating-data-to-your-enterprise
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Migration
shortTitle: Import to your enterprise
ms.openlocfilehash: 19bd9e1e8cee072e8a8f00861e2d8f876b5b8450
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/09/2022
ms.locfileid: '147717666'
---
## Aplicar os dados importados em {% data variables.product.prodname_ghe_server %}

Antes de migrar dados para sua empresa, você deve preparar os dados e resolver quaisquer conflitos. Para obter mais informações, confira "[Como se preparar para migrar dados para sua empresa](/admin/user-management/preparing-to-migrate-data-to-your-enterprise)".

Depois de preparar os dados e os conflitos de resolução, você poderá aplicar os dados importados em {% data variables.product.product_name %}.

{% data reusables.enterprise_installation.ssh-into-target-instance %}

2. Usando o comando `ghe-migrator import`, inicie o processo de importação. Você precisará de:
    * Seu Migration GUID. Para obter mais informações, confira "[Como se preparar para migrar dados para sua empresa](/admin/user-management/preparing-to-migrate-data-to-your-enterprise)".
    * Seu token de acesso pessoal para autenticação. O token de acesso pessoal que você usa é apenas para autenticação como administrador do site e não requer nenhum escopo específico. Para obter mais informações, confira "[Como criar um token de acesso pessoal](/github/authenticating-to-github/creating-a-personal-access-token)".

    ```shell
    $ ghe-migrator import /home/admin/<em>MIGRATION_GUID</em>.tar.gz -g <em>MIGRATION_GUID</em> -u <em>username</em> -p <em>TOKEN</em>

    > Starting GitHub::Migrator
    > Import 100% complete /
    ```

    * {% data reusables.enterprise_migrations.specify-staging-path %}

## Revisar dados de migração

Por padrão, `ghe-migrator audit` retorna todos os registros. Também é possível filtrar os registros por:

  * Tipos de registro;
  * Estado de registro.

Os tipos de registros correspondem aos encontrados nos [dados migrados](/enterprise/admin/guides/migrations/about-migrations/#migrated-data).

## Filtros por tipo de registro

|      Tipo de registro      | Nome do filtro  |
|-----------------------|--------|
| Usuários           | `user`
| Organizações   | `organization`
| Repositórios    | `repository`
| Teams           | `team`
| Marcos      | `milestone`
| Quadros de projeto  | `project`
| Problemas          | `issue`
| Comentários dos problemas  | `issue_comment`
| Solicitações de pull   | `pull_request`
| Revisões de pull request | `pull_request_review`
| Comentários de commit | `commit_comment`
| Comentários das revisões de pull request | `pull_request_review_comment`
| Versões | `release`
| Ações feitas em problemas ou em pull requests | `issue_event`
| Branches protegidos | `protected_branch`

## Filtros por estado de registro

| Estado de registro    | Descrição    |
|-----------------|----------------|
| `export`        | O registro será exportado. |
| `import`        | O registro será importado. |
| `map`           | O registro será mapeado. |
| `rename`        | O registro será renomeado. |
| `merge`         | O registro passará por merge. |
| `exported`      | O registro foi exportado com êxito. |
| `imported`      | O registro foi importado com êxito. |
| `mapped`        | O registro foi mapeado com êxito. |
| `renamed`       | O registro foi renomeado com êxito. |
| `merged`        | O registro passou por merge com êxito. |
| `failed_export` | Houve falha ao exportar o registro. |
| `failed_import` | Houve falha ao importar o registro. |
| `failed_map`    | Houve falha ao mapear o registro. |
| `failed_rename` | Houve falha ao renomear o registro. |
| `failed_merge`  | Houve falha ao fazer merge no registro. |

## Filtrar registros auditados

Com o comando `ghe-migrator audit`, você pode filtrar os registros com base no tipo usando o sinalizador `-m`. Da mesma forma, você pode filtrar o estado de importação usando o sinalizador `-s`. O comando se parece com o seguinte:

```shell
$ ghe-migrator audit -m <em>RECORD_TYPE</em> -s <em>STATE</em> -g <em>MIGRATION_GUID</em>
```

Por exemplo, para visualizar todas as organizações e equipes importadas com êxito, você digitaria:
```shell
$ ghe-migrator audit -m organization,team -s mapped,renamed -g <em>MIGRATION_GUID</em>
> model_name,source_url,target_url,state
> organization,https://gh.source/octo-org/,https://ghe.target/octo-org/,renamed
```

**Recomendamos fortemente auditar todas as importações com falha.** Para fazer isso, você vai inserir:
```shell
$ ghe-migrator audit -s failed_import,failed_map,failed_rename,failed_merge -g <em>MIGRATION_GUID</em>
> model_name,source_url,target_url,state
> user,https://gh.source/octocat,https://gh.target/octocat,failed
> repository,https://gh.source/octo-org/octo-project,https://ghe.target/octo-org/octo-project,failed
```

Em caso de problemas com falhas na importação, entre em contato com o {% data variables.contact.contact_ent_support %}.

## Concluir a importação em {% data variables.product.prodname_ghe_server %}

Depois que sua migração for aplicada à sua instância de destino e você tiver revisado a migração, você desbloqueará os repositórios e os excluirá da fonte. Antes de excluir os dados da origem, é recomendável aguardar cerca de duas semanas para garantir o funcionamento adequado de todos os procedimentos.

## Desbloquear repositórios na instância de destino

{% data reusables.enterprise_installation.ssh-into-instance %} {% data reusables.enterprise_migrations.unlocking-on-instances %}

## Desbloquear repositórios na origem

### Desbloquear repositórios de uma organização no {% data variables.product.prodname_dotcom_the_website %}

Para desbloquear os repositórios em uma organização do {% data variables.product.prodname_dotcom_the_website %}, você enviará uma solicitação `DELETE` para o [ponto de extremidade de desbloqueio da migração](/free-pro-team@latest/rest/migrations#unlock-an-organization-repository). Você precisará de:
  * Token de acesso para autenticação;
  * A `id` exclusiva da migração
  * Nome do repositório a ser desbloqueado.
```shell
curl -H "Authorization: Bearer <em>GITHUB_ACCESS_TOKEN</em>" -X DELETE \
  -H "Accept: application/vnd.github.wyandotte-preview+json" \
  https://api.github.com/orgs/<em>orgname</em>/migrations/<em>id</em>/repos/<em>repo_name</em>/lock
```

### Excluir repositórios de uma organização no {% data variables.product.prodname_dotcom_the_website %}

Depois de desbloquear os repositórios da organização do {% data variables.product.prodname_dotcom_the_website %}, você deve excluir todos os repositórios já migrados usando [o ponto de extremidade de exclusão do repositório](/rest/repos/#delete-a-repository). Você precisará do token de acesso para autenticação:
```shell
curl -H "Authorization: Bearer <em>GITHUB_ACCESS_TOKEN</em>" -X DELETE \
  https://api.github.com/repos/<em>orgname</em>/<em>repo_name</em>
```

### Desbloquear repositórios de uma instância do {% data variables.product.prodname_ghe_server %}

{% data reusables.enterprise_installation.ssh-into-instance %} {% data reusables.enterprise_migrations.unlocking-on-instances %}
