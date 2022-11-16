---
title: Recepción de webhooks con la CLI de GitHub
intro: 'Puedes usar {% data variables.product.prodname_cli %} para probar los webhooks en tu entorno de desarrollo sin la complejidad del reenvío de puertos o el uso de herramientas de terceros.'
versions:
  feature: cli-webhook-forwarding
topics:
  - Webhooks
shortTitle: Receiving webhooks with the GitHub CLI
ms.openlocfilehash: 11bc5b476a191a61594cb73f1e6ce1be5bb6cf9b
ms.sourcegitcommit: d82f268a6f0236d1f4d2bf3d049974ada0170402
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/10/2022
ms.locfileid: '148160668'
---
## Acerca de la recepción de webhooks con {% data variables.product.prodname_cli %}

{% note %}

**Nota**: La recepción de webhooks con {% data variables.product.prodname_cli %} está actualmente en versión beta pública limitada y está sujeta a cambios. Para suscribirte a la versión beta, responde en nuestro [debate](https://github.com/orgs/community/discussions/38261) de la comunidad de GitHub. Es posible que no se te agregue inmediatamente. Recibirás una notificación por correo electrónico una vez que se te haya agregado a la versión beta.

{% endnote %}

Al realizar cambios en el código de integración, la ejecución del código en un entorno local te permite probar e iterar rápidamente sin implementar el código. Puedes usar {% data variables.product.prodname_cli %} para reenviar webhooks a tu entorno local.

{% note %}

**Nota:** El reenvío de webhooks en {% data variables.product.prodname_cli %} solo funciona con webhooks de repositorio y organizativos. Si quieres probar webhooks de patrocinio, de GitHub App, empresariales o de Marketplace localmente, deberás hacerlo manualmente. Para más información, vea "[Creación de webhooks](/developers/webhooks-and-events/webhooks/creating-webhooks)".

{% endnote %}

## Recepción de webhooks con {% data variables.product.prodname_cli %}

{% data reusables.cli.cli-learn-more %}

1. Para instalar la extensión {% data variables.product.prodname_cli %} para habilitar el reenvío de webhooks, usa el subcomando `extension install`. 

   ```sh
   gh extension install cli/gh-webhook
   ```


1. Inicia la aplicación localmente y toma nota de la dirección URL donde espera recibir los webhooks. En esta guía se supone que la aplicación escucha eventos de webhook en `http://localhost:3000/webhook`.

1. Para configurar webhooks que se van a entregar a la aplicación, ejecuta el subcomando `webhook forward`. Reemplaza `REPOSITORY` por el nombre del repositorio. Por ejemplo, `monalisa/octocat`. Reemplaza `EVENTS` por una lista separada por comas de los eventos que quieres recibir. Por ejemplo, `issues,pull_request`. Reemplaza `URL` por la dirección URL local donde la aplicación espera recibir webhooks. Por ejemplo, `"http://localhost:3000/webhook"`.  Para escuchar webhooks de organización en lugar de webhooks de repositorio, reemplaza la marca `--repo` por la marca `--org`. Por ejemplo, `--org="octo-org"`.


   ```sh
   gh webhook forward --repo=REPOSITORY --events=EVENTS --url=URL
   ```

  Deja el comando en ejecución en segundo plano. Recibirás todos los eventos especificados para el repositorio especificado y los reenviarás al controlador de webhooks que se ejecuta en la dirección URL especificada.
