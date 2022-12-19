---
title: Migration de votre projet vers Projets (bêta)
intro: Vous pouvez migrer vos projets de l’ancienne expérience de projets vers Projets (bêta).
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 2
versions:
  fpt: '*'
  ghec: '*'
topics:
- Projects
- Organizations
ms.openlocfilehash: 9361f3f28d3d365ecbb6053e908644cc8f34f1d0
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 07/13/2022
ms.locfileid: "147079776"
---
{% note %}

**Remarques :**

- Projets (bêta) est actuellement en version publique bêta et susceptible de changer.
- Si le projet que vous migrez contient plus de 1 200 éléments, les problèmes ouverts sont priorisés, suivis des demandes de tirage ouvertes, puis des notes. L’espace restant est utilisé pour les problèmes fermés, les demandes de tirage fusionnées et les demandes de tirage fermées. Les éléments qui ne peuvent pas être migrés en raison de cette limite sont déplacés vers l’archive. Si la limite d’archivage de 10 000 éléments est atteinte, aucun élément supplémentaire n’est migré.
- Notez que les cartes sont converties en brouillons de problème et que le contenu est enregistré dans le corps du brouillon. Si des informations apparaissent manquantes, affichez les champs masqués. Pour plus d’informations, consultez « [Affichage et masquage des champs](/issues/trying-out-the-new-projects-experience/customizing-your-project-views#showing-and-hiding-fields) ».
- L’automatisation n’est pas migrée.
- Le tri, l’archivage et l’activité ne sont pas migrés.
- Après la migration, le nouveau projet migré et l’ancien projet ne restent pas synchronisés.

{% endnote %}

## <a name="about-project-migration"></a>À propos de la migration des projets

Vous pouvez migrer vos tableaux de projet vers l’expérience de tous les nouveaux projets (bêta) et essayer des tables, plusieurs vues, les nouvelles options d’automatisation et des types de champs performants. Pour plus d’informations, consultez « [À propos des projets (bêta)](/issues/trying-out-the-new-projects-experience/about-projects) ».

## <a name="migrating-an-organization-project-board"></a>Migration d’un tableau de projet d’organisation

{% data reusables.projects.enable-migration %} {% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.organization-wide-project %}
1. Sur la gauche, cliquez sur **Projets (classique)** .
  ![Capture d’écran montrant l’option de menu Projets (classique)](/assets/images/help/issues/projects-classic-org.png) {% data reusables.projects.migrate-project-steps %}

## <a name="migrating-a-user-project-board"></a>Migration d’un tableau de projet d’utilisateur

{% data reusables.projects.enable-migration %} {% data reusables.profile.access_profile %}
1. En haut de votre page de profil, dans le volet de navigation principal, cliquez sur {% octicon "project" aria-label="The project board icon" %} **Projets**.
![Onglet Projet](/assets/images/help/projects/user-projects-tab.png)
1. Au-dessus de la liste des projets, cliquez sur **Projets (classique)** .
  ![Capture d’écran montrant l’option de menu Projets (classique)](/assets/images/help/issues/projects-classic-user.png) {% data reusables.projects.migrate-project-steps %}

## <a name="migrating-a-repository-project-board"></a>Migration d’un tableau de projet de dépôt

{% note %}

**Remarque :** Les projets (bêta) ne prennent pas en charge les projets au niveau du dépôt. Lorsque vous migrez un tableau de projet de dépôt, celui-ci migre vers l’organisation ou le compte personnel propriétaire du projet de dépôt, tandis que le projet migré est épinglé au dépôt d’origine.

{% endnote %}

{% data reusables.projects.enable-migration %} {% data reusables.repositories.navigate-to-repo %}
1. Sous le nom de votre référentiel, cliquez sur {% octicon "project" aria-label="The project board icon" %} **Projets**.
![Onglet Projet](/assets/images/help/projects/repo-tabs-projects.png)
1. Cliquez sur **Projets (classique)** .
  ![Capture d’écran montrant l’option de menu Projets (classique)](/assets/images/help/issues/projects-classic-org.png) {% data reusables.projects.migrate-project-steps %}
