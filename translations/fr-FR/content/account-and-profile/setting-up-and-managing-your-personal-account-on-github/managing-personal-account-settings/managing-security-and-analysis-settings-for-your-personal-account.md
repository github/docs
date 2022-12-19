---
title: Gestion des paramètres de sécurité et d’analyse pour votre compte personnel
intro: 'Vous pouvez contrôler les fonctionnalités qui sécurisent et analysent le code de vos projets sur {% data variables.product.prodname_dotcom %}.'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
topics:
  - Accounts
redirect_from:
  - /github/setting-up-and-managing-your-github-user-account/managing-security-and-analysis-settings-for-your-user-account
  - /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/managing-security-and-analysis-settings-for-your-user-account
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/managing-security-and-analysis-settings-for-your-user-account
shortTitle: Manage security & analysis
ms.openlocfilehash: 22ff867691f79360db54f0fe85f5e988c71536a3
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108385'
---
## À propos de la gestion des paramètres de sécurité et d’analyse

{% data variables.product.prodname_dotcom %} peut vous aider à sécuriser vos dépôts. Cette rubrique vous explique comment gérer les fonctionnalités de sécurité et d’analyse de tous vos dépôts existants ou nouveaux.

Vous pouvez toujours gérer les fonctionnalités de sécurité et d’analyse de chaque dépôt individuellement. Pour plus d’informations, consultez « [Gestion des paramètres de sécurité et d’analyse pour votre dépôt](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository) ».

Vous pouvez également consulter le journal de sécurité pour passer en revue toute l’activité sur votre compte personnel. Pour plus d’informations, consultez « [Examen de votre journal de sécurité](/authentication/keeping-your-account-and-data-secure/reviewing-your-security-log) ».

{% data reusables.security.some-security-and-analysis-features-are-enabled-by-default %}

{% data reusables.security.security-and-analysis-features-enable-read-only %}

Pour obtenir une vue d’ensemble de la sécurité au niveau du dépôt, consultez « [Sécurisation de votre dépôt](/code-security/getting-started/securing-your-repository) ».

## Activation ou désactivation de fonctionnalités pour les dépôts existants

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.security-analysis %}
3. Sous « Sécurité du code et analyse », à droite de la fonctionnalité, cliquez sur **Désactiver tout** ou **Activer tout**.
  {% ifversion ghes %}![Bouton « Activer tout » ou « Désactiver tout" » pour « Configurer la sécurité et l’analyse »](/assets/images/enterprise/3.3/settings/security-and-analysis-disable-or-enable-all.png){% else %}![Bouton « Activer tout » ou « Désactiver tout" » pour « Configurer la sécurité et l’analyse »](/assets/images/help/settings/security-and-analysis-disable-or-enable-all.png){% endif %}
6. Si vous le souhaitez, activez la fonctionnalité par défaut pour les nouveaux dépôts dont vous êtes propriétaire.
  {% ifversion ghes %}![Option « Activer par défaut » pour les nouveaux dépôts](/assets/images/enterprise/3.3/settings/security-and-analysis-enable-by-default-in-modal.png){% else %}![Option « Activer par défaut » pour les nouveaux dépôts](/assets/images/help/settings/security-and-analysis-enable-by-default-in-modal.png){% endif %}
7. Cliquez sur **Désactiver la FONCTIONNALITÉ** ou **Activer la FONCTIONNALITÉ** pour désactiver ou activer la fonctionnalité pour tous les dépôts dont vous êtes propriétaire.
  {% ifversion ghes %}![Bouton permettant de désactiver ou d’activer la fonctionnalité](/assets/images/enterprise/3.3/settings/security-and-analysis-enable-dependency-graph.png){% else %}![Bouton permettant de désactiver ou d’activer la fonctionnalité](/assets/images/help/settings/security-and-analysis-enable-dependency-graph.png){% endif %}

{% data reusables.security.displayed-information %}

## Activation ou désactivation de fonctionnalités pour les nouveaux dépôts

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.security-analysis %}
3. Sous « Sécurité du code et analyse », à droite de la fonctionnalité, activez ou désactivez la fonctionnalité par défaut pour les nouveaux dépôts dont vous êtes propriétaire.
  {% ifversion ghes %}![Case à cocher pour activer ou désactiver une fonctionnalité pour les nouveaux dépôts](/assets/images/enterprise/3.3/settings/security-and-analysis-enable-or-disable-feature-checkbox.png){% else %}![Case à cocher pour activer ou désactiver une fonctionnalité pour les nouveaux dépôts](/assets/images/help/settings/security-and-analysis-enable-or-disable-feature-checkbox.png){% endif %}

## Pour aller plus loin

- « [À propos du graphe des dépendances](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph) »
- « [À propos de {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies) »
- « [Tenir vos dépendances à jour automatiquement](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically) »
