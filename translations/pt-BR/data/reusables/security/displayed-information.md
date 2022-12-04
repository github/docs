---
ms.openlocfilehash: b57bbd1a709b4cae3b93607d1cd03c1a4a31be15
ms.sourcegitcommit: 6bd8fe6d49214743f82fa2dc71847c241f140c87
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/07/2022
ms.locfileid: "148135684"
---
Ao habilitar uma ou mais funcionalidades de segurança e análise para repositórios existentes, você verá todos os resultados exibidos em {% data variables.product.prodname_dotcom %} dentro de minutos:

- Todos os repositórios existentes terão a configuração selecionada.
- Os novos repositórios seguirão a configuração selecionada se você tiver habilitado a caixa de seleção de novos repositórios.{% ifversion GH-advisory-db-supports-malware %}
- Usamos as permissões para digitalizar arquivos de manifesto para aplicar os serviços relevantes.
- Se habilitado, você verá informações de dependência no grafo de dependência.
- Se essa opção for habilitada, o {% data variables.product.prodname_dotcom %} vai gerar {% data variables.product.prodname_dependabot_alerts %} para dependências vulneráveis ou malware.{% endif %}{% ifversion fpt or ghec or ghes %}
- Se habilitado, as atualizações de segurança {% data variables.product.prodname_dependabot %} criarão solicitações de pull para atualizar dependências vulneráveis quando {% data variables.product.prodname_dependabot_alerts %} são disparados.{% endif %}
