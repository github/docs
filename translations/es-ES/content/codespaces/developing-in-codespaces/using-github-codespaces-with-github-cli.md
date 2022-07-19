---
title: Using GitHub Codespaces with GitHub CLI
shortTitle: CLI de GitHub
intro: 'Puedes trabajar con los {% data variables.product.prodname_github_codespaces %} directamente desde tu línea de comandos utilizando `gh`, la interfaz de línea de comandos de {% data variables.product.product_name %}.'
product: '{% data reusables.gated-features.codespaces %}'
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
type: how_to
topics:
  - Codespaces
  - CLI
  - Developer
redirect_from:
  - /codespaces/developing-in-codespaces/using-codespaces-with-github-cli
---

## Acerca de {% data variables.product.prodname_cli %}

{% data reusables.cli.about-cli %} Para obtener más información, consulta la sección "[Acerca de {% data variables.product.prodname_cli %}](/github-cli/github-cli/about-github-cli)".

Puedes trabajar con los {% data variables.product.prodname_codespaces %} en el {% data variables.product.prodname_cli %} para:
  - [Lista todos tus codespaces](#list-all-of-your-codespaces)
  - [Crea un codespace nuevo](#create-a-new-codespace)
  - [Detener un codespace](#stop-a-codespace)
  - [Borrar un codespace](#delete-a-codespace)
  - [Ingresar por SSH a un codespace](#ssh-into-a-codespace)
  - [Abrir un codespace en {% data variables.product.prodname_vscode %}](#open-a-codespace-in--data-variablesproductprodname_vscode-)
  - [Abrir un codespace en JupyterLab](#open-a-codespace-in-jupyterlab)
  - [Copia un archivo de/hacia un codespace](#copy-a-file-tofrom-a-codespace)
  - [Modificar los puertos en un codespace](#modify-ports-in-a-codespace)
  - [Acceder a las bitácoras de un codespace](#access-codespace-logs)

## Instalar {% data variables.product.prodname_cli %}

{% data reusables.cli.cli-installation %}

## Uso de {% data variables.product.prodname_cli %}

Si no lo has hecho aún, ejecuta `gh auth login` para autenticarte con tu cuenta de {% data variables.product.prodname_dotcom %}.

Para utilizar `gh` para trabajar con los {% data variables.product.prodname_codespaces %}, teclea `gh codespace <COMMAND>` o su alias `gh cs <COMMAND>`.

Como ejemplo de una serie de comandos que podrías utilizar para trabajar con los {% data variables.product.prodname_github_codespaces %}, podrías:

* Listar tus codespaces actuales para verificar si tienes un codespace para un repositorio particular:<br> `gh codespace list`
* Crear un codespace nuevo para la rama de repositorio requerida:<br> `gh codespace create -r github/docs -b main`
* Ingresar por SSH en el codespace nuevo:<br> `gh codespace ssh -c mona-github-docs-v4qxrv7rfwv9w`
* Reenviar un puerto a tu máquina local:<br> `gh codespace ports forward 8000:8000 -c mona-github-docs-v4qxrv7rfwv9w`

## Comandos de `gh` para {% data variables.product.prodname_github_codespaces %}

La siguiente sección proporciona comandos de ejemplo para cada una de las operaciones disponibles.

Para obtener una referencia completa de los comandos de `gh` para {% data variables.product.prodname_github_codespaces %}, incluyendo los detalles de todas las opciones disponibles para cada uno de ellos, consulta la ayuda en línea del {% data variables.product.prodname_cli %} y busca "[gh codespace](https://cli.github.com/manual/gh_codespace)". Como alternativa, utiliza `gh codespace [<SUBCOMMAND>...] --help` en la línea de comandos.

{% note %}

**Nota**: El marcador `-c <em>codespace-name</em>`, utilizado en muchos comandos, es opcional. Si lo omites, se mostrará una lista de codespaces para que elijas de ella.

{% endnote %}

### Lista todos tus codespaces

```shell
gh codespace list
```

La lista incluye el nombre único de cada codespace, los cuales puedes utilizar en otros comandos de `gh codespace`.

### Crea un codespace nuevo

```shell
gh codespace create -r <em>owner/repository</em> [-b <em>branch</em>]
```

Para obtener más información, consulta la sección "[Crear un codespace](/codespaces/developing-in-codespaces/creating-a-codespace)".

### Detener un codespace

```shell
gh codespace stop -c <em>codespace-name</em>
```

For more information, see "[Deep dive into {% data variables.product.prodname_github_codespaces %}](/codespaces/getting-started/deep-dive#closing-or-stopping-your-codespace)."

### Borrar un codespace

```shell
gh codespace delete -c <em>codespace-name</em>
```

Para obtener más información, consulta la sección "[Borrar un codespace](/codespaces/developing-in-codespaces/deleting-a-codespace)."

### Ingresar por SSH a un codespace

Para ejecutar comandos en la máquina remota del codespace, desde tu terminal, puedes ingresar por SSH al codespace.

```shell
gh codespace ssh -c <em>codespace-name</em>
```

{% data variables.product.prodname_github_codespaces %} copia tus llaves SSH de GitHub en el codespace cuando lo creas para tener una experiencia de autenticación sin problemas. Puede que se te pida ingresar la frase de acceso para tu llave SSH, después de lo cual se te mostrará un símbolo de sistema desde la máquina remota del codespace.

Si no tienes llaves SSH, sigue las instrucciones de la sección "[Generar una llave SSH nueva y agregarla al ssh-agent](/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)".

### Abrir un codespace en {% data variables.product.prodname_vscode %}

```shell
gh codespace code -c <em>codespace-name</em>
```

Para obtener más información, consulta la sección, "[Utilizar los {% data variables.product.prodname_codespaces %} en {% data variables.product.prodname_vscode %}](/codespaces/developing-in-codespaces/using-codespaces-in-visual-studio-code)".

### Abrir un codespace en JupyterLab

```shell
gh codespace jupyter -c <em>codespace-name</em>
```

### Copia un archivo de/hacia un codespace

```shell
gh codespace cp [-r] <em>source(s)</em> <em>destination</em> 
```

Utiliza el prefijo `remote:` en un nombre de directorio o archivo para indicar que está en el codespace. Tal como con el comando `cp` de UNIX, el primer argumento especifica la fuente y, el último, el destino. Si el destino es un directorio, puedes especificar fuentes múltiples. Utiliza el marcador `-r` (recursivo) si cualquiera de las fuentes es un directorio.

La ubicación de los archivos y directorios en el codespace es relativa al directorio principal del usuario remoto.

#### Ejemplos

* Copia un archivo desde la máquina local al directorio `$HOME` de un codespace:

   `gh codespace cp myfile.txt remote:`

* Copia un archivo al directorio en el que un repositorio esté marcado en un codespace:

   `gh codespace cp myfile.txt remote:/workspaces/<REPOSITORY-NAME>`

* Copia un archivo desde un codespace hacia el directorio actual en la máquina local:

   `gh codespace cp remote:myfile.txt .`

* Copia tres archivos locales al directorio `$HOME/temp` de un codespace:

   `gh codespace cp a1.txt a2.txt a3.txt remote:temp`

* Copia tres archivos desde un codespace hacia el directorio de trabajo actual en la máquina local:

   `gh codespace cp remote:a1.txt remote:a2.txt remote:a3.txt .`

* Copia un directorio local en el directorio `$HOME` de un codespace:

   `gh codespace cp -r mydir remote:`

* Copia un directorio de un codespace a la máquina local, cambiando el nombre de directorio:

   `gh codespace cp -r remote:mydir mydir-localcopy`

Para obtener más información sobre el comando `gh codespace cp`, incluyendo marcas adicionales que puedes utilizar, consulta [el manual del {% data variables.product.prodname_cli %}](https://cli.github.com/manual/gh_codespace_cp).

### Modificar los puertos en un codespace

Puedes reenviar un puerto en un codespace a un puerto local. El puerto permanece reenviado siempre que el proceso se esté ejecutando. Para dejar de reenviar el puerto, presiona <kbd>Control</kbd>+<kbd>C</kbd>.

```shell
gh codespace ports forward <em>codespace-port-number</em>:<em>local-port-number</em> -c <em>codespace-name</em>
```

Para ver los detalles de los puertos reenviados, ingresa `gh codespace ports` y luego elige un codespace.

Puedes configurar la visibilidad de un puerto reenviado. {% data reusables.codespaces.port-visibility-settings %}

```shell
gh codespace ports visibility <em>codespace-port</em>:<em>private|org|public</em> -c <em>codespace-name</em>
```

Puedes configurar la visibilidad de varios puertos con un solo comando. Por ejemplo:

```shell
gh codespace ports visibility 80:private 3000:public 3306:org -c <em>codespace-name</em>
```

Para obtener más información, consulta la sección "[Reenviar puertos en tu codespace](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace)".

### Acceder a las bitácoras de un codespace

Puedes ver la bitácora de creación de un codespace. Después de ingresar este comando, se te pedirá ingresar la frase de acceso de tu llave SSH.

```shell
gh codespace logs -c <em>codespace-name</em>
```

For more information about the creation log, see "[{% data variables.product.prodname_github_codespaces %} logs](/codespaces/troubleshooting/github-codespaces-logs#creation-logs)."
