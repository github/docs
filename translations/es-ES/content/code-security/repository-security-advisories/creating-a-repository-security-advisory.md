---
title: Creación de un aviso de seguridad de repositorio
intro: Puedes crear un borrador de asesoría de seguridad para debatir en privado y arreglar una vulnerabilidad de seguridad en tu proyecto de código abierto.
redirect_from:
- /articles/creating-a-maintainer-security-advisory
- /github/managing-security-vulnerabilities/creating-a-maintainer-security-advisory
- /github/managing-security-vulnerabilities/creating-a-security-advisory
- /code-security/security-advisories/creating-a-security-advisory
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
- Security advisories
- Vulnerabilities
shortTitle: Create repository advisories
ms.openlocfilehash: d4b47f84b20873e97b18106448b768288fff3039
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: "145119394"
---
Cualquier usuario con permisos de administrador puede crear un aviso de seguridad.

{% data reusables.security-advisory.security-researcher-cannot-create-advisory %}

## Creación de un aviso de seguridad

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %} {% data reusables.repositories.sidebar-advisories %}
4. Haga clic en **New draft security advisory**.
  ![Botón Open draft advisory](/assets/images/help/security/security-advisory-new-draft-security-advisory-button.png)
5. Escribe un título para tu aviso de seguridad.
{% data reusables.repositories.security-advisory-edit-details %} {% data reusables.repositories.security-advisory-edit-severity %} {% data reusables.repositories.security-advisory-edit-cwe-cve %} {% data reusables.repositories.security-advisory-edit-description %}
11. Haga clic en **Create draft security advisory**.
  ![Botón Create security advisory](/assets/images/help/security/security-advisory-create-security-advisory-button.png)

## Pasos siguientes

- Comentar en el borrador de asesoría de seguridad para debatir sobre la vulnerabilidad con tu equipo.
- Añadir colaboradores a la asesoría de seguridad. Para obtener más información, consulte "[Adición de un colaborador a un aviso de seguridad de repositorio](/code-security/repository-security-advisories/adding-a-collaborator-to-a-repository-security-advisory)".
- Colaborar en privado para solucionar la vulnerabilidad en una bifurcación privada temporaria. Para más información, vea "[Colaboración en una bifurcación privada temporal para resolver una vulnerabilidad de seguridad del repositorio](/code-security/repository-security-advisories/collaborating-in-a-temporary-private-fork-to-resolve-a-repository-security-vulnerability)".
- Agregar individuos que deberían recibir crédito por contribuir con la asesoría de seguridad. Para más información, vea "[Edición de un aviso de seguridad de repositorio](/code-security/repository-security-advisories/editing-a-repository-security-advisory#about-credits-for-security-advisories)".
- Publicar la asesoría de seguridad para notificar a tu comunidad sobre la vulnerabilidad de seguridad en cuestión. Para más información, vea "[Publicación de un aviso de seguridad de repositorio](/code-security/repository-security-advisories/publishing-a-repository-security-advisory)".
