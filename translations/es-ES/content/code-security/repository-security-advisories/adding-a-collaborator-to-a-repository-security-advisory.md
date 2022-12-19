---
title: Incorporación de un colaborador a un aviso de seguridad de repositorio
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
shortTitle: Add collaborators
ms.openlocfilehash: 6fa4062fab8e4ffc59724ceb0ba3b6b536871df9
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: "147879428"
---
Las personas con permisos de administrador en una asesoría de seguridad pueden añadir colaboradores a la misma.

{% data reusables.security-advisory.repository-level-advisory-note %}

## Añadir un colaborador a una asesoría de seguridad

Los colaboradores tienen permisos de escritura para el aviso de seguridad. Para obtener más información, vea "[Niveles de permisos para avisos de seguridad del repositorio](/code-security/repository-security-advisories/permission-levels-for-repository-security-advisories)".

{% note %}

{% data reusables.repositories.security-advisory-collaborators-public-repositories %} Para obtener más información sobre cómo quitar un colaborador en un aviso de seguridad, vea "[Eliminación de un colaborador de un aviso de seguridad del repositorio](/code-security/repository-security-advisories/removing-a-collaborator-from-a-repository-security-advisory)".

{% endnote %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %} {% data reusables.repositories.sidebar-advisories %}
4. En la lista de "Asesorías de Seguridad", da clic en la asesoría a la cual quieras añadir un colaborador.
5. En la parte derecha de la página, debajo de "Colaboradores", teclea el nombre de usuario o equipo que quieras añadir a la asesoría de seguridad.
  ![Campo para escribir el nombre del equipo o el usuario](/assets/images/help/security/add-collaborator-field.png)
6. Haga clic en **Agregar**.
  ![Botón Agregar](/assets/images/help/security/security-advisory-add-collaborator-button.png)

## Información adicional

- "[Niveles de permiso para avisos de seguridad de repositorios](/code-security/repository-security-advisories/permission-levels-for-repository-security-advisories)"
- "[Colaboración en una bifurcación privada temporal para resolver una vulnerabilidad de seguridad del repositorio](/code-security/repository-security-advisories/collaborating-in-a-temporary-private-fork-to-resolve-a-repository-security-vulnerability)"
- "[Eliminación de un colaborador de un aviso de seguridad del repositorio](/code-security/repository-security-advisories/removing-a-collaborator-from-a-repository-security-advisory)".
