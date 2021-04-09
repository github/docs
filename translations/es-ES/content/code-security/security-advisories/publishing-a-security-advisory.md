---
title: Publicar una asesoría de seguridad
intro: Puedes publicar una asesoría de seguridad para alertar a tu comunidad sobre la vulnerabilidad de seguridad en tu proyecto.
redirect_from:
  - /articles/publishing-a-maintainer-security-advisory
  - /github/managing-security-vulnerabilities/publishing-a-maintainer-security-advisory
  - /github/managing-security-vulnerabilities/publishing-a-security-advisory
versions:
  free-pro-team: '*'
topics:
  - seguridad
---

<!--Marketing-LINK: From /features/security/software-supply-chain page "Publishing a security advisory".-->

Cualquiera con permisos de administrador en una asesoría de seguridad puede publicarla.

### Prerrequisitos

Antes de que puedas publicar una asesoría de seguridad o solicitar un número de identificación de CVE, debes crear un borrador de asesoría de seguridad y proporcionar información acerca de las versiones de tu proyecto que se vieron afectadas por la vulnerabilidad de seguridad. Para obtener más información, consulta la sección "[Crear una asesoría de seguridad](/github/managing-security-vulnerabilities/creating-a-security-advisory)".

Si creaste una asesoría de seguridad pero no has proporcionado detalles sobre las versiones de tu proyecto que afectó la vulnerabilidad, puedes editarla. Para obtener más información, consulta la sección "[Editar una asesoría de seguridad](/github/managing-security-vulnerabilities/editing-a-security-advisory)".

### Acerca de publicar una asesoría de seguridad

Cuando publicas una asesoría de seguridad, notificas a tu comunidad acerca de la vulnerabilidad de seguridad que se dirige en dicha asesoría. El publicar una asesoría de seguridad facilita a tu comunidad el actualizar las dependencias de los paquetes y el investigar el impacto de la vulnerabilidad de seguridad.

{% data reusables.repositories.security-advisories-republishing %}

Antes de que publiques una asesoría de seguridad, puedes hacer una colaboración privada para arreglar la vulnerabilidad en una bifurcación privada. Para obtener más información, consulta "[Colaborar en una bifurcación privada temporaria para resolver una vulnerabilidad de seguridad](/articles/collaborating-in-a-temporary-private-fork-to-resolve-a-security-vulnerability)".

{% warning %}

**Advertencia**: En medida de lo posible, siempre deberás agregar una versión corregida a una asesoría de seguridad antes de publicarla. Si no lo haces, la asesoría se publicará sin una versión corregida y el {% data variables.product.prodname_dependabot %} alertará a tus usuarios sobre este problema sin ofrecer una versión segura para actualizarse.

Te recomendamos seguir estos pasos en estas situaciones:

- Si una versión corregida está disponible inminentemente y puedes hacerlo, espera para divulgar el problema cuando la corrección ya esté lista.
- Si aún se está desarrollando una versión corregida y no se encuentra disponible, menciónalo en la asesoría y edítala después de publicarla.
- Si no planeas corregir el problema, aclara esto en la asesoría para que tus usuarios no te contacten para preguntar cuándo crearás la corrección. En este caso, es útil incluir pasos que puedan seguir los usuarios para mitigar el problema.

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
