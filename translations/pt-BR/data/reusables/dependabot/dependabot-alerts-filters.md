---
ms.openlocfilehash: dfbf31bbfeea726bcd0c1852d881aefc8f149c0e
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/09/2022
ms.locfileid: "148159531"
---
Você pode classificar e filtrar {% data variables.product.prodname_dependabot_alerts %} digitando filtros como pares `key:value` na barra de pesquisa. 

| Opção | Descrição | Exemplo | 
|:---|:---|:---|
| `ecosystem` | Exibe alertas para o ecossistema selecionado | Usar `ecosystem:npm` para mostrar {% data variables.product.prodname_dependabot_alerts %} para npm |{% ifversion fpt or ghec or ghes > 3.5 or ghae > 3.5 %}
| `has` | Exibe alertas atendendo aos critérios de filtro selecionados | Usar `has:patch` para mostrar alertas relacionados a avisos que têm um patch{% ifversion dependabot-alerts-vulnerable-calls %}</br>Usar `has:vulnerable-calls` para mostrar alertas relacionados a chamadas a funções vulneráveis{% endif %} |{% endif %}
| `is` | Exibe alertas com base no estado | Usar `is:open` para mostrar alertas abertos |
| `manifest` | Exibe alertas para o manifesto selecionado | Usar `manifest:webwolf/pom.xml` para mostrar alertas no arquivo pom.xml do aplicativo webwolf |
| `package` | Exibe alertas para o pacote selecionado | Usar `package:django` para mostrar alertas para o django |
| `resolution` | Exibe alertas do status de resolução selecionado | Usar `resolution:no-bandwidth` para mostrar alertas estacionados anteriormente devido à falta de recursos ou de tempo para corrigi-los |
| `repo` |  Exibe alertas com base no repositório ao qual eles se relacionam</br>Observe que esse filtro só está disponível em visões gerais de segurança. Para saber mais, confira “[Sobre visões gerais de segurança](/code-security/security-overview/about-the-security-overview)”. | Usar `repo:octocat-repo` para mostrar alertas no repositório chamado `octocat-repo` |{%- ifversion dependabot-alerts-development-label %}
| `scope` | Exibe alertas com base no escopo da dependência à qual eles se relacionam | Usar `scope:development` para mostrar alertas para dependências que são usadas somente durante o desenvolvimento |{% endif %}
| `severity` | Exibe alertas com base no nível de gravidade | Usar `severity:high` para mostrar alertas com nível de gravidade Alto |{%- ifversion dependabot-most-important-sort-option %}
| `sort` | Exibe alertas de acordo com a ordem de classificação selecionada | A opção de classificação padrão para alertas é `sort:most-important`, que classifica os alertas por importância</br>Usar `sort:newest` para mostrar os alertas mais recentes relatados por {% data variables.product.prodname_dependabot %} |{% endif %}
