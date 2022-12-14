---
title: Modification d’un avis de sécurité de dépôt
intro: Vous pouvez modifier les métadonnées et la description d’un avis de sécurité de dépôt si vous devez mettre à jour les détails ou corriger les erreurs.
redirect_from:
- /github/managing-security-vulnerabilities/editing-a-security-advisory
- /code-security/security-advisories/editing-a-security-advisory
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
- Security advisories
- Vulnerabilities
shortTitle: Edit repository advisories
ms.openlocfilehash: 2ea2f588374d83be677589b4f3bf4e74a7fc6e91
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145106289"
---
Les personnes disposant d’autorisations d’administrateur sur un avis de sécurité de dépôt peuvent modifier l’avis de sécurité.

{% data reusables.security-advisory.repository-level-advisory-note %}

## À propos des crédits pour les avis de sécurité

Vous pouvez créditer les personnes qui ont aidé à découvrir, signaler ou corriger une vulnérabilité de sécurité. Si vous créditez une personne, elle peut choisir d’accepter ou de refuser le crédit.

Si une personne accepte un crédit, son nom d’utilisateur apparaît dans la section « Crédits » de l’avis de sécurité. Toute personne disposant d’un accès en lecture au dépôt peut voir l’avis et les noms des personnes qui ont accepté d’être créditées pour celui-ci.

Si vous pensez que vous devez être crédité pour un avis de sécurité, contactez la personne qui a créé l’avis et demandez-lui de modifier l’avis pour inclure votre crédit. Seul le créateur de l’avis peut vous créditer. Veuillez donc ne pas contacter le support GitHub au sujet des crédits pour les avis de sécurité.

## Modification d’un avis de sécurité

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %} {% data reusables.repositories.sidebar-advisories %}
4. Dans la liste « Avis de sécurité », cliquez sur l’avis de sécurité que vous souhaitez modifier.
5. Dans le coin supérieur droit des détails de l’avis de sécurité, cliquez sur {% octicon "pencil" aria-label="The edit icon" %}.
  ![Bouton de modification d’un avis de sécurité](/assets/images/help/security/security-advisory-edit-button.png) {% data reusables.repositories.security-advisory-edit-details %} {% data reusables.repositories.security-advisory-edit-severity %} {% data reusables.repositories.security-advisory-edit-cwe-cve %} {% data reusables.repositories.security-advisory-edit-description %}
11. Si vous le souhaitez, modifiez les « Crédits » pour l’avis de sécurité.
  ![Crédits pour un avis de sécurité](/assets/images/help/security/security-advisory-credits.png)
12. Cliquez sur **Mettre à jour l’avis de sécurité**.
  ![Bouton « Mettre à jour l’avis de sécurité »](/assets/images/help/security/update-advisory-button.png)
13. Les personnes listées dans la section « Crédits » recevront un e-mail ou une notification web les invitant à accepter le crédit. Si une personne accepte, son nom d’utilisateur est visible publiquement une fois que l’avis de sécurité est publié.

## Pour aller plus loin

- « [Retrait d’un avis de sécurité de dépôt](/code-security/repository-security-advisories/withdrawing-a-repository-security-advisory) »
