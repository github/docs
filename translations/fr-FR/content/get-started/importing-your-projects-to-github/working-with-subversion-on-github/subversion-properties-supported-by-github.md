---
title: Propriétés de Subversion prises en charge par GitHub
intro: 'Il existe plusieurs workflows et propriétés Subversion similaires aux fonctionnalités existantes dans {% data variables.product.product_name %}.'
redirect_from:
  - /articles/subversion-properties-supported-by-github
  - /github/importing-your-projects-to-github/subversion-properties-supported-by-github
  - /github/importing-your-projects-to-github/working-with-subversion-on-github/subversion-properties-supported-by-github
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
shortTitle: Properties supported by GitHub
ms.openlocfilehash: 48c041509100455f6ffcf02d262fd12eafbbffbc
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145128934'
---
## Fichiers exécutables (`svn:executable`)

Nous convertissons les propriétés `svn:executable` en mettant à jour le mode des fichiers directement avant l’ajout au dépôt Git.

## Types MIME (`svn:mime-type`)

{% data variables.product.product_name %} suit en interne les propriétés mime-type des fichiers ainsi que les commits qui ont ajouté les fichiers.

## Ignorer les éléments non versionnés (`svn:ignore`)

Si vous avez défini les fichiers et les répertoires pour qu’ils soient ignorés dans Subversion, {% data variables.product.product_name %} les suit en interne. Les fichiers ignorés par les clients Subversion sont totalement séparés des entrées dans un fichier *.gitignore*.

## Propriétés non prises en charge actuellement

{% data variables.product.product_name %} ne prend actuellement pas en charge `svn:externals`, `svn:global-ignores`, ni aucune des propriétés non listées ci-dessus, y compris les propriétés personnalisées.
