---
ms.openlocfilehash: 082f3b30b23ed6c8b2a7a4261cace89e32f0a8c9
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145127854"
---
Por padrão, todas as dependências que estão explicitamente definidas em um manifesto ou arquivo de bloqueio são mantidas atualizadas. Use `allow` e `ignore` para personalizar as dependências que serão mantidas com as atualizações de versão. {% data variables.product.prodname_dependabot %} verifica todas as dependências permitidas e, em seguida, filtra quaisquer dependências ou versões ignoradas. Portanto, uma dependência correspondente a um `allow` e um `ignore` será ignorada.
