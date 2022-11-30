---
title: Como criar um arquivo padrão de integridade da comunidade
intro: 'Você pode criar arquivos padrão de integridade da comunidade, como CONTRIBUTING e CODE_OF_CONDUCT. Os arquivos padrão serão usados para qualquer repositório pertencente à conta que não contém seu próprio arquivo desse tipo.'
redirect_from:
  - /articles/creating-a-default-community-health-file-for-your-organization
  - /github/building-a-strong-community/creating-a-default-community-health-file-for-your-organization
  - /github/building-a-strong-community/creating-a-default-community-health-file
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Community health file
ms.openlocfilehash: 762af2fcbbc16e0bfc671df2409fede9ea6e2c67
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145095207'
---
## Sobre arquivos padrão de integridade da comunidade

Você pode adicionar arquivos padrão de integridade da comunidade a um repositório público chamado `.github`, na raiz do repositório ou nas pastas `docs` ou `.github`.

{% data variables.product.product_name %} usará e exibirá arquivos padrão para qualquer repositório pertencente à conta que não tem seu próprio arquivo desse tipo em nenhum dos seguintes lugares:
- a raiz do repositório
- a pasta `.github`
- a pasta `docs`

Por exemplo, qualquer pessoa que criar um problema ou pull request em um repositório que não tenha seu próprio arquivo CONTRIBUTING verá um link para o arquivo padrão CONTRIBUTING. Se um repositório tiver arquivos na pasta `.github/ISSUE_TEMPLATE`{% ifversion fpt or ghes or ghec %}, incluindo modelos de problemas ou um arquivo *config.yml*,{% endif %} nenhum conteúdo da pasta `.github/ISSUE_TEMPLATE` padrão será usado.

Os arquivos padrão não são incluídos em clones, pacotes ou downloads de repositórios individuais porque são armazenados apenas no repositório `.github`.

## Tipos de arquivo com suporte

Você pode criar padrões na sua conta de organização{% ifversion fpt or ghes or ghec %} ou pessoal {% endif %} para os seguintes arquivos de integridade da comunidade:

Arquivo de integridade da comunidade | Descrição --- | ---{% ifversion fpt or ghec %} *CODE_OF_CONDUCT.md* | Um arquivo CODE_OF_CONDUCT define os padrões de como participar de uma comunidade. Para obter mais informações, confira "[Como adicionar um código de conduta ao seu projeto](/articles/adding-a-code-of-conduct-to-your-project/)".{% endif %} *CONTRIBUTING.md* | Um arquivo CONTRIBUTING informa como as pessoas devem contribuir com seu projeto. Para obter mais informações, confira "[Como definir diretrizes para colaboradores do repositório](/articles/setting-guidelines-for-repository-contributors/)".{% ifversion fpt or ghec %} *FUNDING.yml* | Um arquivo FUNDING exibe um botão de patrocinador no seu repositório para aumentar a visibilidade das opções de financiamento para seu projeto de código aberto. Para obter mais informações, confira "[Como exibir um botão de patrocinador no seu repositório](/articles/displaying-a-sponsor-button-in-your-repository)".{% endif %} Modelos de problemas e de solicitações de pull{% ifversion fpt or ghes or ghec %} e *config.yml*{% endif %} | Os modelos de problemas e de solicitações de pull personalizam e padronizam as informações que você deseja que os colaboradores incluam ao abrir problemas e solicitações de pull no repositório. Para obter mais informações, confira "[Sobre os modelos de problemas e de solicitações de pull](/articles/about-issue-and-pull-request-templates/)".{% ifversion fpt or ghes or ghec %} *SECURITY.md* | Um arquivo SECURITY fornece instruções sobre como relatar uma vulnerabilidade de segurança no projeto. Para obter mais informações, confira "[Como adicionar uma política de segurança ao seu repositório](/code-security/getting-started/adding-a-security-policy-to-your-repository)".{% endif %} *SUPPORT.md* | Um arquivo SUPPORT permite que as pessoas descubram as maneiras de obter ajuda com seu projeto. Para obter mais informações, confira "[Como adicionar recursos de suporte ao seu projeto](/articles/adding-support-resources-to-your-project/)".

Você não pode criar um arquivo de licença padrão. Os arquivos de licença devem ser adicionados a repositórios individuais para que o arquivo seja incluído quando um projeto for clonado, empacotado ou baixado.

## Criar um repositório para arquivos padrão

{% data reusables.repositories.create_new %}
2. Use o menu suspenso **Proprietário** e selecione a conta de organização{% ifversion fpt or ghes or ghec %} ou pessoal {% endif %} para a qual deseja criar arquivos padrão.
  ![Menu suspenso Proprietário](/assets/images/help/repository/create-repository-owner.png)
3. Digite **.github** como o nome do repositório e uma descrição opcional.
  ![Campo Criar repositório](/assets/images/help/repository/default-file-repository-name.png)
4. Verifique se o status do repositório está definido como **Público** (um repositório para arquivos padrão não pode ser privado).
  ![Botões de opção usados para selecionar o status público ou privado](/assets/images/help/repository/create-repository-public-private.png) {% data reusables.repositories.initialize-with-readme %} {% data reusables.repositories.create-repo %}
7. No repositório, crie um dos arquivos compatíveis de integridade da comunidade. Os modelos de problemas{% ifversion fpt or ghes or ghec %} e os respectivos arquivos de configuração{% endif %} precisam estar em uma pasta chamada `.github/ISSUE_TEMPLATE`. Todos os outros arquivos com suporte podem estar na raiz do repositório, na pasta `.github` ou na pasta `docs`. Para obter mais informações, confira "[Como criar arquivos](/articles/creating-new-files/)".
