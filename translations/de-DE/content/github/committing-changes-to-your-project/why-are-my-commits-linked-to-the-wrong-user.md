---
title: Warum sind meine Commits mit dem falschen Benutzer verknüpft?
redirect_from:
  - /articles/how-do-i-get-my-commits-to-link-to-my-github-account/
  - /articles/why-are-my-commits-linked-to-the-wrong-user
intro: '{% data variables.product.product_name %} verwendet die E-Mail-Adresse im Commit-Header, um den Commit mit einem GitHub-Benutzer zu verknüpfen. Falls Deine Commits mit einem anderen Benutzer, oder mit überhaupt keinem Benutzer verknüpft sind, musst Du allenfalls Deine lokalen Git-Konfigurationseinstellungen ändern, eine E-Mail-Adresse zu den E-Mail-Einstellungen Deines Kontos hinzufügen, oder beides machen.'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---


{% tip %}

**Hinweis**: Falls Deine Commits mit einem anderen Benutzer verknüpft sind, bedeutet dies nicht, dass der Benutzer auf Dein Repository zugreifen kann. Ein Benutzer kann nur dann auf Dein Repository zugreifen, wenn Du ihn als Mitarbeiter oder zu einem Team hinzufügst, das über Zugriff auf das Repository verfügt.

{% endtip %}

### Mit einem anderen Benutzer verknüpfte Commits

Wenn Ihre Commits mit einem anderen Benutzer verknüpft sind, bedeutet dies, dass der Benutzer seinem {% data variables.product.product_name %}-Konto die in Ihren Einstellungen für die lokale Git-Konfiguration hinterlegte E-Mail-Adresse hinzugefügt hat. In diesem Fall können Sie die E-Mail-Adresse in den Einstellungen für Ihre lokale Git-Konfiguration ändern und Ihrem {% data variables.product.product_name %}-Konto die neue E-Mail-Adresse hinzufügen, damit künftige Commits mit Ihrem Konto verknüpft werden.

1. Führe die unter „[E-Mail-Adresse für Commits in Git festlegen](/articles/setting-your-commit-email-address)“ beschrieben Schritte aus, um die E-Mail-Adresse in Deiner lokalen Git-Konfiguration zu ändern. Falls Du mehrere Maschinen verwendest, musst Du diese Einstellung auf jeder ändern.
2. Füge Deinen Kontoeinstellungen die E-Mail-Adresse aus Schritt 2 hinzu. Führe dazu die unter „[Eine E-Mail-Adresse zum GitHub-Konto hinzufügen](/articles/adding-an-email-address-to-your-github-account)“ beschriebenen Schritte durch.

Die ab diesem Zeitpunkt von Dior durchgeführten Commits werden mit Deinem Konto verknüpft.

### Mit keinem Benutzer verknüpfte Commits

Wenn Deine Commits mit keinem Benutzer verknüpft sind, wird der Name des Commit-Authors nicht als Link zu einem Benutzerprofil dargestellt.

Führe die folgenden Schritte durch, um nach der E-Mail-Adresse zu suchen, die für diese Commits verwendet wurde, und um Commits mit Deinem Konto zu verknüpfen:

1. Navigiere zum Commit. Klicke dazu auf den Link für die Commit-Mitteilung. ![Link für Commit-Mitteilung](/assets/images/help/commits/commit-msg-link.png)
2. Bewege den Mauszeiger rechts neben dem Benutzernamen über das blaue {% octicon "question" aria-label="Question mark" %}, um die Mitteilung zu lesen, weshalb der Commit nicht verknüpft ist. ![Mit Mauszeiger eingeblendete Commit-Mitteilung](/assets/images/help/commits/commit-hover-msg.png)

  - **Unrecognized author (with email address)** (Unbekannter Autor (mit E-Mail-Adresse)): Falls diese Mitteilung mit einer E-Mail-Adresse angezeigt wird, wurde die Adresse nicht zu Deinen Kontoeinstellungen hinzugefügt. Um Deine Commits zu verknüpfen, [füge Deinen GitHub-E-Mail-Einstellungen die E-Mail-Adresse hinzu](/articles/adding-an-email-address-to-your-github-account). Wenn Deine E-Mail-Adresse einen Gravatar zugeordnet hat, wird der Gravatar neben Deinem Benutzernamen angezeigt und nicht der standardmäßige graue Octocat.
  - **Unrecognized author (no email address)** (Unbekannter Autor (keine E-Mail-Adresse)): Falls diese Meldung ohne eine E-Mail-Adresse angezeigt wird, hast Du eine generische E-Mail-Adresse verwendet, die Deinen E-Mail-Einstellungen nicht hinzugefügt werden kann. Zum Verknüpfen Deiner künftigen Commits musst Du [Deine Commit-E-Mail-Adresse in Git einrichten](/articles/setting-your-commit-email-address) und dann [Deinen GitHub-E-Mail-Einstellungen die neue Adresse hinzufügen](/articles/adding-an-email-address-to-your-github-account). Alte Commits werden nicht verknüpft.
  - **Invalid email** (Ungültige E-Mail-Adresse): Dies bedeutet, dass die in den Einstellungen Deiner lokalen Git-Konfiguration angegebene E-Mail-Adresse entweder leer oder nicht als E-Mail-Adresse formatiert ist. Zum Verknüpfen Deiner künftigen Commits musst Du [Deine Commit-E-Mail-Adresse in Git einrichten](/articles/setting-your-commit-email-address) und dann [Deinen GitHub-E-Mail-Einstellungen die neue Adresse hinzufügen](/articles/adding-an-email-address-to-your-github-account). Alte Commits werden nicht verknüpft.

{% warning %}

Falls in Deinen lokalen Git-Konfiguration eine generische E-Mail-Adresse oder eine E-Mail-Adresse enthalten war, die bereits an das Konto eines anderen Benutzers angehängt war, werden Deine vorherigen Commits nicht mit Deinem Konto verknüpft. Obwohl Git ermöglicht, dass Du die für vorherige Commits verwendete E-Mail-Adresse ändern kannst, wird dringend davon abgeraten, insbesondere bei einem gemeinsamen Repository.

{% endwarning %}

### Weiterführende Informationen

* „[Commits suchen](/articles/searching-commits)“
