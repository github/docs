---
title: Solução de problemas de pré-compilações
shortTitle: Pré-compilações de codespaces
intro: Você pode usar as pré-compilações para acelerar a criação de codespaces. Este artigo fornece etapas de solução de problemas para problemas comuns com pré-compilações.
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
product: '{% data reusables.gated-features.codespaces %}'
miniTocMaxHeadingLevel: 3
---

{% data reusables.codespaces.prebuilds-beta-note %}

Para obter mais informações sobre as pré-compilações de {% data variables.product.prodname_codespaces %}, consulte "[Pré-compilando os seus codespaces](/codespaces/prebuilding-your-codespaces)".

## Verificando se um código foi criado a partir de uma pré-compilação?

When you create a codespace, you can choose the type of the virtual machine you want to use. If a prebuild is available for the type of virtual machine, "{% octicon "zap" aria-label="The zap icon" %} Prebuild ready" is shown next to it.

![A list of available machine types](/assets/images/help/codespaces/choose-custom-machine-type.png)

Se você tiver sua preferência de editor de {% data variables.product.prodname_codespaces %} definida como "Visual Studio Code para Web", a página "Configurando seu codespace" mostrará a mensagem "Prebuilt codespace found" se uma pré-compilação estiver sendo utilizada.

![The 'prebuilt codespace found' message](/assets/images/help/codespaces/prebuilt-codespace-found.png)

Da mesma forma, se sua preferência de editor for "Visual Studio Code", o terminal integrado conterá a mensagem "Você está em um codespace pré-compilado efinido pela configuração de pré-compilação do seu repositório" ao criar um novo codespace. Para obter mais informações, consulte "[Definindo seu editor padrão para codespaces](/codespaces/customizing-your-codespace/setting-your-default-editor-for-codespaces)".

Depois de criar um codespace, você pode verificar se ele foi criado a partir de uma pré-compilação executando o seguinte comando {% data variables.product.prodname_cli %} no terminal:

```shell{:copy}
gh api /user/codespaces/$CODESPACE_NAME --jq .prebuild
```

Isso retorna `verdadeiro` se o código foi criado usando a pré-compilação.

Como alternativa, se {% data variables.product.prodname_cli %} (`gh`) não estiver instalado, você pode usar o seguinte comando, que retorna `createFromPrebuild` se o codespace foi criado a partir de uma pré-compilação:

```shell{:copy}
cat /workspaces/.codespaces/shared/environment-variables.json | jq '.ACTION_NAME'
```

## A etiqueta "Pré-compilação pronta" às vezes está ausente

Você pode notar que, às vezes, quando você cria um novo codespace a partir de um branch habilitado por uma pré-compilaçã, a etiqueta "Pré-compilação de {% octicon "zap" aria-label="The zap icon" %} pronta" não é exibida na caixa de diálogo para escolher um tipo de máquina. Isto significa que pré-compilações não estão disponíveis no momento.

By default, each time you push to a prebuild-enabled branch, the prebuild template is updated. If the push involves a change to the dev container configuration then, while the update is in progress, the "{% octicon "zap" aria-label="The zap icon" %} Prebuild Ready" label is removed from the list of machine types. Neste tempo, você ainda pode criar codespaces sem um modelo de pré-compilação. If required, you can reduce the occasions on which prebuilds are unavailable for a repository by setting the prebuild template to be updated only when you make a change to your dev container configuration files, or only on a custom schedule. For more information, see "[Configuring prebuilds](/codespaces/prebuilding-your-codespaces/configuring-prebuilds#configuring-a-prebuild)."

Se seu branch não estiver especificamente habilitado para pré-compilações, ele ainda poderá se beneficiar de pré-compilações se ele foi criado a partir de um branch habilitado por pré-compilação. However, if the dev container configuration is changed on your branch, so that it's not the same as the configuration on the base branch, prebuilds will no longer be available on your branch.

Essas são as coisas a serem verificadas se a etiqueta " Pré-compilação de {% octicon "zap" aria-label="The zap icon" %} pronta" não for exibido para um determinado branch:

* Confirme que existe uma configuração de pré-compilação para este branch. Se você não for administrador do repositório, entre em contato com um para confirmar.
* Confirme que a configuração de pré-compilação inclui sua região.
* Verifique se uma alteração para a configuração do contêiner de desenvolvimento foi enviada por push para o branch habilitado pela pré-compilação recentemente. If so, you will typically have to wait until the prebuild workflow run for this push completes before prebuilds are available again.
* Se nenhuma alteração de configuração foi realizada recentemente, acesse a aba **Ações** do seu repositório, clique em **{% octicon "codespaces" aria-label="The Codespaces icon" %} Pré-compilações de {% data variables.product.prodname_codespaces %}** na lista de fluxos de trabalho e verifique se as execuções do fluxo de trabalho de pré-compilação são sendo bem-sucedidas. If latest runs of a workflow failed, and one or more of these failed runs contained changes to the dev container configuration, then there will be no available prebuilds for the associated branch.

## Leia mais

- "[Configurando pré-compilações](/codespaces/prebuilding-your-codespaces/configuring-prebuilds)"
- "[Gerenciando pré-compilações](/codespaces/prebuilding-your-codespaces/managing-prebuilds)"
