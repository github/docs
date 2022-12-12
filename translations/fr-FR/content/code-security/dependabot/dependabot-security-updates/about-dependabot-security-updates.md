---
title: À propos des mises à jour de sécurité Dependabot
intro: '{% data variables.product.prodname_dependabot %} peut corriger automatiquement les dépendances vulnérables en formulant des demandes de tirage avec des mises à jour de sécurité.'
shortTitle: Dependabot security updates
redirect_from:
  - /github/managing-security-vulnerabilities/about-github-dependabot-security-updates
  - /github/managing-security-vulnerabilities/about-dependabot-security-updates
  - /code-security/supply-chain-security/about-dependabot-security-updates
  - /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-dependabot-security-updates
versions:
  fpt: '*'
  ghec: '*'
  ghes: '> 3.2'
type: overview
topics:
  - Dependabot
  - Security updates
  - Vulnerabilities
  - Repositories
  - Dependencies
  - Pull requests
ms.openlocfilehash: 4ea3bd49a5d46376129afd2282fe043954a7d653
ms.sourcegitcommit: cfe91073c844cb762131b2de9fb41f7f9db792fc
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/24/2022
ms.locfileid: '148181296'
---
<!--Marketing-LINK: From /features/security/software-supply-chain page "About Dependabot security updates".-->

{% data reusables.dependabot.beta-security-and-version-updates %} {% data reusables.dependabot.enterprise-enable-dependabot %}

## À propos des {% data variables.product.prodname_dependabot_security_updates %}

Les {% data variables.product.prodname_dependabot_security_updates %} facilitent la résolution des dépendances vulnérables dans votre dépôt. Si vous activez cette fonctionnalité, quand une alerte {% data variables.product.prodname_dependabot %} est déclenchée pour une dépendance vulnérable dans le graphe de dépendances de votre dépôt, {% data variables.product.prodname_dependabot %} tente automatiquement de la corriger. Pour plus d’informations, consultez « [À propos des {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies) » et « [Configuration des {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/configuring-dependabot-security-updates) ».

{% data variables.product.prodname_dotcom %} peut envoyer des {% data variables.product.prodname_dependabot_alerts %} aux dépôts affectés par une vulnérabilité divulguée par un avis de sécurité {% data variables.product.prodname_dotcom %} publié récemment. {% data reusables.security-advisory.link-browsing-advisory-db %}

{% data variables.product.prodname_dependabot %} vérifie s’il est possible de mettre à niveau la dépendance vulnérable vers une version corrigée sans interrompre le graphe de dépendances pour le dépôt. Ensuite, {% data variables.product.prodname_dependabot %} déclenche une demande de tirage (pull request) pour mettre à jour la dépendance vers la version minimale qui inclut le correctif et lie la demande de tirage à l’alerte {% data variables.product.prodname_dependabot %} ou signale une erreur sur l’alerte. Pour plus d’informations, consultez « [Résolution des erreurs {% data variables.product.prodname_dependabot %}](/github/managing-security-vulnerabilities/troubleshooting-dependabot-errors) ».

La fonctionnalité des {% data variables.product.prodname_dependabot_security_updates %} est disponible pour les dépôts où vous avez activé le graphe de dépendances et les {% data variables.product.prodname_dependabot_alerts %}. Vous voyez une alerte {% data variables.product.prodname_dependabot %} pour chaque dépendance vulnérable identifiée dans votre graphe de dépendances complet. Toutefois, les mises à jour de sécurité sont déclenchées uniquement pour les dépendances spécifiées dans un manifeste ou un fichier de verrouillage. Pour plus d’informations, consultez « [À propos du graphe des dépendances](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#dependencies-included) ».

{% ifversion dependabot-security-updates-unlock-transitive-dependencies %} 

{% note %}

**Remarque** : Pour npm, {% data variables.product.prodname_dependabot %} déclenche une demande de tirage pour mettre à jour une dépendance explicitement définie vers une version sécurisée, même si cela implique la mise à jour de la ou des dépendances parentes{% ifversion dependabot-security-updates-npm %}, ou même la suppression d’une sous-dépendance dont le parent n’a plus besoin{% endif %}. Pour d’autres écosystèmes, {% data variables.product.prodname_dependabot %} ne peut pas mettre à jour une dépendance indirecte ou transitive si cela nécessite également une mise à jour de la dépendance parente. Pour plus d’informations, consultez « [Dependabot tente de mettre à jour les dépendances sans alerte](/en/code-security/dependabot/working-with-dependabot/troubleshooting-dependabot-errors#dependabot-tries-to-update-dependencies-without-an-alert) ».

{% endnote %}{% endif %} 

Vous pouvez activer une fonctionnalité associée, les {% data variables.product.prodname_dependabot_version_updates %}, afin que {% data variables.product.prodname_dependabot %} déclenche des demandes de tirage pour mettre à jour le manifeste vers la dernière version de la dépendance, chaque fois qu’il détecte une dépendance obsolète. Pour plus d’informations, consultez « [À propos des mises à jour de version {% data variables.product.prodname_dependabot %}](/github/administering-a-repository/about-dependabot-version-updates) ».

{% data reusables.dependabot.pull-request-security-vs-version-updates %}

{% data reusables.dependabot.dependabot-updates-and-actions %}

{% data reusables.dependabot.dependabot-actions-support %}

## À propos des demandes de tirage pour les mises à jour de sécurité

Chaque demande de tirage contient tout ce dont vous avez besoin pour examiner un correctif proposé et le fusionner dans votre projet rapidement et de manière sécurisée. Cela inclut des informations sur la vulnérabilité, telles que les notes de publication, les entrées du journal des modifications et les détails de commit. Les détails de la vulnérabilité qui est résolue par une demande de tirage sont masqués pour toute personne qui n’a pas accès aux {% data variables.product.prodname_dependabot_alerts %} pour le dépôt.

Quand vous fusionnez une demande de tirage contenant une mise à jour de sécurité, l’alerte {% data variables.product.prodname_dependabot %} correspondante est marquée comme résolue pour votre dépôt. Pour plus d’informations sur les demandes de tirage {% data variables.product.prodname_dependabot %}, consultez « [Gestion des demandes de tirage pour les mises à jour des dépendances](/github/administering-a-repository/managing-pull-requests-for-dependency-updates) ».

{% data reusables.dependabot.automated-tests-note %}

{% ifversion fpt or ghec %}

## À propos des scores de compatibilité

Les {% data variables.product.prodname_dependabot_security_updates %} peuvent inclure des scores de compatibilité pour vous permettre de savoir si la mise à jour d’une dépendance peut entraîner des changements cassants dans votre projet. Ces scores sont calculés à partir des tests CI dans d’autres dépôts publics où la même mise à jour de sécurité a été générée. Le score de compatibilité d’une mise à jour est le pourcentage d’exécutions d’intégrations continues qui ont réussi lors de la mise à jour entre des versions spécifiques de la dépendance.

{% endif %}

## À propos des notifications pour les mises à jour de sécurité {% data variables.product.prodname_dependabot %}

Vous pouvez filtrer vos notifications sur {% data variables.product.company_short %} pour afficher les mises à jour de sécurité {% data variables.product.prodname_dependabot %}. Pour plus d’informations, consultez « [Gestion des notifications à partir de votre boîte de réception](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#dependabot-custom-filters) ».
