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
ms.openlocfilehash: b3dbe8280bf01f668e8a7d1596e9e1abb7ad2746
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 07/13/2022
ms.locfileid: '147066903'
---
{% ifversion fpt or ghec %} As permissões para pacotes têm o escopo de repositório ou o escopo de usuário/organização.
{% endif %}

## <a name="permissions-for-repository-scoped-packages"></a>Permissões para pacotes com escopo do repositório

Um pacote com escopo de repositório herda as permissões e visibilidade do repositório que possui o pacote. Encontre um pacote com escopo para um repositório acessando a página principal do repositório e clicando no link **Pacotes** à direita da página. {% ifversion fpt or ghec %}Para obter mais informações, confira "[Como conectar um repositório a um pacote](/packages/learn-github-packages/connecting-a-repository-to-a-package)".{% endif %}

Os {% data variables.product.prodname_registry %} registros abaixo usam permissões com escopo do repositório:

  {% ifversion not fpt or ghec %}– Registro do Docker (`docker.pkg.github.com`){% endif %}
  - Registro de npm
  - Registro do Rubygems
  - Registro do Apache Maven
  - Registro do NuGet

{% ifversion fpt or ghec %}
## <a name="granular-permissions-for-userorganization-scoped-packages"></a>Permissões granulares para pacotes com escopo de usuário/organização

Pacotes com permissões granulares são escopos para uma conta de usuário pessoal ou de organização. Você pode alterar o controle de acesso e a visibilidade do pacote separadamente de um repositório que está conectado (ou vinculado) a um pacote.

Atualmente, apenas o {% data variables.product.prodname_container_registry %} oferece permissões granulares para os seus pacotes de imagem de contêiner.

## <a name="visibility-and-access-permissions-for-container-images"></a>Visibilidade e permissões de acesso para imagens de contêiner

{% data reusables.package_registry.visibility-and-access-permissions %}

Para obter mais informações, confira "[Como configurar o controle de acesso e a visibilidade de um pacote](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility)".

{% endif %}

## <a name="about-scopes-and-permissions-for-package-registries"></a>Sobre escopos e permissões para registros de pacotes

Para usar ou gerenciar um pacote hospedado por um registro de pacotes, você deve usar um token com o escopo apropriado, e sua conta pessoal deve ter as permissões necessárias.

Por exemplo:
-  Para baixar e instalar pacotes de um repositório, seu token precisa ter o escopo `read:packages` e sua conta de usuário precisa ter permissão de leitura.
- {% ifversion fpt or ghes or ghec %}Para excluir um pacote do {% data variables.product.product_name %}, o token precisa ter os escopos `delete:packages` e `read:packages`, no mínimo. O escopo `repo` também é necessário para os pacotes com escopo no repositório. Para obter mais informações, confira "[Como excluir e restaurar um pacote](/packages/learn-github-packages/deleting-and-restoring-a-package)".{% elsif ghae %}Para excluir uma versão especificada de um pacote do {% data variables.product.product_name %}, o token precisa ter os escopos `delete:packages` e `repo`. Para obter mais informações, confira "[Como excluir e restaurar um pacote](/packages/learn-github-packages/deleting-and-restoring-a-package)".{% endif %}

| Escopo | Descrição | Permissão necessária |
| --- | --- | --- |
|`read:packages`| Faça o download e instale pacotes do {% data variables.product.prodname_registry %} | ler |
|`write:packages`| Faça o upload e publique os pacotes em {% data variables.product.prodname_registry %} | gravação |
| `delete:packages` | {% ifversion fpt or ghes or ghec %} Excluir pacotes de {% data variables.product.prodname_registry %} {% elsif ghae %} Excluir versões especificadas de pacotes de {% data variables.product.prodname_registry %} {% endif %} | administrador |
| `repo` | Carregar e excluir pacotes (junto com `write:packages` ou `delete:packages`) | gravação ou admin |

Ao criar um fluxo de trabalho do {% data variables.product.prodname_actions %}, você pode usar o `GITHUB_TOKEN` para publicar e instalar pacotes no {% data variables.product.prodname_registry %} sem a necessidade de armazenar e gerenciar um token de acesso pessoal.

Para mais informações, consulte:{% ifversion fpt or ghec %}
- "[Como configurar o controle de acesso e a visibilidade de um pacote](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility)"{% endif %}
- "[Como publicar e instalar um pacote com o {% data variables.product.prodname_actions %}](/packages/managing-github-packages-using-github-actions-workflows/publishing-and-installing-a-package-with-github-actions)"
- "[Como criar um token de acesso pessoal](/github/authenticating-to-github/creating-a-personal-access-token/)"
- "[Escopos disponíveis](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/#available-scopes)"

## <a name="maintaining-access-to-packages-in--data-variablesproductprodname_actions--workflows"></a>Mantendo acesso a pacotes nos fluxos de trabalho de {% data variables.product.prodname_actions %}

Para garantir que seus workflows mantenham o acesso aos seus pacotes, certifique-se de que você esteja usando o token de acesso correto do seu fluxo de trabalho e que você habilitou o acesso do {% data variables.product.prodname_actions %} para o seu pacote.

Para obter mais informações conceituais sobre o {% data variables.product.prodname_actions %} ou exemplos de uso de pacotes em fluxos de trabalho, confira "[Como gerenciar pacotes do GitHub usando fluxos de trabalho do GitHub Actions](/packages/managing-github-packages-using-github-actions-workflows)".

### <a name="access-tokens"></a>Tokens de acesso  

- Para publicar pacotes associados ao repositório de fluxo de trabalho, use `GITHUB_TOKEN`.
- Para instalar pacotes associados a outros repositórios privados que o `GITHUB_TOKEN` não pode acessar, use um token de acesso pessoal

Para obter mais informações sobre o `GITHUB_TOKEN` usado em fluxos de trabalho do {% data variables.product.prodname_actions %}, confira "[Autenticação em um fluxo de trabalho](/actions/reference/authentication-in-a-workflow#using-the-github_token-in-a-workflow)".

{% ifversion fpt or ghec %}
### <a name="-data-variablesproductprodname_actions--access-for-container-images"></a>Acesso a {% data variables.product.prodname_actions %} para imagens de contêiner

Para garantir que seus fluxos de trabalho tenham acesso à imagem do contêiner, você deve permitir o acesso do {% data variables.product.prodname_actions %} aos repositórios em que o seu fluxo de trabalho é executado. Você pode encontrar essa configuração na página de configurações do seu pacote. Para obter mais informações, confira "[Como garantir o acesso de fluxo de trabalho ao seu pacote](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#ensuring-workflow-access-to-your-package)".

{% endif %}
