---
ms.openlocfilehash: 74a6541cfbd0ad87d45a316cb46da45c227c9925
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: "145138746"
---
Cuando ejecutas actualizaciones de versión o de seguridad, algunos ecosistemas deberán poder resolver todas las dependencias de su fuente para verificar que las actualizaciones sean exitosas. Si tus archivos de manifiesto o de bloqueo contienen cualquier dependencia privada, el {% data variables.product.prodname_dependabot %} deberá poder acceder a la ubicación en la que se hospedan dichas dependencias. Los propietarios de las organizaciones pueden otorgar acceso al {% data variables.product.prodname_dependabot %} para los repositorios privados que contengan dependencias para un proyecto dentro de la misma organización. Para más información, vea "[Administración de la configuración de seguridad y análisis para la organización](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization#allowing-dependabot-to-access-private-dependencies)". Puede configurar el acceso a los registros privados en el archivo de configuración _dependabot.yml_ de un repositorio. Para más información, vea "[Opciones de configuración para el archivo dependabot.yml](/github/administering-a-repository/configuration-options-for-dependency-updates#configuration-options-for-private-registries)".
