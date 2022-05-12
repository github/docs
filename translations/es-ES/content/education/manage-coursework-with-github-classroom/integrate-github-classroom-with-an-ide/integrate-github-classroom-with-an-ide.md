---
title: Integrar a GitHub Classroom con un IDE
shortTitle: Integrar con un IDE
intro: 'Puedes preconfigurar un ambiente de desarrollo integrado (IDE) compatible para las tareas que crees en {% data variables.product.prodname_classroom %}.'
versions:
  fpt: '*'
permissions: 'Organization owners who are admins for a classroom can integrate {% data variables.product.prodname_classroom %} with an IDE. {% data reusables.classroom.classroom-admins-link %}'
redirect_from:
  - /education/manage-coursework-with-github-classroom/online-ide-integrations
  - /education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-online-ide
  - /education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide/integrate-github-classroom-with-an-online-ide
---

## Acerca de la integración con un IDE

{% data reusables.classroom.about-online-ides %}

Después de que un alumno acepta una tarea con un IDE, el archivo README en su repositorio de tareas contendrá un botón para abrir dicha tarea en el IDE. El alumno puede comenzar a trabajar de inmediato y no se requiere alguna configuración adicional.

## IDE compatibles

{% data variables.product.prodname_classroom %} es compatible con los siguientes IDE. Puedes aprender más sobre la experiencia del alumno para cada IDE.

| IDE                                                       | Más información                                                                                                                                                                                                                                                   |
|:--------------------------------------------------------- |:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {% data variables.product.prodname_github_codespaces %} | "[Using {% data variables.product.prodname_github_codespaces %} with {% data variables.product.prodname_classroom %}](/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide/using-github-codespaces-with-github-classroom)" |
| Microsoft MakeCode Arcade                                 | "[Acerca de utilizar MakeCode Arcade con {% data variables.product.prodname_classroom %}](/education/manage-coursework-with-github-classroom/about-using-makecode-arcade-with-github-classroom)"                                                                  |
| Visual Studio Code                                        | La [extensión de {% data variables.product.prodname_classroom %}](http://aka.ms/classroom-vscode-ext) en el Mercado de Visual Studio                                                                                                                              |

Sabemos que las integraciones con IDE en la nube son importantes para tu aula y estamos trabajando para traerte más opciones.

## Configurar un IDE para una tarea

Puedes elegir el IDE que te gustaría utilizar para una tarea cuando la crees. Para aprender cómo crear una tarea nueva que utilice un IDE, consulta la sección "[Crear una tarea individual](/education/manage-coursework-with-github-classroom/create-an-individual-assignment)" o "[Crear una tarea de grupo](/education/manage-coursework-with-github-classroom/create-a-group-assignment)".

## Setting up an assignment in a new IDE

The first time you configure an assignment using a different IDE, you must ensure that it is set up correctly.

Unless you use {% data variables.product.prodname_github_codespaces %}, you must authorize the OAuth app for the IDE for your organization. En todos tus repositorios, otorga acceso de **lectura** a la app para metadatos, administración y código, y acceso de **escritura** para administración y código. Para obtener más información, consulta la sección "[Autorizar las Apps de OAuth](/github/authenticating-to-github/authorizing-oauth-apps)".

{% data variables.product.prodname_github_codespaces %} does not require an OAuth app, but you need to enable {% data variables.product.prodname_github_codespaces %} for your organization to be able to configure an assignment with {% data variables.product.prodname_codespaces %}. Para obtener más información, consulta "[Usar {% data variables.product.prodname_github_codespaces %} con {% data variables.product.prodname_classroom %}](/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide/using-github-codespaces-with-github-classroom#enabling-codespaces-for-your-organization)".

## Leer más

- "[Acerca de los archivos README](/github/creating-cloning-and-archiving-repositories/about-readmes)"
