---
title: "Préparation de l’obligation d’une authentification à 2\_facteurs dans votre organisation"
intro: 'Avant d’exiger l’authentification à deux facteurs (2FA), vous pouvez informer les utilisateurs du changement à venir et vérifier qui utilise déjà 2FA.'
redirect_from:
  - /articles/preparing-to-require-two-factor-authentication-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/preparing-to-require-two-factor-authentication-in-your-organization
  - /organizations/keeping-your-organization-secure/preparing-to-require-two-factor-authentication-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Prepare to require 2FA
ms.openlocfilehash: 67083113143145a6de7bba5412568609414f12a8
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145128538'
---
Nous vous recommandons d’avertir les {% ifversion fpt or ghec %}membres de l’organisation, les collaborateurs extérieurs et les gestionnaires de facturation{% else %}membres de l’organisation et les collaborateurs extérieurs{% endif %} au moins une semaine avant d’exiger une authentification à 2 facteurs dans votre organisation.

Quand vous rendez obligatoire l’utilisation d’une authentification à 2 facteurs pour votre organisation, ses membres, collaborateurs extérieurs et gestionnaires de facturation (y compris les comptes de bot) qui n’utilisent pas une authentification à 2 facteurs sont supprimés de l’organisation et perdent l’accès à ses dépôts. Ils perdent également l’accès à leurs duplications (fork) des dépôts privés de l’organisation.

Avant d’exiger une authentification à 2 facteurs dans votre organisation, nous vous recommandons d’effectuer les tâches suivantes :
  - [Activer l’authentification à 2 facteurs](/articles/securing-your-account-with-two-factor-authentication-2fa/) sur votre compte personnel
  - Demander aux personnes de votre organisation de configurer l’authentification à 2 facteurs pour leurs comptes
  - Voir si l’[authentification à 2 facteurs est activée pour les utilisateurs dans votre organisation](/articles/viewing-whether-users-in-your-organization-have-2fa-enabled/)
  - Avertir les utilisateurs qu’une fois l’authentification à 2 facteurs activée, ils sont automatiquement supprimés de l’organisation s’ils n’ont pas configuré cette authentification à 2 facteurs
