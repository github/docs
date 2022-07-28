---
title: Introdução aos contêineres de desenvolvimento
intro: 'Ao trabalhar em um codespace, o ambiente em que você está trabalhando é criado usando um contêiner de desenvolvimento, ou contêiner de dev, hospedado em uma máquina virtual.'
permissions: People with write permissions to a repository can create or edit the codespace configuration.
redirect_from:
  - /github/developing-online-with-github-codespaces/configuring-github-codespaces-for-your-project
  - /codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project
  - /github/developing-online-with-codespaces/configuring-codespaces-for-your-project
  - /codespaces/customizing-your-codespace/configuring-codespaces-for-your-project
  - /codespaces/setting-up-your-project-for-codespaces/configuring-codespaces-for-your-project
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

## Sobre contêineres de desenvolvimento

Contêineres de desenvolvimento, ou contêineres de dev, são contêineres Docker configurados especificamente para fornecer um ambiente de desenvolvimento completo. Sempre que você trabalha em um codespace, você usa um contêiner de desenvolvimento em uma máquina virtual.

É possível configurar o contêiner de desenvolvimento de um repositório para que códigos criados para esse repositório forneçam um ambiente de desenvolvimento personalizado. conclua com todas as ferramentas e tempos de execução que você precisa para trabalhar em um projeto específico. Se você não definir uma configuração no repositório, {% data variables.product.prodname_github_codespaces %} usará uma configuração-padrão, que contém muitas das ferramentas comuns que sua equipe pode precisar para desenvolver com o seu projeto. Para obter mais informações, consulte "[Usando o contêiner padrão de configuração de desenvolvimento](#using-the-default-dev-container-configuration)".

Os arquivos de configuração para um contêiner de desenvolvimento estão contidos em um diretório `.devcontainer` no seu repositório. Você pode usar {% data variables.product.prodname_vscode %} para adicionar arquivos de configuração para você. Você pode escolher entre uma seleção de configurações predefinidas para vários tipos de projeto. Você pode usar essas configurações sem outras configurações ou pode editar as configurações para refinar o ambiente de desenvolvimento que elas produzem. Para obter mais informações, consulte "[Usando um contêiner de configuração de desenvolvimento predefinido](#using-a-predefined-dev-container-configuration)".

Como alternativa, você pode adicionar seus próprios arquivos de configuração personalizados. Para obter mais informações, consulte "[Criando uma configuração personalizada do contêiner de desenvolvimento](#creating-a-custom-dev-container-configuration)".

É possível definir uma configuração de contêiner de desenvolvimento único para um repositório, configurações diferentes para branches diferentes ou várias configurações. Quando várias configurações estão disponíveis, os usuários podem escolher a sua configuração preferida quando criarem um codespace. Isso é particularmente útil para grandes repositórios que contêm código-fonte em diferentes linguagens de programação ou para diferentes projetos. Você pode criar uma variedade de configurações que permitem que diferentes equipes trabalhem em um codespace configurado adequadamente para o trabalho que estão fazendo.

### devcontainer.json

O arquivo primário em uma configuração de contêiner de desenvolvimento é o arquivo `devcontainer.json`. Você pode usar este arquivo para determinar o ambiente de codespaces criados no seu repositório. O conteúdo deste arquivo define um contêiner de desenvolvimento que pode incluir estruturas, ferramentas, extensões e encaminhamento de porta. O arquivo `devcontainer.json` geralmente contém uma referência a um arquivo Docker, que está normalmente localizado ao lado do arquivo `devcontainer.json`.

Se você não adicionar um arquivo `devcontainer.json` ao seu repositório. a configuração padrão do contêiner de desenvolvimento é usada. Para obter mais informações, consulte "[Usando o contêiner padrão de configuração de desenvolvimento](#using-the-default-dev-container-configuration)".

O arquivo `devcontainer.json` normalmente está localizado no diretório `.devcontainer` do seu repositório. Como alternativa, você pode localizá-lo diretamente na raiz do repositório, nesse caso o nome do arquivo deve começar com um ponto: `.devcontainer.json`.

Se você quiser ter uma escolha de configurações de contêiner de desenvolvimento no seu repositório, todas as alternativas ao arquivo `.devcontainer/devcontainer.json` (ou `.devcontainer.json`) devem estar localizadas no seu próprio subdiretório no caminho `.devcontainer/SUBDIRECTORY/devcontainer.json`. Por exemplo, você poderia escolher entre duas configurações:
* `.devcontainer/database-dev/devcontainer.json`
* `.devcontainer/gui-dev/devcontainer.json`

Quando você tem vários arquivos `devcontainer.json` no seu repositório, cada codespace é criado a partir apenas de uma das configurações. As configurações não podem ser importadas ou herdadas entre os arquivos `devcontainer.json`. Se um arquivo `devcontainer.json` em um subdiretório personalizado tiver arquivos dependentes, como o arquivo Docker ou scripts executados por comandos no arquivo `devcontainer.json`, recomenda-se que você colocalize esses arquivos no mesmo subdiretório.

Para obter informações sobre como escolher sua configuração preferida de contêiner de desenvolvimento ao criar um codespace, consulte "[Criando um codespace](/codespaces/developing-in-codespaces/creating-a-codespace#creating-a-codespace)"

{% data reusables.codespaces.more-info-devcontainer %}

#### Como usar o devcontainer.json

É útil pensar no arquivo `devcontainer.json` serve para fornecer "adaptação" ao invés de "personalização". Você só deve incluir coisas que todos que trabalham em sua base de código precisam como elementos padrão do ambiente de desenvolvimento, não coisas que são preferências pessoais. Coisas como os linters estão corretas para padronizar e exigir que todos realizaram a instalação. Portanto, são boas para incluir no seu arquivo `devcontainer.json`. Coisas como decoradores ou temas de interface de usuário são escolhas pessoais que não devem ser colocadas no arquivo `devcontainer.json`.

Você pode personalizar seus codespaces usando dotfiles e Settings Sync. For more information, see "[Personalizing {% data variables.product.prodname_github_codespaces %} for your account](/codespaces/customizing-your-codespace/personalizing-github-codespaces-for-your-account)."

### arquivo Docker

Você pode adicionar um arquivo Docker como parte da configuração do seu contêiner de dev.

O arquivo Docker é um arquivo de texto que contém as instruções necessárias para criar uma imagem Docker. Essa imagem é usada para gerar um contêiner de desenvolvimento toda vez que alguém cria um codespace usando o arquivo `devcontainer.json` que faz referência a este arquivo Docker. As instruções no arquivo Docker normalmente começam referenciando uma imagem principal na qual a nova imagem que será criada se baseia. Isto é seguido por comandos executados durante o processo de criação de imagem, por exemplo, para instalar pacotes de software.

O arquivo Docker para um contêiner de desenvolvimento está normalmente localizado na pasta `.devcontainer` ao lado do `devcontainer.json` no qual ele é referenciado.

{% note %}

**Observação**: Como alternativa ao uso de um arquivo Docker você pode usar a propriedade `imagem` no arquivo `devcontainer.json` a ser referenciado diretamente a uma imagem existente que deseja usar. Se nem um arquivo Docker nem uma imagem forem encontrados, a imagem do contêiner padrão será utilizada. Para obter mais informações, consulte "[Usando o contêiner padrão de configuração de desenvolvimento](#using-the-default-dev-container-configuration)".

{% endnote %}

#### Exemplo de arquivo Docker simples

O exemplo a seguir utiliza quatro instruções:

`ARG`define a variável de tempo de construção.

`FROM` especifica a imagem principal na qual a imagem Docker gerada será baseada.

`COPY` copia um arquivo e o adiciona ao sistema de arquivos.

`RUN` atualiza listas de pacotes e executa um script. Você também pode usar uma instrução `RUN` para instalar software, conforme mostrado nas instruções comentadas. Para executar vários comandos, use `&&` para combinar os comandos em uma única instrução `RUN`.

```Dockerfile{:copy}
ARG VARIANT="16-buster"
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:0-${VARIANT}

# [Optional] Uncomment if you want to install an additional version of node using nvm
# ARG EXTRA_NODE_VERSION=10
# RUN su node -c "source /usr/local/share/nvm/nvm.sh && nvm install ${EXTRA_NODE_VERSION}"

# [Optional] Uncomment if you want to install more global node modules
# RUN su node -c "npm install -g <your-package-list-here>"

COPY library-scripts/github-debian.sh /tmp/library-scripts/
RUN apt-get update && bash /tmp/library-scripts/github-debian.sh
```

Para obter mais informações sobre instruções do arquivo Docker, consulte "[referência do arquivo Docker](https://docs.docker.com/engine/reference/builder)" na documentação do Docker.

#### Usando um arquivo Docker

Para usar um arquivo Dockerfile como parte de uma configuração de contêiner de desenvolvimento, referencie-o no seu arquivo `devcontainer.json` usando a propriedade `dockerfile`.

```json{:copy}
{
  ...
  "build": { "dockerfile": "Dockerfile" },
  ...
}
```

Para obter mais informações sobre como usar um arquivo Docker em uma configuração de contêiner de desenvolvimento, consulte a documentação de {% data variables.product.prodname_vscode_shortname %} "[Criar um contêiner de desenvolvimento](https://code.visualstudio.com/docs/remote/create-dev-container#_dockerfile). "

## Usando a configuração padrão do contêiner de desenvolvimento

Se você não definir uma configuração no repositório, o {% data variables.product.prodname_dotcom %} criará um codespace que usa uma imagem padrão do Linux. Esta imagem do Linux inclui um número de versões de tempo de execução para linguagens populares como Python, Node, PHP, Java, Go, C++, Ruby e .NET Core/C#. São utilizadas as versões mais recentes ou LTS dessas linguagens. Além disso, há ferramentas para apoiar a ciência de dados e a aprendizagem de máquinas, como JupyterLab e Conda. A imagem também inclui outras ferramentas e utilitários para desenvolvedores como Git, CLI do GitHub, yarn, openssh e vim. Para ver todas as linguagens, tempos de execução e as ferramentas que são incluídas, use o comando `devcontainer-info content-url` dentro do seu terminal de código e siga o URL que o comando emite.

Como alternativa, para obter mais informações sobre tudo o que está incluído na imagem padrão do Linux, consulte o arquivo mais recente no repositório [`microsoft/vscode-dev-containers`](https://github.com/microsoft/vscode-dev-containers/tree/main/containers/codespaces-linux).

A configuração padrão é uma boa opção se você estiver trabalhando em um pequeno projeto que usa as linguagens e ferramentas que {% data variables.product.prodname_github_codespaces %} fornece.

## Usando uma configuração de contêiner predefinida

É possível escolher uma lista de configurações predefinidas para criar uma configuração de contêiner de desenvolvimento para o seu repositório. Essas configurações fornecem configurações comuns para determinados tipos de projeto e podem ajudar você rapidamente a começar com uma configuração que já tem as opções de contêiner apropriadas, configurações do {% data variables.product.prodname_vscode_shortname %} e extensões do {% data variables.product.prodname_vscode_shortname %} que devem ser instaladas.

Usar uma configuração predefinida é uma ótima ideia se você precisa de uma extensão adicional. Você também pode começar com uma configuração predefinida e alterá-la conforme necessário para o seu projeto.

É possível adicionar uma configuração predefinida de contêiner de desenvolvimento enquanto trabalha em um codespace ou enquanto trabalha em um repositório localmente.

{% data reusables.codespaces.command-palette-container %}
1. Clique na definição que você deseja usar.

   ![Lista de definições de contêiner predefinidas](/assets/images/help/codespaces/predefined-container-definitions-list.png)

1. Siga as instruções para personalizar sua definição. Para obter mais informações sobre as opções para personalizar sua definição, consulte "[Adicionando funcionalidades adicionais ao seu arquivo `devcontainer.json`](#adding-additional-features-to-your-devcontainerjson-file)".
1. Clique em **OK**.

   ![Botão OK](/assets/images/help/codespaces/prebuilt-container-ok-button.png)

1. Se você estiver trabalhando em um codespace, aplique suas alterações clicando em **Reconstruir agora** na mensagem na parte inferior direita da janela. Para obter mais informações sobre a reconstrução do seu contêiner, consulte "[Aplicar alterações na sua configuração](#applying-configuration-changes-to-a-codespace)".

   !["Códigos: Recriar contêiner" em {% data variables.product.prodname_vscode_command_palette %}](/assets/images/help/codespaces/rebuild-prompt.png)

### Adicionando funcionalidades adicionais ao arquivo `devcontainer.json`

{% note %}

**Observação:** Este recurso está na versão beta e sujeito a alterações.

{% endnote %}

Você pode adicionar funcionalidades à configuração de contêiner predefinida para personalizar quais ferramentas estão disponíveis e estender a funcionalidade do seu espaço de trabalho sem ter que criar uma configuração personalizada de um contêiner de desenvolvimento a partir do zero. Por exemplo, você poderia usar uma configuração de contêiner predefinida e adicionar o {% data variables.product.prodname_cli %}. Você pode criar essas funcionalidades para o seu projeto adicionando as funcionalidades ao seu arquivo `devcontainer.json` ao definir a configuração do seu contêiner.

Você pode adicionar algumas das características mais comuns selecionando-as na configuração do contêiner predefinido. Para obter mais informações sobre as funcionalidades disponíveis, consulte a biblioteca de script [](https://github.com/microsoft/vscode-dev-containers/tree/main/script-library#scripts) no repositório `vscode-dev-containers`.


1. Acessar a Paleta de Comando (`Shift + Comando + P` / `Ctrl + Shift + P`) e, em seguida, comece a digitar "configurar". Selecione **Codespaces: Configure as Funcionalidades do contêiner de desenvolvimento**.

   ![O comando Configurar Funcionalidades do Devcontainer na paleta de comandos](/assets/images/help/codespaces/codespaces-configure-features.png)

1. Atualize as seleções das suas funcioanlidades e clique em **OK**.

   ![O menu de seleção de funcionalidades adicionais durante a configuração do contêiner](/assets/images/help/codespaces/select-additional-features.png)

1. Para aplicar as alterações, no canto inferior direito da tela, clique em **Reconstruir agora**. Para obter mais informações sobre a reconstrução do seu contêiner, consulte "[Aplicar alterações na sua configuração](#applying-configuration-changes-to-a-codespace)".

   !["Codespaces: Reconstruir contêiner" na paleta de comandos](/assets/images/help/codespaces/rebuild-prompt.png)

## Criando uma configuração de contêiner de desenvolvimento personalizada

Se nenhuma das configurações predefinidas atender às suas necessidades, você poderá criar uma configuração personalizada escrevendo seu próprio arquivo `devcontainer.json`.

* Se você estiver adicionando um único arquivo `devcontainer.json` que será usado por todos que criarem um código a partir do seu repositório, crie o arquivo dentro de um diretório `.devcontainer` na raiz do repositório.
* Se quiser oferecer aos usuários uma escolha de configuração, você poderá criar vários arquivos de `devcontainer.json`, cada um localizado em um subdiretório separado do diretório `.devcontainer`.

   {% note %}

   **Observação**: Você não pode encontrar os seus arquivos `devcontainer.json` arquivos em diretórios mais de um nível abaixo de `.devcontainer`. Por exemplo, um arquivo em `.devcontainer/teamA/devcontainer.json` irá funcionar, mas `.devcontainer/teamA/testing/devcontainer.json` não irá funcionar.

   {% endnote %}

   Se vários arquivos `devcontainer.json` forem encontrados no repositório, eles serão listados na página de opções de criação do codespace. Para obter mais informações, consulte "[Criar um codespace](/codespaces/developing-in-codespaces/creating-a-codespace#creating-a-codespace)".

   ![Uma escolha de arquivos de configuração](/assets/images/help/codespaces/configuration-file-choice.png)

### Seleção de configuração padrão durante a criação de codespace

If `.devcontainer/devcontainer.json` ou `.devcontainer.json` existir, será a seleção padrão na lista de arquivos de configuração disponíveis quando você criar um codespace. Se nenhum dos dois arquivos existir, a configuração padrão do contêiner de desenvolvimento será selecionada por padrão.

![A configuração padrão selecionada](/assets/images/help/codespaces/configuration-file-choice-default.png)

### Editando o arquivo devcontainer.json

Você pode adicionar e editar as chaves de configuração compatíveis no arquivo `devcontainer.json` para especificar aspectos do ambiente do codespace como, por exemplo, quais extensões de {% data variables.product.prodname_vscode_shortname %} serão instaladas. {% data reusables.codespaces.more-info-devcontainer %}

O arquivo `devcontainer.json` é gravado usando o formato JSONC. Isso permite que você inclua comentários no arquivo de configuração. Para obter mais informações, consulte "[Editando o JSON com {% data variables.product.prodname_vscode_shortname %}](https://code.visualstudio.com/docs/languages/json#_json-with-comments)" na documentação do {% data variables.product.prodname_vscode_shortname %}.

{% note %}

**Observaçãp**: Se você usar um linter para validar o arquivo `devcontainer.json`, certifique-se que está definido como JSONC e não JSON ou comentários serão relatados como erros.

{% endnote %}

### Configurações do editor para {% data variables.product.prodname_vscode_shortname %}

{% data reusables.codespaces.vscode-settings-order %}

Você pode definir configurações de editor padrão para {% data variables.product.prodname_vscode_shortname %} em dois lugares.

* As configurações do editor definidas no arquivo `.vscode/settings.json` no repositório são aplicadas como configurações com escopo dafinido no _Espaço de trabalho_ no codespace.
* As configurações do editor definidas nas chave `configurações` no arquivo `devcontainer.json` são aplicadas como configurações com escopo definido como _Remote [Codespaces]configurações de escopo_ no codespace.

## Aplicando alterações de configuração a um codespace

{% data reusables.codespaces.apply-devcontainer-changes %}

{% data reusables.codespaces.rebuild-command %}
1. {% data reusables.codespaces.recovery-mode %} Corrija os erros na configuração.

   ![Mensagem de erro sobre modo de recuperação](/assets/images/help/codespaces/recovery-mode-error-message.png)

   - Para diagnosticar o erro revisando os registros de criação, clique em **Visualizar registro de criação**.
   - Para corrigir os erros identificados nos registros, atualize seu arquivo </code>devcontainer.json..</li>
<li>Para aplicar as alterações, reconstrua seu contêiner.</li>
</ul>

<h2 spaces-before="0">Leia mais</h2>

<ul>
<li>"<a href="/codespaces/prebuilding-your-codespaces">Pré-criando os seus codespaces</a>"</li>
</ul>
