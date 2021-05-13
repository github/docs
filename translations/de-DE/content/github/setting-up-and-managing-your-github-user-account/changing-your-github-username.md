---
title: Deinen GitHub-Benutzernamen ändern
intro: 'Sie können Ihren {% data variables.product.product_name %}-Benutzernamen jederzeit ändern.'
redirect_from:
  - /articles/how-to-change-your-username/
  - /articles/changing-your-github-user-name/
  - /articles/renaming-a-user/
  - /articles/what-happens-when-i-change-my-username/
  - /articles/changing-your-github-username
versions:
  free-pro-team: '*'
  enterprise-server: '*'
topics:
  - Accounts
---

### Informationen zu Änderungen des Benutzernamens

You can change your username to another username that is not currently in use.{% if currentVersion == "free-pro-team@latest" %} If the username you want is not available, you'll see information about whether you can request the username to be released when you type in the desired username.

Falls der Benutzername nicht freigegeben werden kann und Du für den Benutzernamen keine Handelsmarke führst, kannst Du einen anderen Benutzernamen auswählen oder Deinen aktuellen Benutzernamen beibehalten. {% data variables.contact.github_support %} kann den für Sie nicht verfügbaren Benutzernamen nicht freigeben. Weitere Informationen findest Du unter „[Benutzernamen ändern](#changing-your-username)“.{% endif %}

Wenn Du Deinen Benutzernamen geändert hast, steht Dein alter Benutzername wieder der Allgemeinheit zur Verfügung. Die meisten Verweise auf Deine Repositorys unter dem alten Benutzernamen werden automatisch in den neuen Benutzernamen geändert. Einige Links auf Dein Profil werden jedoch nicht automatisch weitergeleitet.

Für Folgendes kann {% data variables.product.product_name %} keine Weiterleitungen einrichten:
- [@Erwähnungen](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams) des alten Benutzernamens
- Links zu [Gists](/articles/creating-gists), die Deinen alten Benutzernamen enthalten

### Repository-Verweise

Wenn Du Deinen Benutzernamen geändert hast, leitet {% data variables.product.product_name %} Verweise auf Deine Repositorys automatisch weiter.
- Weblinks zu Deinen vorhandenen Repositorys funktionieren auch weiterhin. Dieser Vorgang kann einige Minuten dauern, nachdem Du die Änderung vorgenommen hast.
- Befehlszeilen-Pushes von Deinen lokalen Repository-Klonen zu den alten Remote-Tracking-URLs funktionieren auch weiterhin.

Wenn der neue Inhaber Deines alten Benutzernamens ein Repository mit demselben Namen wie Dein Repository erstellt, wird der Weiterleitungseintrag überschrieben und Deine Weiterleitung wird nicht mehr funktionieren. Angesichts dieser Möglichkeit empfehlen wir Dir, alle vorhandenen Remote-Repository-URLs nach dem Ändern Deines Benutzernamens zu aktualisieren. For more information, see "[Managing remote repositories](/github/getting-started-with-github/managing-remote-repositories)."

### Links zu früheren Profilseiten

Nach dem Ändern Deines Benutzernamens lösen Links zu Deinen früheren Profilseiten, z. B. `https://{% data variables.command_line.backticks %}/previoususername`, eine 404-Fehlermeldung aus. We recommend updating any links to your {% data variables.product.product_name %} account from elsewhere{% if currentVersion == "free-pro-team@latest" %}, such as your LinkedIn or Twitter profile{% endif %}.

### Deine Git-Commits

{% if currentVersion == "free-pro-team@latest"%}Git commits that were associated with your {% data variables.product.product_name %}-provided `noreply` email address won't be attributed to your new username and won't appear in your contributions graph.{% endif %} If your Git commits are associated with another email address you've [added to your GitHub account](/articles/adding-an-email-address-to-your-github-account), {% if currentVersion == "free-pro-team@latest"%}including the ID-based {% data variables.product.product_name %}-provided `noreply` email address, {% endif %}they'll continue to be attributed to you and appear in your contributions graph after you've changed your username. Weitere Informationen zum Einrichten Deiner E-Mail-Adresse findest Du unter „[Commit-E-Mail-Adresse festlegen](/articles/setting-your-commit-email-address).“

### Deinen Benutzernamen ändern

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.account_settings %}
3. Klicke im Abschnitt „Change username“ (Benutzername ändern) auf **Change username** (Benutzername ändern). ![Change Username button](/assets/images/help/settings/settings-change-username.png){% if currentVersion == "free-pro-team@latest" %}
4. Lies die Warnungen in Bezug auf das Ändern Deines Benutzernamens. Falls Du Deinen Benutzernamen dennoch ändern möchtest, klicke auf **I understand, let's change my username** (Ich habe verstanden, meinen Benutzernamen ändern). ![Schaltfläche mit Warnung zur Änderung des Benutzernamens](/assets/images/help/settings/settings-change-username-warning-button.png)
5. Gib einen neuen Benutzernamen ein. ![Feld für neuen Benutzernamen](/assets/images/help/settings/settings-change-username-enter-new-username.png)
6. Falls der gewünschte Benutzername verfügbar ist, klicke auf **Change my username** (Meinen Benutzernamen ändern). Falls der gewünschte Benutzername nicht verfügbar ist, kannst Du versuchen, einen anderen Benutzernamen oder einen der angezeigten Vorschläge zu verwenden. ![Schaltfläche mit Warnung zur Änderung des Benutzernamens](/assets/images/help/settings/settings-change-my-username-button.png)
{% endif %}

### Weiterführende Informationen

- "[Why are my commits linked to the wrong user?](/articles/why-are-my-commits-linked-to-the-wrong-user)"{% if currentVersion == "free-pro-team@latest" %}
- „[{% data variables.product.prodname_dotcom %}-Richtlinie zu Benutzernamen](/articles/github-username-policy)“{% endif %}
