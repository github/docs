---
title: Activation de Codespaces pour votre organisation
shortTitle: Enable Codespaces
intro: Vous pouvez contrôler qui peut utiliser {% data variables.product.prodname_codespaces %} dans votre organisation.
product: '{% data reusables.gated-features.codespaces %}'
permissions: To manage user permissions for {% data variables.product.prodname_codespaces %} for an organization, you must be an organization owner.
redirect_from:
- /codespaces/managing-codespaces-for-your-organization/managing-user-permissions-for-your-organization
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
- Codespaces
- Permissions
- Administrator
ms.openlocfilehash: bd4518ef6db3887e504b13459abb5c6a682c8659
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 07/13/2022
ms.locfileid: "145106558"
---
## <a name="about-enabling--data-variablesproductprodname_codespaces--for-your-organization"></a>À propos de l’activation de {% data variables.product.prodname_codespaces %} pour votre organisation

Les propriétaires de l’organisation peuvent déterminer quels utilisateurs au sein de votre organisation peuvent créer et utiliser des codespaces.

Pour utiliser des codespaces dans votre organisation, vous devez effectuer les opérations suivantes :

- Vérifiez que les utilisateurs ont [au moins accès en écriture](/organizations/managing-access-to-your-organizations-repositories/repository-permission-levels-for-an-organization) aux dépôts dans lesquels ils veulent utiliser un codespace. 
- [Activez {% data variables.product.prodname_codespaces %} pour les utilisateurs de votre organisation](#enable-codespaces-for-users-in-your-organization). Vous pouvez choisir d’autoriser {% data variables.product.prodname_codespaces %} pour les utilisateurs sélectionnés ou uniquement pour des utilisateurs spécifiques.
- [Définir une limite de dépense](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces)
- Vérifiez que votre organisation n’a pas de liste d’adresses IP autorisées activée. Pour plus d’informations, consultez « [Gestion des adresses IP autorisées pour votre organisation](/{% ifversion fpt %}enterprise-cloud@latest/{% endif %}organizations/keeping-your-organization-secure/managing-allowed-ip-addresses-for-your-organization#using-github-actions-with-an-ip-allow-list){% ifversion fpt %} » dans la documentation de {% data variables.product.prodname_ghe_cloud %}.{% else %}.{% endif %}

Par défaut, un codespace peut uniquement accéder au dépôt à partir duquel il a été créé. Si vous voulez que les codespaces de votre organisation puissent accéder à d’autres dépôts de l’organisation auxquels le créateur du codespace peut accéder, consultez « [Gestion de l’accès et de la sécurité pour {% data variables.product.prodname_codespaces %}](/codespaces/managing-codespaces-for-your-organization/managing-access-and-security-for-your-organizations-codespaces) ».

## <a name="enable--data-variablesproductprodname_codespaces--for-users-in-your-organization"></a>Activer {% data variables.product.prodname_codespaces %} pour les utilisateurs de votre organisation

{% ifversion fpt %} {% note %}

**Remarque :** Si vous êtes formateur vérifié ou enseignant, vous devez activer {% data variables.product.prodname_codespaces %} à partir d’une {% data variables.product.prodname_classroom %} pour utiliser votre avantage {% data variables.product.prodname_codespaces %} Education. Pour plus d’informations, consultez « [Utilisation de GitHub Codespaces avec GitHub Classroom](/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide/using-github-codespaces-with-github-classroom#about-the-codespaces-education-benefit-for-verified-teachers) ».

{% endnote %} {% endif %} {% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.click-codespaces %}
1. Sous « Autorisations utilisateur », sélectionnez l’une des options suivantes :

   * **Utilisateurs sélectionnés** pour autoriser des membres de l’organisation spécifiques à utiliser {% data variables.product.prodname_codespaces %}.
   * **Autoriser tous les membres** pour autoriser tous les membres de votre organisation à utiliser {% data variables.product.prodname_codespaces %}.
   * **Autoriser tous les membres et collaborateurs extérieurs** pour autoriser tous les membres de votre organisation ainsi que les collaborateurs extérieurs à utiliser {% data variables.product.prodname_codespaces %}.

   ![Cases d’option des « Autorisations utilisateur »](/assets/images/help/codespaces/org-user-permission-settings-outside-collaborators.png)

   {% note %}

   **Remarque :** Quand vous sélectionnez **Autoriser tous les membres et collaborateurs extérieurs**, tous les collaborateurs extérieurs qui ont été ajoutés à des dépôts spécifiques peuvent créer et utiliser {% data variables.product.prodname_codespaces %}. Votre organisation est facturée pour toutes les utilisations effectuées par les collaborateurs extérieurs. Pour plus d’informations sur la gestion des collaborateurs extérieurs, consultez « [À propos des collaborateurs extérieurs](/organizations/managing-access-to-your-organizations-repositories/adding-outside-collaborators-to-repositories-in-your-organization#about-outside-collaborators) ».

   {% endnote %}

1. Cliquez sur **Enregistrer**.

## <a name="disabling--data-variablesproductprodname_codespaces--for-your-organization"></a>Désactivation de {% data variables.product.prodname_codespaces %} pour votre organisation

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.click-codespaces %}
1. Sous « Autorisations utilisateur », sélectionnez **Désactivé**.

## <a name="setting-a-spending-limit"></a>Définition d’une limite de dépense

{% data reusables.codespaces.codespaces-spending-limit-requirement %} 

Pour plus d’informations sur la gestion et la modification de la limite de dépense de votre compte, consultez « [Gestion de votre limite de dépense pour {% data variables.product.prodname_codespaces %}](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces) ».
