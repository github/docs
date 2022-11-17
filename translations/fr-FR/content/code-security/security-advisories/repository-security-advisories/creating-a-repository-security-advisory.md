---
title: Création d’un avis de sécurité de dépôt
intro: Vous pouvez créer un brouillon d’avis de sécurité pour discuter en privé et corriger une vulnérabilité de sécurité dans votre projet open source.
redirect_from:
  - /articles/creating-a-maintainer-security-advisory
  - /github/managing-security-vulnerabilities/creating-a-maintainer-security-advisory
  - /github/managing-security-vulnerabilities/creating-a-security-advisory
  - /code-security/security-advisories/creating-a-security-advisory
  - /code-security/repository-security-advisories/creating-a-repository-security-advisory
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Security advisories
  - Vulnerabilities
shortTitle: Create repository advisories
ms.openlocfilehash: de22432173f6bf909d001a3f780b0f9943769ec0
ms.sourcegitcommit: 27882d9b3f19979c817c25952a2fb4dc4c6f0a65
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/27/2022
ms.locfileid: '148114036'
---
Toute personne disposant d’autorisations d’administrateur sur un dépôt peut créer un avis de sécurité.

{% data reusables.security-advisory.security-researcher-cannot-create-advisory %}

## Création d’un avis de sécurité

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %} {% data reusables.repositories.sidebar-advisories %}
4. Cliquez sur **Nouveau brouillon d’avis de sécurité** pour ouvrir le formulaire de brouillon d’avis.
  ![Bouton Ouvrir le brouillon d’avis](/assets/images/help/security/security-advisory-new-draft-security-advisory-button.png)
5. Tapez un titre pour votre avis de sécurité.
{% data reusables.repositories.security-advisory-edit-details %} {% data reusables.repositories.security-advisory-edit-severity %} {% data reusables.repositories.security-advisory-edit-cwe-cve %} {% data reusables.repositories.security-advisory-edit-description %}
11. Cliquez sur **Créer un brouillon d’avis de sécurité**.
  ![Bouton Créer un avis de sécurité](/assets/images/help/security/security-advisory-create-security-advisory-button.png)

## Étapes suivantes

- Commentez le brouillon d’avis de sécurité pour discuter de la vulnérabilité avec votre équipe.
- Ajoutez des collaborateurs à l’avis de sécurité. Pour plus d’informations, consultez « [Ajout d’un collaborateur à un avis de sécurité de dépôt](/code-security/repository-security-advisories/adding-a-collaborator-to-a-repository-security-advisory) ».
- Collaborez en privé pour corriger la vulnérabilité dans une duplication (fork) privée temporaire. Pour plus d’informations, consultez « [Collaboration dans une duplication privée temporaire pour résoudre une vulnérabilité de sécurité de dépôt](/code-security/repository-security-advisories/collaborating-in-a-temporary-private-fork-to-resolve-a-repository-security-vulnerability) »
- Ajoutez des personnes à créditer pour leur contribution à l’avis de sécurité. Pour plus d’informations, consultez « [Modification d’un avis de sécurité de dépôt](/code-security/repository-security-advisories/editing-a-repository-security-advisory#about-credits-for-security-advisories) ».
- Publiez l’avis de sécurité pour informer votre communauté de la vulnérabilité de sécurité. Pour plus d’informations, consultez « [Publication d’un avis de sécurité de dépôt](/code-security/repository-security-advisories/publishing-a-repository-security-advisory) ».
