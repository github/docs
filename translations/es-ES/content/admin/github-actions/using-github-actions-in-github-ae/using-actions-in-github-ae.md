---
title: Utilizar las acciones en GitHub AE
intro: '{% data variables.product.prodname_ghe_managed %} incluye la mayoría de las acciones que crea {% data variables.product.prodname_dotcom %}.'
versions:
  ghae: '*'
type: how_to
topics:
  - Actions
  - Enterprise
redirect_from:
  - /admin/github-actions/using-actions-in-github-ae
shortTitle: Use actions
ms.openlocfilehash: a8439a08f73667b7d048b31e2c9eb3968ba2e957
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '145120370'
---
Los flujos de trabajo de {% data variables.product.prodname_actions %} pueden usar _acciones_, que son tareas individuales que puede combinar para crear trabajos y personalizar el flujo de trabajo. Puedes crear tus propias acciones, o utilizar y personalizar a quellas que comparte la comunidad de {% data variables.product.prodname_dotcom %}.

## Acciones oficiales incluidas en {% data variables.product.prodname_ghe_managed %}

La mayoría de las acciones oficiales creadas con {% data variables.product.prodname_dotcom %} se incluyen automáticamente en {% data variables.product.prodname_ghe_managed %} y se capturan en un punto en el tiempo desde {% data variables.product.prodname_marketplace %}. Cuando la instancia de {% data variables.product.prodname_ghe_managed %} se actualiza, también lo hacen las acciones oficiales incluidas.

Las acciones oficiales agrupadas incluyen `actions/checkout`, `actions/upload-artifact`, `actions/download-artifact`, `actions/labeler` y varias acciones `actions/setup-`, entre otras. Para ver cuáles de las acciones oficiales se incluyen, busca las siguientes organizaciones en tu instancia: 
- <code>https://<em>HOSTNAME</em>/actions</code>
- <code>https://<em>HOSTNAME</em>/github</code>

Los archivos de cada acción se conservan en un repositorio de las organizaciones `actions` y `github`. Cada repositorio de estas acciones incluye las etiquetas, ramas y SHA de confirmación necesarios que tu flujo de trabajo puede utilizar para referenciar a la acción.
