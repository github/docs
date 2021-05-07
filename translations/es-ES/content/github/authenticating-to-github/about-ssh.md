---
title: Acerca de SSH
intro: 'Usando el protocolo SSH, te puedes conectar y autenticar con servicios y servidores remotos. Con las llaves SSH puedes conectarte a {% data variables.product.product_name %} sin proporcionar tu nombre de usuario y token de acceso personal en cada visita.'
redirect_from:
  - /articles/about-ssh
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - SSH
---

Cuando configuras SSH, [generarás una clave SSH y la agregarás al ssh-agent](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) y luego [agregarás la clave a tu cuenta de {% data variables.product.product_name %}](/articles/adding-a-new-ssh-key-to-your-github-account). Al agregar la clave SSH al ssh-agent te aseguras de que tu clave SSH tiene una capa extra de seguridad mediante el uso de una frase de contraseña. Para obtener más información, consulta "[Trabajar con frases de contraseña de la clave SSH](/articles/working-with-ssh-key-passphrases)".

{% if currentVersion == "free-pro-team@latest" %}Para utilizar tu llave SSH con un repositorio que pertenezca a una organización que utiliza el inicio de sesión único de SAML, necesitarás autorizarla primero. Para obtener más información, consulta "[Autorizar una clave SSH para usar con una clave de organización único de SAML](/articles/authorizing-an-ssh-key-for-use-with-saml-single-sign-on)".{% endif %}

Te recomendamos que regularmente [revises tu listado de claves SSH](/articles/reviewing-your-ssh-keys) y revoques cualquiera que no sea válida o que se haya visto comprometida.

{% if currentVersion == "free-pro-team@latest" %}
Si no has utilizado tu llave SSH por un año, entonces
{% data variables.product.prodname_dotcom %} borrará automáticamente tu llave de SSH inactiva como precaución de seguridad. Para obtener más información, consulta "[Claves SSH eliminadas o faltantes](/articles/deleted-or-missing-ssh-keys)".
{% endif %}

Si eres miembro de una organización que provee certificados SSH, puedes usar tu certificado para acceder a los repositorios de esa organización sin agregar el certificado a tu cuenta de {% data variables.product.product_name %}. Para obtener más información, consulta [Acerca de las autoridades de certificación de SSH](/articles/about-ssh-certificate-authorities)".

### Leer más

- "[Comprobar claves SSH existentes](/articles/checking-for-existing-ssh-keys)"
- "[Probar tu conexión SSH](/articles/testing-your-ssh-connection)"
- Para obtener más información, consulta "[Trabajar con frases de contraseña de la clave SSH](/articles/working-with-ssh-key-passphrases)"
- "[Solucionar problemas de SSH](/articles/troubleshooting-ssh)"
{%- if currentVersion == "free-pro-team@latest" %}
- "[Autorizar una clave SSH para usar con el inicio de sesión único de SAML](/articles/authorizing-an-ssh-key-for-use-with-saml-single-sign-on)"
{%- endif %}
