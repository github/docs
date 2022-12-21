---
title: Sobre permissões para o GitHub Packages
intro: Saiba como gerenciar as permissões dos seus pacotes.
product: '{% data reusables.gated-features.packages %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: About permissions
ms.openlocfilehash: 0159cee64d6faaeffe6257c9dc589f9fcda7a0ba
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193078'
---
{% ifversion packages-registries-v2 %} As permissões para pacotes podem ter como escopo um usuário, uma organização ou um repositório.

## Permissões granulares para pacotes com escopo de usuário/organização

Pacotes com permissões granulares são escopos para uma conta de usuário pessoal ou de organização. Você pode alterar o controle de acesso e a visibilidade do pacote separadamente de um repositório que está conectado (ou vinculado) a um pacote.

O {% data variables.product.prodname_registry %} a seguir registra permissões granulares de suporte.

- {% data variables.product.prodname_container_registry %} {% ifversion packages-npm-v2 %}- registro npm{% endif %} {% ifversion packages-nuget-v2 %}- registro NuGet{% endif %}

{% endif %}

## Permissões para pacotes {% endif %} com escopo de repositório {% ifversion packages-registries-v2 %}

Um pacote {% endif %} com escopo de repositório {% ifversion packages-registries-v2 %} herda as permissões e a visibilidade do repositório que possui o pacote. Encontre um pacote com escopo para um repositório acessando a página principal do repositório e clicando no link **Pacotes** à direita da página. {% ifversion fpt or ghec %}Para obter mais informações, confira "[Como conectar um repositório a um pacote](/packages/learn-github-packages/connecting-a-repository-to-a-package)".{% endif %}

{% ifversion packages-registries-v2 %} Os registros {% data variables.product.prodname_registry %} a seguir têm suporte **apenas** para permissões com escopo de repositório.

{% ifversion not fpt or ghec %}- Registro do Docker (`docker.pkg.github.com`){% endif %} {% ifversion packages-npm-v2 %}{% else %}- registro npm{% endif %}
- Registro do Rubygems
- Registro do Apache Maven
- Registro Gradle {% ifversion packages-nuget-v2 %}{% else %}- registro NuGet {% endif %}

Para {% ifversion ghes %}, o {% data variables.product.prodname_container_registry %}{% else %}outros registros{% endif %}, você pode optar por permitir que os pacotes tenham como escopo um usuário ou uma organização ou sejam vinculados a um repositório. {% ifversion docker-ghcr-enterprise-migration %}Para obter informações sobre a migração para o {% data variables.product.prodname_container_registry %}, confira "[Como migrar para o {% data variables.product.prodname_container_registry %} do registro do Docker](/packages/working-with-a-github-packages-registry/migrating-to-the-container-registry-from-the-docker-registry)."{% endif %}

{% endif %}

{% ifversion packages-registries-v2 %}
## Visibilidade e permissões de acesso para imagens de contêiner

{% data reusables.package_registry.visibility-and-access-permissions %}

Para obter mais informações, confira "[Como configurar o controle de acesso e a visibilidade de um pacote](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility)".

{% endif %}

## Sobre escopos e permissões para registros de pacotes

{% data reusables.package_registry.packages-classic-pat-only %}

Para usar ou gerenciar um pacote hospedado por um registro de pacote, você deve usar um {% data variables.product.pat_v1 %} com o escopo apropriado e sua conta pessoal deve ter as permissões apropriadas.

Por exemplo:
-  Para baixar e instalar pacotes de um repositório, seu {% data variables.product.pat_v1 %} deve ter o escopo `read:packages` e sua conta de usuário deve ter permissão de leitura.
- {% ifversion fpt or ghes or ghec %}Para excluir um pacote no {% data variables.product.product_name %}, seu {% data variables.product.pat_v1 %} deve ter no mínimo os escopos `delete:packages` e `read:packages`. O escopo `repo` também é necessário para os pacotes com escopo no repositório. Para obter mais informações, confira "[Excluir e restaurar um pacote](/packages/learn-github-packages/deleting-and-restoring-a-package)."{% elsif ghae %}Para excluir uma versão especificada de um pacote no {% data variables.product.product_name %}, seu {% data variables.product.pat_v1 %} deve ter os escopos `delete:packages` e `repo`. Para obter mais informações, confira "[Como excluir e restaurar um pacote](/packages/learn-github-packages/deleting-and-restoring-a-package)".{% endif %}

| Escopo | Descrição | Permissão necessária |
| --- | --- | --- |
|`read:packages`| Faça o download e instale pacotes do {% data variables.product.prodname_registry %} | ler |
|`write:packages`| Faça o upload e publique os pacotes em {% data variables.product.prodname_registry %} | gravação |
| `delete:packages` | {% ifversion fpt or ghes or ghec %} Excluir pacotes de {% data variables.product.prodname_registry %} {% elsif ghae %} Excluir versões especificadas de pacotes de {% data variables.product.prodname_registry %} {% endif %} | administrador |
| `repo` | Carregar e excluir pacotes (junto com `write:packages` ou `delete:packages`) | gravação ou admin |

Quando você cria um fluxo de trabalho {% data variables.product.prodname_actions %}, você pode usar o `GITHUB_TOKEN` para publicar e instalar pacotes no {% data variables.product.prodname_registry %} sem a necessidade de armazenar e gerenciar um {% data variables.product.pat_generic %}.

Para mais informações, consulte:{% ifversion fpt or ghec %}
- "[Como configurar o controle de acesso e a visibilidade de um pacote](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility)"{% endif %}
- "[Como publicar e instalar um pacote com o {% data variables.product.prodname_actions %}](/packages/managing-github-packages-using-github-actions-workflows/publishing-and-installing-a-package-with-github-actions)"
- "[Como criar um {% data variables.product.pat_generic %}](/github/authenticating-to-github/creating-a-personal-access-token/)"
- "[Escopos disponíveis](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/#available-scopes)"

## Mantendo acesso a pacotes nos fluxos de trabalho de {% data variables.product.prodname_actions %}

Para garantir que seus workflows mantenham o acesso aos seus pacotes, certifique-se de que você esteja usando o token de acesso correto do seu fluxo de trabalho e que você habilitou o acesso do {% data variables.product.prodname_actions %} para o seu pacote.

Para obter mais informações conceituais sobre o {% data variables.product.prodname_actions %} ou exemplos de uso de pacotes em fluxos de trabalho, confira "[Como gerenciar pacotes do GitHub usando fluxos de trabalho do GitHub Actions](/packages/managing-github-packages-using-github-actions-workflows)".

### Tokens de acesso  

- Para publicar pacotes associados ao repositório de fluxo de trabalho, use `GITHUB_TOKEN`.
- Para instalar pacotes associados a outros repositórios privados que o `GITHUB_TOKEN` não pode acessar, use um {% data variables.product.pat_v1 %}

Para obter mais informações sobre o `GITHUB_TOKEN` usado em fluxos de trabalho do {% data variables.product.prodname_actions %}, confira "[Autenticação em um fluxo de trabalho](/actions/reference/authentication-in-a-workflow#using-the-github_token-in-a-workflow)".

{% ifversion fpt or ghec %}
### Acesso a {% data variables.product.prodname_actions %} para imagens de contêiner

Para garantir que seus fluxos de trabalho tenham acesso à imagem do contêiner, você deve permitir o acesso do {% data variables.product.prodname_actions %} aos repositórios em que o seu fluxo de trabalho é executado. Você pode encontrar essa configuração na página de configurações do seu pacote. Para obter mais informações, confira "[Como garantir o acesso de fluxo de trabalho ao seu pacote](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#ensuring-workflow-access-to-your-package)".

{% endif %}
