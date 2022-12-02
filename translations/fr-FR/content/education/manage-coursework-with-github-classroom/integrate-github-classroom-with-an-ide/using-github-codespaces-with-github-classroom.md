---
title: Utiliser GitHub Codespaces avec GitHub Classroom
shortTitle: Using Codespaces with GitHub Classroom
product: '{% data reusables.gated-features.codespaces-classroom-articles %}'
intro: 'Vous pouvez utiliser {% data variables.product.prodname_github_codespaces %} comme éditeur préféré dans vos affectations pour permettre aux étudiants d’accéder à un environnement Visual Studio Code basé sur un navigateur avec une configuration en un clic.'
versions:
  fpt: '*'
permissions: 'Organization owners who are admins for a classroom can enable {% data variables.product.prodname_github_codespaces %} for their organization and integrate {% data variables.product.prodname_github_codespaces %} as the supported editor for an assignment. {% data reusables.classroom.classroom-admins-link %}'
ms.openlocfilehash: 832ab470d13cc741bc4a71e77840c99da5ff3de6
ms.sourcegitcommit: a35d85531445980b5f04d3fc70180a29dad37f89
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 12/01/2022
ms.locfileid: '148189912'
---
## À propos de {% data variables.product.prodname_github_codespaces %}

{% data variables.product.prodname_github_codespaces %} est un environnement de développement instantané et basé sur le cloud qui fournit dans un conteneur les langages, les outils et les utilitaires courants dont vous avez besoin pour développer. De plus, {% data variables.product.prodname_github_codespaces %} est configurable, ce qui vous permet de créer un environnement de développement personnalisé et identique pour tous les utilisateurs de votre projet. Pour plus d’informations, consultez « [Vue d’ensemble de {% data variables.product.prodname_github_codespaces %}](/codespaces/overview) ».

Quand {% data variables.product.prodname_github_codespaces %} est activé dans une organisation ou une entreprise, les utilisateurs peuvent créer un codespace (espace de code) à partir de n’importe quelle branche ou de n’importe quel commit dans un dépôt de l’organisation ou de l’entreprise, et commencer à développer avec les ressources de calcul cloud. Vous pouvez vous connecter à un codespace à partir du navigateur, ou localement dans Visual Studio Code. 

{% data reusables.codespaces.links-to-get-started %}

Configurer {% data variables.product.prodname_github_codespaces %} comme éditeur par défaut pour un devoir dans les devoirs GitHub Classroom est une pratique recommandée pour les étudiants et les enseignants. {% data variables.product.prodname_github_codespaces %} est une bonne option pour les étudiants qui utilisent des appareils prêtés ou sans accès à une configuration d’IDE locale. En effet, les codespaces étant tous basés sur le cloud, ils ne nécessitent aucune configuration locale. Les étudiants peuvent lancer un codespace pour un dépôt de devoirs dans Visual Studio Code directement dans leur navigateur et commencer ainsi à développer immédiatement sans avoir besoin d’une configuration supplémentaire.  

Pour les devoirs avec des environnements d’installation complexes, les enseignants peuvent personnaliser la configuration des conteneurs de développement pour les codespaces d’un dépôt. De cette manière, quand un étudiant crée un codespace, celui-ci s’ouvre toujours automatiquement avec l’environnement de développement qui a été configuré par l’enseignant. Pour plus d’informations sur les conteneurs de développement, consultez « [Présentation des conteneurs de développement](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers) ».

{% note %}

**Remarque** : Les espaces de code individuels sont automatiquement supprimés s’ils sont arrêtés et laissés inutilisés pendant une période prolongée. Pour plus d’informations, consultez « [Configuration de la suppression automatique de vos espaces de code](/codespaces/customizing-your-codespace/configuring-automatic-deletion-of-your-codespaces) ».

{% endnote %}

{% data reusables.education.student-codespaces-benefit %}

{% note %}

**Remarque :** {% data reusables.education.note-on-student-codespaces-usage %} 

{% endnote %}

## À propos de l’avantage {% data variables.product.prodname_codespaces %} Education pour les enseignants vérifiés

L’avantage {% data variables.product.prodname_codespaces %} Education offre aux enseignants vérifiés une allocation mensuelle gratuite d’heures {% data variables.product.prodname_github_codespaces %} à utiliser dans {% data variables.product.prodname_classroom %}. On estime que l’allocation gratuite est suffisante pour une classe de 50 étudiants avec 5 devoirs par mois, sur un ordinateur à deux cœurs avec un (1) codespace stocké par étudiant.

{% data reusables.classroom.free-limited-codespaces-for-verified-teachers-beta-note %}

Pour devenir enseignant vérifié, vous devez être approuvé pour bénéficier d’un avantage enseignant ou formateur. Pour plus d’informations, consultez « [Demander à rejoindre {% data variables.product.prodname_global_campus %} en tant qu’enseignant](/education/explore-the-benefits-of-teaching-and-learning-with-github-education/github-global-campus-for-teachers/apply-to-github-global-campus-as-a-teacher) ». 

Une fois que vous avez reçu la confirmation que vous êtes enseignant vérifié, consultez le [{% data variables.product.prodname_global_campus %} pour les enseignants](https://education.github.com/globalcampus/teacher) afin de passer l’organisation à GitHub Team. Pour plus d’informations, consultez [Produits de GitHub](/get-started/learning-about-github/githubs-products#github-team). 

Si vous pouvez bénéficier de l’avantage {% data variables.product.prodname_codespaces %} Education, lorsque vous activez {% data variables.product.prodname_github_codespaces %} dans {% data variables.product.prodname_classroom %} pour votre organisation, GitHub ajoute automatiquement une stratégie Codespace qui restreint les types de machines à 2 machines principales pour tous les codespaces dans l’organisation. Cela vous aide à tirer le meilleur parti de l’utilisation gratuite de {% data variables.product.prodname_github_codespaces %}. Toutefois, vous pouvez modifier ou supprimer ces stratégies dans les paramètres de votre organisation. Pour plus d’informations, consultez « [Restriction de l’accès à des types de machine](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types) ».

Lorsque l’avantage {% data variables.product.prodname_codespaces %} Education n’est plus en version bêta, si votre organisation dépasse son allocation gratuite pour l’utilisation de {% data variables.product.prodname_github_codespaces %}, l’utilisation supplémentaire lui est facturée. Pour plus d’informations, consultez « [À propos de la facturation de {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces) ».

## Activation de {% data variables.product.prodname_codespaces %} pour votre organisation

{% data variables.product.prodname_github_codespaces %} peut être utilisé avec {% data variables.product.prodname_classroom %} dans les organisations qui utilisent {% data variables.product.prodname_team %}. Si vous pouvez bénéficier de l’avantage {% data variables.product.prodname_codespaces %} Education, vous devez activer {% data variables.product.prodname_github_codespaces %} via {% data variables.product.prodname_classroom %}, au lieu de l’activer directement dans les paramètres de votre organisation. Sinon, votre organisation sera facturée directement pour toute utilisation de {% data variables.product.prodname_github_codespaces %}.

### Activation de Codespaces pour une organisation lors de la création d’une classe
{% data reusables.classroom.sign-into-github-classroom %}
1. Cliquez sur **Nouvelle classe**.
   
  ![Bouton « Nouvelle classe »](/assets/images/help/classroom/click-new-classroom-button.png)

1. Dans la liste des organisations, cliquez sur celle que vous voulez utiliser pour votre classe. Les organisations qui peuvent bénéficier de l’avantage {% data variables.product.prodname_github_codespaces %} ont une note mentionnant leur éligibilité. Vous pouvez éventuellement créer une autre organisation. Pour plus d’informations, consultez « [Création d’une organisation à partir de zéro](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch) ».

  ![Choisir une organisation pour une classe éligible aux codespaces](/assets/images/help/classroom/org-view-codespaces-eligibility.png)

1. Dans la page « Nommer votre classe », sous « {% data variables.product.prodname_codespaces %} dans votre classe », cliquez sur **Activer**. Notez que cette action active {% data variables.product.prodname_github_codespaces %} pour tous les dépôts et utilisateurs dans l’organisation.

  ![Activer Codespaces pour l’organisation dans la page « Configurer les informations générales de la classe »](/assets/images/help/classroom/setup-classroom-enable-codespaces-button.png)

1. Lorsque vous êtes prêt à créer la classe, cliquez sur **Créer la classe**.

### Activation de Codespaces pour une organisation via une classe existante

{% data reusables.classroom.sign-into-github-classroom %} {% data reusables.classroom.click-classroom-in-list %} {% data reusables.classroom.click-settings %}
1. Sous « {% data variables.product.prodname_github_codespaces %} », cliquez sur **Activer**. Cette action active {% data variables.product.prodname_github_codespaces %} pour tous les dépôts et utilisateurs dans l’organisation. Une nouvelle stratégie Codespaces est également ajoutée pour restreindre les types de machine à deux machines principales pour tous les codespaces dans l’organisation. 
  
  ![Activer Codespaces pour l’organisation dans les paramètres de classe existants](/assets/images/help/classroom/classroom-settings-enable-codespaces-button.png)

Vous pouvez également utiliser les mêmes méthodes que celles ci-dessus pour désactiver {% data variables.product.prodname_github_codespaces %} dans votre organisation. Notez que cette action désactive {% data variables.product.prodname_github_codespaces %} pour tous les dépôts et utilisateurs dans l’organisation. 

## Configuration d’un devoir pour utiliser {% data variables.product.prodname_codespaces %}
Pour que les étudiants puissent utiliser {% data variables.product.prodname_github_codespaces %} pour un devoir, vous pouvez choisir {% data variables.product.prodname_github_codespaces %} comme éditeur pris en charge pour le devoir. Lorsque vous créez un devoir, dans la page « Ajouter votre code de démarrage et choisissez votre IDE en ligne facultatif », sous « Ajouter un éditeur pris en charge », sélectionnez **{% data variables.product.prodname_github_codespaces %}** dans le menu déroulant. 

![Sélectionner Codespaces comme éditeur pris en charge pour le devoir](/assets/images/help/classroom/select-supported-editor-including-codespaces.png)

Si vous utilisez un dépôt de modèles pour un devoir, vous pouvez définir un conteneur de développement dans le dépôt afin de personnaliser les outils et les runtimes fournis aux étudiants qui lancent un codespace pour travailler sur le devoir. Si vous ne définissez pas de conteneur de développement, {% data variables.product.prodname_github_codespaces %} utilise une configuration par défaut, qui contient la majeure partie des outils courants dont vos étudiants peuvent avoir besoin pour développer. Pour plus d’informations sur la définition d’un conteneur de développement, consultez « [Ajouter une configuration de conteneur de développement à votre dépôt](/codespaces/setting-up-your-project-for-codespaces/setting-up-your-project-for-codespaces) ».

## Lancement d’un devoir avec {% data variables.product.prodname_github_codespaces %}

Lorsqu’un étudiant ouvre un devoir, le fichier README du dépôt inclut la recommandation de l’enseignant concernant l’IDE à utiliser pour le travail.

![Capture d’écran de la note Codespaces incluse dans le fichier README d’un dépôt de devoirs étudiant](/assets/images/help/classroom/student-codespaces-readme-link.png)

Les étudiants peuvent lancer un codespace nouveau ou existant en cliquant sur le bouton **Ouvrir dans GitHub Codespace** dans le fichier README, ou en cliquant sur le bouton **{% octicon "code" aria-label="The code icon" %} Code** sur la page principale du dépôt de devoirs, puis en sélectionnant l’onglet **Codespaces**. Sous l’onglet **Codespaces**, vous pouvez sélectionner un codespace existant ou en créer un. Pour plus d’informations, consultez « [Création d’un codespace pour un dépôt](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository#creating-a-codespace-for-a-repository) ».

![Lancer un nouveau codespace dans le dépôt de devoirs](/assets/images/help/classroom/student-launch-new-codespace.png)

Les enseignants peuvent voir le codespace de chaque étudiant pour un devoir dans la page de vue d’ensemble des devoirs. Vous pouvez cliquer sur l’icône Codespaces sur le côté droit de chaque ligne d’étudiant pour lancer le codespace. 

![Vue d’ensemble des devoirs de l’enseignant avec les codespaces de l’étudiant](/assets/images/help/classroom/teacher-assignment-view-with-codespaces.png)

Lorsque vous vous connectez à un codespace via un navigateur, l’enregistrement automatique est automatiquement activé. Si vous souhaitez enregistrer les modifications dans le dépôt, vous devez commiter les modifications et les pousser (push) vers une branche distante. Si vous laissez votre codespace s’exécuter sans aucune interaction pendant 30 minutes (durée par défaut), le codespace expire et s’arrête. Vos données sont conservées depuis le dernier enregistrement de vos modifications. Pour plus d’informations sur le cycle de vie d’un codespace, consultez « [Cycle de vie d’un codespace](/codespaces/getting-started/the-codespace-lifecycle) ».
