---
ms.openlocfilehash: 662ae539ae3cfdb6446d31664da325a9a67e9a26
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: "145065394"
---
O fluxo de trabalho configura um contêiner de serviço com o rótulo `redis`. Todos os serviços precisam ser executados em um contêiner, ou seja, cada serviço exige que você especifique o contêiner `image`. Este exemplo usa a imagem de contêiner `redis` e inclui opções de verificação de integridade para verificar se o serviço está funcionando. Para obter mais informações, confira a [imagem redis](https://hub.docker.com/_/redis) no Docker Hub.
