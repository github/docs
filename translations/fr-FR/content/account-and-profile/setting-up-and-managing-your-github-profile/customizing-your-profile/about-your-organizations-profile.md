---
title: À propos du profil de votre organisation
intro: La page de profil de votre organisation affiche des informations de base sur votre organisation.
redirect_from:
  - /articles/about-your-organization-s-profile
  - /articles/about-your-organizations-profile
  - /github/setting-up-and-managing-your-github-profile/about-your-organizations-profile
  - /github/setting-up-and-managing-your-github-profile/customizing-your-profile/about-your-organizations-profile
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Profiles
shortTitle: Organization's profile
ms.openlocfilehash: a42d5393de00e57f0b642c89a349da86b4ad55f1
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108388'
---
Vous pouvez éventuellement choisir d’ajouter une description, un emplacement, un site web et une adresse e-mail pour votre organisation, puis épingler des dépôts importants.{% ifversion fpt or ghec or ghes > 3.3 %} Vous pouvez personnaliser le profil public de votre organisation en ajoutant un fichier README.md. Pour plus d’informations, consultez « [Personnalisation du profil de votre organisation](/organizations/collaborating-with-groups-in-organizations/customizing-your-organizations-profile) ».{% endif %}

{% ifversion fpt %} Les organisations qui utilisent {% data variables.product.prodname_ghe_cloud %} peuvent confirmer l’identité de leur organisation pour afficher un badge « Vérifié » dans leur page de profil en faisant vérifier les domaines de l’organisation auprès de {% data variables.product.product_name %}. Pour plus d’informations, consultez « [Vérification ou approbation d’un domaine pour votre organisation](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization) » dans la documentation de {% data variables.product.prodname_ghe_cloud %}.
{% elsif ghec or ghes %} Pour confirmer l’identité de votre organisation afin d’afficher un badge « Vérifié » dans la page de son profil, vous devez faire vérifier les domaines de votre organisation auprès de {% data variables.product.prodname_dotcom %}. Pour plus d’informations, consultez « [Vérification ou approbation d’un domaine pour votre organisation](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization) ».
{% endif %}

{% ifversion fpt or ghes or ghec %} ![Exemple de page de profil d’organisation](/assets/images/help/organizations/org_profile_with_overview.png) {% else %} ![Exemple de page de profil d’organisation](/assets/images/help/profile/org_profile.png) {% endif %}

## Pour aller plus loin

- « [À propos des organisations](/organizations/collaborating-with-groups-in-organizations/about-organizations) »
