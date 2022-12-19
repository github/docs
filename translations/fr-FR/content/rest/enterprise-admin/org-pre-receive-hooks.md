---
title: Crochets de préréception d’une organisation
intro: L’API Hooks de pré-réception de l’organisation vous permet de visualiser et de modifier l’application des hooks de pré-réception qui sont disponibles pour une organisation.
versions:
  ghes: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 802ed40ac8e42c1f0a9ef3b6bab4a150dd68603c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147063961'
---
### Attributs d’objet

| Nom                             | Type      | Description                                               |
|----------------------------------|-----------|-----------------------------------------------------------|
| `name`                           | `string`  | Nom du hook.                                     |
| `enforcement`                    | `string`  | État d’application du hook sur ce référentiel. |
| `allow_downstream_configuration` | `boolean` | Si des référentiels peuvent remplacer l’application.            |
| `configuration_url`              | `string`  | URL du point de terminaison où l’application est définie.            |

Les valeurs possibles pour *enforcement* sont `enabled`, `disabled` et `testing`. `disabled` indique que le hook pré-réception ne s’exécute pas. `enabled` indique qu’il s’exécute et rejette tous les envois qui entraînent un état différent de zéro. `testing` signifie que le script s’exécute, mais n’entraîne pas de rejet des envois.

`configuration_url` peut être un lien vers ce point de terminaison ou la configuration globale de ce hook. Seuls les administrateurs de site sont en mesure d’accéder à la configuration globale.
