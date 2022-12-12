---
title: Guia de início rápido de gravação no GitHub
intro: 'Conheça os recursos avançados de formatação criando um {% ifversion ghae %}gist para se descrever{% else %}LEIAME para seu perfil do {% data variables.product.prodname_dotcom %}{% endif %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Quickstart
ms.openlocfilehash: a023d55dd4d7bd41af329a4eaac1e2408af96294
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107170'
---
## Introdução

O Markdown é uma linguagem fácil de ler e de gravar para formatar texto sem formatação. Você pode usar a sintaxe Markdown, juntamente com algumas tags HTML adicionais, para formatar a escrita no {% data variables.product.prodname_dotcom %}, em locais como LEIAMEs do repositório e comentários sobre solicitações de pull e problemas. Neste guia, você aprenderá alguns recursos avançados de formatação criando {% ifversion ghae %}um gist{% else %}ou editando um LEIAME do seu perfil do {% data variables.product.prodname_dotcom %}{% endif %}.

Se você é novo em Markdown, pode começar com o curso "[Sintaxe básica de escrita e formatação](/articles/basic-writing-and-formatting-syntax)" ou com o curso [Comunicar usando Markdown](https://github.com/skills/communicate-using-markdown) do {% data variables.product.prodname_learning %}.

{% ifversion not ghae %}

Se você já tiver um LEIAME do perfil, poderá seguir este guia adicionando alguns recursos ao LEIAME existente ou criando um gist com um arquivo Markdown nomeado de modo semelhante a `about-me.md`. Para obter mais informações, confira "[Como criar gists](/get-started/writing-on-github/editing-and-sharing-content-with-gists/creating-gists)".

{% endif %}

{% ifversion ghae %}

## Criar um gist

Os gists permitem que você armazene ou compartilhe snippets de código e outras informações com outras pessoas em {% data variables.location.product_location %}. Para usar recursos de formatação em gists, adicione um arquivo gist com uma extensão `.md`.

1. Navegue até sua {% data variables.gists.gist_homepage %}.
1. Opcionalmente, digite uma descrição para o gist, como "Sobre mim".
1. No campo **Nome do arquivo, incluindo extensão...** , digite `about-me.md`.

Para obter mais informações, confira "[Como criar gists](/get-started/writing-on-github/editing-and-sharing-content-with-gists/creating-gists)".

{% else %}

## Como criar ou editar o perfil LEIAME

O LEIAME do perfil permite compartilhar informações sobre si mesmo com a comunidade em {% data variables.location.product_location %}. O LEIAME é exibido na parte superior da página de perfil.

Se você ainda não tem um LEIAME de perfil, adicione-o.

1. Crie um repositório com o mesmo nome que o do usuário do {% data variables.product.prodname_dotcom %}, inicializando o repositório com um arquivo `README.md`. Para obter mais informações, confira "[Como gerenciar o LEIAME do seu perfil](/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/managing-your-profile-readme#adding-a-profile-readme)".
1. Edite o arquivo `README.md` e exclua o texto do modelo (começando com `### Hi there`) que é adicionado automaticamente quando você cria o arquivo.

Se você já tem um LEIAME de perfil, edite-o na página de perfil.

{% data reusables.profile.navigating-to-profile %}
1. Clique no {% octicon "pencil" aria-label="The Pencil icon" %} ao lado do LEIAME do perfil.

   ![Captura de tela de uma página de perfil, com o ícone de lápis realçado ao lado do LEIAME do perfil](/assets/images/help/profile/edit-profile-readme.png)

{% endif %}

## Como adicionar uma imagem adequada para os visitantes

Você pode incluir imagens em sua comunicação no {% data variables.product.prodname_dotcom %}. Aqui, você adicionará uma imagem responsiva, como uma faixa, à parte superior do {% ifversion ghae %}gist{% else %}LEIAME do perfil{% endif %}. 

Usando o elemento HTML `<picture>` com o recurso de mídia `prefers-color-scheme`, você pode adicionar uma imagem que muda de acordo com o modo claro ou escuro usado pelo visitante. Para obter mais informações, confira "[Como gerenciar suas configurações de tema](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/managing-your-theme-settings)".

1. Copie e cole a marcação a seguir no arquivo {% ifversion ghae %}`about-me.md`{% else %}`README.md`{% endif %}.
   
   ```HTML{:copy}
   <picture>
    <source media="(prefers-color-scheme: dark)" srcset="YOUR-DARKMODE-IMAGE">
    <source media="(prefers-color-scheme: light)" srcset="YOUR-LIGHTMODE-IMAGE">
    <img alt="YOUR-ALT-TEXT" src="YOUR-DEFAULT-IMAGE">
   </picture>
   ```
1. Substitua os espaços reservados na marcação pelas URLs das imagens escolhidas. Como alternativa, para experimentar o recurso primeiro, copie as URLs do exemplo abaixo.

   - Substitua `YOUR-DARKMODE-IMAGE` pela URL de uma imagem a ser exibida para visitantes que usam o modo escuro.
   - Substitua `YOUR-LIGHTMODE-IMAGE` pela URL de uma imagem a ser exibida para visitantes que usam o modo claro.
   - Substitua `YOUR-DEFAULT-IMAGE` pela URL de uma imagem a ser exibida caso nenhuma das outras imagens seja correspondida, por exemplo, se o visitante estiver usando um navegador sem suporte ao recurso `prefers-color-scheme`.
1. Para tornar a imagem acessível a visitantes que estejam usando um leitor de tela, substitua `YOUR-ALT-TEXT` por uma descrição da imagem.
1. Para verificar se a imagem foi renderizada corretamente, clique na guia **Visualização**.

Para obter mais informações sobre o uso de imagens em Markdown, confira "[Sintaxe básica de escrita e formatação](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#images)".

### Exemplo

{% data reusables.getting-started.picture-element-example %}

### A aparência

![Captura de tela da guia Visualização no modo claro, com a imagem de um sol sorridente exibida](/assets/images/help/profile/lightmode-image-example.png)

## Como adicionar uma tabela

Você pode usar tabelas Markdown para organizar informações. Aqui, você usará uma tabela para se apresentar classificando algo, como as linguagens ou as estruturas de programação que você mais usa, o que está aprendendo no momento ou seus hobbies favoritos. Quando uma coluna de tabela contém números, é bom alinhar a coluna à direita usando a sintaxe `--:` abaixo da linha de cabeçalho.

1. Retorne à guia **Editar {% ifversion ghae %}novo {% endif %}arquivo**. 
1. Para se apresentar, duas linhas abaixo da tag `</picture>`, adicione um cabeçalho `## About me` e um parágrafo curto sobre você, como o seguinte.
   
   ```Markdown
   ## About me

   Hi, I'm Mona. You might recognize me as {% data variables.product.prodname_dotcom %}'s mascot.
   ```
1. Duas linhas abaixo desse parágrafo, insira uma tabela copiando e colando a marcação a seguir.
   
   ```Markdown{:copy}
   | Rank | THING-TO-RANK |
   |-----:|---------------|
   |     1|               |
   |     2|               |
   |     3|               |
   ```
1. Na coluna à direita, substitua `THING-TO-RANK` por "Idiomas", "Hobbies" ou qualquer outra coisa, e preencha a coluna com sua lista de itens.
1. Para verificar se a tabela foi renderizada corretamente, clique na guia **Visualização**.

Para obter mais informações, confira "[Como organizar informações com tabelas](/get-started/writing-on-github/working-with-advanced-formatting/organizing-information-with-tables)".

### Exemplo

```Markdown
## About me

Hi, I'm Mona. You might recognize me as {% data variables.product.prodname_dotcom %}'s mascot.

| Rank | Languages |
|-----:|-----------|
|     1| Javascript|
|     2| Python    |
|     3| SQL       |
```

### A aparência

![Captura de tela da guia Visualização, mostrando um título "Sobre mim" e uma tabela renderizada com uma lista de idiomas](/assets/images/help/profile/markdown-table-example.png)

## Com adicionar uma seção recolhida

Para manter o conteúdo organizado, você pode usar a tag `<details>` para criar uma seção recolhida expansível. 

1. Para criar uma seção recolhida na tabela que você criou, coloque-a entre tags `<details>`, como no exemplo a seguir.
   
   ```HTML{:copy}
   <details>
   <summary>My top THINGS-TO-RANK</summary>

   YOUR TABLE

   </details>
   ```
1. Entre as tags `<summary>`, substitua `THINGS-TO-RANK` pelo que você classificou na tabela.
1. Opcionalmente, para que a seção seja exibida como aberta por padrão, adicione o atributo `open` à tag `<details>`.

   ```HTML
   <details open>
   ```
1. Para verificar se a seção recolhida foi renderizada corretamente, clique na guia **Visualização**.

### Exemplo

```HTML
<details>
<summary>My top languages</summary>

| Rank | Languages |
|-----:|-----------|
|     1| Javascript|
|     2| Python    |
|     3| SQL       |
  
</details>
```

### A aparência

![Captura de tela da guia Visualização, com uma seção recolhida chamada "Meus idiomas principais" marcada por uma seta suspensa](/assets/images/help/profile/collapsed-section-example.png)

## Como adicionar uma citação

O Markdown tem muitas outras opções para formatar o conteúdo. Aqui, você adicionará uma regra horizontal para dividir a página e um blockquote para formatar sua cotação favorita.

1. Na parte inferior do arquivo, duas linhas abaixo da tag `</details>`, adicione uma regra horizontal digitando três ou mais traços.

   ```Markdown
   ---
   ```
1. Abaixo da linha `---`, adicione uma citação digitando a marcação como a seguir.
   
   ```Markdown
   > QUOTE
   ```

   Substitua `QUOTE` por uma citação da sua escolha. Como alternativa, copie a citação do exemplo abaixo.
1. Para verificar se tudo foi renderizado corretamente, clique na guia **Visualização**.

### Exemplo

```Markdown
---
> If we pull together and commit ourselves, then we can push through anything.

— Mona the Octocat
```

### A aparência

![Captura de tela da guia Visualização, com uma citação recuada abaixo de uma linha horizontal grossa](/assets/images/help/profile/markdown-quote-example.png)

## Como adicionar um comentário

Você pode usar a sintaxe de comentário HTML para adicionar um comentário que ficará oculto na saída. Aqui, você adicionará um comentário para se lembrar de atualizar o {% ifversion ghae %}gist{% else %}LEIAME{% endif %} mais tarde.

1. Duas linhas abaixo do cabeçalho `## About me`, insira um comentário usando a marcação a seguir.

   <pre>
   &lt;!-- COMMENT --&gt;
   </pre>
   
   Substitua `COMMENT` por um item "pendente" que você quer se lembrar de fazer mais tarde (por exemplo, adicionar mais itens à tabela).
1. Para verificar se o comentário está oculto na saída, clique na guia **Visualização**.

### Exemplo

<pre>
## About me

&lt;!-- TO DO: add more details about me later --&gt;
</pre>

## Salvando seu trabalho

Quando estiver satisfeito com as alterações, salve o {% ifversion ghae %}gist. 

- Para manter o gist oculto dos mecanismos de pesquisa, mas visível para qualquer pessoa com quem você compartilhe a URL, clique em **Criar gist secreto** 
- Se você quiser que o gist fique visível para qualquer pessoa em {% data variables.location.product_location %}, clique em **Criar gist interno**

{% else %}LEIAME do perfil clicando em **Fazer commit de alterações**. 

Com a confirmação direta no branch `main`, suas alterações ficarão visíveis a qualquer visitante no perfil. Se você quiser salvar o trabalho, mas ainda não quiser deixá-lo visível no perfil, selecione **Criar um branch para esse commit e iniciar uma solicitação de pull**.

![Captura de tela da seção "Fazer commit de alterações"](/assets/images/help/profile/readme-commit-changes.png)

{% endif %}

## Próximas etapas

- Continue a aprender sobre os recursos de formatação avançada. Por exemplo, confira {% ifversion fpt or ghec %}"[Como criar diagramas](/get-started/writing-on-github/working-with-advanced-formatting/creating-diagrams)" e {% endif %}"[Como criar e realçar blocos de código](/get-started/writing-on-github/working-with-advanced-formatting/creating-and-highlighting-code-blocks)".
- Use suas novas habilidades para se comunicar no GitHub, em problemas, solicitações de pull e discussões. Para obter mais informações, confira "[Como se comunicar no {% data variables.product.prodname_dotcom %}](/get-started/quickstart/communicating-on-github)".
