---
title: À propos des mises à jour de version Dependabot
intro: 'Vous pouvez utiliser {% data variables.product.prodname_dependabot %} pour maintenir les packages que vous utilisez à jour aux dernières versions.'
redirect_from:
  - /github/administering-a-repository/about-dependabot
  - /github/administering-a-repository/about-github-dependabot
  - /github/administering-a-repository/about-github-dependabot-version-updates
  - /github/administering-a-repository/about-dependabot-version-updates
  - /code-security/supply-chain-security/about-dependabot-version-updates
  - /code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/upgrading-from-dependabotcom-to-github-native-dependabot
  - /code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/about-dependabot-version-updates
versions:
  fpt: '*'
  ghec: '*'
  ghes: '> 3.2'
type: overview
topics:
  - Dependabot
  - Version updates
  - Repositories
  - Dependencies
  - Pull requests
shortTitle: Dependabot version updates
ms.openlocfilehash: 56bac2fbf2fb42a418cffbd478aa526803b124d9
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145186083'
---
{% data reusables.dependabot.beta-security-and-version-updates %} {% data reusables.dependabot.enterprise-enable-dependabot %}

## À propos des {% data variables.product.prodname_dependabot_version_updates %}

{% data variables.product.prodname_dependabot %} s’efforce de maintenir vos dépendances. Vous pouvez l’utiliser pour vous assurer que votre dépôt reçoit automatiquement les dernières versions des packages et des applications dont il dépend.

Vous activez les {% data variables.product.prodname_dependabot_version_updates %} en archivant un fichier de configuration `dependabot.yml` dans votre référentiel. Le fichier de configuration spécifie l’emplacement du manifeste, ou d’autres fichiers de définition de package, stockés dans votre dépôt. {% data variables.product.prodname_dependabot %} utilise ces informations pour rechercher les packages et applications obsolètes. {% data variables.product.prodname_dependabot %} détermine s’il existe une nouvelle version d’une dépendance en examinant le versioning sémantique ([semver](https://semver.org/)) de celle-ci. Il peut ainsi décider s’il est nécessaire de mettre à jour la dépendance vers cette version. Pour certains gestionnaires de packages, les {% data variables.product.prodname_dependabot_version_updates %} prennent également en charge le placement dans le répertoire vendor. Les dépendances placées dans le répertoire vendor (ou mises en cache) sont des dépendances qui sont archivées dans un répertoire spécifique au sein d’un dépôt plutôt que référencées dans un manifeste. Les dépendances placées dans le répertoire vendor sont disponibles au moment de la génération, même si les serveurs de package ne sont pas disponibles. Les {% data variables.product.prodname_dependabot_version_updates %} peuvent être configurées pour vérifier s’il existe de nouvelles versions pour les dépendances placées dans le répertoire vendor et mettre celles-ci à jour si nécessaire. 

Quand {% data variables.product.prodname_dependabot %} identifie une dépendance obsolète, il déclenche une demande de tirage (pull request) pour mettre à jour le manifeste vers la dernière version de la dépendance. Pour les dépendances placées dans le répertoire vendor, {% data variables.product.prodname_dependabot %} déclenche une demande de tirage pour remplacer la dépendance obsolète par la nouvelle version directement. Vous vérifiez que vos tests réussissent, passez en revue le journal des modifications et les notes de publication incluses dans le résumé de la demande de tirage, puis vous la fusionnez. Pour plus d’informations, consultez « [Configuration des mises à jour de version {% data variables.product.prodname_dependabot %}](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/enabling-and-disabling-dependabot-version-updates) ».

Si vous activez les _mises à jour de sécurité_, {% data variables.product.prodname_dependabot %} déclenche également des demandes de tirage pour mettre à jour les dépendances vulnérables. Pour plus d’informations, consultez « [À propos des {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates) ».

{% data reusables.dependabot.pull-request-security-vs-version-updates %}

{% data reusables.dependabot.dependabot-tos %}

## Fréquence des demandes de tirage {% data variables.product.prodname_dependabot %}

Vous spécifiez la fréquence à laquelle vérifier chaque écosystème pour déterminer s’il existe de nouvelles versions dans le fichier de configuration : quotidienne, hebdomadaire ou mensuelle.

{% data reusables.dependabot.initial-updates %}

Si vous avez activé les mises à jour de sécurité, vous voyez parfois des demandes de tirage supplémentaires pour les mises à jour de sécurité. Celles-ci sont déclenchées par une alerte {% data variables.product.prodname_dependabot %} pour une dépendance sur votre branche par défaut. {% data variables.product.prodname_dependabot %} déclenche automatiquement une demande de tirage pour mettre à jour la dépendance vulnérable.

## Dépôts et écosystèmes pris en charge
<!-- If you make changes to this feature, check whether any of the changes affect languages listed in /get-started/learning-about-github/github-language-support. If so, please update the language support article accordingly. -->

Vous pouvez configurer les mises à jour de version pour les dépôts qui contiennent un fichier de verrouillage ou manifeste de dépendance pour l’un des gestionnaires de packages pris en charge. Pour certains gestionnaires de packages, vous pouvez également configurer le placement dans le répertoire vendor pour les dépendances. Pour plus d’informations, consultez « [Options de configuration pour le fichier dependabot.yml](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/configuration-options-for-dependency-updates#vendor) ».
{% note %}

{% data reusables.dependabot.private-dependencies-note %} 

{% data variables.product.prodname_dependabot %} ne prend pas en charge les dépendances {% data variables.product.prodname_dotcom %} privées pour tous les gestionnaires de package. Pour plus d’informations, consultez le tableau ci-dessous.

{% endnote %}

{% data reusables.dependabot.supported-package-managers %}

Si votre dépôt utilise déjà une intégration pour la gestion des dépendances, vous devez la désactiver avant d’activer {% data variables.product.prodname_dependabot %}. {% ifversion fpt or ghec %}Pour plus d’informations, consultez « [À propos des intégrations](/github/customizing-your-github-workflow/about-integrations) ».{% endif %}

## À propos des notifications pour les mises à jour de version {% data variables.product.prodname_dependabot %}

Vous pouvez filtrer vos notifications sur {% data variables.product.company_short %} pour afficher les notifications des demandes de tirage créées par {% data variables.product.prodname_dependabot %}. Pour plus d’informations, consultez « [Gestion des notifications à partir de votre boîte de réception](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox) ».
