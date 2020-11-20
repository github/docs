---
title: Migrar do Azure Pipelines para o GitHub Actions
intro: 'O {% data variables.product.prodname_actions %} e o Azure Pipelines compartilham várias semelhanças de configuração, o que torna a migração para {% data variables.product.prodname_actions %} relativamente simples.'
redirect_from:
  - /actions/migrating-to-github-actions/migrating-from-azure-pipelines-to-github-actions
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Introdução

O Azure Pipelines e o {% data variables.product.prodname_actions %} permitem criar fluxos de trabalho que automaticamente criam, testam, publicam, lançam e implantam códigos. O Azure Pipelines e o {% data variables.product.prodname_actions %} compartilham algumas similaridades na configuração do fluxo de trabalho:

- Os arquivos de configuração do fluxo de trabalho são gravados YAML e armazenados no repositório do código.
- Os fluxos de trabalho incluem um ou mais trabalhos.
- Os trabalhos incluem uma ou mais etapas ou comandos individuais.
- É possível reutilizar e compartilhar novamente etapas ou tarefas com a comunidade.

Para obter mais informações, consulte "[Conceitos básicos para {% data variables.product.prodname_actions %}](/actions/getting-started-with-github-actions/core-concepts-for-github-actions)".

### Principais diferenças

Ao migrar do Azure Pipelines, considere as diferenças a seguir:

- O Azure Pipelines suporta um legado do _editor clássico_, que permite que você defina sua configuração de CI em um editor GUI em vez de criar a definição do pipeline em um arquivo YAML. O {% data variables.product.prodname_actions %} usa arquivos YAML para definir fluxos de trabalho e não é compatível com um editor gráfico.
- O Azure Pipelines permite que você omita algumas estruturas nas definições de trabalho. Por exemplo, se você tem apenas um único trabalho, não é necessário definir o trabalho. Você precisa definir apenas as etapas. O {% data variables.product.prodname_actions %} requer configuração explícita e não é possível omitir a estrutura do YAML.
- O Azure Pipelines é compatível com as _etapas_ definidas no arquivo YAML, que pode ser usado para criar fluxos de trabalho de implantação. O {% data variables.product.prodname_actions %} exige que você que você separe as etapas em arquivos separados do fluxo de trabalho do YAML.
- É possível selecionar os agentes de criação locais do Azure Pipelines com recursos. {% data variables.product.prodname_actions %} executores auto-hospedados podem ser selecionados com etiquetas.

### Migrar trabalhos e etapas

Os trabalhos e as etapas no Azure Pipelines são muito semelhantes a trabalhos e etapas do {% data variables.product.prodname_actions %}. Em ambos os sistemas, os trabalhos têm as características a seguir:

* Os trabalhos contêm uma série de etapas executadas em sequência.
* Os trabalhos são executados em máquinas virtuais separadas ou em contêineres separados.
* Por padrão, os trabalhos executados em paralelo, mas podem ser configuradas para serem executados em sequência.

### Migrar etapas de script

Você pode executar um script ou um comando de shell como uma etapa em um fluxo de trabalho. No Azure Pipelines, as etapas do script podem ser especificadas usando a chave `script`, ou usando as chaves `bash`, `powershell`, ou `pwsh`. É possível especificar os scripts como entrada para uma [tarefa de Bash](https://docs.microsoft.com/azure/devops/pipelines/tasks/utility/bash?view=azure-devops) ou a como uma [tarefa de PowerShell](https://docs.microsoft.com/azure/devops/pipelines/tasks/utility/powershell?view=azure-devops).

Em {% data variables.product.prodname_actions %}, todos os scripts são especificados usando a chave `executar`. Para selecionar um shell específico, você pode especificar a chave `shell` ao fornecer o script. Para obter mais informações, consulte "[Sintaxe de fluxo de trabalho para o {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepsrun)".

Abaixo, há um exemplo da sintaxe para cada sistema:

<table class="d-block">
<tr>
<th>
Azure Pipelines
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
trabalhos:
- trabalho: scripts
  pool:
    vmImage: 'windows-latest'
  etapas:
  - script: echo "Esta etapa é executada no shell-padrão"
  - bash: echo "Esta etapa é executada em bash"
  - pwsh: Write-Host "Esta etapa é executada no centro do PowerShell"
  - tarefa: PowerShell@2
    entrada:
      script: Write-Host "Esta etapa é executada em PowerShell"
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
trabalhos:
  scripts:
    runs-on: windows-latest
    etapas:
    - executar: echo "Esta etapa é executada no shell-padrão"
    - run: echo "Esta etapa é executada em bash"
      shell: bash
    - executar : Write-Host "Esta etapa é executada no centro do PowerShell"
      shell: pwsh
    - run: Write-Host "Esta etapa é executada no PowerShell"
      shell: powershell
```
{% endraw %}
</td>
</tr>
</table>

### Diferenças na manipulação de erros de script

No Azure Pipelines, os scripts podem ser configurados com erro se houver uma saída for enviada para `stderr`. {% data variables.product.prodname_actions %} não suporta esta configuração.

{% data variables.product.prodname_actions %} configura shells como "falha rápida" sempre que possível, que interrompe o script imediatamente caso um dos comandos em um script saia com um código de erro. Em contrapartida, o Azure Pipelines exige uma configuração explícita para sair imediatamente de um erro. Para obter mais informações, consulte "[Sintaxe de fluxo de trabalho para o {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#exit-codes-and-error-action-preference)".

### Diferenças no shell-padrão no Windows

No Azure Pipelines, o shell-padrão para scripts nas plataformas do Windows é o shell de comando (_cmd.exe_). Em {% data variables.product.prodname_actions %}, o shell-padrão para os scripts nas plataformas do Windows é o PowerShell. O PowerShell tem várias diferenças em comandos integrados, expansão de variáveis e controle de fluxo.

Se você estiver executando um comando simples, você poderá executar um script do shell do comando no PowerShell sem alterações. No entanto, na maioria dos casos, você deverá atualizar seu script com sintaxe PowerShell ou instruir {% data variables.product.prodname_actions %} para executar o script com a shell de comando em vez de executar o PowerShell. Você pode fazer isso especificando o `shell` como `cmd`.

Abaixo, há um exemplo da sintaxe para cada sistema:

<table class="d-block">
<tr>
<th>
Azure Pipelines
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
trabalhos:
- trabalho: run_command
  pool:
    vmImage: 'windows-latest'
  trabalhos:
  - script: echo "Esta etapa é executada em CMD no Windows por padrão"
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
trabalhos:
  run_command:
    runs-on: windows-latest
    steps:
    - executar: echo "Esta etapa é executada no PowerShell no Windows por padrão"
    - executar: echo "Esta etapa é executada em CMD no Windows explicitamente"
      shell: cmd
```
{% endraw %}
</td>
</tr>
</table>

Para obter mais informações, consulte "[Sintaxe de fluxo de trabalho para o {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#using-a-specific-shell)".

### Migrar condicionais e sintaxe de expressão

O Azure Pipelines e {% data variables.product.prodname_actions %} podem executar as etapas condicionalmente. No Azure Pipelines, expressões condicionais são especificadas usando a chave `condição`. Em {% data variables.product.prodname_actions %}, as expressões condicionais são especificadas usando a chave `se`.

O Azure Pipelines usa funções dentro de expressões para executar as etapas condicionalmente. Em contrapartida, {% data variables.product.prodname_actions %} usa uma notação de infixo. Por exemplo, você deve substituir a função `eq` no Azure Pipelines pelo operador `==` em {% data variables.product.prodname_actions %}.

Abaixo, há um exemplo da sintaxe para cada sistema:

<table class="d-block">
<tr>
<th>
Azure Pipelines
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
trabalhos:
- trabalho: condicional
  pool:
    vmImage: 'ubuntu-latest'
  etapas:
  - script: echo "Esta etapa é executada com str equals 'ABC' and num equals 123"
    condição: and(eq(variables.str, 'ABC'), eq(variables.num, 123))
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
trabalhos:
  condicional:
    runs-on: ubuntu-latest
    etapas:
    - executar: echo "Esta etapa é executada com str equals 'ABC' and num equals 123"
      if: ${{ env.str == 'ABC' && env.num == 123 }}
```
{% endraw %}
</td>
</tr>
</table>

Para obter mais informações, consulte "[Contexto e sintaxe de expressão para {% data variables.product.prodname_actions %}](/actions/reference/context-and-expression-syntax-for-github-actions)".

### Dependências entre trabalhos

Tanto o Pipelines Azure quanto o {% data variables.product.prodname_actions %} permitem que você defina as dependências para um trabalho. Em ambos os sistemas, os trabalhos são executados em paralelo por padrão, mas as dependências do trabalho podem ser especificadas explicitamente. No Azure Pipelines, isso é feito com a chave `dependsOn`. Em {% data variables.product.prodname_actions %}, isso é feito com a chave `needs`.

Abaixo, há um exemplo da sintaxe para cada sistema. O fluxo de trabalho inicia um primeiro trabalho denominado `inicial` e, quando esse trabalho é concluído, dois trabalhos denominados `fanout1` e `fanout2` serão executados. Por fim, quando esses trabalhos forem concluídos, o trabalho `fanin` será executado.

<table class="d-block">
<tr>
<th>
Azure Pipelines
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
trabalhos:
- trabalho: inicial
  pool:
    vmImage: 'ubuntu-latest'
  etapas:
  - script: echo "Este trabalho será executado primeiro."
- trabalho: fanout1
  pool:
    vmImage: 'ubuntu-latest'
  dependsOn: inicial
  etapas:
  - script: echo "Este trabalho será executado após o trabalho inicial, em paralelo com o fanout2."
- trabalho: fanout2
  pool:
    vmImage: 'ubuntu-latest'
  dependsOn: inicial
  etapas:
  - script: echo "Este trabalho será executado após o trabalho inicial, em paralelo com fanout1."
- trabalho: fanin:
  pool:
    vmImage: 'ubuntu-latest'
  dependsOn: [fanout1, fanout2]
  etapas:
  - script: echo "Este trabalho será executado após fanout1 e fanout2 serem concluídos."
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
trabalhos:
  inicial:
    runs-on: ubuntu-latest
    etapas:
    - executar: echo "Este trabalho será executado primeiro."
  fanout1:
    runs-on: ubuntu-latest
    needs: inicial
    etapas:
    - run: echo "Este trabalho será executado após o trabalho inicial, em paralelo com fanout2."
  fanout2:
    runs-on: ubuntu-latest
    needs: inicial
    etapas:
    - run: echo "Este trabalho será executado após o trabalho inicial, em paralelo com fanout1."
  fanin:
    runs-on: ubuntu-latest
    needs: [fanout1, fanout2]
    etapas:
    - executar: echo "Este trabalho será executado após fanout1 e fanout2 serem concluídos."
```
{% endraw %}
</td>
</tr>
</table>

Para obter mais informações, consulte "[Sintaxe de fluxo de trabalho para o {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idneeds)".

### Migrar tarefas para ações

O Azure Pipelines usa as _tarefas_, que são componentes do aplicativo que podem ser reutilizados em vários fluxos de trabalho. O {% data variables.product.prodname_actions %} usa as _ações_, que podem ser usadas para realizar tarefas e personalizar seu fluxo de trabalho. Em ambos os sistemas, é possível especificar o nome da tarefa ou ação a executar, junto com quaisquer entradas necessárias como pares chave/valor.

Abaixo, há um exemplo da sintaxe para cada sistema:

<table>
<tr>
<th>
Azure Pipelines
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
trabalhos:
- trabalho: run_python
  pool:
    vmImage: 'ubuntu-latest'
  etapas:
  - tarefa: UsePythonVersion@0
    entradas:
      versionSpec: '3.7'
      architecture: 'x64'
  - script: python script.py
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
trabalhos:
  run_python:
    runs-on: ubuntu-latest
    etapas:
    - usa: actions/setup-python@v2
      com:
        python-version: '3.7'
        arquitetura: 'x64'
    - executar: python script.py
```
{% endraw %}
</td>
</tr>
</table>

Você pode encontrar ações que podem ser usadas em seu fluxo de trabalho em [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace?type=actions) ou você pode criar suas próprias ações. Para obter mais informações, consulte "[Criar ações](/actions/creating-actions)".

