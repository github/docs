---
title: Configurar combinación de confirmaciones para las solicitudes de extracción
intro: 'Puedes hacer cumplir, permitir o inhabilitar combinaciones de confirmación para todas las fusiones de las solicitudes de extracción en {% data variables.product.product_location %} en tu repositorio.'
redirect_from:
  - /articles/configuring-commit-squashing-for-pull-requests
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% data reusables.pull_requests.configure_pull_request_merges_intro %}

{% data reusables.pull_requests.default-commit-message-squash-merge %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. En "Merge button" (Fusionar botón), selecciona **Allow merge commits** (Permitir fusión de confirmaciones). Esto permite que los colaboradores fusionen una solicitud de extracción con un historial completo de confirmaciones. ![allow_standard_merge_commits](/assets/images/help/repository/pr-merge-full-commits.png)
4. En "Merge button" (Fusionar botón), selecciona **Allow rebase merging** (Permitir fusión de combinación). Esto permite que los colaboradores fusionen una solicitud de extracción al combinar todas las confirmaciones en una confirmación única. Si seleccionas otro método de fusión además de **Allow squash merging** (Permitir combinación de fusiones), los colaboradores podrán elegir el tipo de confirmación de fusiones al fusionar una solicitud de extracción. {% data reusables.repositories.squash-and-rebase-linear-commit-hisitory %} ![Confirmaciones combinadas de solicitudes de extracción](/assets/images/help/repository/pr-merge-squash.png)

### Leer más

- "[Acerca de las fusiones de solicitudes de extracción](/articles/about-pull-request-merges/)"
- "[Fusionar una solicitud de extracción](/articles/merging-a-pull-request)"
