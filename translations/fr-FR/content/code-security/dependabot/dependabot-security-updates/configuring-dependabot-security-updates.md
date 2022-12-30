---
title: Configuration des mises à jour de sécurité Dependabot
intro: 'Vous pouvez utiliser {% data variables.product.prodname_dependabot_security_updates %} ou des demandes de tirage manuel pour mettre facilement à jour les dépendances vulnérables.'
shortTitle: Configure security updates
redirect_from:
  - /articles/configuring-automated-security-fixes
  - /github/managing-security-vulnerabilities/configuring-automated-security-fixes
  - /github/managing-security-vulnerabilities/configuring-automated-security-updates
  - /github/managing-security-vulnerabilities/configuring-github-dependabot-security-updates
  - /github/managing-security-vulnerabilities/configuring-dependabot-security-updates
  - /code-security/supply-chain-security/configuring-dependabot-security-updates
  - /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/configuring-dependabot-security-updates
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Dependabot
  - Security updates
  - Alerts
  - Dependencies
  - Pull requests
  - Repositories
ms.openlocfilehash: 49db730fb0830dc59a5cead63068eb1fb5add14d
ms.sourcegitcommit: f5ec7f52d2945ba8b7c14f8f604e4784a8feda19
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/22/2022
ms.locfileid: '148180768'
---
<!--Marketing-LINK: From home page "Learn more about Dependabot".-->

{% data reusables.dependabot.beta-security-and-version-updates %} {% data reusables.dependabot.enterprise-enable-dependabot %}

## À propos de la configuration des {% data variables.product.prodname_dependabot_security_updates %}

Vous pouvez activer les {% data variables.product.prodname_dependabot_security_updates %} pour un dépôt, ou pour tous les dépôts appartenant à votre compte personnel ou à l’organisation. Vous pouvez activer les {% data variables.product.prodname_dependabot_security_updates %} pour n’importe quel dépôt qui utilise les {% data variables.product.prodname_dependabot_alerts %} et le graphe de dépendances. Pour plus d’informations, consultez « [À propos des {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates) ».

Vous pouvez désactiver {% data variables.product.prodname_dependabot_security_updates %} pour un dépôt individuel ou pour tous les dépôts appartenant à votre compte personnel ou organisation.

{% ifversion fpt or ghec %}{% data reusables.dependabot.dependabot-tos %}{% endif %}

## Dépôts pris en charge

{% data variables.product.prodname_dotcom %} active automatiquement les {% data variables.product.prodname_dependabot_security_updates %} pour les dépôts nouvellement créés si votre compte personnel ou votre organisation a coché **Activer automatiquement pour les nouveaux dépôts** pour les {% data variables.product.prodname_dependabot_security_updates %}. Pour plus d’informations, consultez « [Gestion des {% data variables.product.prodname_dependabot_security_updates %} pour vos dépôts](#managing-dependabot-security-updates-for-your-repositories) ». 

Si vous créez une duplication d’un dépôt où les mises à jour de sécurité sont activées, {% data variables.product.prodname_dotcom %} désactive automatiquement les {% data variables.product.prodname_dependabot_security_updates %} pour la duplication. Vous pouvez ensuite décider d’activer les {% data variables.product.prodname_dependabot_security_updates %} sur la duplication spécifique.

Si les mises à jour de sécurité ne sont pas activées pour votre dépôt et que vous ne savez pas pourquoi, essayez d’abord de les activer en utilisant les instructions fournies dans les sections procédurales ci-dessous. Si les mises à jour de sécurité ne fonctionnent toujours pas, vous pouvez contacter {% data variables.contact.contact_support %}.

## Gestion des {% data variables.product.prodname_dependabot_security_updates %} pour vos dépôts

Vous pouvez également activer ou désactiver les {% data variables.product.prodname_dependabot_security_updates %} pour tous les dépôts qualifiés appartenant à votre compte personnel ou votre organisation. Pour plus d’informations, consultez « [Gestion des paramètres de sécurité et d’analyse pour votre compte personnel](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/managing-security-and-analysis-settings-for-your-personal-account) » ou « [Gestion des paramètres de sécurité et d’analyse pour votre organisation](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization) ». 

Vous pouvez aussi activer ou désactiver les {% data variables.product.prodname_dependabot_security_updates %} pour un dépôt individuel.

### Activation ou désactivation des {% data variables.product.prodname_dependabot_security_updates %} pour un dépôt individuel

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %}
1. Sous « Sécurité et analyse du code », à droite de « Mises à jour de sécurité {% data variables.product.prodname_dependabot %} », cliquez sur **Activer** pour activer la fonctionnalité ou sur **Désactiver** pour la désactiver. {% ifversion fpt or ghec %}Pour les dépôts publics, le bouton est désactivé si la fonctionnalité est toujours activée.{% endif %} {% ifversion fpt or ghec %}![Capture d’écran de la section « Sécurité et analyse du code » avec le bouton pour activer les {% data variables.product.prodname_dependabot_security_updates %}](/assets/images/help/repository/security-and-analysis-disable-or-enable-fpt-private.png){% elsif ghes > 3.6 or ghae > 3.6 %}<!--Insert screenshot for GHES 3.7 when available--> {% else %}![Capture d’écran de la section « Sécurité et analyse du code » avec le bouton pour activer {% data variables.product.prodname_dependabot_security_updates %}](/assets/images/enterprise/3.3/repository/security-and-analysis-disable-or-enable-ghes.png){% endif %}

## Substitution du comportement par défaut avec un fichier de configuration

Vous pouvez remplacer le comportement par défaut de {% data variables.product.prodname_dependabot_security_updates %} en ajoutant un fichier dependabot.yml à votre référentiel. Pour plus d’informations, consultez « [Options de configuration pour le fichier dependabot.yml](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file) ». 

Si vous avez uniquement besoin de mises à jour de sécurité et que vous souhaitez exclure les mises à jour de version, vous pouvez définir `open-pull-requests-limit` sur `0` pour empêcher les mises à jour de version pour une version donnée `package-ecosystem`. Pour plus d’informations, consultez « [`open-pull-requests-limit`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#open-pull-requests-limit) ».

```
# Example configuration file that:
#  - Ignores lodash dependency
#  - Disables version-updates

version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
    ignore:
      - dependency-name: "lodash"
        # For Lodash, ignore all updates
    # Disable version updates for npm dependencies
    open-pull-requests-limit: 0
```

Pour plus d’informations sur les options de configuration disponibles pour les mises à jour de sécurité, consultez le tableau dans « [Options de configuration pour le fichier dependabot.yml](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#configuration-options-for-the-dependabotyml-file) ».

## Pour aller plus loin

- « [À propos de {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies) »
- « [Configuration des {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/configuring-dependabot-alerts) »{% ifversion fpt or ghec %}
- « [Gestion des paramètres d’utilisation des données pour votre dépôt privé](/get-started/privacy-on-github/managing-data-use-settings-for-your-private-repository) »{% endif %}
- « [Écosystèmes de packages pris en charge](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#supported-package-ecosystems) »
