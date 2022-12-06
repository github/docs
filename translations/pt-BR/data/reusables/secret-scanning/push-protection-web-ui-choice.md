---
ms.openlocfilehash: 7bb1603715c255f08ac0bfbe7ff2cdbfe99a3134
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: "148107875"
---
Quando você usa a interface do usuário da Web para tentar fazer commit de um segredo com suporte em um repositório ou uma organização com a verificação de segredo como uma proteção por push habilitada, o {% data variables.product.prodname_dotcom %} bloqueará o commit. 

Você verá uma faixa na parte superior da página com informações sobre a localização do segredo e o segredo também será sublinhado no arquivo para que você possa encontrá-lo facilmente.

{% ifversion push-protection-custom-link-orgs %}

  ![Captura de tela mostrando o commit na interface do usuário da Web bloqueada devido à proteção por push de verificação de segredo](/assets/images/help/repository/secret-scanning-push-protection-web-ui-commit-blocked-banner-with-link.png)

{% else %}

  ![Captura de tela mostrando o commit na interface do usuário da Web bloqueada devido à proteção por push de verificação de segredo](/assets/images/help/repository/secret-scanning-push-protection-web-ui-commit-blocked-banner.png)
  
{% endif %}
