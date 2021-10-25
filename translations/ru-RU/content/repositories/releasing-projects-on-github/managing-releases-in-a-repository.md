---
title: Managing releases in a repository
intro: You can create releases to bundle and deliver iterations of a project to users.
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

## Creating a release

{% include tool-switcher %}

{% webui %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.releases %}
3. Click **Draft a new release**. ![Releases draft button](/assets/images/help/releases/draft_release_button.png)
4. {% ifversion fpt %}Click **Choose a tag** and type{% else %}Type{% endif %} a version number for your release. Alternatively, select an existing tag.
   {% ifversion fpt %}
   ![Enter a tag](/assets/images/help/releases/releases-tag-create.png)
1. If you are creating a new tag, click **Create new tag**. ![Confirm you want to create a new tag](/assets/images/help/releases/releases-tag-create-confirm.png)
   {% else %}
   ![Releases tagged version](/assets/images/enterprise/releases/releases-tag-version.png)
{% endif %}
5. If you have created a new tag, use the drop-down menu to select the branch that contains the project you want to release.
   {% ifversion fpt %}![Choose a branch](/assets/images/help/releases/releases-choose-branch.png)
   {% else %}![Releases tagged branch](/assets/images/enterprise/releases/releases-tag-branch.png)
   {% endif %}
6. Type a title and description for your release.
   {%- ifversion fpt or ghes > 3.2 or ghae-issue-4972 %}
   If you @mention any {% data variables.product.product_name %} users in the description, the published release will include a **Contributors** section with an avatar list of all the mentioned users.
   {%- endif %}
   {% ifversion fpt %} Alternatively, you can automatically generate your release notes by clicking **Auto-generate release notes**.
   {% endif %}
   ![Releases description](/assets/images/help/releases/releases_description_auto.png)
7. Optionally, to include binary files such as compiled programs in your release, drag and drop or manually select files in the binaries box. ![Providing a DMG with the Release](/assets/images/help/releases/releases_adding_binary.gif)
8. To notify users that the release is not ready for production and may be unstable, select **This is a pre-release**. ![Checkbox to mark a release as prerelease](/assets/images/help/releases/prerelease_checkbox.png)
{%- ifversion fpt %}
1. Optionally, select **Create a discussion for this release**, then select the **Category** drop-down menu and click a category for the release discussion. ![Checkbox to create a release discussion and drop-down menu to choose a category](/assets/images/help/releases/create-release-discussion.png)
{%- endif %}
9. If you're ready to publicize your release, click **Publish release**. To work on the release later, click **Save draft**. ![Publish release and Draft release buttons](/assets/images/help/releases/release_buttons.png)

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

## Editing a release

{% include tool-switcher %}

{% webui %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.releases %}
3. On the right side of the page, next to the release you want to edit, click **Edit release**. ![Edit a release](/assets/images/help/releases/edit-release.png)
4. Edit the details for the release in the form, then click **Update release**.{% ifversion fpt or ghes > 3.2 or ghae-issue-4972 %} If you add or remove any @mentions of GitHub users in the description, those users will be added or removed from the avatar list in the **Contributors** section of the release.{% endif %} ![Update a release](/assets/images/help/releases/update-release.png)

{% endwebui %}

{% cli %}

Releases cannot currently be edited with {% data variables.product.prodname_cli %}.

{% endcli %}

## Deleting a release

{% include tool-switcher %}

{% webui %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.releases %}
3. Click the name of the release you wish to delete. ![Link to view release](/assets/images/help/releases/release-name-link.png)
4. In the upper-right corner of the page, click **Delete**. ![Delete release button](/assets/images/help/releases/delete-release.png)
5. Click **Delete this release**. ![Confirm delete release](/assets/images/help/releases/confirm-delete-release.png)

{% endwebui %}

{% cli %}

1. To delete a release, use the `gh release delete` subcommand. Replace `tag` with the tag of the release to delete. Use the `-y` flag to skip confirmation.

   ```shell
   gh release delete <em>tag</em> -y
   ```

{% endcli %}
