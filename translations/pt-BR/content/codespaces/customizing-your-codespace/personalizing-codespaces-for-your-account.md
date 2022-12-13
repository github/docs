---
title: Personalizar os codespaces para a sua conta
shortTitle: Personalize your codespaces
intro: Você pode personalizar os {% data variables.product.prodname_codespaces %} usando um repositório `dotfiles` no {% data variables.product.product_name %} ou a Sincronização de Configurações.
redirect_from:
- /github/developing-online-with-github-codespaces/personalizing-github-codespaces-for-your-account
- /github/developing-online-with-codespaces/personalizing-codespaces-for-your-account
- /codespaces/setting-up-your-codespace/personalizing-codespaces-for-your-account
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
- Codespaces
- Set up
- Fundamentals
product: '{% data reusables.gated-features.codespaces %}'
ms.openlocfilehash: 2c136318f3eff0a8caed8900520b8eb8a7772add
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 07/13/2022
ms.locfileid: "146681346"
---
## <a name="about-personalizing--data-variablesproductprodname_codespaces-"></a>Sobre a personalização de {% data variables.product.prodname_codespaces %}

Ao usar qualquer ambiente de desenvolvimento, a personalização das configurações e ferramentas para suas preferências e fluxos de trabalho é uma etapa importante. {% data variables.product.prodname_codespaces %} permite duas formas principais de personalizar seus codespaces.

- [Configurações de sincronização](#settings-sync) – você pode usar e compartilhar as configurações {% data variables.product.prodname_vscode %} entre {% data variables.product.prodname_codespaces %} e outras instâncias de {% data variables.product.prodname_vscode %}.
- [Dotfiles](#dotfiles) – você pode usar um `dotfiles` repositório para especificar scripts, preferências de shell e outras configurações.

A personalização de {% data variables.product.prodname_codespaces %} aplica-se a qualquer codespace que você criar.

Os mantenedores do projeto também podem definir uma configuração-padrão que se aplica a todos os codespaces de um repositório, criados por qualquer pessoa. Para obter mais informações, confira "[Como configurar o {% data variables.product.prodname_codespaces %} para seu projeto](/github/developing-online-with-codespaces/configuring-codespaces-for-your-project)".

## <a name="settings-sync"></a>Configurações de sincronização

A sincronização de configurações permite que você compartilhe configurações como configurações, atalhos de teclado, snippets, extensões e estado da interface de usuário entre as máquinas e instâncias de {% data variables.product.prodname_vscode %}.

Para habilitar a sincronização de configurações, no canto inferior esquerdo da barra de atividades, selecione {% octicon "gear" aria-label="The gear icon" %} e clique **Habilitar as configurações de sincronização…** . Na caixa de diálogo, selecione as configurações que você deseja sincronizar.

![Opção de configuração de sincronização no menu de gerenciamento](/assets/images/help/codespaces/codespaces-manage-settings-sync.png)

Para obter mais informações, confira o [guia Sincronização de Configurações](https://code.visualstudio.com/docs/editor/settings-sync) na documentação do {% data variables.product.prodname_vscode %}.

## <a name="dotfiles"></a>Dotfiles

Os Dotfiles são arquivos e pastas de sistemas de tipo Unix, que começam com `.` e controlam a configuração de aplicativos e shells no seu sistema. Você pode armazenar e gerenciar seus dotfiles em um repositório no {% data variables.product.prodname_dotcom %}. Para orientação e tutoriais sobre o que incluir no repositório dotfile, confira [GitHub faz dotfiles](https://dotfiles.github.io/).

O seu repositório dotfiles pode incluir os alias e preferências do seu shell, quaisquer ferramentas que você deseja instalar ou qualquer outra personalização de codespace que desejar fazer.

Você pode configurar {% data variables.product.prodname_codespaces %} para usar Dotfiles de qualquer repositório que você tiver, selecionando esse repositório nas suas [Configurações pessoais de {% data variables.product.prodname_codespaces %}](https://github.com/settings/codespaces).

Ao criar um novo codespace, o {% data variables.product.prodname_dotcom %} clona seu repositórios selecionado para o ambiente do codespace e procura um dos seguintes arquivos para configurar o ambiente.

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

**Observação:** Atualmente, o {% data variables.product.prodname_codespaces %} não é compatível com a personalização das configurações do _Usuário_ para o editor de {% data variables.product.prodname_vscode %} com o repositório `dotfiles`. Você pode definir as configurações padrão do _Workspace_ e _Remoto [Codespaces]_ para um projeto específico no repositório do projeto. Para obter mais informações, confira "[Introdução aos contêineres de desenvolvimento](/github/developing-online-with-codespaces/configuring-codespaces-for-your-project#creating-a-custom-dev-container-configuration)".

{% endnote %}

### <a name="enabling-your-dotfiles-repository-for--data-variablesproductprodname_codespaces-"></a>Habilitando o repositório de dotfiles para {% data variables.product.prodname_codespaces %}

Você pode usar o repositório de Dotfiles selecionado para personalizar seu ambiente de {% data variables.product.prodname_codespaces %}. Depois de escolher o seu repositório de dotfiles, você poderá adicionar seus scripts, preferências e configurações. Em seguida, você deverá habilitar os seus dotfiles na sua página pessoal de configurações de {% data variables.product.prodname_codespaces %}.

{% warning %}

**Aviso:** Dotfiles têm a capacidade de executar scripts arbitrários, que podem conter codespace inesperado ou malicioso. Antes de instalar o repositório de um dotfiles, recomendamos verificar os scripts para garantir que eles não executam nenhuma ação inesperada.

{% endwarning %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.codespaces-tab %}
1. Em "Dotfiles", selecione **Instalar dotfiles automaticamente** para que {% data variables.product.prodname_codespaces %} instale automaticamente seus dotfiles em cada novo codespace que você criar.
   ![Como instalar dotfiles](/assets/images/help/codespaces/install-custom-dotfiles.png)
2. Escolha o repositório no qual você deseja instalar dotfiles.
   ![Como selecionar um repositório de dotfiles](/assets/images/help/codespaces/select-dotfiles-repo.png)

Você pode adicionar mais script, preferências e arquivos de configuração ao repositório de dotfiles ou editar arquivos existentes sempre que quiser. As alterações nas configurações só serão selecionadas por novos codespaces.

Se o seu codespace não conseguir selecionar as configurações de dotfiles, confira "[Solucionar problemas de arquivos de dados de {% data variables.product.prodname_codespaces %}](/codespaces/troubleshooting/troubleshooting-dotfiles-for-codespaces)".

## <a name="other-available-settings"></a>Outras configurações disponíveis

Você também pode personalizar {% data variables.product.prodname_codespaces %} usando configurações adicionais de [{% data variables.product.prodname_codespaces %}](https://github.com/settings/codespaces):

- Para definir sua região padrão, confira "[Como configurar sua região padrão do {% data variables.product.prodname_codespaces %}](/codespaces/managing-your-codespaces/setting-your-default-region-for-codespaces)".
- Para definir seu editor, confira "[Como configurar o editor padrão do {% data variables.product.prodname_codespaces %}](/codespaces/managing-your-codespaces/setting-your-default-editor-for-codespaces)".
- Para adicionar segredos criptografados, confira "[Como gerenciar segredos criptografados do {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/managing-encrypted-secrets-for-codespaces)".
- Para habilitar a verificação de GPG, confira "[Como gerenciar a verificação de GPG nos {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/managing-gpg-verification-for-codespaces)."
- Para permitir que seus codespaces acessem outros repositórios, confira "[Gerenciar o acesso e a segurança para {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/managing-access-and-security-for-codespaces)."

## <a name="further-reading"></a>Leitura adicional

* "[Como criar um repositório](/github/creating-cloning-and-archiving-repositories/creating-a-new-repository)"
