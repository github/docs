---
title: Ein neues Repository erstellen
intro: 'Du kannst ein neues Repository in Deinem persönlichen Konto oder in jeder Organisation erstellen, für die Du ausreichend Berechtigungen hast.'
redirect_from:
  - /creating-a-repo/
  - /articles/creating-a-repository-in-an-organization/
  - /articles/creating-a-new-organization-repository/
  - /articles/creating-a-new-repository
  - /articles/creating-an-internal-repository
  - /github/setting-up-and-managing-your-enterprise-account/creating-an-internal-repository
  - /github/creating-cloning-and-archiving-repositories/creating-an-internal-repository
  - /github/creating-cloning-and-archiving-repositories/creating-a-new-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---

{% tip %}

**Tipp:** Inhaber können die Berechtigungen zum Erstellen von Repositorys in einer Organisation einschränken. Weitere Informationen findest Du unter „[Repository-Erstellung in Deiner Organisation einschränken](/articles/restricting-repository-creation-in-your-organization).“

{% endtip %}

{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
{% tip %}

**Tip**: You can also create a repository using the {% data variables.product.prodname_cli %}. For more information, see "[`gh repo create`](https://cli.github.com/manual/gh_repo_create)" in the {% data variables.product.prodname_cli %} documentation.

{% endtip %}
{% endif %}

{% data reusables.repositories.create_new %}
2. Um optional ein Repository mit der Verzeichnisstruktur und den Dateien eines vorhandenen Repositorys zu erstellen, verwende eine Repository-Vorlage aus dem Dropdownmenü **Choose a template** (Eine Vorlage auswählen). Angezeigt werden Repository-Vorlagen, die im Besitz von Dir und von Organisationen sind, bei denen Du Mitglied bist, oder die Du bereits früher verwendet hast. Weitere Informationen finden Sie unter „[Ein Repository anhand einer Vorlage erstellen](/articles/creating-a-repository-from-a-template)“. ![Template drop-down menu](/assets/images/help/repository/template-drop-down.png){% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.20" %}
3. Optional, wenn Du eine Vorlage verwendest, um die Verzeichnisstruktur und die Dateien aller Branches in der Vorlage einzubinden, und nicht nur den Standard-Branch, wähle **Alle Branches einbeziehen**. ![Include all branches checkbox](/assets/images/help/repository/include-all-branches.png){% endif %}
3. Wähle im Dropdownmenü „Owner“ (Inhaber) das Konto aus, unter dem Du das Repository erstellen möchtest. ![Dropdownmenü „Owner" (Inhaber)](/assets/images/help/repository/create-repository-owner.png)
{% data reusables.repositories.repo-name %}
{% data reusables.repositories.choose-repo-visibility %}
6. If you're not using a template, there are a number of optional items you can pre-populate your repository with. Wenn Du ein vorhandenes Repository in {% data variables.product.product_name %} importierst, wähle keine dieser Optionen aus, da dies zu Mergekonflikten führen könnte. Sie können neue Dateien über die Benutzeroberfläche hinzufügen oder erstellen oder neue Dateien später über die Befehlszeile hinzufügen. Weitere Informationen findest Du unter „[Ein Git-Repository über die Befehlszeile importieren](/articles/importing-a-git-repository-using-the-command-line/)“, „[Eine Datei über die Befehlszeile zu einem Repository hinzufügen](/articles/adding-a-file-to-a-repository-using-the-command-line)“ und „[Mergekonflikte beheben](/articles/addressing-merge-conflicts/).“
    - Sie kannst eine README-Datei erstellen, die eine Beschreibung Deines Projekts enthält. Weitere Informationen findest Du unter „[Informationen zu README-Dateien](/articles/about-readmes/).“
    - Du kannst eine *.gitignore*-Datei erstellen, die einen Satz an Regeln für das Ignorieren enthält. Weitere Informationen finden Sie unter „[Dateien ignorieren](/github/getting-started-with-github/ignoring-files)“.{% if currentVersion == "free-pro-team@latest" %}
    - Du kannst bei Bedarf eine Softwarelizenz zu Deinem Projekt hinzufügen. Weitere Informationen findest Du unter „[Ein Repository lizenzieren](/articles/licensing-a-repository)“.{% endif %}
{% data reusables.repositories.select-marketplace-apps %}
{% data reusables.repositories.create-repo %}
{% if currentVersion == "free-pro-team@latest" %}
9. Auf der daraufhin angezeigten Seite zur Schnelleinrichtung können Sie unter „Import code from an old repository“ (Code von einem alten Repository importieren) ein Projekt in Ihr neues Repository importieren. Klicke dazu auf **Import code** (Code importieren).
{% endif %}

### Weiterführende Informationen

- „[Zugriff auf die Repositorys Deiner Organisation verwalten](/articles/managing-access-to-your-organization-s-repositories)“
- [Open-Source-Leitfäden](https://opensource.guide/){% if currentVersion == "free-pro-team@latest" %}
- [{% data variables.product.prodname_learning %}]({% data variables.product.prodname_learning_link %}){% endif %}
