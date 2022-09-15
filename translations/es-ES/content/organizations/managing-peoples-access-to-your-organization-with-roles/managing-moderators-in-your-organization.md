---
title: Administración de moderadores en la organización
intro: 'Puedes ofrecer a un individuo o equipo de tu organización la capacidad de bloquear y limitar el acceso, asignándolos al rol de moderador.'
permissions: Organization owners can assign the moderator role.
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
  - Community
shortTitle: Managing moderators
ms.openlocfilehash: 9f4d3cc70560f3cd48f5ee9e1a31a452ae71b6aa
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147076727'
---
## Acerca de los moderadores de la organización

En ocasiones es necesario bloquear a un colaborador, o bien establecer límites de interacción para la organización o repositorios individuales. Como propietario de la organización, puede realizar estas tareas, pero puede delegarlas a otros miembros de la organización. Para ello, asigne un miembro de la organización o un equipo al rol de moderador.

Los moderadores de la organización pueden hacer lo siguiente:
* Bloquear y desbloquear usuarios de la organización. Para más información, vea "[Bloqueo de usuarios de la organización](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-organization)".
* Administración de los límites de interacción de la organización. Para más información, vea "[Limitación de las interacciones en la organización](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-organization)".
* Administración de los límites de interacción de los repositorios. Para más información, vea "[Limitación de las interacciones en el repositorio](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository)".
* Ocultar comentarios en todos los repositorios públicos que pertenecen a la organización. Para más información, vea "[Administración de comentarios perjudiciales](/communities/moderating-comments-and-conversations/managing-disruptive-comments)".

Convertir a alguien en moderador de la organización no le proporciona capacidades adicionales que no sean las enumeradas anteriormente. Por ejemplo, alguien que solo tenga acceso de lectura a un repositorio no obtendrá acceso de escritura al convertirlo en moderador.

Puede agregar hasta 10 individuos o equipos como moderadores. Si ya ha asignado 10 individuos o equipos como usuarios y quiera agregar más, puede agruparlos en un equipo de moderadores y, después, usarlo para reemplazar una o varias de las asignaciones existentes. Para más información, vea "[Creación de un equipo](/organizations/organizing-members-into-teams/creating-a-team)".

## Adición de un moderador de la organización

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. En la sección "Acceso" de la barra lateral, seleccione **{% octicon "report" aria-label="The report icon" %} Moderación** y, después, haga clic en **Moderadores**.
1. En **Moderadores**, busque y seleccione la persona o el equipo que quiera asignar al rol de moderador. Cada persona o equipo que seleccione aparecerá en una lista debajo de la barra de búsqueda. 
  ![Campo de búsqueda y lista de moderadores](/assets/images/help/organizations/add-moderators.png)


## Eliminación de un moderador de la organización

Sigue los pasos del 1 al 3 y, después, haz clic en **Quitar moderador** junto a la persona o equipo que quieras eliminar como moderador.
