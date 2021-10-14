---
title: Crear extensiones del CLI de GitHub
intro: 'Aprende cómo compartir comandos nuevos de {% data variables.product.prodname_cli %} con otros usurios creando extensiones personalizadas para {% data variables.product.prodname_cli %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - CLI
---

## Acerca de las extensiones del {% data variables.product.prodname_cli %}

{% data reusables.cli.cli-extensions %} Para obtener más información sobre cómo utilizar extensiones de {% data variables.product.prodname_cli %}, consulta la sección "[Utilizar extensiones de {% data variables.product.prodname_cli %}](/github-cli/github-cli/using-github-cli-extensions)".

Necesitas un repositorio para cada extensión que crees. El nombre de repositorio debe iniciar con `gh-`. El resto del nombre del repositorio es el nombre de la extensión. En la raíz del repositorio, debe haber un archivo ejecutable con el mismo nombre del repositorio. Este archivo se ejecutará cuando se invoque la extensión.

{% note %}

**Nota**: Te recomendamos que el archivo ejecutable sea un script bash, ya que bash es un intérprete de disponibilidad amplia. Puedes utilizar scripts diferentes a los de bash, pero el usuario debe tener el interprete necesario instalado para poder utilizar la extensión.

{% endnote %}

## Crear una extensión con `gh extension create`

Puedes utilizar el comando `gh extension create` para crear un proyecto para tu extensión, incluyendo un script de bash que contenga algo de código de inicio.

1. Configura una extensión utilizando el subcomando `gh extension create`. Reemplaza `EXTENSION-NAME` con el nombre de tu extensión.

    ```shell
    gh extension create <em>EXTENSION-NAME</em>
    ```

1. Sigue las instrucciones impresas para finalizar y, opcionalmente, publicar tu extensíón.

## Crear una extensión manualmente

1. Crea un directorio local para tu extensión llamado `gh-EXTENSION-NAME`. Reemplaza a `EXTENSION-NAME` con el nombre de tu extensión. Por ejemplo, `gh-whoami`.

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

   ```bash
   gh extension install .
   ```

1. Verifica que tu extensión funcione. Reemplaza a `EXTENSION-NAME` con el nombre de tu extensión. Por ejemplo, `whoami`.

   ```shell
   gh <em>EXTENSION-NAME</em>
   ```

1. Desde tu directorio, crea un repositorio para publicar tu extensión. Reemplaza a `EXTENSION-NAME` con el nombre de tu extensión.

   ```shell
   git init -b main
   gh repo create gh-<em>EXTENSION-NAME</em> --confirm
   git add . && git commit -m "initial commit" && git push --set-upstream origin main
   ```

1. Opcionalmente, para ayudar a que otros usuarios descubran tu extensión, agrega el tema de repositorio `gh-extension`. Esto hará que la extensión aparezca en la [página de tema `gh-extension`](https://github.com/topics/gh-extension). Para obtener más información sobre cómo agregar un tema de repositorio, consulta la sección "[Clasificar tu repositorio con temas](/github/administering-a-repository/managing-repository-settings/classifying-your-repository-with-topics)".

## Tips para escribir extensiones de {% data variables.product.prodname_cli %}

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

```bash
gh issue create --title "My Title" --body "Issue description"
```

### Recuperar datos con programación

Muchos comandos nucleares son compatibles con el marcador `--json` para recuperar datos con programación. Por ejemplo, para devolver un objeto JSON listando el número, título y estado de capacidad de fusión de las solicitudes de cambios:
```bash
gh pr list --json number,title,mergeStateStatus
```

Si no hay un comando nuclear para recuperar datos específicos de GitHub, puedes utilizar el comando [`gh api`](https://cli.github.com/manual/gh_api) para acceder a la API de GitHub. Por ejemplo, para recuperar información sobre el usuario actual:
```bash
gh api user
```

Todos los comandos que emiten datos de JSON también tiene opciones para filtrar estos datos hacia algo más inmediatamente útil mediante scripts. Por ejemplo, para obtener el nombre del usuario actual:

```bash
gh api user --jq '.name'
```

Para obtener más información, consulta [`gh help formatting`](https://cli.github.com/manual/gh_help_formatting).

## Pasos siguientes

Para ver más ejemplos de extensiones de {% data variables.product.prodname_cli %}, revisa el [tema de repositorios con la `gh-extension`](https://github.com/topics/gh-extension).
