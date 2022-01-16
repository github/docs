---
title: Configurar el periodo de retenciòn para los artefactos de GitHub Actions y las bitàcoras en tu repositorio
intro: 'Puedes configurar el periodo de retenciòn para los artefactos de las {% data variables.product.prodname_actions %} y las bitàcoras en tu repositorio.'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.23'
  github-ae: '*'
topics:
  - Repositories
redirect_from:
  - /github/administering-a-repository/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-repository
---

{% data reusables.actions.about-artifact-log-retention %}

Tambièn puedes definir un periodo de retenciòn personalizado para un artefacto especìfico que haya creado un flujo de trabajo. Para obtener màs informaciòn consulta la secciòn "[Configurar el periodo de retenciòn para un artefacto](/actions/managing-workflow-runs/removing-workflow-artifacts#setting-the-retention-period-for-an-artifact)".

## Configurar el periodo de retenciòn para un repositorio

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.settings-sidebar-actions %}
{% data reusables.github-actions.change-retention-period-for-artifacts-logs  %}
