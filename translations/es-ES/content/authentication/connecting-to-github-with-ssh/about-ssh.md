---
title: Acerca de SSH
intro: 'Usando el protocolo SSH, te puedes conectar y autenticar con servicios y servidores remotos. Con las llaves SSH puedes conectarte a {% data variables.product.product_name %} sin proporcionar tu nombre de usuario y token de acceso personal en cada visita.'
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
---

Cuando configures SSH, necesitarás generar una llave SSH nuevo y agregarla al agente ssh. Debes agregar la llave SSH a tu cuenta en {% data variables.product.product_name %} antes de utilizarla para autenticarte. Para obtener más información, consulta las secciones "[Generar una llave SSH nueva y agregarla al ssh-agent](/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)" y "[Agregar una llave SSH nueva a tu cuenta de {% data variables.product.prodname_dotcom %}](/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account)".

Puedes asegurar tu llave SSH aún más si utilizas una llave de seguridad de hardware, la cual requiere que esta última se conecte físicamente a tu computadora cuando se utilice el par de llaves para autenticarte con SSH. También puedes asegurar tu llave SSH si la agregas al ssh-agent y utiliza una contraseña. Para obtener más información, consulta la sección "[Trabajar con frases de acceso con llave SSH](/github/authenticating-to-github/working-with-ssh-key-passphrases)".

{% ifversion fpt or ghec %}Para utilizar tu llave SSH con un repositorio que pertenece a una organización que utiliza el inicio de sesión único de SAML, debes autorizar dicha llave. Para obtener más información, consulta la sección "[Autorizar una llave SSH para utilizarse con el inicio de sesión único de SAML](/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/authorizing-an-ssh-key-for-use-with-saml-single-sign-on){% ifversion fpt %}" en la documentación de {% data variables.product.prodname_ghe_cloud %}.{% else %}".{% endif %}{% endif %}

Para mantener la seguridad de cuenta, puedes revisar tu lista de llaves SSH frecuentemente y retirar cualquier llave que sea inválida o que se haya puesto en riesgo. Para obtener más información, consulta "[Revisar tus claves SSH](/github/authenticating-to-github/reviewing-your-ssh-keys)".

{% ifversion fpt or ghec %}
Si no has usado tu clave SSH por un año, entonces {% data variables.product.prodname_dotcom %} automáticamente eliminará tu clave SSH inactiva, como medida de seguridad. Para obtener más información, consulta "[Claves SSH eliminadas o faltantes](/articles/deleted-or-missing-ssh-keys)".
{% endif %}

{% ifversion fpt %}
Las organizaciones que utilizan {% data variables.product.prodname_ghe_cloud %} pueden proporcionar certificados SSH, los cuales pueden utilizar los miembros para acceder a los repositorios de dicha organización sin agregar el certificado a su cuenta de {% data variables.product.product_name %}. Si estás utilizando un certificado SSH, no puedes utilizarlo para acceder a las bifurcaciones de los repositorios de la organización si estas le pertenecen a tu cuenta personal. Para obtener más información, consulta la sección "[Acerca de las autoridades de certificados SSH](/enterprise-cloud@latest/organizations/managing-git-access-to-your-organizations-repositories/about-ssh-certificate-authorities)" en la documentación de {% data variables.product.prodname_ghe_cloud %}.
{% else ghec or ghes or ghae %}
Si eres miembro de una organización que provee certificados SSH, puedes usar tu certificado para acceder a los repositorios de esa organización sin agregar el certificado a tu cuenta de {% data variables.product.product_name %}. No puedes utilizar tu certificado para acceder a las bifurcaciones de los repositorios de la organización si estas bifurcaciones le pertenecen a tu cuenta personal. Para obtener más información, consulta la sección [Acerca de las autoridades de certificados SSH](/organizations/managing-git-access-to-your-organizations-repositories/about-ssh-certificate-authorities)".
{% endif %}

## Leer más

- "[Solucionar problemas de SSH](/articles/troubleshooting-ssh)"
