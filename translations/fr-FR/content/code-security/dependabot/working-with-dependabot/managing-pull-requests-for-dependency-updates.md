---
title: Gestion des demandes de tirage (pull request) pour les mises à jour des dépendances
intro: 'Vous gérez les demandes de tirage déclenchées par {% data variables.product.prodname_dependabot %} de la même façon que d’autres demandes de tirage, mais il existe des options supplémentaires.'
redirect_from:
  - /github/administering-a-repository/managing-pull-requests-for-dependency-updates
  - /code-security/supply-chain-security/managing-pull-requests-for-dependency-updates
  - /code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-pull-requests-for-dependency-updates
versions:
  fpt: '*'
  ghec: '*'
  ghes: '> 3.2'
type: how_to
topics:
  - Repositories
  - Version updates
  - Security updates
  - Pull requests
  - Dependencies
  - Vulnerabilities
shortTitle: Manage Dependabot PRs
ms.openlocfilehash: e33b176ced7d10ed70f4c521ce2c18be776a7f8e
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147112317'
---
{% data reusables.dependabot.beta-security-and-version-updates %} {% data reusables.dependabot.enterprise-enable-dependabot %}

## À propos des demandes de tirage {% data variables.product.prodname_dependabot %}

{% data reusables.dependabot.pull-request-introduction %}

Quand {% data variables.product.prodname_dependabot %} déclenche une demande de tirage, vous êtes averti par la méthode que vous avez choisie pour le dépôt. Chaque demande de tirage contient des informations détaillées sur la modification proposée, extraites du gestionnaire de package. Ces demandes de tirage suivent les vérifications et tests normaux définis dans votre dépôt. {% ifversion fpt or ghec %}En outre, quand suffisamment d’informations sont disponibles, vous voyez un score de compatibilité. Celui-ci peut également vous aider à décider s’il convient de fusionner ou non la modification. Pour plus d’informations sur ce score, consultez « [À propos des {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates). »{% endif %}

Si vous avez de nombreuses dépendances à gérer, vous souhaiterez peut-être personnaliser la configuration de chaque gestionnaire de packages afin que les demandes de tirage aient des réviseurs, des destinataires et des étiquettes spécifiques. Pour plus d’informations, consultez « [Personnalisation des mises à jour des dépendances](/github/administering-a-repository/customizing-dependency-updates) ».

## Affichage des demandes de tirage {% data variables.product.prodname_dependabot %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-pr %}
1. Toutes les demandes de tirage pour les mises à jour de sécurité ou de version sont faciles à identifier.
    - L’auteur est {% ifversion fpt or ghec %}[dependabot](https://github.com/dependabot){% else %}dependabot{% endif %}, le compte de bot utilisé par {% data variables.product.prodname_dependabot %}.
    - Par défaut, elles ont l’étiquette `dependencies`.

## Modification de la stratégie de rebasage pour les demandes de tirage {% data variables.product.prodname_dependabot %}

Par défaut, {% data variables.product.prodname_dependabot %} rebase automatiquement les demandes de tirage pour résoudre les conflits. Si vous préférez gérer les conflits de fusion manuellement, vous pouvez désactiver cette configuration avec l’option `rebase-strategy`. Pour plus d’informations, consultez « [Options de configuration pour le fichier dependabot.yml](/github/administering-a-repository/configuration-options-for-dependency-updates#rebase-strategy) ».

## Autorisation à {% data variables.product.prodname_dependabot %} de procéder au rebasage et forcer la poussée sur des commits supplémentaires

Par défaut, {% data variables.product.prodname_dependabot %} arrête de procéder au rebasage d’une demande de tirage une fois que des commits supplémentaires ont été poussés vers celle-ci. Pour autoriser {% data variables.product.prodname_dependabot %} à forcer la poussée sur des commits ajoutés à ses branches, incluez l’une des chaînes suivantes : `[dependabot skip]`, `[skip dependabot]`, `[dependabot-skip]` ou `[skip-dependabot]`, en minuscules ou en majuscules, au message de commit.

## Gestion des demandes de tirage {% data variables.product.prodname_dependabot %} avec des commandes de commentaire

{% data variables.product.prodname_dependabot %} répond à des commandes simples dans les commentaires. Chaque demande de tirage contient des détails sur les commandes que vous pouvez utiliser pour la traiter (par exemple : fusionner, condenser, rouvrir, fermer ou rebaser la demande de tirage) sous la section « Commandes et options {% data variables.product.prodname_dependabot %} ». L’objectif est de faciliter le tri de ces demandes de tirage automatiquement générées.

Vous pouvez utiliser l’une des commandes suivantes sur une demande de tirage {% data variables.product.prodname_dependabot %}.

- `@dependabot cancel merge` annule une fusion demandée.
- `@dependabot close` ferme la demande de tirage et empêche {% data variables.product.prodname_dependabot %} de la recréer. Vous pouvez obtenir le même résultat en fermant la demande de tirage manuellement.
- `@dependabot ignore this dependency` ferme la demande de tirage et empêche {% data variables.product.prodname_dependabot %} de créer davantage de demandes de tirage pour cette dépendance (sauf si vous rouvrez la demande de tirage ou effectuez vous-même une mise à niveau vers la version suggérée de la dépendance).
- `@dependabot ignore this major version` ferme la demande de tirage et empêche {% data variables.product.prodname_dependabot %} de créer davantage de demandes de tirage pour cette version principale (sauf si vous rouvrez la demande de tirage ou effectuez vous-même une mise à niveau vers cette version principale).
- `@dependabot ignore this minor version` ferme la demande de tirage et empêche {% data variables.product.prodname_dependabot %} de créer davantage de demandes de tirage pour cette version mineure (sauf si vous rouvrez la demande de tirage ou effectuez vous-même une mise à niveau vers cette version mineure).
- `@dependabot merge` fusionne la demande de tirage une fois que vos tests CI ont réussi.
- `@dependabot rebase` rebase la demande de tirage.
- `@dependabot recreate` recrée la demande de tirage, en écrasant toutes les modifications qui y ont été apportées.
- `@dependabot reopen` rouvre la demande de tirage si elle est fermée.
- `@dependabot squash and merge` condense et fusionne la demande de tirage une fois que vos tests CI ont réussi.

{% data variables.product.prodname_dependabot %} réagit avec un emoji « pouce vers le haut » pour reconnaître la commande et peut répondre avec un commentaire sur la demande de tirage. Même si {% data variables.product.prodname_dependabot %} répond généralement rapidement, l’exécution de certaines commandes peut prendre plusieurs minutes si {% data variables.product.prodname_dependabot %} est occupé à traiter d’autres mises à jour ou commandes.

Si vous exécutez l’une des commandes permettant d’ignorer les dépendances ou les versions, {% data variables.product.prodname_dependabot %} stocke les préférences du dépôt de façon centralisée. Même s’il s’agit d’une solution rapide, pour les dépôts avec plusieurs contributeurs, il est préférable de définir explicitement les dépendances et les versions à ignorer dans le fichier de configuration. Ainsi, tous les contributeurs peuvent facilement voir pourquoi une dépendance particulière n’est pas automatiquement mise à jour. Pour plus d’informations, consultez « [Options de configuration pour le fichier dependabot.yml](/github/administering-a-repository/configuration-options-for-dependency-updates#ignore) ».
