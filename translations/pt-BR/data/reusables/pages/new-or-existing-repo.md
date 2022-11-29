---
ms.openlocfilehash: 33f427d38193ad14c5df35ebab14bd08208c08e0
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: "148107976"
---
Você pode criar um repositório ou escolher um repositório existente para seu site.

Se você quiser criar um site do {% data variables.product.prodname_pages %} para um repositório em que nem todos os arquivos do repositório estejam relacionados ao site, você poderá configurar uma fonte de publicação para seu site. Por exemplo, você pode ter um branch e uma pasta dedicados a armazenar os {% ifversion pages-custom-workflow %}arquivos de origem do site ou usar um fluxo de trabalho personalizado do {% data variables.product.prodname_actions %} para criar e implantar os arquivos de origem do site. Arquivos do {% data reusables.actions.settings-ui.settings-actions-pages-custom-workflow %}{% else %}.{% endif %}

{% ifversion fpt or ghec %}Se a conta que é o proprietário do repositório usar o {% data variables.product.prodname_free_user %} ou o {% data variables.product.prodname_free_team %} para organizações, o repositório precisará ser público.{% endif %}

 Caso deseje criar um site em um repositório existente, vá para a seção "[Como criar seu site](#creating-your-site)".