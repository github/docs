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

Before you can publish a security advisory or request a CVE identification number, you must create a draft security advisory and provide information about the versions of your project affected by the security vulnerability. Para obtener más información, consulta la sección "[Crear una asesoría de seguridad](/github/managing-security-vulnerabilities/creating-a-security-advisory)".

Si creaste una asesoría de seguridad pero no has proporcionado detalles sobre las versiones de tu proyecto que afectó la vulnerabilidad, puedes editarla. Para obtener más información, consulta la sección "[Editar una asesoría de seguridad](/github/managing-security-vulnerabilities/editing-a-security-advisory)".

### Acerca de publicar una asesoría de seguridad

When you publish a security advisory, you notify your community about the security vulnerability that the security advisory addresses. Publishing a security advisory makes it easier for your community to update package dependencies and research the impact of the security vulnerability.

{% data reusables.repositories.security-advisories-republishing %}

Before you publish a security advisory, you can privately collaborate to fix the vulnerability in a temporary private fork. Para obtener más información, consulta "[Colaborar en una bifurcación privada temporaria para resolver una vulnerabilidad de seguridad](/articles/collaborating-in-a-temporary-private-fork-to-resolve-a-security-vulnerability)".

Cuando publicas un borrador de asesoría desde un repositorio público, todos pueden ver:

- La versión actual de los datos de la asesoría.
- Cualquier asesoría atribuye que los usuarios acreditados han aceptado.

{% note %}

**Nota**: El público en general jamás tendrá acceso al historial de ediciones de la asesoría y solo verá la versión publicada.

{% endnote %}

Después de que publicas una asesoría de seguridad, la URL de la misa permanecerá tal como antes de publicarla. Cualquiera con acceso de lectura al repositorio puede verla. Los colaboradores de la asesoría de seguridad pueden seguir viendo las conversaciones pasadas, incluyendo el flujo completo de comentarios, en la asesoría de seguridad a menos de que alguien con permisos administrativos elimine al colaborador de la asesoría de seguridad.

Si necesitas actualizar o corregir información en una asesoría de seguridad que hayas publicado, puedes editarla. Para obtener más información, consulta la sección "[Editar una asesoría de seguridad](/github/managing-security-vulnerabilities/editing-a-security-advisory)".

### Pedir el número de identificación de CVE

Anyone with admin permissions to a security advisory can request a CVE identification number for the security advisory.

{% data reusables.repositories.request-security-advisory-cve-id %} For more information, see "[About {% data variables.product.prodname_security_advisories %}](/github/managing-security-vulnerabilities/about-github-security-advisories#cve-identification-numbers)."

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-advisories %}
4. En el listado de "Asesorías de Seguridad", da clic en aquella para la cual quieras solicitar un número de identificación de CVE. ![Asesoría de seguridad en la lista](/assets/images/help/security/security-advisory-in-list.png)
5. Utiliza el menú desplegable de **Publicar asesoría** y da clic en **Solicitar CVE**. ![Solicitar un CVE en el menú desplegable](/assets/images/help/security/security-advisory-drop-down-request-cve.png)
6. Da clic en **Solicitar CVE**. ![Botón "Solicitar CVE"](/assets/images/help/security/security-advisory-request-cve-button.png)

### Publicar una asesoría de seguridad

Publishing a security advisory deletes the temporary private fork for the security advisory.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-advisories %}
4. En el listado de "Asesorías de Seguridad", da clic sobre la que quieras publicar. ![Asesoría de seguridad en la lista](/assets/images/help/security/security-advisory-in-list.png)
5. En la parte inferior de la página, da clic sobre **Publicar asesoría**. ![Botón para publicar aviso](/assets/images/help/security/publish-advisory-button.png)

### {% data variables.product.prodname_dependabot_alerts %} para las asesorías de seguridad publicadas

{% data reusables.repositories.github-reviews-security-advisories %}

### Leer más

- "[retirar una asesoría de seguridad](/github/managing-security-vulnerabilities/withdrawing-a-security-advisory)"
