---
ms.openlocfilehash: 4cc5759031be6a031424abf13b7aa4c1db05c84f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "147578680"
---
{% note %}

**Observações**: 

* Se a configuração do Git der suporte a pushes para vários branches e não apenas para o branch atual, o push poderá ser bloqueado devido a referências adicionais e não intencionais serem enviadas por push. Para obter mais informações, confira as [opções `push.default`](https://git-scm.com/docs/git-config#Documentation/git-config.txt-pushdefault) na documentação do Git.
* Se {% data variables.product.prodname_secret_scanning %} atingir o tempo limite após o push, {% data variables.product.prodname_dotcom %} ainda executará uma verificação dos seus commits para segredos após o push.

{% endnote %}
