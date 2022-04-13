---
title: Acessando relatórios de conformidade para a sua organização
intro: 'Você pode acessar as denúncias de conformidade de {% data variables.product.company_short %}, como nossos relatórios SOC e auto-avaliação da Cloud Security Alliance CAIQ (CSA CAIQ), para a sua organização.'
versions:
  ghec: '*'
type: how_to
topics:
  - Organizations
  - Teams
permissions: Organization owners can access compliance reports for the organization.
shortTitle: Acessar relatórios de conformidade
---

## Sobre os relatórios de conformidade de {% data variables.product.company_short %}

Você pode acessar os relatórios de conformidade de {% data variables.product.company_short %} nas configurações da organização.

{% data reusables.security.compliance-report-list %}


{% note %}

**Obserbação:** Para ver relatórios de conformidade, a sua organização deve usar {% data variables.product.prodname_ghe_cloud %}. {% data reusables.enterprise.link-to-ghec-trial %}

{% endnote %}

## Acessando relatórios de conformidade para a sua organização

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security %}
1. Em "Relatórios de Conformidade", à direita do relatório que você deseja acessar, clique em {% octicon "download" aria-label="The Download icon" %} **Download** ou {% octicon "link-external" aria-label="The external link icon" %} **Visualizar**.

   {% data reusables.security.compliance-report-screenshot %}

## Leia mais

- "[Relatórios de conformidade para a sua empresa](/admin/overview/accessing-compliance-reports-for-your-enterprise)"
