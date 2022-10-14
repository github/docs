---
title: Administración de la directiva de aprobación de confirmaciones para el repositorio
intro: 'Puedes requerir que los usuarios aprueben automáticamente las confirmaciones que realizan en tu repositorio mediante la interfaz web de {% data variables.product.product_name %}.'
versions:
  feature: commit-signoffs
permissions: Organization owners and repository administrators can require all commits to a repository to be signed off by the commit author.
topics:
  - Repositories
shortTitle: Manage the commit signoff policy
ms.openlocfilehash: 4002f0767497cb2b0db9e43c9783e0c2982c8d33
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147410826'
---
## Acerca de las aprobaciones de confirmación

Las aprobaciones de confirmación permiten a los usuarios confirmar que una confirmación cumple las reglas y las licencias que rigen un repositorio. Puedes habilitar las aprobaciones de confirmación obligatorias en repositorios individuales para los usuarios que realizan la confirmación a través de la interfaz web de {% data variables.product.product_location %}, para hacer que la aprobación de una confirmación sea una parte sencilla del proceso de confirmación. Una vez habilitadas las aprobaciones de confirmación obligatorias para un repositorio, el autor de la confirmación aprobará automáticamente todas las confirmaciones realizadas en el repositorio a través de la interfaz web de {% data variables.product.product_location %}.

Los propietarios de la organización también pueden habilitar las aprobaciones de confirmación obligatorias en el nivel de la organización. Para obtener más información, consulta "[Administración de la directiva de aprobación para la organización](/organizations/managing-organization-settings/managing-the-commit-signoff-policy-for-your-organization)".

{% data reusables.repositories.commit-signoffs %}

## Habilitación o deshabilitación de las aprobaciones de confirmación obligatorias para el repositorio

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
1. Seleccione **Require contributors to sign off on web-based commits** (Requerir a los colaboradores aprobación para las confirmaciones basadas en web).
  ![Captura de pantalla de la opción para requerir a los colaboradores aprobación para las confirmaciones basadas en web](/assets/images/help/repository/require-signoffs.png)
