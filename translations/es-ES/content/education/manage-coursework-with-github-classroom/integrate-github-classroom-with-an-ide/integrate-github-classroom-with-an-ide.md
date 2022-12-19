---
title: Integrar a GitHub Classroom con un IDE
shortTitle: Integrate with an IDE
intro: 'Puedes preconfigurar un ambiente de desarrollo integrado (IDE) compatible para las tareas que crees en {% data variables.product.prodname_classroom %}.'
versions:
  fpt: '*'
permissions: 'Organization owners who are admins for a classroom can integrate {% data variables.product.prodname_classroom %} with an IDE. {% data reusables.classroom.classroom-admins-link %}'
redirect_from:
  - /education/manage-coursework-with-github-classroom/online-ide-integrations
  - /education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-online-ide
  - /education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide/integrate-github-classroom-with-an-online-ide
ms.openlocfilehash: 25c4c1fba1cb0f082049a461e03bfdf009e208c9
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147110510'
---
## Acerca de la integración con un IDE

{% data reusables.classroom.about-online-ides %} 

Después de que un alumno acepta una tarea con un IDE, el archivo README en su repositorio de tareas contendrá un botón para abrir dicha tarea en el IDE. El alumno puede comenzar a trabajar de inmediato y no se requiere alguna configuración adicional.

## IDE compatibles

{% data variables.product.prodname_classroom %} es compatible con los siguientes IDE. Puedes aprender más sobre la experiencia del alumno para cada IDE.

| IDE | Más información |
| :- | :- |
| {% data variables.product.prodname_github_codespaces %} | "[Uso de {% data variables.product.prodname_github_codespaces %} con {% data variables.product.prodname_classroom %}](/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide/using-github-codespaces-with-github-classroom)" |
| Microsoft MakeCode Arcade | "[Acerca del uso de MakeCode Arcade con {% data variables.product.prodname_classroom %}](/education/manage-coursework-with-github-classroom/about-using-makecode-arcade-with-github-classroom)" |
| {% data variables.product.prodname_vscode %} | [Extensión {% data variables.product.prodname_classroom %}](http://aka.ms/classroom-vscode-ext) en Visual Studio Marketplace |

Sabemos que las integraciones con IDE en la nube son importantes para tu aula y estamos trabajando para traerte más opciones. 

## Configurar un IDE para una tarea

Puedes elegir el IDE que te gustaría utilizar para una tarea cuando la crees. Para obtener información sobre cómo crear una nueva asignación que use un IDE, consulte "[Creación de una asignación individual](/education/manage-coursework-with-github-classroom/create-an-individual-assignment)" o "[Creación de una asignación de grupo](/education/manage-coursework-with-github-classroom/create-a-group-assignment)".

## Configuración de una asignación en un nuevo IDE

La primera vez que configures una asignación mediante un IDE diferente, debes asegurarte de que está configurada correctamente.

A menos que uses {% data variables.product.prodname_codespaces %}, debes autorizar la aplicación OAuth para el IDE de tu organización. Para todos los repositorios, conceda a la aplicación acceso de **lectura** a metadatos, administración y código y de **escritura** a la administración y el código. Para obtener más información, consulte "[Autorizar aplicaciones OAuth](/github/authenticating-to-github/authorizing-oauth-apps)".

{% data variables.product.prodname_codespaces %} no requiere una aplicación de OAuth, pero debes habilitar {% data variables.product.prodname_codespaces %} para que la organización pueda configurar una asignación con {% data variables.product.prodname_codespaces %}. Para obtener más información, consulta "[Uso de {% data variables.product.prodname_codespaces %} con {% data variables.product.prodname_classroom %}](/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide/using-github-codespaces-with-github-classroom#enabling-codespaces-for-your-organization)."

## Información adicional

- "[Acerca de los archivos Léame](/github/creating-cloning-and-archiving-repositories/about-readmes)"
