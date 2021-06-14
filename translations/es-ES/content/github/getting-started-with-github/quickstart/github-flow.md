---
title: Flujo de GitHub
intro: 'Sigue el flujo de {% data variables.product.prodname_dotcom %} para colaborar en los proyectos.'
redirect_from:
  - /articles/creating-and-editing-files-in-your-repository/
  - /articles/github-flow-in-the-browser/
  - /articles/github-flow
  - /github/collaborating-with-issues-and-pull-requests/github-flow
  - /github/getting-started-with-github/github-flow
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
  - Fundamentals
miniTocMaxHeadingLevel: 4
---

### Introducción

El flujo de {% data variables.product.prodname_dotcom %} es un flujo de trabajo ligero basado en ramas. El flujo de {% data variables.product.prodname_dotcom %} es útil para todos, no solo para los desarrolladores. Por ejemplo, en {% data variables.product.prodname_dotcom %} utilizamos el flujo de {% data variables.product.prodname_dotcom %} para nuestra [política de sitio](https://github.com/github/site-policy), [documentación](https://github.com/github/docs) e [itinerario](https://github.com/github/roadmap).

### Prerrequisitos

Para seguir el flujo de {% data variables.product.prodname_dotcom %}, necesitarás una cuenta de {% data variables.product.prodname_dotcom %} y un repositorio. Para obtener más información sobre cómo crear una cuenta, consulta la sección "[Registrarse para {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/signing-up-for-github)". Para obtener más información sobre cómo crear un repositorio, consulta la sección "[Crear un repositorio](/github/getting-started-with-github/create-a-repo)".{% if currentVersion == "free-pro-team@latest" %} Para obtener más información sobre cómo encontrar un repositorio existente en el cual contribuir, consulta la sección "[Encontrar formas para contribuir al código abierto en {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/finding-ways-to-contribute-to-open-source-on-github)".{% endif %}

### Seguir el flujo de {% data variables.product.prodname_dotcom %}

{% tip %}

{% if currentVersion == "free-pro-team@latest" %}
**Tip:** Puedes completar todos los pasos del flujo de {% data variables.product.prodname_dotcom %} mediante la interface web de {% data variables.product.prodname_dotcom %}, la línea de comandos y el [{% data variables.product.prodname_cli %}](https://cli.github.com), o por [{% data variables.product.prodname_desktop %}](/desktop).
{% else %}
**Tip:** Puedes completar todos los pasos del flujo de {% data variables.product.prodname_dotcom %} a través de la interface web de {% data variables.product.prodname_dotcom %} o a través de la línea de comandos y el [{% data variables.product.prodname_cli %}](https://cli.github.com).
{% endif %}

{% endtip %}

#### Crear una rama

  Crear una rama en tu repositorio. Un nombre de rama corto y descriptivo permite que tus colaboradores vean el trabajo contínuo de un vistazo. Por ejemplo, `increase-test-timeout` o `add-code-of-conduct`. Para obtener más información, consulta "[Crear y eliminar ramas dentro de tu repositorio](/github/collaborating-with-issues-and-pull-requests/creating-and-deleting-branches-within-your-repository)".

  Si creas una rama, creas un espacio para trabajar sin afectar a la rama predeterminada. Adicionalmente, otorgas a los colaboradores una oportunidad de revisar tu trabajo.

#### Hacer cambios

En tu rama, haz cualquier cambio que quieras en el repositorio. Para obtener más información, consulta las secciones "[Crear archivos nuevos](/articles/creating-new-files)", "[Editar archivos](/articles/editing-files)", "[Renombrar un archivo](/articles/renaming-a-file)", "[Migrar un archivo a una ubicación nueva](/articles/moving-a-file-to-a-new-location)" o "[Borrar archivos en un repositorio](/github/managing-files-in-a-repository/deleting-files-in-a-repository)".

Tu rama es un lugar seguro para hacer cambios. Si cometes un error, peudes revertir tus cambios o subir cambios adicionales para arreglar el error. Tus cambios no terminrán en la rama predeterminada hasta que fusiones tu rama.

Confirmar y subir tus cambios a tu rama. Dale un mensaje descriptivo a cada confirmación para ayudarte a ti mismo y a tus contribuyentes futuros a entender qué cambios contienen dichas confirmaciones. Por ejemplo, `fix typo` o `increase rate limit`.

Idealmente, cada confirmación contiene un cambio completo y aislado. Esto facilita que reviertas tus cambios si decides adoptar otro enfoque. Por ejemplo, si quieres renombrar una variable y agregar algunas pruebas, pon el nuevo nombre de la variable en una confirmación y las pruebas en otra. Posteriormente, si quieres mantener las pruebas pero quieres revertir el renombramiento de variable, puedes revertir la confirmación específica que contenía dicho renombramiento. Si pones el renombre de variable y las pruebas en la misma confirmación o si propagas el renombre de variable a través de varias confirmaciones, harías más esfuerzo en revertir tus cambios.

Si confirmas y subes tus cambios, respaldas tu trabajo en un almacenamiento remoto. Esto significa que puedes acceder a tu trabajo desde cualquier dispositivo. Esto también significa que tus colaboradores pueden ver tu trabajo, responder tus preguntas y hacer sugerencias o contribuciones.

Sigue haciando, confirmando y subiendo cambios a tu rama hasta que estés listo para solicitar retroalimentación.

{% tip %}

**Tip:** Haz una rama separada para cada conjunto de cambios no relacionados. Esto facilita a los revisores dar retroalimentación. También te facilita tanto a ti mismo como alos colaboradores futuros entender los cambios y revertir o compilar sobre ellos. Adicionalmente, si hay un retraso en un conjunto de cambios, tus otros cambios tampoco se retrasarán.

{% endtip %}

#### Crear una solicitud de extracción

Crea una solicitud de cambios para pedir a los colaboradores retroalimentación sobre ellos. La revisión de solicitude sde cambios es tan valiosa que algunos repositorios requieren una revisión aprobatoria antes de que estas se puedan fusionar. Si quieres tener retroalimentación o consejos tempranos antes de que completes tus cambios, peudes marcar tu solicitud de cambios como borrador. Para obtener más información, consulta "[Crear una solicitud de extracción](/articles/creating-a-pull-request)".

Cuando creas una solicitud de cambios, incluye un resumen de estos, así como la explicación del problema que solucionan. Puedes incluir imágenes, enlaces y tablas para ayudar a transmitir esta información. Si tu solicitud de cambios aborda un problema, vincula la propuesta para que los interesados en ella estén conscientes de la solicitud de cambios y viceversa. Si la enlazas con una palabra clave, la propuesta se cerrará automáticamente cuando se fusione la solicitud de cambios. Para obtener más información, consulta las secciones "[Sintaxis de formato y escritura básica](/github/writing-on-github/basic-writing-and-formatting-syntax)" y "[Enlazar una solicitud de cambios a una propuesta](/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue)".

![cuerpo de la solicitud de cambios](/assets/images/help/pull_requests/pull-request-body.png)

Adicionalmente a llenar el cuerpo de la solicitud de cambios, puedes agregar comentarios a las líneas específicas de la solicitud de cambios para señalar algo explícitamente para los revisores.

![comentario de la solicitud de cambios](/assets/images/help/pull_requests/pull-request-comment.png)

Tu repositorio podría estar configurado para solicitar una revisión de usuarios o equipos específicos automáticamente cuando se crea una solicitud de cambios. También puedes @mencionar manualmente o solicitar una revisión de personas o equipos específicos.

Si tu repositorio tiene verificaciones configuradas para que se ejecuten en las solicitudes de cambios, verás cualquier verificación que falló en tu solicitud de cambios. Esto te ayuda a detectar errores antes de fusionar tu rama. Para obtener más información, consulta "[Acerca de las verificaciones de estado ](/github/collaborating-with-issues-and-pull-requests/about-status-checks)".

#### Abordar comentarios de revisión

Los revisores deben dejar preguntas, comentarios y sugerencias. Los revisores pueden comentar en toda la solicitud de cambios o agregar comentarios en líneas específicas. Tanto tú como los revisores pueden insertar imágenes o sugerencias de código para clarificar los comentarios. Para obtener más información, consulta la sección "[Revisar los cambios en una sollicitud de cambios](/github/collaborating-with-issues-and-pull-requests/reviewing-changes-in-pull-requests)".

Puedes seguir confirmando y subiendo cambios como respuesta a las revisiones. Tu solicitud de extracción se actualizará de manera automática.

#### Fusiona tu solicitud de cambios

Una vez que se apruebe tu solicitud de cambios, fusiónala. Esto fusionará tu rama automáticamente para que tus cambios aparezcan en la rama predeterminada. {% data variables.product.prodname_dotcom %} retiene el historial de comentarios y confirmaciones en la solicitud de cambios para ayudar a los contribuyentes futuros a entender tus cambios. Para obtener más información, consulta "[Fusionar una solicitud de extracción](/articles/merging-a-pull-request)".

{% data variables.product.prodname_dotcom %} te dirá si tu solicitud de cambios tiene conflictos que se deban resolver antes de fusionarse. Para obtener más información, consulta "[Abordar conflictos de fusión](/github/collaborating-with-issues-and-pull-requests/addressing-merge-conflicts)."

La configuación de protección de rama podría bloquear la fusión si tu solicitud de cambios no cumple con algunos de los requisitos. Por ejemplo, necesitas cierto número de revisiones de aprobación o una revisión de aprobación de algún equipo específico. Para obtener más información, consulta"[Acerca de las ramas protegidas](/github/administering-a-repository/about-protected-branches)".

#### Borra tu rama

Después de que fusiones tu solicitud de cambios, borra tu rama. Esto indica que se ha completado el trabajo en la rama y te previene tanto a tí como a otras personas de que utilices ramas antiguas por acidente. Para obtener más información, consulta la sección "[Borrar y restaurar ramas en una solicitud de extracción](/github/administering-a-repository/deleting-and-restoring-branches-in-a-pull-request)."

No te preocupes por perder la información. No se borrará tu solicitud de cambios ni tu historial de confirmación. Siempre puedes restablecer la rama que borraste o revertir tu solicitud de cambios en caso de que lo necesites.
