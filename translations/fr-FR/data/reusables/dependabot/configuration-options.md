---
ms.openlocfilehash: 15dca8ffafe9686d15e08ffb8ecd9e07ceba3942
ms.sourcegitcommit: 5b1461b419dbef60ae9dbdf8e905a4df30fc91b7
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: "147877084"
---
| Option | Obligatoire | Mises à jour de sécurité | Mises à jour de version | Description |
|:---|:---:|:---:|:---:|:---|
| [`package-ecosystem`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#package-ecosystem)                     | **X** | | X | Gestionnaire de package à utiliser                  |
| [`directory`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#directory)                                     | **X** | | X | Emplacement des manifestes de package           |
| [`schedule.interval`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#scheduleinterval)                      | **X** | | X | Fréquence de la recherche des mises à jour                |
| [`allow`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#allow)                                             | | X | X | Personnaliser les mises à jour à autoriser         |
| [`assignees`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#assignees)                                     | | X | X | Destinataires à définir sur les demandes de tirage           |
| [`commit-message`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#commit-message)                           | | X | X | Préférences des messages de commit                  |{% ifversion fpt or ghec or ghes > 3.4 %}
| [`enable-beta-ecosystems`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#enable-beta-ecosystems)           | | | X | Activer les écosystèmes qui ont une prise en charge au niveau bêta |{% endif %}
| [`ignore`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#ignore)                                           | | X | X | Ignorer certaines dépendances ou versions     |
| [`insecure-external-code-execution`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#insecure-external-code-execution) | | | X | Autoriser ou refuser l’exécution du code dans les fichiers manifeste |
| [`labels`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#labels)                                           | | X | X | Étiquettes à définir sur les demandes de tirage              |
| [`milestone`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#milestone)                                     | | X | X | Jalon à définir sur les demandes de tirage           |
| [`open-pull-requests-limit`](#open-pull-requests-limit)       | | X | X | Limiter le nombre de demandes de tirage ouvertes pour les mises à jour de version |
| [`pull-request-branch-name.separator`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#pull-request-branch-nameseparator) | | X | X | Changer le séparateur des noms de branche de demande de tirage |
| [`rebase-strategy`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#rebase-strategy)                         | | X | X | Désactiver le rebasage automatique                  |
| [`registries`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#registries)                                   | | | X | Registres privés auxquels {% data variables.product.prodname_dependabot %} peut accéder|
| [`reviewers`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#reviewers)                                     | | X | X | Réviseurs à définir sur les demandes de tirage           |
| [`schedule.day`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#scheduleday)                                | | | X | Jour de la semaine auquel rechercher les mises à jour              |
| [`schedule.time`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#scheduletime)                              | | | X | Heure de la journée à laquelle rechercher les mises à jour (hh:mm)      |
| [`schedule.timezone`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#scheduletimezone)                      | | | X | Fuseau horaire pour l’heure de la journée (identificateur de fuseau)    |
| [`target-branch`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#target-branch)                             | | | X  | Branche par rapport à laquelle créer les demandes de tirage     |
| [`vendor`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#vendor)                                           | | | X | Mettre à jour les dépendances placées dans le répertoire vendor ou mises en cache        |
| [`versioning-strategy`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#versioning-strategy)                 | | X | X | Mode de mise à jour des exigences de la version du manifeste |
