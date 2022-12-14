---
title: Niveaux d’autorisation pour les avis de sécurité de dépôt
intro: Les actions que vous pouvez effectuer dans un avis de sécurité de dépôt dépendent de l’autorisation d’administrateur ou d’écriture sur l’avis de sécurité.
redirect_from:
- /articles/permission-levels-for-maintainer-security-advisories
- /github/managing-security-vulnerabilities/permission-levels-for-maintainer-security-advisories
- /github/managing-security-vulnerabilities/permission-levels-for-security-advisories
- /code-security/security-advisories/permission-levels-for-security-advisories
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
- Security advisories
- Vulnerabilities
- Permissions
shortTitle: Permission levels
ms.openlocfilehash: 9c2ad0d30b98b79786df09a224766bd826cb84f6
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145106290"
---
Cet article s’applique uniquement aux avis de sécurité au niveau du dépôt. Tout le monde peut contribuer aux avis de sécurité globaux dans la {% data variables.product.prodname_advisory_database %} à l’adresse [github.com/advisories](https://github.com/advisories). Les modifications des avis globaux ne changent pas ou n’affectent pas la façon dont l’avis apparaît sur le dépôt.  Pour plus d’informations, consultez « [Modification des avis de sécurité dans la {% data variables.product.prodname_advisory_database %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/editing-security-advisories-in-the-github-advisory-database) ».

## Vue d’ensemble des autorisations

{% data reusables.repositories.security-advisory-admin-permissions %} Pour plus d’informations sur l’ajout d’un collaborateur à un avis de sécurité, consultez « [Ajout d’un collaborateur à un avis de sécurité de dépôt](/code-security/repository-security-advisories/adding-a-collaborator-to-a-repository-security-advisory) ».

Action | Autorisations d’écriture | Autorisations d’administration |
------ | ----------------- | ----------------- |
Voir un brouillon d’avis de sécurité | X | X |
Ajouter des collaborateurs à l’avis de sécurité (consultez « [Ajout d’un collaborateur à un avis de sécurité de dépôt](/code-security/repository-security-advisories/adding-a-collaborator-to-a-repository-security-advisory) ») | | X |
Modifier et supprimer des commentaires dans l’avis de sécurité | X | X |
Créer une duplication (fork) privée temporaire dans l’avis de sécurité (consultez « [Collaboration dans une duplication privée temporaire pour résoudre une vulnérabilité de sécurité de dépôt](/code-security/repository-security-advisories/collaborating-in-a-temporary-private-fork-to-resolve-a-repository-security-vulnerability) ») | | X |
Ajouter une duplication privée temporaire dans l’avis de sécurité (consultez « [Collaboration dans une duplication privée temporaire pour résoudre une vulnérabilité de sécurité de dépôt](/code-security/repository-security-advisories/collaborating-in-a-temporary-private-fork-to-resolve-a-repository-security-vulnerability) ») | X | X |
Créer des demandes de tirage (pull request) dans une duplication privée temporaire (consultez « [Collaboration dans une duplication privée temporaire pour résoudre une vulnérabilité de sécurité de dépôt](/code-security/repository-security-advisories/collaborating-in-a-temporary-private-fork-to-resolve-a-repository-security-vulnerability) ») | X | X |
Fusionner des modifications dans l’avis de sécurité (consultez « [Collaboration dans une duplication privée temporaire pour résoudre une vulnérabilité de sécurité de dépôt](/code-security/repository-security-advisories/collaborating-in-a-temporary-private-fork-to-resolve-a-repository-security-vulnerability) ») | | X |
Ajouter et modifier des métadonnées dans l’avis de sécurité (consultez « [Publication d’un avis de sécurité de dépôt](/code-security/repository-security-advisories/publishing-a-repository-security-advisory) ») | X | X |
Ajouter et modifier des crédits pour un avis de sécurité (consultez « [Modification d’un avis de sécurité de dépôt](/code-security/repository-security-advisories/editing-a-repository-security-advisory) ») | X | X |
Fermer le brouillon d’avis de sécurité | | X |
Publier l’avis de sécurité (consultez « [Publication d’un avis de sécurité de dépôt](/code-security/repository-security-advisories/publishing-a-repository-security-advisory) ») | | X |

## Pour aller plus loin

- « [Ajout d’un collaborateur à un avis de sécurité de dépôt](/code-security/repository-security-advisories/adding-a-collaborator-to-a-repository-security-advisory) »
- « [Collaboration dans une duplication privée temporaire pour résoudre une vulnérabilité de sécurité de dépôt](/code-security/repository-security-advisories/collaborating-in-a-temporary-private-fork-to-resolve-a-repository-security-vulnerability) »
- « [Suppression d’un collaborateur d’un avis de sécurité de dépôt](/code-security/repository-security-advisories/removing-a-collaborator-from-a-repository-security-advisory) »
- « [Retrait d’un avis de sécurité de dépôt](/code-security/repository-security-advisories/withdrawing-a-repository-security-advisory) »
