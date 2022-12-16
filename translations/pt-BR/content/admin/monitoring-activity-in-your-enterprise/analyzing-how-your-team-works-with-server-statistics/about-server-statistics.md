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
ms.openlocfilehash: 3d17df54cd5dcf9ad102ab5079794a9bcb3e664b
ms.sourcegitcommit: 1a77ceb9e20c002173dda983db9405bcd5be254a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/29/2022
ms.locfileid: '148185182'
---
## Sobre os benefícios de {% data variables.product.prodname_server_statistics %}

As {% data variables.product.prodname_server_statistics %} podem ajudar você a prever as necessidades de sua organização, entender como sua equipe trabalha e mostrar o valor obtido do {% data variables.product.prodname_ghe_server %}.

Depois de habilitadas, as {% data variables.product.prodname_server_statistics %} coleta dados agregados sobre quanto determinados recursos estão sendo usados em sua instância ao longo do tempo. Ao contrário de outros pontos de extremidade da [API Admin Stats](/rest/reference/enterprise-admin#admin-stats), que só retornam dados do dia anterior, as {% data variables.product.prodname_server_statistics %} fornecem dados históricos de todas as métricas de {% data variables.product.prodname_server_statistics %} coletadas desde o dia em que você habilitou o recurso. Para obter mais informações, confira "[Como habilitar {% data variables.product.prodname_server_statistics %} para sua empresa](/admin/configuration/configuring-github-connect/enabling-server-statistics-for-your-enterprise)".

Ao habilitar {% data variables.product.prodname_server_statistics %}, você está ajudando a criar um {% data variables.product.prodname_dotcom %} melhor. Os dados agregados que você fornecerá nos fornecerão insights sobre como o {% data variables.product.prodname_dotcom %} adiciona valor aos nossos clientes. Essas informações permitem que {% data variables.product.company_short %} tome decisões melhores e mais informadas sobre produtos, beneficiando você.

## Sobre a segurança de dados

Respeitamos seus dados. Nunca transmitiremos dados do {% data variables.location.product_location %} a menos que você primeiro nos tenha dado permissão para fazê-lo.

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

Depois de habilitar {% data variables.product.prodname_server_statistics %}, as métricas serão coletadas por meio de um trabalho diário executado no {% data variables.location.product_location %}. As métricas de agregação são armazenadas em sua conta da organização ou da empresa no {% data variables.product.prodname_ghe_cloud %} e não são armazenadas no {% data variables.location.product_location %}.

As métricas de agregação a seguir serão coletadas e transmitidas diariamente e representam as contagens totais do dia.

Coluna CSV | Nome | Descrição |
---------- | ---- | ----------- |
Um   | `github_connect.features_enabled` | Matriz de recursos de {% data variables.product.prodname_github_connect %} que estão habilitados para sua instância (confira "[Sobre {% data variables.product.prodname_github_connect %}](/admin/configuration/configuring-github-connect/about-github-connect#github-connect-features)" ) |
B   | `host_name` | O nome do host da instância |
C   | `dormant_users.dormancy_threshold` | O tempo que um usuário deve ser inativo para ser considerado inativo |
D   | `dormant_users.total_dormant_users` | Número de contas de usuário inativas |
E   | `ghes_version` | A versão do {% data variables.product.product_name %} que sua instância está executando |
F   | `server_id` | A UUID gerada para sua instância
G   | `collection_date` | A data das métricas foram coletadas |
H   | `schema_version` | A versão do esquema de banco de dados usada para armazenar esses dados |
I   | `ghe_stats.comments.total_commit_comments` | Número de comentários sobre confirmações |
J   | `ghe_stats.comments.total_gist_comments` | Número de comentários sobre gists |
K   | `ghe_stats.comments.total_issue_comments` | Número de comentários sobre problemas | 
L   | `ghe_stats.comments.total_pull_request_comments` | Número de comentários sobre solicitações de pull |
M   | `ghe_stats.gists.total_gists` | Número de gists (secretos e públicos) |
N   | `ghe_stats.gists.private_gists` | Número de gists secretos |
O   | `ghe_stats.gists.public_gists` | Número de gists públicos |
P   | `ghe_stats.hooks.total_hooks` | Número de ganchos de pré-recebimento (ativos e inativos) |
Q   | `ghe_stats.hooks.active_hooks` | Número de ganchos de pré-recebimento ativos |
R   | `ghe_stats.hooks.inactive_hooks` | Número de ganchos pré-recebimento inativos |
S   | `ghe_stats.issues.total_issues` | Número de problemas (abertos e fechados) |
T   | `ghe_stats.issues.open_issues` | Número de problemas em aberto |
U   | `ghe_stats.issues.closed_issues` | Número de problemas fechados |
V   | `ghe_stats.milestones.total_milestones` | Número de marcos (abertos e fechados) |
W   | `ghe_stats.milestones.open_milestones` | Número de marcos abertos |
X   | `ghe_stats.milestones.closed_milestones` | Número de marcos fechados |
Y   | `ghe_stats.orgs.total_orgs` | Número de organizações (habilitadas e desabilitadas) |
Z   | `ghe_stats.orgs.disabled_orgs` | Número de organizações desabilitadas |
AA | `ghe_stats.orgs.total_teams` | Quantidade de equipes |
AB | `ghe_stats.orgs.total_team_members` | Número de membros da equipe |
AC | `ghe_stats.pages.total_pages` | Número de sites do {% data variables.product.prodname_pages %} |
AD | `ghe_stats.pulls.total_pulls` | Número de solicitações de pull |
AE | `ghe_stats.pulls.merged_pulls` | Número de solicitações de pull mescladas |
AF | `ghe_stats.pulls.mergeable_pulls` | Número de solicitações de pull que atualmente são mescladas |
AG | `ghe_stats.pulls.unmergeable_pulls` | Número de solicitações de pull que atualmente são não mescladas |
AH | `ghe_stats.repos.total_repos` | Número de repositórios (repositórios upstream e forks) |
IA | `ghe_stats.repos.root_repos` | Número de repositórios upstream |
AJ | `ghe_stats.repos.fork_repos` | Número de forks |
AK | `ghe_stats.repos.org_repos` | Número de repositórios pertencentes às organizações |
AL | `ghe_stats.repos.total_pushes` | Número de pushes para repositórios |
AM | `ghe_stats.repos.total_wikis` | Número de wikis |
AN | `ghe_stats.users.total_users` | Número de contas de usuário |
AO | `ghe_stats.users.admin_users` | Número de contas de usuário que são administradores de site |
PA | `ghe_stats.users.suspended_users` | Número de contas de usuário suspensas |

## Exemplos de dados do {% data variables.product.prodname_server_statistics %}

Para ver um exemplo dos títulos incluídos na exportação CSV para {% data variables.product.prodname_server_statistics %}, baixe o [exemplo de CSV do {% data variables.product.prodname_server_statistics %}](/assets/server-statistics-csv-example.csv).

Para ver um exemplo do conteúdo de resposta para a API de {% data variables.product.prodname_server_statistics %}, confira "[Como solicitar {% data variables.product.prodname_server_statistics %} usando a API REST](/admin/monitoring-activity-in-your-enterprise/analyzing-how-your-team-works-with-server-statistics/requesting-server-statistics-using-the-rest-api)".
