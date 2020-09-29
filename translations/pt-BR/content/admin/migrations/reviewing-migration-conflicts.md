---
title: Revisar conflitos de migração
intro: 'Depois de gerar uma lista de conflitos de migração, revise-os para garantir que você concorda com as ações padrão que o `ghe-migrator` vai executar para resolvê-los.'
redirect_from:
  - /enterprise/admin/migrations/reviewing-migration-conflicts
versions:
  enterprise-server: '*'
---

1. Usando o editor de texto ou um [software de planilha compatível com CSV](https://en.wikipedia.org/wiki/Comma-separated_values#Application_support), abra o arquivo *conflicts.csv*.
2. Seguindo os exemplos e tabelas de referência abaixo, revise o arquivo *conflicts.csv* para garantir a execução das ações adequadas na importação.

O arquivo *conflicts.csv* contém um *mapa de migração* de conflitos e ações recomendadas. O mapa de migração lista quais dados estão sendo migrados da origem e como eles serão aplicados ao destino.

| `nome_modelo`  | `url_origem`                                           | `url_destino`                                          | `ação_recomendada` |
| -------------- | ------------------------------------------------------ | ------------------------------------------------------ | ------------------ |
| `usuário`      | `https://exemplo-gh.source/octocat`                    | `https://exemplo-gh.target/octocat`                    | `map`              |
| `organization` | `https://exemplo-gh.source/octo-org`                   | `https://exemplo-gh.target/octo-org`                   | `map`              |
| `repositório`  | `https://exemplo-gh.source/octo-org/widgets`           | `https://exemplo-gh.target/octo-org/widgets`           | `rename`           |
| `equipe`       | `https://exemplo-gh.source/orgs/octo-org/teams/admins` | `https://exemplo-gh.target/orgs/octo-org/teams/admins` | `merge`            |

Cada linha do arquivo *conflicts.csv* mostra as seguintes informações:

| Nome                 | Descrição                                                                 |
| -------------------- | ------------------------------------------------------------------------- |
| `model_name`         | Tipo de dado que está sendo alterado.                                     |
| `source_url`         | URL de origem dos dados.                                                  |
| `target_url`         | URL esperada de destino dos dados.                                        |
| `recommended_action` | Ação preferencial que o `ghe-migrator` vai executar ao importar os dados. |

### Mapeamentos possíveis para cada tipo de registro

O `ghe-migrator` pode executar várias ações de mapeamento diferentes quando transfere os dados:

| `Ação`          | Descrição                                                                             | Modelos aplicáveis                   |
| --------------- | ------------------------------------------------------------------------------------- | ------------------------------------ |
| `import`        | (padrão) Os dados da origem são importados para o destino.                            | Todos os tipos de registro           |
| `map`           | Os dados da origem são substituídos pelos dados existentes no destino.                | Usuários, organizações, repositórios |
| `rename`        | Os dados da origem são renomeados e copiados para o destino.                          | Usuários, organizações, repositórios |
| `map_or_rename` | Se houver destino, mapeie para o destino. Se não houver, renomeie o modelo importado. | Usuários                             |
| `merge`         | Os dados da origem são combinados com os dados existentes no destino.                 | Equipes                              |

**É altamente recomendável que você revise o arquivo *conflicts.csv* e faça a [`auditoria do ghe-migrator`](/enterprise/admin/guides/migrations/reviewing-migration-data) para confirmar a execução das ações adequadas.** Se tudo estiver bem, você poderá continuar para a seção "[Aplicar os dados importados no {% data variables.product.prodname_ghe_server %}](/enterprise/admin/guides/migrations/applying-the-imported-data-on-github-enterprise-server)".
