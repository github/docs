---
title: Asignar propuestas y solicitudes de extracción a otros usuarios de GitHub
intro: Los asignatarios aclaran quién está trabajando en propuestas y solicitudes de extracción específicas.
permissions: 'Anyone with write access to a repository can assign issues and pull requests. {% data reusables.enterprise-accounts.emu-permission-repo %}'
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/assigning-issues-and-pull-requests-to-other-github-users
  - /articles/assigning-issues-and-pull-requests-to-other-github-users
  - /github/managing-your-work-on-github/assigning-issues-and-pull-requests-to-other-github-users
  - /issues/tracking-your-work-with-issues/managing-issues/assigning-issues-and-pull-requests-to-other-github-users
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Assign issues & PRs
ms.openlocfilehash: 0e1f4029ddcd180e892e43257ae3a75d0046ce1d
ms.sourcegitcommit: 219fb805abddaef3e5547638bd798da890020bfd
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/09/2022
ms.locfileid: '147878452'
---
## Acerca de los asignatarios de las propuestas y solicitudes de cambios

Puedes asignar varias personas a cada incidencia o solicitud de incorporación de cambios, incluyéndote a ti mismo, a cualquiera que haya comentado en la incidencia o solicitud de incorporación de cambios, a cualquiera con permisos de escritura en el repositorio y a los miembros de la organización con permisos de lectura en el repositorio. Para más información, vea "[Permisos de acceso en {% data variables.product.prodname_dotcom %}](/articles/access-permissions-on-github)".

Las incidencias y las solicitudes de incorporación de cambios en repositorios públicos y en repositorios privados para una cuenta de pago pueden tener hasta 10 personas asignadas. Los repositorios privados del plan gratuito se limitan a una persona por incidencia o solicitud de incorporación de cambios.

## Asignar una propuesta o solicitud de cambios individual

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-issue-pr %}
3. Abre la propuesta o solicitud de cambios que quieras asignarle a alguien.
4. Si no hay nadie asignado a una incidencia o solicitud de incorporación de cambios, haga clic en **assign yourself** para hacerlo.
  ![El elemento assign yourself](/assets/images/help/issues/assign_yourself.png)
5. En el menú de la derecha, haga clic en **Assignees**.
   ![El elemento de menú Assignees](/assets/images/help/issues/assignee_menu.png)
6. Para asignar la solicitud de cambios o propuesta a un usurio, comienza a teclear su nombre de usuario y luego haz clic en su nombre cuando aparezca. Puedes seleccionar y asignar hasta 10 asignatarios a una propuesta o solicitud de extracción.
  ![Menú desplegable de asignación de incidencias](/assets/images/help/issues/issues_assigning_dropdown.png)

## Asignar solicitudes de extracción o propuestas múltiples

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-issue-pr %}
3. Selecciona la casilla de verificación junto a los elementos que deseas asignar a alguien.
  ![Casilla de metadatos de incidencias](/assets/images/help/issues/issues_assign_checkbox.png)
4. En la esquina superior derecha, haga clic en **Assign**.
5. Para asignar los elementos a un usuario, comienza escribiendo su nombre de usuario, luego haz clic en su nombre cuando aparezca. Puedes seleccionar y asignar hasta 10 asignatarios a una propuesta o solicitud de extracción.
  ![Menú desplegable de asignación de incidencias](/assets/images/help/issues/issues_assigning_dropdown.png)

## Información adicional

* "[Filtrado de incidencias y solicitudes de incorporación de cambios por usuarios asignados](/articles/filtering-issues-and-pull-requests-by-assignees)"
