---
title: Administrar las solicitudes de extracción para las actualizaciones de dependencia
intro: 'Administrarás las solicitudes de extracción que levante el {% data variables.product.prodname_dependabot %} de casi la misma forma que cualquier otra solicitud de extracción, pero hay algunas opciones adicionales.'
versions:
  free-pro-team: '*'
---

{% data reusables.dependabot.beta-note %}

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

El {% data variables.product.prodname_dependabot %} responde a comandos simples en los comentarios. Cada solicitud de extracción contiene detalles de los comandos que puedes utilizar para procesarla, por ejemplo: fusionar, combinar, reabrir, cerrar o rebasar dicha solicitud. El objetivo es facilitar tanto como sea posible el que se pueda clasificar automáticamente las solicitudes de extracción generadas.

Si ejecutas cualquiera de los comandos para ignorar las dependencias o las versiones, el {% data variables.product.prodname_dependabot %} almacena las preferencias para el repositorio centralmente. Si bien esta es una solución rápida, para aquellos repositorios con más de un colaborador, es mejor definir explícitamente las dependencias y versiones a ignorar en el archivo de configuración. Esto hace que todos los colaboradores puedan ver más fácilmente por qué una dependencia en particular no se está actualizando automáticamente. Para obtener más información, consulta la sección "[Opciones de configuración para las actualizaciones de dependencias](/github/administering-a-repository/configuration-options-for-dependency-updates#ignore)".
