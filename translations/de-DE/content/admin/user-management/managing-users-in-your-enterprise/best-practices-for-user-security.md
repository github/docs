---
title: Best Practices für die Benutzersicherheit
intro: '{% ifversion ghes %}Abgesehen von den Sicherheitsmaßnahmen (SSL, Subdomain-Isolation, Firewallkonfiguration) auf Instanzebene, die von einem oder einer Websiteadministrator*in implementiert werden können, können {% else %}deine Benutzer*innen {% endif %}weitere Maßnahmen ergreifen, um dein Unternehmen zu schützen.'
redirect_from:
  - /enterprise/admin/user-management/best-practices-for-user-security
  - /admin/user-management/best-practices-for-user-security
versions:
  ghes: '*'
  ghae: '*'
type: reference
topics:
  - Enterprise
  - Security
  - User account
shortTitle: User security best practices
ms.openlocfilehash: 57d19d97a8944ac20d6b90794bcf0cda63fc5bd0
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '146331656'
---
{% ifversion ghes %}
## Zwei-Faktor-Authentifizierung aktivieren

Mittels Zwei-Faktor-Authentifizierung (2FA) kannst du sich bei Websites und Diensten anmelden, die zusätzlich zur Eingabe eines Passworts zur Authentifizierung einen zweiten Faktor vorschreiben. Im Falle von {% data variables.product.prodname_ghe_server %} ist dieser zweite Faktor ein einmaliger Authentifizierungscode, der von einer Anwendung auf dem Smartphone eines Benutzers generiert wird. Du solltest unbedingt festlegen, dass Benutzer die Zwei-Faktor-Authentifizierung für ihre Konten aktivieren müssen. Mit der Zwei-Faktor-Authentifizierung müssten das Passwort des Benutzers und dessen Smartphone kompromittiert werden, damit das Konto an sich kompromittiert werden kann.

Weitere Informationen zum Konfigurieren der zweistufigen Authentifizierung findest du unter [Informationen zur zweistufigen Authentifizierung](/enterprise/user/articles/about-two-factor-authentication).
{% endif %}

## Passwort-Manager vorschreiben

Wir empfehlen dringend, dass deine Benutzer*innen einen Kennwort-Manager – z. B. [LastPass](https://lastpass.com/) oder [1Password](https://1password.com/) – auf jedem Computer installieren und verwenden müssen, über den sie eine Verbindung mit deinem Unternehmen herstellen. Dadurch wird gewährleistet, dass Passwörter sicherer sind und es unwahrscheinlicher ist, dass sie kompromittiert oder gestohlen werden.

## Zugriff auf Teams und Repositorys einschränken

Um im Falle einer Sicherheitsverletzung die potenzielle Angriffsfläche zu begrenzen, solltest du Benutzern unbedingt nur den Zugriff auf Teams und Repositorys gewähren, den sie zum Erledigen ihrer Arbeit unbedingt benötigen. Da Mitglieder mit der Inhaberrolle auf alle Teams und Repositorys in der Organisation zugreifen können, wird dringend empfohlen, dieses Team möglichst klein zu halten.

Weitere Informationen zum Konfigurieren von Teams und Teamberechtigungen findest du unter [Rollen in einer Organisation](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization).
