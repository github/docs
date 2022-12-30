---
title: Gestion des paramètres d’utilisation des données de votre dépôt privé
intro: 'Pour permettre à {% data variables.product.product_name %} de vous connecter à des outils, des personnes, des projets et des informations pertinents, vous pouvez configurer l’utilisation des données pour votre référentiel privé.'
redirect_from:
  - /articles/opting-into-or-out-of-data-use-for-your-private-repository
  - /github/understanding-how-github-uses-and-protects-your-data/opting-into-or-out-of-data-use-for-your-private-repository
  - /github/understanding-how-github-uses-and-protects-your-data/managing-data-use-settings-for-your-private-repository
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Policy
  - Legal
shortTitle: Manage data use for private repo
ms.openlocfilehash: 36ddc4449726b67863e7d4e045dd1582b12f2c27
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147526669'
---
## À propos de l’utilisation des données de votre dépôt privé


Vous pouvez contrôler l’utilisation des données de votre dépôt privé avec les fonctionnalités de sécurité et d’analyse. 

- Activez le graphe de dépendances pour autoriser l’analyse des données en lecture seule sur votre dépôt. 
- Désactivez le graphe de dépendances pour bloquer l’analyse des données en lecture seule sur votre dépôt. 

Quand vous activez l’utilisation des données de votre dépôt privé, vous pouvez accéder au graphe de dépendances, qui vous permet de suivre les dépendances de votre dépôt et de recevoir des {% data variables.product.prodname_dependabot_alerts %} quand {% data variables.product.product_name %} détecte des dépendances vulnérables. Pour plus d’informations, consultez « [À propos des {% data variables.product.prodname_dependabot_alerts %}](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies#dependabot-alerts-for-vulnerable-dependencies) ».


{% note %}

**Remarque :** Si vous désactivez le graphe de dépendances, les {% data variables.product.prodname_dependabot_alerts %} et les {% data variables.product.prodname_dependabot_security_updates %} sont également désactivées. Pour plus d’informations, consultez « [À propos du graphe de dépendances](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph) ». 

{% endnote %}

## Activation ou désactivation de l’utilisation des données à partir des fonctionnalités de sécurité et d’analyse

{% data reusables.security.security-and-analysis-features-enable-read-only %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %}
4. Sous « Sécurité et analyse du code », à droite de la fonctionnalité, cliquez sur **Désactiver** ou **Activer**. {% ifversion fpt %} ![Bouton « Activer » ou « Désactiver » pour les fonctionnalités « Configurer la sécurité et l’analyse »](/assets/images/help/repository/security-and-analysis-disable-or-enable-fpt-private.png){% elsif ghec %} ![Bouton « Activer » ou « Désactiver » pour les fonctionnalités « Configurer la sécurité et l’analyse »](/assets/images/help/repository/security-and-analysis-disable-or-enable-ghec-private.png){% endif %}

## Pour aller plus loin

- « [À propos de l’utilisation de vos données par {% data variables.product.prodname_dotcom %}](/articles/about-github-s-use-of-your-data) »
- « [Affichage et mise à jour des {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts) »
- « [Gestion des paramètres de sécurité et d’analyse de votre dépôt](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository) »
