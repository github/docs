---
ms.openlocfilehash: 444e70adced8ef2f4fdc5f91b06a28bba89c898a
ms.sourcegitcommit: 5b1461b419dbef60ae9dbdf8e905a4df30fc91b7
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: "147879459"
---
{% warning %}

**Advertencia**:

- Si eliminas el acceso de una persona a un repositorio privado, todas sus bifurcaciones de ese repositorio privado se eliminarán. Los clones locales del repositorio privado se conservarán. Si se revoca el acceso de un equipo a un repositorio privado o se elimina un equipo con acceso a un repositorio privado, y los miembros del equipo no tienen acceso al repositorio desde otro equipo, las bifurcaciones privadas del repositorio se eliminarán.{% ifversion ghes %}
- Cuando [está habilitada la sincronización con LDAP](/enterprise/admin/authentication/using-ldap#enabling-ldap-sync), si se elimina a una persona de un repositorio, perderá el acceso, pero sus bifurcaciones no se borrarán. Si la persona se agrega a un equipo con acceso al repositorio original de la organización dentro de los tres meses, su acceso a las bifurcaciones se restaurarán de manera automática la próxima vez que ocurra una sincronización.{% endif %}
- Eres responsable de asegurar que las personas que perdieron el acceso a un repositorio borren cualquier información confidencial o propiedad intelectual.

- Los usuarios con permisos de administrador en un repositorio privado{% ifversion ghes or ghae or ghec %} o interno{% endif %} pueden impedir la bifurcación de ese repositorio, y los propietarios de la organización pueden impedir la bifurcación de cualquier repositorio privado{% ifversion ghes or ghae or ghec %} o interno{% endif %} de una organización. Para más información, vea "[Administración de la directiva de bifurcación para la organización](/organizations/managing-organization-settings/managing-the-forking-policy-for-your-organization)" y "[Administración de la directiva de bifurcación para el repositorio](/github/administering-a-repository/managing-the-forking-policy-for-your-repository)".

{% endwarning %}
