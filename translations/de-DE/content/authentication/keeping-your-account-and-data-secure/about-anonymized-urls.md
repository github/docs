---
title: Informationen zu anonymisierten URLs
intro: 'Wenn du ein Bild oder Video zu {% data variables.product.product_name %} hochlädst, wird die URL des Bilds oder Videos geändert, sodass deine Daten nicht nachverfolgbar sind.'
redirect_from:
  - /articles/why-do-my-images-have-strange-urls
  - /articles/about-anonymized-image-urls
  - /authenticating-to-github/about-anonymized-image-urls
  - /github/authenticating-to-github/about-anonymized-urls
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/about-anonymized-urls
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
ms.openlocfilehash: b96c01144d28d668d33e96e4067801395aaa8275
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '145106599'
---
{% data variables.product.product_name %} verwendet das [Open-Source-Projekt Camo](https://github.com/atmos/camo) zum Hosten deiner Bilder. Camo generiert einen anonymen URL-Proxy für jede Datei, der Details zu deinem Browser und verwandte Daten vor anderen Benutzer*innen verbirgt. Die URL beginnt mit `https://<subdomain>.githubusercontent.com/` und enthält verschiedene Unterdomänen, je nachdem, wie du das Bild hochgeladen hast. 

Für Videos werden ebenfalls anonymisierte URLs im selben Format wie die Bild-URLs erstellt, sie werden aber nicht über Camo verarbeitet. Dies liegt daran, dass {% data variables.product.prodname_dotcom %} keine extern gehosteten Videos unterstützt, daher ist die anonymisierte URL ein Link zum hochgeladenen Video, das von {% data variables.product.prodname_dotcom %} gehostet wird.

Alle Personen, die deine anonymisierte URL direkt oder indirekt erhalten, können dein Bild oder Video anzeigen. Um vertrauliche Mediendateien zu schützen, verwende nicht Camo, sondern beschränke diese auf ein privates Netzwerk oder einen Server, der eine Authentifizierung erfordert.

## Probleme mit Camo beheben

In seltenen Fällen erscheinen Bilder, die mit Camo verarbeitet werden, möglicherweise nicht auf {% data variables.product.prodname_dotcom %}. Nachfolgend findest du einige Schritte, mit denen du feststellen kannst, wo das Problem liegt.

{% windows %}

{% tip %}

Windows-Benutzer müssen entweder Git PowerShell verwenden (zusätzlich zu [{% data variables.product.prodname_desktop %} installiert](https://desktop.github.com/)) oder [curl für Windows](http://curl.haxx.se/download.html) herunterladen.

{% endtip %}

{% endwindows %}

### Ein Bild wird nicht angezeigt

Wenn ein Bild in deinem Browser angezeigt wird, aber nicht auf {% data variables.product.prodname_dotcom %}, kannst du versuchen, es lokal anzufordern.

{% data reusables.command_line.open_the_multi_os_terminal %}
1. Fordere die Bildheader mithilfe von `curl` an.
  ```shell
  $ curl -I https://www.my-server.com/images/some-image.png
  > HTTP/2 200
  > Date: Fri, 06 Jun 2014 07:27:43 GMT
  > Expires: Sun, 06 Jul 2014 07:27:43 GMT
  > Content-Type: image/x-png
  > Server: Google Frontend
  > Content-Length: 6507
  ```
3. Überprüfe den Wert von `Content-Type`. In diesem Fall ist dies `image/x-png`.
4. Überprüfe den Inhaltstyp anhand der [Liste der von Camo unterstützten Typen](https://github.com/atmos/camo/blob/master/mime-types.json).

Wenn dein Inhaltstyp von Camo nicht unterstützt wird, kannst du mehrere Aktionen versuchen:
  * Wenn du der Besitzer des Servers bist, der das Bild verwaltet, ändere die Einstellungen so, dass er einen korrekten Inhaltstyp für Bilder zurückgibt.
  * Wenn du einen externen Dienst zum Verwalten von Bildern verwendest, wende Dich an den Support für diesen Dienst.
  * Stelle einen Pull Request an Camo, um deinen Inhaltstyp zur Liste hinzuzufügen.

### Ein kürzlich geändertes Bild wird nicht aktualisiert

Wenn du ein Bild kürzlich geändert hast und die Änderung in deinem Browser angezeigt wird, aber nicht auf {% data variables.product.prodname_dotcom %}, kannst du versuchen, den Cache des Bildes zurückzusetzen.

{% data reusables.command_line.open_the_multi_os_terminal %}
1. Fordere die Bildheader mithilfe von `curl` an.
  ```shell
  $ curl -I https://www.my-server.com/images/some-image.png
  > HTTP/2 200
  > Expires: Fri, 01 Jan 1984 00:00:00 GMT
  > Content-Type: image/png
  > Content-Length: 2339
  > Server: Jetty(8.y.z-SNAPSHOT)
  ```

Überprüfe den Wert von `Cache-Control`. In diesem Beispiel ist `Cache-Control` nicht vorhanden. Dabei trifft Folgendes zu:
  * Wenn sich der Server, auf dem das Bild gehostet wird, in deinem Besitz befindet, ändere ihn so, dass er den `Cache-Control`-Wert `no-cache` für Bilder zurückgibt.
  * Wenn du einen externen Dienst zum Verwalten von Bildern verwendest, wende Dich an den Support für diesen Dienst.

 Wenn `Cache-Control` auf `no-cache` *festgelegt* ist, wende dich an den {% data variables.contact.contact_support %}, oder durchsuche das {% data variables.contact.community_support_forum %}.

### Ein Bild aus dem Zwischenspeicher von Camo entfernen

Durch das Bereinigen des Caches wird jeder {% data variables.product.prodname_dotcom %}-Benutzer dazu gezwungen, das Bild erneut anzufordern. Daher solltest du diesen Vorgang selten und nur dann durchführen, wenn die oben genannten Schritte nicht funktioniert haben.

{% data reusables.command_line.open_the_multi_os_terminal %}
1. Bereinige das Bild mithilfe von `curl -X PURGE` in der Camo-URL.
  ```shell
  $ curl -X PURGE https://camo.githubusercontent.com/4d04abe0044d94fefcf9af2133223....
  > {"status": "ok", "id": "216-8675309-1008701"}
  ```

### Bilder in privaten Netzwerken anzeigen

Wenn ein Bild von einem privaten Netzwerk oder von einem Server bereitgestellt wird, der eine Authentifizierung erfordert, kann es nicht von {% data variables.product.prodname_dotcom %} angezeigt werden. Tatsächlich kann es von keinem Benutzer eingesehen werden, ohne dass er dazu aufgefordert wird, sich am Server anzumelden.

Um dieses Problem zu beheben, verschiebe das Bild bitte auf einen öffentlich zugänglichen Dienst.

## Weiterführende Themen

- [Weiterleiten von Benutzerbildern](https://github.com/blog/1766-proxying-user-images) im {% data variables.product.prodname_blog %}
