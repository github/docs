---
title: Gerenciando acesso a outros repositórios no seu codespace
allowTitleToDifferFromFilename: true
shortTitle: Acesso ao repositório
intro: 'Você pode gerenciar os repositórios que {% data variables.product.prodname_codespaces %} pode acessar.'
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Codespaces
  - Security
redirect_from:
  - /codespaces/managing-your-codespaces/managing-access-and-security-for-your-codespaces
---

## Visão Geral

Por padrão, seu código é atribuído um escopo de token para o repositório a partir do qual ele foi criado. Para obter mais informações, consulte "[Segurança em {% data variables.product.prodname_codespaces %}](/codespaces/codespaces-reference/security-in-codespaces#authentication)". Se o seu projeto precisar de permissões adicionais para outros repositórios, você poderá configurar isso no arquivo `devcontainer.json` e certificar-se de que outros colaboradores tenham o conjunto correto de permissões.

Quando as permissões são listadas no arquivo `devcontainer.json`, será solicitado que você revise e autorize as permissões adicionais como parte da criação do codespace para esse repositório. Uma vez autorizadas as permissões listadas, {% data variables.product.prodname_github_codespaces %} lembrará de sua escolha e não pedirá autorização a menos que as permissões no arquivo `devcontainer.json` sejam alteradas.

## Pré-requisitos

Para criar codespaces com permissões personalizadas definidas, você deve usar um dos seguintes:
* A interface de usuário web do {% data variables.product.prodname_dotcom %}
* [CLI de {% data variables.product.prodname_dotcom %}](https://github.com/cli/cli/releases/latest) 2.5.2 ou posterior
* [Extensão do Visual Studio Code de{% data variables.product.prodname_github_codespaces %}](https://marketplace.visualstudio.com/items?itemName=GitHub.codespaces) 1.5.3 ou superior

## Configurando permissões adicionais do repositório

1. Você configura as permissões do repositório para {% data variables.product.prodname_github_codespaces %} no arquivo `devcontainer.json`. Se o seu repositório ainda não contiver um arquivo `devcontainer.json`, adicione um agora. Para mais informações, "[Adicione um contêiner de desenvolvimento ao seu projeto](/codespaces/setting-up-your-project-for-codespaces/setting-up-your-project-for-codespaces)".

1. Edite o arquivo `devcontainer.json`, adicionando o nome do repositório e as permissões necessárias ao objeto `repositórios`.

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

  **Observação:** Você só pode fazer referência a repositórios que pertencem à mesma conta pessoal ou organização do repositório no qual você está trabalhando atualmente.

  {% endnote %}

  Você pode conceder as seguintes permissões para cada repositório listado:
   * `actions` - leitura / gravação
   * `checks` - leitura / gravação
   * `contents` - leitura / gravação
   * `deployments` - leitura / gravação
   * `discussions` - leitura / gravação
   * `issues` - leitura / gravação
   * `packages` - read
   * `pages` - leitura / gravação
   * `pull_requests` - leitura / gravação
   * `repository_projects` - leitura / gravação
   * `statuses` - leitura / gravação
   * `workflows` -gravação

  Para definir uma permissão para todos os repositórios na organização, use o curinga `*` que segue o nome da organização no objeto `repositórios`.

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

  Para definir todas as permissões para um determinado repositório, use `read-all` ou `write-all` no objeto `permissões`

  ```json
  {
    "customizations": {
      "codespaces": {
        "repositories": {
          "my_org/my_repo": {
            "permissions": {
              "write-all"
            }
          }
        }
      }
    }
  }
  ```

## Autorizando permissões solicitadas

Se as permissões adicionais do repositório forem definidas no arquivo `devcontainer.json`, será apens solicitado que você revise e, opcionalmente, autorize as permissões ao criar um codespace para este repositório. Ao autorizar permissões para um repositório, {% data variables.product.prodname_github_codespaces %} não irá perguntar você novamente a menos que o conjunto das permissões solicitadas tenha sido alterado no repositório.

![Página de permissões solicitadas](/assets/images/help/codespaces/codespaces-accept-permissions.png)

Você deve autorizar permissões apenas para repositórios que você conhece e confia. Se você não confia no conjunto das permissões solicitadas, clique em **Continuar sem autorizar** para criar o codespace com o conjunto base de permissões. Rejeitar permissões adicionais pode impactar a funcionalidade do seu projeto dentro do codespace, uma vez que este apenas terá acesso ao repositório no qual ele foi criado.

Você só pode autorizar as permissões que sua conta pessoal já possui. Se um codespace solicita permissões para repositórios aos quais você não tem acesso atualmente, entre em contato com o proprietário ou administrador do repositório para obter acessoe, em seguida, tente criar um codespace novamente.

## Acesso e segurança

{% warning %}

**Observação de depreciação**: A configuração de acesso e segurança, na seção {% data variables.product.prodname_codespaces %} das configurações da sua conta pessoal está obsoleta. Para habilitar o acesso expandido a outros repositórios, adicione as permissões solicitadas à definição do contêiner de desenvolvimento para seu codespace, conforme descrito acima.

{% endwarning %}

Ao habilitar o acesso e a segurança de um repositório pertencente à sua conta pessoal, todos os códigos que forem criados para esse repositório terão permissões de leitura em todos os outros repositórios que você possui. Se você deseja restringir os repositórios que um código pode acessar, você pode limitá-lo tanto para o repositório no qual o código foi aberto ou para repositórios específicos. Você só deve habilitar o acesso e a segurança para repositórios nos quais confia.

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.codespaces-tab %}
1. Em "Acesso e segurança", selecione a configuração que deseja para sua conta pessoal.

  ![Botões de opção para gerenciar repositórios confiáveis](/assets/images/help/settings/codespaces-access-and-security-radio-buttons.png)

1. Se você escolher "repositórios selecionados", selecione o menu suspenso e clique em um repositório para permitir que os codespaces do repositório tenham acesso a outros repositórios dos quais você é proprietário. Repita para todos os repositórios cujos codespaces você deseja que acessem outros repositórios dos quais você é proprietário.

  ![Menu suspenso "Repositórios selecionados"](/assets/images/help/settings/codespaces-access-and-security-repository-drop-down.png)

## Leia mais

- "[Gerenciando o acesso ao repositório para os codespaces da sua organização](/codespaces/managing-codespaces-for-your-organization/managing-repository-access-for-your-organizations-codespaces)"
