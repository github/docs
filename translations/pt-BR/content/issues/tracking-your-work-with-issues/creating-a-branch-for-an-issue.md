---
title: Criando um branch para trabalhar em um problema
intro: Você pode criar um branch para trabalhar em um problema diretamente da página de problemas e começar imediatamente.
versions:
  fpt: '*'
  ghes: '>=3.5'
  ghae: issue-6234
  ghec: '*'
allowTitleToDifferFromFilename: true
topics:
  - Issues
shortTitle: Criar um branch para um problema
---

{% note %}

**Observação:** A capacidade de criar um branch para um problema está atualmente em versão beta pública e sujeita a alterações.

{% endnote %}

## Sobre branches conectados a um problema
Os branches ligados a um problema são mostrados na seção "Desenvolvimento" na barra lateral de um problema. Ao criar um pull request para um desses branches, ele será automaticamente vinculado ao problema. A conexão com esse branch é removida e apenas o pull request é mostrado na seção "Desenvolvimento". Para obter mais informações, consulte "[Vincular um pull request a um problema](/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue)."

## Criando um branch para um problema

Qualquer pessoa com permissão de gravação em um repositório pode criar um branch para um problema. Você pode vincular vários branches a um problema.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issues %}
3. Na lista de problemas, clique no problema para o qual você gostaria de criar um branch.
4. Na barra lateral direita em "Desenvolvimento", clique em **Criar um branch**. Se o problema já tiver um branch ou um pull request vinculado, clique em {% octicon "gear" aria-label="The Gear icon" %} e, na parte inferior do menu suspenso, clique em **Criar um branch**. ![Captura de tela que mostra como criar uma opção de branch destacada na barra lateral](/assets/images/help/issues/create-a-branch.png)
5. Por padrão, o novo branch é criado no repositório atual a partir do branch padrão. Edite o nome e os detalhes do branch conforme exigido na caixa de diálogo "Criar um branch para esse problema". ![Captura de tela que mostra as opções de diálogo para criar um branch](/assets/images/help/issues/create-a-branch-options.png)
6. Escolha se deseja trabalhar localmente nao branch ou abri-lo no GitHub Desktop.
7. Quando estiver pronto para criar o branch, clique em **Criar branch**.
