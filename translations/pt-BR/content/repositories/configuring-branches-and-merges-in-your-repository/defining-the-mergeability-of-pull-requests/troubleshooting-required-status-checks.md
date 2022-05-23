---
title: Solução de problemas de verificações de status necessárias
intro: Você pode verificar erros comuns e resolver problemas com as verificações de status necessárias.
product: '{% data reusables.gated-features.protected-branches %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
redirect_from:
  - /github/administering-a-repository/troubleshooting-required-status-checks
  - /github/administering-a-repository/defining-the-mergeability-of-pull-requests/troubleshooting-required-status-checks
shortTitle: Verificações de status necessárias
---

Se você tiver uma verificação e um status com o mesmo nome e selecionar esse nome como uma verificação de status obrigatória, a verificação e o status serão obrigatórios. Para obter mais informações, consulte "[Verificações](/rest/reference/checks)".

Depois que você habilitar as verificações de status solicitadas, seu branch pode precisar estar atualizado com o branch de base antes da ação de merge. Isso garante que o branch foi testado com o código mais recente do branch base. Se o branch estiver desatualizado, você precisará fazer merge do branch base no seu branch. Para obter mais informações, consulte "[Sobre branches protegidos](/github/administering-a-repository/about-protected-branches#require-status-checks-before-merging)".

{% note %}

**Observação:** também é possível atualizar o seu branch com o branch base usando o rebase do Git. Para obter mais informações, consulte "[Rebase no Git](/github/getting-started-with-github/about-git-rebase)".

{% endnote %}

Não será possível fazer push de alterações locais em um branch protegido enquanto todas as verificações de status obrigatórias não forem aprovadas. Sendo assim, você receberá uma mensagem de erro semelhante a esta.

```shell
remote: error: GH006: Protected branch update failed for refs/heads/main.
remote: error: Required status check "ci-build" is failing
```
{% note %}

**Observação:** as pull requests que são atualizadas e passam nas verificações de status obrigatórias podem sofrer merge localmente e enviadas por push para o branch protegido. Isso pode ser feito sem verificações de status em execução no próprio commit de merge.

{% endnote %}

## Conflitos entre o título do commit e o commit de merge do teste

Por vezes, os resultados das verificações de status para o commit de mescla teste e o commit principal entrarão em conflito. Se o commit de merge de testes tem status, o commit de merge de testes deve passar. Caso contrário, o status do commit principal deve passar antes de você poder mesclar o branch. Para obter mais informações sobre commits de merge de teste, consulte "[Pulls](/rest/reference/pulls#get-a-pull-request)".

![Branch com commits de mescla conflitantes](/assets/images/help/repository/req-status-check-conflicting-merge-commits.png)

## Manipulação ignorada, mas verificações necessárias

{% note %}

**Observação:** Se um fluxo de trabalho for ignorado devido à [filtragem do caminho](/actions/using-workflows/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore), a [filtragem do caminho](/actions/using-workflows/workflow-syntax-for-github-actions#onpull_requestpull_request_targetbranchesbranches-ignore) ou [mensagem de commit](/actions/managing-workflow-runs/skipping-workflow-runs) as verificações associadas a esse fluxo de trabalho permanecerão em um estado "Pendente". Um pull request que requer que essas verificações sejam bem sucedidas será bloqueado do merge.

Se um trabalho em um fluxo de trabalho for ignorado devido a uma condicional, ele informará seu status como "Sucesso". Para obter mais informações, consulte [Ignorando as execuções do fluxo de trabalho](/actions/managing-workflow-runs/skipping-workflow-runs) e [Usando condições para controlar a execução do trabalho](/actions/using-jobs/using-conditions-to-control-job-execution).

{% endnote %}

### Exemplo

O exemplo a seguir mostra um fluxo de trabalho que exige um status de conclusão de "Sucesso" para o trabalho de `criação`, mas o fluxo de trabalho será ignorado se o pull request não alterar quaisquer arquivos no diretório de `scripts`.

```yaml
name: ci
on:
  pull_request:
    paths:
      - 'scripts/**'
jobs:
  build:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [12.x, 14.x, 16.x]
    steps:
    - uses: {% data reusables.actions.action-checkout %}
    - name: Use Node.js {% raw %}${{ matrix.node-version }}{% endraw %}
      uses: {% data reusables.actions.action-setup-node %}
      with:
        node-version: {% raw %}${{ matrix.node-version }}{% endraw %}
        cache: 'npm'
    - run: npm ci
    - run: npm run build --if-present
    - run: npm test
```

Devido à [filtragem do caminho](/actions/using-workflows/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore), um pull request que apenas altera um arquivo na raiz do repositório não acionará esse fluxo de trabalho e está bloqueada de fazer merge. Você verá o seguinte status no pull request:

![Verificação obrigatória ignorada mas mostrada como pendente](/assets/images/help/repository/PR-required-check-skipped.png)

Você pode corrigir isso criando um fluxo de trabalho genérico, com o mesmo nome, que retornará verdadeiro em qualquer caso semelhante ao fluxo de trabalho abaixo:

```yaml
name: ci
on:
  pull_request:
    paths-ignore:
      - 'scripts/**'
      - 'middleware/**'
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - run: 'echo "No build required" '
```
Agora, as verificações sempre passarão sempre que alguém enviar uma solicitação pull que não altere os arquivos listados em `caminhos` no primeiro fluxo de trabalho.

![Verificação ignorada mas passa graças a um fluxo de trabalho genérico](/assets/images/help/repository/PR-required-check-passed-using-generic.png)

{% note %}

**Notas:**
* Certifique-se de que a chave `nome` e o nome do trabalho necessário sejam o mesmo em ambos os arquivos do fluxo de trabalho. Para obter mais informações, consulte "[Sintaxe do fluxo de trabalho para {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions)".
* O exemplo acima usa {% data variables.product.prodname_actions %}, mas esta solução alternativa também se aplica a outros provedores de CI/CD que se integram a {% data variables.product.company_short %}.

{% endnote %}

{% ifversion fpt or ghes > 3.3 or ghae-issue-5379 or ghec %}Também é possível que um branch protegido exiga uma verificação de status de um {% data variables.product.prodname_github_app %} específico. Se você vir uma mensagem parecida com a seguinte, você deverá verificar se a verificação listada na caixa de merge foi definida pelo aplicativo esperado.

```
A "criação" da verificação de status necessária não foi definida pelo {% data variables.product.prodname_github_app %} esperado.
```
{% endif %}
