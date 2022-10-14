---
title: Clonar um repositório
intro: 'Ao criar um repositório no {% data variables.product.product_location %}, ele passa a existir como um repositório remoto. É possível clonar o repositório para criar uma cópia local no seu computador e sincronizar entre os dois locais.'
redirect_from:
  - /articles/cloning-a-repository
  - /articles/cloning-a-repository-from-github
  - /github/creating-cloning-and-archiving-repositories/cloning-a-repository
  - /github/creating-cloning-and-archiving-repositories/cloning-a-repository-from-github/cloning-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: fbe00d1568a2f746362d434e769aef2f3466bcf1
ms.sourcegitcommit: 76b840f45ba85fb79a7f0c1eb43bc663b3eadf2b
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/12/2022
ms.locfileid: '145127098'
---
## Sobre clonagem de um repositório

Você pode clonar um repositório do {% data variables.product.product_location %} para o seu computador local para facilitar a correção de conflitos de merge, adicionar ou remover arquivos e fazer push de commits maiores. Ao clonar um repositório, você copia o repositório do {% data variables.product.product_location %} para a sua máquina local.

Clonar um repositório extrai uma cópia completa de todos os dados do repositório que o {% data variables.product.product_location %} tem nesse momento, incluindo todas as versões de cada arquivo e pasta do projeto. Você pode fazer push das alterações no repositório remoto no {% data variables.product.product_location %} ou extrair as alterações de outras pessoas no {% data variables.product.product_location %}. Para obter mais informações, confira "[Como usar o Git](/github/getting-started-with-github/using-git)".

É possível clonar o repositório existente ou clonar o repositório existente de outra pessoa para contribuir para um projeto.

## Clonar um repositório

{% webui %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.copy-clone-url %} {% data reusables.command_line.open_the_multi_os_terminal %} {% data reusables.command_line.change-current-directory-clone %} {% data reusables.command_line.git-clone-url %} {% data reusables.command_line.local-clone-created %}

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

Para clonar um repositório localmente, use o subcomando `repo clone`. Substitua o parâmetro `repository` pelo nome do repositório. Por exemplo, `octo-org/octo-repo`, `monalisa/octo-repo` ou `octo-repo`. Se a parte `OWNER/` do argumento do repositório `OWNER/REPO` for omitida, ele usará como padrão o nome do usuário autenticador.

```shell
gh repo clone <em>repository</em>
```

Você também pode usar o URL do GitHub para clonar um repositório.

```shell
gh repo clone <em>https://github.com/cli/cli</em>
```

{% endcli %}

{% desktop %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.open-with-github-desktop %}
4. Siga as solicitações no {% data variables.product.prodname_desktop %} para concluir o clone.

Para obter mais informações, confira "[Como clonar um repositório do {% data variables.product.prodname_dotcom %} para o {% data variables.product.prodname_desktop %}](/desktop/guides/contributing-to-projects/cloning-a-repository-from-github-to-github-desktop/)".

{% enddesktop %}

## Clonar um repositório vazio

Um repositório vazio não contém arquivos. Muitas vezes, isso é feito se você não inicializar o repositório com um README ao criá-lo.

{% data reusables.repositories.navigate-to-repo %}
2. Para clonar seu repositório usando a linha de comando por HTTPS, em "Configuração rápida", clique em {% octicon "clippy" aria-label="The clipboard icon" %}. Para clonar o repositório usando uma chave SSH, incluindo um certificado emitido pela autoridade de certificação SSH da sua organização, clique em **SSH** e em {% octicon "clippy" aria-label="The clipboard icon" %}.
   ![Botão usado para clonar o repositório vazio por meio da URL](/assets/images/help/repository/empty-https-url-clone-button.png)

   Como alternativa, para clonar seu repositório no Desktop, clique em {% octicon "desktop-download" aria-label="The desktop download button" %} **Configurar no Desktop** e siga os prompts para concluir o clone.
   ![Botão usado para clonar o repositório vazio no Desktop](/assets/images/help/repository/empty-desktop-clone-button.png)

{% data reusables.command_line.open_the_multi_os_terminal %} {% data reusables.command_line.change-current-directory-clone %} {% data reusables.command_line.git-clone-url %} {% data reusables.command_line.local-clone-created %}

## Solucionar problemas de erros de clonagem

Ao clonar um repositório, é possível que você encontre alguns erros.

Se você não conseguir clonar um repositório, verifique se:

- Você consegue conectar-se usando HTTPS. Para obter mais informações, confira "[Erros de clonagem HTTPS](/github/creating-cloning-and-archiving-repositories/https-cloning-errors)".
- Você tem permissão para acessar o repositório que você deseja clonar. Para obter mais informações, confira "[Erro: repositório não encontrado](/github/creating-cloning-and-archiving-repositories/error-repository-not-found)".
- O branch-padrão que você deseja clonar ainda existe. Para obter mais informações, confira "[Erro: o HEAD remoto refere-se a uma referência inexistente. Não é possível fazer check-out](/repositories/creating-and-managing-repositories/troubleshooting-cloning-errors#error-remote-head-refers-to-nonexistent-ref-unable-to-checkout)".

{% ifversion fpt or ghec %}

## Leitura adicional

- "[Solução de problemas de conectividade](/articles/troubleshooting-connectivity-problems)" {% endif %}
