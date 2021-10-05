---
title: Integrar a GitHub Classroom con un IDE
shortTitle: Integrar con un IDE
intro: 'You can preconfigure a supported integrated development environment (IDE) for assignments you create in {% data variables.product.prodname_classroom %}.'
versions:
  fpt: '*'
redirect_from:
  - /education/manage-coursework-with-github-classroom/online-ide-integrations
  - /education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-online-ide
  - /education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide/integrate-github-classroom-with-an-online-ide
---

## About integration with an IDE

{% data reusables.classroom.about-online-ides %}

After a student accepts an assignment with an IDE, the README file in the student's assignment repository will contain a button to open the assignment in the IDE. El alumno puede comenzar a trabajar de inmediato y no se requiere alguna configuración adicional.

## Supported IDEs

{% data variables.product.prodname_classroom %} supports the following IDEs. Puedes aprender más sobre la experiencia del alumno para cada IDE.

| IDE                       | Más información                                                                                                                                                                                  |
|:------------------------- |:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Microsoft MakeCode Arcade | "[Acerca de utilizar MakeCode Arcade con {% data variables.product.prodname_classroom %}](/education/manage-coursework-with-github-classroom/about-using-makecode-arcade-with-github-classroom)" |
| Visual Studio Code        | [{% data variables.product.prodname_classroom %} extension](http://aka.ms/classroom-vscode-ext) in the Visual Studio Marketplace                                                                 |

We know cloud IDE integrations are important to your classroom and are working to bring more options.

## Configuring an IDE for an assignment

You can choose the IDE you'd like to use for an assignment when you create an assignment. To learn how to create a new assignment that uses an IDE, see "[Create an individual assignment](/education/manage-coursework-with-github-classroom/create-an-individual-assignment)" or "[Create a group assignment](/education/manage-coursework-with-github-classroom/create-a-group-assignment)."

## Authorizing the OAuth app for an IDE

The first time you configure an assignment with an IDE, you must authorize the OAuth app for the IDE for your organization.

En todos tus repositorios, otorga acceso de **lectura** a la app para metadatos, administración y código, y acceso de **escritura** para administración y código. Para obtener más información, consulta la sección "[Autorizar las Apps de OAuth](/github/authenticating-to-github/authorizing-oauth-apps)".

## Leer más

- "[Acerca de los archivos README](/github/creating-cloning-and-archiving-repositories/about-readmes)"
