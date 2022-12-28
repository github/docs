---
title: Blockieren von Benutzern
intro: ''
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 1649cc0627ed55be5317e0606bb29287dbd3d94a
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147065786'
---
Das Token, das zum Authentifizieren des Aufrufs verwendet wird, muss den `admin:org`-Bereich aufweisen, um blockierender Aufrufe für eine Organisation vorzunehmen. Andernfalls gibt die Antwort `HTTP 404` zurück.
