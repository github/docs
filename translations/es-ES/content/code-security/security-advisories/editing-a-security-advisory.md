---
title: Editar una asesoría de seguridad
intro: Puedes editar los metadatos y la descripción de una asesoría de seguridad si necesitas actualizar los detalles o corregir los errores en la misma.
redirect_from:
  - /github/managing-security-vulnerabilities/editing-a-security-advisory
versions:
  free-pro-team: '*'
topics:
  - Security
---

Las personas con permisos de administrador en una asesoría de seguridad pueden editarla.

### Acerca de los créditos para las asesorías de seguridad

Puedes dar crédito a las personas que ayudaron a descubrir, reportar, o arreglar una vulnerabilidad de seguridad. Si le das crédito a alguien, ellos pueden elegir aceptarlo o declinarlo.

Si alguien acepta el crédito, el nombre de usuario de la persona aparecerá en la sección "Créditos" de la asesoría de seguridad. Cualquiera con acceso de lectura al repositorio puede ver la asesoría y las personas que aceptaron el crédito por ella.

If you believe you should be credited for a security advisory, please contact the person who created the advisory and ask them to edit the advisory to include your credit. Only the creator of the advisory can credit you, so please don't contact GitHub Support about credits for security advisories.

### Editar una asesoría de seguridad

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-advisories %}
4. En el listado de "Asesorías de Seguridad", da clic en aquella que quieras editar.
5. En la esquina superior derecha de los detalles para la asesoría de seguridad, da clic en {% octicon "pencil" aria-label="The edit icon" %}. ![Botón de editar para una asesoría de seguridad](/assets/images/help/security/security-advisory-edit-button.png)
{% data reusables.repositories.security-advisory-edit-details %}
{% data reusables.repositories.security-advisory-edit-severity %}
{% data reusables.repositories.security-advisory-edit-cwe-cve %}
{% data reusables.repositories.security-advisory-edit-description %}
11. Opcionalmente, puedes editar los "Créditos" para la asesoría de seguridad. ![Créditos para una asesoría de seguridad](/assets/images/help/security/security-advisory-credits.png)
12. Da clic en **Actualizar asesoría de seguridad**". ![Botón Add (Agregar)](/assets/images/help/security/update-advisory-button.png)
13. Las personas listadas en la sección de "Créditos" recibirán una notificación web o por correo electrónico que los invita a aceptar el crédito. Si la persona acepta, su nombre de usuario estará visible al público una vez que la asesoría de seguridad se publique.

### Leer más

- "[retirar una asesoría de seguridad](/github/managing-security-vulnerabilities/withdrawing-a-security-advisory)"
