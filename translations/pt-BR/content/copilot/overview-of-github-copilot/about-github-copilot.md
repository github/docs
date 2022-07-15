---
title: Sobre o GitHub Copilot
intro: '{% data variables.product.prodname_copilot %} pode ajudar você a codificar oferecendo sugestões de preenchimento automático. Você pode aprender o que considerar ao usar {% data variables.product.prodname_copilot %} e como {% data variables.product.prodname_copilot %} funciona.'
versions:
  feature: copilot
topics:
  - Copilot
shortTitle: Sobre o GitHub Copilot
---

## Sobre {% data variables.product.prodname_copilot %}

{% data variables.product.prodname_copilot %} é um programador de pares IA que oferece sugestões de preenchimento automático à medida que você cria o código. Você pode receber sugestões de {% data variables.product.prodname_copilot %}, começando a escrever o código que deseja usar ou escrevendo um comentário em linguagem natural, descrevendo o que você quer que o código faça. {% data variables.product.prodname_copilot %} analisa o contexto no arquivo que você está editando, bem como arquivos relacionados e oferece sugestões de dentro de seu editor de texto.

{% data variables.product.prodname_copilot %} é otimizado para ajudar você a escrever Python, JavaScript, TypeScript, Ruby, Go, C# ou C++. Você também pode usar {% data variables.product.prodname_copilot %} para gerar sugestões em outras linguagens e uma grande variedade de estruturas. {% data variables.product.prodname_copilot %} é alimentado pelo OpenAI Codex, um novo sistema de IA criado pela OpenAI.

{% data variables.product.prodname_copilot %} está disponível como uma extensão em Visual Studio Code, Visual Studio, Neovim e no conjunto de IDEs do JetBrains. Para obter mais informações, consulte "[Introdução ao {% data variables.product.prodname_copilot %}](/copilot/getting-started-with-github-copilot)".

## Usar {% data variables.product.prodname_copilot %}

Você pode ver exemplos reais de {% data variables.product.prodname_copilot %} em ação. Para obter mais informações, consulte o site [{% data variables.product.prodname_copilot %}](https://copilot.github.com/).

O GitHub Copilot oferece sugestões de um modelo que o OpenAI construiu a partir de bilhões de linhas de código-fonte aberto. Como resultado, o conjunto de treinamento para {% data variables.product.prodname_copilot %} pode conter padrões de codificação inseguros, erros ou referências a APIs ou expressões desatualizadas. Quando {% data variables.product.prodname_copilot %} produz sugestões com base nesses dados de treinamento, essas sugestões também podem conter padrões indesejáveis.

Você é responsável por garantir a segurança e a qualidade do seu código. Recomendamos que você tome as mesmas precauções ao usar o código gerado por {% data variables.product.prodname_copilot %} que você faria ao usar qualquer código que não foi escrito por você. Essas precauções incluem testes rigorosos, digitalização de IP e rastreamento de vulnerabilidades de segurança. {% data variables.product.company_short %} fornece uma série de funcionalidades para ajudar você a monitorar e melhorar a qualidade do código, como {% data variables.product.prodname_actions %}, {% data variables.product.prodname_dependabot %}, {% data variables.product.prodname_codeql %} e {% data variables.product.prodname_code_scanning %}. Todos esses recursos são gratuitos para uso em repositórios públicos. Para obter mais informações, consulte "[Entendendo {% data variables.product.prodname_actions %}](/actions/learn-github-actions/understanding-github-actions)" e "[Funcionalidades de segurança de {% data variables.product.company_short %}](/code-security/getting-started/github-security-features).".

{% data variables.product.prodname_copilot %} usa filtros para bloquear palavras ofensivas nas instruções e evitar produzir sugestões em contextos sensíveis. Nós temos o compromisso de melhorar constantemente o sistema de filtros para detectar e remover de forma mais inteligente as sugestões ofensivas geradas por {% data variables.product.prodname_copilot %}, incluindo resultados parciais, discriminatórios ou abusivos. Se você vir uma sugestão ofensiva gerada por {% data variables.product.prodname_copilot %}, informe a sugestão diretamente para copilot-safety@github.com para que possamos melhorar nossas salvaguardas.

## Sobre a cobrança do {% data variables.product.prodname_copilot %}

{% data variables.product.prodname_copilot %} é um recurso pago, que exige uma assinatura mensal ou anual. Estudantes verificados e mantenedores de projetos populares de código aberto em {% data variables.product.prodname_dotcom %} são elegíveis para usar {% data variables.product.prodname_copilot %} gratuitamente. Se você cumprir os critérios de uma inscrição gratuita de {% data variables.product.prodname_copilot %}, você será notificado automaticamente ao visitar a página de assinatura de {% data variables.product.prodname_copilot %}. Se você não cumprir os critérios de uma inscrição gratuita de {% data variables.product.prodname_copilot %}, você terá um período de teste gratuito de 60 dias, após o qual será necessária uma assinatura paga para continuar a utilização. Para obter mais informações, consulte "[Sobre a cobrança do {% data variables.product.prodname_copilot %}](/billing/managing-billing-for-github-copilot/about-billing-for-github-copilot)".

## Sobre a licença para o plugin {% data variables.product.prodname_copilot %} no JetBrains IDEs

{% data variables.product.prodname_dotcom %}, Inc. é o fornecedor da licença do plugin do JetBrains. O acordo de licença do usuário final para este plugin são os [Termos para Produtos adicionais e Funcionalidades{% data variables.product.prodname_dotcom %} ](/free-pro-team@latest/site-policy/github-terms/github-terms-for-additional-products-and-features#github-copilot) e o uso deste plugin está sujeito a esses termos. O JetBrains não tem qualquer responsabilidade em relação ao plugin ou a esse Contrato. Ao usar o plugin, você concorda com os termos acima referidos.

## Leia mais

- "[{% data variables.product.company_short %} Termos para Produtos e Funcionalidades Adicionais](/free-pro-team@latest/site-policy/github-terms/github-terms-for-additional-products-and-features#github-copilot)"
