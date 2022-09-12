---
ms.openlocfilehash: 8acbacc0b39b108fdd05473ceb85e65bfe0e92d0
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145095052"
---
A configuração de tarefas a serem executadas em um contêiner simplifica as configurações de rede entre o trabalho e os contêineres do serviço. Docker contêineres na mesma rede de ponte definida pelo usuário expõe todas as portas umas para as outras, então você não precisa mapear nenhuma das portas de contêiner de serviço para o host Docker. Você pode acessar o contêiner de serviço do contêiner de trabalho usando a etiqueta que você configurar no fluxo de trabalho.
