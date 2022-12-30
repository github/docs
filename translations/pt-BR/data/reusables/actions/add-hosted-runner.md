---
ms.openlocfilehash: cdf55c11d2d54b94788e317961466999079debbb
ms.sourcegitcommit: 3268914369fb29540e4d88ee5e56bc7a41f2a60e
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/26/2022
ms.locfileid: "148111293"
---
1. Clique em **Novo executor** e clique em **{% octicon "mark-github" aria-label="New hosted runner" %} Novo executor hospedado no {% data variables.product.prodname_dotcom %}** .
1. Preencha os detalhes obrigatórios para configurar seu novo executor:

    - **Nome**: insira um nome para seu novo executor. Para facilitar a identificação, esse campo deve indicar o hardware e configuração operacional, como `ubuntu-20.04-16core`.
    - **Imagem do executor**: escolha um sistema operacional entre as opções disponíveis. Depois de selecionar um sistema operacional, você poderá escolher uma versão específica.
    - **Tamanho do executor**: escolha uma configuração de hardware na lista suspensa de opções disponíveis.
    - **Dimensionamento automático**: escolha o número máximo de executores que podem estar ativos a qualquer momento.
    - **Grupo do executor**: escolha o grupo do qual seu executor será membro. Esse grupo hospedará várias instâncias do seu executor, à medida que elas escalarem verticalmente para atender à demanda.
    - **Rede**: somente para dados {% data variables.product.prodname_ghe_cloud %}: escolha se um intervalo de endereços IP estáticos será atribuído a instâncias de {% data variables.actions.hosted_runner %}. Você pode usar até 10 endereços IP estáticos no total.

1. Clique em **Criar executor**.
