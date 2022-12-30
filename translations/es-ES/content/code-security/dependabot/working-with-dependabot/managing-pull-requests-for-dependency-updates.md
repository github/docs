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
shortTitle: Manage Dependabot PRs
ms.openlocfilehash: e33b176ced7d10ed70f4c521ce2c18be776a7f8e
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147112322'
---
{% data reusables.dependabot.beta-security-and-version-updates %} {% data reusables.dependabot.enterprise-enable-dependabot %}

## Acerca de las solicitudes de extracción del {% data variables.product.prodname_dependabot %}

{% data reusables.dependabot.pull-request-introduction %}

Cuando el {% data variables.product.prodname_dependabot %} levanta una solicitud de extracción, se te notificará con el método que hayas escogido para el repositorio. Cada solicitud de cambios contiene información detallada sobre el cambio propusto, que se toma del administrador de paquetes. Estas solicitudes de extracción siguen las revisiones y pruebas normales que se definieron en tu repositorio. {% ifversion fpt or ghec %}Adicionalmente, cuando haya suficiente información disponible, verás una puntuación de compatibilidad. Esto también podría ayudarte a decidir si quieres fusionar el cambio o no. Para obtener información sobre esta puntuación, consulta "[Acerca de {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates)".{% endif %}

Si tienes muchas dependencias para administrar, tal vez quieras personalizar la configuración para cada administrador de paquete y que así, las solicitudes de extracción tengan revisores, asignados, y etiquetas específicos. Para obtener más información, consulta "[Personalización de las actualizaciones de dependencias](/github/administering-a-repository/customizing-dependency-updates)".

## Visualizar las solicitudes de extracción del {% data variables.product.prodname_dependabot %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-pr %}
1. Cualquier solicitud de cambio de actualizaciones de versión o de seguridad se puede identificar fácilmente.
    - El autor es {% ifversion fpt or ghec %}[dependabot](https://github.com/dependabot){% else %}dependabot{% endif %}, la cuenta de bot que usa {% data variables.product.prodname_dependabot %}.
    - De manera predeterminada, tienen la etiqueta `dependencies`.

## Cambiar la estrategia de rebase para las solicitudes de extracción del {% data variables.product.prodname_dependabot %}

Predeterminadamente, el {% data variables.product.prodname_dependabot %} rebasa automáticamente las solicitudes de extracción para resolver cualquier conflicto. Si prefieres controlar los conflictos de combinación manualmente, puedes deshabilitarlo mediante la opción `rebase-strategy`. Para obtener más información, consulta "[Opciones de configuración para el archivo dependabot.yml](/github/administering-a-repository/configuration-options-for-dependency-updates#rebase-strategy)".

## Permitir que {% data variables.product.prodname_dependabot %} fusione mediante cambio de base confirmaciones adicionales y fuerce la inserción sobre estas

De forma predeterminada, {% data variables.product.prodname_dependabot %} dejará de fusionar mediante cambio de base las solicitudes de incorporación de cambios una vez que se hayan insertado en ellas confirmaciones adicionales. Para permitir que {% data variables.product.prodname_dependabot %} fuerce la inserción sobre confirmaciones agregadas a sus ramas, incluye cualquiera de las siguientes cadenas: `[dependabot skip]` , `[skip dependabot]`, `[dependabot-skip]` o `[skip-dependabot]`, en minúsculas o mayúsculas, en el mensaje de confirmación.

## Administrar las solicitudes de extracción del {% data variables.product.prodname_dependabot %} con comandos de comentario

El {% data variables.product.prodname_dependabot %} responde a comandos simples en los comentarios. Cada solicitud de cambios contiene detalles de los comandos que puedes utilizar para procesarla (por ejemplo: para fusionarla, combinarla, reabrirla, cerrarla o rebasarla) bajo la sección de "comandos y opciones del {% data variables.product.prodname_dependabot %}". El objetivo es facilitar tanto como sea posible el que se pueda clasificar automáticamente las solicitudes de extracción generadas.

Puedes utilizar cualquiera de los siguientes comandos en una solicitud de cambios del {% data variables.product.prodname_dependabot %}.

- `@dependabot cancel merge` cancela una combinación solicitada previamente.
- `@dependabot close` cierra la solicitud de incorporación de cambios y previene que {% data variables.product.prodname_dependabot %} vuelva a crearla. Puedes lograr el mismo resultado si cierras la solicitud de cambios manualmente.
- `@dependabot ignore this dependency` cierra la solicitud de incorporación de cambios y previene que {% data variables.product.prodname_dependabot %} cree más solicitudes de incorporación de cambios para esta dependencia (a menos de que vuelvas a abrir la solicitud de incorporación de cambios para mejorarla a la versión sugerida de la dependencia tú mismo).
- `@dependabot ignore this major version` cierra la solicitud de incorporación de cambios y previene que {% data variables.product.prodname_dependabot %} cree más solicitudes de incorporación de cambios para esta versión principal (a menos de que vuelvas a abrir la solicitud de incorporación de cambios para mejorarla a esta versión principal tú mismo).
- `@dependabot ignore this minor version` cierra la solicitud de incorporación de cambios y previene que {% data variables.product.prodname_dependabot %} cree más solicitudes de incorporación de cambios para esta versión secundaria (a menos de que vuelvas a abrir la solicitud de incorporación de cambios para mejorarla a esta versión secundaria tú mismo).
- `@dependabot merge` combina la solicitud de incorporación de cambios una vez que se han superado las pruebas de CI.
- `@dependabot rebase` fusiona mediante cambio de base la solicitud de incorporación de cambios.
- `@dependabot recreate` vuelve a crear la solicitud de incorporación de cambios, sobrescribiendo las modificaciones que se hayan realizado en ella.
- `@dependabot reopen` vuelve a abrir la solicitud de incorporación de cambios si esta se cierra.
- `@dependabot squash and merge` fusiona mediante combinación con "squash" la solicitud de incorporación de cambios una vez que se han superado las pruebas de CI.

El {% data variables.product.prodname_dependabot %} reaccionará con un emoji de "pulgares arriba" para reconocer el comando y podrá responder con un comentario de la solicitud de cambios. Si bien el {% data variables.product.prodname_dependabot %} a menudo responde rápidamente, algunos comandos podrían tardar varios minutos para completarse si el {% data variables.product.prodname_dependabot %} está ocupado procesando otras actualizaciones o comandos.

Si ejecutas cualquiera de los comandos para ignorar las dependencias o las versiones, el {% data variables.product.prodname_dependabot %} almacena las preferencias para el repositorio centralmente. Si bien esta es una solución rápida, para aquellos repositorios con más de un colaborador, es mejor definir explícitamente las dependencias y versiones a ignorar en el archivo de configuración. Esto hace que todos los colaboradores puedan ver más fácilmente por qué una dependencia en particular no se está actualizando automáticamente. Para más información, vea "[Opciones de configuración para el archivo dependabot.yml](/github/administering-a-repository/configuration-options-for-dependency-updates#ignore)".
