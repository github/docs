---
title: Personnalisation des mises à jour des dépendances
intro: 'Vous pouvez personnaliser la façon dont {% data variables.product.prodname_dependabot %} gère vos dépendances.'
permissions: 'People with write permissions to a repository can configure {% data variables.product.prodname_dependabot %} for the repository.'
redirect_from:
  - /github/administering-a-repository/customizing-dependency-updates
  - /code-security/supply-chain-security/customizing-dependency-updates
  - /code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/customizing-dependency-updates
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Dependabot
  - Version updates
  - Security updates
  - Repositories
  - Dependencies
  - Pull requests
  - Vulnerabilities
shortTitle: Customize updates
ms.openlocfilehash: 99a3869313598733493d21f8b15d46db98b1a53c
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107740'
---
{% data reusables.dependabot.beta-security-and-version-updates %} {% data reusables.dependabot.enterprise-enable-dependabot %}

## À propos de la personnalisation des mises à jour des dépendances

Une fois que vous avez activé les mises à jour de version, vous pouvez personnaliser la façon dont {% data variables.product.prodname_dependabot %} gère vos dépendances en ajoutant des options au fichier *dependabot.yml*. Par exemple, vous pouvez :

- Spécifier quel jour de la semaine ouvrir des demandes de tirage (pull request) pour les mises à jour de version : `schedule.day`
- Définir des réviseurs, des destinataires et des étiquettes pour chaque gestionnaire de package : `reviewers`, `assignees` et `labels`
- Définir une stratégie de versioning pour les modifications apportées à chaque fichier manifeste : `versioning-strategy`
- Changer le nombre maximal par défaut (5) de demandes de tirage ouvertes pour les mises à jour de version : `open-pull-requests-limit`
- Ouvrir des demandes de tirage pour les mises à jour de version afin de cibler une branche spécifique, au lieu de la branche par défaut : `target-branch`

Pour plus d’informations sur les options de configuration, consultez « [Options de configuration pour le fichier dependabot.yml](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/configuration-options-for-dependency-updates) ».

Quand vous mettez à jour le fichier *dependabot.yml* dans votre dépôt, {% data variables.product.prodname_dependabot %} exécute une vérification immédiate avec la nouvelle configuration. En quelques minutes apparaît une liste mise à jour des dépendances sous l’onglet **{% data variables.product.prodname_dependabot %}**  ; cette opération peut prendre plus de temps si le dépôt a de nombreuses dépendances. Vous pouvez également voir de nouvelles demandes de tirage pour les mises à jour de version. Pour plus d’informations, consultez « [Liste des dépendances configurées pour les mises à jour de version](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/listing-dependencies-configured-for-version-updates) ».

## Impact des modifications de configuration sur les mises à jour de sécurité

Si vous personnalisez le fichier *dependabot.yml*, vous remarquerez peut-être des modifications apportées aux demandes de tirage déclenchées pour les mises à jour de sécurité. Ces demandes de tirage sont toujours déclenchées par un avis de sécurité pour une dépendance, plutôt que par la planification {% data variables.product.prodname_dependabot %}. Toutefois, elles héritent des paramètres de configuration pertinents du fichier *dependabot.yml*, sauf si vous spécifiez une autre branche cible pour les mises à jour de version.

Pour obtenir un exemple, consultez « [Définition d’étiquettes personnalisées](#setting-custom-labels) » ci-dessous.

## Modification de la planification

Quand vous définissez une planification de mise à jour `daily`, par défaut, {% data variables.product.prodname_dependabot %} recherche les nouvelles versions à 05:00 UTC. Vous pouvez utiliser `schedule.time` afin de spécifier une autre heure de la journée pour rechercher les mises à jour (format : `hh:mm`).

L’exemple de fichier *dependabot.yml* ci-dessous étoffe la configuration npm pour spécifier quand {% data variables.product.prodname_dependabot %} doit rechercher les mises à jour de version des dépendances.

```yaml
# dependabot.yml file with
# customized schedule for version updates

version: 2
updates:
  # Keep npm dependencies up to date
  - package-ecosystem: "npm"
    directory: "/"
    # Check the npm registry for updates at 2am UTC
    schedule:
      interval: "daily"
      time: "02:00"
```

## Définition des réviseurs et des destinataires

Par défaut, {% data variables.product.prodname_dependabot %} déclenche des demandes de tirage sans réviseurs ni destinataires.

Vous pouvez utiliser `reviewers` et `assignees` afin de spécifier des réviseurs et des destinataires pour toutes les demandes de tirage déclenchées pour un gestionnaire de package. Quand vous spécifiez une équipe, vous devez utiliser le nom complet de l’équipe, comme si vous la mentionniez (@mentioning) (organisation comprise).

L’exemple de fichier *dependabot.yml* ci-dessous change la configuration npm afin que toutes les demandes de tirage ouvertes avec des mises à jour de version et de sécurité pour npm aient deux réviseurs et un destinataire.

```yaml
# dependabot.yml file with
# reviews and an assignee for all npm pull requests

version: 2
updates:
  # Keep npm dependencies up to date
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "weekly"
    # Raise all npm pull requests with reviewers
    reviewers:
      - "my-org/team-name"
      - "octocat"
    # Raise all npm pull requests with an assignee
    assignees:
      - "user-name"
```

## Définition d’étiquettes personnalisées

{% data reusables.dependabot.default-labels %}

Vous pouvez utiliser `labels` afin de remplacer les étiquettes par défaut et de spécifier d’autres étiquettes pour toutes les demandes de tirage déclenchées pour un gestionnaire de package. Vous ne pouvez pas créer d’étiquettes dans le fichier *dependabot.yml*. Les autres étiquettes doivent donc déjà exister dans le dépôt.

L’exemple de fichier *dependabot.yml* ci-dessous change la configuration npm afin que toutes les demandes de tirage ouvertes avec des mises à jour de version et de sécurité pour npm aient des étiquettes personnalisées. Il change également la configuration Docker pour rechercher les mises à jour de version par rapport à une branche personnalisée et pour déclencher des demandes de tirage avec des étiquettes personnalisées par rapport à cette branche personnalisée. Les modifications apportées à Docker n’affectent pas les demandes de tirage des mises à jour de sécurité, car ceux-ci sont toujours effectués par rapport à la branche par défaut.

{% note %}

**Remarque :** La nouvelle `target-branch` doit contenir un fichier Dockerfile à mettre à jour, sinon cette modification aura pour effet de désactiver les mises à jour de version pour Docker.

{% endnote %}

```yaml
# dependabot.yml file with
# customized npm configuration

version: 2
updates:
  # Keep npm dependencies up to date
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "weekly"
    # Raise all npm pull requests with custom labels
    labels:
      - "npm dependencies"
      - "triage-board"

    # Keep Docker dependencies up to date
  - package-ecosystem: "docker"
    directory: "/"
    schedule:
      interval: "weekly"
    # Raise pull requests for Docker version updates
    # against the "develop" branch. The Docker configuration
    # no longer affects security update pull requests.
    target-branch: "develop"
    # Use custom labels on pull requests for Docker version updates
    labels:
      - "Docker dependencies"
      - "triage-board"
```

## Autres exemples

Pour plus d’exemples, consultez « [Options de configuration pour le fichier dependabot.yml](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/configuration-options-for-dependency-updates) ».
