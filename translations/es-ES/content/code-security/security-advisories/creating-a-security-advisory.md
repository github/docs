---
title: Crear una asesoría de seguridad
intro: Puedes crear un borrador de asesoría de seguridad para debatir en privado y arreglar una vulnerabilidad de seguridad en tu proyecto de código abierto.
redirect_from:
  - /articles/creating-a-maintainer-security-advisory
  - /github/managing-security-vulnerabilities/creating-a-maintainer-security-advisory
  - /github/managing-security-vulnerabilities/creating-a-security-advisory
versions:
  free-pro-team: '*'
type: how_to
topics:
  - Security advisories
  - Vulnerabilities
---

Cualquier usuario con permisos de administrador puede crear un aviso de seguridad.

{% data reusables.security-advisory.security-researcher-cannot-create-advisory %}

### Crear una asesoría de seguridad

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-advisories %}
4. Da clic en **Nuevo borrador de asesoría de seguridad**. ![Botón Abrir aviso en borrador](/assets/images/help/security/security-advisory-new-draft-security-advisory-button.png)
5. Escribe un título para tu aviso de seguridad.
{% data reusables.repositories.security-advisory-edit-details %}
{% data reusables.repositories.security-advisory-edit-severity %}
{% data reusables.repositories.security-advisory-edit-cwe-cve %}
{% data reusables.repositories.security-advisory-edit-description %}
11. Haz clic en **Crear un borrador de asesoría de seguridad**. ![Botón para crear asesoría de seguridad](/assets/images/help/security/security-advisory-create-security-advisory-button.png)

### Pasos siguientes

- Comentar en el borrador de asesoría de seguridad para debatir sobre la vulnerabilidad con tu equipo.
- Añadir colaboradores a la asesoría de seguridad. Para obtener más información, consulta la sección "[Añadir un colaborador a la asesoría de seguridad](/github/managing-security-vulnerabilities/adding-a-collaborator-to-a-maintainer-security-advisory)".
- Colaborar en privado para solucionar la vulnerabilidad en una bifurcación privada temporaria. Para obtener más información, consulta "[Colaborar en una bifurcación privada temporaria para resolver una vulnerabilidad de seguridad](/github/managing-security-vulnerabilities/collaborating-in-a-temporary-private-fork-to-resolve-a-security-vulnerability)".
- Agregar individuos que deberían recibir crédito por contribuir con la asesoría de seguridad. Para obtener más información, consulta la sección "
Editar una asesoría de seguridad".</li> 
  
  - Publicar la asesoría de seguridad para notificar a tu comunidad sobre la vulnerabilidad de seguridad en cuestión. Para obtener más información, consulta la sección "[Publicar una asesoría de seguridad](/github/managing-security-vulnerabilities/publishing-a-security-advisory)".</ul>
