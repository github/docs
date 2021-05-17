---
title: Utilizar etiquetas con ejecutores hospedados en AE
intro: 'Puedes utilizar etiquetas para organizar tus {% data variables.actions.hosted_runner %} con base en sus características.'
versions:
  github-ae: '*'
---

{% data reusables.actions.ae-beta %}

Para obtener más información sobre cómo utilizar las etiquetas para enrutar jobs a tipos específicos de {% data variables.actions.hosted_runner %}, consulta la sección "[Utilizar {% data variables.actions.hosted_runner %} en un flujo de trabajo](/actions/using-github-hosted-runners/using-ae-hosted-runners-in-a-workflow)".


{% note %}

**Nota:** Para administrar las etiquetas para tus {% data variables.actions.hosted_runner %}, necesitarás contactar al soporte de {% data variables.product.prodname_dotcom %}.

{% endnote %}

### Visualizar las etiquetas de tus {% data variables.actions.hosted_runner %}
{% data reusables.github-actions.hosted-runner-navigate-to-repo-org-enterprise %}
{% data reusables.github-actions.hosted-runner-list %}
{% data reusables.github-actions.hosted-runner-list-group %}
1. Ubica el ejecutor que quieras verificar y haz clic en {% octicon "triangle-down" aria-label="The downward triangle" %} para ver el menú de selección de etiquetas. Las etiquetas que ya se hayan asignado a tu ejecutor tienen una {% octicon "check" aria-label="Check mark" %} junto a ellas.

![Cambiar la etiqueta del ejecutor](/assets/images/help/settings/actions-hosted-runner-list-label.png)
