---
ms.openlocfilehash: 7bb1603715c255f08ac0bfbe7ff2cdbfe99a3134
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: "148108498"
---
Wenn du über die Webbenutzeroberfläche versuchst, ein unterstütztes Geheimnis an ein Repository oder eine Organisation zu übertragen, in dem bzw. der die Überprüfung auf Geheimnisse als Pushschutz aktiviert ist, blockiert {% data variables.product.prodname_dotcom %} den Commit. 

Oben auf der Seite wird ein Banner mit Informationen über den Speicherort des Geheimnisses gezeigt, wobei das Geheimnis auch in der Datei unterstrichen wird, damit du es einfach finden kannst.

{% ifversion push-protection-custom-link-orgs %}

  ![Screenshot des Commits auf der Webbenutzeroberfläche, der aufgrund des Pushschutzes durch die Überprüfung auf Geheimnisse blockiert wurde](/assets/images/help/repository/secret-scanning-push-protection-web-ui-commit-blocked-banner-with-link.png)

{% else %}

  ![Screenshot des Commits auf der Webbenutzeroberfläche, der aufgrund des Pushschutzes durch die Überprüfung auf Geheimnisse blockiert wurde](/assets/images/help/repository/secret-scanning-push-protection-web-ui-commit-blocked-banner.png)
  
{% endif %}
