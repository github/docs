---
title: Inhabilitar propuestas
intro: Es posible que desees desactivar las propuestas de tu repositorio en caso de que no aceptes contribuciones o informes de errores.
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/disabling-issues
  - /articles/disabling-issues
  - /github/managing-your-work-on-github/disabling-issues
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
---

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. En Características, quita la marca de selección de la casilla de verificación **Propuestas**. ![Casilla de verificación Eliminar propuestas](/assets/images/help/issues/issues_settings_remove_from_repo.png)

Si decides habilitar las propuestas nuevamente en el futuro, todas las propuestas que se hayan agregado previamente estarán disponibles.

{% if currentVersion == "free-pro-team@latest" %}

{% tip %}

Comunícate con {% data variables.contact.contact_support %} si deseas desactivar las propuestas para evitar el abuso de extraños.
{% data reusables.policies.abuse %}

{% endtip %}

{% endif %}
