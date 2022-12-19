---
title: Acerca del uso de tus datos de GitHub
redirect_from:
  - /articles/about-github-s-use-of-your-data
  - /articles/about-githubs-use-of-your-data
  - /github/understanding-how-github-uses-and-protects-your-data/about-githubs-use-of-your-data
intro: '{% data variables.product.product_name %} usa los datos de tu repositorio para conectarte con información, proyectos, personas y herramientas relevantes.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Policy
  - Legal
shortTitle: GitHub's use of your data
ms.openlocfilehash: f49f90a981b92d2c7d5d34b0fac28ec05adbadd0
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '145135643'
---
## Acerca de como {% data variables.product.product_name %} utiliza tus datos

{% data variables.product.product_name %} agrega metadatos y analiza patrones de contenidos con el fin de suministrar información generalizada dentro del producto. Usa datos de los repositorios públicos y también usa metadatos y agrega datos de repositorios privados cuando el propietario de un repositorio ha elegido compartir los datos con {% data variables.product.product_name %} habilitando el gráfico de dependencias. Si habilita el gráfico de dependencias para un repositorio privado, {% data variables.product.product_name %} realizará un análisis de solo lectura de ese repositorio privado específico.

Si habilita el uso de datos para un repositorio privado, continuaremos tratando los datos privados, el código fuente o los secretos comerciales como confidenciales y privados, manteniendo la coherencia con nuestros [Términos del Servicio](/free-pro-team@latest/github/site-policy/github-terms-of-service). La información que obtenemos viene solo de los datos agregados. Para obtener más información, vea "[Administración de la configuración de uso de datos para el repositorio privado](/get-started/privacy-on-github/managing-data-use-settings-for-your-private-repository)".

{% data reusables.repositories.about-github-archive-program %} Para más información, vea "[Acerca del archivado de contenido y datos en {% data variables.product.prodname_dotcom %}](/github/creating-cloning-and-archiving-repositories/about-archiving-content-and-data-on-github#about-the-github-archive-program)".

{% data reusables.user-settings.export-data %} Para obtener más información, vea "[Solicitud de un archivo de los datos de su cuenta personal](/articles/requesting-an-archive-of-your-personal-account-s-data)".

Anunciaremos importantes características nuevas que usan metadatos o datos agregados en el [blog de {% data variables.product.prodname_dotcom %}](https://github.com/blog).

## Cómo mejoran los datos las recomendaciones de seguridad

Como ejemplo de cómo deberían usarse tus datos, podemos detectar y alertarte sobre una vulnerabilidad de seguridad en las dependencias de tu repositorio público. Para más información, vea "[Acerca de {% data variables.product.prodname_dependabot_alerts %}](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)".

Para detectar posibles vulnerabilidades de seguridad {% data variables.product.product_name %} escanea los contenidos del archivo de manifiesto de dependencias para hacer una lista de las dependencias de tu proyecto.

{% data variables.product.product_name %} también aprende de los cambios que realizas en tu manifiesto de dependencias. Por ejemplo, si actualizas una dependencia vulnerable a una versión segura después de recibir una alerta de seguridad y otros hacen lo mismo, {% data variables.product.product_name %} aprende cómo hacer un parche en la vulnerabiidad y puede recomendar un parche similar para el repositorio afectado.

## Privacidad y uso compartido de datos

Los datos del repositorio privado se escanean mediante una máquina y nunca es leído por el personal de {% data variables.product.product_name %}. El ojo humano nunca verá el contenido de los repositorios privados, a excepción de lo que se describe en nuestros [Términos del servicio](/free-pro-team@latest/github/site-policy/github-terms-of-service#3-access).

Tus datos personales individuales o del repositorio no se compartirán con terceros. Podemos compartir datos agregados obtenidos de nuestro análisis con nuestros socios.
