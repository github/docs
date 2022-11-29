---
title: Flujo de GitHub
intro: 'Sigue el flujo de {% data variables.product.prodname_dotcom %} para colaborar en los proyectos.'
redirect_from:
  - /articles/creating-and-editing-files-in-your-repository
  - /articles/github-flow-in-the-browser
  - /articles/github-flow
  - /github/collaborating-with-issues-and-pull-requests/github-flow
  - /github/getting-started-with-github/github-flow
  - /github/getting-started-with-github/quickstart/github-flow
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
  - Fundamentals
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 5458d7b14ff59bf7059f093ee47ee92034b9319f
ms.sourcegitcommit: 505b84dc7227e8a5d518a71eb5c7eaa65b38ce0e
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/09/2022
ms.locfileid: '147879295'
---
## Introducción

El flujo de {% data variables.product.prodname_dotcom %} es un flujo de trabajo ligero basado en ramas. El flujo de {% data variables.product.prodname_dotcom %} es útil para todos, no solo para los desarrolladores. Por ejemplo, en {% data variables.product.prodname_dotcom %}, se usa el flujo de {% data variables.product.prodname_dotcom %} para la [directiva del sitio](https://github.com/github/site-policy), la [documentación](https://github.com/github/docs) y la [hoja de ruta](https://github.com/github/roadmap).

## Prerrequisitos

Para seguir el flujo de {% data variables.product.prodname_dotcom %}, necesitarás una cuenta de {% data variables.product.prodname_dotcom %} y un repositorio. Para obtener información sobre cómo crear una cuenta, vea "[Registro para {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/signing-up-for-github)". Para obtener información sobre cómo crear un repositorio, vea "[Creación de un repositorio](/github/getting-started-with-github/create-a-repo)".{% ifversion fpt or ghec %} Para obtener información sobre cómo buscar un repositorio existente al que contribuir, vea "[Búsqueda de formas de contribuir al código abierto en {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/finding-ways-to-contribute-to-open-source-on-github)".{% endif %}

## Seguir el flujo de {% data variables.product.prodname_dotcom %}

{% tip %}

{% ifversion fpt or ghec %} **Sugerencia:** Puede completar todos los pasos del flujo de {% data variables.product.prodname_dotcom %} desde la interfaz web de {% data variables.product.prodname_dotcom %}, la línea de comandos y [{% data variables.product.prodname_cli %}](https://cli.github.com) o [{% data variables.product.prodname_desktop %}](/free-pro-team@latest/desktop).
{% else %} **Sugerencia:** Puede completar todos los pasos del flujo de {% data variables.product.prodname_dotcom %} desde la interfaz web de {% data variables.product.prodname_dotcom %}, o bien desde la línea de comandos y [{% data variables.product.prodname_cli %}](https://cli.github.com).
{% endif %}

{% endtip %}

### Crear una rama

  Crear una rama en tu repositorio. Un nombre de rama corto y descriptivo permite que tus colaboradores vean el trabajo contínuo de un vistazo. Por ejemplo, `increase-test-timeout` o `add-code-of-conduct`. Para más información, vea "[Creación y eliminación de ramas dentro del repositorio](/github/collaborating-with-issues-and-pull-requests/creating-and-deleting-branches-within-your-repository)".

  Si creas una rama, creas un espacio para trabajar sin afectar a la rama predeterminada. Adicionalmente, otorgas a los colaboradores una oportunidad de revisar tu trabajo.

### Realización de cambios

En tu rama, haz cualquier cambio que quieras en el repositorio. Para más información, vea "[Creación de archivos](/articles/creating-new-files)", "[Edición de archivos](/articles/editing-files)", "[Cambio del nombre de un archivo](/articles/renaming-a-file)", "[Traslado de un archivo a una nueva ubicación](/articles/moving-a-file-to-a-new-location)" o "[Eliminación de archivos en un repositorio](/github/managing-files-in-a-repository/deleting-files-in-a-repository)".

Tu rama es un lugar seguro para hacer cambios. Si cometes un error, peudes revertir tus cambios o subir cambios adicionales para arreglar el error. Tus cambios no terminrán en la rama predeterminada hasta que fusiones tu rama.

Confirmar y subir tus cambios a tu rama. Dale un mensaje descriptivo a cada confirmación para ayudarte a ti mismo y a tus contribuyentes futuros a entender qué cambios contienen dichas confirmaciones. Por ejemplo, `fix typo` o `increase rate limit`.

Idealmente, cada confirmación contiene un cambio completo y aislado. Esto facilita que reviertas tus cambios si decides adoptar otro enfoque. Por ejemplo, si quieres renombrar una variable y agregar algunas pruebas, pon el nuevo nombre de la variable en una confirmación y las pruebas en otra. Posteriormente, si quieres mantener las pruebas pero quieres revertir el renombramiento de variable, puedes revertir la confirmación específica que contenía dicho renombramiento. Si pones el renombre de variable y las pruebas en la misma confirmación o si propagas el renombre de variable a través de varias confirmaciones, harías más esfuerzo en revertir tus cambios.

Si confirmas y subes tus cambios, respaldas tu trabajo en un almacenamiento remoto. Esto significa que puedes acceder a tu trabajo desde cualquier dispositivo. Esto también significa que tus colaboradores pueden ver tu trabajo, responder tus preguntas y hacer sugerencias o contribuciones.

Sigue haciando, confirmando y subiendo cambios a tu rama hasta que estés listo para solicitar retroalimentación.

{% tip %}

**Sugerencia:** Cree una rama independiente para cada conjunto de cambios no relacionados. Esto facilita a los revisores dar retroalimentación. También te facilita tanto a ti mismo como alos colaboradores futuros entender los cambios y revertir o compilar sobre ellos. Adicionalmente, si hay un retraso en un conjunto de cambios, tus otros cambios tampoco se retrasarán.

{% endtip %}

### Creación de una solicitud de incorporación de cambios

Crea una solicitud de cambios para pedir a los colaboradores retroalimentación sobre ellos. La revisión de solicitude sde cambios es tan valiosa que algunos repositorios requieren una revisión aprobatoria antes de que estas se puedan fusionar. Si quieres tener retroalimentación o consejos tempranos antes de que completes tus cambios, peudes marcar tu solicitud de cambios como borrador. Para más información, vea "[Creación de una solicitud de incorporación de cambios](/articles/creating-a-pull-request)".

Cuando creas una solicitud de cambios, incluye un resumen de estos, así como la explicación del problema que solucionan. Puedes incluir imágenes, enlaces y tablas para ayudar a transmitir esta información. Si tu solicitud de cambios aborda un problema, vincula la propuesta para que los interesados en ella estén conscientes de la solicitud de cambios y viceversa. Si la enlazas con una palabra clave, la propuesta se cerrará automáticamente cuando se fusione la solicitud de cambios. Para más información, vea "[Sintaxis básica de escritura y formato](/github/writing-on-github/basic-writing-and-formatting-syntax)" y "[Vinculación de una solicitud de incorporación de cambios a una incidencia](/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue)".

![cuerpo de la solicitud de cambios](/assets/images/help/pull_requests/pull-request-body.png)

Adicionalmente a llenar el cuerpo de la solicitud de cambios, puedes agregar comentarios a las líneas específicas de la solicitud de cambios para señalar algo explícitamente para los revisores.

![comentario de la solicitud de cambios](/assets/images/help/pull_requests/pull-request-comment.png)

Tu repositorio podría estar configurado para solicitar una revisión de usuarios o equipos específicos automáticamente cuando se crea una solicitud de cambios. También puede @mention manualmente o solicitar una revisión de personas o equipos específicos.

Si tu repositorio tiene verificaciones configuradas para que se ejecuten en las solicitudes de cambios, verás cualquier verificación que falló en tu solicitud de cambios. Esto te ayuda a detectar errores antes de fusionar tu rama. Para más información, vea "[Acerca de las comprobaciones de estado](/github/collaborating-with-issues-and-pull-requests/about-status-checks)".

### Abordar comentarios de revisión

Los revisores deben dejar preguntas, comentarios y sugerencias. Los revisores pueden comentar en toda la solicitud de cambios o agregar comentarios en líneas específicas. Tanto tú como los revisores pueden insertar imágenes o sugerencias de código para clarificar los comentarios. Para más información, vea "[Revisión de los cambios en las solicitudes de incorporación de cambios](/github/collaborating-with-issues-and-pull-requests/reviewing-changes-in-pull-requests)".

Puedes seguir confirmando y subiendo cambios como respuesta a las revisiones. Tu solicitud de extracción se actualizará de manera automática.

### Fusiona tu solicitud de cambios

Una vez que se apruebe tu solicitud de cambios, fusiónala. Esto fusionará tu rama automáticamente para que tus cambios aparezcan en la rama predeterminada. {% data variables.product.prodname_dotcom %} retiene el historial de comentarios y confirmaciones en la solicitud de cambios para ayudar a los contribuyentes futuros a entender tus cambios. Para más información, vea "[Combinación de una solicitud de incorporación de cambios](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request)".

{% data variables.product.prodname_dotcom %} te dirá si tu solicitud de cambios tiene conflictos que se deban resolver antes de fusionarse. Para más información, vea "[Solución de conflictos de combinación](/github/collaborating-with-issues-and-pull-requests/addressing-merge-conflicts)".

La configuación de protección de rama podría bloquear la fusión si tu solicitud de cambios no cumple con algunos de los requisitos. Por ejemplo, necesitas cierto número de revisiones de aprobación o una revisión de aprobación de algún equipo específico. Para más información, vea "[Acerca de las ramas protegidas](/github/administering-a-repository/about-protected-branches)".

### Borra tu rama

Después de que fusiones tu solicitud de cambios, borra tu rama. Esto indica que se ha completado el trabajo en la rama y te previene tanto a tí como a otras personas de que utilices ramas antiguas por acidente. Para más información, vea "[Eliminación y restauración de ramas en una solicitud de incorporación de cambios](/github/administering-a-repository/deleting-and-restoring-branches-in-a-pull-request)".

No te preocupes por perder la información. No se borrará tu solicitud de cambios ni tu historial de confirmación. Siempre puedes restablecer la rama que borraste o revertir tu solicitud de cambios en caso de que lo necesites.
