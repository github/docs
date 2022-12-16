---
title: Utilizar los codespaces con el CLI de GitHub
shortTitle: GitHub CLI
intro: Puedes trabajar con {% data variables.product.prodname_github_codespaces %} directamente desde tu línea de comandos mediante el uso de `gh`, la interfaz de línea de comandos de {% data variables.product.product_name %}.
product: '{% data reusables.gated-features.codespaces %}'
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
type: how_to
topics:
- Codespaces
- CLI
- Developer
ms.openlocfilehash: 3ad93a4c72d2f2fedc526b3593ad4a39597e8fc3
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 07/13/2022
ms.locfileid: "145179793"
---
## <a name="about--data-variablesproductprodname_cli-"></a>Acerca de la {% data variables.product.prodname_cli %} 

{% data reusables.cli.about-cli %} Para más información, vea "[Acerca de {% data variables.product.prodname_cli %}](/github-cli/github-cli/about-github-cli)".

Puedes trabajar con los {% data variables.product.prodname_codespaces %} en el {% data variables.product.prodname_cli %} para:
- [Enumeración de los codespace](#list-all-of-your-codespaces)
- [Creación de un codespace](#create-a-new-codespace)
- [Detención de un codespace](#stop-a-codespace)
- [Eliminación de un codespace](#delete-a-codespace)
- [Ejecución de SSH en un codespace](#ssh-into-a-codespace)
- [Apertura de un codespace en {% data variables.product.prodname_vscode %}](#open-a-codespace-in-visual-studio-code)
- [Apertura de un codespace en JupyterLab](#open-a-codespace-in-jupyterlab)
- [Copia de un archivo desde o hacia un codespace](#copy-a-file-tofrom-a-codespace)
- [Modificación de los puertos en un codespace](#modify-ports-in-a-codespace)
- [Acceso a los registros de codespace](#access-codespace-logs)

## <a name="installing--data-variablesproductprodname_cli-"></a>Instalación de {% data variables.product.prodname_cli %}

{% data reusables.cli.cli-installation %}
 
## <a name="using--data-variablesproductprodname_cli-"></a>Uso de {% data variables.product.prodname_cli %}

Si todavía no lo ha hecho, ejecute `gh auth login` para autenticarse con la cuenta de {% data variables.product.prodname_dotcom %}. 

Para usar `gh` a fin de trabajar con {% data variables.product.prodname_codespaces %}, escriba `gh codespace <COMMAND>` o su alias `gh cs <COMMAND>`.

Como ejemplo de una serie de comandos que podrías utilizar para trabajar con los {% data variables.product.prodname_github_codespaces %}, podrías: 

* Enumere los codespaces actuales a fin de comprobar si tiene uno para un repositorio determinado:<br>
  `gh codespace list`
* Cree un codespace para la rama de repositorio necesaria:<br>
  `gh codespace create -r github/docs -b main`
* Ejecute SSH en el nuevo codespace:<br>
  `gh codespace ssh -c mona-github-docs-v4qxrv7rfwv9w`
* Reenvíe un puerto a la máquina local:<br>
  `gh codespace ports forward 8000:8000 -c mona-github-docs-v4qxrv7rfwv9w`

## <a name="gh-commands-for--data-variablesproductprodname_github_codespaces-"></a>Comandos `gh` para {% data variables.product.prodname_github_codespaces %}

La siguiente sección proporciona comandos de ejemplo para cada una de las operaciones disponibles.

Para obtener una referencia completa de los comandos `gh` para {% data variables.product.prodname_github_codespaces %}, incluidos los detalles de todas las opciones disponibles para cada comando, vea "[gh codespace](https://cli.github.com/manual/gh_codespace)" en la ayuda en línea de {% data variables.product.prodname_cli %}. Como alternativa, use `gh codespace [<SUBCOMMAND>...] --help` en la línea de comandos.

{% note %}

**Nota**: La marca `-c <em>codespace-name</em>`, que se usa con muchos comandos, es opcional. Si lo omites, se mostrará una lista de codespaces para que elijas de ella.

{% endnote %}

### <a name="list-all-of-your-codespaces"></a>Lista todos tus codespaces

```shell
gh codespace list
```

La lista incluye el nombre único de cada codespace, que puede usar en otros comandos `gh codespace`.

### <a name="create-a-new-codespace"></a>Crea un codespace nuevo

```shell
gh codespace create -r <em>owner/repository</em> [-b <em>branch</em>]
```

Para más información, vea "[Creación de un codespace](/codespaces/developing-in-codespaces/creating-a-codespace)".

### <a name="stop-a-codespace"></a>Detener un codespace

```shell
gh codespace stop -c <em>codespace-name</em>
```

Para más información, vea "[Profundización en Codespaces](/codespaces/getting-started/deep-dive#closing-or-stopping-your-codespace)".

### <a name="delete-a-codespace"></a>Borrar un codespace

```shell
gh codespace delete -c <em>codespace-name</em>
```

Para más información, vea "[Eliminación de un codespace](/codespaces/developing-in-codespaces/deleting-a-codespace)".

### <a name="ssh-into-a-codespace"></a>Ingresar por SSH a un codespace

Para ejecutar comandos en la máquina remota del codespace, desde tu terminal, puedes ingresar por SSH al codespace.

```shell
gh codespace ssh -c <em>codespace-name</em>
```

{% data variables.product.prodname_github_codespaces %} copia tus llaves SSH de GitHub en el codespace cuando lo creas para tener una experiencia de autenticación sin problemas. Puede que se te pida ingresar la frase de acceso para tu llave SSH, después de lo cual se te mostrará un símbolo de sistema desde la máquina remota del codespace.

Si no tiene ninguna clave SSH, siga las instrucciones de "[Generación de una nueva clave SSH y agregación al agente ssh](/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)".

### <a name="open-a-codespace-in--data-variablesproductprodname_vscode-"></a>Abrir un codespace en {% data variables.product.prodname_vscode %}

```shell
gh codespace code -c <em>codespace-name</em>
```

Para más información, vea "[Uso de {% data variables.product.prodname_codespaces %} en {% data variables.product.prodname_vscode %}](/codespaces/developing-in-codespaces/using-codespaces-in-visual-studio-code)".

### <a name="open-a-codespace-in-jupyterlab"></a>Apertura de un codespace en JupyterLab

```shell
gh codespace jupyter -c <em>codespace-name</em>
```

### <a name="copy-a-file-tofrom-a-codespace"></a>Copia un archivo de/hacia un codespace

```shell
gh codespace cp [-r] <em>source(s)</em> <em>destination</em> 
```

Use el prefijo `remote:` en un nombre de archivo o directorio para indicar que está en el codespace. Como sucede con el comando `cp` de UNIX, el primer argumento especifica el origen y, el último, el destino. Si el destino es un directorio, puedes especificar fuentes múltiples. Use la marca `-r` (recursiva) si alguno de los orígenes es un directorio.

La ubicación de los archivos y directorios en el codespace es relativa al directorio principal del usuario remoto.

#### <a name="examples"></a>Ejemplos

* Copie un archivo de la máquina local en el directorio `$HOME` de un codespace:

   `gh codespace cp myfile.txt remote:`

* Copia un archivo al directorio en el que un repositorio esté marcado en un codespace:

   `gh codespace cp myfile.txt remote:/workspaces/<REPOSITORY-NAME>`

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

### <a name="modify-ports-in-a-codespace"></a>Modificar los puertos en un codespace

Puedes reenviar un puerto en un codespace a un puerto local. El puerto permanece reenviado siempre que el proceso se esté ejecutando. Para detener el reenvío del puerto, presione <kbd>Control</kbd>+<kbd>C</kbd>.

```shell
gh codespace ports forward <em>codespace-port-number</em>:<em>local-port-number</em> -c <em>codespace-name</em>
```

Para ver detalles de los puertos reenviados, escriba `gh codespace ports` y elija un codespace.

Puedes configurar la visibilidad de un puerto reenviado. {% data reusables.codespaces.port-visibility-settings %}

```shell
gh codespace ports visibility <em>codespace-port</em>:<em>private|org|public</em> -c <em>codespace-name</em>
```

Puedes configurar la visibilidad para varios puertos con un solo comando. Por ejemplo:

```shell
gh codespace ports visibility 80:private 3000:public 3306:org -c <em>codespace-name</em>
```

Para más información, vea "[Reenvío de puertos en el codespace](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace)".

### <a name="access-codespace-logs"></a>Acceder a las bitácoras de un codespace

Puedes ver la bitácora de creación de un codespace. Después de ingresar este comando, se te pedirá ingresar la frase de acceso de tu llave SSH.

```shell
gh codespace logs -c <em>codespace-name</em>
```

Para más información sobre el registro de creación, vea "[Registros de Codespaces](/codespaces/troubleshooting/codespaces-logs#creation-logs)".
