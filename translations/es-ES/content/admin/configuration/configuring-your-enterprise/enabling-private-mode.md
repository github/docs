---
title: Habilitar el modo privado
intro: 'En el modo privado, {% data variables.product.prodname_ghe_server %} exige que todos los usuarios inicien sesión para acceder a la instalación.'
redirect_from:
  - /enterprise/admin/articles/private-mode
  - /enterprise/admin/guides/installation/security
  - /enterprise/admin/guides/installation/securing-your-instance
  - /enterprise/admin/installation/enabling-private-mode
  - /enterprise/admin/configuration/enabling-private-mode
  - /admin/configuration/enabling-private-mode
versions:
  ghes: '*'
type: how_to
topics:
  - Access management
  - Authentication
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Networking
  - Privacy
  - Security
ms.openlocfilehash: 99488886b1da5b07c2ddb5d7054c10957f6c573b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '146332788'
---
Debe habilitar el modo privado si {% data variables.product.product_location %} es de acceso público por internet. En el modo privado, los usuarios no pueden clonar repositorios de forma anónima sobre `git://`. Si también está habilitada la autenticación incorporada, un administrador debe invitar a los nuevos usuarios para que creen una cuenta en la instancia. Para obtener más información, consulta "[Configuración de la autenticación integrada](/admin/identity-and-access-management/using-built-in-authentication/configuring-built-in-authentication)".

{% data reusables.enterprise_installation.image-urls-viewable-warning %}

Con el modo privado habilitado, puede permitir que las operaciones de Git sin autenticación (y cualquiera con acceso de red a {% data variables.product.product_location %}) lean un código de repositorio público de su instancia con acceso de lectura anónimo de Git habilitado. Para obtener más información, consulte "[Permitir que los administradores habiliten el acceso de lectura anónimo de Git a repositorios públicos](/enterprise/admin/guides/user-management/allowing-admins-to-enable-anonymous-git-read-access-to-public-repositories)".

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.privacy %}
4. Seleccione **Private mode**.
  ![Casilla para habilitar el modo privado](/assets/images/enterprise/management-console/private-mode-checkbox.png) {% data reusables.enterprise_management_console.save-settings %}
