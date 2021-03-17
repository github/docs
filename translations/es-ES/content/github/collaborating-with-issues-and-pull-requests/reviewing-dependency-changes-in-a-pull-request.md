---
title: Revisar los cambios de las dependencias en una solicitud de cambios
intro: 'Si una solicitud de cambios contiene cambios a las dependencias, puedes ver un resumen de lo que ha cambiado y si es que existen vulnerabilidades conocidas en cualquiera de estas dependencias.'
versions:
  free-pro-team: '*'
---

{% note %}

**Nota:** Las revisiones de dependencias se encuentran actualmente en beta y están sujetas a cambios.

{% endnote %}

### Acerca de la revisión de dependencias

Si una solicitud de cambios apunta a la rama predeterminada de tu repositorio y contiene cambios a los archivos de bloqueo o de manifiesto empaquetados, puedes mostrar una revisión de dependencias para ver qué ha cambiado. La revisión de dependencias incluye detalles de los cambios a las dependencias indirectas en los archivos de bloqueo, y te dice si cualquiera de las dependencias que se agregaron o actualizaron contienen vulnerabilidades conocidas.

La revisión de dependencias se encuentra disponible en:

* Todos los repositorios públicos.
* Los repositorios privados que pertenecen a las organizaciones con una licencia de {% data variables.product.prodname_advanced_security %} que tengan la gráfica dependencias habilitada. Para obtener más información, consulta la sección "[Explorar las dependencias de un repositorio](/github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository#enabling-and-disabling-the-dependency-graph-for-a-private-repository)".

Algunas veces puede que solo quieras actualizar la versión de una dependencia en un manifiesto y generar una solicitud de cambios. Sin embargo, si la versión actualizada de esta dependencia directa también tiene dependencias actualizadas, tu solicitud de cambios podría tener más cambios de lo que esperas. La revisión de dependencias para cada archivo de bloqueo y de manifiesto proporciona un aforma sencilla para ver lo que ha cambiado y te deja saber si cualquiera de las versiones nuevas de las dependencias contienen vulnerabilidades conocidas.

Cuando verificas las revisiones de dependencias en una solicitud de cambios y cambias cualquier dependencia que se marque como vulnerable, puedes evitar que las vulnerabilidades se agreguen a tu proyecto. Las {% data variables.product.prodname_dependabot_alerts %} encontrarán vulnerabilidades que ya existan en tus dependencias, pero es mucho mejor evitar introducir problemas potenciales que arreglarlos en el futuro. Para obtener más informació acera de las {% data variables.product.prodname_dependabot_alerts %}, consulta la sección "[Acerca de las alertas para las dependencias vulnerables](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies#dependabot-alerts-for-vulnerable-dependencies)".

La revisión de dependencias es compatible con los mismos lenguajes de programación y ecosistemas de administración de paquetes que la gráfica de dependencias. Para obtener más información, consulta la sección "[Acerca de la gráfica de dependencias](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#supported-package-ecosystems)".

### Revisar las dependencias en una solicitud de cambios

{% data reusables.repositories.sidebar-pr %}
{% data reusables.repositories.choose-pr-review %}
{% data reusables.repositories.changed-files %}

1. Si la solicitud de cambios contiene muchos archivos, utiliza el menú desplegable de **Filtro de archivos** para que colapse todos los archivos que no registran dependencias. Esto facilitará que te enfoques en tu revisión de cambios a las dependencias.

   ![El menú de filtro de archivo](/assets/images/help/pull_requests/file-filter-menu-json.png)

1. A la derecha del encabezado de un archivo de bloqueo o de manifiesto, muestra la revisión de dependencias dando clic en el botón de diff enriquecido **{% octicon "file" aria-label="The rich diff icon" %}**.

   ![El botón de diff rica](/assets/images/help/pull_requests/dependency-review-rich-diff.png)

  {% note %}

   **Nota:** La revisión de dependencias proporciona una vista más clara de lo que ha cambiado en los archivos de bloqueo grandes, donde la diff origen no se representa predeterminadamente.

   {% endnote %}

1. Verifica las dependencias que se listan en la revisión de dependencias.

   ![Alertas de vulnerabilidades en una revisión de dependencias](/assets/images/help/pull_requests/dependency-review-vulnerability.png)

   Cualquier dependencia que se cambie o agregue y que tenga vulnerabilidades se listará primero, se organizará por severidad y luego por nombre de dependencia. Esto significa que la severidad de dependencias más alta siempre se encontrará en la parte superior de la revisión de dependencias. El resto de las dependencias se lista por orden alfabético de acuerdo con el nombre de la dependencia.

   El icono a un costado de cada dependencia indica si ésta se agregó (<span style="color:#22863a">{% octicon "diff-added" aria-label="Dependency added icon" %}</span>), actualizó (<span style="color:#b08800">{% octicon "diff-modified" aria-label="Dependency modified icon" %}</span>), o eliminó (<span style="color:#cb2431">{% octicon "diff-removed" aria-label="Dependency removed icon" %}</span>) en esta solicitud de cambios.

   El resto de la información incluye:

   * La versión o rango de versiones de la dependencia nueva, actualizada o borrada.
   * Para el caso de las versiones específicas de una dependencia:
      * La antigüedad del lanzamiento de la dependencia.
      * La cantidad de proyectos que dependen de este software. Esta información se toma de la gráfica de dependencias. Verificar la cantidad de dependientes que pueden ayudarte a evitar el agregar accidentalmente la dependencia incorrecta.
      * La licencia que utiliza esta dependencia si es que esta información se encuentra disponible. Esto es útil si quieres evitar el código que utilice licencias específicas, el cual utilizas en tu proyecto.

   Cuando una dependencia tiene una vulnerabilidad conocida, el mensaje de advertencia incluye:

   * Una descripción breve de la vulnerabilidad.
   * Un archivo de Vulnerabilidades y Exposiciones Comunes (CVE) o un número de identificación (GHSA) de {% data variables.product.prodname_security_advisories %}. Puedes dar clic en esta ID para conocer más sobre la vulnerabilidad.
   * La severidad de la vulnerabilidad.
   * La versión de la dependencia en la cual se arregló la vulnerabilidad. Si estás revisando una solicitud de cambios para alguien, puedes pedir al contribuyente que actualice la dependencia a la versión parchada o a un lanzamiento más reciente.

{% data reusables.repositories.return-to-source-diff %}
