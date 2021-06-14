---
title: Acerca de las fusiones de las solicitudes de extracción
intro: 'Puedes [fusionar solicitudes de extracción](/articles/merging-a-pull-request) conservando todas las confirmaciones de cambios en una rama de característica, combinando todas las confirmaiones en una única confirmación o cambiando de base confirmaciones individuales desde la rama `head` hacia la rama `base`.'
redirect_from:
  - /articles/about-pull-request-merge-squashing/
  - /articles/about-pull-request-merges
  - /github/collaborating-with-issues-and-pull-requests/about-pull-request-merges
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
---
{% data reusables.pull_requests.default_merge_option %}

### Combinar y fusionar las confirmaciones de cambios de tus solicitudes de extracción

{% data reusables.pull_requests.squash_and_merge_summary %}

#### Mensaje de fusión para una fusión de combinación

Cuando combinas y fusionas, {% data variables.product.prodname_dotcom %} genera un mensaje de confirmación que puedes cambiar si así lo deseas. El mensaje predeterminado depende de si la solicitud de extracción contiene varias confirmaciones o solo una.

| Cantidad de confirmaciones | Resumen                                                                                                              | Descripción                                                                                               |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| Una confirmación           | El título del mensaje de confirmación para la confirmación única, seguido de el número de la solicitud de extracción | El cuerpo de texto del mensaje de la confirmación para la confirmación única                              |
| Más de una confirmación    | El título de la solicitud de extracción, seguido por el número de dicha solicitud                                    | Un listado de los mensajes de confirmación para todas las confirmaciones combinadas, en orden cronológico |

#### Combinar y fusionar una rama extensa

Si planeas seguir trabajando en la [rama principal](/github/getting-started-with-github/github-glossary#head-branch) de una solicitud de extracción después de que ésta se fusiona, te recomendamos no combinarla y fusionarla.

Cuando creas una solicitud de extracción, {% data variables.product.prodname_dotcom %} identifica la confirmación más reciente que se encuentre tanto en la rama principal como en la [rama base](/github/getting-started-with-github/github-glossary#base-branch): la confirmación del ancestro común. Cuando combinas y fusionas la solicitud de extracción, {% data variables.product.prodname_dotcom %} crea una confirmación en la rama base que contiene todos los cambios que realizaste en la rama principal desde la confirmación del ancestro común.

Ya que esta confirmación se realizó únicamente en la rama base y no en la principal, el ancestro común de las dos ramas permanece sin cambios. Si sigues trabajando en la rama principal, entonces crea una solicitud de extracción nueva entre las dos ramas, la solicitud de extracción incluirá todas las confirmaciones que se hayan realizado desde el ancestro común, incluyendo aquellas que combinaste y fusionaste en la solicitud de extracción previa. Si no hay conflictos, puedes fusionar estas confirmaciones con seguridad. Sin embargo, este flujo de trabajo hace que los conflictos de fusión sean más probables. Si sigues combinando y fusionando las solicitudes de extracción para una rama principal extensa, tendrás que resolver los mismos conflictos repetidamente.

### Cambiar de base y fusionar las confirmaciones de cambios de tus solicitudes de extracción

{% data reusables.pull_requests.rebase_and_merge_summary %}

No es posible cambiar de base y fusionar automáticamente en {% data variables.product.product_location %} cuando:
- La solicitud de extracción tiene conflictos de fusión.
- Cambiar de base las confirmaciones desde la rama base a la rama encabezado conlleva a tener conflictos.
- Cambiar de base las confirmaciones se considera "no seguro", como cuando un cambio de base es posible sin conflictos de fusión, pero produciría un resultado diferente del que produciría una fusión.

Si aún quieres cambiar de base las confirmaciones, pero no puedes cambiar de base y fusionar automáticamente en {% data variables.product.product_location %}, debes hacer lo siguiente:
- Cambiar de base la rama de tema (o rama de encabezado) hacia la rama base de forma local en la línea de comandos.
- [Resolver cualquier conflicto de fusión en la línea de comandos](/articles/resolving-a-merge-conflict-using-the-command-line/).
- Realizar un empuje forzado de las confirmaciones cambiadas de base a la rama de tema de la solicitud de extracción (o rama de encabezado remota).

Cualquiera con permisos de escritura en el repositorio, entonces puede [fusionar los cambios](/articles/merging-a-pull-request/) usando el botón Cambiar de base y fusionar en {% data variables.product.product_location %}.

### Leer más

- "[Acerca de las solicitudes de extracción](/articles/about-pull-requests/)"
- "[Abordar conflictos de fusión](/articles/addressing-merge-conflicts)"
