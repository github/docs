---
title: Paquetes
intro: 'Con la API del {% data variables.product.prodname_registry %}, puedes administrar paquetes para tus repositorios y organizaciones de {% data variables.product.prodname_dotcom %}.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
redirect_from:
  - /rest/reference/packages
ms.openlocfilehash: 5edb7e30b296626a53fdc41806bcfba88718e6b3
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147059926'
---
## Acerca de la API de {% data variables.product.prodname_registry %}

La API de {% data variables.product.prodname_registry %} te permite administrar paquetes utilizando la API de REST. Para obtener más información sobre cómo restaurar o eliminar paquetes, consulta "[Restauración y eliminación de paquetes](/packages/learn-github-packages/deleting-and-restoring-a-package)".

Para utilizar esta API, primero tienes que autenticarte utilizando un token de acceso personal. 
  - Para acceder a los metadatos del paquete, el token debe incluir el ámbito `read:packages`.
  - Para eliminar paquetes y versiones de paquete, el token debe incluir los ámbitos `read:packages` y `delete:packages`.
  - Para restaurar paquetes y versiones de paquete, el token debe incluir los ámbitos `read:packages` y `write:packages`.

Si `package_type` es `npm`, `maven`, `rubygems` o `nuget`, el token también debe incluir el ámbito `repo`, ya que el paquete hereda permisos de un repositorio de {% data variables.product.prodname_dotcom %}. Si el paquete está en {% data variables.product.prodname_container_registry %}, el valor `package_type` es `container` y el token no necesita el ámbito `repo` para acceder a `package_type` ni administrarlo. Los paquetes `container` ofrecen permisos pormenorizados independientes de un repositorio. Para más información, vea "[Acerca de los permisos para {% data variables.product.prodname_registry %}](/packages/learn-github-packages/about-permissions-for-github-packages#about-scopes-and-permissions-for-package-registries)".

Si quieres utilizar la API del {% data variables.product.prodname_registry %} para acceder a los recursos de una organización con el SSO habilitado, entonces debes habilitar el SSO para tu token de acceso personal. Para más información, vea "[Autorización de un token de acceso personal para usarlo con el inicio de sesión único de SAML](/github/authenticating-to-github/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on){% ifversion fpt %}" en la documentación de {% data variables.product.prodname_ghe_cloud %}.{% else %}".{% endif %}
