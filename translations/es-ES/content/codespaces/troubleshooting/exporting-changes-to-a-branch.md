---
title: Exportar los cambios a una rama
intro: Este artículo proporciona los pasos para exportar los cambios de tu codespace a una rama.
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
shortTitle: Exporting changes
ms.openlocfilehash: 676a94ae33b7dba4990014d472cbf28992437a2c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147111006'
---
## Exportar los cambios a una rama

Al utilizar {% data variables.product.prodname_github_codespaces %}, podrías querer exportar tus cambios a una rama sin iniciar el codespace.

Esto puede ser útil cuando se ha alcanzado un [límite de gasto](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces) o se tiene un problema general para acceder al codespace.

Para exportar tus cambios:

1. Vaya a la página "Your Codespaces" (Sus codespaces) en [github.com/codespaces](https://github.com/codespaces) o, en el caso de un repositorio individual, haga clic en el menú **{% octicon "code" aria-label="The code icon" %} Code** (Código).
2. Haga clic en los puntos suspensivos ( **…** ) situados a la derecha del codespace desde el que quiere realizar la exportación.
3. Seleccione **{% octicon "git-branch" aria-label="The git branch icon" %} Export changes to branch** (Exportar los cambios a una rama).

  ![Exportar cambios a una rama](/assets/images/help/codespaces/export-changes-to-a-branch.png)

4. En la ventana emergente, seleccione **Create branch** (Crear rama).
