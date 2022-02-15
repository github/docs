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
---

## Acerca de clonar un repositorio

Puedes clonar un repositorio desde {% data variables.product.product_location %} hacia tu computadora local para que sea más fácil fusionar conflictos, agregar o eliminar archivos, y subir confirmaciones más grandes. Cuando clonas un repositorio, lo copias desde {% data variables.product.product_location %} hacia tu máquina local.

Clonar un repositorio extrae una copia integral de todos los datos del mismo que {% data variables.product.product_location %} tiene en ese momento, incluyendo todas las versiones para cada archivo y carpeta para el proyecto. Puedes subir tus cambios al repositorio remoto en {% data variables.product.product_location %}, o extraer los cambios de otras personas desde {% data variables.product.product_location %}. Para obtener más información, consulta "[Utilizar Git](/github/getting-started-with-github/using-git)".

Puedes clonar tu repositorio existente o clonar el repositorio existente de alguien más para contribuir con un proyecto.

## Clonar un repositorio

{% webui %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.copy-clone-url %}
{% data reusables.command_line.open_the_multi_os_terminal %}
{% data reusables.command_line.change-current-directory-clone %}
{% data reusables.command_line.git-clone-url %}
{% data reusables.command_line.local-clone-created %}

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

Para clonar un repositorio localmente, utiliza el subcomando `repo clone`. Reemplaza el parámetro de `repository` con el nombre del repositorio. Por ejemplo, `octo-org/octo-repo`, `monalisa/octo-repo`, o `octo-repo`. Si se omite la porción `OWNER/` del argumento `OWNER/REPO` del repositorio, este será predeterminadamente el nombre del usuario que se está autenticando.

```shell
gh repo clone <em>repository</em>
```

También puedes utilizar la URL de GitHub para clonar el repositorio.

```shell
gh repo clone <em>https://github.com/cli/cli</em>
```

{% endcli %}

{% desktop %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.open-with-github-desktop %}
4. Sigue las indicaciones en {% data variables.product.prodname_desktop %} para completar la clonación.

Para obtener más información, consulta "[Clonar un repositorio de {% data variables.product.prodname_dotcom %} a {% data variables.product.prodname_desktop %}](/desktop/guides/contributing-to-projects/cloning-a-repository-from-github-to-github-desktop/)".

{% enddesktop %}

## Clonar un repositorio vacío

Un repositorio vacío no contiene archivos. Habitualmente se hace si no inicias el repositorio con un README antes de crearlo.

{% data reusables.repositories.navigate-to-repo %}
2. Para clonar tu repositorio utilizando la línea de comandos a través de HTTPS, debajo de "Configuración rápida", da clic en {% octicon "clippy" aria-label="The clipboard icon" %}. Para clonar el repositorio utilizando una llave SSH, incluyendo un certificado que emita la autoridad de certificados SSH de tu organización, da clic en **SSH** y luego en {% octicon "clippy" aria-label="The clipboard icon" %}. ![Botón de URL de clon de repositorio vacío](/assets/images/help/repository/empty-https-url-clone-button.png)

   Como alternativa, para clonar tu repositorio en el escritorio, da clic en {% octicon "desktop-download" aria-label="The desktop download button" %} **Configurar en el escritorio** y sigue las indicaciones para completar el clon. ![Botón de escritorio para clonar repositorio vacío](/assets/images/help/repository/empty-desktop-clone-button.png)

{% data reusables.command_line.open_the_multi_os_terminal %}
{% data reusables.command_line.change-current-directory-clone %}
{% data reusables.command_line.git-clone-url %}
{% data reusables.command_line.local-clone-created %}

## Solucionar los errores de clonado

Cuando clonas un repositorio, es posible que puedas encontrar algunos errores.

Si no puedes clonar un repositorio, revisa que:

- Puedas conectarte utilizando HTTPS. Para obtener más información, consulta la sección "[Errores de clonado de HTTPS](/github/creating-cloning-and-archiving-repositories/https-cloning-errors)".
- Tienes permiso para acceder al repositorio que quieres clonar. Para obtener más información, consulta la sección "[Error: Repositorio no encontrado](/github/creating-cloning-and-archiving-repositories/error-repository-not-found)".
- La rama predeterminada que quieres clonar aún existe. Para obtener más información, verifica que tienes permiso para acceder al repositorio que quieres clonar. Para obtener más información, consulta "[Error: El HEAD remoto se refiere a una ref inexistente, imposible registrar](/github/creating-cloning-and-archiving-repositories/error-remote-head-refers-to-nonexistent-ref-unable-to-checkout)",

{% ifversion fpt or ghec %}

## Leer más

- "[Solucionar problemas de conectividad ](/articles/troubleshooting-connectivity-problems)"
{% endif %}
