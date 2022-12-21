---
ms.openlocfilehash: b7f16729209b711d9ea95d059f5868ae867fa040
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: "147419880"
---
1. Sélectionnez le menu déroulant **Compte ou organisation** , puis cliquez sur le nom du compte auquel votre ticket de support est associé.
![Capture d’écran du menu déroulant « Compte ou organisation ».](/assets/images/help/support/account-field.png)
1. Sélectionnez le menu déroulant **De**, puis cliquez sur l’adresse e-mail que vous souhaitez que {% data variables.contact.github_support %} utilise.
![Capture d’écran du menu déroulant « De ».](/assets/images/help/support/from-field.png)
{%- ifversion ghec or ghes %}
1. Sélectionnez le menu déroulant **Produit**, puis cliquez sur {% ifversion ghes %}**GitHub Enterprise Server (auto-hébergé)** {% else %}**GitHub Enterprise Cloud**{% endif %}.
{% ifversion ghec %}![ Capture d’écran du menu déroulant « Produit ».](/assets/images/help/support/product-field-ghec.png){% else %}![ Capture d’écran du menu déroulant « Produit ».](/assets/images/help/support/product-field.png){% endif %} {%- endif %} {%- ifversion ghes %}
1. Si vous y êtes invité, sélectionnez le menu déroulant **Installation du serveur**, puis cliquez sur l’installation correspondant à votre ticket de support. Si l’installation n’est pas répertoriée, cliquez sur **Autre**.
![Capture d’écran du menu déroulant « Installation du serveur »](/assets/images/help/support/installation-field.png) {%- endif %} {%- ifversion ghes %}
1. Sélectionnez le menu déroulant **Série de versions**, puis cliquez sur la version {% data variables.product.product_location_enterprise %} en cours d’exécution.
![Capture d’écran du menu « Série de versions »](/assets/images/help/support/release-field.png) {%- endif %} {%- ifversion ghes or ghec %}
1. Sélectionnez le menu déroulant **Priorité**, puis cliquez sur le niveau de priorité qui convient. Pour plus d’informations, consultez « [À propos de la priorité des tickets](/support/learning-about-github-support/about-ticket-priority) ».
  ![Capture d’écran du menu déroulant « Priorité ».](/assets/images/help/support/priority-field.png)
{%- endif %} {%- ifversion ghes %}
    - Choisissez **{% data variables.product.support_ticket_priority_urgent %}** pour signaler {% ifversion fpt or ghec %}une défaillance système critique{% else %}des défaillances système irrécupérables, des pannes impactant les opérations système critiques, des incidents de sécurité et des licences expirées{% endif %}.
    - Choisissez **{% data variables.product.support_ticket_priority_high %}** pour signaler des problèmes impactant les activités de l’entreprise, notamment {% ifversion fpt or ghec %}, suppression des données sensibles (validations, problèmes, demandes de tirage (pull), pièces jointes chargées) de vos propres comptes et restaurations d’organisation{% else %}problèmes de performances système{% endif %}, ou pour signaler des bogues critiques.
    - Choisissez **{% data variables.product.support_ticket_priority_normal %}** pour {% ifversion fpt or ghec %}demander la récupération de comptes ou le signalement de spam, signaler des problèmes de connexion utilisateur{% else %}formuler des requêtes techniques telles que des modifications de configuration ou des intégrations tierce{% endif %} et pour signaler des bogues non critiques.
    - Choisissez **{% data variables.product.support_ticket_priority_low %}** pour poser des questions générales et envoyer des requêtes de nouvelles fonctionnalités, d’achats, de formation ou de vérifications d’intégrité.
{%- endif %} {%- ifversion ghes or ghec %}
1. En outre, si votre compte inclut {% data variables.contact.premium_support %} et que votre ticket présente une priorité {% ifversion ghes %}urgente ou élevée{% elsif ghec %}high{% endif %}, vous pouvez demander à être rappelé en anglais. Sélectionnez **Demander à être rappelé par le support GitHub**, sélectionnez le menu déroulant du code pays pour choisir votre pays, puis entrez votre numéro de téléphone.
![Capture d’écran de la case à cocher « Demande de rappel », du menu déroulant « Code pays » et de la zone de texte « Numéro de téléphone ».](/assets/images/help/support/request-callback.png)
{%- endif %}
1. Sous « Objet », entrez un titre décrivant le problème que vous rencontrez.
![Capture d’écran de la zone de texte « Objet ».](/assets/images/help/support/subject-field.png)
1. Sous « Comment pouvons-nous aider », fournissez toutes les informations supplémentaires qui aideront l’équipe de support technique à résoudre le problème. Vous pouvez utiliser Markdown pour mettre en forme votre message.
  ![Capture d’écran de la zone de texte « Comment pouvons-nous vous aider ».](/assets/images/help/support/how-can-we-help-field.png)
   Les informations utiles peuvent inclure :
    - Étapes pour reproduire le problème
    - Toute circonstance particulière entourant la découverte du problème (par exemple, la première occurrence ou l’occurrence après un événement spécifique, la fréquence d’occurrence, l’impact commercial du problème, et l’urgence suggérée)
    - Formulation exacte des messages d’erreur {% indented_data_reference reusables.repositories.anyone-can-view-anonymized-url spaces=3 %}

{%- ifversion ghes %}
1. Vous pouvez joindre des fichiers de diagnostic et d’autres fichiers à l’aide des opérations de glisser-déposer, de chargement ou de collage à partir du Presse-papiers.
{%- endif %}
1. Cliquez sur **Envoyer la demande**.
![Capture d’écran du bouton « Envoyer la demande ».](/assets/images/help/support/send-request-button.png)
