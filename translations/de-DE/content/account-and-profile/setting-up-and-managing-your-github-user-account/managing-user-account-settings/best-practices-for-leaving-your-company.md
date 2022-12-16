---
title: Best Practices beim Verlassen Deines Unternehmens
intro: If you use your account on {% data variables.product.product_name %} for both personal and work purposes, there are a few things to keep in mind when you leave your company or organization.
redirect_from:
- /articles/best-practices-for-leaving-your-company
- /github/setting-up-and-managing-your-github-user-account/best-practices-for-leaving-your-company
- /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/best-practices-for-leaving-your-company
versions:
  fpt: '*'
  ghec: '*'
topics:
- Accounts
shortTitle: Leaving your company
ms.openlocfilehash: 4384955c0b81e887cb2671a537291b438664e621
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 05/17/2022
ms.locfileid: "145091399"
---
Bevor Du Dein Unternehmen verlässt, aktualisiere unbedingt die folgenden Angaben in Deinem persönlichen Konto:

- Hebe die Bestätigung der E-Mail-Adresse Deines Unternehmens auf, indem Du [sie in Deinen E-Mail-Einstellungen löschst](/articles/changing-your-primary-email-address). Du kannst die Adresse dann ohne erneute Verifizierung wieder hinzufügen, damit zugehörige Commits mit Deinem Konto verknüpft bleiben.
- [Ändere Deine primäre E-Mail-Adresse](/articles/changing-your-primary-email-address) von Deiner Unternehmens-E-Mail-Adresse in Deine persönliche E-Mail-Adresse.
{% ifversion fpt or ghec %}
- [Bestätige Deine neue primäre E-Mail-Adresse](/articles/verifying-your-email-address).
{% endif %}
- [Ändere Deinen GitHub-Benutzernamen](/articles/changing-your-github-username), um bei Bedarf etwaige Verweise auf Dein Unternehmen oder Deine Organisation zu entfernen.

## <a name="leaving-organizations"></a>Unternehmen verlassen

Wenn Du mit Repositorys gearbeitet hast, die einer Organisation gehören, [entferne Dich selbst als Mitglied der Organisation](/articles/removing-yourself-from-an-organization). Hinweis: Wenn Du der Organisationsinhaber bist, solltest Du zunächst [die Inhaberschaft der Organisation](/articles/transferring-organization-ownership) an eine andere Person übertragen.

## <a name="removing-professional-associations-with-personal-repositories"></a>Berufliche Verknüpfungen aus persönlichen Repositorys entfernen

Wenn Du beruflich mit einer anderen Person an Repositorys zusammengearbeitet hast, die zum persönlichen Benutzerkonto dieser Person gehören, [entferne Dich selbst als Mitarbeiter](/articles/removing-yourself-from-a-collaborator-s-repository) aus diesen Repositorys.

- [Beende die Überwachung von Repositorys](https://github.com/watching) im Zusammenhang mit Deiner Arbeit. Du brauchst diese Benachrichtigungen nicht mehr!
- [Übertrage Repositorys, deren Inhaber Du bist](/articles/how-to-transfer-a-repository) und die andere Personen möglicherweise noch bearbeiten müssen, nachdem Du das Unternehmen verlassen hast.
- [Lösche Forks, die Dir gehören](/articles/deleting-a-repository) und die sich auf die Arbeit beziehen, die Du ausgeführt hast. Sei unbesorgt – beim Löschen eines Forks wird das vorgelagerte Repository nicht gelöscht.
- Lösche lokale Kopien Deiner Forks, sofern auf Deinem Computer vorhanden:

```shell
$ rm -rf <em>work_directory</em>
```
