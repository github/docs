---
title: Configurar rebase de confirmación para las solicitudes de extracción
intro: 'Puedes hacer cumplir, permitir o inhabilitar rebases de confirmación para todas las fusiones de las solicitudes de extracción en {% data variables.product.product_location %} en tu repositorio.'
redirect_from:
  - /articles/configuring-commit-rebasing-for-pull-requests
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - repositories
---

{% data reusables.pull_requests.configure_pull_request_merges_intro %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. En "Merge button" (Fusionar botón), selecciona **Allow rebase merging** (Permitir fusión de rebase). Esto permite que los colaboradores fusionen una solicitud de extracción al rebasar sus confirmaciones individuales en la rama base. Si también seleccionas otro método de fusión, los colaboradores podrán elegir el tipo de confirmación de fusión al fusionar una solicitud de extracción. {% data reusables.repositories.squash-and-rebase-linear-commit-hisitory %} ![Confirmaciones de rebase de solicitudes de extracción](/assets/images/help/repository/pr-merge-rebase.png)
