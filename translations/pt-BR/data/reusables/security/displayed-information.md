---
ms.openlocfilehash: 14b8f0f8803056b5d3431e8de2eee868d9167546
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: "148107763"
---
Ao habilitar uma ou mais funcionalidades de segurança e análise para repositórios existentes, você verá todos os resultados exibidos em {% data variables.product.prodname_dotcom %} dentro de minutos:

- Todos os repositórios existentes terão a configuração selecionada.
- Os novos repositórios seguirão a configuração selecionada se você tiver habilitado a caixa de seleção para novos repositórios.{% ifversion fpt or ghec %}
- Usamos as permissões para digitalizar arquivos de manifesto para aplicar os serviços relevantes.
- Se habilitado, você verá informações de dependência no grafo de dependência.
- Se essa opção for habilitada, o {% data variables.product.prodname_dotcom %} vai gerar {% data variables.product.prodname_dependabot_alerts %} para dependências vulneráveis ou malware.{% endif %}{% ifversion fpt or ghec or ghes %}
- Se habilitado, as atualizações de segurança {% data variables.product.prodname_dependabot %} criarão solicitações de pull para atualizar dependências vulneráveis quando {% data variables.product.prodname_dependabot_alerts %} são disparados.{% endif %}
