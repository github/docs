---
title: Salvar repositórios com estrelas
intro: 'Você pode favoritar repositórios e tópicos para acompanhar projetos que você considera interessantes{% ifversion fpt or ghec %} e descobrir conteúdo relacionado no seu feed de notícias{% endif %}.'
redirect_from:
  - /articles/stars
  - /articles/about-stars
  - /articles/browsing-friends-stars
  - /articles/managing-your-stars
  - /articles/saving-repositories-with-stars
  - /github/getting-started-with-github/saving-repositories-with-stars
  - /github/getting-started-with-github/exploring-projects-on-github/saving-repositories-with-stars
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Salve repositórios com estrelas
---

Você pode pesquisar, classificar e filtrar seus repositórios e tópicos com estrela no seu {% data variables.explore.your_stars_page %}.

## Sobre estrelas

A estrela facilita a localização posterior de um repositório ou tópico. Você pode ver todos os repositórios e tópicos marcados com estrelas acessando sua {% data variables.explore.your_stars_page %}.

{% ifversion fpt or ghec %}
Você pode favoritar repositórios e tópicos para descobrir projetos semelhantes em {% data variables.product.product_name %}. Ao marcar repositórios ou tópicos, {% data variables.product.product_name %} pode recomendar conteúdo relacionado no seu painel pessoal. Para obter mais informações, consulte "[Encontrando formas de contribuir para código aberto em {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/finding-ways-to-contribute-to-open-source-on-github)" e "[Sobre o seu painel pessoal](/account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/about-your-personal-dashboard#staying-updated-with-activity-from-the-community)."
{% endif %}

Marcar um repositório com estrelas também demonstra apreciação ao trabalho do mantenedor de repositório. Muitas classificações de repositórios do {% data variables.product.prodname_dotcom %} dependem do número de estrelas do repositório. Além disso, o [Explore](https://github.com/explore) mostra os repositórios populares com base no número de estrelas do repositório.

## Favoritando um repositório

Favoritar um repositório é um processo simples de duas etapas.

{% data reusables.repositories.navigate-to-repo %}
1. No canto superior direito da página, clique em **Estrela**. ![Favoritando um repositório](/assets/images/help/stars/starring-a-repository.png)
1. Opcionalmente, para desmarcar um repositório como favorito, clique em **Desmarcar como favorito**. ![Removendo um repositório dos favoritos](/assets/images/help/stars/unstarring-a-repository.png)

{% ifversion fpt or ghec %}
## Organizar repositórios favoritos com listas

{% note %}

**Observação:** As listas estão atualmente em beta público e sujeitas a alterações.

{% endnote %}

Faça uma curadoria dos repositórios que você favoritou com listas públicas. Você pode criar listas públicas que aparecem na sua página de favoritos em `https://github.com/USERNAME?tab=stars`.

Se você adicionar um repositório privado a uma lista, o repositório privado só aparecerá na sua lista para pessoas com acesso de `leitura` ao repositório.

![Captura de tela das listas na página de favoritos](/assets/images/help/stars/lists-overview-on-stars-page.png)

Você pode adicionar um repositório a uma lista existente ou nova sempre que você vir o menu suspenso do repositório com **Estrela** ou **Favoritado**, independentemente de estar em uma página de repositório ou em uma lista de repositórios favoritados.

![Captura de tela do meu suspenso "Estrela" com opções da lista de recursos da página do repositório](/assets/images/help/stars/stars-dropdown-on-repo.png)

![Captura de tela do menu suspenso "Favoritado" com opções de lista em destaque de uma lista de repositórios favoritados](/assets/images/help/stars/add-repo-to-list.png)

### Criando uma lista

{% data reusables.stars.stars-page-navigation %}
2. Ao lado de "Listas", clique em **Criar lista**. ![Captura de tela do botão "Criar lista"](/assets/images/help/stars/create-list.png)
3. Digite um nome e uma descrição para sua lista e clique em **Criar**. ![Captura de tela de modo que mostra onde você insere um nome e uma descrição com o botão "Criar"](/assets/images/help/stars/create-list-with-description.png)

### Adicionando um repositório a uma lista

{% data reusables.stars.stars-page-navigation %}
2. Encontre o repositório que você deseja adicionar à sua lista. ![Captura de tela da barra de pesquisa dos repositórios favoritados](/assets/images/help/stars/search-bar-for-starred-repos.png)
3. Ao lado do repositório que você deseja adicionar, use o menu suspenso **Favoritado** e selecione sua lista. ![Captura de tela do menu suspenso que mostra as caixas de seleção da lista](/assets/images/help/stars/add-repo-to-list.png)

### Removendo um repositório da sua lista

{% data reusables.stars.stars-page-navigation %}
2. Selecione sua lista.
3. Ao lado do repositório que deseja remover, use o menu suspenso **favoritado** e desmarque a sua lista. ![Captura de tela que mostra as caixas de seleção da lista](/assets/images/help/stars/add-repo-to-list.png)

### Editando nome ou descrição da lista

{% data reusables.stars.stars-page-navigation %}
1. Selecione a lista que você deseja editar.
2. Clique em **Editar lista**.
3. Atualize o nome ou a descrição e clique em **Salvar lista**. ![Captura de tela do modal que mostra o botão "Salvar lista"](/assets/images/help/stars/edit-list-options.png)

### Excluindo uma lista

{% data reusables.stars.stars-page-navigation %}
2. Selecione a lista que você deseja excluir.
3. Clique **Excluir lista**. ![Captura de tela de modo que mostra o botão "Excluir lista"](/assets/images/help/stars/edit-list-options.png)
4. Para confirmar, clique em **Excluir**.

{% endif %}

## Pesquisando repositórios e tópicos favoritados

Você pode usar a barra de pesquisa no seu {% data variables.explore.your_stars_page %} para encontrar rapidamente repositórios e tópicos que você favoritou.

1. Acesse o seu {% data variables.explore.your_stars_page %}.
1. Use a barra de pesquisa para encontrar seus repositórios ou tópicos favoritos pelo nome. ![Pesquisar estrelas](/assets/images/help/stars/stars_search_bar.png)

Essa barra pesquisa somente busca com base no nome do repositório ou tópico, e não com base em outros qualificadores (como tamanho do repositório ou data da última atualização).

## Ordenando e filtrando as estrelas na sua página de estrelas

Você pode usar a classificação ou filtragem para personalizar a forma como vê repositórios e tópicos favoritos na página de favoritos.

1. Acesse o seu {% data variables.explore.your_stars_page %}.
1. Para ordenar as estrelas, selecione **Ordenar** menu suspenso e, em seguida, selecione **Favoritados recentemente**, **Recentemente ativo** ou **Mais estrelas**. ![Ordenar estrelas](/assets/images/help/stars/stars_sort_menu.png)
1. Para filtrar sua lista de favoritos com base no seus idiomas, clique no idioma desejado em **Filtrar por idiomas**. ![Filtrar estrelas por idioma](/assets/images/help/stars/stars_filter_language.png)
1. Para filtrar sua lista de estrelas com base no repositório ou tópico, clique na opção desejada. ![Filtrar estrelas por tópico](/assets/images/help/stars/stars_filter_topic.png)

## Leia mais

- "[Classificar seu repositório com tópicos](/articles/classifying-your-repository-with-topics)"
