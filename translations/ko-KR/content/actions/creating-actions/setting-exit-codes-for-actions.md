---
title: Setting exit codes for actions
shortTitle: Setting exit codes
intro: 'You can use exit codes to set the status of an action. {% data variables.product.prodname_dotcom %} displays statuses to indicate passing or failing actions.'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /actions/building-actions/setting-exit-codes-for-actions
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
type: 'how_to'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### About exit codes

{% data variables.product.prodname_dotcom %} uses the exit code to set the action's check run status, which can be `success` or `failure`.

| Exit status   | Check run status | 설명                                                                                                                                                                                                    |
| ------------- | ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `0`           | `success`        | The action completed successfully and other tasks that depends on it can begin.                                                                                                                       |
| Nonzero value | `failure`        | Any other exit code indicates the action failed. When an action fails, all concurrent actions are canceled and future actions are skipped. The check run and check suite both get a `failure` status. |

### Setting a failure exit code in a JavaScript action

If you are creating a JavaScript action, you can use the actions toolkit [`@actions/core`](https://github.com/actions/toolkit/tree/main/packages/core) package to log a message and set a failure exit code. 예시:

```javascript
try {
  // something
} catch (error) {
  core.setFailed(error.message);
}
```

For more information, see "[Creating a JavaScript action](/articles/creating-a-javascript-action)."

### Setting a failure exit code in a Docker container action

If you are creating a Docker container action, you can set a failure exit code in your `entrypoint.sh` script. 예시:

```
if <condition> ; then
  echo "Game over!"
  exit 1
fi
```

For more information, see "[Creating a Docker container action](/articles/creating-a-docker-container-action)."
