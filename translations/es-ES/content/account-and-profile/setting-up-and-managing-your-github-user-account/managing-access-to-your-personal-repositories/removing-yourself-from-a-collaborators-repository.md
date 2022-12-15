---
title: Eliminarte del repositorio de un colaborador
intro: If you no longer want to be a collaborator on someone else's repository, you can remove yourself.
redirect_from:
- /leave-a-collaborative-repo
- /leave-a-repo
- /articles/removing-yourself-from-a-collaborator-s-repo
- /articles/removing-yourself-from-a-collaborator-s-repository
- /articles/removing-yourself-from-a-collaborators-repository
- /github/setting-up-and-managing-your-github-user-account/removing-yourself-from-a-collaborators-repository
- /github/setting-up-and-managing-your-github-user-account/managing-access-to-your-personal-repositories/removing-yourself-from-a-collaborators-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Accounts
- Repositories
shortTitle: Remove yourself
ms.openlocfilehash: dc9739d84d1794e3111f3b61e0dfd9a7c4bec11b
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 05/17/2022
ms.locfileid: "145092275"
---
{% data reusables.user-settings.access_settings %} {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %}
2. En la sección "Code, planning, and automation" (Código, planificación y automatización) de la barra lateral, haga clic en **{% octicon "repo" aria-label="The repo icon" %} Repositories** (Repositorios).
{% else %}
2. En la barra lateral de la izquierda, haga clic en **Repositorios**.
  ![Pestaña Repositorios](/assets/images/help/settings/settings-sidebar-repositories.png) {% endif %}
3. Junto al repositorio que del que quiere salir, haga clic en **Leave** (Abandonar).
  ![Botón Leave (Abandonar)](/assets/images/help/repository/repo-leave.png)
4. Lee la advertencia con atención, luego haz clic en "I understand, leave this repository" (Comprendo, abandonar este repositorio).
  ![Cuadro de diálogo advirtiéndole de que va a abandonar](/assets/images/help/repository/repo-leave-confirmation.png)
