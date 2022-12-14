---
title: Pre-Receive-Umgebungen
intro: 'Mit der API für Pre-Receive-Umgebungen kannst du Umgebungen für Pre-Receive-Hooks erstellen, auflisten, aktualisieren und löschen.'
versions:
  ghes: '*'
  ghae: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 9db8635691ae2f8fcb8649b648948763168081ac
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '147883262'
---
*Sie ist nur für [authentifizierte](/rest/overview/resources-in-the-rest-api#authentication) Websiteadministratoren verfügbar.* Normale Benutzer erhalten eine `404`-Antwort, wenn sie versuchen, darauf zuzugreifen.

### Objektattribute

#### Pre-Receive-Umgebung

| Name                  | type      | BESCHREIBUNG                                                                |
|-----------------------|-----------|----------------------------------------------------------------------------|
| `name`                | `string`  | Der Name der Umgebung, wie auf der Benutzeroberfläche angezeigt.                        |
| `image_url`           | `string`  | URL zum Tarball, der heruntergeladen und extrahiert wird.                  |
| `default_environment` | `boolean` | Gibt an, ob dies die Standardumgebung im Lieferumfang von {% data variables.product.product_name %} ist. |
| `download`            | `object`  | Der Downloadstatus dieser Umgebung.                                        |
| `hooks_count`         | `integer` | Die Anzahl der Pre-Receive-Hooks, die diese Umgebung verwenden.                 |

#### Download der Pre-Receive-Umgebung

| Name            | type     | BESCHREIBUNG                                             |
|-----------------|----------|---------------------------------------------------------|
| `state`         | `string` | Der Status des letzten Downloads.                  |
| `downloaded_at` | `string` | Die Uhrzeit des Starts des letzten Downloads.         |
| `message`       | `string` | Bei Fehlschlagen werden alle Fehlermeldungen ausgegeben. |

Mögliche Werte für `state` sind `not_started`, `in_progress` `success`, `failed`.
