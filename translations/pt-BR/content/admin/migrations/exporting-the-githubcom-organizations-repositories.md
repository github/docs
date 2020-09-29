---
title: Exportar os repositórios da organização do GitHub.com
intro: 'Usando a API de Migrações, é possível exportar os repositórios de uma organização. Após a exportação dos repositórios, você vai baixar o arquivo de migração usado para o processo de importação.'
redirect_from:
  - /enterprise/admin/guides/migrations/exporting-the-github-com-organization-s-repositories
  - /enterprise/admin/migrations/exporting-the-githubcom-organizations-repositories
versions:
  enterprise-server: '*'
---

{% data reusables.enterprise_migrations.fork-persistence %}

Para exportar os dados do repositório do {% data variables.product.prodname_dotcom_the_website %}, use a <a href="/rest/reference/migrations" class="dotcom-only"> API de Migrações</a>.

No momento, a API de Migrações está em período de exibição. Ou seja, os pontos de extremidade e os parâmetros podem mudar no futuro. Para acessar a API de Migrações, você deve informar um [tipo de mídia](/v3/media) personalizado no cabeçalho `Accept`: `application/vnd.github.wyandotte-preview+json`. Os exemplos abaixo incluem o tipo de mídia personalizado.

### Gerar arquivos de migração

{% data reusables.enterprise_migrations.locking-repositories %}

1. Informe os integrantes da organização que você fará uma migração. Dependendo do número de repositórios exportados, a exportação pode levar vários minutos. A migração completa (com importação) pode levar horas. Portanto, é recomendável fazer uma avaliação para determinar a duração do processo completo. Para obter mais informações, consulte "[Sobre migrações](/enterprise/admin/migrations/about-migrations#types-of-migrations)".

2. Comece a migração fazendo `POST` no <a href="/rest/reference/migrations#start-an-organization-migration" class="dotcom-only">ponto de extremidade da migração</a>. Você precisará do seguinte:
    * Token de acesso para autenticação;
    * Uma [lista de repositórios](/v3/repos/#list-organization-repositories) que você pretende migrar:
      ```shell
      curl -H "Authorization: token <em>GITHUB_ACCESS_TOKEN</em>" -X POST \
      -H "Accept: application/vnd.github.wyandotte-preview+json" \
      -d'{"lock_repositories":true,"repositories":["<em>orgname</em>/<em>reponame</em>", "<em>orgname</em>/<em>reponame</em>"]}' \
      https://api.github.com/orgs/<em>orgname</em>/migrations
      ```
    *  Se quiser bloquear os repositórios antes da migração, verifique se `lock_repositories` está definido como `true`. Fazer isso é altamente recomendável.
    * Você pode excluir anexos de arquivos adicionando `exclude_attachments: true` ao ponto de extremidade. {% data reusables.enterprise_migrations.exclude-file-attachments %} O tamanho do arquivo final deve ser menor do que 20 GB.

  A solicitação retorna um `id ` exclusivo que representa a migração. Você precisará dele em ações subsequentes que envolvam a API de Migrações.

3. Envie uma solicitação `GET` para o <a href="/rest/reference/migrations#get-an-organization-migration-status" class="dotcom-only">ponto de extremidade de status da migração</a> para fazer fetch do status da migração. Você precisará do seguinte:
    * Token de acesso para autenticação;
    * `id` exclusivo da migração.
      ```shell
      curl -H "Authorization: token <em>GITHUB_ACCESS_TOKEN</em>" \
      -H "Accept: application/vnd.github.wyandotte-preview+json" \
      https://api.github.com/orgs/<em>orgname</em>/migrations/<em>id</em>
      ```

  Os estados das migrações são os seguintes:
    * `pending`, a migração ainda não começou;
    * `exporting`, a migração está em andamento;
    * `exported`, a migração foi concluída com êxito;
    * `failed`, houve falha na migração.

4. Depois de exportar a migração, baixe o aquivo de migração enviando uma solicitação `GET` para o <a href="/rest/reference/migrations#download-an-organization-migration-archive" class="dotcom-only">ponto de extremidade de download da migração</a>. Você precisará do seguinte:
    * Token de acesso para autenticação;
    * `id` exclusivo da migração.
      ```shell
      curl -H "Accept: application/vnd.github.wyandotte-preview+json" \
      -u <em>GITHUB_USERNAME</em>:<em>GITHUB_ACCESS_TOKEN</em> \
      -L -o migration_archive.tar.gz \
      https://api.github.com/orgs/<em>orgname</em>/migrations/<em>id</em>/archive
      ```

5. O arquivo de migração é excluído automaticamente após sete dias. Para excluí-lo antes, você pode enviar a solicitação `DELETE` para o <a href="/rest/reference/migrations#delete-an-organization-migration-archive" class="dotcom-only">ponto de extremidade de exclusão do arquivo de migração</a>. Você precisará do seguinte:
    * Token de acesso para autenticação;
    * `id` exclusivo da migração.
      ```shell
      curl -H "Authorization: token <em>GITHUB_ACCESS_TOKEN</em>" -X DELETE \
      -H "Accept: application/vnd.github.wyandotte-preview+json" \
      https://api.github.com/orgs/<em>orgname</em>/migrations/<em>id</em>/archive
      ```
{% data reusables.enterprise_migrations.ready-to-import-migrations %}
