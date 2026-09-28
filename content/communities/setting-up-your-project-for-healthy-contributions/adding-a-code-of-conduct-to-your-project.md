---
title: Adding a code of conduct to your project
intro: 'Adopt a code of conduct to define community standards, signal a welcoming and inclusive project, and outline procedures for handling abuse.'
redirect_from:
  - /articles/adding-a-code-of-conduct-to-your-project
  - /github/building-a-strong-community/adding-a-code-of-conduct-to-your-project
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
shortTitle: Add a code of conduct
category:
  - Set up your project for contributions
---

A _code of conduct_ defines standards for how to engage in a community. It signals an inclusive environment that respects all contributions. It also outlines procedures for addressing problems between members of your project's community. For more information on why a code of conduct defines standards and expectations for how to engage in a community, see the [Open Source Guide](https://opensource.guide/code-of-conduct/).

Before adopting a code of conduct for your project:

* Research different codes of conduct designed for open source projects. Choose one that reflects your community's standards.
* Consider carefully whether you are willing and able to enforce it.

{% ifversion fpt or ghec %}
You can add a code of conduct to your project by using a template or manually creating a custom code of conduct. Your code of conduct will be available either way. In a public repository's community profile, "Code of conduct" is marked as added if the file is not empty and does not state that the project has no code of conduct. If you use a code of conduct written by another person or organization, be sure to follow any attribution guidelines from the source. For more information about community profiles, see [AUTOTITLE](/communities/setting-up-your-project-for-healthy-contributions/about-community-profiles-for-public-repositories).
{% else %}
You can add a code of conduct to your project by manually creating a custom code of conduct file. If you use a code of conduct written by another person or organization, be sure to follow any attribution guidelines from the source.
{% endif %}

You can create a default code of conduct for your organization{% ifversion ghec %} or, unless you are signed in with a {% data variables.enterprise.prodname_managed_user %}, for your personal account{% else %} or personal account{% endif %}. For more information, see [AUTOTITLE](/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file).

{% ifversion fpt or ghec %}

## Adding a code of conduct using a template

{% data variables.product.github %} provides templates for common codes of conduct to help you quickly add a code of conduct to your project. To use a template, you must have write access to the repository.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.files.add-file %}
1. In the file name field, type _CODE_OF_CONDUCT.md_.
1. Select **Choose a code of conduct template**.
   ![Screenshot of a repository showing a new markdown file. A button at right, labeled "Choose a code of conduct template," is outlined in orange.](/assets/images/help/repository/code-of-conduct-tool.png)
1. On the left side of the page, select a code of conduct to preview and add to your project.
1. On the right side of the page, complete the fields to populate the selected code of conduct with the appropriate information.
1. Click **Review and submit**.
1. Review the contents of the code of conduct that's in the text area.
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_new_file %}

{% endif %}

## Adding a code of conduct manually

{% ifversion fpt or ghec %}If the code of conduct you want to use isn't available in the provided templates, you can manually add a code of conduct.{% else %}You can manually add a code of conduct to your project.{% endif %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.files.add-file %}
1. In the file name field, type the path and name for the file. {% data variables.product.github %} looks for a code of conduct in the `.github` directory, then the root of the repository, then the `docs` directory, and uses the first file it finds.
    * To add your code of conduct to the repository's `.github` directory, type _.github/CODE_OF_CONDUCT.md_.
    * To add your code of conduct to the repository's root directory, type _CODE_OF_CONDUCT.md_.
    * To add your code of conduct to the repository's `docs` directory, type _docs/CODE_OF_CONDUCT.md_.
1. In the new file, add your custom code of conduct.
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_new_file %}
