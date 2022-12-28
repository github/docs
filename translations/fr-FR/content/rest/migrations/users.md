---
title: Migrations d’utilisateurs
allowTitleToDifferFromFilename: true
shortTitle: Users
intro: ''
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>3.3'
  ghae: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 500f1c4d73dc3bab613641072387e42d5f8894d4
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145109217'
---
## À propos de l’API Migrations d’utilisateurs

L’API Migrations d’utilisateurs est disponible uniquement pour les propriétaires de comptes authentifiés. Pour plus d’informations, consultez « [Autres méthodes d’authentification](/rest/overview/other-authentication-methods) ».

{% data variables.migrations.user_migrations_intro %} Pour obtenir la liste des données de migration que vous pouvez télécharger, consultez « [Télécharger une archive de migration d’utilisateur](#download-a-user-migration-archive) ».

Pour télécharger une archive, vous devez commencer par démarrer une migration d’utilisateur. Une fois que le statut de la migration est `exported`, vous pouvez télécharger la migration.

Une fois que vous aurez créé une archive de migration, celle-ci sera disponible pour le téléchargement pendant sept jours. Toutefois, vous pouvez supprimer l’archive de migration d’utilisateur plus tôt si vous le souhaitez. Vous pouvez déverrouiller votre dépôt quand la migration est `exported` afin de recommencer à utiliser votre dépôt ou de le supprimer si vous n’avez plus besoin des données sources.
