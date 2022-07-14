---
title: Administrar las solicitudes de extracción para las actualizaciones de dependencia
intro: 'Administrarás las solicitudes de extracción que levante el {% data variables.product.prodname_dependabot %} de casi la misma forma que cualquier otra solicitud de extracción, pero hay algunas opciones adicionales.'
redirect_from:
  - /github/administering-a-repository/managing-pull-requests-for-dependency-updates
  - /code-security/supply-chain-security/managing-pull-requests-for-dependency-updates
  - /code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-pull-requests-for-dependency-updates
versions:
  fpt: '*'
  ghec: '*'
  ghes: '> 3.2'
type: how_to
topics:
  - Repositories
  - Version updates
  - Security updates
  - Pull requests
  - Dependencies
  - Vulnerabilities
shortTitle: Administrar las solicitudes de cambios del Dependabot
---

{% data reusables.dependabot.beta-security-and-version-updates %}
{% data reusables.dependabot.enterprise-enable-dependabot %}

## Acerca de las solicitudes de extracción del {% data variables.product.prodname_dependabot %}

{% data reusables.dependabot.pull-request-introduction %}

Cuando el {% data variables.product.prodname_dependabot %} levanta una solicitud de extracción, se te notificará con el método que hayas escogido para el repositorio. Cada solicitud de cambios contiene información detallada sobre el cambio propusto, que se toma del administrador de paquetes. Estas solicitudes de extracción siguen las revisiones y pruebas normales que se definieron en tu repositorio.
{% ifversion fpt or ghec %}Adicionalmente, cuando haya suficiente información disponible, verás una puntuación de compatibilidad. Esto también podría ayudarte a decidir si quieres fusionar el cambio o no. Para obtener información sobre esta puntuación, consulta la sección "[Acerca de las {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates)".{% endif %}

Si tienes muchas dependencias para administrar, tal vez quieras personalizar la configuración para cada administrador de paquete y que así, las solicitudes de extracción tengan revisores, asignados, y etiquetas específicos. Para obtener más información, consulta la sección "[Personalizar actualizaciones de dependencias](/github/administering-a-repository/customizing-dependency-updates)".

## Visualizar las solicitudes de extracción del {% data variables.product.prodname_dependabot %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-pr %}
1. Cualquier solicitud de cambio de actualizaciones de versión o de seguridad se puede identificar fácilmente.
    - El autor es {% ifversion fpt or ghec %}[dependabot](https://github.com/dependabot){% else %}dependabot{% endif %}, la cuenta bot que utiliza el {% data variables.product.prodname_dependabot %}.
    - Predeterminadamente, tienen la etiqueta `dependencies`.

## Cambiar la estrategia de rebase para las solicitudes de extracción del {% data variables.product.prodname_dependabot %}

Predeterminadamente, el {% data variables.product.prodname_dependabot %} rebasa automáticamente las solicitudes de extracción para resolver cualquier conflicto. Si prefieres manejar los conflictos de fusión manualmente, puedes inhabilitar esta opción utilizando la opción de `rebase-strategy`. Para obtener más detalles, consulta la sección "[Opciones de configuración para el archivo dependabot.yeml](/github/administering-a-repository/configuration-options-for-dependency-updates#rebase-strategy)".

## Allowing {% data variables.product.prodname_dependabot %} to rebase and force push over extra commits

By default, {% data variables.product.prodname_dependabot %} will stop rebasing a pull request once extra commits have been pushed to it. To allow {% data variables.product.prodname_dependabot %} to force push over commits added to its branches, include any of the following strings: `[dependabot skip]` , `[skip dependabot]`, `[dependabot-skip]`, or `[skip-dependabot]`, in either lower or uppercase, to the commit message.

## Administrar las solicitudes de extracción del {% data variables.product.prodname_dependabot %} con comandos de comentario

El {% data variables.product.prodname_dependabot %} responde a comandos simples en los comentarios. Cada solicitud de cambios contiene detalles de los comandos que puedes utilizar para procesarla (por ejemplo: para fusionarla, combinarla, reabrirla, cerrarla o rebasarla) bajo la sección de "comandos y opciones del {% data variables.product.prodname_dependabot %}". El objetivo es facilitar tanto como sea posible el que se pueda clasificar automáticamente las solicitudes de extracción generadas.

Puedes utilizar cualquiera de los siguientes comandos en una solicitud de cambios del {% data variables.product.prodname_dependabot %}.

- `@dependabot cancel merge` cancela una fusión previamente solicitada.
- `@dependabot close` cierra la solicitud de cambios y previene que el {% data variables.product.prodname_dependabot %} vuelva a crearla. Puedes lograr el mismo resultado si cierras la solicitud de cambios manualmente.
- `@dependabot ignore this dependency` cierra la solicitud de cambios y previene que {% data variables.product.prodname_dependabot %} cree más solicitudes de cambios para esta dependencia (a menos de que vuelvas a abrir la solicitud de cambios para mejorarla a la versión sugerida de la dependencia tú mismo).
- `@dependabot ignore this major version` cierra la solicitud de cambios y previene que el {% data variables.product.prodname_dependabot %} cree más solicitudes de cambio para esta versión mayor (a menos de que vuelvas a abrir la solicitud de cambios o de que tú mismo mejores a esta versión mayor).
- `@dependabot ignore this minor version` cierra la solicitud de cambios y previene que el {% data variables.product.prodname_dependabot %} cree más solicitudes de cambio para esta versión menor (a menos de que vuelvas a abrir la solicitud de cambios o que tú mismo mejores a esta versión menor).
- `@dependabot merge` fusiona la solicitud de cambios una vez que tus pruebas de IC hayan pasado.
- `@dependabot rebase` rebasa la solicitud de cambios.
- `@dependabot recreate` vuelve a crear la solicitud de cambios, sobreescribiendo cualquier edición que se le haya hecho.
- `@dependabot reopen` vuelve a abrir la solicitud de cambios si es que se había cerrado.
- `@dependabot squash and merge` combina y fusiona la solicitud de cambios una vez que hayan pasado tus pruebas de IC.

El {% data variables.product.prodname_dependabot %} reaccionará con un emoji de "pulgares arriba" para reconocer el comando y podrá responder con un comentario de la solicitud de cambios. Si bien el {% data variables.product.prodname_dependabot %} a menudo responde rápidamente, algunos comandos podrían tardar varios minutos para completarse si el {% data variables.product.prodname_dependabot %} está ocupado procesando otras actualizaciones o comandos.

Si ejecutas cualquiera de los comandos para ignorar las dependencias o las versiones, el {% data variables.product.prodname_dependabot %} almacena las preferencias para el repositorio centralmente. Si bien esta es una solución rápida, para aquellos repositorios con más de un colaborador, es mejor definir explícitamente las dependencias y versiones a ignorar en el archivo de configuración. Esto hace que todos los colaboradores puedan ver más fácilmente por qué una dependencia en particular no se está actualizando automáticamente. Para obtener más información, consulta la sección "[Opciones de configuración para el archivo dependabot.yml](/github/administering-a-repository/configuration-options-for-dependency-updates#ignore)".
