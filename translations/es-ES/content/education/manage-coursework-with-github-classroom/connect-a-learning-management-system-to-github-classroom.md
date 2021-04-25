---
title: Conectar un sistema de administración de aprendizaje a GitHub Classroom
intro: Puedes configurar un sistema de administración de aprendizaje (LMS) que cumpla con LTI para conectarte a {% data variables.product.prodname_classroom %} y que puedas importar un registro de alumno para tu aula.
versions:
  free-pro-team: '*'
redirect_from:
  - /education/manage-coursework-with-github-classroom/configuring-a-learning-management-system-for-github-classroom
  - /education/manage-coursework-with-github-classroom/connect-to-lms
  - /education/manage-coursework-with-github-classroom/generate-lms-credentials
  - /education/manage-coursework-with-github-classroom/setup-canvas
  - /education/manage-coursework-with-github-classroom/setup-generic-lms
  - /education/manage-coursework-with-github-classroom/setup-moodle
---

### Acerca de la configuración de tu LMS

Puedes conectar un sistema de administración de aprendizaje (LMS) a {% data variables.product.prodname_classroom %} y {% data variables.product.prodname_classroom %} puede importar los identificadores de un registro de alumno desde éste. Para conectar tu LMS a {% data variables.product.prodname_classroom %}, debes ingresar sus credenciales de configuración en éste.

### Prerrequisitos

Para configurar un LMS para que se conecte con {% data variables.product.prodname_classroom %}, primero debes crear un aula. Para obtener más información, consulta la sección "[Administrar las aulas](/education/manage-coursework-with-github-classroom/manage-classrooms#creating-a-classroom)".

### LMS compatibles

{% data variables.product.prodname_classroom %} es compatible conla importación de datos de registros de alumnos desde los LMS que implementen estándares de Interoperabilidad de Herramientas de Aprendizaje (LTI).

- LTI versión 1.0 o 1.1
- Aprovisionamiento de Roles y Nombres de LTI 1.X

Utilizar LTI ayuda a mantener tu información segura y protegida. LTI es un protocolo estándar de la industria y GitHub Classroom lo utiliza con una certificación del Consorcio de Aprendizaje Global para el Sistema de Gestión Instruccional (IMS). Para obtener más información, consulta la [interoperabilidad de herramientas para el aprendizaje](https://www.imsglobal.org/activity/learning-tools-interoperability) y la sección [Acerca del Consorcio de Aprendizaje Global del IMS](http://www.imsglobal.org/aboutims.html) en el sitio web del Consorcio de Aprendizaje Global del IMS.

{% data variables.product.company_short %} ha probado la importación de datos de registro de alumnos desde los siguientes LMS hacia {% data variables.product.prodname_classroom %}.

- Canvas
- Google Classroom
- Moodle
- Sakai

Actualmente, {% data variables.product.prodname_classroom %} no es compatible para importar datos de registro de alumnos desde Blackboard o Brightspace.

### Generar credenciales de configuración para tu aula

{% data reusables.classroom.sign-into-github-classroom %}
{% data reusables.classroom.click-classroom-in-list %}
{% data reusables.classroom.click-students %}
1. Si tu aula ya tiene un registro de alumnos, puedes ya sea actualizarlo o borrarlo y crear uno nuevo.
    - Para obtener más información sobre borrar y crear un registro de alumnos, consulta las secciones "[Borrar un registro de alumnos para un aula](/education/manage-coursework-with-github-classroom/manage-classrooms#deleting-a-roster-for-a-classroom)" y "[Crear un registro de alumnos para tu aula](/education/manage-coursework-with-github-classroom/manage-classrooms#creating-a-roster-for-your-classroom)".
    - Para obtener más información acerca de cómo actualizar un registro de alumnos, consulta la sección "[Agregar alumnos al registro de alumnos de tu aula](/education/manage-coursework-with-github-classroom/manage-classrooms#adding-students-to-the-roster-for-your-classroom)".
1. En la lista de LMS, da clic en el tuyo. Si tu LMS no es compatible, da clic en **Otro LMS**. ![Lista de LMS](/assets/images/help/classroom/classroom-settings-click-lms.png)
1. Lee sobre cómo conectar tu LMS y luego da clic en **Conectar al _LMS_**.
1. Copia la "Llave de consumidor", "Secreto compartido", y "URL de lanzamiento" para la conexión al aula. ![Copiar credenciales](/assets/images/help/classroom/classroom-copy-credentials.png)

### Configurar un LMS genérico

Debes configurar los ajustes de privacidad para que tu LMS permita que las herramientas externas reciban información del registro de alumnos.

1. Navega a tu LMS.
1. Configura una herramienta externa.
1. Proporciona las credenciales de configuración que generaste en {% data variables.product.prodname_classroom %}.
    - Llave de consumidor
    - Secreto compartido
    - URL de lanzamiento (a menudo se le llama "URL de herramienta" o similar)

### Configurar Canvas

Puedes configurar {% data variables.product.prodname_classroom %} como una app externa para que Canvas importe los datos de la lista de alumnos a tu aula. Para obtener más información acerca de Canvas, consulta el [Sitio web de Canvas](https://www.instructure.com/canvas/).

1. Ingresa en [Canvas](https://www.instructure.com/canvas/#login).
1. Selecciona el curso de Canvas que quieras integrar con {% data variables.product.prodname_classroom %}.
1. En la barra lateral izquierda, da clic en **Configuración**.
1. Da clic en la pestaña **Apps**.
1. Da clic en **Ver configuraciones de la app**.
1. Da clic en **+App**.
1. Selecciona el menú desplegable de **Tipo de configuración** y daclic en **Por URL**.
1. Pega las credenciales deconfiguración desde {% data variables.product.prodname_classroom %}. Para obtener más información, consulta la sección "[Generar credenciales de configuración para tu aula](#generating-configuration-credentials-for-your-classroom)".

    | Campo en la configuración de la app de Canvas                                                             | Valor o ajuste                                                         |
    |:--------------------------------------------------------------------------------------------------------- |:---------------------------------------------------------------------- |
    | **Llave de consumidor**                                                                                   | Llave de consumidor de {% data variables.product.prodname_classroom %}
    | **Secreto compartido**                                                                                    | Secreto compartido de {% data variables.product.prodname_classroom %}
    | **Permitir que esta herramienta acceda a los nombres de IMS y al servicio de aprovisionamiento de roles** | Habilitado                                                             |
    | **URL de configuración**                                                                                  | URL de lanzamiento de {% data variables.product.prodname_classroom %}

    {% note %}

    **Nota**: Si no ves una casilla de verificación en Canvas que lleve la etiqueta "Permitir que esta herramienta acceda a los nombres de IMS y al servicio de aprovisionamiento de roles", entonces tu administrador de Canvas debe contactar a soporte de Canvas para habilitar la configuración de servicios de membrecía para tu cuenta de Canvas. Si no se habilita esta característica, no podrás sincronizar el registro de alumnos desde Canvas. Para obtener más información, consulta la sección [¿Cómo contacto al soporte de Canvas?](https://community.canvaslms.com/t5/Canvas-Basics-Guide/How-do-I-contact-Canvas-Support/ta-p/389767) en el sitio web de Canvas.

    {% endnote %}

1. Haz clic en **Submit** (enviar).
1. En la barra lateral izquierda, da clic en **Principal**.
1. Para solicitar a Canvas que envíe un correo electrónico de confirmación, en la barra lateral izquierda, da clic en **GitHub Classroom**. Sigue las instrucciones en el correo electrónico para concluir la vinculación de {% data variables.product.prodname_classroom %}.

### Configurar Moodle

Puedes configurar a {% data variables.product.prodname_classroom %} como una actividad para Moodle para importar datos del registro de alumnos a tu aula. Para obtener más información acerca de Moodle, consulta el [Sitio web de Moodle](https://moodle.org).

Debes utilizar Moodle versión 3.0 o superior.

1. Inicia sesión en [Moodle](https://moodle.org/login/index.php).
1. Selecciona el curso de Moodle que quieres integrar con {% data variables.product.prodname_classroom %}.
1. Da clic en **Activar la edición**.
1. Da clic en **Agregar una actividad o recurso** en donde quieras que esté disponible {% data variables.product.prodname_classroom %} en Moodle.
1. Elige **Herramienta externa** y da clic en **Agregar**.
1. En el campo de "Nombre de actividad", teclea "GitHub Classroom".
1. En el campo de **Herramienta preconfigurada**, a la derecha del menú desplegable, da clic en **+**.
1. Debajo de "Configuración de herramienta externa", pega las credenciales de configuración de {% data variables.product.prodname_classroom %}. Para obtener más información, consulta la sección "[Generar credenciales de configuración para tu aula](#generating-configuration-credentials-for-your-classroom)".

    | Campo en la configuración de la app de Moodle | Valor o ajuste                                                                                                                                                                                 |
    |:--------------------------------------------- |:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | **Nombre de la herramienta**                  | {% data variables.product.prodname_classroom %} - _TU NOMBRE DE AULA_<br/><br/>**Nota**: Puedes utilizar cualquier nombre, pero te sugerimos este valor para tener más claridad. |
    | **URL de la herramienta**                     | URL de lanzamiento de {% data variables.product.prodname_classroom %}
    | **Versión de LTI**                            | LTI 1.0/1.1                                                                                                                                                                                    |
    | **Contenedor de lanzamiento predeterminado**  | Ventana nueva                                                                                                                                                                                  |
    | **Llave de consumidor**                       | Llave de consumidor de {% data variables.product.prodname_classroom %}
    | **Secreto compartido**                        | Secreto compartido de {% data variables.product.prodname_classroom %}

1. Desplázate y da clic en **Servicios**.
1. A la derecha de "Nombres de LTI de IMS y Aprovisionamiento de Roles", selecciona el menú desplegable y da clic en **Utilizar este servicio para recuperar la información de los miembros de acuerdo con la configuración de seguridad**.
1. Desplázate y da clic en **Privacidad**.
1. A la derecha de **Compartir el nombre del lanzador con la herramienta** y **Compartir el correo electrónico del lanzador con la herramienta**, selecciona los menús desplegables para dar clic en **Siempre**.
1. En la parte inferior de la página, da clic en **Guardar cambios**.
1. En el menú de **Preconfigurar herramienta** da clic en **GitHub Classroom - _TU NOMBRE DE AULA_**.
1. Debajo de "Configuración común de módulo", a la derecha de "Disponibilidad", selecciona el menú desplegable y da clic en **Ocultar para los alumnos**.
1. En la parte inferior de la página, da clic en **Guardar y regresar al curso**.
1. Navega a donde sea que elijas mostrar tu {% data variables.product.prodname_classroom %} y da dlic en la actividad {% data variables.product.prodname_classroom %}.

### Importar un registro de alumnos desde tu LMS

Para obtener más información acerca de importar el registro de alumnos de tu LMS en {% data variables.product.prodname_classroom %}, consulta la sección "[Administrar aulas](/education/manage-coursework-with-github-classroom/manage-classrooms#creating-a-roster-for-your-classroom)".

### Desconectar tu LMS

{% data reusables.classroom.sign-into-github-classroom %}
{% data reusables.classroom.click-classroom-in-list %}
{% data reusables.classroom.click-settings %}
1. Debajo de "Conectar a un sistema de administración de aprendizaje (LMS)", da clic en **Configuración de conexión**. ![Enlace de "Configuración de conexión " en los ajustes de aula](/assets/images/help/classroom/classroom-settings-click-connection-settings.png)
1. Debajo de "Borrar la conexión con tu sistema de administración de aprendizaje", da clic en **Desconectarse de tu sistema de administración de aprendizaje**. ![Botón de "Desconectarse de tu sistema de administración de aprendizaje" en los ajustes de conexión para el aula](/assets/images/help/classroom/classroom-settings-click-disconnect-from-your-lms-button.png)
