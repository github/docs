---
title: Sobre as pré-compilações do GitHub Codespaces
shortTitle: Sobre as pré-criações
intro: As pré-compilações dos codespaces ajudam a acelerar a criação de novos codespaces para repositórios grandes ou complexos.
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Codespaces
product: '{% data reusables.gated-features.codespaces %}'
redirect_from:
  - /codespaces/prebuilding-your-codespaces/about-codespaces-prebuilds
---

## Visão Geral

Pré-compilar os seus codespaces permite que você seja mais produtivo e acesse o seu codepsace mais rápido, particularmente se o repositório for grande ou complexo e novos codespaces atualmente levarem mais de 2 minutos para começar. Isso ocorre porque qualquer código-fonte, extensões de editor, dependências de projetos, comandos e configurações já foram baixadas, instaladas e aplicadas antes de criar um codespace para o seu projeto. Pense em uma pré-compilação como um modelo pronto para um codespace.

Por padrão, sempre que você fizer alterações no repositório, {% data variables.product.prodname_github_codespaces %} irá usar {% data variables.product.prodname_actions %} para atualizar automaticamente suas pré-criações.

Quando as pré-compilações estão disponíveis para um branch específico de um repositório, um arquivo de configuração de contêiner de desenvolvimento específico e para sua região, você verá a etiqueta "{% octicon "zap" aria-label="The zap icon" %} Pré-compilação pronta" na lista de opções de tipo de máquina ao criar um codespace. Se uma pré-compilação ainda estiver sendo criada, você verá a etiqueta "{% octicon "history" aria-label="The history icon" %} Pré-compliação em andamento". Para obter mais informações, consulte "[Criar um codespace](/codespaces/developing-in-codespaces/creating-a-codespace#creating-a-codespace)".

![A caixa de diálogo para escolher um tipo de máquina](/assets/images/help/codespaces/choose-custom-machine-type.png)

## O processo de pré-compilação

Para criar uma pré-compilação você deve definir uma configuração de pré-compilação. Ao salvar a configuração, um fluxo de trabalho de {% data variables.product.prodname_actions %} é executado para criar cada uma das pré-compilações necessárias; um fluxo de trabalho por compilação. Os fluxos de trabalho também são executados sempre que as pré-compilações para sua configuração tiverem de ser atualizadas. Isso pode acontecer em intervalos programados, em pushes para um repositório pré-compilado, ou quando você mudar a configuração do contêiner de desenvolvimento. Para obter mais informações, consulte "[Configurando pré-criações](/codespaces/prebuilding-your-codespaces/configuring-prebuilds#configuring-a-prebuild)".

Quando um fluxo de trabalho de configuração de pré-compilação é executado, {% data variables.product.prodname_dotcom %} cria um codespace temporário, executando operações de configuração até e incluindo qualquer comando `onCreateCommand` e `updateContentCommand` no arquivo `devcontainer.json`. Nenhum comando `postCreateCommand` é executado durante a criação de uma pré-compilação. Para obter mais informações sobre esses comandos, consulte a referência de [`devcontainer.json`](https://code.visualstudio.com/docs/remote/devcontainerjson-reference#_devcontainerjson-properties) na documentação de {% data variables.product.prodname_vscode_shortname %}. Um instantâneo do contêiner gerado é capturado e armazenado.

Ao criar um codespace a partir de uma pré-compilação, {% data variables.product.prodname_dotcom %} faz o download do instantâneo do contêiner existente do armazenamento e o implementa em uma nova máquina virtual, completando os comandos restantes especificados na configuração do contêiner de desenvolvedores. Uma vez que muitas operações já foram realizadas, como a clonagem do repositório, criar um codespace a partir de uma pré-compilação pode ser consideravelmente mais rápido do que criar um sem uma pré-compilação. Isso é verdade quando o repositório é grande e/ou os comandos `onCreateCommand` demoram muito tempo para serem executados.

## Sobre a cobrança para pré-criações de {% data variables.product.prodname_codespaces %}

{% data reusables.codespaces.billing-for-prebuilds-default %} Para obter detalhes de preços de armazenamento de {% data variables.product.prodname_codespaces %}, consulte[Sobre cobrança para {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces)."

{% data reusables.codespaces.billing-for-prebuilds-reducing %}

O uso de codespaces criados usando pré-criações é cobrado na mesma frequência que os codespaces regulares.

## Sobre fazer push de alterações em branches com pré-criação

Por padrão, cada push em um branch que tem uma configuração de pré-criação resulta em um fluxo de trabalho de ações gerenciadas por {% data variables.product.prodname_dotcom %} para atualizar a pré-compilação. O fluxo de trabalho da pré-criação tem um limite de concorrência de uma execução de fluxo de trabalho de cada vez para uma determinada configuração de pré-compilação, a não ser que tenham sido feitas alterações que afetem a configuração do contêiner de desenvolvimento do repositório associado. Para obter mais informações, consulte "[Introdução a contêineres de desenvolvimento](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)". Se uma execução já estiver em andamento, a execução do fluxo de trabalho que foi enfileirada mais recentemente será executada a seguir, depois que a execução atual for concluída.

Com o conjunto de pré-compilações a ser atualizado em cada push, significa que se os pushes forem muito frequentes no seu repositório, as atualizações da pré-compilação ocorrerão pelo menos com a frequência necessária para executar o fluxo de trabalho pré-compilado. Ou seja, se a execução do fluxo de trabalho normalmente leva uma hora para ser concluída, serão criadas pré-compilações para o repositório em aproximadamente uma hora, se a execução for bem sucedida, ou mais frequentemente se houve pushes que alteram a configuração do contêiner de desenvolvimento no branch.

Por exemplo, vamos imaginar que 5 pushes são feitos, em rápida sucessão, para um branch que tem uma configuração de pré-compilação. Nesta situação:

* A execução de um fluxo de trabalho é iniciada para o primeiro push, para atualizar a pré-compilação.
* Se os 4 pushes restantes não afetarem a configuração do contêiner de desenvolvimento, o fluxo de trabalho será executado em um estado de "pendência".

  Se qualquer um dos 4 pushes restantes alterar a configuração do contêiner de desenvolvimento, o serviço não irá ignorá-lo e irá executar imediatamente o fluxo de trabalho pré-criação, atualizando a pré-compilação adequadamente se puder.

* Quando a primeira execução for concluída, as execuções dos fluxos de trabalho para os pushes 2, 3 e 4 serão canceladas, e o último fluxo de trabalho na fila (para push 5) será executado e será atualizada a pré-compilação. 
