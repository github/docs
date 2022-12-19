---
title: Contextes
shortTitle: Contexts
intro: Vous pouvez accéder aux informations de contexte dans les workflows et les actions.
redirect_from:
  - /articles/contexts-and-expression-syntax-for-github-actions
  - /github/automating-your-workflow-with-github-actions/contexts-and-expression-syntax-for-github-actions
  - /actions/automating-your-workflow-with-github-actions/contexts-and-expression-syntax-for-github-actions
  - /actions/reference/contexts-and-expression-syntax-for-github-actions
  - /actions/reference/context-and-expression-syntax-for-github-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 3f73082600ce3bf300ce4565c2bdbc826eb357ca
ms.sourcegitcommit: 9af8891fea10039b3374c76818634e05410e349d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 12/06/2022
ms.locfileid: '148191933'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## À propos des contextes

Les contextes permettent d’accéder aux informations sur les exécutions de workflow, les environnements d’exécuteur, les travaux et les étapes. Chaque contexte est un objet qui contient des propriétés, lesquelles peuvent être des chaînes ou d’autres objets.

{% data reusables.actions.context-contents %} Par exemple, le contexte `matrix` est rempli uniquement pour les travaux figurant dans une [matrice](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstrategymatrix).

Vous pouvez accéder aux contextes à l’aide de la syntaxe d’expression. Pour plus d’informations, consultez « [Expressions](/actions/learn-github-actions/expressions) ».

{% raw %} `${{ <context> }}`
{% endraw %}

{% data reusables.actions.context-injection-warning %}

| Nom du contexte | Type | Description |
|---------------|------|-------------|
| `github` | `object` | Informations sur l’exécution du workflow. Pour plus d’informations, consultez [Contexte `github`](#github-context). |
| `env` | `object` | Contient des variables d’environnement définies dans un workflow, un travail ou une étape. Pour plus d’informations, consultez [Contexte `env`](#env-context). |
| `job` | `object` | Informations sur le travail en cours d’exécution. Pour plus d’informations, consultez [Contexte `job`](#job-context). |
{%- ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %} | `jobs` | `object` | Pour les workflows réutilisables uniquement, contient les sorties des travaux du workflow réutilisable. Pour plus d’informations, consultez [Contexte `jobs`](#jobs-context). |{% endif %} | `steps` | `object` | Informations sur les étapes qui ont été exécutées dans le travail en cours. Pour plus d’informations, consultez [Contexte `steps`](#steps-context). | | `runner` | `object` | Informations sur l’exécuteur qui exécute le travail en cours. Pour plus d’informations, consultez [Contexte `runner`](#runner-context). | | `secrets` | `object` | Contient les noms et les valeurs des secrets disponibles pour une exécution de workflow. Pour plus d’informations, consultez [Contexte `secrets`](#secrets-context). | | `strategy` | `object` | Informations sur la stratégie d’exécution de matrice pour le travail en cours. Pour plus d’informations, consultez [Contexte `strategy`](#strategy-context). | | `matrix` | `object` | Contient les propriétés de matrice définies dans le workflow qui s’appliquent au travail en cours. Pour plus d’informations, consultez [Contexte `matrix`](#matrix-context). | | `needs` | `object` | Contient les sorties de tous les travaux définis comme dépendance du travail en cours. Pour plus d’informations, consultez [Contexte `needs`](#needs-context). | {%- ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %} | `inputs` | `object` | Contient les entrées d’un workflow réutilisable {% ifversion actions-unified-inputs %}ou d’un workflow déclenché manuellement{% endif %}. Pour plus d’informations, consultez [Contexte `inputs`](#inputs-context). |{% endif %}

Dans le cadre d’une expression, vous pouvez accéder aux informations de contexte à l’aide d’une syntaxe parmi deux syntaxes au choix.

- Syntaxe d’index : `github['sha']`
- Syntaxe de déréférencement de propriété : `github.sha`

Pour permettre l’utilisation de la syntaxe de déréférencement de propriété, le nom de propriété doit commencer par une lettre ou `_`, et contenir uniquement des caractères alphanumériques, `-` ou `_`.

Si vous tentez de déréférencer une propriété inexistante, cela aboutit à une chaîne vide.

### Déterminer quand utiliser des contextes

{% data reusables.actions.using-context-or-environment-variables %}

### Disponibilité du contexte

Différents contextes sont disponibles tout au long d’une exécution de workflow. Par exemple, le contexte `secrets` peut uniquement être utilisé à certains endroits au sein d’un travail.

De plus, certaines fonctions peuvent uniquement être utilisées à certains endroits. Par exemple, la fonction `hashFiles` n’est pas disponible partout.

Le tableau suivant indique où chaque contexte et chaque fonction spéciale peuvent être utilisés dans un workflow. Si elle n’est pas listée ci-dessous, une fonction peut être utilisée n’importe où.

{% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %}

| Clé de workflow | Context | Fonctions spéciales |
| ---- | ------- | ----------------- |
{%- ifversion actions-run-name %} | <code>run-name</code> | <code>github, inputs</code> | | {%- endif %} | <code>concurrency</code> | <code>github, inputs</code> | | | <code>env</code> | <code>github, secrets, inputs</code> | | | <code>jobs.&lt;job_id&gt;.concurrency</code> | <code>github, needs, strategy, matrix, inputs</code> | | | <code>jobs.&lt;job_id&gt;.container</code> | <code>github, needs, strategy, matrix, env, secrets, inputs</code> | | | <code>jobs.&lt;job_id&gt;.container.credentials</code> | <code>github, needs, strategy, matrix, env, secrets, inputs</code> | | | <code>jobs.&lt;job_id&gt;.container.env.&lt;env_id&gt;</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, inputs</code> | | | <code>jobs.&lt;job_id&gt;.continue-on-error</code> | <code>github, needs, strategy, matrix, inputs</code> | | | <code>jobs.&lt;job_id&gt;.defaults.run</code> | <code>github, needs, strategy, matrix, env, inputs</code> | | | <code>jobs.&lt;job_id&gt;.env</code> | <code>github, needs, strategy, matrix, secrets, inputs</code> | | | <code>jobs.&lt;job_id&gt;.environment</code> | <code>github, needs, strategy, matrix, inputs</code> | | | <code>jobs.&lt;job_id&gt;.environment.url</code> | <code>github, needs, strategy, matrix, job, runner, env, steps, inputs</code> | | | <code>jobs.&lt;job_id&gt;.if</code> | <code>github, needs, inputs</code> | <code>always, cancelled, success, failure</code> | | <code>jobs.&lt;job_id&gt;.name</code> | <code>github, needs, strategy, matrix, inputs</code> | | | <code>jobs.&lt;job_id&gt;.outputs.&lt;output_id&gt;</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps, inputs</code> | | | <code>jobs.&lt;job_id&gt;.runs-on</code> | <code>github, needs, strategy, matrix, inputs</code> | | | <code>jobs.&lt;job_id&gt;.secrets.&lt;secrets_id&gt;</code> | <code>github, needs,{% ifversion actions-reusable-workflow-matrix %} strategy, matrix,{% endif %} secrets{% ifversion actions-unified-inputs %}, inputs{% endif %}</code> | | | <code>jobs.&lt;job_id&gt;.services</code> | <code>github, needs, strategy, matrix, inputs</code> | | | <code>jobs.&lt;job_id&gt;.services.&lt;service_id&gt;.credentials</code> | <code>github, needs, strategy, matrix, env, secrets, inputs</code> | | | <code>jobs.&lt;job_id&gt;.services.&lt;service_id&gt;.env.&lt;env_id&gt;</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, inputs</code> | | | <code>jobs.&lt;job_id&gt;.steps.continue-on-error</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps, inputs</code> | <code>hashFiles</code> | | <code>jobs.&lt;job_id&gt;.steps.env</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps, inputs</code> | <code>hashFiles</code> | | <code>jobs.&lt;job_id&gt;.steps.if</code> | <code>github, needs, strategy, matrix, job, runner, env, steps, inputs</code> | <code>always, cancelled, success, failure, hashFiles</code> | | <code>jobs.&lt;job_id&gt;.steps.name</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps, inputs</code> | <code>hashFiles</code> | | <code>jobs.&lt;job_id&gt;.steps.run</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps, inputs</code> | <code>hashFiles</code> | | <code>jobs.&lt;job_id&gt;.steps.timeout-minutes</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps, inputs</code> | <code>hashFiles</code> | | <code>jobs.&lt;job_id&gt;.steps.with</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps, inputs</code> | <code>hashFiles</code> | | <code>jobs.&lt;job_id&gt;.steps.working-directory</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps, inputs</code> | <code>hashFiles</code> | | <code>jobs.&lt;job_id&gt;.strategy</code> | <code>github, needs, inputs</code> | | | <code>jobs.&lt;job_id&gt;.timeout-minutes</code> | <code>github, needs, strategy, matrix, inputs</code> | | | <code>jobs.&lt;job_id&gt;.with.&lt;with_id&gt;</code> | <code>github, needs{% ifversion actions-reusable-workflow-matrix %}, strategy, matrix{% endif %}{% ifversion actions-unified-inputs %}, inputs{% endif %}</code> | | | <code>on.workflow_call.inputs.&lt;inputs_id&gt;.default</code> | <code>github{% ifversion actions-unified-inputs %}, inputs{% endif %}</code> | | | <code>on.workflow_call.outputs.&lt;output_id&gt;.value</code> | <code>github, jobs, inputs</code> | | {% else %}
| Path | Context | Fonctions spéciales |
| ---- | ------- | ----------------- |
| <code>concurrency</code> | <code>github</code> | |
| <code>env</code> | <code>github, secrets</code> | |
| <code>jobs.&lt;job_id&gt;.concurrency</code> | <code>github, needs, strategy, matrix</code> | |
| <code>jobs.&lt;job_id&gt;.container</code> | <code>github, needs, strategy, matrix</code> | |
| <code>jobs.&lt;job_id&gt;.container.credentials</code> | <code>github, needs, strategy, matrix, env, secrets</code> | |
| <code>jobs.&lt;job_id&gt;.container.env.&lt;env_id&gt;</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets</code> | |
| <code>jobs.&lt;job_id&gt;.continue-on-error</code> | <code>github, needs, strategy, matrix</code> | |
| <code>jobs.&lt;job_id&gt;.defaults.run</code> | <code>github, needs, strategy, matrix, env</code> | |
| <code>jobs.&lt;job_id&gt;.env</code> | <code>github, needs, strategy, matrix, secrets</code> | |
| <code>jobs.&lt;job_id&gt;.environment</code> | <code>github, needs, strategy, matrix</code> | |
| <code>jobs.&lt;job_id&gt;.environment.url</code> | <code>github, needs, strategy, matrix, job, runner, env, steps</code> | |
| <code>jobs.&lt;job_id&gt;.if</code> | <code>github, needs</code> | <code>always, cancelled, success, failure</code> |
| <code>jobs.&lt;job_id&gt;.name</code> | <code>github, needs, strategy, matrix</code> | |
| <code>jobs.&lt;job_id&gt;.outputs.&lt;output_id&gt;</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps</code> | |
| <code>jobs.&lt;job_id&gt;.runs-on</code> | <code>github, needs, strategy, matrix</code> | |
| <code>jobs.&lt;job_id&gt;.services</code> | <code>github, needs, strategy, matrix</code> | |
| <code>jobs.&lt;job_id&gt;.services.&lt;service_id&gt;.credentials</code> | <code>github, needs, strategy, matrix, env, secrets</code> | |
| <code>jobs.&lt;job_id&gt;.services.&lt;service_id&gt;.env.&lt;env_id&gt;</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets</code> | |
| <code>jobs.&lt;job_id&gt;.steps.continue-on-error</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps</code> | <code>hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.steps.env</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps</code> | <code>hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.steps.if</code> | <code>github, needs, strategy, matrix, job, runner, env, steps</code> | <code>always, cancelled, success, failure, hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.steps.name</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps</code> | <code>hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.steps.run</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps</code> | <code>hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.steps.timeout-minutes</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps</code> | <code>hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.steps.with</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps</code> | <code>hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.steps.working-directory</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps</code> | <code>hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.strategy</code> | <code>github, needs</code> | |
| <code>jobs.&lt;job_id&gt;.timeout-minutes</code> | <code>github, needs, strategy, matrix</code> | |
{% endif %}

### Exemple : impression d’informations de contexte dans le journal

Vous pouvez imprimer le contenu des contextes dans le journal pour le débogage. La [fonction `toJSON`](/actions/learn-github-actions/expressions#tojson) est nécessaire pour l’impression automatique des objets JSON dans le journal.

{% data reusables.actions.github-context-warning %}

{% raw %}
```yaml{:copy}
name: Context testing
on: push

jobs:
  dump_contexts_to_log:
    runs-on: ubuntu-latest
    steps:
      - name: Dump GitHub context
        id: github_context_step
        run: echo '${{ toJSON(github) }}'
      - name: Dump job context
        run: echo '${{ toJSON(job) }}'
      - name: Dump steps context
        run: echo '${{ toJSON(steps) }}'
      - name: Dump runner context
        run: echo '${{ toJSON(runner) }}'
      - name: Dump strategy context
        run: echo '${{ toJSON(strategy) }}'
      - name: Dump matrix context
        run: echo '${{ toJSON(matrix) }}'
```
{% endraw %}

## Contexte `github`

Le contexte `github` contient des informations sur l’exécution du workflow et l’événement qui a déclenché cette exécution. Vous pouvez également lire la plupart des données du contexte `github` dans les variables d’environnement. Pour plus d’informations sur les variables d’environnement, consultez « [Utilisation des variables d’environnement](/actions/automating-your-workflow-with-github-actions/using-environment-variables) ».

{% data reusables.actions.github-context-warning %} {% data reusables.actions.context-injection-warning %}

| Nom de la propriété | Type | Description |
|---------------|------|-------------|
| `github` | `object` | Contexte de niveau supérieur disponible pendant tout travail ou étape d’un workflow. Cet objet contient toutes les propriétés répertoriées ci-dessous. |
| `github.action` | `string` | Nom de l’action en cours d’exécution ou [`id`](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstepsid) d’une étape. {% data variables.product.prodname_dotcom %} supprime les caractères spéciaux et utilise le nom `__run` quand l’étape actuelle exécute un script sans `id`. Si vous utilisez la même action plusieurs fois dans le même travail, le nom inclut un suffixe avec le numéro de séquence avec un trait de soulignement avant celui-ci. Par exemple, le premier script que vous exécutez aura le nom `__run` et le deuxième script sera nommé `__run_2`. De même, le deuxième appel de `actions/checkout` sera `actionscheckout2`. |
| `github.action_path` | `string` | Chemin où figure une action. Cette propriété est prise en charge uniquement dans les actions composites. Vous pouvez utiliser ce chemin pour accéder aux fichiers situés dans le même dépôt que l’action. |
| `github.action_ref` | `string` | Pour une étape exécutant une action, il s’agit de la référence de l’action en cours d’exécution. Par exemple : `v2`. |
| `github.action_repository` | `string` | Pour une étape exécutant une action, il s’agit du propriétaire et du nom du dépôt de l’action. Par exemple : `actions/checkout`. |
| `github.action_status` | `string` | Pour une action composite, il s’agit du résultat actuel de l’action composite. |
| `github.actor` | `string` | {% ifversion actions-stable-actor-ids %}Nom d’utilisateur de l’utilisateur qui a déclenché l’exécution de workflow initiale. Si l’exécution du workflow est une réexécution, cette valeur peut être différente de `github.triggering_actor`. Toutes les réexécutions de workflow utilisent les privilèges de `github.actor`, même si l’acteur qui initie la réexécutation (`github.triggering_actor`) a des privilèges différents.{% else %}Nom d’utilisateur de l’utilisateur qui a initié l’exécution du workflow.{% endif %} |
| `github.api_url` | `string` | URL de l’API REST {% data variables.product.prodname_dotcom %}. |
| `github.base_ref` | `string` | Branche cible ou `base_ref` de la demande de tirage (pull request) dans une exécution de workflow. Cette propriété est disponible uniquement quand l’événement qui déclenche une exécution de workflow est `pull_request` ou `pull_request_target`. |
| `github.env` | `string` | Chemin sur l’exécuteur jusqu’au fichier qui définit les variables d’environnement à partir des commandes de workflow. Ce fichier est unique à l’étape actuelle et est différent pour chaque étape d’un travail. Pour plus d’informations, consultez « [Commandes de workflow pour {% data variables.product.prodname_actions %}](/actions/learn-github-actions/workflow-commands-for-github-actions#setting-an-environment-variable) ». |
| `github.event` | `object` | Charge utile complète du webhook d’événement. Vous pouvez accéder aux propriétés individuelles de l’événement à l’aide de ce contexte. Cet objet est identique à la charge utile de webhook de l’événement qui a déclenché l’exécution du workflow et il est différent pour chaque événement. Les webhooks pour chaque événement {% data variables.product.prodname_actions %} sont liés dans « [Événements qui déclenchent des workflows](/articles/events-that-trigger-workflows/) ». Par exemple, pour une exécution de workflow déclenchée par l’[événement `push`](/actions/using-workflows/events-that-trigger-workflows#push), cet objet contient le contenu de la [charge utile du webhook push](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#push). |
| `github.event_name` | `string` | Nom de l’événement qui a déclenché l’exécution de workflow. |
| `github.event_path` | `string` | Chemin jusqu’au fichier sur l’exécuteur qui contient la charge utile de webhook d’événement complet. |
| `github.graphql_url` | `string` | URL de l’API GraphQL {% data variables.product.prodname_dotcom %}. |
| `github.head_ref` | `string` | Branche source ou `head_ref` de la demande de tirage dans une exécution de workflow. Cette propriété est disponible uniquement quand l’événement qui déclenche une exécution de workflow est `pull_request` ou `pull_request_target`. |
| `github.job` | `string` | [`job_id`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_id) du travail en cours. <br /> Remarque : Cette propriété de contexte est définie par l’exécuteur Actions et est uniquement disponible au sein des `steps` d’exécution d’un travail. Sinon, la valeur de cette propriété est `null`. |
| `github.ref` | `string` | {% data reusables.actions.ref-description %} |
{%- ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %} | `github.ref_name` | `string` | {% data reusables.actions.ref_name-description %} | | `github.ref_protected` | `boolean` | {% data reusables.actions.ref_protected-description %} | | `github.ref_type` | `string` | {% data reusables.actions.ref_type-description %} | {%- endif %} | `github.path` | `string` | Chemin sur l’exécuteur jusqu’au fichier qui définit les variables `PATH` système à partir des commandes de workflow. Ce fichier est unique à l’étape actuelle et est différent pour chaque étape d’un travail. Pour plus d’informations, consultez « [Commandes de workflow pour {% data variables.product.prodname_actions %}](/actions/learn-github-actions/workflow-commands-for-github-actions#adding-a-system-path) ». | | `github.repository` | `string` | Nom du propriétaire et du dépôt. Par exemple : `Codertocat/Hello-World`. | | `github.repository_owner` | `string` | Nom du propriétaire du dépôt. Par exemple : `Codertocat`. | | `github.repositoryUrl` | `string` | URL Git vers le dépôt. Par exemple : `git://github.com/codertocat/hello-world.git`. | | `github.retention_days` | `string` | Nombre de jours pendant lesquels les journaux et artefacts d’exécution de workflow sont conservés. | | `github.run_id` | `string` | {% data reusables.actions.run_id_description %} | | `github.run_number` | `string` | {% data reusables.actions.run_number_description %} | {%- ifversion fpt or ghec or ghes > 3.5 or ghae > 3.4 %} | `github.run_attempt` | `string` | Nombre unique pour chaque tentative d’exécution d’un workflow particulier dans un dépôt. Ce numéro commence à 1 pour la première tentative d’exécution du workflow et augmente d’une unité à chaque nouvelle exécution. | {%- endif %} {%- ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %} | `github.secret_source` | `string` | Source d’un secret utilisé dans un workflow. Les valeurs possibles sont `None`, `Actions`, `Dependabot` ou `Codespaces`. | {%- endif %} | `github.server_url` | `string` | URL du serveur GitHub. Par exemple : `https://github.com`. | | `github.sha` | `string` | {% data reusables.actions.github_sha_description %} | | `github.token` | `string` | Jeton permettant de s’authentifier pour le compte de l’application GitHub installée sur votre référentiel. Ceci est fonctionnellement équivalent au secret `GITHUB_TOKEN`. Pour plus d’informations, consultez « [Authentification automatique par jeton](/actions/security-guides/automatic-token-authentication) ».  <br /> Remarque : Cette propriété de contexte est définie par l’exécuteur Actions et est uniquement disponible au sein des `steps` d’exécution d’un travail. Sinon, la valeur de cette propriété est `null`. |{% ifversion actions-stable-actor-ids %} | `github.triggering_actor` | `string` | Nom d’utilisateur de l’utilisateur qui a initié l’exécution du workflow. Si l’exécution du workflow est une réexécution, cette valeur peut être différente de `github.actor`. Toutes les réexécutions de workflow utilisent les privilèges de `github.actor`, même si l’acteur qui initie la réexécution (`github.triggering_actor`) a des privilèges différents. |{% endif %} | `github.workflow` | `string` | Nom du workflow. Si le fichier de workflow ne spécifie pas un `name`, la valeur de cette propriété est le chemin complet du fichier de workflow dans le dépôt. | | `github.workspace` | `string` | Répertoire de travail par défaut sur l’exécuteur pour les étapes et emplacement par défaut de votre dépôt lors de l’utilisation de l’action [`checkout`](https://github.com/actions/checkout). |

### Exemple de contenu du contexte `github`

L’exemple de contexte suivant provient d’une exécution de workflow déclenchée par l’événement `push`. L’objet `event` de cet exemple a été tronqué, car il est identique au contenu de la [charge utile du webhook `push`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#push).

{% data reusables.actions.context-example-note %}

```json
{
  "token": "***",
  "job": "dump_contexts_to_log",
  "ref": "refs/heads/my_branch",
  "sha": "c27d339ee6075c1f744c5d4b200f7901aad2c369",
  "repository": "octocat/hello-world",
  "repository_owner": "octocat",
  "repositoryUrl": "git://github.com/octocat/hello-world.git",
  "run_id": "1536140711",
  "run_number": "314",
  "retention_days": "90",
  "run_attempt": "1",
  "actor": "octocat",
  "workflow": "Context testing",
  "head_ref": "",
  "base_ref": "",
  "event_name": "push",
  "event": {
    ...
  },
  "server_url": "https://github.com",
  "api_url": "https://api.github.com",
  "graphql_url": "https://api.github.com/graphql",
  "ref_name": "my_branch",
  "ref_protected": false,
  "ref_type": "branch",
  "secret_source": "Actions",
  "workspace": "/home/runner/work/hello-world/hello-world",
  "action": "github_step",
  "event_path": "/home/runner/work/_temp/_github_workflow/event.json",
  "action_repository": "",
  "action_ref": "",
  "path": "/home/runner/work/_temp/_runner_file_commands/add_path_b037e7b5-1c88-48e2-bf78-eaaab5e02602",
  "env": "/home/runner/work/_temp/_runner_file_commands/set_env_b037e7b5-1c88-48e2-bf78-eaaab5e02602"
}
```

### Exemple d’utilisation du contexte `github`

Cet exemple de workflow utilise le contexte `github.event_name` pour exécuter un travail uniquement si l’exécution du workflow a été déclenchée par l’événement `pull_request`.

```yaml{:copy}
name: Run CI
on: [push, pull_request]

jobs:
  normal_ci:
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Run normal CI
        run: ./run-tests

  pull_request_ci:
    runs-on: ubuntu-latest
    if: {% raw %}${{ github.event_name == 'pull_request' }}{% endraw %}
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Run PR CI
        run: ./run-additional-pr-ci
```

## Contexte `env`

Le contexte `env` contient des variables d’environnement qui ont été définies dans un workflow, un travail ou une étape. Pour plus d’informations sur la définition des variables d’environnement dans votre workflow, consultez « [Syntaxe de workflow pour {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#env) ».

La syntaxe du contexte `env` vous permet d’utiliser la valeur d’une variable d’environnement dans votre fichier de workflow. Vous pouvez utiliser le contexte `env` dans la valeur de n’importe quelle clé dans une étape, à l’exception des clés `id` et `uses`. Pour plus d’informations sur la syntaxe de l’étape, consultez « [Syntaxe de workflow pour {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idsteps) ».

Si vous souhaitez utiliser la valeur d’une variable d’environnement à l’intérieur d’un exécuteur, utilisez la méthode habituelle du système d’exploitation de l’exécuteur pour lire les variables d’environnement.

| Nom de la propriété | Type | Description |
|---------------|------|-------------|
| `env` | `object` | Ce contexte change pour chaque étape d’un travail. Vous pouvez accéder à ce contexte à partir de n’importe quelle étape d’un travail. Cet objet contient les propriétés listées ci-dessous. |
| `env.<env_name>` | `string` | Valeur d’une variable d’environnement spécifique. |

### Exemple de contenu du contexte `env`

Le contenu du contexte `env` est un mappage des noms de variables d’environnement à leurs valeurs. Le contenu du contexte peut changer en fonction de l’emplacement où il est utilisé dans l’exécution du workflow.

```json
{
  "first_name": "Mona",
  "super_duper_var": "totally_awesome"
}
```

### Exemple d’utilisation du contexte `env`

Cet exemple de workflow montre comment le contexte `env` peut être configuré au niveau du workflow, du travail et des étapes, ainsi que l’utilisation du contexte dans les étapes.

{% data reusables.repositories.actions-env-var-note %}

{% raw %}
```yaml{:copy}
name: Hi Mascot
on: push
env:
  mascot: Mona
  super_duper_var: totally_awesome

jobs:
  windows_job:
    runs-on: windows-latest
    steps:
      - run: echo 'Hi ${{ env.mascot }}'  # Hi Mona
      - run: echo 'Hi ${{ env.mascot }}'  # Hi Octocat
        env:
          mascot: Octocat
  linux_job:
    runs-on: ubuntu-latest
    env:
      mascot: Tux
    steps:
      - run: echo 'Hi ${{ env.mascot }}'  # Hi Tux
```
{% endraw %}

## Contexte `job`

Le contexte `job` contient des informations sur le travail en cours d’exécution.

| Nom de la propriété | Type | Description |
|---------------|------|-------------|
| `job` | `object` | Ce contexte change pour chaque travail d’une exécution de workflow. Vous pouvez accéder à ce contexte à partir de n’importe quelle étape d’un travail. Cet objet contient toutes les propriétés répertoriées ci-dessous. |
| `job.container` | `object` | Informations sur le conteneur du travail. Pour plus d’informations sur les conteneurs, consultez « [Syntaxe de workflow pour {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions#jobsjob_idcontainer) ». |
| `job.container.id` | `string` | ID du conteneur. |
| `job.container.network` | `string` | ID du réseau de conteneurs. L’exécuteur crée le réseau utilisé par tous les conteneurs dans un travail. |
| `job.services` | `object` | Conteneurs de service créés pour un travail. Pour plus d’informations sur les conteneurs de service, consultez « [Syntaxe de workflow pour {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions#jobsjob_idservices) ». |
| `job.services.<service_id>.id` | `string` | ID du conteneur de service. |
| `job.services.<service_id>.network` | `string` | ID du réseau de conteneurs de service. L’exécuteur crée le réseau utilisé par tous les conteneurs dans un travail. |
| `job.services.<service_id>.ports` | `object` | Ports exposés du conteneur de service. |
| `job.status` | `string` | L’état actuel du travail. Les valeurs possibles sont `success`, `failure` ou `cancelled`. |

### Exemple de contenu du contexte `job`

Cet exemple de contexte `job` utilise un conteneur de service PostgreSQL avec des ports mappés. En l’absence de conteneurs et de conteneurs de service dans un travail, le contexte `job` contient uniquement la propriété `status`.

```json
{
  "status": "success",
  "container": {
    "network": "github_network_53269bd575974817b43f4733536b200c"
  },
  "services": {
    "postgres": {
      "id": "60972d9aa486605e66b0dad4abb638dc3d9116f566579e418166eedb8abb9105",
      "ports": {
        "5432": "49153"
      },
      "network": "github_network_53269bd575974817b43f4733536b200c"
    }
  }
}
```

### Exemple d’utilisation du contexte `job`

Cet exemple de workflow configure un conteneur de service PostgreSQL et mappe automatiquement le port 5432 dans le conteneur de service à un port disponible choisi de manière aléatoire sur l’hôte. Le contexte `job` est utilisé pour accéder au numéro du port affecté sur l’hôte.

```yaml{:copy}
name: PostgreSQL Service Example
on: push
jobs:
  postgres-job:
    runs-on: ubuntu-latest
    services:
      postgres:
        image: postgres
        env:
          POSTGRES_PASSWORD: postgres
        options: --health-cmd pg_isready --health-interval 10s --health-timeout 5s --health-retries 5
        ports:
          # Maps TCP port 5432 in the service container to a randomly chosen available port on the host.
          - 5432

    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - run: pg_isready -h localhost -p {% raw %}${{ job.services.postgres.ports[5432] }}{% endraw %}
      - run: ./run-tests
```

{% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %}

## Contexte `jobs`

Le contexte `jobs` est disponible uniquement dans les workflows réutilisables et peut uniquement être utilisé dans le but de définir des sorties pour un workflow réutilisable. Pour plus d’informations, consultez « [Réutilisation de workflows](/actions/using-workflows/reusing-workflows#using-outputs-from-a-reusable-workflow) ».

| Nom de la propriété | Type | Description |
|---------------|------|-------------|
| `jobs` | `object` | Ceci est disponible uniquement dans les workflows réutilisables et peut uniquement être utilisé dans le but de définir des sorties pour un workflow réutilisable. Cet objet contient toutes les propriétés répertoriées ci-dessous.
| `jobs.<job_id>.result` | `string` | Résultat d’un travail dans le workflow réutilisable. Les valeurs possibles sont `success`, `failure`, `cancelled` ou `skipped`. |
| `jobs.<job_id>.outputs` | `object` | Ensemble de sorties d’un travail dans un workflow réutilisable. |
| `jobs.<job_id>.outputs.<output_name>` | `string` | Valeur d’une sortie spécifique pour un travail dans un workflow réutilisable. |

### Exemple de contenu du contexte `jobs`

Cet exemple de contexte `jobs` contient le résultat et les sorties d’un travail provenant de l’exécution d’un workflow réutilisable.

```json
{
  "example_job": {
    "result": "success",
    "outputs": {
      "output1": "hello",
      "output2": "world"
    }
  }
}
```

### Exemple d’utilisation du contexte `jobs`

Cet exemple de workflow réutilisable utilise le contexte `jobs` afin de définir des sorties pour le workflow réutilisable. Notez comment les sorties passent des étapes au travail, puis au déclencheur `workflow_call`. Pour plus d’informations, consultez « [Réutilisation de workflows](/actions/using-workflows/reusing-workflows#using-outputs-from-a-reusable-workflow) ».

{% raw %}
```yaml{:copy}
name: Reusable workflow

on:
  workflow_call:
    # Map the workflow outputs to job outputs
    outputs:
      firstword:
        description: "The first output string"
        value: ${{ jobs.example_job.outputs.output1 }}
      secondword:
        description: "The second output string"
        value: ${{ jobs.example_job.outputs.output2 }}

jobs:
  example_job:
    name: Generate output
    runs-on: ubuntu-latest
    # Map the job outputs to step outputs
    outputs:
      output1: ${{ steps.step1.outputs.firstword }}
      output2: ${{ steps.step2.outputs.secondword }}
    steps:
      - id: step1{% endraw %}
{%- ifversion actions-save-state-set-output-envs %}
        run: echo "firstword=hello" >> $GITHUB_OUTPUT
{%- else %}
        run: echo "::set-output name=firstword::hello"
{%- endif %}{% raw %}
      - id: step2{% endraw %}
{%- ifversion actions-save-state-set-output-envs %}
        run: echo "secondword=world" >> $GITHUB_OUTPUT
{%- else %}
        run: echo "::set-output name=secondword::world"
{%- endif %}{% raw %}
```
{% endraw %}

{% endif %}

## Contexte `steps`

Le contexte `steps` contient des informations sur les étapes du travail en cours qui ont un [`id`](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstepsid) spécifié et qui ont déjà été exécutées.

| Nom de la propriété | Type | Description |
|---------------|------|-------------|
| `steps` | `object` | Ce contexte change pour chaque étape d’un travail. Vous pouvez accéder à ce contexte à partir de n’importe quelle étape d’un travail. Cet objet contient toutes les propriétés répertoriées ci-dessous. |
| `steps.<step_id>.outputs` | `object` | Ensemble de sorties définies pour l’étape. Pour plus d’informations, consultez « [Syntaxe des métadonnées pour {% data variables.product.prodname_actions %}](/articles/metadata-syntax-for-github-actions#outputs-for-docker-container-and-javascript-actions) ». |
| `steps.<step_id>.conclusion` | `string` | Résultat d’une étape terminée après l’application de [`continue-on-error`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepscontinue-on-error). Les valeurs possibles sont `success`, `failure`, `cancelled` ou `skipped`. Quand une étape `continue-on-error` échoue, `outcome` a pour valeur `failure`, mais la `conclusion` finale a pour valeur `success`. |
| `steps.<step_id>.outcome` | `string` | Résultat d’une étape terminée avant l’application de [`continue-on-error`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepscontinue-on-error). Les valeurs possibles sont `success`, `failure`, `cancelled` ou `skipped`. Quand une étape `continue-on-error` échoue, `outcome` a pour valeur `failure`, mais la `conclusion` finale a pour valeur `success`. |
| `steps.<step_id>.outputs.<output_name>` | `string` | Valeur d’une sortie spécifique. |

### Exemple de contenu du contexte `steps`

Cet exemple de contexte `steps` montre deux étapes précédentes qui avaient un [`id`](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstepsid) spécifié. La première étape avait un `id` nommé `checkout`, et la seconde `generate_number`. L’étape `generate_number` avait une sortie nommée `random_number`.

```json
{
  "checkout": {
    "outputs": {},
    "outcome": "success",
    "conclusion": "success"
  },
  "generate_number": {
    "outputs": {
      "random_number": "1"
    },
    "outcome": "success",
    "conclusion": "success"
  }
}
```

### Exemple d’utilisation du contexte `steps`

Cet exemple de workflow génère un nombre aléatoire en tant que sortie en une étape, et une étape ultérieure utilise le contexte `steps` pour lire la valeur de cette sortie.

```yaml{:copy}
name: Generate random failure
on: push
jobs:
  randomly-failing-job:
    runs-on: ubuntu-latest
    steps:
      - id: checkout
        uses: {% data reusables.actions.action-checkout %}
      - name: Generate 0 or 1
        id: generate_number
{%- ifversion actions-save-state-set-output-envs %}
        run:  echo "random_number=$(($RANDOM % 2))" >> $GITHUB_OUTPUT
{%- else %}
        run:  echo "::set-output name=random_number::$(($RANDOM % 2))"
{%- endif %}
      - name: Pass or fail
        run: |
          if [[ {% raw %}${{ steps.generate_number.outputs.random_number }}{% endraw %} == 0 ]]; then exit 0; else exit 1; fi
```

## Contexte `runner`

Le contexte `runner` contient des informations sur l’exécuteur qui exécute le travail en cours.

| Nom de la propriété | Type | Description |
|---------------|------|-------------|
| `runner` | `object` | Ce contexte change pour chaque travail d’une exécution de workflow. Cet objet contient toutes les propriétés répertoriées ci-dessous. |
| `runner.name` | `string` | {% data reusables.actions.runner-name-description %} |
| `runner.os` | `string` | {% data reusables.actions.runner-os-description %} |{% ifversion actions-runner-arch-envvars %}
| `runner.arch` | `string` | {% data reusables.actions.runner-arch-description %} |{% endif %}
| `runner.temp` | `string` | {% data reusables.actions.runner-temp-directory-description %} |
| `runner.tool_cache` | `string` | {% ifversion ghae %}{% data reusables.actions.self-hosted-runners-software %} {% else %} {% data reusables.actions.runner-tool-cache-description %} {% endif %}|
| `runner.debug` | `string` | {% data reusables.actions.runner-debug-description %} |

{%- comment %} La propriété `runner.workspace` n’est volontairement pas documentée. Il s’agit d’une ancienne propriété Actions qui n’est désormais pas pertinente pour les utilisateurs par rapport à `github.workspace`. Elle est conservée à des fins de compatibilité.
| `runner.workspace` | `string` | | {%- endcomment %}

### Exemple de contenu du contexte `runner`

L’exemple de contexte suivant provient d’un exécuteur linux hébergé par {% data variables.product.prodname_dotcom %}.

```json
{
  "os": "Linux",
  "arch": "X64",
  "name": "GitHub Actions 2",
  "tool_cache": "/opt/hostedtoolcache",
  "temp": "/home/runner/work/_temp"
  {%- comment %}
  # The `runner.workspace` property is purposefully not documented. It is an early Actions property that now isn't relevant for users, compared to `github.workspace`. It is kept around for compatibility.
  "workspace": "/home/runner/work/hello-world"
  {%- endcomment %}
}
```

### Exemple d’utilisation du contexte `runner`

Cet exemple de workflow utilise le contexte `runner` pour définir le chemin jusqu’au répertoire temporaire afin d’écrire les journaux et, si le workflow échoue, il charge ces journaux en tant qu’artefact.

```yaml{:copy}
name: Build
on: push

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Build with logs
        run: |
          mkdir {% raw %}${{ runner.temp }}{% endraw %}/build_logs
          ./build.sh --log-path {% raw %}${{ runner.temp }}{% endraw %}/build_logs
      - name: Upload logs on fail
        if: {% raw %}${{ failure() }}{% endraw %}
        uses: {% data reusables.actions.action-upload-artifact %}
        with:
          name: Build failure logs
          path: {% raw %}${{ runner.temp }}{% endraw %}/build_logs
```

## Contexte `secrets`

Le contexte `secrets` contient les noms et les valeurs des secrets disponibles pour une exécution de workflow. Le contexte `secrets` n’est pas disponible pour les actions composites pour des raisons de sécurité. Si vous souhaitez passer un secret à une action composite, vous devez le faire explicitement en tant qu’entrée. Pour plus d’informations sur les secrets, consultez « [Secrets chiffrés](/actions/security-guides/encrypted-secrets) ».

`GITHUB_TOKEN` est un secret qui est créé automatiquement pour chaque exécution de workflow et qui est toujours inclus dans le contexte `secrets`. Pour plus d’informations, consultez « [Authentification automatique par jeton](/actions/security-guides/automatic-token-authentication) ».

{% data reusables.actions.secrets-redaction-warning %}

| Nom de la propriété | Type | Description |
|---------------|------|-------------|
| `secrets` | `object` | Ce contexte est le même pour chaque travail dans une exécution de workflow. Vous pouvez accéder à ce contexte à partir de n’importe quelle étape d’un travail. Cet objet contient toutes les propriétés répertoriées ci-dessous. |
| `secrets.GITHUB_TOKEN` | `string` | Jeton créé automatiquement pour chaque exécution de workflow. Pour plus d’informations, consultez « [Authentification automatique par jeton](/actions/security-guides/automatic-token-authentication) ». |
| `secrets.<secret_name>` | `string` | Valeur d’un secret spécifique. |

### Exemple de contenu du contexte `secrets`

L’exemple de contenu suivant du contexte `secrets` montre le jeton `GITHUB_TOKEN` automatique, ainsi que deux autres secrets disponibles pour l’exécution du workflow.

```json
{
  "github_token": "***",
  "NPM_TOKEN": "***",
  "SUPERSECRET": "***"
}
```

### Exemple d’utilisation du contexte `secrets`

{% data reusables.actions.github_token-input-example %}

## Contexte `strategy`

Pour les workflows avec une matrice, le contexte `strategy` contient des informations sur la stratégie d’exécution de matrice pour le travail en cours.

| Nom de la propriété | Type | Description |
|---------------|------|-------------|
| `strategy` | `object` | Ce contexte change pour chaque travail d’une exécution de workflow. Vous pouvez accéder à ce contexte à partir de n’importe quel travail ou étape d’un workflow. Cet objet contient toutes les propriétés répertoriées ci-dessous. |
| `strategy.fail-fast` | `boolean` | Quand `true`, tous les travaux en cours sont annulés si un travail d’une matrice échoue. Pour plus d’informations, consultez « [Syntaxe de workflow pour {% data variables.product.prodname_actions %}](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstrategyfail-fast) ». |
| `strategy.job-index` | `number` | Index du travail en cours dans la matrice. **Remarque :** Ce nombre est un nombre basé sur zéro. L’index du premier travail dans la matrice est `0`. |
| `strategy.job-total` | `number` | Nombre total de travaux dans la matrice. **Remarque :** Ce nombre **n’est pas** un nombre basé sur zéro. Par exemple, pour une matrice avec quatre travaux, la valeur de `job-total` est `4`. |
| `strategy.max-parallel` | `number` | Nombre maximal de travaux pouvant s’exécuter simultanément lors de l’utilisation d’une stratégie de travail `matrix`. Pour plus d’informations, consultez « [Syntaxe de workflow pour {% data variables.product.prodname_actions %}](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstrategymax-parallel) ». |

### Exemple de contenu du contexte `strategy`

L’exemple de contenu suivant du contexte `strategy` provient d’une matrice avec quatre travaux et est extrait du travail final. Notez la différence entre le nombre `job-index` basé sur zéro et `job-total` qui n’est pas basé sur zéro.

```json
{
  "fail-fast": true,
  "job-index": 3,
  "job-total": 4,
  "max-parallel": 4
}
```

### Exemple d’utilisation du contexte `strategy`

Cet exemple de workflow utilise la propriété `strategy.job-index` pour définir un nom unique pour un fichier journal pour chaque travail d’une matrice.

```yaml{:copy}
name: Test matrix
on: push

jobs:
  test:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        test-group: [1, 2]
        node: [14, 16]
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - run: npm test > test-job-{% raw %}${{ strategy.job-index }}{% endraw %}.txt
      - name: Upload logs
        uses: {% data reusables.actions.action-upload-artifact %}
        with:
          name: Build log for job {% raw %}${{ strategy.job-index }}{% endraw %}
          path: test-job-{% raw %}${{ strategy.job-index }}{% endraw %}.txt
```

## Contexte `matrix`

Pour les workflows avec une matrice, le contexte `matrix` contient les propriétés de matrice définies dans le fichier de workflow qui s’appliquent au travail en cours. Par exemple, si vous configurez une matrice avec les clés `os` et `node`, l’objet de contexte `matrix` inclut les propriétés `os` et `node` avec les valeurs en cours d’utilisation pour le travail en cours.

Aucune propriété standard ne figure dans le contexte `matrix`, uniquement celles qui sont définies dans le fichier de workflow.

| Nom de la propriété | Type | Description |
|---------------|------|-------------|
| `matrix` | `object` | Ce contexte est disponible uniquement pour les travaux d’une matrice, et il change pour chaque travail d’une exécution de workflow. Vous pouvez accéder à ce contexte à partir de n’importe quel travail ou étape d’un workflow. Cet objet contient les propriétés listées ci-dessous. |
| `matrix.<property_name>` | `string` | Valeur d’une propriété de matrice. |

### Exemple de contenu du contexte `matrix`

L’exemple de contenu suivant du contexte `matrix` provient d’un travail dans une matrice dont les propriétés de matrice `os` et `node` sont définies dans le workflow. Le travail exécute la combinaison matricielle d’un système d’exploitation `ubuntu-latest` et de la version `16` de Node.js.

```json
{
  "os": "ubuntu-latest",
  "node": 16
}
```

### Exemple d’utilisation du contexte `matrix`

Cet exemple de workflow crée une matrice avec les clés `os` et `node`. Il utilise la propriété `matrix.os` pour définir le type d’exécuteur pour chaque travail et utilise la propriété `matrix.node` pour définir la version de Node.js pour chaque travail.

```yaml{:copy}
name: Test matrix
on: push

jobs:
  build:
    runs-on: {% raw %}${{ matrix.os }}{% endraw %}
    strategy:
      matrix:
        os: [ubuntu-latest, windows-latest]
        node: [14, 16]
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: {% raw %}${{ matrix.node }}{% endraw %}
      - name: Install dependencies
        run: npm ci
      - name: Run tests
        run: npm test
```

## Contexte `needs`

Le contexte `needs` contient des sorties provenant de tous les travaux définis comme une dépendance directe du travail en cours. Notez que cela n’inclut pas les travaux dépendants implicitement (par exemple, les travaux dépendants d’un travail dépendant). Pour plus d’informations sur la définition des dépendances de travail, consultez « [Syntaxe de workflow pour {% data variables.product.prodname_actions %}](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idneeds) ».

| Nom de la propriété | Type | Description |
|---------------|------|-------------|
| `needs` | `object` | Ce contexte est rempli uniquement pour les exécutions de workflow qui ont des travaux dépendants, et il change pour chaque travail d’une exécution de workflow. Vous pouvez accéder à ce contexte à partir de n’importe quel travail ou étape d’un workflow. Cet objet contient toutes les propriétés répertoriées ci-dessous. |
| `needs.<job_id>` | `object` | Travail unique dont dépend le travail en cours. |
| `needs.<job_id>.outputs` | `object` | Ensemble de sorties d’un travail dont dépend le travail en cours. |
| `needs.<job_id>.outputs.<output name>` | `string` | Valeur d’une sortie spécifique pour un travail dont dépend le travail en cours. |
| `needs.<job_id>.result` | `string` | Résultat d’un travail dont dépend le travail en cours. Les valeurs possibles sont `success`, `failure`, `cancelled` ou `skipped`. |

### Exemple de contenu du contexte `needs`

L’exemple de contenu suivant du contexte `needs` montre des informations pour deux travaux dont dépend le travail en cours.

```json
{
  "build": {
    "result": "success",
    "outputs": {
      "build_id": "ABC123"
    }
  },
  "deploy": {
    "result": "failure",
    "outputs": {}
  }
}
```

### Exemple d’utilisation du contexte `needs`

Cet exemple de workflow comporte trois travaux : un travail `build` qui crée une build, un travail `deploy` qui nécessite le travail `build` et un travail `debug` qui nécessite les travaux `build` et `deploy`, et qui s’exécute uniquement en cas d’échec dans le workflow. Le travail `deploy` utilise également le contexte `needs` pour accéder à une sortie du travail `build`.

```yaml{:copy}
name: Build and deploy
on: push

jobs:
  build:
    runs-on: ubuntu-latest
    outputs:
      build_id: {% raw %}${{ steps.build_step.outputs.build_id }}{% endraw %}
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Build
        id: build_step
        run: |
          ./build
{%- ifversion actions-save-state-set-output-envs %}
          echo "build_id=$BUILD_ID" >> $GITHUB_OUTPUT
{%- else %}
          echo "::set-output name=build_id::$BUILD_ID"
{%- endif %}
  deploy:
    needs: build
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - run: ./deploy --build {% raw %}${{ needs.build.outputs.build_id }}{% endraw %}
  debug:
    needs: [build, deploy]
    runs-on: ubuntu-latest
    if: {% raw %}${{ failure() }}{% endraw %}
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - run: ./debug
```

{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %}
## Contexte `inputs`

Le contexte `inputs` contient les propriétés d’entrée passées à une action{% ifversion actions-unified-inputs %},{% else %} ou{% endif %} à un workflow réutilisable{% ifversion actions-unified-inputs %}, ou à un workflow déclenché manuellement{% endif %}. {% ifversion actions-unified-inputs %}Pour les workflows réutilisables, les{% else %}Les{% endif %} noms et types d’entrée sont définis dans la [configuration d’événement `workflow_call`](/actions/learn-github-actions/events-that-trigger-workflows#workflow-reuse-events) d’un workflow réutilisable. Les valeurs d’entrée sont passées à partir de [`jobs.<job_id>.with`](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idwith) dans un workflow externe qui appelle le workflow réutilisable. {% ifversion actions-unified-inputs %}Pour les workflows déclenchés manuellement, les entrées sont définies dans la [configuration d’événement `workflow_dispatch`](/actions/learn-github-actions/events-that-trigger-workflows#workflow_dispatch) d’un workflow.{% endif %}

Aucune propriété standard ne figure dans le contexte `inputs`, uniquement celles qui sont définies dans le fichier de workflow.

{% data reusables.actions.reusable-workflows-enterprise-beta %}

| Nom de la propriété | Type | Description |
|---------------|------|-------------|
| `inputs` | `object` | Ce contexte est disponible uniquement dans un [workflow réutilisable](/actions/learn-github-actions/reusing-workflows){% ifversion actions-unified-inputs %} ou dans un workflow déclenché par l’[événement `workflow_dispatch`](/actions/learn-github-actions/events-that-trigger-workflows#workflow_dispatch){% endif %}. Vous pouvez accéder à ce contexte à partir de n’importe quel travail ou étape d’un workflow. Cet objet contient les propriétés listées ci-dessous. |
| `inputs.<name>` | `string` ou `number` ou `boolean` | Chaque valeur d’entrée transmise à partir d’un workflow externe. |

### Exemple de contenu du contexte `inputs`

L’exemple de contenu suivant du contexte `inputs` provient d’un workflow qui a défini les entrées `build_id`, `deploy_target` et `perform_deploy`.

```json
{
  "build_id": 123456768,
  "deploy_target": "deployment_sys_1a",
  "perform_deploy": true
}
```

### Exemple d’utilisation du contexte `inputs` dans un workflow réutilisable

Cet exemple de workflow réutilisable tire parti du contexte `inputs` pour obtenir les valeurs des entrées `build_id`, `deploy_target` et `perform_deploy` qui ont été passées au workflow réutilisable à partir du workflow appelant.

{% raw %}
```yaml{:copy}
name: Reusable deploy workflow
on:
  workflow_call:
    inputs:
      build_id:
        required: true
        type: number
      deploy_target:
        required: true
        type: string
      perform_deploy:
        required: true
        type: boolean

jobs:
  deploy:
    runs-on: ubuntu-latest
    if: ${{ inputs.perform_deploy }}
    steps:
      - name: Deploy build to target
        run: deploy --build ${{ inputs.build_id }} --target ${{ inputs.deploy_target }}
```
{% endraw %}

{% ifversion actions-unified-inputs %}
### Exemple d’utilisation du contexte `inputs` dans un workflow déclenché manuellement

Cet exemple de workflow déclenché par un événement `workflow_dispatch` utilise le contexte `inputs` pour obtenir les valeurs des entrées `build_id`, `deploy_target` et `perform_deploy` qui ont été passées au workflow.

{% raw %}
```yaml{:copy}
on:
  workflow_dispatch:
    inputs:
      build_id:
        required: true
        type: string
      deploy_target:
        required: true
        type: string
      perform_deploy:
        required: true
        type: boolean

jobs:
  deploy:
    runs-on: ubuntu-latest
    if: ${{ inputs.perform_deploy }}
    steps:
      - name: Deploy build to target
        run: deploy --build ${{ inputs.build_id }} --target ${{ inputs.deploy_target }}
```
{% endraw %} {% endif %}

{% endif %}
