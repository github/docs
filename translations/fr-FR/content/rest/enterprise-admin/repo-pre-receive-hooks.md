---
title: Crochets de préréception d’un dépôt
intro: L’API Hooks de pré-réception d’un dépôt vous permet de visualiser et de modifier l’application des hooks de pré-réception qui sont disponibles pour un dépôt.
versions:
  ghes: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 63ba6f4f7d67b43dd39609a6520a0938365cfc12
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147065161'
---
### Attributs d’objet

| Nom                | Type     | Description                                               |
|---------------------|----------|-----------------------------------------------------------|
| `name`              | `string` | Nom du hook.                                     |
| `enforcement`       | `string` | État d’application du hook sur ce référentiel. |
| `configuration_url` | `string` | URL du point de terminaison où l’application est définie.            |

Les valeurs possibles pour *enforcement* sont `enabled`, `disabled` et `testing`. `disabled` indique que le hook pré-réception ne s’exécute pas. `enabled` indique qu’il s’exécute et rejette tous les envois qui entraînent un état différent de zéro. `testing` signifie que le script s’exécute, mais n’entraîne pas de rejet des envois.

`configuration_url` peut être un lien vers ce référentiel, le propriétaire de l’organisation ou la configuration globale. L’autorisation d’accéder au point de terminaison sur `configuration_url` est déterminée au niveau du propriétaire ou de l’administrateur de site.
