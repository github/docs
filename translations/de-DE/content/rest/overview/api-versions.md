---
title: API-Versionen
shortTitle: API Versions
intro: 'Bei jeder Anforderung an die REST-API musst du angeben, welche Version der REST-API verwendet werden soll.'
versions:
  feature: api-date-versioning
ms.openlocfilehash: c1209120fab4c4cc26962991ad48b76638627db5
ms.sourcegitcommit: d2f0b59ed096b9e68ef8f6fa019cd925165762ec
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/29/2022
ms.locfileid: '148184404'
---
## Informationen zur API-Versionsverwaltung

{% data reusables.rest-api.about-api-versions %}

{% ifversion ghes %}

## Informationen zur {% data variables.product.prodname_ghe_server %}-Versionsverwaltung und REST-API-Versionsverwaltung

{% data variables.product.prodname_ghe_server %}-Versionen sind von REST-API-Versionen entkoppelt. Du kannst ein Upgrade deiner {% data variables.product.prodname_ghe_server %}-Version durchführen, aber dieselbe REST-API-Version beibehalten, solange die API-Version in der {% data variables.product.prodname_ghe_server %}-Version enthalten ist. Ebenso kannst du ein Upgrade deiner REST-API-Version durchführen, ohne deine {% data variables.product.prodname_ghe_server %}-Version zu aktualisieren, solange die von dir ausgewählte neue REST-API-Version für deine {% data variables.product.prodname_ghe_server %}-Version verfügbar ist.

In den {% data variables.product.prodname_ghe_server %}-Versionshinweisen ist angegeben, wenn eine REST-API-Version nicht mehr unterstützt wird. Weitere Informationen findest du in den „[Versionshinweisen](/admin/release-notes)“.

{% endif %}

## Angeben einer API-Version

Du solltest den `X-GitHub-Api-Version`-Header verwenden, um eine API-Version anzugeben. Beispiel:

```shell
$ curl {% data reusables.rest-api.version-header %} https://api.github.com/zen
```

Anforderungen ohne `X-GitHub-Api-Version`-Header verwenden standardmäßig die Version `{{ initialRestVersioningReleaseDate }}`.

Wenn du eine API-Version angibst, die nicht mehr unterstützt wird, wird eine `400` Fehlermeldung angezeigt.

## Upgrade auf eine neue API-Version

Bevor du ein Upgrade auf eine neue REST-API-Version durchführst, solltest du das Änderungsprotokoll der Breaking Changes lesen, um zu verstehen, welche Breaking Changes enthalten sind und um weitere Informationen über das Upgrade auf diese bestimmte API-Version zu erhalten. Weitere Informationen findest du unter „[Breaking Changes](/rest/overview/breaking-changes)“.

Wenn du deine Integration aktualisierst, um die neue API-Version im Header `X-GitHub-Api-Version` anzugeben, musst du auch alle erforderlichen Änderungen vornehmen, damit deine Integration mit der neuen API-Version funktioniert.

Sobald deine Integration aktualisiert ist, teste sie, um zu überprüfen, ob sie mit der neuen API-Version funktioniert.

## Unterstützte API-Versionen

Die folgenden REST-API-Versionen werden derzeit unterstützt:

{% for apiVersion in allVersions[currentVersion].apiVersions %} {{ apiVersion }} {% endfor %}

Du kannst auch eine API-Anforderung stellen, um alle unterstützten API-Versionen abzurufen. Weitere Informationen findest du unter „[Abrufen aller API-Versionen](/rest/meta#get-all-api-versions)“.
