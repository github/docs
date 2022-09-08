---
ms.openlocfilehash: b6dfc33713afc09930569825ced59238fcede851
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145094249"
---
{% note %}

**Observação:** a API de Verificações procura apenas pushes no repositório em que o pacote de verificação ou a execução de verificação foi criado. Os pushes para um branch em um repositório com fork não são detectados e retornam uma matriz `pull_requests` vazia e um valor `null` para `head_branch`.

{% endnote %}
