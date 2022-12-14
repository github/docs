---
ms.openlocfilehash: ae3a6c6743e497213f23230a4f78d98a1ab9a110
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 12/09/2022
ms.locfileid: "148192928"
---
Un utilisateur est considéré comme actif s’il a effectué une des activités suivantes sur {% ifversion fpt or ghec or ghes %}{% data variables.location.product_location %}{% elsif ghae %}{% data variables.product.product_name %}{% endif %}.

- Connexion à {% data variables.location.product_location %}
- Création d’un dépôt
- Envoi (push) vers un dépôt
- En cours d’ajout à un dépôt
- Modification de la visibilité d’un dépôt
- Création d’un problème ou d’une demande de tirage
- Commentaires sur un problème ou une demande de tirage
- Fermeture ou réouverture d’un problème ou d’une demande de tirage
- Application d’une étiquette à un problème ou à une demande de tirage, ou suppression d’une étiquette
- Affectation ou désaffectation d’un problème ou d’une demande de tirage
- Demande de révision d’une demande de tirage ou suppression d’une demande de révision
- Création ou modification d’un commentaire dans une révision de demande de tirage
- Abandon d’un commentaire dans une demande de tirage 
- Synchronisation d’une demande de tirage
- Commentaire sur un commit
- Publication d’une version
- Envoi (push) à un wiki
- Surveillance d’un dépôt
- Ajout d’une étoile à un dépôt
- Suppression d’un référentiel
- Accès aux ressources en utilisant un {% data variables.product.pat_generic %} ou une clé SSH
- Rejoindre une organisation

{% ifversion ghes %} Un utilisateur sera également considéré comme actif si son compte a été mis à jour par LDAP.
{% endif %}
