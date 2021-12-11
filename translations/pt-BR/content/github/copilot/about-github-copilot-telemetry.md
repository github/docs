---
title: Sobre a telemetria do GitHub Copilot
intro: '{% data variables.product.prodname_copilot %} coleta e depende de dados adicionais de telemetria além do que outros produtos e serviços de {% data variables.product.company_short %} coletam.'
redirect_from:
  - /early-access/github/copilot/about-github-copilot-telemetry
versions:
  fpt: '*'
---

## Quais dados são coletados

Os dados coletados são descritos nos Termos de Telemetria de[{% data variables.product.prodname_copilot %}](/github/copilot/github-copilot-telemetry-terms)." Além disso, a extensão/plugin de {% data variables.product.prodname_copilot %} coleta a atividade do Ambiente Integrado de Desenvolvimento (IDE), vinculado a um registro de hora, e metadados coletados pelo pacote de telemetria da extensão/plugin. Quando usado com o Visual Studio Code, IntelliJ, NeoVIM, ou outros IDEs, {% data variables.product.prodname_copilot %} coleta os metadados padrão fornecidos por esses IDEs.

## Como os dados são usados pelo {% data variables.product.company_short %}

{% data variables.product.company_short %} usará estes dados para:

- Melhorar diretamente o produto, incluindo a avaliação de diferentes estratégias no processamento e previsão de quais sugestões os usuários podem achar úteis
- Avaliar o produto, por exemplo, medindo o impacto positivo que ele tem no usuário
- Melhorando os modelos de geração de código subjacentes, por exemplo, fornecendo exemplos positivos e negativos (mas sempre para que o seu código privado não seja usado como entrada para sugerir código para outros usuários de {% data variables.product.prodname_copilot %})
- Guiando produtos de {% data variables.product.company_short %} intimamente relacionados
- Investigando e detectando possíveis abusos do serviço de {% data variables.product.prodname_copilot %}
- Outros propósitos relacionados à melhoria do serviço de {% data variables.product.prodname_copilot %}, incluindo o compartilhamento conforme descrito na próxima seção

## Como os dados são compartilhados

Os dados de telemetria são armazenados com segurança em sistemas de {% data variables.product.company_short %}, com implementação da criptografia apropriada. Nós sabemos que o usuário edita ações, trechos de código-fonte e URLs de repositórios e caminhos de arquivos são dados confidenciais. Consequentemente, o acesso é rigorosamente controlado. Os dados só podem ser acessados por (1) equipe (funcionários e contratados indicados) de {% data variables.product.company_short %} que trabalham na equipe de {% data variables.product.prodname_copilot %} ou na equipe de saúde da plataforma {% data variables.product.company_short %}, (2) equipe da Microsoft (funcionários e contratados) que trabalham em ou com o Azure e/ou equipes de {% data variables.product.prodname_copilot %} e (3) funcionários da OpenAI que trabalham em {% data variables.product.prodname_copilot %}.

