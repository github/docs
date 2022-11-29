---
title: Crear extensiones del CLI de GitHub
intro: 'Aprende cómo compartir comandos nuevos de {% data variables.product.prodname_cli %} con otros usurios creando extensiones personalizadas para {% data variables.product.prodname_cli %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - CLI
ms.openlocfilehash: e0f2979beca9a430f5afabf3a4f58fa5ea48ad30
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '145069794'
---
## Acerca de las extensiones del {% data variables.product.prodname_cli %}

{% data reusables.cli.cli-extensions %} Para más información sobre cómo usar extensiones de {% data variables.product.prodname_cli %}, vea "[Uso de extensiones de {% data variables.product.prodname_cli %}](/github-cli/github-cli/using-github-cli-extensions)".

Necesitas un repositorio para cada extensión que crees. El nombre del repositorio debe empezar con `gh-`. El resto del nombre del repositorio es el nombre de la extensión. El repositorio debe tener un archivo ejecutable en su raíz con el mismo nombre del repositorio o un conjunto de archivos binarios ejecutables precompilados adjuntos a un lanzamiento.

{% note %}

**Nota**: Cuando dependa de un script ejecutable, es recomendable usar un script de bash, ya que bash es un intérprete ampliamente disponible. Puedes utilizar scripts diferentes a los de bash, pero el usuario debe tener el interprete necesario instalado para poder utilizar la extensión. Si prefieres no confiar en usuarios que tengan intérpretes instalados, considera utilizar una extensión precompilada.

{% endnote %}

## Creación de una extensión interpretada con `gh extension create`

{% note %}

**Nota**: Al ejecutar `gh extension create` sin argumentos, se iniciará un asistente interactivo.

{% endnote %}

Puede usar el comando `gh extension create` a fin de crear un proyecto para la extensión, incluido un script de bash que contenga algo de código de inicio.

1. Configure una nueva extensión mediante el subcomando `gh extension create`. Reemplace `EXTENSION-NAME` por el nombre de la extensión.

    ```shell
    gh extension create <em>EXTENSION-NAME</em>
    ```

1. Sigue las instrucciones impresas para finalizar y, opcionalmente, publicar tu extensíón.

## Creación de una extensión precompilada en Go con `gh extension create`

Puede usar el argumento `--precompiled=go` a fin de crear un proyecto basado en Go para la extensión, incluido el scaffolding de Go y el de flujos de trabajo, y código inicial.

1. Configure una nueva extensión mediante el subcomando `gh extension create`. Reemplace `EXTENSION-NAME` por el nombre de la extensión y especifique `--precompiled=go`.

    ```shell
    gh extension create --precompiled=go <em>EXTENSION-NAME</em>
    ```

1. Sigue las instrucciones impresas para finalizar y, opcionalmente, publicar tu extensíón.

## Creación de una extensión precompilada que no sea de Go con `gh extension create`

Puede usar el argumento `--precompiled=other` a fin de crear un proyecto para la extensión precompilada que no sea de Go, incluido el scaffolding de flujos de trabajo.

1. Configure una nueva extensión mediante el subcomando `gh extension create`. Reemplace `EXTENSION-NAME` por el nombre de la extensión y especifique `--precompiled=other`.

    ```shell
    gh extension create --precompiled=other <em>EXTENSION-NAME</em>
    ```

1. Agrega algo de código inicial para tu extensión en el lenguaje de compilación que elijas.

1. Rellene `script/build.sh` con código para crear la extensión y asegúrese de que se pueda compilar de forma automática.

1. Sigue las instrucciones impresas para finalizar y, opcionalmente, publicar tu extensíón.

## Crear una extensión interpretada manualmente

1. Cree un directorio local llamado `gh-EXTENSION-NAME` para la extensión. Reemplace `EXTENSION-NAME` por el nombre de la extensión. Por ejemplo: `gh-whoami`.

1. En el directorio que creaste, agrega un archivo ejecutable con el mismo nombre que el directorio.

  {% note %}

  **Nota:** Asegúrese de que el archivo es ejecutable. En Unix, puede ejecutar `chmod +x file_name` en la línea de comandos para convertir `file_name` en ejecutable. En Windows, puede ejecutar `git init -b main`, `git add file_name` y después `git update-index --chmod=+x file_name`.

  {% endnote %}

1. Escribe tu script en el archivo ejecutable. Por ejemplo:

  ```bash
  #!/usr/bin/env bash
  set -e
  exec gh api user --jq '"You are @\(.login) (\(.name))."'
  ```

1. Desde tu directorio, instala la extensión como extensión local.

   ```shell
   gh extension install .
   ```

1. Verifica que tu extensión funcione. Reemplace `EXTENSION-NAME` por el nombre de la extensión. Por ejemplo: `whoami`.

   ```shell
   gh <em>EXTENSION-NAME</em>
   ```

1. Desde tu directorio, crea un repositorio para publicar tu extensión. Reemplace `EXTENSION-NAME` por el nombre de la extensión.

   ```shell
   git init -b main
   git add . && git commit -m "initial commit"
   gh repo create gh-<em>EXTENSION-NAME</em> --source=. --public --push
   ```

1. Opcionalmente, para ayudar a que otros usuarios descubran la extensión, agregue el tema de repositorio `gh-extension`. Esto hará que la extensión aparezca en la [página del tema `gh-extension`](https://github.com/topics/gh-extension). Para más información sobre cómo agregar un tema de repositorio, vea "[Clasificación del repositorio con temas](/github/administering-a-repository/managing-repository-settings/classifying-your-repository-with-topics)".

## Tipos para escribir extensiones interpretadas de {% data variables.product.prodname_cli %}

### Manejar argumentos y marcadores

Todos los argumentos de línea de comandos que aparecen después de un comando `gh my-extension-name` se pasarán al script de la extensión. En un script de bash, puede hacer referencia a argumentos con `$1`, `$2`, etc. Puede usar argumentos para tomar la entrada de usuario o modificar el comportamiento del script.

Por ejemplo, este script maneja marcadores múltiples. Cuando se llama al script con la marca `-h` o `--help`, imprime el texto de ayuda en vez de continuar con la ejecución. Cuando se llama al script con la marca `--name`, el script establece el siguiente valor después de la marca en `name_arg`. Cuando se llama al script con la marca `--verbose`, imprime otro saludo.

```bash
#!/usr/bin/env bash
set -e

verbose=""
name_arg=""
while [ $# -gt 0 ]; do
  case "$1" in
  --verbose)
    verbose=1
    ;;
  --name)
    name_arg="$2"
    shift
    ;;
  -h|--help)
    echo "Add help text here."
    exit 0
    ;;
  esac
  shift
done

if [ -z "$name_arg" ]
then
  echo "You haven't told us your name."
elif [ -z "$verbose" ]
then
  echo "Hi $name_arg"
else
  echo "Hello and welcome, $name_arg"
fi
```

### Llamar a los comandos de forma no interactiva

Algunos comandos nucleares de {% data variables.product.prodname_cli %} pedirán la entrada del usuario. Cuando se hagan scripts con estos comandos, un mensaje a menudo se considera indeseable. Para evitar los mensajes, proporciona la información necesaria explícitamente a través de argumentos.

Por ejemplo, para crear una propuesta con programación, especifica el título y cuerpo:

```shell
gh issue create --title "My Title" --body "Issue description"
```

### Recuperar datos con programación

Muchos comandos básicos admiten la marca `--json` para recuperar datos mediante programación. Por ejemplo, para devolver un objeto JSON listando el número, título y estado de capacidad de fusión de las solicitudes de cambios:

```shell
gh pr list --json number,title,mergeStateStatus
```

Si no hay un comando básico para capturar datos específicos de GitHub, puede usar el comando [`gh api`](https://cli.github.com/manual/gh_api) para acceder a la API de GitHub. Por ejemplo, para recuperar información sobre el usuario actual:

```shell
gh api user
```

Todos los comandos que emiten datos de JSON también tiene opciones para filtrar estos datos hacia algo más inmediatamente útil mediante scripts. Por ejemplo, para obtener el nombre del usuario actual:

```shell
gh api user --jq '.name'
```

Para más información, vea [`gh help formatting`](https://cli.github.com/manual/gh_help_formatting).

## Crear una extensión precompilada manualmente

1. Cree un directorio local llamado `gh-EXTENSION-NAME` para la extensión. Reemplace `EXTENSION-NAME` por el nombre de la extensión. Por ejemplo: `gh-whoami`.

1. En el directorio que creaste, agrega algo de código fuente. Por ejemplo:

    ```go
    package main
    import (
      "github.com/cli/go-gh"
      "fmt"
    )

    func main() {
      args := []string{"api", "user", "--jq", `"You are @\(.login) (\(.name))"` }
      stdOut, _, err := gh.Exec(args...)
      if err != nil {
        fmt.Println(err)
        return
      }
      fmt.Println(stdOut.String())
    }
    ```

1. Desde tu directorio, instala la extensión como extensión local.

    ```shell
    gh extension install .
    ```

1. Compila tu código. Por ejemplo, con Go, reemplace `YOUR-USERNAME` por el nombre de usuario de GitHub:

    ```shell
    go mod init github.com/<em>YOUR-USERNAME</em>/gh-whoami
    go mod tidy
    go build
    ```

1. Verifica que tu extensión funcione. Reemplace `EXTENSION-NAME` por el nombre de la extensión. Por ejemplo: `whoami`.

    ```shell
    gh <em>EXTENSION-NAME</em>
    ```

1. Desde tu directorio, crea un repositorio para publicar tu extensión. Reemplace `EXTENSION-NAME` por el nombre de la extensión.

  {% note %}

  **Nota:** Evite confirmar el binario generado por el paso de compilación para el control de versiones.

  {% endnote %}

    ```shell
    git init -b main
    echo "gh-<em>EXTENSION-NAME</em>" >> .gitignore
    git add main.go go.* .gitignore && git commit -m'Initial commit'
    gh repo create "gh-<em>EXTENSION-NAME</em>"
    ```

1. Crea un lanzamiento para compartir tu extensión precompilada con otros. Compila para cada plataforma con la que quieras ser compatible, adjuntando cada binario a un lanzamiento como un activo. Los ejecutables binarios adjuntos a las versiones deben seguir una convención de nomenclatura y tener un sufijo de <em>SO-ARQUITECTURA\[EXTENSIÓN\]</em>.

  Por ejemplo, una extensión denominada `whoami` compilada para Windows de 64 bits tendría el nombre`gh-whoami-windows-amd64.exe`, mientras que la misma extensión compilada para Linux de 32 bits tendría el nombre `gh-whoami-linux-386`. Para ver una lista exhaustiva de combinaciones de sistema operativo y arquitectura reconocidas por `gh`, vea [este código fuente](https://github.com/cli/cli/blob/14f704fd0da58cc01413ee4ba16f13f27e33d15e/pkg/cmd/extension/manager.go#L696).

  {% note %}

  **Nota:** Para que la extensión se ejecute correctamente en Windows, su archivo de recurso debe tener una extensión `.exe`. No se necesita ninguna extensión para otros sistemas operativos.

  {% endnote %}

  Los lanzamientos pueden crearse desde la línea de comandos. Por ejemplo:

  ```shell
  git tag v1.0.0
  git push origin v1.0.0
  GOOS=windows GOARCH=amd64 go build -o gh-<em>EXTENSION-NAME</em>-windows-amd64.exe
  GOOS=linux GOARCH=amd64 go build -o gh-<em>EXTENSION-NAME</em>-linux-amd64
  GOOS=darwin GOARCH=amd64 go build -o gh-<em>EXTENSION-NAME</em>-darwin-amd64
  gh release create v1.0.0 ./*amd64*

1. Optionally, to help other users discover your extension, add the repository topic `gh-extension`. This will make the extension appear on the [`gh-extension` topic page](https://github.com/topics/gh-extension). For more information about how to add a repository topic, see "[Classifying your repository with topics](/github/administering-a-repository/managing-repository-settings/classifying-your-repository-with-topics)."


## Tips for writing precompiled {% data variables.product.prodname_cli %} extensions

### Automating releases

Consider adding the [gh-extension-precompile](https://github.com/cli/gh-extension-precompile) action to a workflow in your project. This action will automatically produce cross-compiled Go binaries for your extension and supplies build scaffolding for non-Go precompiled extensions.

### Using {% data variables.product.prodname_cli %} features from Go-based extensions

Consider using [go-gh](https://github.com/cli/go-gh), a Go library that exposes pieces of `gh` functionality for use in extensions.

## Next steps

To see more examples of {% data variables.product.prodname_cli %} extensions, look at [repositories with the `gh-extension` topic](https://github.com/topics/gh-extension).
