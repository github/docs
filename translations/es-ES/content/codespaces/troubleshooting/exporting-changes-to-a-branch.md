---
title: Exportar los cambios a una rama
intro: Este artículo proporciona los pasos para exportar los cambios de tu codespace a una rama.
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
shortTitle: Exporting changes
ms.openlocfilehash: 2a7dee4725af31f3983e753b4202f94be1742556
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159908'
---
## Exportar los cambios a una rama

Al utilizar {% data variables.product.prodname_github_codespaces %}, podrías querer exportar tus cambios a una rama sin iniciar el codespace. Esto puede ser útil cuando se ha alcanzado un [límite de gasto](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces) o se tiene un problema general para acceder al codespace.

Si el codespace no está publicado (creado a partir de una plantilla y no asociado a un repositorio en {% data variables.product.product_name %}), no podrás exportar los cambios a una rama, pero puedes publicar el codespace en un nuevo repositorio sin iniciar el codespace. Para obtener más información, consulta "[Creación de un codespace a partir de una plantilla](/codespaces/developing-in-codespaces/creating-a-codespace-from-a-template#publishing-from-githubcom)".

Para exportar los cambios a una rama:

{% data reusables.codespaces.your-codespaces-procedure-step %} o, en el caso de un repositorio individual, haz clic en el menú **{% octicon "code" aria-label="The code icon" %} Code** (Código).
1. Haga clic en los puntos suspensivos ( **…** ) situados a la derecha del codespace desde el que quiere realizar la exportación.
2. Seleccione **{% octicon "git-branch" aria-label="The git branch icon" %} Export changes to branch** (Exportar los cambios a una rama).

  ![Exportar cambios a una rama](/assets/images/help/codespaces/export-changes-to-a-branch.png)

1. En la ventana emergente, seleccione **Create branch** (Crear rama).
