---
title: Geheime Überprüfung
intro: 'Verwende die Geheimnisüberprüfung-API, um geheime Warnungen aus einem Repository abzurufen und zu aktualisieren.'
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
redirect_from:
  - /rest/reference/secret-scanning
ms.openlocfilehash: d17aa63bb3d7e71adb310c66cabb05a83776b78f
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '147880124'
---
{% data reusables.secret-scanning.api-beta %}

## Informationen zur API für die Geheimnisüberprüfung

Die {% data variables.product.prodname_secret_scanning %}-API ermöglicht dir:

- Aktivieren oder Deaktivieren des {% data variables.product.prodname_secret_scanning %}{% ifversion secret-scanning-push-protection %} und des Pushschutzes{% endif %} für ein Repository. Weitere Informationen findest du unter [Repositorys](/rest/repos/repos#update-a-repository). Erweitere den Abschnitt „Eigenschaften des `security_and_analysis`-Objekts“ in der REST-API-Dokumentation.
- Abrufen und Aktualisieren von {% data variables.product.prodname_secret_scanning_GHAS %}-Warnungen aus einem Repository. Weitere Details findest du in den folgenden Abschnitten.

Weitere Informationen zum {% data variables.product.prodname_secret_scanning %} findest du unter [Informationen zum {% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/about-secret-scanning).
