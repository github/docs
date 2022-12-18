---
title: Paquetes
intro: 'Usa la API de REST para interactuar con {% data variables.product.prodname_registry %}.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
redirect_from:
  - /rest/reference/packages
ms.openlocfilehash: a40709d8c51e445fb815c78eadbdb7886b5d60db
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192829'
---
## Acerca de {% data variables.product.prodname_registry %}

Puedes usar la API de REST para administrar paquetes en los repositorios y organizaciones de {% data variables.product.prodname_dotcom %}. Para obtener más información, consulta "[Restauración y eliminación de paquetes](/packages/learn-github-packages/deleting-and-restoring-a-package)".

Para usar la API de REST para administrar {% data variables.product.prodname_registry %}, debes autenticarte mediante un {% data variables.product.pat_v1 %}.
  - Para acceder a los metadatos del paquete, el token debe incluir el ámbito `read:packages`.
  - Para eliminar paquetes y versiones de paquete, el token debe incluir los ámbitos `read:packages` y `delete:packages`.
  - Para restaurar paquetes y versiones de paquete, el token debe incluir los ámbitos `read:packages` y `write:packages`.

Si el paquete está en un registro que admite permisos detallados, el token no necesita el ámbito `repo` para acceder a este paquete ni administrarlo. Si el paquete está en un registro que solo admite permisos del ámbito del repositorio, el token también debe incluir el ámbito `repo`, ya que el paquete hereda permisos de un repositorio de {% data variables.product.prodname_dotcom %}. Para obtener una lista de los registros que solo admiten permisos del ámbito del repositorio, consulta "[Acerca de los permisos de {% data variables.product.prodname_registry %}](/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)".

Para acceder a los recursos de una organización con el inicio de sesión único habilitado, debes habilitar el inicio de sesión único para {% data variables.product.pat_v1 %}. Para obtener más información, consulta "[Autorización de un {% data variables.product.pat_generic %} para usarlo con el inicio de sesión único de SAML](/github/authenticating-to-github/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on){% ifversion fpt %}" en la documentación de {% data variables.product.prodname_ghe_cloud %}.{% else %}."{% endif %}
