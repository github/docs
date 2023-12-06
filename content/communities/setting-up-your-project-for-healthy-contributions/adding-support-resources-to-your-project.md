---
title: Adding support resources to your project
intro: You can create a SUPPORT file to let people know about ways to get help with your project.
redirect_from:
  - /articles/adding-support-resources-to-your-project
  - /github/building-a-strong-community/adding-support-resources-to-your-project
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Add support resources
---

To direct people to specific support resources, you can add a SUPPORT file to your repository's root, `docs`, or `.github` folder. When someone creates an issue in your repository, they will see a link to your project's SUPPORT file.

![Screenshot of the new issue form. In the right sidebar, in the "Helpful resources" section, a link labeled "Support" is outlined in dark orange.](/assets/images/help/issues/support-guidelines-in-issue.png)

{% ifversion fpt or ghes or ghec %}

You can create default support resources for your organization or personal account. For more information, see "[AUTOTITLE](/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file)."

{% endif %}

{% tip %}

**Tip:** To help people find your support guidelines, you can link to your SUPPORT file from other places in your repository, such as your [README file](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes).

{% endtip %}

## Adding support resources to your project

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.files.add-file %}
1. In the file name field, type _SUPPORT.md_ (with all caps).
1. On the **Edit new file** tab, add information about how people can get support for your project.
1. To review your SUPPORT file, click **Preview**.
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose-commit-email %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_new_file %}
