---
title: Acerca de SSH
intro: 'Usando el protocolo SSH, te puedes conectar y autenticar con servicios y servidores remotos. Con las claves SSH, te puedes conectar con {% data variables.product.product_name %} sin suministrar tu nombre de usuario ni contraseña en cada visita.'
redirect_from:
  - /articles/about-ssh
  - /github/authenticating-to-github/about-ssh
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - SSH
---
Cuando configuras SSH, [generarás una clave SSH y la agregarás al ssh-agent](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) y luego [agregarás la clave a tu cuenta de {% data variables.product.product_name %}](/articles/adding-a-new-ssh-key-to-your-github-account). Al agregar la clave SSH al ssh-agent te aseguras de que tu clave SSH tiene una capa extra de seguridad mediante el uso de una frase de contraseña. Para obtener más información, consulta "[Trabajar con frases de contraseña de la clave SSH](/articles/working-with-ssh-key-passphrases)".

{% if currentVersion == "free-pro-team@latest" %}Para usar tu clave SSH con un repositorio propiedad de una organización que usa el inicio de sesión único de SAML, primero necesitarás autorizarla. Para obtener más información, consulta "[Autorizar una clave SSH para usar con una clave de organización único de SAML](/articles/authorizing-an-ssh-key-for-use-with-saml-single-sign-on)".{% endif %}

Te recomendamos que regularmente [revises tu listado de claves SSH](/articles/reviewing-your-ssh-keys) y revoques cualquiera que no sea válida o que se haya visto comprometida.

{% if currentVersion == "free-pro-team@latest" %}
Si no has usado tu clave SSH por un año, entonces {% data variables.product.prodname_dotcom %} automáticamente eliminará tu clave SSH inactiva, como medida de seguridad. Para obtener más información, consulta "[Claves SSH eliminadas o faltantes](/articles/deleted-or-missing-ssh-keys)".
{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %}
Si eres miembro de una organización que provee certificados SSH, puedes usar tu certificado para acceder a los repositorios de esa organización sin agregar el certificado a tu cuenta de {% data variables.product.product_name %}. Para obtener más información, consulta [Acerca de las autoridades de certificación de SSH](/articles/about-ssh-certificate-authorities)".
{% endif %}

### Leer más

- "[Comprobar claves SSH existentes](/articles/checking-for-existing-ssh-keys)"
- "[Probar tu conexión SSH](/articles/testing-your-ssh-connection)"
- Para obtener más información, consulta "[Trabajar con frases de contraseña de la clave SSH](/articles/working-with-ssh-key-passphrases)"
- "[Solucionar problemas de SSH](/articles/troubleshooting-ssh)"
{%- if currentVersion == "free-pro-team@latest" %}
- "[Autorizar una clave SSH para usar con el inicio de sesión único de SAML](/articles/authorizing-an-ssh-key-for-use-with-saml-single-sign-on)"
{%- endif %}
