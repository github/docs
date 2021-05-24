---
title: Escrever uma descrição da listagem para o seu aplicativo
intro: 'Para [listar seu aplicativo](/marketplace/listing-on-github-marketplace/) no {% data variables.product.prodname_marketplace %}, você precisará escrever as descrições do seu aplicativo e fornecer imagens que seguem as diretrizes do GitHub.'
redirect_from:
  - /apps/marketplace/getting-started-with-github-marketplace-listings/guidelines-for-writing-github-app-descriptions/
  - /apps/marketplace/creating-and-submitting-your-app-for-approval/writing-github-app-descriptions/
  - /apps/adding-integrations/listing-apps-on-github-marketplace/guidelines-for-creating-a-github-marketplace-listing/
  - /apps/marketplace/listing-apps-on-github/guidelines-for-creating-a-github-marketplace-listing/
  - /apps/marketplace/getting-started-with-github-marketplace-listings/guidelines-for-creating-github-marketplace-listing-images/
  - /apps/marketplace/creating-and-submitting-your-app-for-approval/creating-github-marketplace-listing-images/
  - /apps/marketplace/listing-on-github-marketplace/writing-github-marketplace-listing-descriptions/
  - /marketplace/listing-on-github-marketplace/writing-github-marketplace-listing-descriptions
  - /developers/github-marketplace/writing-a-listing-description-for-your-app
versions:
  free-pro-team: '*'
topics:
  - Marketplace
---
Aqui estão as diretrizes sobre os campos que você precisará preencher na seção de **Descrição da listagem** do seu rascunho da listagem.

### Nomenclatura e links

#### Nome da listagem

O nome do seu anúncio irá aparecer na [página inicial de {% data variables.product.prodname_marketplace %}](https://github.com/marketplace). O nome é limitado a 255 caracteres e pode ser diferente do nome do seu aplicativo. O seu anúncio não pode ter o mesmo nome de um usuário existente de {% data variables.product.product_name %}, a menos que o nome seja seu próprio nome de usuário ou organização.

#### Descrição muito curta

A comunidade verá a descrição "muito curta" sob o nome de seu aplicativo [na página inicial do {% data variables.product.prodname_marketplace %}](https://github.com/marketplace).

![Descrição curta do aplicativo em {% data variables.product.prodname_marketplace %}](/assets/images/marketplace/marketplace_short_description.png)

##### Comprimento

Recomendamos manter descrições curtas para com 40 a 80 caracteres. Embora você possa usar mais caracteres, as descrições concisas são mais fáceis para os clientes ler e entender rapidamente.

##### Conteúdo

- Descreva as funcionalidades do aplicativo. Não use este espaço para uma chamada para ação. Por exemplo:

  **RECOMENDADO:** Gerenciamento de projeto leve para problemas do GitHub

  **NÃO RECOMENDADO:** Gerencie seus projetos e problemas no GitHub

  **Dica:** Adicione um "s" ao final do verbo em uma chamada para ação para transformá-lo em uma descrição aceitável: _Gerencia seus projetos e problemas no GitHub_

- Não repita o nome do aplicativo na descrição.

  **RECOMENDADO:** Uma ferramenta de integração contínua nativa para o contêiner

  **NÃO RECOMENDADO:** O Skycap é uma ferramenta de integração contínua nativa do contêiner

##### Formatação

- Use sempre letras maiúsculas na frase. Use maiúscula somente para a primeira letra e para substantivos próprios.

- Não use pontuação no final da sua descrição curta. As descrições curtas não devem incluir frases completas e definitivamente não devem incluir mais de uma frase.

- Use maiúscula apenas para os substantivos próprios. Por exemplo:

  **RECOMENDADO:** Automação de entrega com um clique para desenvolvedores web

  **NÃO RECOMENDADO:** Automação de entrega com um clique para desenvolvedores web

- Sempre use uma [vírgula de série](https://en.wikipedia.org/wiki/Serial_comma) nas listas.

- Evite referir-se à comunidade do GitHub como "usuários".

  **RECOMENDADO:** Crie problemas automaticamente para pessoas da sua organização

  **NÃO RECOMENDADO:** Crie problemas automaticamente para usuários de uma organização

- Evite acrônimos, a menos que estejam conhecidos (como, por exemplo, API). Por exemplo:

  **RECOMENDADO:** Quadros de tarefas ágeis, estimativas e relatórios sem sair do GitHub

  **NÃO RECOMENDADO:** Quadros de tarefas ágeis, estimativas e relatórios sem sair da interface de usuário do GitHub

#### Categorias

Os aplicativos em {% data variables.product.prodname_marketplace %} podem ser exibidos por categoria. Selecione a categoria que melhor descreve a principal funcionalidade do seu aplicativo no menu suspenso **categoria primária**, e opcionalmente, selecione uma **categoria secundária** que se encaixa no seu aplicativo.

#### Linguagens compatíveis

Se o seu aplicativo só funciona com idiomas específicos, selecione até 10 linguagens de programação com as quais o seu aplicativo é compatível. Esses idiomas são exibidos na página de listagem do {% data variables.product.prodname_marketplace %} do seu aplicativo. Este campo é opcional.

#### Listar URLs

**URLs obrigatórias**
* **URL de suporte ao cliente:** A URL de uma página da web para a qual seus clientes acessarão quando tiverem dúvidas referente ao suporte técnico, produtos ou conta.
* **URL da política de privacidade:** A página da web que exibe a política de privacidade do seu aplicativo.
* **URL de instalação:** Este campo é exibido somente para os aplicativos OAuth. (Os aplicativos GitHub não usam esta URL porque usam a URL de configuração opcional em sua página de configurações.) Quando um cliente compra seu aplicativo OAuth, o GitHub irá redirecionar os clientes para a URL de instalação após instalarem o aplicativo. Você deverá redirecionar os clientes para `https://github.com/login/oauth/authorize` para iniciar o fluxo de autorização do OAuth. Consulte "[Novas compras para os aplicativos OAuth](/marketplace/integrating-with-the-github-marketplace-api/handling-new-purchases-and-free-trials/)" para obter mais informações. Ignore este campo se você estiver listando um aplicativo GitHub.

**URLs opcionais**
* **URL da empresa:** Um link para o site da sua empresa.
* **URL de status:** Um link para uma página da web que exibe o status do seu aplicativo. As páginas de status podem incluir relatórios de incidente atuais e em forma de histórico, status do tempo de atividade do aplicativo, bem como manutenção programada.
* **URL da documentação:** Um link para a documentação que ensina os clientes a usar seu aplicativo.

### Logotipo e cartão de recurso

{% data variables.product.prodname_marketplace %} exibe todas as listagens com um logotipo quadrado dentro de um selo circular para distinguir visualmente os aplicativos.

![Imagens e logotipo do GitHub Marketplace](/assets/images/marketplace/marketplace-logo-and-badge.png)

Um cartão de recursos consiste do logotipo, nome e uma imagem de fundo personalizada do seu aplicativo que capta a personalidade da sua marca. {% data variables.product.prodname_marketplace %} exibe este cartão se seu aplicativo for um dos quatro aplicativos destacado aleatoriamente na parte superior da [página inicial](https://github.com/marketplace). A descrição muito curta de cada aplicativo é exibida abaixo de seu cartão de recursos.

![Cartão de recurso](/assets/images/marketplace/marketplace_feature_card.png)

À medida que você faz o upload das imagens e seleciona as cores, sua listagem de rascunho do {% data variables.product.prodname_marketplace %} exibirá uma prévia do seu logotipo e do seu cartão de recurso.

##### Diretrizes para logotipos

Você deve enviar uma imagem personalizada para o logotipo. Escolha uma cor de fundo para o selo.

- Faça upload de uma imagem do logotipo com, pelo menos, 200 pixels x 200 pixels para que seu logotipo não tenha que ser dimensionado quando a sua listagem for publicada.
- Os logotipos serão cortados em um quadrado. Recomendamos fazer o upload de um arquivo de imagem quadrada com seu logotipo no centro.
- Para obter o melhor resultado, faça o upload de uma imagem de logotipo com um fundo transparente.
- Para dar a aparência de um selo perfeito, escolha uma cor de fundo para o selo que corresponda à cor de fundo (ou transparência) da imagem do seu logotipo.
- Evite usar imagens do logotipo com palavras ou texto. Os logotipos com texto não são bem dimensionados em telas pequenas.

##### Diretrizes para cartões de recurso

Você deve enviar uma imagem de fundo personalizada para o cartão de recurso. Para o nome do aplicativo, escolha uma cor do texto.

- Use um padrão ou textura na sua imagem de fundo para dar ao seu cartão uma identidade visual e ajudá-lo a destacar-se com relação ao fundo escuro da página inicial do {% data variables.product.prodname_marketplace %}. Os cartões de recursos devem capturar a personalidade da sua marca.
- A iImagem de fundo mede 965 pixels x 482 pixels (largura x altura).
- Escolha uma cor de texto para o nome do aplicativo que aparece claramente sobre a imagem de fundo.

### Detalhes da listagem

Para acessar a página inicial do seu aplicativo, clique no nome do aplicativo na página inicial ou na página de categoria do {% data variables.product.prodname_marketplace %}. A página de destino exibe uma descrição mais longa do aplicativo, que inclui duas partes: uma "Descrição introdutória" e uma "Descrição detalhada".

A sua "Descrição introdutória" é exibida no topo da página inicial {% data variables.product.prodname_marketplace %} do seu aplicativo.

![Descrição introdutória do {% data variables.product.prodname_marketplace %}](/assets/images/marketplace/marketplace_intro_description.png)

Clicar em **Ler mais...**, exibirá a "Descrição detalhada".

![Descrição detalhada do {% data variables.product.prodname_marketplace %}](/assets/images/marketplace/marketplace_detailed_description.png)

Siga estas instruções para escrever estas descrições.

#### Comprimento

Recomendamos escrever um resumo de alto nível de 1 a 2 frases com 150 a 250 caracteres no campo obrigatório de "Descrição introdutória" ao [listar o seu aplicativo](/marketplace/listing-on-github-marketplace/). Embora seja permitido o uso de mais caracteres, os resumos concisos são mais fáceis de ler e entender pelos clientes rapidamente.

Você pode adicionar mais informações ao campo opcional "Descrição detalhada". Você verá esta descrição ao clicar em **Leia mais...**, abaixo da descrição introdutória na página inicial do seu aplicativo. Uma descrição detalhada consiste de 3 a 5 [propostas de valor](https://en.wikipedia.org/wiki/Value_proposition), com 1 a 2 frases que descrevem cada uma. Você pode usar até 1.000 caracteres para essa descrição.

#### Conteúdo

- Sempre comece descrições introdutórias com o nome do seu aplicativo.

- Sempre escreva as descrições e as propostas de valores usando a voz ativa.

#### Formatação

- Sempre use as letras maiúsculas adequadamente nas frases dos títulos para as propostas de valor. Use maiúscula somente para a primeira letra e para substantivos próprios.

- Use pontos nas suas descrições. Evite pontos de exclamação.

- Não use pontuação no final dos títulos da sua proposição de valor. Títulos de proposição de valor não devem incluir frases completas,e não devem incluir mais de uma frase.

- Para cada proposta de valor, inclua um título seguido de um parágrafo de descrição. Forme o título como um [cabeçalho de nível 3](/articles/basic-writing-and-formatting-syntax/#headings) usando Markdown. Por exemplo:


  ### Aprenda as habilidades de que você precisa

  O GitHub Learning Lab pode ajudá-lo a aprender como usar o GitHub, comunicar-se de modo mais efetivo com o Markdown, gerenciar conflitos de merge, entre outros.

- Use maiúscula apenas para os substantivos próprios.

- Use sempre a [vírgula em série](https://en.wikipedia.org/wiki/Serial_comma) nas listas.

- Evite referir-se à comunidade do GitHub como "usuários".

  **RECOMENDADO:** Crie problemas automaticamente para pessoas da sua organização

  **NÃO RECOMENDADO:** Crie problemas automaticamente para usuários de uma organização

- Evite acrônimos, a menos que estejam conhecidos (como, por exemplo, API).

### Capturas de tela dos produtos

Você pode enviar até cinco imagens de captura de tela do seu aplicativo para ser exibidas na página inicial do seu aplicativo. Adicione uma legenda opcional para cada captura de tela para fornecer contexto. Após enviar suas capturas de tela, você pode arrastá-las para a ordem que você deseja que sejam exibidas na página inicial.

#### Diretrizes para capturas de tela

- As imagens devem ser de alta resolução (pelo menos 1200 px de largura).
- Todas as imagens devem ter a mesma altura e largura (proporção de aspecto) para evitar pular páginas quando as pessoas clicam de uma imagem para a seguinte.
- Mostre a maior quantidade possível de interface de usuário para que as pessoas possam ver o que seu aplicativo faz.
- Ao capturar telas do seu app em um navegador, inclua apenas o conteúdo na janela de exibição. Evite incluir a barra de endereço, barra de título ou ícones da barra de ferramentas, que não são bem dimensionados para tamanhos de tela menores.
- O GitHub exibe as capturas de tela das quais você fizer o upload em uma caixa na página inicial do seu aplicativo. Portanto, você não precisa adicionar caixas ou bordas ao redor de suas capturas de tela.
- As legendas são mais eficazes quando são curtas e ágeis.

![Imagem de captura de tela do GitHub Marketplace](/assets/images/marketplace/marketplace-screenshots.png)
