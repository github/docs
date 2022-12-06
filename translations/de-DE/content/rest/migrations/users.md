---
title: Benutzermigrationen
allowTitleToDifferFromFilename: true
shortTitle: Users
intro: ''
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>3.3'
  ghae: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 500f1c4d73dc3bab613641072387e42d5f8894d4
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '145109216'
---
## Informationen zur API für Benutzermigrationen

Die API für Benutzermigrationen ist nur für authentifizierte Kontobesitzer*innen verfügbar. Weitere Informationen findest du unter [Andere Authentifizierungsmethoden](/rest/overview/other-authentication-methods).

{% data variables.migrations.user_migrations_intro %} Eine Liste der Migrationsdaten, die du herunterladen kannst, findest du unter [Herunterladen eines Benutzermigrationsarchivs](#download-a-user-migration-archive).

Um ein Archiv herunterladen zu können, musst du zuerst eine Benutzermigration starten. Sobald der Status der Migration `exported` lautet, kannst du die Migration herunterladen.

Nachdem du ein Migrationsarchiv erstellt hast, steht es sieben Tage für den Download bereit. Du kannst das Benutzermigrationsarchiv bei Bedarf jedoch auch früher löschen. Nach dem Export der Migration (`exported`) kannst du dein Repository entsperren, um das Repository erneut zu verwenden oder zu löschen, wenn du die Quelldaten nicht mehr benötigst.
