---
title: Managing releases in a repository
intro: You can create releases to bundle and deliver iterations of a project to users.
redirect_from:
  - /articles/creating-releases
  - /articles/listing-and-editing-releases
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
  ghec: '*'
topics:
  - Repositories
shortTitle: Manage releases
---
## About release management

You can create new releases with release notes, @mentions of contributors, and links to binary files, as well as edit or delete existing releases. You can also create, modify, and delete releases by using the Releases API. For more information, see "[AUTOTITLE](/rest/releases/releases)" in the REST API documentation.

{% ifversion fpt or ghec %}
You can also publish an action from a specific release in {% data variables.product.prodname_marketplace %}. For more information, see "[AUTOTITLE](/actions/creating-actions/publishing-actions-in-github-marketplace)."

You can choose whether {% data variables.large_files.product_name_long %} ({% data variables.large_files.product_name_short %}) objects are included in the ZIP files and tarballs that {% data variables.product.product_name %} creates for each release. For more information, see "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-git-lfs-objects-in-archives-of-your-repository)."
{% endif %}

## Creating a release

{% webui %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.releases %}
{% data reusables.releases.create-release %}
{% data reusables.releases.previous-release-tag %}
{% data reusables.releases.release-title %}
1. In the "Describe this release" field, type a description for your release.
   If you @mention anyone in the description, the published release will include a **Contributors** section with an avatar list of all the mentioned users.
   {% ifversion fpt or ghec or ghes %} Alternatively, you can automatically generate your release notes by clicking {% ifversion previous-release-tag %}**Generate release notes**{% else %}**Auto-generate release notes**{% endif %}.{% endif %}
{% data reusables.releases.finish-release %}

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

1. To create a release, use the `gh release create` subcommand. Replace `tag` with the desired tag for the release.

   ```shell
   gh release create TAG
   ```

1. Follow the interactive prompts. Alternatively, you can specify arguments to skip these prompts. For more information about possible arguments, see [the {% data variables.product.prodname_cli %} manual](https://cli.github.com/manual/gh_release_create). For example, this command creates a prerelease with the specified title and notes.

   ```shell
   gh release create v1.3.2 --title "v1.3.2 (beta)" --notes "this is a beta release" --prerelease
   ```

If you @mention any {% data variables.product.product_name %} users in the notes, the published release on {% data variables.product.prodname_dotcom_the_website %} will include a **Contributors** section with an avatar list of all the mentioned users.

{% endcli %}

## Editing a release

{% webui %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.releases %}
{% data reusables.releases.edit-release %}
1. Edit the details for the release in the form, then click **Update release**. If you add or remove any @mentions of GitHub users in the description, those users will be added or removed from the avatar list in the **Contributors** section of the release.

{% endwebui %}

{% cli %}

Releases cannot currently be edited with {% data variables.product.prodname_cli %}.

{% endcli %}

## Deleting a release

{% webui %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.releases %}
1. On the right side of the page, next to the release you want to delete, click {% octicon "trash" aria-label="Delete" %}.

   ![Screenshot of a release in the releases list. A trash icon is highlighted with an orange outline.](/assets/images/help/releases/delete-release-trash.png)
1. Click **Delete this release**.

{% endwebui %}

{% cli %}

1. To delete a release, use the `gh release delete` subcommand. Replace `tag` with the tag of the release to delete. Use the `-y` flag to skip confirmation.

   ```shell
   gh release delete TAG -y
   ```

{% endcli %}
