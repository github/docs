---
ms.openlocfilehash: 307a695e8a973c7b37a29ebbeb4606a8ed43d38d
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145095251"
---
Se você habilitar o e-mail ou as notificações da web para {% data variables.product.prodname_actions %}, você receberá uma notificação quando qualquer fluxo de trabalho que tenha sido acionado for concluído. A notificação incluirá o status da execução do fluxo de trabalho (incluindo execuções bem-sucedidas, com falhas, neutras e canceladas). Também pode optar por receber uma notificação apenas quando a execução de um fluxo de trabalho falhar. Para obter mais informações sobre como habilitar ou desabilitar as notificações, confira "[Sobre as notificações](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/about-notifications)".

As notificações de fluxos de trabalho agendados são enviadas ao usuário que inicialmente criou o fluxo de trabalho. Se outro usuário atualizar a sintaxe cron no arquivo de fluxo de trabalho, as notificações seguintes serão enviadas para esse usuário.{% ifversion fpt or ghes or ghec %} Se um fluxo de trabalho agendado for desabilitado e depois habilitado novamente, as notificações serão enviadas ao usuário que habilitou de novo o fluxo de trabalho em vez de serem enviadas ao usuário que modificou a sintaxe cron pela última vez.{% endif %}

Você também pode ver o status das execuções de fluxo de trabalho na guia Ações de um repositório. Para obter mais informações, confira "[Como gerenciar uma execução de fluxo de trabalho](/actions/automating-your-workflow-with-github-actions/managing-a-workflow-run)".
