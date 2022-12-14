---
title: Fusionar un repositorio ascendente dentro de una bifurcación
intro: If you don't have push (write) access to an upstream repository, then you can pull commits from that repository into your own fork.
redirect_from:
- /github/collaborating-with-issues-and-pull-requests/working-with-forks/merging-an-upstream-repository-into-your-fork
- /articles/merging-an-upstream-repository-into-your-fork
- /github/collaborating-with-issues-and-pull-requests/merging-an-upstream-repository-into-your-fork
- /github/collaborating-with-pull-requests/working-with-forks/merging-an-upstream-repository-into-your-fork
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Pull requests
shortTitle: Merge an upstream repo
ms.openlocfilehash: 7622e4865efc444a253cbbedf04ede0e47535967
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 05/17/2022
ms.locfileid: "145139498"
---
{% data reusables.command_line.open_the_multi_os_terminal %}
2. Cambiar el directorio de trabajo actual en tu proyecto local.
3. Revisa la rama a la que deseas fusionar. Habitualmente, fusionarás en la rama predeterminada.
  ```shell
  $ git checkout <em>DEFAULT_BRANCH_NAME</em>
  ```
4. Extrae la rama deseada del repositorio ascendente. Este método conservará el historial de confirmación de cambios sin modificación.
  ```shell
  $ git pull https://{% data variables.command_line.codeblock %}/<em>ORIGINAL_OWNER</em>/<em>ORIGINAL_REPOSITORY</em>.git <em>BRANCH_NAME</em>
  ```
5. Si hay conflictos, resuélvelos. Para obtener más información, consulte "[Solución de conflictos de combinación](/github/collaborating-with-pull-requests/addressing-merge-conflicts)".
6. Confirma la fusión.
7. Revisa los cambios y asegúrate que sean correctos.
8. Sube la fusión en tu repositorio de GitHub.
  ```shell
  $ git push origin <em>DEFAULT_BRANCH_NAME</em>
  ```
