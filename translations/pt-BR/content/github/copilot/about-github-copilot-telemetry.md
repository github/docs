---
title: Sobre a telemetria do GitHub Copilot
intro: '{% data variables.product.prodname_copilot %} collects and relies on additional telemetry data beyond what other {% data variables.product.company_short %} products and services collect.'
redirect_from:
- /early-access/github/copilot/about-github-copilot-telemetry
versions:
  fpt: '*'
ms.openlocfilehash: ad46b7b2b6626cad0419b1588d64923cca34c0ca
ms.sourcegitcommit: d8653a0ad00d2122cdaaed47f6a4f0c1d0f41845
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 05/18/2022
ms.locfileid: "145148750"
---
## <a name="what-data-is-collected"></a>Quais dados são coletados

Os dados coletados são descritos nos "[Termos de Telemetria do {% data variables.product.prodname_copilot %}](/github/copilot/github-copilot-telemetry-terms)". Além disso, a extensão/plugin de {% data variables.product.prodname_copilot %} coleta a atividade do Ambiente Integrado de Desenvolvimento (IDE), vinculado a um registro de hora, e metadados coletados pelo pacote de telemetria da extensão/plugin. Quando usado com o {% data variables.product.prodname_vscode %}, IntelliJ, NeoVIM ou outros IDEs, o {% data variables.product.prodname_copilot %} coleta os metadados padrão fornecidos por esses IDEs. 

## <a name="how-the-data-is-used-by--data-variablesproductcompany_short-"></a>Como os dados são usados pelo {% data variables.product.company_short %}

{% data variables.product.company_short %} usará estes dados para:

- Melhorar diretamente o produto, incluindo a avaliação de diferentes estratégias no processamento e previsão de quais sugestões os usuários podem achar úteis
- Avaliar o produto, por exemplo, medindo o impacto positivo que ele tem no usuário
- Melhorando os modelos de geração de código subjacentes, por exemplo, fornecendo exemplos positivos e negativos (mas sempre para que o seu código privado não seja usado como entrada para sugerir código para outros usuários de {% data variables.product.prodname_copilot %})
- Como criar guias de produtos relacionados do {% data variables.product.company_short %}
- Investigando e detectando possíveis abusos do serviço de {% data variables.product.prodname_copilot %}
- Outros propósitos relacionados à melhoria do serviço de {% data variables.product.prodname_copilot %}, incluindo o compartilhamento conforme descrito na próxima seção

## <a name="how-the-data-is-shared"></a>Como os dados são compartilhados

Os dados telemétricos são armazenados com segurança em sistemas do {% data variables.product.company_short %}, com a implementação da criptografia apropriada. Nós sabemos que o usuário edita ações, trechos de código-fonte e URLs de repositórios e caminhos de arquivos são dados confidenciais. Consequentemente, o acesso é rigorosamente controlado. Os dados só podem ser acessados por (1) equipe (funcionários e contratados indicados) de {% data variables.product.company_short %} que trabalham na equipe de {% data variables.product.prodname_copilot %} ou na equipe de saúde da plataforma {% data variables.product.company_short %}, (2) equipe da Microsoft (funcionários e contratados) que trabalham em ou com o Azure e/ou equipes de {% data variables.product.prodname_copilot %} e (3) funcionários da OpenAI que trabalham em {% data variables.product.prodname_copilot %}.

