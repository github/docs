---
ms.openlocfilehash: 110de05126a0656467f63f7c377b257adf401c26
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "147064959"
---
Quando você permite que um segredo seja enviado por push, um alerta será criado na guia "Segurança". {% data variables.product.prodname_dotcom %} fecha o alerta e não envia uma notificação se você especificar que o segredo é um falso positivo ou usado apenas em testes. Se você especificar que o segredo é real e que o corrigirá mais tarde, {% data variables.product.prodname_dotcom %} manterá o alerta de segurança aberto e enviará notificações ao autor do commit, bem como aos administradores do repositório. Para obter mais informações, confira "[Como gerenciar alertas da verificação de segredos](/code-security/secret-scanning/managing-alerts-from-secret-scanning)".
