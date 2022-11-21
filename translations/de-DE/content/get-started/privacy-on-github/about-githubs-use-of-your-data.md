---
title: Informationen zur Verwendung deiner Daten durch GitHub
redirect_from:
  - /articles/about-github-s-use-of-your-data
  - /articles/about-githubs-use-of-your-data
  - /github/understanding-how-github-uses-and-protects-your-data/about-githubs-use-of-your-data
intro: '{% data variables.product.product_name %} verwendet die Daten deines Repositorys, um sie mit relevanten Tools, Personen, Projekten und Informationen zu verknüpfen.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Policy
  - Legal
shortTitle: GitHub's use of your data
ms.openlocfilehash: f49f90a981b92d2c7d5d34b0fac28ec05adbadd0
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145131157'
---
## Informationen über die Verwendung deiner Daten durch {% data variables.product.product_name %}

{% data variables.product.product_name %} bündelt Metadaten und analysiert Inhaltsmuster, um allgemeine Erkenntnisse innerhalb des Produkts bereitzustellen. Dabei werden Daten aus öffentlichen Repositorys sowie Metadaten und aggregierte Daten aus privaten Repositorys genutzt, wenn der Besitzer eines Repositorys sich dafür entschieden hat, die Daten für {% data variables.product.product_name %} freizugeben, indem er das Abhängigkeitsdiagramm aktiviert hat. Wenn du das Abhängigkeitsdiagramm für ein privates Repository aktivierst, führt {% data variables.product.product_name %} eine schreibgeschützte Analyse dieses privaten Repositorys durch.

Wenn du die Datennutzung für ein privates Repository aktivierst, behandeln wir deine privaten Daten, Quellcode oder Geschäftsgeheimnisse gemäß unseren [Vertragsbedingungen](/free-pro-team@latest/github/site-policy/github-terms-of-service) weiterhin vertraulich und privat. Die Informationen, die wir erhalten, stammen ausschließlich aus aggregierten Daten. Weitere Informationen findest du unter [Verwalten von Datenverwendungseinstellungen für dein privates Repository](/get-started/privacy-on-github/managing-data-use-settings-for-your-private-repository).

{% data reusables.repositories.about-github-archive-program %} Weitere Informationen findest du unter [Informationen zum Archivieren von Inhalten und Daten auf {% data variables.product.prodname_dotcom %}](/github/creating-cloning-and-archiving-repositories/about-archiving-content-and-data-on-github#about-the-github-archive-program).

{% data reusables.user-settings.export-data %} Weitere Informationen findest du unter [Archiv der Daten deines persönlichen Kontos anfordern](/articles/requesting-an-archive-of-your-personal-account-s-data).

Im [{% data variables.product.prodname_dotcom %}-Blog](https://github.com/blog) kündigen wir wesentliche neue Features an, die Metadaten oder aggregierte Daten nutzen.

## Wie Daten die Sicherheitsempfehlungen verbessern

Durch die Nutzung deiner Daten können wir beispielsweise eine Sicherheitsschwachstelle in den Abhängigkeiten deines öffentlichen Repositorys erkennen und dich darüber informieren. Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_dependabot_alerts %}](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies).

Um potenzielle Sicherheitsrisiken zu erkennen, prüft {% data variables.product.product_name %} den Inhalt deiner Abhängigkeitsmanifestdatei, um eine Liste der Abhängigkeiten deines Projekts zu erstellen.

{% data variables.product.product_name %} erfährt auch von Änderungen, die du an deinem Abhängigkeitsmanifest vornimmst. Wenn du beispielsweise eine angreifbare Abhängigkeit nach Erhalt einer Sicherheitsmeldung auf eine sichere Version aktualisierst und andere dasselbe tun, erkennt {% data variables.product.product_name %}, wie man die Schwachstelle patcht, und kann den betroffenen Repositorys einen ähnlichen Patch empfehlen.

## Datenschutz und Datenfreigabe

Daten aus privaten Repositorys werden maschinell erfasst und nie von {% data variables.product.product_name %}-Mitarbeitern gelesen. Die Inhalte deiner privaten Repositorys sind für niemanden zugänglich, außer wie in unseren [Vertragsbedingungen](/free-pro-team@latest/github/site-policy/github-terms-of-service#3-access) beschrieben.

Deine personenbezogenen Daten oder Repositorydaten werden nicht an Dritte weitergegeben. Unter Umständen geben wir aggregierte Daten, die wir aus unserer Analyse gewonnen haben, an unsere Partner weiter.
