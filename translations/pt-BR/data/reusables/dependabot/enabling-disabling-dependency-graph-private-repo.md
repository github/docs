---
ms.openlocfilehash: a9678c48ca3bd557f99816ef21c70c2332fb4e46
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145127842"
---
Os administradores de repositórios podem habilitar ou desabilitar o gráfico de dependências em repositórios privados.

Você também pode habilitar ou desabilitar o gráfico de dependências para todos os repositórios pertencentes à sua conta de usuário ou organização. Para obter mais informações, confira "[Configurar o grafo de dependência](/code-security/supply-chain-security/understanding-your-software-supply-chain/configuring-the-dependency-graph)".

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %}
4. Leia a mensagem sobre a permissão de acesso somente leitura do {% data variables.product.product_name %} aos dados do repositório para habilitar o grafo de dependência e, ao lado de "Grafo de Dependência", clique em **Habilitar**.
   ![Botão "Habilitar" para o grafo de dependência](/assets/images/help/repository/dependency-graph-enable-button.png)Você pode desabilitar o grafo de dependência a qualquer momento clicando em **Desabilitar** ao lado de "Grafo de dependência" na página de configurações para {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %}"Análise e segurança do código."{% else %}"Segurança & análise."{% endif %}
