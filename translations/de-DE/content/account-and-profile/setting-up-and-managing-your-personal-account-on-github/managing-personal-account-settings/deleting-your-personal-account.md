---
title: Löschen deines persönlichen Kontos
intro: Du kannst dein persönliches Konto bei {% data variables.product.product_name %} jederzeit löschen.
redirect_from:
- /articles/deleting-a-user-account
- /articles/deleting-your-user-account
- /github/setting-up-and-managing-your-github-user-account/deleting-your-user-account
- /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/deleting-your-user-account
- /account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/deleting-your-user-account
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
- Accounts
shortTitle: Delete your personal account
ms.openlocfilehash: 4c02698cbe312d3f13553e49dd324fde4f3ad7bb
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 07/13/2022
ms.locfileid: "145164961"
---
Wenn du dein persönliches Konto löschst, werden alle Repositorys, Forks von privaten Repositorys, Wikis, Issues, Pull Requests und Seiten, die zu deinem Konto gehören, ebenfalls gelöscht. {% ifversion fpt or ghec %} Von dir erstellte Issues und Pull Requests sowie deine Kommentare in Repositorys, die anderen Benutzer*innen gehören, werden nicht gelöscht, sondern deinem [inaktiven Benutzerkonto](https://github.com/ghost) zugeordnet.{% else %}Von dir erstellte Issues und Pull Requests sowie deine Kommentare in Repositorys, die anderen Benutzer*innen gehören, werden nicht gelöscht.{% endif %}

{% ifversion fpt or ghec %} Wenn du dein Konto löschst, werden keine Gebühren mehr erhoben. Die mit dem Konto verknüpfte E-Mail-Adresse wird für die Nutzung mit einem anderen Konto auf {% data variables.product.product_location %} freigegeben. Nach 90 Tagen wird auch der Kontoname freigegeben und kann von allen anderen Personen für ein neues Konto verwendet werden. {% endif %}

Wenn du der*die einzige Besitzer*in einer Organisation bist, musst du den Besitz auf eine andere Person übertragen oder die Organisation löschen, bevor du dein Benutzerkonto löschen kannst. Wenn es noch weitere Besitzer*innen in deiner Organisation gibt, musst du dich selbst aus der Organisation entfernen, bevor du dein Benutzerkonto löschen kannst.

Weitere Informationen findest du unter
- [Übertragen des Besitzes einer Organisation](/articles/transferring-organization-ownership)
- [Löschen eines Organisationskontos](/articles/deleting-an-organization-account)
- [Entfernen der eigenen Person aus einer Organisation](/articles/removing-yourself-from-an-organization/)

## <a name="back-up-your-account-data"></a>Deine Kontoinformationen sichern

Bevor du dein persönliches Konto löschst, erstelle Kopien aller Repositorys, privaten Forks, Wikis, Issues und Pull Requests, die zu deinem Konto gehören.

{% warning %}

**Warnung**: Nachdem dein persönliches Konto gelöscht wurde, kann GitHub deine Inhalte nicht wiederherstellen.

{% endwarning %}

## <a name="delete-your-personal-account"></a>Löschen deines persönlichen Kontos

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.account_settings %}
3. Klicke unten auf der Seite mit den Kontoeinstellungen unter „Konto löschen“ auf **Dein Konto löschen**. Bevor du dein persönliches Konto löschen kannst, musst du Folgendes ausführen:
    - Wenn du der alleinige Inhaber einer Organisation bist, musst du die Inhaberschaft auf eine andere Person übertragen oder die Organisation löschen.
    - Wenn es andere Inhaber der Organisation gibt, musst du Dich selbst aus der Organisation entfernen.
   ![Schaltfläche zum Löschen des Kontos](/assets/images/help/settings/settings-account-delete.png)
4. Führe im Dialogfeld „Sicherstellen, dass du dies tun möchtest“ die folgenden Schritte durch, um zu bestätigen, dass du verstanden hast, was passiert, wenn dein Konto gelöscht wird: ![Dialogfeld zum Bestätigen der Kontolöschung](/assets/images/help/settings/settings-account-deleteconfirm.png) {% ifversion fpt or ghec %}– Denke daran, dass alle Repositorys, Forks privater Repositorys, Wikis, Issues, Pull Requests und {% data variables.product.prodname_pages %}-Websites, die zu deinem Konto gehören, gelöscht werden. Gleichzeitig wird die Abrechnung sofort beendet, und dein Benutzername wird nach 90 Tagen zur Verwendung durch andere Personen auf {% data variables.product.product_name %} freigegeben.
  {% else %}– Denke daran, dass alle Repositorys, Forks von privaten Repositorys, Wikis, Issues, Pull Requests und Seiten von deinem Konto ebenfalls gelöscht werden und dein Benutzername wieder für die Verwendung auf {% data variables.product.product_name %} freigegeben wird.
  {% endif %}– Gib im ersten Feld deinen {% data variables.product.product_name %}-Benutzernamen oder deine E-Mail-Adresse ein.
    - Gib im zweiten Feld den Text von der Aufforderung ein.
