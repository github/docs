---
title: Acerca de los métodos de fusión en GitHub
intro: 'Puedes permitirle a los colaboradores con acceso de escritura a tu repositorio fusionar sus solicitudes de extracción en {% data variables.product.product_location %} con diferentes opciones de fusión o implementar un método de fusión específico para todas las solicitudes de extracción de tu repositorio.'
redirect_from:
  - /articles/about-merge-methods-on-github
  - /github/administering-a-repository/about-merge-methods-on-github
  - /github/administering-a-repository/configuring-pull-request-merges/about-merge-methods-on-github
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: About merge methods
ms.openlocfilehash: 97e8b7159ebadf1fe02ae56f707728c2bc8c439d
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '147882445'
---
{% data reusables.pull_requests.configure_pull_request_merges_intro %} Puedes implementar un tipo de método de fusión, como el cambio de base o la combinación de confirmaciones, con solo activar el método deseado para tu repositorio.

{% ifversion fpt or ghec %} {% note %}

**Nota:** Cuando use la cola de fusión mediante combinación, ya no podrá elegir el método de combinación, ya que lo controla la cola. {% data reusables.pull_requests.merge-queue-references %}

{% endnote %} {% endif %}

{% data reusables.pull_requests.default_merge_option %}

El método de fusión predeterminado crea una confirmación de fusión. Puedes impedir que cualquiera suba confirmaciones de fusión en una rama protegida imponiendo un historiar de confirmaciones linear. Para más información, vea "[Acerca de las ramas protegidas](/github/administering-a-repository/about-protected-branches#require-linear-history)".

## Combinar tus confirmaciones de fusión

{% data reusables.pull_requests.squash_and_merge_summary %}

Antes de activar combinar confirmaciones, considera estas desventajas:
- Se pierde información acerca de cuándo se hicieron originalmente los cambios específicos y quién es el autor de las confirmaciones combinadas.
- Si sigues trabajando en la rama principal de una solicitud de extracción después de combinar y fusionar, y luego creas una solicitud de extracción nueva entre las mismas ramas, las confirmaciones que ya hayas combinado y fusionado se listarán en la solicitud de extracción nueva. También podrías tener conflictos que tienes que resolver constantemente en cada solicitud de extracción sucesiva. Para más información, vea "[Acerca de las combinaciones de solicitudes de incorporación de cambios](/github/collaborating-with-issues-and-pull-requests/about-pull-request-merges#squashing-and-merging-a-long-running-branch)".
- Es posible que sea más difícil usar algunos comandos de Git que usan el ID "SHA" o "hash", ya que se pierde el ID SHA para las confirmaciones originales. Por ejemplo, es posible que el uso de [`git rerere`](https://git-scm.com/docs/git-rerere) no sea tan eficaz.

Para más información, vea "[Configuración de las fusiones mediante combinación con "squash" de confirmaciones para las solicitudes de incorporación de cambios](/articles/configuring-commit-squashing-for-pull-requests)".

## Cambiar de base y fusionar tus confirmaciones

{% data reusables.pull_requests.rebase_and_merge_summary %}

Antes de activar cambiar de base las confirmaciones, considera estas desventajas:
- Es posible que los colaboradores del repositorio tengan que fusionar mediante cambio de base en la línea de comandos, resolver cualquier conflicto y forzar la inserción de los cambios en la rama de tema de la solicitud de incorporación de cambios (o la rama principal remota) antes de poder usar la opción de **fusionar mediante cambio de base y combinar** de {% data variables.product.product_location %}. El empuje forzado se debe realizar cuidadosamente para que los colaboradores no sobreescriban un trabajo en el que otros se hayan basado. Para más información sobre cuándo la opción **Fusionar mediante cambio de base y combinar** está deshabilitada en {% data variables.product.product_location %} y el flujo de trabajo para volver a habilitarla, vea "[Acerca de las combinaciones de solicitudes de incorporación de cambios](/articles/about-pull-request-merges/#rebase-and-merge-your-pull-request-commits)".
- {% indented_data_reference reusables.pull_requests.rebase_and_merge_verification spaces=3 %}

Para más información, vea "[Configuración de la fusión mediante cambio de base de las confirmaciones para solicitudes de incorporación de cambios](/articles/configuring-commit-rebasing-for-pull-requests)".
