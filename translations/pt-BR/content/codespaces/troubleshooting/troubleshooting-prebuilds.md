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

Para obter mais informações sobre as pré-compilações de {% data variables.product.prodname_codespaces %}, consulte "[Pré-compilando os seus codespaces](/codespaces/prebuilding-your-codespaces)".

## Verificando se um código foi criado a partir de uma pré-compilação?

Ao criar um codespace, você pode escolher o tipo de máquina virtual que deseja usar. Se uma pré-criação estiver disponível para o tipo de máquina virtual, "Pré-criação pronta para{% octicon "zap" aria-label="The zap icon" %}" será exibida ao lado.

![Uma lista dos tipos de máquina disponíveis](/assets/images/help/codespaces/choose-custom-machine-type.png)

Se você tiver a sua preferência de editor de {% data variables.product.prodname_codespaces %} definida como "{% data variables.product.prodname_vscode %} para a Web", a página "Configurando seu codespace " mostrará a mensagem "Pré-compliação de codespace encontrada" se uma pré-compilação estiver sendo usada.

![A mensagem "codespaces da pre-criação encontrados"](/assets/images/help/codespaces/prebuilt-codespace-found.png)

Da mesma forma, se sua preferência de editor for "{% data variables.product.prodname_vscode_shortname %}", o terminal integrado conterá a mensagem "Você está em um codespace pré-criado e definido pela configuração de pré-compilação para seu repositório" ao criar um novo codespace. Para obter mais informações, consulte "[Definindo seu editor padrão para {% data variables.product.prodname_github_codespaces %}](/codespaces/customizing-your-codespace/setting-your-default-editor-for-github-codespaces)".

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

Por padrão, a cada vez que você fizer push para um branch habilitado por uma pré-criação, o template de pré-criação será atualizado. Se o push envolver uma alteração na configuração do contêiner de desenvolvimento, enquanto a atualização estiver em andamento, a etiqueta "Pré-criação pronta de {% octicon "zap" aria-label="The zap icon" %} será removida da lista de tipos de máquina. Neste tempo, você ainda pode criar codespaces sem um modelo de pré-compilação. Se necessário, você pode reduzir as ocasiões em que as pré-criações não estão disponíveis para um repositório, definindo o template de pré-criação para ser atualizado somente quando você fizer uma alteração nos arquivos de configuração do contêiner de desenvolvimento ou apenas em um agendamento personalizado. Para obter mais informações, consulte "[Configurando pré-criações](/codespaces/prebuilding-your-codespaces/configuring-prebuilds#configuring-a-prebuild)".

Se seu branch não estiver especificamente habilitado para pré-compilações, ele ainda poderá se beneficiar de pré-compilações se ele foi criado a partir de um branch habilitado por pré-compilação. No entanto, se a configuração do contêiner de desenvolvimento for alterada no seu branch, para que não seja igual à configuração no branch de base, as pré-criações não estarão mais disponíveis no seu branch.

Essas são as coisas a serem verificadas se a etiqueta " Pré-compilação de {% octicon "zap" aria-label="The zap icon" %} pronta" não for exibido para um determinado branch:

* Confirme que existe uma configuração de pré-compilação para este branch. Se você não for administrador do repositório, entre em contato com um para confirmar.
* Confirme que a configuração de pré-compilação inclui sua região.
* Verifique se uma alteração para a configuração do contêiner de desenvolvimento foi enviada por push para o branch habilitado pela pré-compilação recentemente. Se for dessa forma, normalmente você terá que esperar até que o fluxo de trabalho de pré-criação, aguarde até que a execução do fluxo de trabalho de pré-compilação seja concluída antes que as pré-criações estejam disponíveis novamente.
* Se nenhuma alteração de configuração foi realizada recentemente, acesse a aba **Ações** do seu repositório, clique em **{% octicon "codespaces" aria-label="The Codespaces icon" %} Pré-compilações de {% data variables.product.prodname_codespaces %}** na lista de fluxos de trabalho e verifique se as execuções do fluxo de trabalho de pré-compilação são sendo bem-sucedidas. Se as últimas execuções de um fluxo de trabalho falharem e uma ou mais dessas execuções falharam continham alterações na configuração do contêiner de desenvolvimento, não haverá pré-compilações disponíveis para o branch associado.

## Solucionando problemas de execução de fluxo de trabalho com falhas para pré-compilações

Se o fluxo de trabalho for executado para uma configuração de pré-compilação falhar, você poderá desabilitar temporariamente a configuração de pré-compilação durante a investigação. Para obter mais informações, consulte "[Gereciando pré-compilações](/codespaces/prebuilding-your-codespaces/managing-prebuilds#disabling-a-prebuild-configuration)".

## Leia mais

- "[Configurando pré-compilações](/codespaces/prebuilding-your-codespaces/configuring-prebuilds)"
- "[Gerenciando pré-compilações](/codespaces/prebuilding-your-codespaces/managing-prebuilds)"
