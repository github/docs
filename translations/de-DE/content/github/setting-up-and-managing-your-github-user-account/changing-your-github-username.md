---
title: Deinen GitHub-Benutzernamen ändern
intro: 'Du kannst Deinen {% data variables.product.product_name %}-Benutzernamen jederzeit ändern.'
redirect_from:
  - /articles/how-to-change-your-username/
  - /articles/changing-your-github-user-name/
  - /articles/renaming-a-user/
  - /articles/what-happens-when-i-change-my-username/
  - /articles/changing-your-github-username
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### Informationen zu Änderungen des Benutzernamens

Du kannst Deinen Benutzernamen in einen aktuell nicht verwendeten Benutzernamen ändern.{% if currentVersion == "free-pro-team@latest" %} Falls der gewünschte Benutzername nicht verfügbar ist, wird angezeigt, ob Du verlangen kannst, dass der Benutzername freigegeben wird, wenn Du den gewünschten Benutzernamen eingibst.

Falls der Benutzername nicht freigegeben werden kann und Du für den Benutzernamen keine Handelsmarke führst, kannst Du einen anderen Benutzernamen auswählen oder Deinen aktuellen Benutzernamen beibehalten. {% data variables.contact.github_support %} kann den für Dich nicht verfügbaren Benutzernamen nicht freigeben. Weitere Informationen findest Du unter „[Benutzernamen ändern](#changing-your-username)“.{% endif %}

Wenn Du Deinen Benutzernamen geändert hast, steht Dein alter Benutzername wieder der Allgemeinheit zur Verfügung. Die meisten Verweise auf Deine Repositorys unter dem alten Benutzernamen werden automatisch in den neuen Benutzernamen geändert. Einige Links auf Dein Profil werden jedoch nicht automatisch weitergeleitet.

Für Folgendes kann {% data variables.product.product_name %} keine Weiterleitungen einrichten:
- [@Erwähnungen](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams) des alten Benutzernamens
- Links zu [Gists](/articles/creating-gists), die Deinen alten Benutzernamen enthalten

### Repository-Verweise

Wenn Du Deinen Benutzernamen geändert hast, leitet {% data variables.product.product_name %} Verweise auf Deine Repositorys automatisch weiter.
- Weblinks zu Deinen vorhandenen Repositorys funktionieren auch weiterhin. Dieser Vorgang kann einige Minuten dauern, nachdem Du die Änderung vorgenommen hast.
- Befehlszeilen-Pushes von Deinen lokalen Repository-Klonen zu den alten Remote-Tracking-URLs funktionieren auch weiterhin.

Wenn der neue Inhaber Deines alten Benutzernamens ein Repository mit demselben Namen wie Dein Repository erstellt, wird der Weiterleitungseintrag überschrieben und Deine Weiterleitung wird nicht mehr funktionieren. Angesichts dieser Möglichkeit empfehlen wir Dir, alle vorhandenen Remote-Repository-URLs nach dem Ändern Deines Benutzernamens zu aktualisieren. Weitere Informationen findest Du unter „[URL eines Remote-Repositorys ändern](/articles/changing-a-remote-s-url).“

### Links zu früheren Profilseiten

Nach dem Ändern Deines Benutzernamens lösen Links zu Deinen früheren Profilseiten, z. B. `https://{% data variables.command_line.backticks %}/previoususername`, eine 404-Fehlermeldung aus. Wir empfehlen Dir, alle Links zu Deinem {% data variables.product.product_name %}-Konto an anderen Stellen zu aktualisieren{% if currentVersion == "free-pro-team@latest" %}, z. B. in Deinem LinkedIn- oder Twitter-Profil{% endif %}.

### Deine Git-Commits

{% if currentVersion == "free-pro-team@latest"%}Git-Commits, die mit Deiner von {% data variables.product.product_name %} bereitgestellten `no-reply`-E-Mail-Adresse verknüpft wurden, werden nicht mit Deinem neuen Benutzernamen verknüpft und sind nicht in Deinem neuen Beteiligungsdiagramm enthalten.{% endif %} Wenn Deine Git-Commits mit einer anderen E-Mail-Adresse verknüpft sind, die Du [zu Deinem GitHub-Konto hinzugefügt hast](/articles/adding-an-email-address-to-your-github-account), {% if currentVersion == "free-pro-team@latest"%}einschließlich der ID-basierten, von {% data variables.product.product_name %} bereitgestellten `no-reply`-E-Mail-Adresse, {% endif %}werden sie auch nach dem Ändern Deines Benutzernamens weiterhin mit Dir verknüpft und in Deinem Beteiligungsdiagramm enthalten sein. Weitere Informationen zum Einrichten Deiner E-Mail-Adresse findest Du unter „[Commit-E-Mail-Adresse festlegen](/articles/setting-your-commit-email-address).“

### Deinen Benutzernamen ändern

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.account_settings %}
3. Klicke im Abschnitt „Change username“ (Benutzername ändern) auf **Change username** (Benutzername ändern). ![Schaltfläche Ändere Benutzernamen](/assets/images/help/settings/settings-change-username.png){% if currentVersion == "free-pro-team@latest" %}
4. Lies die Warnungen in Bezug auf das Ändern Deines Benutzernamens. Falls Du Deinen Benutzernamen dennoch ändern möchtest, klicke auf **I understand, let's change my username** (Ich habe verstanden, meinen Benutzernamen ändern). ![Schaltfläche mit Warnung zur Änderung des Benutzernamens](/assets/images/help/settings/settings-change-username-warning-button.png)
5. Gib einen neuen Benutzernamen ein. ![Feld für neuen Benutzernamen](/assets/images/help/settings/settings-change-username-enter-new-username.png)
6. Falls der gewünschte Benutzername verfügbar ist, klicke auf **Change my username** (Meinen Benutzernamen ändern). Falls der gewünschte Benutzername nicht verfügbar ist, kannst Du versuchen, einen anderen Benutzernamen oder einen der angezeigten Vorschläge zu verwenden. ![Schaltfläche mit Warnung zur Änderung des Benutzernamens](/assets/images/help/settings/settings-change-my-username-button.png)
{% endif %}

### Weiterführende Informationen

- „[URL eines Remote-Repositorys ändern](/articles/changing-a-remote-s-url)“
- „[Warum sind meine Commits mit dem falschen Benutzer verknüpft?](/articles/why-are-my-commits-linked-to-the-wrong-user)“{% if currentVersion == "free-pro-team@latest" %}
- „[{% data variables.product.prodname_dotcom %}-Richtlinie zu Benutzernamen](/articles/github-username-policy)“{% endif %}
