---
title: Resolver conflitos de migração ou configurar mapeamentos personalizados
intro: 'Antes de importar os dados de migração, você pode fazer correções para resolver conflitos, renomear registros recebidos ou mapear os registros recebidos para registros existentes.'
redirect_from:
  - /enterprise/admin/migrations/resolving-migration-conflicts-or-setting-up-custom-mappings
versions:
  enterprise-server: '*'
---

É possível usar as etapas a seguir para resolver conflitos ou adicionar mapeamentos personalizados à sua migração.

### Resolver conflitos

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

### Adicionar mapeamentos personalizados

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

### Aplicar dados de migração modificados

1. Depois de fazer as alterações, use o comando [`scp`](https://linuxacademy.com/blog/linux/ssh-and-scp-howto-tips-tricks#scp) para aplicar seu arquivo  *conflicts.csv* modificado (ou qualquer outro csv de mapeamento no formato correto) à instância de destino:

    ```shell
    $ scp -P 122 ~/Desktop/conflicts.csv admin@<em>hostname</em>:/home/admin/
    ```

2. Remapeie os dados de migração usando o comando `ghe-migrator map`, passando pelo caminho do seu arquivo csv modificado e do GUID de Migração:

    ```shell
    $ ghe-migrator map -i conflicts.csv  -g <em>MIGRATION_GUID</em>
    ```

3. Se o comando `ghe-migrator map -i conflicts.csv  -g MIGRATION_GUID` ainda reportar conflitos, execute o processo de resolução de conflitos de migração novamente.
