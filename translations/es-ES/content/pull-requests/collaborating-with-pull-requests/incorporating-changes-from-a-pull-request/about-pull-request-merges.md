---
title: Acerca de las fusiones de las solicitudes de extracción
intro: 'Puedes [combinar solicitudes de incorporación de cambios](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request) conservando todas las confirmaciones de cambios en una rama de característica, combinando todas las confirmaciones en una única confirmación o cambiando de base confirmaciones individuales desde la rama `head` hacia la rama `base`.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges
  - /articles/about-pull-request-merge-squashing
  - /articles/about-pull-request-merges
  - /github/collaborating-with-issues-and-pull-requests/about-pull-request-merges
  - /github/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
ms.openlocfilehash: 512a32eb3f918653eab1127aecb70a2fbc220571
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147580443'
---
## Combinación de confirmaciones

{% data reusables.pull_requests.default_merge_option %}

## Squash y combinación de las confirmaciones

{% data reusables.pull_requests.squash_and_merge_summary %}

### Mensaje de fusión para una fusión de combinación

{% ifversion default-merge-squash-commit-message %} Cuando realizas una fusión mediante combinación con "squash", {% data variables.product.prodname_dotcom %} genera un mensaje de confirmación que se puede editar. Según cómo se configure el repositorio y el número de confirmaciones en la solicitud de incorporación de cambios, sin incluir confirmaciones de combinación, este mensaje puede incluir el título de la solicitud de incorporación de cambios, la descripción de la solicitud de incorporación de cambios o la información sobre las confirmaciones.
{% else %} Cuando realizas una fusión mediante combinación con "squash", {% data variables.product.prodname_dotcom %} genera un mensaje de confirmación que se puede editar. El mensaje predeterminado depende del número de confirmaciones de la solicitud de incorporación de cambios, sin incluir las confirmaciones de combinación.

Cantidad de confirmaciones | Resumen | Descripción |
----------------- | ------- | ----------- | 
Una confirmación | El título del mensaje de confirmación para la confirmación única, seguido de el número de la solicitud de extracción | El cuerpo de texto del mensaje de la confirmación para la confirmación única
Más de una confirmación | El título de la solicitud de extracción, seguido por el número de dicha solicitud | Un listado de los mensajes de confirmación para todas las confirmaciones combinadas, en orden cronológico
{% endif %}

Cantidad de confirmaciones | Resumen | Descripción |
----------------- | ------- | ----------- |
Una confirmación | El título del mensaje de confirmación para la confirmación única, seguido de el número de la solicitud de extracción | El cuerpo de texto del mensaje de la confirmación para la confirmación única
Más de una confirmación | El título de la solicitud de extracción, seguido por el número de dicha solicitud | Un listado de los mensajes de confirmación para todas las confirmaciones combinadas, en orden cronológico

{% ifversion default-merge-squash-commit-message %} Los usuarios con acceso de administrador o mantenedor a un repositorio pueden configurar el mensaje de combinación predeterminado de su repositorio para todas las confirmaciones con "squash" para usar el título de la solicitud de incorporación de cambios, el título de la solicitud de incorporación de cambios y los detalles de confirmación, o el título y la descripción de la solicitud de incorporación de cambios. Para más información, consulta "[Configuración de la fusión mediante combinación con "squash" de confirmación](/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/configuring-commit-squashing-for-pull-requests)"..{% endif %}

{% ifversion ghes = 3.6 %} Los usuarios con acceso de administrador a un repositorio pueden configurarlo a fin de que use el título de la solicitud de incorporación de cambios como mensaje de combinación predeterminado para todas las confirmaciones con fusión mediante combinación con "squash". Para obtener más información, consulta "[Configuración de la fusión mediante combinación con "squash" de confirmación](/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/configuring-commit-squashing-for-pull-requests)".
{% endif %}

### Combinar y fusionar una rama extensa

Si tiene previsto continuar trabajando en la [rama principal](/github/getting-started-with-github/github-glossary#head-branch) de una solicitud de incorporación de cambios después de combinar la solicitud de incorporación de cambios, le recomendamos que no fusione mediante combinación con "squash" y combine la solicitud de incorporación de cambios.

Al crear una solicitud de incorporación de cambios, {% data variables.product.prodname_dotcom %} identifica la confirmación más reciente que se encuentra tanto en la rama principal como en la [rama base](/github/getting-started-with-github/github-glossary#base-branch): la confirmación antecesora común. Cuando combinas y fusionas la solicitud de extracción, {% data variables.product.prodname_dotcom %} crea una confirmación en la rama base que contiene todos los cambios que realizaste en la rama principal desde la confirmación del ancestro común.

Ya que esta confirmación se realizó únicamente en la rama base y no en la principal, el ancestro común de las dos ramas permanece sin cambios. Si sigues trabajando en la rama principal, entonces crea una solicitud de extracción nueva entre las dos ramas, la solicitud de extracción incluirá todas las confirmaciones que se hayan realizado desde el ancestro común, incluyendo aquellas que combinaste y fusionaste en la solicitud de extracción previa. Si no hay conflictos, puedes fusionar estas confirmaciones con seguridad. Sin embargo, este flujo de trabajo hace que los conflictos de fusión sean más probables. Si sigues combinando y fusionando las solicitudes de extracción para una rama principal extensa, tendrás que resolver los mismos conflictos repetidamente.

## Fusionar mediante cambio de base y combinar las confirmaciones

{% data reusables.pull_requests.rebase_and_merge_summary %}

No es posible cambiar de base y fusionar automáticamente en {% data variables.product.product_location %} cuando:
- La solicitud de extracción tiene conflictos de fusión.
- Cambiar de base las confirmaciones desde la rama base a la rama encabezado conlleva a tener conflictos.
- Cambiar de base las confirmaciones se considera "no seguro", como cuando un cambio de base es posible sin conflictos de fusión, pero produciría un resultado diferente del que produciría una fusión.

Si aún quieres cambiar de base las confirmaciones, pero no puedes cambiar de base y fusionar automáticamente en {% data variables.product.product_location %}, debes hacer lo siguiente:
- Cambiar de base la rama de tema (o rama de encabezado) hacia la rama base de forma local en la línea de comandos.
- [Resuelva los conflictos de combinación en la línea de comandos](/articles/resolving-a-merge-conflict-using-the-command-line/).
- Realizar un empuje forzado de las confirmaciones cambiadas de base a la rama de tema de la solicitud de extracción (o rama de encabezado remota).

Cualquiera con permisos de escritura en el repositorio, puede [combinar los cambios](/articles/merging-a-pull-request/) mediante el botón de fusión mediante cambio de base y combinación en {% data variables.product.product_location %}.

## Información adicional

- "[Acerca de las solicitudes de incorporación de cambios](/articles/about-pull-requests/)"
- "[Solución de conflictos de combinación](/github/collaborating-with-pull-requests/addressing-merge-conflicts)"
