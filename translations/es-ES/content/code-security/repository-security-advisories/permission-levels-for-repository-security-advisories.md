---
title: Niveles de permiso para las asesorías de seguridad de los repositorios
intro: Las acciones que puedes tomar en una asesoría de seguridad de un repositorio dependen de si tienes permisos de escritura o administración para ella.
redirect_from:
  - /articles/permission-levels-for-maintainer-security-advisories
  - /github/managing-security-vulnerabilities/permission-levels-for-maintainer-security-advisories
  - /github/managing-security-vulnerabilities/permission-levels-for-security-advisories
  - /code-security/security-advisories/permission-levels-for-security-advisories
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Security advisories
  - Vulnerabilities
  - Permissions
shortTitle: Niveles de permiso
---

Este artículo solo aplica a las asesorías de seguridad a nivel de repositorio. Cualquiera puede contribuir con las asesorías de seguridad global en la {% data variables.product.prodname_advisory_database %} que se ubica en [github.com/advisories](https://github.com/advisories). Las ediciones a las asesorías globales no cambiarán ni afectarán la forma en la que se muestra la asesoría en el repositorio.  Para obtener más información, consulta la sección "[Editar las asesorías de seguridad en la {% data variables.product.prodname_advisory_database %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/editing-security-advisories-in-the-github-advisory-database)".

## Resumen de permisos

{% data reusables.repositories.security-advisory-admin-permissions %} Para obtener más información sobre cómo añadir un colaborador a una asesoría de seguridad, consulta la sección "[Añadir un colaborador a una asesoría de seguridad de un repositorio](/code-security/repository-security-advisories/adding-a-collaborator-to-a-repository-security-advisory)".

| Acción                                                                                                                                                                                                                                                                                                                                                        | Permisos de escritura | Permisos de administrador |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- | ------------------------- |
| Ver un borrador de asesoría de seguridad                                                                                                                                                                                                                                                                                                                      | X                     | X                         |
| Añadir colaboradores a la asesoría de seguridad (consulta la sección "[Añadir un colaborador a una asesoría de seguridad de un repositorio](/code-security/repository-security-advisories/adding-a-collaborator-to-a-repository-security-advisory)")                                                                                                          |                       | X                         |
| Editar y borrar cualquier comentario en la asesoría de seguridad                                                                                                                                                                                                                                                                                              | X                     | X                         |
| Crear una bifurcación privada temporal en la asesoría de seguridad (consulta la sección "[Colaborar en una bifurcación privada temporal para resolver una vulnerabilidad de seguridad de un repositorio](/code-security/repository-security-advisories/collaborating-in-a-temporary-private-fork-to-resolve-a-repository-security-vulnerability))             |                       | X                         |
| Añadir cambios a una bifurcación privada temporal en la asesoría de seguridad (consulta la sección "[Colaborar en una bifurcación privada temporal para resolver una vulnerabilidad de seguridad de un repositorio](/code-security/repository-security-advisories/collaborating-in-a-temporary-private-fork-to-resolve-a-repository-security-vulnerability)") | X                     | X                         |
| Crear solicitudes de extracción en una bifurcación privada temporaria (consulta "[Colaborar en una bifurcación privada temporaria para resolver una vulnerabilidad de seguridad de un repositorio](/code-security/repository-security-advisories/collaborating-in-a-temporary-private-fork-to-resolve-a-repository-security-vulnerability)")                  | X                     | X                         |
| Fusionar cambios en la asesoría de seguridad (consulta la sección "[Colaborar en una bifurcación privada temporal para resolver una vulnerabilidad de seguridad de un repositorio](/code-security/repository-security-advisories/collaborating-in-a-temporary-private-fork-to-resolve-a-repository-security-vulnerability)")                                  |                       | X                         |
| Añadir y editar los metadatos de la asesoría de seguridad (consulta la sección "[Publicar una asesoría de seguridad de un repositorio](/code-security/repository-security-advisories/publishing-a-repository-security-advisory)")                                                                                                                             | X                     | X                         |
| Agrega y elimina los créditos para una asesoría de seguridad (consulta "[Editar una asesoría de seguridad de un repositorio](/code-security/repository-security-advisories/editing-a-repository-security-advisory)")                                                                                                                                          | X                     | X                         |
| Cerrar el borrador de la asesoría de seguridad                                                                                                                                                                                                                                                                                                                |                       | X                         |
| Publicar la asesoría de seguridad (consulta la sección "[Publicar una asesoría de seguridad de un repositorio](/code-security/repository-security-advisories/publishing-a-repository-security-advisory)")                                                                                                                                                     |                       | X                         |

## Leer más

- "[Agregar un colaborador a una asesoría de seguridad de un repositorio](/code-security/repository-security-advisories/adding-a-collaborator-to-a-repository-security-advisory)"
- "[Colaborar en una bifurcación privada temporal para resolver una vulnerabilidad de seguridad de repositorio](/code-security/repository-security-advisories/collaborating-in-a-temporary-private-fork-to-resolve-a-repository-security-vulnerability)"
- "[Eliminar a un colaborador de una asesoría de seguridad de un repositorio](/code-security/repository-security-advisories/removing-a-collaborator-from-a-repository-security-advisory)"
- "[Retirar una asesoría de seguridad de repositorio](/code-security/repository-security-advisories/withdrawing-a-repository-security-advisory)"
