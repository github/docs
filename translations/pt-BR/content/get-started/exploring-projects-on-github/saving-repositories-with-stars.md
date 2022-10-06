---
title: Salvar repositórios como favoritos
intro: 'Você pode adicionar repositórios e tópicos aos favoritos para acompanhar projetos que acha interessantes{% ifversion fpt or ghec %} e descobrir conteúdo relacionado no feed de notícias{% endif %}.'
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
shortTitle: Save repos with stars
ms.openlocfilehash: 2a5a167884e10f40d5501b3e84ebc158fe2487b3
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146374176'
---
Você pode pesquisar, classificar e filtrar seus repositórios e tópicos com estrela no {% data variables.explore.your_stars_page %}.

## Sobre estrelas

A estrela facilita a localização posterior de um repositório ou tópico. Você pode ver todos os repositórios e tópicos marcados com estrelas acessando sua {% data variables.explore.your_stars_page %}.

{% ifversion fpt or ghec %} Você pode adicionar repositórios e tópicos aos favoritos para descobrir projetos semelhantes no {% data variables.product.product_name %}. Quando você adiciona repositórios ou tópicos aos favoritos, o {% data variables.product.product_name %} pode recomendar um conteúdo relacionado no seu painel pessoal. Para obter mais informações, confira "[Como descobrir maneiras de contribuir com o código aberto no {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/finding-ways-to-contribute-to-open-source-on-github)" e "[Sobre seu painel pessoal](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/about-your-personal-dashboard#staying-updated-with-activity-from-the-community)".
{% endif %}

Marcar um repositório com estrelas também demonstra apreciação ao trabalho do mantenedor de repositório. Muitas classificações de repositórios do {% data variables.product.prodname_dotcom %} dependem do número de estrelas do repositório. Além disso, a seção [Explorar](https://github.com/explore) mostra os repositórios populares com base no número de estrelas que eles têm.

## Favoritando um repositório

Favoritar um repositório é um processo simples de duas etapas.

{% data reusables.repositories.navigate-to-repo %}
1. No canto superior direito da página, clique em **Adicionar aos favoritos**.
![Adicionar um repositório aos favoritos](/assets/images/help/stars/starring-a-repository.png)
1. Opcionalmente, para remover um repositório já adicionado aos favoritos, clique em **Remover dos favoritos**.
![Como removendo um repositório dos favoritos](/assets/images/help/stars/unstarring-a-repository.png)

{% ifversion fpt or ghec %}

## Como ver quem adicionou um repositório aos favoritos


Você pode ver todos que adicionaram aos favoritos um repositório público ou um repositório privado ao qual você tem acesso. 


Para ver todos que adicionaram um repositório aos favoritos, adicione `/stargazers` ao final da URL de um repositório. Por exemplo, para ver as pessoas que adicionaram o repositório github/docs aos favoritos, visite https://github.com/github/docs/stargazers.


## Organizar repositórios favoritos com listas

{% note %}

**Observação:** atualmente, as listas estão em versão beta pública e sujeitas a alterações.

{% endnote %}

Faça uma curadoria dos repositórios que você favoritou com listas públicas. Você pode criar listas públicas que aparecem na página de estrelas em `https://github.com/USERNAME?tab=stars`.

Se você adicionar um repositório privado a uma lista, o repositório privado só será exibido na sua lista para as pessoas com acesso `read` no repositório.

![Captura de tela das listas na página de favoritos](/assets/images/help/stars/lists-overview-on-stars-page.png)

Você pode adicionar um repositório a uma lista existente ou nova sempre que você vir o menu suspenso **Adicionar aos favoritos** ou **Adicionados aos favoritos** de um repositório, seja em uma página do repositório ou em uma lista de repositórios adicionados aos favoritos. 

![Captura de tela do menu suspenso "Adicionar aos favoritos" com opções de lista em destaque na página do repositório](/assets/images/help/stars/stars-dropdown-on-repo.png)

![Captura de tela do menu suspenso "Adicionados aos favoritos" com opções de lista em destaque de uma lista de repositórios adicionados aos favoritos](/assets/images/help/stars/add-repo-to-list.png)

### Criando uma lista

{% data reusables.stars.stars-page-navigation %}
2. Ao lado de "Listas", clique em **Criar lista**.
  ![Captura de tela do botão "Criar lista"](/assets/images/help/stars/create-list.png)
3. Insira um nome e uma descrição para a lista e clique em **Criar**.
  ![Captura de tela da caixa de diálogo modal que mostra o local em que você insere um nome e uma descrição com o botão "Criar".](/assets/images/help/stars/create-list-with-description.png)

### Adicionando um repositório a uma lista

{% data reusables.stars.stars-page-navigation %}
2. Encontre o repositório que você deseja adicionar à sua lista.
  ![Captura de tela da barra de pesquisa dos repositórios adicionados aos favoritos](/assets/images/help/stars/search-bar-for-starred-repos.png)
3. Ao lado do repositório que deseja adicionar, use o menu suspenso **Adicionados aos favoritos** e selecione sua lista.
  ![Captura de tela do menu suspenso que mostra as caixas de seleção da lista](/assets/images/help/stars/add-repo-to-list.png)

### Removendo um repositório da sua lista

{% data reusables.stars.stars-page-navigation %}
2. Selecione sua lista.
3. Ao lado do repositório que deseja remover, use o menu suspenso **Adicionados aos favoritos** e desmarque sua lista.
  ![Captura de tela que mostra as caixas de seleção da lista](/assets/images/help/stars/add-repo-to-list.png)

### Editando nome ou descrição da lista

{% data reusables.stars.stars-page-navigation %}
1. Selecione a lista que você deseja editar.
2. Clique em **Editar lista**.
3. Atualize o nome ou a descrição e clique em **Salvar lista**.
  ![Captura de tela da caixa de diálogo modal que mostra o botão "Salvar lista"](/assets/images/help/stars/edit-list-options.png) 

### Excluindo uma lista

{% data reusables.stars.stars-page-navigation %}
2. Selecione a lista que você deseja excluir.
3. Clique em **Excluir lista**.
  ![Captura de tela da caixa de diálogo modal que mostra o botão "Excluir lista"](/assets/images/help/stars/edit-list-options.png)
4. Para confirmar, clique em **Excluir**.

{% endif %}

## Pesquisando repositórios e tópicos favoritados

Você pode usar a barra de pesquisa no seu {% data variables.explore.your_stars_page %} para encontrar rapidamente repositórios e tópicos que você favoritou. 

1. Acesse o seu {% data variables.explore.your_stars_page %}.
1. Use a barra de pesquisa para encontrar seus repositórios ou tópicos favoritos pelo nome.
![Pesquisa de estrelas](/assets/images/help/stars/stars_search_bar.png)

Essa barra pesquisa somente busca com base no nome do repositório ou tópico, e não com base em outros qualificadores (como tamanho do repositório ou data da última atualização).

## Ordenando e filtrando as estrelas na sua página de estrelas

Você pode usar a classificação ou filtragem para personalizar a forma como vê repositórios e tópicos favoritos na página de favoritos.

1. Acesse o seu {% data variables.explore.your_stars_page %}.
1. Para classificar as estrelas, selecione o menu suspenso **Classificar** e selecione **Adicionado recentemente aos favoritos**, **Recentemente ativo** ou **Mais estrelas**.
![Classificação de estrelas](/assets/images/help/stars/stars_sort_menu.png)
1. Para filtrar sua lista de estrelas com base na linguagem, clique na linguagem desejada em **Filtrar por linguagens**.
![Filtrar estrelas por linguagem](/assets/images/help/stars/stars_filter_language.png)
1. Para filtrar sua lista de estrelas com base no repositório ou tópico, clique na opção desejada.
![Filtrar estrelas por tópico](/assets/images/help/stars/stars_filter_topic.png)

## Leitura adicional

- "[Como classificar seu repositório com tópicos](/articles/classifying-your-repository-with-topics)"
