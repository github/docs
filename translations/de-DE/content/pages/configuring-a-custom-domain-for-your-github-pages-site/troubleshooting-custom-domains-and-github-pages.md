---
title: Problembehandlung bei benutzerdefinierten Domänen und GitHub-Seiten
intro: 'Bei Problemen mit benutzerdefinierten Domänen oder HTTPS für deine {% data variables.product.prodname_pages %}-Website kannst du zur Fehlerbehebung nach häufigen Fehlern suchen.'
redirect_from:
  - /articles/my-custom-domain-isn-t-working
  - /articles/custom-domain-isn-t-working
  - /articles/troubleshooting-custom-domains
  - /articles/troubleshooting-custom-domains-and-github-pages
  - /github/working-with-github-pages/troubleshooting-custom-domains-and-github-pages
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Troubleshoot a custom domain
ms.openlocfilehash: ce6251dbe96d531462c5c664dc9000f138059889
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147428388'
---
## _CNAME_-Fehler

{% ifversion pages-custom-workflow %} Wenn du die Veröffentlichung über einen benutzerdefinierten {% data variables.product.prodname_actions %}-Workflow vornimmst, wird jede _CNAME_-Datei ignoriert und ist nicht erforderlich.{% endif %}

Wenn die Veröffentlichung über einen Branch erfolgt, werden benutzerdefinierte Domänen in einer _CNAME_-Datei im Stamm deiner Veröffentlichungsquelle gespeichert. Du kannst diese Datei wahlweise in den Repository-Einstellungen oder manuell hinzufügen oder aktualisieren. Weitere Informationen findest du unter „[Verwalten einer benutzerdefinierten Domäne für deine {% data variables.product.prodname_pages %}-Website](/articles/managing-a-custom-domain-for-your-github-pages-site)“.

Damit deine Website in der richtigen Domäne gerendert wird, prüfe, ob die <_CNAME_-Datei sich noch im Repository befindet. Zahlreiche Generatoren für statische Websites erzwingen beispielsweise einen Push-Vorgang an das Repository, wodurch allenfalls die _CNAME_-Datei überschrieben wird, die du beim Konfigurieren der benutzerdefinierten Domäne in das Repository eingefügt hast. Wenn du deine Website lokal erstellst und generierte Dateien per Push-Vorgang an {% data variables.product.product_name %} überträgst, musst du in jedem Fall zunächst einen Pull-Vorgang für den Commit vornehmen, mit dem die _CNAME_-Datei in das lokale Repository eingefügt wurde, sodass die Datei in den Build aufgenommen wird.

Stelle dann sicher, dass die _CNAME_-Datei ordnungsgemäß formatiert ist.

- Der Dateiname der _CNAME_-Datei muss in Großbuchstaben geschrieben sein.
- Der Name der _CNAME_-Datei darf nur eine Domäne enthalten. Sollen mehrere Domänen auf deine Website verweisen, lasse dir von deinem DNS-Provider eine Weiterleitung einrichten.
- Die _CNAME_-Datei darf nur den Domänennamen enthalten. Beispiel: `www.example.com`, `blog.example.com` oder `example.com`.
- Der Domänenname muss für alle {% data variables.product.prodname_pages %}-Websites eindeutig sein. Wenn beispielsweise die _CNAME_-Datei eines anderen Repositorys `example.com` enthält, kannst du `example.com` in der _CNAME_-Datei für dein Repository nicht verwenden.

## Fehlerhafte DNS-Konfiguration

Falls du die Standarddomäne für deine Website nicht ohne Weiteres auf die benutzerdefinierte Domäne verweisen kannst, wende dich an deinen DNS-Provider.

Du kannst auch eine der folgenden Methoden verwenden, um zu testen, ob die DNS-Einträge deiner benutzerdefinierten Domäne ordnungsgemäß konfiguriert sind:

- Ein CLI-Tool wie z. B. `dig`. Weitere Informationen findest du unter „[Verwalten einer benutzerdefinierten Domäne für deine {% data variables.product.prodname_pages %}-Website](/articles/managing-a-custom-domain-for-your-github-pages-site)“.
- Ein Online-DNS-Lookuptool.

## Nicht unterstützte, benutzerdefinierte Domänen-Namen

Wird deine benutzerdefinierte Domäne nicht unterstützt, musst du deine Domäne durch eine unterstützte Domäne ersetzen. Du kannst auch bei deinem DNS-Provider erfragen, ob Weiterleitungsdienste für Domänennamen angeboten werden.

Deine Website darf nicht:
- Mehrere Apex-Domänen umfassen. Beispielsweise sowohl `example.com` als auch `anotherexample.com`.
- Verwende mehrere `www`-Unterdomänen. Beispielsweise sowohl `www.example.com` als auch `www.anotherexample.com`.
- Sowohl eine Apex-Domäne als auch eine benutzerdefinierte Subdomäne umfassen. Beispielsweise sowohl `example.com` als auch `docs.example.com`.

  Die einzige Ausnahme ist die `www`-Unterdomäne. Wenn die sie ordnungsgemäß konfiguriert ist, wird die `www`-Unterdomäne automatisch an die Apex-Domäne umgeleitet. Weitere Informationen findest du unter „[Verwalten einer benutzerdefinierten Domäne für deine {% data variables.product.prodname_pages %}-Website](/github/working-with-github-pages/managing-a-custom-domain-for-your-github-pages-site#configuring-an-apex-domain)“.

{% data reusables.pages.wildcard-dns-warning %}

Eine Liste der unterstützten benutzerdefinierten Domänen findest du unter „[Informationen zu benutzerdefinierten Domänen und {% data variables.product.prodname_pages %}](/articles/about-custom-domains-and-github-pages/#supported-custom-domains)“.

## HTTPS-Fehler

Auf {% data variables.product.prodname_pages %}-Websites mit benutzerdefinierten Domänen, die ordnungsgemäß mit `CNAME`-, `ALIAS`-, `ANAME`- oder `A`- DNS-Einträgen konfiguriert sind, kann über HTTPS zugegriffen werden. Weitere Informationen findest du unter [Sichern deiner {% data variables.product.prodname_pages %}-Website mit HTTPS](/articles/securing-your-github-pages-site-with-https).

Nach der Konfiguration deiner benutzerdefinierten Domäne kann es bis zu einer Stunde dauern, bis die Website über HTTPS verfügbar ist. Nach einer Aktualisierung bestehender DNS-Einstellungen musst du deine benutzerdefinierte Domäne zudem eventuell aus dem Repository deiner Website entfernen und erneut dort einfügen, um den Prozess der HTTPS-Aktivierung zu initiieren. Weitere Informationen findest du unter „[Verwalten einer benutzerdefinierten Domäne für deine {% data variables.product.prodname_pages %}-Website](/articles/managing-a-custom-domain-for-your-github-pages-site)“.

Wenn du CAA-Einträge (Certification Authority Authorization) verwendest, muss mindestens ein CAA-Eintrag mit dem Wert `letsencrypt.org` vorhanden sein, wenn deine Website über HTTPS zugänglich sein soll. Weitere Informationen findest du unter „[Zertifizierungsstelle für Autorisierung (Certificate Authority Authorization, CAA)](https://letsencrypt.org/docs/caa/)“ in der Dokumentation „Let's Encrypt“.

## URL-Formatierung unter Linux

Wenn die URL für deine Website einen Benutzernamen oder einen Organisationsnamen enthält, der mit einem Bindestrich beginnt oder darauf endet oder aufeinanderfolgende Bindestriche enthält, wird Linux-Benutzern eine Fehlermeldung angezeigt, wenn sie versuchen, die Website aufzurufen. Ändere zum Beheben dieses Problems deinen {% data variables.product.product_name %}-Benutzernamen, um die nicht alphanumerischen Zeichen zu entfernen. Weitere Informationen findest du unter „[Ändern deines {% data variables.product.prodname_dotcom %}-Benutzernamens](/articles/changing-your-github-username/)“.

## Browser-Cache

Wenn du deine benutzerdefinierte Domäne erst vor kurzem geändert oder entfernt hast und in deinem Browser nicht auf die neue URL zugreifen kannst, solltest du den Cache deines Browsers löschen. Die neue URL ist danach vermutlich erreichbar. Informationen zum Löschen deines Caches findest du in der Dokumentation deines Browsers.
