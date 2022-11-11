---
title: Apertura de un codespace existente
intro: Puedes volver a abrir un codespace que hayas cerrado o detenido y volver al trabajo.
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
shortTitle: Open an existing codespace
ms.openlocfilehash: 37eff72e5384ec5eda55708f7672cfe6832864c1
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148110038'
---
Puedes volver a abrir cualquiera de los codespaces activos o detenidos en el {% data variables.product.prodname_dotcom_the_website %}, {% data variables.product.prodname_vscode %} o mediante la {% data variables.product.prodname_cli %}. No se puede volver a abrir un codespace que se haya eliminado. Para obtener más información, consulta "[Ciclo de vida de los {% data variables.product.prodname_codespaces %}](/codespaces/developing-in-codespaces/codespaces-lifecycle)".

## Apertura de un codespace existente

{% webui %}

{% data reusables.codespaces.your-codespaces-procedure-step %}
1. Para abrir un codespace en el editor predeterminado, haz clic en su nombre. {% data reusables.codespaces.about-changing-default-editor %} Para obtener más información, consulta "[Configuración del editor predeterminado para {% data variables.product.prodname_github_codespaces %}](/codespaces/customizing-your-codespace/setting-your-default-editor-for-github-codespaces)".
   
   Para abrir el codespace en un editor distinto del predeterminado, selecciona los puntos suspensivos ( **...** ) situados a la derecha del codespace y haz clic en **Abrir en la APLICACIÓN**.

   ![Captura de pantalla de la página "Tus codespaces", con la opción "Abrir en Visual Studio Code" resaltada](/assets/images/help/codespaces/open-codespace-in-another-editor.png)

{% endwebui %}

{% vscode %}

{% note %}

**Nota**: {% data reusables.codespaces.using-codespaces-in-vscode %} Para obtener más información, consulta "[Uso de {% data variables.product.prodname_github_codespaces %} en {% data variables.product.prodname_vscode %}](/codespaces/developing-in-codespaces/using-github-codespaces-in-visual-studio-code)."

{% endnote %}

1. En la aplicación de escritorio {% data variables.product.prodname_vscode_shortname %}, abre la paleta de comandos con <kbd>Comando</kbd>+<kbd>Mayús</kbd>+<kbd>P</kbd> (Mac) o <kbd>Ctrl</kbd>+<kbd>Mayús</kbd>+<kbd>P</kbd> (Windows/Linux).
1. Escribe "Codespaces" y selecciona uno de los comandos siguientes.
   - Para abrir un codespace en una ventana nueva de {% data variables.product.prodname_vscode_shortname %}, selecciona **Codespaces: Abrir codespace en nueva ventana**.
   - Para abrir un codespace en el editor web, selecciona **Codespaces: Abrir en el explorador**.
1. Haz clic en el codespace que quieras abrir.
   
   ![Captura de pantalla de una lista de codespaces en Visual Studio Code](/assets/images/help/codespaces/open-codespace-from-vscode.png)

También puedes acceder a los comandos enumerados anteriormente; para ello, ves a la vista Explorador remoto en {% data variables.product.prodname_vscode_shortname %} y haz clic con el botón derecho en el codespace que quieras abrir.

![Captura de pantalla de un codespace seleccionado en el Explorador remoto, con la opción "Abrir en el explorador" resaltada](/assets/images/help/codespaces/open-codespace-remote-explorer.png)

{% data reusables.codespaces.remote-explorer %} {% endvscode %}

{% cli %}

1. En un terminal, escribe uno de los comandos de la {% data variables.product.prodname_cli %} siguientes.
   - Para abrir un codespace en {% data variables.product.prodname_vscode_shortname %}, escribe lo siguiente:

     ```shell{:copy}
     gh codespace code
     ```

   - Para abrir un codespace en el explorador, escribe lo siguiente:
  
     ```shell{:copy}
     gh codespace code --web
     ```

1. Con las teclas de dirección, ves al codespace que quieres abrir.
1. Para abrir el codespace, presiona <kbd>Entrar</kbd>.

Para obtener más información, consulta [`gh codespace code`](https://cli.github.com/manual/gh_codespace_code) en el manual de la {% data variables.product.prodname_cli %}.

{% endcli %}
