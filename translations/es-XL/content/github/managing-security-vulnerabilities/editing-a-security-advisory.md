---
title: Editar una asesoría de seguridad
intro: Puedes editar los metadatos y la descripción de una asesoría de seguridad si necesitas actualizar los detalles o corregir los errores en la misma.
versions:
  free-pro-team: '*'
---

Las personas con permisos de administrador en una asesoría de seguridad pueden editarla.

### Acerca de los créditos para las asesorías de seguridad

Puedes dar crédito a las personas que ayudaron a descubrir, reportar, o arreglar una vulnerabilidad de seguridad. Si le das crédito a alguien, ellos pueden elegir aceptarlo o declinarlo.

Si alguien acepta el crédito, el nombre de usuario de la persona aparecerá en la sección "Créditos" de la asesoría de seguridad. Cualquiera con acceso de lectura al repositorio puede ver la asesoría y las personas que aceptaron el crédito por ella.

### Editar una asesoría de seguridad

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-advisories %}
4. En el listado de "Asesorías de Seguridad", da clic en aquella que quieras editar.
5. In the upper-right corner of the details for the security advisory, click
{% octicon "pencil" aria-label="The edit icon" %}.
  ![Botón de editar para una asesoría de seguridad](/assets/images/help/security/security-advisory-edit-button.png)
{% data reusables.repositories.security-advisory-edit-details %}
{% data reusables.repositories.security-advisory-edit-description %}
8. Opcionalmente, puedes editar los "Créditos" para la asesoría de seguridad. ![Créditos para una asesoría de seguridad](/assets/images/help/security/security-advisory-credits.png)
9. Da clic en **Actualizar asesoría de seguridad**". ![Botón Add (Agregar)](/assets/images/help/security/update-advisory-button.png)
10. Las personas listadas en la sección de "Créditos" recibirán una notificación web o por correo electrónico que los invita a aceptar el crédito. Si la persona acepta, su nombre de usuario estará visible al público una vez que la asesoría de seguridad se publique.

### Leer más

- "[retirar una asesoría de seguridad](/github/managing-security-vulnerabilities/withdrawing-a-security-advisory)"
