---
title: Removing a collaborator from a repository security advisory
intro: 'When you remove a collaborator from a repository security advisory, they lose read and write access to the security advisory''s discussion and metadata.'
redirect_from:
  - /github/managing-security-vulnerabilities/removing-a-collaborator-from-a-security-advisory
  - /code-security/security-advisories/removing-a-collaborator-from-a-security-advisory
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Security advisories
  - Vulnerabilities
  - Collaboration
shortTitle: Eliminar colaboradores
---

Las personas con permisos administrativos en una asesoría de seguridad pueden eliminar a los colaboradores de la misma.

{% data reusables.security-advisory.repository-level-advisory-note %}

## Eliminar a un colaborador de una asesoría de seguridad

{% data reusables.repositories.security-advisory-collaborators-public-repositories %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-advisories %}
4. En el listado de "Asesorías de Seguridad", da clic sobre aquella en la que quieras eliminar a algún colaborador. ![Asesoría de seguridad en la lista](/assets/images/help/security/security-advisory-in-list.png)
5. En el lado derecho de la página, debajo de "Colaboradores", encuentra el nombre del usuario o equipo al que quieres eliminar de la asesoría de seguridad. ![Colaborador de la asesoría de seguridad](/assets/images/help/security/security-advisory-collaborator.png)
6. Al lado del colaborador que deseas eliminar, haz clic en el icono **X**. ![Icono X para eliminar al colaborador de la asesoría de seguridad](/assets/images/help/security/security-advisory-remove-collaborator-x.png)

## Leer más

- "[Permission levels for repository security advisories](/code-security/repository-security-advisories/permission-levels-for-repository-security-advisories)"
- "[Adding a collaborator to a repository security advisory](/code-security/repository-security-advisories/adding-a-collaborator-to-a-repository-security-advisory)"
