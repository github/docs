---
title: Acerca de SSH
intro: 'Usando el protocolo SSH, te puedes conectar y autenticar con servicios y servidores remotos. Con las claves SSH puedes conectarte a {% data variables.product.product_name %} sin necesidad de proporcionar el nombre de usuario y el {% data variables.product.pat_generic %} en cada visita.{% ifversion ssh-commit-verification %} También puedes usar una clave SSH para firmar confirmaciones.{% endif %}'
redirect_from:
  - /articles/about-ssh
  - /github/authenticating-to-github/about-ssh
  - /github/authenticating-to-github/connecting-to-github-with-ssh/about-ssh
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
ms.openlocfilehash: 51a72821217e5d47092ed77e923b38f4cf248010
ms.sourcegitcommit: a0ad3bfe2a99c3092e76ca9b3d476cf30988ca55
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/28/2022
ms.locfileid: '148118983'
---
{% data reusables.ssh.about-ssh %} Para obtener más información sobre SSH, consulta [Secure Shell](https://en.wikipedia.org/wiki/Secure_Shell) en Wikipedia.

Cuando configures SSH, necesitarás generar una clave SSH privada nueva y agregarla al agente SSH. También debes agregar la clave SSH pública a tu cuenta en {% data variables.product.product_name %} antes de utilizarla para autenticarte{% ifversion ssh-commit-verification %} o firmar confirmaciones{% endif %}. Para obtener más información, consulta "[Generación de una nueva clave SSH e incorporación al agente ssh](/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)"{% ifversion ssh-commit-verification %}, {% else %} e{% endif %} "[Incorporación de una nueva clave SSH a la cuenta de {% data variables.product.prodname_dotcom %}](/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account){% ifversion ssh-commit-verification %}" y "[Acerca de la verificación de firma de confirmación](/articles/about-commit-signature-verification){% endif %}".

Puedes asegurar tu llave SSH aún más si utilizas una llave de seguridad de hardware, la cual requiere que esta última se conecte físicamente a tu computadora cuando se utilice el par de llaves para autenticarte con SSH. También puedes asegurar tu llave SSH si la agregas al ssh-agent y utiliza una contraseña. Para obtener más información, consulta "[Trabajo con frases de contraseña de clave de SSH](/authentication/connecting-to-github-with-ssh/working-with-ssh-key-passphrases)".

{% ifversion fpt or ghec %}Para usar la clave SSH con un repositorio propiedad de una organización que usa el inicio de sesión único de SAML, debes autorizar la clave. Para obtener más información, consulta "[Autorización de una clave SSH para usarla con el inicio de sesión único de SAML](/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/authorizing-an-ssh-key-for-use-with-saml-single-sign-on){% ifversion fpt %}" en la documentación de {% data variables.product.prodname_ghe_cloud %}.{% else %}".{% endif %}{% endif %}

Para mantener la seguridad de cuenta, puedes revisar tu lista de llaves SSH frecuentemente y retirar cualquier llave que sea inválida o que se haya puesto en riesgo. Para obtener más información, consulta "[Revisión de las claves SSH](/github/authenticating-to-github/reviewing-your-ssh-keys)".

{% ifversion fpt or ghec %} Si no has usado tu clave SSH por un año, entonces {% data variables.product.prodname_dotcom %} automáticamente eliminará tu clave SSH inactiva, como medida de seguridad. Para obtener más información, consulta "[Claves SSH eliminadas o ausentes](/articles/deleted-or-missing-ssh-keys)".
{% endif %}

{% ifversion fpt %} Las organizaciones que usan {% data variables.product.prodname_ghe_cloud %} pueden proporcionar certificados SSH, que los miembros pueden usar para acceder a los repositorios de estas sin tener que agregar el certificado a su cuenta de {% data variables.product.product_name %}. Si usas un certificado SSH, no puedes acceder con él a bifurcaciones de los repositorios de la organización, si la bifurcación es propiedad de tu cuenta personal. Para más información, consulta "[Acerca de las entidades de certificación de SSH](/enterprise-cloud@latest/organizations/managing-git-access-to-your-organizations-repositories/about-ssh-certificate-authorities) en la documentación de {% data variables.product.prodname_ghe_cloud %}.
{% else ghec or ghes or ghae %} Si eres miembro de una organización que proporciona certificados SSH, puedes usar tu certificado para acceder a los repositorios de esa organización sin agregar el certificado a tu cuenta de {% data variables.product.product_name %}. No puedes utilizar tu certificado para acceder a bifurcaciones de los repositorios de la organización, si estas pertenecen a tu cuenta personal. Para más información, vea "[Acerca de las entidades de certificación de SSH](/organizations/managing-git-access-to-your-organizations-repositories/about-ssh-certificate-authorities)".
{% endif %}
## Información adicional

- "[Solucionar problemas de SSH](/articles/troubleshooting-ssh)"
