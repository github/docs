---
title: Hooks de pré-réception
intro: 'L’API Hooks de pré-réception vous permet de créer, répertorier, mettre à jour et supprimer des hooks de pré-réception.'
versions:
  ghes: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: dd776e7ec95a970f025d4de1ec03f07b2a7b29f7
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147066153'
---
*Uniquement disponible pour les administrateurs de site [authentifiés](/rest/overview/resources-in-the-rest-api#authentication).* Les utilisateurs normaux recevront une réponse `404` s’ils essaient d’y accéder.

### Attributs d’objet

#### Hook de pré-réception

| Nom                             | Type      | Description                                                     |
|----------------------------------|-----------|-----------------------------------------------------------------|
| `name`                           | `string`  | Nom du hook.                                           |
| `script`                         | `string`  | Script exécuté par le hook.                                  |
| `script_repository`              | `object`  | Référentiel GitHub où le script est conservé.                 |
| `environment`                    | `object`  | Environnement de pré-réception dans lequel le script est exécuté.       |
| `enforcement`                    | `string`  | État d’application de ce hook.                         |
| `allow_downstream_configuration` | `boolean` | Indique si l’application peut être remplacée au niveau de l’organisation ou du référentiel. |

Les valeurs possibles pour *enforcement* sont `enabled`, `disabled` et `testing`. `disabled` indique que le hook pré-réception ne s’exécute pas. `enabled` indique qu’il s’exécute et rejette tous les envois qui entraînent un état différent de zéro. `testing` signifie que le script s’exécute, mais n’entraîne pas de rejet des envois.
