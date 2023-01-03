---
title: Suppression d’un collaborateur d’un avis de sécurité de dépôt
intro: Lorsque vous supprimez un collaborateur d’un avis de sécurité de dépôt, il perd l’accès en lecture et écriture à la discussion et aux métadonnées de l’avis de sécurité.
redirect_from:
- /github/managing-security-vulnerabilities/removing-a-collaborator-from-a-security-advisory
- /code-security/security-advisories/removing-a-collaborator-from-a-security-advisory
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
- Security advisories
- Vulnerabilities
- Collaboration
shortTitle: Remove collaborators
ms.openlocfilehash: ced0edd0614304c0d33ddd40dce3c6a24a9ffcfd
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145106274"
---
Les utilisateurs disposant d’autorisations d’administrateur sur un avis de sécurité peuvent supprimer des collaborateurs de celui-ci.

{% data reusables.security-advisory.repository-level-advisory-note %}

## Suppression d’un collaborateur d’un avis de sécurité

{% data reusables.repositories.security-advisory-collaborators-public-repositories %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %} {% data reusables.repositories.sidebar-advisories %}
4. Dans la liste « Avis de sécurité », cliquez sur l’avis de sécurité dont vous souhaitez supprimer un collaborateur.
  ![Avis de sécurité dans la liste](/assets/images/help/security/security-advisory-in-list.png)
5. Sur le côté droit de la page, sous « Collaborateurs », recherchez le nom de l’utilisateur ou de l’équipe que vous souhaitez supprimer de l’avis de sécurité.
  ![Collaborateur de l’avis de sécurité](/assets/images/help/security/security-advisory-collaborator.png)
6. En regard du collaborateur que vous souhaitez supprimer, cliquez sur l’icône **X**.
  ![Icône X pour supprimer un collaborateur de l’avis de sécurité](/assets/images/help/security/security-advisory-remove-collaborator-x.png)

## Pour aller plus loin

- « [Niveaux d’autorisation pour les avis de sécurité de dépôt](/code-security/repository-security-advisories/permission-levels-for-repository-security-advisories) »
- « [Ajout d’un collaborateur à un avis de sécurité de dépôt](/code-security/repository-security-advisories/adding-a-collaborator-to-a-repository-security-advisory) »
