---
title: Registro de un sistema de administración de aprendizaje con GitHub Classroom
intro: 'Con {% data variables.product.prodname_classroom %} se puede configurar un sistema de administración de aprendizaje (LMS) compatible con LTI.'
versions:
  fpt: '*'
permissions: 'Organization owners who are admins for a classroom can connect learning management systems to {% data variables.product.prodname_classroom %}.'
shortTitle: Register an LMS
ms.openlocfilehash: e1c1abed5ce4ebf82c19b29fef9a005fbe4c7a02
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106857'
---
## Acerca del registro de un LMS en tu clase

Para conectar tu LMS a un aula, un administrador de la instancia de LMS debe configurar el LMS para permitir el uso de {% data variables.product.prodname_classroom %} y registrar el LMS con {% data variables.product.prodname_classroom %} para iniciar el protocolo de enlace de OAuth. Un administrador solo necesita realizar este proceso de registro una vez; tras ello, cualquier profesor que use una instancia de LMS puede sincronizar sus cursos de LMS con las clases. Para obtener más información sobre cómo conectar un curso de LMS a una clase, consulta "[Conexión de un curso de sistema de administración de aprendizaje a una clase](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/connect-a-learning-management-system-course-to-a-classroom)".

{% note %}

**Nota:** {% data reusables.classroom.google-classroom-note %}

{% endnote %}

## LMS compatibles

{% data reusables.classroom.supported-lmses %}

## Configuración de Canvas en {% data variables.product.prodname_classroom %}

Puedes registrar una instalación Canvas en {% data variables.product.prodname_classroom %} para que los profesores puedan importar datos de la lista a sus clases. Para más información sobre Canvas, vea el [sitio web de Canvas](https://www.instructure.com/canvas/).

### 1. Registrar claves de desarrollador de {% data variables.product.prodname_classroom %} en Canvas

1. Inicie sesión en [Canvas](https://www.instructure.com/canvas/#login).
2. En la barra lateral izquierda de la página principal, haz clic en **Administración** y, a continuación, en **Administración del sitio**.
3. Haz clic en **Claves de desarrollador**.
4. En "Claves de desarrollador", haz clic en el botón **+ Clave de desarrollador** y selecciona **+ Clave de LTI** en el menú desplegable.
5. En la pantalla de configuración "Configuración de la clave", establece los campos en los valores siguientes: 

    | Campo en la configuración de la app de Canvas | Valor o ajuste |
    | :- | :- |
    | **Método** | `Manual Entry` |
    | **Título** | `GitHub Classroom` <br/><br/>**Nota**: Puedes usar cualquier nombre, pero si configuras esto de otra manera, no olvides comunicarlo a los profesores.  |
    | **Descripción** | `Sync Canvas course rosters to GitHub Classroom` (o similar) |
    | **URI de vínculo de destino** | `https://classroom.github.com/context-link` |
    | **Dirección URL de inicio de OpenID Connect** | `https://classroom.github.com/lti1p3/openid-connect/auth` |
    | **JWK (método)** | `Public JWK URL` |
    | **Dirección URL de JWK pública** | `https://classroom.github.com/.well-known/jwks.json` |
    | **URI de redirección** | `https://classroom.github.com/lti1p3/openid-connect/redirect` |
    | Lista desplegable **Servicios de LTI Advantage** | Activa la casilla "Permite recuperar los datos de usuario asociados al contexto en el que está instalada la herramienta". |
    | Lista desplegable **Configuración adicional** | En "Nivel de privacidad", selecciona `Public`. |
    | **Colocaciones** | Seleccione `Course Settings Sub Navigation`. <br/><br/>**Nota**: Si configuras la colocación de otra forma, no olvides comunicarlo a los profesores. En nuestra documentación se da por hecho que será la ubicación del botón. |
6. Haga clic en **Save**(Guardar).
7. En la tabla de la página "Claves de desarrollador", en la fila de la clave de desarrollador de GitHub Classroom, anota el valor del identificador de cliente de la columna "Detalles", que deberás comunicar a los profesores para que puedan finalizar la configuración. 
8. En la tabla de la página "Claves de desarrollador", en la columna "Estado", cambia el estado de la clave a "Activado".

### 2. Registrar tus claves de desarrollador en {% data variables.product.prodname_classroom %}

1. Ir a https://classroom.github.com/register-lms. 
2. Rellene la información siguiente:
   - En "Tipo de LMS", selecciona "Canvas" en el menú desplegable. 
   - "Identificador del emisor": `https://canvas.instructure.com`
   - "Dominio": dirección URL base de la instancia de Canvas
   - "Id. de cliente": identificador de cliente que aparece en "Detalles" de la clave de desarrollador que has creado
   - "Punto de conexión de autorización OIDC": dirección URL base de la instancia de Canvas con `/login/oauth2/token` anexado al final
   - "Dirección URL de recuperación de tokens de OAuth 2.0": dirección URL base de la instancia de Canvas con `/api/lti/authorize_redirect` anexado al final
   - "Dirección URL del conjunto de claves": dirección URL base de la instancia de Canvas con `/api/lti/security/jwks` anexado al final

  ![Registro de la instancia de Canvas con GitHub Classroom](/assets/images/help/classroom/register-canvas-with-github-classroom.png)

3. Haga clic en **Registrar**. 
4. Debería aparecer "LMS registrado correctamente" en la parte superior de la pantalla, lo que significa que has registrado tu instancia de LMS y los profesores ya pueden vincular sus clases a ella.

## Configuración de Moodle en {% data variables.product.prodname_classroom %}

Puedes registrar una instalación Moodle en {% data variables.product.prodname_classroom %} para que los profesores puedan importar datos de la lista a sus clases. Para más información sobre Moodle, vea el [sitio web de Moodle](https://moodle.org).

Debes utilizar Moodle versión 3.0 o superior.

### 1. Habilitar la publicación como herramienta de LTI en Moodle

1. Inicie sesión en [Moodle](https://moodle.org/login/).
2. Haz clic en la pestaña "Administración del sitio" en el menú de nivel superior.
3. En la página "Administración del sitio", haz clic en la pestaña "Complementos", ve hacia abajo hasta la sección "Autenticación" y haz clic en **Administrar autenticación**.
4. Junto al campo "LTI", haz clic en el botón de alternancia para habilitar LTI.
5. Haz clic de nuevo en la pestaña "Complementos", ve hacia abajo hasta "Inscripciones" y haz clic en **Administrar complementos de inscripción**.
6. Junto al campo "Publicar como herramienta de LTI", haz clic en el botón de alternancia para habilitar la publicación como una herramienta de LTI.
7. Vuelve a la página "Administración del sitio" haciendo clic en la pestaña "Administración del sitio" en el menú de nivel superior; luego, ve hacia abajo hasta la sección "Seguridad" y haz clic en **Seguridad HTTP**.
8. Junto a "Permitir incrustación de marcos", activa la casilla para habilitar la inserción de marcos y, después, haz clic en **Guardar cambios**.

### 2. Registrar {% data variables.product.prodname_classroom %} como herramienta externa

1. Vuelve a la página "Administración del sitio" de Moodle haciendo clic en la pestaña "Administración del sitio" en el menú de nivel superior. 
2. Haz clic en la pestaña "Complementos" y, a continuación, junto a la sección "Módulos de actividad", en "Herramienta externa", haz clic en **Administrar herramientas**.
3. Haz clic en **Configurar una herramienta manualmente**. 
4. Edita los siguientes valores en los campos:

    | Campo en la configuración de la app de Moodle | Valor o ajuste |
    | :- | :- |
    | **Nombre de la herramienta** | `GitHub Classroom` <br/><br/>**Nota**: Puedes usar cualquier nombre, pero si configuras esto de otra manera, no olvides comunicarlo a los profesores. |
    | **URL de la herramienta** | `https://classroom.github.com` |
    | **Versión de LTI** | `LTI 1.3` |
    | **Tipo de clave pública** | `Keyset URL` |
    | **Conjunto de claves públicas** | `https://classroom.github.com/.well-known/jwks.json` |
    | **Dirección URL de inicio de sesión** | `https://classroom.github.com/lti1p3/openid-connect/auth` |
    | **URI(s) de redireccionamiento** | `https://classroom.github.com/lti1p3/openid-connect/redirect` |
    | **Contenedor de inicio predeterminado** | `New window` |

5. Activa la casilla **Admite vinculación profunda (mensaje de tipo Content-Item)** .
6. En la lista desplegable "Servicios", junto a "Aprovisionamiento de nombres y rol de LTI de LMS", selecciona "Usar este servicio para recuperar información de los miembros según la configuración de privacidad" en el menú desplegable. 
7. Haga clic en **Guardar cambios**. 
8. Acabas de registrar GitHub Classroom como una herramienta externa. En "Herramientas", en el cuadro "GitHub Classroom", haz clic en el icono de menú para ver la pantalla "Detalles de configuración de la herramienta". Esta pantalla contiene información importante que deberás introducir en el último paso que debes hacer para registrar la instancia en {% data variables.product.prodname_classroom %}. 

### 3. Registrar la instancia de Moodle con {% data variables.product.prodname_classroom %}

1. Ir a https://classroom.github.com/register-lms. 
2. Rellene la información siguiente:
   - En "Tipo de LMS", selecciona "Moodle" en el menú desplegable. 
   - "Identificador del emisor": identificador de plataforma en "Detalles de configuración de la herramienta" de la herramienta externa que has creado en Moodle
   - "Dominio": dirección URL base de la instancia de Moodle
   - "Id. de cliente": identificador de cliente en "Detalles de configuración de la herramienta" de la herramienta externa que has creado en Moodle
   - "Dirección URL de solicitud de autenticación": dirección URL de solicitud de autenticación en "Detalles de configuración de la herramienta" de la herramienta externa que has creado en Moodle
   - "Dirección URL del token de acceso": dirección URL del token de acceso en "Detalles de configuración de la herramienta" de la herramienta externa que has creado en Moodle
   - "Dirección URL del conjunto de claves": dirección URL del conjunto de claves públicas en "Detalles de configuración de la herramienta" de la herramienta externa que has creado en Moodle
  
  ![Registro de la instancia de Moodle con GitHub Classroom](/assets/images/help/classroom/register-moodle-with-github-classroom.png)

3. Haga clic en **Registrar**.
4. Debería aparecer "LMS registrado correctamente" en la parte superior de la pantalla, lo que significa que has registrado tu instancia de LMS y los profesores ya pueden vincular sus clases a ella.

## Configuración de Sakai en {% data variables.product.prodname_classroom %}

### 1. Registrar {% data variables.product.prodname_classroom %} como herramienta externa

1. Ve a Sakai e inicia sesión.
2. Ve a "Área de trabajo de administración" y selecciona **Herramientas externas** en la barra lateral izquierda. 
3. Haz clic en **Instalar herramienta LTI 1.x**.
4. Edita los siguientes valores en los campos:

    | Campo de la configuración de la aplicación Sakai | Valor o ajuste |
    | :- | :- |
    | **Nombre de la herramienta** | GitHub Classroom: [nombre del curso] <br/><br/>**Nota**: Puedes usar cualquier nombre, pero si configuras esto de otra manera, no olvides comunicarlo a los profesores. |
    | **Texto del botón** (texto en el menú de herramientas) | Lo que verá el profesor en el botón para entrar en {% data variables.product.prodname_classroom %}. Por ejemplo, el valor podría ser `sync`. |
    | **Dirección URL de inicio** | `https://classroom.github.com/context-link` |
    | **Enviar nombres de usuario a la herramienta externa** | Seleccione esta casilla de verificación. |
    | **Proporcionar lista a herramienta externa** | Seleccione esta casilla de verificación. |
    | **La herramienta admite LTI 1.3** | Seleccione esta casilla de verificación. |
    | **Dirección URL del conjunto de claves de la herramienta LTI 1.3** | `https://classroom.github.com/.well-known/jwks.json` |
    | **Punto de conexión de inicialización/OpenID Connect de la herramienta LTI 1.3** | `https://classroom.github.com/lti1p3/openid-connect/auth` |
    | **Punto de conexión de redireccionamiento de la herramienta LTI 1.3** | `https://classroom.github.com/lti1p3/openid-connect/redirect` |
5. Al enviar, Sakai te mostrará la información que necesitas para registrar la instancia de Sakai en {% data variables.product.prodname_classroom %}.

### 2. Registrar la instancia de Sakai con {% data variables.product.prodname_classroom %}

1. Ir a https://classroom.github.com/register-lms.
2. Rellene la información siguiente:
   - En "Tipo de LMS", selecciona "Sakai" en el menú desplegable. 
   - "Emisor de plataforma LTI 1.3": el campo "Emisor de plataforma LTI 1.3", tal y como se indica en Sakai
   - "Dominio": dirección URL base de la instancia de Sakai
   - "Id. de cliente de LTI 1.3": el campo "Id. de cliente de LTI 1.3", tal y como se indica en Sakai
   - "Dirección URL de autenticación OIDC de la plataforma LTI 1.3": el campo "Dirección URL de autenticación OIDC de la plataforma LTI 1.3", tal y como se indica en Sakai
   - "Dirección URL de recuperación de tokens de portador de OAuth2 de la plataforma LTI 1.3": el campo "Dirección URL de recuperación de tokens de portador de OAuth2 de la plataforma LTI 1.3", tal y como se indica en Sakai
   - "Dirección URL del conjunto de claves/conocida de OAuth2 de la plataforma LTI 1.3": el campo "Dirección URL del conjunto de claves/conocida de OAuth2 de la plataforma LTI 1.3", tal y como se indica en Sakai
  
  ![Registro de la instancia de Sakai con GitHub Classroom](/assets/images/help/classroom/register-sakai-with-github-classroom.png)

3. Haga clic en **Registrar**. 
4. Debería aparecer "LMS registrado correctamente" en la parte superior de la pantalla, lo que significa que has registrado tu instancia de LMS y los profesores ya pueden vincular sus clases a ella.
