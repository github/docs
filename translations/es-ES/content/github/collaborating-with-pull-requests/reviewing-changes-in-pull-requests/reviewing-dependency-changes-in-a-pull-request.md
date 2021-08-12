---
title: Revisar los cambios de las dependencias en una solicitud de cambios
intro: 'Si una solicitud de cambios contiene cambios a las dependencias, puedes ver un resumen de lo que ha cambiado y si es que existen vulnerabilidades conocidas en cualquiera de estas dependencias.'
versions:
  free-pro-team: '*'
type: how_to
topics:
  - Pull requests
  - Dependency review
  - Advanced Security
  - Vulnerabilities
  - Dependencies
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/reviewing-changes-in-pull-requests/reviewing-dependency-changes-in-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/reviewing-dependency-changes-in-a-pull-request
---

<!--Marketing-LINK: From /features/security/software-supply-chain page "Sign up for the dependency review beta" and "Reviewing dependency changes in a pull request".-->

{% note %}

**Nota:** Las revisiones de dependencias se encuentran actualmente en beta y están sujetas a cambios.

{% endnote %}

### Acerca de la revisión de dependencias

{% data reusables.dependency-review.feature-overview %}

La revisión de dependencias te permite "desplazarte a la izquierda". Puedes utilizar la información predictiva que se te proporciona para detectar dependencias vulnerables antes de que lleguen a tu ambiente productivo. Para obtener más información, consulta la sección "[Acerca de la revisión de dependencias](/code-security/supply-chain-security/about-dependency-review)".

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
