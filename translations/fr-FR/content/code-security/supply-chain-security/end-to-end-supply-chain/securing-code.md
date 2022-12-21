---
title: Bonnes pratiques pour sécuriser le code dans votre chaîne d’approvisionnement
shortTitle: Securing code
allowTitleToDifferFromFilename: true
intro: 'Conseils sur la façon de protéger le centre de votre chaîne d’approvisionnement, le code que vous écrivez et le code dont vous dépendez.'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Dependabot
  - Security updates
  - Vulnerabilities
  - Advanced Security
  - Secret scanning
ms.openlocfilehash: 9fa10b05cfeadb4e2cde37829e703fc527571c67
ms.sourcegitcommit: 7a74d5796695bb21c30e4031679253cbc16ceaea
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/28/2022
ms.locfileid: '148184003'
---
## À propos de ce guide

Ce guide décrit les modifications les plus importantes que vous pouvez apporter pour améliorer la sécurité de votre code. Chaque section décrit une modification que vous pouvez apporter à vos processus pour améliorer la sécurité. Les modifications les plus importantes sont listées en premier.

## Quel est le risque ?

Les principaux risques dans le processus de développement sont les suivants :

- Utilisation de dépendances avec des vulnérabilités de sécurité qu’un attaquant pourrait exploiter.
- Fuite d’informations d’authentification ou d’un jeton qu’un attaquant peut utiliser pour accéder à vos ressources.
- Introduction dans votre propre code d’une vulnérabilité qu’un attaquant pourrait exploiter.

Ces risques exposent vos ressources et vos projets à une attaque et sont transmis directement à toute personne qui utilise un package que vous créez. Les sections suivantes expliquent comment vous pouvez protéger vos utilisateurs et vous-même contre ces risques.

## Créer un programme de gestion des vulnérabilités pour les dépendances

Vous pouvez sécuriser le code dont vous dépendez en créant un programme de gestion des vulnérabilités pour les dépendances. De manière générale, il doit inclure des processus qui garantissent que vous :

1. Créez un inventaire de vos dépendances.

1. Savez quand il existe une vulnérabilité de sécurité dans une dépendance.
{% ifversion fpt or ghec or ghes > 3.5 or ghae > 3.5 %}
1. Appliquez des révisions de dépendances à vos demandes de tirage. {% endif %}

1. Évaluez l’impact de cette vulnérabilité sur votre code et décidez quelle action effectuer.

### Génération automatique de l’inventaire

Pour commencer, vous souhaitez effectuer un inventaire complet de vos dépendances. Le graphe de dépendances d’un dépôt affiche les dépendances pour les écosystèmes pris en charge. Si vous archivez vos dépendances ou utilisez d’autres écosystèmes, vous devez le compléter avec des données provenant d’outils tiers ou en listant les dépendances manuellement. Pour plus d’informations, consultez « [À propos du graphe de dépendances](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph) ».

### Détection automatique des vulnérabilités dans les dépendances

{% data variables.product.prodname_dependabot %} peut vous aider en supervisant vos dépendances et en vous avertissant quand elles contiennent une vulnérabilité connue. {% ifversion fpt or ghec or ghes %}Vous pouvez même activer {% data variables.product.prodname_dependabot %} pour déclencher automatiquement des demandes de tirage qui mettent à jour la dépendance vers une version sécurisée.{% endif %} Pour plus d’informations, consultez « [À propos des {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts) »{% ifversion fpt or ghec or ghes %} et « [À propos des mises à jour de sécurité Dependabot](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-dependabot-security-updates) »{% endif %}.
{% ifversion fpt or ghec or ghes > 3.5 or ghae > 3.5 %}
### Détection automatique des vulnérabilités dans les demandes de tirage

Le {% data variables.product.prodname_dependency_review_action %} applique une révision des dépendances à vos demandes de tirage, ce qui vous permet de déterminer facilement si une demande de tirage introduit une version vulnérable d’une dépendance dans votre référentiel. Quand une vulnérabilité est détectée, {% data variables.product.prodname_dependency_review_action %} peut bloquer la fusion de la demande de tirage. Pour plus d’informations, consultez « [Application de la révision des dépendances](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review#dependency-review-enforcement) ».{% endif %} 
    

### Évaluation de l’exposition au risque d’une dépendance vulnérable

Quand vous découvrez que vous utilisez une dépendance vulnérable, par exemple, une bibliothèque ou un framework, vous devez évaluer le niveau d’exposition de votre projet et déterminer quelle action effectuer. Les vulnérabilités sont généralement signalées avec un score de gravité qui donne une idée de leur impact potentiel. Le score de gravité est un guide utile, mais ne peut pas vous indiquer l’impact complet de la vulnérabilité sur votre code.

Pour évaluer l’impact d’une vulnérabilité sur votre code, vous devez également prendre en compte la façon dont vous utilisez la bibliothèque et déterminer dans quelle mesure cela pose réellement un risque pour votre système. Peut-être que la vulnérabilité fait partie d’une fonctionnalité que vous n’utilisez pas et que vous pouvez mettre à jour la bibliothèque affectée et continuer avec votre cycle de publication normal. Ou peut-être que votre code est trop exposé au risque et que vous devez mettre à jour la bibliothèque affectée et diffuser immédiatement une build mise à jour. Cette décision dépend de la façon dont vous utilisez la bibliothèque dans votre système et seul vous êtes à même de la prendre.

## Sécuriser vos jetons de communication

Le code doit souvent communiquer avec d’autres systèmes sur un réseau et nécessite des secrets (comme un mot de passe ou une clé API) pour s’authentifier. Votre système a besoin d’accéder à ces secrets pour s’exécuter, mais il est recommandé de ne pas les inclure dans votre code source. C’est particulièrement important pour les dépôts auxquels de nombreuses personnes pourraient avoir accès{% ifversion not ghae %} et critique pour les dépôts publics{% endif %}.

### Détection automatique des secrets commités dans un dépôt

{% note %}

**Remarque :** {% data reusables.gated-features.secret-scanning-partner %}

{% endnote %}

{% data reusables.secret-scanning.enterprise-enable-secret-scanning %}

{% ifversion fpt or ghec %} {% data variables.product.prodname_dotcom %} collabore avec de nombreux fournisseurs pour détecter automatiquement quand les secrets sont commités ou stockés dans vos dépôts publics et avertit le fournisseur afin qu’il puisse prendre les mesures appropriées pour garantir la sécurité de votre compte. Pour plus d’informations, consultez « [À propos de l’{% data variables.product.prodname_secret_scanning %}](/code-security/secret-scanning/about-secret-scanning#about-secret-scanning-for-partner-patterns) pour les modèles de partenaires ».
{% endif %}

{% ifversion fpt %} {% data reusables.secret-scanning.fpt-GHAS-scans %} {% elsif ghec %} Si votre organisation utilise {% data variables.product.prodname_GH_advanced_security %}, vous pouvez activer l’{% data variables.product.prodname_secret_scanning_GHAS %} sur n’importe quel dépôt appartenant à l’organisation. Vous pouvez également définir des modèles personnalisés pour détecter des secrets supplémentaires au niveau du dépôt, de l’organisation ou de l’entreprise. Pour plus d’informations, consultez « [À propos de l’{% data variables.product.prodname_secret_scanning_GHAS %}](/code-security/secret-scanning/about-secret-scanning#about-secret-scanning-for-advacned-security) ».
{% else %} Vous pouvez configurer l’{% data variables.product.prodname_secret_scanning %} pour rechercher les secrets émis par de nombreux fournisseurs de services et être averti quand des secrets sont détectés. Vous pouvez également définir des modèles personnalisés pour détecter des secrets supplémentaires au niveau du dépôt, de l’organisation ou de l’entreprise. Pour plus d’informations, consultez « [À propos de l’analyse des secrets](/code-security/secret-scanning/about-secret-scanning) » et « [Modèles d’analyse des secrets](/code-security/secret-scanning/secret-scanning-patterns) ».
{% endif %}

### Stockage sécurisé des secrets que vous utilisez dans {% data variables.product.product_name %}

{% ifversion fpt or ghec %} Il est probable que vous deviez utiliser des secrets ailleurs que dans votre code. Par exemple, pour autoriser les workflows {% data variables.product.prodname_actions %}, {% data variables.product.prodname_dependabot %} ou votre environnement de développement {% data variables.product.prodname_github_codespaces %} à communiquer avec d’autres systèmes. Pour plus d’informations sur la façon de stocker et d’utiliser des secrets de manière sécurisée, consultez « [Secrets chiffrés dans les actions](/actions/security-guides/encrypted-secrets) », « [Gestion des secrets chiffrés pour Dependabot](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-encrypted-secrets-for-dependabot) » et « [Gestion des secrets chiffrés pour vos codespaces](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces) ».
{% endif %}

{% ifversion ghes or ghae %} Vous devez probablement utiliser des secrets ailleurs que dans votre code. Par exemple, pour autoriser les workflows {% data variables.product.prodname_actions %}{% ifversion ghes %} ou {% data variables.product.prodname_dependabot %}{% endif %} à communiquer avec d’autres systèmes. Pour plus d’informations sur la façon de stocker et d’utiliser des secrets de manière sécurisée, consultez « [Secrets chiffrés dans les actions](/actions/security-guides/encrypted-secrets){% ifversion ghes %} » et « [Gestion des secrets chiffrés pour Dependabot](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-encrypted-secrets-for-dependabot). »{% else %}.»{% endif %} {% endif %}

## Conserver les modèles de codage vulnérables hors de votre dépôt

{% note %}

**Remarque :** {% data reusables.gated-features.code-scanning %}

{% endnote %}

{% data reusables.code-scanning.enterprise-enable-code-scanning %}

### Créer un processus de révision de demande de tirage

Vous pouvez améliorer la qualité et la sécurité de votre code en vous assurant que toutes les demandes de tirage sont révisées et testées avant qu’elles ne soient fusionnées. {% data variables.product.prodname_dotcom %} a de nombreuses fonctionnalités que vous pouvez utiliser pour contrôler le processus de révision et de fusion. Pour commencer, consultez « [À propos des branches protégées](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches) ».

### Rechercher les modèles vulnérables dans votre code

Il est souvent difficile pour les réviseurs de repérer sans assistance les modèles de code non sécurisés. En plus de rechercher les secrets dans votre code, vous pouvez vérifier s’il contient des modèles associés à des vulnérabilités de sécurité. Par exemple, une fonction qui n’est pas sécurisée au niveau de la mémoire ou qui ne parvient pas à placer dans une séquence d’échappement une entrée utilisateur susceptible d’entraîner une vulnérabilité d’injection. {% data variables.product.prodname_dotcom %} offre plusieurs approches pour déterminer comment et quand analyser votre code. Pour commencer, consultez « [À propos de l’analyse du code](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning) ».

## Étapes suivantes

- « [Sécurisation de votre chaîne d’approvisionnement de bout en bout](/code-security/supply-chain-security/end-to-end-supply-chain/end-to-end-supply-chain-overview) »

- « [Bonnes pratiques pour sécuriser les comptes](/code-security/supply-chain-security/end-to-end-supply-chain/securing-accounts) »

- « [Bonnes pratiques pour sécuriser votre système de génération](/code-security/supply-chain-security/end-to-end-supply-chain/securing-builds) »
