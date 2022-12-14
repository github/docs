---
title: Recitação de pesquisa
intro: A first look at rote learning in {% data variables.product.prodname_dotcom %} Copilot suggestions.
redirect_from:
- /early-access/github/copilot/research-recitation
versions:
  fpt: '*'
ms.openlocfilehash: cacf9a63013c5bbf9b7d867e088640ff01400289
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 05/17/2022
ms.locfileid: "145065520"
---
Por: Albert Ziegler (@wunderalbert)

## <a name="-data-variablesproductprodname_dotcom--copilot-parrot-or-crow"></a>Copilot de {% data variables.product.prodname_dotcom %}: Papagaio ou corvo?
Uma primeira olhada no trecho de aprendizado nas sugestões do Copilot de {% data variables.product.prodname_dotcom %}.

## <a name="introduction"></a>Introdução

O copilot de {% data variables.product.prodname_dotcom %} é treinado em bilhões de linhas de código público. As sugestões que ele faz para você são adaptadas ao seu código, mas o processamento por trás dele é finalmente informado pelo código escrito por outros.

Qual é a relação direta entre o código sugerido e o código que o informou? Em um artigo recente e instigante<sup id="anchor1">[1](#footnote1)</sup>, Bender, Gebru et al. cunharam a frase “papagaios estocásticos” para sistemas de inteligência artificial como os que ativam o {% data variables.product.prodname_dotcom %} Copilot. Ou conforme comentou um colega engenheiro de machine learning em {% data variables.product.company_short %}<sup id="anchor2">[2](#footnote2)</sup> durante uma conversa informal: esses sistemas podem parecer como “uma criança com uma memória fotográfica”.

Trata-se de uma simplificação excessiva. Muitas sugestões do Copilot de {% data variables.product.prodname_dotcom %} parecem bastante adaptadas para a base de código em que o usuário está trabalhando. Muitas vezes, ele se parece menos com um papagaio e mais com um corvo que cria ferramentas com base em blocos pequenos<sup id="anchor3">[3](#footnote3)</sup>. Mas não há como negar que o Copilot de {% data variables.product.prodname_dotcom %} tem uma memória impressionante:

![A demonstração de um filme do Copilot](/assets/images/help/copilot/resources_recitation_example_zen.gif)

Aqui, instrui intencionalmente<sup id="anchor4">[4](#footnote4)</sup> o {% data variables.product.prodname_dotcom %} Copilot a recitar um texto bem conhecido que obviamente ele sabe de cor. Eu também sei alguns textos de cor. Por exemplo, ainda me lembro de alguns poemas que aprendi na escola. No entanto, não importa o tópico , uma vez me senti tentado a fazer sair de uma conversa, falando de tetrâmetro iâmbico e com emoção sobre os narcisos.

Então isso (ou o equivalente a codificação) é algo que o Copilot de {% data variables.product.prodname_dotcom %} está propenso a fazer? Quantas das suas sugestões são únicas, e com que frequência apenas repetem algum código que ele viu durante o treinamento?

## <a name="the-experiment"></a>O Experimento

Durante o desenvolvimento inicial do Copilot de {% data variables.product.prodname_dotcom %}, cerca de 300 funcionários o usaram no seu trabalho diário como parte de um teste interno. Este teste forneceu um bom conjunto de dados para testar a recitação. Eu queria saber quantas vezes o Copilot de {% data variables.product.prodname_dotcom %} lhes deu uma sugestão que foi citada de algo que já havia visto antes.

Limitei a investigação às sugestões do Python em 7 de Maio de 2021 (dia em que começamos a extrair esses dados). Isso deixou 453.780 sugestões espalhadas por mais de 396 "semanas de usuário", ou seja, semanas de calendário, durante as quais um usuário usou ativamente o Copilot de {% data variables.product.prodname_dotcom %} no código Python.

### <a name="automatic-filtering"></a>Filtragem automática

453.780 sugestões são muitas, mas muitas delas podem ser ignoradas imediatamente. Para chegar aos casos interessantes, considere as sequências de "palavras" que ocorrem na sugestão na mesma ordem em que o código do Copilot {% data variables.product.prodname_dotcom %} foi treinado. Neste contexto, pontuação, parênteses ou outros caracteres especiais contam todos como "palavras", enquanto abas, espaços ou até mesmo quebras de linha são ignoradas completamente. Afinal, uma citação ainda é uma citação, ainda que seja endentada por 1 aba ou 8 espaços.

Por exemplo, uma das sugestões do Copilot de {% data variables.product.prodname_dotcom %} foi a seguinte expressão regular para números separados por espaço em branco:

```
r'^\s+\d+\s+\d+\s+\d+\s+\d+\s+\d+\s+\d+\s+\d+\s+\d+\s+\d+\s+\d+\s+\d+\s+\d+\s+\d+\s+\d+\s+\d+\s+\d+'
```

Isso seria exatamente 100 "palavras" no sentido acima, mas é um exemplo particularmente denso: a linha de código média não vazia tem apenas 10 “palavras”. Eu restringi essa investigação a casos em que a sobreposição com o código do Copilot de{% data variables.product.prodname_dotcom %} tenha sido treinada em pelo menos 60 dessas "palavras". Temos que definir o limite em algum lugar, e acho que é bastante raro que sequências mais curtas sejam de grande interesse. De fato, a maioria dos casos interessantes identificados mais tarde estão bem cientes desse limite de 60.

Se a sobreposição se estender ao que o usuário já escreveu, isso também conta para o comprimento. Afinal, o usuário pode ter escrito esse contexto com a ajuda do Copilot de {% data variables.product.prodname_dotcom %}!

No exemplo a seguir, o usuário começou a escrever um trecho muito comum. O Copilot de {% data variables.product.prodname_dotcom %} o completa. Embora a conclusão em si seja um pouco curta, junto com o código já existente, ela abre o limite e é mantida. 

![Código de exemplo](/assets/images/help/copilot/example_last_straw.png)

Este procedimento é permissivo o suficiente para deixar muitos exemplos relativamente "enfadonhos", como os dois acima. Mas ainda é eficaz em fazer as análises humanas para os casos interessantes, resolvendo mais de 99% das sugestões do Copilot.

### <a name="manual-bucketing"></a>Agrupamento manual em bucket

Depois da filtragem, restavam 473 sugestões. Mas elas surgiram em formas muito diferentes:

1. Alguns eram, basicamente, apenas repetições de outro caso que passou pela filtragem. Por exemplo, às vezes, o Copilot de {% data variables.product.prodname_dotcom %} faz uma sugestão, o desenvolvedor digita uma linha de comentário e o Copilot de {% data variables.product.prodname_dotcom %} oferece uma sugestão muito semelhante novamente. Retirei estes casos da análise como duplicados.
2. Algumas eram sequências longas e repetitivas. Como o exemplo a seguir, em que os blocos repetidos de `‘<p>’` são, naturalmente, encontrados em algum lugar no conjunto de treinamento: <br>![Exemplos de repetições](/assets/images/help/copilot/example_repetitions.png)<br> Essas sugestões podem ser úteis (casos de teste, expressões regulares) ou inúteis (como, neste caso, suspeito). Seja como for, eles não se coadunam com a ideia de uma aprendizagem isolada que tive em mente quando iniciei esta investigação.
3. Alguns eram inventários padrão, como números naturais, números primos do mercado ou marcadores do mercado de ações, ou o alfabeto grego: <br>![Exemplo do alfabeto grego](/assets/images/help/copilot/example_greek.png)
4. Alguns eram formas comuns, simples, talvez mesmo universais, de fazer coisas com um nível muito baixo natural de liberdade. Por exemplo, a parte central do disposto a seguir me parece ser a forma normal de utilizar o pacote BeautifulSoup para analisar uma lista da Wikipédia. Na verdade, o melhor snippet correspondente encontrado nos dados de treinamento<sup id="anchor5">[5](#footnote5)</sup> do {% data variables.product.prodname_dotcom %} Copilot usa esse código para analisar um artigo diferente e realize tarefas diferentes com os resultados. <br>![Exemplo de Beautiful Soup](/assets/images/help/copilot/example_beautiful_soup.png) <br>Isso também não se encaixa na minha ideia de uma citação. É como se alguém dissesse "Estou tirando o lixo e voltarei em breve" -- isso é uma afirmação de fato, não uma citação, mesmo que essa frase em particular tenha sido pronunciada muitas vezes antes.
5. E, além disso, há todos os outros casos. Aqueles que têm pelo menos alguma sobreposição específica em códigos ou comentários. Isso é o que mais me interessa mais e em que vou me concentrar a partir de agora.

Essa criação de buckets necessariamente tem alguns casos de borda<sup id="anchor6">[6](#footnote6)</sup>, e sua quilometragem pode variar na forma em como você acha que eles devem ser classificados. Talvez você até discorde de todo o conjunto de buckets.

É por isso que liberamos o código do conjunto de dados<sup id="anchor7">[7](#footnote7)</sup>. Então, se você pensar um pouco diferente sobre o bucket ou se estiver interessado em sobre como os outros aspectos Copilot do GitHub repete o seu conjunto de treinamento, convido que você ignore a minha próxima seção e tire as suas próprias conclusões.

## <a name="results"></a>Resultados

![Gráfico de visão geral](/assets/images/help/copilot/plot_buckets.png)

Para a maioria das sugestões do Copilot de {% data variables.product.prodname_dotcom %}, o nosso filtro automático não encontrou nenhuma sobreposição significativa com o código usado para o treinamento. Mas chamou a nossa atenção para 473 casos. Remover o primeiro bucket (casos muito parecidos com outros casos) me deixou com 185 sugestões. Do total, 144 foram organizados em buckets de 2 a 4. Este deixou 41 casos no último bucket, as “receitas”, no sentido do termo que tenho em mente.

Isso corresponde a **um evento de recitação a cada dez semanas de usuário** (intervalo de confiança de 95%: sete a treze semanas, por meio de um teste de Poisson).

Claro, isso foi medido nos desenvolvedores de {% data variables.product.prodname_dotcom %} e da Microsoft que testaram o Copilot de {% data variables.product.prodname_dotcom %}. Se o seu comportamento de codificação for muito diferente do deles, seus resultados podem ser diferentes. Em particular, alguns destes desenvolvedores estão trabalhando apenas em projetos Python — eu não consegui distinguir isso e, portanto, contei a todos que escrevem Python em uma determinada semana como usuário.

1 evento em 10 semanas não parece muita coisa, mas também não é 0. E encontrei três coisas que me impressionaram.

### <a name="-data-variablesproductprodname_dotcom--copilot-quotes-when-it-lacks-specific-context"></a>As citações do Copilot de {% data variables.product.prodname_dotcom %} quando não possui contexto específico

Se eu quiser aprender a letra de uma música, terei de ouvir várias vezes. O Copilot de {% data variables.product.prodname_dotcom %} não é diferente: para aprender um trecho de código de cor, deve ver esse trecho muitas vezes. Cada arquivo só é mostrado no Copilot de {% data variables.product.prodname_dotcom %} uma vez. Portanto, o trecho precisa existir em muitos arquivos diferentes no código público.

Dos 41 casos principais que destacamos durante a etiquetagem manual, nenhum aparece em menos de 10 arquivos diferentes. A maioria dos (35 casos) aparecem mais de cem vezes. Uma vez, o Copiloto de {% data variables.product.prodname_dotcom %} sugeriu que se iniciasse um arquivo vazio com algo que ele tinha até visto mais do que um trecho de 700.000 vezes diferentes durante o seu treinamento -- era a Licença Pública Geral do GNU.

O gráfico a seguir mostra o número de arquivos correspondentes dos resultados no bucket 5 (uma marca vermelha na parte inferior para cada resultado) em comparação com 2 a 4 buckets. Deixei de fora o balde 1, que, na verdade, não passa de uma mistura de duplicações de 2 a 4 casos de bucket e de duplicações de casos de balde 5. A distribuição inferida é exibida como uma linha vermelha; ela atinge entre 100 e 1000 correspondências.

![Gráfico do gráfico de correspondências](/assets/images/help/copilot/plot_copies.png)

### <a name="-data-variablesproductprodname_dotcom--copilot-mostly-quotes-in-generic-contexts"></a>O Copilot de {% data variables.product.prodname_dotcom %} faz citações, principalmente, principalmente em contextos genéricos

Quando o tempo passa, cada arquivo torna-se único. Mas o {% data variables.product.prodname_dotcom %} Copilot não espera por isso<sup id="anchor8">[8](#footnote8)</sup>: ele oferecerá soluções, enquanto seu arquivo ainda for extremamente genérico. E na ausência de algo específico para continuar, é muito mais provável que faça citação de outro lugar do que seria caso contrário.

![Gráfico de comprimento do contexto](/assets/images/help/copilot/plot_context.png)

É claro que os desenvolvedores de software gastam a maior parte do seu tempo dentro dos arquivos, onde o contexto é único o suficiente para que o Copilot de {% data variables.product.prodname_dotcom %} ofereça sugestões exclusivas. Em contrapartida, as sugestões no início são um pouco acertadas e falhas, já que o Copilot de {% data variables.product.prodname_dotcom %} não pode saber qual será o programa. Mas, às vezes, especialmente em projetos de brinquedo ou scripts independentes, uma quantidade modesta de contexto pode ser suficiente para arriscar uma estimativa razoável do que o usuário queria fazer. Às vezes, ainda é genérico o suficiente para que o Copilot de {% data variables.product.prodname_dotcom %} pense que uma das soluções que ele conhece de coração é promissora:

![Código de exemplo](/assets/images/help/copilot/example_robot.png)

Isto foi basicamente tirado diretamente de um trabalho de classe de robótica carregado em diferentes variações<sup id="anchor9">[9](#footnote9)</sup>.

### <a name="detection-is-only-as-good-as-the-tool-that-does-the-detecting"></a>A detecção é tão boa quanto a ferramenta que realiza a detecção

Na sua forma atual, o filtro retornará um bom número de casos sem interesse quando aplicado amplamente. Mas ainda não deveria ter muito ruído. Para os usuários internos no experimento, teria sido um pouco mais de um achado por semana em média (embora, provavelmente, tivesse ocorrido em explosões!). Desses casos, cerca de 17% (intervalo de confiança de 95% usando um teste binômio: 14% a 21%) estaria no quinto bucket.

E, obviamente, nada é sempre infalível: isso também pode ter falhas. Alguns casos são um pouco difíceis de detectar pela ferramenta que estamos criando, mas ainda temos uma fonte óbvia. Para retornar para o Zen de Python:

![Variação Zen](/assets/images/help/copilot/resources_recitation_example_zen_caw.gif)

## <a name="conclusion-and-next-steps"></a>Conclusão e próximos passos

Esta investigação demonstra que o {% data variables.product.prodname_dotcom %} Copilot _pode_ citar um corpo de código textualmente, mas raramente faz isso e, quando isso acontece, ele cita o código que todos citam, principalmente no início de um arquivo, como que para quebrar o gelo.

Mas ainda há uma grande diferença entre o código de recitação do GitHub Copilot e eu recitando um poema: eu _sei_ quando estou recitando. Eu também gostaria de saber quando o Copilot está repetindo o código existente, em vez de apresentar as suas próprias ideias. Dessa forma, eu posso procurar informações secundárias sobre aquele código e incluir crédito onde se tem de fazer.

A resposta é óbvia: compartilhar a solução de pré-filtragem que utilizamos nesta análise para detectar a sobreposição com o conjunto de treinamento. Quando uma sugestão contém trechos copiados do conjunto de treinamento, a interface do usuário deverá simplesmente informar de onde é citada. Dessa forma, você pode incluir a atribuição adequada ou decidir contra o uso desse código completamente.

Esta pesquisa de duplicação ainda não está integrada à pré-visualização técnica, mas tencionamos fazê-lo. E continuaremos a trabalhar na diminuição das taxas de recitação e na clarificação da sua detecção.

<br><br>

### <a name="footnotes"></a>Notas de rodapé

<a name="footnote1">1</a>: [On the Dangers of Stochastic Parrots: Can Language Models Be Too Big? (Sobre os perigos dos papagaios estocásticos: os modelos de linguagem podem ser grandes demais?)](https://dl.acm.org/doi/10.1145/3442188.3445922) [^](#anchor1)

<a name="footnote2">2</a>: [Tiferet Gazit](https://github.com/tiferet) [^](#anchor2)

<a name="footnote3">3</a>: confira von Bayern et al. sobre a sabedoria criativa dos corvos: [Compound tool construction by New Caledonian crows (Construção de ferramenta composta pelos corvos da Nova Caledônia)](https://www.nature.com/articles/s41598-018-33458-z) [^](#anchor3)

<a name="footnote4">4</a>: confira Carlini et al. sobre o desencadeamento deliberado da recuperação dos dados de treinamento: [Extracting Training Data from Large Language Models (Extração de dados de treinamento de modelos de linguagem grandes)](https://arxiv.org/pdf/2012.07805.pdf) [^](#anchor4)

<a name="footnote5">5</a>: jaeteekae: [DelayedTwitter](https://github.com/jaeteekae/DelayedTwitter/blob/0a0b03de74c03cfbf36877ffded0cb1312d59642/get_top_twitter_accounts.py#L21) [^](#anchor5)

<a name="footnote6">6</a>: mesmo assim, provavelmente não _muitos_. Pedi a alguns desenvolvedores que me ajudassem a etiquetar os casos e todos foram convidados a sinalizar qualquer incerteza com seu julgamento. Isso aconteceu apenas em 34 casos, ou seja, menos de 10%. [^](#anchor6)

<a name="footnote7">7</a>: no [conjunto de dados público](/assets/images/help/copilot/matched_snippets.csv), listei a parte da sugestão do Copilot que também foi encontrada no conjunto de treinamento, a frequência com que ela foi encontrada e um link para um exemplo em que ela ocorre no código público. Por motivos de privacidade, eu não incluo a parte não correspondente da conclusão ou o contexto do código que o usuário digitou (apenas uma indicação do seu comprimento). [^](#anchor7)

<a name="footnote8">8</a>: na verdade, desde que este experimento foi feito, o {% data variables.product.prodname_dotcom %} Copilot _foi_ alterado para exigir um conteúdo de arquivo mínimo. Por conseguinte, algumas das sugestões aqui sinalizadas não teriam sido apresentadas pela versão atual. [^](#anchor8)

<a name="footnote9">9</a>: por exemplo, jenevans33: [CS8803-1](https://github.com/jenevans33/CS8803-1/blob/eca1bbc27ca6f7355dbc806b2f95964b59381605/src/Final/ekfcode.py#L23) [^](#anchor9)
