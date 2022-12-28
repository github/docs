---
title: Configuration de mises à jour de version Dependabot
intro: 'Vous pouvez configurer votre référentiel de sorte que {% data variables.product.prodname_dependabot %} mette automatiquement à jour les packages que vous utilisez.'
permissions: 'People with write permissions to a repository can enable or disable {% data variables.product.prodname_dependabot_version_updates %} for the repository.'
redirect_from:
  - /github/administering-a-repository/enabling-and-disabling-version-updates
  - /code-security/supply-chain-security/enabling-and-disabling-version-updates
  - /code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/enabling-and-disabling-version-updates
  - /code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/enabling-and-disabling-dependabot-version-updates
versions:
  fpt: '*'
  ghec: '*'
  ghes: '> 3.2'
type: how_to
topics:
  - Dependabot
  - Version updates
  - Repositories
  - Dependencies
  - Pull requests
shortTitle: Configure version updates
ms.openlocfilehash: 682c127774877ce503575bc33d3edafa05eb6f74
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148008182'
---
<!--Marketing-LINK: From /features/security/software-supply-chain page "About version updates for dependencies".-->
{% data reusables.dependabot.beta-security-and-version-updates %} {% data reusables.dependabot.enterprise-enable-dependabot %}

## À propos des mises à jour de version pour les dépendances

Vous activez les {% data variables.product.prodname_dependabot_version_updates %} en archivant un fichier de configuration *dependabot.yml* dans le répertoire `.github` de votre dépôt. {% data variables.product.prodname_dependabot %} déclenche ensuite des demandes de tirage (pull request) pour maintenir à jour les dépendances que vous configurez. Pour les dépendances de chaque gestionnaire de package que vous souhaitez mettre à jour, vous devez spécifier l’emplacement des fichiers manifeste de package et la fréquence à laquelle rechercher les mises à jour des dépendances listées dans ces fichiers. Pour plus d’informations sur l’activation des mises à jour de sécurité, consultez « [Configuration des {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/configuring-dependabot-security-updates) ».

{% data reusables.dependabot.initial-updates %} Pour plus d’informations, consultez « [Personnalisation des mises à jour des dépendances](/github/administering-a-repository/customizing-dependency-updates) ».

Par défaut, seules les dépendances directes explicitement définies dans un manifeste sont tenues à jour par les {% data variables.product.prodname_dependabot_version_updates %}. Vous pouvez choisir de recevoir des mises à jour pour les dépendances indirectes définies dans les fichiers de verrouillage. Pour plus d’informations, consultez « [Options de configuration pour le fichier dependabot.yml](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#allow) ».

{% data reusables.dependabot.private-dependencies-note %}En outre, {% data variables.product.prodname_dependabot %} ne prend pas en charge les dépendances {% data variables.product.prodname_dotcom %} privées pour tous les gestionnaires de package. Pour plus d’informations, consultez « [À propos des mises à jour de version Dependabot](/github/administering-a-repository/about-dependabot-version-updates#supported-repositories-and-ecosystems) » et « [Prise en charge des langages par {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/github-language-support) ».

## Activation des {% data variables.product.prodname_dependabot_version_updates %}

Vous activez les {% data variables.product.prodname_dependabot_version_updates %} en validant un fichier de configuration *dependabot.yml* dans votre référentiel. {% ifversion dependabot-settings-update-37 %}Si vous activez la fonctionnalité dans votre page de paramètres, GitHub crée un fichier de base que vous pouvez modifier ; sinon vous pouvez créer le fichier en utilisant n’importe quel éditeur de fichiers.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %}
1. Sous « Sécurité et analyse du code », à droite de « {% data variables.product.prodname_dependabot_version_updates %} », cliquez sur **Activer** pour ouvrir un fichier de configuration de base *dependabot.yml* dans le répertoire `.github` de votre référentiel.
{% else %}
1. Créez un fichier de configuration *dependabot.yml* dans le répertoire `.github` de votre référentiel. {% endif %}
1. Ajoutez une `version`. 
1. Si vous avez des dépendances dans un registre privé, vous pouvez ajouter une section `registries` contenant les détails de l’authentification. 
1. Ajoutez une section `updates`, avec une entrée pour chaque gestionnaire de package à faire superviser par {% data variables.product.prodname_dependabot %}.
1. Pour chaque gestionnaire de package, utilisez :
    - `package-ecosystem` pour spécifier le gestionnaire de package.
    - `directory` pour spécifier l’emplacement du manifeste ou d’autres fichiers de définition.
    - `schedule.interval` pour spécifier la fréquence à laquelle rechercher les nouvelles versions.
{% data reusables.dependabot.check-in-dependabot-yml %}

Pour plus d’informations sur toutes les options de configuration, consultez « [Options de configuration pour le fichier dependabot.yml](/github/administering-a-repository/configuration-options-for-dependency-updates) ».

### Exemple de fichier *dependabot.yml*

L’exemple de fichier *dependabot.yml* ci-dessous configure les mises à jour de version pour deux gestionnaires de package : npm et Docker. Quand ce fichier est archivé, {% data variables.product.prodname_dependabot %} vérifie si les fichiers manifestes sur la branche par défaut contiennent des dépendances obsolètes. S’il trouve des dépendances obsolètes, il déclenche des demandes de tirage par rapport à la branche par défaut pour mettre à jour les dépendances.

```yaml
# Basic dependabot.yml file with
# minimum configuration for two package managers

version: 2
updates:
  # Enable version updates for npm
  - package-ecosystem: "npm"
    # Look for `package.json` and `lock` files in the `root` directory
    directory: "/"
    # Check the npm registry for updates every day (weekdays)
    schedule:
      interval: "daily"

  # Enable version updates for Docker
  - package-ecosystem: "docker"
    # Look for a `Dockerfile` in the `root` directory
    directory: "/"
    # Check for updates once a week
    schedule:
      interval: "weekly"
```

Dans l’exemple ci-dessus, si les dépendances Docker étaient très obsolètes, vous pourriez commencer par une planification `daily` jusqu’à ce que les dépendances soient à jour, puis revenir à une planification hebdomadaire.

### Activation des mises à jour de version sur les duplications (forks)

Si vous souhaitez activer les mises à jour de version sur les duplications, il existe une étape supplémentaire. Les mises à jour de version ne sont pas automatiquement activées sur les duplications quand un fichier de configuration *dependabot.yml* est présent. Cela garantit que les propriétaires de duplication n’activent pas involontairement les mises à jour de version quand ils tirent (pull) des modifications incluant un fichier de configuration *dependabot.yml* à partir du dépôt d’origine. 

Sur une duplication, vous devez également activer explicitement {% data variables.product.prodname_dependabot %}.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.accessing-repository-graphs %} {% data reusables.repositories.click-dependency-graph %} {% data reusables.dependabot.click-dependabot-tab %}
5. Sous « Activer Dependabot », cliquez sur **Activer Dependabot**.

## Vérification de l’état des mises à jour de version

Une fois que vous avez activé les mises à jour de version, l’onglet **Dependabot** dans le graphe de dépendances du dépôt est rempli. Cet onglet indique quels sont les gestionnaires de packages que {% data variables.product.prodname_dependabot %} doit superviser et quand {% data variables.product.prodname_dependabot %} a recherché les nouvelles versions pour la dernière fois.

![Onglet Insights du dépôt, graphe de dépendances, onglet Dependabot](/assets/images/help/dependabot/dependabot-tab-view.png)

Pour plus d’informations, consultez « [Liste des dépendances configurées pour les mises à jour de version](/github/administering-a-repository/listing-dependencies-configured-for-version-updates) ».

## Désactivation des {% data variables.product.prodname_dependabot_version_updates %}

Vous pouvez désactiver entièrement les mises à jour de version en supprimant le fichier *dependabot.yml* de votre dépôt. Plus généralement, vous souhaitez désactiver temporairement les mises à jour pour une ou plusieurs dépendances ou gestionnaires de packages.

- Gestionnaires de packages : effectuez la désactivation en définissant `open-pull-requests-limit: 0` ou en commentant l’élément `package-ecosystem` approprié dans le fichier de configuration.
- Dépendances spécifiques : effectuez la désactivation en ajoutant des attributs `ignore` pour les packages ou les applications que vous souhaitez exclure des mises à jour.

Quand vous désactivez les dépendances, vous pouvez utiliser des caractères génériques pour désigner un ensemble de bibliothèques associées. Vous pouvez également spécifier les versions à exclure. Cela est particulièrement utile si vous devez bloquer les mises à jour d’une bibliothèque, en attente d’un travail permettant de prendre en charge un changement cassant de son API, mais que vous souhaitez obtenir des correctifs de sécurité pour la version que vous utilisez.

### Exemple de désactivation des mises à jour de version pour certaines dépendances

L’exemple de fichier *dependabot.yml* ci-dessous inclut des exemples des différentes façons de désactiver les mises à jour de certaines dépendances, tout en permettant la poursuite des autres mises à jour.

```yaml
# dependabot.yml file with updates
# disabled for Docker and limited for npm

version: 2
updates:
  # Configuration for Dockerfile
  - package-ecosystem: "docker"
    directory: "/"
    schedule:
      interval: "weekly"
      # Disable all pull requests for Docker dependencies
    open-pull-requests-limit: 0

  # Configuration for npm
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "weekly"
    ignore:
      # Ignore updates to packages that start with 'aws'
      # Wildcards match zero or more arbitrary characters
      - dependency-name: "aws*"
      # Ignore some updates to the 'express' package
      - dependency-name: "express"
        # Ignore only new versions for 4.x and 5.x
        versions: ["4.x", "5.x"]
      # For all packages, ignore all patch updates
      - dependency-name: "*"
        update-types: ["version-update:semver-patch"]
```

Pour savoir si des préférences « ignore » sont appliquées, consultez « [Options de configuration pour le fichier dependabot.yml](/github/administering-a-repository/configuration-options-for-dependency-updates#ignore) ».
