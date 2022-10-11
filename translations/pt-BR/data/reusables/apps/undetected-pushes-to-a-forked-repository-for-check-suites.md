---
ms.openlocfilehash: b6dfc33713afc09930569825ced59238fcede851
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: "147881857"
---
{% note %}

**Observação:** a API de Verificações procura apenas pushes no repositório em que o pacote de verificação ou a execução de verificação foi criado. Os pushes para um branch em um repositório com fork não são detectados e retornam uma matriz `pull_requests` vazia e um valor `null` para `head_branch`.

{% endnote %}
