---
title: Procurar e personalizar ações
shortTitle: Procurar e personalizar ações
intro: 'Ações são os blocos de construção que alimentam seu fluxo de trabalho. Um fluxo de trabalho pode conter ações criadas pela comunidade, ou você pode criar suas próprias ações diretamente no repositório do seu aplicativo. Este guia mostrará como descobrir, usar e personalizar ações.'
redirect_from:
  - /actions/automating-your-workflow-with-github-actions/using-github-marketplace-actions
  - /actions/automating-your-workflow-with-github-actions/using-actions-from-github-marketplace-in-your-workflow
  - /actions/getting-started-with-github-actions/using-actions-from-github-marketplace
  - /actions/getting-started-with-github-actions/using-community-workflows-and-actions
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
type: 'how_to'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Visão Geral

As ações que você usa no seu fluxo de trabalho podem ser definidas em:

- Um repositório público
- O mesmo repositório onde o arquivo do fluxo de trabalho faz referência à ação
- Uma imagem publicada do contêiner Docker no Docker Hub

{% data variables.product.prodname_marketplace %} é um local central para você encontrar ações criadas pela comunidade {% data variables.product.prodname_dotcom %}. [A páginade {% data variables.product.prodname_marketplace %}](https://github.com/marketplace/actions/) permite filtrar para ações por categoria.

{% data reusables.actions.enterprise-marketplace-actions %}

### Navegação nas ações do Marketplace no editor de fluxo de trabalho

Você pode pesquisar ações diretamente no seu editor do seu fluxo de trabalho do repositório. Na barra lateral, você pode pesquisar uma ação específica, visualizar ações em destaque e pesquisar categorias em destaque. Você também pode visualizar o número de estrelas que uma ação recebeu da comunidade {% data variables.product.prodname_dotcom %}.

1. No seu repositório, pesquise o arquivo do fluxo de trabalho que você deseja editar.
1. No canto superior direito da vista do arquivo, clique em {% octicon "pencil" aria-label="The edit icon" %} para abrir o editor do fluxo de trabalho. ![Edite o botão do arquivo do fluxo de trabalho](/assets/images/help/repository/actions-edit-workflow-file.png)
1. No lado direito do editor, use a barra lateral {% data variables.product.prodname_marketplace %} para procurar ações. As ações com o selo de {% octicon "verified" aria-label="The verified badge" %} indicam que {% data variables.product.prodname_dotcom %} verificou o criador da ação como uma organização parceira. ![Barra lateral do fluxo de trabalho do Marketplace](/assets/images/help/repository/actions-marketplace-sidebar.png)

### Adicionar uma ação ao seu fluxo de trabalho

Uma página de lista de ações incluem a versão da ação e a sintaxe do fluxo de trabalho necessárias para usar a ação. Para manter seu fluxo de trabalho estável mesmo quando atualizações são feitas em uma ação, você pode fazer referência à versão da ação a ser usada especificando o Git ou da tag do Docker no arquivo de fluxo de trabalho.

1. Navegue para a ação que você deseja usar no seu fluxo de trabalho.
1. Em "Instalação", clique em {% octicon "clippy" aria-label="The edit icon" %} para copiar a sintaxe do fluxo de trabalho. ![Visualizar lista de ação](/assets/images/help/repository/actions-sidebar-detailed-view.png)
1. Cole a sintaxe como uma nova etapa no seu fluxo de trabalho. Para obter mais informações, consulte a sintaxe "[ para {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idsteps)."
1. Se a ação exigir que você forneça entradas, defina-as no seu fluxo de trabalho. Para obter informações sobre entradas uma ação pode exigir, consulte "[Usar entradas e saídas com uma ação](/actions/learn-github-actions/finding-and-customizing-actions#using-inputs-and-outputs-with-an-action)".

{% if currentVersion == "free-pro-team@latest" %}

{% data reusables.dependabot.version-updates-for-actions %}

{% endif %}

### Usar o gerenciamento de versões para suas ações personalizadas

Os criadores de uma ação da comunidade têm a opção de usar tags, branches ou valores do SHA para gerenciar as versçoes da ação. Semelhante a qualquer dependência, você deve indicar a versão da ação que gostaria de usar com para o seu conforto para aceitar automaticamente as atualizações da ação.

Você irá designar a versão da ação no seu arquivo de fluxo de trabalho. Verifique a documentação da ação para informações sobre suas abordagens de gerenciamento de versões e para ver qual tag, branch ou valor de SHA usar.

#### Usar tags

As tags são úteis para permitir que você decida quando alternar entre versões maiores e menores, mas estas são mais efêmeras e podem ser movidas ou excluídas pelo mantenedor. Este exemplo demonstra como direcionar uma ação que foi marcada como `v1.0.1`:

```yaml
etapas:
    - usa: actions/javascript-action@v1.0.1
```

#### Usar SHAs

Se você precisar de uma versão mais confiável, você deverá usar o valor de SHA associado à versão da ação. Os SHAs são imutáveis e, portanto, mais confiáveis que tags ou branches. No entanto, esta abordagem significa que você não receberá automaticamente atualizações de uma ação, incluindo correções de erros importantes e atualizações de segurança. Este exemplo tem como alvo a ação do SHA:

```yaml
etapas:
    - usa: actions/javascript-action@172239021f7ba04fe7327647b213799853a9eb89
```

#### Usar branches

Especificar um branch de destino para a ação significa que ele sempre irá executar a versão atualmente nesse branch. Essa abordagem pode criar problemas se uma atualização do branch incluir mudanças significativas. Este exemplo é direcionado a um branch denominado `@main`:

```yaml
steps:
    - uses: actions/javascript-action@main
```

Para obter mais informações, consulte "[Usar o gerenciamento de versões para ações](/actions/creating-actions/about-actions#using-release-management-for-actions)".

### Usar entradas e saídas com uma ação

Uma ação geralmente aceita ou exige entradas e gera saídas que você pode usar. Por exemplo, uma ação pode exigir que você especifique um caminho para um arquivo, o nome de uma etiqueta ou outros dados que usará como parte do processamento da ação.

Para ver as entradas e saídas de uma ação, verifique a `action.yml` ou `action.yaml` no diretório-raiz do repositório.

Neste exemplo `action.yml`, a palavra-chave `entradas` define uma entrada obrigatória denominada `file-path` e inclui um valor-padrão que será usado, caso nenhum valor seja especificado. A palavra-chave `saídas` define uma saída denominada `results-file`, que diz onde localizar os resultados.

```yaml
name: 'Example'
description: 'Receives file and generates output'
inputs:
  file-path:  # id of input
    description: "Path to test script"
    required: true
    default: 'test-file.js'
outputs:
  results-file: # id of output
    description: "Path to results file"
```

### Referenciando uma ação no mesmo repositório onde um arquivo de fluxo de trabalho usa a ação

Se uma ação for definida no mesmo repositório onde seu arquivo de fluxo de trabalho usa a ação, você pode referenciar a ação com o`{owner}/{repo}@{ref}` ou `./path/to/dir` sintaxe no seu arquivo de fluxo de trabalho.

Estrutura de arquivos do repositório de exemplo:

```
|-- Hello-world (repositório)
|   |__ .github
|       fluxos de trabalho └sadessa
|           └➤➤ my-first-workflow.yml
|       ações └➤➤
|           |__ Hello-world-action
|               └➤➤ ação.yml
```

Arquivo de fluxo de trabalho de exemplo:

```yaml
empregos:
  construir:
    runs-on: ubuntu-latest
    passos:
      # Esta etapa confere uma cópia do seu repositório.
      - usa: ações/checkout@v2
      # Esta etapa faz referência ao diretório que contém a ação.
      - usa: ./.github/actions/hello-world-action
```

O arquivo `action.yml` é usado para fornecer metadados para a ação. Saiba mais sobre o conteúdo deste arquivo em "[Sintaxe de metadados para o GitHub Actions](/actions/creating-actions/metadata-syntax-for-github-actions)"

### Referenciando um contêiner no Docker Hub

Se uma ação for definida em uma imagem de contêiner Docker publicada no Docker Hub, você deve fazer referência à ação com o `docker://{image}:{tag}` sintaxe em seu arquivo de fluxo de trabalho. Para proteger seu código e dados, recomendamos fortemente que verifique a integridade da imagem do contêiner Docker do Docker Hub antes de usá-la em seu fluxo de trabalho.

```yaml
empregos:
  my_first_job:
    passos:
      - nome: Meu primeiro passo
        usa: docker://alpine:3.8
```

Para ver alguns exemplos de ações do Docker, consulte o [Fluxo de trabalho Docker-image.yml](https://github.com/actions/starter-workflows/blob/main/ci/docker-image.yml) e "[Criar uma ação de contêiner do Docker](/articles/creating-a-docker-container-action)."

### Próximas etapas

Para continuar aprendendo mais sobre {% data variables.product.prodname_actions %}, consulte "[Recursos essenciais de {% data variables.product.prodname_actions %}](/actions/learn-github-actions/essential-features-of-github-actions)".
