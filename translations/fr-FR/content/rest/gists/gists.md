---
title: Gists
intro: 'L’API Gists permet à l’utilisateur autorisé de lister, de créer, de mettre à jour et de supprimer les gists publics sur GitHub.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 47961c5dfeeb5f320bbac67ffb0573c31709bd5b
ms.sourcegitcommit: cfe91073c844cb762131b2de9fb41f7f9db792fc
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/24/2022
ms.locfileid: '148181301'
---
## À propos de l’API Gists

L’API Gists vous permet d’afficher et de modifier des gists. Pour plus d’informations sur les gists, consultez « [Modification et partage de contenu avec des gists](/get-started/writing-on-github/editing-and-sharing-content-with-gists) ».

### Authentification

Vous pouvez lire les gists publics {% ifversion ghae or ghes %}, et les créer pour les utilisateurs anonymes sans jeton. {% else %} anonymement, mais vous devez être connecté à GitHub pour créer des gists.{% endif %} Pour lire ou écrire des gists au nom d’un utilisateur, vous avez besoin de l’étendue OAuth gist et d’un jeton. Pour plus d’informations, consultez « [Étendues pour les applications OAuth](/developers/apps/scopes-for-oauth-apps) ».

<!-- When an OAuth client does not have the gists scope, the API will return a 404 "Not Found" response regardless of the validity of the credentials. The API will return a 401 "Bad credentials" response if the gists scope was given to the application but the credentials are invalid. -->

### Troncation

L’API Gists fournit jusqu’à un mégaoctet de contenu pour chaque fichier du gist. Chaque fichier retourné pour un gist via l’API a une clé appelée `truncated`. Si `truncated` est `true`, le fichier est trop volumineux et seule une partie du contenu a été retournée dans `content`.

Si vous avez besoin du contenu complet du fichier, vous pouvez effectuer une requête `GET` à l’URL spécifiée par `raw_url`. N’oubliez pas que pour les fichiers de plus de dix mégaoctets, vous devez cloner le gist via l’URL fournie par `git_pull_url`.

Outre le contenu d’un fichier spécifique tronqué, la liste entière des fichiers peut être tronquée si le nombre total dépasse 300 fichiers. Si la clé `truncated` de niveau supérieur est `true`, seuls les 300 premiers fichiers ont été retournés dans la liste des fichiers. Si vous avez besoin d’extraire tous les fichiers du gist, vous devez cloner le gist via l’URL fournie par `git_pull_url`.

### Types de médias personnalisés pour les gists

Il s’agit des types de médias pris en charge pour extraire le contenu d’un gist.

    application/vnd.github.raw
    application/vnd.github.base64

Pour plus d’informations, consultez « [Types de médias](/rest/overview/media-types) ».
