---
ms.openlocfilehash: a58f8cdbd481991312d9bce77e1cd41a35ffad75
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145126401"
---
Você precisa se autenticar periodicamente no IdP do SAML para se autenticar e obter acesso aos {% ifversion fpt or ghec %}recursos da organização no {% data variables.product.prodname_dotcom_the_website %}{% elsif ghae %}{% data variables.product.product_location %}{% endif %}. A duração desse período de login é especificado pelo seu IdP e geralmente é de 24 horas. Esse requisito de login periódico limita a duração do acesso e exige que você identifique-se novamente para continuar. {% ifversion fpt or ghec %}Você pode ver e gerenciar suas sessões ativas do SAML nas configurações de segurança. Para obter mais informações, confira "[Como ver e gerenciar suas sessões ativas do SAML](/articles/viewing-and-managing-your-active-saml-sessions)".{% endif %}
