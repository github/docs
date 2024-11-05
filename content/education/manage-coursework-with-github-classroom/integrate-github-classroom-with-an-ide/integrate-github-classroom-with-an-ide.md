---
title: Integrate GitHub Classroom with an IDE
shortTitle: Integrate with an IDE
intro: 'You can preconfigure a supported integrated development environment (IDE) for assignments you create in {% data variables.product.prodname_classroom %}.'
versions:
  fpt: '*'
permissions: 'Organization owners who are admins for a classroom can integrate {% data variables.product.prodname_classroom %} with an IDE. {% data reusables.classroom.classroom-admins-link %}'
redirect_from:
  - /education/manage-coursework-with-github-classroom/online-ide-integrations
  - /education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-online-ide
  - /education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide/integrate-github-classroom-with-an-online-ide
---
## About integration with an IDE

{% data reusables.classroom.about-online-ides %}

After a student accepts an assignment with an IDE, the README file in the student's assignment repository will contain a button to open the assignment in the IDE. The student can begin working immediately, and no additional configuration is necessary.

## Supported IDEs

{% data variables.product.prodname_classroom %} supports the following IDEs. You can learn more about the student experience for each IDE.

| IDE | More information |
| :- | :- |
| {% data variables.product.prodname_github_codespaces %} | "[AUTOTITLE](/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide/using-github-codespaces-with-github-classroom)" |
| Microsoft MakeCode Arcade | "[AUTOTITLE](/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide/about-using-makecode-arcade-with-github-classroom)" |
| {% data variables.product.prodname_vscode %} | [{% data variables.product.prodname_classroom %} extension](https://aka.ms/classroom-vscode-ext) in the Visual Studio Marketplace |

We know cloud IDE integrations are important to your classroom and are working to bring more options.

## Configuring an IDE for an assignment

You can choose the IDE you'd like to use for an assignment when you create an assignment. To learn how to create a new assignment that uses an IDE, see "[AUTOTITLE](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/create-an-individual-assignment)" or "[AUTOTITLE](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/create-a-group-assignment)."

## Setting up an assignment in a new IDE

The first time you configure an assignment using a different IDE, you must ensure that it is set up correctly.

Unless you use {% data variables.product.prodname_github_codespaces %}, you must authorize the {% data variables.product.prodname_oauth_app %} for the IDE for your organization. For all repositories, grant the app **read** access to metadata, administration, and code, and **write** access to administration and code. For more information, see "[AUTOTITLE](/apps/oauth-apps/using-oauth-apps/authorizing-oauth-apps)."

{% data variables.product.prodname_github_codespaces %} does not require an {% data variables.product.prodname_oauth_app %}, but you need to enable {% data variables.product.prodname_github_codespaces %} for your organization to be able to configure an assignment with {% data variables.product.prodname_github_codespaces %}. For more information, see "[AUTOTITLE](/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide/using-github-codespaces-with-github-classroom#enabling-codespaces-for-your-organization)."

## Further reading

* "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes)"
