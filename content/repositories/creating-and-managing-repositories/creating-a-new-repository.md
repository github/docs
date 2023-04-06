---
title: Creating a new repository
intro: You can create a new repository on your personal account or any organization where you have sufficient permissions.
redirect_from:
  - /creating-a-repo
  - /articles/creating-a-repository-in-an-organization
  - /articles/creating-a-new-organization-repository
  - /articles/creating-a-new-repository
  - /articles/creating-an-internal-repository
  - /github/setting-up-and-managing-your-enterprise-account/creating-an-internal-repository
  - /github/creating-cloning-and-archiving-repositories/creating-an-internal-repository
  - /github/creating-cloning-and-archiving-repositories/creating-a-new-repository
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/creating-a-new-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
---
{% tip %}

**Tip:** Owners can restrict repository creation permissions in an organization. For more information, see "[AUTOTITLE](/organizations/managing-organization-settings/restricting-repository-creation-in-your-organization)."

{% endtip %}

{% tip %}

**Tip**: You can also create a repository using the {% data variables.product.prodname_cli %}. For more information, see "[`gh repo create`](https://cli.github.com/manual/gh_repo_create)" in the {% data variables.product.prodname_cli %} documentation.

{% endtip %}

{% data reusables.repositories.create_new %}
1. Optionally, to create a repository with the directory structure and files of an existing repository, select the **Choose a template** dropdown menu and click a template repository. You'll see template repositories that are owned by you and organizations you're a member of or that you've used before. For more information, see "[AUTOTITLE](/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template)."
1. Optionally, if you chose to use a template, to include the directory structure and files from all branches in the template, and not just the default branch, select **Include all branches**.
1. In the Owner dropdown, select the account you wish to create the repository on.
   ![Owner dropdown menu](/assets/images/help/repository/create-repository-owner.png)
{% data reusables.repositories.repo-name %}
{% data reusables.repositories.choose-repo-visibility %}
1. If you're not using a template, there are a number of optional items you can pre-populate your repository with. If you're importing an existing repository to {% data variables.product.product_name %}, don't choose any of these options, as you may introduce a merge conflict. You can add or create new files using the user interface or choose to add new files using the command line later. For more information, see "[AUTOTITLE](/migrations/importing-source-code/using-the-command-line-to-import-source-code/importing-an-external-git-repository-using-the-command-line)," "[AUTOTITLE](/repositories/working-with-files/managing-files/adding-a-file-to-a-repository#adding-a-file-to-a-repository-using-the-command-line)," and "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts)."
    - You can create a README, which is a document describing your project. For more information, see "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes)."
    - You can create a *.gitignore* file, which is a set of ignore rules. For more information, see "[AUTOTITLE](/get-started/getting-started-with-git/ignoring-files)."{% ifversion fpt or ghec %}
    - You can choose to add a software license for your project. For more information, see "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository)."{% endif %}
{% data reusables.repositories.select-marketplace-apps %}
{% data reusables.repositories.create-repo %}
{% ifversion fpt or ghec %}
1. At the bottom of the resulting Quick Setup page, under "Import code from an old repository", you can choose to import a project to your new repository. To do so, click **Import code**.
{% endif %}

## Further reading

- "[AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories)"
- [Open Source Guides](https://opensource.guide/){% ifversion fpt or ghec %}
- [{% data variables.product.prodname_learning %}]({% data variables.product.prodname_learning_link %}){% endif %}
