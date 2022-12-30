---
title: Utilizar las extensiones del CLI de GitHub
intro: 'Aprende cómo utilizar extensiones personalizadas que escriben otros usuarios de {% data variables.product.prodname_cli %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - CLI
ms.openlocfilehash: 14bd68ea6cec8df656e59c05f6cd3fa313857158
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '145069783'
---
## Acerca de las extensiones del {% data variables.product.prodname_cli %}

{% note %}

**Nota:** Las extensiones fuera de {% data variables.product.product_name %} y {% data variables.product.prodname_cli %} no están certificadas por {% data variables.product.product_name %} y se rigen por términos del servicio, directivas de privacidad y documentación de soporte diferentes. Para mitigar el riesgo al utilizar extensiones de terceros, audita el código fuente de la extensión antes de instalarla o actualizarla.

{% endnote %}

{% data reusables.cli.cli-extensions %} Para más información sobre cómo crear extensiones de {% data variables.product.prodname_cli %}, vea "[Creación de extensiones de {% data variables.product.prodname_cli %}](/github-cli/github-cli/creating-github-cli-extensions)".

Las extensiones se instalan localmente y se les da el alcance del usuario. Por lo tanto, si accedes al {% data variables.product.prodname_cli %} desde una máquina diferente o si otro usuario accede al {% data variables.product.prodname_cli %} desde la misma máquina, la extensión no estará disponible.

## Búsqueda de extensiones

Puede encontrar extensiones si busca en los [repositorios con el tema `gh-extension`](https://github.com/topics/gh-extension).

## Instalación de extensiones

Para instalar una extensión, use el subcomando `extensions install`. Reemplace el parámetro `repo` con el repositorio de la extensión. Puede usar la dirección URL completa, como `https://github.com/octocat/gh-whoami`, o bien solo el propietario y el repositorio, como `octocat/gh-whoami`.

Si usa el propietario y el repositorio, `gh` instalará la extensión con el nombre de host en el que `gh` se autentica actualmente. El formato de URL completa es útil cuando se instalan extensiones desde un host diferente. Por ejemplo, los usuarios de {% data variables.product.prodname_ghe_server %} deben utilizar la URL completa del repositorio para instalar extensiones de {% data variables.product.prodname_dotcom_the_website %} o de cualquier otro host.

Para instalar una extensión en desarrollo desde el directorio actual, use `.` como valor del parámetro `repo`.

```shell
gh extension install <em>repo</em>
```

Si ya tienes una extensión con el mismo nombre instalada, el comando fallará. Por ejemplo, si ha instalado `octocat/gh-whoami`, debe desinstalarlo antes de instalar `hubot/gh-whoami`.

## Ver las extensiones instaladas

Para ver todas las extensiones instaladas, use el subcomando `extensions list`. La salida también te dirá qué extensiones tienen actualizaciones disponibles.

```shell
gh extension list
```

## Actualización de extensiones

Para actualizar una extensión, use el subcomando `extensions upgrade`. Reemplace el parámetro `extension` con el nombre de la extensión.

```shell
gh extension upgrade <em>extension</em>
```

Para actualizar todas las extensiones instaladas, use la marca `--all`.

```shell
gh extension upgrade --all
```

## Desinstalación de extensiones

Para desinstalar una extensión, use el subcomando `extensions remove`. Reemplace el parámetro `extension` con el nombre de la extensión.

```shell
gh extension remove <em>extension</em>
```
