---
title: Managing your profile README
intro: 'You can add a README to your {% data variables.product.prodname_dotcom %} profile to tell other people about yourself.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Profiles
redirect_from:
  - /github/setting-up-and-managing-your-github-profile/managing-your-profile-readme
  - /github/setting-up-and-managing-your-github-profile/customizing-your-profile/managing-your-profile-readme
shortTitle: Your profile README
---
## About your profile README

You can share information about yourself with the community on {% data variables.location.product_location %} by creating a profile README. {% data variables.product.prodname_dotcom %} shows your profile README at the top of your profile page.

You decide what information to include in your profile README, so you have full control over how you present yourself on {% data variables.product.prodname_dotcom %}. Here are some examples of information that visitors may find interesting, fun, or useful in your profile README.

- An "About me" section that describes your work and interests
- Contributions you're proud of, and context about those contributions
- Guidance for getting help in communities where you're involved

![Screenshot of the profile page for @octocato. In the top-right corner, a profile README greets the viewer and lists information about the user's work.](/assets/images/help/repository/profile-with-readme.png)

You can format text and include emoji, images, and GIFs in your profile README by using {% data variables.product.company_short %} Flavored Markdown. For more information, see "[AUTOTITLE](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github)." For a hands-on guide to customizing your profile README, see "[AUTOTITLE](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/quickstart-for-writing-on-github)."

## Prerequisites

{% data variables.product.prodname_dotcom %} will display your profile README on your profile page if all of the following are true.

- You've created a repository with a name that matches your {% data variables.product.prodname_dotcom %} username.
- The repository is public.
- The repository contains a file named README.md in its root.
- The README.md file contains any content.

{% note %}

**Note**: If you created a public repository with the same name as your username before July 2020, {% data variables.product.prodname_dotcom %} won't automatically show the repository's README on your profile. You can manually share the repository's README to your profile by going to the repository on {% data variables.product.prodname_dotcom_the_website %} and clicking **Share to profile**.

{% endnote %}

## Adding a profile README

{% data reusables.repositories.create_new %}
1. Under "Repository name", type a repository name that matches your {% data variables.product.prodname_dotcom %} username. For example, if your username is "octocat", the repository name must be "octocat".
1. Optionally, in the "Description" field, type a description of your repository. For example, "My personal repository."
1. Select **Public**.
{% data reusables.repositories.initialize-with-readme %}
{% data reusables.repositories.create-repo %}
1. Above the right sidebar, click **Edit README**.

  The generated README file is pre-populated with a template to give you some inspiration for your profile README.

For a summary of all the available emojis and their codes, see "[Emoji cheat sheet](https://www.webfx.com/tools/emoji-cheat-sheet/)."

## Removing a profile README

The profile README is removed from your {% data variables.product.prodname_dotcom %} profile if any of the following apply:

- The README file is empty or doesn't exist.
- The repository is private.
- The repository name no longer matches your username.

The method you choose depends upon your needs, but if you're unsure, we recommend making your repository private. For steps on how to make your repository private, see "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/setting-repository-visibility#changing-a-repositorys-visibility)."

## Further reading

- [About READMEs](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes)
