---
title: Integrar a GitHub Classroom con un IDE
shortTitle: Integrar con un IDE
intro: 'Puedes preconfigurar un ambiente de desarrollo integrado (IDE) compatible para las tareas que crees en {% data variables.product.prodname_classroom %}.'
versions:
  fpt: '*'
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

| IDE                       | Más información                                                                                                                                                                                  |
|:------------------------- |:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Microsoft MakeCode Arcade | "[Acerca de utilizar MakeCode Arcade con {% data variables.product.prodname_classroom %}](/education/manage-coursework-with-github-classroom/about-using-makecode-arcade-with-github-classroom)" |
| Visual Studio Code        | La [extensión de {% data variables.product.prodname_classroom %}](http://aka.ms/classroom-vscode-ext) en el Mercado de Visual Studio                                                             |

Sabemos que las integraciones con IDE en la nube son importantes para tu aula y estamos trabajando para traerte más opciones.

## Configurar un IDE para una tarea

Puedes elegir el IDE que te gustaría utilizar para una tarea cuando la crees. Para aprender cómo crear una tarea nueva que utilice un IDE, consulta la sección "[Crear una tarea individual](/education/manage-coursework-with-github-classroom/create-an-individual-assignment)" o "[Crear una tarea de grupo](/education/manage-coursework-with-github-classroom/create-a-group-assignment)".

## Autorizar la App de OAuth para un IDE

La primera vez que configuras una tarea con un IDE, deberás autorizar la App de OAuth para este en tu organización.

En todos tus repositorios, otorga acceso de **lectura** a la app para metadatos, administración y código, y acceso de **escritura** para administración y código. Para obtener más información, consulta la sección "[Autorizar las Apps de OAuth](/github/authenticating-to-github/authorizing-oauth-apps)".

## Leer más

- "[Acerca de los archivos README](/github/creating-cloning-and-archiving-repositories/about-readmes)"
