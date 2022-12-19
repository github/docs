---
ms.openlocfilehash: 27ed9d55b8199298dc1cfdf8b4d3da925e08aa8d
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145065358"
---
1. Selecione a imagem e a arquitetura do sistema operacional do computador do executor auto-hospedado.
1. Você verá instruções mostrando como baixar o executor e instalá-lo em sua máquina de executor auto-hospedada.

   Abra um shell em sua máquina de executor auto-hospedado e execute cada comando shell na ordem mostrada.

   {% note %}

   **Observação:** no Windows, caso você deseje instalar o aplicativo do executor auto-hospedado como um serviço, abra um shell com privilégios de administrador. Também recomendamos que você use `C:\actions-runner` como diretório para o aplicativo do executor auto-hospedado para que as contas do sistema do Windows possam acessar o diretório do executor.

   {% endnote %}

   As instruções te ajudam a completar estas tarefas:
   - Transferindo e extraindo o aplicativo do executor auto-hospedado.
   - Executar o script `config` para configurar o aplicativo do executor auto-hospedado e registrá-lo no {% data variables.product.prodname_actions %}. O script `config` exige a URL de destino e um token de tempo limitado gerado automaticamente para autenticar a solicitação.
     - No Windows, o script `config` também pergunta se você deseja instalar o aplicativo do executor auto-hospedado como um serviço. Para Linux e macOS, você pode instalar um serviço depois de terminar de adicionar o executor. Para obter mais informações, confira "[Como configurar o aplicativo do executor auto-hospedado como um serviço](/actions/automating-your-workflow-with-github-actions/configuring-the-self-hosted-runner-application-as-a-service)".
   - Executando o aplicativo do executor auto-hospedado para conectar a máquina ao {% data variables.product.prodname_actions %}.
