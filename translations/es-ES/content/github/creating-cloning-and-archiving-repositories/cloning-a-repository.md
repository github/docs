---
title: Clonar un repositorio
intro: 'Cuando creas un repositorio en {% data variables.product.product_location %}, este existe como un repositorio remoto. Puedes clonar tu repositorio para crear una copia local en tu computadora y sincronizarla entre las dos ubicaciones.'
redirect_from:
  - /articles/cloning-a-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### Acerca de clonar un repositorio

Puedes clonar un repositorio desde {% data variables.product.product_location %} hacia tu computadora local para que sea más fácil fusionar conflictos, agregar o eliminar archivos, y subir confirmaciones más grandes. Cuando clonas un repositorio, lo copias desde {% data variables.product.product_location %} hacia tu máquina local.

Clonar un repositorio extrae una copia integral de todos los datos del mismo que {% data variables.product.product_location %} tiene en ese momento, incluyendo todas las versiones para cada archivo y carpeta para el proyecto. Puedes subir tus cambios al repositorio remoto en {% data variables.product.product_location %}, o extraer los cambios de otras personas desde {% data variables.product.product_location %}. Para obtener más información, consulta la sección "[Utilizar los comandos comunes de Git](/github/using-git/using-common-git-commands)".

Puedes clonar tu repositorio existente o clonar el repositorio existente de alguien más para contribuir con un proyecto.

{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
{% tip %}

**Tip**: También puedes clonar un repositorio utilizando el {% data variables.product.prodname_cli %}. Para obtener más información, consulta la sección "[`gh repo clone`](https://cli.github.com/manual/gh_repo_clone)" en la documentación de {% data variables.product.prodname_cli %}.

{% endtip %}
{% endif %}

### Clonar un repositorio utilizando la línea de comando

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.copy-clone-url %}
{% data reusables.command_line.open_the_multi_os_terminal %}
{% data reusables.command_line.change-current-directory-clone %}
{% data reusables.command_line.git-clone-url %}
{% data reusables.command_line.local-clone-created %}

### Clonar un repositorio a {% data variables.product.prodname_desktop %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.open-with-github-desktop %}
4. Sigue las indicaciones en {% data variables.product.prodname_desktop %} para completar la clonación.

Para obtener más información, consulta "[Clonar un repositorio de {% data variables.product.prodname_dotcom %} a {% data variables.product.prodname_desktop %}](/desktop/guides/contributing-to-projects/cloning-a-repository-from-github-to-github-desktop/)".

### Clonar un repositorio vacío

Un repositorio vacío no contiene archivos. Habitualmente se hace si no inicias el repositorio con un README antes de crearlo.

{% data reusables.repositories.navigate-to-repo %}
2. Para clonar tu repositorio utilizando la línea de comandos a través de HTTPS, debajo de "Configuración rápida", da clic en {% octicon "clippy" aria-label="The clipboard icon" %}. Para clonar el repositorio utilizando una llave SSH, incluyendo un certificado que emita la autoridad de certificados SSH de tu organización, da clic en **SSH** y luego en {% octicon "clippy" aria-label="The clipboard icon" %}. ![Botón de URL de clon de repositorio vacío](/assets/images/help/repository/empty-https-url-clone-button.png)

   Como alternativa, para clonar tu repositorio en el escritorio, da clic en {% octicon "desktop-download" aria-label="The desktop download button" %} **Configurar en el escritorio** y sigue las indicaciones para completar el clon. ![Botón de escritorio para clonar repositorio vacío](/assets/images/help/repository/empty-desktop-clone-button.png)

{% data reusables.command_line.open_the_multi_os_terminal %}
{% data reusables.command_line.change-current-directory-clone %}
{% data reusables.command_line.git-clone-url %}
{% data reusables.command_line.local-clone-created %}

### Solucionar los errores de clonado

Cuando clonas un repositorio, es posible que puedas encontrar algunos errores.

Si no puedes clonar un repositorio, revisa que:

- Puedas conectarte utilizando HTTPS. Para obtener más información, consulta la sección "[Errores de clonado de HTTPS](/github/creating-cloning-and-archiving-repositories/https-cloning-errors)".
- Tienes permiso para acceder al repositorio que quieres clonar. Para obtener más información, consulta la sección "[Error: Repositorio no encontrado](/github/creating-cloning-and-archiving-repositories/error-repository-not-found)".
- La rama predeterminada que quieres clonar aún existe. Para obtener más información, verifica que tienes permiso para acceder al repositorio que quieres clonar. Para obtener más información, consulta "[Error: El HEAD remoto se refiere a una ref inexistente, imposible registrar](/github/creating-cloning-and-archiving-repositories/error-remote-head-refers-to-nonexistent-ref-unable-to-checkout)",

{% if currentVersion == "free-pro-team@latest" %}

### Leer más

- "[Solucionar problemas de conectividad ](/articles/troubleshooting-connectivity-problems)"
{% endif %}
