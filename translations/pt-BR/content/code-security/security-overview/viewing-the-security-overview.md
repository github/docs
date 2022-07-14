---
title: Visualizando a visão geral de segurança
intro: Acesse as diferentes visualizações disponíveis na visão geral de segurança
permissions: '{% data reusables.security-center.permissions %}'
product: '{% data reusables.gated-features.security-center %}'
versions:
  ghae: issue-5503
  ghes: '*'
  ghec: '*'
type: how_to
topics:
  - Security overview
  - Advanced Security
  - Alerts
  - Organizations
  - Teams
shortTitle: Ver visão geral de segurança
---

{% ifversion ghes < 3.5 or ghae %}
{% data reusables.security-center.beta %}
{% endif %}

## Visualizar a visão geral de segurança de uma organização

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.security-overview %}
1. Para visualizar informações agregadas sobre tipos de alertas, clique em **Mostrar mais**. ![Botão mostrar mais](/assets/images/help/organizations/security-overview-show-more-button.png)
{% data reusables.organizations.filter-security-overview %}
{% ifversion security-overview-views %}
{% data reusables.organizations.security-overview-feature-specific-page %}
  ![Captura de tela da página de digitalização específica do código](/assets/images/help/organizations/security-overview-code-scanning-alerts.png)

## Visualizando alertas em toda a sua organização

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.security-overview %}
1. Na barra lateral de segurança, selecione o subconjunto de alertas que você deseja visualizar. ![Ver subconjunto de alerta](/assets/images/help/organizations/view-alert-subset.png)
2. Opcionalmente, filtre a lista de alertas. Cada visualização tem sua própria seleção de filtros disponíveis. Você pode clicar em vários filtros nos menus suspensos de filtro para restringir a sua pesquisa. Você também pode digitar os qualificadores de busca no campo de busca. Para obter mais informações sobre os qualificados disponíveis, consulte "[Filtrando alertas na visão geral de segurança](/code-security/security-overview/filtering-alerts-in-the-security-overview)". ![Os menus de filtro suspenso e o campo de repositórios de pesquisa na visualização de digitalização de segredo](/assets/images/help/organizations/secret-scanning-filter-alerts.png)

{% ifversion ghec or ghes > 3.4 or ghae-issue-6199 %}
## Visualizando a visão geral de segurança de uma empresa

{% data reusables.enterprise-accounts.access-enterprise-on-dotcom %}
1. Na barra lateral esquerda, clique em {% octicon "shield" aria-label="The shield icon" %} **Código de Segurança**.
{% ifversion security-overview-feature-specific-alert-page %}
{% data reusables.organizations.security-overview-feature-specific-page %}
{% endif %}
{% endif %}

## Visualizando alertas de um repositório

{% data reusables.repositories.navigate-to-repo %}
1. No nome do repositório, clique em **Segurança**. ![Aba de segurança do repositório](/assets/images/help/repository/security-tab.png)
2. Na barra lateral de segurança, selecione a visualização que deseja abrir. ![Subconjunto de alerta para visualização do repositório](/assets/images/help/repository/repo-security-side-panel.png)
3. Opcionalmente, filtre a lista de alertas. Cada visualização tem sua própria seleção de filtros disponíveis. Você pode clicar em vários filtros nos menus suspensos de filtro para restringir a sua pesquisa. Você também pode digitar os qualificadores de busca no campo de busca. Para obter mais informações sobre os qualificados disponíveis, consulte "[Filtrando alertas na visão geral de segurança](/code-security/security-overview/filtering-alerts-in-the-security-overview)". ![Menu de filtros suspenso na visualização de alertas da digitalização de segredo do repositório](/assets/images/help/repository/repo-code-scanning-filter-and-search.png)

{% endif %}

## Visualizar a visão geral de segurança de uma equipe

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team-security-overview %}
{% data reusables.organizations.filter-security-overview %}
