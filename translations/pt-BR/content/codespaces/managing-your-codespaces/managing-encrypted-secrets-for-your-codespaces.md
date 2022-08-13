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
shortTitle: Segredos criptografados
---

 


## Sobre segredos criptografados para {% data variables.product.prodname_github_codespaces %}

Você pode adicionar segredos criptografados à sua conta pessoal que deseja usar nos seus codespaces. Por exemplo, você pode querer armazenar e acessar as seguintes informações confidenciais como segredos criptografados.

- Tokens de acesso pessoal para os serviços da nuvem
- Entidades de serviço
- Identificadores da assinatura
- [Credenciais para um registro de imagens privado](/codespaces/codespaces-reference/allowing-your-codespace-to-access-a-private-image-registry)

Você pode escolher quais repositórios devem ter acesso a cada segredo. Em seguida, você pode usar o segredo em qualquer código que criar para um repositório que tiver acesso ao segredo.

{% data reusables.codespaces.secrets-on-start %}

### Nomeando segredos

{% data reusables.codespaces.secrets-naming %} Por exemplo, um segredo criado no nível do repositório deve ter um nome exclusivo nesse repositório.

  {% data reusables.codespaces.secret-precedence %}

### Limites para segredos

Você pode armazenar até 100 segredos para {% data variables.product.prodname_github_codespaces %}.

Os segredos são limitados a 64 kB.

## Adicionar um segredo

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.codespaces-tab %}
1. À direita dos "Segredos dos codespaces", clique em **Novo segredo**. ![Botão "Novo segredo"](/assets/images/help/settings/codespaces-new-secret-button.png)
1. Em "Nome", digite um nome para seu segredo. ![Caixa de texto "Nome"](/assets/images/help/settings/codespaces-secret-name-field.png)
{% data reusables.user-settings.codespaces-secret-value %}
{% data reusables.user-settings.codespaces-secret-repository-access %}
1. Clique em **Add secret** (Adicionar segredo).

## Editar um segredo

Você pode atualizar o valor de um segredo existente, bem como alterar quais repositórios podem acessar um segredo.

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.codespaces-tab %}
1. Em "Segredos do codespace", à direita do segredo que você deseja editar, clique em **Atualizar**. ![Botão "Atualizar"](/assets/images/help/settings/codespaces-secret-update-button.png)
1. Em "Valor", clique em **Inserir um novo valor**. ![Link "Inserir um novo valor"](/assets/images/help/settings/codespaces-secret-update-value-text.png)
{% data reusables.user-settings.codespaces-secret-value %}
{% data reusables.user-settings.codespaces-secret-repository-access %}
1. Opcionalmente, para remover o acesso do segredo a um repositório, desmarque o repositório. ![Caixas de seleção para remover acesso aos repositórios](/assets/images/help/settings/codespaces-secret-repository-checkboxes.png)
1. Clique em **Save changes** (Salvar alterações).

## Excluir um segredo

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.codespaces-tab %}
1. Em "Segredos dos codespaces", à direita do segredo que você deseja excluir, clique em **Excluir**. ![Botão "Excluir"](/assets/images/help/settings/codespaces-secret-delete-button.png)
1. Leia o alerta e clique em **OK**. ![Confirmação para excluir um segredo](/assets/images/help/settings/codespaces-secret-delete-warning.png)

## Usar segredos

Um segredo é exportado como uma variável de ambiente na sessão terminal do usuário.

  ![Exibindo o valor de um segredo exportado no terminal](/assets/images/help/codespaces/exported-codespace-secret.png)

Você pode usar segredos em um codespace após o codespace ser construído e estiver sendo executado. Por exemplo, um segredo pode ser usado:

* Ao lançar um aplicativo a partir do terminal integrado ou da sessão ssh.
* Dentro de um script de ciclo de vida do container dev que é executado depois que o codespace está sendo executado. Para obter mais informações sobre scripts de ciclo de vida do contêiner dev consulte a documentação em containers.dev: [Especificação](https://containers.dev/implementors/json_reference/#lifecycle-scripts).

Os codespaces não podem ser usados durante:

* Data de compilação do código (ou seja, dentro de um arquivo Docker ou ponto de entrada personalizado).
* Dentro de um recurso de desenvolvimento de contêiner. Para obter mais informações, consulte os atributos `funcionalidades` na documentação em containers.dev: [Especificação](https://containers.dev/implementors/json_reference/#general-properties).

## Leia mais

- "[Gerenciando segredos criptografados para o seu repositório e organização para {% data variables.product.prodname_github_codespaces %}](/codespaces/managing-codespaces-for-your-organization/managing-encrypted-secrets-for-your-repository-and-organization-for-github-codespaces)"
