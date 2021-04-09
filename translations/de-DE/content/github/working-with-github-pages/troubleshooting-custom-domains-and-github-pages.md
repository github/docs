---
title: Troubleshooting custom domains and GitHub Pages
intro: 'Bei Problemen mit benutzerdefinierten Domänen oder HTTPS für Deine {% data variables.product.prodname_pages %}-Website kannst Du zur Fehlerbehebung nach häufigen Fehlern suchen.'
redirect_from:
  - /articles/my-custom-domain-isn-t-working/
  - /articles/custom-domain-isn-t-working/
  - /articles/troubleshooting-custom-domains/
  - /articles/troubleshooting-custom-domains-and-github-pages
product: '{% data reusables.gated-features.pages %}'
versions:
  free-pro-team: '*'
topics:
  - Seiten
---

### _CNAME_-Fehler

Benutzerdefinierte Domänen werden in einer _CNAME_-Datei im Stammverzeichnis der Veröffentlichungsquelle gespeichert. Du kannst diese Datei wahlweise in den Repository-Einstellungen oder manuell hinzufügen oder aktualisieren. Weitere Informationen findest Du unter „[Eine benutzerdefinierte Domäne für Deine {% data variables.product.prodname_pages %}-Website verwalten](/articles/managing-a-custom-domain-for-your-github-pages-site).“

Damit Deine Website in der richtigen Domäne gerendert wird, prüfe, ob die _CNAME_-Datei sich noch im Repository befindet. Zahlreiche Generatoren für statische Websites erzwingen beispielsweise einen Push-Vorgang an das Repository, wodurch allenfalls die _CNAME_-Datei überschrieben wird, die Du beim Konfigurieren der benutzerdefinierten Domäne in das Repository eingefügt hast. Wenn Sie Ihre Website lokal erstellen und generierte Dateien per Push-Vorgang an {% data variables.product.product_name %} übertragen, müssen Sie in jedem Fall zunächst einen Pull-Vorgang für den Commit vornehmen, mit dem die _CNAME_-Datei in das lokale Repository eingefügt wurde, sodass die Datei in den Build aufgenommen wird.

Prüfe anschließend, ob die _CNAME_-Datei ordnungsgemäß formatiert ist.

- Der Name der _CNAME_-Datei darf nur Großbuchstaben enthalten.
- Die _CNAME_-Datei darf nur eine Domäne umfassen. Sollen mehrere Domänen auf Deine Website verweisen, lass Dir von Deinem DNS-Provider eine Weiterleitung einrichten.
- The _CNAME_ file must contain the domain name only. For example, `www.example.com`, `blog.example.com`, or `example.com`.
- The domain name must be unique across all {% data variables.product.prodname_pages %} sites. Enthält beispielsweise die _CNAME_-Datei eines anderen Repositorys die Domäne `example.com`, kannst Du `example.com` nicht in die _CNAME_-Datei für Dein Repository aufnehmen.

### Fehlerhafte DNS-Konfiguration

Falls Du die Standard-Domäne für Deine Website nicht ohne Weiteres auf die benutzerdefinierte Domäne verweisen kannst, wende Dich an Deinen DNS-Provider.

Du kannst auch testen, ob die DNS-Einträge Deiner benutzerdefinierten Domäne fehlerfrei konfiguriert sind. Weitere Informationen findest Du unter „[Eine benutzerdefinierte Domäne für Deine {% data variables.product.prodname_pages %}-Website verwalten](/articles/managing-a-custom-domain-for-your-github-pages-site).“

### Nicht unterstützte, benutzerdefinierte Domänen-Namen

Wird Deine benutzerdefinierte Domäne nicht unterstützt, musst Du Deine Domäne durch eine unterstützte Domäne ersetzen. Du kannst auch bei Deinem DNS-Provider erfragen, ob Weiterleitungsdienste für Domänen-Namen angeboten werden.

Deine Website darf nicht:
- Mehrere Apex-Domänen umfassen. Beispiel: `example.com` und `anotherexample.com`.
- Mehrere `www`-Subdomänen umfassen. Beispiel: `www.example.com` und `www.anotherexample.com`.
- Sowohl eine Apex-Domäne als auch eine benutzerdefinierte Subdomäne umfassen. Beispiel: `example.com` und `docs.example.com`.

{% data reusables.pages.wildcard-dns-warning %}

Eine Liste der unterstützten benutzerdefinierten Domänen findest Du unter „[Informationen zu benutzerdefinierten Domänen und {% data variables.product.prodname_pages %}](/articles/about-custom-domains-and-github-pages/#supported-custom-domains).“

### HTTPS-Fehler

Zugriff über HTTPS ist auf {% data variables.product.prodname_pages %}-Websites mit benutzerdefinierten Domänen, die korrekt mit _CNAME_-, `ALIAS`-, `ANAME`- oder `A`-DNS-Einträgen konfiguriert sind, problemlos möglich. Weitere Informationen finden Sie unter „[Ihre {% data variables.product.prodname_pages %}-Website mit HTTPS schützen](/articles/securing-your-github-pages-site-with-https)“.

Nach der Konfiguration Deiner benutzerdefinierten Domäne kann es bis zu einer Stunde dauern, bis die Website über HTTPS verfügbar ist. Nach einer Aktualisierung bestehender DNS-Einstellungen musst Du Deine benutzerdefinierte Domäne zudem eventuell aus dem Repository Deiner Website entfernen und erneut dort einfügen, um den Prozess der HTTPS-Aktivierung zu initiieren. Weitere Informationen findest Du unter „[Eine benutzerdefinierte Domäne für Deine {% data variables.product.prodname_pages %}-Website verwalten](/articles/managing-a-custom-domain-for-your-github-pages-site).“

Wenn Du CAA-Einträge (Certification Authority Authorization) verwendest, muss mindestens ein CAA-Eintrag mit dem Wert `letsencrypt.org` vorhanden sein, wenn Deine Website über HTTPS zugänglich sein soll. Weitere Informationen finden Sie in der Let's Encrypt-Dokumentation unter „[Certificate Authority Authorization (CAA)](https://letsencrypt.org/docs/caa/)“.

### URL-Formatierung unter Linux

Wenn die URL für Deine Website einen Benutzernamen oder einen Organisationsnamen enthält, der mit einem Bindestrich beginnt oder darauf endet oder aufeinanderfolgende Bindestriche enthält, wird Linux-Benutzern eine Fehlermeldung angezeigt, wenn sie versuchen, die Website aufzurufen. Ändere zum Beheben dieses Problems Deinen {% data variables.product.product_name %}-Benutzernamen, um die nicht alphanumerischen Zeichen zu entfernen. Weitere Informationen findest Du unter „[{% data variables.product.prodname_dotcom %}-Benutzernamen ändern](/articles/changing-your-github-username/).“

### Browser-Cache

Wenn Du Deine benutzerdefinierte Domäne erst vor kurzem geändert oder entfernt hast und in Deinem Browser nicht auf die neue URL zugreifen kannst, solltest Du den Cache Deines Browsers löschen. Die neue URL ist danach vermutlich erreichbar. Informationen zum Löschen Deines Caches findest Du in der Dokumentation Deines Browsers.
