---
title: Escrever uma descrição da listagem para o seu aplicativo
intro: 'Para [listar seu aplicativo](/marketplace/listing-on-github-marketplace/) no {% data variables.product.prodname_marketplace %}, você precisará escrever as descrições dele e fornecer imagens que sigam as diretrizes do GitHub.'
redirect_from:
  - /apps/marketplace/getting-started-with-github-marketplace-listings/guidelines-for-writing-github-app-descriptions
  - /apps/marketplace/creating-and-submitting-your-app-for-approval/writing-github-app-descriptions
  - /apps/adding-integrations/listing-apps-on-github-marketplace/guidelines-for-creating-a-github-marketplace-listing
  - /apps/marketplace/listing-apps-on-github/guidelines-for-creating-a-github-marketplace-listing
  - /apps/marketplace/getting-started-with-github-marketplace-listings/guidelines-for-creating-github-marketplace-listing-images
  - /apps/marketplace/creating-and-submitting-your-app-for-approval/creating-github-marketplace-listing-images
  - /apps/marketplace/listing-on-github-marketplace/writing-github-marketplace-listing-descriptions
  - /marketplace/listing-on-github-marketplace/writing-github-marketplace-listing-descriptions
  - /developers/github-marketplace/writing-a-listing-description-for-your-app
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
shortTitle: Write listing descriptions
ms.openlocfilehash: f29e049529801011d25d2723c5851b56d7a8bb92
ms.sourcegitcommit: 1309b46201604c190c63bfee47dce559003899bf
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '146139253'
---
Estas são as diretrizes sobre os campos que você precisará preencher na seção **Descrição da listagem** da listagem de rascunho.

## Nomenclatura e links

### Nome da listagem

O nome da listagem será exibido na [home page do {% data variables.product.prodname_marketplace %}](https://github.com/marketplace). O nome é limitado a 255 caracteres e pode ser diferente do nome do seu aplicativo. Seu anúncio não pode ter o mesmo nome de uma conta existente em {% data variables.product.product_location %}, a menos que o nome seja o seu próprio usuário ou nome de organização. 

### Descrição muito curta

A comunidade verá a descrição "muito curta" abaixo do nome do aplicativo na [home page do {% data variables.product.prodname_marketplace %}](https://github.com/marketplace).

![Descrição curta do aplicativo em {% data variables.product.prodname_marketplace %}](/assets/images/marketplace/marketplace_short_description.png)

#### Comprimento

Recomendamos manter descrições curtas para com 40 a 80 caracteres. Embora você possa usar mais caracteres, as descrições concisas são mais fáceis para os clientes ler e entender rapidamente.

#### Conteúdo

- Descreva as funcionalidades do aplicativo. Não use este espaço para uma chamada para ação. Por exemplo:

  **O QUE FAZER:** gerenciamento leve de projetos para problemas do GitHub

  **O QUE NÃO FAZER:** gerenciar seus projetos e problemas no GitHub

  **Dica:** adicione um "s" ao final do verbo em uma chamada à ação para transformá-lo em uma descrição aceitável: _gerencia seus projetos e problemas no GitHub_

- Não repita o nome do aplicativo na descrição.

  **O QUE FAZER:** uma ferramenta de integração contínua nativa de contêiner

  **O QUE NÃO FAZER:** o Skycap é uma ferramenta de integração contínua nativa de contêiner

#### Formatação

- Use sempre letras maiúsculas na frase. Use maiúscula somente para a primeira letra e para substantivos próprios.

- Não use pontuação no final da sua descrição curta. As descrições curtas não devem incluir frases completas e definitivamente não devem incluir mais de uma frase.

- Use maiúscula apenas para os substantivos próprios. Por exemplo:

  **O QUE FAZER:** automação de entrega com um clique para desenvolvedores da Web

  **O QUE NÃO FAZER:** automação de entrega com um clique para desenvolvedores da Web

- Sempre use uma [vírgula de série](https://en.wikipedia.org/wiki/Serial_comma) em listas.

- Evite referir-se à comunidade do GitHub como "usuários".

  **O QUE FAZER:** crie problemas automaticamente para as pessoas na sua organização

  **O QUE NÃO FAZER:** crie problemas automaticamente para os usuários de uma organização

- Evite acrônimos, a menos que estejam conhecidos (como, por exemplo, API). Por exemplo:

  **O QUE FAZER:** painéis de tarefas Agile, estimativas e relatórios sem sair do GitHub

  **O QUE NÃO FAZER:** painéis de tarefas Agile, estimativas e relatórios sem sair da interface do usuário do GitHub

### Categorias

Os aplicativos em {% data variables.product.prodname_marketplace %} podem ser exibidos por categoria. Selecione a categoria que melhor descreve a funcionalidade principal do aplicativo no menu suspenso **Categoria principal** e, opcionalmente, selecione uma **Categoria secundária** adequada ao aplicativo.

### Idiomas com suporte

Se o seu aplicativo só funciona com idiomas específicos, selecione até 10 linguagens de programação com as quais o seu aplicativo é compatível. Esses idiomas são exibidos na página de listagem do {% data variables.product.prodname_marketplace %} do seu aplicativo. Esse campo é opcional.

### Listar URLs

**URLs necessárias**
* **URL de suporte ao cliente:** a URL de uma página da Web à qual os clientes acessarão quando tiverem dúvidas referentes ao suporte técnico, ao produto ou à conta.
* **URL da política de privacidade:** a página da Web que exibe a política de privacidade do aplicativo.
* **URL de instalação:** esse campo é mostrado somente para Aplicativos OAuth. (Os Aplicativos do GitHub não usam essa URL porque usam a URL de Instalação opcional da página de configurações do Aplicativo do GitHub). Quando um cliente comprar seu Aplicativo OAuth, o GitHub o redirecionará para a URL de instalação após a instalação do aplicativo. Você precisará redirecionar os clientes para `https://github.com/login/oauth/authorize` a fim de iniciar o fluxo de autorização do OAuth. Confira "[Novas compras para Aplicativos OAuth](/marketplace/integrating-with-the-github-marketplace-api/handling-new-purchases-and-free-trials/)" para obter mais detalhes. Ignore este campo se você estiver listando um aplicativo GitHub.

**URLs opcionais**
* **URL da empresa:** um link para o site da sua empresa.
* **URL de status:** um link para uma página da Web que exibe o status do aplicativo. As páginas de status podem incluir relatórios de incidente atuais e em forma de histórico, status do tempo de atividade do aplicativo, bem como manutenção programada.
* **URL da documentação:** um link para a documentação que ensina os clientes a usar o aplicativo.

## Logotipo e cartão de recurso

{% data variables.product.prodname_marketplace %} exibe todas as listagens com um logotipo quadrado dentro de um selo circular para distinguir visualmente os aplicativos.

![Imagens e logotipo do GitHub Marketplace](/assets/images/marketplace/marketplace-logo-and-badge.png)

Um cartão de recursos consiste do logotipo, nome e uma imagem de fundo personalizada do seu aplicativo que capta a personalidade da sua marca. O {% data variables.product.prodname_marketplace %} exibirá esse cartão se o seu aplicativo for um dos quatro aplicativos em destaque aleatórios na parte superior da [home page](https://github.com/marketplace). A descrição muito curta de cada aplicativo é exibida abaixo de seu cartão de recursos.

![Cartão de recurso](/assets/images/marketplace/marketplace_feature_card.png)

À medida que você faz o upload das imagens e seleciona as cores, sua listagem de rascunho do {% data variables.product.prodname_marketplace %} exibirá uma prévia do seu logotipo e do seu cartão de recurso.

#### Diretrizes para logotipos

Você deve enviar uma imagem personalizada para o logotipo. Escolha uma cor de fundo para o selo.

- Faça upload de uma imagem do logotipo com, pelo menos, 200 pixels x 200 pixels para que seu logotipo não tenha que ser dimensionado quando a sua listagem for publicada.
- Os logotipos serão cortados em um quadrado. Recomendamos fazer o upload de um arquivo de imagem quadrada com seu logotipo no centro.
- Para obter o melhor resultado, faça o upload de uma imagem de logotipo com um fundo transparente.
- Para dar a aparência de um selo perfeito, escolha uma cor de fundo para o selo que corresponda à cor de fundo (ou transparência) da imagem do seu logotipo.
- Evite usar imagens do logotipo com palavras ou texto. Os logotipos com texto não são bem dimensionados em telas pequenas.

#### Diretrizes para cartões de recurso

Você deve enviar uma imagem de fundo personalizada para o cartão de recurso. Para o nome do aplicativo, escolha uma cor do texto.

- Use um padrão ou textura na sua imagem de fundo para dar ao seu cartão uma identidade visual e ajudá-lo a destacar-se com relação ao fundo escuro da página inicial do {% data variables.product.prodname_marketplace %}. Os cartões de recursos devem capturar a personalidade da sua marca.
- A iImagem de fundo mede 965 pixels x 482 pixels (largura x altura).
- Escolha uma cor de texto para o nome do aplicativo que aparece claramente sobre a imagem de fundo.

## Detalhes da listagem

Para acessar a página inicial do seu aplicativo, clique no nome do aplicativo na página inicial ou na página de categoria do {% data variables.product.prodname_marketplace %}. A página de destino exibe uma descrição mais longa do aplicativo, que inclui duas partes: uma "Descrição introdutória" e uma "Descrição detalhada".

A sua "Descrição introdutória" é exibida no topo da página inicial {% data variables.product.prodname_marketplace %} do seu aplicativo.

![Descrição introdutória do {% data variables.product.prodname_marketplace %}](/assets/images/marketplace/marketplace_intro_description.png)

Se você clicar em **Ler mais…** , a "Descrição detalhada" será exibida.

![Descrição detalhada do {% data variables.product.prodname_marketplace %}](/assets/images/marketplace/marketplace_detailed_description.png)

Siga estas instruções para escrever estas descrições.

### Comprimento

Recomendamos escrever um resumo de uma a duas frases de alto nível entre 150-250 caracteres no campo "Descrição introdutória" obrigatório ao [listar seu aplicativo](/marketplace/listing-on-github-marketplace/). Embora seja permitido o uso de mais caracteres, os resumos concisos são mais fáceis de ler e entender pelos clientes rapidamente.

Você pode adicionar mais informações ao campo opcional "Descrição detalhada". Você verá essa descrição ao clicar em **Ler mais…** abaixo da descrição introdutória na página de aterrissagem do seu aplicativo. Uma descrição detalhada consiste em três a cinco [propostas de valor](https://en.wikipedia.org/wiki/Value_proposition), com uma a duas frases descrevendo cada uma delas. Você pode usar até 1.000 caracteres para essa descrição.

### Conteúdo

- Sempre comece descrições introdutórias com o nome do seu aplicativo.

- Sempre escreva as descrições e as propostas de valores usando a voz ativa.

### Formatação

- Sempre use as letras maiúsculas adequadamente nas frases dos títulos para as propostas de valor. Use maiúscula somente para a primeira letra e para substantivos próprios.

- Use pontos nas suas descrições. Evite pontos de exclamação.

- Não use pontuação no final dos títulos da sua proposição de valor. Títulos de proposição de valor não devem incluir frases completas,e não devem incluir mais de uma frase.

- Para cada proposta de valor, inclua um título seguido de um parágrafo de descrição. Formate o título como um [cabeçalho de nível três](/articles/basic-writing-and-formatting-syntax/#headings) usando o Markdown. Por exemplo:

  ### Aprenda as habilidades de que você precisa

  Com o GitHub Skills, você pode aprender a usar o GitHub, se comunicar de modo mais efetivo usando Markdown, gerenciar conflitos de mesclagem, entre outras coisas.

- Use maiúscula apenas para os substantivos próprios.

- Sempre use a [vírgula de série](https://en.wikipedia.org/wiki/Serial_comma) em listas.

- Evite referir-se à comunidade do GitHub como "usuários".

  **O QUE FAZER:** crie problemas automaticamente para as pessoas na sua organização

  **O QUE NÃO FAZER:** crie problemas automaticamente para os usuários de uma organização

- Evite acrônimos, a menos que estejam conhecidos (como, por exemplo, API).

## Capturas de tela dos produtos

Você pode enviar até cinco imagens de captura de tela do seu aplicativo para ser exibidas na página inicial do seu aplicativo. Adicione uma legenda opcional para cada captura de tela para fornecer contexto. Após enviar suas capturas de tela, você pode arrastá-las para a ordem que você deseja que sejam exibidas na página inicial.

### Diretrizes para capturas de tela

- As imagens devem ser de alta resolução (pelo menos 1200 px de largura).
- Todas as imagens devem ter a mesma altura e largura (proporção de aspecto) para evitar pular páginas quando as pessoas clicam de uma imagem para a seguinte.
- Mostre a maior quantidade possível de interface de usuário para que as pessoas possam ver o que seu aplicativo faz.
- Ao capturar telas do seu app em um navegador, inclua apenas o conteúdo na janela de exibição. Evite incluir a barra de endereço, barra de título ou ícones da barra de ferramentas, que não são bem dimensionados para tamanhos de tela menores.
- O GitHub exibe as capturas de tela das quais você fizer o upload em uma caixa na página inicial do seu aplicativo. Portanto, você não precisa adicionar caixas ou bordas ao redor de suas capturas de tela.
- As legendas são mais eficazes quando são curtas e ágeis.

![Imagem de captura de tela do GitHub Marketplace](/assets/images/marketplace/marketplace-screenshots.png)
