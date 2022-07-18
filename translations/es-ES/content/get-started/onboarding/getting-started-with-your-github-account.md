---
title: Iniciar con tu cuenta de GitHub
intro: 'Con una cuenta personal de {% data variables.product.prodname_dotcom %}, puedes importar o crear repositorios, colaborar con los demás y conectarte con la comunidad de {% data variables.product.prodname_dotcom %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
---

Esta guía te mostrará cómo configurar tu cuenta de {% data variables.product.company_short %} y cómo iniciar con las características de colaboración y comunitarias de {% data variables.product.product_name %}.

## Parte 1: Configurar tu cuenta de {% data variables.product.prodname_dotcom %}

{% ifversion fpt or ghec %}
Los primeros pasos para iniciar con {% data variables.product.product_name %} son crear una cuenta, elegir un producto que se acople a tus necesidades, verificar tu correo electrónico, configurar la autenticación bifactorial y ver tu perfil.
{% elsif ghes %}
Los primeros pasos para comenzar con {% data variables.product.product_name %} son acceder a tu cuenta, configurar la autenticación bifactorial y ver tu perfil.
{% elsif ghae %}
Los primeros pasos para comenzar con {% data variables.product.product_name %} son acceder a tu cuenta y ver tu perfil.
{% endif %}

{% ifversion fpt or ghec %}Hay varios tipos de cuentas en {% data variables.product.prodname_dotcom %}. {% endif %} Todo aquél que utilice {% data variables.product.product_name %} tiene su propia cuenta personal, la cual puede ser parte de varias organizaciones y equipos. Tu cuenta personal es tu identidad en {% data variables.product.product_location %} y te representa como individuo.

{% ifversion fpt or ghec %}
### 1. Crear una cuenta
Para registrarte para obtener una cuenta de {% data variables.product.product_location %}, navega a https://github.com/ and follow the prompts.

Para mantener tu cuenta de {% data variables.product.prodname_dotcom %} protegida, debes utilizar una contraseña fuerte y única. Para obtener más información, consulta la sección "[Crear una contraseña fuerte](/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-strong-password)".

### 2. Elegir tu producto de {% data variables.product.prodname_dotcom %}
Puedes elegir {% data variables.product.prodname_free_user %} o {% data variables.product.prodname_pro %} para obtener acceso a diversas características de tu cuenta personal. Puedes mejorarlas en cualquier momento si no estás seguro de qué producto quieres inicialmente.

Para obtener más información sobre todos los planes de {% data variables.product.prodname_dotcom %}, consulta la sección [ productos de {% data variables.product.prodname_dotcom %}](/get-started/learning-about-github/githubs-products)".

### 3. Verificar tu dirección de correo electrónico
Para garantizar que puedes utilizar todas las características en tu plan de {% data variables.product.product_name %}, verifica tu dirección de correo electrónico después de registrarte para obtener una cuenta nueva. Para obtener más información, consulta "[Verificar tu dirección de correo electrónico](/github/getting-started-with-github/signing-up-for-github/verifying-your-email-address)".
{% endif %}

{% ifversion ghes %}
### 1. Acceder a tu cuenta
El administrador de tu instancia de {% data variables.product.product_name %} te notificará sobre cómo autenticarte y acceder a tu cuenta. El proceso varía dependiendo del modo de autenticación que tienen configurado para la instancia.
{% endif %}

{% ifversion ghae %}
### 1. Acceder a tu cuenta
Recibirás una notificación de correo electrónico una vez que tu propietario de empresa en {% data variables.product.product_name %} haya configurado tu cuenta, lo cual te permitirá autenticarte con el inicio de sesión único (SSO) de SAML y acceder a tu cuenta.
{% endif %}

{% ifversion fpt or ghes or ghec %}
### {% ifversion fpt or ghec %}4.{% else %}2.{% endif %} Configurar la autenticación bifactorial
La autenticación de dos factores, o 2FA, es una capa extra de seguridad que se usa cuando se inicia sesión en sitios web o aplicaciones. Insistimos en que configures la 2FA por seguridad de tu cuenta. Para obtener más información, consulta "[Acerca de la autenticación de dos factores](/github/authenticating-to-github/securing-your-account-with-two-factor-authentication-2fa/about-two-factor-authentication)".
{% endif %}
### {% ifversion fpt or ghec %}5.{% elsif ghes %}3.{% else %}2.{% endif %} Ver tu perfil de {% data variables.product.prodname_dotcom %} y gráfica de contribuciones
Tu perfil de {% data variables.product.prodname_dotcom %} les dice a las personas la historia de tu trabajo a través de los repositorios y gists que hayas fijado, las membrecías que hayas elegido publicitar, las contribuciones que hayas hecho y los proyectos que hayas creado. Para obtener más información, consulta las secciones "[Acerca de tu perfil](/github/setting-up-and-managing-your-github-profile/customizing-your-profile/about-your-profile)" y "[Ver las contribuciones en tu perfil](/github/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/viewing-contributions-on-your-profile)".

## Parte 2: Utilizar las herramientas y procesos de {% data variables.product.product_name %}
Para utilizar {% data variables.product.product_name %} de la mejor forma, necesitarás configurar Git. Git es responsable de todo lo relacionado con {% data variables.product.prodname_dotcom %} que suceda de forma local en tu computadora. Para colaborar de forma efectiva en {% data variables.product.product_name %}, necesitarás escribir en propuestas y solicitudes de cambio utilizando el Lenguaje de Marcado Enriquecido de {% data variables.product.prodname_dotcom %}.

### 1. Aprender a usar Git
El enfoque colaborativo de {% data variables.product.prodname_dotcom %} para el desarrollo depende de las confirmaciones de publicación desde tu repositorio local hacia {% data variables.product.product_name %} para que las vean, recuperen y actualicen otras personas utilizando Git. Para obtener más información sobre Git, consulta la guía del "[Manual de Git](https://guides.github.com/introduction/git-handbook/)". Para obtener más información sobre cómo se utiliza Git en {% data variables.product.product_name %}, consulta la sección "[flujo de {% data variables.product.prodname_dotcom %}](/get-started/quickstart/github-flow)".
### 2. Configurar Git
Si planeas utilizar Git localmente en tu computadora, ya sea a través de la línea de comandos, de un IDE o de un editor de texto, necesitarás instalar y configurar Git. Para obtener más información, consulta "[Configurar Git](/get-started/quickstart/set-up-git)."

Si prefieres utilizar una interfaz virtual, puedes descargar y utilziar {% data variables.product.prodname_desktop %}. {% data variables.product.prodname_desktop %} viene en un paquete con Git, así que no hay necesidad de instalar Git por separado. Para obtener más información, consulta "[Comenzar con {% data variables.product.prodname_desktop %}](/desktop/installing-and-configuring-github-desktop/overview/getting-started-with-github-desktop)".

Una vez que instalaste Git, puedes conectarte a los repositorios de {% data variables.product.product_name %} desde tu computadora local, ya sea que se trate de tu propio repositorio o de la bifurcación del de otro usuario. Cuando te conectas a un repositorio de {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} desde Git, necesitarás autenticarte con {% data variables.product.product_name %} utilizando ya sea HTTPS o SSH. Para obtener más información, consulta la sección "[Acerca de los repositorios remotos](/get-started/getting-started-with-git/about-remote-repositories)".

### 3. Elegir cómo interactuar con {% data variables.product.product_name %}
Cada quién tiene su propio flujo de trabajo único para interactuar con {% data variables.product.prodname_dotcom %}; las interfaces y métodos que utilices dependen de tu preferencia y de lo que funcione mejor para cubrir tus necesidades.

Para obtener más información sobre cómo autenticarte en {% data variables.product.product_name %} con cada uno de estos métodos, consulta la sección "[Sobre la autenticación en {% data variables.product.prodname_dotcom %}](/github/authenticating-to-github/keeping-your-account-and-data-secure/about-authentication-to-github)".

| **Método**                                                                                                                                     | **Descripción**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | **Casos de Uso**                                                                                                                                                                                                                                                                                                               |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Navega a {% data variables.product.prodname_dotcom_the_website %}                                                                            | Si no necesitas trabajar con archivos localmente, {% data variables.product.product_name %} te permite completar la mayoría de las acciones relacionadas con Git en el buscador, desde crear y bifurcar repositorios hasta editar archivos y abrir solicitudes de cambios.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Este método es útil si quieres tener una interfaz virtual y necesitas realizar cambios rápidos y simples que no requieran que trabajes localmente.                                                                                                                                                                             |
| {% data variables.product.prodname_desktop %}                                                                                                  | {% data variables.product.prodname_desktop %} se extiende y simplifica tu flujo de trabajo {% data variables.product.prodname_dotcom_the_website %}, usando una interfaz visual en lugar de comandos de texto en la línea de comandos. Para obtener más información sobre cómo iniciar con {% data variables.product.prodname_desktop %}, consulta la sección "[Iniciar con {% data variables.product.prodname_desktop %}](/desktop/installing-and-configuring-github-desktop/overview/getting-started-with-github-desktop)".                                                                                                                                                                                                                                                                                                                                                                                                         | Este método es le mejor si necesitas o quieres trabajar con archivos localmente, pero prefieres utilizar una interfaz visual para utilizar Git e interactuar con {% data variables.product.product_name %}.                                                                                                                    |
| IDE o editor de texto                                                                                                                          | Puedes configurar un editor de texto predeterminado, como [Atom](https://atom.io/) o [{% data variables.product.prodname_vscode %}](https://code.visualstudio.com/) para abrir y editar tus archivos con Git, utilizar extensiones y ver la estructura del proyecto. Para obtener más información, consulta la sección "[Asociar los editores de texto con Git](/github/using-git/associating-text-editors-with-git)".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Es conveniente si estás trabajando con archivos y proyectos más complejos y quieres todo en un solo lugar, ya que los editores o IDE a menudo te permiten acceder directamente a la línea de comandos en el editor.                                                                                                            |
| Línea de comandos, con o sin {% data variables.product.prodname_cli %}                                                                         | Para la mayoría de los controles granulares y personalización de cómo utilizas Git e interactúas con {% data variables.product.product_name %}, puedes utilizar la línea de comandos. Para obtener más información sobre cómo utilizar los comandos de Git, consulta la sección "[Hoja de comandos de Git](/github/getting-started-with-github/quickstart/git-cheatsheet)".<br/><br/> El {% data variables.product.prodname_cli %} es una herramienta de línea de comandos por separado que puedes instalar, la cual agrega solicitudes de cambio, propuestas, {% data variables.product.prodname_actions %} y otras características de {% data variables.product.prodname_dotcom %} a tu terminal para que puedas hacer todo tu trabajo desde un solo lugar. Para obtener más información, consulta la sección "[{% data variables.product.prodname_cli %}](/github/getting-started-with-github/using-github/github-cli)". | Esto es lo más conveniente si ya estás trabajando desde la línea de comandos, lo cual te permite evitar cambiar de contexto o si estás más cómodo utilizando la línea de comandos.                                                                                                                                             |
| API de {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} | {% data variables.product.prodname_dotcom %} Tiene una API de REST y una de GraphQL que puedes utilizar para interactuar con {% data variables.product.product_name %}. Para obtener más información, consulta la sección "[Comenzar con la API](/github/extending-github/getting-started-with-the-api)".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | La API de {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} tendrá la mayor utilidad si quisieras automatizar tareas comunes, respaldar tus datos o crear integraciones que se extiendan a {% data variables.product.prodname_dotcom %}. |
### 4. Escribir en {% data variables.product.product_name %}
Para que tus comunicaciones sean más claras y organizadas en propuestas y solicitudes de cambios, puedes utilizar el Lenguaje de Marcado Enriquecido de {% data variables.product.prodname_dotcom %} para formatearlas, el cual combina una sintaxis fácil de escribir y de leer con algunas funcionalidades personalizadas. Para obtener más información, consulta "[Acerca de la escritura y el formato en {% data variables.product.prodname_dotcom %}](/github/writing-on-github/about-writing-and-formatting-on-github)."

Puedes aprender el lenguaje de marcado enriquecido de {% data variables.product.prodname_dotcom %} con el curso de "[Comunícate utilizando el lenguaje de marcado](https://github.com/skills/communicate-using-markdown)" que está en {% data variables.product.prodname_learning %}.

### 5. Buscar en {% data variables.product.product_name %}
Nuestra búsqueda integrada te permite encontrar lo que estás buscando de entre los muchos repositorios, usuarios y líneas de código que hay en {% data variables.product.product_name %}. Puedes buscar globalmente a través de todo {% data variables.product.product_name %} o limitar tu búsqueda a un repositorio u organización en particular. Para obtener más información sobre los tipos de búsqueda que puedes hacer en {% data variables.product.product_name %}, consulta la sección "[Acerca de buscar en {% data variables.product.prodname_dotcom %}](/github/searching-for-information-on-github/getting-started-with-searching-on-github/about-searching-on-github)".

Nuestra sintaxis de búsqueda te permite construir consultas utilizando calificadores para especificar lo que quieres buscar. Para obtener más información sobre la sintaxis de búsqueda a utilizar, consulta la sección "[Buscar en {% data variables.product.prodname_dotcom %}](/github/searching-for-information-on-github/searching-on-github)".

### 6. Administrar los archivos en {% data variables.product.product_name %}
Con {% data variables.product.product_name %}, puedes crear, editar, mover y borrar los archivos en tu repositorio o en cualquier repositorio en el que tengas acceso de escritura. También puedes rastrear el historial de cambios en un archivo, línea por línea. Para obtener más información, consulta la sección "[Administrar archivos en {% data variables.product.prodname_dotcom %}](/github/managing-files-in-a-repository/managing-files-on-github)".

## Parte 3: Colaborar en {% data variables.product.product_name %}
Cualquier cantidad de personas pueden trabajar juntas en los repositorios a lo largo de {% data variables.product.product_name %}. Puedes configurar los ajustes, crear tableros de proyecto y administrar tus notificaciones para motivar una colaboración efectiva.

### 1. Trabajar con repositorios

#### Crear un repositorio
Un repositorio es como una carpeta para tu proyecto. Puedes tener cualquier cantidad de repositorios privados y públicos en tu cuenta personal. Los repositorios pueden contener archivos y carpetas, imágenes, videos, hojas de cálculo y juegos de datos, así como el historial de revisión de todos los archivos en el repositorio. Para obtener más información, consulta la sección "[Acerca de los repositorios](/github/creating-cloning-and-archiving-repositories/about-repositories)".

Cuando creas un repositorio nuevo, debes inicializarlo con un archivo README para que las personas sepan sobre tu proyecto. Para obtener más información, consulta la sección "[Crear un nuevo repositorio](/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/creating-a-new-repository)."

#### Clonar un repositorio
Puedes clonar un repositorio existente desde {% data variables.product.product_name %} hacia tu computadora local, haciendo que sea más fácil el agregar o eliminar archivos, corregir conflictos de fusión o hacer confirmaciones complejas. Clonar un repositorio extrae una copia integral de todos los datos del mismo que {% data variables.product.prodname_dotcom %} tiene en ese momento, incluyendo todas las versiones para cada archivo y carpeta para el proyecto. Para obtener más información, consulta "[Clonar un repositorio](/github/creating-cloning-and-archiving-repositories/cloning-a-repository-from-github/cloning-a-repository)".

#### Bifurcar un repositorio
Una bifurcación es una copia de un repositorio que administres, en donde cualquier cambio que hagas no afectará el repositorio a menos de que emitas una solicitud de cambios del propietario del proyecto. Casi siempre las bifurcaciones se usan para proponer cambios al proyecto de otra persona o para usar el proyecto de otra persona como inicio de tu propia idea. Para obtener más información, consulta la sección "[Trabajar con las bifurcaciones](/github/collaborating-with-pull-requests/working-with-forks)".
### 2. Importar tus proyectos
Si tienes proyectos existentes que quisieras mover a {% data variables.product.product_name %}, puedes importarlos utilizando el importador de {% data variables.product.prodname_dotcom %}, la línea de comandos o herramientas de migración externas. Para obtener más información, consulta la sección, "[Importar el código fuente a {% data variables.product.prodname_dotcom %}](/github/importing-your-projects-to-github/importing-source-code-to-github)"-

### 3. Administrar colaboradores y permisos
Puedes colaborar en tu proyecto con otros usando los tableros de proyecto, las solicitudes de extracción y las propuestas de tu repositorio. Puedes invitar a otras personas para que sean colaboradores en tu repositorio desde la pestaña de **Colaboradores** en los ajustes de repositorio. Para obtener más información, consulta la sección "[Invitar colaboradores a un repositorio personal](/github/setting-up-and-managing-your-github-user-account/managing-access-to-your-personal-repositories/inviting-collaborators-to-a-personal-repository)".

Eres el propietario de cualquier repositorio que crees en tu cuenta personal y tienes el control total del repositorio. Los colaboradores tiene acceso de escritura a tu repositorio, lo cual limita sus permisos. Para obtener más información, consulta "[Niveles de permiso para un repositorio de cuenta de usuario](/github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/permission-levels-for-a-user-account-repository)".

### 4. Administrar configuraciones de repositorios
Como propietario de un repositorio, puedes configurar varios ajustes, incluyendo la visibilidad del repositorio, los temas y la vista previa de redes sociales. Para obtener más información, consulta la sección "[Administrar la configuración de los repositorios](/github/administering-a-repository/managing-repository-settings)".

### 5. Configurar tu proyecto para contribuciones saludables
{% ifversion fpt or ghec %}
Para motivar a los colaboradores de tu repositorio, necesitarás una comunidad que motive a las personas para usar, contribuir a y evangelizar tu proyecto. Para obtener más información, consulta la sección "[Crear Comunidades Acogedoras](https://opensource.guide/building-community/)" en las Guías de Código Abierto.

Al agregar archivos como lineamientos de contribución, un código de conducta y una licencia para tu repositorio, puedes crear un ambiente en donde sea más fácil para los colaboradores realizar contribuciones significativas y útiles. Para encontrar más información, visita la sección "[ Configurar tu proyecto para tener contribuciones saludables](/communities/setting-up-your-project-for-healthy-contributions)."
{% endif %}
{% ifversion ghes or ghae %}
Al agregar archivos como lineamientos de contribución, un código de conducta y tener compatibilidad con los recursos para tu repositorio, puedes crear un ambiente en donde sea más fácil para los colaboradores realizar contribuciones significativas y útiles. Para encontrar más información, visita la sección "[ Configurar tu proyecto para tener contribuciones saludables](/communities/setting-up-your-project-for-healthy-contributions)."
{% endif %}

### 6. Utilizar las propuestas y tableros de proyecto de GitHub
Puedes utilizar las propuestas de GiHub para organizar tu trabajo con las propuestas y solicitudes de trabajo y administrar tu flujo de trabajo con tableros de proyecto. Para obtener más información, consulta las secciones "[Acerca de las propuestas](/issues/tracking-your-work-with-issues/about-issues)" y [Acerca de los tableros de proyecto](/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards)".

### 7. Administrar notificaciones
Las notificaciones proporcionan actualizaciones sobre la actividad en {% data variables.product.prodname_dotcom %} a la cual estás suscrito o en la cual participas. Si ya no te interesa alguna conversación, te puedes dar de baja, dejar de seguir o personalizar los tipos de notificaciones que recibirás en el futuro. Para obtener más información, consulta la sección "[Acerca de las notificaciones](/github/managing-subscriptions-and-notifications-on-github/setting-up-notifications/about-notifications)".

### 8. Trabajar con {% data variables.product.prodname_pages %}
Puedes utilizar {% data variables.product.prodname_pages %} para crear y hospedar un sitio web directamente desde un repositorio de {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}. Para obtener más información, consulta la sección "[Acerca de {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/about-github-pages)".

{% ifversion fpt or ghec %}
### 9. Uso de {% data variables.product.prodname_discussions %}
Puedes habilitar los {% data variables.product.prodname_discussions %} en tu repositorio para ayudar a crear una comunidad al rededor de tu proyecto. Los mantenedores, contribuyentes y visitantes pueden utilizar los debates para compartir anuncios, hacer y responder preguntas y participar en conversaciones sobre las metas. Para obtener más información, consulta la sección "[Acerca de los debates](/discussions/collaborating-with-your-community-using-discussions/about-discussions)".
{% endif %}
## Parte 4: Personalizar y automatizar tu trabajo en {% data variables.product.product_name %}

{% data reusables.getting-started.customizing-and-automating %}

{% ifversion fpt or ghec %}
### 1. Uso de {% data variables.product.prodname_marketplace %}
{% data reusables.getting-started.marketplace %}
{% endif %}
### {% ifversion fpt or ghec %}2.{% else %}1.{% endif %} Utilizar la API de {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}
{% data reusables.getting-started.api %}

### {% ifversion fpt or ghec %}3.{% else %}2.{% endif %} Crear {% data variables.product.prodname_actions %}
{% data reusables.getting-started.actions %}

### {% ifversion fpt or ghec %}4.{% else %}3.{% endif %} Publicar y administrar el {% data variables.product.prodname_registry %}
{% data reusables.getting-started.packages %}

## Parte 5: Compilar de forma segura en {% data variables.product.product_name %}
{% data variables.product.product_name %} tiene características de seguridad diversas que ayudan a mantener la seguridad del código y de los secretos en los repositorios. Algunas de las características se encuentran disponibles para todos los repositorios, mientras que otras solo están disponibles para los repositorios públicos o para aquellos con una licencia de {% data variables.product.prodname_GH_advanced_security %}. Para ver un resumen de las características de seguridad de {% data variables.product.product_name %}, consulta la sección "[características de seguridad de {% data variables.product.prodname_dotcom %}](/code-security/getting-started/github-security-features)".

### 1. Asegurar tu repositorio
Como administrador de un repositorio, puedes proteger tus repositorios si configuras los ajustes de seguridad de estos. Estos incluyen el administrar el acceso a tu repositorio, configurar una política de seguridad y administrar las dependencias. Para los repositorios públicos y para los privados que pertenezcan a las organizaciones en donde se haya habilitado la {% data variables.product.prodname_GH_advanced_security %}, también puedes configurar el escaneo de código y de secretos para que identifiquen las vulnerabilidades automáticamente y garanticen que los tokens y las llaves no se expongan.

Para obtener más información sobre los pasos que debes tomar para proteger tus repositorios, consulta la sección "[Proteger tu repositorio](/code-security/getting-started/securing-your-repository)".

{% ifversion fpt or ghec %}
### 2. Administrar tus dependencias
Una parte grande de compilar de forma segura es mantener las dependencias de tu proyecto para asegurarte de que todos los paquetes y aplicaciones de las cuales dependes estén actualizadas y seguras. Puedes administrar las dependencias de tu repositorio en {% data variables.product.product_name %} si exploras la gráfica de dependencias para este utilizando el Dependabot para levantar solicitudes de cambio automáticamente para mantener tus dependencias actualizadas y recibiendo alertas del Dependabot y actualizaciones de seguridad para las dependencias vulnerables.

Para obtener más información, consulta la sección "[Proteger tu cadena de suministro de software](/code-security/supply-chain-security)".
{% endif %}

## Parte 6: Participar en la comunidad de {% data variables.product.prodname_dotcom %}

{% data reusables.getting-started.participating-in-community %}

### 1. Contribuir con proyectos de código abierto
{% data reusables.getting-started.open-source-projects %}

### 2. Interactuar con {% data variables.product.prodname_gcf %}
{% data reusables.support.ask-and-answer-forum %}

### 3. Leer sobre {% data variables.product.product_name %} en {% data variables.product.prodname_docs %}

{% data reusables.docs.you-can-read-docs-for-your-product %}

### 4. Aprender con {% data variables.product.prodname_learning %}
{% data reusables.getting-started.learning %}

{% ifversion fpt or ghec %}
### 5. Apoyar a la comunidad de código abierto
{% data reusables.getting-started.sponsors %}

### 6. Comunicarse con {% data variables.contact.github_support %}
{% data reusables.getting-started.contact-support %}

{% ifversion fpt %}
## Leer más
- "[Iniciar con {% data variables.product.prodname_team %}](/get-started/onboarding/getting-started-with-github-team)"
{% endif %}
{% endif %}
