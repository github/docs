---
ms.openlocfilehash: 55be1692eaf41dbee91aa298eeb9a969e5b91b42
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: "147549073"
---
{%- ifversion custom-pattern-dry-run-ga %}
1. Selecione os repositórios em que deseja realizar a simulação.
   * Para realizar a simulação em toda a organização, selecione **Todos os repositórios da organização**.
   ![Captura de tela mostrando repositórios selecionados para a simulação](/assets/images/help/repository/secret-scanning-dry-run-custom-pattern-all-repos.png)
   * Para especificar os repositórios nos quais você deseja realizar a simulação, selecione **Repositórios selecionados**, pesquise e selecione até dez repositórios.
   ![Captura de tela mostrando repositórios selecionados para a simulação](/assets/images/help/repository/secret-scanning-dry-run-custom-pattern-select-repos-option.png)
1. Quando tudo estiver pronto para testar seu novo padrão personalizado, clique em **Executar**.
{%- else %}
1. Pesquise e selecione até 10 repositórios em que você deseja executar a simulação.
   ![Captura de tela mostrando repositórios selecionados para a simulação](/assets/images/help/repository/secret-scanning-dry-run-custom-pattern-select-repo.png)
1. Quando você estiver pronto para testar seu novo padrão personalizado, clique em **Simulação**.
{%- endif %}
