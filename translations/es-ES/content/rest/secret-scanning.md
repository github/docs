---
title: Análisis de secretos
intro: Utiliza la API de Análisis de secretos para recuperar y actualizar las alertas secretas de un repositorio.
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
redirect_from:
  - /rest/reference/secret-scanning
ms.openlocfilehash: d17aa63bb3d7e71adb310c66cabb05a83776b78f
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '147880128'
---
{% data reusables.secret-scanning.api-beta %}

## Acerca de Secret scanning API

La API de {% data variables.product.prodname_secret_scanning %} te permite lo siguiente:

- Habilitar o deshabilitar {% data variables.product.prodname_secret_scanning %}{% ifversion secret-scanning-push-protection %} e insertar protección{% endif %} para un repositorio. Para obtener más información, vea "[Repositorios](/rest/repos/repos#update-a-repository)" y expanda la sección "Properties of the `security_and_analysis` object" (Propiedades del objeto `security_and_analysis`) en la documentación de la API REST.
- Recupere y actualice las alertas de {% data variables.product.prodname_secret_scanning_GHAS %} de un repositorio. Para obtener más detalles, vea las secciones siguientes.

Para obtener más información sobre {% data variables.product.prodname_secret_scanning %}, vea "[Acerca de {% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/about-secret-scanning)."
