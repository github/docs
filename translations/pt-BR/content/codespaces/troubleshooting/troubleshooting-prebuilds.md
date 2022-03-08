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

Se vários tipos de máquina estiverem disponíveis quando você cria um codespace, uma caixa de diálogo será exibida fornecendo a você uma escolha de tipos de máquina. Isto irá exibir o a etiqueta "Pré-compilação de {% octicon "zap" aria-label="The zap icon" %} pronta" ao lado dos tipos de máquinas para quais as versões estão disponíveis.

![A caixa de diálogo para escolher um tipo de máquina](/assets/images/help/codespaces/choose-custom-machine-type.png)

Se você tiver sua preferência de editor de {% data variables.product.prodname_codespaces %} definida como "Visual Studio Code para Web", a página "Configurando seu codespace" mostrará a mensagem "Prebuilt codespace found" se uma pré-compilação estiver sendo utilizada. Da mesma forma, se sua preferência de editor for "Visual Studio Code", o terminal integrado conterá a mensagem "Você está em um codespace pré-compilado efinido pela configuração de pré-compilação do seu repositório" ao criar um novo codespace. Para obter mais informações, consulte "[Definindo seu editor padrão para codespaces](/codespaces/customizing-your-codespace/setting-your-default-editor-for-codespaces)".

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

Cada vez que você enviar um branch pré-compilado por push, o template de pré-compilação é atualizado. Se o push envolver uma mudança no contêiner de desenvolvimento, enquanto a atualização está em andamento, a etiqueta "Pré-compilação de {% octicon "zap" aria-label="The zap icon" %} pronta" será removida da caixa de diálogo de tipos de máquinas. Neste tempo, você ainda pode criar codespaces sem um modelo de pré-compilação.

Se seu branch não estiver especificamente habilitado para pré-compilações, ele ainda poderá se beneficiar de pré-compilações se ele foi criado a partir de um branch habilitado por pré-compilação. No entanto, se o contêiner de desenvolvimento for alterado no seu branch, para que não seja o mesmo que o contêiner de desenvolvimento no branch de base, as pré-compilações não estarão mais disponíveis no seu branch.

Essas são as coisas a serem verificadas se a etiqueta " Pré-compilação de {% octicon "zap" aria-label="The zap icon" %} pronta" não for exibido para um determinado branch:

* Confirme que existe uma configuração de pré-compilação para este branch. Se você não for administrador do repositório, entre em contato com um para confirmar.
* Confirme que a configuração de pré-compilação inclui sua região.
* Verifique se uma alteração para a configuração do contêiner de desenvolvimento foi enviada por push para o branch habilitado pela pré-compilação recentemente. Em caso afirmativo, você terá que esperar até que a execução desse fluxo de trabalho de pré-compilação execute este push por completo antes que as pré-compilações estejam disponíveis novamente.
* Se nenhuma alteração de configuração foi realizada recentemente, acesse a aba **Ações** do seu repositório, clique em **{% octicon "codespaces" aria-label="The Codespaces icon" %} Pré-compilações de {% data variables.product.prodname_codespaces %}** na lista de fluxos de trabalho e verifique se as execuções do fluxo de trabalho de pré-compilação são sendo bem-sucedidas. Se as últimas execuções de um fluxo de trabalho falharem e uma ou mais dessas execuções falharam continham alterações no contêiner de desenvolvimento, não haverá pré-compilações disponíveis para o branch associado.

## Leia mais

- "[Configurando pré-compilações](/codespaces/prebuilding-your-codespaces/configuring-prebuilds)"
- "[Gerenciando pré-compilações](/codespaces/prebuilding-your-codespaces/managing-prebuilds)"
