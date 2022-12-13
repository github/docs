---
ms.openlocfilehash: 3cc118cb9748ada5efb83aad6c0fe3b86c76d9bb
ms.sourcegitcommit: 738c16f6fc6d56d939a80c832497c8bfa28d10c7
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/05/2022
ms.locfileid: "148134899"
---
{% ifversion fpt or ghec %}Par défaut, vous recevez des notifications :{% endif %}{% ifversion ghes or ghae %}Par défaut, si le propriétaire de votre entreprise a configuré l-e-mail pour les notifications sur votre instance, vous recevez des {% data variables.product.prodname_dependabot_alerts %}:{% endif %}

- Dans votre boîte de réception : sous forme de notifications web. Une notification web est envoyée lorsque {% data variables.product.prodname_dependabot %} est activé pour un dépôt, lorsqu’un nouveau fichier manifeste est commité dans le dépôt et lorsqu’une nouvelle vulnérabilité avec un niveau de gravité critique ou élevé est détectée (option **Sur {% data variables.product.prodname_dotcom %}** ).
- Par e-mail : un e-mail est envoyé lorsque {% data variables.product.prodname_dependabot %} est activé pour un dépôt, lorsqu’un nouveau fichier manifeste est commité dans le dépôt et lorsqu’une nouvelle vulnérabilité avec un niveau de gravité critique ou élevé est détectée (option **E-mail**).{% ifversion ghes < 3.8 or ghae < 3.8 %}
- Dans l’interface utilisateur : un avertissement s’affiche dans les vues de fichiers et de code de votre dépôt s’il existe des dépendances non sécurisées (option **Alerte d’interface utilisateur**).{% endif %}
- Sur la ligne de commande : des avertissements s’affichent sous forme de rappels lorsque vous poussez (push) vers des dépôts avec des dépendances non sécurisées (option **CLI**).
{% ifversion not ghae %}
- sur {% data variables.product.prodname_mobile %}, en tant que notifications web. Pour plus d’informations, consultez « [Activation des notifications Push avec {% data variables.product.prodname_mobile %}](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#enabling-push-notifications-with-github-mobile) ».{% endif %}

{% note %}

**Remarque :** les notifications {% ifversion not ghae %}/{% data variables.product.prodname_mobile %}{% endif %} par e-mail et web sont les suivantes :

- _par référentiel_ lorsque {% data variables.product.prodname_dependabot %} est activé sur le référentiel ou lorsqu’un nouveau fichier manifeste est validé dans le référentiel.

- _par organisation_ lorsqu’une nouvelle vulnérabilité est découverte.

{% endnote %}

{% ifversion update-notification-settings-22 %} Vous pouvez personnaliser la façon dont vous êtes averti concernant les {% data variables.product.prodname_dependabot_alerts %}. Par exemple, vous pouvez recevoir un e-mail de synthèse quotidien ou hebdomadaire récapitulant les alertes concernant jusqu’à 10 de vos dépôts à l’aide de l’option **Condensé des e-mails hebdomadaires**.
{% else %} Vous pouvez personnaliser la façon dont vous êtes averti concernant les {% data variables.product.prodname_dependabot_alerts %}. Par exemple, vous pouvez recevoir un e-mail de synthèse hebdomadaire récapitulant les alertes concernant jusqu’à 10 de vos dépôts à l’aide des options **Envoyer par e-mail un résumé des vulnérabilités** et **Synthèse hebdomadaire des e-mails de sécurité**.{% endif %}
