---
ms.openlocfilehash: 432a33a54f6568b889f8089173f3787a960410fe
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/09/2022
ms.locfileid: "147763744"
---
{% ifversion ghes < 3.5 %}

En algunos casos, los clientes de GitHub Advanced Security que actualicen a GitHub Enterprise Server 3.5 o posterior pueden observar que faltan alertas del análisis de secretos en la interfaz de usuario web y la API REST. Para asegurarse de que las alertas permanecen visibles, no omitas la versión 3.4 cuando actualices de una versión anterior a la versión 3.5 o posteriores. Hay disponible una corrección en las versiones [de revisión 3.5.5](/enterprise-server@3.5/admin/release-notes#3.5.5) y [3.6.1](/enterprise-server@3.6/admin/release-notes#3.6.1) .

Para planear una actualización a través de la versión 3.4, consulta el [Asistente para actualización](https://support.github.com/enterprise/server-upgrade). [Actualizado: 01/09/2022]

{% elsif ghes = 3.5 or ghes = 3.6 %}

En algunos casos, los clientes de GitHub Advanced Security que actualicen a GitHub Enterprise Server {{ allVersions[currentVersion].currentRelease }} pueden observar que faltan alertas del análisis de secretos en la interfaz de usuario web y la API REST. Para asegurarte de que las alertas permanecen visibles, no omitas la versión 3.4 cuando actualices a la versión más reciente. Para planear una actualización a través de la versión 3.4, consulta el [Asistente para actualización](https://support.github.com/enterprise/server-upgrade).

- Para mostrar las alertas que faltan para todos los repositorios que pertenecen a una organización, los propietarios de la organización pueden ir a la configuración **de seguridad y análisis del código** de la organización y, a continuación, hacer clic en **Habilitar todo** para el análisis de secretos. Para más información, vea "[Administración de la configuración de seguridad y análisis para la organización](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-security-and-analysis-settings-for-your-organization#enabling-or-disabling-a-feature-for-all-existing-repositories)".
- Para mostrar las alertas que faltan para un repositorio individual, los usuarios con acceso de administrador al repositorio pueden deshabilitar y, a continuación, habilitar el análisis de secretos para el repositorio. Para más información, vea "[Administración de la configuración de seguridad y análisis para el repositorio](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository)".

Hay disponible una corrección en la versión de revisión {% ifversion ghes = 3.5 %}[3.5.5](/admin/release-notes#3.5.5){% elsif ghes = 3.6 %}[3.6.1](/admin/release-notes#3.6.1){% endif %}. [Actualizado: 01/09/2022]

{% endif %}
