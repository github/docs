---
title: Pre-Receive-Hooks
intro: 'Mit der Pre-Receive-Hooks-API kannst du Hooks erstellen, auflisten, aktualisieren und löschen.'
versions:
  ghes: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: dd776e7ec95a970f025d4de1ec03f07b2a7b29f7
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147066154'
---
*Sie ist nur für [authentifizierte](/rest/overview/resources-in-the-rest-api#authentication) Websiteadministratoren verfügbar.* Normale Benutzer erhalten eine `404`-Antwort, wenn sie versuchen, darauf zuzugreifen.

### Objektattribute

#### Pre-Receive-Hook

| Name                             | type      | BESCHREIBUNG                                                     |
|----------------------------------|-----------|-----------------------------------------------------------------|
| `name`                           | `string`  | Der Name des Hooks.                                           |
| `script`                         | `string`  | Das Skript, das der Hook ausführt                                  |
| `script_repository`              | `object`  | Das GitHub Repository, in dem das Skript aufbewahrt wird                 |
| `environment`                    | `object`  | Die vorab empfangene Umgebung, in der das Skript ausgeführt wird       |
| `enforcement`                    | `string`  | Der Status der Erzwingung für diesen Hook                         |
| `allow_downstream_configuration` | `boolean` | Information, ob die Erzwingung auf Organisations- oder Repositoryebene außer Kraft gesetzt werden kann |

Mögliche Werte für die *Erzwingung* sind `enabled`, `disabled` und`testing`. `disabled` gibt an, dass der Pre-Receive-Hook nicht ausgeführt wird. `enabled` gibt an, dass alle Pushs ausgeführt und abgelehnt werden, die zu einem anderen Status als null (0) führen. `testing` bedeutet, dass das Skript zwar ausgeführt wird, aber keine Ablehnung von Pushs auslösen wird.
