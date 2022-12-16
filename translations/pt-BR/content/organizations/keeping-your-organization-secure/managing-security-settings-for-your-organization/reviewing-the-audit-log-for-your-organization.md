---
title: Revisar o log de auditoria da organização
intro: 'O log de auditoria permite que os administradores da organização revisem rapidamente as ações executadas pelos integrantes da organização. O painel detalha informações como o tipo de ação, o autor da ação e quando a ação foi executada.'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /articles/reviewing-the-audit-log-for-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/reviewing-the-audit-log-for-your-organization
  - /organizations/keeping-your-organization-secure/reviewing-the-audit-log-for-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Review audit log
ms.openlocfilehash: 430cf928f91cad2851c9ad0c661f159177866463
ms.sourcegitcommit: 1668466c58f50415e8c4d3ad932d697f79fc87c7
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/22/2022
ms.locfileid: '148180674'
---
## Acessar o log de auditoria

O registro de auditoria lista os eventos desencadeados por atividades que afetam a sua organização no mês atual e nos últimos seis meses. Somente proprietários conseguem acessar o log de auditoria da organização.

{% data reusables.audit_log.only-three-months-displayed %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.audit_log.audit_log_sidebar_for_org_admins %}

## Pesquisar no log de auditoria

{% data reusables.audit_log.audit-log-search %}

### Pesquisar com base na ação

Para pesquisar eventos específicos, use o qualificador `action` na consulta. As ações listadas no log de auditoria são agrupadas nas seguintes categorias:

| Nome da categoria | Descrição |------------------|-------------------{% ifversion fpt or ghec %} | [`account`](#account-category-actions) | Contém todas as atividades relacionadas à conta da organização.{% endif %}{% ifversion fpt or ghec %} | [`advisory_credit`](#advisory_credit-category-actions) | Contém todas as atividades relacionadas aos créditos de um colaborador referentes a avisos de segurança no {% data variables.product.prodname_advisory_database %}. Para obter mais informações, confira "[Sobre os avisos de segurança do {% data variables.product.prodname_dotcom %}](/github/managing-security-vulnerabilities/about-github-security-advisories)".{% endif %}{% ifversion pat-v2%} | [`auto_approve_personal_access_token_requests`](#auto_approve_personal_access_token_requests-category-actions) | Contém atividades relacionadas à política de aprovação da organização para {% data variables.product.pat_v2 %}s. Para obter mais informações, confira "[Como definir uma política de {% data variables.product.pat_generic %} na organização](/organizations/managing-programmatic-access-to-your-organization/setting-a-personal-access-token-policy-for-your-organization)".{% endif %} {% ifversion fpt or ghec %} | [`billing`](#billing-category-actions) | Contém todas as atividades relacionadas à cobrança da organização.{% endif %}{% ifversion fpt or ghec %} | [`business`](#business-category-actions) | Contém atividades relacionadas às configurações de negócios de uma empresa. |{% endif %}{% ifversion fpt or ghec %} | [`codespaces`](#codespaces-category-actions) | Contém atividades relacionadas aos codespaces de uma organização. |{% endif %} | [`dependabot_alerts`](#dependabot_alerts-category-actions) | Contém as atividades de configuração no nível da organização para {% data variables.product.prodname_dependabot_alerts %} em repositórios existentes. Para obter mais informações, confira "[Sobre os {% data variables.product.prodname_dependabot_alerts %}](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)".
| [`dependabot_alerts_new_repos`](#dependabot_alerts_new_repos-category-actions) | Contém atividades de configuração no nível da organização para {% data variables.product.prodname_dependabot_alerts %} em novos repositórios criados na organização.{% ifversion fpt or ghec or ghes %} | [`dependabot_security_updates`](#dependabot_security_updates-category-actions) | Contém atividades de configuração no nível da organização para {% data variables.product.prodname_dependabot_security_updates %} em repositórios existentes. Para obter mais informações, confira "[Como configurar {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/configuring-dependabot-security-updates)".
| [`dependabot_security_updates_new_repos`](#dependabot_security_updates_new_repos-category-actions) | Contém atividades de configuração no nível da organização para {% data variables.product.prodname_dependabot_security_updates %} para novos repositórios criados na organização.{% endif %}{% ifversion fpt or ghec %} | [`dependency_graph`](#dependency_graph-category-actions) | Contém atividades de configuração no nível da organização para grafos de dependência de repositórios. Para obter mais informações, confira "[Sobre o grafo de dependência](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)".
| [`dependency_graph_new_repos`](#dependency_graph_new_repos-category-actions) | Contém atividades de configuração no nível da organização para novos repositórios criados na organização.{% endif %} | [`discussion_post`](#discussion_post-category-actions) | Contém todas as atividades relacionadas a discussões postadas em uma página da equipe.
| [`discussion_post_reply`](#discussion_post_reply-category-actions) | Contém todas as atividades relacionadas a respostas às discussões postadas em uma página da equipe.{% ifversion fpt or ghes or ghec %} | [`enterprise`](#enterprise-category-actions) | Contém atividades relacionadas às configurações da empresa. | {% endif %} | [`hook`](#hook-category-actions) | Contém todas as atividades relacionadas a webhooks.
| [`integration_installation`](#integration_installation-category-actions) | Contém atividades relacionadas às integrações instaladas em uma conta. | | [`integration_installation_request`](#integration_installation_request-category-actions) | Contém todas as atividades relacionadas a solicitações de integrantes da organização para proprietários aprovarem integrações para uso na organização. |{% ifversion ghec or ghae %} | [`ip_allow_list`](#ip_allow_list-category-actions) | Contém atividades relacionadas à habilitação ou à desabilitação da lista de permissões de IP para uma organização.
| [`ip_allow_list_entry`](#ip_allow_list_entry-category-actions) | Contém atividades relacionadas à criação, exclusão e edição da entrada na lista de permissões de uma organização.{% endif %} | [`issue`](#issue-category-actions) | Contém atividades relacionadas à exclusão de um problema. {% ifversion fpt or ghec %} | [`marketplace_agreement_signature`](#marketplace_agreement_signature-category-actions) | Contém todas as atividades relacionadas à assinatura do Contrato de Desenvolvedor do {% data variables.product.prodname_marketplace %}.
| [`marketplace_listing`](#marketplace_listing-category-actions) | Contém todas as atividades relacionadas à listagem de aplicativos em {% data variables.product.prodname_marketplace %}.{% endif %}{% ifversion fpt or ghes or ghec %} | [`members_can_create_pages`](#members_can_create_pages-category-actions) | Contém todas as atividades relacionadas ao gerenciamento da publicação de sites do {% data variables.product.prodname_pages %} para repositórios na organização. Para obter mais informações, confira "[Como gerenciar a publicação de sites do {% data variables.product.prodname_pages %} para sua organização](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)". | {% endif %} | [`org`](#org-category-actions) | Contém as atividades relacionadas à associação à organização. {% ifversion ghec %} | [`org_credential_authorization`](#org_credential_authorization-category-actions) | Contém todas as atividades relacionadas à autorização de credenciais a serem usadas com o logon único do SAML.{% endif %}{% ifversion secret-scanning-audit-log-custom-patterns %} | [`org_secret_scanning_custom_pattern`](#org_secret_scanning_custom_pattern-category-actions) | Contém as atividades no nível da organização relacionadas a padrões personalizados de verificação de segredos. Para obter mais informações, confira "[Como definir padrões personalizados para a verificação de segredos](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning)". {% endif %} | [`organization_default_label`](#organization_default_label-category-actions) | Contém todas as atividades relacionadas a rótulos padrão para repositórios em sua organização.
| [`oauth_application`](#oauth_application-category-actions) | Contém todas as atividades relacionadas aos aplicativos OAuth.
| [`packages`](#packages-category-actions) | Contém todas as atividades relacionadas a {% data variables.product.prodname_registry %}.{% ifversion fpt or ghec %} | [`payment_method`](#payment_method-category-actions) | Contém todas as atividades relacionadas ao modo como a organização paga pelo GitHub.{% endif %}{% ifversion pat-v2%} | [`personal_access_token`](#personal_access_token-category-actions) | Contém todas as atividades relacionadas aos {% data variables.product.pat_v2 %}s da organização. Para obter mais informações, confira "[Como criar um {% data variables.product.pat_generic %}](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)".{% endif %} | [`profile_picture`](#profile_picture-category-actions) | Contém todas as atividades relacionadas à imagem de perfil da organização.
| [`project`](#project-category-actions) | Contém todas as atividades relacionadas aos quadros de projetos.
| [`protected_branch`](#protected_branch-category-actions) | Contém todas as atividades relacionadas aos branches protegidos.
| [`repo`](#repo-category-actions) | Contém atividades relacionadas aos repositórios de propriedade da sua organização.{% ifversion fpt or ghec %} | [`repository_advisory`](#repository_advisory-category-actions) | Contém atividades no nível do repositório relacionadas a avisos de segurança no {% data variables.product.prodname_advisory_database %}.  Para obter mais informações, confira "[Sobre os avisos de segurança do {% data variables.product.prodname_dotcom %}](/github/managing-security-vulnerabilities/about-github-security-advisories)".
| [`repository_content_analysis`](#repository_content_analysis-category-actions) | Contém todas as atividades relacionadas a [habilitar ou desabilitar o uso de dados em um repositório privado](/articles/about-github-s-use-of-your-data).{% endif %}{% ifversion fpt or ghec %} | [`repository_dependency_graph`](#repository_dependency_graph-category-actions) | Contém atividades no nível do repositório relacionadas a habilitar ou desabilitar o grafo de dependência em um repositório {% ifversion fpt or ghec %}privado {% endif %}. Para obter mais informações, confira "[Sobre o grafo de dependência](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)".{% endif %}{% ifversion ghes or ghae or ghec %} | [`repository_secret_scanning`](#repository_secret_scanning-category-actions) | Contém atividades no nível do repositório relacionadas à verificação de segredos. Para obter mais informações, confira "[Sobre a verificação de segredos](/github/administering-a-repository/about-secret-scanning)". {% endif %}{% ifversion secret-scanning-audit-log-custom-patterns %} | [`repository_secret_scanning_custom_pattern`](#repository_secret_scanning_custom_pattern-category-actions) | Contém as atividades no nível do repositório relacionadas a padrões personalizados de verificação de segredos. Para obter mais informações, confira "[Como definir padrões personalizados para a verificação de segredos](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning)". {% endif %}{% ifversion secret-scanning-audit-log-custom-patterns %} | [`repository_secret_scanning_push_protection`](#repository_secret_scanning_push_protection-category-actions) | Contém as atividades no nível do repositório relacionadas a padrões personalizados de verificação de segredos. Para obter mais informações, confira "[Como proteger os pushes com a verificação de segredos](/code-security/secret-scanning/protecting-pushes-with-secret-scanning)". {% endif %} | [`repository_vulnerability_alert`](#repository_vulnerability_alert-category-actions) | Contém todas as atividades relacionadas ao [{% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts).{% ifversion fpt or ghec %} | [`repository_vulnerability_alerts`](#repository_vulnerability_alerts-category-actions) | Contém as atividades de configuração no nível do repositório do {% data variables.product.prodname_dependabot_alerts %}.{% endif %}{% ifversion custom-repository-roles %} | [`role`](#role-category-actions) | Contém todas as atividades relacionadas a [funções de repositório personalizadas](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization).{% endif %}{% ifversion ghes or ghae or ghec %} | [`secret_scanning`](#secret_scanning-category-actions) | Contém as atividades de configuração no nível da organização para verificação de segredos nos repositórios existentes. Para obter mais informações, confira "[Sobre a verificação de segredos](/github/administering-a-repository/about-secret-scanning)".
| [`secret_scanning_new_repos`](#secret_scanning_new_repos-category-actions) | Contém atividades de configuração de nível da organização para verificação de segredos nos repositórios criados na organização. {% endif %}{% ifversion fpt or ghec %} | [`sponsors`](#sponsors-category-actions) | Contém todos os eventos relacionados a botões de patrocinador (confira "[Exibindo um botão de patrocinador em seu repositório](/articles/displaying-a-sponsor-button-in-your-repository)"){% endif %} | [`team`](#team-category-actions) | Contém todas as atividades relacionadas às equipes em sua organização.
| [`team_discussions`](#team_discussions-category-actions) | Contém as atividades relacionadas ao gerenciamento de discussões da equipe em uma organização.
| [`workflows`](#workflows-category-actions) | Contém as atividades relacionadas a fluxos de trabalho do {% data variables.product.prodname_actions %}.

Você pode pesquisar conjuntos específicos de ações usando esses termos. Por exemplo:

  * `action:team` localiza todos os eventos agrupados na categoria da equipe.
  * `-action:hook` exclui todos os eventos na categoria do webhook.

Cada categoria tem um conjunto de ações associadas que você pode filtrar. Por exemplo:

  * `action:team.create` localiza todos os eventos em que uma equipe foi criada.
  * `-action:hook.events_changed` exclui todos os eventos em que os eventos em um webhook foram alterados.

### Pesquisar com base na hora da ação

Use o qualificador `created` para filtrar eventos no log de auditoria com base na data em que eles ocorreram. {% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

Por exemplo:

  * `created:2014-07-08` localiza todos os eventos ocorridos em 8 de julho de 2014.
  * `created:>=2014-07-08` localiza todos os eventos ocorridos em 8 de julho de 2014 ou após essa data.
  * `created:<=2014-07-08` localiza todos os eventos ocorridos em 8 de julho de 2014 ou antes dessa data.
  * `created:2014-07-01..2014-07-31` localiza todos os eventos ocorridos no mês de julho de 2014.

{% note %}

**Observação**: o log de auditoria contém dados do mês atual e todos os dias dos seis meses anteriores.

{% endnote %}

### Pesquisar com base no local

Usando o qualificador `country`, você pode filtrar eventos no log de auditoria com base no país de origem. Você pode usar o código de duas letras do país ou o nome completo. Lembre-se de que os país com espaços no nome devem ser colocados entre aspas. Por exemplo:

  * `country:de` localiza todos os eventos ocorridos na Alemanha.
  * `country:Mexico` localiza todos os eventos ocorridos no México.
  * `country:"United States"` localiza todos os eventos ocorridos nos Estados Unidos.

{% ifversion fpt or ghec %}
## Exportar o log de auditoria

{% data reusables.audit_log.export-log %}

{% data reusables.audit_log.git-events-export-limited %}

{% data reusables.audit_log.exported-log-keys-and-values %} {% endif %}

## Usando a API do log de auditoria

{% ifversion fpt %}

As organizações que usam {% data variables.product.prodname_ghe_cloud %} podem interagir com o log de auditoria usando a API do GraphQL e a API REST. Para obter mais informações, confira [a documentação do {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/reviewing-the-audit-log-for-your-organization#using-the-audit-log-api).

{% else %}

É possível interagir com o log de auditoria usando a API do GraphQL{% ifversion fpt or ghec %} ou a API REST{% endif %}.{% ifversion read-audit-scope %} É possível usar o escopo `read:audit_log` para acessar o log de auditoria por meio das APIs.{% endif %}

{% ifversion ghec %}

{% note %}

**Observação:** para usar a API do log de auditoria, sua organização precisa usar o {% data variables.product.prodname_ghe_cloud %}. {% data reusables.enterprise.link-to-ghec-trial %}

{% endnote %}

### Usando a API GraphQL

{% endif %}

Para garantir que a sua propriedade intelectual esteja segura e que você está mantendo a conformidade na sua organização, use a API do GraphQL do log de auditoria para manter cópias dos seus dados de log de auditoria e monitore: {% data reusables.audit_log.audit-log-api-info %}

{% ifversion ghec %} Observe que você não pode recuperar eventos Git usando a API do GraphQL. Para recuperar eventos do Git, use a API REST. Para obter mais informações, confira "[ações de categoria `git`](#git-category-actions)".
{% endif %}

A resposta do GraphQL pode incluir dados por até 90 a 120 dias.

Por exemplo, você pode fazer uma solicitação GraphQL para ver todos os novos integrantes adicionados à organização. Para obter mais informações, confira o "[Log de auditoria da API do GraphQL](/graphql/reference/interfaces#auditentry/)".

{% ifversion ghec %}

### Usando a API REST

Para garantir que a sua propriedade intelectual esteja segura e que você está mantendo a conformidade na sua organização, use a API REST do log de auditoria para manter cópias dos seus dados de log de auditoria e monitore: {% data reusables.audit_log.audited-data-list %}

{% data reusables.audit_log.audit-log-git-events-retention %}

Por padrão, são retornados apenas os eventos dos últimos três meses. Para incluir eventos mais antigos, você deve especificar um registro de tempo na sua consulta.

Para obter mais informações sobre a API REST do log de auditoria, confira "[Organizações](/rest/reference/orgs#get-the-audit-log-for-an-organization)".

{% endif %} {% endif %}

## Ações do log de auditoria

Uma visão geral de algumas das ações mais comuns registradas como eventos no log de auditoria.

{% ifversion fpt or ghec %}
### Ações da categoria `account`

| Ação | Descrição
|------------------|-------------------
| `billing_plan_change` | Disparada quando o [ciclo de cobrança](/articles/changing-the-duration-of-your-billing-cycle) de uma organização é alterado.
| `plan_change` | Disparada quando a [assinatura](/articles/about-billing-for-github-accounts) de uma organização é alterada.
| `pending_plan_change` | Disparada quando um proprietário da organização ou um gerente de cobrança [cancela ou faz downgrade de uma assinatura paga](/articles/how-does-upgrading-or-downgrading-affect-the-billing-process/).
| `pending_subscription_change` | Disparada quando uma [avaliação gratuita do {% data variables.product.prodname_marketplace %} começa ou termina](/articles/about-billing-for-github-marketplace/).
{% endif %}

{% ifversion fpt or ghec %}
### Ações da categoria `advisory_credit`

| Ação | Descrição
|------------------|-------------------
| `accept` | Acionada quando alguém aceita crédito para uma consultoria de segurança. Para obter mais informações, confira "[Como editar uma consultoria de segurança](/github/managing-security-vulnerabilities/editing-a-security-advisory)".
| `create` | Acionada quando o administrador da consultoria de segurança adiciona alguém à seção de crédito.
| `decline` | Acionada quando alguém rejeita crédito para uma consultoria de segurança.
| `destroy` | Acionada quando o administrador da consultoria de segurança remove alguém da seção de crédito.
{% endif %}

{% ifversion pat-v2 %}

### Ações da categoria `auto_approve_personal_access_token_requests`

| Ação | Descrição
|------------------|-------------------
| `disable` | Disparada quando a organização deve aprovar {% data variables.product.pat_v2 %}s antes que os tokens possam acessar recursos da organização. Para obter mais informações, confira "[Como configurar uma política de {% data variables.product.pat_generic %} na organização](/organizations/managing-programmatic-access-to-your-organization/setting-a-personal-access-token-policy-for-your-organization)".
| `enable` | Disparada quando {% data variables.product.pat_v2 %}s podem acessar recursos da organização sem aprovação prévia. Para obter mais informações, confira "[Como configurar uma política de {% data variables.product.pat_generic %} na organização](/organizations/managing-programmatic-access-to-your-organization/setting-a-personal-access-token-policy-for-your-organization)".

{% endif %}

{% ifversion fpt or ghec %}
### Ações da categoria `billing`

| Ação | Descrição
|------------------|-------------------
| `change_billing_type` | Disparada quando sua organização [altera a forma como ela paga por {% data variables.product.prodname_dotcom %}](/articles/adding-or-editing-a-payment-method).
| `change_email` | Disparada quando o [endereço de email de cobrança](/articles/setting-your-billing-email) da sua organização é alterado.
{% endif %}

### Ações da categoria `business`

| Ação | Descrição |------------------|-------------------{% ifversion fpt or ghec %} | `set_actions_fork_pr_approvals_policy` | Disparada quando a configuração para exigir aprovações de fluxos de trabalho de bifurcações públicas é alterada em uma empresa. Para obter mais informações, confira "[Impor políticas para {% data variables.product.prodname_actions %} em sua empresa](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-fork-pull-requests-in-your-enterprise)".{% endif %} | `set_actions_retention_limit` |Disparada quando o período de retenção de artefatos e logs do {% data variables.product.prodname_actions %} é alterado em uma empresa. Para obter mais informações, confira "[Enforcing policies for {% data variables.product.prodname_actions %} in your enterprise]({% ifversion fpt %}/enterprise-cloud@latest{% endif %}/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-artifact-and-log-retention-in-your-enterprise)".{% ifversion fpt or ghes or ghec %} | `set_fork_pr_workflows_policy` | Disparada quando a política para fluxos de trabalho em bifurcações de repositório privado é alterada. Para obter mais informações, confira "{% ifversion fpt or ghec%}[Como impor políticas para {% data variables.product.prodname_actions %} em sua empresa]({% ifversion fpt %}/enterprise-cloud@latest{% endif %}/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-fork-pull-requests-in-private-repositories){% else ifversion ghes > 2.22 %}[Como habilitar fluxos de trabalho para bifurcações de repositório privado](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/enforcing-github-actions-policies-for-your-enterprise#enabling-workflows-for-private-repository-forks){% endif %}".{% endif %}

{% ifversion fpt or ghec %}
### Ações da categoria `codespaces`

| Ação | Descrição
|------------------|-------------------
| `create` | Disparada quando um usuário [cria um codespace](/github/developing-online-with-codespaces/creating-a-codespace).
| `resume` | Acionada quando um usuário retoma um codespace suspenso.
| `delete` | Disparada quando um usuário [exclui um codespace](/github/developing-online-with-codespaces/deleting-a-codespace).
| `create_an_org_secret` | Disparada quando um usuário cria um [segredo no nível da organização para os {% data variables.product.prodname_github_codespaces %}](/github/developing-online-with-codespaces/managing-encrypted-secrets-for-codespaces#about-encrypted-secrets-for-codespaces)
| `update_an_org_secret` | Disparada quando um usuário atualiza um [segredo no nível da organização para os {% data variables.product.prodname_github_codespaces %}](/github/developing-online-with-codespaces/managing-encrypted-secrets-for-codespaces#about-encrypted-secrets-for-codespaces).
| `remove_an_org_secret` | Disparada quando um usuário remove um [segredo no nível da organização dos {% data variables.product.prodname_github_codespaces %}](/github/developing-online-with-codespaces/managing-encrypted-secrets-for-codespaces#about-encrypted-secrets-for-codespaces).
| `manage_access_and_security` | Disparada quando um usuário atualiza [quais repositórios um codespace pode acessar](/github/developing-online-with-codespaces/managing-access-and-security-for-codespaces).
{% endif %}

### Ações da categoria `dependabot_alerts`

| Ação | Descrição
|------------------|-------------------
| `disable` | Acionada quando o proprietário de uma organização desabilita {% data variables.product.prodname_dependabot_alerts %} em todos os repositórios {% ifversion fpt or ghec %}privados {% endif %}existentes. Para obter mais informações, confira "[Como gerenciar as configurações de segurança e de análise da sua organização](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)".
| `enable` | Acionada quando um proprietário da organização habilita {% data variables.product.prodname_dependabot_alerts %} para todos os repositórios {% ifversion fpt or ghec %}privados {% endif %}.

### Ações da categoria `dependabot_alerts_new_repos`

| Ação | Descrição
|------------------|-------------------
| `disable` | Acionada quando um proprietário da organização desabilita {% data variables.product.prodname_dependabot_alerts %} para todos os novos repositórios {% ifversion fpt or ghec %}privados {% endif %}. Para obter mais informações, confira "[Como gerenciar as configurações de segurança e de análise da sua organização](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)".
| `enable` | Acionada quando um proprietário da organização habilita {% data variables.product.prodname_dependabot_alerts %} para todos os novos repositórios {% ifversion fpt or ghec %}privados{% endif %}.

{% ifversion fpt or ghec or ghes %}
### Ações da categoria `dependabot_security_updates`

| Ação | Descrição
|------------------|-------------------
| `disable` | Acionada quando um proprietário da organização desabilita {% data variables.product.prodname_dependabot_security_updates %} em todos os repositórios existentes. Para obter mais informações, confira "[Como gerenciar as configurações de segurança e de análise da sua organização](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)".
| `enable` | Acionada quando um proprietário da organização habilita {% data variables.product.prodname_dependabot_security_updates %} em todos os repositórios existentes.

### Ações da categoria `dependabot_security_updates_new_repos`

| Ação | Descrição
|------------------|-------------------
| `disable` | Acionada quando um proprietário da organização desabilita {% data variables.product.prodname_dependabot_security_updates %} em todos os novos repositórios. Para obter mais informações, confira "[Como gerenciar as configurações de segurança e de análise da sua organização](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)".
| `enable` | Acionada quando um proprietário da organização habilita {% data variables.product.prodname_dependabot_security_updates %} em todos os novos repositórios.
{% endif %}

{% ifversion fpt or ghec %}
### Ações da categoria `dependency_graph`

| Ação | Descrição
|------------------|-------------------
| `disable` | Acionada quando um proprietário da organização desabilita o gráfico de dependências em todos os repositórios existentes. Para obter mais informações, confira "[Como gerenciar as configurações de segurança e de análise da sua organização](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)".
| `enable` | Acionada quando um proprietário da organização habilita o gráfico de dependências para todos os repositórios existentes.

### Ações da categoria `dependency_graph_new_repos`

| Ação | Descrição
|------------------|-------------------
| `disable` | Acionada quando um proprietário da organização desabilita o gráfico de dependências em todos os novos repositórios. Para obter mais informações, confira "[Como gerenciar as configurações de segurança e de análise da sua organização](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)".
| `enable` | Acionada quando um proprietário da organização habilita o gráfico de dependências para todos os novos repositórios.
{% endif %}

### Ações da categoria `discussion_post`

| Ação | Descrição
|------------------|-------------------
| `update` | Disparada quando [uma postagem de discussão em equipe é editada](/articles/managing-disruptive-comments/#editing-a-comment).
| `destroy` | Disparada quando [uma postagem de discussão em equipe é excluída](/articles/managing-disruptive-comments/#deleting-a-comment).

### Ações da categoria `discussion_post_reply`

| Ação | Descrição
|------------------|-------------------
| `update` | Disparada quando [uma resposta a uma postagem de discussão em equipe é editada](/articles/managing-disruptive-comments/#editing-a-comment).
| `destroy` | Disparada quando [uma resposta a uma postagem de discussão em equipe é excluída](/articles/managing-disruptive-comments/#deleting-a-comment).

{% ifversion fpt or ghes or ghec %}
### Ações da categoria `enterprise`

{% data reusables.actions.actions-audit-events-for-enterprise %}

{% endif %}

{% ifversion fpt or ghec %}
### Ações da categoria `environment`

| Ação | Descrição
|------------------|-------------------
| `create_actions_secret` | Acionada quando um segredo é criado em um ambiente. Para obter mais informações, confira "[Segredos do ambiente](/actions/reference/environments#environment-secrets)".
| `delete` | Acionada quando um ambiente é excluído. Para obter mais informações, confira "[Como excluir um ambiente](/actions/reference/environments#deleting-an-environment)".
| `remove_actions_secret` |  Acionada quando um segredo é removido de um ambiente. Para obter mais informações, confira "[Segredos do ambiente](/actions/reference/environments#environment-secrets)".
| `update_actions_secret` | Acionada quando um segredo em um ambiente é atualizado. Para obter mais informações, confira "[Segredos do ambiente](/actions/reference/environments#environment-secrets)".
{% endif %}

{% ifversion ghae %}
### Ações da categoria `external_group`

{% data reusables.saml.external-group-audit-events %}

{% endif %}

{% ifversion ghae %}
### Ações da categoria `external_identity`

{% data reusables.saml.external-identity-audit-events %}

{% endif %}

{% ifversion fpt or ghec %}
### Ações da categoria `git`

{% note %}

**Observação:** para acessar eventos Git no log de auditoria, você deve usar a API REST do log de auditoria. A API REST do log de auditoria está disponível apenas para usuários de {% data variables.product.prodname_ghe_cloud %}. Para obter mais informações, confira "[Organizações](/rest/reference/orgs#get-the-audit-log-for-an-organization)".

{% endnote %}

{% data reusables.audit_log.audit-log-git-events-retention %}

| Ação  | Descrição
|---------|----------------------------
| `clone` | Acionada quando um repositório é clonado.
| `fetch` | Acionada quando alterações são obtidas de um repositório.
| `push`  | Acionada quando as alterações são enviadas por push para um repositório.

{% endif %}

### Ações da categoria `hook`

| Ação | Descrição
|------------------|-------------------
| `create` | Disparada quando [um novo gancho foi adicionado](/articles/creating-webhooks) a um repositório de propriedade da sua organização.
| `config_changed` | Acionada quando a configuração de um hook é alterada.
| `destroy` | Acionada quando um hook é removido de um repositório.
| `events_changed` | Acionada quando os eventos em um hook são alterados.

### Ações da categoria `integration_installation`

| Ação | Descrição
|--------|-------------
| `contact_email_changed` | Um email de contato para uma integração foi alterado.
| `create` | Uma integração foi instalada.
| `destroy` | Uma integração foi desinstalada.
| `repositories_added` | Os repositórios foram adicionados a uma integração.
| `repositories_removed` | Os repositórios foram removidos de uma integração.
{%- ifversion fpt or ghec %} | `suspend` | Uma integração foi suspensa.
| `unsuspend` | Uma integração teve a suspensão cancelada.
{%- endif %} | `version_updated` | As permissões para uma integração foram atualizadas.

### Ações da categoria `integration_installation_request`

| Ação | Descrição
|------------------|-------------------
| `create` | Acionada quando um integrante da organização pede para um proprietário da organização instalar uma integração para uso na organização.
| `close` | Acionada quando uma solicitação de instalação de integração para uso na organização é aprovada ou negada pelo proprietário da organização ou cancelada pelo integrante que fez a solicitação.

{% ifversion ghec or ghae %}
### Ações da categoria `ip_allow_list`

| Ação | Descrição
|------------------|-------------------
| `enable` | Acionada quando uma lista de permissões de IPs foi habilitada para uma organização.
| `disable` | Acionada quando uma lista de permissões de IPs foi desabilitada para uma organização.
| `enable_for_installed_apps` | Acionada quando uma lista de permissão de IP foi habilitada para {% data variables.product.prodname_github_apps %} instalado.
| `disable_for_installed_apps` | Acionada quando uma lista de permissão de IP foi desabilitada para {% data variables.product.prodname_github_apps %} instalado.

### Ações da categoria `ip_allow_list_entry`

| Ação | Descrição
|------------------|-------------------
| `create` | Acionada quando um endereço IP foi adicionado a uma lista de permissão de IP.
| `update` | Acionada quando um endereço de IP ou sua descrição foram alterados.
| `destroy` | Acionada quando um endereço IP foi excluído da lista de permissões de IP.
{% endif %}

### Ações da categoria `issue`

| Ação | Descrição
|------------------|-------------------
| `destroy`        | Acionada quando um proprietário da organização ou um usuário com permissões de administrador em um repositório exclui um problema de um repositório pertencente à organização.

{% ifversion fpt or ghec %}

### Ações da categoria `marketplace_agreement_signature`

| Ação | Descrição
|------------------|-------------------
| `create` | Acionada quando você assina o Contrato de desenvolvedor do {% data variables.product.prodname_marketplace %}.

### Ações da categoria `marketplace_listing`

| Ação | Descrição
|------------------|-------------------
| `approve` | Acionada quando sua lista é aprovada para inclusão no {% data variables.product.prodname_marketplace %}.
| `create` | Acionada quando você cria uma lista para seu app no {% data variables.product.prodname_marketplace %}.
| `delist` | Acionada quando sua lista é removida do {% data variables.product.prodname_marketplace %}.
| `redraft` | Triggered when your listing is sent back to draft state.
| `reject` | Acionada quando sua lista não é aprovada para inclusão no {% data variables.product.prodname_marketplace %}.

{% endif %}

{% ifversion fpt or ghes or ghec %}

### Ações da categoria `members_can_create_pages`

Para obter mais informações, confira "[Como gerenciar a publicação de sites do {% data variables.product.prodname_pages %} para sua organização](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)".

| Ação | Descrição |
| :- | :- |
| `enable` | Acionada quando um proprietário da organização habilita a publicação de sites do {% data variables.product.prodname_pages %} nos repositórios da organização. |
| `disable` | Acionada quando um proprietário da organização desabilita a publicação de sites do {% data variables.product.prodname_pages %} nos repositórios da organização. |

{% endif %}

### Ações da categoria `oauth_application`

| Ação | Descrição
|------------------|-------------------
| `create` | Acionada quando um {% data variables.product.prodname_oauth_app %} é criado.
| `destroy` | Acionada quando um {% data variables.product.prodname_oauth_app %} é excluído.
| `reset_secret` | Acionada quando um segredo do cliente de {% data variables.product.prodname_oauth_app %} é redefinido.
| `revoke_tokens` | Acionada quando um token de usuário de {% data variables.product.prodname_oauth_app %} é revogado.
| `transfer` |  Acionada quando um {% data variables.product.prodname_oauth_app %} é transferido para outra organização.

### Ações da categoria `org`

| Ação | Descrição
|------------------|-------------------
| `add_member` | Acionado quando um usuário entra em uma organização.
| `advanced_security_policy_selected_member_disabled` | Acionada quando um proprietário corporativo impede que as funcionalidades de {% data variables.product.prodname_GH_advanced_security %} sejam habilitadas nos repositórios que pertencem à organização. {% data reusables.advanced-security.more-information-about-enforcement-policy %}
| `advanced_security_policy_selected_member_enabled` | Acionada quando um proprietário corporativo permite que as funcionalidades de {% data variables.product.prodname_GH_advanced_security %} sejam habilitadas para os repositórios que pertencem à organização. {% data reusables.advanced-security.more-information-about-enforcement-policy %}{% ifversion fpt or ghec %}
| `audit_log_export` | Disparada quando um administrador da organização [cria uma exportação do log de auditoria da organização](#exporting-the-audit-log). Se a exportação incluir uma consulta, o log relacionará a consulta usada e o número de entradas do log de auditoria que correspondem à consulta.
| `block_user` | Disparada quando um proprietário da organização [impede que um usuário acesse os repositórios da organização](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-organization).
| `cancel_invitation` | Acionada quando um convite para ingressar na organização é revogado. {% endif %}{% ifversion fpt or ghes or ghec %}
| `create_actions_secret` | Acionada quando um segredo {% data variables.product.prodname_actions %} é criado na organização. Para obter mais informações, confira "[Como criar segredos criptografados para uma organização](/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-an-organization)".{% endif %} {% ifversion fpt or ghec %}
| `disable_oauth_app_restrictions` | Disparada quando um proprietário [desabilita restrições de acesso {% data variables.product.prodname_oauth_app %}](/articles/disabling-oauth-app-access-restrictions-for-your-organization) para sua organização.{% ifversion ghec %}
| `disable_saml` | Acionada quando um administrador da organização desabilita o logon único SAML da organização.{% endif %}{% endif %}
| `disable_member_team_creation_permission` | Acionada quando um proprietário da organização limita a criação de equipe a proprietários. Para obter mais informações, confira "[Como definir as permissões de criação de equipe na sua organização](/articles/setting-team-creation-permissions-in-your-organization)". |{% ifversion not ghae %}
| `disable_two_factor_requirement` | Acionada quando um proprietário desabilita uma exigência de autenticação de dois fatores para todos os integrantes{% ifversion fpt or ghec %}, gerentes de cobrança{% endif %} e colaboradores externos na organização.{% endif %}{% ifversion fpt or ghec %}
| `enable_oauth_app_restrictions` | Disparada quando um proprietário [habilita restrições de acesso {% data variables.product.prodname_oauth_app %}](/articles/enabling-oauth-app-access-restrictions-for-your-organization) para sua organização.{% ifversion ghec %}
| `enable_saml` | Disparada quando um administrador da organização [habilita o logon único do SAML](/articles/enabling-and-testing-saml-single-sign-on-for-your-organization) em uma organização.{% endif %}{% endif %}
| `enable_member_team_creation_permission` | Acionada quando um proprietário da organização permite a criação de equipes pelos integrantes. Para obter mais informações, confira "[Como definir as permissões de criação de equipe na sua organização](/articles/setting-team-creation-permissions-in-your-organization)". |{% ifversion not ghae %}
| `enable_two_factor_requirement` | Acionada quando um proprietário exige a autenticação de dois fatores para todos os integrantes{% ifversion fpt or ghec %}, gerentes de cobrança{% endif %} e colaboradores externos na organização.{% endif %}{% ifversion fpt or ghec %}
| `invite_member` | Disparada quando [um novo usuário foi convidado a ingressar em sua organização](/organizations/managing-membership-in-your-organization/inviting-users-to-join-your-organization).
| `oauth_app_access_approved` | Disparada quando um proprietário [concede à organização acesso a um {% data variables.product.prodname_oauth_app %}](/articles/approving-oauth-apps-for-your-organization/).
| `oauth_app_access_denied` | Disparada quando um proprietário [desabilita um acesso anteriormente aprovado do {% data variables.product.prodname_oauth_app %}](/articles/denying-access-to-a-previously-approved-oauth-app-for-your-organization) à sua organização.
| `oauth_app_access_requested` | Acionada quando um integrante da organização solicita ao proprietário acesso ao {% data variables.product.prodname_oauth_app %} da organização.{% endif %}
{%- ifversion ghec %} | `org.transfer` | Disparada quando uma organização é transferida entre contas corporativas. Para obter mais informações, confira "[Como transferir uma organização entre contas corporativas](/admin/user-management/managing-organizations-in-your-enterprise/adding-organizations-to-your-enterprise#transferring-an-organization-between-enterprise-accounts)".
{%- endif %} | `register_self_hosted_runner` | Disparada quando um novo executor auto-hospedado é registrado. Para obter mais informações, confira "[Como adicionar um executor auto-hospedado a uma organização](/actions/hosting-your-own-runners/adding-self-hosted-runners#adding-a-self-hosted-runner-to-an-organization)".
| `remove_actions_secret` | Acionada quando um sgredo de {% data variables.product.prodname_actions %} é removido.{% ifversion fpt or ghec %} | `remove_billing_manager` | Acionada quando um [proprietário remove um gerente de cobrança de uma organização](/articles/removing-a-billing-manager-from-your-organization/) ou quando a [autenticação de dois fatores é necessária em uma organização](/articles/requiring-two-factor-authentication-in-your-organization) e um gerente de cobrança não usa a 2FA ou desabilita a 2FA. |{% endif %} | `remove_member` | Acionada quando um [proprietário remove um membro de uma organização](/articles/removing-a-member-from-your-organization/){% ifversion not ghae %} ou quando a [autenticação de dois fatores é necessária em uma organização](/articles/requiring-two-factor-authentication-in-your-organization) e o membro de uma organização não usa a 2FA ou desabilita a 2FA{% endif %}. Acionada também quando o [membro de uma organização se remove](/articles/removing-yourself-from-an-organization/) dela.| | `remove_outside_collaborator` | Acionada quando um proprietário remove um colaborador externo de uma organização{% ifversion not ghae %} ou quando uma [autenticação de dois fatores é necessária em uma organização](/articles/requiring-two-factor-authentication-in-your-organization) e um colaborador externo não usa a 2FA ou desabilita a 2FA{% endif %}. | | `remove_self_hosted_runner` | Acionada quando um executor auto-hospedado é removido. Para obter mais informações, confira "[Como remover um executor de uma organização](/actions/hosting-your-own-runners/removing-self-hosted-runners#removing-a-runner-from-an-organization)". {% ifversion ghec %} | `revoke_external_identity` | Acionada quando o proprietário de uma organização revoga a identidade vinculada de um membro. Para obter mais informações, confira "[Como exibir e gerenciar o acesso SAML de um membro à sua organização](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization#viewing-and-revoking-a-linked-identity)".
| `revoke_sso_session` | Acionada quando o proprietário de uma organização revoga a sessão SAML de um membro. Para obter mais informações, confira "[Como exibir e gerenciar o acesso SAML de um membro à sua organização](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization#viewing-and-revoking-a-linked-identity)". {% endif %} | `runner_group_created` | Acionada quando um grupo de executores auto-hospedado é criado. Para obter mais informações, confira "[Como criar um grupo de executores auto-hospedados para uma organização](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#creating-a-self-hosted-runner-group-for-an-organization)".
| `runner_group_removed` | Acionada quando um grupo de executores auto-hospedados é removido. Para obter mais informações, confira "[Como remover um grupo de executores auto-hospedados](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#removing-a-self-hosted-runner-group)".
| `runner_group_updated` | Acionada quando a configuração de um grupo de executor auto-hospedado é alterada. Para obter mais informações, confira "[Como alterar a política de acesso de um grupo de executores auto-hospedados](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group)".
| `runner_group_runners_added` | Acionada quando um executor auto-hospedado é adicionado a um grupo. Para obter mais informações, confira [Como mover um executor auto-hospedado para um grupo](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#moving-a-self-hosted-runner-to-a-group).
| `runner_group_runner_removed` | Acionada quando a API REST é usada para remover um executor auto-hospedado de um grupo. Para obter mais informações, confira "[Remover um executor auto-hospedado de um grupo de uma organização](/rest/reference/actions#remove-a-self-hosted-runner-from-a-group-for-an-organization)".
| `runner_group_runners_updated`| Acionada quando a lista de integrantes do grupo de executor é atualizada. Para obter mais informações, confira "[Definir executores auto-hospedados em um grupo de uma organização](/rest/reference/actions#set-self-hosted-runners-in-a-group-for-an-organization)".
{%- ifversion code-security-audit-log-events %} | `secret_scanning_push_protection_custom_message_disabled` | Disparada quando um proprietário ou administrador da organização desabilita a mensagem personalizada disparada por uma tentativa de push para um repositório protegido contra push. Para obter mais informações, confira "[Como proteger pushes com a {% data variables.product.prodname_secret_scanning %}](/code-security/secret-scanning/protecting-pushes-with-secret-scanning#enabling-secret-scanning-as-a-push-protection-for-an-organization)".
| `secret_scanning_push_protection_custom_message_enabled` | Disparada quando um proprietário ou administrador da organização habilita a mensagem personalizada disparada por uma tentativa de push para um repositório protegido contra push. Para obter mais informações, confira "[Como proteger pushes com a {% data variables.product.prodname_secret_scanning %}](/code-security/secret-scanning/protecting-pushes-with-secret-scanning#enabling-secret-scanning-as-a-push-protection-for-an-organization)".
| `secret_scanning_push_protection_custom_message_updated` | Disparada quando um proprietário ou administrador da organização atualiza a mensagem personalizada disparada por uma tentativa de push para um repositório protegido contra push. Para obter mais informações, confira "[Como proteger pushes com a {% data variables.product.prodname_secret_scanning %}](/code-security/secret-scanning/protecting-pushes-with-secret-scanning#enabling-secret-scanning-as-a-push-protection-for-an-organization)".
{%- endif %} {%- ifversion secret-scanning-audit-log-custom-patterns %} | `secret_scanning_push_protection_disable ` | Disparada quando um proprietário da organização ou uma pessoa com acesso de administrador à organização desabilita a proteção contra push da verificação de segredos. Para obter mais informações, confira "[Como proteger os pushes com a verificação de segredos](/enterprise-cloud@latest/code-security/secret-scanning/protecting-pushes-with-secret-scanning)".
| `secret_scanning_push_protection_enable ` | Disparada quando um proprietário da organização ou uma pessoa com acesso de administrador à organização habilita a proteção contra push para {% data variables.product.prodname_secret_scanning %}.{%- endif %} | `self_hosted_runner_online` | Disparada quando o aplicativo executor é iniciado. Só pode ser visto usando a API REST. Não é visível na interface do usuário ou na exportação do JSON/CSV. Para obter mais informações, confira "[Como verificar o status de um executor auto-hospedado](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)".
| `self_hosted_runner_offline` | Disparada quando o aplicativo executor é interrompido. Só pode ser visto usando a API REST. Não é visível na interface do usuário ou na exportação do JSON/CSV. Para obter mais informações, confira "[Como verificar o status de um executor auto-hospedado](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)".{% ifversion fpt or ghes or ghec %} | `self_hosted_runner_updated` | Disparada quando o aplicativo executado é atualizado. Pode ser visto usando a API REST e a interface do usuário; não visível na exportação de JSON/CSV. Para obter mais informações, confira "[Sobre executores auto-hospedados](/actions/hosting-your-own-runners/about-self-hosted-runners#about-self-hosted-runners)".{% endif %} {% ifversion fpt or ghec %} | `set_actions_fork_pr_approvals_policy` | Disparada quando a configuração para exigir aprovações de fluxos de trabalho de forks públicos é alterada em uma organização. Para obter mais informações, confira "[Como exigir aprovação para fluxos de trabalho de forks públicos](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#requiring-approval-for-workflows-from-public-forks)".{% endif %} | `set_actions_retention_limit` | Disparada quando o período de retenção de artefatos e logs do {% data variables.product.prodname_actions %} é alterado. Para obter mais informações, confira "[Enforcing policies for {% data variables.product.prodname_actions %} in your enterprise](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-artifact-and-log-retention-in-your-enterprise)".{% ifversion fpt or ghes or ghec %} | `set_fork_pr_workflows_policy` | Disparada quando a política para fluxos de trabalho em bifurcações de repositório privado é alterada. Para obter mais informações, confira "[Como habilitar fluxos de trabalho para forks de repositório privado](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#enabling-workflows-for-private-repository-forks)".{% endif %} {% ifversion fpt or ghec %} | `unblock_user` | Disparada quando um proprietário da organização [desbloqueia um usuário em uma organização](/communities/maintaining-your-safety-on-github/unblocking-a-user-from-your-organization).{% endif %} {% ifversion fpt or ghes or ghec %} | `update_actions_secret` | Disparada quando um segredo do {% data variables.product.prodname_actions %} é atualizado.{% endif %} | `update_new_repository_default_branch_setting` | Disparada quando um proprietário altera o nome do branch padrão de novos repositórios na organização. Para obter mais informações, confira "[Como gerenciar o nome do branch padrão para repositórios na sua organização](/organizations/managing-organization-settings/managing-the-default-branch-name-for-repositories-in-your-organization)".
| `update_default_repository_permission` | Disparada quando um proprietário altera o nível de permissão padrão do repositório de membros da organização.
| `update_member` | Disparada quando um proprietário altera a função de alguém de usuário para membro ou de membro para proprietário.
| `update_member_repository_creation_permission` | Disparada quando um proprietário altera a permissão de criar repositório para membros da organização.{% ifversion fpt or ghec %} | `update_saml_provider_settings` | Disparada quando as configurações do provedor SAML de uma organização são atualizadas.
| `update_terms_of_service` | Disparada quando uma organização alterna entre os Termos de serviço padrão e os Termos de serviço corporativos. Para obter mais informações, confira "[Como fazer upgrade para os Termos de Serviço Corporativos](/articles/upgrading-to-the-corporate-terms-of-service)".{% endif %}

{% ifversion ghec %}
### Ações da categoria `org_credential_authorization`

| Ação | Descrição
|------------------|-------------------
| `grant` | Disparada quando um membro [autoriza credenciais para uso com o logon único do SAML](/github/authenticating-to-github/authenticating-with-saml-single-sign-on).
| `deauthorized` | Disparada quando um membro [cancela a autorização de credenciais para uso com o logon único do SAML](/github/authenticating-to-github/authenticating-with-saml-single-sign-on).
| `revoke` | Disparada quando um proprietário [revoga credenciais autorizadas](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization).

{% endif %}{% ifversion secret-scanning-audit-log-custom-patterns %}

### Ações da categoria `org_secret_scanning_custom_pattern`

| Ação | Descrição
|------------------|-------------------
| `create` | Disparada quando um padrão personalizado é publicado para a verificação de segredos em uma organização. Para obter mais informações, confira "[Como definir padrões personalizados para a verificação de segredos](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#defining-a-custom-pattern-for-an-organization)".
| `update` | Disparada quando as alterações em um padrão personalizado são salvas para a verificação de segredos em uma organização. Para obter mais informações, confira "[Como definir padrões personalizados para a verificação de segredos](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#editing-a-custom-pattern)".
| `delete` | Disparada quando um padrão personalizado é removido da verificação de segredos em uma organização. Para obter mais informações, confira "[Como definir padrões personalizados para a verificação de segredos](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#removing-a-custom-pattern)".

{% endif %}
### Ações da categoria `organization_default_label`

| Ação | Descrição
|------------------|-------------------
| `create` | Acionada quando uma etiqueta padrão é criada.
| `update` | Acionada quando uma etiqueta padrão é editada.
| `destroy` | Acionada quando uma etiqueta padrão é excluída.

### Ações da categoria `packages`

| Ação | Descrição |
|--------|-------------|
| `package_version_published` | Acionada quando uma versão do pacote é publicada. |
| `package_version_deleted` | Acionada quando uma versão específica do pacote é excluída. Para obter mais informações, confira "[Como excluir e restaurar um pacote](/packages/learn-github-packages/deleting-and-restoring-a-package)".
| `package_deleted` | Acionada quando um pacote inteiro é excluído. Para obter mais informações, confira "[Como excluir e restaurar um pacote](/packages/learn-github-packages/deleting-and-restoring-a-package)".
| `package_version_restored` | Acionada quando uma versão específica do pacote é excluída. Para obter mais informações, confira "[Como excluir e restaurar um pacote](/packages/learn-github-packages/deleting-and-restoring-a-package)".
| `package_restored` | Acionada quando um pacote inteiro é restaurado. Para obter mais informações, confira "[Como excluir e restaurar um pacote](/packages/learn-github-packages/deleting-and-restoring-a-package)".

{% ifversion fpt or ghec %}

### Ações da categoria `payment_method`

| Ação | Descrição
|------------------|-------------------
| `create` |  Acionada quando um novo método de pagamento, como um novo cartão de crédito ou conta PayPal, é adicionado.
| `update` | Acionada quando um método de pagamento é atualizado.

{% endif %}

{% ifversion pat-v2 %}

### Ações da categoria `personal_access_token`

| Ação | Descrição
|------------------|-------------------
| `access_granted` | Disparada quando um {% data variables.product.pat_v2 %} recebe acesso aos recursos da organização. Para obter mais informações, confira "[Como gerenciar solicitações de {% data variables.product.pat_generic %} na organização](/organizations/managing-programmatic-access-to-your-organization/managing-requests-for-personal-access-tokens-in-your-organization)".
| `access_revoked` | Disparada quando o acesso de um {% data variables.product.pat_v2 %} aos recursos da organização é revogado. O token ainda pode ler recursos públicos da organização. Para obter mais informações, confira "[Como revisar e revogar {% data variables.product.pat_generic %} na organização](/organizations/managing-programmatic-access-to-your-organization/reviewing-and-revoking-personal-access-tokens-in-your-organization)".
| `request_cancelled` | Disparada quando um membro da organização cancela uma solicitação de {% data variables.product.pat_v2 %} para acessar recursos da organização.
| `request_created` | Disparada quando um membro da organização cria u {% data variables.product.pat_v2 %} para acessar recursos da organização e a organização requer aprovação para que um {% data variables.product.pat_v2 %} possa acessar os respectivos recursos. Para obter mais informações, confira "[Como gerenciar solicitações de {% data variables.product.pat_generic %} na organização](/organizations/managing-programmatic-access-to-your-organization/managing-requests-for-personal-access-tokens-in-your-organization)".
| `request_denied` | Disparada quando a solicitação para que o {% data variables.product.pat_v2 %} acesse os recursos da organização é negada. Para obter mais informações, confira "[Como gerenciar solicitações de {% data variables.product.pat_generic %} na organização](/organizations/managing-programmatic-access-to-your-organization/managing-requests-for-personal-access-tokens-in-your-organization)".

{% endif %}

### Ações da categoria `profile_picture`
| Ação | Descrição
|------------------|-------------------
| atualizar | Acionada quando você define ou atualiza a foto de perfil da organização.

### Ações da categoria `project`

| Ação | Descrição
|--------------------|---------------------
| `create` | Acionada quando um quadro de projeto é criado.
| `link` | Acionada quando um repositório é vinculado a um quadro de projeto.
| `rename` | Acionada quando um quadro de projeto é renomeado.
| `update` | Acionada quando um quadro de projeto é atualizado.
| `delete` | Acionada quando um quadro de projeto é excluído.
| `unlink` | Acionada quando um repositório é desvinculado de um quadro de projeto.
| `update_org_permission` | Acionada quando a permissão no nível de base para todos os integrantes da organização é alterada ou removida. |
| `update_team_permission` | Acionada quando o nível de permissão do quadro de projeto de uma equipe é alterado ou quando uma equipe é adicionada ou removida de um quadro de projeto. |
| `update_user_permission` | Acionada quando um integrante ou colaborador externo da organização é adicionado ou removido de um quadro de projeto ou tem seu nível de permissão alterado.|

### Ações da categoria `protected_branch`

| Ação | Descrição
|--------------------|---------------------
| `create ` | Acionada quando a proteção do branch é habilitada em um branch.
| `destroy` | Acionada quando a proteção do branch é desabilitada em um branch.
| `update_admin_enforced ` | Acionada quando a proteção do branch é exigida para os administradores do repositório.
| `update_require_code_owner_review ` | Acionada quando a exigência da revisão do proprietário do código é atualizada em um branch.
| `dismiss_stale_reviews ` | Acionada quando a exigência de ignorar pull requests obsoletas é atualizada em um branch.
| `update_signature_requirement_enforcement_level ` | Acionada quando a exigência de assinatura de commit obrigatória é atualizada em um branch.
| `update_pull_request_reviews_enforcement_level ` | Acionada quando a exigência de revisão de pull requests é atualizada em um branch. Pode ser `0`(desativado), `1`(não administradores) ou `2`(todos).
| `update_required_status_checks_enforcement_level ` | Acionada quando a exigência de verificações de status obrigatórias é atualizada em um branch.
| `update_strict_required_status_checks_policy` | Acionada quando a exigência de um branch estar atualizado antes de o merge ser alterado.
| `rejected_ref_update ` | Acionada quando uma tentativa de atualização do branch é rejeitada.
| `policy_override ` | Acionada quando um requisito de proteção do branch é sobrescrito por um administrador do repositório.
| `update_allow_force_pushes_enforcement_level ` | Acionada quando o push forçado é habilitado ou desabilitado para um branch protegido.
| `update_allow_deletions_enforcement_level ` | Acionada quando a exclusão do branch é habilitada ou desabilitada para um branch protegido.
| `update_linear_history_requirement_enforcement_level ` | Acionada quando o histórico de commit linear necessário está habilitado ou desabilitado em um branch protegido.

### Ações da categoria `pull_request`

| Ação | Descrição
|------------------|-------------------
| `create` | Acionada quando é criado um pull request.
| `close` | Acionada quando uma pull request é fechado sem o merge.
| `reopen` | Acionada quando um pull request é reaberto após ser fechado anteriormente.
| `merge` | Acionada quando um pull request é mesclado.
| `indirect_merge` | Acionada quando uma solicitação de pull é considerada como mesclada, pois seus commits foram mesclados no branch de destino.
| `ready_for_review` | Acionada quando um pull request é marcado como pronto para revisão.
| `converted_to_draft` | Acionada quando um pull request é convertido em um rascunho.
| `create_review_request` | Acionada quando uma revisão é solicitada.
| `remove_review_request` | Acionada quando uma solicitação de revisão é removida.

### Ações da categoria `pull_request_review`

| Ação | Descrição
|------------------|-------------------
| `submit` | Acionada quando uma revisão é enviada.
| `dismiss` | Acionada quando uma revisão é ignorada.
| `delete` | Acionada quando uma revisão é excluída.

### Ações da categoria `pull_request_review_comment`

| Ação | Descrição
|------------------|-------------------
| `create` | Acionada quando um comentário de revisão é adicionado.
| `update` | Acionada quando um comentário de revisão é alterado.
| `delete` | Acionada quando um comentário de revisão é excluído.

### Ações da categoria `repo`

| Ação | Descrição
|------------------|-------------------
| `access` | Disparada quando um usuário [altera a visibilidade](/github/administering-a-repository/setting-repository-visibility) de um repositório na organização.
| `actions_enabled` | Acionada quando {% data variables.product.prodname_actions %} está habilitado para um repositório. Pode ser visto usando a interface do usuário. Este evento não é incluído quando você acessar o log de auditoria usando a API REST. Para obter mais informações, confira "[Como usar a API REST](#using-the-rest-api)".
| `add_member` | Disparada quando um usuário aceita um [convite para ter acesso de colaboração a um repositório](/articles/inviting-collaborators-to-a-personal-repository).
| `add_topic` | Disparada quando um administrador do repositório [adiciona um tópico](/articles/classifying-your-repository-with-topics) a um repositório.
| `advanced_security_disabled` | Acionada quando um administrador do repositório desabilita funcionalidades de {% data variables.product.prodname_GH_advanced_security %} no repositório. Para obter mais informações, confira "[Como gerenciar as configurações de segurança e de análise do seu repositório](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)".
| `advanced_security_enabled` | Acionada quando um administrador do repositório habilita funcionalidades de {% data variables.product.prodname_GH_advanced_security %} para o repositório. Para obter mais informações, confira "[Como gerenciar as configurações de segurança e análise do seu repositório](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)".
| `archived` | Disparada quando um administrador do repositório [arquiva um repositório](/articles/about-archiving-repositories).{% ifversion ghes %}
| `config.disable_anonymous_git_access` | Disparada quando o [acesso de leitura anônimo do Git é desabilitado](/enterprise/user/articles/enabling-anonymous-git-read-access-for-a-repository) em um repositório público.
| `config.enable_anonymous_git_access` | Disparada quando o [acesso de leitura anônimo do Git é habilitado](/enterprise/user/articles/enabling-anonymous-git-read-access-for-a-repository) em um repositório público.
| `config.lock_anonymous_git_access` | Disparada quando a [configuração de acesso de leitura anônimo do Git de um repositório é bloqueada](/enterprise/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access).
| `config.unlock_anonymous_git_access` | Disparada quando a [configuração de acesso de leitura anônimo do Git de um repositório é desbloqueada](/enterprise/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access).{% endif %}
| `create` | Disparada quando [um novo repositório é criado](/articles/creating-a-new-repository).{% ifversion fpt or ghes or ghec %}
| `create_actions_secret` |Acionada quando um segredo {% data variables.product.prodname_actions %} é criado em um repositório. Para obter mais informações, confira "[Como criar segredos criptografados para um repositório](/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-a-repository)".{% endif %}
| `destroy` | Disparada quando [um repositório é excluído](/articles/deleting-a-repository).{% ifversion fpt or ghec %}
| `disable` | Disparada quando um repositório é desabilitado (por exemplo, por [fundos insuficientes](/articles/unlocking-a-locked-account)).{% endif %}
| `enable` | Disparada quando um repositório é habilitado novamente.{% ifversion fpt or ghes or ghec %}
| `remove_actions_secret` | Acionada quando um segredo de {% data variables.product.prodname_actions %} é removido.{% endif %}
| `remove_member` | Disparada quando um usuário é [removido de um repositório como colaborador](/articles/removing-a-collaborator-from-a-personal-repository).
| `register_self_hosted_runner` | Acionada quando um novo executor auto-hospedado é registrado. Para obter mais informações, confira "[Como adicionar um executor auto-hospedado a um repositório](/actions/hosting-your-own-runners/adding-self-hosted-runners#adding-a-self-hosted-runner-to-a-repository)".
| `remove_self_hosted_runner` | Acionada quando um executor auto-hospedado é removido. Para obter mais informações, confira "[Como remover um executor de um repositório](/actions/hosting-your-own-runners/removing-self-hosted-runners#removing-a-runner-from-a-repository)".
| `remove_topic` | Acionada quando um administrador do repositório remove um tópico de um repositório.
| `rename` | Disparada quando [um repositório é renomeado](/articles/renaming-a-repository).
| `self_hosted_runner_online` | Acionada quando o aplicativo do executor é iniciado. Só pode ser visto usando a API REST. Não é visível na interface do usuário ou na exportação do JSON/CSV. Para obter mais informações, confira "[Como verificar o status de um executor auto-hospedado](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)".
| `self_hosted_runner_offline` | Acionada quando o aplicativo do executor é interrompido. Só pode ser visto usando a API REST. Não é visível na interface do usuário ou na exportação do JSON/CSV. Para obter mais informações, confira "[Como verificar o status de um executor auto-hospedado](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)".{% ifversion fpt or ghes or ghec %}
| `self_hosted_runner_updated` | Acionada quando o executor é atualizado. Pode ser visto usando a API REST e a interface do usuário; não visível na exportação de JSON/CSV. Para obter mais informações, confira "[Sobre os executores auto-hospedados](/actions/hosting-your-own-runners/about-self-hosted-runners#about-self-hosted-runners)".{% endif %}{% ifversion fpt or ghec %}
| `set_actions_fork_pr_approvals_policy` | Acionada quando a configuração para exigir aprovações de fluxos de trabalho de bifurcações públicas é alterada. Para obter mais informações, confira "[Como gerenciar as configurações do {% data variables.product.prodname_actions %} de um repositório](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-required-approval-for-workflows-from-public-forks)".{% endif %}
| `set_actions_retention_limit` | Acionada quando o período de retenção para artefatos e registros de {% data variables.product.prodname_actions %} for alterado. Para obter mais informações, confira "[Como gerenciar as configurações do {% data variables.product.prodname_actions %} de um repositório](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-repository)".{% ifversion fpt or ghes or ghec %}
| `set_fork_pr_workflows_policy` | Acionada quando a política de fluxos de trabalho nas bifurcações privadas do repositório é alterada. Para obter mais informações, confira "[Como gerenciar as configurações do {% data variables.product.prodname_actions %} de um repositório](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#enabling-workflows-for-private-repository-forks)".{% endif %}
| `staff_unlock` | Acionada quando um proprietário da empresa ou {% data variables.contact.github_support %} (com permissão de um administrador de repositório) desbloqueou temporariamente o repositório. A visibilidade do repositório não é alterada.
| `transfer` | Disparada quando [um repositório é transferido](/articles/how-to-transfer-a-repository).
| `transfer_start` | Acionada quando uma transferência de repositório está prestes a ocorrer.
| `unarchived` | Disparada quando um administrador do repositório desarquiva um repositório.{% ifversion fpt or ghes or ghec %}
| `update_actions_secret` | Acionada quando um segredo de {% data variables.product.prodname_actions %} é atualizado.{% endif %}

{% ifversion fpt or ghec %}

### Ações da categoria `repository_advisory`

| Ação | Descrição
|------------------|-------------------
| `close` | Acionada quando alguém fecha uma consultoria de segurança. Para obter mais informações, confira "[Sobre os avisos de segurança do {% data variables.product.prodname_dotcom %}](/github/managing-security-vulnerabilities/about-github-security-advisories)".
| `cve_request` | Acionada quando alguém solicita um número de CVE (Vulnerabilidades e Exposições Comuns) de {% data variables.product.prodname_dotcom %} para um rascunho da consultoria de segurança.
| `github_broadcast` | Acionada quando {% data variables.product.prodname_dotcom %} torna uma consultoria de segurança pública em {% data variables.product.prodname_advisory_database %}.
| `github_withdraw` | Acionada quando {% data variables.product.prodname_dotcom %} retira uma consultoria de segurança publicado com erro.
| `open` | Acionada quando alguém abre uma consultoria de segurança.
| `publish` | Acionada quando alguém publica uma consultoria de segurança.
| `reopen` | Acionada quando alguém reabre como um rascunho de consultoria de segurança.
| `update` | Acionada quando alguém edita um rascunho ou uma consultoria de segurança publicada.

### Ações da categoria `repository_content_analysis`

| Ação | Descrição
|------------------|-------------------
| `enable` | Disparada quando um proprietário da organização ou uma pessoa com acesso de administrador ao repositório [habilita as configurações de uso de dados em um repositório privado](/get-started/privacy-on-github/managing-data-use-settings-for-your-private-repository).
| `disable` | Disparada quando um proprietário da organização ou uma pessoa com acesso de administrador ao repositório [desabilita as configurações de uso de dados em um repositório privado](/get-started/privacy-on-github/managing-data-use-settings-for-your-private-repository).

{% endif %}{% ifversion fpt or ghec %}

### Ações da categoria `repository_dependency_graph`

| Ação | Descrição
|------------------|-------------------
| `disable` | Disparada quando um proprietário do repositório ou uma pessoa com acesso de administrador ao repositório desabilita o grafo de dependência de um{% ifversion fpt or ghec %}repositório {% endif %}privado. Para obter mais informações, confira "[Sobre o grafo de dependência](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)".
| `enable` | Disparada quando um proprietário do repositório ou uma pessoa com acesso de administrador ao repositório habilita o grafo de dependência de um{% ifversion fpt or ghec %}repositório {% endif %}privado.

{% endif %}{% ifversion ghec or ghes or ghae %}
### Ações da categoria `repository_secret_scanning`

| Ação | Descrição
|------------------|-------------------
| `disable` | Disparada quando um proprietário de repositório ou uma pessoa com acesso de administrador ao repositório desabilita a verificação de segredos em um repositório. Para obter mais informações, confira "[Sobre a verificação de segredos](/github/administering-a-repository/about-secret-scanning)".
| `enable` | Disparada quando um proprietário de repositório ou uma pessoa com acesso de administrador ao repositório habilita a verificação de segredos em um repositório.

{% endif %}{% ifversion secret-scanning-audit-log-custom-patterns %}

### Ações da categoria `repository_secret_scanning_custom_pattern`

| Ação | Descrição
|------------------|-------------------
| `create` | Disparada quando um padrão personalizado é publicado para a verificação de segredos em um repositório. Para obter mais informações, confira "[Como definir padrões personalizados para a verificação de segredos](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#defining-a-custom-pattern-for-a-repository)".
| `update` | Disparada quando as alterações em um padrão personalizado são salvas para a verificação de segredos em um repositório. Para obter mais informações, confira "[Como definir padrões personalizados para a verificação de segredos](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#editing-a-custom-pattern)".
| `delete` | Disparada quando um padrão personalizado é removido da verificação de segredos em um repositório. Para obter mais informações, confira "[Como definir padrões personalizados para a verificação de segredos](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#removing-a-custom-pattern)".

{% endif %}{% ifversion secret-scanning-audit-log-custom-patterns %}

### Ações da categoria `repository_secret_scanning_push_protection`

| Ação | Descrição
|------------------|-------------------
| `disable` | Disparada quando um proprietário de repositório ou uma pessoa com acesso de administrador ao repositório desabilita a verificação de segredos em um repositório. Para obter mais informações, confira "[Como proteger os pushes com a verificação de segredos](/code-security/secret-scanning/protecting-pushes-with-secret-scanning)".
| `enable` | Disparada quando um proprietário de repositório ou uma pessoa com acesso de administrador ao repositório habilita a verificação de segredos em um repositório.

{% endif %}
### Ações da categoria `repository_vulnerability_alert`

| Ação | Descrição
|------------------|-------------------
| `create` | Acionada quando {% data variables.product.product_name %} cria um alerta {% data variables.product.prodname_dependabot %} para um repositório que usa uma dependência vulnerável. Para obter mais informações, confira "[Sobre os {% data variables.product.prodname_dependabot_alerts %}](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)".
| `dismiss` | Acionada quando um proprietário ou pessoa com acesso de administrador ao repositório descarta um alerta {% data variables.product.prodname_dependabot %} sobre uma dependência vulnerável.
| `resolve` | Acionada quando alguém com acesso de gravação a um repositório, faz alterações para atualizar e resolver uma vulnerabilidade na dependência de um projeto.
{% ifversion fpt or ghec %}
### Ações da categoria `repository_vulnerability_alerts`

| Ação | Descrição
|------------------|-------------------
| `authorized_users_teams` | Disparada quando um proprietário da organização ou uma pessoa com permissões de administrador no repositório atualiza a lista de pessoas ou equipes autorizadas a receber {% data variables.product.prodname_dependabot_alerts %} do repositório. Para obter mais informações, confira "[Como gerenciar as configurações de segurança e de análise do seu repositório](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts)".
| `disable` | Acionada quando um proprietário ou pessoa do repositório com acesso de administrador ao repositório desabilita {% data variables.product.prodname_dependabot_alerts %}.
| `enable` | Acionada quando um proprietário ou pessoa do repositório com acesso de administrador ao repositório habilita {% data variables.product.prodname_dependabot_alerts %}.

{% endif %}{% ifversion custom-repository-roles %}
### Ações da categoria `role`
| Ação | Descrição
|------------------|-------------------
|`create` | Acionada quando um proprietário da organização cria uma nova função personalizada no repositório. Para obter mais informações, confira "[Como gerenciar funções de repositório personalizadas de uma organização](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization)".
|`destroy` | Acionada quando um proprietário da organização exclui uma função personalizada do repositório. Para obter mais informações, confira "[Como gerenciar funções de repositório personalizadas de uma organização](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization)".
|`update` | Acionada quando um proprietário da organização edita uma função personalizada do repositório. Para obter mais informações, confira "[Como gerenciar funções de repositório personalizadas de uma organização](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization)".

{% endif %} {% ifversion ghec or ghes or ghae %}
### Ações da categoria `secret_scanning`

| Ação | Descrição
|------------------|-------------------
| `disable` | Acionada quando um proprietário da organização desabilita a digitalização de segerdo para todos os repositórios{% ifversion ghec %}, privado ou interno de{% endif %}. Para obter mais informações, confira "[Sobre a verificação de segredos](/github/administering-a-repository/about-secret-scanning)".
| `enable` | Acionada quando um proprietário da organização permite a digitalização de segredo de todos os repositórios{% ifversion ghec %}existentes, privados ou internos{% endif %}.
{% endif %}

{% ifversion secret-scanning-alert-audit-log %}
### Ações da categoria `secret_scanning_alert`

| Ação | Descrição
|------------------|-------------------
| `create` | Disparada quando o {% data variables.product.prodname_dotcom %} detecta um segredo exposto e cria um alerta do {% data variables.product.prodname_secret_scanning %}. Para obter mais informações, confira "[Como gerenciar alertas da {% data variables.product.prodname_secret_scanning %}](/code-security/secret-scanning/managing-alerts-from-secret-scanning)".
| `reopen` | Disparada quando um usuário reabre um alerta do {% data variables.product.prodname_secret_scanning %}.
| `resolve` | Disparada quando um usuário resolve um alerta do {% data variables.product.prodname_secret_scanning %}.
{% endif %}

{% ifversion ghec or ghes or ghae %}
### Ações da categoria `secret_scanning_new_repos`

| Ação | Descrição
|------------------|-------------------
| `disable` | Acionada quando um proprietário da organização desabilita a digitalização de segredo para todos os novos repositórios {% ifversion ghec %}privados ou internos {% endif %}. Para obter mais informações, confira "[Sobre a verificação de segredos](/github/administering-a-repository/about-secret-scanning)".
| `enable` | Acionada quando um proprietário da organização habilita a digitalização de segredo para todos os novos repositórios {% ifversion ghec %}privados ou internos {% endif %}.
{% endif %}

{% ifversion secret-scanning-push-protection-bypasses %}
### Ações da categoria `secret_scanning_push_protection`

| Ação | Descrição
|------------------|-------------------
| `bypass` | Disparada quando um usuário ignora a proteção de push em um segredo detectado pela verificação de segredos. Para obter mais informações, confira "[Como ignorar a proteção de push de um segredo](/code-security/secret-scanning/protecting-pushes-with-secret-scanning#bypassing-push-protection-for-a-secret)".
{% endif %}

{% ifversion fpt or ghec %}
### Ações da categoria `sponsors`

| Ação | Descrição
|------------------|-------------------
| `custom_amount_settings_change` | Disparada quando você habilita ou desabilita valores personalizados ou quando você altera o valor personalizado sugerido (confira "[Como gerenciar suas camadas de patrocínio](/github/supporting-the-open-source-community-with-github-sponsors/managing-your-sponsorship-tiers)")
| `repo_funding_links_file_action` | Disparada quando você altera o arquivo FUNDING no seu repositório (confira "[Como exibir um botão de patrocinador no seu repositório](/articles/displaying-a-sponsor-button-in-your-repository)")
| `sponsor_sponsorship_cancel` | Disparada quando você cancela um patrocínio (confira "[Como fazer o downgrade de um patrocínio](/articles/downgrading-a-sponsorship)")
| `sponsor_sponsorship_create` | Disparada quando você patrocina uma conta (confira "[Como patrocinar um colaborador de código aberto](/sponsors/sponsoring-open-source-contributors/sponsoring-an-open-source-contributor)")
| `sponsor_sponsorship_payment_complete` | Disparada depois que você patrocina uma conta e seu pagamento é processado (confira "[Como patrocinar um colaborador de código aberto](/sponsors/sponsoring-open-source-contributors/sponsoring-an-open-source-contributor)")
| `sponsor_sponsorship_preference_change` | Disparada quando você altera a configuração de recebimento de atualizações por email de uma conta patrocinada (confira "[Como gerenciar seu patrocínio](/sponsors/sponsoring-open-source-contributors/managing-your-sponsorship)")
| `sponsor_sponsorship_tier_change` | Disparada quando você faz upgrade ou downgrade do seu patrocínio (confira "[Como fazer upgrade de um patrocínio](/articles/upgrading-a-sponsorship)" e "[Como fazer downgrade de um patrocínio](/articles/downgrading-a-sponsorship)")
| `sponsored_developer_approve` | Disparada quando sua conta do {% data variables.product.prodname_sponsors %} é aprovada (confira "[Como configurar o {% data variables.product.prodname_sponsors %} para sua organização](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-organization)")
| `sponsored_developer_create` | Disparada quando sua conta do {% data variables.product.prodname_sponsors %} é criada (confira "[Como configurar o {% data variables.product.prodname_sponsors %} para sua organização](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-organization)")
| `sponsored_developer_disable` | Acionada quando sua conta {% data variables.product.prodname_sponsors %} está desabilitado
| `sponsored_developer_redraft` | Acionada quando sua conta de {% data variables.product.prodname_sponsors %} é retornada ao estado de rascunho a partir do estado aprovado
| `sponsored_developer_profile_update` | Disparada quando você edita seu perfil de organização patrocinada (confira "[Como editar os detalhes do seu perfil no {% data variables.product.prodname_sponsors %}](/sponsors/receiving-sponsorships-through-github-sponsors/editing-your-profile-details-for-github-sponsors)")
| `sponsored_developer_request_approval` | Disparada quando você envia seu aplicativo ao {% data variables.product.prodname_sponsors %} para aprovação (confira "[Como configurar o {% data variables.product.prodname_sponsors %} para sua organização](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-organization)")
| `sponsored_developer_tier_description_update` | Disparada quando você altera a descrição de uma camada de patrocínio (confira "[Como gerenciar suas camadas de patrocínio](/sponsors/receiving-sponsorships-through-github-sponsors/managing-your-sponsorship-tiers)")
| `sponsored_developer_update_newsletter_send` | Disparada quando você envia uma atualização de email para seus patrocinadores (confira "[Como entrar em contato com seus patrocinadores](/sponsors/receiving-sponsorships-through-github-sponsors/contacting-your-sponsors)")
| `waitlist_invite_sponsored_developer` | Disparada quando você é convidado a entrar na lista de espera do {% data variables.product.prodname_sponsors %} (confira "[Como configurar o {% data variables.product.prodname_sponsors %} para sua organização](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-organization)")
| `waitlist_join` | Disparada quando você entra na lista de espera para se tornar uma organização patrocinada (confira "[Como configurar o {% data variables.product.prodname_sponsors %} para sua organização](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-organization)")
{% endif %}

### Ações da categoria `team`

| Ação | Descrição
|------------------|-------------------
| `add_member` | Disparada quando um membro de uma organização é [adicionado a uma equipe](/articles/adding-organization-members-to-a-team).
| `add_repository` | Acionada quando uma equipe recebe o controle de um repositório.
| `change_parent_team` | Disparada quando uma equipe filho é criada ou [o pai de uma equipe filho é alterado](/articles/moving-a-team-in-your-organization-s-hierarchy).
| `change_privacy` | Acionada quando nível de privacidade de uma equipe é alterado.
| `create` | Acionada quando uma equipe é criada.
| `demote_maintainer` | Acionada quando um usuário foi rebaixado de mantenedor da equipe para um integrante da equipe. Para obter mais informações, confira "[Como atribuir a função de mantenedor da equipe a um membro da equipe](/organizations/organizing-members-into-teams/assigning-the-team-maintainer-role-to-a-team-member)".
| `destroy` | Acionada quando uma equipe é excluída da organização.
| `team.promote_maintainer` | Acionada quando um usuário foi promovido de integrante de equipe para mantenedor de equipe. Para obter mais informações, confira "[Como atribuir a função de mantenedor da equipe a um membro da equipe](/organizations/organizing-members-into-teams/assigning-the-team-maintainer-role-to-a-team-member)".
| `remove_member` | Disparada quando um membro de uma organização é [removido de uma equipe](/articles/removing-organization-members-from-a-team).
| `remove_repository` | Acionada quando um repositório deixa de ser controlado por uma equipe.

### Ações da categoria `team_discussions`

| Ação | Descrição
|---|---|
| `disable` | Acionada quando um proprietário da organização desabilita as discussões de equipe em uma organização. Para obter mais informações, confira "[Como desabilitar discussões em equipe da sua organização](/articles/disabling-team-discussions-for-your-organization)".
| `enable` | Acionada quando um proprietário da organização habilita as discussões de equipe em uma organização.

### Ações da categoria `workflows`

{% data reusables.actions.actions-audit-events-workflow %}
## Leitura adicional

- "[Como manter a organização segura](/articles/keeping-your-organization-secure)"{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %} {%- ifversion fpt or ghec %}
- "[Exportando as informações de membro para a sua organização](/organizations/managing-membership-in-your-organization/exporting-member-information-for-your-organization)"{% endif %} {%- endif %}
