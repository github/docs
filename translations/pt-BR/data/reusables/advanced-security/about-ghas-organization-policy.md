---
ms.openlocfilehash: a9edfbc5b5f3c0f50ae1e476d393e658751a5079
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: "145094302"
---
{% data variables.product.company_short %} contas para {% data variables.product.prodname_advanced_security %} com base no committer. {% ifversion fpt or ghec %}Para obter mais informações, confira "[Como gerenciar o licenciamento do {% data variables.product.prodname_GH_advanced_security %}](/billing/managing-licensing-for-github-advanced-security)".{% elsif ghes %}Para obter mais informações, confira "[Como gerenciar o {% data variables.product.prodname_GH_advanced_security %} para sua empresa](/admin/advanced-security)".{% endif %}

Você pode aplicar uma política que controla se os administradores de repositórios têm permissão para habilitar funcionalidades para {% data variables.product.prodname_advanced_security %} nos repositórios de uma organização. É possível configurar uma política para todas as organizações pertencentes à conta corporativa ou para organizações individuais escolhidas.

Cancelar a permissão de {% data variables.product.prodname_advanced_security %} para uma organização impede que os administradores de repositórios habilitem funcionalidades de {% data variables.product.prodname_advanced_security %} para repositórios adicionais, mas não desabilita as funcionalidades nos repositórios onde já estão habilitadas. Para obter mais informações sobre a configuração de recursos do {% data variables.product.prodname_advanced_security %}, confira "[Como gerenciar as configurações de segurança e análise para sua organização](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)" ou "[Como gerenciar as configurações de segurança e análise para seu repositório](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)".
