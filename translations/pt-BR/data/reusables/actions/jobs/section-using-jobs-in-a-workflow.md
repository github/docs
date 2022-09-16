---
ms.openlocfilehash: 2bdab95a93e5eff4bc68d8da73fd9d7d9a93580a
ms.sourcegitcommit: 96bbb6b8f3c9172209d80cb1502017ace3019807
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: "147879700"
---
Uma execução de fluxo de trabalho é composta por um ou mais `jobs`, que são executados em paralelo por padrão. Para executar trabalhos sequencialmente, você pode definir dependências em outros trabalhos usando a palavra-chave `jobs.<job_id>.needs`.

Cada trabalho é executado em um ambiente do executor especificado por `runs-on`.

Você pode executar quantos trabalhos desejar, desde que esteja dentro dos limites de uso do fluxo de trabalho. Para obter mais informações, confira {% ifversion fpt or ghec or ghes %}"[Limites de uso e cobrança](/actions/reference/usage-limits-billing-and-administration)" para executores hospedados no {% data variables.product.prodname_dotcom %} e {% endif %}"[Sobre os executores auto-hospedados](/actions/hosting-your-own-runners/about-self-hosted-runners/#usage-limits){% ifversion fpt or ghec or ghes %}" para saber os limites de uso dos executores auto-hospedados.{% elsif ghae %}."{% endif %}

Se precisar encontrar o identificador exclusivo de uma tarefa em execução em um fluxo de trabalho, você poderá usar a API de {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}. Para obter mais informações, confira "[Trabalhos de fluxo de trabalho](/rest/reference/actions#workflow-jobs)".
