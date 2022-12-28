---
title: Anfordern eines Archivs der Daten deines persönlichen Kontos
redirect_from:
  - /articles/requesting-an-archive-of-your-personal-account-s-data
  - /articles/requesting-an-archive-of-your-personal-accounts-data
  - /github/understanding-how-github-uses-and-protects-your-data/requesting-an-archive-of-your-personal-accounts-data
intro: '{% data reusables.user-settings.export-data %}'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Policy
  - Legal
shortTitle: Request account archive
ms.openlocfilehash: f296796810978f6d884fabc699c01fbc3eabf5eb
ms.sourcegitcommit: 505b84dc7227e8a5d518a71eb5c7eaa65b38ce0e
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '147878956'
---
{% data variables.product.product_name %} speichert Repository- und Profilmetadaten aus den Aktivitäten deines persönlichen Kontos. Die Daten deines persönlichen Kontos kannst du über die Einstellungen auf der {% data variables.product.prodname_dotcom_the_website %} oder mit der API für die Benutzermigration exportieren.

Weitere Informationen zu den Daten-{% data variables.product.product_name %}-Speichern, die zum Exportieren verfügbar sind, findest du unter [Herunterladen eines Benutzermigrationsarchivs](/rest/reference/migrations#download-a-user-migration-archive) und [Informationen über die Verwendung deiner Daten durch {% data variables.product.product_name %}](/articles/about-github-s-use-of-your-data).

Wenn du einen Export deiner persönlichen Daten über die Einstellungen auf {% data variables.product.prodname_dotcom_the_website %} anforderst, verpackt {% data variables.product.product_name %} deine persönlichen Daten in einer `tar.gz`-Datei. Diese kannst du über einen Download-Link herunterladen, der dir in einer E-Mail an deine primäre E-Mail-Adresse gesendet wird.

Der Download-Link läuft standardmäßig nach sieben Tagen ab. Du kannst diesen Link aber auch jederzeit vor seinem Ablauf über deine Benutzereinstellungen deaktivieren. Weitere Informationen findest du unter [Löschen des Zugriffs auf ein Archiv der Daten deines persönlichen Kontos](/articles/requesting-an-archive-of-your-personal-account-s-data/#deleting-access-to-an-archive-of-your-personal-accounts-data).

Falls dein Betriebssystem über keine Funktion zum Entpacken der `tar.gz`-Datei verfügt, kannst du die archivierten Dateien auch mit einem Drittanbietertool extrahieren. Weitere Informationen findest du unter [Entzippen einer tar.gz-Datei](https://opensource.com/article/17/7/how-unzip-targz-file) unter „Opensource.com“.

Die erzeugte `tar.gz`-Datei spiegelt die Daten wider, die zu dem Zeitpunkt gespeichert waren, als du den Datenexport gestartet hast.

## Herunterladen eines Archivs der Daten deines persönlichen Kontos

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.account_settings %}
3. Klicke unter „Kontodaten exportieren“ auf **Export starten** oder **Neuer Export**.
![Schaltfläche zum Starten des Exports persönlicher Daten hervorgehoben](/assets/images/help/repository/export-personal-data.png)
![Schaltfläche zum Exportieren neuer persönlicher Daten hervorgehoben](/assets/images/help/repository/new-export.png)
4. Sobald der Export zum Download zur Verfügung steht, sendet dir {% data variables.product.product_name %} einen Downloadlink an deine primäre E-Mail-Adresse.
5. Klicke in der E-Mail auf den Download-Link, und gib dein Passwort auf Aufforderung neu ein.
6. Du wirst zu einer `tar.gz`-Datei umgeleitet, die du herunterladen kannst.

## Löschen des Zugriffs auf ein Archiv der Daten deines persönlichen Kontos

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.account_settings %}
3. Wenn du den dir per E-Mail zugesendeten Download-Link vor seinem Ablauf deaktivieren möchtest, suche den Datenexport-Download unter „Kontodaten exportieren“, und klicke auf **Löschen**.
![Schaltfläche zum Löschen des Pakets zum Export persönlicher Daten hervorgehoben](/assets/images/help/repository/delete-export-personal-account-data.png)
