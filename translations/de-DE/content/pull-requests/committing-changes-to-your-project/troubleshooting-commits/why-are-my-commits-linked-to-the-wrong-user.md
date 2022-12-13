---
title: Warum sind meine Commits mit dem falschen Benutzer verknüpft?
redirect_from:
  - /articles/how-do-i-get-my-commits-to-link-to-my-github-account
  - /articles/why-are-my-commits-linked-to-the-wrong-user
  - /github/committing-changes-to-your-project/why-are-my-commits-linked-to-the-wrong-user
  - /github/committing-changes-to-your-project/troubleshooting-commits/why-are-my-commits-linked-to-the-wrong-user
intro: '{% data variables.product.product_name %} verwendet die E-Mail-Adresse im Commitheader, um den Commit mit einem GitHub-Benutzer zu verknüpfen. Falls deine Commits mit einem anderen Benutzer oder mit keinem Benutzer verknüpft sind, musst du ggf. deine lokalen Git-Konfigurationseinstellungen ändern{% ifversion not ghae %}, eine E-Mail-Adresse zu den E-Mail-Einstellungen deines Kontos hinzufügen, oder beides machen{% endif %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Linked to wrong user
ms.openlocfilehash: 80a871c85aca151f06ca04d1d48d016bd14ed47f
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '147883035'
---
{% tip %}

**Hinweis**: Falls deine Commits mit einem anderen Benutzer verknüpft sind, bedeutet dies nicht, dass der Benutzer auf dein Repository zugreifen kann. Ein Benutzer kann nur dann auf dein Repository zugreifen, wenn du ihn als Mitarbeiter oder zu einem Team hinzufügst, das über Zugriff auf das Repository verfügt.

{% endtip %}

## Mit einem anderen Benutzer verknüpfte Commits

Wenn deine Commits mit einem anderen Benutzer verknüpft sind, bedeutet dies, dass die E-Mail-Adresse in deinen lokalen Git-Konfigurationseinstellungen mit dem Konto dieses Benutzers in {% data variables.product.product_name %} verbunden ist. In diesem Fall kannst du die E-Mail-Adresse in deinen lokalen Git-Konfigurationseinstellungen ändern{% ifversion ghae %}, sodass sie der Adresse entspricht, die deinem Konto in {% data variables.product.product_name %} zugeordnet ist, um deine zukünftigen Commits zu verknüpfen. Alte Commits werden nicht verknüpft. Weitere Informationen findest du unter [Festlegen deiner Commit-E-Mail-Adresse](/github/setting-up-and-managing-your-github-user-account/setting-your-commit-email-address#setting-your-commit-email-address-in-git).{% else %} und die neue E-Mail-Adresse deinem Konto auf {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} hinzufügen, um zukünftige Commits mit deinem Konto zu verknüpfen.

1. Um die E-Mail-Adresse in deiner lokalen Git-Konfiguration zu ändern, führe die Schritte unter [Festlegen deiner Commit-E-Mail-Adresse](/github/setting-up-and-managing-your-github-user-account/setting-your-commit-email-address#setting-your-commit-email-address-in-git) aus. Falls du mehrere Maschinen verwendest, musst du diese Einstellung auf jeder ändern.
2. Füge die E-Mail-Adresse aus Schritt 2 deinen Kontoeinstellungen hinzu, indem du die Schritte unter [Hinzufügen einer E-Mail-Adresse zu deinem GitHub-Konto](/articles/adding-an-email-address-to-your-github-account) ausführst.{% endif %}

Die ab diesem Zeitpunkt von Dior durchgeführten Commits werden mit deinem Konto verknüpft.

## Mit keinem Benutzer verknüpfte Commits

Wenn deine Commits mit keinem Benutzer verknüpft sind, wird der Name des Commit-Authors nicht als Link zu einem Benutzerprofil dargestellt.

Führe die folgenden Schritte durch, um nach der E-Mail-Adresse zu suchen, die für diese Commits verwendet wurde, und um Commits mit deinem Konto zu verknüpfen:

1. Navigiere zum Commit. Klicke dazu auf den Link für die Commit-Mitteilung.
![Link zur Commitnachricht](/assets/images/help/commits/commit-msg-link.png)
2. Bewege den Mauszeiger rechts neben dem Benutzernamen über das blaue {% octicon "question" aria-label="Question mark" %}, um eine Mitteilung zu lesen, weshalb der Commit nicht verknüpft ist.
![Durch Zeigen eingeblendete Commitnachricht](/assets/images/help/commits/commit-hover-msg.png)

  - **Nicht erkannter Autor (mit E-Mail-Adresse)** Wenn diese Nachricht mit einer E-Mail-Adresse angezeigt wird, ist die Adresse, die du zum Erstellen des Commits verwendet hast, nicht mit deinem Konto in {% data variables.product.product_name %} verbunden. {% ifversion not ghae %}Um deine Commits zu verknüpfen, [füge die E-Mail-Adresse deinen GitHub E-Mail-Einstellungen](/articles/adding-an-email-address-to-your-github-account) hinzu.{% endif %}{% ifversion not ghae %} Wenn der E-Mail-Adresse ein Gravatar zugeordnet ist, wird dieser anstelle der üblichen grauen Octocat neben dem Commit angezeigt.{% endif %}
  - **Nicht erkannter Autor (keine E-Mail-Adresse)** Wenn diese Nachricht ohne E-Mail-Adresse angezeigt wird, hast du eine generische E-Mail-Adresse verwendet, die nicht mit deinem Konto auf {% data variables.product.product_name %} verknüpft werden kann.{% ifversion not ghae %} Du musst [deine Commit-E-Mail-Adresse in Git festlegen](/articles/setting-your-commit-email-address) und dann die [neue Adresse deinen GitHub-E-Mail-Einstellungen hinzufügen](/articles/adding-an-email-address-to-your-github-account), um deine zukünftigen Commits zu verknüpfen. Alte Commits werden nicht verknüpft.{% endif %}
  - **Ungültige E-Mail-Adresse** Die E-Mail-Adresse in deinen lokalen Git-Konfigurationseinstellungen ist entweder leer oder nicht als E-Mail-Adresse formatiert.{% ifversion not ghae %} Du musst [deine Commit-E-Mail-Adresse in Git festlegen](/articles/setting-your-commit-email-address) und dann die [neue Adresse deinen GitHub-E-Mail-Einstellungen hinzufügen](/articles/adding-an-email-address-to-your-github-account), um deine zukünftigen Commits zu verknüpfen. Alte Commits werden nicht verknüpft.{% endif %}

{% ifversion ghae %} Du kannst die E-Mail-Adresse in deinen lokalen Git-Konfigurationseinstellungen in die Adresse ändern, die deinem Konto zugeordnet ist, um deine zukünftigen Commits zu verknüpfen. Alte Commits werden nicht verknüpft. Weitere Informationen findest du unter [Festlegen der Commit-E-Mail-Adresse](/github/setting-up-and-managing-your-github-user-account/setting-your-commit-email-address#setting-your-commit-email-address-in-git).
{% endif %}

{% warning %}

Falls in deinen lokalen Git-Konfiguration eine generische E-Mail-Adresse oder eine E-Mail-Adresse enthalten war, die bereits an das Konto eines anderen Benutzers angehängt war, werden deine vorherigen Commits nicht mit deinem Konto verknüpft. Obwohl Git ermöglicht, dass du die für vorherige Commits verwendete E-Mail-Adresse ändern kannst, wird dringend davon abgeraten, insbesondere bei einem gemeinsamen Repository.

{% endwarning %}

## Weiterführende Themen

* [Durchsuchen von Commits](/search-github/searching-on-github/searching-commits)
