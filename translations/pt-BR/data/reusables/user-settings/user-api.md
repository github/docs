---
ms.openlocfilehash: 740d5655197f25385b0ac206fdeea33a585f3ad4
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "147060223"
---
Muitos dos recursos dessa API fornecem um atalho para obter informações sobre o usuário autenticado atualmente. Se uma URL de solicitação não incluir um parâmetro `{username}`, a resposta será para o usuário conectado (e você precisará transmitir [informações de autenticação](/rest/overview/resources-in-the-rest-api#authentication) com a sua solicitação)..{% ifversion fpt or ghes or ghec %} Informações particulares adicionais, como se um usuário tem a autenticação de dois fatores habilitada, são incluídas quando autenticadas por meio de autenticação básica ou do OAuth com o escopo `user`.{% endif %}
