---
title: Inicio rápido para GitHub Educators
intro: 'En cerca de 15 minutos, los maestros pueden iniciar con descuentos, capacitación y herramientas para {% data variables.product.company_short %}, posteriormente, pueden crear un aula para los alumnos en un curso de desarrollo de software utilizando {% data variables.product.prodname_classroom %}.'
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
shortTitle: Quickstart
ms.openlocfilehash: 8ab34de6a7e2583fc2447fc01729ced7044b3fa7
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147573888'
---
## Introducción

Los docentes que enseñan un curso de desarrollo de software pueden utilizar descuentos, alianzas, capacitación y herramientas de {% data variables.product.prodname_education %} para enseñar de forma efectiva las habilidades relevantes a los alumnos.

En esta guía, iniciarás con {% data variables.product.product_name %}, regístrate para las cuentas y servicios con descuento a través de {% data variables.product.prodname_education %} y crea un espacio para tu curso y tareas en {% data variables.product.prodname_classroom %}.

{% tip %}

**Sugerencia**: Si eres alumno y quieres obtener un descuento académico, consulta «[Solicitar acceso al {% data variables.product.prodname_global_campus %} como alumno](/education/explore-the-benefits-of-teaching-and-learning-with-github-education/github-global-campus-for-students/apply-to-github-global-campus-as-a-student)».

{% endtip %}

## Crear cuentas en {% data variables.product.product_name %}

Primero, necesitas crear una cuenta personal gratuita en {% data variables.product.product_name %}.

{% data reusables.accounts.create-account %}
1. Sigue las indicaciones para crear tu cuenta personal gratuita.

Después de crear tu cuenta personal, crea una cuenta de organización gratuita. Utilizarás esta cuenta de organización para crear y administrar las aulas {% data variables.product.prodname_classroom %}.

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.organizations %} {% data reusables.organizations.new-organization %}
4. Sigue las indicaciones para crear una organización gratuita.

Para obtener más información, consulte "[Tipos de cuentas de {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/types-of-github-accounts)".

## Solicitar ventajas para profesores

A continuación, regístrate para obtener ventajas y recursos de {% data variables.product.company_short %} para profesores solicitando acceso al {% data variables.product.prodname_global_campus %}, un portal que te permite acceder a todas las ventajas educativas en un solo lugar.  {% data reusables.education.educator-requirements %}

{% tip %}

**Sugerencia**: Además de los descuentos adicionales, {% data variables.product.company_short %} ofrece alianzas con instituciones educativas mediante el {% data variables.product.prodname_campus_program %}. Para obtener más información, consulte el sitio web de [{% data variables.product.prodname_campus_program %}](https://education.github.com/schools).

{% endtip %}

{% data reusables.education.benefits-page %} {% data reusables.education.click-get-teacher-benefits %} {% data reusables.education.select-email-address %} {% data reusables.education.upload-proof-status %} {% data reusables.education.school-name %} {% data reusables.education.plan-to-use-github %} {% data reusables.education.submit-application %}

Una vez que se seas un profesor verificado del {% data variables.product.prodname_global_campus %}, puedes acceder al {% data variables.product.prodname_global_campus %} en cualquier momento yendo al [sitio web de {% data variables.product.prodname_education %}](https://education.github.com).

## Configura {% data variables.product.prodname_classroom %}

Con tu cuenta personal y la cuenta de organización, ya puedes empezar a trabajar con {% data variables.product.prodname_classroom %}. {% data variables.product.prodname_classroom %} es de uso gratuito. Puedes rastrear y administrar las tareas, calificar los trabajos automáticamente y proporcionar retroalimentación a tus alumnos.

{% data reusables.classroom.sign-into-github-classroom %}
1. Para autorizar a {% data variables.product.prodname_classroom %} a acceder a tu cuenta personal en {% data variables.product.prodname_dotcom %}, revisa la información y haz clic en **Authorize {% data variables.product.prodname_classroom %}** .
  ![Botón "Autorizar {% data variables.product.prodname_classroom %}" para una cuenta personal](/assets/images/help/classroom/setup-click-authorize-github-classroom.png)
1. Revisa la información. Para autorizar a {% data variables.product.prodname_classroom %} para que acceda a su cuenta de organización en {% data variables.product.prodname_dotcom %}, haga clic en **Grant**.
  ![Botón "Grant" de una organización](/assets/images/help/classroom/setup-click-grant.png)
  
  {% tip %}
  
  **Sugerencia**: Si ve el botón **Request** en lugar del botón **Grant**, significa que es miembro de la organización, no propietario. Un propietario deberá aprobar tu solicitud para {% data variables.product.prodname_classroom %}. Debes ser un propietario de la organización para crear y administrar las aulas y las tareas en {% data variables.product.prodname_classroom %}. Para obtener más información, consulte "[Autorización de aplicaciones de OAuth](/github/authenticating-to-github/authorizing-oauth-apps#oauth-apps-and-organizations)".
  
  {% endtip %}
  
1. Haga clic en **Authorize github**.
  ![Clic en el botón "Authorize" de una organización](/assets/images/help/classroom/setup-click-authorize-github.png)

## Crea tu aula

{% data reusables.classroom.about-classrooms %}

{% data reusables.classroom.sign-into-github-classroom %}
1. Haga clic en **Create your first classroom** o **New classroom**.
{% data reusables.classroom.guide-create-new-classroom %}

## Pasos siguientes

¡Creaste un aula y estás listo para enriquecer tu curso con {% data variables.product.product_name %} y {% data variables.product.prodname_classroom %}!  🎉

- Mira algunos videos acerca de {% data variables.product.prodname_classroom %}. Para obtener más información, consulte "[Aspectos básicos de la configuración de {% data variables.product.prodname_classroom %}](/education/manage-coursework-with-github-classroom/basics-of-setting-up-github-classroom)".
- Administra tus aulas y administradores de aula y crea un registro de alumnos para aquellos que conforman tu aula. Para obtener más información, consulte "[Administración de las aulas](/education/manage-coursework-with-github-classroom/manage-classrooms)".
- Utiliza la tarea de inicio de Git y {% data variables.product.company_short %} para proporcionar a los alumnos un resumen de lo básico de Git y {% data variables.product.product_name %}. Para obtener más información, consulte "[Uso de la asignación de inicio de Git y {% data variables.product.company_short %}](/education/manage-coursework-with-github-classroom/use-the-git-and-github-starter-assignment)".
- Crea una tarea para alumnos individuales o equipos. {% data reusables.classroom.for-more-information-about-assignment-creation %}
- Escribe e implementa pruebas automatizadas para proporcionar retroalimentación inmediata a los alumnos directamente en los repositorios de tareas. Para obtener más información, consulte "[Uso de calificaciones automáticas](/education/manage-coursework-with-github-classroom/use-autograding)".
- Participa en {% data variables.product.prodname_education_community_with_url %}.
