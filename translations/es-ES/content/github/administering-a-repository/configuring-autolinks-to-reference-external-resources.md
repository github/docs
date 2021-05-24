---
title: Configurar enlaces automáticos para referenciar recursos externos
intro: 'Puedes agregar enlaces automáticos a recursos externos, como propuestas de JIRA y tickets de Zendesk, para ayudar a optimizar tu flujo de trabajo.'
product: '{% data reusables.gated-features.autolinks %}'
redirect_from:
  - /articles/configuring-autolinks-to-reference-external-resources
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---

Cualquiera con permisos administrativos en un repositorio puede configurar las referencias autovinculadas para vincular propuestas, solicitudes de cambios,{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.21" %} mensajes de confirmación, y descripciones de lanzamientos{% else %} y mensajes de confirmación{% endif %} a los servicios externos de terceros.

Si usas Zendesk para hacer el seguimiento de los tickets informados por el usuario, por ejemplo, puedes referenciar un número de ticket en la solicitud de extracción que abres para corregir el problema.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. En la barra lateral izquierda, haz clic en **Autolink references** (Referencias de enlace automático). ![Pestaña Autolink references (Referencias de enlace automático) en la barra lateral izquierda](/assets/images/help/repository/autolink-references-tab.png)
4. Haz clic en **Add autolink reference** (Agregar referencia de enlace automático). ![Botón para completar con información de la referencia de enlace automático](/assets/images/help/repository/add-autolink-reference-details.png)
5. Debajo de "Reference prefix" (Prefijo de referencia), escribe un prefijo corto y significativo que quieras que los colaboradores utilicen para generar enlaces automáticos para el recurso externo. ![Campo para escribir la abreviación para el sistema externo](/assets/images/help/repository/add-reference-prefix-field.png)
6. Debajo de "Target URL" (URL de destino), escribe el enlace al sistema externo al que te quieras vinculr. Asegúrate de conservar `<num>` como variable para el número de referencia. ![Campo para escribir la URL al sistema externo](/assets/images/help/repository/add-target-url-field.png)
7. Haz clic en **Add autolink reference** (Agregar referencia de enlace automático). ![Botón para agregar referencia de enlace automático](/assets/images/help/repository/add-autolink-reference.png)
