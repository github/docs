---
title: Criar um repositório de modelos
intro: 'É possível transformar um repositório existente em um modelo, de modo que você e outras pessoas podem gerar novos repositórios com os mesmos arquivos, branches e estrutura de diretório.'
permissions: Anyone with admin permissions to a repository can make the repository a template.
redirect_from:
  - /articles/creating-a-template-repository
  - /github/creating-cloning-and-archiving-repositories/creating-a-template-repository
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/creating-a-template-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Create a template repo
ms.openlocfilehash: 1ae0c562f1d92e8184ae749199f609bb223748d4
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145127095'
---
{% note %}

**Observação**: o repositório de modelos não pode incluir arquivos armazenados que usam o {% data variables.large_files.product_name_short %}.

{% endnote %}

Para criar um repositório de modelos, é preciso criar um repositório e, em seguida, torná-lo um modelo. Para obter mais informações sobre como criar um repositório, confira "[Como criar um repositório](/articles/creating-a-new-repository)".

Depois que seu repositório se tornar um modelo, qualquer pessoa com acesso ao repositório poderá gerar um novo repositório com os mesmos arquivos e estrutura de diretório como branch padrão. Ela também poderá optar por incluir todos os outros branches em seu repositório. Os branches criados a partir de um modelo têm histórico não relacionado, portanto, você não pode criar pull requests ou fazer merge entre os branches. Para obter mais informações, confira "[Como criar um repositório com base em um modelo](/articles/creating-a-repository-from-a-template)".

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
1. Selecione **Repositório de modelos**.
  ![Caixa de seleção usada para transformar um repositório em modelo](/assets/images/help/repository/template-repository-checkbox.png)
