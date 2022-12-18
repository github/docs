---
title: Fehlerbehebung bei Verbindungsproblemen
intro: 'Wenn beim Herstellen einer Verbindung mit {% data variables.product.prodname_dotcom %} Probleme auftreten, kannst du die Verbindungsprobleme behandeln und dann das Tool {% data variables.product.prodname_debug %} verwenden, um Probleme zu diagnostizieren.'
redirect_from:
  - /articles/troubleshooting-connectivity-problems
  - /github/getting-started-with-github/troubleshooting-connectivity-problems
  - /github/getting-started-with-github/using-github/troubleshooting-connectivity-problems
versions:
  fpt: '*'
  ghec: '*'
shortTitle: Connectivity problems
ms.openlocfilehash: 77e88f4721c5dfa9cdde22ddee23a9188785e994
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '145068688'
---
Häufig treten Verbindungsprobleme auf, weil eine Firewall, ein Proxyserver, das Unternehmensnetzwerk oder ein anderes Netzwerk so konfiguriert ist, dass {% data variables.product.prodname_dotcom %} blockiert wird.

## Zulassen von {% data variables.product.prodname_dotcom %}-IP-Adressen

Stelle sicher, dass das Netzwerk so konfiguriert ist, dass IP-Adressen von {% data variables.product.prodname_dotcom %} zulässig sind. Weitere Informationen findest du unter „[Informationen zu den IP-Adressen von {% data variables.product.prodname_dotcom %}](/articles/about-github-s-ip-addresses).“

## Unternehmens- oder Organisationsnetzwerk benutzen

Wenn du Verbindungsprobleme auf deinem Unternehmens- oder Organisationsnetzwerk hast, frage deinen Netzwerkadministrator, ob Netzwerkregeln bestimmten Datenverkehr blockieren. Sollten derartige Regeln existieren, bitte deinen Netzwerkadministrator, Datenverkehr mit {% data variables.product.prodname_dotcom %} zuzulassen.

## Fehlerbehebung des Captcha

Wenn die Verifizierung mit dem Captcha Probleme bereitet:
- Stelle sicher, dass in deinem Browser JavaScript aktiviert ist.
- Stelle sicher, dass dein Browser unterstützt wird. Wenn dein Browser nicht unterstützt wird, aktualisiere ihn oder installiere einen unterstützten Browser. Eine Liste mit unterstützten Browsern findest du unter [Unterstützte Browser](/articles/supported-browsers).
- Stelle sicher, dass https://octocaptcha.com/ oder https://arkoselabs.com/ nicht durch die deine Netzwerkkonfiguration blockiert wird. Wenn du dich hinter einer Unternehmensfirewall befindest, bitte deinen IT-Administrator, diese Domänen zuzulassen. Um den Zugriff auf diese Domänen zu überprüfen, besuche https://octocaptcha.com/test, und achte darauf, dass der Text „Connection successfully made!“ angezeigt wird. Besuche dann https://client-demo.arkoselabs.com/github, und vergewissere dich, dass du das Captcha laden kannst.
- Stelle sicher, dass dein Browser keine Plug-ins oder Erweiterungen verwendet, die mit GitHub in Konflikt stehen. Falls es solche Plug-ins oder Erweiterungen gibt, deaktiviere diese vorübergehend während der Captcha-Verifizierung.

## Klonmethode ändern

Eventuell lässt sich die Konnektivität durch einen Wechsel des Klonverfahrens von SSH zu HTTPS (oder umgekehrt) verbessern. Weitere Informationen findest du unter „[Beheben von Fehlern beim Klonen](/repositories/creating-and-managing-repositories/troubleshooting-cloning-errors)“.

Wenn in Verbindung mit SSH Timeouts auftreten, informiere dich unter „[Fehler: Bad file number](/articles/error-bad-file-number)“.

## Fehlerbehebung bei langsamen Downloads und gelegentlich langsamen Verbindungen

{% data variables.product.prodname_dotcom %} drosselt die Bandbreite nicht für einzelne Benutzer.

Wenn sich die Verbindung nur zu gewissen Tageszeiten verlangsamt, wird dies ziemlich sicher durch Netzwerk-Überlastung verursacht. Leider ist {% data variables.product.prodname_dotcom %} nicht in der Lage, Netzwerkstaus zu beheben. Du solltest dich daher mit diesem Problem an deinen Internetdienstanbieter wenden.

## Fehlerbehebung mit {% data variables.product.prodname_debug %}

Wenn du alle oben genannten Empfehlungen zur Fehlerbehebung befolgt hast, dein Verbindungsproblem aber weiterhin besteht, folgst du den Anweisungen auf der {% data variables.product.prodname_debug %}-Website, um Tests auszuführen und dem {% data variables.product.prodname_dotcom %} Support einen Problembericht zu senden. Weitere Informationen findest du unter [{% data variables.product.prodname_debug %}](https://github-debug.com/).
