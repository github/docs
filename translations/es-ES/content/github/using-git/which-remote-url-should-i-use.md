---
title: '¿Qué URL remota debería utilizar?'
redirect_from:
  - /articles/which-url-should-i-use/
  - /articles/which-remote-url-should-i-use
intro: 'Existen varias formas de clonar los repositorios disponibles en {% data variables.product.product_location %}.'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

Cuando ves un repositorio mientras estás registrado en tu cuenta, las URL que puedes utilizar para clonar el proyecto en tu computadora están disponibles debajo de los detalles del repositorio:

Para obtener información acerca de configurar o cambiar tu URL remota, consulta "[Cambiar la URL de un remoto](/articles/changing-a-remote-s-url)".

### Clonar con las URL con HTTPS

Las URL clon `https://` se encuentran disponibles en todos los repositorios, sin importar su visibilidad. Las URL clon `https://` funcionan aún si estás detrás de un cortafuegos o de un proxy.

Cuando ejecutas `git clone`, `git fetch`, `git pull`, o `git push` en un repositorio mendiante URL con HTTPS en la línea de comando, Git te pedirá tu nombre de usuario y contraseña de {% data variables.product.product_name %}. {% data reusables.user_settings.password-authentication-deprecation %}

{% data reusables.command_line.provide-an-access-token %}

{% tip %}

**Tips**:

- Puedes utilizar un asistente de credenciales para que Git recuerde tus credenciales de {% data variables.product.prodname_dotcom %} cada que habla con {% data variables.product.prodname_dotcom %}. Para obtener más información, consulta la sección "[ Almacenar tus credencialesde {% data variables.product.prodname_dotcom %} en el caché dentro de Git](/github/using-git/caching-your-github-credentials-in-git)".

- Para clonar un repositorio sin autenticarse en {% data variables.product.product_name %} desde la línea de comando, puedes utilizar {% data variables.product.prodname_desktop %} como alternativa. Para obtener más información, consulta la sección "[Clonar un repositorio desde {% data variables.product.prodname_dotcom %} hacia {% data variables.product.prodname_dotcom %} Desktop](/desktop/contributing-to-projects/cloning-a-repository-from-github-to-github-desktop)".

{% endtip %}

 {% if currentVersion == "free-pro-team@latest" %}Si prefieres utilizar SSH pero no puedes conectarte por el puerto 22, podrías utilizar SSH sobre el puerto de HTTPS. Para obtener más información, consulta la sección "[Utilizar SSH a través del puerto HTTPS](/github/authenticating-to-github/using-ssh-over-the-https-port)".{% endif %}

### Clonar con URL de SSH

Las URL de SSH brindan acceso a un repositorio de Git por medio de SSH, un protocolo seguro. Para utilizar estas URL, debes generar un par de claves SSH en tu computador y añadir la llave **pública** a tu cuenta de {% data variables.product.product_name %}. Para obtener más información, consulta la sección "[Conectarse a {% data variables.product.prodname_dotcom %} con SSH](/github/authenticating-to-github/connecting-to-github-with-ssh)".

Cuando ejecutas `git clone`, `git fetch`, `git pull`, o `git push` en un repositorio remoto utilizando URL de SSH, se te solicitará una contraseña y deberás ingresar tu frase de acceso con llave de SSH. Para obtener más información, consulta la sección "[Trabajar con frases de acceso con llave SSH](/github/authenticating-to-github/working-with-ssh-key-passphrases)".

{% if currentVersion == "free-pro-team@latest" %}Si estás accediendo a una organización que utiliza el inicio de sesión único (SSO) de SAML, debes autorizar a tu llave SSH para que acceda a la organización antes de que te autentiques. Para obtener más información, consulta la sección "[Acerca de la autenticación con el inicio de sesión único de SAML](/github/authenticating-to-github/about-authentication-with-saml-single-sign-on)" y "[Autorizar una llave SSH para su uso con el inicio de sesión único de SAML](/github/authenticating-to-github/authorizing-an-ssh-key-for-use-with-saml-single-sign-on)". {% endif %}

{% tip %}

**Tip**: Puedes utilizar una URL con SSH para clonar un repositorio a tu computador, o como una forma segura de desplegar tu código en servidores productivos. También puedes utilizar el envío a un agente de SSH con tu script de despliegue para evitar administrar llaves en el servidor. Para obtener más información, consulta la sección "[Utilizar el Reenvío de Agente de SSH](/developers/overview/using-ssh-agent-forwarding)".

{% endtip %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" or currentVersion == "github-ae@latest" %}

### Clonar con {% data variables.product.prodname_cli %}

También puedes instalar {% data variables.product.prodname_cli %} para utilizar flujos de trabajo de {% data variables.product.product_name %} en tu terminal. Para obtener más información, consulta la documentación de [{% data variables.product.prodname_cli %}](https://cli.github.com/manual/).

{% endif %}

{% if currentVersion != "github-ae@latest" %}
### Clonar con Subversion

También puedes utilizar un cliente de [Subversion](https://subversion.apache.org/) para acceder a cualquier repositorio en {% data variables.product.prodname_dotcom %}. Subversion ofrece características diferentes a Git. Para obtener más información, consulta la sección "[¿Cuáles son las diferencias entre Subversion y Git?](/github/importing-your-projects-to-github/what-are-the-differences-between-subversion-and-git)"
También puedes acceder a los repositorios en

{% data variables.product.prodname_dotcom %} desde los clientes de Subversion. Para obtener más información, consulta la sección "[Soporte para clientes de Subversion](/github/importing-your-projects-to-github/support-for-subversion-clients)".
{% endif %}

### Further reading

- [Trabajar con URL Remotas](https://git-scm.com/book/en/Git-Basics-Working-with-Remotes) del sitio del libro de _Pro Git_
