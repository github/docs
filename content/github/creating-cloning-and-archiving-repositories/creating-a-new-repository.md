---
title: Creating a new repository
intro: You can create a new repository on your personal account or any organization where you have sufficient permissions.
redirect_from:
  - /creating-a-repo/
  - /articles/creating-a-repository-in-an-organization/
  - /articles/creating-a-new-organization-repository/
  - /articles/creating-a-new-repository
  - /articles/creating-an-internal-repository
  - /github/setting-up-and-managing-your-enterprise-account/creating-an-internal-repository
  - /github/creating-cloning-and-archiving-repositories/creating-an-internal-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---

{% tip %}

**Tip:** Owners can restrict repository creation permissions in an organization. For more information, see "[Restricting repository creation in your organization](/articles/restricting-repository-creation-in-your-organization)."

{% endtip %}

{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
{% tip %}

**Tip**: You can also create a repository using the {% data variables.product.prodname_cli %}. For more information, see "[`gh repo create`](https://cli.github.com/manual/gh_repo_create)" in the {% data variables.product.prodname_cli %} documentation.

{% endtip %}
{% endif %}

{% data reusables.repositories.create_new %}
2. Optionally, to create a repository with the directory structure and files of an existing repository, use the **Choose a template** drop-down and select a template repository. You'll see template repositories that are owned by you and organizations you're a member of or that you've used before. For more information, see "[Creating a repository from a template](/articles/creating-a-repository-from-a-template)."
  ![Template drop-down menu](/assets/images/help/repository/template-drop-down.png){% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.20" %}
3. Optionally, if you chose to use a template, to include the directory structure and files from all branches in the template, and not just the default branch, select **Include all branches**.
    ![Include all branches checkbox](/assets/images/help/repository/include-all-branches.png){% endif %}
3. In the Owner drop-down, select the account you wish to create the repository on.
   ![Owner drop-down menu](/assets/images/help/repository/create-repository-owner.png)
{% data reusables.repositories.repo-name %}
{% data reusables.repositories.choose-repo-visibility %}
6. If you're not using a template, there are a number of optional items you can pre-populate your repository with. If you're importing an existing repository to {% data variables.product.product_name %}, don't choose any of these options, as you may introduce a merge conflict. You can add or create new files using the user interface or choose to add new files using the command line later. For more information, see "[Importing a Git repository using the command line](/articles/importing-a-git-repository-using-the-command-line/)," "[Adding a file to a repository using the command line](/articles/adding-a-file-to-a-repository-using-the-command-line)," and "[Addressing merge conflicts](/articles/addressing-merge-conflicts/)."
    - You can create a README, which is a document describing your project. For more information, see "[About READMEs](/articles/about-readmes/)."
    - You can create a *.gitignore* file, which is a set of ignore rules. For more information, see "[Ignoring files](/github/getting-started-with-github/ignoring-files)."{% if currentVersion == "free-pro-team@latest" %}
    - You can choose to add a software license for your project. For more information, see "[Licensing a repository](/articles/licensing-a-repository)."{% endif %}
{% data reusables.repositories.select-marketplace-apps %}
{% data reusables.repositories.create-repo %}
{% if currentVersion == "free-pro-team@latest" %}
9. At the bottom of the resulting Quick Setup page, under "Import code from an old repository", you can choose to import a project to your new repository. To do so, click **Import code**.
{% endif %}

### Further reading

- "[Managing access to your organization's repositories](/articles/managing-access-to-your-organization-s-repositories)"
- [Open Source Guides](https://opensource.guide/){% if currentVersion == "free-pro-team@latest" %}
- [{% data variables.product.prodname_learning %}]({% data variables.product.prodname_learning_link %}){% endif %}
