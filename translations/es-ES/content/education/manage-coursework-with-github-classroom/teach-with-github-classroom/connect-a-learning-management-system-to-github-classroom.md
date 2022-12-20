---
title: Conectar un sistema de administración de aprendizaje a GitHub Classroom
intro: Puedes configurar un sistema de administración de aprendizaje (LMS) que cumpla con LTI para conectarte a {% data variables.product.prodname_classroom %} y que puedas importar un registro de alumno para tu aula.
versions:
  fpt: '*'
permissions: Organization owners who are admins for a classroom can connect learning management systems to {% data variables.product.prodname_classroom %}. {% data reusables.classroom.classroom-admins-link %}
redirect_from:
- /education/manage-coursework-with-github-classroom/configuring-a-learning-management-system-for-github-classroom
- /education/manage-coursework-with-github-classroom/connect-to-lms
- /education/manage-coursework-with-github-classroom/generate-lms-credentials
- /education/manage-coursework-with-github-classroom/setup-canvas
- /education/manage-coursework-with-github-classroom/setup-generic-lms
- /education/manage-coursework-with-github-classroom/setup-moodle
- /education/manage-coursework-with-github-classroom/connect-a-learning-management-system-to-github-classroom
shortTitle: Connect an LMS
ms.openlocfilehash: 4138d2e63860815cdba41e6f30209f0bf637104d
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 07/13/2022
ms.locfileid: "145112178"
---
## <a name="about-configuration-of-your-lms"></a>Acerca de la configuración de tu LMS

Puedes conectar un sistema de administración de aprendizaje (LMS) a {% data variables.product.prodname_classroom %} y {% data variables.product.prodname_classroom %} puede importar los identificadores de un registro de alumno desde éste. Para conectar tu LMS a {% data variables.product.prodname_classroom %}, debes ingresar sus credenciales de configuración en {% data variables.product.prodname_classroom %}.

## <a name="prerequisites"></a>Prerrequisitos

Para configurar un LMS para que se conecte con {% data variables.product.prodname_classroom %}, primero debes crear un aula. Para más información, vea "[Administración de las aulas](/education/manage-coursework-with-github-classroom/manage-classrooms#creating-a-classroom)".

## <a name="supported-lmses"></a>LMS compatibles

{% data variables.product.prodname_classroom %} es compatible conla importación de datos de registros de alumnos desde los LMS que implementen estándares de Interoperabilidad de Herramientas de Aprendizaje (LTI).

- LTI versión 1.0 o 1.1
- Aprovisionamiento de Roles y Nombres de LTI 1.X

Utilizar LTI ayuda a mantener tu información segura y protegida. LTI es un protocolo estándar de la industria y GitHub Classroom lo utiliza con una certificación del Consorcio de Aprendizaje Global para el Sistema de Gestión Instruccional (IMS). Para más información, vea [Interoperabilidad de las herramientas de aprendizaje](https://www.imsglobal.org/activity/learning-tools-interoperability) y [Acerca de IMS Global Learning Consortium](http://www.imsglobal.org/aboutims.html) en el sitio web de IMS Global Learning Consortium.

{% data variables.product.company_short %} ha probado la importación de datos de registro de alumnos desde los siguientes LMS hacia {% data variables.product.prodname_classroom %}.

- Lienzo
- Google Classroom
- Moodle
- Sakai

Actualmente, {% data variables.product.prodname_classroom %} no admite la importación de datos de registro de alumnos desde Blackboard o Brightspace.

## <a name="generating-configuration-credentials-for-your-classroom"></a>Generar credenciales de configuración para tu aula

{% data reusables.classroom.sign-into-github-classroom %} {% data reusables.classroom.click-classroom-in-list %} {% data reusables.classroom.click-students %}
1. Si tu aula ya tiene un registro de alumnos, puedes ya sea actualizarlo o borrarlo y crear uno nuevo.
    - Para más información sobre la eliminación y creación de un registro de alumnos, vea "[Eliminación de un registro de alumnos para el aula](/education/manage-coursework-with-github-classroom/manage-classrooms#deleting-a-roster-for-a-classroom)" y "[Creación de un registro de alumnos para el aula](/education/manage-coursework-with-github-classroom/manage-classrooms#creating-a-roster-for-your-classroom)".
    - Para más información sobre cómo actualizar un registro de alumnos, vea "[Adición de alumnos al registro de alumnos para el aula](/education/manage-coursework-with-github-classroom/manage-classrooms#adding-students-to-the-roster-for-your-classroom)".
1. En la lista de LMS, da clic en el tuyo. Si no se admite LMS, haga clic en **Otro LMS**.
  ![Lista de LMS](/assets/images/help/classroom/classroom-settings-click-lms.png)
1. Obtenga información sobre cómo conectar LMS y, después, haga clic en **Conectar a _LMS_**.
1. Copia la "Llave de consumidor", "Secreto compartido", y "URL de lanzamiento" para la conexión al aula.
  ![Copia de credenciales](/assets/images/help/classroom/classroom-copy-credentials.png)

## <a name="configuring-a-generic-lms"></a>Configurar un LMS genérico

Debes configurar los ajustes de privacidad para que tu LMS permita que las herramientas externas reciban información del registro de alumnos.

1. Navega a tu LMS.
1. Configura una herramienta externa.
1. Proporciona las credenciales de configuración que generaste en {% data variables.product.prodname_classroom %}.
    - Llave de consumidor
    - Secreto compartido
    - URL de lanzamiento (a menudo se le llama "URL de herramienta" o similar)

## <a name="configuring-canvas"></a>Configurar Canvas

Puedes configurar {% data variables.product.prodname_classroom %} como una app externa para que Canvas importe los datos de la lista de alumnos a tu aula. Para más información sobre Canvas, vea el [sitio web de Canvas](https://www.instructure.com/canvas/).

1. Inicie sesión en [Canvas](https://www.instructure.com/canvas/#login).
1. Selecciona el curso de Canvas que quieras integrar con {% data variables.product.prodname_classroom %}.
1. En la barra lateral izquierda, haga clic en **Settings** (Configuración).
1. Haga clic en la pestaña **Aplicaciones**.
1. Haga clic en **Ver configuraciones de aplicaciones**.
1. Haga clic en **+Aplicación**.
1. Seleccione el menú desplegable **Tipo de configuración** y haga clic en **Por URL**.
1. Pega las credenciales deconfiguración desde {% data variables.product.prodname_classroom %}. Para más información, vea "[Generación de credenciales de configuración para el aula](#generating-configuration-credentials-for-your-classroom)".

    | Campo en la configuración de la app de Canvas | Valor o ajuste |
    | :- | :- |
    | **Clave de usuario** | Llave de consumidor de {% data variables.product.prodname_classroom %} |
    | **Secreto compartido** | Secreto compartido de {% data variables.product.prodname_classroom %} |
    | **Permitir que esta herramienta acceda a los nombres de IMS y al servicio de aprovisionamiento de roles** | habilitado |
    | **URL de configuración** | URL de lanzamiento de {% data variables.product.prodname_classroom %} |

    {% note %}

    **Nota**: Si en Canvas no ve una casilla con la etiqueta "Allow this tool to access the IMS Names and Role Provisioning Service" (Permitir que esta herramienta acceda al servicio de aprovisionamiento de roles y nombres de IMS), el administrador de Canvas debe ponerse en contacto con el servicio de asistencia de Canvas para habilitar la configuración de servicios de pertenencia para la cuenta de Canvas. Si no se habilita esta característica, no podrás sincronizar el registro de alumnos desde Canvas. Para más información, vea [Cómo ponerse en contacto con el soporte técnico de Canvas](https://community.canvaslms.com/t5/Canvas-Basics-Guide/How-do-I-contact-Canvas-Support/ta-p/389767) en el sitio web de Canvas.

    {% endnote %}

1. Haga clic en **Enviar**.
1. En la barra lateral de la izquierda, haga clic en **Inicio**.
1. Para solicitar a Canvas que envíe un correo electrónico de confirmación, en la barra lateral de la izquierda, haga clic en **Aula de GitHub**. Sigue las instrucciones en el correo electrónico para concluir la vinculación de {% data variables.product.prodname_classroom %}.

## <a name="configuring-moodle"></a>Configurar Moodle

Puedes configurar a {% data variables.product.prodname_classroom %} como una actividad para Moodle para importar datos del registro de alumnos a tu aula. Para más información sobre Moodle, vea el [sitio web de Moodle](https://moodle.org).

Debes utilizar Moodle versión 3.0 o superior.

1. Inicie sesión en [Moodle](https://moodle.org/login/).
1. Selecciona el curso de Moodle que quieres integrar con {% data variables.product.prodname_classroom %}.
1. Haga clic en **Activar edición**.
1. Para que {% data variables.product.prodname_classroom %} esté disponible en Moodle, haga clic en **Agregar una actividad o un recurso**.
1. Elija **Herramienta externa** y haga clic en **Agregar**.
1. En el campo de "Nombre de actividad", teclea "GitHub Classroom".
1. En el campo **Herramienta preconfigurada**, a la derecha del menú desplegable, haga clic en **+** .
1. Debajo de "Configuración de herramienta externa", pega las credenciales de configuración de {% data variables.product.prodname_classroom %}. Para más información, vea "[Generación de credenciales de configuración para el aula](#generating-configuration-credentials-for-your-classroom)".

    | Campo en la configuración de la app de Moodle | Valor o ajuste |
    | :- | :- |
    | **Nombre de la herramienta** | {% data variables.product.prodname_classroom %} - _NOMBRE DEL AULA_<br/><br/>**Nota**: Puede usar cualquier nombre, pero se recomienda este valor para mayor claridad. |
    | **URL de la herramienta** | URL de lanzamiento de {% data variables.product.prodname_classroom %} |
    | **Versión de LTI** | LTI 1.0/1.1 |
    | **Contenedor de inicio predeterminado** | Nueva ventana |
    | **Clave de consumidor** | Llave de consumidor de {% data variables.product.prodname_classroom %} |
    | **Secreto compartido** | Secreto compartido de {% data variables.product.prodname_classroom %} |

1. Desplácese hasta **Servicios** y haga clic.
1. A la derecha de "Aprovisionamiento de roles y nombres LTI de IMS", seleccione el menú desplegable y haga clic en **Utilizar este servicio para recuperar la información de los miembros de acuerdo con la configuración de seguridad**.
1. Desplácese hasta **Privacidad** y haga clic.
1. A la derecha de **Compartir nombre del iniciador con la herramienta** y **Compartir correo electrónico del iniciador con la herramienta**, seleccione los menús desplegables para hacer clic en **Siempre**.
1. En la parte inferior de la página, haga clic en **Save changes**.
1. En el menú **Preconfigurar herramienta**, haga clic en **Aula de GitHub - _NOMBRE DEL AULA_**.
1. En "Configuración común del módulo", a la derecha de "Disponibilidad", seleccione el menú desplegable y haga clic en **Ocultar para los alumnos**.
1. En la parte inferior de la página, haga clic en **Guardar y volver al curso**.
1. Navega a donde sea que elijas mostrar tu {% data variables.product.prodname_classroom %} y da dlic en la actividad {% data variables.product.prodname_classroom %}.

## <a name="importing-a-roster-from-your-lms"></a>Importar un registro de alumnos desde tu LMS

Para más información sobre cómo importar el registro de LMS a {% data variables.product.prodname_classroom %}, vea "[Administración de las aulas](/education/manage-coursework-with-github-classroom/manage-classrooms#creating-a-roster-for-your-classroom)".

## <a name="disconnecting-your-lms"></a>Desconectar tu LMS

{% data reusables.classroom.sign-into-github-classroom %} {% data reusables.classroom.click-classroom-in-list %} {% data reusables.classroom.click-settings %}
1. En "Conectar a un sistema de administración de aprendizaje (LMS)", haga clic en **Configuración de conexión**.
  ![Vínculo "Configuración de conexión" en los valores del aula](/assets/images/help/classroom/classroom-settings-click-connection-settings.png)
1. En "Eliminar la conexión al sistema de administración de aprendizaje", haga clic en **Desconectarse del sistema de administración de aprendizaje**.
  ![Botón "Desconectarse del sistema de administración de aprendizaje" en la configuración de conexión del aula](/assets/images/help/classroom/classroom-settings-click-disconnect-from-your-lms-button.png)
