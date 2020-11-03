---
title: Support-Ressourcen zu Deinem Projekt hinzufügen
intro: Du kannst eine SUPPORT-Datei erstellen, um anderen mitzuteilen, wie sie Unterstützung in Deinem Projekt erhalten.
redirect_from:
  - /articles/adding-support-resources-to-your-project
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

Um Personen auf bestimmte Support-Ressourcen zu verweisen, kannst Du eine SUPPORT-Datei zum Root-, `docs`- oder `.github`-Ordner Deines Repositorys hinzufügen. Wenn jemand einen Issue in Deinem Repository erstellt, wird ihm ein Link zur SUPPORT-Datei Deines Projekts angezeigt.

![Support-Richtlinien](/assets/images/help/issues/support_guidelines_in_issue.png)

You can create default support resources for your organization{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.19" %} or user account{% endif %}. Weitere Informationen findest Du unter „[Eine Standard Community-Unterstützungsdatei erstellen](/github/building-a-strong-community/creating-a-default-community-health-file)."

{% tip %}

**Tipp:** Damit andere Benutzer Deine Support-Richtlinien leichter finden, kannst Du Deine SUPPORT-Datei an anderen Stellen Deines Repositorys verknüpfen, beispielsweise in der [README-Datei](/articles/about-readmes/).

{% endtip %}

### Support-Ressourcen zu Deinem Projekt hinzufügen

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.files.add-file %}
3. Gib im Feld für den Dateinamen *SUPPORT.md* (in Großbuchstaben) ein.
4. Füge auf der Registerkarte **Edit new file** (Neue Datei bearbeiten) Informationen zu den Support-Möglichkeiten in Deinem Projekt hinzu.
5. Um die SUPPORT-Datei zu überprüfen, klicke auf **Preview** (Vorschau).
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose-commit-email %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_new_file %}
