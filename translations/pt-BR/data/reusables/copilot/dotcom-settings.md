---
ms.openlocfilehash: 224ce401421d3af0e9afa5976695c95ed219a7b5
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: "148107892"
---
## Como definir as configurações do {% data variables.product.prodname_copilot %} no {% data variables.product.prodname_dotcom_the_website %}

Quando você tiver uma assinatura ou uma avaliação ativa do {% data variables.product.prodname_copilot %}, ajuste as configurações do {% data variables.product.prodname_copilot %} para sua conta pessoal no {% data variables.product.prodname_dotcom %} nas configurações do [{% data variables.product.prodname_copilot %}](https://github.com/settings/copilot). As configurações se aplicam a todos os locais em que o {% data variables.product.prodname_copilot %} é usado. Você pode configurar as sugestões que o {% data variables.product.prodname_copilot %} oferece e como o {% data variables.product.company_short %} usa os dados telemétricos.

## Como habilitar ou desabilitar a detecção de duplicação

O {% data variables.product.prodname_copilot %} inclui um filtro que detecta sugestões de código correspondentes ao código público no {% data variables.product.prodname_dotcom %}. Você pode optar por habilitar ou desabilitar o filtro. Quando o filtro está habilitado, o {% data variables.product.prodname_copilot %} verifica sugestões de código com o código ao redor de cerca de 150 caracteres em relação ao código público no {% data variables.product.prodname_dotcom %}. Se houver uma correspondência exata ou próxima, a sugestão não será mostrada a você.

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.copilot-settings %}
1. Em **Sugestões que correspondem ao código público**, selecione o menu suspenso e clique em **Permitir** permitir sugestões correspondentes ao código público ou **Bloquear** para bloquear sugestões correspondentes ao código público.
  ![Captura de tela da opção de detecção de duplicação](/assets/images/help/copilot/duplication-detection.png) {% data reusables.copilot.save-settings %}

## Como habilitar ou desabilitar a telemetria

Para escolher se os snippets de código são coletados e retidos pelo GitHub e processados e compartilhados com a Microsoft e o OpenAI, ajuste as configurações do usuário. Para obter mais informações sobre dados que o {% data variables.product.prodname_copilot %} pode coletar dependendo das configurações de telemetria, confira "[Termos para produtos e recursos adicionais do {% data variables.product.company_short %}](/free-pro-team@latest/site-policy/github-terms/github-terms-for-additional-products-and-features#github-copilot)" e [Perguntas frequentes sobre privacidade do {% data variables.product.prodname_copilot %}](https://github.com/features/copilot/#faq-privacy).

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.copilot-settings %}
1. Para permitir ou impedir que o {% data variables.product.prodname_dotcom %} use seus dados de telemetria, marque ou desmarque a opção **Permitir que o {% data variables.product.prodname_dotcom %} use meus snippets de código para aprimoramentos de produto**.
  ![Captura de tela da opção de telemetria](/assets/images/help/copilot/telemetry-option.png) {% data reusables.copilot.save-settings %}

## Leitura adicional

- [Perguntas frequentes do {% data variables.product.prodname_copilot %}](https://github.com/features/copilot/#faq)
