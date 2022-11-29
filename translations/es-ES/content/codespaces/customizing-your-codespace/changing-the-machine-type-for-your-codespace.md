---
title: Cambiar el tipo de máquina de tu codespace
shortTitle: Change the machine type
intro: Puedes cambiar el tipo de máquina que ejecuta tu codespace para usar los recursos adecuados para el trabajo que estás llevando a cabo.
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
  - /codespaces/developing-in-codespaces/changing-the-machine-type-for-your-codespace
topics:
  - Codespaces
type: how_to
ms.openlocfilehash: b8614e9389aa617b3bfcfa3444f5a60aa7dd3c2e
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159089'
---
## Acerca de los tipos de máquina

{% data reusables.codespaces.codespaces-machine-types %} Puedes elegir un tipo de máquina alternativo al crear un codespace o en cualquier momento después de crearlo. 

Para obtener información sobre cómo elegir un tipo de máquina al crear un codespace, consulta "[Creación de un codespace para un repositorio](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository#creating-a-codespace-for-a-repository)".

{% data reusables.codespaces.machine-types-for-unpublished-codespaces %} Para obtener más información, consulta "[Creación de un codespace a partir de una plantilla](/codespaces/developing-in-codespaces/creating-a-codespace-from-a-template)".

## Cambio del tipo de máquina

{% note %}

**Nota**: {% data reusables.codespaces.codespaces-machine-type-availability %}

{% endnote %}

{% webui %}

{% data reusables.codespaces.your-codespaces-procedure-step %}

   Se mostrará el tipo de máquina actual para cada uno de tus codespaces.

   ![Lista de 'Tus codespaces'](/assets/images/help/codespaces/your-codespaces-list.png)

{% data reusables.codespaces.ellipsis-settings %}
1. Haga clic en **Cambiar tipo de máquina**.

   ![Opción de menú 'Cambiar tipo de máquina'](/assets/images/help/codespaces/change-machine-type-menu-option.png)
1. Si hay varios tipos de máquina disponibles para tu codespace, elige aquella que quieras utilizar.

   ![La caja de diálogo que muestra los tipos de máquina disponibles para elegir](/assets/images/help/codespaces/change-machine-type-choice.png)
1. Haga clic en **Actualizar codespace**. 

{% endwebui %}

{% vscode %}

{% data reusables.codespaces.changing-machine-type-in-vscode %}

{% endvscode %}

{% cli %}

Puedes usar el comando `gh codespace edit --machine MACHINE-TYPE-NAME` {% data variables.product.prodname_cli %} para cambiar el tipo de equipo de un codespace. Para usar este comando, primero deberás averiguar cuáles son los tipos de máquina disponibles para el codespace.

1. Para ver la lista de codespaces, escribe el comando siguiente en un terminal.
   
   ```
   gh codespace list
   ```
1. Opcionalmente, puedes escribir el comando siguiente para buscar el tipo de máquina actual para un codespace.
   
   ```
   gh api /user/codespaces/CODESPACE-NAME
   ```

   Reemplaza `CODESPACE-NAME` por el nombre permanente del codespace, por ejemplo, `octocat-literate-space-parakeet-mld5`. Los nombres permanentes aparecen en la columna **NAME** de la lista que devuelve `gh codespace list`.

   Si se te pide que solicites el ámbito `codespace`, sigue las instrucciones del terminal.

   Los detalles de la máquina actual aparecen en el campo `machine`.
1. Para buscar los tipos de máquina disponibles para un codespace, escribe el comando siguiente.
   
   ```
   gh api /user/codespaces/CODESPACE-NAME/machines
   ```

   Reemplaza `CODESPACE-NAME` por el nombre permanente del codespace, por ejemplo, `octocat-literate-space-parakeet-mld5`.
1. Para cambiar el tipo de máquina de un codespace, escribe el comando siguiente.

   ```
   gh codespace edit --machine MACHINE-TYPE-NAME
   ```

   Reemplaza `MACHINE-TYPE-NAME` por el nombre de un tipo de máquina disponible para el codespace, por ejemplo, `standardLinux32gb`. 
1. Con las teclas de dirección, ve al codespace que quieres cambiar y presione <kbd>ENTRAR</kbd>.

{% endcli %}

{% data reusables.codespaces.about-changing-storage-size %}

{% cli %}

## Información adicional

- "[Máquinas de codespaces](/rest/codespaces/machines)" en la documentación de la API REST
- [`gh codespace edit`](https://cli.github.com/manual/gh_codespace_edit) en el manual de {% data variables.product.prodname_cli %}

{% endcli %}
