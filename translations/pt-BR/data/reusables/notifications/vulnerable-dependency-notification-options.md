---
ms.openlocfilehash: 5120f840aab87ca243eed66c5bb6256e80aefeea
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "147064175"
---
{% ifversion fpt or ghec %}Por padrão, você receberá notificações:{% endif %}{% ifversion ghes or ghae %}Por padrão, se o proprietário da empresa tiver configurado um email para notificações na sua instância, você receberá {% data variables.product.prodname_dependabot_alerts %}:{% endif %}

- por email, um email é enviado quando o {% data variables.product.prodname_dependabot %} está habilitado em um repositório, quando é feito commit de um novo arquivo de manifesto no repositório e quando uma nova vulnerabilidade com uma severidade crítica ou alta é encontrada (opção **Enviar um email sempre que uma vulnerabilidade for encontrada**).
- na interface do usuário, um aviso será mostrado nas exibições de arquivo e de código do repositório se houver dependências não seguras (opção **Alertas da interface do usuário**).
- na linha de comando, são exibidos avisos como retornos de chamada quando você efetua push para repositórios com dependências não seguras (opção **Linha de Comando**).
- na caixa de entrada, como notificações da Web. Uma notificação da Web é enviada quando o {% data variables.product.prodname_dependabot %} está habilitado em um repositório, quando é feito commit de um novo arquivo de manifesto e quando uma nova vulnerabilidade com uma severidade crítica ou alta é encontrada (opção **Web**).{% ifversion not ghae %}
- em {% data variables.product.prodname_mobile %}, como notificações da web. Para obter mais informações, confira "[Como habilitar notificações por push com o GitHub Mobile](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#enabling-push-notifications-with-github-mobile)".{% endif %}

{% note %}

**Observação:** as notificações por email e da Web{% ifversion not ghae %}/do {% data variables.product.prodname_mobile %}{% endif %} são:

- _por repositório_, quando o {% data variables.product.prodname_dependabot %} está habilitado no repositório ou quando é feito commit de um novo arquivo de manifesto no repositório.

- _por organização_, quando uma nova vulnerabilidade é descoberta.

{% endnote %}

Você pode personalizar a maneira como recebe notificações sobre os {% data variables.product.prodname_dependabot_alerts %}. Por exemplo, você pode receber um email de resumo semanal de alertas para até dez dos seus repositórios usando as opções **Enviar um email de resumo das vulnerabilidades** e **Resumo de email de segurança semanal**.
