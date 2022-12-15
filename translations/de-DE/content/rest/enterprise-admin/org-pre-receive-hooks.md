---
title: Pre-Receive-Hooks für eine Organisation
intro: 'Mit der Pre-Receive-Hooks-API für eine Organisation kannst du die Erzwingung der Pre-Receive-Hooks anzeigen und ändern, die für eine Organisation verfügbar sind.'
versions:
  ghes: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 802ed40ac8e42c1f0a9ef3b6bab4a150dd68603c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147063962'
---
### Objektattribute

| Name                             | type      | BESCHREIBUNG                                               |
|----------------------------------|-----------|-----------------------------------------------------------|
| `name`                           | `string`  | Der Name des Hooks.                                     |
| `enforcement`                    | `string`  | Der Status der Erzwingung für den Hook in diesem Repository. |
| `allow_downstream_configuration` | `boolean` | Gibt an, ob Repositorys die Erzwingung außer Kraft setzen können            |
| `configuration_url`              | `string`  | URL für den Endpunkt, an dem die Erzwingung festgelegt ist.            |

Mögliche Werte für die *Erzwingung* sind `enabled`, `disabled` und`testing`. `disabled` gibt an, dass der Pre-Receive-Hook nicht ausgeführt wird. `enabled` gibt an, dass alle Pushs ausgeführt und abgelehnt werden, die zu einem anderen Status als null (0) führen. `testing` bedeutet, dass das Skript zwar ausgeführt wird, aber keine Ablehnung von Pushs auslösen wird.

`configuration_url` kann eine Verknüpfung zu diesem Endpunkt oder der globalen Konfiguration dieses Hooks sein. Nur Websiteadministratoren können auf die globale Konfiguration zugreifen.
