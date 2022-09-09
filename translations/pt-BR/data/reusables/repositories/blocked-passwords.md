---
ms.openlocfilehash: 1f59c95d79ab5fa0f778e05379112ec4b82afd42
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145095383"
---
{% ifversion fpt or ghec %} Quando você digitar uma senha para se conectar, criar uma conta ou alterar sua senha, o {% data variables.product.product_name %} verificará se a senha inserida é considerada fraca de acordo com conjuntos de dados como o HaveIBeenPwned. A senha pode ser identificada como fraca, mesmo que você nunca tenha usado essa senha antes.

O {% data variables.product.product_name %} inspeciona a senha apenas no momento em que você a digita e nunca armazena a senha que você digitou em um texto simples. Para obter mais informações, confira [HaveIBeenPwned](https://haveibeenpwned.com/).
{% endif %}
