---
title: Exportar dados de migração da sua empresa
intro: 'Para alterar as plataformas ou mover de uma instância de teste para uma instância de produção você pode exportar os dados de migração de uma instância do {% data variables.product.prodname_ghe_server %} preparando a instância, bloqueando os repositórios e gerando um arquivo de migração.'
redirect_from:
  - /enterprise/admin/guides/migrations/exporting-migration-data-from-github-enterprise/
  - /enterprise/admin/migrations/exporting-migration-data-from-github-enterprise-server
  - /enterprise/admin/migrations/preparing-the-github-enterprise-server-source-instance
  - /enterprise/admin/migrations/exporting-the-github-enterprise-server-source-repositories
  - /enterprise/admin/guides/migrations/preparing-the-github-enterprise-source-instance/
  - /enterprise/admin/guides/migrations/exporting-the-github-enterprise-source-repositories/
  - /enterprise/admin/user-management/exporting-migration-data-from-your-enterprise
versions:
  enterprise-server: '*'
---

### Preparar a instância de origem de {% data variables.product.prodname_ghe_server %}

1. Verifique se você é administrador do site na origem do {% data variables.product.prodname_ghe_server %}. A melhor maneira de fazer isso é verificar se você consegue fazer [SSH na instância](/enterprise/admin/guides/installation/accessing-the-administrative-shell-ssh/).

2. {% data reusables.enterprise_migrations.token-generation %} na instância de origem do {% data variables.product.prodname_ghe_server %}.

{% data reusables.enterprise_migrations.make-a-list %}

### Exportar os repositórios de origem de {% data variables.product.prodname_ghe_server %}

{% data reusables.enterprise_migrations.locking-repositories %}

{% data reusables.enterprise_installation.ssh-into-instance %}
2. Para preparar a exportação de um repositório, use o comando `ghe-migrator add` com a URL do repositório:
    * Se você estiver bloqueando o repositório, adicione `--lock` ao comando. Se estiver executando um teste, não será necessário incluir `--lock`.
      ```shell
      $ ghe-migrator add https://<em>hostname</em>/<em>username</em>/<em>reponame</em> --lock
      ```
    * Você pode excluir anexos de arquivos adicionando `--exclude_attachments` ao comando. {% data reusables.enterprise_migrations.exclude-file-attachments %}
    * Para preparar a exportação de vários repositórios de uma só vez, crie um arquivo de texto listando cada URL do repositório em uma linha separada e execute o comando `ghe-migrator add` com o sinalizador `-i` e o caminho para o seu arquivo de texto.
      ```shell
      $ ghe-migrator add -i <em>PATH</em>/<em>TO</em>/<em>YOUR</em>/<em>REPOSITORY_URLS</em>.txt
      ```

3. Quando solicitado, informe seu nome de usuário do {% data variables.product.prodname_ghe_server %}:
  ```shell
  Insira o nome de usuário autorizado para a migração: admin
  ```
4. Quando o token de acesso pessoal for solicitado, informe o token de acesso que você criou na seção "[Preparar a instância de origem do {% data variables.product.prodname_ghe_server %}](#preparing-the-github-enterprise-server-source-instance)":
  ```shell
  Insira o token de acesso pessoal:  **************
  ```
5. Após a conclusão do `ghe-migrator add`, ele imprimirá o "GUID de Migração" exclusivo gerado para identificar a exportação e a lista dos recursos adicionados à exportação. Você usará o GUID de Migração gerado nas etapas subsequentes `ghe-migrator add` e `ghe-migrator export` para informar que o `ghe-migrator` deve continuar operando na mesma exportação.
  ```shell
  > 101 models added to export
  > Migration GUID: <em>example-migration-guid</em>
  > Number of records in this migration:
  > users                        |  5
  > organizations                |  1
  > repositories                 |  1
  > teams                        |  3
  > protected_branches           |  1
  > pull_request_reviews         |  1
  > milestones                   |  1
  > issues                       |  3
  > pull_requests                |  5
  > pull_request_review_comments |  4
  > commit_comments              |  2
  > issue_comments               | 10
  > issue_events                 | 63
  > releases                     |  3
  > attachments                  |  4
  > projects                     |  2
  ```
  Sempre que você adicionar um novo repositório com o GUID de Migração atual, ele atualizará a exportação atual. Se você executar `ghe-migrator add` novamente sem GUID de Migração, ele vai iniciar uma nova exportação e gerar um novo GUID de Migração. **Não reutilize o GUID de Migração gerado durante uma exportação quando você começar a preparar a migração para importar**.

3. Se você bloqueou o repositório de origem, é possível usar o comando `ghe-migrator target_url` para personalizar uma mensagem de bloqueio na página de repositório que vincula ao novo local do repositório. Informe a URL do repositório de origem, a URL do repositório de destino e o GUID de Migração da Etapa 5:

  ```shell
  $ ghe-migrator target_url https://<em>hostname</em>/<em>username</em>/<em>reponame</em> https://<em>target_hostname</em>/<em>target_username</em>/<em>target_reponame</em> -g <em>MIGRATION_GUID</em>
  ```

6. Para adicionar mais repositórios à mesma exportação, use o comando `ghe-migrator add` com o sinalizador `-g`. Informe a nova URL do repositório e o GUID de Migração da Etapa 5:
  ```shell
  $ ghe-migrator add https://<em>hostname</em>/<em>username</em>/<em>other_reponame</em> -g <em>MIGRATION_GUID</em> --lock
  ```
7. Quando terminar de adicionar os repositórios, gere o arquivo de migração usando o comando `ghe-migrator export` com o sinalizador `-g` e o GUID de Migração da Etapa 5:
    ```shell
    $ ghe-migrator export -g <em>MIGRATION_GUID</em>
    > Archive saved to: /data/github/current/tmp/<em>MIGRATION_GUID</em>.tar.gz
    ```
    * {% data reusables.enterprise_migrations.specify-staging-path %}

8. Fechar a conexão com {% data variables.product.product_location_enterprise %}:
  ```shell
  $ exit
  > logout
  > Connection to <em>hostname</em> closed.
  ```
9. Copie o arquivo de migração para o seu computador usando o comando [`scp`](https://linuxacademy.com/blog/linux/ssh-and-scp-howto-tips-tricks#scp). O arquivo terá o nome do GUID de Migração:
  ```shell
  $ scp -P 122 admin@<em>hostname</em>:/data/github/current/tmp/<em>MIGRATION_GUID</em>.tar.gz ~/Desktop
  ```
{% data reusables.enterprise_migrations.ready-to-import-migrations %}
