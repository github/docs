---
title: Gerenciar segredos criptografados para codespaces
intro: 'Você pode armazenar informações confidenciais, como tokens, que você deseja acessar nos seus codespaces por meio de variáveis de ambiente.'
product: '{% data reusables.gated-features.codespaces %}'
versions:
  free-pro-team: '*'
topics:
  - espaços de código
---

{% note %}

**Observação:** Os segredos criptografados para {% data variables.product.prodname_codespaces %} estão atualmente na versão beta e sujeitos a alterações.

{% endnote %}


### Sobre os segredos criptografados para {% data variables.product.prodname_codespaces %}

Você pode adicionar segredos criptografados à sua conta de usuário que deseja usar nos seus codespaces. Por exemplo, você pode querer armazenar e acessar as seguintes informações confidenciais como segredos criptografados.

- Tokens de acesso pessoal para os serviços da nuvem
- Entidades de serviço
- Identificadores da assinatura

Você pode escolher quais repositórios devem ter acesso a cada segredo. Em seguida, você pode usar o segredo em qualquer código que criar para um repositório que tiver acesso ao segredo.

### Adicionar um segredo

{% note %}

**Observação:** Os tokens que começam com GITHUB_ são reservados

{% endnote %}

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.codespaces-tab %}
1. À direita dos "Segredos dos codespaces", clique em **Novo segredo**. ![Botão "Novo segredo"](/assets/images/help/settings/codespaces-new-secret-button.png)
1. Em "Nome", digite um nome para seu segredo. ![Caixa de texto "Nome"](/assets/images/help/settings/codespaces-secret-name-field.png)
{% data reusables.user_settings.codespaces-secret-value %}
{% data reusables.user_settings.codespaces-secret-repository-access %}
1. Clique em **Add secret** (Adicionar segredo).

### Editar um segredo

Você pode atualizar o valor de um segredo existente, bem como alterar quais repositórios podem acessar um segredo.

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.codespaces-tab %}
1. Em "Segredos do codespace", à direita do segredo que você deseja editar, clique em **Atualizar**. ![Botão "Atualizar"](/assets/images/help/settings/codespaces-secret-update-button.png)
1. Em "Valor", clique em **Inserir um novo valor**. ![Link "Inserir um novo valor"](/assets/images/help/settings/codespaces-secret-update-value-text.png)
{% data reusables.user_settings.codespaces-secret-value %}
{% data reusables.user_settings.codespaces-secret-repository-access %}
1. Opcionalmente, para remover o acesso do segredo a um repositório, desmarque o repositório. ![Caixas de seleção para remover acesso aos repositórios](/assets/images/help/settings/codespaces-secret-repository-checkboxes.png)
1. Clique em **Save changes** (Salvar alterações).

### Excluir um segredo

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.codespaces-tab %}
1. Em "Segredos dos codespaces", à direita do segredo que você deseja excluir, clique em **Excluir**. ![Botão "Excluir"](/assets/images/help/settings/codespaces-secret-delete-button.png)
1. Leia o alerta e clique em **OK**. ![Confirmação para excluir um segredo](/assets/images/help/settings/codespaces-secret-delete-warning.png)
