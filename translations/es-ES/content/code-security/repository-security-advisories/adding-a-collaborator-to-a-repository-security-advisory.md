---
title: Agregar un colaborador a una asesoría de seguridad de repositorio
intro: Puedes agregar otros usuarios o equipos para que colaboren contigo en un aviso de seguridad.
redirect_from:
  - /articles/adding-a-collaborator-to-a-maintainer-security-advisory
  - /github/managing-security-vulnerabilities/adding-a-collaborator-to-a-maintainer-security-advisory
  - /github/managing-security-vulnerabilities/adding-a-collaborator-to-a-security-advisory
  - /code-security/security-advisories/adding-a-collaborator-to-a-security-advisory
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Security advisories
  - Vulnerabilities
  - Collaboration
shortTitle: Agregar colaboradores
---

Las personas con permisos de administrador en una asesoría de seguridad pueden añadir colaboradores a la misma.

{% data reusables.security-advisory.repository-level-advisory-note %}

## Añadir un colaborador a una asesoría de seguridad

Los colaboradores tienen permisos de escritura para el aviso de seguridad. Para obtener más información, consulta la sección "[Niveles de permiso de las asesorías de seguridad de repositorio](/code-security/repository-security-advisories/permission-levels-for-repository-security-advisories)".

{% note %}

{% data reusables.repositories.security-advisory-collaborators-public-repositories %} Para obtener más información sobre cómo eliminar a un colaborador en una asesoría de seguridad, consulta la sección "[Eliminar a un colaborador de una asesoría de seguridad de un repositorio](/code-security/repository-security-advisories/removing-a-collaborator-from-a-repository-security-advisory)".

{% endnote %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-advisories %}
4. En la lista de "Asesorías de Seguridad", da clic en la asesoría a la cual quieras añadir un colaborador.
5. En la parte derecha de la página, debajo de "Colaboradores", teclea el nombre de usuario o equipo que quieras añadir a la asesoría de seguridad.![Campo para escribir el nombre del equipo o el usuario](/assets/images/help/security/add-collaborator-field.png)
6. Da clic en **Agregar**. ![Botón Add (Agregar)](/assets/images/help/security/security-advisory-add-collaborator-button.png)

## Leer más

- "[Niveles de servicio para las asesorías de seguridad de repositorio](/code-security/repository-security-advisories/permission-levels-for-repository-security-advisories)"
- "[Colaborar en una bifurcación privada temporal para resolver una vulnerabilidad de seguridad de repositorio](/code-security/repository-security-advisories/collaborating-in-a-temporary-private-fork-to-resolve-a-repository-security-vulnerability)"
- "[Eliminar a un colaborador de una asesoría de seguridad de repositorio](/code-security/repository-security-advisories/removing-a-collaborator-from-a-repository-security-advisory)".
