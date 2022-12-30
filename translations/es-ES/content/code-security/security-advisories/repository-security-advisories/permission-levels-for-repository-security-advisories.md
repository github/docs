---
title: Niveles de permiso para avisos de seguridad de repositorios
intro: Las acciones que puedes tomar en una asesoría de seguridad de repositorio dependen de si tienes permisos de administrador o de escritura en esta.
redirect_from:
  - /articles/permission-levels-for-maintainer-security-advisories
  - /github/managing-security-vulnerabilities/permission-levels-for-maintainer-security-advisories
  - /github/managing-security-vulnerabilities/permission-levels-for-security-advisories
  - /code-security/security-advisories/permission-levels-for-security-advisories
  - /code-security/repository-security-advisories/permission-levels-for-repository-security-advisories
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Security advisories
  - Vulnerabilities
  - Permissions
shortTitle: Permission levels
ms.openlocfilehash: f4195822de121780f1629fda3d646170d4c4e566
ms.sourcegitcommit: 27882d9b3f19979c817c25952a2fb4dc4c6f0a65
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/27/2022
ms.locfileid: '148114134'
---
Este artículo solo se aplica a los avisos de seguridad de nivel de repositorio. Cualquiera puede contribuir a los avisos de seguridad globales en {% data variables.product.prodname_advisory_database %} en [github.com/advisories](https://github.com/advisories). Las ediciones a las asesorías globales no cambiarán ni afectarán la forma en la que se muestra la asesoría en el repositorio.  Para más información, vea "[Edición de avisos de seguridad en {% data variables.product.prodname_advisory_database %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/editing-security-advisories-in-the-github-advisory-database)".

## Introducción sobre los permisos

{% data reusables.repositories.security-advisory-admin-permissions %} Para más información sobre cómo agregar un colaborador a un aviso de seguridad, vea "[Adición de un colaborador a un aviso de seguridad de repositorio](/code-security/repository-security-advisories/adding-a-collaborator-to-a-repository-security-advisory)".

Acción | Permisos de escritura | Permisos de administrador |
------ | ----------------- | ----------------- |
Ver un borrador de asesoría de seguridad | x | x |
Agregar colaboradores al aviso de seguridad (vea "[Adición de un colaborador a un aviso de seguridad de repositorio](/code-security/repository-security-advisories/adding-a-collaborator-to-a-repository-security-advisory)") | | x |
Editar y borrar cualquier comentario en la asesoría de seguridad | x | x |
Crear una bifurcación privada temporal en el aviso de seguridad (vea "[Colaboración en una bifurcación privada temporal para resolver una vulnerabilidad de seguridad del repositorio](/code-security/repository-security-advisories/collaborating-in-a-temporary-private-fork-to-resolve-a-repository-security-vulnerability)") | | x |
Agregar cambios a una bifurcación privada temporal en el aviso de seguridad (vea "[Colaboración en una bifurcación privada temporal para resolver una vulnerabilidad de seguridad del repositorio](/code-security/repository-security-advisories/collaborating-in-a-temporary-private-fork-to-resolve-a-repository-security-vulnerability)") | x | x |
Crear solicitudes de incorporación de cambios en una bifurcación privada temporal (vea "[Colaboración en una bifurcación privada temporal para resolver una vulnerabilidad de seguridad del repositorio](/code-security/repository-security-advisories/collaborating-in-a-temporary-private-fork-to-resolve-a-repository-security-vulnerability)") | x | x |
Combinar cambios en el aviso de seguridad (vea "[Colaboración en una bifurcación privada temporal para resolver una vulnerabilidad de seguridad del repositorio](/code-security/repository-security-advisories/collaborating-in-a-temporary-private-fork-to-resolve-a-repository-security-vulnerability)") | | x |
Agregar y editar metadatos en el aviso de seguridad (vea "[Publicación de un aviso de seguridad de repositorio](/code-security/repository-security-advisories/publishing-a-repository-security-advisory)") | x | x |
Agregar y quitar créditos en el aviso de seguridad (vea "[Edición de un aviso de seguridad de repositorio](/code-security/repository-security-advisories/editing-a-repository-security-advisory)") | x | x |
Cerrar el borrador de la asesoría de seguridad | | x |
Publicar el aviso de seguridad (vea "[Publicación de un aviso de seguridad de repositorio](/code-security/repository-security-advisories/publishing-a-repository-security-advisory)") | | x |

## Información adicional

- "[Adición de un colaborador a un aviso de seguridad de repositorio](/code-security/repository-security-advisories/adding-a-collaborator-to-a-repository-security-advisory)"
- "[Colaboración en una bifurcación privada temporal para resolver una vulnerabilidad de seguridad del repositorio](/code-security/repository-security-advisories/collaborating-in-a-temporary-private-fork-to-resolve-a-repository-security-vulnerability)"
- "[Eliminación de un colaborador de un aviso de seguridad del repositorio](/code-security/repository-security-advisories/removing-a-collaborator-from-a-repository-security-advisory)"
- "[Retirada de un aviso de seguridad de repositorio](/code-security/repository-security-advisories/withdrawing-a-repository-security-advisory)"
