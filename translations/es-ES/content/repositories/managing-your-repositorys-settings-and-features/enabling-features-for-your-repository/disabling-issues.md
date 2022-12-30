---
title: Inhabilitar propuestas
intro: Es posible que desees desactivar las propuestas de tu repositorio en caso de que no aceptes contribuciones o informes de errores.
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/disabling-issues
  - /articles/disabling-issues
  - /github/managing-your-work-on-github/disabling-issues
  - /github/administering-a-repository/managing-repository-settings/disabling-issues
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
ms.openlocfilehash: a706b1431f4f43c9866fb6ef0f01f6d25d6edc46
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '147881832'
---
{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
3. En Características, anula la selección de la casilla **Propuestas**.
  ![Casilla de verificación Eliminar propuestas](/assets/images/help/issues/issues_settings_remove_from_repo.png)

Si decides habilitar las propuestas nuevamente en el futuro, todas las propuestas que se hayan agregado previamente estarán disponibles.

{% ifversion fpt or ghec %}

{% tip %}

Comunícate con {% data variables.contact.contact_support %} si deseas desactivar las propuestas para evitar el abuso de extraños.
{% data reusables.policies.abuse %}

{% endtip %}

{% endif %}
