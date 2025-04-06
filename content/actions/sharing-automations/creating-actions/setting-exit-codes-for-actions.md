---
title: Setting exit codes for actions
shortTitle: Set exit codes
intro: 'You can use exit codes to set the status of an action. {% data variables.product.prodname_dotcom %} displays statuses to indicate passing or failing actions.'
redirect_from:
  - /actions/building-actions/setting-exit-codes-for-actions
  - /actions/creating-actions/setting-exit-codes-for-actions
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
type: how_to
---
 
{% data reusables.actions.enterprise-github-hosted-runners %}

## About exit codes

{% data variables.product.prodname_dotcom %} uses the exit code to set the action's check run status, which can be `success` or `failure`.

Exit status | Check run status | Description
------------|------------------|------------
`0` | `success` | The action completed successfully and other tasks that depend on it can begin.
Nonzero value (any integer but 0)| `failure` | Any other exit code indicates the action failed. When an action fails, all concurrent actions are canceled and future actions are skipped. The check run and check suite both get a `failure` status.

## Setting a failure exit code in a JavaScript action

If you are creating a JavaScript action, you can use the actions toolkit [`@actions/core`](https://github.com/actions/toolkit/tree/main/packages/core) package to log a message and set a failure exit code. For example:

```javascript
try {
  // something
} catch (error) {
  core.setFailed(error.message);
}
```

For more information, see "[AUTOTITLE](/actions/creating-actions/creating-a-javascript-action)."

## Setting a failure exit code in a Docker container action

If you are creating a Docker container action, you can set a failure exit code in your `entrypoint.sh` script. For example:

```shell
if <condition> ; then
  echo "Game over!"
  exit 1
fi
```

For more information, see "[AUTOTITLE](/actions/creating-actions/creating-a-docker-container-action)."
