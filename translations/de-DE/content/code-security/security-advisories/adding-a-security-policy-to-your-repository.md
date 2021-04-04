---
title: Eine Sicherheitsrichtlinie zum Repository hinzufügen
intro: Indem Du eine Sicherheitsrichtlinie zu Deinem Repository hinzufügst, kannst Du festlegen, wie Sicherheitslücken in Deinem Projekt verantwortungsvoll gemeldet werden sollen.
redirect_from:
  - /articles/adding-a-security-policy-to-your-repository
  - /github/managing-security-vulnerabilities/adding-a-security-policy-to-your-repository
versions:
  free-pro-team: '*'
topics:
  - sicherheit
---

### Informationen zu Sicherheitsrichtlinien

Um Benutzern Anweisungen für das verantwortungsvolle Melden von Sicherheitslücken in Deinem Projekt zu geben, kannst Du eine _SECURITY.md_-Datei in den Root-, `docs`- oder `.github`-Ordner Deines Repositorys einfügen. Wenn jemand einen Issue in Deinem Repository erstellt, wird ihm ein Link zur Sicherheitsrichtlinie Deines Projekts angezeigt.

Du kannst eine Standard-Sicherheitsrichtlinie für Deine Organisation oder Dein Benutzerkonto erstellen. Weitere Informationen findest Du unter „[Eine Standard-Community-Unterstützungsdatei erstellen](/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file)."

{% tip %}

**Tipp:** Um den Benutzern das Auffinden Deiner Sicherheitsrichtlinie zu erleichtern, kannst Du an anderen Stellen in Deinem Repository, z. B. in der README-Datei, auf die Datei _SECURITY.md_ verknüpfen. Weitere Informationen finden Sie unter „[Informationen zu README-Dateien](/articles/about-readmes/)“.

{% endtip %}

Nachdem jemand eine Sicherheitslücke in Deinem Projekt gemeldet hat, kannst Du {% data variables.product.prodname_security_advisories %} verwenden, um die Verwundbarkeit offen zu legen, sie zu korrigieren und entsprechende Informationen darüber zu veröffentlichen. For more information about the process of reporting and disclosing vulnerabilities in {% data variables.product.prodname_dotcom %}, see "[About coordinated disclosure of security vulnerabilities](/code-security/security-advisories/about-coordinated-disclosure-of-security-vulnerabilities#about-reporting-and-disclosing-vulnerabilities-in-projects-on-github)." For more information about {% data variables.product.prodname_security_advisories %}, see "[About {% data variables.product.prodname_security_advisories %}](/github/managing-security-vulnerabilities/about-github-security-advisories)."

{% data reusables.repositories.github-security-lab %}

### Eine Sicherheitsrichtlinie zum Repository hinzufügen

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
3. Klicke in der linken Seitenleiste auf ** Policy** (Richtlinie). ![Registerkarte „Policy“ (Richtlinie)](/assets/images/help/security/policy-tab.png)
4. Klicke auf **Start setup** (Einrichtung starten). ![Schaltfläche „Start setup“ (Einrichtung starten)](/assets/images/help/security/start-setup-policy-button.png)
5. Füge in der neuen _SECURITY.md_-Datei Informationen zu den unterstützten Versionen Deines Projekts und Anweisungen zum Melden einer Schwachstelle hinzu.
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose-commit-email %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_file_change %}

### Weiterführende Informationen

- "[About securing your repository](/github/administering-a-repository/about-securing-your-repository)"
- „[Dein Projekt für sinnvolle Beiträge einrichten](/communities/setting-up-your-project-for-healthy-contributions)“
- [{% data variables.product.prodname_security %}]({% data variables.product.prodname_security_link %})
