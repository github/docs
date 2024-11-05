---
title: Adding a license to a repository
intro: You can include an open source license in your repository to make it easier for other people to contribute.
redirect_from:
  - /articles/adding-a-license-to-a-repository
  - /github/building-a-strong-community/adding-a-license-to-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Add a license to a repo
---
If you include a detectable license in your repository, people who visit your repository will see it at the top of the repository page. To read the entire license file, click the license name.

![Screenshot of the main page of the github-linguist/linguist repository. In the right sidebar, "MIT license," preceded by a law icon, is outlined in dark orange.](/assets/images/help/repository/repo-license-indicator.png)

Open source licenses enable others to freely use, change, and distribute the project in your repository. For more information on repository licenses, see "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository)."

## Including an open source license in your repository

<!--Dotcom version uses the license tool-->
{% ifversion fpt or ghec %}
{% data reusables.repositories.navigate-to-repo %}
{% data reusables.files.add-file %}
1. In the file name field, type _LICENSE_ or _LICENSE.md_ (with all caps).
1. Under the file name, click **Choose a license template**.

   ![Screenshot of the new file form, with "LICENSE" entered in the file name field. A button, labeled "Choose a license template," is outlined in dark orange.](/assets/images/help/repository/license-tool.png)
1. On the left side of the page, under "Add a license to your project," review the available licenses, then select a license from the list.
1. Click **Review and submit**.
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.choose-commit-email %}
{% data reusables.files.propose_file_change %}

{% endif %}

<!--GHE version just adds a file named LICENSE or LICENSE.md-->
{% ifversion ghes %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.files.add-file %}
1. In the file name field, type _LICENSE_ or _LICENSE.md_ (with all caps).
1. On the **Edit new file** tab, paste the full text of the license you want to use.
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose-commit-email %}
1. Below the commit message fields, decide whether to add your commit to the current branch or to a new branch. If your current branch is `main`, you should choose to create a new branch for your commit and then create a pull request. For more information, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)".
![Screenshot of a {% data variables.product.prodname_dotcom %} pull request showing a radio button to commit directly to the main branch or to create a new branch. New branch is selected.](/assets/images/help/repository/choose-commit-branch.png)
{% data reusables.files.propose_file_change %}

{% endif %}

## Further reading

* "[AUTOTITLE](/communities/setting-up-your-project-for-healthy-contributions/setting-guidelines-for-repository-contributors)"
