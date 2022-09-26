---
ms.openlocfilehash: c9e2c1bf2b01805ed973effedd219c3552ac2bf4
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "146455666"
---
Ao habilitar uma ou mais funcionalidades de segurança e análise para repositórios existentes, você verá todos os resultados exibidos em {% data variables.product.prodname_dotcom %} dentro de minutos:

- Todos os repositórios existentes terão a configuração selecionada.
- Os novos repositórios seguirão a configuração selecionada se você tiver habilitado a caixa de seleção para novos repositórios.{% ifversion fpt or ghec %}
- Usamos as permissões para digitalizar arquivos de manifesto para aplicar os serviços relevantes.
- Se habilitado, você verá informações de dependência no grafo de dependência.
- Se essa opção for habilitada, o {% data variables.product.prodname_dotcom %} vai gerar {% data variables.product.prodname_dependabot_alerts %} para dependências vulneráveis ou malwere.{% endif %}{% ifversion fpt or ghec or ghes > 3.2 %}
- Se habilitado, as atualizações de segurança {% data variables.product.prodname_dependabot %} criarão solicitações de pull para atualizar dependências vulneráveis quando {% data variables.product.prodname_dependabot_alerts %} são disparados.{% endif %}
