---
title: Bonnes pratiques pour sécuriser votre système de génération
shortTitle: Securing builds
allowTitleToDifferFromFilename: true
intro: "Conseils sur la façon de protéger l’extrémité de votre chaîne logistique\_: systèmes que vous utilisez pour créer et distribuer des artefacts."
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Fundamentals
  - Security
  - CI
  - CD
ms.openlocfilehash: f184bb668ba1594a77099fab734686b9c550c238
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147518855'
---
## À propos de ce guide

Ce guide décrit les modifications les plus importantes que vous pouvez apporter pour améliorer la sécurité de vos systèmes de génération. Chaque section décrit une modification que vous pouvez apporter à vos processus pour améliorer la sécurité. Les modifications les plus importantes sont listées en premier.

## Quel est le risque ?

Certaines attaques sur les chaînes d’approvisionnement logicielles ciblent directement le système de génération. Si un attaquant peut modifier le processus de génération, il peut exploiter votre système sans avoir à compromettre les comptes personnels ou le code. Il est important de veiller à protéger le système de génération ainsi que les comptes personnels et le code.

## Sécuriser votre système de génération

Un système de génération doit satisfaire à plusieurs critères de sécurité :

1. Les étapes de génération doivent être claires et reproductibles.

2. Vous devez savoir exactement ce qui s’exécutait pendant le processus de génération.

3. Chaque génération doit commencer dans un nouvel environnement, afin qu’une génération compromise ne puisse pas affecter une génération future.

{% data variables.product.prodname_actions %} peut vous aider à satisfaire à ces critères. Les instructions de génération sont stockées dans votre dépôt, en compagnie de votre code. Vous choisissez l’environnement sur lequel votre génération s’exécute, notamment Windows, Mac, Linux ou les exécuteurs que vous hébergez vous-même. Chaque build commence avec une image d’exécuteur propre, ce qui rend difficile la persistance d’une attaque dans votre environnement de build.

Outre les avantages en matière de sécurité, {% data variables.product.prodname_actions %} vous permet de déclencher des générations rapides et fréquentes manuellement, périodiquement ou sur des événements Git dans votre dépôt.

{% data variables.product.prodname_actions %} est un sujet à part entière, mais pour bien démarrer, vous pouvez consulter « [Comprendre GitHub Actions](/actions/learn-github-actions/understanding-github-actions) », « [Choix des exécuteurs hébergés par GitHub](/actions/using-workflows/workflow-syntax-for-github-actions#choosing-github-hosted-runners) » et « [Déclenchement d’un workflow](/actions/using-workflows/triggering-a-workflow) ».

## Signer vos builds

Une fois votre processus de génération sécurisé, vous souhaitez empêcher qu’une personne en falsifie le résultat final. Pour ce faire, vous pouvez signer vos builds. Quand vous distribuez des logiciels publiquement, cela s’effectue souvent avec une paire de clés de chiffrement publique/privée. Vous utilisez la clé privée pour signer la build et vous publiez votre clé publique afin que les utilisateurs de votre logiciel puissent vérifier la signature sur la build avant de l’utiliser. Si les octets de la build sont modifiés, la signature ne sera pas vérifiée.

La façon dont vous signez exactement votre build dépend du type de code que vous écrivez et de vos utilisateurs. Il est souvent difficile de savoir comment stocker la clé privée de manière sécurisée. L’une des options de base consiste à utiliser des secrets chiffrés {% data variables.product.prodname_actions %}, même si vous devez veiller à limiter les personnes ayant accès à ces workflows {% data variables.product.prodname_actions %}. {% ifversion fpt or ghec %}Si votre clé privée est stockée dans un autre système accessible via l’Internet public (comme Microsoft Azure ou HashiCorp Vault), une option plus avancée consiste à s’authentifier auprès d’OpenID Connect, afin que vous n’ayez pas besoin de partager de secrets entre les systèmes.{% endif %} Si votre clé privée est accessible uniquement à partir d’un réseau privé, une autre option consiste à utiliser des exécuteurs auto-hébergés pour {% data variables.product.prodname_actions %}.

Pour plus d’informations, consultez « [Secrets chiffrés](/actions/security-guides/encrypted-secrets) »{% ifversion fpt or ghec %}, « [À propos du durcissement de la sécurité avec OpenID Connect](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect) »{% endif %} et « [À propos des exécuteurs auto-hébergés](/actions/hosting-your-own-runners/about-self-hosted-runners) ».

## Durcir la sécurité pour {% data variables.product.prodname_actions %}

Vous pouvez prendre de nombreuses mesures supplémentaires pour sécuriser {% data variables.product.prodname_actions %}. En particulier, soyez prudent lors de l’évaluation des workflows tiers et envisagez d’utiliser `CODEOWNERS` pour limiter les personnes pouvant apporter des modifications à vos workflows.

Pour plus d’informations, consultez « [Durcissement de la sécurité pour GitHub Actions](/actions/security-guides/security-hardening-for-github-actions) », en particulier « [Utilisation d’actions tierces](/actions/security-guides/security-hardening-for-github-actions#using-third-party-actions) » et « [Utilisation de `CODEOWNERS` pour superviser les modifications](/actions/security-guides/security-hardening-for-github-actions#using-codeowners-to-monitor-changes) ».

## Étapes suivantes

- « [Sécurisation de votre chaîne d’approvisionnement de bout en bout](/code-security/supply-chain-security/end-to-end-supply-chain/end-to-end-supply-chain-overview) »

- « [Bonnes pratiques pour sécuriser les comptes](/code-security/supply-chain-security/end-to-end-supply-chain/securing-accounts) »

- « [Bonnes pratiques pour sécuriser le code dans votre chaîne d’approvisionnement](/code-security/supply-chain-security/end-to-end-supply-chain/securing-code) »
