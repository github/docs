---
title: Pre-Receive-Hooks für Repositorys
intro: 'Mit der Repository-Pre-Receive-Hooks-API kannst du die Erzwingung der Pre-Receive-Hooks anzeigen und ändern, die für ein Repository verfügbar sind.'
versions:
  ghes: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 63ba6f4f7d67b43dd39609a6520a0938365cfc12
ms.sourcegitcommit: 770ed406ec075528ec9c9695aa4bfdc8c8b25fd3
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/12/2022
ms.locfileid: '147888468'
---
### Objektattribute

| Name                | type     | BESCHREIBUNG                                               |
|---------------------|----------|-----------------------------------------------------------|
| `name`              | `string` | Der Name des Hooks.                                     |
| `enforcement`       | `string` | Der Status der Erzwingung für den Hook in diesem Repository. |
| `configuration_url` | `string` | URL für den Endpunkt, an dem die Erzwingung festgelegt ist.            |

Mögliche Werte für die *Erzwingung* sind `enabled`, `disabled` und`testing`. `disabled` gibt an, dass der Pre-Receive-Hook nicht ausgeführt wird. `enabled` gibt an, dass alle Pushs ausgeführt und abgelehnt werden, die zu einem anderen Status als null (0) führen. `testing` bedeutet, dass das Skript zwar ausgeführt wird, aber keine Ablehnung von Pushs auslösen wird.

`configuration_url` kann ein Link zu diesem Repository, seinem Organisationsbesitzer oder der globalen Konfiguration sein. Die Autorisierung für den Zugriff auf den Endpunkt unter `configuration_url` wird auf Besitzer- oder Websiteadministratorebene bestimmt.
