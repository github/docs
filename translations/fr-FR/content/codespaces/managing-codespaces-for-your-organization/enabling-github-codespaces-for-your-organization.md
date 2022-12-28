---
title: Activation de GitHub Codespaces pour votre organisation
shortTitle: 'Enable {% data variables.product.prodname_codespaces %}'
intro: 'Vous pouvez contrôler qui, dans votre organisation, peut utiliser {% data variables.product.prodname_github_codespaces %}, aux frais de l’organisation.'
product: '{% data reusables.gated-features.codespaces %}'
permissions: 'To alter an organization''s billing settings, you must be an organization owner.'
redirect_from:
  - /codespaces/managing-codespaces-for-your-organization/managing-user-permissions-for-your-organization
  - /codespaces/managing-codespaces-for-your-organization/enabling-codespaces-for-your-organization
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Billing
  - Administrator
ms.openlocfilehash: 97d8b3fce0499ea945c9a2dcfe469759a097d77e
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106484'
---
## À propos de l’activation de {% data variables.product.prodname_github_codespaces %} pour votre organisation

Les propriétaires de l’organisation peuvent déterminer quels utilisateurs au sein de votre organisation peuvent créer et utiliser des codespaces, aux frais de l’organisation. Pour plus d’informations sur les tarifs, consultez « [À propos de la facturation pour GitHub Codespaces](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces) ».

Seules les personnes qui peuvent cloner un dépôt peuvent créer un codespace pour ce dépôt. Pour permettre aux utilisateurs de créer des codespaces pour les dépôts appartenant à votre organisation, vous devez effectuer les opérations suivantes :

- Vérifiez que les utilisateurs ont au moins accès en écriture aux dépôts dans lesquels ils veulent utiliser un codespace. Pour plus d’informations, consultez « [Gestion des équipes et des personnes ayant accès à votre dépôt](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository) ».
- Vérifiez que votre organisation n’a pas de liste d’adresses IP autorisées activée. Pour plus d’informations, consultez « [Gestion des adresses IP autorisées pour votre organisation](/{% ifversion fpt %}enterprise-cloud@latest/{% endif %}organizations/keeping-your-organization-secure/managing-allowed-ip-addresses-for-your-organization){% ifversion fpt %} » dans la documentation de {% data variables.product.prodname_ghe_cloud %}.{% else %}.{% endif %}

Pour permettre aux utilisateurs de créer des codespaces pour lesquels votre organisation sera facturée, vous devez :

- [Définir une limite de dépense](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces)
- [Choisir qui peut créer des codespaces facturés à votre organisation](#choose-who-can-create-codespaces-that-are-billed-to-your-organization)

{% ifversion fpt %} {% note %}

**Remarque :** Si vous êtes formateur vérifié ou enseignant, vous devez activer {% data variables.product.prodname_codespaces %} à partir d’une {% data variables.product.prodname_classroom %} pour utiliser votre avantage {% data variables.product.prodname_codespaces %} Education. Pour plus d’informations, consultez « [Utilisation de GitHub Codespaces avec GitHub Classroom](/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide/using-github-codespaces-with-github-classroom#about-the-codespaces-education-benefit-for-verified-teachers) ».

{% endnote %} {% endif %}

Par défaut, un codespace peut uniquement accéder au dépôt à partir duquel il a été créé. Si vous voulez que les codespaces de votre organisation puissent accéder à d’autres dépôts de l’organisation auxquels le créateur du codespace peut accéder, consultez « [Gestion de l’accès aux dépôts pour les codespaces de votre organisation](/codespaces/managing-codespaces-for-your-organization/managing-repository-access-for-your-organizations-codespaces) ».

## Choisir qui peut créer des codespaces facturés à votre organisation

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.click-codespaces %}
1. Sous « Facturation », sélectionnez l’une des options suivantes :

   * **Désactivé** : Votre organisation n’est pas facturée pour l’utilisation des codespaces. Les {% data variables.product.prodname_codespaces %} créés pour les dépôts de votre organisation seront facturés aux utilisateurs particuliers qui les créent.
   * **Membres sélectionnés** : Les {% data variables.product.prodname_codespaces %} créés pour les dépôts de votre organisation par les membres sélectionnés seront facturées à l’organisation.
   * **Tous les membres** : Les {% data variables.product.prodname_codespaces %} créés pour les dépôts de votre organisation par les membres de votre organisation seront facturées à l’organisation.
   * **Tous les membres et collaborateurs extérieurs** : Les {% data variables.product.prodname_codespaces %} créés pour les dépôts de votre organisation par les membres de l’organisation et ses collaborateurs extérieurs seront facturés à l’organisation.

   ![Cases d’option pour « Facturation »](/assets/images/help/codespaces/codespaces-org-billing-settings.png)

   {% note %}

   **Remarque :** Quand vous sélectionnez **Tous les membres et collaborateurs extérieurs**, tous les collaborateurs extérieurs qui ont été ajoutés à des dépôts spécifiques peuvent créer et utiliser des {% data variables.product.prodname_codespaces %} pour ces dépôts. C’est votre organisation qui sera facturée pour cette utilisation. Pour plus d’informations sur la gestion des collaborateurs extérieurs, consultez « [À propos des collaborateurs extérieurs](/organizations/managing-access-to-your-organizations-repositories/adding-outside-collaborators-to-repositories-in-your-organization#about-outside-collaborators) ».

   {% endnote %}

1. Cliquez sur **Enregistrer**.
1. Si vous avez choisi **Membres sélectionnés**, une zone d’entrée s’affiche pour vous permettre d’entrer les noms des utilisateurs que vous voulez sélectionner.

   ![Zone d’entrée pour la sélection d’utilisateurs](/assets/images/help/codespaces/codespaces-org-billing-add-users.png)

## Désactivation de {% data variables.product.prodname_codespaces %} pour votre organisation

Vous pouvez empêcher la création et l’utilisation de codespaces facturables à votre organisation.

{% data reusables.codespaces.codespaces-disabling-org-billing %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.click-codespaces %}
1. Sous « Facturation », sélectionnez **Désactivé**.

## Définition d’une limite de dépense

{% data reusables.codespaces.codespaces-spending-limit-requirement %} 

Pour plus d’informations sur la gestion et la modification de la limite de dépense de votre compte, consultez « [Gestion de votre limite de dépense pour {% data variables.product.prodname_codespaces %}](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces) ».
