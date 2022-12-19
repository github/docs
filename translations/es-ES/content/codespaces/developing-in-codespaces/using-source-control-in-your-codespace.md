---
title: Utilizar el control de código fuente en tu codespace
intro: 'Después de hacer cambios en un archivo de tu codespace, puedes confirmar los cambios rápidamente y subir tu actualización al repositorio remoto.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
shortTitle: Source control
ms.openlocfilehash: 513bf0729e1f04bf93f45999b2fa9e45231add5c
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/09/2022
ms.locfileid: '148160003'
---
{% jetbrains %}

{% data reusables.codespaces.codespaces-jetbrains-beta-note %}

{% endjetbrains %}

## Sobre el control de código fuente en {% data variables.product.prodname_github_codespaces %}

Puedes llevar a cabo todas las acciones de Git que necesites directamente dentro de tu codespace. Por ejemplo, puedes recuperar cambios del repositorio remoto, cambiar de rama, crear una rama nueva, confirmar y subir cambios y crear solicitudes de cambios. Puedes utilizar la terminal integrada dentro de tu codespace para ingresar comandos de Git o puedes hacer clic en los iconos u opciones de menú para completar las tareas más comunes de Git. Esta guía te explica cómo utilizar la interface de usuario gráfica para el control de código fuente.

{% vscode %}

Para obtener más información sobre la compatibilidad con Git en {% data variables.product.prodname_vscode %}, consulta "[Uso del control de versiones en VS Code](https://code.visualstudio.com/docs/editor/versioncontrol#_git-support)" en la documentación de {% data variables.product.prodname_vscode %}.

{% endvscode %}

{% webui %}

El control de código fuente del cliente web de {% data variables.product.prodname_vscode %} usa el mismo flujo de trabajo que la aplicación de escritorio de {% data variables.product.prodname_vscode %}. Para obtener más información, consulta "[Uso del control de versiones en VS Code](https://code.visualstudio.com/docs/editor/versioncontrol#_git-support)" en la documentación de {% data variables.product.prodname_vscode %}.

{% endwebui %}

Un flujo de trabajo típico para actualizar un archivo utilizando {% data variables.product.prodname_github_codespaces %} sería:

* Desde la rama predeterminada de tu repositorio en {% data variables.product.prodname_dotcom %}, crea un codespace. Consulta "[Creación de un codespace para un repositorio](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository)".
* En tu codespace, crea una rama nueva para trabajar en ella.
* Haz tus cambios y guárdalos.
* Confirme el cambio.
* Levanta una solicitud de cambios.

{% webui %}

{% data reusables.codespaces.source-control %} 

{% endwebui %}

{% vscode %}

{% data reusables.codespaces.source-control %} 

{% endvscode %}

{% jetbrains %}

## Crear o cambiar de rama

1. Haz clic en el nombre de la rama en el lado derecho de la barra de estado.

   ![Captura de pantalla del nombre de la rama en la barra de estado](/assets/images/help/codespaces/jetbrains-branch-button.png)

1. En el menú emergente, realiza una de las acciones siguientes:
   * Para crear una nueva rama basada en la rama actual, haz clic en el nombre de la rama actual y, a continuación, elige **Nueva rama**. 

     ![Captura de pantalla de la opción de nueva rama](/assets/images/help/codespaces/jetbrains-new-branch-option.png)

     Escribe un nombre para la nueva rama y haz clic en **Crear**.

     ![Captura de pantalla del cuadro de diálogo Crear rama](/assets/images/help/codespaces/jetbrains-create-branch-dialog.png)

   * Para desactivar una rama existente, empieza escribiendo el nombre de la rama que quieres extraer del repositorio. Haz clic en la rama de la lista y, a continuación, haz clic en **Extraer del repositorio**.

     ![Captura de pantalla de la opción extraer del repositorio](/assets/images/help/codespaces/jetbrains-checkout-submenu.png)

     {% tip %}

     **Sugerencia**: Si alguien ha modificado recientemente un archivo en el repositorio remoto, en la rama a la que hayas cambiado quizá no veas estos cambios hasta que los extraigas en el codespace. 

     {% endtip %}


## Configramr tus cambios 

1. En el lado derecho de la barra de navegación, haz clic en la marca de verificación.

   ![Captura de pantalla de la marca de verificación de confirmación](/assets/images/help/codespaces/jetbrains-commit-button.png)

1. En el cuadro de diálogo Confirmar cambios, escribe un mensaje de confirmación.
1. Haga clic en **Confirmar**.

   Como alternativa, haz clic en la flecha abajo situada junto a **Confirmar** y haz clic en **Confirmar e Insertar**.

   ![Captura de pantalla del botón de Confirmar e Insertar](/assets/images/help/codespaces/jetbrains-commit-and-push.png)

## Extraer cambios del repositorio remoto

Puedes extraer cambios de la misma rama en el repositorio remoto y aplicar esos cambios a la copia del repositorio en el que estás trabajando en el codespace.

1. En el lado derecho de la barra de navegación, haz clic en la flecha que apunta hacia abajo.

   ![Captura de pantalla del botón de flecha hacia abajo de actualización de proyecto](/assets/images/help/codespaces/jetbrains-update-project-button.png)

1. En el cuadro de diálogo Actualizar proyecto, elige si quieres combinar o fusionar mediante cambio de base los cambios entrantes.

   ![Captura de pantalla del cuadro de diálogo Actualizar proyecto](/assets/images/help/codespaces/jetbrains-update-options.png)

1. Haga clic en **OK**.

## Subir cambios a tu repositorio remoto

Puedes insertar cambios que hayas guardado y confirmado. Esto aplica a aquellos de la rama ascendente en el repositorio remoto. Puede que necesites hacer eso si aún no estás listo para crear una solicitud de cambios o si prefieres crearla en {% data variables.product.prodname_dotcom %}.

1. En el lado derecho de la barra de navegación, haz clic en la flecha hacia arriba.

   ![Captura de pantalla de la flecha hacia arriba de Insertar confirmaciones](/assets/images/help/codespaces/jetbrains-push-button.png)

1. En el cuadro de diálogo Insertar confirmaciones, haz clic en **Insertar**.

{% endjetbrains %}
