---
title: Dein Profil personalisieren
intro: 'Du kannst Informationen zu Deiner Person für andere {% data variables.product.product_name %}-Benutzer bereitstellen, indem Du ein Profilbild einrichtest und eine Biografie zum Profil hinzufügst.'
redirect_from:
  - /articles/adding-a-bio-to-your-profile/
  - /articles/setting-your-profile-picture/
  - /articles/how-do-i-set-up-my-profile-picture/
  - /articles/gravatar-problems/
  - /articles/how-do-i-set-up-my-avatar/
  - /articles/personalizing-your-profile
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### Dein Profilbild ändern

Mit Deinem Profilbild kannst Du überall auf {% data variables.product.product_name %} in Pull Requests, Kommentaren, Beiträge-Seiten und Diagrammen leichter identifiziert werden.

Wenn Du ein Konto anlegst, stellt {% data variables.product.product_name %} Dir ein zufällig generiertes „Identicon“ bereit. [Dein Identicon](https://github.com/blog/1586-identicons) wird aus einem Hash Deiner Benutzer-ID erzeugt. Seine Farbe und sein Muster lassen sich daher nicht steuern. Du kannst das Identicon durch ein Bild ersetzen, das Dich repräsentiert.

{% tip %}

**Tipp:** Dein Profilbild sollte eine PNG-, JPG- oder GIF-Datei mit weniger als 1 MB sein. Für eine optimale Darstellung empfehlen wir eine Bildgröße von etwa 500 x 500 Pixeln.

{% endtip %}

#### Ein Profilbild einrichten

{% data reusables.user_settings.access_settings %}
2. Klicke unter **Profile Picture** (Profilbild) auf {% octicon "pencil" aria-label="The edit icon" %} **Edit** (Bearbeiten). ![Profilbild bearbeiten](/assets/images/help/profile/edit-profile-photo.png)
3. Klicke auf **Upload a photo...** (Foto hochladen). ![Profilbild aktualisieren](/assets/images/help/profile/edit-profile-picture-options.png)
3. Schneiden Sie das Bild zu. Wenn Du fertig bist, klicke auf **Set new profile picture** (Neues Profilbild festlegen). ![Hochgeladenes Foto zuschneiden](/assets/images/help/profile/avatar_crop_and_save.png)

#### Dein Profilbild auf das Identicon zurücksetzen

{% data reusables.user_settings.access_settings %}
2. Klicke unter **Profile Picture** (Profilbild) auf {% octicon "pencil" aria-label="The edit icon" %} **Edit** (Bearbeiten). ![Profilbild bearbeiten](/assets/images/help/profile/edit-profile-photo.png)
3. Um das Identicon wieder zu verwenden, klicke auf **Remove photo** (Foto entfernen). Wenn Deine E-Mail-Adresse mit einem [Gravatar](https://en.gravatar.com/) verknüpft ist, kannst Du das Profilbild nicht auf das Identicon zurücksetzen. Klicke stattdessen auf **Revert to Gravatar** (Auf Gravatar zurücksetzen). ![Profilbild aktualisieren](/assets/images/help/profile/edit-profile-picture-options.png)

### Deinen Profilnamen ändern

Du kannst den Namen, der in Deinem Profil angezeigt wird, ändern. {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.17" %} Dieser Name kann auch neben Kommentaren angezeigt werden, die Du bei privaten Repositorys einer Organisation hinterlässt. Weitere Informationen findest Du unter „[Anzeige der Mitgliedsnamen in Deiner Organisation verwalten](/articles/managing-the-display-of-member-names-in-your-organization)“.{% endif %}

{% data reusables.user_settings.access_settings %}
2. Gib unter „Name“ den Namen ein, der in Deinem Profil angezeigt werden soll. ![Feld „Name“ (Name) in den Profileinstellungen](/assets/images/help/profile/name-field.png)

### Eine Biografie zu Deinem Profil hinzufügen

Füge eine Biografie zu Deinem Profil hinzu, um anderen {% data variables.product.product_name %}-Benutzern Informationen zu Deiner Person bereitzustellen. Mit [@Erwähnungen](/articles/basic-writing-and-formatting-syntax) und Emojis kannst Du Informationen dazu angeben, wo Du gerade arbeitest oder früher gearbeitet hast, welche Tätigkeit Du ausübst oder welche Kaffeesorte Du trinkst.

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}

For a longer-form and more prominent way of displaying customized information about yourself, you can also use a profile README. For more information on the profile README, see "[Managing your profile README](/github/setting-up-and-managing-your-github-profile/managing-your-profile-readme)."

{% endif %}

{% note %}

**Note:** If you have the activity overview section enabled for your profile and you @mention an organization you're a member of in your profile bio, then that organization will be featured first in your activity overview. Weitere Informationen findest Du unter „[Übersicht über Deine Aktivitäten in Deinem Profil anzeigen](/articles/showing-an-overview-of-your-activity-on-your-profile).“

{% endnote %}

{% data reusables.user_settings.access_settings %}
2. Füge unter **Bio** (Biografie) den Inhalt ein, der in Deinem Profil angezeigt werden soll. Das Feld für die Biografie ist auf 160 Zeichen begrenzt. ![Biografie im Profil aktualisieren](/assets/images/help/profile/bio-field.png)

  {% tip %}

  **Tipp:** Wenn Du eine Organisation @erwähnst, funktioniert die automatische Vervollständigung nur bei Organisationen, bei denen Du Mitglied bist. Du kannst dennoch Organisationen @erwähnen, bei denen Du kein Mitglied sind, z. B. einen ehemaligen Auftraggeber, aber die automatische Vervollständigung funktioniert in diesem Fall nicht.

  {% endtip %}

3. Klicke auf **Update profile** (Profil aktualisieren). ![Schaltfläche „Update profile" (Aktualisieren des Profils)](/assets/images/help/profile/update-profile-button.png)

### Einen Status festlegen

Sie können einen Status festlegen, um Informationen zu Ihrer aktuellen Verfügbarkeit auf {% data variables.product.product_name %} anzuzeigen. An folgenden Stellen wird Ihr Status angezeigt:
- auf Deiner {% data variables.product.product_name %}-Profilseite.
- wenn Benutzer auf {% data variables.product.product_name %} mit dem Mauszeiger über Deinen Benutzernamen oder Deinen Avatar fahren.
- auf der Teamseite eines Teams, bei dem Du Mitglied bist. Weitere Informationen findest Du unter „[Informationen zu Teams](/articles/about-teams#nested-teams).“
- auf dem Organisations-Dashboard einer Organisation, bei der Du Mitglied bist. Weitere Informationen findest Du unter „[Informationen zum persönlichen Dashboard](/articles/about-your-personal-dashboard/).“

Wenn Sie Ihren Status festlegen, können Sie andere Benutzer auch darüber informieren, dass Sie auf {% data variables.product.product_name %} nur begrenzt verfügbar sind.

![Neben @erwähntem Benutzernamen wird „busy“ (Beschäftigt) angezeigt](/assets/images/help/profile/username-with-limited-availibilty-text.png)

![Neben angefordertem Reviewer wird „busy“ (Beschäftigt) angezeigt](/assets/images/help/profile/request-a-review-limited-availability-status.png)

Wenn Sie die Option „Busy“ (Beschäftigt) auswählen, wird ein entsprechender Hinweis neben Ihrem Benutzernamen angezeigt, wenn andere Benutzer Sie @erwähnen, Ihnen einen Issue oder Pull Request zuweisen oder einen Pull-Request-Review von Ihnen anfordern.

1. Klicke in der oberen rechten Ecke von {% data variables.product.product_name %} auf Dein Profilbild. Klicke anschließend auf **Set your status** (Deinen Status festlegen) oder, wenn Du bereits einen Status eingerichtet hast, auf den aktuellen Status. ![Schaltfläche im Profil zum Festlegen des Status](/assets/images/help/profile/set-status-on-profile.png)
2. Um benutzerdefinierten Text zu Deinem Status hinzuzufügen, klicke in das Textfeld und gib dort eine Statusmeldung ein. ![Feld zum Eingeben einer Statusmeldung](/assets/images/help/profile/type-a-status-message.png)
3. Um einen Emoji-Status festzulegen, klicke optional auf das Smiley-Symbol und wähle einen Emoji aus der Liste aus. ![Schaltfläche zum Auswählen eines Emoji-Status](/assets/images/help/profile/select-emoji-status.png)
4. Wenn Du angeben möchtest, dass Du nur eingeschränkt verfügbar bist, wähle optional „Busy“ (Beschäftigt) aus. ![In den Optionen zum Bearbeiten des Status ausgewählte Option „busy“ (Beschäftigt)](/assets/images/help/profile/limited-availability-status.png)
5. Wähle im Dropdownmenü **Clear status** (Status löschen) aus, wann Dein Status ablaufen soll. Wenn Du kein Ablaufdatum für den Status auswählst, bleibt Dein Status bestehen, bis Du ihn löschst oder bearbeitest. ![Dropdownmenü zum Auswählen des Ablaufdatums für den Status](/assets/images/help/profile/status-expiration.png)
6. Klicke im Dropdownmenü auf die Organisation, für die Dein Status sichtbar sein soll. Wenn Du keine Organisation auswählst, ist Dein Status öffentlich sichtbar. ![Dropdownmenü zum Auswählen, für wen Dein Status sichtbar sein soll](/assets/images/help/profile/status-visibility.png)
7. Klicke auf **Set status** (Status festlegen). ![Schaltfläche zum Festlegen des Status](/assets/images/help/profile/set-status-button.png)

{% if currentVersion == "free-pro-team@latest" %}
### Displaying badges on your profile

When you participate in certain programs, {% data variables.product.prodname_dotcom %} automatically displays a badge on your profile.

| Badge                                                           | Program                                                                   | Beschreibung                                                                                                                                                                                                                                                                                                                                                         |
| --------------------------------------------------------------- | ------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {% octicon "north-star" aria-label="The North Star icon" %}     | **{% data variables.product.prodname_arctic_vault %} Contributor** | If you authored any commit(s) on the default branch of a repository that was archived in the 2020 Arctic Vault program, you'll get an {% data variables.product.prodname_arctic_vault %} Contributor badge on your profile. For more information on the program, see [{% data variables.product.prodname_archive %}](https://archiveprogram.github.com). |
| {% octicon "cpu" aria-label="The Developer Program icon" %}     | **Developer Program Member**                                              | If you're a registered member of the GitHub Developer Program, building an app with the GitHub API, you'll get a Developer Program Member badge on your profile. For more information on the GitHub Developer Program, see [GitHub Developer](/program/).                                                                                                            |
| {% octicon "heart-fill" aria-label="The GitHub Sponsor icon" %} | **GitHub Sponsor**                                                        | If you sponsored an open source contributor through {% data variables.product.prodname_sponsors %} you'll get a GitHub Sponsor badge on your profile. For more information, see "[Sponsoring open source contributors](/github/supporting-the-open-source-community-with-github-sponsors/sponsoring-open-source-contributors)."                                 |
| {% octicon "star-fill" aria-label="The star icon" %}            | **Pro**                                                                   | If you use {% data variables.product.prodname_pro %} you'll get a PRO badge on your profile. Weitere Informationen zu {% data variables.product.prodname_pro %} finden Sie unter „[Produkte von {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/githubs-products#github-pro)“.                                    |

### Disabling badges on your profile

You can disable some of the badges for {% data variables.product.prodname_dotcom %} programs you're participating in, including the PRO and {% data variables.product.prodname_arctic_vault %} badges.

{% data reusables.user_settings.access_settings %}
2. Under "Profile settings", deselect the badge you want you disable. ![Checkbox to no longer display a badge on your profile](/assets/images/help/profile/display-pro-badge-checkbox.png)
3. Klicke auf **Update preferences** (Voreinstellungen aktualisieren).

{% endif %}

### Weiterführende Informationen

- „[Informationen zu Ihrem Profil](/articles/about-your-profile)“
