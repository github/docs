---
title: Adding a code of conduct to your project
intro: 'Adopt a code of conduct to define community standards, signal a welcoming and inclusive project, and outline procedures for handling abuse.'
redirect_from:
  - /articles/adding-a-code-of-conduct-to-your-project
  - /github/building-a-strong-community/adding-a-code-of-conduct-to-your-project
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Add a code of conduct
---

A _code of conduct_ defines standards for how to engage in a community. It signals an inclusive environment that respects all contributions. It also outlines procedures for addressing problems between members of your project's community. For more information on why a code of conduct defines standards and expectations for how to engage in a community, see the [Open Source Guide](https://opensource.guide/code-of-conduct/).

Before adopting a code of conduct for your project:

- Research different codes of conduct designed for open source projects. Choose one that reflects your community's standards.
- Consider carefully whether you are willing and able to enforce it.

You can add a code of conduct to your project by using a template or manually creating a custom code of conduct. Your code of conduct will be available either way, but "Code of conduct" will only be marked as complete in your repository's community profile if you use a template. If you use a code of conduct written by another person or organization, be sure to follow any attribution guidelines from the source. For more information about community profiles, see "[AUTOTITLE](/communities/setting-up-your-project-for-healthy-contributions/about-community-profiles-for-public-repositories)."

You can create a default code of conduct for your organization or personal account. For more information, see "[AUTOTITLE](/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file)."

## Adding a code of conduct using a template

{% data variables.product.product_name %} provides templates for common codes of conduct to help you quickly add a code of conduct to your project.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.files.add-file %}
1. In the file name field, type _CODE_OF_CONDUCT.md_.
1. Select **Choose a code of conduct template**.
   ![Screenshot of a {% data variables.product.prodname_dotcom %} repository showing a new markdown file being created. A button at right, labeled "Choose a code of conduct template," is outlined in dark orange.](/assets/images/help/repository/code-of-conduct-tool.png)
1. On the left side of the page, select a code of conduct to preview and add to your project.
1. On the right side of the page, complete the fields to populate the selected code of conduct with the appropriate information.
1. Click **Review and submit**.
1. Review the contents of the code of conduct that's in the text area.
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_new_file %}

## Adding a code of conduct manually

If the code of conduct you want to use isn't available in the provided templates, you can manually add a code of conduct.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.files.add-file %}
1. In the file name field, type the name and extension for the file.
    - To make your code of conduct visible in the repository's root directory, type _CODE_OF_CONDUCT_ in the file name field.
    - To make your code of conduct visible in the repository's `docs` directory, type _docs/CODE_OF_CONDUCT_.
    - To make your code of conduct visible in the repository's `.github` directory, type _.github/CODE_OF_CONDUCT_.
1. In the new file, add your custom code of conduct.
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_new_file %}
