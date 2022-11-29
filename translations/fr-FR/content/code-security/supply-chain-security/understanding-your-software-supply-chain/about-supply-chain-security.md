---
title: À propos de la sécurité de la chaîne d’approvisionnement
intro: '{% data variables.product.product_name %} vous aide à sécuriser votre chaîne d’approvisionnement, en comprenant les dépendances de votre environnement et en connaissant les vulnérabilités de ces dépendances{% ifversion fpt or ghec or ghes %}, puis en les corrigeant{% endif %}.'
miniTocMaxHeadingLevel: 3
shortTitle: Supply chain security
redirect_from:
  - /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Advanced Security
  - Dependency review
  - Dependency graph
  - Vulnerabilities
  - Dependencies
  - Pull requests
  - Repositories
ms.openlocfilehash: d0f743db7d1f5a054a3eb8c7b4dbf81052aca50f
ms.sourcegitcommit: cfe91073c844cb762131b2de9fb41f7f9db792fc
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/24/2022
ms.locfileid: '148181235'
---
## À propos de la sécurité de la chaîne d’approvisionnement chez GitHub

Avec l’utilisation accélérée de l’open source, la plupart des projets dépendent de centaines de dépendances open source. Cela pose un problème de sécurité : que se passe-t-il si les dépendances que vous utilisez sont vulnérables ? Vous pourriez faire courir à vos utilisateurs le risque d’une attaque de chaîne d’approvisionnement. L’une des choses les plus importantes que vous puissiez faire pour protéger votre chaîne d’approvisionnement est de corriger vos dépendances vulnérables{% ifversion GH-advisory-db-supports-malware %} et de remplacer tout logiciel malveillant{% endif %}.

Vous ajoutez les dépendances directement à votre chaîne d’approvisionnement quand vous les spécifiez dans un fichier manifeste ou un fichier de verrouillage. Les dépendances peuvent également être incluses transitivement ; même si vous ne spécifiez pas une dépendance particulière, mais qu’une de vos dépendances l’utilise, vous êtes également dépendant de cette dépendance.

{% data variables.product.product_name %} offre une gamme de fonctionnalités pour vous aider à comprendre les dépendances dans votre environnement{% ifversion ghae %} et à connaître les vulnérabilités dans ces dépendances{% endif %}{% ifversion fpt or ghec or ghes %}, à connaître les vulnérabilités dans ces dépendances et à les corriger{% endif %}. 

Les fonctionnalités de la chaîne d’approvisionnement sur {% data variables.product.product_name %} sont les suivantes :
- **Graphe de dépendances**
- **Vérification des dépendances**
- **{% data variables.product.prodname_dependabot_alerts %} ** {% ifversion fpt or ghec or ghes %}- **{% data variables.product.prodname_dependabot_updates %}**
  - **{% data variables.product.prodname_dependabot_security_updates %}**
  - **{% data variables.product.prodname_dependabot_version_updates %}** {% endif %}

Le graphe de dépendances joue un rôle essentiel pour la sécurité de la chaîne d’approvisionnement. Le graphe de dépendances identifie toutes les dépendances en amont et les éléments dépendants en aval publics d’un dépôt ou d’un package. Vous pouvez voir les dépendances de votre dépôt et certaines de leurs propriétés, telles que les informations sur les vulnérabilités, sur le graphe de dépendances du dépôt. 

D’autres fonctionnalités de chaîne d’approvisionnement sur {% data variables.product.prodname_dotcom %} reposent sur les informations fournies par le graphe de dépendances.

- La révision des dépendances utilise le graphe de dépendances pour identifier les modifications de dépendance et vous aider à comprendre l’impact de ces modifications sur la sécurité quand vous passez en revue les demandes de tirage (pull request).
- {% data variables.product.prodname_dependabot %} croise les données de dépendance fournies par le graphe de dépendances avec la liste des vulnérabilités connues publiées dans la {% data variables.product.prodname_advisory_database %}, analyse vos dépendances et génère des {% data variables.product.prodname_dependabot_alerts %} lors de la détection d’une vulnérabilité potentielle{% ifversion GH-advisory-db-supports-malware %} ou d’un logiciel malveillant{% endif %}.
{% ifversion fpt or ghec or ghes %}- Les {% data variables.product.prodname_dependabot_security_updates %} utilisent le graphe de dépendances et les {% data variables.product.prodname_dependabot_alerts %} pour vous aider à mettre à jour les dépendances ayant des vulnérabilités connues dans votre dépôt.

Les {% data variables.product.prodname_dependabot_version_updates %} n’utilisent pas le graphe de dépendances et s’appuient plutôt sur le versioning sémantique des dépendances. Les {% data variables.product.prodname_dependabot_version_updates %} vous aident à maintenir vos dépendances mises à jour, même quand elles n’ont pas de vulnérabilités.
{% endif %}

{% ifversion fpt or ghec or ghes %} Pour obtenir des guides de bonnes pratiques sur la sécurité de la chaîne d’approvisionnement de bout en bout, y compris la protection des comptes personnels, du code et des processus de génération, consultez « [Sécurisation de votre chaîne d’approvisionnement de bout en bout](/code-security/supply-chain-security/end-to-end-supply-chain/end-to-end-supply-chain-overview) ».
{% endif %}

## Présentation des fonctionnalités

### Qu’est-ce que le graphe de dépendances ?

Pour générer le graphe de dépendances, {% data variables.product.company_short %} examine les dépendances explicites d’un dépôt déclarées dans le manifeste et les fichiers de verrouillage. Quand il est activé, le graphe de dépendances analyse automatiquement tous les fichiers manifestes de package connus dans le dépôt, puis, à partir des informations recueillies, construit un graphe avec les noms et les versions de dépendances connues.

- Le graphe de dépendances inclut des informations sur vos dépendances _directes_ et vos dépendances _transitives_. 
- Le graphe de dépendances est automatiquement mis à jour quand vous poussez (push) un commit vers {% data variables.product.company_short %} qui change ou ajoute un manifeste ou un fichier de verrouillage pris en charge à la branche par défaut et quand toute personne pousse une modification vers le dépôt de l’une de vos dépendances.
- Vous pouvez voir le graphe de dépendances en ouvrant la page principale du dépôt sur {% data variables.product.product_name %}, puis en accédant à l’onglet **Insights**.

{% ifversion dependency-submission-api %} {% data reusables.dependency-submission.dependency-submission-link %} {% endif %}

Pour plus d’informations sur le graphe de dépendances, consultez « [À propos du graphe de dépendances](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph) ».

### Qu’est-ce que la révision des dépendances ?

La révision des dépendances aide les réviseurs et les contributeurs à comprendre les modifications de dépendance et leur impact sur la sécurité dans chaque demande de tirage. 

- La révision des dépendances vous indique quelles dépendances ont été ajoutées, supprimées ou mises à jour, dans une demande de tirage. Vous pouvez utiliser les dates de publication, la popularité des dépendances et les informations de vulnérabilité pour vous aider à décider s’il faut accepter la modification.
- Vous pouvez voir la révision des dépendances pour une demande de tirage en affichant la différence enrichie sous l’onglet **Fichiers modifiés**.

Pour plus d’informations sur la révision des dépendances, consultez « [À propos de la révision des dépendances](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review) ».

### Qu’est-ce que Dependabot ?

{% data variables.product.prodname_dependabot %} maintient vos dépendances à jour en vous informant des vulnérabilités de sécurité dans vos dépendances{% ifversion fpt or ghec or ghes %} et ouvre automatiquement les demandes de tirage pour mettre à niveau vos dépendances vers la prochaine version sécurisée disponible quand une alerte {% data variables.product.prodname_dependabot %} est déclenchée, ou vers la dernière version quand une mise en production est publiée{% else %} afin que vous puissiez mettre à jour cette dépendance{% endif %}.

{% ifversion fpt or ghec or ghes %} Le terme « {% data variables.product.prodname_dependabot %} » englobe les fonctionnalités suivantes :
- {% data variables.product.prodname_dependabot_alerts %} : notification affichée sous l’onglet **Sécurité** du dépôt et dans le graphe de dépendances du dépôt. L’alerte contient un lien vers le fichier affecté dans le projet et des informations sur une version corrigée.
- {% data variables.product.prodname_dependabot_updates %} :
   - {% data variables.product.prodname_dependabot_security_updates %} : mises à jour déclenchées pour mettre à niveau vos dépendances vers une version sécurisée quand une alerte est déclenchée.
   - {% data variables.product.prodname_dependabot_version_updates %} : mises à jour planifiées pour maintenir vos dépendances à jour avec la dernière version.

{% endif %}

{% ifversion fpt or ghec %}

Les {% data variables.product.prodname_dependabot_alerts %}, les {% data variables.product.prodname_dependabot_security_updates %} et les {% data variables.product.prodname_dependabot_version_updates %} n’utilisent pas {% data variables.product.prodname_actions %} quand elles s’exécutent sur {% data variables.product.product_name %}. Toutefois, les demandes de tirage ouvertes par {% data variables.product.prodname_dependabot %} peuvent déclencher des workflows qui exécutent des actions. Pour plus d’informations, consultez « [Automatisation de {% data variables.product.prodname_dependabot %} avec {% data variables.product.prodname_actions %}](/code-security/dependabot/working-with-dependabot/automating-dependabot-with-github-actions) ».

{% elsif ghes %}

Les {% data variables.product.prodname_dependabot_security_updates %} et les {% data variables.product.prodname_dependabot_version_updates %} nécessitent que {% data variables.product.prodname_actions %} s’exécute sur {% data variables.product.product_name %}. Les {% data variables.product.prodname_dependabot_alerts %} ne nécessitent pas {% data variables.product.prodname_actions %}. Pour plus d’informations, consultez « [Activation de {% data variables.product.prodname_dependabot %} pour votre entreprise](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise) ».

{% elsif ghae %}

{% data variables.product.prodname_actions %} n’est pas nécessaire pour que les {% data variables.product.prodname_dependabot_alerts %} s’exécutent sur {% data variables.product.product_name %}.

{% endif %}

{% ifversion dependabot-actions-support %}

{% data reusables.dependabot.dependabot-actions-support %} Pour plus d’informations, consultez « [À propos des {% data variables.product.prodname_dependabot_security_updates %}](/code-security/dependabot/dependabot-security-updates/about-dependabot-security-updates) ».

{% endif %}

#### Qu’est-ce que les alertes Dependabot ?

Les {% data variables.product.prodname_dependabot_alerts %} mettent en évidence les dépôts affectés par une vulnérabilité nouvellement découverte en fonction du graphe de dépendances et de la {% data variables.product.prodname_advisory_database %}, qui contient les versions sur les listes de vulnérabilités{% ifversion GH-advisory-db-supports-malware %} et programmes malveillants{% endif %}. 

- {% data variables.product.prodname_dependabot %} effectue une analyse pour détecter les dépendances non sécurisées et émet des {% data variables.product.prodname_dependabot_alerts %} quand :{% ifversion fpt or ghec %}
   - Un nouvel avis est ajouté à la {% data variables.product.prodname_advisory_database %}.{% else %}
   - Les nouvelles données d’avis sont synchronisées sur {% data variables.location.product_location %} toutes les heures à partir de {% data variables.product.prodname_dotcom_the_website %}. {% data reusables.security-advisory.link-browsing-advisory-db %}{% endif %}
   - Le graphe de dépendances d’un dépôt change. 
- Les {% data variables.product.prodname_dependabot_alerts %} sont affichées {% ifversion fpt or ghec or ghes %} sous l’onglet **Sécurité** du dépôt et{% endif %} dans le graphe de dépendances du dépôt. L’alerte inclut {% ifversion fpt or ghec or ghes %}un lien vers le fichier affecté dans le projet et {% endif %}des informations sur une version corrigée.

Pour plus d’informations, consultez « [À propos des {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-alerts-for-vulnerable-dependencies) ».

{% ifversion fpt or ghec or ghes %}
#### Qu’est-ce que les mises à jour Dependabot ?

Il existe deux types de {% data variables.product.prodname_dependabot_updates %} : les mises à jour de _version_ et les mises à jour de _sécurité_ {% data variables.product.prodname_dependabot %}. {% data variables.product.prodname_dependabot %} génère des demandes de tirage automatiques pour mettre à jour vos dépendances dans les deux cas, mais il existe plusieurs différences.

{% data variables.product.prodname_dependabot_security_updates %} :
 - Déclenchées par une alerte {% data variables.product.prodname_dependabot %}
 - Mettent à jour les dépendances vers la version minimale qui résout une vulnérabilité connue
 - Prises en charge pour les écosystèmes pris en charge par le graphe de dépendances
 - Ne nécessite pas de fichier de configuration, mais vous pouvez en utiliser un pour remplacer le comportement par défaut
 
{% data variables.product.prodname_dependabot_version_updates %} :
 - Requiert un fichier de configuration
 - Exécutées selon une planification que vous configurez
 - Mettent à jour les dépendances vers la dernière version qui correspond à la configuration
 - Prises en charge pour un autre groupe d’écosystèmes

Pour plus d’informations sur les {% data variables.product.prodname_dependabot_updates %}, consultez « [À propos des {% data variables.product.prodname_dependabot_security_updates %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-dependabot-security-updates) » et « [À propos des {% data variables.product.prodname_dependabot_version_updates %}](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/about-dependabot-version-updates) ».
{% endif %}

## Disponibilité des fonctionnalités

{% ifversion fpt or ghec %}

Dépôts publics :
- **Graphe de dépendances** : activé par défaut et ne peut pas être désactivé.
- **Révision des dépendances** : activée par défaut et ne peut pas être désactivée.
- **{% data variables.product.prodname_dependabot_alerts %}**  : non activées par défaut. {% data variables.product.prodname_dotcom %} détecte les dépendances non sécurisées et affiche des informations dans le graphe de dépendances, mais ne génère pas d’{% data variables.product.prodname_dependabot_alerts %} par défaut. Les propriétaires de dépôts ou les personnes disposant d’un accès administrateur peuvent activer les {% data variables.product.prodname_dependabot_alerts %}. 
  Vous pouvez également activer ou désactiver les alertes Dependabot pour tous les dépôts appartenant à votre compte d’utilisateur ou organisation. Pour plus d’informations, consultez « [Gestion des paramètres de sécurité et d’analyse pour votre compte d’utilisateur](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/managing-security-and-analysis-settings-for-your-personal-account) » ou « [Gestion des paramètres de sécurité et d’analyse pour votre organisation](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-security-and-analysis-settings-for-your-organization) ».

Dépôts privés :
- **Graphe de dépendances** : non activé par défaut. La fonctionnalité peut être activée par les administrateurs de dépôt. Pour plus d’informations, consultez « [Exploration des dépendances d’un dépôt](/code-security/supply-chain-security/understanding-your-software-supply-chain/exploring-the-dependencies-of-a-repository#enabling-and-disabling-the-dependency-graph-for-a-private-repository) ».
{% ifversion fpt %}
- **Révision des dépendances** : disponible dans les dépôts privés appartenant aux organisations qui utilisent {% data variables.product.prodname_ghe_cloud %} et qui disposent d’une licence pour {% data variables.product.prodname_GH_advanced_security %}. Pour plus d’informations, consultez la [documentation {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review).
{% elsif ghec %}
- **Révision des dépendances** : disponible dans les dépôts privés appartenant aux organisations, sous réserve que vous disposiez d’une licence pour {% data variables.product.prodname_GH_advanced_security %} et que le graphe de dépendances soit activé. Pour plus d’informations, consultez « [À propos de {% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security) » et « [Exploration des dépendances d’un dépôt](/code-security/supply-chain-security/understanding-your-software-supply-chain/exploring-the-dependencies-of-a-repository#enabling-and-disabling-the-dependency-graph-for-a-private-repository) ». {% endif %}
- **{% data variables.product.prodname_dependabot_alerts %}**  : non activées par défaut. Les propriétaires de dépôts privés ou les personnes disposant d’un accès administrateur peuvent activer les {% data variables.product.prodname_dependabot_alerts %} en activant le graphe de dépendances et les {% data variables.product.prodname_dependabot_alerts %} pour leurs dépôts.
  Vous pouvez également activer ou désactiver les alertes Dependabot pour tous les dépôts appartenant à votre compte d’utilisateur ou organisation. Pour plus d’informations, consultez « [Gestion des paramètres de sécurité et d’analyse pour votre compte d’utilisateur](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/managing-security-and-analysis-settings-for-your-personal-account) » ou « [Gestion des paramètres de sécurité et d’analyse pour votre organisation](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-security-and-analysis-settings-for-your-organization) ».

Tout type de dépôt :
- **{% data variables.product.prodname_dependabot_security_updates %}**  : non activées par défaut. Vous pouvez activer les {% data variables.product.prodname_dependabot_security_updates %} pour n’importe quel dépôt qui utilise les {% data variables.product.prodname_dependabot_alerts %} et le graphe de dépendances. Pour plus d’informations sur l’activation des mises à jour de sécurité, consultez « [Configuration des {% data variables.product.prodname_dependabot_security_updates %}](/code-security/dependabot/dependabot-security-updates/configuring-dependabot-security-updates) ».
- **{% data variables.product.prodname_dependabot_version_updates %}**  : non activées par défaut. Les personnes disposant d’autorisations d’écriture sur un dépôt peuvent activer les {% data variables.product.prodname_dependabot_version_updates %}. Pour obtenir des informations sur l’activation des mises à jour de version, consultez « [Configuration de {% data variables.product.prodname_dependabot_version_updates %}](/code-security/dependabot/dependabot-version-updates/configuring-dependabot-version-updates) ».
{% endif %}

{% ifversion ghes or ghae %}
- **Graphe de dépendances** et **{% data variables.product.prodname_dependabot_alerts %}**  : non activés par défaut. Les deux fonctionnalités sont configurées au niveau de l’entreprise par le propriétaire de l’entreprise. Pour plus d’informations, consultez {% ifversion ghes %}« [Activation du graphe de dépendances pour votre entreprise](/admin/code-security/managing-supply-chain-security-for-your-enterprise/enabling-the-dependency-graph-for-your-enterprise) » et {% endif %}« [Activation de {% data variables.product.prodname_dependabot %} pour votre entreprise](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise) ».
- **Révision des dépendances** : disponible quand le graphe de dépendances est activé pour {% data variables.location.product_location %} et qu’{% data variables.product.prodname_advanced_security %} est activé pour l’organisation ou le dépôt. Pour plus d’informations, consultez « [À propos de {% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security) ».
{% endif %} {% ifversion ghes %}
- **{% data variables.product.prodname_dependabot_security_updates %}**  : non activées par défaut. Vous pouvez activer les {% data variables.product.prodname_dependabot_security_updates %} pour n’importe quel dépôt qui utilise les {% data variables.product.prodname_dependabot_alerts %} et le graphe de dépendances. Pour plus d’informations sur l’activation des mises à jour de sécurité, consultez « [Configuration des {% data variables.product.prodname_dependabot_security_updates %}](/code-security/dependabot/dependabot-security-updates/configuring-dependabot-security-updates) ».
- **{% data variables.product.prodname_dependabot_version_updates %}**  : non activées par défaut. Les personnes disposant d’autorisations d’écriture sur un dépôt peuvent activer les {% data variables.product.prodname_dependabot_version_updates %}. Pour obtenir des informations sur l’activation des mises à jour de version, consultez « [Configuration de {% data variables.product.prodname_dependabot_version_updates %}](/code-security/dependabot/dependabot-version-updates/configuring-dependabot-version-updates) ».
{% endif %}
