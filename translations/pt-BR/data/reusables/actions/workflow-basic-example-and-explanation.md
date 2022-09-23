---
ms.openlocfilehash: 53dbd22ad351ec7a1abc92107b366ecd8c71a3a9
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "147064535"
---
## Criar um exemplo de fluxo de trabalho

{% data variables.product.prodname_actions %} usa a sintaxe do YAML para definir o fluxo de trabalho.  Cada fluxo de trabalho é armazenado como um arquivo YAML separado no seu repositório de código, em um diretório chamado `.github/workflows`.

Você pode criar um exemplo de fluxo de trabalho no repositório que aciona automaticamente uma série de comandos sempre que o código for carregado. Nesse fluxo de trabalho, {% data variables.product.prodname_actions %} verifica o código enviado, instala a estrutura de teste [bats](https://www.npmjs.com/package/bats) e executa um comando básico para gerar a versão bats:`bats -v`.

1. No repositório, crie o diretório `.github/workflows/` para armazenar os arquivos de fluxo de trabalho.
1. No diretório `.github/workflows/`, crie um arquivo chamado `learn-github-actions.yml` e adicione o código a seguir.

   ```yaml
   name: learn-github-actions
   on: [push]
   jobs:
     check-bats-version:
       runs-on: ubuntu-latest
       steps:
         - uses: {% data reusables.actions.action-checkout %}
         - uses: {% data reusables.actions.action-setup-node %}
           with:
             node-version: '14'
         - run: npm install -g bats
         - run: bats -v
   ```
1. Faça commit dessas alterações e faça push para o seu repositório do {% data variables.product.prodname_dotcom %}.

Seu novo arquivo de fluxo de trabalho de {% data variables.product.prodname_actions %} agora está instalado no seu repositório e será executado automaticamente toda vez que alguém fizer push de uma alteração no repositório. Para conferir os detalhes sobre o histórico de execução de um fluxo de trabalho, confira "[Exibir a atividade de uma execução de fluxo de trabalho](#viewing-the-activity-for-a-workflow-run)".

## Entender o arquivo de fluxo de trabalho

Para ajudar você a entender como a sintaxe de YAML é usada para criar um arquivo de fluxo de trabalho, esta seção explica cada linha do exemplo Introdução:

<table>
<tr>
<td>

  ```yaml
  name: learn-github-actions
  ```
</td>
<td>
  <em>Opcional</em> – O nome do fluxo de trabalho, conforme ele será exibido na guia Ações do repositório do {% data variables.product.prodname_dotcom %}.
</td>
</tr>
<tr>
<td>

  ```yaml
  on: [push]
  ```
</td>
<td>
Especifica o gatilho para este fluxo de trabalho. Este exemplo usa o evento <code>push</code>, para que uma execução de fluxo de trabalho seja disparada sempre que alguém efetuar push de uma alteração para o repositório ou mesclar uma solicitação de pull.  Isso é disparado por um push para cada branch. Para ver exemplos de sintaxe que são executados somente em pushes para branches, marcas ou caminhos específicos, confira <a href="/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore">"Sintaxe de fluxo de trabalho do {% data variables.product.prodname_actions %}</a>".
</td>
</tr>
<tr>
<td>

  ```yaml
  jobs:
  ```
</td>
<td>
Agrupa todos os trabalhos executados no fluxo de trabalho <code>learn-github-actions</code>.
</td>
</tr>
<tr>
<td>

  ```yaml
  check-bats-version:
  ```
</td>
<td>
Define um trabalho chamado <code>check-bats-version</code>. As chaves secundaárias definirão as propriedades do trabalho.
</td>
</tr>
<tr>
<td>

  ```yaml
    runs-on: ubuntu-latest
  ```
</td>
<td>
Configura o trabalho a ser executado na versão mais recente de um executor do Linux do Ubuntu. Isto significa que o trabalho será executado em uma nova máquina virtual hospedada pelo GitHub. Para ver exemplos de sintaxe que usam outros executores, confira "<a href="/actions/reference/workflow-syntax-for-github-actions#jobsjob_idruns-on">Sintaxe de fluxo de trabalho do {% data variables.product.prodname_actions %}</a>".
</td>
</tr>
<tr>
<td>

  ```yaml
    steps:
  ```
</td>
<td>
Agrupa todas as etapas que são executadas no trabalho <code>check-bats-version</code>. Cada item aninhado nesta seção é uma ação separada ou script do shell.
</td>
</tr>
<tr>
<td>

  ```yaml
      - uses: {% data reusables.actions.action-checkout %}
  ```
</td>
<td>
A palavra-chave <code>uses</code> especifica que esta etapa executará <code>v3</code> da ação <code>actions/checkout</code>. Esta é uma ação que faz o check-out do seu repositório para o executor, permitindo que você execute scripts ou outras ações com base no seu código (como ferramentas de compilação e teste). Você deve usar a ação de checkout sempre que o fluxo de trabalho for executado no código do repositório.
</td>
</tr>
<tr>
<td>

  ```yaml
      - uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: '14'
  ```
</td>
<td>
Esta etapa usa a ação <code>{% data reusables.actions.action-setup-node %}</code> para instalar a versão especificada do Node.js (este exemplo usa a v14). Isso insere os comandos <code>node</code> e <code>npm</code> no <code>PATH</code>.
</td>
</tr>
<tr>
<td>

  ```yaml
      - run: npm install -g bats
  ```
</td>
<td>
A palavra-chave <code>run</code> instrui o trabalho a executar um comando no executor. Nesse caso, você está usando <code>npm</code> para instalar o pacote de teste de software <code>bats</code>.
</td>
</tr>
<tr>
<td>

  ```yaml
      - run: bats -v
  ```
</td>
<td>
Por fim, você executará o comando <code>bats</code> com um parâmetro que gera a versão do software.
</td>
</tr>
</table>

### Visualizar o arquivo de fluxo de trabalho

Neste diagrama, você pode ver o arquivo de fluxo de trabalho que acabou de criar e como os componentes de {% data variables.product.prodname_actions %} estão organizados em uma hierarquia. Cada etapa executa uma única ação ou script do shell. As etapas 1 e 2 executam ações, enquanto as etapas 3 e 4 executam scripts de shell. Para encontrar mais ações predefinidas para seus fluxos de trabalho, confira "[Como localizar e personalizar ações](/actions/learn-github-actions/finding-and-customizing-actions)".

![Visão geral do fluxo de trabalho](/assets/images/help/images/overview-actions-event.png)

## Exibir a atividade para uma execução de fluxo de trabalho

Quando seu fluxo de trabalho é acionado, é criada uma _execução de fluxo de trabalho_ que executa o fluxo de trabalho. Após o início de uma execução de fluxo de trabalho, você pode ver um gráfico de visualização do progresso da execução e visualizar a atividade de cada etapa em {% data variables.product.prodname_dotcom %}.

{% data reusables.repositories.navigate-to-repo %}
1. Abaixo do nome do seu repositório, clique em **Ações**.

   ![Acesse o repositório](/assets/images/help/images/learn-github-actions-repository.png)
1. Na barra lateral esquerda, clique no fluxo de trabalho que deseja ver.

   ![Captura de tela dos resultados do fluxo de trabalho](/assets/images/help/images/learn-github-actions-workflow.png)
1. Em "Execuções do fluxo de trabalho", clique no nome da execução que você deseja ver.

   ![Captura de tela das execuções do fluxo de trabalho](/assets/images/help/images/learn-github-actions-run.png)
1. Em **Trabalhos** ou no grafo de visualização, clique no trabalho que deseja ver.

   ![Selecionar trabalho](/assets/images/help/images/overview-actions-result-navigate.png)
1. Exiba os resultados detalhados de cada etapa.

   ![Captura de tela dos detalhes de execução do fluxo de trabalho](/assets/images/help/images/overview-actions-result-updated-2.png)
