---
title: Fazer backup de um repositório
intro: 'Você pode usar{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %} o Git e{% endif %} a API {% if currentVersion == "free-pro-team@latest" %}ou uma ferramenta de terceiros {% endif %}para fazer backup do seu repositório.'
redirect_from:
  - Backing up a repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - repositories
---

{% if currentVersion == "free-pro-team@latest" %}

Para baixar um arquivo do seu repositório, você pode usar a API para usuário ou migrações da organização. Para obter mais informações, consulte "[Migrações](/rest/reference/migrations)".
{% else %}

Você pode baixar e fazer backup dos repositórios manualmente:

- Para baixar os dados Git de um repositório no computador local, é preciso clonar o repositório. Para obter mais informações, consulte "[Clonar um repositório](/articles/cloning-a-repository)".
- Também é possível baixar o wiki do repositório. Para obter mais informações, consulte "[Adicionar ou editar páginas wiki](/articles/adding-or-editing-wiki-pages)".

Quando você clona um repositório ou wiki, somente os dados Git, como arquivos e histórico de commits do projeto, são baixados. Você pode usar nossa API para exportar outros elementos do seu repositório do {% data variables.product.product_name %} para o computador local:

- [Problemas](/rest/reference/issues#list-issues-for-a-repository)
- [Pull requests](/rest/reference/pulls#list-pull-requests)
- [Bifurcações](/rest/reference/repos#list-forks)
- [Comentários](/rest/reference/issues#list-issue-comments-for-a-repository)
- [Marcos](/rest/reference/issues#list-milestones)
- [Etiquetas](/rest/reference/issues#list-labels-for-a-repository)
- [Inspetores](/rest/reference/activity#list-watchers)
- [observador](/rest/reference/activity#list-stargazers)
- [Projetos](/rest/reference/projects#list-repository-projects)
{% endif %}

Depois de ter {% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}uma versão local de todo o conteúdo do qual você deseja fazer backup, você pode criar um arquivo zip e, {% else %} após baixar o seu arquivo, você pode {% endif %}copiá-lo para um disco rígido externo e/ou enviá-lo para um serviço de backup baseado em nuvem como o [Google Drive](https://www.google.com/drive/) ou [Dropbox](https://www.dropbox.com/).

{% if currentVersion == "free-pro-team@latest" %}
### Ferramentas de backup de terceiros
Existem várias ferramentas de autoatendimento que automatizam backups de repositórios. Ao contrário de projetos de arquivamento, em que _todos_ os repositórios públicos em

{% data variables.product.product_name %} que não optaram por sair e tornar os dados acessíveis a qualquer pessoa, as ferramentas de backup irão fazer o download de dados de repositórios _específicos_ e organizá-los em um novo branch ou diretório. Para obter mais informações sobre projetos de arquivamento, consulte "[Sobre arquivamento de conteúdo e dados no {% data variables.product.prodname_dotcom %}](/github/creating-cloning-and-archiving-repositories/about-archiving-content-and-data-on-github#about-the-github-archive-program)". Para obter mais informações sobre ferramentas de backup self-service, consulte a categoria [Utilitários de backup em {% data variables.product.prodname_marketplace %}](https://github.com/marketplace?category=backup-utilities).
{% endif %}
