---
title: Utilizar las extensiones del CLI de GitHub
intro: 'Aprende cómo utilizar extensiones personalizadas que escriben otros usuarios de {% data variables.product.prodname_cli %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - CLI
---

## Acerca de las extensiones del {% data variables.product.prodname_cli %}

{% note %}

**Nota:** Las extensiones fuera de {% data variables.product.product_name %} y {% data variables.product.prodname_cli %} no están certificadas por {% data variables.product.product_name %} y se rigen por términos de servicio, políticas de privacidad y documentación de soporte distintas. Para mitigar el riesgo al utilizar extensiones de terceros, audita el código fuente de la extensión antes de instalarla o actualizarla.

{% endnote %}

{% data reusables.cli.cli-extensions %} Para obtener más información sobre cómo crear extensiones de {% data variables.product.prodname_cli %}, consulta la sección "[Crear extensiones de {% data variables.product.prodname_cli %}](/github-cli/github-cli/creating-github-cli-extensions)".

Las extensiones se instalan localmente y se les da el alcance del usuario. Por lo tanto, si accedes al {% data variables.product.prodname_cli %} desde una máquina diferente o si otro usuario accede al {% data variables.product.prodname_cli %} desde la misma máquina, la extensión no estará disponible.

## Encontrar extensiones

Puedes encontrar extensiones si buscas los [repositorios con el tema `gh-extension`](https://github.com/topics/gh-extension).

## Instalar extensiones

Para instalar una extensión, utiliza el subcomando `extensions install`. Reemplaza el parámetro `repo` con el repositorio de la extensión. Puedes utilizar la URL completa, tal como `https://github.com/octocat/gh-whoami`, o solo el propietario y repositorio, tal como `octocat/gh-whoami`.

Si se utiliza el propietario y repositorio, `gh` instalará la extensión utilizando el nombre de host en el cual está autenticado `gh`. El formato de URL completa es útil cuando se instalan extensiones desde un host diferente. Por ejemplo, los usuarios de {% data variables.product.prodname_ghe_server %} deben utilizar la URL completa del repositorio para instalar extensiones de {% data variables.product.prodname_dotcom_the_website %} o de cualquier otro host.

Para instalar una extensión en desarrollo desde el directorio actual, utiliza `.` como el valor para el parámetro `repo`.

```shell
gh extension install <em>repo</em>
```

Si ya tienes una extensión con el mismo nombre instalada, el comando fallará. Por ejemplo, si instalaste `octocat/gh-whoami`, debes desinstalarlo antes de instalar `hubot/gh-whoami`.

## Ver las extensiones instaladas

Para ver las extensiones instaladas, utiliza el subcomando `extensions list`. La salida también te dirá qué extensiones tienen actualizaciones disponibles.

```shell
gh extension list
```

## Actualizar las extensiones

Para actualizar una extensión, utiliza el subcomando `extensions upgrade`. Reemplaza el parámetro `extension` con el nombre de la extensión.

```shell
gh extension upgrade <em>extension</em>
```

Para actualizar todas las extensiones instaladas, utiliza el marcador `--all`.

```shell
gh extension upgrade --all
```

## Desinstalar las extensiones

Para desinstalar una extensión, utiliza el subcomando `extensions remove`. Reemplaza al parámetro `extension` con el nombre de la extensión.

```shell
gh extension remove <em>extension</em>
```
