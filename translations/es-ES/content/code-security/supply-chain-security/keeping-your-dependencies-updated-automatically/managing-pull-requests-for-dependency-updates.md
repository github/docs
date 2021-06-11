---
title: Administrar las solicitudes de extracción para las actualizaciones de dependencia
intro: 'Administrarás las solicitudes de extracción que levante el {% data variables.product.prodname_dependabot %} de casi la misma forma que cualquier otra solicitud de extracción, pero hay algunas opciones adicionales.'
redirect_from:
  - /github/administering-a-repository/managing-pull-requests-for-dependency-updates
  - /code-security/supply-chain-security/managing-pull-requests-for-dependency-updates
versions:
  free-pro-team: '*'
type: how_to
topics:
  - Repositories
  - Version updates
  - Security updates
  - Pull requests
  - Dependencies
  - Vulnerabilities
---

### Acerca de las solicitudes de extracción del {% data variables.product.prodname_dependabot %}

{% data reusables.dependabot.pull-request-introduction %}

Cuando el {% data variables.product.prodname_dependabot %} levanta una solicitud de extracción, se te notificará con el método que hayas escogido para el repositorio. Cada solicitud de cambios contiene información detallada sobre el cambio propusto, que se toma del administrador de paquetes. Estas solicitudes de extracción siguen las revisiones y pruebas normales que se definieron en tu repositorio. Adicionalmente, si hay información suficiente disponible, verás una puntuación de compatibilidad. Esto también podría ayudarte a decidir si quieres fusionar el cambio o no. Para obtener información sobre esta puntuación, consulta la sección "[Acerca de las {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates)".

Si tienes muchas dependencias para administrar, tal vez quieras personalizar la configuración para cada administrador de paquete y que así, las solicitudes de extracción tengan revisores, asignados, y etiquetas específicos. Para obtener más información, consulta la sección "[Personalizar actualizaciones de dependencias](/github/administering-a-repository/customizing-dependency-updates)".

### Visualizar las solicitudes de extracción del {% data variables.product.prodname_dependabot %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-pr %}
1. Cualquier solicitud de extracción para actualizaciones de versión o de seguridad se puede identificar fácilmente.
    - El autor es [dependabot](https://github.com/dependabot), la cuenta bot que utiliza la app del {% data variables.product.prodname_dependabot %}.
    - Predeterminadamente, tienen la etiqueta `dependencies`.

### Cambiar la estrategia de rebase para las solicitudes de extracción del {% data variables.product.prodname_dependabot %}

Predeterminadamente, el {% data variables.product.prodname_dependabot %} rebasa automáticamente las solicitudes de extracción para resolver cualquier conflicto. Si prefieres manejar los conflictos de fusión manualmente, puedes inhabilitar esta opción utilizando la opción de `rebase-strategy`. Para obtener más detalles, consulta la sección "[Opciones de configuración para actualizaciones de dependencias](/github/administering-a-repository/configuration-options-for-dependency-updates#rebase-strategy)".

### Administrar las solicitudes de extracción del {% data variables.product.prodname_dependabot %} con comandos de comentario

El {% data variables.product.prodname_dependabot %} responde a comandos simples en los comentarios. Each pull request contains details of the commands you can use to process the pull request (for example: to merge, squash, reopen, close, or rebase the pull request) under the "{% data variables.product.prodname_dependabot %} commands and options" section. El objetivo es facilitar tanto como sea posible el que se pueda clasificar automáticamente las solicitudes de extracción generadas.

You can use any of the following commands on a {% data variables.product.prodname_dependabot %} pull request.

- `@dependabot cancel merge` cancels a previously requested merge.
- `@dependabot close` closes the pull request and prevents {% data variables.product.prodname_dependabot %} from recreating that pull request. You can achieve the same result by closing the pull request manually.
- `@dependabot ignore this dependency` closes the pull request and prevents {% data variables.product.prodname_dependabot %} from creating any more pull requests for this dependency (unless you reopen the pull request or upgrade to the suggested version of the dependency yourself).
- `@dependabot ignore this major version` closes the pull request and prevents {% data variables.product.prodname_dependabot %} from creating any more pull requests for this major version (unless you reopen the pull request or upgrade to this major version yourself).
- `@dependabot ignore this minor version` closes the pull request and prevents {% data variables.product.prodname_dependabot %} from creating any more pull requests for this minor version (unless you reopen the pull request or upgrade to this minor version yourself).
- `@dependabot merge` merges the pull request once your CI tests have passed.
- `@dependabot rebase` rebases the pull request.
- `@dependabot recreate` recreates the pull request, overwriting any edits that have been made to the pull request.
- `@dependabot reopen` reopens the pull request if the pull request is closed.
- `@dependabot squash and merge` squashes and merges the pull request once your CI tests have passed.

{% data variables.product.prodname_dependabot %} will react with a "thumbs up" emoji to acknowledge the command, and may respond with a comment on the pull request. While {% data variables.product.prodname_dependabot %} usually responds quickly, some commands may take several minutes to complete if {% data variables.product.prodname_dependabot %} is busy processing other updates or commands.

Si ejecutas cualquiera de los comandos para ignorar las dependencias o las versiones, el {% data variables.product.prodname_dependabot %} almacena las preferencias para el repositorio centralmente. Si bien esta es una solución rápida, para aquellos repositorios con más de un colaborador, es mejor definir explícitamente las dependencias y versiones a ignorar en el archivo de configuración. Esto hace que todos los colaboradores puedan ver más fácilmente por qué una dependencia en particular no se está actualizando automáticamente. Para obtener más información, consulta la sección "[Opciones de configuración para las actualizaciones de dependencias](/github/administering-a-repository/configuration-options-for-dependency-updates#ignore)".
