---
title: Apertura de un codespace existente
intro: Puedes volver a abrir un codespace que hayas cerrado o detenido y volver al trabajo.
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
shortTitle: Open an existing codespace
ms.openlocfilehash: b139b7f4e8a696416c97b3c400d09a9f26371b9c
ms.sourcegitcommit: 1f3bd126ca000982c538f1621d47722737740943
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 12/01/2022
ms.locfileid: '148188300'
---
{% jetbrains %}

{% data reusables.codespaces.codespaces-jetbrains-beta-note %}

{% endjetbrains %}

Puedes volver a abrir cualquiera de los codespaces activos o detenidos en {% data variables.product.prodname_dotcom_the_website %}, en un IDE de JetBrains, en {% data variables.product.prodname_vscode %} o mediante la {% data variables.product.prodname_cli %}. No se puede volver a abrir un codespace que se haya eliminado. Para obtener más información, consulta "[Ciclo de vida de un codespace](/codespaces/getting-started/the-codespace-lifecycle)".

Puedes ver todos tus codespaces en la página "Tus codespaces" en [github.com/codespaces](https://github.com/codespaces). En esta página puede realizar las siguientes acciones:

- Abrir, detener o eliminar los codespaces.
- Ver quién posee (y a quién es posible que se le facturen) los codespaces: tu cuenta personal o las organizaciones a las que perteneces. Para más información, consulta "[Acerca de la facturación de {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces)".
- Crear un nuevo codespace, ya sea con una de las plantillas de {% data variables.product.company_short %} o haciendo clic en **Nuevo codespace**. Para obtener más información, consulta "[Creación de un codespace a partir de una plantilla](/codespaces/developing-in-codespaces/creating-a-codespace-from-a-template)" o "[Creación de un codespace para un repositorio](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository)".

## Apertura de un codespace existente

{% webui %}

{% data reusables.codespaces.your-codespaces-procedure-step %}
1. Para abrir un codespace en el editor predeterminado, haz clic en su nombre. {% data reusables.codespaces.about-changing-default-editor %} Para obtener más información, consulta "[Configuración del editor predeterminado para {% data variables.product.prodname_github_codespaces %}](/codespaces/customizing-your-codespace/setting-your-default-editor-for-github-codespaces)".
   
   Para abrir el codespace en un editor distinto del predeterminado:
   
   1. Haz clic en los puntos suspensivos ( **…** ) situados a la derecha del codespace que quieres abrir.
   1. Haz clic en **Abrir en**.
   1. Haz clic en **Abrir en la APLICACIÓN**.

   ![Captura de pantalla del cuadro de diálogo "Abrir en" , con la opción "Abrir en Visual Studio Code" resaltada](/assets/images/help/codespaces/open-codespace-in-another-editor.png)

   Puedes abrir el codespace en:
   * El explorador
   * {% data variables.product.prodname_vscode %}
   * La puerta de enlace de JetBrains
   * JupyterLab

   {% data reusables.codespaces.application-installed-locally %}

   Si eliges **JupyterLab**, la aplicación JupyterLab debe estar instalada en el codespace. {% data reusables.codespaces.jupyterlab-in-default-image %}

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
     
     {% note %}

     **Nota**: Debes tener {% data variables.product.prodname_vscode_shortname %} instalado en la máquina local. Para obtener más información, consulta "[Configuración de Visual Studio Code](https://code.visualstudio.com/docs/setup/setup-overview)" en la documentación de {% data variables.product.prodname_vscode_shortname %}.

     {% endnote %}
     
   - Para abrir un codespace en el explorador, escribe lo siguiente:
  
     ```shell{:copy}
     gh codespace code --web
     ```

   - Para abrir un codespace en JupyterLab, escribe lo siguiente:
  
     ```shell{:copy}
     gh codespace code --jupyter
     ```
     
     {% note %}

     **Nota**: {% data reusables.codespaces.jupyterlab-installed-in-codespace %}

     {% endnote %}
     
1. Con las teclas de dirección, ves al codespace que quieres abrir.
1. Para abrir el codespace, presiona <kbd>Entrar</kbd>.

Para obtener más información, consulta [`gh codespace code`](https://cli.github.com/manual/gh_codespace_code) en el manual de la {% data variables.product.prodname_cli %}.

{% endcli %}

{% jetbrains %}

{% data reusables.codespaces.opening-codespace-in-jetbrains %}

{% endjetbrains %}
