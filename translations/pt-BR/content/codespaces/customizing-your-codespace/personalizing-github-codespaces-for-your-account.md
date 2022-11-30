---
title: Como personalizar o GitHub Codespaces para sua conta
shortTitle: Personalize your codespaces
intro: 'Você pode personalizar o {% data variables.product.prodname_github_codespaces %} usando um repositório `dotfiles` em {% data variables.product.product_name %} ou usando Sincronização de Configurações.'
redirect_from:
  - /github/developing-online-with-github-codespaces/personalizing-github-codespaces-for-your-account
  - /github/developing-online-with-codespaces/personalizing-codespaces-for-your-account
  - /codespaces/setting-up-your-codespace/personalizing-codespaces-for-your-account
  - /codespaces/customizing-your-codespace/personalizing-codespaces-for-your-account
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Set up
  - Fundamentals
ms.openlocfilehash: 80b6cd1ee982150c1b3c0a66e1247f6098a97bcb
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159405'
---
## Sobre a personalização de {% data variables.product.prodname_codespaces %}

Ao usar qualquer ambiente de desenvolvimento, a personalização das configurações e ferramentas para suas preferências e fluxos de trabalho é uma etapa importante. O {% data variables.product.prodname_github_codespaces %} oferece duas maneiras de personalizar codespaces.

- [Sincronização de configurações](#settings-sync): é possível sincronizar suas configurações do {% data variables.product.prodname_vscode %} entre o aplicativo da área de trabalho e o cliente Web do {% data variables.product.prodname_vscode_shortname %}.
- [Dotfiles](#dotfiles) – você pode usar um `dotfiles` repositório para especificar scripts, preferências de shell e outras configurações.

A personalização do {% data variables.product.prodname_github_codespaces %} se aplica a qualquer codespace criado.

Os mantenedores do projeto também podem definir uma configuração-padrão que se aplica a todos os codespaces de um repositório, criados por qualquer pessoa. Para obter mais informações, confira "[Introdução aos contêineres de desenvolvimento](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)".

## Configurações de sincronização

A sincronização de configurações permite sincronizar configurações, como definições, atalhos de teclado, snippets, extensões e estados da IU em computadores e instâncias do {% data variables.product.prodname_vscode_shortname %}.

Para habilitar a sincronização de configurações, no canto inferior esquerdo da barra de atividades do {% data variables.product.prodname_vscode %}, selecione {% octicon "gear" aria-label="The gear icon" %} e clique em **Ativar as configurações de sincronização…** . Na caixa de diálogo, selecione as configurações que você deseja sincronizar.

![Opção de configuração de sincronização no menu de gerenciamento](/assets/images/help/codespaces/codespaces-manage-settings-sync.png)

Para saber mais, confira o [guia de sincronização de configurações](https://code.visualstudio.com/docs/editor/settings-sync) na documentação do {% data variables.product.prodname_vscode_shortname %}.

## Dotfiles

Os Dotfiles são arquivos e pastas de sistemas de tipo Unix, que começam com `.` e controlam a configuração de aplicativos e shells no seu sistema. Você pode armazenar e gerenciar seus dotfiles em um repositório no {% data variables.product.prodname_dotcom %}. Para orientação e tutoriais sobre o que incluir no repositório dotfile, confira [GitHub faz dotfiles](https://dotfiles.github.io/).

O seu repositório dotfiles pode incluir os alias e preferências do seu shell, quaisquer ferramentas que você deseja instalar ou qualquer outra personalização de codespace que desejar fazer.

É possível configurar o {% data variables.product.prodname_github_codespaces %} para usar dotfiles de qualquer repositório que você tenha, selecionando-o nas suas [Configurações pessoais do {% data variables.product.prodname_github_codespaces %}](https://github.com/settings/codespaces).

Ao criar um novo codespace, o {% data variables.product.prodname_dotcom %} clona seu repositório dotfile selecionado para o ambiente do codespace e procura um dos seguintes arquivos para configurar o ambiente.

* _install.sh_
* _install_
* _bootstrap.sh_
* _bootstrap_
* _script/bootstrap_
* _setup.sh_
* _setup_
* _script/setup_

Se nenhum desses arquivos for encontrado, todos os arquivos ou pastas no repositório de dotfiles selecionados que começam com `.` têm um link simbólico para o `~` do codespace ou `$HOME`.

Quaisquer alterações nos seus dotfiles selecionados serão aplicadas apenas a cada novo codespace e não afetarão nenhum codespace existente.

{% note %}

**Observação:** atualmente, o {% data variables.product.prodname_codespaces %} não é compatível com a personalização das configurações com escopo do usuário para o {% data variables.product.prodname_vscode_shortname %} com o repositório `dotfiles`. Você pode definir as configurações padrão do Workspace e Remoto [Codespaces] para um projeto específico no repositório do projeto. Para obter mais informações, confira "[Introdução aos contêineres de desenvolvimento](/github/developing-online-with-codespaces/configuring-codespaces-for-your-project#creating-a-custom-dev-container-configuration)".

{% endnote %}

### Habilitando o repositório de dotfiles para {% data variables.product.prodname_codespaces %}

É possível usar o repositório de dotfiles selecionado para personalizar o ambiente do {% data variables.product.prodname_github_codespaces %}. Depois de escolher o seu repositório de dotfiles, você poderá adicionar seus scripts, preferências e configurações. Em seguida, você deve habilitar os dotfiles na sua página pessoal de configurações do {% data variables.product.prodname_github_codespaces %}.

{% warning %}

**Aviso:** Dotfiles têm a capacidade de executar scripts arbitrários, que podem conter codespace inesperado ou malicioso. Antes de instalar o repositório de um dotfiles, recomendamos verificar os scripts para garantir que eles não executam nenhuma ação inesperada.

{% endwarning %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.codespaces-tab %}
1. Em "Dotfiles", selecione **Instalar dotfiles automaticamente** para que o {% data variables.product.prodname_github_codespaces %} instale automaticamente seus dotfiles em cada novo codespace que for criado.
   ![Como instalar dotfiles](/assets/images/help/codespaces/install-custom-dotfiles.png)
2. Escolha o repositório no qual você deseja instalar dotfiles.
   ![Como selecionar um repositório de dotfiles](/assets/images/help/codespaces/select-dotfiles-repo.png)

Você pode adicionar mais script, preferências e arquivos de configuração ao repositório de dotfiles ou editar arquivos existentes sempre que quiser. As alterações nas configurações só serão selecionadas por novos codespaces.

Se o codespace não conseguir selecionar as definições de configuração dos dotfiles, confira "[Solucionar problemas de dotfiles no {% data variables.product.prodname_github_codespaces %}](/codespaces/troubleshooting/troubleshooting-dotfiles-for-codespaces)".

## Outras configurações disponíveis

Também é possível personalizar o {% data variables.product.prodname_github_codespaces %} usando opções adicionais em [suas configurações pessoais](https://github.com/settings/codespaces):

- Para habilitar a verificação de GPG, confira "[Como gerenciar a verificação de GPG do {% data variables.product.prodname_github_codespaces %}](/codespaces/managing-your-codespaces/managing-gpg-verification-for-github-codespaces)".
- Para definir seu editor, confira "[Como configurar o editor padrão do {% data variables.product.prodname_github_codespaces %}](/codespaces/customizing-your-codespace/setting-your-default-editor-for-github-codespaces)".
- Para definir o tempo máximo de inutilização de um codespace antes de sua interrupção automática, confira "[Configurar o período de tempo limite para o {% data variables.product.prodname_github_codespaces %}](/codespaces/customizing-your-codespace/setting-your-timeout-period-for-github-codespaces)".
- Para definir o período pelo qual seus codespaces não utilizados são retidos, confira "[Como configurar a exclusão automática dos seus codespaces](/codespaces/customizing-your-codespace/configuring-automatic-deletion-of-your-codespaces)".
- Para definir sua região padrão, confira "[Como configurar sua região padrão do {% data variables.product.prodname_github_codespaces %}](/codespaces/customizing-your-codespace/setting-your-default-region-for-github-codespaces)".

## Leitura adicional

* "[Como criar um repositório](/github/creating-cloning-and-archiving-repositories/creating-a-new-repository)"
* "[Mais detalhes sobre o {% data variables.product.prodname_github_codespaces %}](/codespaces/getting-started/deep-dive#personalizing-your-codespace-with-extensions-or-plugins)"
