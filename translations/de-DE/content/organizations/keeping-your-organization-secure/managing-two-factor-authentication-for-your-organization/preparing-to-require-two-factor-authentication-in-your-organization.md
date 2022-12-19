---
title: Vorbereiten auf die Voraussetzung der zweistufigen Authentifizierung in deiner Organisation
intro: 'Bevor du die zweistufige Authentifizierung (2FA) voraussetzt, kannst du die Benutzer*innen über die bevorstehende Änderung informieren und überprüfen, wer die 2FA bereits verwendet.'
redirect_from:
  - /articles/preparing-to-require-two-factor-authentication-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/preparing-to-require-two-factor-authentication-in-your-organization
  - /organizations/keeping-your-organization-secure/preparing-to-require-two-factor-authentication-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Prepare to require 2FA
ms.openlocfilehash: 67083113143145a6de7bba5412568609414f12a8
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '145130798'
---
Wir empfehlen, dass du {% ifversion fpt or ghec %}Organisationsmitglieder, externe Projektmitarbeiter und Abrechnungsmanager{% else %}Organisationsmitglieder und externe Projektmitarbeiter{% endif %} mindestens eine Woche, bevor du die zweistufige Authentifizierung in deiner Organisation einführst, informierst.

Wenn du für deine Organisation die Zwei-Faktor-Authentifizierung vorschreibst, werden Mitglieder, externe Mitarbeiter und Abrechnungsmanager (einschließlich Bot-Konten), die keine 2FA verwenden, aus der Organisation entfernt und verlieren den Zugriff auf die Repositorys der Organisation. Gleichzeitig verlieren sie auch den Zugriff auf ihre Forks der privaten Repositorys der Organisation.

Bevor du die 2FA in deiner Organisation voraussetzt, wird empfohlen, Folgendes zu tun:
  - [Aktivieren der zweistufigen Authentifizierung](/articles/securing-your-account-with-two-factor-authentication-2fa/) auf deinem persönlichen Konto
  - Bitte Benutzer in deiner Organisation darum, 2FA für ihre Konten einzurichten
  - Überprüfe, ob [die zweistufige Authentifizierung für Benutzer*innen in deiner Organisation aktiviert ist](/articles/viewing-whether-users-in-your-organization-have-2fa-enabled/).
  - Warne die Benutzer, dass nach der Aktivierung von 2FA diejenigen ohne 2FA automatisch aus der Organisation entfernt werden
