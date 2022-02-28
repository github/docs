---
title: Fazer backup de um repositório
intro: 'Você pode usar o{% ifversion ghes or ghae %} Git e{% endif %} a API {% ifversion fpt or ghec %}ou uma ferramenta de terceiros {% endif %}para fazer backup do seu repositório.'
redirect_from:
  - /articles/backing-up-a-repository
  - /github/creating-cloning-and-archiving-repositories/backing-up-a-repository
  - /github/creating-cloning-and-archiving-repositories/archiving-a-github-repository/backing-up-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
---

{% ifversion fpt or ghec %}

Para baixar um arquivo do seu repositório, você pode usar a API para usuário ou migrações da organização. Para obter mais informações, consulte "[Migrações](/rest/reference/migrations)".
{% else %}

Você pode baixar e fazer backup dos repositórios manualmente:

- Para baixar os dados Git de um repositório no computador local, é preciso clonar o repositório. Para obter mais informações, consulte "[Clonar um repositório](/articles/cloning-a-repository)".
- Também é possível baixar o wiki do repositório. Para obter mais informações, consulte "[Adicionar ou editar páginas wiki](/communities/documenting-your-project-with-wikis/adding-or-editing-wiki-pages)".

Quando você clona um repositório ou wiki, somente os dados Git, como arquivos e histórico de commits do projeto, são baixados. Você pode usar nossa API para exportar outros elementos do seu repositório em {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} para a sua máquina local:

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

Depois que você tiver {% ifversion ghes or ghae %}uma versão local de todo o conteúdo que você deseja fazer backup, você poderá criar um arquivo zip e {% else %}baixado do seu arquivo, você pode {% endif %}copiá-lo para um disco rígido externo e/ou fazer o upload para um backup com base na nuvem ou serviço de armazenamento, como [Azure Blob Storage](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blobs-overview/), [Google Drive](https://www.google.com/drive/) ou [Dropbox](https://www.dropbox.com/).

{% ifversion fpt or ghec %}
## Ferramentas de backup de terceiros

Existem várias ferramentas de autoatendimento que automatizam backups de repositórios. Ao contrário de projetos arquivados, que arquivam _todos_ os repositórios públicos em {% data variables.product.product_name %} que não tenham optado por não participar e tornam os dados acessíveis para todos, as ferramentas de backup irão fazer o download dos dados de repositórios _específicos_ e organizá-los em um novo branch ou diretório. Para obter mais informações sobre projetos de arquivamento, consulte "[Sobre arquivamento de conteúdo e dados no {% data variables.product.prodname_dotcom %}](/github/creating-cloning-and-archiving-repositories/about-archiving-content-and-data-on-github#about-the-github-archive-program)". Para obter mais informações sobre ferramentas de backup self-service, consulte a categoria [Utilitários de backup em {% data variables.product.prodname_marketplace %}](https://github.com/marketplace?category=backup-utilities).
{% endif %}
