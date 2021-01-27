---
title: Sobre ações
intro: 'Ações são tarefas individuais que você pode combinar para criar trabalhos e personalizar o seu fluxo de trabalho. Você pode criar suas próprias ações ou usar e personalizar ações compartilhadas pela comunidade {% data variables.product.prodname_dotcom %}.'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /articles/about-actions
  - /github/automating-your-workflow-with-github-actions/about-actions
  - /actions/automating-your-workflow-with-github-actions/about-actions
  - /actions/building-actions/about-actions
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
type: 'overview'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Sobre ações

Você pode criar ações gravando códigos personalizados que interajam com o seu repositório da maneira que você quiser, inclusive fazendo integrações com as APIs do {% data variables.product.prodname_dotcom %} e qualquer API de terceiros disponível publicamente. Por exemplo, as ações podem publicar módulos npm, enviar alertas SMS quando problemas urgentes forem criados ou implantar códigos prontos para produção.

{% if currentVersion == "free-pro-team@latest" %}
Você pode escrever suas próprias ações para usar no seu fluxo de trabalho ou compartilhar as ações que você cria com a
comunidade de {% data variables.product.prodname_dotcom %}. Para compartilhar as ações que você compilou, seu repositório deve ser público.
{% endif %}

As ações podem ser executadas diretamente em uma máquina ou em um contêiner Docker. É possível definir as entradas, saídas e variáveis do ambiente de uma ação.

### Tipos de ação

Você pode compilar ações do contêiner Docker e JavaScript. As ações exigem um arquivo de metadados para a definição de entradas, saídas e ponto de entrada principal para sua ação. O nome do arquivo dos metadados deve ser `action.yml` ou `action.yaml`. Para obter mais informações, consulte "[Sintaxe de metadados para o {% data variables.product.prodname_actions %}](/articles/metadata-syntax-for-github-actions)".

| Tipo                         | Sistema operacional   |
| ---------------------------- | --------------------- |
| Contêiner Docker             | Linux                 |
| JavaScript                   | Linux, macOS, Windows |
| Etapas de execução compostas | Linux, macOS, Windows |

#### Ações de contêiner docker

Os contêineres Docker criam um pacote do ambiente com o código {% data variables.product.prodname_actions %}. Esse procedimento cria uma unidade de trabalho mais consistente e confiável, pois o consumidor da ação não precisa se preocupar com ferramentas ou dependências.

Um contêiner Docker permite usar versões específicas de um sistema operacional, bem como as dependências, as ferramentas e o código. Para ações a serem executadas em uma configuração específica de ambiente, o Docker é a opção ideal porque permite personalizar o sistema operacional e as ferramentas. Por causa da latência para compilar e recuperar o contêiner, as ações de contêiner Docker são mais lentas que as ações JavaScripts.

As ações do contêiner Docker podem apenas ser executadas em executores com o sistema operacional Linux. {% data reusables.github-actions.self-hosted-runner-reqs-docker %}

#### Ações JavaScript

As ações do JavaScript podem ser executadas diretamente em uma máquina executora e separar o código de ação do ambiente usado para executar o código. Usar ações JavaScript simplifica o código da ação e é um processo mais rápido se comparado à opção do contêiner Docker.

{% data reusables.github-actions.pure-javascript %}

Se você estiver desenvolvendo um projeto Node.js, o kit de ferramentas {% data variables.product.prodname_actions %} fornecerá pacotes que você poderá usar para acelerar o desenvolvimento. Para obter mais informações, consulte o repositório [ações/conjuntos de ferramentas](https://github.com/actions/toolkit).

#### Ações de etapas de execução composta

Uma ação de _etapas de execução compostas_ permite que você combine várias etapas de execução de fluxo de trabalho em uma ação. Por exemplo, você pode usar esse recurso para juntar vários comandos executando em uma ação e, em seguida, ter um fluxo de trabalho que executa os comandos empacotados uma única etapa usando essa ação. Para ver um exemplo, consulte "[Criar uma ação de etapas de execução compostas](/actions/creating-actions/creating-a-composite-run-steps-action).

### Definir o local da ação

Se você estiver desenvolvendo uma ação a ser usada por outras pessoas, recomendamos manter a ação no próprio repositório em vez de criar um pacote dela com outro código de aplicativo. Assim, você poderá controlar as versões e monitorar a ação como qualquer outro software.

{% if currentVersion == "free-pro-team@latest" %}
Armazenar uma ação no seu próprio repositório torna mais fácil para a
comunidade de {% data variables.product.prodname_dotcom %} descobrir a ação, reduz o escopo da base de código para desenvolvedores que corrigem problemas e estendem a ação e desdobra o versionamento da ação do controle de outro código do aplicativo.
{% endif %}

{% if currentVersion == "free-pro-team@latest" %}Se você estiver criando uma ação que não planeja disponibilizar ao público, você {% else %} Você{% endif %} pode armazenar os arquivos de ação em qualquer local do seu repositório. Se você planeja combinar ação, fluxo de trabalho e aplicativo em um só repositório, recomendamos armazenar as ações no diretório `.github`. Por exemplo, `.github/actions/action-a` e `.github/actions/action-b`.

### Usar o gerenciamento da versão para ações

Para garantir que sua ação seja compatível com {% data variables.product.prodname_ghe_server %}, você deve se certificar de que você não usa quaisquer referências codificadas para URLs da API de {% data variables.product.prodname_dotcom %}. Em vez disso, você deve usar variáveis de ambiente para referir-se à API de {% data variables.product.prodname_dotcom %}:

- Crie e valide uma versão em um branch da versão (como a `versão/v1`) antes de criar a tag da versão (por exemplo, `v1.0.2`).
- Para GraphQL, use a variável ambiente `GITHUB_GRAPHQL_URL` .

Para obter mais informações, consulte "[Variáveis de ambiente padrão](/actions/configuring-and-managing-workflows/using-environment-variables#default-environment-variables)".

### Usar o gerenciamento da versão para ações

Esta seção explica como você pode usar o gerenciamento de versões para distribuir atualizações nas suas ações de forma previsível.

#### Práticas recomendadas para gerenciamento de versões

Se você estiver desenvolvendo uma ação para outras pessoas usarem, recomendamos que você use o gerenciamento de versão para controlar como você distribui as atualizações. Os usuários podem esperar que a versão principal de uma ação inclua as correções críticas necessárias e os pachtes ao mesmo tempo em que permanece compatível com seus fluxos de trabalho existentes. Você deve considerar lançar uma nova versão principal sempre que as suas alterações afetarem a compatibilidade.

Nessa abordagem de gerenciamento de versão, os usuários não devem fazer referência ao branch-padrão da ação, uma vez que é provável que contenha o último código e, consequentemente, pode ser instável. Em vez disso, você pode recomendar que os usuários especifiquem uma versão principal ao usar a sua ação e direcioná-los para uma versão mais específica somente se encontrarem problemas.

Para usar uma versão de ação específica, os usuários podem configurar seu fluxo de trabalho{% data variables.product.prodname_actions %} para atingir uma tag, um SHA do commit ou um branch nomeado para uma versão.

#### Usar tags para o gerenciamento de versão

Recomendamos o uso de tags para gerenciamento da versão de ações. Ao usar essa abordagem, os seus usuários poderão distinguir facilmente as versões principais e não principais:

- Crie e valide uma versão em um branch da versão (como a `versão/v1`) antes de criar a tag da versão (por exemplo, `v1.0.2`).
- Criar uma versão usando uma versão semântica. Para obter mais informações, consulte "[Criar versões](/articles/creating-releases)".
- Mova a tag da versão principal (como `v1`, `v2`) para apontar para o ref do Git da versão atual. Para obter mais informações, consulte "[Fundamentos do Git - tags](https://git-scm.com/book/en/v2/Git-Basics-Tagging)".
- Introduza uma nova tag da versão principal (`v2`) para alterações que quebrarão os fluxos de trabalho existentes. Por exemplo, mudar as entradas de uma ação seria uma alteração relevante.
- As versões principais podem ser lançadas inicialmente com uma tag `beta` para indicar seu status, como, por exemplo, `v2-beta`. Em seguida, a tag `-beta` poderá ser removida quando estiver pronta.

Este exemplo demonstra como um usuário pode fazer referência a uma tag da versão principal:

```yaml
etapas:
    - usa: actions/javascript-action@v1
```

Este exemplo demonstra como um usuário pode fazer referência a uma tag da versão do patch:

```yaml
etapas:
    - usa: actions/javascript-action@v1.0.1
```

#### Usar branches para gerenciamento de versão

Se você preferir usar nomes de branch para gerenciamento de versão, este exemplo irá demonstrar como fazer referência a um branch nomeado:

```yaml
etapas:
    - usa: actions/javascript-action@v1-beta
```

#### Usar um SHA do commit para o gerenciamento de versão

Cada commit do Git recebe um valor SHA calculado, que é único e imutável. Os usuários da sua ação podem preferir depender de um valor SHA do commit, uma vez que esta abordagem pode ser mais confiável do que especificar uma tag, que pode ser excluída ou movida. No entanto, isso significa que os usuários não receberão mais atualizações realizadas na ação. Usar um valor integral SHA do commit em vez de um valor abreviado pode ajudar a impedir que as pessoas usem um commit malicioso que use a mesma abreviatura.

```yaml
etapas:
    - usa: actions/javascript-action@172239021f7ba04fe7327647b213799853a9eb89
```

### Criar um arquivo README para a ação

Se você planeja compartilhar sua ação publicamente, é recomendável criar um arquivo LEIAME para ajudar as pessoas a saberem como usar a ação. Você pode incluir as informações abaixo no seu `LEIAME.md`:

- Descrição detalhada do que a ação faz;
- Argumentos obrigatórios de entrada e saída;
- Argumentos opcionais de entrada e saída;
- Segredos usados pela ação;
- Variáveis de ambiente usadas pela ação;
- Um exemplo de uso da ação no fluxo de trabalho.

### Comparando {% data variables.product.prodname_actions %} com {% data variables.product.prodname_github_apps %}

{% data variables.product.prodname_marketplace %} oferece ferramentas para melhorar o seu fluxo de trabalho. Entender as diferenças e os benefícios de cada ferramenta ajudará você a selecionar a melhor ferramenta para o seu trabalho. Para obter mais informações sobre a criação de aplicativos, consulte "[Sobre aplicativos](/apps/about-apps/)".

#### Vantagens do GitHub Actions e dos aplicativos GitHub

Embora tanto {% data variables.product.prodname_actions %} quanto {% data variables.product.prodname_github_app %} forneçam formas de criar automação e ferramentas de fluxo de trabalho, cada um tem vantagens que os torna úteis de formas diferentes.

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

### Leia mais

- [Ferramentas de desenvolvimento para o {% data variables.product.prodname_actions %}](/articles/development-tools-for-github-actions)
