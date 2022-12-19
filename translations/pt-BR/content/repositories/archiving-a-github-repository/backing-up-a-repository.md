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
ms.openlocfilehash: 3c9a6b5569563858987e338584b3b42bededf716
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147883446'
---
{% ifversion fpt or ghec %}

Para baixar um arquivo do seu repositório, você pode usar a API para usuário ou migrações da organização. Para obter mais informações, confira "[Migrações](/rest/reference/migrations)".
{% else %}

Você pode baixar e fazer backup dos repositórios manualmente:

- Para baixar os dados Git de um repositório no computador local, é preciso clonar o repositório. Para obter mais informações, confira "[Como clonar um repositório](/articles/cloning-a-repository)".
- Também é possível baixar o wiki do repositório. Para obter mais informações, confira "[Como adicionar ou editar páginas de um wiki](/communities/documenting-your-project-with-wikis/adding-or-editing-wiki-pages)".

Quando você clona um repositório ou wiki, somente os dados Git, como arquivos e histórico de commits do projeto, são baixados. Você pode usar nossa API para exportar outros elementos do seu repositório em {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} para a sua máquina local:

- [Problemas](/rest/reference/issues#list-issues-for-a-repository)
- [Solicitações pull](/rest/reference/pulls#list-pull-requests)
- [Garfos](/rest/reference/repos#list-forks)
- [Comentários](/rest/reference/issues#list-issue-comments-for-a-repository)
- [Marcos](/rest/reference/issues#list-milestones)
- [Rótulos](/rest/reference/issues#list-labels-for-a-repository)
- [Observadores](/rest/reference/activity#list-watchers)
- [Marcaram com estrela](/rest/reference/activity#list-stargazers)
- [Projetos](/rest/reference/projects#list-repository-projects) {% endif %}

Depois de ter {% ifversion ghes or ghae %}uma versão local de todo o conteúdo do qual deseja fazer backup, você pode criar um arquivo zip e {% else %}baixado seu arquivo, você pode {% endif %}copiá-lo para um disco rígido externo e/ou carregá-lo em um backup baseado em nuvem ou o serviço de armazenamento, como o [Armazenamento de Blobs do Azure](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blobs-overview/), o [Google Drive](https://www.google.com/drive/) ou o [Dropbox](https://www.dropbox.com/).

{% ifversion fpt or ghec %}
## Ferramentas de backup de terceiros

Existem várias ferramentas de autoatendimento que automatizam backups de repositórios. Ao contrário de projetos arquivados, que arquivam _todos_ os repositórios públicos no {% data variables.product.product_name %} que não tenham se recusado a tornar os dados acessíveis para todos, as ferramentas de backup baixarão dos dados de repositórios _específicos_ e os organizarão em um novo branch ou diretório. Para obter mais informações sobre projetos de arquivamento, confira "[Sobre o arquivamento de conteúdo e de dados no {% data variables.product.prodname_dotcom %}](/github/creating-cloning-and-archiving-repositories/about-archiving-content-and-data-on-github#about-the-github-archive-program)". Para obter mais informações sobre as ferramentas de backup de autoatendimento, confira a [categoria Utilitários de backup no {% data variables.product.prodname_marketplace %}](https://github.com/marketplace?category=backup-utilities).
{% endif %}
