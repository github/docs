---
title: Configure default settings for assignment repositories
shortTitle: Configure defaults for assignment repositories
intro: You can use the Probot Settings app to configure the default settings for repositories that {% data variables.product.prodname_classroom %} creates for an assignment.
permissions: Organization owners can configure default settings for assignment repositories by installing a {% data variables.product.prodname_github_app %} for the organization.
versions:
  free-pro-team: '*'
redirect_from:
  - /education/manage-coursework-with-github-classroom/probot-settings
---

### About configuration of defaults for assignment repositories

{% data variables.product.prodname_classroom %} creates a repository that belongs for each student or team that accepts an assignment. The repository belongs to the organization that you use for {% data variables.product.prodname_classroom %}. Assignment repositories can be empty, or you can use a template repository. For more information, see "[Create an assignment from a template repository](/education/manage-coursework-with-github-classroom/create-an-assignment-from-a-template-repository)."

{% data reusables.classroom.you-may-want-to-predefine-repository-settings %}

With the Probot Settings app, you can create a file named _.github/settings.yml_ in a repository that contains a list of settings for the repository, and then install a {% data variables.product.prodname_github_app %} for your organization that automatically applies the settings to the repository.

You can include _.github/settings.yml_ in a template repository that you use for an assignment in {% data variables.product.prodname_classroom %}. When an individual or team accepts the assignment, {% data variables.product.prodname_classroom %} creates the assignment repository, and the Settings app automatically applies the settings from _.github/settings.yml_.

Probot is a a project, framework, and collection of free apps to automate {% data variables.product.product_name %}. A Probot app can listen to repository events, like the creation of new commits, comments, and issues, and automatically respond to the event.

For more information, see the [Probot website](https://probot.github.io) and the [Settings app website](https://probot.github.io/apps/settings/). For more information about {% data variables.product.prodname_github_apps %}, see "[About apps](/developers/apps/about-apps)."

### Adding the Settings app to your organization

After you install the Probot Settings app for your organization, the app will apply the settings that you define in _.github/settings.yml_  for any repository in your organization, including new assignment repositories that {% data variables.product.prodname_classroom %} creates.

1. Navigate to the [Settings app page](https://github.com/apps/settings).
1. Click **Install**, then click the organization that you use for  {% data variables.product.prodname_classroom %}. Provide the app full access to all repositories owned by the organization. ![Installing the Probot Settings app](/assets/images/help/classroom/probot-settings.gif)

### Configuring default settings for an assignment repository

1. Create a template repository that contains a _.github/settings.yml_ file. For a complete list of settings, see the [README](https://github.com/probot/settings#github-settings) for the `probot/settings` repository. For more information about using a template repository for starter code in {% data variables.product.prodname_classroom %}, see "[Create an assignment from a template repository](/education/manage-coursework-with-github-classroom/create-an-assignment-from-a-template-repository)."

    {% warning %}

    **Warning:** Do not define `collaborators` in the _.github/settings.yml_ file for your template repository. {% data variables.product.prodname_classroom %} automatically grants teachers and teaching assistants access to assignment repositories.

    {% endwarning %}

1. Create an assignment using the template repository containing _.github/settings.yml_ as the starter code. {% data reusables.classroom.for-more-information-about-assignment-creation %}

The Probot Settings app for your organization will now apply the settings you define in _.github/settings.yml_ within the template repository to every assignment repository that {% data reusables.classroom.you-may-want-to-predefine-repository-settings %} creates for a student or team.

### Weiterführende Informationen

- [Probot apps](https://probot.github.io/apps/)
- [Probot documentation](https://probot.github.io/docs/)
