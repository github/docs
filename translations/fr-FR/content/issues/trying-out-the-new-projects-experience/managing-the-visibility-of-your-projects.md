---
title: Gestion de la visibilité de vos projets (bêta)
intro: Vous pouvez contrôler qui peut voir vos projets.
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
topics:
- Projects
- Organizations
ms.openlocfilehash: 85b586bbb86e8d6e286e86263eca3f44d174391f
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 07/13/2022
ms.locfileid: "145128654"
---
{% data reusables.projects.projects-beta %}

## <a name="about-project-visibility"></a>À propos de la visibilité des projets

Les projets (bêta) peuvent être publics ou privés. Pour les projets publics, tout le monde sur Internet peut voir le projet. Pour les projets privés, seuls les utilisateurs disposant au moins d’un accès en lecture peuvent voir le projet.

Seule la visibilité du projet est concernée. Pour voir un élément du projet, quelqu’un doit disposer des autorisations requises sur le dépôt auquel l’élément appartient. Si votre projet contient des éléments provenant d’un référentiel privé, les personnes qui ne sont pas des collaborateurs du référentiel ne peuvent pas voir les éléments de celui-ci.

![Projet avec élément masqué](/assets/images/help/projects/hidden-items.png)

Seuls les administrateurs de projet peuvent en contrôler la visibilité.

Dans les projets privés appartenant à une organisation, les avatars des utilisateurs qui effectuent des mises à jour du projet sont affichés dans l'interface utilisateur du projet.

Les administrateurs de projet peuvent également gérer l’accès en écriture et administrateur à leur projet, et contrôler l’accès en lecture des utilisateurs individuels. Pour plus d’informations, consultez « [Gestion de l’accès aux projets](/issues/trying-out-the-new-projects-experience/managing-access-to-projects) ».

## <a name="changing-project-visibility"></a>Modification de la visibilité d’un projet

{% data reusables.projects.project-settings %}
1. Sous **Visibilité**, sélectionnez **Privé** ou **Public**.
