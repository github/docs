---
ms.openlocfilehash: 3b05d1b75c37f24e9ae4ce03618910c572f259d1
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: "145127850"
---
Por padrão, o {% data variables.product.prodname_dependabot %} gera todas as solicitações de pull com o rótulo `dependencies`. Se mais de um gerenciador de pacotes for definido, o {% data variables.product.prodname_dependabot %} incluirá um rótulo adicional em cada solicitação de pull. Isso indica a linguagem ou o ecossistema em que a solicitação de pull será atualizada, por exemplo, `java` para atualizações do Gradle e `submodules` para atualizações do Git Submodule. {% data variables.product.prodname_dependabot %} cria essas etiquetas padrão automaticamente, conforme necessário no seu repositório.
