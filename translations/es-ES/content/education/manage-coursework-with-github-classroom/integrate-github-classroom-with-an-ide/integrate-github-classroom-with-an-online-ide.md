---
title: Integra a GitHub Classroom con un IDE en línea
shortTitle: Integrar con un IDE en línea
intro: 'Puedes preconfigurar un ambiente de desarrollo integrado (IDE) en línea para las tareas que crees en {% data variables.product.prodname_classroom %}.'
versions:
  free-pro-team: '*'
redirect_from:
  - /education/manage-coursework-with-github-classroom/online-ide-integrations
  - /education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-online-ide
---

### Acerca de la integración con un IDE en línea

{% data reusables.classroom.about-online-ides %}

Después de que un alumno acepta una tarea con un IDE en línea, el archivo README en su repositorio de tareas contendrá un botón para abrir dicha tarea en el IDE. El alumno puede comenzar a trabajar de inmediato y no se requiere alguna configuración adicional.

![Botón para un IDE en línea en el README.md de un repositorio de tarea](/assets/images/help/classroom/assignment-repository-ide-button-in-readme.png)

### IDE en línea compatibles

{% data variables.product.prodname_classroom %} es compatible con los siguientes IDE en línea. Puedes aprender más sobre la experiencia del alumno para cada IDE.

| IDE                       | Más información                                                                                                                                                                                  |
|:------------------------- |:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Microsoft MakeCode Arcade | "[Acerca de utilizar MakeCode Arcade con {% data variables.product.prodname_classroom %}](/education/manage-coursework-with-github-classroom/about-using-makecode-arcade-with-github-classroom)" |
| Repl.it                   | "[Acerca de utilizar Repl.it con GitHub Classroom](/education/manage-coursework-with-github-classroom/about-using-replit-with-github-classroom)"                                                 |

### Configurr un IDE en línea para una tarea

Puedes elegir el IDE en línea que te gustaría utilizar para una tarea cuando la crees. Para aprender cómo crear una tarea nueva que utilice un IDE en línea, consulta la sección "[Crear una tarea individual](/education/manage-coursework-with-github-classroom/create-an-individual-assignment)" o "[Crear una tarea grupal](/education/manage-coursework-with-github-classroom/create-a-group-assignment)".

### Autorizar la app de OAuth para un IDE en línea

La primera vez que configuras una tarea con un IDE en elínea, debes autorizar la app de OAuth para el IDE en línea de tu organización.

![botón de "Otorgar acceso" en la ventana emergente para autorizar una app de OAuth en el IDE en línea](/assets/images/help/classroom/assignment-ide-go-grant-access-button.png)

En todos tus repositorios, otorga acceso de **lectura** a la app para metadatos, administración y código, y acceso de **escritura** para administración y código. Para obtener más información, consulta la sección "[Autorizar las Apps de OAuth](/github/authenticating-to-github/authorizing-oauth-apps)".

### Leer más

- "[Acerca de los archivos README](/github/creating-cloning-and-archiving-repositories/about-readmes)"
