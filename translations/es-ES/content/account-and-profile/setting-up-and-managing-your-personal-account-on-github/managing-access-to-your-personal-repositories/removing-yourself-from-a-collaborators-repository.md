---
title: Eliminarte del repositorio de un colaborador
intro: 'Si no quieres seguir siendo colaborador del repositorio de otra persona, te puedes eliminar.'
redirect_from:
  - /leave-a-collaborative-repo
  - /leave-a-repo
  - /articles/removing-yourself-from-a-collaborator-s-repo
  - /articles/removing-yourself-from-a-collaborator-s-repository
  - /articles/removing-yourself-from-a-collaborators-repository
  - /github/setting-up-and-managing-your-github-user-account/removing-yourself-from-a-collaborators-repository
  - /github/setting-up-and-managing-your-github-user-account/managing-access-to-your-personal-repositories/removing-yourself-from-a-collaborators-repository
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-access-to-your-personal-repositories/removing-yourself-from-a-collaborators-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Accounts
  - Repositories
shortTitle: Remove yourself
ms.openlocfilehash: 3b760d7947d734d8fa6e1e366795ce698f9c0b7f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '145165151'
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
