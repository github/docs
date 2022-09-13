---
ms.openlocfilehash: 8acbacc0b39b108fdd05473ceb85e65bfe0e92d0
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: "145095052"
---
A configuração de tarefas a serem executadas em um contêiner simplifica as configurações de rede entre o trabalho e os contêineres do serviço. Docker contêineres na mesma rede de ponte definida pelo usuário expõe todas as portas umas para as outras, então você não precisa mapear nenhuma das portas de contêiner de serviço para o host Docker. Você pode acessar o contêiner de serviço do contêiner de trabalho usando a etiqueta que você configurar no fluxo de trabalho.
