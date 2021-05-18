---
title: Sobre seu painel pessoal
redirect_from:
  - /hidden/about-improved-navigation-to-commonly-accessed-pages-on-github/
  - /articles/opting-into-the-public-beta-for-a-new-dashboard/
  - /articles/about-your-personal-dashboard
intro: 'Você pode visitar seu painel pessoal para acompanhar problemas e pull requests nos quais está trabalhando ou seguindo, navegar para os repositórios principais e páginas de equipe, manter-se atualizado sobre atividades recentes nas organizações e nos repositórios em que está inscrito e explorar repositórios recomendados.'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Accounts
---

### Acessar seu painel pessoal

Seu quadro pessoal é a primeira página que você verá quando entrar no {% data variables.product.product_name %}.

Para acessar seu quadro pessoal assim que se conectar, clique no {% octicon "mark-github" aria-label="The github octocat logo" %} no canto superior esquerdo de qualquer página em {% data variables.product.product_name %}.

### Encontrar sua atividade recente

Na seção "Recent activity" (Atividade recente) do feed de notícias, você pode encontrar e acompanhar problemas e pull requests recém-atualizados nos quais você está trabalhando, além de visualizar até 12 atualizações recentes feitas nas últimas duas semanas.

{% data reusables.dashboard.recent-activity-qualifying-events %}

### Encontrar equipes e repositórios principais

Na barra lateral esquerda do painel, é possível acessar os repositórios e equipes principais que usa.

![lista de repositórios e equipes de diferentes organizações](/assets/images/help/dashboard/repositories-and-teams-from-personal-dashboard.png)

A lista dos principais repositórios é gerada automaticamente e pode incluir qualquer repositório com o qual você interagiu, independentemente de pertencer diretamente à sua conta. As interações incluem criação commits, abrir ou comentar em problemas e pull requests. A lista dos principais repositórios não pode ser editada, mas os repositórios serão excluídos da lista 4 meses após a última vez que você interagir com eles.

Também é possível encontrar uma lista de seus repositórios, equipes e quadros de projeto recentemente visitados quando você clica na barra de pesquisa no topo de qualquer página do {% data variables.product.product_name %}.

### Permanecer atualizado com as atividades da comunidade

Na seção "All activity" (Todas as atividades) do feed de notícias, você pode exibir atualizações de repositórios em que está inscrito e de pessoas que você segue. Essa seção mostra atualizações dos repositórios que você inspeciona ou marca com estrela e dos usuários que você segue.

Atualizações serão exibidas no feed de notícias quando um usuário que você segue:
- Marcar um repositório com estrelas.
- Follows another user.{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}
- Cria um repositório público.{% endif %}
- Abrir um problema ou uma pull request com a etiqueta "help wanted" ou "good first issue" em um repositório que você está inspecionando.
- Faz push de commits para um repositório que você inspeciona.{% if currentVersion == "free-pro-team@latest" ou enterpriseServerVersions contém currentVersion %}
- Bifurca um repositório público.{% endif %}

Para obter mais informações sobre como atribuir estrelas a repositórios e seguir pessoas, consulte "[Salvar repositórios com estrelas](/articles/saving-repositories-with-stars/)" e "[Seguir pessoas](/articles/following-people)".

### Explorar repositórios recomendados

Na seção "Explorar repositórios" no lado direito do painel, é possível explorar repositórios recomendados nas suas comunidades. As recomendações têm por base repositórios que você marcou com uma estrela ou visitou, as pessoas que você segue e a atividade nos repositórios aos quais você tem acesso.{% if currentVersion == "free-pro-team@latest" %} Para obter mais informações, consulte "[Encontrar maneiras de contribuir com código aberto em {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/finding-ways-to-contribute-to-open-source-on-github).{% endif %}

### Leia mais

- "[Sobre o painel da sua organização](/articles/about-your-organization-dashboard)"
