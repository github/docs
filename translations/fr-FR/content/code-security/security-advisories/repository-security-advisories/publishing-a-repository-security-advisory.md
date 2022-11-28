---
title: Publication d’un avis de sécurité de dépôt
intro: Vous pouvez publier un avis de sécurité pour alerter votre communauté sur une vulnérabilité de sécurité dans votre projet.
redirect_from:
  - /articles/publishing-a-maintainer-security-advisory
  - /github/managing-security-vulnerabilities/publishing-a-maintainer-security-advisory
  - /github/managing-security-vulnerabilities/publishing-a-security-advisory
  - /code-security/security-advisories/publishing-a-security-advisory
  - /code-security/repository-security-advisories/publishing-a-repository-security-advisory
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Security advisories
  - Vulnerabilities
  - CVEs
  - Repositories
shortTitle: Publish repository advisories
ms.openlocfilehash: 17d98e3027c0968f21107ccefdb70fbebca67a35
ms.sourcegitcommit: 27882d9b3f19979c817c25952a2fb4dc4c6f0a65
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/27/2022
ms.locfileid: '148114025'
---
<!--Marketing-LINK: From /features/security/software-supply-chain page "Publishing a security advisory".-->

Toute personne disposant d’autorisations d’administrateur pour un avis de sécurité peut publier celui-ci.

{% data reusables.security-advisory.repository-level-advisory-note %}

## Prérequis

Avant de pouvoir publier un avis de sécurité ou demander un numéro d’identification CVE, vous devez créer un brouillon d’avis de sécurité et fournir des informations sur les versions de votre projet affectées par la vulnérabilité de sécurité. Pour plus d’informations, consultez « [Création d’un avis de sécurité de dépôt](/code-security/repository-security-advisories/creating-a-repository-security-advisory) ».

Si vous avez créé un avis de sécurité mais que vous n’avez pas encore fourni de détails sur les versions de votre projet que la vulnérabilité de sécurité affecte, vous pouvez modifier l’avis de sécurité. Pour plus d’informations, consultez « [Modification d’un avis de sécurité de dépôt](/code-security/repository-security-advisories/editing-a-repository-security-advisory) ».

## À propos de la publication d’un avis de sécurité

Quand vous publiez un avis de sécurité, vous informez votre communauté de la vulnérabilité de sécurité qu’il traite. Il est ainsi plus facile pour votre communauté de mettre à jour les dépendances de package et d’étudier l’impact de la vulnérabilité de sécurité.

{% data reusables.repositories.security-advisories-republishing %}

Avant de publier un avis de sécurité, vous pouvez collaborer en privé pour corriger la vulnérabilité dans une duplication (fork) privée temporaire. Pour plus d’informations, consultez « [Collaboration dans une duplication privée temporaire pour résoudre une vulnérabilité de sécurité de dépôt](/code-security/repository-security-advisories/collaborating-in-a-temporary-private-fork-to-resolve-a-repository-security-vulnerability) »

{% warning %}

**Avertissement** : Dans la mesure du possible, vous devez toujours ajouter une version de correctif à un avis de sécurité avant de le publier. Si vous ne le faites pas, l’avis est publié sans version corrigée, et {% data variables.product.prodname_dependabot %} avertit vos utilisateurs du problème sans offrir de version sécurisée vers laquelle effectuer une mise à jour.

Nous vous recommandons de procéder comme suit suivant la situation :

- Si une version de correctif est immédiatement disponible, dans la mesure du possible, attendez de divulguer le problème quand le correctif est prêt.
- Si une version de correctif est en cours de développement mais qu’elle n’est pas encore disponible, mentionnez-le dans l’avis et modifiez ce dernier ultérieurement, après publication.
- Si vous ne prévoyez pas de résoudre le problème, soyez clair à ce sujet dans l’avis afin que vos utilisateurs ne vous contactent pas pour vous demander quand un correctif sera apporté. Dans ce cas, il est utile d’inclure une procédure que les utilisateurs peuvent suivre pour atténuer le problème.

{% endwarning %}

Quand vous publiez un brouillon d’avis à partir d’un dépôt public, tout le monde peut voir :

- La version actuelle des données de l’avis.
- Les crédits d’avis que les utilisateurs crédités ont acceptés.
  
{% note %}

**Remarque** : Le grand public n’a jamais accès à l’historique des modifications de l’avis et ne voit que la version publiée.

{% endnote %}

Une fois que vous avez publié un avis de sécurité, son URL reste la même. Toute personne disposant d’un accès en lecture au dépôt peut voir l’avis de sécurité. Les collaborateurs à l’avis de sécurité peuvent continuer à voir les conversations passées, notamment le flux de commentaires complet, dans l’avis de sécurité, sauf si une personne disposant d’autorisations d’administrateur supprime le collaborateur de l’avis de sécurité. 

Si vous devez mettre à jour ou corriger des informations dans un avis de sécurité que vous avez publié, vous pouvez modifier ce dernier. Pour plus d’informations, consultez « [Modification d’un avis de sécurité de dépôt](/code-security/repository-security-advisories/editing-a-repository-security-advisory) ».

## Publication d’un avis de sécurité

La publication d’un avis de sécurité supprime la duplication privée temporaire pour l’avis de sécurité.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %} {% data reusables.repositories.sidebar-advisories %}
4. Dans la liste « Avis de sécurité », cliquez sur l’avis de sécurité que vous souhaitez publier.
  ![Avis de sécurité dans la liste](/assets/images/help/security/security-advisory-in-list.png)
5. En bas de la page, cliquez sur **Publier l’avis**.
  ![Bouton Publier l’avis](/assets/images/help/security/publish-advisory-button.png)
  
## {% data variables.product.prodname_dependabot_alerts %} pour les avis de sécurité publiés

{% data reusables.repositories.github-reviews-security-advisories %}

## Demande d’un numéro d’identification CVE (facultatif)

{% data reusables.repositories.request-security-advisory-cve-id %} Pour plus d’informations, consultez « [À propos des avis de sécurité des référentiels](/code-security/repository-security-advisories/about-github-security-advisories-for-repositories#cve-identification-numbers). »

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %} {% data reusables.repositories.sidebar-advisories %}
4. Dans la liste « Avis de sécurité », cliquez sur l’avis de sécurité pour lequel vous souhaitez demander un numéro d’identification CVE.
  ![Avis de sécurité dans la liste](/assets/images/help/security/security-advisory-in-list.png)
5. Dans le menu déroulant **Publier l’avis**, cliquez sur **Demander un CVE**.
  ![Demander un CVE dans le menu déroulante](/assets/images/help/security/security-advisory-drop-down-request-cve.png)
6. Cliquez sur **Demander un CVE**.
  ![Bouton Demander un CVE](/assets/images/help/security/security-advisory-request-cve-button.png)

## Pour aller plus loin

- « [Retrait d’un avis de sécurité de dépôt](/code-security/repository-security-advisories/withdrawing-a-repository-security-advisory) »
