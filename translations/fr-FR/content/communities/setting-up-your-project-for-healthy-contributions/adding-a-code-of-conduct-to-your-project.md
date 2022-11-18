---
title: Ajouter un code de conduite à votre projet
intro: 'Adoptez un code de conduite pour définir les standards de la communauté, créer un projet accueillant et inclusif, et décrire les procédures concernant la gestion des abus.'
redirect_from:
  - /articles/adding-a-code-of-conduct-to-your-project
  - /github/building-a-strong-community/adding-a-code-of-conduct-to-your-project
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Add a code of conduct
ms.openlocfilehash: dcf1e589ae4f803017752f9e919aad304c570fbc
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145086534'
---
Un *code de conduite* définit les standards d’engagement dans une communauté. Il établit un environnement inclusif qui respecte toutes les contributions. Il décrit également les procédures à suivre pour la résolution des problèmes entre les membres de la communauté de votre projet. Pour plus d’informations sur les raisons pour lesquelles un code de conduite définit des standards et des attentes concernant la manière de s’impliquer dans une communauté, consultez [Open Source Guides](https://opensource.guide/code-of-conduct/).

Avant d’adopter un code de conduite pour votre projet :

* Recherchez différents codes de conduite conçus pour des projets open source. Choisissez-en un qui reflète les standards de votre communauté.
* Demandez-vous si vous êtes prêt à le faire respecter, et si vous en êtes capable.

Vous pouvez ajouter un code de conduite à votre projet en utilisant un modèle ou en créant manuellement un code de conduite personnalisé. Votre code de conduite est disponible dans tous les cas. Toutefois, le « Code de conduite » n’est marqué comme étant complet dans le profil de la communauté de votre dépôt que si vous utilisez un modèle. Si vous utilisez un code de conduite écrit par une autre personne ou organisation, veillez à suivre les recommandations d’attribution définies à la source. Pour plus d’informations sur les profils de communauté, consultez « [À propos des profils de communauté des dépôts publics](//communities/setting-up-your-project-for-healthy-contributions/about-community-profiles-for-public-repositories) ».

Vous pouvez créer un code de conduite par défaut pour votre organisation ou votre compte personnel. Pour plus d’informations, consultez « [Création d’un fichier d’intégrité de la communauté par défaut](/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file) ».

## Ajout d’un code de conduite à l’aide d’un modèle

{% data variables.product.product_name %} fournit des modèles de code de conduite courants pour vous aider à ajouter rapidement un code de conduite à votre projet.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.files.add-file %}
3. Dans le champ du nom de fichier, tapez *CODE_OF_CONDUCT.md*.
4. Cliquez sur **Choisir un modèle de code de conduite**.
  ![Bouton permettant de choisir un modèle de code de conduite](/assets/images/help/repository/code-of-conduct-tool.png)
5. Dans la partie gauche de la page, sélectionnez un code de conduite pour en afficher l’aperçu et l’ajouter à votre projet.
  ![Sélection d’un modèle de code de conduite](/assets/images/help/repository/code-of-conduct-tool-picker.png)
6. Dans la partie droite de la page, renseignez les champs nécessaires pour fournir au code de conduite sélectionné les informations appropriées.
7. Cliquez sur **Passer en revue et envoyer**.
  ![Passer en revue et envoyer le code de conduite au projet](/assets/images/help/repository/code-of-conduct-tool-review.png)
8. Passez en revue le contenu du code de conduite situé dans la zone de texte.
{% data reusables.files.write_commit_message %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_new_file %}

## Ajout d’un code de conduite manuellement

Si le code de conduite à utiliser n’est pas disponible dans les modèles fournis, vous pouvez en ajouter un manuellement.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.files.add-file %}
3. Dans le champ du nom de fichier, tapez le nom et l’extension du fichier.
  ![Nom de fichier du nouveau code de conduite](/assets/images/help/repository/new-code-of-conduct-file-name.png)
    - Pour rendre votre code de conduite visible dans le répertoire racine du dépôt, tapez *CODE_OF_CONDUCT* dans le champ du nom de fichier.
    - Pour rendre votre code de conduite visible dans le répertoire `docs` du dépôt, tapez *docs/CODE_OF_CONDUCT*.
    - Pour rendre votre code de conduite visible dans le répertoire `.github` du dépôt, tapez *.github/CODE_OF_CONDUCT*.
4. Dans le nouveau fichier, ajoutez votre code de conduite personnalisé.
{% data reusables.files.write_commit_message %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_new_file %}
