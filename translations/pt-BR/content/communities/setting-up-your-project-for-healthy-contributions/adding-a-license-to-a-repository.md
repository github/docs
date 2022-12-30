---
title: Adicionar uma licença a um repositório
intro: Você pode incluir uma licença de código aberto no seu repositório para que outras pessoas contribuam com mais facilidade.
redirect_from:
  - /articles/adding-a-license-to-a-repository
  - /github/building-a-strong-community/adding-a-license-to-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Add a license to a repo
ms.openlocfilehash: 7961f690678d2bfe53726a33d02a54e95b9cfe78
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145095208'
---
Se você incluir uma licença detectável no seu repositório, as pessoas que o visitam o verão no topo da página do repositório. Para ler o arquivo de licença inteiro, clique no nome da licença.

![Um header de repositório com uma licença MIT](/assets/images/help/repository/repo-license-indicator.png)

As licenças de código aberto permitem que outras pessoas usem, alterem e distribuam livremente o projeto no seu repositório. Para obter mais informações sobre licenças de repositório, confira "[Licenciamento de um repositório](/articles/licensing-a-repository)".

## Incluir uma licença de código aberto em seu repositório

<!--Dotcom version uses the license tool-->
{% ifversion fpt or ghec %} {% data reusables.repositories.navigate-to-repo %} {% data reusables.files.add-file %}
3. No campo de nome do arquivo, digite *LICENSE* ou *LICENSE.md* (com todas as letras em maiúsculas).
4. À direita do campo de nome do arquivo, clique em **Escolher um modelo de licença**.
  ![Botão Escolher um modelo de licença](/assets/images/help/repository/license-tool.png)
5. No lado esquerdo da página, em "Add a license to your project" (Adicionar uma licença ao seu projeto), examine as licenças disponíveis e selecione uma na lista.
  ![Lista de licenças disponíveis](/assets/images/help/repository/license-tool-picker.png)
6. Clique em **Revisar e enviar**.
  ![Botão Revisar e enviar](/assets/images/help/repository/license-review-tool.png) {% data reusables.files.write_commit_message %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.choose-commit-email %}
10. Clique em **Fazer commit de um novo arquivo**.
  ![Fazer commit da licença no branch](/assets/images/help/repository/license-submit-tool.png)

{% endif %}

<!--GHE version just adds a file named LICENSE or LICENSE.md-->
{% ifversion ghes %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.files.add-file %}
3. No campo de nome do arquivo, digite *LICENSE* ou *LICENSE.md* (com todas as letras em maiúsculas).
4. Na guia **Editar novo arquivo**, cole o texto completo da licença que deseja usar.
{% data reusables.files.write_commit_message %} {% data reusables.files.choose-commit-email %}
7. Abaixo dos campos de mensagem do commit, opte por adicionar o commit ao branch atual ou a um novo branch. Se o branch atual for `main`, opte por criar um branch para o commit e, depois, crie uma solicitação de pull. Para obter mais informações, confira "[Como criar uma solicitação de pull](/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request)".
![Opções de commit no branch](/assets/images/help/repository/choose-commit-branch.png)
8. Clique em **Fazer commit de um novo arquivo**.
  ![Fazer commit da licença no branch](/assets/images/help/repository/license-submit-tool.png)

{% endif %}

## Leitura adicional

- "[Como definir as diretrizes para os colaboradores do repositório](/articles/setting-guidelines-for-repository-contributors)"
