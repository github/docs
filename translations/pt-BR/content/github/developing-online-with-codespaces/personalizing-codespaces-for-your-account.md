---
title: Personalizar os codespaces para a sua conta
intro: 'O {% data variables.product.prodname_codespaces %} usa o repositório `dotfiles` no {% data variables.product.product_name %} para personalizar cada novo codespace que você criar.'
product: '{% data reusables.gated-features.codespaces %}'
permissions: 'Qualquer pessoa pode criar um repositório `dotfiles` para personalizar o {% data variables.product.prodname_codespaces %} para sua conta de usuário.'
redirect_from:
  - /github/developing-online-with-github-codespaces/personalizing-github-codespaces-for-your-account
versions:
  free-pro-team: '*'
---

{% data reusables.codespaces.release-stage %}

Os Dotfiles são arquivos e pastas de sistemas de tipo Unix, que começam com `.` e controlam a configuração de aplicativos e shells no seu sistema. Você pode armazenar e gerenciar seus dotfiles em um repositório no {% data variables.product.prodname_dotcom %}. Para obter aconselhamento e tutoriais sobre o que incluir no repositório `dotfiles`, consulte [GitHub gerencia dotfiles](https://dotfiles.github.io/).

Se sua conta de usuário no {% data variables.product.prodname_dotcom %} possui um repositório público denominado `dotfiles`, o {% data variables.product.prodname_dotcom %} usa este repositório automaticamente para personalizar seu ambiente de codespace. Atualmente, não são compatíveis os repositórios privados `dotfiles`.

O seu repositório `dotfiles` pode incluir os alias e preferências do seu shell, quaisquer ferramentas que você deseja instalar ou qualquer outra personalização de codespace que desejar fazer.

A personalização do código usando seu repositório `dotfiles` aplica-se a qualquer codespace que você criar. Os mantenedores do projeto também podem definir uma configuração-padrão que se aplica a todos os codespaces de um repositório, criados por qualquer pessoa. {% data reusables.codespaces.codespace-config-order %} Para obter mais informações, consulte "[Configurar o {% data variables.product.prodname_codespaces %} para o seu projeto](/github/developing-online-with-codespaces/configuring-codespaces-for-your-project)".

Ao criar um novo codespace, o {% data variables.product.prodname_dotcom %} clona seus repositórios de `dotfiles` para o ambiente do codespace e procura por um dos seguintes arquivos para configurar o ambiente.

* _install.sh_
* _install_
* _bootstrap.sh_
* _bootstrap_
* _setup.sh_
* _setup_

Se nenhum desses arquivos for encontrado, quaisquer arquivos ou pastas nos `dotfiles` que comecem com `.` será vinculado simbolicamente ao diretório `~` ou `$HOME` do codespace.

Quaisquer alterações no repositório de `dotfiles` serão aplicadas apenas a cada novo codespace e não afetarão nenhum codespace existente.

Para obter mais informações, consulte [Personalizar](https://docs.microsoft.com/en-us/visualstudio/online/reference/personalizing) na documentação do {% data variables.product.prodname_vscode %}.

{% note %}

**Observação:** Atualmente, o {% data variables.product.prodname_codespaces %} não é compatível com a personalização das configurações do _Usuário_ para o editor de {% data variables.product.prodname_vscode %} com o repositório `dotfiles`. É possível definir as configurações-padrão do _espaço de trabalho_ e _Remote [Codespaces]_ para um projeto específico no repositório do projeto. Para obter mais informações, consulte "[Configurar o {% data variables.product.prodname_codespaces %} para seu projeto](/github/developing-online-with-codespaces/configuring-codespaces-for-your-project#creating-a-custom-codespace-configuration)".

{% endnote %}


### Leia mais

* "[Criar um repositório](/github/creating-cloning-and-archiving-repositories/creating-a-new-repository)"
