---
title: Configuration des paramètres GitHub Copilot dans votre organisation
intro: 'Vous pouvez configurer {% data variables.product.prodname_copilot %} dans votre organisation, notamment l’octroi et la révocation de l’accès aux personnes et aux équipes, et déterminer si vous voulez bloquer ou non les suggestions qui correspondent au code public.'
product: '{% data reusables.gated-features.copilot %}'
miniTocMaxHeadingLevel: 3
permissions: 'Organization owners and members with admin permissions can configure {% data variables.product.prodname_copilot %} in their organization.'
versions:
  ghec: '*'
topics:
  - Copilot
shortTitle: Organization settings
ms.openlocfilehash: 345d0a48aa3f48e453fd8455027f683ee78a7640
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193361'
---
## À propos des paramètres {% data variables.product.prodname_copilot %} dans votre organisation

{% data reusables.copilot.about-copilot %}

Pour configurer l’utilisation de {% data variables.product.prodname_copilot %} dans votre organisation, celle-ci doit appartenir à un compte {% data variables.product.prodname_ghe_cloud %}, et un administrateur d’entreprise doit d’abord activer {% data variables.product.prodname_copilot_business_short %} pour votre organisation. Les administrateurs de l’organisation pourront alors gérer l’attribution de sièges au sein de l’organisation. 

Selon les paramètres de stratégie configurés au niveau de l’entreprise, un administrateur d’organisation peut également être en mesure de déterminer s’il faut autoriser ou bloquer les suggestions {% data variables.product.prodname_copilot %} qui correspondent au code public. Pour plus d’informations, consultez « [Application de stratégies pour {% data variables.product.prodname_copilot %} dans votre entreprise](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-copilot-in-your-enterprise) ».

## Configuration de l’accès à {% data variables.product.prodname_copilot %} dans votre organisation

Une fois qu’un administrateur {% data variables.product.prodname_ghe_cloud %} active un abonnement {% data variables.product.prodname_copilot_business_short %} dans votre organisation, vous pouvez attribuer des sièges {% data variables.product.prodname_copilot %} aux membres et aux équipes de votre organisation.

### Activation de l’accès à {% data variables.product.prodname_copilot %} pour tous les utilisateurs actuels et futurs de votre organisation

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. Dans la section « Code, planification et automatisation » de la barre latérale, cliquez sur **{% octicon "copilot" aria-label="The copilot icon" %} {% data variables.product.prodname_copilot_short %}** , puis sur **Accès**.
1. Sous « Autorisations utilisateur », pour activer {% data variables.product.prodname_copilot %} pour tous les utilisateurs actuels et futurs de votre organisation, sélectionnez **Autoriser pour tous les membres**.

   ![Capture d’écran des autorisations utilisateur {% data variables.product.prodname_copilot %}](/assets/images/help/copilot/allow-all-members.png)

1. Dans la boîte de dialogue « Confirmer l’attribution de sièges », pour confirmer que vous souhaitez activer {% data variables.product.prodname_copilot %} pour tous les utilisateurs actuels et futurs de votre organisation, cliquez sur **Confirmer**.

   ![Capture d’écran de la boîte de dialogue Confirmer l’attribution de sièges](/assets/images/help/copilot/confirm-seat-assignment.png)

1. Pour enregistrer vos modifications, cliquez sur **Enregistrer**.

   ![Capture d’écran du bouton d’enregistrement des autorisations utilisateur {% data variables.product.prodname_copilot %}](/assets/images/help/copilot/user-permissions-save.png)

### Activation de l’accès à {% data variables.product.prodname_copilot %} pour des utilisateurs spécifiques de votre organisation

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. Dans la section « Code, planification et automatisation » de la barre latérale, cliquez sur **{% octicon "copilot" aria-label="The copilot icon" %} {% data variables.product.prodname_copilot_short %}** , puis sur **Accès**.
1. Sous « Autorisations utilisateur », pour activer {% data variables.product.prodname_copilot %} pour les équipes ou utilisateurs sélectionnés de votre organisation, sélectionnez **Équipes/utilisateurs sélectionnés**, puis cliquez sur **Enregistrer**.

   ![Capture d’écran des autorisations des utilisateurs/équipes sélectionnés {% data variables.product.prodname_copilot %}](/assets/images/help/copilot/selected-users-teams.png)

1. Si vous mettez à jour l’accès utilisateur à partir du paramètre **Autoriser pour tous les membres**, dans la boîte de dialogue « Confirmer l’attribution de sièges », sélectionnez la façon dont vous souhaitez commencer à attribuer l’accès.
    - Pour désattribuer tous les membres, puis sélectionner ceux qui doivent avoir l’accès, sélectionnez **Démarrer à partir de zéro**.
    - Pour garder tous les membres qui ont actuellement l’accès, puis sélectionner ceux qui ne doivent pas avoir l’accès, sélectionnez **Garder tous les utilisateurs**.

      ![Capture d’écran de la boîte de dialogue Confirmer l’attribution de sièges](/assets/images/help/copilot/confirm-seat-assignment-selected.png)

1. Si vous avez sélectionné **Démarrer à partir de zéro**, cliquez sur **Ajouter des personnes** ou **Ajouter des équipes** pour ajouter des utilisateurs individuels ou des équipes entières.

   ![Capture d’écran du bouton Ajouter des personnes ou Ajouter des équipes](/assets/images/help/copilot/add-people-add-teams.png)

1. Si vous avez sélectionné **Ajouter des personnes**, dans la boîte de dialogue « Activer l’accès à GitHub Copilot pour les membres sélectionnés de l’ORGANISATION », vous pouvez rechercher des membres individuels ou ajouter des membres en bloc en chargeant un fichier CSV.
 
   ![Capture d’écran de la boîte de dialogue Activer l’accès pour les membres sélectionnés](/assets/images/help/copilot/enable-access-for-selected-members.png)

    - Pour rechercher des membres, tapez le nom d’utilisateur, le nom complet ou l’adresse e-mail du membre dans la barre de recherche.
    - Pour ajouter des membres en bloc, cliquez sur **Charger un fichier CSV**, puis chargez un fichier CSV comprenant le nom d’utilisateur ou l’adresse e-mail de chaque membre que vous souhaitez ajouter, séparé par une virgule.

        {% warning %}

      **Avertissement :** Lorsque vous chargez un fichier CSV, {% data variables.product.prodname_copilot %} recherche des correspondances parmi tous les utilisateurs sur {% data variables.product.prodname_dotcom_the_website %}. Si le fichier CSV contient des utilisateurs qui ne sont pas membres de votre organisation, ceux-ci sont invités à rejoindre votre organisation lorsque vous cliquez sur **Ajouter XX membres**.

      {% endwarning %}

    - Passez en revue la liste des utilisateurs générés à partir de votre fichier CSV. Pour confirmer que vous souhaitez accorder l’accès aux utilisateurs listés, cliquez sur **Ajouter XX membre(s) à la liste d’accès**, ou pour refuser la liste, cliquez sur **Annuler**.

     ![Capture d’écran des résultats de la liste csv](/assets/images/help/copilot/csv-results.png)

1. Si vous avez sélectionné **Ajouter des équipes**, dans la boîte de dialogue « Activer l’accès à GitHub Copilot pour les équipes sélectionnées de l’ORGANISATION », commencez à taper le nom de l’équipe dans la barre de recherche, sélectionnez l’équipe que vous souhaitez ajouter, puis cliquez sur **Sélectionner une équipe ci-dessus**.

   ![Capture d’écran de la boîte de dialogue Activer l’accès pour les équipes sélectionnées](/assets/images/help/copilot/add-teams.png)

1. Si vous avez sélectionné **Garder tous les utilisateurs**, passez en revue la liste complète des membres de votre organisation et sélectionnez les personnes dont vous souhaitez révoquer l’accès à {% data variables.product.prodname_copilot %}.

   ![Capture d’écran de la liste Garder tous les utilisateurs](/assets/images/help/copilot/access-removal-list.png)

1. Cliquez sur la liste déroulante **XX membres sélectionnés**, puis sur **Supprimer**.

   ![Capture d’écran du bouton Supprimer l’accès](/assets/images/help/copilot/remove-access.png)

### Désactivation de l’accès à {% data variables.product.prodname_copilot %} pour l’ensemble de votre organisation

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. Dans la section « Code, planification et automatisation » de la barre latérale, cliquez sur **{% octicon "copilot" aria-label="The copilot icon" %} {% data variables.product.prodname_copilot_short %}** , puis sur **Accès**.
1. Sous « Autorisations utilisateur », pour désactiver {% data variables.product.prodname_copilot %} pour tous les utilisateurs de votre organisation, sélectionnez **Désactivé**.

   ![Capture d’écran des autorisations utilisateur désactivées {% data variables.product.prodname_copilot %}](/assets/images/help/copilot/disable-access.png)

1. Pour enregistrer vos modifications, cliquez sur **Enregistrer**.
   
   ![Capture d’écran du bouton d’enregistrement des autorisations utilisateur {% data variables.product.prodname_copilot %}](/assets/images/help/copilot/save-disabled.png)

### Désactivation de l’accès à {% data variables.product.prodname_copilot %} pour des utilisateurs spécifiques de votre organisation

La suppression d’un utilisateur de la ou des organisations qui lui avaient attribué un siège {% data variables.product.prodname_copilot %} désattribue automatiquement le siège. Vous pouvez également désattribuer le siège {% data variables.product.prodname_copilot %} d’un membre, tout en préservant son appartenance. Ces changements prennent effet à partir du début du prochain cycle de facturation.

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. Dans la section « Code, planification et automatisation » de la barre latérale, cliquez sur **{% octicon "copilot" aria-label="The copilot icon" %} {% data variables.product.prodname_copilot_short %}** , puis sur **Accès**.
1. Sous « Autorisations utilisateur », sélectionnez **Équipes/utilisateurs sélectionnés**, puis cliquez sur **Enregistrer**. 

   ![Capture d’écran des autorisations des utilisateurs/équipes sélectionnés {% data variables.product.prodname_copilot %}](/assets/images/help/copilot/selected-users-teams.png)

    - Dans la boîte de dialogue contextuelle « Confirmer l’attribution de sièges », sélectionnez **Garder tous les utilisateurs**.

      ![Capture d’écran de la boîte de dialogue Confirmer l’attribution de sièges](/assets/images/help/copilot/confirm-seat-assignment-selected.png)
  
1. Sous « Gérer l’accès », dans la barre de recherche, tapez le nom d’utilisateur, le nom complet ou l’adresse e-mail du membre.

   ![Capture d’écran de la barre de recherche](/assets/images/help/copilot/manage-access-search.png)

1. Pour supprimer le membre de la liste des utilisateurs qui ont accès à {% data variables.product.prodname_copilot %}, cliquez sur **Supprimer**.

   ![Capture d’écran du bouton Supprimer l’accès](/assets/images/help/copilot/remove-access-button.png)

## Configuration des stratégies de correspondance des suggestions pour {% data variables.product.prodname_copilot %} dans votre organisation

{% data variables.product.prodname_copilot %} inclut un filtre qui détecte les suggestions de code correspondant au code public sur {% data variables.product.prodname_dotcom %}. Lorsque le filtre est activé, {% data variables.product.prodname_copilot %} vérifie les suggestions de code avec son code environnant d’environ 150 caractères par rapport au code public sur {% data variables.product.prodname_dotcom %}. S’il existe une correspondance ou une correspondance proche, la suggestion ne vous est pas montrée.

Si votre administrateur d’entreprise a sélectionné **Aucune stratégie (laisser chaque organisation décider)** pour la correspondance des suggestions au niveau de l’entreprise, vous pouvez définir une stratégie de correspondance de suggestions pour votre organisation. Si un membre de l’organisation se voit attribuer un siège par plusieurs organisations avec différentes stratégies de correspondance de suggestions dans la même entreprise, {% data variables.product.prodname_copilot %} utilise la stratégie la plus restrictive.


{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. Dans la section « Code, planification et automatisation » de la barre latérale, cliquez sur **{% octicon "copilot" aria-label="The copilot icon" %} {% data variables.product.prodname_copilot_short %}** , puis sur **Stratégies**.
1. Dans la liste déroulante « Suggestions correspondant au code public », sélectionnez **Autoriser** ou **Bloquer** pour autoriser ou bloquer les suggestions correspondant au code public.

   ![Capture d’écran de la liste déroulante des suggestions correspondant au code public](/assets/images/help/copilot/duplication-detection-org-policy.png)

## Pour aller plus loin

- « [Déclaration de confidentialité de {% data variables.product.prodname_copilot_for_business %}](/free-pro-team@latest/site-policy/privacy-policies/github-copilot-for-business-privacy-statement) »
