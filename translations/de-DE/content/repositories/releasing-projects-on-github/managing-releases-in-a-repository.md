---
title: Releases in einem Repository verwalten
intro: 'Du kennst Releases erstellen, um Iterationen eines Projektes zu bündeln und an Benutzer zu liefern.'
redirect_from:
  - /articles/creating-releases
  - /articles/listing-and-editing-releases/
  - /articles/editing-and-deleting-releases
  - /articles/managing-releases-in-a-repository
  - /github/administering-a-repository/creating-releases
  - /github/administering-a-repository/editing-and-deleting-releases
  - /github/administering-a-repository/managing-releases-in-a-repository
  - /github/administering-a-repository/releasing-projects-on-github/managing-releases-in-a-repository
permissions: 'Repository collaborators and people with write access to a repository can create, edit, and delete a release.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Repositories
shortTitle: Manage releases
---

{% ifversion fpt or ghes > 3.0 or ghae %}

## About release management

You can create new releases with release notes, @mentions of contributors, and links to binary files, as well as edit or delete existing releases.

{% ifversion fpt %}
You can also publish an action from a specific release in {% data variables.product.prodname_marketplace %}. For more information, see "<a href="/actions/creating-actions/publishing-actions-in-github-marketplace" class="dotcom-only">Publishing an action in the {% data variables.product.prodname_marketplace %}</a>."

You can choose whether {% data variables.large_files.product_name_long %} ({% data variables.large_files.product_name_short %}) objects are included in the ZIP files and tarballs that {% data variables.product.product_name %} creates for each release. For more information, see "[Managing {% data variables.large_files.product_name_short %} objects in archives of your repository](/github/administering-a-repository/managing-git-lfs-objects-in-archives-of-your-repository)."
{% endif %}
{% endif %}

## Einen Release erstellen

{% include tool-switcher %}

{% webui %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.releases %}
3. Klicke auf **Draft a new release** (Einen neuen Release entwerfen). ![Schaltfläche für Release-Entwurf](/assets/images/help/releases/draft_release_button.png)
4. {% ifversion fpt %}Click **Choose a tag** and type{% else %}Type{% endif %} a version number for your release. Alternatively, select an existing tag.
   {% ifversion fpt %}
   ![Enter a tag](/assets/images/help/releases/releases-tag-create.png)
1. If you are creating a new tag, click **Create new tag**. ![Confirm you want to create a new tag](/assets/images/help/releases/releases-tag-create-confirm.png)
   {% else %}
   ![Tag-Version für Release](/assets/images/enterprise/releases/releases-tag-version.png)
{% endif %}
5. If you have created a new tag, use the drop-down menu to select the branch that contains the project you want to release.
   {% ifversion fpt %}![Choose a branch](/assets/images/help/releases/releases-choose-branch.png)
   {% else %}![Tag-Branch für Releases](/assets/images/enterprise/releases/releases-tag-branch.png)
   {% endif %}
6. Geben Sie einen Titel und eine Beschreibung für Ihre Veröffentlichung ein.
   {%- ifversion fpt or ghes > 3.2 or ghae-issue-4972 %}
   If you @mention any {% data variables.product.product_name %} users in the description, the published release will include a **Contributors** section with an avatar list of all the mentioned users.
   {%- endif %}
   {% ifversion fpt %} Alternatively, you can automatically generate your release notes by clicking **Auto-generate release notes**.
   {% endif %}
   ![Beschreibung der Releases](/assets/images/help/releases/releases_description_auto.png)
7. Um optional binäre Dateien wie kompilierte Programme in Deinen Release einzubinden, ziehe die Dateien mit Drag-and-Drop herüber oder wähle die Dateien manuell im Feld für Binärdateien. ![DMG mit dem Release bereitstellen](/assets/images/help/releases/releases_adding_binary.gif)
8. Um Benutzer darüber zu informieren, dass der Release nicht produktionsbereit und möglicherweise instabil ist, wähle **This is a pre-release** (Dies ist eine Vorabversion). ![Kontrollkästchen für die Markierung eines Release als Vorab-Release](/assets/images/help/releases/prerelease_checkbox.png)
{%- ifversion fpt %}
1. Optionally, select **Create a discussion for this release**, then select the **Category** drop-down menu and click a category for the release discussion. ![Checkbox to create a release discussion and drop-down menu to choose a category](/assets/images/help/releases/create-release-discussion.png)
{%- endif %}
9. Wenn Du Deinen Release publizieren möchtest, klicke auf **Publish release** (Release publizieren). Um den Release später zu bearbeiten, klicke auf **Save draft** (Entwurf speichern). ![Schaltfläche „Publish release“ (Veröffentlichung veröffentlichen) und Schaltfläche zum Speichern als Entwurf](/assets/images/help/releases/release_buttons.png)

   {%- ifversion fpt or ghes > 3.2 or ghae-issue-4972 %}
   You can then view your published or draft releases in the releases feed for your repository. For more information, see "[Viewing your repository's releases and tags](/github/administering-a-repository/releasing-projects-on-github/viewing-your-repositorys-releases-and-tags)."

   ![Published release with @mentioned contributors](/assets/images/help/releases/releases-overview-with-contributors.png)
   {%- endif %}

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

1. To create a release, use the `gh release create` subcommand. Replace `tag` with the desired tag for the release.

   ```shell
   gh release create <em>tag</em>
   ```

2. Follow the interactive prompts. Alternatively, you can specify arguments to skip these prompts. For more information about possible arguments, see [the {% data variables.product.prodname_cli %} manual](https://cli.github.com/manual/gh_release_create). For example, this command creates a prerelease with the specified title and notes.

   ```shell
   gh release create v1.3.2 --title "v1.3.2 (beta)" --notes "this is a beta release" --prerelease
   ```
{% ifversion fpt or ghes > 3.2 or ghae-issue-4972 %}
If you @mention any {% data variables.product.product_name %} users in the notes, the published release on {% data variables.product.prodname_dotcom_the_website %} will include a **Contributors** section with an avatar list of all the mentioned users.
{% endif %}

{% endcli %}

## Eine Veröffentlichung bearbeiten

{% include tool-switcher %}

{% webui %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.releases %}
3. Klicke rechts auf der Seite neben dem Release, den Du bearbeiten willst, auf **Edit release** (Release bearbeiten). ![Einen Release bearbeiten](/assets/images/help/releases/edit-release.png)
4. Edit the details for the release in the form, then click **Update release**.{% ifversion fpt or ghes > 3.2 or ghae-issue-4972 %} If you add or remove any @mentions of GitHub users in the description, those users will be added or removed from the avatar list in the **Contributors** section of the release.{% endif %} ![Einen Release aktualisieren](/assets/images/help/releases/update-release.png)

{% endwebui %}

{% cli %}

Releases cannot currently be edited with {% data variables.product.prodname_cli %}.

{% endcli %}

## Eine Veröffentlichung löschen

{% include tool-switcher %}

{% webui %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.releases %}
3. Klicke auf den Namen des Release, den Du löschen willst. ![Link zur Ansicht des Release](/assets/images/help/releases/release-name-link.png)
4. Klicke in der oberen rechte Ecke der Seite auf **Delete** (Löschen). ![Schaltfläche „Delete release" (Release löschen)](/assets/images/help/releases/delete-release.png)
5. Klicke auf **Delete this release** (Lösche diesen Release). ![Das Löschen des Release bestätigen](/assets/images/help/releases/confirm-delete-release.png)

{% endwebui %}

{% cli %}

1. To delete a release, use the `gh release delete` subcommand. Replace `tag` with the tag of the release to delete. Use the `-y` flag to skip confirmation.

   ```shell
   gh release delete <em>tag</em> -y
   ```

{% endcli %}
