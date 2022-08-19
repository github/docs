---
title: Enviar por push um branch bloqueado por proteção de push
intro: 'O recurso de proteção de push do {% data variables.product.prodname_secret_scanning %} protege você proativamente contra segredos vazados nos seus repositórios. Você pode resolver pushes bloqueados e, uma vez que o segredo detectado for removido, você poderá fazer push das alterações para seu branch de trabalho pela linha de comando ou pela interface da web.'
product: '{% data reusables.gated-features.secret-scanning %}'
miniTocMaxHeadingLevel: 3
versions:
  feature: secret-scanning-push-protection
type: how_to
topics:
  - Secret scanning
  - Advanced Security
  - Alerts
  - Repositories
shortTitle: Enviar por push um branch bloqueado
---

## Sobre a proteção push para {% data variables.product.prodname_secret_scanning %}

O recurso de proteção de push do {% data variables.product.prodname_secret_scanning %} ajuda a evitar fugas de segurança por meio da digitalização de segredos antes de fazer push das alterações no seu repositório. {% data reusables.secret-scanning.push-protection-overview %} Para obter informações sobre os segredos e prestadores de serviço compatíveis com a proteção de push, consulte "[Padrões de {% data variables.product.prodname_secret_scanning_caps %}](/code-security/secret-scanning/secret-scanning-patterns#supported-secrets-for-push-protection)".

{% data reusables.secret-scanning.push-protection-remove-secret %}

{% tip %}

**Dica** Se {% data variables.product.prodname_dotcom %} bloquear um segredo que você acredita ser seguro para enviar por push, você poderá permitir o segredo e especificar a razão pela qual ele deve ser permitido. Para obter mais informações sobre ignorar a proteção push para um segredo, consulte "[Permitindo que um segredo bloqueado seja enviado por push](/code-security/secret-scanning/protecting-pushes-with-secret-scanning#allowing-a-blocked-secret-to-be-pushed)" e "[Ignorando proteção de push para um segredo](/code-security/secret-scanning/protecting-pushes-with-secret-scanning#bypassing-push-protection-for-a-secret)" para a linha de comando e a interface web, respectivamente.

{% endtip %}

## Resolvendo um push bloqueado na linha de comando

{% data reusables.secret-scanning.push-protection-command-line-choice %}

{% data reusables.secret-scanning.push-protection-multiple-branch-note %}

Se o segredo bloqueado foi introduzido pelo último commit no seu branch, você pode seguir as orientações abaixo.

1. Remova o segredo do seu código.
1. Envie as alterações usando `git commit --amend`.
1. Faça push das suas alterações com `git push`.

Você também pode remover o segredo se o segredo aparecer em um commit anterior no histórico do Git.

1. Use `git log` para determinar qual commit surgiu primeiro no erro de push no histórico.
1. Inicie um rebase interativo com `git rebase -i <commit-id>~1`. <commit-id> é o id do commit da etapa 1.
1. Identifique seu commit a ser editado alterando `escolha` para `editar` na primeira linha do texto que aparece no editor.
1. Remova o segredo do seu código.
1. Faça commit da alteração com `git commit --amend`.
1. Executar `git rebase --continue` para terminar o rebase.

## Resolvendo um commit bloqueado na interface web

{% data reusables.secret-scanning.push-protection-web-ui-choice %}

To resolve a blocked commit in the web UI, you need to remove the secret from the file, or use the **Bypass protection** dropdown to allow the secret. Para obter mais informações sobre como contornar a proteção de push da interface de usuário da web, consulte "[Protegendo pushes com a digitalização de segredo](/code-security/secret-scanning/protecting-pushes-with-secret-scanning#bypassing-push-protection-for-a-secret)".

Se você confirmar um segredo é real, você deverá remover o segredo do arquivo. Depois de remover o segredo, o banner no topo da página mudará e dirá que agora você pode fazeer commit das suas alterações.
