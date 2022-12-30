---
ms.openlocfilehash: 9e47cc05dec3bbdef729dfc6a06eff8056dd9502
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: "145122081"
---
### Empaquetado en flujos de trabajo de integración continua

Un paso de empaquetado es una parte común de un flujo de trabajo de integración continua o entrega continua. Crear un paquete al final de un flujo de trabajo de integración continua puede ayudar durante las revisiones de código en una solicitud de extracción.

Después de construir y probar tu código, un paso de empaquetado puede generar un artefacto ejecutable o desplegable. Según el tipo de aplicación que estás construyendo, este paquete se puede descargar de forma local para pruebas manuales, disponible para que los usuarios los descarguen o se implementen en un entorno de ensayo o producción.

Por ejemplo, un flujo de trabajo de integración continua para un proyecto de Java puede ejecutar `mvn package` para generar un archivo JAR. O un flujo de trabajo de CI para una aplicación Node.js puede crear un contenedor Docker.

Ahora, cuando revises una solicitud de extracción, podrás ver la ejecución del flujo de trabajo y descargar el artefacto que se produjo.

![Menú desplegable Descargar artefacto](/assets/images/help/repository/artifact-drop-down-updated.png)

Esto te permitirá ejecutar el código en la solicitud de extracción en tu máquina, lo que puede ayudar con la depuración o la prueba de la solicitud de extracción.

### Flujos de trabajo para publicar paquetes

Además de cargar artefactos de empaquetado para las pruebas en un flujo de trabajo de integración continua, puedes crear flujos de trabajo que construyan tu proyecto y publiquen paquetes en un registro de paquete.

* **Publicación de paquetes en {% data variables.product.prodname_registry %}**  
  El {% data variables.product.prodname_registry %} puede actuar como un servicio de hospedaje para paquetes para varios tipos de éstos. Puedes elegir compartir tus paquetes con todos los {% data variables.product.prodname_dotcom %}, o paquetes privados para compartir con los colaboradores o una organización. Para más información, vea "[Introducción a los paquetes de GitHub](/packages/learn-github-packages/introduction-to-github-packages)".

  Es posible que desees publicar paquetes para el {% data variables.product.prodname_registry %} en cada subida a la rama predeterminada. Esto permitirá que los desarrolladores de tu proyecto siempre puedan ejecutar y probar la última compilación de la rama predeterminada fácilmente, si la instalan desde el {% data variables.product.prodname_registry %}.

* **Publicación de paquetes en un registro de paquetes**  
  En muchos proyectos, la publicación en un registro de paquetes se realiza cada vez que se publica una nueva versión de un proyecto. Por ejemplo, un proyecto que produce un archivo JAR puede cargar nuevos lanzamientos en el repositorio central de Maven. O bien, un proyecto de .NET puede generar un paquete NuGet y cargarlo en la galería de NuGet.

  Puedes automatizar esto creando un flujo de trabajo que publique paquetes en un registro de paquetes en cada creación de lanzamiento. Para más información, vea "[Creación de versiones](/github/administering-a-repository/creating-releases)".
