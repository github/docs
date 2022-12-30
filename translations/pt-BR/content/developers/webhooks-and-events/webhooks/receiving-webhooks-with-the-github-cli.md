---
title: Receber webhooks com a CLI do GitHub
intro: 'É possível usar o {% data variables.product.prodname_cli %} para testar webhooks no ambiente de desenvolvimento sem a complexidade do encaminhamento de porta ou de ferramentas de terceiros.'
versions:
  feature: cli-webhook-forwarding
topics:
  - Webhooks
shortTitle: Receiving webhooks with the GitHub CLI
ms.openlocfilehash: 11bc5b476a191a61594cb73f1e6ce1be5bb6cf9b
ms.sourcegitcommit: d82f268a6f0236d1f4d2bf3d049974ada0170402
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/10/2022
ms.locfileid: '148160661'
---
## Sobre como receber webhooks com {% data variables.product.prodname_cli %}

{% note %}

**Observação**: o recebimento de webhooks com {% data variables.product.prodname_cli %} está atualmente em versão beta pública limitada e sujeito a alterações. Para criar uma conta na versão beta, responda à [discussão](https://github.com/orgs/community/discussions/38261) da comunidade do GitHub. Talvez você não seja adicionado imediatamente. Uma notificação será enviada por email assim que você for adicionado à versão beta.

{% endnote %}

Ao fazer alterações no código de integração, execute-o em um ambiente local para testar e iterar rapidamente sem precisar realizar implantações. É possível usar {% data variables.product.prodname_cli %} para encaminhar webhooks ao ambiente local.

{% note %}

**Observação:** o encaminhamento de webhooks no {% data variables.product.prodname_cli %} só funciona com os webhooks de repositório e organização. Para testar webhooks de patrocínio, GitHub App, empresa ou marketplace localmente, faça isso manualmente. Para obter mais informações, confira "[Como criar webhooks](/developers/webhooks-and-events/webhooks/creating-webhooks)".

{% endnote %}

## Como receber webhooks com a {% data variables.product.prodname_cli %}

{% data reusables.cli.cli-learn-more %}

1. Para instalar a extensão de {% data variables.product.prodname_cli %} a fim de habilitar o encaminhamento de webhook, use o subcomando `extension install`. 

   ```sh
   gh extension install cli/gh-webhook
   ```


1. Inicie o aplicativo localmente e anote a URL em que ele espera receber webhooks. Este guia pressupõe que o aplicativo está ouvindo eventos de webhook em `http://localhost:3000/webhook`.

1. Para configurar os webhooks para serem entregues ao aplicativo, execute o subcomando `webhook forward`. Substitua `REPOSITORY` pelo nome do repositório. Por exemplo, `monalisa/octocat`. Substitua `EVENTS` por uma lista separada por vírgulas dos eventos que você deseja receber. Por exemplo, `issues,pull_request`. Substitua `URL` pela URL local em que o aplicativo espera receber webhooks. Por exemplo, `"http://localhost:3000/webhook"`.  Para escutar webhooks de organização em vez de webhooks de repositório, substitua o sinalizador `--repo` pelo sinalizador `--org`. Por exemplo, `--org="octo-org"`.


   ```sh
   gh webhook forward --repo=REPOSITORY --events=EVENTS --url=URL
   ```

  Deixe o comando em execução em segundo plano. Ele receberá todos os eventos especificados para o repositório indicado e os encaminhará para o manipulador de webhook em execução na URL especificada.
