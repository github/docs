---
title: Sintaxe de metadados para o GitHub Actions
shortTitle: Sintaxe dos metadados
intro: Você pode criar ações para executar tarefas no repositório. As ações requerem um arquivo de metadados que usa sintaxe YAML.
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /articles/metadata-syntax-for-github-actions
  - /github/automating-your-workflow-with-github-actions/metadata-syntax-for-github-actions
  - /actions/automating-your-workflow-with-github-actions/metadata-syntax-for-github-actions
  - /actions/building-actions/metadata-syntax-for-github-actions
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Sobre sintaxe YAML para o {% data variables.product.prodname_actions %}

Ações Docker e JavaScript requerem um arquivo de metadados. O nome do arquivo dos metadados deve ser `action.yml` ou `action.yaml`. Os dados no arquivo de metadados definem as entradas, as saídas e o ponto de entrada principal para sua ação.

Arquivos de metadados de ação usam a sintaxe YAML. Se você não souber o que é YAML, consulte "[Aprender a usar YAML em cinco minutos](https://www.codeproject.com/Articles/1214409/Learn-YAML-in-five-minutes)".

### **`name`**

**Necessário**: nome de sua ação. O {% data variables.product.prodname_dotcom %} exibe o `name` (nome) na aba **Actions** (Ações) para facilitar a identificação visual das ações em cada trabalho.

### **`autor`**

**Opcional**: nome do autor da ação.

### **`descrição`**

**Necessário**: uma descrição curta da ação.

### **`inputs`**

**Opcional**: parâmetros de entrada permitem que você especifique os dados que a ação espera usar no momento da execução. O {% data variables.product.prodname_dotcom %} armazena parâmetros como variáveis de ambiente. Identificações de entrada com letras maiúsculas são alteradas para letras minúsculas no momento da execução. Recomenda-se usar identificações de entrada com letras minúsculas.

#### Exemplo

Este exemplo configura duas entradas: numOctocats e octocatEyeColor. A entrada numOctocats não é necessária e assumirá o valor '1'. A entrada octocatEyeColor é necessária e não tem valor padrão. Arquivos de fluxo de trabalho que usam essa ação devem usar a palavra-chave `with` (com) para definir um valor de entrada para octocatEyeColor. Para obter mais informações sobre a sintaxe `with` (com), consulte "[Sintaxe de fluxo de trabalho para o {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions/#jobsjob_idstepswith)".

```yaml
inputs:
  numOctocats:
    description: 'Number of Octocats'
    required: false
    default: '1'
  octocatEyeColor:
    description: 'Eye color of the Octocats'
    required: true
```

Quando você especifica uma entrada para uma ação em um arquivo de fluxo de trabalho ou usa um valor de entrada padrão, o {% data variables.product.prodname_dotcom %} cria uma variável de ambiente para a entrada com o nome `INPUT_<VARIABLE_NAME>`. A variável de ambiente criada altera os nomes de entrada para letras maiúsculas e substitui espaços por caracteres `_`.

Por exemplo, se um fluxo de trabalho definiu as entradas numOctocats e octocatEyeColor, o código da ação lê os valores das entradas usando as variáveis de ambiente `INPUT_NUMOCTOCATS` e `INPUT_OCTOCATEYECOLOR`.

#### **`inputs.<input_id>`**

**Necessário**: um identificador `string` para associar à entrada. O valor de `<input_id>` é um mapa dos metadados da entrada. `<input_id>` deve ser um identificador único dentro do objeto `inputs` (entradas). `<input_id>` deve iniciar com uma letra ou `_` e conter somente caracteres alfanuméricos, `-` ou `_`.

#### **`inputs.<input_id>.description`**

**Necessário**: descrição de `string` do parâmetro de entrada.

#### **`inputs.<input_id>.required`**

**Necessário**: um `boolean` (booleano) para indicar se a ação requer o parâmetro de entrada. Defina para `true` quando o parâmetro for necessário.

#### **`inputs.<input_id>.default`**

**Opcional**: uma `string` que representa o valor padrão. O valor padrão é usado quando um parâmetro de entrada não é especificado em um arquivo de fluxo de trabalho.

### **`outputs (saídas)`**

**Opcional** Os parâmetros de saída permitem que você declare os dados definidos por uma ação. As ações executadas posteriormente em um fluxo de trabalho podem usar os dados de saída definidos em ações executadas anteriormente.  Por exemplo, se uma ação executou a adição de duas entradas (x + y = z), a ação poderia usar o resultado da soma (z) como entrada em outras ações.

Se você não declarar uma saída no seu arquivo de metadados de ação, você ainda poderá definir as saídas e usá-las no seu fluxo de trabalho. Para obter mais informações sobre a definição de saídas em uma ação, consulte "[Comandos do fluxo de trabalho para {% data variables.product.prodname_actions %}](/actions/reference/workflow-commands-for-github-actions/#setting-an-output-parameter)."

#### Exemplo

```yaml
saídas:
  soma: número do ID da saída
    descrição: 'Soma das entradas'
```

#### **`outputs.<output_id>`**

**Necessário**: um identificador `string` para associar à saída. O valor de `<output_id>` é um mapa dos metadados de saída. `<output_id>` deve ser um identificador único dentro do objeto `outputs` (saídas). `<output_id>` deve iniciar com uma letra ou `_` e conter somente caracteres alfanuméricos, `-` ou `_`.

#### **`outputs.<output_id>.description`**

**Necessário**: descrição de `string` do parâmetro de saída.

### **`saídas`** para ações de etapas de execução compostas

As **saídas** `opcionais` usam os mesmos parâmetros que `outputs.<output_id>` e `outputs.<output_id>.description` (veja "[`saídas` para {% data variables.product.prodname_actions %}](/actions/creating-actions/metadata-syntax-for-github-actions#outputs)"), mas também inclui o token do `valor`.

#### Exemplo

{% raw %}
```yaml
outputs:
  random-number: 
    description: "Random number"
    value: ${{ steps.random-number-generator.outputs.random-id }}
runs:
  using: "composite"
  steps: 
    - id: random-number-generator
      run: echo "::set-output name=random-id::$(echo $RANDOM)"
      shell: bash
```
{% endraw %}

#### **`outputs.<output_id.value>`**
**Obrigatório** O valor com o qual o parâmetro de saída será mapeado. Você pode defini-lo como uma `string` ou uma expressão com contexto. Por exemplo, você pode usar o contexto das `etapas` para definir o `valor` de uma saída como o valor de saída de uma etapa.

Para obter mais informações sobre como usar a sintaxe de contexto e expressão, consulte "[Sintaxe de contexto e expressão para {% data variables.product.prodname_actions %}](/actions/reference/context-and-expression-syntax-for-github-actions)".

### **`executa`** para ações JavaScript

**Obrigatório** Configura o caminho para o código da ação e o aplicativo usado para executar o código.

#### Exemplo usando Node.js

```yaml
executa:
  using: 'node12'
  main: 'main.js'
```

#### **`runs.using`**

**Obrigatório** O aplicativo usado para executar o código especificado em [`principal`](#runsmain).

#### **`runs.main`**

**Obrigatório** O arquivo que contém o código da ação. O aplicativo especificado em [`usando`](#runsusing) executa este arquivo.

#### **`pre`**

**Opcional** Permite que você execute um script no início de um trabalho antes de a ação `main:` começar. Por exemplo, você pode usar `pre:` para executar um pré-requisito da configuração do script. O aplicativo especificado com a sintaxe [`using`](#runsusing) executará esse arquivo. A ação `pre:` é sempre executada como padrão, mas você pode substituí-la usando [`pre-if`](#pre-if).

Neste exemplo, a ação `pre:` executa um script denominado `setup.js.`:

```yaml
executa:
  using: 'node12'
  pre: 'setup.js'
  main: 'index.js'
  post: 'cleanup.js'
```

#### **`pre-if`**

**Opcional** Permite que você defina condições para a execução da ação `pre:`. A ação `pre:` será executada apenas se as condições em `pre-if` forem atendidas. Se não forem definidas, o padrão de `pre-if` será `sempre()`. Observe que o contexto da `etapa` está indisponível, uma vez que nenhuma etapa foi executada ainda.

Neste exemplo, o `cleanup.js` é executado apenas nos executores baseados no Linux:

```yaml
  pre: 'cleanup.js'
  pre-if: 'runner.os == linux'
```

#### **`post`**

**Opcional** Permite que você execute um script no final do trabalho, uma vez que a ação `main:` foi finalizada. Por exemplo, você pode usar `post:` para encerrar uns processos ou remover arquivos desnecessários. O aplicativo especificado com a sintaxe [`using`](#runsusing) executará esse arquivo.

Neste exemplo, a ação `post:` executa um script chamado `cleanup.js`:

```yaml
executa:
  using: 'node12'
  main: 'index.js'
  post: 'cleanup.js'
```

A ação `post:` é executada sempre por padrão, mas você pode substituí-la usando `post-if`.

#### **`post-if`**

**Opcional** Permite que você defina condições para a execução da ação `post:`. A ação `post:` só será executada se as condições em `post-if` forem atendidas. Se não forem definidas, o padrão de `post-if` será `sempre()`.

Por exemplo, este `cleanup.js` só será executado em executores baseados no Linux:

```yaml
  post: 'cleanup.js'
  post-if: 'runner.os == linux'
```

### **`executa`** para ações de etapas de execução compostas

**Obrigatório** Configura o caminho para a ação composta, e o aplicativo usado para executar o código.

#### **`runs.using`**

**Obrigatório** Para usar uma ação de etapas de execução compostas, defina como `"composite"`.

#### **`runs.steps`**

**Obrigatório** As etapas de execução que você planeja executar nesta ação.

##### **`runs.steps.run`**

**Obrigatório** O comando que você deseja executar. Isso pode ser inline ou um script no seu repositório de ação:
```yaml
runs:
  using: "composite"
  steps: 
    - run: ${{ github.action_path }}/test/script.sh
      shell: bash
```

Como alternativa, você pode usar `$GITHUB_ACTION_PATH`:

```yaml
runs:
  using: "composite"
  steps: 
    - run: $GITHUB_ACTION_PATH/script.sh
      shell: bash
```

Para obter mais informações, consulte "[`github context`](/actions/reference/context-and-expression-syntax-for-github-actions#github-context)".

##### **`runs.steps.shell`**

**Obrigatório** O shell onde você quer executar o comando. Você pode usar qualquer um dos shells listados [aqui](/actions/reference/workflow-syntax-for-github-actions#using-a-specific-shell).

##### **`runs.steps.name`**

**Opcional** O nome da etapa de execução composta.

##### **`runs.steps.id`**

**Opcional** Um identificador único para a etapa. Você pode usar `id` para fazer referência à etapa em contextos. Para obter mais informações, consulte "[Contexto e sintaxe de expressão para {% data variables.product.prodname_actions %}](/actions/reference/context-and-expression-syntax-for-github-actions)".

##### **`runs.steps.env`**

**Opcional**  Define um `mapa` de variáveis de ambiente apenas para essa etapa. Se você quiser modificar a variável de ambiente armazenada no fluxo de trabalho, use {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2. 2" %}`echo "{name}={value}" >> $GITHUB_ENV`{% else %}`echo "::set-env name={name}::{value}"`{% endif %} em uma etapa de execução composta.

##### **`runs.steps.working-directory`**

**Opcional**  Especifica o diretório de trabalho onde o comando é executado.

### **`é executado`** para ações do Docker

**Obrigatório** Configura a imagem usada para a ação Docker.

#### Exemplos de uso do arquivo Docker no repositório

```yaml
runs: 
  using: 'docker'
  image: 'Dockerfile'
```

#### Exemplo usando um contêiner de registro Docker público

```yaml
runs: 
  using: 'docker'
  image: 'docker://debian:stretch-slim'
```

#### **`runs.using`**

**Obrigatório** Você deve definir este valor como `'docker'`.

#### **`pre-entrypoint`**

**Opcional** Permite que você execute um script antes de a ação do `entrypoint` começar. Por exemplo, você pode usar o `pre-entrypoint:` para executar um pré-requisito do script da configuração. {% data variables.product.prodname_actions %} usa a `execução do docker` para lançar esta ação e executa o script dentro de um novo contêiner que usa a mesma imagem-base. Isso significa que o momento de execução é diferente do contêiner principal do</code>entrypoint</code> e quaisquer status que você precisar devem ser acessados na área de trabalho, em `HOME` ou como uma variável `STATE_`. A ação `pre-entrypoint:` é sempre executada por padrão, mas você pode substituí-la usando [`pre-if`](#pre-if).

O aplicativo especificado com a sintaxe [`using`](#runsusing) executará esse arquivo.

Neste exemplo, a ação `pre-entrypoint:` executa um script denominado `setup.sh`:

```yaml
executa:
  using: 'docker'
  image: 'Dockerfile'
  args:
  - 'bzz'
  pre-entrypoint: 'setup.sh'
  entrypoint: 'main.sh'
```

#### **`runs.image`**

**Obrigatório ** A imagem do Docker a ser usada como contêiner para executar a ação. O valor pode ser o nome da imagem de base do Docker, um `arquivo Docker` local no seu repositório u uma imagem pública no Docker Hub ou outro registro. Para fazer referência a um `arquivo Docker` no seu repositório, use um caminho relativo ao seu arquivo de metadados da ação. O aplicativo do `docker` executará este arquivo.

#### **`runs.env`**

**Opcional** Especifica um mapa da chave/valor das variáveis do ambiente a serem definidas no ambiente do contêiner.

#### **`runs.entrypoint`**

**Opcional** Substitui o `ENTRYPOINT` do Docker no `arquivo Docker` ou o define, caso nenhum já tenha sido especificado. Use o `entrypoint` quando o `arquivo Docker` não especificar um `ENTRYPOINT` ou você desejar substituir a instrução do`ENTRYPOINT`. Se você omitir o `entrypoint`, serão executados os comandos que você especificar na instrução do `ENTRYPOINT` do Docker. A instrução do `ENTRYPOINT` do Docker tem forma de _shell_ e forma de _exec_. A documentação do `ENTRYPOINT` do docker recomenda o uso da forma _exec_ da instrução do `ENTRYPOINT`.

Para obter mais informações sobre como o `entrypoint` é executado, consulte "[Suporte do arquivo Docker para {% data variables.product.prodname_actions %}](/actions/creating-actions/dockerfile-support-for-github-actions/#entrypoint)".

#### **`post-entrypoint`**

**Opcional**Permite que você execute um script de cleanup, uma vez finalizada a ação`runs.entrypoint`. {% data variables.product.prodname_actions %} usa a `execução do docker` para lançar esta ação. Porque {% data variables.product.prodname_actions %} executa o script dentro de um novo contêiner usando a mesma imagem-base, o estado do momento da execução é diferente do contêiner principal do `entrypoint`. Você pode acessar qualquer estado que precisar na área de trabalho, em `HOME` ou como variável `STATE_`. A ação `post-entrypoint:` é sempre executada por padrão, mas você pode substituí-la usando [`post-if`](#post-if).

```yaml
executa:
  using: 'docker'
  image: 'Dockerfile'
  args:
  - 'bzz'
  entrypoint: 'main.sh'
  post-entrypoint: 'cleanup.sh'
```

#### **`runs.args`**

**Opcional** Um array de strings que define as entradas para um contêiner Docker. As entradas podem incluir strings com codificação rígida. O {% data variables.product.prodname_dotcom %} entrega os `args` ao `ENTRYPOINT` do contêiner quando o contêiner inicia.

`args` são usados em substituição à instrução `CMD` em um `Dockerfile`. Se você usar `CMD` no `Dockerfile`, use as diretrizes ordenadas por preferência:

{% data reusables.github-actions.dockerfile-guidelines %}

Se você precisar passar variáveis de ambiente para uma ação, certifique-se de que sua ação executa um shell de comando para realizar a substituição de variáveis. Por exemplo, se seu atributo `entrypoint` é definido como `"sh -c"`, os `args` serão executados em um terminal de comando. Como alternativa, se o seu `arquivo Docker` usar um `Entrypoint` para executar o mesmo comando (`"sh-c"`), os `Args` serão executado em um shell de comando.

Para obter mais informações sobre o uso da instrução `CMD` com {% data variables.product.prodname_actions %}, consulte "[Suporte do arquivo Docker para {% data variables.product.prodname_actions %}](/actions/creating-actions/dockerfile-support-for-github-actions/#cmd)".

##### Exemplo

{% raw %}
```yaml
runs:
  using: 'docker'
  image: 'Dockerfile'
  args:
    - ${{ inputs.greeting }}
    - 'foo'
    - 'bar'
```
{% endraw %}

### **`branding`**

Você pode usar uma cor e o ícone da [Pena](https://feathericons.com/) para criar um selo para personalizar e distinguir a sua ação. Os selos são exibidos ao lado do nome da sua ação em [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace?type=actions).

#### Exemplo

```yaml
branding:
  icon: 'award'  
  color: 'green'
```

#### **`branding.color`**

Cor de fundo do selo. Pode ser: `branco`, `amarelo`, `azul`, `verde`, `laranja`, `vermelho`, `roxo` ou `cinza-escuro`.

#### **`branding.icon`**

Nome do ícone [Feather](https://feathericons.com/) (pena) para usar.

<table>
<tr>
<td>atividade</td>
<td>frequência de execução</td>
<td>alerta-círculo</td>
<td>alerta-octágono</td>
</tr>
<tr>
<td>alerta-triângulo</td>
<td>alinhar-centro</td>
<td>alinhar-justificar</td>
<td>alinhar-esquerda</td>
</tr>
<tr>
<td>alinhar-direita</td>
<td>âncora</td>
<td>abertura</td>
<td>arquivar</td>
</tr>
<tr>
<td>flecha-abaixo-círculo</td>
<td>flecha-abaixo-esquerda</td>
<td>flecha-abaixo-direita</td>
<td>flecha-abaixo</td>
</tr>
<tr>
<td>flecha-esquerda-círculo</td>
<td>flecha-esquerda</td>
<td>flecha-direita-círculo</td>
<td>flecha-direita</td>
</tr>
<tr>
<td>flecha-acima-círculo</td>
<td>flecha-acima-esquerda</td>
<td>flecha-acima-direita</td>
<td>flecha-acima</td>
</tr>
<tr>
<td>arroba</td>
<td>prêmio</td>
<td>barra-quadro-2</td>
<td>barra-quadro</td>
</tr>
<tr>
<td>bateria-carregando</td>
<td>bateria</td>
<td>sino-desativado</td>
<td>sino</td>
</tr>
<tr>
<td>bluetooth</td>
<td>negrito</td>
<td>livro-aberto</td>
<td>livro</td>
</tr>
<tr>
<td>favorito</td>
<td>caixa</td>
<td>pasta</td>
<td>calendário</td>
</tr>
<tr>
<td>câmera-desligada</td>
<td>câmera</td>
<td>molde</td>
<td>marcar-círculo</td>
</tr>
<tr>
<td>marcar-quadrado</td>
<td>marcar</td>
<td>chevron-abaixo</td>
<td>chevron-esquerda</td>
</tr>
<tr>
<td>chevron-direita</td>
<td>chevron-acima</td>
<td>chevrons-abaixo</td>
<td>chevrons-esquerda</td>
</tr>
<tr>
<td>chevrons-direita</td>
<td>chevrons-acima</td>
<td>círculo</td>
<td>clipboard</td>
</tr>
<tr>
<td>relógio</td>
<td>nuvem-chuvisco</td>
<td>nuvem-relâmpago</td>
<td>nuvem-desativada</td>
</tr>
<tr>
<td>nuvem-chuva</td>
<td>nuvem-neve</td>
<td>nuvem</td>
<td>código</td>
</tr>
<tr>
<td>comando</td>
<td>bússula</td>
<td>copy</td>
<td>canto-abaixo-esquerda</td>
</tr>
<tr>
<td>canto-abaixo-direita</td>
<td>canto-esquerda-abaixo</td>
<td>canto-esquerda-acima</td>
<td>canto-direita-abaixo</td>
</tr>
<tr>
<td>canto-direita-acima</td>
<td>canto-acima-esquerda</td>
<td>canto-acima-direita</td>
<td>cpu</td>
</tr>
<tr>
<td>cartão-de-crédito</td>
<td>cortar</td>
<td>mira</td>
<td>banco de dados</td>
</tr>
<tr>
<td>delete</td>
<td>disco</td>
<td>dólar-sinal</td>
<td>download-nuvem</td>
</tr>
<tr>
<td>download</td>
<td>gota</td>
<td>editar-2</td>
<td>editar-3</td>
</tr>
<tr>
<td>edit</td>
<td>link-externo</td>
<td>olho-fechado</td>
<td>olho</td>
</tr>
<tr>
<td>facebook</td>
<td>fast-forward</td>
<td>pena</td>
<td>arquivo-menos</td>
</tr>
<tr>
<td>arquivo-mais</td>
<td>arquivo-texto</td>
<td>arquivo</td>
<td>filme</td>
</tr>
<tr>
<td>filtro</td>
<td>sinalizador</td>
<td>pasta-menos</td>
<td>pasta-mais</td>
</tr>
<tr>
<td>pasta</td>
<td>presente</td>
<td>git-branch</td>
<td>git-commit</td>
</tr>
<tr>
<td>git-merge</td>
<td>git-pull-request</td>
<td>globo</td>
<td>grade</td>
</tr>
<tr>
<td>disco-rígido</td>
<td>hash</td>
<td>fones-de-ouvido</td>
<td>coração</td>
</tr>
<tr>
<td>ajuda-círculo</td>
<td>casa</td>
<td>image</td>
<td>caixa de entrada</td>
</tr>
<tr>
<td>info</td>
<td>itálico</td>
<td>camadas</td>
<td>layout</td>
</tr>
<tr>
<td>boia salva-vidas</td>
<td>link-2</td>
<td>link</td>
<td>lista</td>
</tr>
<tr>
<td>carregador</td>
<td>bloquear</td>
<td>log-in</td>
<td>log-out</td>
</tr>
<tr>
<td>correio</td>
<td>fixar-mapa</td>
<td>map</td>
<td>maximizar-2</td>
</tr>
<tr>
<td>maximizar</td>
<td>menu</td>
<td>mensagem-círculo</td>
<td>mensagem-quadrado</td>
</tr>
<tr>
<td>microfone-desligado</td>
<td>microfone</td>
<td>minimizar-2</td>
<td>minimizar</td>
</tr>
<tr>
<td>menos-círculo</td>
<td>menos-quadrado</td>
<td>menos</td>
<td>monitor</td>
</tr>
<tr>
<td>lua</td>
<td>mais-horizontal</td>
<td>mais-vertical</td>
<td>mover</td>
</tr>
<tr>
<td>música</td>
<td>navegação-2</td>
<td>navegação</td>
<td>octágono</td>
</tr>
<tr>
<td>pacote</td>
<td>clips de papel</td>
<td>pausa-círculo</td>
<td>pausa</td>
</tr>
<tr>
<td>porcentagem</td>
<td>chamada-telefônica</td>
<td>telefone-transferência</td>
<td>telefone-entrada</td>
</tr>
<tr>
<td>telefone-perdido</td>
<td>telefone-desligado</td>
<td>telefone-fora</td>
<td>telefone</td>
</tr>
<tr>
<td>gráfico-pizza</td>
<td>reproduzir-círculo</td>
<td>reproduzir</td>
<td>mais-círculo</td>
</tr>
<tr>
<td>mais-quadrado</td>
<td>mais</td>
<td>bolso</td>
<td>energia</td>
</tr>
<tr>
<td>impressora</td>
<td>rádio</td>
<td>atualizar-ccw</td>
<td>atualizar-cw</td>
</tr>
<tr>
<td>repetir</td>
<td>retroceder</td>
<td>girar-ccw</td>
<td>girar-cw</td>
</tr>
<tr>
<td>rss</td>
<td>salvar</td>
<td>tesoura</td>
<td>pesquisar</td>
</tr>
<tr>
<td>enviar</td>
<td>servidor</td>
<td>settings</td>
<td>compartilhar-2</td>
</tr>
<tr>
<td>compartilhar</td>
<td>escudo-desabilitado</td>
<td>escudo</td>
<td>sacola-de-compras</td>
</tr>
<tr>
<td>carrinho-de-compras</td>
<td>aleatório</td>
<td>barra lateral</td>
<td>pular-atrás</td>
</tr>
<tr>
<td>pular-frente</td>
<td>barra</td>
<td>cursor</td>
<td>smartphone</td>
</tr>
<tr>
<td>alto-falante</td>
<td>quadrado</td>
<td>estrela</td>
<td>parar-círculo</td>
</tr>
<tr>
<td>sol</td>
<td>nascer-do-sol</td>
<td>pôr-do-sol</td>
<td>tablet</td>
</tr>
<tr>
<td>tag</td>
<td>target</td>
<td>terminal</td>
<td>termômetro</td>
</tr>
<tr>
<td>polegar-para-baixo</td>
<td>polegar-para-cima</td>
<td>alternar-esquerda</td>
<td>alternar-direita</td>
</tr>
<tr>
<td>lixeira-2</td>
<td>lixeira</td>
<td>tendência-baixa</td>
<td>tendência-alta</td>
</tr>
<tr>
<td>triângulo</td>
<td>caminhão</td>
<td>tv</td>
<td>tipo</td>
</tr>
<tr>
<td>guarda-chuva</td>
<td>sublinhar</td>
<td>desbloquear</td>
<td>carregar-nuvem</td>
</tr>
<tr>
<td>fazer upload</td>
<td>usuário-marcar</td>
<td>usuário-menos</td>
<td>usuário-mais</td>
</tr>
<tr>
<td>usuário-x</td>
<td>usuário</td>
<td>users</td>
<td>vídeo-desligado</td>
</tr>
<tr>
<td>vídeo</td>
<td>correio de voz</td>
<td>volume-1</td>
<td>volume-2</td>
</tr>
<tr>
<td>volume-x</td>
<td>volume</td>
<td>inspecionar</td>
<td>wifi-desligado</td>
</tr>
<tr>
<td>wifi</td>
<td>vento</td>
<td>x-círculo</td>
<td>x-quadrado</td>
</tr>
<tr>
<td>x</td>
<td>zapear-desligado</td>
<td>zapear</td>
<td>aproximar</td>
</tr>
<tr>
<td>afastar</td>
<td></td>
<td></td>
<td></td>
</table>
