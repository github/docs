---
title: Personalizar o GitHub Codespaces para sua conta
shortTitle: Personalize seus codespaces
intro: 'Você pode personalizar {% data variables.product.prodname_github_codespaces %} usando um repositório `dotfiles` em {% data variables.product.product_name %} ou usando Configurações de Sincronização.'
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
product: '{% data reusables.gated-features.codespaces %}'
---


## Sobre a personalização de {% data variables.product.prodname_codespaces %}

Ao usar qualquer ambiente de desenvolvimento, a personalização das configurações e ferramentas para suas preferências e fluxos de trabalho é uma etapa importante. {% data variables.product.prodname_codespaces %} permite duas formas principais de personalizar seus codespaces.

- [Configurações de sincronização](#settings-sync) - Você pode usar e compartilhar as configurações {% data variables.product.prodname_vscode %} entre {% data variables.product.prodname_codespaces %} e outras instâncias de {% data variables.product.prodname_vscode %}.
- [Dotfiles](#dotfiles) - Você pode usar um repositório `dotfiles` para especificar scripts, preferências do shell e outras configurações.

A personalização de {% data variables.product.prodname_codespaces %} aplica-se a qualquer codespace que você criar.

Os mantenedores do projeto também podem definir uma configuração-padrão que se aplica a todos os codespaces de um repositório, criados por qualquer pessoa. Para obter mais informações, consulte "[Configurar o {% data variables.product.prodname_codespaces %} para seu projeto](/github/developing-online-with-codespaces/configuring-codespaces-for-your-project)".

## Configurações de sincronização

A sincronização de configurações permite que você compartilhe configurações como configurações, atalhos de teclado, snippets, extensões e estado da interface de usuário entre as máquinas e instâncias de {% data variables.product.prodname_vscode %}.

Para habilitar a sincronização de configurações, no canto inferior esquerdo da barra de atividades, selecione {% octicon "gear" aria-label="The gear icon" %} e clique **Habilitar as configurações de sincronização…**. Na caixa de diálogo, selecione as configurações que você deseja sincronizar.

![Opção de configuração de sincronização no menu de gerenciamento](/assets/images/help/codespaces/codespaces-manage-settings-sync.png)

Para obter mais informações, consulte o [Guia de sincronização de configurações](https://code.visualstudio.com/docs/editor/settings-sync) na documentação de {% data variables.product.prodname_vscode %}.

## Dotfiles

Os Dotfiles são arquivos e pastas de sistemas de tipo Unix, que começam com `.` e controlam a configuração de aplicativos e shells no seu sistema. Você pode armazenar e gerenciar seus dotfiles em um repositório no {% data variables.product.prodname_dotcom %}. Para orientação e tutoriais sobre o que incluir no repositório dotfile, consulte o [GitHub faz dotfiles](https://dotfiles.github.io/).

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

**Observação:** Atualmente, o {% data variables.product.prodname_codespaces %} não é compatível com a personalização das configurações do _Usuário_ para o editor de {% data variables.product.prodname_vscode %} com o repositório `dotfiles`. É possível definir as configurações-padrão do _espaço de trabalho_ e _Remote [Codespaces]_ para um projeto específico no repositório do projeto. Para obter mais informações, consulte "[Introdução a contêineres de desenvolvimento](/github/developing-online-with-codespaces/configuring-codespaces-for-your-project#creating-a-custom-dev-container-configuration)".

{% endnote %}

### Habilitando o repositório de dotfiles para {% data variables.product.prodname_codespaces %}

Você pode usar o repositório de Dotfiles selecionado para personalizar seu ambiente de {% data variables.product.prodname_codespaces %}. Depois de escolher o seu repositório de dotfiles, você poderá adicionar seus scripts, preferências e configurações. Em seguida, você deverá habilitar os seus dotfiles na sua página pessoal de configurações de {% data variables.product.prodname_codespaces %}.

{% warning %}

**Aviso:** Dotfiles têm a capacidade de executar scripts arbitrários, que podem conter codespace inesperado ou malicioso. Antes de instalar o repositório de um dotfiles, recomendamos verificar os scripts para garantir que eles não executam nenhuma ação inesperada.

{% endwarning %}

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.codespaces-tab %}
1. Em "Dotfiles", selecione **Instalar dotfiles automaticamente** para que {% data variables.product.prodname_codespaces %} instale automaticamente seus dotfiles em cada novo codespace que você criar. ![Instalando dotfiles](/assets/images/help/codespaces/install-custom-dotfiles.png)
2. Escolha o repositório no qual você deseja instalar dotfiles. ![Selecionando um repositório de dotfiles](/assets/images/help/codespaces/select-dotfiles-repo.png)

Você pode adicionar mais script, preferências e arquivos de configuração ao repositório de dotfiles ou editar arquivos existentes sempre que quiser. As alterações nas configurações só serão selecionadas por novos codespaces.

Se o seu código não consegue pegar as configurações nos dotfiles, consulte "[Solução de problemas para {% data variables.product.prodname_codespaces %}](/codespaces/troubleshooting/troubleshooting-dotfiles-for-codespaces)".

## Outras configurações disponíveis

Você também pode personalizar {% data variables.product.prodname_codespaces %} usando [as configurações adicionais de {% data variables.product.prodname_codespaces %}de](https://github.com/settings/codespaces):

- Para definir sua região padrão, consulte "[Definindo sua região padrão para {% data variables.product.prodname_github_codespaces %}](/codespaces/customizing-your-codespace/setting-your-default-region-for-github-codespaces)."
- Para definir seu editor, consulte "[Definindo seu editor padrão para {% data variables.product.prodname_github_codespaces %}](/codespaces/customizing-your-codespace/setting-your-default-editor-for-github-codespaces)"
- Para adicionar segredos criptografados, consulte "[Gerenciar segredos criptografados para {% data variables.product.prodname_github_codespaces %}](/codespaces/managing-codespaces-for-your-organization/managing-encrypted-secrets-for-your-repository-and-organization-for-github-codespaces)".
- Para habilitar a verificação do GPG, consulte "[Gerenciar a verificação de GPG para {% data variables.product.prodname_github_codespaces %}](/codespaces/managing-your-codespaces/managing-gpg-verification-for-github-codespaces)."
- To allow your codespaces to access other repositories, see "[Managing repository access for your organization's codespaces](/codespaces/managing-codespaces-for-your-organization/managing-repository-access-for-your-organizations-codespaces)."

## Leia mais

* "[Criar um repositório](/github/creating-cloning-and-archiving-repositories/creating-a-new-repository)"
