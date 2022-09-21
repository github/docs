---
ms.openlocfilehash: 49888e7031e048c77d405b1e65d9e06510e3c789
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "147063407"
---
Para usar o SCIM com sua organização, você deve usar um {% data variables.product.prodname_oauth_app %} de terceiros. O {% data variables.product.prodname_oauth_app %} deve ser autorizado por usuário específico do {% data variables.product.prodname_dotcom %} e, posteriormente, atuar em nome dele. Se o usuário que autorizou pela última vez esse {% data variables.product.prodname_oauth_app %} sair ou for removido da organização, o SCIM deixará de funcionar. Para evitar esse problema, recomendamos criar uma conta de usuário dedicada para configurar o SCIM. Essa conta de usuário deve ser uma proprietária da organização e consumirá uma licença.
