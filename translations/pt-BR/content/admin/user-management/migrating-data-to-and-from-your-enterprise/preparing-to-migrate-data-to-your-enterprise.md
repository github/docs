---
title: Preparar-se para migrar dados para a sua empresa
intro: 'Após gerar um arquivo de migração, você poderá importar os dados para a sua instância de destino do {% data variables.product.prodname_ghe_server %}. Antes de aplicar as alterações permanentemente na instância de destino, será possível revisá-las para resolver possíveis conflitos.'
redirect_from:
  - /enterprise/admin/migrations/preparing-the-migrated-data-for-import-to-github-enterprise-server
  - /enterprise/admin/migrations/generating-a-list-of-migration-conflicts
  - /enterprise/admin/migrations/reviewing-migration-conflicts
  - /enterprise/admin/migrations/resolving-migration-conflicts-or-setting-up-custom-mappings
  - /enterprise/admin/guides/migrations/preparing-the-migrated-data-for-import-to-github-enterprise/
  - /enterprise/admin/user-management/preparing-to-migrate-data-to-your-enterprise
  - /admin/user-management/preparing-to-migrate-data-to-your-enterprise
versions:
  enterprise-server: '*'
type: how_to
topics:
  - Enterprise
  - Migration
---

### Preparar os dados migrados para importação para {% data variables.product.prodname_ghe_server %}

1. Usando o comando [`scp`](https://linuxacademy.com/blog/linux/ssh-and-scp-howto-tips-tricks#scp), copie o arquivo de migração gerado na organização ou instância de origem para o destino no {% data variables.product.prodname_ghe_server %}:

    ```shell
    $ scp -P 122 <em>/path/to/archive/MIGRATION_GUID.tar.gz</em> admin@<em>hostname</em>:/home/admin/
    ```

{% data reusables.enterprise_installation.ssh-into-target-instance %}

3. Use o comando `ghe-migrator prepare` para preparar o arquivo para importação na instância de destino e gerar um novo GUID de Migração para uso nas etapas subsequentes:

    ```shell
    ghe-migrator prepare /home/admin/<em>MIGRATION_GUID</em>.tar.gz
    ```

    * Para começar uma nova tentativa de importação, execute o comando `ghe-migrator` novamente e obtenha um novo GUID de Migração.
    * {% data reusables.enterprise_migrations.specify-staging-path %}

### Gerar uma lista de conflitos de migração

1. Usando o comando `ghe-migrator conflicts` com o GUID de migração, gere um arquivo *conflicts.csv*:
    ```shell
    $ ghe-migrator conflicts -g <em>MIGRATION_GUID</em> > conflicts.csv
    ```
    - Se nenhum conflito for relatado, você poderá importar os dados com segurança seguindo as etapas em "[Migrar dados para a sua empresa](/enterprise/admin/guides/migrations/applying-the-imported-data-on-github-enterprise-server/)".
2. Se houver conflitos, usando o comando [`scp`](https://linuxacademy.com/blog/linux/ssh-and-scp-howto-tips-tricks#scp), copie *conflicts.csv* para o seu computador local:
  ```shell
  $ scp -P 122 admin@<em>hostname</em>:conflicts.csv ~/Desktop
  ```
3. Continue em "[Resolver conflitos de migração ou configurar mapeamentos personalizados](#resolving-migration-conflicts-or-setting-up-custom-mappings)".

### Revisar conflitos de migração

1. Usando o editor de texto ou um [software de planilha compatível com CSV](https://en.wikipedia.org/wiki/Comma-separated_values#Application_support), abra o arquivo *conflicts.csv*.
2. Seguindo os exemplos e tabelas de referência abaixo, revise o arquivo *conflicts.csv* para garantir a execução das ações adequadas na importação.

O arquivo *conflicts.csv* contém um *mapa de migração* de conflitos e ações recomendadas. O mapa de migração lista quais dados estão sendo migrados da origem e como eles serão aplicados ao destino.

| `nome_modelo` | `url_origem`                                           | `url_destino`                                          | `ação_recomendada` |
| ------------- | ------------------------------------------------------ | ------------------------------------------------------ | ------------------ |
| `usuário`     | `https://exemplo-gh.source/octocat`                    | `https://exemplo-gh.target/octocat`                    | `map`              |
| `organização` | `https://exemplo-gh.source/octo-org`                   | `https://exemplo-gh.target/octo-org`                   | `map`              |
| `repositório` | `https://exemplo-gh.source/octo-org/widgets`           | `https://exemplo-gh.target/octo-org/widgets`           | `rename`           |
| `equipe`      | `https://exemplo-gh.source/orgs/octo-org/teams/admins` | `https://exemplo-gh.target/orgs/octo-org/teams/admins` | `merge`            |

Cada linha do arquivo *conflicts.csv* mostra as seguintes informações:

| Nome               | Descrição                                                                 |
| ------------------ | ------------------------------------------------------------------------- |
| `nome_modelo`      | Tipo de dado que está sendo alterado.                                     |
| `url_origem`       | URL de origem dos dados.                                                  |
| `url_destino`      | URL esperada de destino dos dados.                                        |
| `ação_recomendada` | Ação preferencial que o `ghe-migrator` vai executar ao importar os dados. |

#### Mapeamentos possíveis para cada tipo de registro

O `ghe-migrator` pode executar várias ações de mapeamento diferentes quando transfere os dados:

| `Ação`          | Descrição                                                                             | Modelos aplicáveis                   |
| --------------- | ------------------------------------------------------------------------------------- | ------------------------------------ |
| `import`        | (padrão) Os dados da origem são importados para o destino.                            | Todos os tipos de registro           |
| `map`           | Os dados da origem são substituídos pelos dados existentes no destino.                | Usuários, organizações, repositórios |
| `rename`        | Os dados da origem são renomeados e copiados para o destino.                          | Usuários, organizações, repositórios |
| `map_or_rename` | Se houver destino, mapeie para o destino. Se não houver, renomeie o modelo importado. | Usuários                             |
| `merge`         | Os dados da origem são combinados com os dados existentes no destino.                 | Equipes                              |

**É altamente recomendável que você revise o arquivo *conflicts.csv* e utilize [`ghe-migror audit`](/enterprise/admin/guides/migrations/reviewing-migration-data) para garantir que as ações adequadas estão sendo tomadas.** Se tudo estiver em ordem, você poderá continuar a "[Migrar os dados para a sua empresa](/enterprise/admin/guides/migrations/applying-the-imported-data-on-github-enterprise-server)".


### Resolver conflitos de migração ou configurar mapeamentos personalizados

Se achar que o `ghe-migrator` fará uma alteração incorreta, você poderá fazer correções alterando os dados em *conflicts.csv*. Você pode alterar qualquer linha no arquivo *conflicts.csv*.

Por exemplo, digamos que você perceba que o usuário `octocat` da origem está sendo mapeado para `octocat` no destino:

| `nome_modelo` | `url_origem`                        | `url_destino`                       | `ação_recomendada` |
| ------------- | ----------------------------------- | ----------------------------------- | ------------------ |
| `usuário`     | `https://exemplo-gh.source/octocat` | `https://exemplo-gh.target/octocat` | `map`              |

Você pode optar por mapear o usuário para outro usuário no destino. Suponha que você saiba que `octocat` deveria ser `monalisa` no destino. É possível alterar a coluna `url_destino` no arquivo *conflicts.csv* para se referir a `monalisa`:

| `nome_modelo` | `url_origem`                        | `url_destino`                        | `ação_recomendada` |
| ------------- | ----------------------------------- | ------------------------------------ | ------------------ |
| `usuário`     | `https://exemplo-gh.source/octocat` | `https://exemplo-gh.target/monalisa` | `map`              |

Em outra situação, se você quiser renomear o repositório `octo-org/widgets` como `octo-org/amazing-widgets` na instância de destino, altere `url_destino` para `octo-org/amazing-widgets` e `ação_recomendada` para `rename`:

| `nome_modelo` | `url_origem`                                 | `url_destino`                                        | `ação_recomendada` |
| ------------- | -------------------------------------------- | ---------------------------------------------------- | ------------------ |
| `repositório` | `https://exemplo-gh.source/octo-org/widgets` | `https://exemplo-gh.target/octo-org/amazing-widgets` | `rename`           |

#### Adicionar mapeamentos personalizados

Uma situação comum durante as migrações é o cenário em que os usuários migrados têm nomes de usuários diferentes no destino e na origem.

Com uma lista de nomes de usuários da origem e uma lista de nomes de usuários do destino, você pode criar um arquivo CSV com mapeamentos personalizados e aplicá-la para garantir que o nome de usuário e o conteúdo de cada usuário sejam atribuídos corretamente no fim da migração.

Você pode gerar um arquivo em formato CSV dos usuários que estão sendo migrados para aplicar mapeamentos personalizados usando o comando [`ghe-migrator audit`](/enterprise/admin/guides/migrations/reviewing-migration-data):

```shell
$ ghe-migrator audit -m user -g <em>MIGRATION_GUID</em> > users.csv
```

Agora você pode editar esse CSV, inserir a nova URL para cada usuário que pretende mapear ou renomear e atualizar a quarta coluna para aplicar `map` ou `rename`.

Por exemplo, para renomear o usuário `octocat` como `monalisa` no destino `https://example-gh.target`, você deveria criar uma linha com o seguinte conteúdo:

| `nome_modelo` | `url_origem`                        | `url_destino`                        | `estado` |
| ------------- | ----------------------------------- | ------------------------------------ | -------- |
| `usuário`     | `https://exemplo-gh.source/octocat` | `https://exemplo-gh.target/monalisa` | `rename` |

O mesmo processo pode ser usado para criar mapeamentos em cada registro compatível com mapeamentos personalizados. Para obter mais informações, consulte a nossa [tabela com as possibilidades de mapeamento em registros](/enterprise/admin/guides/migrations/reviewing-migration-conflicts#possible-mappings-for-each-record-type).

#### Aplicar dados de migração modificados

1. Depois de fazer as alterações, use o comando [`scp`](https://linuxacademy.com/blog/linux/ssh-and-scp-howto-tips-tricks#scp) para aplicar o seu *conflicts.csv* modificado (ou qualquer outro arquivo de mapeamento *.csv* no formato correto) para a instância de destino:

    ```shell
    $ scp -P 122 ~/Desktop/conflicts.csv admin@<em>hostname</em>:/home/admin/
    ```

2. Mapeie novamente os dados de migração usando o comando `mapa do ghe-migrator`, passando pelo caminho para o seu arquivo *.csv* modificado e pelo GUID de Migração:

    ```shell
    $ ghe-migrator map -i conflicts.csv  -g <em>MIGRATION_GUID</em>
    ```

3. Se o comando `ghe-migrator map -i conflicts.csv  -g MIGRATION_GUID` ainda reportar conflitos, execute o processo de resolução de conflitos de migração novamente.
