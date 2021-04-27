---
title: Releases in einem Repository verwalten
intro: Du kennst Releases erstellen, um Iterationen eines Projektes zu bündeln und an Benutzer zu liefern.
redirect_from:
  - /articles/creating-releases
  - /articles/listing-and-editing-releases/
  - /articles/editing-and-deleting-releases
  - /articles/managing-releases-in-a-repository
  - /github/administering-a-repository/creating-releases
  - /github/administering-a-repository/editing-and-deleting-releases
permissions: 'Repository-Mitarbeiter und Personen mit Schreibzugriff auf ein Repository können einen Release erstellen, bearbeiten und löschen.'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - repositorys
---

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion ver_gt "github-ae@latest" %}

### About release management

{% if currentVersion == "free-pro-team@latest" %}
You can also publish an action from a specific release in {% data variables.product.prodname_marketplace %}. For more information, see "<a href="/actions/creating-actions/publishing-actions-in-github-marketplace" class="dotcom-only">Publishing an action in the {% data variables.product.prodname_marketplace %}</a>."
{% endif %}
You can choose whether

{% data variables.large_files.product_name_long %} ({% data variables.large_files.product_name_short %}) objects are included in the ZIP files and tarballs that {% data variables.product.product_name %} creates for each release. For more information, see "[Managing {% data variables.large_files.product_name_short %} objects in archives of your repository](/github/administering-a-repository/managing-git-lfs-objects-in-archives-of-your-repository)."
{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
{% tip %}

**Tip**: You can also manage releases using the {% data variables.product.prodname_cli %}. For more information, see "[`gh release`](https://cli.github.com/manual/gh_release)" in the {% data variables.product.prodname_cli %} documentation.

{% endtip %}
{% endif %}

### Einen Release erstellen

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.releases %}
3. Klicke auf **Draft a new release** (Einen neuen Release entwerfen). ![Schaltfläche für Release-Entwurf](/assets/images/help/releases/draft_release_button.png)
4. Gib eine Versionsnummer für Deinen Release ein. Die Versionen basieren auf [Git-Tags](https://git-scm.com/book/en/Git-Basics-Tagging). Wir empfehlen Tags so zu benennen, dass sie zur [semantische Versionierung](http://semver.org/) passen. ![Tag-Version für Release](/assets/images/help/releases/releases-tag-version.png)
5. Benutze des Dropdownmenü um den Branch zu wählen, der das Projekt enthält, das Du freigeben willst. ![Tag-Branch für Releases](/assets/images/help/releases/releases-tag-branch.png)
6. Gib einen Titel und eine Beschreibung für Deinen Release ein. ![Beschreibung der Releases](/assets/images/help/releases/releases_description.png)
7. Um optional binäre Dateien wie kompilierte Programme in Deinen Release einzubinden, ziehe die Dateien mit Drag-and-Drop herüber oder wähle die Dateien manuell im Feld für Binärdateien. ![DMG mit dem Release bereitstellen](/assets/images/help/releases/releases_adding_binary.gif)
8. Um Benutzer darüber zu informieren, dass der Release nicht produktionsbereit und möglicherweise instabil ist, wähle **This is a pre-release** (Dies ist eine Vorabversion). ![Kontrollkästchen für die Markierung eines Release als Vorab-Release](/assets/images/help/releases/prerelease_checkbox.png)
{%- if currentVersion == "free-pro-team@latest" %}
1. Optionally, select **Create a discussion for this release**, then select the **Category** drop-down menu and click a category for the release discussion. ![Checkbox to create a release discussion and drop-down menu to choose a category](/assets/images/help/releases/create-release-discussion.png)
{%- endif %}
9. Wenn Du Deinen Release publizieren möchtest, klicke auf **Publish release** (Release publizieren). Um den Release später zu bearbeiten, klicke auf **Save draft** (Entwurf speichern). ![Schaltfläche „Publish release“ (Veröffentlichung veröffentlichen) und Schaltfläche zum Speichern als Entwurf](/assets/images/help/releases/release_buttons.png)

Du kannst auch automatisch einem Release aus der Kommandozeile oder in einem Skript erstellen. For more information, see "[Releases](/rest/reference/repos/#create-a-release)."

### Eine Veröffentlichung bearbeiten

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.releases %}
3. Klicke rechts auf der Seite neben dem Release, den Du bearbeiten willst, auf **Edit release** (Release bearbeiten). ![Einen Release bearbeiten](/assets/images/help/releases/edit-release.png)
4. Bearbeite im Formular die Details für den Release, dann klicke auf **Update release** (Release aktualisieren). ![Einen Release aktualisieren](/assets/images/help/releases/update-release.png)

### Eine Veröffentlichung löschen

Du musst alle an einen Release angehängten binären Dateien entfernen, bevor Du den Release löschen kannst.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.releases %}
3. Klicke auf den Namen des Release, den Du löschen willst. ![Link zur Ansicht des Release](/assets/images/help/releases/release-name-link.png)
4. Klicke in der oberen rechte Ecke der Seite auf **Delete** (Löschen). ![Schaltfläche „Delete release" (Release löschen)](/assets/images/help/releases/delete-release.png)
5. Klicke auf **Delete this release** (Lösche diesen Release). ![Das Löschen des Release bestätigen](/assets/images/help/releases/confirm-delete-release.png)
