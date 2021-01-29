---
title: Solução de problemas de verificações de status necessárias
intro: 'You can check for common errors and resolve issues with required status checks.'
product: '{% data reusables.gated-features.protected-branches %}'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

If you have a check and a status with the same name, and you select that name as a required status check, both the check and the status are required. Para obter mais informações, consulte "[Verificações](/rest/reference/checks)".

After you enable required status checks, your branch may need to be up-to-date with the base branch before merging. Isso garante que o branch foi testado com o código mais recente do branch base. Se o branch estiver desatualizado, você precisará fazer merge do branch base no seu branch. Para obter mais informações, consulte "[Sobre branches protegidos](/github/administering-a-repository/about-protected-branches#require-status-checks-before-merging)".

{% note %}

**Observação:** também é possível atualizar o seu branch com o branch base usando o rebase do Git. Para obter mais informações, consulte "[Rebase no Git](/github/using-git/about-git-rebase)".

{% endnote %}

Não será possível fazer push de alterações locais em um branch protegido enquanto todas as verificações de status obrigatórias não forem aprovadas. Sendo assim, você receberá uma mensagem de erro semelhante a esta.

```shell
remote: error: GH006: Protected branch update failed for refs/heads/main.
remote: error: Required status check "ci-build" is failing
```
{% note %}

**Note:** Pull requests that are up-to-date and pass required status checks can be merged locally and pushed to the protected branch. Isso pode ser feito sem verificações de status em execução no próprio commit de merge.

{% endnote %}

{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.20" %}

Por vezes, os resultados das verificações de status para o commit de mescla teste e o commit principal entrarão em conflito. If the test merge commit has a status, the test merge commit must pass. Caso contrário, o status do commit principal deve passar antes de você poder mesclar o branch. For more information about test merge commits, see "[Pulls](/rest/reference/pulls#get-a-pull-request)."

![Branch com commits de mescla conflitantes](/assets/images/help/repository/req-status-check-conflicting-merge-commits.png)
{% endif %}
