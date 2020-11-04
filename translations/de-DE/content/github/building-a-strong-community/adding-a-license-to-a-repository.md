---
title: Eine Lizenz zu einem Repository hinzufügen
intro: Du kannst eine Open-Source-Lizenz zu Deinem Repository hinzufügen, um anderen die Mitarbeit zu vereinfachen.
redirect_from:
  - /articles/adding-a-license-to-a-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

Wenn Du eine nachweisbare Lizenz in Dein Repository einfügst, wird sie den Benutzern, die Dein Repository besuchen, oben auf der Repository-Seite angezeigt. Um die gesamte Lizenzdatei zu lesen, klicke auf den Namen der Lizenz.

![Ein Repository-Header mit einer MIT-Lizenz](/assets/images/help/repository/repo-license-indicator.png)

Open-Source-Lizenzen ermöglichen es anderen, das Projekt in Deinem Repository kostenlos zu verwenden, zu ändern und zu verteilen. Weitere Informationen zu Repository-Lizenzen findest Du unter „[Ein Repository lizenzieren](/articles/licensing-a-repository).“

### Eine Open-Source-Lizenz zu Deinem Repository hinzufügen

<!--Dotcom version uses the license tool-->
{% if currentVersion == "free-pro-team@latest" %}
{% data reusables.repositories.navigate-to-repo %}
{% data reusables.files.add-file %}
3. Gib im Feld für den Dateinamen *LICENSE* oder *LICENSE.md* (in Großbuchstaben) ein.
4. Klicke rechts neben dem Feld für den Dateinamen auf **Choose a license template** (Lizenzvorlage auswählen). ![Schaltfläche „Choose a license template“ (Lizenzvorlage auswählen)](/assets/images/help/repository/license-tool.png)
5. Sieh Dir auf der linken Seite unter „Add a license to your project“ (Eine Lizenz zu Deinem Projekt hinzufügen) die verfügbaren Lizenzen an, und wähle eine Lizenz aus der Liste aus. ![Liste der verfügbaren Lizenzen](/assets/images/help/repository/license-tool-picker.png)
6. Klicke auf **Review and submit** (Überprüfen und absenden). ![Schaltfläche „Review and submit" (Überprüfen und Absenden)](/assets/images/help/repository/license-review-tool.png)
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.choose-commit-email %}
10. Klicke auf **Commit new file** (Neue Datei freigeben). ![Lizenz für Branch freigeben](/assets/images/help/repository/license-submit-tool.png)

{% endif %}

<!--GHE version just adds a file named LICENSE or LICENSE.md-->
{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.files.add-file %}
3. Gib im Feld für den Dateinamen *LICENSE* oder *LICENSE.md* (in Großbuchstaben) ein.
4. Füge auf der Registerkarte **Edit new file** (Neue Datei bearbeiten) den kompletten Text der gewünschten Lizenz ein.
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose-commit-email %}
7. Lege unter den Commit-Mitteilungsfeldern fest, ob Du Deinen Commit zum aktuellen Branch oder zu einem neuen Branch hinzufügen möchtest. If your current branch is `main`, you should choose to create a new branch for your commit and then create a pull request. For more information, see "[Creating a pull request](/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request)". ![Branch-Optionen für Commit](/assets/images/help/repository/choose-commit-branch.png)
8. Klicke auf **Commit new file** (Neue Datei freigeben). ![Lizenz für Branch freigeben](/assets/images/help/repository/license-submit-tool.png)

{% endif %}

### Weiterführende Informationen

- „[Richtlinien für Repository-Mitarbeiter festlegen](/articles/setting-guidelines-for-repository-contributors)“
