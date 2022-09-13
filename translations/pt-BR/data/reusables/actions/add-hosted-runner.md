---
ms.openlocfilehash: 216386e3e7dc31df99a383af6a335681c72911c2
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "147763887"
---
1. Clique em **Novo executor** e clique em **{% octicon "mark-github" aria-label="New hosted runner" %} Novo executor hospedado pelo GitHub**.
1. Preencha os detalhes obrigatórios para configurar seu novo executor:

    - **Nome**: insira um nome para seu novo executor. Para facilitar a identificação, esse campo deve indicar o hardware e configuração operacional, como `ubuntu-20.04-16core`.
    - **Imagem do executor**: escolha um sistema operacional entre as opções disponíveis. Depois de selecionar um sistema operacional, você poderá escolher uma versão específica.
    - **Tamanho do executor**: escolha uma configuração de hardware na lista suspensa de opções disponíveis.
    - **Dimensionamento automático**: escolha o número máximo de executores que podem estar ativos a qualquer momento.
    - **Grupo do executor**: escolha o grupo do qual seu executor será membro. Esse grupo hospedará várias instâncias do seu executor, à medida que elas escalarem verticalmente para atender à demanda.
    - **Rede**: somente para dados {% data variables.product.prodname_ghe_cloud %}: escolha se um intervalo de endereços IP estáticos será atribuído a instâncias de {% data variables.actions.hosted_runner %}. Você pode usar até 10 endereços IP estáticos no total.

1. Clique em **Criar executor**.