---
title: Dein Benutzerkonto löschen
intro: You can delete your personal account on {% data variables.product.product_name %} at any time.
redirect_from:
- /articles/deleting-a-user-account
- /articles/deleting-your-user-account
- /github/setting-up-and-managing-your-github-user-account/deleting-your-user-account
- /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/deleting-your-user-account
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
- Accounts
shortTitle: Delete your personal account
ms.openlocfilehash: fe18309f93bdb4124fa5a58d22ab7a93b451e6e1
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 05/17/2022
ms.locfileid: "145088915"
---
Wenn du dein persönliches Konto löschst, werden alle dazugehörigen Repositorys, Forks von privaten Repositorys, Wikis, Issues, Pull Requests und Seiten, die zu deinem Konto gehören, ebenfalls gelöscht. {% ifversion fpt or ghec %} Von dir erstellte Issues und Pull Requests sowie deine Kommentare in Repositorys, die anderen Benutzern gehören, werden nicht gelöscht, sondern deinem [inaktiven Benutzer](https://github.com/ghost) zugeordnet.{% else %}Von dir erstellte Issues und Pull Requests sowie deine Kommentare in Repositorys, die anderen Benutzern gehören, werden nicht gelöscht.{% endif %}

{% ifversion fpt or ghec %} Wenn du dein Konto löschst, werden keine Gebühren mehr erhoben. Die mit dem Konto verknüpfte E-Mail-Adresse wird für die Nutzung mit einem anderen Konto in {% data variables.product.product_location %} freigegeben. Nach 90 Tagen wird auch der Kontoname freigegeben und kann von allen anderen Personen für ein neues Konto verwendet werden. {% endif %}

Wenn sich die Organisation in deinem alleinigen Besitz befindet, musst du den Besitz auf eine andere Person übertragen oder die Organisation löschen, bevor du dein Benutzerkonto löschen kannst. Wenn es noch weitere Besitzer in deiner Organisation gibt, musst du dich selbst aus der Organisation entfernen, bevor du dein Benutzerkonto löschen kannst.

Weitere Informationen findest du unter
- [Übertragen des Besitzes einer Organisation](/articles/transferring-organization-ownership)
- [Löschen eines Organisationskontos](/articles/deleting-an-organization-account)
- [Entfernen der eigenen Person aus einer Organisation](/articles/removing-yourself-from-an-organization/)

## <a name="back-up-your-account-data"></a>Deine Kontoinformationen sichern

Bevor du dein persönliches Konto löschst, erstelle Kopien aller Repositorys, privaten Forks, Wikis, Issues und Pull Requests, die zu deinem Konto gehören.

{% warning %}

**Warnung**: Nachdem dein persönliches Konto gelöscht wurde, kann GitHub deine Inhalte nicht wiederherstellen.

{% endwarning %}

## <a name="delete-your-personal-account"></a>Löschen des persönlichen Kontos

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.account_settings %}
3. Klicke unten auf der Seite mit den Kontoeinstellungen unter „Konto löschen“ auf **Konto löschen**. Bevor du dein persönliches Konto löschen kannst, musst du Folgendes ausführen:
    - Wenn Du der alleinige Inhaber einer Organisation bist, musst Du die Inhaberschaft auf eine andere Person übertragen oder die Organisation löschen.
    - Wenn es andere Inhaber der Organisation gibt, musst Du Dich selbst aus der Organisation entfernen.
   ![Schaltfläche zum Löschen des Kontos](/assets/images/help/settings/settings-account-delete.png)
4. Führe im Dialogfeld „Sicherstellen, dass du dies tun möchtest“ die folgenden Schritte aus, um zu bestätigen, dass du verstanden hast, was passiert, wenn dein Konto gelöscht wird: ![Dialogfeld zum Bestätigen der Kontolöschung](/assets/images/help/settings/settings-account-deleteconfirm.png) {% ifversion fpt or ghec %}– Denk daran, dass alle Repositorys, Forks privater Repositorys, Wikis, Issues, Pull Requests und {% data variables.product.prodname_pages %}-Websites, die zu deinem Konto gehören, gelöscht werden. Gleichzeitig wird die Abrechnung beendet, und dein Benutzername wird nach 90 Tagen zur Verwendung durch andere Personen in {% data variables.product.product_name %} freigegeben.
  {% else %}– Denke daran, dass alle Repositorys, Forks von privaten Repositorys, Wikis, Issues, Pull Requests und Seiten von Deinem Konto ebenfalls gelöscht werden und Dein Benutzername wieder für die Verwendung auf {% data variables.product.product_name %} freigegeben wird.
  {% endif %}– Gib im ersten Feld Deinen {% data variables.product.product_name %}-Benutzernamen oder Deine E-Mail-Adresse ein.
    - Gib im zweiten Feld den Text von der Aufforderung ein.
