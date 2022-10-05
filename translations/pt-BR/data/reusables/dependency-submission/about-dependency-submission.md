---
ms.openlocfilehash: 23a47438a4b4091ec5034671fa226eff68a08ef6
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "147079426"
---
A API de envio de dependências permite enviar dependências para um projeto. Isso permite que você adicione dependências, como aquelas resolvidas quando o software é compilado ou criado, ao recurso de gráfico de dependências do {% data variables.product.prodname_dotcom %}, fornecendo uma visão mais completa de todas as dependências do seu projeto.

O gráfico mostra todas as dependências que você envia usando a API, além de quaisquer dependências identificadas por meio de arquivos de manifesto ou de bloqueio no repositório (por exemplo, um arquivo `package-lock.json` em um projeto JavaScript). Para ver mais informações sobre como visualizar o gráfico de dependências, confira "[Como explorar as dependências de um repositório](/code-security/supply-chain-security/understanding-your-software-supply-chain/exploring-the-dependencies-of-a-repository#viewing-the-dependency-graph)". 

As dependências enviadas receberão {% data variables.product.prodname_dependabot_alerts %} e {% data variables.product.prodname_dependabot_security_updates %} para quaisquer vulnerabilidades conhecidas. Você só obterá {% data variables.product.prodname_dependabot_alerts %} para dependências que são de um dos [ecossistemas com suporte](https://github.com/github/advisory-database#supported-ecosystems) do {% data variables.product.prodname_advisory_database %}. As dependências enviadas não serão exibidas na revisão de dependência ou nas informações de dependência da sua organização.
