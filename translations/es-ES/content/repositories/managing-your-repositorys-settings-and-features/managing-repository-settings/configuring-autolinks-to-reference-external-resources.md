---
title: Configurar enlaces automáticos para referenciar recursos externos
intro: 'Puedes agregar enlaces automáticos a recursos externos, como propuestas de JIRA y tickets de Zendesk, para ayudar a optimizar tu flujo de trabajo.'
product: '{% data reusables.gated-features.autolinks %}'
redirect_from:
  - /articles/configuring-autolinks-to-reference-external-resources
  - /github/administering-a-repository/configuring-autolinks-to-reference-external-resources
  - /github/administering-a-repository/managing-repository-settings/configuring-autolinks-to-reference-external-resources
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Configurar los enlaces automáticos
---

## About autolinks

Cualquier usuario con permisos de administración en un repositorio puede configurar referencias de enlace automático para vincular propuestas, solicitudes de cambios, mensajes de confirmación y descripciones de lanzamientos con los servicios externos de terceros.

{% ifversion autolink-reference-alphanumeric %}
Autolink references can now accept alphanumeric characters. When originally introduced, custom autolinks were limited to external resources that used numeric identifiers. Custom autolinks now work with alphanumeric identifiers. Legacy autolink references that recognize only numeric identifiers are deprecated and displayed with a "legacy" label.

You define custom autolinks by specifying a reference prefix and a target URL.
- Reference prefixes cannot have overlapping names. For example, a repository cannot have two custom autolinks with prefixes such as `TICKET` and `TICK`, since both prefixes would match the string `TICKET123a`.
- Target URLs include a `<num>` variable which supports the following characters: `a-z` (case-insensitive), `0-9`, and `-`.
{% endif %}

## Configurar enlaces automáticos para referenciar recursos externos

This procedure demonstrates how to configure autolinks to reference external resources. For example, if you use Zendesk to track user-reported tickets, you can reference a ticket number in the pull request you opened to fix the issue.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %}
1. En la sección de "integraciones" de la barra lateral, haz clic en **{% octicon "cross-reference" aria-label="The cross-reference icon" %} Referencias de autoenlace**.
{% else %}
1. En la barra lateral izquierda, haz clic en **Autolink references** (Referencias de enlace automático). ![Pestaña Autolink references (Referencias de enlace automático) en la barra lateral izquierda](/assets/images/help/repository/autolink-references-tab.png)
{% endif %}
1. Haz clic en **Add autolink reference** (Agregar referencia de enlace automático). ![Botón para completar con información de la referencia de enlace automático](/assets/images/help/repository/add-autolink-reference-details.png)
5. Debajo de "Reference prefix" (Prefijo de referencia), escribe un prefijo corto y significativo que quieras que los colaboradores utilicen para generar enlaces automáticos para el recurso externo.
{% ifversion autolink-reference-alphanumeric %}![Field to type abbreviation for external system](/assets/images/help/repository/add-reference-prefix-field-alphanumeric.png){% else %}![Field to type abbreviation for external system](/assets/images/help/repository/add-reference-prefix-field.png){% endif %}
6. Debajo de "Target URL" (URL de destino), escribe el enlace al sistema externo al que te quieras vinculr. Asegúrate de conservar `<num>` como variable para el número de referencia.
{% ifversion autolink-reference-alphanumeric %}![Field to type URL to external system](/assets/images/help/repository/add-target-url-field-alphanumeric.png){% else %}![Field to type URL to external system](/assets/images/help/repository/add-target-url-field.png){% endif %}
7. Haz clic en **Add autolink reference** (Agregar referencia de enlace automático).
{% ifversion autolink-reference-alphanumeric %}{% else %}![Button to add autolink reference](/assets/images/help/repository/add-autolink-reference.png){% endif %}
