---
title: Résolution des erreurs Dependabot
intro: 'Parfois, {% data variables.product.prodname_dependabot %} n’est pas en mesure de lancer une demande de mise à jour de vos dépendances. Vous pouvez examiner l’erreur et débloquer {% data variables.product.prodname_dependabot %}.'
shortTitle: Troubleshoot errors
miniTocMaxHeadingLevel: 3
redirect_from:
  - /github/managing-security-vulnerabilities/troubleshooting-github-dependabot-errors
  - /github/managing-security-vulnerabilities/troubleshooting-dependabot-errors
  - /code-security/supply-chain-security/troubleshooting-dependabot-errors
  - /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/troubleshooting-dependabot-errors
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Dependabot
  - Security updates
  - Version updates
  - Repositories
  - Pull requests
  - Troubleshooting
  - Errors
  - Dependencies
ms.openlocfilehash: 21b7c2b2e6c613d4443b54404dfc120bd8ac00e2
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108777'
---
{% data reusables.dependabot.beta-security-and-version-updates %}

{% data reusables.dependabot.enterprise-enable-dependabot %}

## À propos des erreurs {% data variables.product.prodname_dependabot %}

{% data reusables.dependabot.pull-request-introduction %}

Si quelque chose empêche {% data variables.product.prodname_dependabot %} de déclencher une demande de tirage (pull request), cela est signalé comme une erreur.

## Examen des erreurs liées aux {% data variables.product.prodname_dependabot_security_updates %}

Quand {% data variables.product.prodname_dependabot %} n’est pas en mesure de créer une demande de tirage pour corriger une alerte {% data variables.product.prodname_dependabot %}, il publie le message d’erreur sur l’alerte. L’affichage des {% data variables.product.prodname_dependabot_alerts %} montre la liste des alertes qui n’ont pas encore été résolues. Pour accéder à l’affichage des alertes, cliquez sur **{% data variables.product.prodname_dependabot_alerts %}** sous l’onglet **Sécurité** du dépôt. Si une demande de tirage destinée à corriger la dépendance vulnérable a été générée, l’alerte inclut un lien vers cette demande de tirage.

![Affichage des {% data variables.product.prodname_dependabot_alerts %} montrant un lien vers une demande de tirage](/assets/images/help/dependabot/dependabot-alert-pr-link.png)

Il existe plusieurs raisons pour lesquelles une alerte peut ne pas avoir de lien vers une demande de tirage :

1. Les {% data variables.product.prodname_dependabot_security_updates %} ne sont pas activées pour le dépôt.
{% ifversion GH-advisory-db-supports-malware %}
1. L’alerte concerne les programmes malveillants et il n’existe aucune version sécurisée du package.
{% endif %}
1. L’alerte concerne une dépendance indirecte ou transitive qui n’est pas explicitement définie dans un fichier de verrouillage.
1. Une erreur a empêché {% data variables.product.prodname_dependabot %} de créer une demande de tirage.

Si une erreur a empêché {% data variables.product.prodname_dependabot %} de créer une demande de tirage, vous pouvez afficher les détails de l’erreur en cliquant sur l’alerte.

## Examen des erreurs liées aux {% data variables.product.prodname_dependabot_version_updates %}

Quand {% data variables.product.prodname_dependabot %} n’est pas en mesure de créer une demande de tirage pour mettre à jour une dépendance dans un écosystème, il publie l’icône de l’erreur dans le fichier manifeste. Les fichiers manifestes gérés par {% data variables.product.prodname_dependabot %} sont listés sous l’onglet {% data variables.product.prodname_dependabot %}. Pour accéder à cet onglet, sous l’onglet **Insights** du dépôt, cliquez sur **Graphe de dépendances**, puis sur l’onglet **{% data variables.product.prodname_dependabot %}** .

![Affichage {% data variables.product.prodname_dependabot %} montrant une erreur](/assets/images/help/dependabot/dependabot-tab-view-error.png)

{% ifversion fpt or ghec %}

Pour voir le fichier journal de n’importe quel fichier manifeste, cliquez sur le lien **Dernière vérification il y a TEMPS**. Quand vous affichez le fichier journal d’un manifeste qui est accompagné d’un symbole d’erreur (par exemple, Maven dans la capture d’écran ci-dessus), toutes les erreurs sont également affichées.

![Journal et erreur de mise à jour de version {% data variables.product.prodname_dependabot %} ](/assets/images/help/dependabot/dependabot-version-update-error.png)

{% else %}

Pour voir les journaux de n’importe quel fichier manifeste, cliquez sur le lien **Dernière vérification il y a TEMPS**, puis cliquez sur **Afficher les journaux**.

![Journal et erreur de mise à jour de version {% data variables.product.prodname_dependabot %} ](/assets/images/enterprise/3.3/dependabot/dependabot-version-update-error.png)

{% endif %}

## Présentation des erreurs {% data variables.product.prodname_dependabot %}

Les demandes de tirage pour les mises à jour de sécurité visent à mettre à niveau une dépendance vulnérable vers la version minimale qui inclut un correctif pour la vulnérabilité. En revanche, les demandes de tirage pour les mises à jour de version visent à mettre à niveau une dépendance vers la dernière version autorisée par le manifeste du package et les fichiers de configuration {% data variables.product.prodname_dependabot %}. Ainsi, certaines erreurs sont propres à un type de mise à jour.

### {% data variables.product.prodname_dependabot %} ne peut pas mettre à jour la dépendance vers une version non vulnérable

**Mises à jour de sécurité uniquement.** {% data variables.product.prodname_dependabot %} ne peut pas créer une demande de tirage pour mettre à jour la dépendance vulnérable vers une version sécurisée sans rompre d’autres dépendances dans le graphe de dépendances de ce dépôt.

Chaque application qui a des dépendances a un graphe de dépendances, autrement dit un graphe orienté acyclique de chaque version de package dont l’application dépend directement ou indirectement. Chaque fois qu’une dépendance est mise à jour, ce graphe doit être résolu, sinon l’application n’est pas générée. Quand un écosystème a un graphe de dépendances profond et complexe, par exemple, npm et RubyGems, il est souvent impossible de mettre à niveau une seule dépendance sans mettre à niveau l’ensemble de l’écosystème.

La meilleure façon d’éviter ce problème est de rester à jour avec les dernières versions publiées, par exemple, en activant les mises à jour de version. Cela augmente la probabilité qu’une vulnérabilité dans une dépendance puisse être résolue par une simple mise à niveau qui ne rompt pas le graphe de dépendances. Pour plus d’informations, consultez « [Configuration des mises à jour de version {% data variables.product.prodname_dependabot %}](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/enabling-and-disabling-dependabot-version-updates)."{% ifversion dependabot-security-updates-unlock-transitive-dependencies %}

### {% data variables.product.prodname_dependabot %} tente de mettre à jour les dépendances sans alerte

**Mises à jour de sécurité uniquement.** {% data variables.product.prodname_dependabot %} met à jour les dépendances transitives définies explicitement qui sont vulnérables pour tous les écosystèmes. Pour npm, {% data variables.product.prodname_dependabot %} déclenche une demande de tirage qui met également à jour la dépendance parente s’il s’agit de la seule façon de corriger la dépendance transitive.

Par exemple, un projet avec une dépendance envers la version `~2.0.0` de `A` qui a une dépendance transitive envers la version `~1.0.0` de `B` qui a été résolue en `1.0.1`.
```
my project
|
--> A (2.0.0) [~2.0.0]
       |
       --> B (1.0.1) [~1.0.0]
```       
Si une vulnérabilité de sécurité est publiée pour les versions `<2.0.0` de `B` et qu’un correctif est disponible pour `2.0.0`, {% data variables.product.prodname_dependabot %} tente de mettre à jour `B` mais détecte que c’est impossible en raison de la restriction en mise place par `A`, qui autorise uniquement les versions vulnérables inférieures. Pour corriger la vulnérabilité, {% data variables.product.prodname_dependabot %} recherche les mises à jour de la dépendance `A` qui autorisent l’utilisation de la version corrigée de `B`. 

{% data variables.product.prodname_dependabot %} génère automatiquement une demande de tirage qui met à niveau les dépendances transitives parentes et enfants verrouillées.{% endif %}

### {% data variables.product.prodname_dependabot %} ne peut pas effectuer une mise à jour vers la version requise, car il existe déjà une demande de tirage ouverte pour la dernière version

**Mises à jour de sécurité uniquement.** {% data variables.product.prodname_dependabot %} ne crée pas de demande de tirage pour mettre à jour la dépendance vulnérable vers une version sécurisée, car il existe déjà une demande de tirage ouverte pour mettre à jour cette dépendance. Cette erreur s’affiche quand une vulnérabilité est détectée dans une seule dépendance et qu’il existe déjà une demande de tirage ouverte pour mettre à jour la dépendance vers la dernière version.

Il existe deux options : vous pouvez passer en revue la demande de tirage ouverte et la fusionner dès que vous êtes sûr que la modification est sécurisée ou fermer cette demande de tirage et déclencher une nouvelle demande de tirage de mise à jour de sécurité. Pour plus d’informations, consultez « [Déclenchement manuel d’une demande de tirage {% data variables.product.prodname_dependabot %}](#triggering-a-dependabot-pull-request-manually) ».

### {% data variables.product.prodname_dependabot %} a expiré pendant sa mise à jour

{% data variables.product.prodname_dependabot %} a pris plus de temps que le temps maximal autorisé pour évaluer la mise à jour requise et préparer une demande de tirage. Cette erreur n’est généralement observée que pour les grands dépôts avec de nombreux fichiers manifestes, par exemple, les projets monodépôts npm ou yarn avec des centaines de fichiers *package.json*. L’évaluation des mises à jour apportées à l’écosystème Composer peut également prendre plus de temps, avec le risque que les mises à jour expirent.

Cette erreur est difficile à résoudre. Si une mise à jour de version expire, vous pouvez spécifier les dépendances les plus importantes à mettre à jour en utilisant le paramètre `allow` ou, sinon, utiliser le paramètre `ignore` pour exclure certaines dépendances des mises à jour. La mise à jour de votre configuration peut autoriser {% data variables.product.prodname_dependabot %} à passer en revue la mise à jour de version et à générer la demande de tirage dans le temps disponible.

Si une mise à jour de sécurité expire, vous pouvez réduire les risques que cela se reproduise en maintenant les dépendances à jour, par exemple en activant les mises à jour de version. Pour plus d’informations, consultez « [Configuration des mises à jour de version {% data variables.product.prodname_dependabot %}](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/enabling-and-disabling-dependabot-version-updates) ».

### {% data variables.product.prodname_dependabot %} ne peut pas ouvrir plus de demandes de tirage

Le nombre de demandes de tirage ouvertes générées par {% data variables.product.prodname_dependabot %} est limité. Quand cette limite est atteinte, aucune nouvelle demande de tirage n’est ouverte et cette erreur est signalée. La meilleure façon de résoudre cette erreur consiste à passer en revue et à fusionner certaines des demandes de tirage ouvertes.

Il existe des limites distinctes pour les demandes de tirage de mise à jour de sécurité et de mise à jour de version, afin que les demandes de tirage de mise à jour de version ouvertes ne puissent pas empêcher la création d’une demande de tirage de mise à jour de sécurité. La limite pour les demandes de tirage de mise à jour de sécurité est 10. Par défaut, la limite des mises à jour de version est 5, mais vous pouvez la changer avec le paramètre `open-pull-requests-limit` dans le fichier de configuration. Pour plus d’informations, consultez « [Options de configuration pour le fichier dependabot.yml](/github/administering-a-repository/configuration-options-for-dependency-updates#open-pull-requests-limit) ».

La meilleure façon de résoudre cette erreur consiste à fusionner ou fermer certaines des demandes de tirage existantes et à déclencher une nouvelle demande de tirage manuellement. Pour plus d’informations, consultez « [Déclenchement manuel d’une demande de tirage {% data variables.product.prodname_dependabot %}](#triggering-a-dependabot-pull-request-manually) ».

### {% data variables.product.prodname_dependabot %} ne peut pas résoudre vos dépendances ou y accéder

Si {% data variables.product.prodname_dependabot %} tente de vérifier si des références de dépendance doivent être mises à jour dans un dépôt, mais qu’il ne peut pas accéder à un ou plusieurs des fichiers référencés, l’opération échoue avec le message d’erreur indiquant que {% data variables.product.prodname_dependabot %} ne peut pas résoudre vos fichiers de dépendance dans le langage concerné. Le type d’erreur de l’API est `git_dependencies_not_reachable`.

De même, si {% data variables.product.prodname_dependabot %} ne peut pas accéder à un registre de package privé dans lequel se trouve une dépendance, l’une des erreurs suivantes est générée :

*   « Dependabot ne peut pas atteindre une dépendance dans un registre de package privé »<br>
   (Type d’erreur de l’API : `private_source_not_reachable`)
*   « Dependabot ne peut pas s’authentifier auprès d’un registre de package privé »<br>
   (Type d’erreur de l’API : `private_source_authentication_failure`)
*   « Dependabot a expiré en attendant un registre de package privé »<br>
   (Type d’erreur de l’API : `private_source_timed_out`)
*   « Dependabot n’a pas pu valider le certificat pour un registre de package privé »<br>
   (Type d’erreur de l’API : `private_source_certificate_failure`)

Pour autoriser {% data variables.product.prodname_dependabot %} à mettre à jour les références de dépendances correctement, assurez-vous que toutes les dépendances référencées sont hébergées à des emplacements accessibles. 

**Mises à jour de version uniquement.** {% data reusables.dependabot.private-dependencies-note %}En outre, {% data variables.product.prodname_dependabot %} ne prend pas en charge les dépendances {% data variables.product.prodname_dotcom %} privées pour tous les gestionnaires de package. Pour plus d’informations, consultez « [À propos des mises à jour de version Dependabot](/github/administering-a-repository/about-dependabot-version-updates#supported-repositories-and-ecosystems) ».

## Déclenchement manuel d’une demande de tirage {% data variables.product.prodname_dependabot %}

Si vous débloquez {% data variables.product.prodname_dependabot %}, vous pouvez déclencher manuellement une nouvelle tentative de création d’une demande de tirage.

- **Mises à jour de sécurité** : affichez l’alerte {% data variables.product.prodname_dependabot %} qui montre l’erreur que vous avez corrigée et cliquez sur **Créer une mise à jour de sécurité {% data variables.product.prodname_dependabot %}** .
- **Mises à jour de version** : sous l’onglet **Insights** du dépôt, cliquez sur **Graphe de dépendances**, puis cliquez sur l’onglet **Dependabot**. Cliquez sur **Dernière vérification il y a *TEMPS*** pour afficher le fichier journal que {% data variables.product.prodname_dependabot %} a généré lors de la dernière vérification des mises à jour de version. Cliquez sur **Rechercher les mises à jour**.

## Pour aller plus loin

- « [Résolution des problèmes liés au graphe de dépendances](/code-security/supply-chain-security/understanding-your-software-supply-chain/troubleshooting-the-dependency-graph) »
- « [Résolution des problèmes de détection des dépendances vulnérables](/code-security/dependabot/working-with-dependabot/troubleshooting-the-detection-of-vulnerable-dependencies) »
