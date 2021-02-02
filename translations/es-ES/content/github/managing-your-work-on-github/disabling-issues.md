---
title: Inhabilitar propuestas
intro: Es posible que desees desactivar las propuestas de tu repositorio en caso de que no aceptes contribuciones o informes de errores.
redirect_from:
  - /articles/disabling-issues
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. En Características, quita la marca de selección de la casilla de verificación **Propuestas**. ![Casilla de verificación Eliminar propuestas](/assets/images/help/issues/issues_settings_remove_from_repo.png)

Si decides habilitar las propuestas nuevamente en el futuro, todas las propuestas que se hayan agregado previamente estarán disponibles.

{% if currentVersion == "free-pro-team@latest" %}

{% tip %}
Porfavor contacta a

{% data variables.contact.contact_support %} si quieres desactivar las propuestas para evitar el abuso de personas desconocidas.
{% data reusables.policies.abuse %}

{% endtip %}

{% endif %}
