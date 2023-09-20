---
title: Getting started with GitHub Desktop
intro: 'Learn how to set up, authenticate, and configure {% data variables.product.prodname_desktop %} to allow you to contribute to projects directly from your machine.'
versions:
  feature: desktop
redirect_from:
  - /desktop/installing-and-configuring-github-desktop/getting-started-with-github-desktop
  - /desktop/guides/getting-started
shortTitle: Get started
---

## Introduction

{% data reusables.desktop.about-github-desktop %}

This guide will help you get started with {% data variables.product.prodname_desktop %} by setting up the application, authenticating your account, configuring basic settings, and introducing the fundamentals of managing projects with {% data variables.product.prodname_desktop %}. You will be able to use {% data variables.product.prodname_desktop %} to collaborate on projects and connect to remote repositories after working through this guide.

You might find it helpful to have a basic understanding of Git and {% data variables.product.prodname_dotcom %} before getting started with {% data variables.product.prodname_desktop %}. For more information, see the following articles.

- "[AUTOTITLE](/get-started/using-git)"
- "[AUTOTITLE](/get-started/learning-about-github)"
- "[AUTOTITLE](/get-started)"

{% data variables.product.prodname_desktop %} is an open source project. You can see the roadmap, contribute to the project, or open an issue to provide feedback or feature requests. For more information, see the [`desktop/desktop`](https://github.com/desktop/desktop) repository.

## Part 1: Installing and authenticating

You can install {% data variables.product.prodname_desktop %} on any supported operating system. For more information, see "[AUTOTITLE](/desktop/overview/supported-operating-systems-for-github-desktop)."

To install {% data variables.product.prodname_desktop %}, visit the download page for [{% data variables.product.prodname_desktop %}](https://desktop.github.com/). For more information, see "[AUTOTITLE](/desktop/installing-and-authenticating-to-github-desktop/installing-github-desktop)."

After you have installed {% data variables.product.prodname_desktop %}, you can authenticate the application with your account on {% data variables.product.prodname_dotcom %} or {% data variables.product.prodname_enterprise %}. Authenticating allows you to connect to remote repositories on {% data variables.product.prodname_dotcom %} or {% data variables.product.prodname_enterprise %}.

{% mac %}

1. Before you can authenticate to {% data variables.product.prodname_dotcom %} or {% data variables.product.prodname_enterprise %}, you will need an account.{% ifversion fpt or ghec %} For more information, see "[AUTOTITLE](/get-started/signing-up-for-github/signing-up-for-a-new-github-account)."{% endif %}{% ifversion ghec %} If you're part of an organization that uses {% data variables.product.prodname_emus %} and you do not have an account, contact your enterprise administrator.{% elsif ghes or ghae %} If you're a member of an organization that uses {% data variables.product.product_name %} and you do not have an account, contact your {% data variables.product.prodname_enterprise %} site administrator.{% endif %}
{% data reusables.desktop.mac-select-desktop-menu %}
1. In the "Preferences" window, on the **Accounts** pane, click one of the **Sign In** buttons to sign in to your account on {% data variables.product.prodname_dotcom_the_website %} or {% data variables.product.prodname_enterprise %}.

   ![Screenshot of the "Accounts" pane in the "Preferences" window. Next to "GitHub.com", a button, labeled "Sign In", is outlined in orange.](/assets/images/help/desktop/sign-in-github.png)
1. Follow the steps to sign in. For more information about authentication, see "[AUTOTITLE](/desktop/installing-and-authenticating-to-github-desktop/authenticating-to-github-in-github-desktop)."

{% endmac %}

{% windows %}

1. Before you can authenticate to {% data variables.product.prodname_dotcom %} or {% data variables.product.prodname_enterprise %}, you will need an account.{% ifversion fpt or ghec %} For more information, see "[AUTOTITLE](/get-started/signing-up-for-github/signing-up-for-a-new-github-account)."{% endif %}{% ifversion ghec %} If you're part of an organization that uses {% data variables.product.prodname_emus %} and you do not have an account, contact your enterprise administrator.{% elsif ghes or ghae %} If you're a member of an organization that uses {% data variables.product.product_name %} and you do not have an account, contact your {% data variables.product.prodname_enterprise %} site administrator.{% endif %}
1. In the File drop-down menu, click **Options**. In the options window, click **Accounts** and follow the steps to sign in. For more information on authenticating, see "[AUTOTITLE](/desktop/installing-and-authenticating-to-github-desktop/authenticating-to-github-in-github-desktop)."
   ![Screenshot of the "Accounts" pane in the "Options" window. Next to "GitHub.com", a button, labeled "Sign In", is outlined in orange.](/assets/images/help/desktop/windows-sign-in-github.png)

{% endwindows %}

## Part 2: Configuring and customizing {% data variables.product.prodname_desktop %}

After you install {% data variables.product.prodname_desktop %}, you can configure and customize the app to best suit your needs.

{% mac %}

You can connect or remove accounts on {% data variables.product.prodname_dotcom %} or {% data variables.product.prodname_enterprise %}, choose a default text editor or shell, edit your Git configuration, change the appearance of {% data variables.product.prodname_desktop %}, customize system dialog boxes, and set privacy preferences in the {% data variables.product.prodname_desktop %} Preferences window. For more information, see "[AUTOTITLE](/desktop/configuring-and-customizing-github-desktop/configuring-basic-settings-in-github-desktop)."

![Screenshot of the "Preferences" window. The left sidebar, with menu options such as "Accounts" and "Integrations", is highlighted with an orange outline.](/assets/images/help/desktop/mac-select-preferences-pane.png)

{% endmac %}

{% windows %}

You can connect or remove accounts on {% data variables.product.prodname_dotcom %} or {% data variables.product.prodname_enterprise %}, choose a default text editor or shell, edit your Git configuration, change the appearance of {% data variables.product.prodname_desktop %}, customize system dialog boxes, and set privacy preferences in the {% data variables.product.prodname_desktop %} Options window. For more information, see "[AUTOTITLE](/desktop/configuring-and-customizing-github-desktop/configuring-basic-settings-in-github-desktop)."

![Screenshot of the "Preferences" window. The left sidebar, with menu options such as "Accounts" and "Integrations", is highlighted with an orange outline.](/assets/images/help/desktop/mac-select-preferences-pane.png)

{% endwindows %}

## Part 3: Contributing to projects with {% data variables.product.prodname_desktop %}

After installing, authenticating, and configuring the app, you are ready to start using {% data variables.product.prodname_desktop %}. You can create, add, or clone repositories and use {% data variables.product.prodname_desktop %} to manage contributions to your repositories.

### Creating, adding, and cloning repositories

You can create a new repository by selecting **File** in the "{% data variables.product.prodname_desktop %}" menu bar and clicking **New repository...**. For more information, see "[AUTOTITLE](/desktop/overview/creating-your-first-repository-using-github-desktop)."

You can add a repository from your local computer by selecting **File** and clicking **Add Local Repository...**. For more information, see "[AUTOTITLE](/desktop/adding-and-cloning-repositories/adding-a-repository-from-your-local-computer-to-github-desktop)."

You can clone a repository from {% data variables.product.prodname_dotcom %} by selecting **File** and clicking **Clone Repository...**. For more information, see "[AUTOTITLE](/desktop/adding-and-cloning-repositories/cloning-and-forking-repositories-from-github-desktop)."

{% mac %}

![Screenshot of the menu bar on a Mac. Actions for repositories are listed in the open "File" dropdown menu.](/assets/images/help/desktop/mac-file-menu.png)

{% endmac %}

{% windows %}

![Screenshot of the "GitHub Desktop" menu bar on Windows. Actions for repositories are listed in the open "File" dropdown menu.](/assets/images/help/desktop/windows-file-menu.png)

{% endwindows %}

### Making changes in a branch

You can use {% data variables.product.prodname_desktop %} to create a branch of a project. Branches isolate your development work from other branches in the repository, so that you can safely experiment with changes. For more information, see "[AUTOTITLE](/desktop/making-changes-in-a-branch/managing-branches-in-github-desktop)."

After you make changes to a branch, you can review them in {% data variables.product.prodname_desktop %} and make a commit to keep track of your changes. For more information, see "[AUTOTITLE](/desktop/making-changes-in-a-branch/committing-and-reviewing-changes-to-your-project-in-github-desktop)."

If you want to access your changes remotely or share them with other people, you can push your commits to {% data variables.product.prodname_dotcom %}. For more information, see "[AUTOTITLE](/desktop/making-changes-in-a-branch/pushing-changes-to-github-from-github-desktop)."

### Collaborating with {% data variables.product.prodname_desktop %}

You can use {% data variables.product.prodname_desktop %} to create issues or pull requests to collaborate on projects with other people. Issues help you keep track of ideas and discuss possible changes to projects. Pull requests let you share your proposed changes with others, receive feedback, and merge changes into a project. For more information, see "[AUTOTITLE](/desktop/working-with-your-remote-repository-on-github-or-github-enterprise/creating-an-issue-or-pull-request-from-github-desktop)."''

You can view your own or your collaborator's pull requests in {% data variables.product.prodname_desktop %}. Viewing a pull request in {% data variables.product.prodname_desktop %} lets you see any proposed changes and make additional changes by opening the project's files and repositories in your default text editor. For more information, see "[AUTOTITLE](/desktop/working-with-your-remote-repository-on-github-or-github-enterprise/viewing-a-pull-request-in-github-desktop)."

### Keeping your local repository in sync

When you make changes to your local repositories or when other people make changes to the remote repositories, you will need to sync your local copy of the project with the remote repository. {% data variables.product.prodname_desktop %} can keep your local copy of a project in sync with the remote version by pushing and pulling commits. For more information, see "[AUTOTITLE](/desktop/working-with-your-remote-repository-on-github-or-github-enterprise/syncing-your-branch-in-github-desktop)."
