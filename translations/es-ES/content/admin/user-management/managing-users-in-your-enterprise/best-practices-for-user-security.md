---
title: Las mejores prácticas para la seguridad del usuario
intro: '{% ifversion ghes %}Fuera de las medidas de seguridad a nivel de instancia (SSL, aislamiento de subdominios, configurar un firewall) que puede implementar un administrador de sitio, hay {% else %}Hay {% endif %}pasos que tus usuarios pueden llevar a cabo para ayudarte a proteger tu empresa.'
redirect_from:
  - /enterprise/admin/user-management/best-practices-for-user-security
  - /admin/user-management/best-practices-for-user-security
versions:
  ghes: '*'
  ghae: '*'
type: reference
topics:
  - Enterprise
  - Security
  - User account
shortTitle: User security best practices
ms.openlocfilehash: 57d19d97a8944ac20d6b90794bcf0cda63fc5bd0
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '146331660'
---
{% ifversion ghes %}
## Activar autenticación de dos factores

La autenticación de dos factores (2FA) es una manera de iniciar sesión en sitios web y servicios que requieren de un segundo factor además de una contraseña para la autenticación. En el caso de {% data variables.product.prodname_ghe_server %}, este segundo factor es un código de autenticación de un solo uso generado por una aplicación en el smartphone de un usuario. Te recomendamos que le solicites a tus usuarios activar la autenticación de dos factores en sus cuentas. Con la autenticación de dos factores, tanto la contraseña del usuario como su smartphone deben verse comprometidos para permitir que la propia cuenta se vea comprometida.

Para obtener más información sobre cómo configurar la autenticación en dos fases, consulte "[Acerca de la autenticación en dos fases](/enterprise/user/articles/about-two-factor-authentication)".
{% endif %}

## Solicitar un administrador de contraseñas

Se recomienda encarecidamente que los usuarios instalen y usen un administrador de contraseñas, como [LastPass](https://lastpass.com/) o [1Password](https://1password.com/), en cualquier equipo que usen para conectarse a su empresa. Esto garantiza que las contraseñas sean más seguras y que sea menos probable que se vean comprometidas o sean robadas.

## Restringir el acceso a equipos y repositorios

Para limitar la posible superficie expuesta a ataques en el caso de una vulneración de la seguridad, te recomendamos que se le de a los usuarios acceso solo a los equipos y los repositorios que realmente necesiten para realizar su trabajo. Ya que los miembros con rol de propietario pueden acceder a todos los equipos y los repositorios en la organización, te recomendamos que este equipo sea lo más pequeño posible.

Para obtener más información sobre cómo configurar equipos y permisos de equipo, consulte "[Roles en una organización](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)".
