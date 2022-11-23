---
title: Uso de GitHub Codespaces con la CLI de GitHub
shortTitle: GitHub CLI
intro: 'Puedes trabajar con {% data variables.product.prodname_github_codespaces %} directamente desde la línea de comandos mediante `gh`, la interfaz de línea de comandos de {% data variables.product.product_name %}.'
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - CLI
  - Developer
redirect_from:
  - /codespaces/developing-in-codespaces/using-codespaces-with-github-cli
ms.openlocfilehash: e9a268273e0a6d85a17a795f593e7bd3a7885718
ms.sourcegitcommit: 0a6e3eee6eea9b1e445aea1e4461d64cf6b63218
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/14/2022
ms.locfileid: '148163501'
---
## Acerca de la {% data variables.product.prodname_cli %} 

{% data reusables.cli.about-cli %} Para más información, vea "[Acerca de {% data variables.product.prodname_cli %}](/github-cli/github-cli/about-github-cli)".

Puedes trabajar con los {% data variables.product.prodname_github_codespaces %} en el  {% data variables.product.prodname_cli %} para:
  - [Lista todos tus codespaces](#list-all-of-your-codespaces)
  - [Crea un codespace nuevo](#create-a-new-codespace)
  - [Detención de un codespace](#stop-a-codespace)
  - [Eliminación de un codespace](#delete-a-codespace)
  - [Cambiar el nombre de un codespace](#rename-a-codespace)
  - [Ejecución de SSH en un codespace](#ssh-into-a-codespace)
  - [Apertura de un codespace en {% data variables.product.prodname_vscode %}](#open-a-codespace-in--data-variablesproductprodname_vscode-)
  - [Apertura de un codespace en JupyterLab](#open-a-codespace-in-jupyterlab)
  - [Copia un archivo de/hacia un codespace](#copy-a-file-tofrom-a-codespace)
  - [Modificación de los puertos en un codespace](#modify-ports-in-a-codespace)
  - [Acceso a los registros de codespace](#access-codespace-logs)
  - [Acceso remoto a recursos](#access-remote-resources)
  - [Cambiar el tipo de máquina de un codespace](#change-the-machine-type-of-a-codespace)

## Instalación de {% data variables.product.prodname_cli %}

{% data reusables.cli.cli-installation %}
 
## Uso de {% data variables.product.prodname_cli %}

Si todavía no lo ha hecho, ejecute `gh auth login` para autenticarse con la cuenta de {% data variables.product.prodname_dotcom %}. 

Para usar `gh` a fin de trabajar con {% data variables.product.prodname_github_codespaces %}, escribe `gh codespace SUBCOMMAND` o su alias `gh cs SUBCOMMAND`.

Como ejemplo de una serie de comandos que podrías utilizar para trabajar con los {% data variables.product.prodname_github_codespaces %}, podrías: 

* Enumere los codespaces actuales a fin de comprobar si tiene uno para un repositorio determinado:<br>
  `gh codespace list`
* Cree un codespace para la rama de repositorio necesaria:<br>
  `gh codespace create -r github/docs -b main`
* Ejecute SSH en el nuevo codespace:<br>
  `gh codespace ssh -c octocat-literate-space-parakeet-7gwrqp9q9jcx4vq`
* Reenvíe un puerto a la máquina local:<br>
  `gh codespace ports forward 8000:8000 -c octocat-literate-space-parakeet-7gwrqp9q9jcx4vq`

## Comandos `gh` para {% data variables.product.prodname_github_codespaces %}

La siguiente sección proporciona comandos de ejemplo para cada una de las operaciones disponibles.

Para obtener una referencia completa de los comandos `gh` para {% data variables.product.prodname_github_codespaces %}, incluidos los detalles de todas las opciones disponibles para cada comando, vea "[gh codespace](https://cli.github.com/manual/gh_codespace)" en la ayuda en línea de {% data variables.product.prodname_cli %}. Como alternativa, en la línea de comandos, usa `gh codespace --help` para obtener ayuda general o `gh codespace SUBCOMMAND --help` para obtener ayuda con un subcomando específico.

{% note %}

**Nota**: La marca `-c CODESPACE_NAME`, que se usa con muchos comandos, es opcional. Si lo omites, se mostrará una lista de codespaces para que elijas de ella.

{% endnote %}

### Lista todos tus codespaces

```shell
gh codespace list
```

La lista incluye el nombre único de cada codespace, que puede usar en otros comandos `gh codespace`.

Un asterisco al final del nombre de la rama de un codespace indica que hay cambios no confirmados o no insertados en ese codespace.

### Crea un codespace nuevo

```shell
gh codespace create -r OWNER/REPO_NAME [-b BRANCH]
```

Para obtener más información, consulta "[Creación de un codespace para un repositorio](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository)".

### Detener un codespace

```shell
gh codespace stop -c CODESPACE-NAME
```

Para más información, consulta "[Profundización en {% data variables.product.prodname_github_codespaces %}](/codespaces/getting-started/deep-dive#closing-or-stopping-your-codespace)".

### Borrar un codespace

```shell
gh codespace delete -c CODESPACE-NAME
```

Para más información, vea "[Eliminación de un codespace](/codespaces/developing-in-codespaces/deleting-a-codespace)".

### Cambiar el nombre de un codespace

```shell
gh codespace edit -c CODESPACE-NAME -d DISPLAY-NAME
```

Para obtener más información, consulta "[Cambio del nombre de un codespace](/codespaces/customizing-your-codespace/renaming-a-codespace)".

### Ingresar por SSH a un codespace

Para ejecutar comandos en la máquina remota del codespace, desde tu terminal, puedes ingresar por SSH al codespace.

```shell
gh codespace ssh -c CODESPACE-NAME
```

{% note %}

**Nota**: {% data reusables.codespaces.ssh-server-installed %}

<br>Para obtener más información sobre el archivo `devcontainer.json` y la imagen de contenedor predeterminada, consulta "[Introducción a los contenedores de desarrollo](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)".

{% endnote %}

{% data variables.product.prodname_github_codespaces %} copia tus llaves SSH de GitHub en el codespace cuando lo creas para tener una experiencia de autenticación sin problemas. Puede que se te pida ingresar la frase de acceso para tu llave SSH, después de lo cual se te mostrará un símbolo de sistema desde la máquina remota del codespace.

Si no tiene ninguna clave SSH, siga las instrucciones de "[Generación de una nueva clave SSH y agregación al agente ssh](/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)".

### Abrir un codespace en {% data variables.product.prodname_vscode %}

```shell
gh codespace code -c CODESPACE-NAME
```

Debes tener {% data variables.product.prodname_vscode_shortname %} instalados en la máquina local. Para obtener más información, consulta "[Uso de {% data variables.product.prodname_github_codespaces %} en {% data variables.product.prodname_vscode %}](/codespaces/developing-in-codespaces/using-github-codespaces-in-visual-studio-code)".

### Apertura de un codespace en JupyterLab

```shell
gh codespace jupyter -c CODESPACE-NAME
```

{% data reusables.codespaces.jupyterlab-installed-in-codespace %}

### Copia un archivo de/hacia un codespace

```shell
gh codespace cp [-r] SOURCE(S) DESTINATION
```

Use el prefijo `remote:` en un nombre de archivo o directorio para indicar que está en el codespace. Como sucede con el comando `cp` de UNIX, el primer argumento especifica el origen y, el último, el destino. Si el destino es un directorio, puedes especificar fuentes múltiples. Use la marca `-r` (recursiva) si alguno de los orígenes es un directorio.

La ubicación de los archivos y directorios en el codespace es relativa al directorio principal del usuario remoto.

#### Ejemplos

* Copie un archivo de la máquina local en el directorio `$HOME` de un codespace:

   `gh codespace cp myfile.txt remote:`

* Copia un archivo al directorio en el que un repositorio esté marcado en un codespace:

   `gh codespace cp myfile.txt remote:/workspaces/REPOSITORY-NAME`

* Copia un archivo desde un codespace hacia el directorio actual en la máquina local:

   `gh codespace cp remote:myfile.txt .`

* Copie tres archivos locales en el directorio `$HOME/temp` de un codespace:

   `gh codespace cp a1.txt a2.txt a3.txt remote:temp`

* Copia tres archivos desde un codespace hacia el directorio de trabajo actual en la máquina local:

   `gh codespace cp remote:a1.txt remote:a2.txt remote:a3.txt .`

* Copie un directorio local en el directorio `$HOME` de un codespace:

   `gh codespace cp -r mydir remote:`

* Copia un directorio de un codespace a la máquina local, cambiando el nombre de directorio:

   `gh codespace cp -r remote:mydir mydir-localcopy`

Para más información sobre el comando `gh codespace cp`, incluidas las marcas adicionales que puede usar, vea [el manual de {% data variables.product.prodname_cli %}](https://cli.github.com/manual/gh_codespace_cp).

### Modificar los puertos en un codespace

Puedes reenviar un puerto en un codespace a un puerto local. El puerto permanece reenviado siempre que el proceso se esté ejecutando. Para detener el reenvío del puerto, presione <kbd>Control</kbd>+<kbd>C</kbd>.

```shell
gh codespace ports forward CODESPACE-PORT_NAME:LOCAL-PORT-NAME -c CODESPACE-NAME
```

Para ver detalles de los puertos reenviados, escriba `gh codespace ports` y elija un codespace.

Puedes configurar la visibilidad de un puerto reenviado. {% data reusables.codespaces.port-visibility-settings %}

```shell
gh codespace ports visibility CODESPACE-PORT:private|org|public -c CODESPACE-NAME
```

Puedes configurar la visibilidad para varios puertos con un solo comando. Por ejemplo:

```shell
gh codespace ports visibility 80:private 3000:public 3306:org -c CODESPACE-NAME
```

Para más información, vea "[Reenvío de puertos en el codespace](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace)".

### Acceder a las bitácoras de un codespace

Puedes ver la bitácora de creación de un codespace. Después de ingresar este comando, se te pedirá ingresar la frase de acceso de tu llave SSH.

```shell
gh codespace logs -c CODESPACE-NAME
```

Para más información sobre el registro de creación, consulta "[Registros de {% data variables.product.prodname_github_codespaces %}](/codespaces/troubleshooting/github-codespaces-logs#creation-logs)".

### Acceso remoto a recursos 
Puede usar la extensión {% data variables.product.prodname_cli %} para crear un puente entre un codespace y la máquina local, de modo que el codespace pueda acceder a cualquier recurso remoto al que se pueda acceder desde la máquina. Para obtener más información sobre el uso de la extensión, vea "[Uso de {% data variables.product.prodname_cli %} para acceder a recursos remotos](https://github.com/github/gh-net#codespaces-network-bridge)".

{% note %}

**Nota**: La extensión {% data variables.product.prodname_cli %} se encuentra actualmente en versión beta pública y está sujeta a cambios. 

{% endnote %}

### Cambiar el tipo de máquina de un codespace

```shell
gh codespace edit -m MACHINE-TYPE-NAME
```

Para obtener más información, consulta la pestaña "{% data variables.product.prodname_cli %}" de "[Cambio del tipo de máquina para el codespace](/codespaces/customizing-your-codespace/changing-the-machine-type-for-your-codespace)".
