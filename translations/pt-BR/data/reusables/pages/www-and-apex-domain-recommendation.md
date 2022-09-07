---
ms.openlocfilehash: 9007a7541d3ee57656a975af1bf430673c796d09
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145096163"
---
Se você estiver usando um domínio apex como seu domínio personalizado, recomendaremos também configurar um subdomínio `www`. Se você configurar os registros corretos para cada tipo de domínio através do seu provedor DNS, {% data variables.product.prodname_pages %} irá automaticamente criar redirecionamentos entre os domínios. Por exemplo, se você configurar `www.example.com` como o domínio personalizado para seu site e tiver os registros DNS do {% data variables.product.prodname_pages %} configurados para o apex e os domínios `www`, `example.com` fará o redirecionamento para `www.example.com`. Observe que os redirecionamentos automáticos só se aplicam ao subdomínio `www`. Os redirecionamentos automáticos não se aplicam a nenhum outro subdomínio, como `blog`.
