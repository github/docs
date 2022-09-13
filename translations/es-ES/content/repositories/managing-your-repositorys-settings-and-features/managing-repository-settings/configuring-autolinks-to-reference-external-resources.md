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
shortTitle: Configure autolinks
ms.openlocfilehash: ae6e10f55a880a4fa389149ad137300ef3a81514
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '146748593'
---
## Acerca de los vínculos automáticos

Cualquier usuario con permisos de administración en un repositorio puede configurar referencias de enlace automático para vincular propuestas, solicitudes de cambios, mensajes de confirmación y descripciones de lanzamientos con los servicios externos de terceros.

{% ifversion autolink-reference-alphanumeric %} Las referencias de vínculo automático ahora pueden aceptar caracteres alfanuméricos. Cuando se introdujeron originalmente, los vínculos automáticos personalizados se limitaban a los recursos externos que usaban identificadores numéricos. Actualmente, los vínculos automáticos personalizados funcionan con identificadores alfanuméricos. Las referencias de vínculo automático heredadas que reconocen solo identificadores numéricos están en desuso y se muestran con la etiqueta "heredado".

Para definir vínculos automáticos personalizados, especifica un prefijo de referencia y una dirección URL de destino.
- Los prefijos de referencia no pueden tener nombres superpuestos. Por ejemplo, un repositorio no puede tener dos vínculos automáticos personalizados con prefijos como `TICKET` y `TICK`, ya que ambos prefijos coincidirían con la cadena `TICKET123a`.
- Las direcciones URL de destino incluyen una variable `<num>` que admite los caracteres siguientes: `a-z` (sin distinción entre mayúsculas y minúsculas), `0-9` y `-`.
{% endif %}

## Configurar enlaces automáticos para referenciar recursos externos

En este procedimiento se muestra cómo configurar vínculos automáticos para hacer referencia a recursos externos. Por ejemplo, si usas Zendesk para hacer el seguimiento de incidencias notificadas por el usuario, puedes hacer referencia a un número de incidencia en la solicitud de incorporación de cambios que abriste para corregir el problema.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %}
1. En la sección "Integraciones" de la barra lateral, haga clic en **{% octicon "cross-reference" aria-label="The cross-reference icon" %} Referencias de enlace automático**.
{% else %}
1. En la barra lateral izquierda, haga clic en **Referencias de enlace automático**.
![Pestaña Referencias de enlace automático en la barra lateral izquierda](/assets/images/help/repository/autolink-references-tab.png) {% endif %}
1. Haga clic en **Agregar referencia de enlace automático**.
![Botón para completar la información de la referencia de enlace automático](/assets/images/help/repository/add-autolink-reference-details.png)
5. Debajo de "Reference prefix" (Prefijo de referencia), escribe un prefijo corto y significativo que quieras que los colaboradores utilicen para generar enlaces automáticos para el recurso externo.
{% ifversion autolink-reference-alphanumeric %}![Campo para escribir la abreviatura para el sistema externo](/assets/images/help/repository/add-reference-prefix-field-alphanumeric.png){% else %}![Campo para escribir la abreviatura para el sistema externo](/assets/images/help/repository/add-reference-prefix-field.png){% endif %}
6. Debajo de "Target URL" (URL de destino), escribe el enlace al sistema externo al que te quieras vinculr. Asegúrese de mantener `<num>` como una variable para el número de referencia.
{% ifversion autolink-reference-alphanumeric %}![Campo para escribir la dirección URL del sistema externo](/assets/images/help/repository/add-target-url-field-alphanumeric.png){% else %}![Campo para escribir la dirección URL del sistema externo](/assets/images/help/repository/add-target-url-field.png){% endif %}
7. Haga clic en **Agregar referencia de enlace automático**.
{% ifversion autolink-reference-alphanumeric %}{% else %}![Botón para agregar una referencia de vínculo automático](/assets/images/help/repository/add-autolink-reference.png){% endif %}
