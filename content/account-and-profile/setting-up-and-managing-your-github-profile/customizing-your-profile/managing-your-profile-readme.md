---
title: Managing your profile README
intro: 'You can add a README to your {% data variables.product.prodname_dotcom %} profile to tell other people about yourself.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Profiles
permissions: 'Profile READMEs are not available to {% data variables.enterprise.prodname_managed_users %}.'
redirect_from:
  - /github/setting-up-and-managing-your-github-profile/managing-your-profile-readme
  - /github/setting-up-and-managing-your-github-profile/customizing-your-profile/managing-your-profile-readme
shortTitle: Your profile README
---
## About your profile README

You can share information about yourself with the community on {% data variables.product.prodname_dotcom %} by creating a profile README. {% data variables.product.prodname_dotcom %} shows your profile README at the top of your profile page.

You decide what information to include in your profile README, so you have full control over how you present yourself on {% data variables.product.prodname_dotcom %}. Here are some examples of information that visitors may find interesting, fun, or useful in your profile README.

* An "About me" section that describes your work and interests
* Contributions you're proud of, and context about those contributions
* Guidance for getting help in communities where you're involved

![Screenshot of the profile page for @octocato. In the top-right corner, a profile README greets the viewer and lists information about the user's work.](/assets/images/help/repository/profile-with-readme.png)

You can format text and include emoji, images, and GIFs in your profile README by using {% data variables.product.company_short %} Flavored Markdown. For more information, see "[AUTOTITLE](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github)." For a hands-on guide to customizing your profile README, see "[AUTOTITLE](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/quickstart-for-writing-on-github)."

## Prerequisites

{% data variables.product.prodname_dotcom %} will display your profile README on your profile page if all of the following are true.

* You've created a repository with a name that matches your {% data variables.product.prodname_dotcom %} username.
* The repository is public.
* The repository contains a file named README.md in its root.
* The README.md file contains any content.

{% note %}

**Note**: If you created a public repository with the same name as your username before July 2020, {% data variables.product.prodname_dotcom %} won't automatically show the repository's README on your profile. You can manually share the repository's README to your profile by going to the repository on {% data variables.product.prodname_dotcom %} and clicking **Share to profile**.

{% endnote %}

## Adding a profile README

{% data reusables.profile.create-profile-readme %}
1. Above the right sidebar, click **Edit README**.

  The generated README file is pre-populated with a template to give you some inspiration for your profile README.

For a summary of all the available emojis and their codes, see "[Emoji cheat sheet](https://www.webfx.com/tools/emoji-cheat-sheet/)."

## Removing a profile README

The profile README will be removed from your {% data variables.product.prodname_dotcom %} profile if any of the following apply:

* The README file is removed or made empty.
* The repository is made private.
* The repository name no longer matches your username due to a change in either or both names.

The method you choose depends upon your needs, but if you're unsure, we recommend making your repository private. For steps on how to make your repository private, see "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/setting-repository-visibility#changing-a-repositorys-visibility)."

## Further reading

* "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes)"
* "[AUTOTITLE](/organizations/collaborating-with-groups-in-organizations/customizing-your-organizations-profile#adding-a-member-only-organization-profile-readme)"
{%- ifversion enterprise-readme %}
* "[AUTOTITLE](/admin/managing-your-enterprise-account/creating-a-readme-for-an-enterprise)"
{%- endif %}
