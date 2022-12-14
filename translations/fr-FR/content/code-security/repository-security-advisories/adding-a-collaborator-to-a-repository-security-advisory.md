---
title: Ajout d’un collaborateur à un avis de sécurité de dépôt
intro: Vous pouvez ajouter d’autres utilisateurs ou équipes pour collaborer sur un avis de sécurité avec vous.
redirect_from:
- /articles/adding-a-collaborator-to-a-maintainer-security-advisory
- /github/managing-security-vulnerabilities/adding-a-collaborator-to-a-maintainer-security-advisory
- /github/managing-security-vulnerabilities/adding-a-collaborator-to-a-security-advisory
- /code-security/security-advisories/adding-a-collaborator-to-a-security-advisory
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
- Security advisories
- Vulnerabilities
- Collaboration
shortTitle: Add collaborators
ms.openlocfilehash: 6fa4062fab8e4ffc59724ceb0ba3b6b536871df9
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: "147877164"
---
Les utilisateurs disposant d’autorisations d’administrateur sur un avis de sécurité peuvent ajouter des collaborateurs à celui-ci.

{% data reusables.security-advisory.repository-level-advisory-note %}

## Ajout d’un collaborateur à un avis de sécurité

Les collaborateurs disposent d’autorisations d’écriture sur l’avis de sécurité. Pour plus d’informations, consultez « [Niveaux d’autorisation pour les avis de sécurité de dépôt](/code-security/repository-security-advisories/permission-levels-for-repository-security-advisories) ».

{% note %}

{% data reusables.repositories.security-advisory-collaborators-public-repositories %} Pour plus d’informations sur la suppression d’un collaborateur d’un avis de sécurité, consultez « [Suppression d’un collaborateur d’un avis de sécurité de dépôt](/code-security/repository-security-advisories/removing-a-collaborator-from-a-repository-security-advisory) ».

{% endnote %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %} {% data reusables.repositories.sidebar-advisories %}
4. Dans la liste « Avis de sécurité », cliquez sur l’avis de sécurité auquel vous souhaitez ajouter un collaborateur.
5. Sur le côté droit de la page, sous « Collaborateurs », tapez le nom de l’utilisateur ou de l’équipe que vous souhaitez ajouter à l’avis de sécurité.
  ![Champ pour taper le nom d’un utilisateur ou d’une équipe](/assets/images/help/security/add-collaborator-field.png)
6. Cliquez sur **Add**.
  ![Bouton Ajouter](/assets/images/help/security/security-advisory-add-collaborator-button.png)

## Pour aller plus loin

- « [Niveaux d’autorisation pour les avis de sécurité de dépôt](/code-security/repository-security-advisories/permission-levels-for-repository-security-advisories) »
- « [Collaboration dans une duplication privée temporaire pour résoudre une vulnérabilité de sécurité de dépôt](/code-security/repository-security-advisories/collaborating-in-a-temporary-private-fork-to-resolve-a-repository-security-vulnerability) »
- « [Suppression d’un collaborateur d’un avis de sécurité de dépôt](/code-security/repository-security-advisories/removing-a-collaborator-from-a-repository-security-advisory) »
