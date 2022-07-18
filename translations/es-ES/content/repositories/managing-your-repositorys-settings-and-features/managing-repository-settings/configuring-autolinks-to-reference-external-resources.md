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

## Acerca de los autoenlaces

Cualquier usuario con permisos de administración en un repositorio puede configurar referencias de enlace automático para vincular propuestas, solicitudes de cambios, mensajes de confirmación y descripciones de lanzamientos con los servicios externos de terceros.

{% ifversion autolink-reference-alphanumeric %}
Las referencias de los autoenlaces ahora pueden aceptar caracteres alfanuméricos. Cuando se introdujeron originalmente, los autoenlaces personalizados se limitaron a los recursos externos que utilizaban identificadores numéricos. Los autoenlaces personalizados ahora funcionan con identificadores aklfanuméricos. Las referencias de autoenlace tradicionales que reconocen únicamente identificadores numéricos son obsoletas ahora y se muestran con la etiqueta "legacy".

Puedes definir los autoenlaces personalizados si especificas un prefijo de referencia y una URL destino.
- Los prefijos de referencia no pueden tener nombres superpuestos. Por ejemplo, un repositorio no puede tener dos autoenlaces personalizados con prefijos tales como `TICKET` y `TICK`, ya que ambos prefijos coincidirían con la secuencia `TICKET123a`.
- Las URL destino incluyen una variable `<num>` que es compatible con los siguientes caracteres: `a-z` (con distinción de mayúsculas y minúsculas), `0-9` y `-`.
{% endif %}

## Configurar enlaces automáticos para referenciar recursos externos

Este procedimiento demuestra cómo configurar los autoenlaces para referenciar recursos externos. Por ejemplo, si utilizas Zendesk para rastrear los tickets que reportan los usuarios, puedes referenciar un número de ticket en la solicitud de cambios que abriste para corregir la propuesta.

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
