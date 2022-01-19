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
---

## Acerca de las extensiones del {% data variables.product.prodname_cli %}

{% data reusables.cli.cli-extensions %} Para obtener más información sobre cómo utilizar extensiones de {% data variables.product.prodname_cli %}, consulta la sección "[Utilizar extensiones de {% data variables.product.prodname_cli %}](/github-cli/github-cli/using-github-cli-extensions)".

Necesitas un repositorio para cada extensión que crees. El nombre de repositorio debe iniciar con `gh-`. El resto del nombre del repositorio es el nombre de la extensión. El repositorio debe tener un archivo ejecutable en su raíz con el mismo nombre del repositorio o un conjunto de archivos binarios ejecutables precompilados adjuntos a un lanzamiento.

{% note %}

**Nota**: Cuando confíes en un script ejecutable, te recomendamos utilizar un script de bash, ya que bash es un intérprete ampliamente disponible. Puedes utilizar scripts diferentes a los de bash, pero el usuario debe tener el interprete necesario instalado para poder utilizar la extensión. Si prefieres no confiar en usuarios que tengan intérpretes instalados, considera utilizar una extensión precompilada.

{% endnote %}

## Crear una extensión interpretada con `gh extension create`

{% note %}

**Nota**: El ejecutar `gh extension create` sin argumentos iniciará un asistente interactivo.

{% endnote %}

Puedes utilizar el comando `gh extension create` para crear un proyecto para tu extensión, incluyendo un script de bash que contenga algo de código de inicio.

1. Configura una extensión utilizando el subcomando `gh extension create`. Reemplaza `EXTENSION-NAME` con el nombre de tu extensión.

    ```shell
    gh extension create <em>EXTENSION-NAME</em>
    ```

1. Sigue las instrucciones impresas para finalizar y, opcionalmente, publicar tu extensíón.

## Crear una extensión precompilada en Go con `gh extension create`

Puedes utilizar el argumento `--precompiled=go` para crear un proyecto basado en Go para tu extensión, incluyendo el andamiaje de go, de flujos de trabajo y código inicial.

1. Configura una extensión utilizando el subcomando `gh extension create`. Reemplaza a `EXTENSION-NAME` con el nombre de tu extensión y especifica `--precompiled=go`.

    ```shell
    gh extension create --precompiled=go <em>EXTENSION-NAME</em>
    ```

1. Sigue las instrucciones impresas para finalizar y, opcionalmente, publicar tu extensíón.

## Crear una extensión precompilada que no sea de Go con `gh extension create`

Puedes utilizar el argumento `--precompiled=other` para crear un proyecto para tu extensión precompilada que no esté en Go, incluyendo el andamiaje de flujos de trabajo.

1. Configura una extensión utilizando el subcomando `gh extension create`. Reemplaza a `EXTENSION-NAME` con el nombre de tu extensión y especifica `--precompiled=other`.

    ```shell
    gh extension create --precompiled=other <em>EXTENSION-NAME</em>
    ```

1. Agrega algo de código inicial para tu extensión en el lenguaje de compilación que elijas.

1. Llena a `script/build.sh` con código para crear tu extensión y asegurarte de que esta puede compilarse automáticamente.

1. Sigue las instrucciones impresas para finalizar y, opcionalmente, publicar tu extensíón.

## Crear una extensión interpretada manualmente

1. Crea un directorio local para tu extensión llamado `gh-EXTENSION-NAME`. Reemplaza `EXTENSION-NAME` con el nombre de tu extensión. Por ejemplo, `gh-whoami`.

1. En el directorio que creaste, agrega un archivo ejecutable con el mismo nombre que el directorio.

  {% note %}

  **Nota:** Asegúrate de que tu archivo sea ejecutable. En Unix, puedes ejecutar `chmod +x file_name` en la línea de comandos para hacer ejecutable a `file_name`. En Windows, puedes ejecutar `git init -b main`, `git add file_name`, luego `git update-index --chmod=+x file_name`.

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

1. Verifica que tu extensión funcione. Reemplaza `EXTENSION-NAME` con el nombre de tu extensión. Por ejemplo, `whoami`.

   ```shell
   gh <em>EXTENSION-NAME</em>
   ```

1. Desde tu directorio, crea un repositorio para publicar tu extensión. Reemplaza `EXTENSION-NAME` con el nombre de tu extensión.

   ```shell
   git init -b main
   git add . && git commit -m "initial commit"
   gh repo create gh-<em>EXTENSION-NAME</em> --source=. --public --push
   ```

1. Opcionalmente, para ayudar a que otros usuarios descubran tu extensión, agrega el tema de repositorio `gh-extension`. Esto hará que la extensión aparezca en la [página de tema `gh-extension`](https://github.com/topics/gh-extension). Para obtener más información sobre cómo agregar un tema de repositorio, consulta la sección "[Clasificar tu repositorio con temas](/github/administering-a-repository/managing-repository-settings/classifying-your-repository-with-topics)".

## Tipos para escribir extensiones interpretadas de {% data variables.product.prodname_cli %}

### Manejar argumentos y marcadores

Todos los argumentos de línea de comandos que le sigan a un comando `gh my-extension-name` se pasará al script de la extensión. En un script de bash, puedes referenciar argumentos con `$1`, `$2`, etc. Puedes utilizar argumentos para tomar aportaciones de los usuarios o para modificar el comportamiento del script.

Por ejemplo, este script maneja marcadores múltiples. Cuando se llama a este script con el marcador `-h` o `--help`, este imprime el texto de ayuda en vez de continuar con la ejecución. Cuando se llama al script con el marcador `--name`, este configura el siguiente valor después del marcador en `name_arg`. Cuando se llama al script con el marcador `--verbose`, este imprime un saludo diferente.

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

Muchos comandos nucleares son compatibles con el marcador `--json` para recuperar datos con programación. Por ejemplo, para devolver un objeto JSON listando el número, título y estado de capacidad de fusión de las solicitudes de cambios:

```shell
gh pr list --json number,title,mergeStateStatus
```

Si no hay un comando nuclear para recuperar datos específicos de GitHub, puedes utilizar el comando [`gh api`](https://cli.github.com/manual/gh_api) para acceder a la API de GitHub. Por ejemplo, para recuperar información sobre el usuario actual:

```shell
gh api user
```

Todos los comandos que emiten datos de JSON también tiene opciones para filtrar estos datos hacia algo más inmediatamente útil mediante scripts. Por ejemplo, para obtener el nombre del usuario actual:

```shell
gh api user --jq '.name'
```

Para obtener más información, consulta [`gh help formatting`](https://cli.github.com/manual/gh_help_formatting).

## Crear una extensión precompilada manualmente

1. Crea un directorio local para tu extensión llamado `gh-EXTENSION-NAME`. Reemplaza `EXTENSION-NAME` con el nombre de tu extensión. Por ejemplo, `gh-whoami`.

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

1. Compila tu código. Por ejemplo, con Go, reemplaza a `YOUR-USERNAME` con tu nombre de usuario de GitHub:

    ```shell
    go mod init github.com/<em>YOUR-USERNAME</em>/gh-whoami
    go mod tidy
    go build
    ```

1. Verifica que tu extensión funcione. Reemplaza `EXTENSION-NAME` con el nombre de tu extensión. Por ejemplo, `whoami`.

    ```shell
    gh <em>EXTENSION-NAME</em>
    ```

1. Desde tu directorio, crea un repositorio para publicar tu extensión. Reemplaza `EXTENSION-NAME` con el nombre de tu extensión.

  {% note %}

  **Nota:** Ten cuidado de no confirmar el producto binario mediante el paso de tu compilación hacia el control de la versión.

  {% endnote %}

    ```shell
    git init -b main
    echo "gh-<em>EXTENSION-NAME</em>" >> .gitignore
    git add main.go go.* .gitignore && git commit -m'Initial commit'
    gh repo create "gh-<em>EXTENSION-NAME</em>"
    ```

1. Crea un lanzamiento para compartir tu extensión precompilada con otros. Compila para cada plataforma con la que quieras ser compatible, adjuntando cada binario a un lanzamiento como un activo. Los ejecutables binarios adjuntos a los lanzamientos deben seguir una convención de nombres y tener un sufijo de <em>OS-ARCHITECTURE\[EXTENSION\]</em>.

  Por ejemplo, una extensión de nombre `whoami` compilada para Windows de 64 bits tendría el nombre `gh-whoami-windows-amd64.exe`, mientras que la misma extensión compilada para Linux de 32 bits tendría el nombre `gh-whoami-linux-386`. Para ver una lista exhaustiva de combinaciones de SO y arquitectura que reconoce `gh`,, consulta [este código fuente](https://github.com/cli/cli/blob/14f704fd0da58cc01413ee4ba16f13f27e33d15e/pkg/cmd/extension/manager.go#L696).

  {% note %}

  **Nota:** Para que tu extensión se ejecute de forma adecuada en Windows, su archivo de activo debe tener una extensión `.exe`. No se necesita ninguna extensión para otros sistemas operativos.

  {% endnote %}

  Los lanzamientos pueden crearse desde la línea de comandos. Por ejemplo:

  ```shell git tag v1.0.0 git push origin v1.0.0 GOOS=windows GOARCH=amd64 go build -o gh-<em>EXTENSION-NAME</em>-windows-amd64.exe GOOS=linux GOARCH=amd64 go build -o gh-<em>EXTENSION-NAME</em>-linux-amd64 GOOS=darwin GOARCH=amd64 go build -o gh-<em>EXTENSION-NAME</em>-darwin-amd64 gh release create v1.0.0 ./*amd64*

1. Opcionalmente, para ayudar a que otros usuarios descubran tu extensión, agrega el tema de repositorio `gh-extension`. Esto hará que la extensión aparezca en la [página de tema `gh-extension`](https://github.com/topics/gh-extension). Para obtener más información sobre cómo agregar un tema de repositorio, consulta la sección "[Clasificar tu repositorio con temas](/github/administering-a-repository/managing-repository-settings/classifying-your-repository-with-topics)".


## Tips para escribir extensiones precompiladas de {% data variables.product.prodname_cli %}

### Automatizar lanzamientos

Considera agregar la acción [gh-extension-precompile](https://github.com/cli/gh-extension-precompile) a un flujo de trabajo en tu proyecto. Esta acción producirá archivos binarios intercompilados de Go automáticamente para tu extensión y proporcionará andamiaje de compilación para las extensiones precompiladas diferentes a las de Go.

### Utilizar características del {% data variables.product.prodname_cli %} desde las extensiones basadas en Go

Considera utilizar [go-gh](https://github.com/cli/go-gh), una librería de Go que expone piezas de la funcionalidad de `gh` para utilizarlas en las extensiones.

## Pasos siguientes

Para ver más ejemplos de extensiones de {% data variables.product.prodname_cli %}, revisa el [tema de repositorios con la `gh-extension`](https://github.com/topics/gh-extension).
