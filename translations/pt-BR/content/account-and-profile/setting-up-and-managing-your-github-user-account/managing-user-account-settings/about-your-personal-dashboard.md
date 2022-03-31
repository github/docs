---
title: Sobre seu painel pessoal
redirect_from:
  - /hidden/about-improved-navigation-to-commonly-accessed-pages-on-github
  - /articles/opting-into-the-public-beta-for-a-new-dashboard
  - /articles/about-your-personal-dashboard
  - /github/setting-up-and-managing-your-github-user-account/about-your-personal-dashboard
  - /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/about-your-personal-dashboard
intro: 'Você pode visitar seu painel pessoal para acompanhar problemas e pull requests nos quais está trabalhando ou seguindo, navegar para os repositórios principais e páginas de equipe, manter-se atualizado sobre atividades recentes nas organizações e nos repositórios em que está inscrito e explorar repositórios recomendados.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Accounts
shortTitle: Seu painel pessoal
---

## Acessar seu painel pessoal

Seu quadro pessoal é a primeira página que você verá quando entrar no {% data variables.product.product_name %}.

Para acessar seu quadro pessoal assim que se conectar, clique no {% octicon "mark-github" aria-label="The github octocat logo" %} no canto superior esquerdo de qualquer página em {% data variables.product.product_name %}.

## Encontrar sua atividade recente

Na seção "Recent activity" (Atividade recente) do feed de notícias, você pode encontrar e acompanhar problemas e pull requests recém-atualizados nos quais você está trabalhando, além de visualizar até 12 atualizações recentes feitas nas últimas duas semanas.

{% data reusables.dashboard.recent-activity-qualifying-events %}

## Encontrar equipes e repositórios principais

Na barra lateral esquerda do painel, é possível acessar os repositórios e equipes principais que usa.

![lista de repositórios e equipes de diferentes organizações](/assets/images/help/dashboard/repositories-and-teams-from-personal-dashboard.png)

A lista dos principais repositórios é gerada automaticamente e pode incluir qualquer repositório com o qual você interagiu, independentemente de pertencer diretamente à sua conta. As interações incluem criação commits, abrir ou comentar em problemas e pull requests. A lista dos principais repositórios não pode ser editada, mas os repositórios serão excluídos da lista 4 meses após a última vez que você interagir com eles.

Também é possível encontrar uma lista de seus repositórios, equipes e quadros de projeto recentemente visitados quando você clica na barra de pesquisa no topo de qualquer página do {% data variables.product.product_name %}.

## Permanecer atualizado com as atividades da comunidade

{% if for-you-feed %}
The main section of your dashboard has two activity feeds:

- Following: Activity by people you follow and from repositories you watch.
- For you: Activity and recommendations based on your {% data variables.product.product_name %} network.

### Following feed

This feed shows activity from repositories and users you have shown a direct interest in, by following a user or watching a repository. For example, you'll see updates when a user you follow:

{% else %}
In the "All activity" section of your news feed, you can view updates from repositories you watch and users you follow.

Atualizações serão exibidas no feed de notícias quando um usuário que você segue:
{% endif %}


- Marcar um repositório com estrelas.
- Segue outro usuário.{% ifversion fpt or ghes or ghec %}
- Cria um repositório público.{% endif %}
- Abrir um problema ou uma pull request com a etiqueta "help wanted" ou "good first issue" em um repositório que você está inspecionando.
- Faz push de commits para um repositório que você inspeciona.{% ifversion fpt or ghes or ghec %}
- Bifurca um repositório público.{% endif %}
- Publica uma nova versão.

For more information about following people and watching repositories, see "[Following people](/get-started/exploring-projects-on-github/following-people)" and "[Be social](/get-started/quickstart/be-social)."

{% if for-you-feed %}
### For you feed

{% note %}

**Note:** This new tab is currently in public beta and subject to change.

{% endnote %}

This feed shows activity and recommendations based on your network on {% data variables.product.product_name %}. It's designed to provide updates that inspire you, keep you up-to-date, and help you find new communities you want to participate in. Your network includes:

- Repositories you have starred
- Repositories you've contributed to
- Users you follow or sponsor
- Users you've collaborated with
- Organizations you follow

{% endif %}

## Explorar repositórios recomendados

Na seção "Explorar repositórios" no lado direito do painel, é possível explorar repositórios recomendados nas suas comunidades. As recomendações são baseadas em repositórios que você favoritou ou visitou, as pessoas que você segue e a atividade nos repositórios aos quais você tem acesso.{% ifversion fpt or ghec %} Para obter mais informações, consulte "[Encontrar formas de contribuir com código aberto no {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/finding-ways-to-contribute-to-open-source-on-github)."{% endif %}

## Leia mais

- "[Sobre o painel da sua organização](/articles/about-your-organization-dashboard)"
