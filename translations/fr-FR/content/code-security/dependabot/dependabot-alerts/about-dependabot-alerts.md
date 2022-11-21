---
title: À propos des alertes Dependabot
intro: '{% data variables.product.product_name %} envoie des {% data variables.product.prodname_dependabot_alerts %} lorsque nous détectons que votre référentiel utilise une dépendance vulnérable{% ifversion GH-advisory-db-supports-malware %} ou un logiciel malveillant{% endif %}.'
redirect_from:
  - /articles/about-security-alerts-for-vulnerable-dependencies
  - /github/managing-security-vulnerabilities/about-security-alerts-for-vulnerable-dependencies
  - /github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies
  - /code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies
  - /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-alerts-for-vulnerable-dependencies
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Dependabot
  - Alerts
  - Vulnerabilities
  - Repositories
  - Dependencies
shortTitle: Dependabot alerts
ms.openlocfilehash: 737e5547e3aefd6b5c49780df0c78cdc73292ee4
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106740'
---
<!--Marketing-LINK: From /features/security/software-supply-chain page "About alerts for vulnerable dependencies ".-->

## À propos des {% data variables.product.prodname_dependabot_alerts %}

{% ifversion GH-advisory-db-supports-malware %} {% data reusables.advisory-database.beta-malware-advisories %} {% endif %}

Les {% data variables.product.prodname_dependabot_alerts %} vous indiquent que votre code dépend d’un package non sécurisé.

Si votre code dépend d’un package qui a une vulnérabilité de sécurité, cela peut entraîner un éventail de problèmes pour votre projet ou les personnes qui l’utilisent. Vous devez mettre à niveau vers une version sécurisée du package dès que possible.{% ifversion GH-advisory-db-supports-malware %} Si votre code utilise des programmes malveillants, vous devez remplacer le package par une alternative sécurisée.{% endif %}

{% data reusables.security-advisory.link-browsing-advisory-db %}

## Détection des dépendances non sécurisées

{% data reusables.dependabot.dependabot-alerts-beta %}

{% data variables.product.prodname_dependabot %} effectue une analyse pour détecter les dépendances non sécurisées et émet des {% data variables.product.prodname_dependabot_alerts %} quand :

{% ifversion fpt or ghec %}
- Un nouvel avis est ajouté à la {% data variables.product.prodname_advisory_database %}. Pour plus d’informations, consultez « [Exploration des avis de sécurité dans la {% data variables.product.prodname_advisory_database %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/browsing-security-vulnerabilities-in-the-github-advisory-database) ».{% else %}
- Les nouvelles données d’avis sont synchronisées sur {% data variables.location.product_location %} toutes les heures à partir de {% data variables.product.prodname_dotcom_the_website %}. {% data reusables.security-advisory.link-browsing-advisory-db %}{% endif %} {% note %}

  **Remarque :** Seuls les avis qui ont été révisés par {% data variables.product.company_short %} déclenchent des {% data variables.product.prodname_dependabot_alerts %}.

  {% endnote %}
- Le graphe des dépendances d’un dépôt change. C’est par exemple le cas quand un contributeur pousse (push) un commit pour changer les packages ou les versions dont il dépend{% ifversion fpt or ghec %} ou quand le code de l’une des dépendances change{% endif %}. Pour plus d’informations, consultez « [À propos du graphe de dépendances](/code-security/supply-chain-security/about-the-dependency-graph) ».

{% data reusables.repositories.dependency-review %}

Pour obtenir la liste des écosystèmes dont {% data variables.product.product_name %} peut détecter les dépendances non sécurisées, consultez « [Écosystèmes de package pris en charge](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#supported-package-ecosystems) ».

{% note %}

**Remarque :** Il est important de tenir à jour vos fichiers manifeste et de verrouillage. Si le graphe de dépendances ne reflète pas précisément vos dépendances et versions actuelles, vous pouvez manquer des alertes pour les dépendances non sécurisées que vous utilisez. Vous pouvez également obtenir des alertes pour des dépendances que vous n’utilisez plus.

{% endnote %}

##  Configuration de {% data variables.product.prodname_dependabot_alerts %}

{% data reusables.repositories.enable-security-alerts %}

{% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %} détecte les dépendances vulnérables et programmes malveillants dans les dépôts _publics_ et affiche le graphe de dépendances, mais ne génère pas d’{% data variables.product.prodname_dependabot_alerts %} par défaut. Les propriétaires de dépôts ou les personnes disposant d’un accès administrateur peuvent activer les {% data variables.product.prodname_dependabot_alerts %} pour les dépôts publics. Les propriétaires de dépôts privés ou les personnes disposant d’un accès administrateur peuvent activer les {% data variables.product.prodname_dependabot_alerts %} en activant le graphe de dépendances et les {% data variables.product.prodname_dependabot_alerts %} pour leurs dépôts.

Vous pouvez également activer ou désactiver les {% data variables.product.prodname_dependabot_alerts %} pour tous les dépôts appartenant à votre compte d’utilisateur ou organisation. Pour plus d’informations, consultez « [Configuration des {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/configuring-dependabot-alerts) ».

Pour plus d’informations sur les exigences d’accès pour les actions liées aux {% data variables.product.prodname_dependabot_alerts %}, consultez « [Rôles de dépôt pour une organisation](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization#access-requirements-for-security-features) ».

{% data variables.product.product_name %} commence à générer le graphe de dépendances immédiatement et génère des alertes pour toutes les dépendances non sécurisées dès qu’elles sont identifiées. Le graphe est généralement rempli en quelques minutes, mais cela peut prendre plus de temps pour les dépôts avec de nombreuses dépendances. Pour plus d’informations, consultez « [Gestion des paramètres d’utilisation des données pour votre dépôt privé](/get-started/privacy-on-github/managing-data-use-settings-for-your-private-repository) ».
{% endif %}

Quand {% data variables.product.product_name %} identifie une dépendance vulnérable{% ifversion GH-advisory-db-supports-malware %} ou un logiciel malveillant{% endif %}, nous générons une alerte {% data variables.product.prodname_dependabot %} et l’affichons {% ifversion fpt or ghec or ghes %} sous l’onglet Sécurité du dépôt et{% endif %} dans le graphe de dépendances du dépôt. L’alerte inclut {% ifversion fpt or ghec or ghes %}un lien vers le fichier affecté dans le projet et {% endif %}des informations sur une version corrigée. {% data variables.product.product_name %} peut également avertir les chargés de maintenance des dépôts affectés de la nouvelle alerte en fonction de leurs préférences de notification. Pour plus d’informations, consultez « [Configuration des notifications pour {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/configuring-notifications-for-dependabot-alerts) ».

{% ifversion fpt or ghec or ghes %} Pour les dépôts où les {% data variables.product.prodname_dependabot_security_updates %} sont activées, l’alerte peut également contenir un lien vers une demande de tirage afin de mettre à jour le fichier manifeste ou de verrouillage vers la version minimale qui résout la vulnérabilité. Pour plus d’informations, consultez « [À propos des {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates) ».
{% endif %}

{% warning %}

**Remarque** : Les fonctions de sécurité de {% data variables.product.product_name %} ne prétendent pas détecter toutes les vulnérabilités{% ifversion GH-advisory-db-supports-malware %} et tous les programmes malveillants{% endif %}. Nous maintenons activement la {% data variables.product.prodname_advisory_database %} et générons des alertes avec les informations les plus récentes. Toutefois, nous ne pouvons pas tout intercepter ou vous informer des vulnérabilités connues dans un délai garanti. Ces fonctionnalités ne se substituent pas à un examen par des humains de chaque dépendance pour les vulnérabilités potentielles ou tout autre problème, et nous vous recommandons de consulter un service de sécurité ou d’effectuer un examen minutieux des dépendances quand cela est nécessaire.

{% endwarning %}

## Accès aux {% data variables.product.prodname_dependabot_alerts %}

Vous pouvez voir toutes les alertes qui affectent un projet particulier{% ifversion fpt or ghec %} sous l’onglet Sécurité du dépôt ou{% endif %} dans le graphe de dépendances du dépôt. Pour plus d’informations, consultez « [Affichage et mise à jour des {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts) ».

Par défaut, nous informons les personnes disposant d’autorisations d’administrateur dans les dépôts affectés sur les nouvelles {% data variables.product.prodname_dependabot_alerts %}. {% ifversion fpt or ghec %}{% data variables.product.product_name %} ne révèle jamais publiquement les dépendances non sécurisées pour un référentiel. Vous pouvez également rendre les {% data variables.product.prodname_dependabot_alerts %} visibles par d’autres personnes ou équipes travaillant sur des dépôts dont vous êtes propriétaire ou sur lesquels vous disposez d’autorisations d’administrateur. Pour plus d’informations, consultez « [Gestion des paramètres de sécurité et d’analyse pour votre dépôt](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts) ».
{% endif %}

{% data reusables.notifications.vulnerable-dependency-notification-enable %} {% data reusables.notifications.vulnerable-dependency-notification-delivery-method-customization2 %} Pour plus d’informations, consultez « [Configuration des notifications pour {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/configuring-notifications-for-dependabot-alerts) ».

Vous pouvez également voir toutes les {% data variables.product.prodname_dependabot_alerts %} qui correspondent à un avis particulier dans la {% data variables.product.prodname_advisory_database %}. {% data reusables.security-advisory.link-browsing-advisory-db %}

{% ifversion fpt or ghec or ghes %}
## Pour aller plus loin

- « [À propos des {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates) »
- « [Affichage et mise à jour des {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts) »{% endif %} {% ifversion fpt or ghec %}- « [Confidentialité sur {% data variables.product.prodname_dotcom %}](/get-started/privacy-on-github) »{% endif %}
