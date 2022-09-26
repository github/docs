---
title: Solicitar una revisión de solicitud de extracción
intro: 'Después de crear una solicitud de extracción, le puedes pedir a una persona específica que revise los cambios que propusiste. Si eres miembro de la organización, también puedes solicitarle a un equipo específico que revise tus cambios.'
product: '{% data reusables.gated-features.multiple-pr-reviewers %}'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests/requesting-a-pull-request-review
  - /articles/requesting-a-pull-request-review
  - /github/collaborating-with-issues-and-pull-requests/requesting-a-pull-request-review
  - /github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/requesting-a-pull-request-review
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Request a PR review
ms.openlocfilehash: b7b797d7e9ad2fdf9c1df29e7e5aad66f942b538
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '145139594'
---
Los repositorios pertenecen a una cuenta personal (un solo propietario individual) o a una cuenta organizacional (una cuenta compartida con varios colaboradores o mantenedores). Para obtener más información, vea "[Tipos de cuentas de {% data variables.product.prodname_dotcom %}](/get-started/learning-about-github/types-of-github-accounts)". Los propietarios y colaboradores de un repositorio que pertenece a una cuenta personal pueden asignar revisiones de solicitudes de cambio. Los miembros de las organizaciones con permisos de clasificación también pueden asignar a un revisor para una solicitud de cambios. 

Para asignar un revisor a una solicitud de cambios, necesitarás acceso de escritura al repositorio. Para obtener más información sobre el acceso al repositorio, vea "[Roles de repositorio para una organización](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)". Si tienes acceso de escritura, puedes asignar a cualquiera que tenga este tipo de acceso en el repositorio como revisor.

Los miembros de las organizaciones que tengan acceso de escritura también pueden asignar una revisión de solicitud de cambios a cualquier persona o equipo con acceso de lectura en un repositorio. El revisor o equipo solicitado recibirá una notificación sobre tu solicitud de revisión de la solicitud de extracción. Si solicitas una revisión de un equipo y la asignación de revisión del código está habilitada, se solicitarán miembros específicos y el equipo se quitará como revisor. Para más información, consulta "[Administración de la configuración de revisión del código para el equipo](/organizations/organizing-members-into-teams/managing-code-review-settings-for-your-team)".

{% note %}

**Nota**: Los autores de solicitudes de incorporación de cambios no pueden solicitar revisiones a menos que sean propietarios del repositorio o colaboradores con acceso de escritura a este.

{% endnote %}

Puedes solicitar una revisión de una persona sugerida o de una persona específica. Los revisores sugeridos se basan en los [datos del último responsable de Git](/articles/tracking-changes-in-a-file/). Si solicitas una revisión, otras personas con acceso de escritura al repositorio pueden seguir revisando tu solicitud de extracción. Una vez que alguien haya revisado tu solicitud de código y hayas implementado los cambios necesarios, puedes volver a solicitar la revisión al mismo revisor. Si el revisor solicitado no envía una revisión y la solicitud de incorporación de cambios cumple los [requisitos de capacidad de combinación](/articles/defining-the-mergeability-of-pull-requests) del repositorio, puede combinar la solicitud de incorporación de cambios.

{% data reusables.repositories.sidebar-pr %}
1. En la lista de solicitudes de extracción, haz clic en la solicitud de extracción que quieres que una persona específica o un equipo revise.
2. Vaya a **Reviewers** (Revisores) en la barra lateral derecha.  
3. Para solicitar una revisión de una persona sugerida en **Reviewers** (Revisores), junto a su nombre de usuario haga clic en **Request** (Solicitar).
 ![Icono de solicitud de revisores en la barra lateral derecha](/assets/images/help/pull_requests/request-suggested-review.png)
5. De manera opcional, para solicitar una revisión de alguien que no sea una persona sugerida, haga clic en **Reviewers** (Revisores) y luego en un nombre del menú desplegable.
  ![Icono de engranaje de revisores en la barra lateral derecha](/assets/images/help/pull_requests/request-a-review-not-suggested.png)
6. De manera opcional, si conoce el nombre de la persona o el equipo del que quiere una revisión, haga clic en  **Reviewers** (Revisores) y, después, escriba el nombre de usuario de la persona o el nombre del equipo al que le solicitará que revise sus cambios. Haz clic en su nombre de equipo o nombre de usuario para solicitar una revisión.
  ![Campo para introducir el nombre de usuario de un revisor y lista desplegable con el nombre del revisor](/assets/images/help/pull_requests/choose-pull-request-reviewer.png)
7. Después de que la solicitud de extracción esté revisada y de que hayas hecho los cambios necesarios, le puedes pedir a un revisor que vuelva a revisar tu solicitud de extracción. Vaya a **Reviewers** (Revisores) en la barra lateral derecha y haga clic en {% octicon "sync" aria-label="The sync icon" %} situado al lado del nombre del revisor del que quiere la revisión.
  ![Icono para volver a revisar la sincronización en la barra lateral derecha](/assets/images/help/pull_requests/request-re-review.png)

## Información adicional

- "[Acerca de las revisiones de solicitudes de incorporación de cambios](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews)"
