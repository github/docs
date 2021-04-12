---
title: Publicar una asesoría de seguridad
intro: Puedes publicar una asesoría de seguridad para alertar a tu comunidad sobre la vulnerabilidad de seguridad en tu proyecto.
redirect_from:
  - /articles/publishing-a-maintainer-security-advisory
  - /github/managing-security-vulnerabilities/publishing-a-maintainer-security-advisory
versions:
  free-pro-team: '*'
---

Cualquiera con permisos de administrador en una asesoría de seguridad puede publicarla.

### Prerrequisitos

Antes de que puedas publicar una asesoría de seguridad o solicitar un número de identificación de CVE, debes crear un borrador de asesoría de seguridad y proporcionar información acerca de las versiones de tu proyecto que se vieron afectadas por la vulnerabilidad de seguridad. Para obtener más información, consulta la sección "[Crear una asesoría de seguridad](/github/managing-security-vulnerabilities/creating-a-security-advisory)".

Si creaste una asesoría de seguridad pero no has proporcionado detalles sobre las versiones de tu proyecto que afectó la vulnerabilidad, puedes editarla. Para obtener más información, consulta la sección "[Editar una asesoría de seguridad](/github/managing-security-vulnerabilities/editing-a-security-advisory)".

### Acerca de publicar una asesoría de seguridad

Cuando publicas una asesoría de seguridad, notificas a tu comunidad acerca de la vulnerabilidad de seguridad que se dirige en dicha asesoría. El publicar una asesoría de seguridad facilita a tu comunidad el actualizar las dependencias de los paquetes y el investigar el impacto de la vulnerabilidad de seguridad.

{% data reusables.repositories.security-advisories-republishing %}

Antes de que publiques una asesoría de seguridad, puedes hacer una colaboración privada para arreglar la vulnerabilidad en una bifurcación privada. Para obtener más información, consulta "[Colaborar en una bifurcación privada temporaria para resolver una vulnerabilidad de seguridad](/articles/collaborating-in-a-temporary-private-fork-to-resolve-a-security-vulnerability)".

{% warning %}

**Warning**: Whenever possible, you should always add a fix version to a security advisory prior to publishing the advisory. If you don't, the advisory will be published without a fixed version, and {% data variables.product.prodname_dependabot %} will alert your users about the issue, without offering any safe version to update to.

We recommend you take the following steps in these different situations:

- If a fix version is imminently available, and you are able to, wait to disclose the issue when the fix is ready.
- If a fix version is in development but not yet available, mention this in the advisory, and edit the advisory later, after publication.
- If you are not planning to fix the issue, be clear about it in the advisory so that your users don't contact you to ask when a fix will be made. In this case, it is helpful to include steps users can take to mitigate the issue.

{% endwarning %}

Cuando publicas un borrador de asesoría desde un repositorio público, todos pueden ver:

- La versión actual de los datos de la asesoría.
- Cualquier asesoría atribuye que los usuarios acreditados han aceptado.

{% note %}

**Nota**: El público en general jamás tendrá acceso al historial de ediciones de la asesoría y solo verá la versión publicada.

{% endnote %}

Después de que publicas una asesoría de seguridad, la URL de la misa permanecerá tal como antes de publicarla. Cualquiera con acceso de lectura al repositorio puede verla. Los colaboradores de la asesoría de seguridad pueden seguir viendo las conversaciones pasadas, incluyendo el flujo completo de comentarios, en la asesoría de seguridad a menos de que alguien con permisos administrativos elimine al colaborador de la asesoría de seguridad.

Si necesitas actualizar o corregir información en una asesoría de seguridad que hayas publicado, puedes editarla. Para obtener más información, consulta la sección "[Editar una asesoría de seguridad](/github/managing-security-vulnerabilities/editing-a-security-advisory)".

### Pedir el número de identificación de CVE

Cualquiera con permisos de administrador en una asesoría de seguridad puede solicitar un número de identificación de CVE para la asesoría de seguridad.

{% data reusables.repositories.request-security-advisory-cve-id %} Para obtener más información, consulta la sección "[Acerca de las {% data variables.product.prodname_security_advisories %}](/github/managing-security-vulnerabilities/about-github-security-advisories#cve-identification-numbers)".

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-advisories %}
4. En el listado de "Asesorías de Seguridad", da clic en aquella para la cual quieras solicitar un número de identificación de CVE. ![Asesoría de seguridad en el listado](/assets/images/help/security/security-advisory-in-list.png)
5. Utiliza el menú desplegable de **Publicar asesoría** y da clic en **Solicitar CVE**. ![Solicitar un CVE en el menú desplegable](/assets/images/help/security/security-advisory-drop-down-request-cve.png)
6. Da clic en **Solicitar CVE**. ![Botón "Solicitar CVE"](/assets/images/help/security/security-advisory-request-cve-button.png)

### Publicar una asesoría de seguridad

El publicar una asesoría de seguridad borra la bifurcación temporal privada para la misma.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-advisories %}
4. En el listado de "Asesorías de Seguridad", da clic sobre la que quieras publicar. ![Asesoría de seguridad en el listado](/assets/images/help/security/security-advisory-in-list.png)
5. En la parte inferior de la página, da clic sobre **Publicar asesoría**. ![Botón para publicar aviso](/assets/images/help/security/publish-advisory-button.png)

### {% data variables.product.prodname_dependabot_alerts %} para las asesorías de seguridad publicadas

{% data reusables.repositories.github-reviews-security-advisories %}

### Leer más

- "[retirar una asesoría de seguridad](/github/managing-security-vulnerabilities/withdrawing-a-security-advisory)"
