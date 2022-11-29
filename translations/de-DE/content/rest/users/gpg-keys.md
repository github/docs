---
title: GPG-Schlüssel
intro: ''
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 0781b20628b48b9ca5d411ead6f3ddf1bcd1c6d4
ms.sourcegitcommit: 96bbb6b8f3c9172209d80cb1502017ace3019807
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '147879172'
---
## Informationen zur GPG-Schlüssel-API für Benutzer*innen

Die im Antwortfeld `public_key` zurückgegebenen Daten sind kein GPG-formatierter Schlüssel. Wenn ein Benutzer einen GPG-Schlüssel hochlädt, wird dieser analysiert, und der kryptografische öffentliche Schlüssel wird extrahiert und gespeichert. Dieser kryptografische Schlüssel ist das, was von den APIs auf dieser Seite zurückgegeben wird. Dieser Schlüssel kann von Programmen wie GPG nicht direkt verwendet werden.

{% data reusables.user-settings.user-api %}
