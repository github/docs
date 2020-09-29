---
title: Evitar el acceso no autorizado
intro: 'Puedes ser alertado sobre un incidente de seguridad en los medios, como el descubrimiento de [Heartbleed bug](http://heartbleed.com/), o pueden robar tu computadora mientras estás registrado en {% data variables.product.product_location %}. En dichos casos, cambiar tu contraseña previene cualquier acceso futuro no deseado a tu cuenta y a tus proyectos.'
redirect_from:
  - /articles/preventing-unauthorized-access
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% data variables.product.product_name %} requiere una contraseña para realizar acciones confidenciales, como agregar nuevas claves SSH, autorizar aplicaciones , o modificar miembros del equipo.

Después de cambiar tu contraseña, deberías realizar estas acciones para asegurarte que tu cuenta sea segura:

- [Habilitar una autenticación de dos factores](/articles/about-two-factor-authentication) en tu cuenta para que el acceso requiera más de una contraseña.
- [Revisar tus claves SSH](/articles/reviewing-your-ssh-keys), [llaves de implementación](/articles/reviewing-your-deploy-keys), e [integraciones autorizadas](/articles/reviewing-your-authorized-integrations) y revocar el acceso no autorizado o desconocido en tus configuraciones de SSH y de Aplicaciones.
{% if currentVersion == "free-pro-team@latest" %}
- [Verificar todas tus direcciones de correo electrónico](/articles/verifying-your-email-address). Si un atacante agregó sus direcciones de correo electrónico a tu cuenta, esto puede permitirle forzar un restablecimiento de contraseña no deseado.
{% endif %}
- [Revisar el registro de seguridad de tu cuenta](/github/authenticating-to-github/reviewing-your-security-log). Esto brinda un resumen de varias configuraciones realizadas a tus repositorios. Por ejemplo, puedes asegurarte que no se convirtieron repositorios privados en públicos, o que no se transfirieron repositorios.
- [Revisa los webhooks](/articles/creating-webhooks) en tus repositorios. Los webhooks podrían permitir que un atacante intercepte cargas que hagas a tu repositorio.
- [Asegurarte que no se hayan creado nuevas llaves de implementación](/guides/managing-deploy-keys/#deploy-keys). Esto podría permitir que servidores externos accedan a tus proyectos.
- Revisar las confirmaciones de cambios recientes realizadas a tus repositorios.
- Revisar la lista de colaboradores de cada repositorio.
