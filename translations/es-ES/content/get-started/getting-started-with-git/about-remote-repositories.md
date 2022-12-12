---
title: Acerca de los repositorios remotos
redirect_from:
  - /articles/working-when-github-goes-down
  - /articles/sharing-repositories-without-github
  - /articles/about-remote-repositories
  - /articles/which-url-should-i-use
  - /articles/which-remote-url-should-i-use
  - /github/using-git/which-remote-url-should-i-use
  - /github/using-git/about-remote-repositories
  - /github/getting-started-with-github/about-remote-repositories
  - /github/getting-started-with-github/getting-started-with-git/about-remote-repositories
intro: 'El acercamiento colaborativo de GitHub al desarrollo depende de publicar confirmaciones desde tu repositorio local hacia {% data variables.product.product_name %} para que el resto de las personas las vean, recuperen y actualicen.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: fded875778bd0c573d82db5043e3ce8f195a0d2f
ms.sourcegitcommit: a9ede282ae525dfe101b3e80ac85763d242a744a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/02/2022
ms.locfileid: '148130894'
---
## Acerca de los repositorios remotos

Una URL remota es la manera de Git de decir "el lugar donde se almacena tu código". Esa URL podría ser tu repositorio en GitHub o la bifurcación de otro usuario o incluso en un servidor completamente diferente.

Solo puedes subir a dos tipos de direcciones URL:

* Una dirección URL HTTPS, como `https://{% data variables.command_line.backticks %}/user/repo.git`
* Una dirección URL SSH, como `git@{% data variables.command_line.backticks %}:user/repo.git`

Git asocia una URL remota con un nombre y el repositorio remoto predeterminado normalmente tiene el nombre `origin`.

## Crear repositorios remotos

Puede usar el comando `git remote add` para comparar una dirección URL remota con un nombre.
Por ejemplo, escribirás lo siguiente en la línea de comandos:

```shell
git remote add origin &lt;REMOTE_URL>
```

Esto asocia el nombre `origin` a `REMOTE_URL`.

Puede usar el comando `git remote set-url` para [cambiar la dirección URL de un repositorio remoto](/get-started/getting-started-with-git/managing-remote-repositories).

## Elegir una URL para tu repositorio remoto

Existen varias formas de clonar los repositorios disponibles en {% data variables.location.product_location %}.

Cuando examina un repositorio mientras ha iniciado sesión en la cuenta, las URL que puede utilizar para clonar el proyecto en el equipo están disponibles debajo de los detalles del repositorio.

Para obtener información sobre cómo establecer o cambiar la dirección URL remota, vea "[Administración de repositorios remotos](/get-started/getting-started-with-git/managing-remote-repositories)".

## Clonar con las URL con HTTPS

Las direcciones URL de clonación `https://` están disponibles en todos los repositorios, independientemente de la visibilidad. Las URL de clonación `https://` funcionan incluso si está detrás de un cortafuegos o proxy.

Al usar `git clone`, `git fetch`, `git pull` o `git push` para acceder a un repositorio remoto mediante direcciones URL HTTPS en la línea de comandos, Git le solicitará el nombre de usuario y la contraseña de {% data variables.product.product_name %}. {% data reusables.user-settings.password-authentication-deprecation %}

{% data reusables.command_line.provide-an-access-token %}

{% tip %}

**Sugerencias**:
- Puedes utilizar un asistente de credenciales para que Git recuerde tus credenciales de {% data variables.product.prodname_dotcom %} cada que habla con {% data variables.product.prodname_dotcom %}. Para más información, vea "[Almacenamiento en caché de las credenciales de {% data variables.product.prodname_dotcom %} en Git](/github/getting-started-with-github/caching-your-github-credentials-in-git)".
- Para clonar un repositorio sin autenticarse en {% data variables.product.product_name %} desde la línea de comando, puedes utilizar {% data variables.product.prodname_desktop %} como alternativa. Para más información, vea "[Clonación de un repositorio de {% data variables.product.prodname_dotcom %} en {% data variables.product.prodname_dotcom %} Desktop](/desktop/contributing-to-projects/cloning-a-repository-from-github-to-github-desktop)".

{% endtip %}

 {% ifversion fpt or ghec %}Si prefiere usar SSH pero no se puede conectar por el puerto 22, es posible que pueda utilizar SSH sobre el puerto HTTPS. Para más información, vea "[Uso de SSH sobre el puerto HTTPS](/github/authenticating-to-github/using-ssh-over-the-https-port)".{% endif %}

## Clonar con URL de SSH

Las URL de SSH brindan acceso a un repositorio de Git por medio de SSH, un protocolo seguro. Para utilizar estas URL, tendrá que generar un par de claves SSH en el equipo y agregar la clave **pública** a la cuenta de {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %}. Para más información, vea "[Conexión a {% data variables.product.prodname_dotcom %} con SSH](/github/authenticating-to-github/connecting-to-github-with-ssh)".

Al usar `git clone`, `git fetch`, `git pull` o `git push` para acceder a un repositorio remoto mediante direcciones URL SSH, se le pedirá una contraseña y tendrá que proporcionar la frase de contraseña de la clave SSH. Para más información, vea "[Trabajo con frases de contraseña de clave de SSH](/github/authenticating-to-github/working-with-ssh-key-passphrases)".

{% ifversion fpt or ghec %}Si va a acceder a una organización que usa el inicio de sesión único (SSO) de SAML, tendrá que autorizar la SSH para acceder a la organización antes de autenticarse. Para más información, vea "[Acerca de la autenticación con el inicio de sesión único de SAML](/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/about-authentication-with-saml-single-sign-on)" y "[Autorización de una clave SSH para su uso con el inicio de sesión único de SAML](/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/authorizing-an-ssh-key-for-use-with-saml-single-sign-on){% ifversion fpt %}" en la documentación de {% data variables.product.prodname_ghe_cloud %}.{% else %}".{% endif %}{% endif %}

{% tip %}

**Sugerencia**: Puede utilizar una URL SSH para clonar un repositorio en el equipo, o como una forma segura de implementar el código en servidores de producción. También puedes utilizar el envío a un agente de SSH con tu script de despliegue para evitar administrar llaves en el servidor. Para más información, vea "[Uso del reenvío del agente SSH](/developers/overview/using-ssh-agent-forwarding)".

{% endtip %}

## Clonar con {% data variables.product.prodname_cli %}

También puedes instalar {% data variables.product.prodname_cli %} para utilizar flujos de trabajo de {% data variables.product.product_name %} en tu terminal. Para más información, vea "[Acerca de {% data variables.product.prodname_cli %}](/github-cli/github-cli/about-github-cli)".

{% ifversion not ghae %}
## Clonar con Subversion

También puede usar un cliente [de Subversion](https://subversion.apache.org/) para acceder a cualquier repositorio en {% data variables.product.prodname_dotcom %}. Subversion ofrece características diferentes a Git. Para más información, vea "[¿Cuáles son las diferencias entre Subversion y Git?](/github/importing-your-projects-to-github/what-are-the-differences-between-subversion-and-git)".

También puedes acceder a los repositorios de {% data variables.product.prodname_dotcom %} desde clientes de Subversion. Para más información, vea "[Compatibilidad con clientes de Subversion](/github/importing-your-projects-to-github/support-for-subversion-clients)".
{% endif %}
