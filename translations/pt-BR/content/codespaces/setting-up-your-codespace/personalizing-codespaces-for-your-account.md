---
title: Personalizar os codespaces para a sua conta
intro: 'Você pode personalizar {% data variables.product.prodname_codespaces %} usando um repositório `dotfiles` em {% data variables.product.product_name %} ou usando Configurações de Sincronização.'
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

### Sobre a personalização de {% data variables.product.prodname_codespaces %}

Ao usar qualquer ambiente de desenvolvimento, a personalização das configurações e ferramentas para suas preferências e fluxos de trabalho é uma etapa importante. {% data variables.product.prodname_codespaces %} permite duas formas principais de personalizar seus codespaces.

- [Configurações de sincronização](#settings-sync) - Você pode usar e compartilhar as configurações {% data variables.product.prodname_vscode %} entre {% data variables.product.prodname_codespaces %} e outras instâncias de {% data variables.product.prodname_vscode %}.
- [Dotfiles](#dotfiles) - Você pode usar um repositório `dotfiles` público para especificar scripts, preferências do shell e outras configurações.

A personalização de {% data variables.product.prodname_codespaces %} aplica-se a qualquer codespace que você criar.

Os mantenedores do projeto também podem definir uma configuração-padrão que se aplica a todos os codespaces de um repositório, criados por qualquer pessoa. Para obter mais informações, consulte "[Configurar o {% data variables.product.prodname_codespaces %} para seu projeto](/github/developing-online-with-codespaces/configuring-codespaces-for-your-project)".

### Configurações de sincronização

A sincronização de configurações permite que você compartilhe configurações como configurações, atalhos de teclado, snippets, extensões e estado da interface de usuário entre as máquinas e instâncias de {% data variables.product.prodname_vscode %}.

Sincronização de configurações encontra-se ativada por padrão. Para definir qualquer configuração, no canto inferior esquerdo da barra de atividades, selecione {% octicon "gear" aria-label="The gear icon" %} e clique em **As configurações de sincronização estão ativadas**. Na caixa de diálogo, você pode optar por configurar, mostrar configurações e dados ou desabilitar a sincronização de configurações.

![Opção de configuração de sincronização no menu de gerenciamento](/assets/images/help/codespaces/codespaces-manage-settings-sync.png)

Para obter mais informações, consulte o [Guia de sincronização de configurações](https://code.visualstudio.com/docs/editor/settings-sync) na documentação de {% data variables.product.prodname_vscode %}.

### Dotfiles

Os Dotfiles são arquivos e pastas de sistemas de tipo Unix, que começam com `.` e controlam a configuração de aplicativos e shells no seu sistema. Você pode armazenar e gerenciar seus dotfiles em um repositório no {% data variables.product.prodname_dotcom %}. Para obter aconselhamento e tutoriais sobre o que incluir no repositório `dotfiles`, consulte [GitHub gerencia dotfiles](https://dotfiles.github.io/).

Se sua conta de usuário no {% data variables.product.prodname_dotcom %} possui um repositório público denominado `dotfiles`, o {% data variables.product.prodname_dotcom %} usa este repositório automaticamente para personalizar seu ambiente de codespace. Atualmente, não são compatíveis os repositórios privados `dotfiles`.

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

Você também pode definir as configurações para que a sua conta de usuário adicione segredos criptografados, habilitar a verificação de GPG e permitir que os seus codespaces acessem outros repositórios. Para obter mais informações, consulte "[Gerenciar segredos criptografados para {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/managing-encrypted-secrets-for-codespaces)", "[Gerenciar verificação de GPG para {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/managing-gpg-verification-for-codespaces)" e "[Gerenciar acesso e segurança para {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/managing-access-and-security-for-codespaces)".

### Leia mais

* "[Criar um repositório](/github/creating-cloning-and-archiving-repositories/creating-a-new-repository)"
