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
shortTitle: Required status checks
ms.openlocfilehash: 6e99f8ebf0275d065c640bb7b4c7b60462f51ec0
ms.sourcegitcommit: 84a9475bf99a37021746349a51ce814516928516
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/07/2022
ms.locfileid: '148135803'
---
Se você tiver uma verificação e um status com o mesmo nome e selecionar esse nome como uma verificação de status obrigatória, a verificação e o status serão obrigatórios. Para obter mais informações, confira "[Verificações](/rest/reference/checks)".

Depois que você habilitar as verificações de status solicitadas, seu branch pode precisar estar atualizado com o branch de base antes da ação de merge. Isso garante que o branch foi testado com o código mais recente do branch base. Se o branch estiver desatualizado, você precisará fazer merge do branch base no seu branch. Para obter mais informações, confira "[Sobre os branches protegidos](/github/administering-a-repository/about-protected-branches#require-status-checks-before-merging)".

{% note %}

**Observação:** você também pode atualizar o branch com o branch base usando a troca de base do Git. Para obter mais informações, confira "[Sobre a troca de base do Git](/github/getting-started-with-github/about-git-rebase)".

{% endnote %}

Não será possível fazer push de alterações locais em um branch protegido enquanto todas as verificações de status obrigatórias não forem aprovadas. Sendo assim, você receberá uma mensagem de erro semelhante à mostrada a seguir.

```shell
remote: error: GH006: Protected branch update failed for refs/heads/main.
remote: error: Required status check "ci-build" is failing
```
{% note %}

**Observação:** as solicitações de pull que estão atualizadas e são aprovadas nas verificações de status obrigatórias podem ser mescladas localmente e enviadas por push para o branch protegido. Isso pode ser feito sem verificações de status em execução no próprio commit de merge.

{% endnote %}

## Conflitos entre o título do commit e o commit de merge do teste

Por vezes, os resultados das verificações de status para o commit de mescla teste e o commit principal entrarão em conflito. Se o commit de merge de testes tem status, o commit de merge de testes deve passar. Caso contrário, o status do commit principal deve passar antes de você poder mesclar o branch. Para obter mais informações sobre os commits de mesclagem de teste, confira "[Pulls](/rest/reference/pulls#get-a-pull-request)".

![Branch com commits de mescla conflitantes](/assets/images/help/repository/req-status-check-conflicting-merge-commits.png)

## Manipulação ignorada, mas verificações necessárias

{% note %}

**Observação:** se um fluxo de trabalho for ignorado devido à [filtragem de caminho](/actions/using-workflows/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore), [à filtragem de branch](/actions/using-workflows/workflow-syntax-for-github-actions#onpull_requestpull_request_targetbranchesbranches-ignore) ou a uma [mensagem de commit](/actions/managing-workflow-runs/skipping-workflow-runs), as verificações associadas a esse fluxo de trabalho permanecerão em um estado "Pendente". Uma solicitação de pull que exija que essas verificações sejam bem-sucedidas não poderá ser mesclada.

Se um trabalho em um fluxo de trabalho for ignorado devido a um condicional, ele relatará seu status como "Êxito". Para obter mais informações, consulte [Como ignorar execuções de fluxo de trabalho](/actions/managing-workflow-runs/skipping-workflow-runs) e [Como usar condições para controlar a execução do trabalho](/actions/using-jobs/using-conditions-to-control-job-execution).

{% endnote %}

### Exemplo

O exemplo a seguir mostra um fluxo de trabalho que requer um status de conclusão "Êxito" para o trabalho `build`, mas o fluxo de trabalho será ignorado se a solicitação de pull não alterar nenhum arquivo no diretório `scripts`.

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

Devido à [filtragem de caminho](/actions/using-workflows/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore), uma solicitação de pull que altera apenas um arquivo na raiz do repositório não disparará esse fluxo de trabalho e não poderá ser mesclada. Você verá o seguinte status no pull request:

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
      - run: 'echo "No build required"'
```
Agora, as verificações sempre serão aprovadas sempre que alguém enviar uma solicitação de pull que não altere os arquivos listados em `paths` no primeiro fluxo de trabalho.

![Verificação ignorada mas passa graças a um fluxo de trabalho genérico](/assets/images/help/repository/PR-required-check-passed-using-generic.png)

{% note %}

**Observações:**
* Garanta que a chave `name` e o nome do trabalho obrigatório sejam os mesmos nos dois arquivos de fluxo de trabalho. Para obter mais informações, confira "[Sintaxe de fluxo de trabalho do {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions)".
* O exemplo acima usa {% data variables.product.prodname_actions %}, mas esta solução alternativa também se aplica a outros provedores de CI/CD que se integram a {% data variables.product.company_short %}.

{% endnote %}

{% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %}
## Verificações de status de fontes inesperadas obrigatório

Também é possível que um branch protegido exija uma verificação de status de um {% data variables.product.prodname_github_app %} específico. Se você vir uma mensagem parecida com a seguinte, você deverá verificar se a verificação listada na caixa de merge foi definida pelo aplicativo esperado.

```
Required status check "build" was not set by the expected {% data variables.product.prodname_github_app %}.
```
{% endif %}
