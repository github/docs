---
title: Revisar dados de migração
intro: 'Depois de cada etapa da migração, você pode revisar o estado dos dados migrados. Será possível garantir que os registros estejam sendo mapeados ou renomeados corretamente, obter as novas URLs dos registros após a etapa de importação e listar todos os registros que não foram migrados.'
redirect_from:
  - '/enterprise/{{ currentVersion }}/admin/guides/migrations/reviewing-the-imported-data/'
  - /enterprise/admin/migrations/reviewing-migration-data
versions:
  enterprise-server: '*'
---

Por padrão, o `ghe-migrator audit` devolve todos os registros. Também é possível filtrar os registros por:

  * Tipos de registro;
  * Estado de registro.

Os tipos de registro correspondem aos encontrados nos [dados migrados](/enterprise/admin/guides/migrations/about-migrations/#migrated-data).

### Filtros por tipo de registro

| Tipo de registro                              | Nome do filtro                |
| --------------------------------------------- | ----------------------------- |
| Usuários                                      | `user`                        |
| Organizações                                  | `organization`                |
| Repositórios                                  | `repository`                  |
| Equipes                                       | `equipe`                      |
| Marcos                                        | `milestone`                   |
| Quadros de projeto                            | `project`                     |
| Problemas                                     | `issue`                       |
| Comentários dos problemas                     | `issue_comment`               |
| Pull requests                                 | `pull_request`                |
| Revisões de pull request                      | `pull_request_review`         |
| Comentários de commit                         | `commit_comment`              |
| Comentários das revisões de pull request      | `pull_request_review_comment` |
| Versões                                       | `release`                     |
| Ações feitas em problemas ou em pull requests | `issue_event`                 |
| Branches protegidos                           | `protected_branch`            |

### Filtros por estado de registro

| Estado de registro | Descrição                               |
| ------------------ | --------------------------------------- |
| `export`           | O registro será exportado.              |
| `import`           | O registro será importado.              |
| `map`              | O registro será mapeado.                |
| `rename`           | O registro será renomeado.              |
| `merge`            | O registro passará por merge.           |
| `exported`         | O registro foi exportado com êxito.     |
| `imported`         | O registro foi importado com êxito.     |
| `mapped`           | O registro foi mapeado com êxito.       |
| `renamed`          | O registro foi renomeado com êxito.     |
| `merged`           | O registro passou por merge com êxito.  |
| `failed_export`    | Houve falha ao exportar o registro.     |
| `failed_import`    | Houve falha ao importar o registro.     |
| `failed_map`       | Houve falha ao mapear o registro.       |
| `failed_rename`    | Houve falha ao renomear o registro.     |
| `failed_merge`     | Houve falha ao fazer merge no registro. |

### Filtrar registros auditados

Com o comando `ghe-migrator audit`, é possível filtrar com base no tipo de registro usando o sinalizador `-m`. Da mesma forma, você pode filtrar no estado de importação usando o sinalizador `-s`. O comando fica parecido com o seguinte:

```shell
$ ghe-migrator audit -m <em>RECORD_TYPE</em> -s <em>STATE</em> -g <em>MIGRATION_GUID</em>
```

Por exemplo, para visualizar todas as organizações e equipes importadas com êxito, você digitaria:
```shell
$ ghe-migrator audit -m organization,team -s mapped,renamed -g <em>MIGRATION_GUID</em>
> model_name,source_url,target_url,state
> organization,https://gh.source/octo-org/,https://ghe.target/octo-org/,renamed
```

**É altamente recomendável fazer auditoria em todas as importações que tiveram falha.** Para fazer isso, insira:
```shell
$ ghe-migrator audit -s failed_import,failed_map,failed_rename,failed_merge -g <em>MIGRATION_GUID</em>
> model_name,source_url,target_url,state
> user,https://gh.source/octocat,https://gh.target/octocat,failed
> repository,https://gh.source/octo-org/octo-project,https://ghe.target/octo-org/octo-project,failed
```

Em caso de problemas com falhas na importação, entre em contato com o {% data variables.contact.contact_ent_support %}.
