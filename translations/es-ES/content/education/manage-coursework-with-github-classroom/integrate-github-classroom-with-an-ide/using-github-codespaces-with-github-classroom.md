---
title: Uso de GitHub Codespaces con GitHub Classroom
shortTitle: Using Codespaces with GitHub Classroom
product: '{% data reusables.gated-features.codespaces-classroom-articles %}'
intro: "Puedes usar {% data variables.product.prodname_github_codespaces %} como editor preferido en tus asignaciones para dar a los alumnos acceso a un entorno de Visual\_Studio Code basado en explorador con una configuración con un solo clic."
versions:
  fpt: '*'
permissions: 'Organization owners who are admins for a classroom can enable {% data variables.product.prodname_github_codespaces %} for their organization and integrate {% data variables.product.prodname_github_codespaces %} as the supported editor for an assignment. {% data reusables.classroom.classroom-admins-link %}'
ms.openlocfilehash: 832ab470d13cc741bc4a71e77840c99da5ff3de6
ms.sourcegitcommit: a35d85531445980b5f04d3fc70180a29dad37f89
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 12/01/2022
ms.locfileid: '148189917'
---
## Acerca de {% data variables.product.prodname_github_codespaces %}

{% data variables.product.prodname_github_codespaces %} es un entorno de desarrollo instantáneo basado en la nube que usa un contenedor para proporcionar lenguajes comunes, herramientas y utilidades para el desarrollo. {% data variables.product.prodname_github_codespaces %} también es configurable, lo cual te permite crear un entorno de desarrollo personalizado que sea igual para todos los usuarios del proyecto. Para obtener más información, consulta "[Introducción a {% data variables.product.prodname_github_codespaces %}](/codespaces/overview)".

Una vez que {% data variables.product.prodname_github_codespaces %} esté habilitado en una organización o empresa, los usuarios podrán crear un codespace desde cualquier rama o confirmación de un repositorio de la organización o empresa y empezar a desarrollar mediante el uso de recursos de proceso basados en la nube. Puedes conectarte a un codespace desde el explorador o localmente mediante Visual Studio Code. 

{% data reusables.codespaces.links-to-get-started %}

El establecimiento de {% data variables.product.prodname_github_codespaces %} como editor preferido para una asignación de GitHub Classroom resulta beneficioso tanto para los alumnos como para los profesores. {% data variables.product.prodname_github_codespaces %} es una buena opción para los alumnos que usan dispositivos prestados o sin acceso a una configuración del IDE local, ya que cada codespace está basado en la nube y no requiere ninguna configuración local. Los alumnos pueden iniciar un codespace para un repositorio de tareas en Visual Studio Code directamente en el explorador y empezar a desarrollar inmediatamente sin necesidad de ninguna configuración adicional.  

En el caso de las tareas con entornos de configuración complejos, los profesores pueden personalizar la configuración del contenedor de desarrollo para los codespaces de un repositorio. Esto garantiza que, cuando un alumno cree un codespace, se abra automáticamente con el entorno de desarrollo que haya configurado el profesor. Para obtener más información sobre los contenedores de desarrollo, vea "[Introducción a los contenedores de desarrollo](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)".

{% note %}

**Nota**: Los codespaces individuales se eliminan automáticamente si se detienen y dejan sin usar durante un período prolongado. Para más información, consulta "[Configuración de la eliminación automática de los codespaces](/codespaces/customizing-your-codespace/configuring-automatic-deletion-of-your-codespaces)".

{% endnote %}

{% data reusables.education.student-codespaces-benefit %}

{% note %}

**Nota**: {% data reusables.education.note-on-student-codespaces-usage %} 

{% endnote %}

## Acerca de la ventaja {% data variables.product.prodname_codespaces %} Education para profesores verificados

La ventaja {% data variables.product.prodname_codespaces %} Education proporciona a los profesores verificados una asignación mensual gratuita de {% data variables.product.prodname_github_codespaces %} horas para su uso en {% data variables.product.prodname_classroom %}. Se estima que la asignación gratuita es suficiente para una clase de 50 alumnos con cinco tareas al mes, en una máquina de dos núcleos con un codespace almacenado por alumno.

{% data reusables.classroom.free-limited-codespaces-for-verified-teachers-beta-note %}

Si quieres convertirte en un profesor verificado, debes contar con aprobación para obtener una ventaja para educadores o profesores. Para obtener más información, consulta «[Solicitar acceso al {% data variables.product.prodname_global_campus %} como profesor](/education/explore-the-benefits-of-teaching-and-learning-with-github-education/github-global-campus-for-teachers/apply-to-github-global-campus-as-a-teacher)». 

Una vez que hayas confirmado que eres un profesor verificado, visita [{% data variables.product.prodname_global_campus %} para profesores](https://education.github.com/globalcampus/teacher) con el fin de actualizar la organización a GitHub Team. Para obtener más información, consulta "[Productos de GitHub](/get-started/learning-about-github/githubs-products#github-team)". 

Si cumples los requisitos para obtener la ventaja {% data variables.product.prodname_codespaces %} Education al habilitar {% data variables.product.prodname_github_codespaces %} en {% data variables.product.prodname_classroom %} para la organización, GitHub agrega automáticamente una directiva de codespace para restringir los tipos de máquina de todos los codespaces de la organización a dos máquinas principales. Esto ayuda a aprovechar al máximo el uso gratuito de{% data variables.product.prodname_github_codespaces %}. De todos modos, puedes cambiar o quitar estas directivas en la configuración de la organización. Para obtener más información, consulte "[Restringir el acceso a los tipos de máquina](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)".

Cuando la ventaja {% data variables.product.prodname_codespaces %} Education deje de estar en versión beta, si tu organización supera su asignación gratuita para el uso de {% data variables.product.prodname_github_codespaces %}, se te facturará por el uso adicional. Para más información, consulta "[Acerca de la facturación de {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces)".

## Habilitar los {% data variables.product.prodname_codespaces %} para tu organización

{% data variables.product.prodname_github_codespaces %} está disponible para su uso con {% data variables.product.prodname_classroom %} para las organizaciones que usan {% data variables.product.prodname_team %}. Si cumples los requisitos para obtener la ventaja {% data variables.product.prodname_codespaces %} Education, debes habilitar {% data variables.product.prodname_github_codespaces %} mediante {% data variables.product.prodname_classroom %}, en lugar de hacerlo directamente en la configuración de la organización. De lo contrario, se facturará a la organización directamente por todo el uso de {% data variables.product.prodname_github_codespaces %}.

### Habilitación de Codespaces para una organización al crear un aula
{% data reusables.classroom.sign-into-github-classroom %}
1. Haga clic en **New classroom**.
   
  ![Botón "Aula nueva"](/assets/images/help/classroom/click-new-classroom-button.png)

1. En la lista de organizaciones, da clic en aquella que te gustaría utilizar para tu aula. Las organizaciones que cumplan los requisitos de {% data variables.product.prodname_github_codespaces %} incluirán una nota en la que se indique. Opcionalmente, puedes crear una organizción nueva. Para más información, vea consulte "[Creación de una organización desde cero](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch)".

  ![Selección de una organización para el aula que cumple los requisitos de Codespaces](/assets/images/help/classroom/org-view-codespaces-eligibility.png)

1. En la página "Asigna un nombre al aula", en "{% data variables.product.prodname_codespaces %} en el aula", haz clic en **Habilitar**. Ten en cuenta que esto habilitará {% data variables.product.prodname_github_codespaces %} para todos los repositorios y usuarios de la organización.

  ![Habilitación de Codespaces para la organización en la página "Configuración de los aspectos básicos del aula"](/assets/images/help/classroom/setup-classroom-enable-codespaces-button.png)

1. Cuando esté todo listo para la creación del aula, haz clic en **Crear aula**.

### Habilitación de Codespaces para una organización mediante un aula existente

{% data reusables.classroom.sign-into-github-classroom %} {% data reusables.classroom.click-classroom-in-list %} {% data reusables.classroom.click-settings %}
1. En "{% data variables.product.prodname_github_codespaces %}", haz clic en **Habilitar**. Esto habilitará {% data variables.product.prodname_github_codespaces %} para todos los repositorios y usuarios de la organización. También se agrega una nueva directiva de Codespaces para restringir los tipos de máquina de todos los codespaces de la organización a dos máquinas principales. 
  
  ![Habilitación de Codespaces para la organización en la configuración del aula existente](/assets/images/help/classroom/classroom-settings-enable-codespaces-button.png)

También puedes usar los mismos métodos que antes para deshabilitar {% data variables.product.prodname_github_codespaces %} para la organización. Ten en cuenta que esto deshabilitará {% data variables.product.prodname_github_codespaces %} para todos los usuarios y repositorios de la organización. 

## Configuración de una tarea para usar {% data variables.product.prodname_codespaces %}
Si quieres que los alumnos tengan {% data variables.product.prodname_github_codespaces %} disponible para una asignación, puedes seleccionar {% data variables.product.prodname_github_codespaces %} como editor compatible para la asignación. Al crear una tarea, en la página "Agregar el código de inicio y elegir el IDE en línea opcional", en "Agregar un editor compatible", selecciona **{% data variables.product.prodname_github_codespaces %}** en el menú desplegable. 

![Selección de Codespaces como editor compatible para la tarea](/assets/images/help/classroom/select-supported-editor-including-codespaces.png)

Si usas un repositorio de plantillas para una tarea, puedes definir un contenedor de desarrollo en el repositorio para personalizar las herramientas y los entornos de ejecución disponibles para los alumnos cuando inician un codespace para trabajar en la tarea. Si no defines un contenedor de desarrollo, {% data variables.product.prodname_github_codespaces %} usará una configuración predeterminada, que contiene muchas de las herramientas comunes que los alumnos podrían necesitar para el desarrollo. Para obtener más información sobre cómo definir un contenedor de desarrollo, consulta "[Incorporación de una configuración de contenedor de desarrollo en el repositorio](/codespaces/setting-up-your-project-for-codespaces/setting-up-your-project-for-codespaces)".

## Inicio de una asignación mediante {% data variables.product.prodname_github_codespaces %}

Cuando un alumno abre una tarea, el archivo LÉAME del repositorio indica qué IDE recomienda el profesor para el trabajo.

![Captura de pantalla de la nota de Codespaces en el archivo LÉAME sobre el repositorio de la tarea de los alumnos](/assets/images/help/classroom/student-codespaces-readme-link.png)

Los alumnos pueden iniciar un codespace nuevo o existente haciendo clic en el botón **Abrir en GitHub Codespace** en el archivo LÉAME, o haciendo clic en el botón **{% octicon "code" aria-label="The code icon" %} Código** en la página principal del repositorio de asignaciones, luego seleccione la pestaña **Codespaces**. En la pestaña **Codespaces** puede seleccionar un codespace existente o crear uno nuevo. Para obtener más información, consulta "[Creación de un codespace para un repositorio](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository#creating-a-codespace-for-a-repository)".

![Inicio de un nuevo codespace en el repositorio de tareas](/assets/images/help/classroom/student-launch-new-codespace.png)

Los profesores pueden ver el codespace de cada alumno para una tarea en la página de información general de la tarea. Puedes hacer clic en el icono Codespaces a la derecha de la fila de cada alumno para iniciar el codespace. 

![Información general de tareas del profesor con los codespaces de los alumnos](/assets/images/help/classroom/teacher-assignment-view-with-codespaces.png)

Cuando te conectes a un codespace a través de un explorador, se habilitará automáticamente el guardado automático. Si quieres guardar los cambios en el repositorio, deberás confirmar los cambios e insertarlos en una rama remota. Si dejas que el codespace se ejecute sin interacción durante 30 minutos de forma predeterminada, el tiempo de espera se agotará y el codespace dejará de ejecutarse. Los datos se conservarán desde la última vez que hayas realizado un cambio. Para obtener más información sobre el ciclo de vida de un codespace, consulta "[Ciclo de vida de un codespace](/codespaces/getting-started/the-codespace-lifecycle)".
