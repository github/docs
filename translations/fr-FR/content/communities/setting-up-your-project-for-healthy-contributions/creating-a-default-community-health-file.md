---
title: Création d’un fichier d’intégrité de la communauté par défaut
intro: 'Vous pouvez créer des fichiers d’intégrité par défaut pour la communauté, comme CONTRIBUTING et CODE_OF_CONDUCT. Les fichiers par défaut seront utilisés pour tout dépôt appartenant à votre organisation qui ne contient pas son propre fichier d’intégrité.'
redirect_from:
  - /articles/creating-a-default-community-health-file-for-your-organization
  - /github/building-a-strong-community/creating-a-default-community-health-file-for-your-organization
  - /github/building-a-strong-community/creating-a-default-community-health-file
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Community health file
ms.openlocfilehash: 85a672d0cc0991a5325df8a107737da47c7b81d3
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193393'
---
## À propos des fichiers d’intégrité de la communauté par défaut

Vous pouvez ajouter des fichiers d’intégrité de la communauté par défaut à un dépôt public appelé `.github`, à la racine du dépôt ou dans les dossiers `docs` ou `.github`.

{% data variables.product.product_name %} utilise et affiche les fichiers par défaut pour tout dépôt appartenant au compte qui n’a pas son propre fichier de ce type à l’un des emplacements suivants :
- racine du dépôt
- dossier `.github`
- dossier `docs`

Par exemple, toute personne qui crée un problème ou une demande de tirage dans un dépôt qui n’a pas son propre fichier CONTRIBUTING voit un lien vers le fichier CONTRIBUTING par défaut. Si un dépôt a des fichiers dans son propre dossier `.github/ISSUE_TEMPLATE`{% ifversion fpt or ghes or ghec %}, notamment des modèles de problème ou un fichier *config.yml*,{% endif %} aucun des contenus du dossier `.github/ISSUE_TEMPLATE` par défaut n’est utilisé.

Les fichiers par défaut ne sont pas inclus dans les clones, les packages ou les téléchargements de dépôts individuels, car ils sont stockés uniquement dans le dépôt `.github`.

## Types de fichiers pris en charge

Vous pouvez créer des valeurs par défaut dans votre organisation{% ifversion fpt or ghes or ghec %} ou votre compte personnel{% endif %} pour les fichiers d’intégrité de la communauté suivants :

Fichier d’intégrité de la communauté | Description --- | ---{% ifversion fpt or ghec %} *CODE_OF_CONDUCT.md* | Un fichier CODE_OF_CONDUCT définit les standards d’engagement dans une communauté. Pour plus d’informations, consultez « [Ajout d’un code de conduite à votre projet](/articles/adding-a-code-of-conduct-to-your-project/) ».{% endif %} *CONTRIBUTING.md* | Un fichier CONTRIBUTING indique la façon dont les gens doivent contribuer à votre projet. Pour plus d’informations, consultez « [Définition de recommandations pour les contributeurs de dépôt](/articles/setting-guidelines-for-repository-contributors/) ».{% ifversion discussion-category-forms %} Formulaires de catégorie de discussion | Les formulaires de catégorie de discussion personnalisent les modèles qui sont disponibles pour les membres de la communauté lorsque ces derniers ouvrent de nouvelles discussions dans votre dépôt. Pour plus d’informations, consultez « [Création de formulaires de catégorie de discussion](/discussions/managing-discussions-for-your-community/creating-discussion-category-forms) ».{% endif %}{% ifversion fpt or ghec %} *FUNDING.yml* | Un fichier FUNDING affiche un bouton de sponsor dans votre dépôt pour augmenter la visibilité des options de financement de votre projet open source. Pour plus d’informations, consultez « [Affichage d’un bouton de sponsor dans votre dépôt](/articles/displaying-a-sponsor-button-in-your-repository) ».{% endif %} Modèles de problème et de demande de tirage{% ifversion fpt or ghes or ghec %} et *config.yml*{% endif %} | Les modèles de problème et de demande de tirage personnalisent et standardisent les informations que vous souhaitez que les contributeurs incluent quand ils ouvrent des problèmes et des demandes de tirage dans votre dépôt. Pour plus d’informations, consultez « [À propos des modèles de problème et de demande de tirage](/articles/about-issue-and-pull-request-templates/) ».{% ifversion fpt or ghes or ghec %} *SECURITY.md* | Un fichier SECURITY fournit des instructions sur la façon de signaler une faille de sécurité dans votre projet. Pour plus d’informations, consultez « [Ajout d’une stratégie de sécurité à votre dépôt](/code-security/getting-started/adding-a-security-policy-to-your-repository) ».{% endif %} *SUPPORT.md* | Un fichier SUPPORT permet aux utilisateurs de connaître les moyens d’obtenir de l’aide pour votre projet. Pour plus d’informations, consultez « [Ajout de ressources de support à votre projet](/articles/adding-support-resources-to-your-project/) ».

Vous ne pouvez pas créer de fichier de licence par défaut. Vous devez ajouter les fichiers de licence à des dépôts individuels pour qu’ils soient inclus quand un projet est cloné, packagé ou téléchargé.

## Création d’un dépôt pour les fichiers par défaut

{% data reusables.repositories.create_new %}
2. Utilisez le menu déroulant **Propriétaire**, puis sélectionnez l’organisation{% ifversion fpt or ghes or ghec %} ou le compte personnel{% endif %} pour lequel vous souhaitez créer les fichiers par défaut.
  ![Menu déroulant Propriétaire](/assets/images/help/repository/create-repository-owner.png)
3. Tapez **.github** en tant que nom de votre dépôt ainsi qu’une description facultative.
  ![Champ de création de dépôt](/assets/images/help/repository/default-file-repository-name.png)
4. Vérifiez que l’état du dépôt est **Public** (un dépôt de fichiers par défaut ne peut pas être privé).
  ![Cases d’option permettant de sélectionner l’état privé ou public](/assets/images/help/repository/create-repository-public-private.png) {% data reusables.repositories.initialize-with-readme %} {% data reusables.repositories.create-repo %}
7. Dans le dépôt, créez l’un des fichiers d’intégrité de la communauté pris en charge. Les modèles de problème{% ifversion fpt or ghes or ghec %} et leur fichier config{% endif %} doivent se trouver dans un dossier appelé `.github/ISSUE_TEMPLATE`. Tous les autres fichiers pris en charge peuvent se trouver à la racine du dépôt, dans le dossier `.github` ou dans le dossier `docs`. Pour plus d’informations, consultez « [Création de fichiers](/articles/creating-new-files/) ».
