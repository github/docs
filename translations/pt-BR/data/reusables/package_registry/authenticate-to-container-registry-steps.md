---
ms.openlocfilehash: 50e7f623d6585c8697d0b1c6c827a855df26c571
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145096300"
---
1. Crie um novo token de acesso pessoal (PAT) com os escopos apropriados para as tarefas que você deseja realizar. Se sua organização exigir SSO, você deverá habilitar o SSO para seu novo token.
  {% warning %}

  **Observação:** por padrão, quando você selecionar o escopo `write:packages` do PAT (token de acesso pessoal) na interface do usuário, o escopo `repo` também será selecionado. O escopo `repo` oferece acesso desnecessário e amplo, o qual, em particular, recomendamos que você evite usar para fluxos de trabalho do GitHub Actions. Para obter mais informações, confira "[Proteção de segurança do GitHub Actions](/actions/getting-started-with-github-actions/security-hardening-for-github-actions#considering-cross-repository-access)". Como solução alternativa, você pode selecionar apenas o escopo `write:packages` do PAT na interface do usuário com esta URL: `https://{% ifversion fpt or ghec %}github.com{% else %}HOSTNAME{% endif %}/settings/tokens/new?scopes=write:packages`. 

  {% endwarning %}

    - Selecione o escopo `read:packages` para baixar imagens de contêiner e ler os metadados dela.
    - Selecione o escopo `write:packages` para baixar e carregar imagens de contêiner e ler e gravar os metadados dela.
    - Selecione o escopo `delete:packages` para excluir imagens de contêiner.

  Para obter mais informações, confira "[Como criar um token de acesso pessoal para a linha de comando](/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line)".

2. Salve seu PAT. Recomendamos salvar o seu PAT como uma variável de ambiente.
  ```shell
  $ export CR_PAT=YOUR_TOKEN
  ```
3. Usando a CLI para o tipo de contêiner, entre no serviço do {% data variables.product.prodname_container_registry %} em `{% data reusables.package_registry.container-registry-hostname %}`.
  {% raw %}
  ```shell
  $ echo $CR_PAT | docker login {% endraw %}{% data reusables.package_registry.container-registry-hostname %}{% raw %} -u USERNAME --password-stdin
  > Login Succeeded
  ```
  {% endraw %}
