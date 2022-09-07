---
title: Editar una asesoría de seguridad de un repositorio
intro: Puedes editar los metadatos y la descripción de una asesoría de seguridad de un repositorio si necesitas actualizar los detalles o corregir los errores en la misma.
redirect_from:
  - /github/managing-security-vulnerabilities/editing-a-security-advisory
  - /code-security/security-advisories/editing-a-security-advisory
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Security advisories
  - Vulnerabilities
shortTitle: Editar las asesorías de los repositorios
---

Las personas con permisos de administrador en una asesoría de seguridad de un repositorio pueden editarla.

{% data reusables.security-advisory.repository-level-advisory-note %}

## Acerca de los créditos para las asesorías de seguridad

Puedes dar crédito a las personas que ayudaron a descubrir, reportar, o arreglar una vulnerabilidad de seguridad. Si le das crédito a alguien, ellos pueden elegir aceptarlo o declinarlo.

Si alguien acepta el crédito, el nombre de usuario de la persona aparecerá en la sección "Créditos" de la asesoría de seguridad. Cualquiera con acceso de lectura al repositorio puede ver la asesoría y las personas que aceptaron el crédito por ella.

Si crees que se te debería dar crédito por alguna asesoría de seguridad, por favor, contacta a la persona que la creó y pídele que edite la asesoría para incluir tu crédito. Solo el creador de la asesoría te puede dar crédito, asi que, por favor, no contactes al Soporte de GitHub pidiendo crédito para alguna asesoría de seguridad.

## Editar una asesoría de seguridad

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
12. Da clic en **Actualizar asesoría de seguridad**". ![Botón de "Actualizar asesoría de seguridad" button](/assets/images/help/security/update-advisory-button.png)
13. Las personas listadas en la sección de "Créditos" recibirán una notificación web o por correo electrónico que los invita a aceptar el crédito. Si la persona acepta, su nombre de usuario estará visible al público una vez que la asesoría de seguridad se publique.

## Leer más

- "[Retirar una asesoría de seguridad de repositorio](/code-security/repository-security-advisories/withdrawing-a-repository-security-advisory)"
