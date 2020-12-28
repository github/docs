---
title: Adding support resources to your project
intro: You can create a SUPPORT file to let people know about ways to get help with your project.
redirect_from:
  - /articles/adding-support-resources-to-your-project
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---
To direct people to specific support resources, you can add a SUPPORT file to your repository's root, `docs`, or `.github` folder. When someone creates an issue in your repository, they will see a link to your project's SUPPORT file.

![Support guidelines](/assets/images/help/issues/support_guidelines_in_issue.png)

{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}

You can create default support resources for your organization or user account. For more information, see "[Creating a default community health file](/github/building-a-strong-community/creating-a-default-community-health-file)."

{% endif %}

{% tip %}

**Tip:** To help people find your support guidelines, you can link to your SUPPORT file from other places in your repository, such as your [README file](/articles/about-readmes/).

{% endtip %}

### Adding support resources to your project

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.files.add-file %}
3. In the file name field, type *SUPPORT.md* (with all caps).
4. On the **Edit new file** tab, add information about how people can get support for your project.
5. To review your SUPPORT file, click **Preview**.
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose-commit-email %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_new_file %}
