---
title: Verwaltungskonsole
intro: 'Die Verwaltungskonsole API hilft dir, deine {% data variables.product.product_name %}-Installation zu verwalten.'
versions:
  ghes: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: da38513a04525b858e041188eec6f691db9be1d9
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147065538'
---
{% tip %}

Du musst die Portnummer explizit festlegen, wenn du API-Aufrufe an die Verwaltungskonsole sendest. Wenn TLS in deinem Unternehmen aktiviert ist, lautet die Portnummer `8443`, andernfalls lautet die Portnummer `8080`.

Wenn du keine Portnummer angeben möchtest, musst du dein Tool so konfigurieren, dass bei Weiterleitungen eine automatische Umleitung erfolgt.

Bevor du ein [eigenes TLS-Zertifikat hinzufügst](/enterprise/admin/guides/installation/configuring-tls/), musst du bei Verwendung von `curl` möglicherweise auch das [Flag `-k`](http://curl.haxx.se/docs/manpage.html#-k) hinzufügen, da {% data variables.product.product_name %} ein selbstsigniertes Zertifikat verwendet.

{% endtip %}

### Authentifizierung

Du musst dein [Kennwort für die Verwaltungskonsole](/enterprise/admin/articles/accessing-the-management-console/) als Authentifizierungstoken an jeden API-Endpunkt der Verwaltungskonsole mit Ausnahme von [`/setup/api/start`](#create-a-github-enterprise-server-license) übergeben.

Verwende den Parameter `api_key`, um dieses Token mit jeder Anforderung zu senden. Beispiel:

```shell
$ curl -L 'https://<em>hostname</em>:<em>admin_port</em>/setup/api?api_key=<em>your-amazing-password</em>'
```

Du kannst auch die HTTP-Standardauthentifizierung verwenden, um dieses Token zu senden. Beispiel:

```shell
$ curl -L -u "api_key:<em>your-amazing-password</em>" 'https://<em>hostname</em>:<em>admin_port</em>/setup/api'
```
