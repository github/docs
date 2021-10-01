---
title: Sobre a telemetria do GitHub Copilot
intro: 'O Copilot do {% data variables.product.prodname_dotcom %} coleta e depende de dados adicionais de telemetria além do que os outros produtos e serviços de {% data variables.product.prodname_dotcom %} coletam.'
redirect_from:
  - /early-access/github/copilot/about-github-copilot-telemetry
versions:
  fpt: '*'
---

## Quais dados são coletados
O Copilot de {% data variables.product.prodname_dotcom %} coleta atividade do editor Visual Studio do usuário, vinculada a um registro de horário e metadados. Estes metadados consistem nas configurações da extensão e nos metadados padrão coletados pelo [pacote de telemetria da extensão Visual Studio Code](https://www.npmjs.com/package/vscode-extension-telemetry):

* ID da máquina do Visual Studio Code (identificador pseudonimizado)
* ID de sessão do Visual Studio Code (identificador pseudodonimizado)
* Versão do Visual Studio Code
* [Geolocalização do endereço IP](https://docs.microsoft.com/en-us/azure/azure-monitor/app/ip-collection?tabs=net) (país, estado/província e cidade, mas não o endereço IP propriamente dito)
* Versão e sistema operacional
* Versão da extensão
* A interface do usuário do VS Code (web ou desktop)

A atividade coletada consiste em eventos acionados quando:

* Ocorre um erro (ele registra o tipo de erro e o plano de fundo relevante; por exemplo, se for um erro de autenticação, a data de vencimento da chave é gravada)
* Nossos modelos são acessados para pedir sugestões de código (ele registra o estado do editor como a posição do cursor e trechos de código) — isso inclui casos quando o usuário executa uma ação para solicitar sugestões de código
* Sugestões de código são recebidas ou exibidas (registra as sugestões, processamento posterior e metadados como certeza do modelo e latência)
* Sugestões de código são ancoradas devido a filtros que garantem segurança da IA
* O usuário age em sugestões de código (por exemplo, para aceitá-las ou rejeitá-las)
* O usuário agiu em sugestões de código e, em seguida, grava se ou como persistem no código

## Como os dados são usados
Estes dados serão usados somente por {% data variables.product.company_short %} para:

* Melhorar diretamente o produto, incluindo a avaliação de diferentes estratégias no processamento e previsão de quais sugestões os usuários podem achar úteis
* Avaliação direta do produto, por exemplo, medindo o impacto positivo que ele tem no usuário
* Melhorar os modelos de geração de código subjacentes, por exemplo, fornecendo exemplos positivos e negativos (mas sempre para que o seu código privado não seja usado como entrada para sugerir código para outros usuários do Copilot de {% data variables.product.prodname_dotcom %})
* Guiando produtos de {% data variables.product.prodname_dotcom %} intimamente relacionados
* Investigando e detectando possíveis abusos do serviço do Copilot de {% data variables.product.prodname_dotcom %}
* Outros propósitos relacionados com a melhoria do serviço do Copilot de {% data variables.product.prodname_dotcom %}

## Como os dados são compartilhados
Os dados de telemetria são armazenados com segurança em sistemas de {% data variables.product.prodname_dotcom %}, com implementação da criptografia apropriada.

Sabemos que o usuário edita ações e os trechos de código fonte são dados muito sensíveis e o acesso é estritamente controlado. Os dados só podem ser acessados (1) por funcionários de {% data variables.product.company_short %} (funcionários e contratados) designada que trabalha na equipe do Copilot de {% data variables.product.company_short %} ou na equipe de saúde da plataforma {% data variables.product.company_short %}, (2) funcionários selecionados da Microsoft (funcionários e contratados) em ou com a equipe do Copilot de {% data variables.product.company_short %} e (3) funcionários da OpenAI selecionados que trabalham no Copilot de {% data variables.product.company_short %}.
