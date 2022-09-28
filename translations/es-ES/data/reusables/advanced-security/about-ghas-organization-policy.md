---
ms.openlocfilehash: a9edfbc5b5f3c0f50ae1e476d393e658751a5079
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/12/2022
ms.locfileid: "147888578"
---
{% data variables.product.company_short %} cobra por la {% data variables.product.prodname_advanced_security %} por cada confirmante. {% ifversion fpt or ghec %}Para obtener más información, consulte "[Administrar la facturación de {% data variables.product.prodname_GH_advanced_security %}](/billing/managing-licensing-for-github-advanced-security)."{% elsif ghes %}Para obtener más información, consulte "[Administrar {% data variables.product.prodname_GH_advanced_security %} para tu empresa](/admin/advanced-security)."{% endif %}

Puedes requerir una política que controle si se les permite a los administradores de repositorio habilitar características para {% data variables.product.prodname_advanced_security %} en los repositorios de una organización. Puedes configurar una política para todas las organizaciones que le pertenezcan a tu cuenta empresarial o para las organizaciones individuales que elijas.

El dejar de permitir la {% data variables.product.prodname_advanced_security %} para una organización previene que los administradores de repositorio habiliten las características de la {% data variables.product.prodname_advanced_security %} para los repositorios adicionales, pero no inhabilita las características para los repositorios en donde estas ya se hayan habilitado. Para obtener más información sobre la configuración de características de {% data variables.product.prodname_advanced_security %}, consulte "[Administrar los parámetros de seguridad y análisis para tu organización](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)" o "[Administrar los parámetros de seguridad y análisis para tu repositorio](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)."
