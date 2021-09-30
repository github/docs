---
title: Personalizar os codespaces para a sua conta
intro: 'Você pode personalizar {% data variables.product.prodname_codespaces %} usando um repositório `dotfiles` em {% data variables.product.product_name %} ou usando Configurações de Sincronização.'
redirect_from:
  - /github/developing-online-with-github-codespaces/personalizing-github-codespaces-for-your-account
  - /github/developing-online-with-codespaces/personalizing-codespaces-for-your-account
  - /codespaces/setting-up-your-codespace/personalizing-codespaces-for-your-account
versions:
  fpt: '*'
type: how_to
topics:
  - Codespaces
  - Set up
  - Fundamentals
product: '{% data reusables.gated-features.codespaces %}'
shortTitle: Personalize sua conta
---


## Sobre a personalização de {% data variables.product.prodname_codespaces %}

Ao usar qualquer ambiente de desenvolvimento, a personalização das configurações e ferramentas para suas preferências e fluxos de trabalho é uma etapa importante. {% data variables.product.prodname_codespaces %} permite duas formas principais de personalizar seus codespaces.

- [Configurações de sincronização](#settings-sync) - Você pode usar e compartilhar as configurações {% data variables.product.prodname_vscode %} entre {% data variables.product.prodname_codespaces %} e outras instâncias de {% data variables.product.prodname_vscode %}.
- [Dotfiles](#dotfiles) - Você pode usar um repositório `dotfiles` público para especificar scripts, preferências do shell e outras configurações.

A personalização de {% data variables.product.prodname_codespaces %} aplica-se a qualquer codespace que você criar.

Os mantenedores do projeto também podem definir uma configuração-padrão que se aplica a todos os codespaces de um repositório, criados por qualquer pessoa. Para obter mais informações, consulte "[Configurar o {% data variables.product.prodname_codespaces %} para seu projeto](/github/developing-online-with-codespaces/configuring-codespaces-for-your-project)".

## Configurações de sincronização

A sincronização de configurações permite que você compartilhe configurações como configurações, atalhos de teclado, snippets, extensões e estado da interface de usuário entre as máquinas e instâncias de {% data variables.product.prodname_vscode %}.

To enable Settings Sync, in the bottom-left corner of the Activity Bar, select {% octicon "gear" aria-label="The gear icon" %} and click **Turn on Settings Sync…**. From the dialog, select which settings you'd like to sync.

![Opção de configuração de sincronização no menu de gerenciamento](/assets/images/help/codespaces/codespaces-manage-settings-sync.png)

Para obter mais informações, consulte o [Guia de sincronização de configurações](https://code.visualstudio.com/docs/editor/settings-sync) na documentação de {% data variables.product.prodname_vscode %}.

## Dotfiles

Os Dotfiles são arquivos e pastas de sistemas de tipo Unix, que começam com `.` e controlam a configuração de aplicativos e shells no seu sistema. Você pode armazenar e gerenciar seus dotfiles em um repositório no {% data variables.product.prodname_dotcom %}. Para obter aconselhamento e tutoriais sobre o que incluir no repositório `dotfiles`, consulte [GitHub gerencia dotfiles](https://dotfiles.github.io/).

Se sua conta de usuário em {% data variables.product.prodname_dotcom %} possui um repositório público denominado `dotfiles`, {% data variables.product.prodname_dotcom %} poderá usar este repositório automaticamente para personalizar o ambiente do seu codespace, uma vez habilitado nas suas [configurações de codespaces pessoais](https://github.com/settings/codespaces). Atualmente, não são compatíveis os repositórios privados `dotfiles`.

O seu repositório `dotfiles` pode incluir os alias e preferências do seu shell, quaisquer ferramentas que você deseja instalar ou qualquer outra personalização de codespace que desejar fazer.

Ao criar um novo codespace, o {% data variables.product.prodname_dotcom %} clona seus repositórios de `dotfiles` para o ambiente do codespace e procura por um dos seguintes arquivos para configurar o ambiente.

* _install.sh_
* _install_
* _bootstrap.sh_
* _bootstrap_
* _script/bootstrap_
* _setup.sh_
* _setup_
* _script/setup_

Se nenhum desses arquivos for encontrado, quaisquer arquivos ou pastas nos `dotfiles` que comecem com `.` será vinculado simbolicamente ao diretório `~` ou `$HOME` do codespace.

Quaisquer alterações no repositório de `dotfiles` serão aplicadas apenas a cada novo codespace e não afetarão nenhum codespace existente.

{% note %}

**Observação:** Atualmente, o {% data variables.product.prodname_codespaces %} não é compatível com a personalização das configurações do _Usuário_ para o editor de {% data variables.product.prodname_vscode %} com o repositório `dotfiles`. É possível definir as configurações-padrão do _espaço de trabalho_ e _Remote [Codespaces]_ para um projeto específico no repositório do projeto. Para obter mais informações, consulte "[Configurar o {% data variables.product.prodname_codespaces %} para seu projeto](/github/developing-online-with-codespaces/configuring-codespaces-for-your-project#creating-a-custom-codespace-configuration)".

{% endnote %}

### Enabling your dotfiles repository for {% data variables.product.prodname_codespaces %}

You can use your public `dotfiles` repository to personalize your {% data variables.product.prodname_codespaces %} environment. Once you set up that repository, you can add your scripts, preferences, and configurations to it. You then need to enable your dotfiles from your personal {% data variables.product.prodname_codespaces %} settings page.

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.codespaces-tab %}
1. Under "Dotfiles", select "Automatically install dotfiles" so that {% data variables.product.prodname_codespaces %} automatically installs your dotfiles into every new codespace you create. ![Installing dotfiles](/assets/images/help/codespaces/install-dotfiles.png)

   {% note %}

   **Note:** This option is only available if you've created a public `dotfiles` repository for your user account.

   {% endnote %}

You can add further script, preferences, configuration files to your dotfiles repository or edit existing files whenever you want. Changes to settings will only be picked up by new codespaces.

## Other available settings

You can also personalize {% data variables.product.prodname_codespaces %} using additional [Codespaces settings](https://github.com/settings/codespaces):

- To set your default region, see "[Setting your default region for {% data variables.product.prodname_codespaces %}](/codespaces/managing-your-codespaces/setting-your-default-region-for-codespaces)."
- To set your editor, see "[Setting your default editor for {% data variables.product.prodname_codespaces %}](/codespaces/managing-your-codespaces/setting-your-default-editor-for-codespaces)."
- To add encrypted secrets, see "[Managing encrypted secrets for {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/managing-encrypted-secrets-for-codespaces)."
- To enable GPG verification, see "[Managing GPG verification for {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/managing-gpg-verification-for-codespaces)."
- To allow your codespaces to access other repositories, see "[Managing access and security for {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/managing-access-and-security-for-codespaces)."

## Leia mais

* "[Criar um repositório](/github/creating-cloning-and-archiving-repositories/creating-a-new-repository)"
