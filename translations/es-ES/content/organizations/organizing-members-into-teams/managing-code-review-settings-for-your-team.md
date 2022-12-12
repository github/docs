---
title: Administrar los ajustes de revisión de código para tu equipo
intro: Puedes reducir el ruido para tu equipo si limitas las notificaciones cuando tu equipo solicite revisar una solicitud de cambios.
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/managing-code-review-assignment-for-your-team
  - /organizations/organizing-members-into-teams/managing-code-review-assignment-for-your-team
product: '{% data reusables.gated-features.code-review-assignment %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Code review settings
permissions: Team maintainers and organization owners can configure code review settings.
ms.openlocfilehash: eb4711251f7bebc9088ae711ba8a36dc60acba56
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109823'
---
## Acerca de los ajustes de revisión de código

{% ifversion only-notify-requested-members %} Para acabar con las dudas de tu equipo y aclarar qué parte de responsabilidad tiene cada uno en cuanto a las revisiones de solicitudes de incorporación de cambios, puedes configurar ajustes de revisión del código.

- Notificaciones de equipo
- Asignación automática

## Acerca de las notificaciones de equipo

Cuando eliges solo notificar a los miembros del equipo solicitados, inhabilitas el enviar notificaciones a todo el equipo cuando a este se le solicita revisar una solicitud de cambios si también se solicitó a un miembro específico de dicho equipo para la revisión. Esto es específicamente útil cuando se configura un repositorio con equipos como propietarios del código, pero los contribuyentes al repositorio a menudo conocen a un individuo en específico que podría ser el revisor correcto para la solicitud de cambios. Para obtener más información, consulte "[Acerca de los propietarios del código](/github/creating-cloning-and-archiving-repositories/about-code-owners)".

## Acerca de la asignación automática
{% endif %}

Cuando habilitas la asignación automática, en cualquier momento en el que se solicite a tu equipo revisar una solicitud de cambios, este se eliminará como revisor y se asignará un subconjunto específico de miembros del equipo en lugar de este. Las tareas de revisión de código te permiten decidir si se notificará a todo el equipo o solo a un subconjunto de miembros del mismo cuando se solicite que éste realice una revisión.

Cuando se solicita automáticamente que los propietarios de código hagan una revisión, el equipo se eliminará y se reemplazará con individuos a menos de que se configure una regla de protección de rama para requerir la revisión de los propietarios. Si existe dicha regla de protección de rama, no se podrá eliminar la solicitud de equipo y la solicitud de individuos se mostrará adicionalmente.

### Rutear algoritmos

Las asignaciones de revisión de código eligen y asignan revisores automáticamente con base en uno de dos algoritmos posibles. 

El algoritmo de round robin (turno rotativo) escoge revisores basándose en quién recibe la solicitud de revisión menos reciente, y se enfoca en alternar entre todos los miembros del equipo sin importar el número de revisiones pendientes que tengan en el momento. 

El algoritmo de balanceo de carga escoge a los revisores basándose en la cantidad total de solicitudes de revisión recientes para cada miembro, y considera el número de revisiones pendientes para cada uno de ellos. El algoritmo de balanceo de carga intenta asegurarse de que cada miembro del equipo revise una cantidad igual de solicitudes de extracción en cualquier periodo de 30 días.

Cualquier miembro del equipo que haya configurado su estado como "Ocupado" no podrá seleccionarse para revisión. Si todos los miembros del equipo están ocupados, la solicitud de cambios seguirá estando asignada al equipo mismo. Para obtener más información sobre los estados de usuario, consulte "[Establecimiento de un estado](/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/personalizing-your-profile#setting-a-status)".

{% ifversion only-notify-requested-members %}
## Configurar las notificaciones de equipo

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.specific_team %} {% data reusables.organizations.team_settings %} {% ifversion fpt or ghec or ghes > 3.4 or ghae > 3.4 %}
1. En la barra lateral izquierda, haga clic en **{% octicon "code-review" aria-label="The code-review icon" %} Code review**.
{% else %}
1. En la barra lateral izquierda, haga clic en **Code review**
![Botón Code review ](/assets/images/help/teams/review-button.png) {% endif %}
1. Seleccione **Only notify requested team members.** 
![Notificaciones de revisión del código para el equipo](/assets/images/help/teams/review-assignment-notifications.png)
1. Haga clic en **Guardar cambios**.
{% endif %}

## Configurar la asignación automática
{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.specific_team %} {% data reusables.organizations.team_settings %} {% ifversion fpt or ghec or ghes > 3.4 or ghae > 3.4 %}
1. En la barra lateral izquierda, haga clic en **{% octicon "code-review" aria-label="The code-review icon" %} Code review**.
{% else %}
1. En la barra lateral izquierda, haga clic en **Code review**
![Botón Code review ](/assets/images/help/teams/review-button.png) {% endif %}
1. Seleccione **Enable auto assignment**.
![Botón de asignación automática](/assets/images/help/teams/review-assignment-enable.png)
1. Debajo de "¿Cuántos miembros del equipo deberán asignarse para revisión?", utiliza el menú desplegable y elije el número de revisores que se asignarán a cada solicitud de extracción.
![Menú desplegable de cantidad de revisores](/assets/images/help/teams/review-assignment-number.png)
1. Debajo de "Algoritmo de ruteo", utiliza el menú desplegable y elige qué algoritmo quieres utilizar. Para obtener más información, consulte "[Algoritmos de enrutamiento](#routing-algorithms)".
![Menú desplegable de algoritmos de enrutamiento](/assets/images/help/teams/review-assignment-algorithm.png)
1. Para omitir siempre determinados miembros del equipo, también puede seleccionar **Never assign certain team members**. Después, selecciona uno o más miembros del equipo que quieras omitir siempre.
![Casilla y lista desplegable Never assign certain team members](/assets/images/help/teams/review-assignment-skip-members.png) {% ifversion ghes < 3.4 %}
1. De manera opcional, para notificar únicamente a los miembros del equipo que se escogieron según la tarea de revisión en cada solicitud de revisión del código, seleccione **If assigning team members, don't notify the entire team** en "Notifications".
{%- endif %} {% ifversion fpt or ghec or ghes or ghae > 3.3 %}
1. Para incluir a los miembros de los equipos secundarios como posbiles revisores al asignar solicitudes, también puede seleccionar **Child team members**.
1. De manera opcional, para contar a cualquier miembro cuya revisión se haya solicitado en lugar de a todos los miembros de la asignación, seleccione **Count existing requests**.
1. De manera opcional, para quitar la solicitud de revisión del equipo al asignar miembros del equipo, seleccione **Team review request**.
{%- endif %}
1. Haga clic en **Guardar cambios**.

## Inhabilitar la asignación automática
{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.specific_team %} {% data reusables.organizations.team_settings %}
1. Seleccione **Enable auto assignment** para quitar la marca de verificación.
![Botón de asignación de revisión de código](/assets/images/help/teams/review-assignment-enable.png)
1. Haga clic en **Guardar cambios**.
