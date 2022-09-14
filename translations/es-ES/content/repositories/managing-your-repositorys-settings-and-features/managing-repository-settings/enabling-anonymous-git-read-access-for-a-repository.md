---
title: Activar el acceso de lectura Git anónimo para un repositorio
intro: 'Como administrador de un repositorio, puedes habilitar o inhabilitar el acceso de lectura Git anónimo para repositorios públicos que cumplen con determinados requisitos.'
redirect_from:
  - /articles/enabling-anonymous-git-read-access-for-a-repository
  - /github/administering-a-repository/enabling-anonymous-git-read-access-for-a-repository
  - /github/administering-a-repository/managing-repository-settings/enabling-anonymous-git-read-access-for-a-repository
versions:
  ghes: '*'
shortTitle: Anonymous Git read access
ms.openlocfilehash: b289f2e70096775e567be0c925675e9986424821
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '145136735'
---
Los administradores de repositorios pueden cambiar el acceso de lectura Git anónimo y establecer un repositorio específico en los siguientes casos:
- Si un administrador del sitio ha habilitado el modo privado y el acceso de lectura Git anónimo.
- Si el repositorio es público en la empresa y si no es una bifurcación.
- Si un administrador del sitio no ha inhabilitado el acceso de lectura Git anónimo para el repositorio.

{% data reusables.enterprise_user_management.exceptions-for-enabling-anonymous-git-read-access %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
3. Junto a "Habilitar el acceso de lectura Git anónimo", haga clic en **Habilitar**.
![Botón "Habilitado" en "Acceso de lectura anónimo de Git"](/assets/images/help/repository/enable-git-read-access-for-a-repo.png)
4. Examine los cambios. Para confirmar, escriba el nombre del repositorio y haga clic en **Comprendo. Habilitar el acceso de lectura anónimo de Git.**
