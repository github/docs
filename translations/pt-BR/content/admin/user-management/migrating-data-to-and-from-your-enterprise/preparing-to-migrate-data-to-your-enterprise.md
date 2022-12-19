---
title: Preparar-se para migrar dados para a sua empresa
intro: 'Após gerar um arquivo de migração, você poderá importar os dados para a sua instância de destino do {% data variables.product.prodname_ghe_server %}. Antes de aplicar as alterações permanentemente na instância de destino, será possível revisá-las para resolver possíveis conflitos.'
redirect_from:
  - /enterprise/admin/migrations/preparing-the-migrated-data-for-import-to-github-enterprise-server
  - /enterprise/admin/migrations/generating-a-list-of-migration-conflicts
  - /enterprise/admin/migrations/reviewing-migration-conflicts
  - /enterprise/admin/migrations/resolving-migration-conflicts-or-setting-up-custom-mappings
  - /enterprise/admin/guides/migrations/preparing-the-migrated-data-for-import-to-github-enterprise
  - /enterprise/admin/user-management/preparing-to-migrate-data-to-your-enterprise
  - /admin/user-management/preparing-to-migrate-data-to-your-enterprise
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Migration
shortTitle: Prepare to migrate data
ms.openlocfilehash: 7b552f2bc0d79eb1a70a09d61b8384983b0908fc
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145094847'
---
## Preparar os dados migrados para importação para {% data variables.product.prodname_ghe_server %}

1. Usando o comando [`scp`](https://acloudguru.com/blog/engineering/ssh-and-scp-howto-tips-tricks#scp), copie o arquivo de migração gerado da sua instância de origem ou da organização para o destino do {% data variables.product.prodname_ghe_server %}:

    ```shell
    $ scp -P 122 <em>/path/to/archive/MIGRATION_GUID.tar.gz</em> admin@<em>hostname</em>:/home/admin/
    ```

{% data reusables.enterprise_installation.ssh-into-target-instance %}

3. Use o comando `ghe-migrator prepare` para preparar o arquivo para importação na instância de destino e gerar um novo GUID de Migração para você usar nas etapas seguintes:

    ```shell
    ghe-migrator prepare /home/admin/<em>MIGRATION_GUID</em>.tar.gz
    ```

    * Para iniciar uma nova tentativa de importação, execute `ghe-migrator prepare` novamente e obtenha um novo GUID de Migração.
    * {% data reusables.enterprise_migrations.specify-staging-path %}

## Gerar uma lista de conflitos de migração

1. Usando o comando `ghe-migrator conflicts` com o GUID de Migração, gere um arquivo *conflicts.csv*:
    ```shell
    $ ghe-migrator conflicts -g <em>MIGRATION_GUID</em> > conflicts.csv
    ```
    - Se nenhum conflito for relatado, você poderá importar os dados com segurança seguindo as etapas descritas em "[Como migrar dados para sua empresa](/enterprise/admin/guides/migrations/applying-the-imported-data-on-github-enterprise-server/)".
2. Se houver conflitos, usando o comando [`scp`](https://acloudguru.com/blog/engineering/ssh-and-scp-howto-tips-tricks#scp), copie *conflicts.csv* para o computador local:
  ```shell
  $ scp -P 122 admin@<em>hostname</em>:conflicts.csv ~/Desktop
  ```
3. Prossiga para "[Como resolver conflitos de migração ou configurar mapeamentos personalizados](#resolving-migration-conflicts-or-setting-up-custom-mappings)".

## Revisar conflitos de migração

1. Usando um editor de texto ou um [software de planilha compatível com CSV](https://en.wikipedia.org/wiki/Comma-separated_values#Application_support), abra *conflicts.csv*.
2. Com as diretrizes dos exemplos e das tabelas de referência abaixo, revise o arquivo *conflicts.csv* para garantir que as ações adequadas sejam tomadas após a importação.

O arquivo *conflicts.csv* contém um mapa de *migração* de conflitos e ações recomendadas. O mapa de migração lista quais dados estão sendo migrados da origem e como eles serão aplicados ao destino.

| `model_name`   | `source_url`   | `target_url` | `recommended_action` |
|--------------|--------------|------------|--------------------|
| `user`         | `https://example-gh.source/octocat` | `https://example-gh.target/octocat` | `map` |
| `organization` | `https://example-gh.source/octo-org` | `https://example-gh.target/octo-org` | `map` |
| `repository`   | `https://example-gh.source/octo-org/widgets` | `https://example-gh.target/octo-org/widgets` | `rename` |
| `team`         | `https://example-gh.source/orgs/octo-org/teams/admins` | `https://example-gh.target/orgs/octo-org/teams/admins` | `merge` |

Cada linha do *conflicts.csv* fornece as seguintes informações:

|    Nome      | Descrição   |
|--------------|---------------|
| `model_name` | Tipo de dado que está sendo alterado. |
| `source_url` | URL de origem dos dados. |
| `target_url` | URL esperada de destino dos dados.  |
| `recommended_action` | A ação preferencial `ghe-migrator` será tomada ao importar os dados.  |

### Mapeamentos possíveis para cada tipo de registro

Há várias ações de mapeamento diferentes que o `ghe-migrator` pode executar ao transferir os dados:

| `action`      | Descrição | Modelos aplicáveis |
|------------------------|-------------|-------------------|
| `import`      | (padrão) Os dados da origem são importados para o destino. | Todos os tipos de registro
| `map`         | Os dados da origem são substituídos pelos dados existentes no destino. | Usuários, organizações, repositórios
| `rename`      | Os dados da origem são renomeados e copiados para o destino. | Usuários, organizações, repositórios
| `map_or_rename` | Se houver destino, mapeie para o destino. Se não houver, renomeie o modelo importado. | Usuários
| `merge`       | Os dados da origem são combinados com os dados existentes no destino. | Teams

**Sugerimos que você revise o arquivo *conflicts.csv* e use [`ghe-migrator audit`](/enterprise/admin/guides/migrations/reviewing-migration-data) para garantir que as ações adequadas sejam executadas.** Se tudo estiver bem, prossiga para "[Como migrar dados para sua empresa](/enterprise/admin/guides/migrations/applying-the-imported-data-on-github-enterprise-server)".


## Resolver conflitos de migração ou configurar mapeamentos personalizados

Se você acredita que o `ghe-migrator` executará uma alteração incorreta, faça correções alterando os dados em *conflicts.csv*. Faça alterações em uma das linhas do *conflicts.csv*.

Por exemplo, digamos que você observe que o usuário `octocat` da origem está sendo mapeado para `octocat` no destino:

| `model_name`   | `source_url`   | `target_url` | `recommended_action` |
|--------------|--------------|------------|--------------------|
| `user`         | `https://example-gh.source/octocat` | `https://example-gh.target/octocat` | `map`

Você pode optar por mapear o usuário para outro usuário no destino. Suponha que você saiba que `octocat` deve realmente ser `monalisa` no destino. Altere a coluna `target_url` em *conflicts.csv* para que ela se refira a `monalisa`:

| `model_name`   | `source_url`   | `target_url` | `recommended_action` |
|--------------|--------------|------------|--------------------|
| `user`         | `https://example-gh.source/octocat` | `https://example-gh.target/monalisa` | `map`

Como outro exemplo, caso deseje renomear o repositório `octo-org/widgets` como `octo-org/amazing-widgets` na instância de destino, altere a `target_url` para `octo-org/amazing-widgets` e a `recommend_action` para `rename`:

| `model_name`   | `source_url`   | `target_url` | `recommended_action` |
|--------------|--------------|------------|--------------------|
| `repository`   | `https://example-gh.source/octo-org/widgets` | `https://example-gh.target/octo-org/amazing-widgets` | `rename`   |

### Adicionar mapeamentos personalizados

Uma situação comum durante as migrações é o cenário em que os usuários migrados têm nomes de usuários diferentes no destino e na origem.

Com uma lista de nomes de usuários da origem e uma lista de nomes de usuários do destino, você pode criar um arquivo CSV com mapeamentos personalizados e aplicá-la para garantir que o nome de usuário e o conteúdo de cada usuário sejam atribuídos corretamente no fim da migração.

Você pode gerar rapidamente um CSV de usuários que estão sendo migrados no formato CSV necessário para aplicar os mapeamentos personalizados usando o comando [`ghe-migrator audit`](/enterprise/admin/guides/migrations/reviewing-migration-data):

```shell
$ ghe-migrator audit -m user -g <em>MIGRATION_GUID</em> > users.csv
```

Agora, você pode editar esse CSV e inserir a nova URL para cada usuário que você deseja mapear ou renomear e atualizar a quarta coluna para ter `map` ou `rename`, conforme apropriado.

Por exemplo, para renomear o usuário `octocat` como `monalisa` no destino `https://example-gh.target`, crie uma linha com o seguinte conteúdo:

| `model_name`   | `source_url`   | `target_url` | `state` |
|--------------|--------------|------------|--------------------|
| `user`         | `https://example-gh.source/octocat` | `https://example-gh.target/monalisa` | `rename`

O mesmo processo pode ser usado para criar mapeamentos em cada registro compatível com mapeamentos personalizados. Para obter mais informações, confira [nossa tabela sobre os possíveis mapeamentos para registros](/enterprise/admin/guides/migrations/reviewing-migration-conflicts#possible-mappings-for-each-record-type).

### Aplicar dados de migração modificados

1. Depois de fazer alterações, use o comando [`scp`](https://acloudguru.com/blog/engineering/ssh-and-scp-howto-tips-tricks#scp) para aplicar o *conflicts.csv* modificado (ou qualquer outro arquivo *.csv* de mapeamento no formato correto) à instância de destino:

    ```shell
    $ scp -P 122 ~/Desktop/conflicts.csv admin@<em>hostname</em>:/home/admin/
    ```

2. Mapeie novamente os dados de migração usando o comando `ghe-migrator map`, transmitindo o caminho para o arquivo *.csv* modificado e o GUID de Migração:

    ```shell
    $ ghe-migrator map -i conflicts.csv  -g <em>MIGRATION_GUID</em>
    ```

3. Se o comando `ghe-migrator map -i conflicts.csv  -g MIGRATION_GUID` relatar que ainda há conflitos, execute o processo de resolução de conflitos de migração novamente.
