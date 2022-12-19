---
ms.openlocfilehash: efa96c86f8e6393265a4052e0ce6d650a21805b4
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: "148107340"
---
{% ifversion fpt or ghec %} {% note %}

**Remarque :** {% data variables.product.company_short %} a amélioré la sécurité en supprimant d’anciens types de clés non sécurisés le 15 mars 2022.

Depuis cette date, les clés DSA (`ssh-dss`) ne sont plus prises en charge. Vous ne pouvez pas ajouter de nouvelles clés DSA à votre compte personnel sur {% data variables.location.product_location %}.

Les clés RSA (`ssh-rsa`) avec une date `valid_after` antérieure au 2 novembre 2021 peuvent continuer à utiliser n’importe quel algorithme de signature. Les clés RSA générées après cette date doivent utiliser un algorithme de signature SHA-2. Il se peut que certains clients plus anciens nécessitent un mise à niveau pour utiliser des signatures SHA-2.

{% endnote %}

{% elsif ghes = 3.6 or ghes = 3.7 or ghes = 3.8 %}

{% note %}

**Remarque** : Par défaut, avec {% data variables.product.product_name %} 3.6 et ultérieur, à compter de la date limite du 1er août 2022 à minuit UTC, les connexions SSH qui répondent **aux deux** conditions suivantes échoueront.

<br/>

{% data reusables.ssh.rsa-sha-1-connection-failure-criteria %}

{% data variables.product.product_name %} 3.6 et ultérieur ne prennent pas non plus en charge les connexions SSH qui utilisent les chiffrements DSA, HMAC-SHA-1 ou CBC. Les clés SSH RSA chargées avant la date limite peuvent continuer d’être utilisées pour l’authentification avec la fonction de hachage SHA-1 tant que les clés restent valides. Pour plus d’informations sur la version de {% data variables.product.product_name %} que vous utilisez, consultez « [À propos des versions de {% data variables.product.prodname_docs %}](/get-started/learning-about-github/about-versions-of-github-docs#github-enterprise-server) ».

Votre administrateur de site peut ajuster la date limite des connexions utilisant RSA-SHA-1 et peut bloquer toutes les connexions utilisant RSA-SHA-1. Pour plus d’informations, contactez votre administrateur de site ou consultez « [Configuration des connexions SSH à votre instance](/admin/configuration/configuring-your-enterprise/configuring-ssh-connections-to-your-instance) ».

{% endnote %}

{% endif %}
