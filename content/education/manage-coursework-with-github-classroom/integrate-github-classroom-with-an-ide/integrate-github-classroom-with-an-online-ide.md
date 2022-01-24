---
title: Integrate GitHub Classroom with an online IDE
shortTitle: Integrate with an online IDE
intro: 'You can preconfigure a supported online integrated development environment (IDE) for assignments you create in {% data variables.product.prodname_classroom %}.'
versions:
  fpt: '*'
redirect_from:
  - /education/manage-coursework-with-github-classroom/online-ide-integrations
  - /education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-online-ide
---
## About integration with an online IDE

{% data reusables.classroom.about-online-ides %} 

After a student accepts an assignment with an online IDE, the README file in the student's assignment repository will contain a button to open the assignment in the IDE. The student can begin working immediately, and no additional configuration is necessary.

## Supported online IDE

{% data variables.product.prodname_classroom %} supports the following online IDE. You can learn more about the student experience for each IDE.

| IDE | More information |
| :- | :- |
| Microsoft MakeCode Arcade | "[About using MakeCode Arcade with {% data variables.product.prodname_classroom %}](/education/manage-coursework-with-github-classroom/about-using-makecode-arcade-with-github-classroom)" |

We know cloud IDE integrations are important to your classroom and are working to bring more options. 

## Configuring an online IDE for an assignment

You can choose the online IDE you'd like to use for an assignment when you create an assignment. To learn how to create a new assignment that uses an online IDE, see "[Create an individual assignment](/education/manage-coursework-with-github-classroom/create-an-individual-assignment)" or "[Create a group assignment](/education/manage-coursework-with-github-classroom/create-a-group-assignment)."

## Authorizing the OAuth app for an online IDE

The first time you configure an assignment with an online IDE, you must authorize the OAuth app for the online IDE for your organization.

For all repositories, grant the app **read** access to metadata, administration, and code, and **write** access to administration and code. For more information, see "[Authorizing OAuth Apps](/github/authenticating-to-github/authorizing-oauth-apps)."

## Further reading

- "[About READMEs](/github/creating-cloning-and-archiving-repositories/about-readmes)"
