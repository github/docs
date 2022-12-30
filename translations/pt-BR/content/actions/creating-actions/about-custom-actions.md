---
title: Sobre ações personalizadas
intro: 'As ações são tarefas individuais que podem ser combinadas para criar trabalhos e personalizar seu fluxo de trabalho. Você pode criar suas próprias ações ou usar e personalizar ações compartilhadas pela comunidade {% data variables.product.prodname_dotcom %}.'
redirect_from:
  - /articles/about-actions
  - /github/automating-your-workflow-with-github-actions/about-actions
  - /actions/automating-your-workflow-with-github-actions/about-actions
  - /actions/building-actions/about-actions
  - /actions/creating-actions/about-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Action development
  - Fundamentals
ms.openlocfilehash: 1e81bea551ceff1980b0bbe96202f60db0d0e7f2
ms.sourcegitcommit: 9af8891fea10039b3374c76818634e05410e349d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 12/06/2022
ms.locfileid: '148191940'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Sobre ações personalizadas

Você pode criar ações gravando códigos personalizados que interajam com o seu repositório da maneira que você quiser, inclusive fazendo integrações com as APIs do {% data variables.product.prodname_dotcom %} e qualquer API de terceiros disponível publicamente. Por exemplo, uma ação pode publicar módulos npm, enviar alertas de SMS quando problemas urgentes surgirem ou implantar o código pronto para produção.

{% ifversion fpt or ghec %} Você pode escrever suas ações para usá-las no fluxo de trabalho ou compartilhar as ações criadas com a comunidade do {% data variables.product.prodname_dotcom %}. Para compartilhar as ações que você criou com todas as pessoas, seu repositório deve ser público. {% ifversion internal-actions %}Para compartilhar ações somente na sua empresa, o repositório precisa ser interno.{% endif %} {% endif %}

As ações podem ser executadas diretamente em uma máquina ou em um contêiner Docker. É possível definir as entradas, saídas e variáveis do ambiente de uma ação.

## Tipos de ações

Você pode criar um contêiner do Docker, JavaScript e ações compostas. As ações exigem um arquivo de metadados para a definição de entradas, saídas e ponto de entrada principal para sua ação. O nome de arquivo de metadados precisa ser `action.yml` ou `action.yaml`. Para obter mais informações, confira "[Sintaxe de metadados do {% data variables.product.prodname_actions %}](/articles/metadata-syntax-for-github-actions)".

| Tipo | Sistema operacional |
| ---- | ------------------- |
| Contêiner do Docker | Linux |
| JavaScript | Linux, macOS, Windows |
| Ações compostas | Linux, macOS, Windows |

### Ações de contêiner do Docker

Os contêineres Docker criam um pacote do ambiente com o código {% data variables.product.prodname_actions %}. Esse procedimento cria uma unidade de trabalho mais consistente e confiável, pois o consumidor da ação não precisa se preocupar com ferramentas ou dependências.

Um contêiner Docker permite usar versões específicas de um sistema operacional, bem como as dependências, as ferramentas e o código. Para ações a serem executadas em uma configuração específica de ambiente, o Docker é a opção ideal porque permite personalizar o sistema operacional e as ferramentas. Por causa da latência para compilar e recuperar o contêiner, as ações de contêiner Docker são mais lentas que as ações JavaScripts.

As ações do contêiner Docker podem apenas ser executadas em executores com o sistema operacional Linux. {% data reusables.actions.self-hosted-runner-reqs-docker %}

### Ações de JavaScript

As ações do JavaScript podem ser executadas diretamente em uma máquina executora e separar o código de ação do ambiente usado para executar o código. Usar ações JavaScript simplifica o código da ação e é um processo mais rápido se comparado à opção do contêiner Docker.

{% data reusables.actions.pure-javascript %}

Se você estiver desenvolvendo um projeto Node.js, o kit de ferramentas {% data variables.product.prodname_actions %} fornecerá pacotes que você poderá usar para acelerar o desenvolvimento. Para obter mais informações, confira o repositório [actions/toolkit](https://github.com/actions/toolkit).

### Ações compostas

Uma ação _composta_ permite combinar várias etapas de fluxo de trabalho em uma ação. Por exemplo, você pode usar esse recurso para juntar vários comandos executando em uma ação e, em seguida, ter um fluxo de trabalho que executa os comandos empacotados como uma única etapa usando essa ação. Para ver um exemplo, confira "[Como criar uma ação composta](/actions/creating-actions/creating-a-composite-action)".

## Definir o local da ação

Se você estiver desenvolvendo uma ação a ser usada por outras pessoas, recomendamos manter a ação no próprio repositório em vez de criar um pacote dela com outro código de aplicativo. Assim, você poderá controlar as versões e monitorar a ação como qualquer outro software.

{% ifversion fpt or ghec %} Armazenar uma ação no seu repositório facilita para a comunidade do {% data variables.product.prodname_dotcom %} descobrir a ação, restringe o escopo da base de código aos desenvolvedores que corrigem problemas e estendem a ação, além de separar o controle de versão da ação do controle de versão de outro código do aplicativo.
{% endif %}

{% data reusables.actions.internal-actions-summary %}

{% ifversion fpt or ghec %}Se você estiver criando uma ação que não planeja disponibilizar para outras pessoas, você {% else %} Você{% endif %} pode armazenar os arquivos de ação em qualquer local do seu repositório. Se você pretende combinar a ação, o fluxo de trabalho e o código do aplicativo em um só repositório, recomendamos armazenar a ação no diretório `.github`. Por exemplo, `.github/actions/action-a` e `.github/actions/action-b`.

## Compatibilidade com {% data variables.product.prodname_ghe_server %}

Para garantir que sua ação seja compatível com {% data variables.product.prodname_ghe_server %}, você deve certificar-se de que não usa nenhuma referência codificada para {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} as URLs da API. Você deve usar variáveis de ambiente para referir-se à API de {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}:

- Para a API REST, use a variável de ambiente `GITHUB_API_URL`.
- Para o GraphQL, use a variável de ambiente `GITHUB_GRAPHQL_URL`.

Para obter mais informações, confira "[Variáveis de ambiente padrão](/actions/configuring-and-managing-workflows/using-environment-variables#default-environment-variables)".

## Usando gerenciamento de versão em ações

Esta seção explica como você pode usar o gerenciamento de versões para distribuir atualizações nas suas ações de forma previsível.

### Práticas recomendadas para gerenciamento de versões

Se você estiver desenvolvendo uma ação para outras pessoas usarem, recomendamos que você use o gerenciamento de versão para controlar como você distribui as atualizações. Os usuários podem esperar que a versão de patch de uma ação inclua os pachtes de segurança e as correções críticas necessárias, mas permaneça compatível com os fluxos de trabalho existentes. Você deve considerar lançar uma nova versão principal sempre que as suas alterações afetarem a compatibilidade.

Nessa abordagem de gerenciamento de versão, os usuários não devem fazer referência ao branch-padrão da ação, uma vez que é provável que contenha o último código e, consequentemente, pode ser instável. Em vez disso, você pode recomendar que os usuários especifiquem uma versão principal ao usar a sua ação e direcioná-los para uma versão mais específica somente se encontrarem problemas.

Para usar uma versão de ação específica, os usuários podem configurar seu fluxo de trabalho{% data variables.product.prodname_actions %} para atingir uma tag, um SHA do commit ou um branch nomeado para uma versão.

### Usar tags para o gerenciamento de versão

Recomendamos o uso de tags para gerenciamento da versão de ações. Ao usar essa abordagem, os seus usuários poderão distinguir facilmente as versões principais e não principais:

- Crie e valide uma versão em uma ramificação de versão (como `release/v1`) antes de criar a marcação de versão (por exemplo, `v1.0.2`).
- Criar uma versão usando uma versão semântica. Para obter mais informações, confira "[Como criar versões](/articles/creating-releases)".
- Mova a marcação de versão principal (como `v1`, `v2`) a fim de apontar para a referência do Git da versão atual. Para obter mais informações, confira "[Noções básicas do Git – Marcação](https://git-scm.com/book/en/v2/Git-Basics-Tagging)".
- Introduza uma nova marca de versão principal (`v2`) para alterações que interromperão os fluxos de trabalho existentes. Por exemplo, mudar as entradas de uma ação seria uma alteração relevante.
- As versões principais podem ser lançadas inicialmente com uma tag `beta` para indicar o status, por exemplo, `v2-beta`. Em seguida, a tag `-beta` poderá ser removida quando estiver pronta.

Este exemplo demonstra como um usuário pode fazer referência a uma tag da versão principal:

```yaml
steps:
    - uses: actions/javascript-action@v1
```

Este exemplo demonstra como um usuário pode fazer referência a uma tag da versão do patch:

```yaml
steps:
    - uses: actions/javascript-action@v1.0.1
```

### Usar branches para gerenciamento de versão

Se você preferir usar nomes de branch para gerenciamento de versão, este exemplo irá demonstrar como fazer referência a um branch nomeado:

```yaml
steps:
    - uses: actions/javascript-action@v1-beta
```

### Usar um SHA do commit para o gerenciamento de versão

Cada commit do Git recebe um valor SHA calculado, que é único e imutável. Os usuários da sua ação podem preferir depender de um valor SHA do commit, uma vez que esta abordagem pode ser mais confiável do que especificar uma tag, que pode ser excluída ou movida. No entanto, isso significa que os usuários não receberão mais atualizações realizadas na ação. Você deve usar o valor SHA completo de um commit e não um valor abreviado.

```yaml
steps:
    - uses: actions/javascript-action@172239021f7ba04fe7327647b213799853a9eb89
```

## Criar um arquivo README para a ação

Se você planeja compartilhar sua ação publicamente, é recomendável criar um arquivo README para ajudar as pessoas a saberem como usar a ação. Você pode incluir estas informações no `README.md`:

- Descrição detalhada do que a ação faz;
- Argumentos obrigatórios de entrada e saída;
- Argumentos opcionais de entrada e saída;
- Segredos usados pela ação;
- Variáveis de ambiente usadas pela ação;
- Um exemplo de uso da ação no fluxo de trabalho.

## Comparando {% data variables.product.prodname_actions %} com {% data variables.product.prodname_github_apps %}

{% data variables.product.prodname_marketplace %} oferece ferramentas para melhorar o seu fluxo de trabalho. Entender as diferenças e os benefícios de cada ferramenta ajudará você a selecionar a melhor ferramenta para o seu trabalho. Para obter mais informações sobre como criar aplicativos, confira "[Sobre os aplicativos](/apps/about-apps/)".

### Vantagens do GitHub Actions e dos aplicativos GitHub

Embora {% data variables.product.prodname_actions %} e {% data variables.product.prodname_github_apps %} forneçam maneiras de criar automação e ferramentas de fluxo de trabalho, cada um tem pontos fortes que os tornam úteis de maneiras diferentes.

{% data variables.product.prodname_github_apps %}:
* Executa, de modo persistente, e pode reagir a eventos rapidamente.
* Funciona bem quando são necessários dados persistentes.
* Funciona da forma ideal quando as solicitações de API não são demoradas.
* Executa na infraestrutura de um servidor ou computador que você fornecer.

{% data variables.product.prodname_actions %}:
* Fornece automação que pode realizar integração contínua e implementação contínua.
* Pode ser executado diretamente em máquinas executoras em em contêineres do Docker.
* Pode incluir acesso a um clone do seu repositório, habilitando a implementação e as ferramentas de publicação, formatadores de código e as ferramentas da linha de comando para acessar o seu código.
* Não requer que você implemente o código ou sirva a um aplicativo.
* Tem uma interface simples para criar e usar segredos, que habilitam ações para interagir com serviços de terceiros sem a necessidade de armazenar as credenciais da pessoa que usa a ação.

## Leitura adicional

- "[Ferramentas de desenvolvimento do {% data variables.product.prodname_actions %}](/articles/development-tools-for-github-actions)"
