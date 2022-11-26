---
title: Sobre o GitHub Copilot
intro: 'O {% data variables.product.prodname_copilot %} pode ajudar você a criar códigos oferecendo sugestões de preenchimento automático. Saiba o que considerar ao usar o {% data variables.product.prodname_copilot %} e como o {% data variables.product.prodname_copilot %} funciona.'
versions:
  feature: copilot
topics:
  - Copilot
shortTitle: About GitHub Copilot
ms.openlocfilehash: dd4538cb4cf6fc9dd84bb3f0d05bf8a85559d5ec
ms.sourcegitcommit: d82f268a6f0236d1f4d2bf3d049974ada0170402
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/10/2022
ms.locfileid: '148160637'
---
## Sobre o {% data variables.product.prodname_copilot %}

O {% data variables.product.prodname_copilot %} é um programador de pares de IA que oferece sugestões de preenchimento automático conforme você codifica. Você pode receber sugestões do {% data variables.product.prodname_copilot %} ao começar a escrever o código que deseja usar ou um comentário em linguagem natural descrevendo o que deseja que o código faça. O {% data variables.product.prodname_copilot %} analisa o contexto no arquivo que você está editando, bem como arquivos relacionados, e oferece sugestões de dentro do editor de texto. O {% data variables.product.prodname_copilot %} é da plataforma OpenAI Codex, um sistema de IA criado pelo OpenAI.

O {% data variables.product.prodname_copilot %} é treinado em todas as linguagens que são exibidas nos repositórios públicos. Para cada linguagem, a qualidade das sugestões recebidas pode depender do volume e da diversidade de dados de treinamento para essa linguagem. Por exemplo, o JavaScript é bem representado nos repositórios públicos e é uma das linguagens com melhor suporte do {% data variables.product.prodname_copilot %}. As linguagens com menos representação nos repositórios públicos podem produzir sugestões menos robustas e um número menor de sugestões.

O {% data variables.product.prodname_copilot %} está disponível como uma extensão no Visual Studio Code, no Visual Studio, no Neovim e no pacote de IDEs da JetBrains. Para obter mais informações, confira "[Introdução ao {% data variables.product.prodname_copilot %}](/copilot/getting-started-with-github-copilot)".

## Como usar o {% data variables.product.prodname_copilot %}

Veja exemplos reais do {% data variables.product.prodname_copilot %} em ação. Para obter mais informações, confira o site do [{% data variables.product.prodname_copilot %}](https://copilot.github.com/). 

O GitHub Copilot oferece sugestões de um modelo que o OpenAI criou com base em bilhões de linhas de código aberto. Como resultado, o conjunto de treinamento do {% data variables.product.prodname_copilot %} pode conter padrões de codificação não seguros, bugs ou referências a APIs desatualizadas ou gírias. Quando o {% data variables.product.prodname_copilot %} gera sugestões com base nesses dados de treinamento, essas sugestões também podem conter padrões indesejáveis. 

Você é responsável por garantir a segurança e a qualidade do código. Recomendamos que você tome as mesmas precauções ao usar o código gerado pelo {% data variables.product.prodname_copilot %} que tomaria ao usar qualquer código escrito por outra pessoa. Essas precauções incluem testes rigorosos, verificação de IP e acompanhamento de vulnerabilidades de segurança. O {% data variables.product.company_short %} oferece vários recursos que ajudam a monitorar e aprimorar a qualidade do código, como {% data variables.product.prodname_actions %}, {% data variables.product.prodname_dependabot %}, {% data variables.product.prodname_codeql %} e {% data variables.product.prodname_code_scanning %}. Todos esses recursos são gratuitos para serem usados em repositórios públicos. Para obter mais informações, confira "[Noções básicas sobre o {% data variables.product.prodname_actions %}](/actions/learn-github-actions/understanding-github-actions)" e "[Recursos de segurança do {% data variables.product.company_short %}](/code-security/getting-started/github-security-features)".

O {% data variables.product.prodname_copilot %} usa filtros para bloquear palavras ofensivas nos prompts e evitar a geração de sugestões em contextos confidenciais. Estamos comprometidos em sempre aprimorar o sistema de filtro para detectar e remover com mais inteligência as sugestões ofensivas geradas pelo {% data variables.product.prodname_copilot %}, incluindo saídas tendenciosas, discriminatórias ou abusivas. Se você encontrar uma sugestão ofensiva gerada pelo {% data variables.product.prodname_copilot %}, relate-a diretamente a copilot-safety@github.com, para que possamos aprimorar as proteções. 

{% data reusables.copilot.emus-cannot-use-copilot %}

## Sobre a cobrança do {% data variables.product.prodname_copilot %}

O {% data variables.product.prodname_copilot %} é um recurso pago, exigindo uma assinatura mensal ou anual. Os alunos, os professores e os mantenedores verificados de projetos populares de software livre do {% data variables.product.prodname_dotcom %} estão qualificados para usar o {% data variables.product.prodname_copilot %} gratuitamente. Se você atender aos critérios de uma assinatura gratuita do {% data variables.product.prodname_copilot %}, será notificado automaticamente quando visitar a página de assinatura do {% data variables.product.prodname_copilot %}. Se você não atender aos critérios de uma assinatura gratuita do {% data variables.product.prodname_copilot %}, será oferecida uma avaliação gratuita de 60 dias. Depois desse período será necessária uma assinatura paga para continuar o uso. Para obter mais informações, confira "[Sobre a cobrança do {% data variables.product.prodname_copilot %}](/billing/managing-billing-for-github-copilot/about-billing-for-github-copilot)".

## Sobre a licença do plug-in {% data variables.product.prodname_copilot %} nos IDEs da JetBrains

O {% data variables.product.prodname_dotcom %}, Inc. é o licenciante do plug-in da JetBrains. O uso desse plug-in está sujeito aos [Termos para produtos e recursos adicionais do {% data variables.product.prodname_dotcom %}](/free-pro-team@latest/site-policy/github-terms/github-terms-for-additional-products-and-features#github-copilot). A JetBrains não tem nenhuma responsabilidade relacionada ao plug-in nem a esse contrato. Usando o plug-in, você concorda com os termos anteriores.

## Leitura adicional

- "[Termos para produtos e recursos adicionais do {% data variables.product.company_short %}](/free-pro-team@latest/site-policy/github-terms/github-terms-for-additional-products-and-features#github-copilot)"
