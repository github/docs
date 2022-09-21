---
title: Cambiar el tipo de máquina de tu codespace
shortTitle: Change the machine type
intro: Puedes cambiar el tipo de máquina que está ejecutando tu codespace para que estés utilizando recursos adecuados para el trabajo que estás haciendo.
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
  - /codespaces/developing-in-codespaces/changing-the-machine-type-for-your-codespace
topics:
  - Codespaces
type: how_to
ms.openlocfilehash: f3669e7addefbf46c3f2af978e746e0c3e634bb0
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147110766'
---
## Acerca de los tipos de máquina

{% note %}

**Nota:** Solo puedes seleccionar o cambiar el tipo de máquina si eres miembro de una organización que usa {% data variables.product.prodname_github_codespaces %} y vas a crear un codespace en un repositorio que pertenece a esa organización.

{% endnote %}

{% data reusables.codespaces.codespaces-machine-types %} Puedes elegir un tipo de máquina alternativo al crear un codespace o en cualquier momento después de crearlo. 

Para obtener información sobre cómo elegir un tipo de máquina al crear un codespace, vea "[Creación de un codespace](/codespaces/developing-in-codespaces/creating-a-codespace#creating-a-codespace)". Para obtener información sobre cómo cambiar el tipo de máquina en {% data variables.product.prodname_vscode %}, vea "[Uso de {% data variables.product.prodname_codespaces %} en {% data variables.product.prodname_vscode %}](/codespaces/developing-in-codespaces/using-codespaces-in-visual-studio-code#changing-the-machine-type-in-visual-studio-code)".

## Cambio del tipo de máquina en {% data variables.product.prodname_dotcom %}

{% data reusables.codespaces.your-codespaces-procedure-step %}

   Se mostrará el tipo de máquina actual para cada uno de tus codespaces.

   ![Lista de 'Tus codespaces'](/assets/images/help/codespaces/your-codespaces-list.png)

1. Haga clic en los puntos suspensivos ( **…** ) situados a la derecha del codespace que quiera modificar.
1. Haga clic en **Cambiar tipo de máquina**.

   ![Opción de menú 'Cambiar tipo de máquina'](/assets/images/help/codespaces/change-machine-type-menu-option.png)

1. Si hay varios tipos de máquina disponibles para tu codespace, elige aquella que quieras utilizar.

   ![La caja de diálogo que muestra los tipos de máquina disponibles para elegir](/assets/images/help/codespaces/change-machine-type-choice.png)

   {% note %}

   **Nota**: {% data reusables.codespaces.codespaces-machine-type-availability %}

   {% endnote %}

2. Haga clic en **Actualizar codespace**. 

   El cambio surtirá efecto la siguiente vez que reinicies tu codespace.

## Forzar una actualización inmediata de un codespace que se está ejecutando actualmente

Si cambias el tipo de máquina de un codespace que estés utilizando actualmente y quieres aplicar los cambios de inmediato, puedes forzar el codespace para que se reinicie.

1. En la parte inferior izquierda de la ventana de codespace, haga clic en **{% data variables.product.prodname_codespaces %}** . 

   ![Hacer clic en '{% data variables.product.prodname_codespaces %}'](/assets/images/help/codespaces/codespaces-button.png)

1. En las opciones que se muestran en la parte superior de la página, seleccione **Codespaces: Detener codespace actual**.

   ![Opción 'Suspender codespace actual'](/assets/images/help/codespaces/suspend-current-codespace.png)

1. Una vez que se detenga el codespace, haga clic en **Reiniciar codespace**.

   ![Hacer clic en 'Reanudar'](/assets/images/help/codespaces/resume-codespace.png)
