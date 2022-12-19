---
title: Acerca de las autoridades de certificación de SSH
intro: 'Con una autoridad de certificación de SSH, tu cuenta de empresa u organización puede ofrecer certificados SSH que los miembros pueden usar para aceder a tus recursos con Git.'
redirect_from:
  - /articles/about-ssh-certificate-authorities
  - /github/setting-up-and-managing-organizations-and-teams/about-ssh-certificate-authorities
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: SSH certificate authorities
ms.openlocfilehash: c4940399efa3c1e88c68224c421de7f43f7ea89b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147061989'
---
## Acerca de las autoridades de certificación de SSH

Un certificado SSH es un mecanismo para que una clave SSH firme otra clave SSH. Si usas una autoridad de certificación de SSH (CA) para ofrecerle a los miembros de tu organización certificados SSH firmados, puedes agregar la CA a tu cuenta de empresa u organización para permitirle a los miembros de la organización usar sus certificados para acceder a los recursos de la organización. 

{% data reusables.organizations.ssh-ca-ghec-only %}

Una vez que agregas una CA de SSH a tu cuenta de empresa u organización, puedes usar la CA para firmar certificados de SSH de clientes para los miembros de la organización. Los miembros de la organización pueden usar los certificados firmados para acceder a los repositorios de tu organización (y solo los repositorios de tu organización) con Git. Opcionalmente, puedes requerir que los miembros utilicen certificados SSH para acceder a los recursos de la organización. Para más información, vea "[Administración de las entidades de certificación SSH de la organización](/articles/managing-your-organizations-ssh-certificate-authorities)" y "[Aplicación de directivas para la configuración de seguridad en la empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-ssh-certificate-authorities-for-your-enterprise)".

Por ejemplo, puedes crear un sistema interno que emita un nuevo certificado para tus programadores cada mañana. Cada programador puede usar su certificado diario para trabajar en los repositorios de tu organización en {% data variables.product.product_name %}. Al finalizar el día, el certificado puede expirar automáticamente, protegiendo tus repositorios si el certificado más tarde se ve comprometido.

{% ifversion ghec %} Los miembros de la organización pueden usar sus certificados firmados para la autenticación, incluso si has aplicado el inicio de sesión único de SAML. A menos que hagas que los certificados SSH sean un requisito, los miembros de la organización pueden seguir usando otros medios para la autenticación para acceder a los recursos de tu organización con Git, incluyendo sus nombre de usuario y contraseña, tokens de acceso personales y sus propias claves SSH.
{% endif %}

Los miembros no podrán utilizar sus certificados para acceder a las bifurcaciones de tus repositorios que pertenezcan a sus cuentas personales. 

## Acerca de las URL SSH con certificados SSH

Si tu organización requiere certificados SSH, para prevenir los errores de autenticación, los miembros de la organización deberán utilizar una URL especial que incluya la ID de organización al realizar operaciones de Git por SSH. La URL especial permite que el cliente y servidor negocien con mayor facilidad qué llave debería utilizarse para la autenticación en la computadora del miembro. Si un miembro usa la URL normal que comienza con `git@github.com`, el cliente SSH podría ofrecer la clave incorrecta, lo que provocaría un error en la operación.

Cualquiera con acceso de lectura al repositorio puede encontrar esta URL si selecciona el menú desplegable **Código** en la página principal del repositorio y, después, hace clic en **Utilizar SSH**.

Si tu organización no requiere certificados SSH, los miembros pueden seguir utilizando sus propias llaves SSH u otros medios de autenticación. En ese caso, funcionará tanto la URL especial como la normal, que comienza con `git@github.com`.

## Emitir certificados

Cuando emites cada certificado, debes incluir una extensión que especifique para qué usuario de {% data variables.product.product_name %} es el certificado. Por ejemplo, puede usar el comando `ssh-keygen` de OpenSSH y reemplazar _KEY-IDENTITY_ con la identidad de clave y _USERNAME_ con un nombre de usuario de {% data variables.product.product_name %}. El certificado que generes se autorizará para actuar en nombre de ese usuario para cualquiera de los recursos de tu organización. Asegúrate de validar la identidad de los usuarios antes de que emitas el certificado.

{% note %}

**Nota**: Debes actualizar a OpenSSH 7.6 o una versión posterior para usar estos comandos.

{% endnote %}

```shell
$ ssh-keygen -s ./ca-key -V '+1d' -I <em>KEY-IDENTITY</em> -O extension:login@{% data variables.product.product_url %}=<em>USERNAME</em> ./user-key.pub
```

{% warning %}

**Advertencia**: Después de firmar y emitir un certificado, no se puede revocar. Asegúrese de usar la marca -`V` a fin de configurar una vigencia para el certificado o este se podría usar de forma indefinida.

{% endwarning %}

Para emitir un certificado para alguien que utilice SSH para acceder a varios productos de {% data variables.product.company_short %}, puedes incluir dos extensiones de inicio de sesión para especificar el nombre de usuario para cada producto. Por ejemplo, el siguiente comando emitirá un certificado para _USERNAME-1_ de la cuenta de {% data variables.product.prodname_ghe_cloud %} del usuario, y para _USERNAME-2_ de la cuenta de {% data variables.product.prodname_ghe_managed %} del usuario o de {% data variables.product.prodname_ghe_server %} en _HOSTNAME_.

```shell
$ ssh-keygen -s ./ca-key -V '+1d' -I <em>KEY-IDENTITY</em> -O extension:login@github.com=<em>USERNAME-1</em> extension:login@<em>HOSTNAME</em>=<em>USERNAME-2</em> ./user-key.pub
```

Puede restringir las direcciones IP desde las que un miembro de la organización puede acceder a los recursos de la organización mediante una extensión `source-address`. La extensión acepta una dirección IP específica o una gama de direcciones IP con la notación CIDR. Puedes especificar múltiples direcciones o rangos separando los valores con comas. Para más información, vea "[Enrutamiento entre dominios sin clases](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing#CIDR_notation)" en Wikipedia.

```shell
$ ssh-keygen -s ./ca-key -V '+1d' -I <em>KEY-IDENTITY</em> -O extension:login@{% data variables.product.product_url %}=<em>USERNAME</em> -O source-address=<em>COMMA-SEPARATED-LIST-OF-IP-ADDRESSES-OR-RANGES</em> ./user-key.pub
```
