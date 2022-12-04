---
title: Acerca de las bifurcaciones
intro: Una bifurcación es una copia de un repositorio que administras. Las bifurcaciones te permiten realizar cambios a un proyecto sin afectar el repositorio original. Puedes recuperar actualizaciones o enviar cambios al repositorio original con solicitudes de extracción.
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/working-with-forks/about-forks
  - /articles/about-forks
  - /github/collaborating-with-issues-and-pull-requests/about-forks
  - /github/collaborating-with-pull-requests/working-with-forks/about-forks
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
ms.openlocfilehash: 83372d27f052ee8c22730f5ce5d22e9efbf04fbb
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158753'
---
Bifurcar un repositorio es similar a copiar un repositorio, con dos diferencias principales:

* Puede usar una solicitud de incorporación de cambios para sugerir cambios desde la bifurcación propiedad del usuario hacia el repositorio original en su instancia de GitHub, que también se conoce como repositorio *ascendente*.
* Puedes llevar cambios desde tu repositorio ascendente a tu bifurcación local sincronizando tu bifurcación con el repositorio ascendente.

{% data reusables.repositories.you-can-fork %}

{% ifversion fpt or ghec %}

Si eres un miembro de una {% data variables.enterprise.prodname_emu_enterprise %}, hay más restricciones sobre los repositorios que puedes bifurcar. {% data reusables.enterprise-accounts.emu-forks %} Para más información, vea "[Acerca de {% data variables.product.prodname_emus %}](/enterprise-cloud@latest/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users){% ifversion fpt %}" en la documentación de {% data variables.product.prodname_ghe_cloud %}.{% else %}".{% endif %}

{% endif %}

{% data reusables.repositories.desktop-fork %}

Eliminar una bifurcación no eliminará el repositorio ascendente original. Puede realizar todos los cambios que quiera en la bifurcación, como añadir colaboradores, cambiar archivos de nombre, generar {% data variables.product.prodname_pages %}, sin que esto afecte el repositorio original.{% ifversion fpt or ghec %} No puede restaurar un repositorio bifurcado eliminado. Para más información, vea "[Restauración de un repositorio eliminado](/articles/restoring-a-deleted-repository)".{% endif %}

En proyectos de código abierto, las bifurcaciones suelen iterar en ideas o cambios antes de que se presenten al repositorio ascendente. Cuando haces cambios en la bifurcación que pertenece a tu usuario y abres una solicitud de cambios que compara tu trabajo con el repositorio ascendente, puedes otorgar permisos para subir cambios a tu rama de solicitud de cambios a cualquiera que tenga acceso de subida (incluyendo el borrar la rama). Esto agiliza la colaboración permitiendo que los mantenedores del repositorio puedan hacer confirmaciones de cambios o ejecutar pruebas locales a tu rama de solicitud de extracción desde una bifurcación propiedad de un usuario antes de fusionarlas. No puedes otorgar permisos de escritura a una bifurcación que sea propiedad de una organización. 

{% data reusables.repositories.private_forks_inherit_permissions %}

Si quieres crear un repositorio nuevo desde el contenido de uno existente pero no quieres fusionar tus cambios ascendentemente en ocasiones futuras, puedes duplicar el repositorio o, si éste es una plantilla, utilizarlo como tal. Para más información, vea "[Duplicación de un repositorio](/articles/duplicating-a-repository)" y "[Creación de un repositorio a partir de una plantilla](/articles/creating-a-repository-from-a-template)".

## Información adicional

- "[Acerca de los modelos de desarrollo colaborativo](/pull-requests/collaborating-with-pull-requests/getting-started/about-collaborative-development-models)"
- "[Creación de una solicitud de incorporación de cambios desde una bifurcación](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork)"
- [Guías de código abierto](https://opensource.guide/){% ifversion fpt or ghec %}
- [{% data variables.product.prodname_learning %}]({% data variables.product.prodname_learning_link %}){% endif %}
