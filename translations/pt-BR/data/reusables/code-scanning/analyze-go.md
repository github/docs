---
ms.openlocfilehash: e9f2162fa5c65d4a59b2bd350aea2b131205f9a6
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145094142"
---
{% data variables.product.prodname_codeql %} também executa uma criação para projetos Go para configurar o projeto. No entanto, em contraste com as outras linguagens compiladas, todos os arquivos Go no repositório são extraídos, não apenas aqueles que são compilados. Você pode usar comandos de compilação personalizados para pular a extração de arquivos Go que não são tocados pela compilação.
