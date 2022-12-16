---
title: Best Practices beim Verlassen deines Unternehmens
intro: 'Wenn du dein Konto auf {% data variables.product.product_name %} für persönliche und berufliche Zwecke nutzt, gibt es einiges zu beachten, wenn du dein Unternehmen oder deine Organisation verlässt.'
redirect_from:
  - /articles/best-practices-for-leaving-your-company
  - /github/setting-up-and-managing-your-github-user-account/best-practices-for-leaving-your-company
  - /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/best-practices-for-leaving-your-company
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/best-practices-for-leaving-your-company
  - /account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/best-practices-for-leaving-your-company
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Accounts
shortTitle: Leaving your company
ms.openlocfilehash: c288584891981eab7ffe4204e2028b0e70cf1d08
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/09/2022
ms.locfileid: '147687163'
---
Bevor du dein Unternehmen verlässt, aktualisiere unbedingt die folgenden Angaben in deinem persönlichen Konto:

- Hebe die Bestätigung der E-Mail-Adresse deines Unternehmens auf, indem du [sie in deinen E-Mail-Einstellungen löschst](/articles/changing-your-primary-email-address). Du kannst die Adresse dann ohne erneute Verifizierung wieder hinzufügen, damit zugehörige Commits mit deinem Konto verknüpft bleiben.
- [Ändere deine primäre E-Mail-Adresse](/articles/changing-your-primary-email-address) von deiner Unternehmens-E-Mail-Adresse in deine persönliche E-Mail-Adresse.
- [Bestätige deine neue primäre E-Mail-Adresse](/articles/verifying-your-email-address).
- [Ändere deinen GitHub-Benutzernamen](/articles/changing-your-github-username), um bei Bedarf etwaige Verweise auf dein Unternehmen oder deine Organisation zu entfernen.
- Wenn du die zweistufige Authentifizierung (2FA) für dein persönliches Konto aktiviert hast, stelle sicher, dass du (nicht dein Unternehmen) die 2FA-Authentifizierungsmethode kontrollierst, die du konfiguriert hast. Weitere Informationen findest du unter [Konfigurieren der zweistufigen Authentifizierung](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication).

## Unternehmen verlassen

Wenn du mit Repositorys gearbeitet hast, die einer Organisation gehören, [entferne dich selbst als Mitglied der Organisation](/articles/removing-yourself-from-an-organization). Hinweis: Wenn du der bzw. die Organisationbesitzer*in bist, solltest Du zunächst [das Eigentumsrecht an der Organisation](/articles/transferring-organization-ownership) auf eine andere Person übertragen.

Sofern du keinen {% data variables.product.prodname_managed_user %} verwendest, kannst du weiterhin auf dein persönliches Konto zugreifen, auch nachdem du die Organisation verlassen hast. Weitere Informationen zu {% data variables.product.prodname_emus %} findest du unter [Informationen zu {% data variables.product.prodname_emus %}]({% ifversion not ghec%}/enterprise-cloud@latest{% endif %}/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-enterprise-managed-users){% ifversion not ghec %} in der Dokumentation zu {% data variables.product.prodname_ghe_cloud %}.{% else %}.{% endif %}

## Berufliche Verknüpfungen aus persönlichen Repositorys entfernen

Wenn du beruflich mit einer anderen Person an Repositorys zusammengearbeitet hast, die zum persönlichen Benutzerkonto dieser Person gehören, [entferne dich selbst als Mitarbeiter*in](/articles/removing-yourself-from-a-collaborator-s-repository) aus diesen Repositorys.

- [Beende die Überwachung von Repositorys](https://github.com/watching) im Zusammenhang mit deiner Arbeit. Du brauchst diese Benachrichtigungen nicht mehr!
- [Übertrage Repositorys, deren Besittzer*in du bist](/articles/how-to-transfer-a-repository) und die andere Personen möglicherweise noch bearbeiten müssen, nachdem du das Unternehmen verlassen hast.
- [Lösche Forks, die dir gehören](/articles/deleting-a-repository) und die sich auf die Arbeit beziehen, die du ausgeführt hast. Sei unbesorgt – beim Löschen eines Forks wird das vorgelagerte Repository nicht gelöscht.
- Lösche lokale Kopien deiner Forks, die auf deinem Computer vorhanden sind:

```shell
$ rm -rf <em>work_directory</em>
```
