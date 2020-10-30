---
title: Fazer backup de um repositório
intro: 'Você pode usar o{% if currentVersion != "free-pro-team@latest" %} Git e{% endif %} a API {% if currentVersion == "free-pro-team@latest" %}ou uma ferramenta de terceiros {% endif %}para fazer backup do seu repositório.'
redirect_from:
  - Backing up a repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% if currentVersion == "free-pro-team@latest" %}

Para baixar um arquivo do seu repositório, você pode usar a API para usuário ou migrações da organização. Para obter mais informações, consulte "[Migrações](/v3/migrations/)".
{% else %}

Você pode baixar e fazer backup dos repositórios manualmente:

- Para baixar os dados Git de um repositório no computador local, é preciso clonar o repositório. Para obter mais informações, consulte "[Clonar um repositório](/articles/cloning-a-repository)".
- Também é possível baixar o wiki do repositório. Para obter mais informações, consulte "[Adicionar ou editar páginas wiki](/articles/adding-or-editing-wiki-pages)".

Quando você clona um repositório ou wiki, somente os dados Git, como arquivos e histórico de commits do projeto, são baixados. Você pode usar nossa API para exportar outros elementos do seu repositório do {% data variables.product.product_name %} para o computador local:

- [Problemas](/v3/issues/#list-issues-for-a-repository)
- [Pull requests](/v3/pulls/#list-pull-requests)
- [Bifurcações](/v3/repos/forks/#list-forks)
- [Comentários](/v3/issues/comments/#list-comments-in-a-repository)
- [Marcos](/v3/issues/milestones/#list-milestones-for-a-repository)
- [Etiquetas](/v3/issues/labels/#list-all-labels-for-this-repository)
- [Inspetores](/v3/activity/watching/#list-watchers)
- [observador](/v3/activity/starring/#list-stargazers)
- [Projetos](/v3/projects/#list-repository-projects)
{% endif %}

Assim que tiver {% if currentVersion != "free-pro-team@latest" %}uma versão local de todo o conteúdo do qual deseja fazer backup, você poderá criar um arquivo zip e {% else %}baixado seu arquivo, você poderá{% endif %}copiá-lo em um disco rígido externo e/ou fazer upload dele em um serviço de backup baseado na nuvem, como o [Google Drive](https://www.google.com/drive/) ou [Dropbox](https://www.dropbox.com/).

{% if currentVersion == "free-pro-team@latest" %}
### Ferramentas de backup de terceiros

Existem várias ferramentas de autoatendimento que automatizam backups de repositórios. Ao contrário de projetos arquivados, que arquivam _todos_ os repositórios públicos em {% data variables.product.product_name %} que não tenham optado por não participar e tornam os dados acessíveis para todos, as ferramentas de backup irão fazer o download dos dados de repositórios _específicos_ e organizá-los em um novo branch ou diretório. Para obter mais informações sobre projetos de arquivamento, consulte "[Sobre arquivamento de conteúdo e dados no {% data variables.product.prodname_dotcom %}](/github/creating-cloning-and-archiving-repositories/about-archiving-content-and-data-on-github#about-the-github-archive-program)".

Você pode fazer backup de todos os dados Git de um repositório (como arquivos e histórico de commits do projeto), bem como de dados do {% data variables.product.product_name %} (como problemas e pull requests), com o [BackHub](https://github.com/marketplace/backhub), que cria backups recorrentes diariamente dos seus repositórios com instantâneos de até 30 dias atrás. O BackHub está disponível no {% data variables.product.prodname_marketplace %}.
{% endif %}
