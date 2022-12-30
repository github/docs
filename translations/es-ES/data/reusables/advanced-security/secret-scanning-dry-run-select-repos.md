---
ms.openlocfilehash: 55be1692eaf41dbee91aa298eeb9a969e5b91b42
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: "147549080"
---
{%- ifversion custom-pattern-dry-run-ga %}
1. Seleccione los repositorios en los que desea realizar el simulacro.
   * Para realizar el simulacro en toda la organización, seleccione **Todos los repositorios de la organización**.
   ![Captura de pantalla en la que se muestran los repositorios seleccionados para el simulacro](/assets/images/help/repository/secret-scanning-dry-run-custom-pattern-all-repos.png)
   * Para especificar los repositorios en los que desea realizar el simulacro, seleccione **Repositorios seleccionados**, busque y seleccione hasta 10 repositorios.
   ![Captura de pantalla en la que se muestran los repositorios seleccionados para el simulacro](/assets/images/help/repository/secret-scanning-dry-run-custom-pattern-select-repos-option.png)
1. Cuando tenga todo listo para probar el nuevo patrón personalizado, haga clic en **Ejecutar**.
{%- else %}
1. Busca y selecciona hasta 10 repositorios en los que quieras realizar el simulacro.
   ![Captura de pantalla en la que se muestran los repositorios seleccionados para el simulacro](/assets/images/help/repository/secret-scanning-dry-run-custom-pattern-select-repo.png)
1. Cuando estés listo para probar el nuevo patrón personalizado, haz clic en **Simulacro**.
{%- endif %}
