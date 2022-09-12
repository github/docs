---
ms.openlocfilehash: 15dca8ffafe9686d15e08ffb8ecd9e07ceba3942
ms.sourcegitcommit: 5b1461b419dbef60ae9dbdf8e905a4df30fc91b7
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: "147879366"
---
| Opción | Obligatorio | Actualizaciones de seguridad | Actualizaciones de versiones | Descripción |
|:---|:---:|:---:|:---:|:---|
| [`package-ecosystem`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#package-ecosystem)                     | **X** | | X | Administrador de paquetes a utilizar                  |
| [`directory`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#directory)                                     | **X** | | X | Ubicación de los manifiestos del paquete           |
| [`schedule.interval`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#scheduleinterval)                      | **X** | | X | Qué tan a menudo se revisará si hay actualizaciones                |
| [`allow`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#allow)                                             | | X | X | Personalizar qué actualizaciones se permitirán         |
| [`assignees`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#assignees)                                     | | X | X | Los asignados a configurar en las solicitudes de extracción           |
| [`commit-message`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#commit-message)                           | | X | X | Preferencias de mensaje de confirmación                  |{% ifversion fpt or ghec or ghes > 3.4 %}
| [`enable-beta-ecosystems`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#enable-beta-ecosystems)           | | | X | Habilitación de ecosistemas que tienen compatibilidad de nivel beta |{% endif %}
| [`ignore`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#ignore)                                           | | X | X | Ignorar ciertas dependencias o versiones     |
| [`insecure-external-code-execution`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#insecure-external-code-execution) | | | X | Permite o rechaza la ejecución de código en los archivos de manifiesto |
| [`labels`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#labels)                                           | | X | X | Las etiquetas a configurar en las solicitudes de extracción              |
| [`milestone`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#milestone)                                     | | X | X | Hito a configurar en las solicitudes de extracción           |
| [`open-pull-requests-limit`](#open-pull-requests-limit)       | | X | X | Limitar la cantidad de solicitudes de extracción abiertas para las actualizaciones de versión |
| [`pull-request-branch-name.separator`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#pull-request-branch-nameseparator) | | X | X | Cambiar el separador para los nombres de rama de la solicitud de extracción |
| [`rebase-strategy`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#rebase-strategy)                         | | X | X | Inhabilitar el rebase automático                  |
| [`registries`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#registries)                                   | | | X | Los registros privados a los que puede acceder el {% data variables.product.prodname_dependabot %}|
| [`reviewers`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#reviewers)                                     | | X | X | Los revisores a configurar en las solicitudes de extracción           |
| [`schedule.day`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#scheduleday)                                | | | X | Día de la semana para revisar si hay actualizaciones              |
| [`schedule.time`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#scheduletime)                              | | | X | Hora del día para revisar si hay actualizaciones (hh:mm)      |
| [`schedule.timezone`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#scheduletimezone)                      | | | X | Huso horario para la hora del día (identificador de zona)    |
| [`target-branch`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#target-branch)                             | | | X  | Rama contra la cual se creará la solicitud de extracción     |
| [`vendor`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#vendor)                                           | | | X | Actualiza las dependencias delegadas a proveedores o almacenadas en caché        |
| [`versioning-strategy`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#versioning-strategy)                 | | X | X | Cómo actualizar los requisitos de la versión del manifiesto |
