---
title: Configurar diretrizes para os contribuidores do repositório
intro: Você pode criar diretrizes para informar como as pessoas devem contribuir com o projeto.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
redirect_from:
  - /articles/how-do-i-set-up-guidelines-for-contributors
  - /articles/setting-guidelines-for-repository-contributors
  - /github/building-a-strong-community/setting-guidelines-for-repository-contributors
topics:
  - Community
shortTitle: Contributor guidelines
ms.openlocfilehash: b418c5a3d10f8b8f7572f33b17a9ebfbb3de27d3
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147578785'
---
## Sobre diretrizes de contribuição
Para ajudar os colaboradores do projeto a fazer um bom trabalho, você pode adicionar um arquivo com diretrizes de contribuição à raiz do repositório de projeto, a `docs` ou à pasta `.github`. Quando alguém abrir uma pull request ou criar um problema, verá um link para esse arquivo. O link usado para as diretrizes de contribuição também é exibido na página do repositório `contribute`. Para ver um exemplo de uma página `contribute`, confira [github/docs/contribute](https://github.com/github/docs/contribute). 

![diretrizes de contribuição](/assets/images/help/pull_requests/contributing-guidelines.png)

Para o proprietário do repositório, as diretrizes de contribuição são uma forma de informar como as pessoas devem contribuir.

Para contribuidores, as diretrizes ajudam a verificar se eles estão enviando pull requests corretas e abrindo problemas úteis.

Para proprietários e contribuidores, as diretrizes de contribuição economizam tempo e evitam aborrecimentos causados por pull requests ou problemas incorretos que precisam ser rejeitados e enviados novamente.

{% ifversion fpt or ghes or ghec %}

Você pode criar diretrizes de contribuição padrão para sua conta de organização{% ifversion fpt or ghes or ghec %} ou pessoal {% endif %}. Para obter mais informações, confira "[Como criar um arquivo padrão de integridade da comunidade](//communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file)".

{% endif %}

{% tip %}

**Dica:** os mantenedores do repositório podem definir diretrizes específicas para problemas criando um modelo de solicitação de pull ou de problema para o repositório. Para obter mais informações, confira "[Sobre os modelos de solicitações de pull e de problemas](/articles/about-issue-and-pull-request-templates)".

{% endtip %}

## Como adicionar um arquivo *CONTRIBUTING*

{% data reusables.repositories.navigate-to-repo %} {% data reusables.files.add-file %}
3. Decida se deseja armazenar suas diretrizes de contribuição na raiz do repositório, em `docs` ou no diretório `.github`. Em seguida, no campo de nome do arquivo, digite o nome e a extensão do arquivo. Os nomes de arquivos com diretrizes de contribuição não são sensíveis a maiúsculas de minúsculas. Os arquivos são renderizados no formato de texto rich se a extensão do arquivo estiver em um formato compatível. Para obter mais informações, confira "[Como trabalhar com arquivos que não são de código](/repositories/working-with-files/using-files/working-with-non-code-files#rendering-differences-in-prose-documents)".
  ![Nome do novo arquivo](/assets/images/help/repository/new-file-name.png)
    - Para tornar as diretrizes de contribuição visíveis no diretório raiz do repositório, digite *CONTRIBUTING*.
    - Para tornar as diretrizes de contribuição visíveis no diretório `docs` do repositório, digite *docs/* para criar o diretório e, depois, *CONTRIBUTING*.
    - Se um repositório contiver mais de um arquivo *CONTRIBUTING*, o arquivo mostrado nos links será escolhido dos locais na seguinte ordem: o diretório `.github`, o diretório raiz do repositório e, por fim, o diretório `docs`.
4. Adicione as diretrizes de contribuição ao novo arquivo. Elas podem conter:
    - Etapas para criar bons problemas ou pull requests.
    - Links para documentações externas, listas de distribuição ou um código de conduta.
    - Expectativas de comportamento e da comunidade.
{% data reusables.files.write_commit_message %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_new_file %}

## Exemplos de diretrizes de contribuição

Caso tenha dúvidas, estes são alguns bons exemplos de diretrizes de contribuição:

- As [diretrizes de contribuição](https://github.com/atom/atom/blob/master/CONTRIBUTING.md) do editor do Atom.
- As [diretrizes de contribuição](https://github.com/rails/rails/blob/main/CONTRIBUTING.md) do Ruby on Rails.
- As [diretrizes de contribuição](https://github.com/opengovernment/opengovernment/blob/master/CONTRIBUTING.md) do Open Government.

## Leitura adicional
- A seção "[Como iniciar um projeto de código aberto](https://opensource.guide/starting-a-project/)" dos Guias de Código Aberto{% ifversion fpt or ghec %}
- [{% data variables.product.prodname_learning %}]({% data variables.product.prodname_learning_link %}){% endif %}{% ifversion fpt or ghes or ghec %}
- "[Como adicionar uma licença a um repositório](/articles/adding-a-license-to-a-repository)"{% endif %}
