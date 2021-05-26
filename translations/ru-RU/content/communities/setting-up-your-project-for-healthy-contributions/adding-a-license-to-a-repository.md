---
title: Adding a license to a repository
intro: You can include an open source license in your repository to make it easier for other people to contribute.
redirect_from:
  - /articles/adding-a-license-to-a-repository
  - /github/building-a-strong-community/adding-a-license-to-a-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
topics:
  - Community
---

If you include a detectable license in your repository, people who visit your repository will see it at the top of the repository page. To read the entire license file, click the license name.

![A repository header with an MIT license](/assets/images/help/repository/repo-license-indicator.png)

Open source licenses enable others to freely use, change, and distribute the project in your repository. For more information on repository licenses, see "[Licensing a repository](/articles/licensing-a-repository)."

### Including an open source license in your repository

<!--Dotcom version uses the license tool-->
{% if currentVersion == "free-pro-team@latest" %}
{% data reusables.repositories.navigate-to-repo %}
{% data reusables.files.add-file %}
3. In the file name field, type *LICENSE* or *LICENSE.md* (with all caps).
4. To the right of the file name field, click **Choose a license template**. ![Choose a license template button](/assets/images/help/repository/license-tool.png)
5. On the left side of the page, under "Add a license to your project," review the available licenses, then select a license from the list. ![List of available licenses](/assets/images/help/repository/license-tool-picker.png)
6. Click **Review and submit**. ![Review and submit button](/assets/images/help/repository/license-review-tool.png)
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.choose-commit-email %}
10. Click **Commit new file**. ![Commit license to branch](/assets/images/help/repository/license-submit-tool.png)

{% endif %}

<!--GHE version just adds a file named LICENSE or LICENSE.md-->
{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.files.add-file %}
3. In the file name field, type *LICENSE* or *LICENSE.md* (with all caps).
4. On the **Edit new file** tab, paste the full text of the license you want to use.
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose-commit-email %}
7. Below the commit message fields, decide whether to add your commit to the current branch or to a new branch. If your current branch is `main`, you should choose to create a new branch for your commit and then create a pull request. For more information, see "[Creating a pull request](/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request)". ![Commit branch options](/assets/images/help/repository/choose-commit-branch.png)
8. Click **Commit new file**. ![Commit license to branch](/assets/images/help/repository/license-submit-tool.png)

{% endif %}

### Дополнительная литература

- "[Setting guidelines for repository contributors](/articles/setting-guidelines-for-repository-contributors)"
