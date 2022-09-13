---
title: Evitar acceso no autorizado
intro: 'Puedes ser alertado sobre un incidente de seguridad en los medios, como el descubrimiento del [error Heartbleed](http://heartbleed.com/), o pueden robar tu equipo mientras estás registrado en {% data variables.product.product_location %}. En dichos casos, cambiar tu contraseña previene cualquier acceso futuro no deseado a tu cuenta y a tus proyectos.'
redirect_from:
  - /articles/preventing-unauthorized-access
  - /github/authenticating-to-github/preventing-unauthorized-access
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/preventing-unauthorized-access
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Unauthorized access
ms.openlocfilehash: 2b7a29ad3df05ef758c82330f24fe7568e137130
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '145091819'
---
{% data variables.product.product_name %} requiere una contraseña para realizar acciones confidenciales, como agregar nuevas claves SSH, autorizar aplicaciones , o modificar miembros del equipo.

Después de cambiar tu contraseña, deberías realizar estas acciones para asegurarte que tu cuenta sea segura:

- [Habilite la autenticación en dos fases](/articles/about-two-factor-authentication) en la cuenta para que el acceso necesite más que una contraseña.
- [Revise las claves SSH](/articles/reviewing-your-ssh-keys), [implemente las claves](/articles/reviewing-your-deploy-keys) y las [integraciones autorizadas](/articles/reviewing-your-authorized-integrations), y revoque el acceso no autorizado o desconocido en la configuración de SSH y Aplicaciones.
{% ifversion fpt or ghec %}
- [Compruebe todas las direcciones de correo electrónico](/articles/verifying-your-email-address). Si un atacante agregó sus direcciones de correo electrónico a tu cuenta, esto puede permitirle forzar un restablecimiento de contraseña no deseado.
{% endif %}
- [Revise el registro de seguridad de la cuenta](/github/authenticating-to-github/reviewing-your-security-log). Esto brinda un resumen de varias configuraciones realizadas a tus repositorios. Por ejemplo, puedes asegurarte que no se convirtieron repositorios privados en públicos, o que no se transfirieron repositorios.
- [Revise los webhooks](/articles/creating-webhooks) en los repositorios. Los webhooks podrían permitir que un atacante intercepte cargas que hagas a tu repositorio.
- [Asegúrese de que no se han creado claves de implementación](/guides/managing-deploy-keys/#deploy-keys). Esto podría permitir que servidores externos accedan a tus proyectos.
- Revisar las confirmaciones de cambios recientes realizadas a tus repositorios.
- Revisar la lista de colaboradores de cada repositorio.
