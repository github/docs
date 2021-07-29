---
title: Solução de problemas de verificações de status necessárias
intro: Você pode verificar erros comuns e resolver problemas com as verificações de status necessárias.
product: '{% data reusables.gated-features.protected-branches %}'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
redirect_from:
  - /github/administering-a-repository/troubleshooting-required-status-checks
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

{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.20" %}

Por vezes, os resultados das verificações de status para o commit de mescla teste e o commit principal entrarão em conflito. Se o commit de merge de testes tem status, o commit de merge de testes deve passar. Caso contrário, o status do commit principal deve passar antes de você poder mesclar o branch. Para obter mais informações sobre commits de merge de teste, consulte "[Pulls](/rest/reference/pulls#get-a-pull-request)".

![Branch com commits de mescla conflitantes](/assets/images/help/repository/req-status-check-conflicting-merge-commits.png)
{% endif %}
