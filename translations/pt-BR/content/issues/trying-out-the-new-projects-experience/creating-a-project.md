---
title: Criando um projeto (beta)
intro: 'Aprenda a criar um projeto, preencher e adicionar campos personalizados.'
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
type: quick_start
topics:
  - Projects
---

Os projetos são uma coleção personalizável de itens que se mantêm atualizados com os dados do {% data variables.product.company_short %}. Seus projetos podem rastrear problemas, pull requests, e ideias que você anotar. Você pode adicionar campos personalizados e criar visualizações para fins específicos.

{% data reusables.projects.projects-beta %}

## Criando um projeto

{% data reusables.projects.create-project %}

## Adicionando itens ao seu projeto

Seu projeto pode acompanhar os rascunhos de problemas, problemas e pull requests.

### Criando problemas de rascunho

Os rascunhos são úteis para capturar ideias rapidamente.

1. Coloque seu cursor na linha inferior do projeto, ao lado do {% octicon "plus" aria-label="plus icon" %}.
2. Digite sua ideia e, em seguida, pressione **Enter**.

### Problemas e pull requests

#### Cole a URL de um problema ou pull request

1. Coloque seu cursor na linha inferior do projeto, ao lado do {% octicon "plus" aria-label="plus icon" %}.
1. Cole a URL do problema ou pull request.

#### Pesquisando um problema ou pull request

1. Coloque seu cursor na linha inferior do projeto, ao lado do {% octicon "plus" aria-label="plus icon" %}.
2. Digite `#`.
3. Selecione o repositório onde está localizado o pull request ou problema. Você pode digitar parte do nome do repositório para restringir suas opções.
4. Selecione o problema ou pull request. Você pode digitar parte do título para restringir suas opções.

#### Atribuindo um projeto de dentro de um problema ou pull request

1. Acesse o problema ou pull request que você deseja adicionar a um projeto.
2. Na barra lateral, clique em **Projetos**.
3. Selecione o projeto ao qual você deseja adicionar o problema ou pull request.
4. Opcionalmente, preencha os campos personalizados.

   ![Barra lateral do projeto](/assets/images/help/issues/project_side_bar.png)

## Adicionando campos

Como os valores do campo mudam, eles são sincronizados automaticamente para que o seu projeto e os itens que ele rastreia fiquem atualizados.

{% note %}

**Nota:** Você não pode editar ou adicionar campos sem adicionar pelo menos um item ao seu projeto.

{% endnote %}

### Mostrando campos existentes

O seu projeto rastreia informações atualizadas sobre issues e pull requests, incluindo todas as alterações no título, responsáveis, etiquetas, marcos e repositório. Quando seu projeto é inicializado, são exibidos "título" e "responsáveis". Os outros campos permanecem ocultos. Você pode alterar a visibilidade desses campos no seu projeto.

1. {% data reusables.projects.open-command-palette %}
2. Comece a digitar "mostrar".
3. Selecione o comando desejado (por exemplo: "Mostrar: Repositório").

Como alternativa, você pode fazer isso na interface do usuário:

1. Clique em {% octicon "plus" aria-label="the plus icon" %} no cabeçalho mais à direita. Será exibido um menu suspenso com os campos do projeto. ![Exibir ou ocultar campos](/assets/images/help/issues/projects_fields_menu.png)
2. Selecione o(s) campo(s) que você deseja exibir ou ocultar. Um {% octicon "check" aria-label="check icon" %} indica quais campos serão exibidos.

### Adicionando campos personalizados

Você pode adicionar campos personalizados ao seu projeto. Os campos personalizados podem ser texto, número, data ou seleção única. Campos personalizados serão exibidos na barra lateral de problemas e pull requests no projeto.

1. {% data reusables.projects.open-command-palette %} Comece a digitar qualquer parte de "Criar novo campo". Quando "Criar novo campo" for exibido na paleta de comandos, selecione-o.
2. Como alternativa, clique em {% octicon "plus" aria-label="the plus icon" %} no cabeçalho do campo mais à direita. Será exibido um menu suspenso com os campos do projeto. Clique em **Novo campo**.
3. Uma janela pop-up irá aparecer para inserir informações sobre o novo campo. ![Novo campo](/assets/images/help/issues/projects_new_field.png)
4. Na caixa de texto, digite um nome para o novo campo.
5. Selecione o menu suspenso e clique no tipo desejado.
6. Se você especificou "seleção única" como o tipo, insira as opções.

## Personalizar as suas visualizações

Você pode ver seu projeto como uma tabela ou quadro, agrupar itens por campo, filtrar itens e muito mais. Para obter mais informações, consulte "[Personalizar as visualizações do seu projeto (beta)](/issues/trying-out-the-new-projects-experience/customizing-your-project-views)".
