---
title: Administración de la directiva de aprobación de confirmaciones para la organización
intro: 'Puedes requerir que los usuarios aprueben automáticamente todas las confirmaciones que realicen en la interfaz web de {% data variables.product.product_name %} en repositorios que pertenezcan a tu organización.'
versions:
  feature: commit-signoffs
permissions: Organization owners can require all commits to repositories owned by the organization be signed off by the commit author.
topics:
  - Organizations
shortTitle: Manage the commit signoff policy
ms.openlocfilehash: 3d567d9f592758a2a9998df07556c4f2a04a852c
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148110003'
---
## Acerca de las aprobaciones de confirmación

Para confirmar que una confirmación cumple con las reglas y las licencias que rigen un repositorio, muchas organizaciones requieren que los desarrolladores aprueben todas las confirmaciones. Si tu organización requiere aprobaciones de confirmación, puedes hacer que la aprobación sea una parte sencilla del proceso de confirmación habilitando las aprobaciones de confirmación obligatorias para los usuarios que realizan la confirmación a través de la interfaz web de {% data variables.product.product_name %}. Después de habilitar las aprobaciones de confirmación obligatorias para una organización, el autor de la confirmación aprobará automáticamente todas las confirmaciones realizadas en los repositorios de esa organización a través de la interfaz web de {% data variables.product.product_name %}.

Los usuarios con acceso de administrador a un repositorio también pueden habilitar las aprobaciones de confirmación obligatorias en el nivel de repositorio. Para obtener más información, consulta "[Administración de la directiva de aprobación de confirmaciones para el repositorio](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-the-commit-signoff-policy-for-your-repository)".

{% data reusables.repositories.commit-signoffs %}

## Administración de la aprobación de confirmaciones obligatorias para la organización

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.repository-defaults %}
1. Seleccione o anule la selección de **Require contributors to sign off on web-based commits** (Requerir a los colaboradores aprobación para las confirmaciones basadas en web).
  ![Captura de pantalla de la opción para requerir a los colaboradores aprobación para las confirmaciones basadas en web](/assets/images/help/organizations/require-signoffs.png)
