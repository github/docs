---
title: Sobre as estatísticas do servidor
intro: 'Você pode usar {% data variables.product.prodname_server_statistics %} para analisar seus próprios dados agregados de {% data variables.product.prodname_ghe_server %} e nos ajudar a melhorar os produtos de {% data variables.product.company_short %}.'
versions:
  feature: server-statistics
permissions: 'Enterprise owners can enable {% data variables.product.prodname_server_statistics %}.'
redirect_from:
  - /early-access/github/analyze-how-your-team-works-with-server-statistics/about-server-statistics
topics:
  - Enterprise
---

{% data reusables.server-statistics.release-phase %}

## Sobre os benefícios de {% data variables.product.prodname_server_statistics %}

{% data variables.product.prodname_server_statistics %} pode ajudar você a antecipar as necessidades da sua organização, entender como sua equipe funciona e mostrar o valor que você obtém de {% data variables.product.prodname_ghe_server %}.

Uma vez habilitado, {% data variables.product.prodname_server_statistics %} coleta dados agregados sobre quanto determinadas funcionalidades são usadas na sua instância ao longo do tempo. Ao contrário de outros pontos de extremidade de [Estatísticas da administração da API](/rest/reference/enterprise-admin#admin-stats), que só retornam dados para o último dia, {% data variables.product.prodname_server_statistics %} fornece dados históricos de todas as métricas de {% data variables.product.prodname_server_statistics %} coletadas desde o dia em que você habilitou o recurso. Para obter mais informações, consulte "[Habilitar {% data variables.product.prodname_server_statistics %} para a sua empresa](/admin/configuration/configuring-github-connect/enabling-server-statistics-for-your-enterprise)."

Ao habilitar {% data variables.product.prodname_server_statistics %}, você está ajudando a construir um {% data variables.product.prodname_dotcom %} melhor. Os dados agregados que você nos fornece nos dão informações sobre como {% data variables.product.prodname_dotcom %} agrega valor para nossos clientes. Essas informações permite que {% data variables.product.company_short %} tome decisões de produtos melhores e mais informadas, o que irá beneficiar você.

## Sobre a segurança de dados

Nós respeitamos seus dados. Nunca transmitiremos dados de {% data variables.product.product_location %}, a menos que você tenha nos dado autorização para fazê-lo.

Não coletamos dados pessoais. Também não coletamos nenhum conteúdo de {% data variables.product.company_short %}, como código, problemas, comentários ou conteúdo de pull request.

Somente proprietários da conta corporativa conectada ou organização em {% data variables.product.prodname_ghe_cloud %} podem acessar os dados.

Apenas certas métricas agregadas são coletadas em repositórios, problemas, pull requests e outras funcionalidades. Para ver a lista de métricas agregadas coletadas, consulte "[dados coletados de {% data variables.product.prodname_server_statistics %}](#server-statistics-data-collected). "

Quaisquer atualizações das métricas coletadas ocorrerão em versões futuras de {% data variables.product.prodname_ghe_server %} e serão descritas nas [ observações da versão de {% data variables.product.prodname_ghe_server %}](/admin/release-notes). Além disso, vamos atualizar este artigo com todas as atualizações das métricas.

Para obter uma melhor compreensão de como armazenamos e protegemos os dados de {% data variables.product.prodname_server_statistics %}, consulte "[Segurança do GitHub](https://github.com/security)".

### Sobre a retenção e exclusão de dados

{% data variables.product.company_short %} coleta dados de {% data variables.product.prodname_server_statistics %} enquanto a licença do seu {% data variables.product.prodname_ghe_server %} estiver ativa e o recurso de {% data variables.product.prodname_server_statistics %} estiver habilitado.

Se você quiser excluir seus dados, entre em contato com o suporte do GitHub, o representnate da sua conta de {% data variables.product.prodname_dotcom %} ou seu administrador de sucesso do cliente.  Geralmente, excluímos dados no período de tempo especificado na nossa declaração de privacidade. Para obter mais informações, consulte [Declaração de privacidade de {% data variables.product.company_short %}](/free-pro-team@latest/site-policy/privacy-policies/github-privacy-statement#data-retention-and-deletion-of-data) na documentação do {% data variables.product.prodname_dotcom_the_website %}.

### Sobre a portabilidade de dados

Como proprietário de uma organização de empresa em {% data variables.product.prodname_ghe_cloud %}, você pode acessar os dados de {% data variables.product.prodname_server_statistics %} exportando os dados em um arquivo CSV ou JSON ou através da API REST DE {% data variables.product.prodname_server_statistics %}. Para obter mais informações, consulte "[Solicitando que {% data variables.product.prodname_server_statistics %} use a API REST](/admin/monitoring-activity-in-your-enterprise/analyzing-how-your-team-works-with-server-statistics/requesting-server-statistics-using-the-rest-api)" ou "[Exportando {% data variables.product.prodname_server_statistics %}](/admin/monitoring-activity-in-your-enterprise/analyzing-how-your-team-works-with-server-statistics/exporting-server-statistics)".

## Sobre desabilitar a coleta de dados

Você pode desabilitar o recurso de {% data variables.product.prodname_server_statistics %} a qualquer momento. Para obter mais informações, consulte "[Habilitar {% data variables.product.prodname_server_statistics %} para a sua empresa](/admin/configuration/configuring-github-connect/enabling-server-statistics-for-your-enterprise)."

## Dados de {% data variables.product.prodname_server_statistics %} coletados

Após habilitar o {% data variables.product.prodname_server_statistics %}, as métricas são coletadas através de um trabalho diário executado em {% data variables.product.product_location %}. As métricas agregadas são armazenadas na conta da sua organização ou na sua conta corporativa em {% data variables.product.prodname_ghe_cloud %} e não são armazenadas em {% data variables.product.product_location %}.

As seguintes métricas agregadas serão coletadas e transmitidas diariamente e representam a contagem total do dia:
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

## Exemplo de carga de {% data variables.product.prodname_server_statistics %}

Para ver um exemplo da carga de resposta para a API de {% data variables.product.prodname_server_statistics %}, consulte "[Solicitando que {% data variables.product.prodname_server_statistics %} use a API REST](/admin/monitoring-activity-in-your-enterprise/analyzing-how-your-team-works-with-server-statistics/requesting-server-statistics-using-the-rest-api)".

Para ver uma lista dos dados coletados, consulte "[ dados coletdos de {% data variables.product.prodname_server_statistics %}"](#server-statistics-data-collected)".
