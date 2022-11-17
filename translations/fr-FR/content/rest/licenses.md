---
title: Licences
intro: L’API Licences vous permet de récupérer des licences open source populaires et des informations sur le fichier de licence d’un projet particulier.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
redirect_from:
  - /rest/reference/licenses
ms.openlocfilehash: f6d229eb27764441ae040abaaca211b5a894e7ef
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147064865'
---
## À propos de l’API Licences

L’API Licences utilise le [licensee open source Ruby Gem](https://github.com/benbalter/licensee) pour tenter d’identifier la licence du projet. Le licensee fait correspondre le contenu du fichier `LICENSE` d’un projet (s’il existe) à une courte liste de licences connues. Par conséquent, l’API ne prend pas en compte les licences des dépendances de projet ou d’autres moyens de documenter la licence d’un projet, comme les références au nom de la licence dans la documentation.

Si une licence est correspondante, la clé de licence et le nom retournés sont conformes à la [spécification SPDX](https://spdx.org/).

**Remarque :** Ces points de terminaison retournent également les informations de licence d’un référentiel :

- [Obtenir un dépôt](/rest/reference/repos#get-a-repository)
- [Lister les dépôts d’un utilisateur](/rest/reference/repos#list-repositories-for-a-user)
- [Lister les dépôts d’une organisation](/rest/reference/repos#list-organization-repositories)
- [Lister les duplications](/rest/reference/repos#list-forks)
- [Lister les dépôts placés en surveillance par un utilisateur](/rest/reference/activity#list-repositories-watched-by-a-user)
- [Lister les dépôts d’équipe](/rest/reference/teams#list-team-repositories)

{% warning %}

GitHub est beaucoup de choses, mais ce n’est pas un cabinet d’avocats. Par conséquent, GitHub ne fournit pas de conseils juridiques. L’utilisation de l’API Licences ou l’envoi d’un e-mail à son sujet ne constitue pas un conseil juridique ni ne crée de relation avocat-client. Si vous avez des questions sur ce que vous pouvez et ne pouvez pas faire avec une licence particulière, vous devez consulter votre propre avocat avant de continuer. En fait, vous devez toujours consulter votre propre avocat avant de prendre des décisions susceptibles d’avoir des conséquences juridiques ou qui peuvent avoir un impact sur vos droits juridiques.

GitHub a créé l’API Licences pour aider les utilisateurs à obtenir des informations sur les licences open source et les projets qui les utilisent. Nous espérons que cela vous aidera, mais gardez à l’esprit que nous ne sommes pas des avocats (du moins la plupart d’entre nous) et que nous faisons des erreurs comme tout le monde. Pour cette raison, GitHub fournit l’API sur une base « en l’état » et n’offre aucune garantie concernant les informations ou licences fournies sur ou par son intermédiaire, et exclut la responsabilité pour tous dommages résultant de l’utilisation de l’API.

{% endwarning %}
