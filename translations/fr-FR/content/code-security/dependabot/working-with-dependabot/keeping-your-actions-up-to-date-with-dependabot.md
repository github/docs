---
title: Maintenir vos actions à jour avec Dependabot
intro: 'Vous pouvez utiliser {% data variables.product.prodname_dependabot %} pour maintenir les actions que vous utilisez à jour dans les dernières versions.'
redirect_from:
  - /github/administering-a-repository/keeping-your-actions-up-to-date-with-github-dependabot
  - /github/administering-a-repository/keeping-your-actions-up-to-date-with-dependabot
  - /code-security/supply-chain-security/keeping-your-actions-up-to-date-with-dependabot
  - /code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/keeping-your-actions-up-to-date-with-dependabot
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Repositories
  - Dependabot
  - Version updates
  - Actions
shortTitle: Auto-update actions
ms.openlocfilehash: 804660684230d8a0fb716b69644aab851a4c247b
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107724'
---
{% data reusables.dependabot.beta-security-and-version-updates %}

{% data reusables.dependabot.enterprise-enable-dependabot %}

## À propos des {% data variables.product.prodname_dependabot_version_updates %} pour les actions

Les actions sont souvent mises à jour avec des correctifs de bogues et de nouvelles fonctionnalités pour rendre les processus automatisés plus fiables, plus rapides et plus sûrs. Quand vous activez les {% data variables.product.prodname_dependabot_version_updates %} pour {% data variables.product.prodname_actions %}, {% data variables.product.prodname_dependabot %} aide à garantir que les références aux actions dans le fichier *workflow.yml* d’un dépôt sont maintenues à jour. Pour chaque action dans le fichier, {% data variables.product.prodname_dependabot %} vérifie la référence de l’action (généralement un numéro de version ou un identificateur de commit associé à l’action) par rapport à la dernière version. Si une version plus récente de l’action est disponible, {% data variables.product.prodname_dependabot %} vous envoie une demande de tirage (pull request) qui met à jour la référence dans le fichier de workflow vers la dernière version. Pour plus d’informations sur les {% data variables.product.prodname_dependabot_version_updates %}, consultez « [À propos des {% data variables.product.prodname_dependabot_version_updates %}](/github/administering-a-repository/about-dependabot-version-updates) ». Pour plus d’informations sur la configuration des workflows pour {% data variables.product.prodname_actions %}, consultez « [Découvrir {% data variables.product.prodname_actions %}](/actions/learn-github-actions) ».
  
{% data reusables.actions.workflow-runs-dependabot-note %}

## Activation des {% data variables.product.prodname_dependabot_version_updates %} pour les actions

Vous pouvez configurer les {% data variables.product.prodname_dependabot_version_updates %} pour maintenir vos actions ainsi que les bibliothèques et packages dont vous dépendez. 

1. Si vous avez déjà activé les {% data variables.product.prodname_dependabot_version_updates %} pour d’autres écosystèmes ou gestionnaires de packages, ouvrez simplement le fichier *dependabot.yml* existant. Sinon, créez un fichier de configuration *dependabot.yml* dans le répertoire `.github` de votre référentiel. Pour plus d’informations, consultez « [Configuration des mises à jour de version Dependabot](/code-security/dependabot/dependabot-version-updates/configuring-dependabot-version-updates#enabling-dependabot-version-updates) ».
1. Spécifiez `"github-actions"` comme élément `package-ecosystem` à superviser.
1. Définissez `directory` sur `"/"` pour rechercher les fichiers de workflow dans `.github/workflows`.
1. Définissez un `schedule.interval` pour spécifier la fréquence à laquelle rechercher les nouvelles versions.
{% data reusables.dependabot.check-in-dependabot-yml %} Si vous avez modifié un fichier existant, enregistrez vos modifications.

Vous pouvez également activer les {% data variables.product.prodname_dependabot_version_updates %} sur les duplications (fork). Pour plus d’informations, consultez « [Configuration des mises à jour de version {% data variables.product.prodname_dependabot %}](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/enabling-and-disabling-dependabot-version-updates#enabling-version-updates-on-forks) ».

### Exemple de fichier *dependabot.yml* pour {% data variables.product.prodname_actions %}

L’exemple de fichier *dependabot.yml* ci-dessous configure les mises à jour de version pour {% data variables.product.prodname_actions %}. `directory` doit être défini sur `"/"` pour rechercher les fichiers de workflow dans `.github/workflows`. La propriété `schedule.interval` a la valeur `"weekly"`. Une fois ce fichier archivé ou mis à jour, {% data variables.product.prodname_dependabot %} recherche les nouvelles versions de vos actions. {% data variables.product.prodname_dependabot %} déclenche des demandes de tirage pour les mises à jour de version pour toutes les actions obsolètes qu’il trouve. Après les mises à jour de la version initiale, {% data variables.product.prodname_dependabot %} continue à rechercher les versions obsolètes des actions une fois par semaine.

```yaml
# Set update schedule for GitHub Actions

version: 2
updates:

  - package-ecosystem: "github-actions"
    directory: "/"
    schedule:
      # Check for updates to GitHub Actions every week
      interval: "weekly"
```

## Configuration des {% data variables.product.prodname_dependabot_version_updates %} pour les actions

Quand vous activez les {% data variables.product.prodname_dependabot_version_updates %} pour les actions, vous devez spécifier des valeurs pour `package-ecosystem`, `directory`et `schedule.interval`. Il existe de nombreuses propriétés facultatives que vous pouvez définir pour personnaliser davantage vos mises à jour de version. Pour plus d’informations, consultez « [Options de configuration pour le fichier dependabot.yml](/github/administering-a-repository/configuration-options-for-dependency-updates) ».

## Pour aller plus loin

- « [Présentation de GitHub Actions](/actions/getting-started-with-github-actions/about-github-actions) »
