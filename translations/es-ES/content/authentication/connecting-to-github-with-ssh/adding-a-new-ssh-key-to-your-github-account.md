---
title: Agregar una clave SSH nueva a tu cuenta de GitHub
intro: 'Para configurar tu cuenta en {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} para utilizar tu llave SSH nueva (o existente), también necesitarás agregar la llave a tu cuenta.'
redirect_from:
  - /articles/adding-a-new-ssh-key-to-your-github-account
  - /github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account
  - /github/authenticating-to-github/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: Add a new SSH key
ms.openlocfilehash: c53fe44c92a5ef22a4c031c840fd57ccef508f1d
ms.sourcegitcommit: d186fc3b5766172b09b4e7370ae888c2523ac24a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 08/06/2022
ms.locfileid: '147507993'
---
## <a name="about-addition-of-ssh-keys-to-your-account"></a>Acerca de la adición de claves SSH a tu cuenta

{% data reusables.ssh.about-ssh %} Para obtener más información, consulta ["Acerca de SSH](/authentication/connecting-to-github-with-ssh/about-ssh)".

Después de generar un par de claves SSH, debes agregar la clave pública a {% ifversion fpt or ghec or ghes %}{% data variables.product.product_location %}{% elsif ghae %}{% data variables.product.product_name %}{% endif %} para habilitar el acceso SSH para tu cuenta.

## <a name="prerequisites"></a>Requisitos previos

Antes de agregar una clave SSH a tu cuenta en {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}, completa los pasos siguientes.

1. Verifica las claves SSH existente. Para obtener más información, consulta "[Comprobar tus claves SSH existentes](/authentication/connecting-to-github-with-ssh/checking-for-existing-ssh-keys)".
1. Genera una nueva clave SSH y agrégala al agente SSH de la máquina. Para obtener más información, consulta "[Generación de una nueva clave SSH y adición a ssh-agent](/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)".

## <a name="adding-a-new-ssh-key-to-your-account"></a>Agregar una clave SSH nueva a tu cuenta

Después de agregar una llave SSH a tu cuenta de {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}, puedes reconfigurar cualquier repositorio local para utilizar SSH. Para más información, vea "[Cambio de direcciones URL remotas de HTTPS a SSH](/github/getting-started-with-github/managing-remote-repositories/#switching-remote-urls-from-https-to-ssh)".

{% data reusables.ssh.key-type-support %}

{% mac %}

{% webui %}

1. Copia la llave SSH pública a tu portapapeles.

  Si tu archivo de llave SSH pública tiene un nombre diferente que en el código de ejemplo, modifica el nombre de archivo para que coincida con tu configuración actual. Al copiar tu clave, no agregues líneas nuevas o espacios en blanco.

  ```shell
  $ pbcopy &lt; ~/.ssh/id_{% ifversion ghae %}rsa{% else %}ed25519{% endif %}.pub
  # Copies the contents of the id_{% ifversion ghae %}rsa{% else %}ed25519{% endif %}.pub file to your clipboard
  ```

  {% tip %}

  **Sugerencia:** Si `pbcopy` no funciona, puede buscar la carpeta oculta `.ssh`, abrir el archivo en el editor de texto favorito y copiarlo en el Portapapeles.

  {% endtip %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.ssh %}
4. Haga clic en **Nueva clave SSH** o **en Agregar clave SSH**.
  ![Botón Clave SSH](/assets/images/help/settings/ssh-add-ssh-key.png)
5. En el campo "Title" (Título), agrega una etiqueta descriptiva para la clave nueva. Por ejemplo, si estás utilizando una Mac personal, puedes llamar a esta llave "MacBook Air Personal".
6. Pega tu clave en el campo "Key".
  ![El campo de clave](/assets/images/help/settings/ssh-key-paste.png)
7. Haga clic en **Agregar clave SSH**.
  ![Botón Agregar clave](/assets/images/help/settings/ssh-add-key.png) {% data reusables.user-settings.sudo-mode-popup %}

{% endwebui %}

{% endmac %}

{% windows %}

{% webui %}

1. Copia la llave SSH pública a tu portapapeles.

  Si tu archivo de llave SSH pública tiene un nombre diferente que en el código de ejemplo, modifica el nombre de archivo para que coincida con tu configuración actual. Al copiar tu clave, no agregues líneas nuevas o espacios en blanco.

  ```shell
  $ clip &lt; ~/.ssh/id_{% ifversion ghae %}rsa{% else %}ed25519{% endif %}.pub
  # Copies the contents of the id_{% ifversion ghae %}rsa{% else %}ed25519{% endif %}.pub file to your clipboard
  ```

  {% tip %}

  **Sugerencia:** Si `clip` no funciona, puede buscar la carpeta oculta `.ssh`, abrir el archivo en el editor de texto favorito y copiarlo en el Portapapeles.

  {% endtip %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.ssh %}
4. Haga clic en **Nueva clave SSH** o **en Agregar clave SSH**.
  ![Botón Clave SSH](/assets/images/help/settings/ssh-add-ssh-key.png)
5. En el campo "Title" (Título), agrega una etiqueta descriptiva para la clave nueva. Por ejemplo, si estás utilizando una Mac personal, puedes llamar a esta llave "MacBook Air Personal".
6. Pega tu clave en el campo "Key".
  ![El campo de clave](/assets/images/help/settings/ssh-key-paste.png)
7. Haga clic en **Agregar clave SSH**.
  ![Botón Agregar clave](/assets/images/help/settings/ssh-add-key.png) {% data reusables.user-settings.sudo-mode-popup %}

{% endwebui %}

{% endwindows %}

{% linux %}

{% webui %}

1. Copia la llave SSH pública a tu portapapeles.

  Si tu archivo de llave SSH pública tiene un nombre diferente que en el código de ejemplo, modifica el nombre de archivo para que coincida con tu configuración actual. Al copiar tu clave, no agregues líneas nuevas o espacios en blanco.

  ```shell
  $ cat ~/.ssh/id_{% ifversion ghae %}rsa{% else %}ed25519{% endif %}.pub
  # Then select and copy the contents of the id_{% ifversion ghae %}rsa{% else %}ed25519{% endif %}.pub file
  # displayed in the terminal to your clipboard
  ```

  {% tip %}

  **Sugerencia:** Como alternativa, puede buscar la carpeta oculta `.ssh`, abrir el archivo en el editor de texto favorito y copiarlo en el Portapapeles.

  {% endtip %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.ssh %}
4. Haga clic en **Nueva clave SSH** o **en Agregar clave SSH**.
  ![Botón Clave SSH](/assets/images/help/settings/ssh-add-ssh-key.png)
5. En el campo "Title" (Título), agrega una etiqueta descriptiva para la clave nueva. Por ejemplo, si estás utilizando una Mac personal, puedes llamar a esta llave "MacBook Air Personal".
6. Pega tu clave en el campo "Key".
  ![El campo de clave](/assets/images/help/settings/ssh-key-paste.png)
7. Haga clic en **Agregar clave SSH**.
  ![Botón Agregar clave](/assets/images/help/settings/ssh-add-key.png) {% data reusables.user-settings.sudo-mode-popup %}

{% endwebui %}

{% endlinux %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

Antes de que puedas utilizar el {% data variables.product.prodname_cli %} para agregar una llave SSH a tu cuenta, debes autenticarte en el {% data variables.product.prodname_cli %}. Para más información, vea [`gh auth login`](https://cli.github.com/manual/gh_auth_login) en la documentación de {% data variables.product.prodname_cli %}.

Para agregar una clave SSH a la cuenta de GitHub, use el subcomando `ssh-key add` y especifique la clave pública.

```shell
gh ssh-key add <em>key-file</em>
```

Para incluir un título para la nueva clave, use la marca `-t` o `--title`.

```shell
gh ssh-key add <em>key-file</em> --title "personal laptop"
```

Si ha generado la clave SSH siguiendo las instrucciones de "[Generación de una nueva clave SSH](/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)", puede agregarla a la cuenta con este comando.

```shell
gh ssh-key add ~/.ssh/id_ed25519.pub
```

{% endcli %}

{% ifversion fpt or ghec %}
## <a name="further-reading"></a>Información adicional

- "[Autorización de una clave SSH para su uso con el inicio de sesión único de SAML](/articles/authorizing-an-ssh-key-for-use-with-saml-single-sign-on)" {% endif %}
