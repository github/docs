---
title: Sobre estatísticas do servidor
intro: 'Você pode usar {% data variables.product.prodname_server_statistics %} para analisar seus próprios dados agregados do {% data variables.product.prodname_ghe_server %} e nos ajudar a melhorar os produtos {% data variables.product.company_short %}.'
versions:
  feature: server-statistics
permissions: 'Enterprise owners can enable {% data variables.product.prodname_server_statistics %}.'
redirect_from:
  - /early-access/github/analyze-how-your-team-works-with-server-statistics/about-server-statistics
topics:
  - Enterprise
ms.openlocfilehash: c71cab38c096d5984a5136147b6dbc75e794c173
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147409320'
---
## Sobre os benefícios de {% data variables.product.prodname_server_statistics %}

As {% data variables.product.prodname_server_statistics %} podem ajudar você a prever as necessidades de sua organização, entender como sua equipe trabalha e mostrar o valor obtido do {% data variables.product.prodname_ghe_server %}.

Depois de habilitadas, as {% data variables.product.prodname_server_statistics %} coleta dados agregados sobre quanto determinados recursos estão sendo usados em sua instância ao longo do tempo. Ao contrário de outros pontos de extremidade da [API Admin Stats](/rest/reference/enterprise-admin#admin-stats), que só retornam dados do dia anterior, as {% data variables.product.prodname_server_statistics %} fornecem dados históricos de todas as métricas de {% data variables.product.prodname_server_statistics %} coletadas desde o dia em que você habilitou o recurso. Para obter mais informações, confira "[Como habilitar {% data variables.product.prodname_server_statistics %} para sua empresa](/admin/configuration/configuring-github-connect/enabling-server-statistics-for-your-enterprise)".

Ao habilitar {% data variables.product.prodname_server_statistics %}, você está ajudando a criar um {% data variables.product.prodname_dotcom %} melhor. Os dados agregados que você fornecerá nos fornecerão insights sobre como o {% data variables.product.prodname_dotcom %} adiciona valor aos nossos clientes. Essas informações permitem que {% data variables.product.company_short %} tome decisões melhores e mais informadas sobre produtos, beneficiando você.

## Sobre a segurança de dados

Respeitamos seus dados. Nunca transmitiremos dados do {% data variables.product.product_location %} a menos que você primeiro nos tenha dado permissão para fazê-lo.

Não coletamos dados pessoais. Também não coletamos nenhum conteúdo do {% data variables.product.company_short %}, como código, problemas, comentários ou conteúdo de solicitação de pull.

Somente proprietários da conta corporativa ou organização conectada ao {% data variables.product.prodname_ghe_cloud %} podem acessar os dados.

Somente determinadas métricas de agregação são coletadas em repositórios, problemas, solicitações de pull e outros recursos. Para ver a lista de métricas de agregação coletadas, confira "[Dados coletados de {% data variables.product.prodname_server_statistics %}](#server-statistics-data-collected)". 

As atualizações nas métricas coletadas ocorrerão em versões futuras do {% data variables.product.prodname_ghe_server %} e serão descritas nas [notas sobre a versão do {% data variables.product.prodname_ghe_server %}](/admin/release-notes). Além disso, atualizaremos este artigo com todas as atualizações de métricas.

Para uma melhor compreensão de como armazenamos e protegemos dados de {% data variables.product.prodname_server_statistics %} dados, confira "[Segurança do GitHub](https://github.com/security)".

### Sobre retenção e exclusão de dados

O {% data variables.product.company_short %} coleta dados de {% data variables.product.prodname_server_statistics %} enquanto sua licença do {% data variables.product.prodname_ghe_server %} estiver ativa e o recurso {% data variables.product.prodname_server_statistics %} habilitado.

Se você quiser excluir seus dados, poderá fazer isso entrando em contato com o Suporte do GitHub, seu representante de conta do {% data variables.product.prodname_dotcom %} ou seu Gerente de Sucesso do Cliente.  Geralmente, excluímos dados no período de tempo especificado em nossa política de privacidade. Para obter mais informações, confira [ declaração de privacidade do {% data variables.product.company_short %}](/free-pro-team@latest/site-policy/privacy-policies/github-privacy-statement#data-retention-and-deletion-of-data) na documentação do {% data variables.product.prodname_dotcom_the_website %}.

### Sobre a portabilidade de dados

Como proprietário da organização ou proprietário da empresa no {% data variables.product.prodname_ghe_cloud %}, você pode acessar {% data variables.product.prodname_server_statistics %} exportando os dados em um arquivo CSV ou JSON ou por meio da API REST de {% data variables.product.prodname_server_statistics %}. Para obter mais informações, confira "[Como solicitar {% data variables.product.prodname_server_statistics %} usando a API REST](/admin/monitoring-activity-in-your-enterprise/analyzing-how-your-team-works-with-server-statistics/requesting-server-statistics-using-the-rest-api)" ou "[Como exportar {% data variables.product.prodname_server_statistics %}](/admin/monitoring-activity-in-your-enterprise/analyzing-how-your-team-works-with-server-statistics/exporting-server-statistics)".

## Sobre desabilitar a coleta de dados

Você pode desabilitar o recurso {% data variables.product.prodname_server_statistics %} a qualquer momento. Para obter mais informações, confira "[Como habilitar {% data variables.product.prodname_server_statistics %} para sua empresa](/admin/configuration/configuring-github-connect/enabling-server-statistics-for-your-enterprise)".

## Dados coletados de {% data variables.product.prodname_server_statistics %}

Depois de habilitar {% data variables.product.prodname_server_statistics %}, as métricas serão coletadas por meio de um trabalho diário executado no {% data variables.product.product_location %}. As métricas de agregação são armazenadas em sua conta da organização ou da empresa no {% data variables.product.prodname_ghe_cloud %} e não são armazenadas no {% data variables.product.product_location %}.

As seguintes métricas de agregação serão coletadas e transmitidas diariamente e representam as contagens totais do dia:
  - `active_hooks`
  - `admin_users`
  - `closed_issues`
  - `closed_milestones`
  - `collection_date`
  - `disabled_orgs`
  - `dormancy_threshold`
  - `fork_repos`
  - `ghes_version`
  - `github_connect_features_enabled`
  - `inactive_hooks`
  - `mergeable_pulls`
  - `merged_pulls`
  - `open_issues`
  - `open_milestones`
  - `org_repos`
  - `private_gists`
  - `public_gists`
  - `root_repos`
  - `schema_version`
  - `server_id`
  - `suspended_users`
  - `total_commit_comments`
  - `total_dormant_users`
  - `total_gist_comments`
  - `total_gists`
  - `total_hooks`
  - `total_issues`
  - `total_issue_comments`
  - `total_milestones`
  - `total_repos`
  - `total_orgs`
  - `total_pages`
  - `total_pull_request_comments`
  - `total_pulls`
  - `total_pushes`
  - `total_team_members`
  - `total_teams`
  - `total_users`
  - `total_wikis`
  - `unmergeable_pulls`

## Exemplo de conteúdo do {% data variables.product.prodname_server_statistics %}

Para ver um exemplo do conteúdo de resposta para a API de {% data variables.product.prodname_server_statistics %}, confira "[Como solicitar {% data variables.product.prodname_server_statistics %} usando a API REST](/admin/monitoring-activity-in-your-enterprise/analyzing-how-your-team-works-with-server-statistics/requesting-server-statistics-using-the-rest-api)".

Para ver uma lista dos dados coletados, confira "[Dados coletados de {% data variables.product.prodname_server_statistics %}](#server-statistics-data-collected)".
