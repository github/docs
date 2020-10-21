---
title: 设置操作的退出代码
shortTitle: 设置退出代码
intro: '您可以使用退出代码来设置操作的状态。 {% data variables.product.prodname_dotcom %} 显示状态以指示操作通过还是失败。'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /actions/building-actions/setting-exit-codes-for-actions
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### 关于退出代码

{% data variables.product.prodname_dotcom %} 使用退出代码设置操作的检查运行状态，可以是 `success` 或 `failure`。

| 退出状态 | 检查运行状态    | 描述                                                                          |
| ---- | --------- | --------------------------------------------------------------------------- |
| `0`  | `success` | 操作已成功完成，依赖它的其他操作可以开始。                                                       |
| 非零值  | `failure` | 任何其他退出代码都表示操作失败。 当操作失败时，所有同时进行的操作都会取消，且跳过未来的操作。 检查运行和检查套件都将收到 `failure` 状态。 |

### 在 JavaScript 操作中设置失败退出代码

如果要创建 JavaScript 操作，您可以使用操作工具包 [`@actions/core`](https://github.com/actions/toolkit/tree/main/packages/core) 包来记录消息并设置失败退出代码。 例如：

```javascript
try {
  // something
} catch (error) {
  core.setFailed(error.message);
}
```

更多信息请参阅“[创建 JavaScript 操作](/articles/creating-a-javascript-action)”。

### 在 Docker 容器操作中设置失败退出代码

如果要创建 Docker 容器操作，您可以在 `entrypoint.sh` 脚本中设置失败退出代码。 例如：

```
if <condition> ; then
  echo "Game over!"
  exit 1
fi
```

更多信息请参阅“[创建 Docker 容器操作](/articles/creating-a-docker-container-action)”。
