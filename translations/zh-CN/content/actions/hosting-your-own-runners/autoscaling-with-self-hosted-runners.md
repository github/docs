---
title: 使用自托管运行器自动缩放
intro: 您可以自动扩展自托管运行器以响应 web 挂钩事件。
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>3.2'
  ghae: issue-4462
type: overview
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## 关于自动缩放

您可以自动增加或减少环境中自托管运行器的数量，以响应您收到的带特定标签的 web 挂钩事件。 例如，您可以创建自动化，以便在每次收到包含  [`queued`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#workflow_job) 活动的 [`workflow_job`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#workflow_job) web 挂钩事件时添加新的自托管运行器，这会通知您新作业已准备好进行处理。 Web 挂钩有效负载包含标签数据，因此您可以识别作业请求的运行器类型。 作业完成后，您可以创建自动化，以删除运行器以响应 `workflow_job` [`completed`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#workflow_job) 活动。

## 推荐的自动缩放解决方案

{% data variables.product.prodname_dotcom %} 推荐两个开源项目并与之密切合作，您可以使用它们来自动缩放运行器。 根据您的需求，一个或两个解决方案可能适用。

以下存储库提供了有关设置这些自动缩放程序的详细说明：

- [actions-runner-controller/actions-runner-controller](https://github.com/actions-runner-controller/actions-runner-controller) - Kubernetes 控制器，用于 {% data variables.product.prodname_actions %} 自托管运行器。
- [philips-labs/terraform-aws-github-runner](https://github.com/philips-labs/terraform-aws-github-runner) - 用于 Amazon Web Services 上可扩展 {% data variables.product.prodname_actions %} 运行器的 Terraform 模块。

每个解决方案都有一些需要考虑的重要细节：

| **功能**     | **actions-runner-controller**                      | **terraform-aws-github-runner** |
|:---------- |:-------------------------------------------------- |:------------------------------- |
| Runtime    | Kubernetes                                         | Linux 和 Windows VM              |
| 支持的云       | Azure、Amazon Web Services、Google Cloud Platform、本地 | Amazon Web Services             |
| 运行器可以缩放的位置 | 企业、组织和存储库级别。 通过运行器标签和运行器组。                         | 组织和存储库级别。 通过运行器标签和运行器组。         |
| 如何缩放运行器    | Web 挂钩事件、计划、基于拉取                                   | Web 挂钩事件、计划（仅限组织级运行器）           |

## 使用临时运行器进行自动缩放

{% data variables.product.prodname_dotcom %} 建议使用临时的自托管运行器实现自动缩放；不建议使用持久的自托管运行器进行自动缩放。 在某些情况下， {% data variables.product.prodname_dotcom %} 无法保证作业在关闭时不会分配给持久性运行器。 对于临时运行器，这可以得到保证，因为 {% data variables.product.prodname_dotcom %} 只将一个作业分配给运行器。

这种方法允许您将运行器作为临时系统进行管理，因为您可以使用自动化为每个作业提供干净的环境。 这有助于限制以前工作中任何敏感资源的暴露，也有助于降低受损运行器获得新作业的风险。

要将临时运行器添加到环境中，请在使用 `config.sh` 注册运行器时包括 `--ephemeral` 参数。 例如：

```shell
./config.sh --url https://github.com/octo-org --token example-token --ephemeral
```

然后，{% data variables.product.prodname_actions %} 服务将在处理完一个作业后自动取消注册运行器。 然后，您可以创建自己的自动化，在取消注册后擦除运行器。

{% note %}

**注意：**  如果作业标记为某种类型的运行器，但没有与该类型匹配的作业可用，则该作业在排队时不会立即失败。 相反，作业将保持排队状态，直到 24 小时超时期限到期。

{% endnote %}

## 控制自托管运行器上的运行器软件更新

默认情况下，每当有新版本的运行器软件可用时，自托管运行器将自动执行软件更新。  如果在容器中使用临时运行器，则当发布新的运行器版本时，这可能会导致重复的软件更新。  关闭自动更新允许你按照自己的计划直接更新容器映像上的运行器版本。

如果要关闭自动软件更新并自行安装软件更新，可以在启动运行器时指定 `--disableupdate` 参数。  例如：

```shell
./run.sh --disableupdate
```

如果禁用自动更新，您仍必须定期更新运行器版本。  {% data variables.product.prodname_actions %} 中的新功能需要更改 {% data variables.product.prodname_actions %} 服务_和_运行器软件 。  在没有软件更新的情况下，运行器可能无法正确处理利用 {% data variables.product.prodname_actions %} 新功能的作业。

如果禁用自动更新，则需要在新版本可用后的 30 天内更新运行器版本。  您可能希望在 [`actions/runner` 仓库](https://github.com/actions/runner/releases)中订阅发布通知。 更多信息请参阅“[配置通知](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/configuring-notifications#about-custom-notifications)”。

有关如何安装最新运行器版本的说明，请参阅安装说明，了解[最新版本](https://github.com/actions/runner/releases)。

{% note %}

**注意：**如果您在 30 天内未执行软件更新，{% data variables.product.prodname_actions %} 服务将不会将作业排队到您的运行器。  此外，如果需要关键安全更新，{% data variables.product.prodname_actions %} 服务在更新之前不会将作业排队到运行器。

{% endnote %}

## 使用 web 挂钩进行自动缩放

可以使用从 [`workflow_job`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#workflow_job) web 挂钩接收的有效负载创建自己的自动缩放环境。 此 web 挂钩在存储库、组织和企业级别可用，此事件的有效负载包含与工作流程作业生命周期的各个阶段相对应的 `action` 键；例如，当作业为 `queued`、`in_progress` 和 `completed` 时。 然后，您必须创建自己的缩放自动化以响应这些 web 挂钩有效负载。

- 有关 `workflow_job` web 挂钩的详细信息，请参阅“[web 挂钩事件和有效负载](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#workflow_job)”。
- 要了解如何使用 web 挂钩，请参阅“[创建 web 挂钩](/developers/webhooks-and-events/webhooks/creating-webhooks)”。

## 身份验证要求

您可以使用 [API](/rest/reference/actions#self-hosted-runners)注册和删除存储库和组织自托管运行器。 若要向 API 进行身份验证，自动缩放实现可以使用访问令牌或 {% data variables.product.prodname_dotcom %} 应用。

访问令牌将需要以下作用域：

- 对于私有存储库，请使用具有 [`repo` 作用域](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/#available-scopes)的访问令牌。
- 对于公共存储库，请使用具有 [`public_repo` 作用域](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/#available-scopes)的访问令牌。
- 对于组织，请使用具有 [`admin:org` 作用域](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/#available-scopes)的访问令牌。

要使用 {% data variables.product.prodname_dotcom %} 应用进行身份验证，必须为其分配以下权限：
- 对于存储库，请分配`管理`权限。
- 对于组织，请分配 `organization_self_hosted_runners` 权限。

您可以使用 [API](/rest/reference/actions#self-hosted-runners) 注册和删除企业自托管运行器。 要向 API 进行身份验证，自动缩放实现可以使用访问令牌。

访问令牌将需要 `manage_runners:enterprise` 作用域。
