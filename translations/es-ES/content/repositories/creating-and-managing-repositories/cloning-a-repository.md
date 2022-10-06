---
title: Clonar un repositorio
intro: 'Cuando creas un repositorio en {% data variables.product.product_location %}, este existe como un repositorio remoto. Puedes clonar tu repositorio para crear una copia local en tu computadora y sincronizarla entre las dos ubicaciones.'
redirect_from:
  - /articles/cloning-a-repository
  - /articles/cloning-a-repository-from-github
  - /github/creating-cloning-and-archiving-repositories/cloning-a-repository
  - /github/creating-cloning-and-archiving-repositories/cloning-a-repository-from-github/cloning-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: fbe00d1568a2f746362d434e769aef2f3466bcf1
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '145136926'
---
## Acerca de clonar un repositorio

Puedes clonar un repositorio desde {% data variables.product.product_location %} hacia tu computadora local para que sea más fácil fusionar conflictos, agregar o eliminar archivos, y subir confirmaciones más grandes. Cuando clonas un repositorio, lo copias desde {% data variables.product.product_location %} hacia tu máquina local.

Clonar un repositorio extrae una copia integral de todos los datos del mismo que {% data variables.product.product_location %} tiene en ese momento, incluyendo todas las versiones para cada archivo y carpeta para el proyecto. Puedes subir tus cambios al repositorio remoto en {% data variables.product.product_location %}, o extraer los cambios de otras personas desde {% data variables.product.product_location %}. Para más información, vea "[Uso de Git](/github/getting-started-with-github/using-git)".

Puedes clonar tu repositorio existente o clonar el repositorio existente de alguien más para contribuir con un proyecto.

## Clonar un repositorio

{% webui %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.copy-clone-url %} {% data reusables.command_line.open_the_multi_os_terminal %} {% data reusables.command_line.change-current-directory-clone %} {% data reusables.command_line.git-clone-url %} {% data reusables.command_line.local-clone-created %}

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

Para clonar un repositorio localmente, use el subcomando `repo clone`. Reemplace el parámetro `repository` con el nombre del repositorio. Por ejemplo, `octo-org/octo-repo`, `monalisa/octo-repo` o `octo-repo`. Si se omite la parte `OWNER/` del argumento de repositorio `OWNER/REPO`, el valor predeterminado es el nombre del usuario que realiza la autenticación.

```shell
gh repo clone <em>repository</em>
```

También puedes utilizar la URL de GitHub para clonar el repositorio.

```shell
gh repo clone <em>https://github.com/cli/cli</em>
```

{% endcli %}

{% desktop %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.open-with-github-desktop %}
4. Sigue las indicaciones en {% data variables.product.prodname_desktop %} para completar la clonación.

Para más información, vea "[Clonación de un repositorio de {% data variables.product.prodname_dotcom %} en {% data variables.product.prodname_desktop %}](/desktop/guides/contributing-to-projects/cloning-a-repository-from-github-to-github-desktop/)".

{% enddesktop %}

## Clonar un repositorio vacío

Un repositorio vacío no contiene archivos. Habitualmente se hace si no inicias el repositorio con un README antes de crearlo.

{% data reusables.repositories.navigate-to-repo %}
2. Para clonar el repositorio desde la línea de comandos con HTTPS, en "Configuración rápida", haga clic en {% octicon "clippy" aria-label="The clipboard icon" %}. Para clonar el repositorio mediante una clave SSH, incluido un certificado emitido por la entidad de certificación SSH de la organización, haga clic en **Usar SSH** y luego en {% octicon "clippy" aria-label="The clipboard icon" %}.
   ![Botón URL de clonación del repositorio vacío](/assets/images/help/repository/empty-https-url-clone-button.png)

   Como alternativa, para clonar el repositorio en el escritorio, haga clic en click {% octicon "desktop-download" aria-label="The desktop download button" %} **Configurar en Desktop** y siga las indicaciones para completar el clon.
   ![Botón Clonar en Desktop el repositorio vacío](/assets/images/help/repository/empty-desktop-clone-button.png)

{% data reusables.command_line.open_the_multi_os_terminal %} {% data reusables.command_line.change-current-directory-clone %} {% data reusables.command_line.git-clone-url %} {% data reusables.command_line.local-clone-created %}

## Solucionar los errores de clonado

Cuando clonas un repositorio, es posible que puedas encontrar algunos errores.

Si no puedes clonar un repositorio, revisa que:

- Puedas conectarte utilizando HTTPS. Para más información, vea "[Errores de clonación HTTPS](/github/creating-cloning-and-archiving-repositories/https-cloning-errors)".
- Tienes permiso para acceder al repositorio que quieres clonar. Para más información, vea "[Error: Repositorio no encontrado](/github/creating-cloning-and-archiving-repositories/error-repository-not-found)".
- La rama predeterminada que quieres clonar aún existe. Para más información, vea "[Error: HEAD del servidor remoto hace referencia a una referencia inexistente, no se puede restaurar](/repositories/creating-and-managing-repositories/troubleshooting-cloning-errors#error-remote-head-refers-to-nonexistent-ref-unable-to-checkout)".

{% ifversion fpt or ghec %}

## Información adicional

- "[Solución de problemas de conectividad](/articles/troubleshooting-connectivity-problems)" {% endif %}
