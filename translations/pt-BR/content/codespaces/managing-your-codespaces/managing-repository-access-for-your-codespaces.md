---
title: Gerenciar o acesso a outros repositórios em seu codespace
allowTitleToDifferFromFilename: true
shortTitle: Repository access
intro: 'Você pode gerenciar os repositórios que o {% data variables.product.prodname_github_codespaces %} pode acessar.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Codespaces
  - Security
redirect_from:
  - /codespaces/managing-your-codespaces/managing-access-and-security-for-your-codespaces
ms.openlocfilehash: 3f8379c322bd7ccd9ff7d31e17da90a77461536d
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159361'
---
## Visão geral

Por padrão, o codespace recebe um token com escopo para o repositório do qual foi criado. Quando você publica um codespace criado com um modelo em um novo repositório no {% data variables.product.product_name %}, o codespace recebe um token com escopo para o novo repositório. Para obter mais informações, confira "[Segurança nos {% data variables.product.prodname_github_codespaces %}](/codespaces/codespaces-reference/security-in-github-codespaces#authentication)". Se o projeto precisar de permissões adicionais para outros repositórios, você poderá configurá-lo no arquivo `devcontainer.json` e garantir que outros colaboradores tenham o conjunto certo de permissões.

Quando as permissões forem listadas no arquivo `devcontainer.json`, você será solicitado a examinar e autorizar as permissões adicionais como parte da criação do codespace para esse repositório. Depois de autorizar as permissões listadas, {% data variables.product.prodname_github_codespaces %} lembrarão de sua escolha e não solicitarão autorização, a menos que as permissões no arquivo `devcontainer.json` sejam alteradas.

## Pré-requisitos

Para criar codespaces com permissões personalizadas definidas, você deve usar um dos seguintes:
* A interface do usuário da Web {% data variables.product.prodname_dotcom %}
* [CLI do {% data variables.product.prodname_dotcom %}](https://github.com/cli/cli/releases/latest) 2.5.2 ou posterior
* [Extensão {% data variables.product.prodname_github_codespaces %} {% data variables.product.prodname_vscode %}](https://marketplace.visualstudio.com/items?itemName=GitHub.codespaces) 1.5.3 ou posterior

## Configurar permissões de repositório adicionais

1. Você configura permissões de repositório para {% data variables.product.prodname_github_codespaces %} no arquivo `devcontainer.json`. Se o repositório ainda não contiver um arquivo `devcontainer.json`, adicione-o agora. Para obter mais informações, "[Adicionar um contêiner de desenvolvimento ao seu projeto](/codespaces/setting-up-your-project-for-codespaces/setting-up-your-project-for-codespaces)".

1. Edite o arquivo `devcontainer.json`, adicionando o nome do repositório e as permissões necessárias ao objeto `repositories`:

  ```json{:copy}
  {
    "customizations": {
      "codespaces": {
        "repositories": {
          "my_org/my_repo": {
            "permissions": {
              "issues": "write"
            }
          }
        }
      }
    }
  }
  ```

  {% note %}

  **Observação:** você só pode referenciar repositórios que pertencem à mesma conta pessoal ou organização que o repositório em que você está trabalhando no momento.

  {% endnote %}

  Você pode conceder quantas quiser das seguintes permissões para cada repositório listado:
   * `actions` – leitura/gravação
   * `checks` – leitura/gravação
   * `contents` – leitura/gravação
   * `deployments` – leitura/gravação
   * `discussions` – leitura/gravação
   * `issues` – leitura/gravação
   * `packages` – leitura
   * `pages` – leitura/gravação
   * `pull_requests` – leitura/gravação
   * `repository_projects` – leitura/gravação
   * `statuses` – leitura/gravação
   * `workflows` – gravação

  Para definir uma permissão para todos os repositórios em uma organização, use o curinga `*` seguindo o nome da sua organização no objeto `repositories`.

  ```json
  {
    "customizations": {
      "codespaces": {
        "repositories": {
          "my_org/*": {
            "permissions": {
              "issues": "write"
            }
          }
        }
      }
    }
  }
  ```

  Para definir todas as permissões para um determinado repositório, use `"permissions": "read-all"` ou `"permissions": "write-all"` no objeto de repositório.

  ```json
  {
    "customizations": {
      "codespaces": {
        "repositories": {
          "my_org/my_repo": {
            "permissions": "write-all"
          }
        }
      }
    }
  }
  ```

## Autorizar permissões solicitadas

Se permissões de repositório adicionais forem definidas no arquivo `devcontainer.json`, você será solicitado a revisar e, opcionalmente, autorizar as permissões ao criar um codespace ou uma configuração de prebuild para esse repositório. Quando você autorizar permissões para um repositório, os {% data variables.product.prodname_github_codespaces %} não solicitarão novamente, a menos que o conjunto de permissões solicitadas tenha sido alterado para o repositório.

![A página de permissões solicitadas](/assets/images/help/codespaces/codespaces-accept-permissions.png)

Você só deve autorizar permissões para repositórios que você conhece e confia. Se você não confiar no conjunto de permissões solicitadas, clique em **Continuar sem autorizar** para criar o codespace com o conjunto de permissões base. Rejeitar permissões adicionais pode afetar a funcionalidade do seu projeto dentro do codespace, pois o codespace só terá acesso ao repositório do qual ele foi criado.

Você só pode autorizar permissões que sua conta pessoal já possui. Se um codespace solicitar permissões para repositórios aos quais você não tem acesso no momento, entre em contato com um proprietário ou administrador do repositório para obter acesso suficiente e tente criar um codespace novamente.

## Acesso e segurança

{% warning %}

**Observação de substituição**: a configuração de acesso e segurança descrita abaixo foi preterida e está documentada aqui somente para referência. Para habilitar o acesso expandido a outros repositórios, adicione as permissões solicitadas à definição de contêiner de desenvolvimento para seu codespace, conforme descrito acima.

{% endwarning %}

Quando você habilita o acesso e a segurança para um repositório pertencente à sua conta pessoal, todos os codespaces criados para esse repositório terão permissões de leitura para todos os outros repositórios que você possui. Se você deseja restringir os repositórios que um código pode acessar, você pode limitá-lo tanto para o repositório no qual o código foi aberto ou para repositórios específicos. Você só deve habilitar o acesso e a segurança para repositórios nos quais confia. 

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.codespaces-tab %}
1. Em "Acesso e segurança", selecione a configuração desejada para sua conta pessoal.

  ![Botões de opção para gerenciar repositórios confiáveis](/assets/images/help/settings/codespaces-access-and-security-radio-buttons.png)

1. Se você escolher "Repositórios selecionados", selecione o menu suspenso e clique em um repositório para permitir que os codespaces do repositório acessem outros repositórios pertencentes a você. Repita para todos os repositórios cujos codespaces você deseja que acessem outros repositórios dos quais você é proprietário.

  ![Menu suspenso "Repositórios selecionados"](/assets/images/help/settings/codespaces-access-and-security-repository-drop-down.png)
