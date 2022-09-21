---
ms.openlocfilehash: a9678c48ca3bd557f99816ef21c70c2332fb4e46
ms.sourcegitcommit: 5b1461b419dbef60ae9dbdf8e905a4df30fc91b7
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: "145138794"
---
Los administradores del repositorio pueden habilitar o inhabilitar la gráfica de dependencias para los repositorios privados.

También puedes habilitar o inhabilitar la gráfica de dependencias para todos los repositorios que pertenecen a tu cuenta de usuario u organización. Para obtener más información, consulta "[Configuración del gráfico de dependencias](/code-security/supply-chain-security/understanding-your-software-supply-chain/configuring-the-dependency-graph)".

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %}
4. Lea el mensaje sobre otorgar acceso de solo lectura a {% data variables.product.product_name %} para los datos del repositorio para poder habilitar el gráfico de dependencias. A continuación, haga clic en **Enable** junto a "Dependency Graph".
   ![Botón "Habilitar" para el gráfico de dependencias](/assets/images/help/repository/dependency-graph-enable-button.png) Puedes deshabilitar el gráfico de dependencias en cualquier momento haciendo clic en **Disable** (Deshabilitar) junto a "Dependency Graph" (Gráfico de dependencias) en la página de configuración de {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %}"Code security and analysis" (Seguridad y análisis del código).{% else %}"Security & analysis" (Seguridad y análisis).{% endif %}
