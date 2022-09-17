---
title: Gerenciar segredos criptografados para seus codespaces
intro: 'Você pode armazenar informações confidenciais, como tokens, que você deseja acessar nos seus codespaces por meio de variáveis de ambiente.'
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
  - /github/developing-online-with-codespaces/managing-encrypted-secrets-for-codespaces
  - /codespaces/working-with-your-codespace/managing-encrypted-secrets-for-codespaces
type: how_to
topics:
  - Codespaces
  - Developer
  - Security
  - Secret store
shortTitle: Encrypted secrets
ms.openlocfilehash: 6951acb82614d35e3394a2af8e58fc8f8442ab3a
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147419790'
---
## Sobre os segredos criptografados para os {% data variables.product.prodname_github_codespaces %}

Você pode adicionar segredos criptografados a sua conta pessoal que deseja usar nos seus codespaces. Por exemplo, você pode querer armazenar e acessar as seguintes informações confidenciais como segredos criptografados.

- Tokens de acesso pessoal para os serviços da nuvem
- Entidades de serviço
- Identificadores da assinatura
- [Credenciais de um registro de imagens privado](/codespaces/codespaces-reference/allowing-your-codespace-to-access-a-private-image-registry)

Você pode escolher quais repositórios devem ter acesso a cada segredo. Em seguida, você pode usar o segredo em qualquer código que criar para um repositório que tiver acesso ao segredo.

{% data reusables.codespaces.secrets-on-start %}

### Nomeando segredos

{% data reusables.codespaces.secrets-naming %} Por exemplo, um segredo criado no nível do repositório deve ter um nome exclusivo nesse repositório.

  {% data reusables.codespaces.secret-precedence %}

### Limites para segredos

Você pode armazenar até 100 segredos para {% data variables.product.prodname_github_codespaces %}.

Os segredos são limitados a 64 kB.

## Adicionar um segredo

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.codespaces-tab %}
1. À direita de "Segredos de codespaces", clique em **Novo segredo**.
  ![Botão "Novo segredo"](/assets/images/help/settings/codespaces-new-secret-button.png)
1. Em "Nome", digite um nome para seu segredo.
  ![Caixa de texto "Nome"](/assets/images/help/settings/codespaces-secret-name-field.png) {% data reusables.user-settings.codespaces-secret-value %} {% data reusables.user-settings.codespaces-secret-repository-access %}
1. Clique em **Adicionar segredo**.

## Editar um segredo

Você pode atualizar o valor de um segredo existente, bem como alterar quais repositórios podem acessar um segredo.

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.codespaces-tab %}
1. Em "Segredos de codespaces", à direita do segredo que você deseja editar, clique em **Atualizar**.
  ![Botão "Atualizar"](/assets/images/help/settings/codespaces-secret-update-button.png)
1. Em "Valor", clique em **Inserir um novo valor**.
  ![Link "Inserir um novo valor"](/assets/images/help/settings/codespaces-secret-update-value-text.png) {% data reusables.user-settings.codespaces-secret-value %} {% data reusables.user-settings.codespaces-secret-repository-access %}
1. Opcionalmente, para remover o acesso do segredo a um repositório, desmarque o repositório.
  ![Caixas de seleção para remover o acesso aos repositórios](/assets/images/help/settings/codespaces-secret-repository-checkboxes.png)
1. Clique em **Salvar alterações**.

## Excluir um segredo

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.codespaces-tab %}
1. Em "Segredos de codespaces", à direita do segredo que você deseja excluir, clique em **Excluir**.
  ![Botão "Excluir"](/assets/images/help/settings/codespaces-secret-delete-button.png)
1. Leia o aviso e clique em **OK**.
  ![Confirmação para excluir um segredo](/assets/images/help/settings/codespaces-secret-delete-warning.png)

## Usando segredos

Um segredo é exportado como uma variável de ambiente para a sessão de terminal do usuário.

  ![Exibir o valor de um segredo exportado no terminal](/assets/images/help/codespaces/exported-codespace-secret.png)

Você pode usar segredos em um codespace depois que o codespace for criado e estiver em execução. Por exemplo, um segredo pode ser usado:

* Ao iniciar um aplicativo do terminal integrado ou da sessão SSH.
* Dentro de um script de ciclo de vida do contêiner de desenvolvimento executado após a execução do codespace. Para obter mais informações sobre scripts de ciclo de vida do contêiner de desenvolvimento, confira a documentação sobre contêineres de desenvolvimento: [Especificação](https://containers.dev/implementors/json_reference/#lifecycle-scripts).

Os segredos do codespace não podem ser usados durante:

* O tempo de build do codespace (ou seja, em um Dockerfile ou ponto de entrada personalizado).
* Em um recurso de contêiner de desenvolvimento. Para obter mais informações, confira o atributo `features` na documentação sobre contêineres de desenvolvimento: [Especificação](https://containers.dev/implementors/json_reference/#general-properties).

## Leitura adicional

- "[Como gerenciar segredos criptografados do repositório e da organização para o {% data variables.product.prodname_github_codespaces %}](/codespaces/managing-codespaces-for-your-organization/managing-encrypted-secrets-for-your-repository-and-organization-for-github-codespaces)"
