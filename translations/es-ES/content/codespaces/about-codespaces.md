---
title: Acerca de Codespaces
intro: '{% data variables.product.prodname_codespaces %} es un ambiente de desarrollo en línea configurable que hospeda {% data variables.product.prodname_dotcom %} y que impulsa {% data variables.product.prodname_vscode %}, el cual te permite desarrollar integralmente desde la nube.'
redirect_from:
  - /github/developing-online-with-github-codespaces/about-github-codespaces
  - /github/developing-online-with-codespaces/about-codespaces
  - /codespaces/getting-started-with-codespaces/about-codespaces
versions:
  free-pro-team: '*'
type: overview
topics:
  - Codespaces
---

{% data reusables.codespaces.release-stage %}

### Acerca de {% data variables.product.prodname_codespaces %}

{% data variables.product.prodname_codespaces %} es un ambiente de desarrollo configurable en la nube que está disponible en tu buscador dentro de {% data variables.product.prodname_dotcom %} o a través de {% data variables.product.prodname_vscode %}.

![Un codespace abierto](/assets/images/help/codespaces/codespace-overview.png)

Un codespace incluye todo lo que necesitan los desarrolladores para desarrollar en un repositorio específico, incluyendo la experiencia de editar en {% data variables.product.prodname_vscode %} y los lenguajes, herramientas y utilidades comunes. {% data variables.product.prodname_codespaces %} es completamente configurable, lo cual te permite crear un ambiente de desarrollo personalizado para tu proyecto y le permite a los desarrolladores personalizar su experiencia con extensiones y ajustes de dotfile.

Los codespaces ofrecen muchos beneficios para los equipos al permitir un ambiente consistente a través de todo tu equipo, una incorporación rápida y la creación de un espacio de desarrollo seguro.

### Un ambiente consistente

Puedes crear solo una configuración de codespace que defina el ambiente (o _contenedor dev_) de cada codespace nuevo que cualquiera pueda crear para tu repositorio. Una vez que hagas una configuración, los desarrolladores no tienen que preocuparse por instalar las herramientas correctas para comentar, revisar o contribuir. Ellos ya tendrán un ambiente estandarizado disponible tan pronto creen un codespace desde el repositorio. Para obtener más información, consulta la sección "[Configurar {% data variables.product.prodname_codespaces %} para tu proyecto](/github/developing-online-with-codespaces/configuring-codespaces-for-your-project)".

Para obtener ayuda en iniciar con las configuraciones para lenguajes específicos, consulta los tutoriales de [Inicio](/codespaces/getting-started-with-codespaces).

Si bien cada codespace de tu repositorio tiene un ambiente de desarrollo consistente, los desarrolladores pueden utilizar los {% data variables.product.prodname_codespaces %} donde sea que los necesiten – en {% data variables.product.prodname_dotcom %} o a través de {% data variables.product.prodname_vscode %}.

### Incorporación rápida y personal

Si tienes configurado un [contenedor de dev](/codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project#about-dev-containers) en tu repositorio, cualquier desarrollador puede integrarse rápidamente con el ambiente de desarrollo correcto para tu proyecto si utilizan el {% octicon "download" aria-label="The download icon" %} menú desplegable de **Código** y seleccionan **Abrir con codespaces**.

![Botón de abrir con codespaces](/assets/images/help/codespaces/open-with-codespaces-button.png)

Como resultado de estandarizar en un ambiente de desarrollador repetible, los desarrolladores puede iniciar con codespaces nuevos sin hacer ninguna configuración manual y no necesitan dar mantenimiento contínuo para su ambiente de desarrollo. Se puede crear un codespace nuevo cuando inicias una característica nueva.

Los desarrolladores también pueden personalizar algunos aspectos del ambiente de un codespace utilizando un repositorio de [dotfiles](https://dotfiles.github.io/tutorials/) y la [Sincronización de ajustes](https://code.visualstudio.com/docs/editor/settings-sync). La personalización puede incluir preferencias de shell, herramientas adicionales, configuraciones de editor y extensiones tales como Live Share. Las personalizaciones que hagas se almacenan por usuario, así que cada codespace que abra un desarrollador tendrá su ambiente listo. Para obtener más información, consulta la sección "[Personalizar {% data variables.product.prodname_codespaces %} para tu cuenta](/github/developing-online-with-codespaces/personalizing-codespaces-for-your-account)".

Ya que se puede acceder a {% data variables.product.prodname_codespaces %} desde el buscador, los desarrolladores pueden trabajar en varios proyectos si cambian de pestaña.

### Un ambiente seguro

{% data variables.product.prodname_codespaces %} permite el desarrollo en la nube en vez de localmente. Esto crea una fuente única y rastreable de verdad. Los desarrolladores pueden contribuir desde donde sea, en cualquier máquina, incluyendo tablets o Chromebooks, y no es necesario mantener copias locales o propiedad intelectual. Los desarrolladores siempre tienen que iniciar sesión y contar con acceso tanto a {% data variables.product.prodname_codespaces %} como a los repositorios específcos. Estos permisos se pueden revocar en cualquier momento. Tan pronto revoques los accesos, estos desarrolladores perderán cualquier tipo de acceso a los recursos protegidos. Adicionalmente, los desarrolladores autenticados crean pistas de auditoría para que sepas quién hace qué. Para obtener más información sobre acceso y seguridad, consulta la sección "[Administrar el acceso y seguridad de los codespaces de tu organización](/codespaces/managing-codespaces-for-your-organization/managing-access-and-security-for-your-organizations-codespaces)".

Utilizar {% data variables.product.prodname_codespaces %} es lo más seguro cuando todos los miembros de tu equipo lo están utilizando. Esto significa que no hay necesidad de clonar el repositorio en una máquina local y que los desarrolladores no necesitan instalar nada localmente como `root`.

Los desarrolladores y administradores organizacionales también pueden configurar los ajustes para agregar secretos cifrados y habilitar la verificación de GPG. Para obtener más información, consulta las secciones "[Administrar los secretos cifrados de los {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/managing-encrypted-secrets-for-codespaces)", "[Administrar la verificación GPG para los {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/managing-gpg-verification-for-codespaces)".

### Acerca de la facturación para {% data variables.product.prodname_codespaces %}

{% data reusables.codespaces.about-billing-for-codespaces %} Para obtener más información, consulta "[Acerca de la facturación para {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/about-billing-for-codespaces)".

### Unirse al beta

Se invitará a una cantidad limitada de personas para unirse al beta. To join the waitlist, see [Sign up for the Codespaces beta](https://github.com/features/codespaces/signup).

### Contáctanos para conocer sobre {% data variables.product.prodname_codespaces %}

Si encuentras problemas al utilizar {% data variables.product.prodname_codespaces %}, consulta la sección "[Solución de problemas para tu codespace](/github/developing-online-with-codespaces/troubleshooting-your-codespace)".

Si aún necesitas ayuda o tienes algún tipo de retroalimentación sobre los {% data variables.product.prodname_codespaces %}, utiliza el debate de [Retroalimentación de los Codespaces](https://github.com/github/feedback/discussions/categories/codespaces-feedback).
