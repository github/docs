---
title: Exportar dados de migração do GitHub.com
intro: 'Você pode exportar dados de migração de uma organização no {% data variables.product.prodname_dotcom_the_website %} usando a API para selecionar repositórios a serem migrados e, em seguida, gerando um arquivo de migração que pode ser importado em uma instância do {% data variables.product.prodname_ghe_server %}.'
redirect_from:
  - /enterprise/admin/guides/migrations/exporting-migration-data-from-github-com
  - /enterprise/admin/migrations/exporting-migration-data-from-githubcom
  - /enterprise/admin/migrations/preparing-the-githubcom-source-organization
  - /enterprise/admin/migrations/exporting-the-githubcom-organizations-repositories
  - /enterprise/admin/guides/migrations/preparing-the-github-com-source-organization
  - /enterprise/admin/guides/migrations/exporting-the-github-com-organization-s-repositories
  - /enterprise/admin/user-management/exporting-migration-data-from-githubcom
  - /admin/user-management/exporting-migration-data-from-githubcom
versions:
  ghes: '*'
type: how_to
topics:
  - API
  - Enterprise
  - Migration
shortTitle: Export data from GitHub.com
ms.openlocfilehash: 07c74c41312fe5818390bba206072bf95e5bc00c
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/09/2022
ms.locfileid: '147717866'
---
## Preparar a organização de origem em {% data variables.product.prodname_dotcom %}

1. Verifique se você tem [permissões de proprietário](/articles/permission-levels-for-an-organization/) nos repositórios da organização de origem.

2. {% data reusables.enterprise_migrations.token-generation %} no {% data variables.product.prodname_dotcom_the_website %}.

{% data reusables.enterprise_migrations.make-a-list %}

## Exportar repositórios da organização

{% data reusables.enterprise_migrations.fork-persistence %}

Para exportar dados de repositório por meio do {% data variables.product.prodname_dotcom_the_website %}, use [a API de Migrações](/free-pro-team@latest/rest/migrations).

No momento, a API de Migrações está em período de exibição. Ou seja, os pontos de extremidade e os parâmetros podem mudar no futuro.
## Gerar arquivos de migração

{% data reusables.enterprise_migrations.locking-repositories %}

1. Informe os integrantes da organização que você fará uma migração. Dependendo do número de repositórios exportados, a exportação pode levar vários minutos. A migração completa (com importação) pode levar horas. Portanto, é recomendável fazer uma avaliação para determinar a duração do processo completo. Para obter mais informações, confira "[Sobre as migrações](/enterprise/admin/migrations/about-migrations#types-of-migrations)".

2. Inicie uma migração enviando uma solicitação `POST` ao [ponto de extremidade da migração](/free-pro-team@latest/rest/migrations#start-an-organization-migration). Você precisará de:
    * Token de acesso para autenticação;
    * Uma [lista dos repositórios](/free-pro-team@latest/rest/repos#list-organization-repositories) que você deseja migrar:
      ```shell
      curl -H "Authorization: Bearer <em>GITHUB_ACCESS_TOKEN</em>" \
      -X POST \
      -H "Accept: application/vnd.github+json" \
      -d'{"lock_repositories":true,"repositories":["<em>orgname</em>/<em>reponame</em>", "<em>orgname</em>/<em>reponame</em>"]}' \
      https://api.github.com/orgs/<em>orgname</em>/migrations
      ```
    *  Caso deseje bloquear os repositórios antes de migrá-los, defina `lock_repositories` como `true`. Fazer isso é altamente recomendável.
    * Você pode excluir anexos de arquivo transmitindo `exclude_attachments: true` para o ponto de extremidade. {% data reusables.enterprise_migrations.exclude-file-attachments %} O tamanho do arquivo final precisa ter menos de 20 GB.

  Essa solicitação retorna uma `id` exclusiva que representa a migração. Você precisará dele em ações subsequentes que envolvam a API de Migrações.

3. Envie uma solicitação `GET` ao [ponto de extremidade de status da migração](/free-pro-team@latest/rest/migrations#get-an-organization-migration-status) para buscar o status de uma migração. Você precisará de:
    * Token de acesso para autenticação;
    * A `id` exclusiva da migração:
      ```shell
      curl -H "Authorization: Bearer <em>GITHUB_ACCESS_TOKEN</em>" \
      -H "Accept: application/vnd.github+json" \
      https://api.github.com/orgs/<em>orgname</em>/migrations/<em>id</em>
      ```

  Os estados das migrações são os seguintes:
    * `pending`, que significa que a migração ainda não foi iniciada.
    * `exporting`, que significa que a migração está em andamento.
    * `exported`, que significa que a migração foi concluída com êxito.
    * `failed`, que significa que a migração falhou.

4. Depois que a migração for exportada, baixe o arquivo de migração enviando uma solicitação `GET` ao [ponto de extremidade de download da migração](/free-pro-team@latest/rest/migrations#download-an-organization-migration-archive). Você precisará de:
    * Token de acesso para autenticação;
    * A `id` exclusiva da migração:
      ```shell
      curl -H "Authorization: Bearer <em>GITHUB_ACCESS_TOKEN</em>" \
      -H "Accept: application/vnd.github+json" \
      -L -o migration_archive.tar.gz \
      https://api.github.com/orgs/<em>orgname</em>/migrations/<em>id</em>/archive
      ```

5. O arquivo de migração é excluído automaticamente após sete dias. Se preferir excluí-lo mais cedo, envie uma solicitação `DELETE` ao [ponto de extremidade de exclusão do arquivo de migração](/free-pro-team@latest/rest/migrations#delete-an-organization-migration-archive). Você precisará de:
    * Token de acesso para autenticação;
    * A `id` exclusiva da migração:
      ```shell
      curl -H "Authorization: Bearer <em>GITHUB_ACCESS_TOKEN</em>" \
      -X DELETE \
      -H "Accept: application/vnd.github+json" \
      https://api.github.com/orgs/<em>orgname</em>/migrations/<em>id</em>/archive
      ```
{% data reusables.enterprise_migrations.ready-to-import-migrations %}
