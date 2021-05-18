---
title: Personalizar os codespaces para a sua conta
intro: 'You can personalize {% data variables.product.prodname_codespaces %} by using a `dotfiles` repository on {% data variables.product.product_name %} or by using Settings Sync.'
permissions: 'Anyone can personalize {% data variables.product.prodname_codespaces %} for their user account.'
redirect_from:
  - /github/developing-online-with-github-codespaces/personalizing-github-codespaces-for-your-account
  - /github/developing-online-with-codespaces/personalizing-codespaces-for-your-account
versions:
  free-pro-team: '*'
type: how_to
topics:
  - Codespaces
  - Set up
  - Fundamentals
---

{% data reusables.codespaces.release-stage %}

### About personalizing {% data variables.product.prodname_codespaces %}

When using any development environment, customizing the settings and tools to your preferences and workflows is an important step. {% data variables.product.prodname_codespaces %} allows for two main ways of personalizing your codespaces.

- [Settings Sync](#settings-sync) - You can use and share {% data variables.product.prodname_vscode %} settings between {% data variables.product.prodname_codespaces %} and other instances of {% data variables.product.prodname_vscode %}.
- [Dotfiles](#dotfiles) – You can use a public `dotfiles` repository to specify scripts, shell preferences, and other configurations.

{% data variables.product.prodname_codespaces %} personalization applies to any codespace you create.

Os mantenedores do projeto também podem definir uma configuração-padrão que se aplica a todos os codespaces de um repositório, criados por qualquer pessoa. Para obter mais informações, consulte "[Configurar o {% data variables.product.prodname_codespaces %} para seu projeto](/github/developing-online-with-codespaces/configuring-codespaces-for-your-project)".

### Settings Sync

Settings Sync allows you to share configurations such as settings, keyboard shortcuts, snippets, extensions, and UI state across machines and instances of {% data variables.product.prodname_vscode %}.

Settings Sync is on by default. To configure any settings, in the bottom-left corner of the Activity Bar, select {% octicon "gear" aria-label="The gear icon" %} and click **Settings Sync is on**. From the dialog, you can choose to configure, show settings and data, or turn off Settings Sync.

![Setting Sync option in manage menu](/assets/images/help/codespaces/codespaces-manage-settings-sync.png)

For more information, see the [Settings Sync guide](https://code.visualstudio.com/docs/editor/settings-sync) in the {% data variables.product.prodname_vscode %} documentation.

### Dotfiles

Os Dotfiles são arquivos e pastas de sistemas de tipo Unix, que começam com `.` e controlam a configuração de aplicativos e shells no seu sistema. Você pode armazenar e gerenciar seus dotfiles em um repositório no {% data variables.product.prodname_dotcom %}. Para obter aconselhamento e tutoriais sobre o que incluir no repositório `dotfiles`, consulte [GitHub gerencia dotfiles](https://dotfiles.github.io/).

Se sua conta de usuário no {% data variables.product.prodname_dotcom %} possui um repositório público denominado `dotfiles`, o {% data variables.product.prodname_dotcom %} usa este repositório automaticamente para personalizar seu ambiente de codespace. Atualmente, não são compatíveis os repositórios privados `dotfiles`.

O seu repositório `dotfiles` pode incluir os alias e preferências do seu shell, quaisquer ferramentas que você deseja instalar ou qualquer outra personalização de codespace que desejar fazer.

Ao criar um novo codespace, o {% data variables.product.prodname_dotcom %} clona seus repositórios de `dotfiles` para o ambiente do codespace e procura por um dos seguintes arquivos para configurar o ambiente.

* _install.sh_
* _install_
* _bootstrap.sh_
* _bootstrap_
* _setup.sh_
* _setup_

Se nenhum desses arquivos for encontrado, quaisquer arquivos ou pastas nos `dotfiles` que comecem com `.` será vinculado simbolicamente ao diretório `~` ou `$HOME` do codespace.

Quaisquer alterações no repositório de `dotfiles` serão aplicadas apenas a cada novo codespace e não afetarão nenhum codespace existente.

{% note %}

**Observação:** Atualmente, o {% data variables.product.prodname_codespaces %} não é compatível com a personalização das configurações do _Usuário_ para o editor de {% data variables.product.prodname_vscode %} com o repositório `dotfiles`. É possível definir as configurações-padrão do _espaço de trabalho_ e _Remote [Codespaces]_ para um projeto específico no repositório do projeto. Para obter mais informações, consulte "[Configurar o {% data variables.product.prodname_codespaces %} para seu projeto](/github/developing-online-with-codespaces/configuring-codespaces-for-your-project#creating-a-custom-codespace-configuration)".

{% endnote %}

Você também pode definir as configurações para que a sua conta de usuário adicione segredos criptografados, habilitar a verificação de GPG e permitir que os seus codespaces acessem outros repositórios. Para obter mais informações, consulte "[Gerenciar segredos criptografados para {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/managing-encrypted-secrets-for-codespaces)", "[Gerenciar verificação de GPG para {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/managing-gpg-verification-for-codespaces)" e "[Gerenciar acesso e segurança para {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/managing-access-and-security-for-codespaces)".

### Leia mais

* "[Criar um repositório](/github/creating-cloning-and-archiving-repositories/creating-a-new-repository)"
