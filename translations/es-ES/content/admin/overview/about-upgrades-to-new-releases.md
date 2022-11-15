---
title: Acerca de las mejoras a los nuevos lanzamientos
shortTitle: About upgrades
intro: '{% ifversion ghae %}{% data variables.product.company_short %} Actualiza tu empresa en {% data variables.product.product_name %} frecuentemente con las características y correcciones de errores más recientes.{% else %}Puedes beneficiarte de estas características y correcciones de errores para {% data variables.product.product_name %} si actualizas tu empresa a una versión que se haya lanzado recientemente.{% endif %}'
versions:
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Enterprise
  - Upgrades
ms.openlocfilehash: b3a2d340ef73ffe92f2117caf38a84e76ba0c8d1
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109831'
---
{% data reusables.enterprise.constantly-improving %}{% ifversion ghae %}{% data variables.product.prodname_ghe_managed %} es un servicio totalmente administrado, de manera que {% data variables.product.company_short %} completa el proceso de actualización automáticamente para la empresa.{% endif %}

Los lanzamientos de características incluyen mejoras de funcionalidades y características y, habitualmente, suceden cada trimestre. {% ifversion ghae %}{% data variables.product.company_short %} actualizará tu empresa al lanzamiento de características más reciente. Se te notificará previamente sobre cualquier tiempo de inactividad que se planee para tu empresa.{% endif %}

{% ifversion ghes %}

Desde {% data variables.product.prodname_ghe_server %} 3.0, todos los lanzamiento de características comenzarán con por lo menos un candidato de lanzamiento. Los candidatos de lanzamiento son propuestas de lanzamientos de características con un conjunto de características completo. Puede que haya errores o problemas en un lanzamiento candidato que solo pueden encontrarse mediante la retroalimentación de los clientes que actualmente utilizan {% data variables.product.product_name %}. 

Puedes obtener acceso a las últimas características si pruebas un candidato de lanzamiento tan pronto como esté disponible. Puedes actualizarte a un candidato de lanzamiento desde una versión compatible y puedes actualizar desde el candidato de lanzamiento a versiones posteriores cuando éstas se lancen. Deberías actualizar cualquier ambiente que ejecute un lanzamiento candidato tan pronto como dicho lanzamiento esté disponible en general. Para obtener más información, consulte "[Requisitos de actualización](/admin/enterprise-management/upgrade-requirements)".

Los candidatos de lanzamiento deben desplegarse en ambientes de montaje o de pruebas. Conforme pruebes un candidato de lanzamiento, por favor, proporciona retroalimentación contactando a soporte. Para obtener más información, consulte "[Trabajar con {% data variables.contact.github_support %}](/admin/enterprise-support)".

Utilizaremos tu retroalimentación para aplicar las correcciones de errores y cualquier otro cambio necesario para crear un lanzamiento productivo estable. Cada lanzamiento nuevo agrega correcciones de errores para los problemas de las versiones previas. Cuando el lanzamiento se encuentra listo para que se utilice en general, {% data variables.product.company_short %} publica un lanzamiento productivo estable.

{% endif %}

{% warning %}

**Advertencia**: Actualizar a una nueva versión de actualización de características provocará unas cuantas horas de inactividad, durante las cuales ninguno de los usuarios podrá utilizar el software empresarial. Puedes informar a tus usuarios sobre dicha inactividad si publicas una notificación de anuncio global utilizando la configuración de tu empresa o la API de REST. Para obtener más información, consulte "[Personalizar mensajes de usuario en su instancia](/admin/user-management/customizing-user-messages-on-your-instance#creating-a-global-announcement-banner)" y "[Administración de {% data variables.product.prodname_enterprise %}](/rest/reference/enterprise-admin#announcements)".

{% endwarning %}

{% ifversion ghes %}

Los lanzamientos de parches, los cuales consisten únicamente de parches y correcciones de errores, ocurren con más frecuencia. Los lanzamientos de parches están disponibles en general cuando se lanzan por primera vez, sin candidatos de lanzamiento. El mejorar a un lanzamiento de parche habitualmente requiere de menos de cinco minutos de tiempo de inactividad.

Para actualizar el software empresarial a una nueva versión, consulte "[Notas de la versión](/enterprise-server/admin/release-notes)" y "[Actualización de {% data variables.product.prodname_ghe_server %}](/admin/enterprise-management/upgrading-github-enterprise-server)". Dado que solo puede actualizar desde una versión de actualización de características que tenga como máximo dos versiones anteriores, use el [{% data variables.enterprise.upgrade_assistant %}](https://support.github.com/enterprise/server-upgrade) para buscar la ruta de actualización de la versión actual.

{% endif %}

## Información adicional

- [ {% data variables.product.prodname_roadmap %} ]( {% data variables.product.prodname_roadmap_link %} ) en el repositorio de `github/roadmap` {% ifversion ghae %}
- [Notas de la versión de {% data variables.product.prodname_ghe_managed %}](/admin/release-notes) {% endif %}
