---
title: GitHub 操作的安全强化
shortTitle: 安全强化
intro: '使用 {% data variables.product.prodname_actions %} 功能的良好安全实践。'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /actions/getting-started-with-github-actions/security-hardening-for-github-actions
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### 概览

本指南介绍如何为某些 {% data variables.product.prodname_actions %} 功能配置安全强化。 如果不熟悉 {% data variables.product.prodname_actions %} 概念，请参阅“[GitHub 操作的核心概念](/actions/getting-started-with-github-actions/core-concepts-for-github-actions)”。

### 使用密码

敏感值绝不能以明文存储在工作流程文件中，而应存储为密码。 [密码](/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets)可在组织或仓库级配置，可用于在 {% data variables.product.product_name %} 中存储敏感信息。

密码使用 [Libsodium 密封箱](https://libsodium.gitbook.io/doc/public-key_cryptography/sealed_boxes)，以使它们在到达 {% data variables.product.product_name %} 前被加密处理。 [使用 UI](/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets#creating-encrypted-secrets-for-a-repository) 或通过 [REST API](/rest/reference/actions#secrets) 提交密码时就会发生这种情况。 此客户端加密有助于最大程度地减少与 {% data variables.product.product_name %}基础架构中的意外日志记录相关的风险（例如，异常日志和请求日志等）。 密钥在上传后，{% data variables.product.product_name %} 可对其进行解密，以便它能够被注入工作流程运行时。

为了帮助防止意外泄露，{% data variables.product.product_name %} 使用一种机制尝试对运行日志中显示的任何密码进行编校。 此编校会寻找任何已配置密码的精确匹配项，以及值的常见编码，如 Base64。 但是，由于密码值可以通过多种方式转换，因此不能保证此编校。 因此，你应该采取某些积极主动的步骤和良好的做法，以帮助确保密码得到编校， 并限制与密码相关的其他风险：

- **切勿将结构化数据用作密码**
    - 非结构化数据可能导致日志中的密码编校失败，因为编校很大程度上取决于查找特定密码值的完全匹配项。 例如，不要使用 JSON、XML 或 YAML（或类似）的 Blob 来封装密码值，否则会显著降低密码被正确编校的可能性。 而应为每个敏感值创建单独的密码。
- **注册工作流程中使用的所有密码**
    - 如果密码用于生成工作流程中的另一个敏感值，则该生成的值应正式[注册为密码](https://github.com/actions/toolkit/tree/main/packages/core#setting-a-secret)，使其出现在日志中时将会得到编校。 例如，如果使用私钥生成签名的 JWT 来访问 Web API，请确保将该 JWT 注册为密码，否则，如果它进入日志输出，则不会得到编校。
    - 注册密码也适用于任何类型的转换/编码。 如果以某种方式（如 Base64 或 URL 编码）转换您的密码，请确保将新值也注册为密码。
- **审核如何处理密码**
    - 审核密码的使用方式，以帮助确保按预期方式处理密码。 您可以通过检查执行工作流程的仓库的源代码并检查工作流程中使用的任何操作来进行审核。 例如，确认它们未发送到非预期主机，或明确打印到日志输出。
    - 在测试有效/无效输入后查看工作流程的运行日志，并确认密码已正确编校或未显示。 您调用的命令或工具如何向 `STDOUT` 和 `STDERR` 发送错误并不总是很明显，密码随后可能会在错误日志中生成错误。 因此，在测试有效和无效的输入后，最好是手动查看工作流程日志。
- **使用最小范围的凭据**
    - 确保工作流程中使用的凭据具有所需的最小权限，并请注意，任何对仓库具有写入权限的用户都可访问仓库中配置的所有密码。
- **审核并轮换注册密码**
    - 定期查查已注册的密码，以确认它们仍是必需的。 删除不再需要的密码。
    - 定期轮换密码，以减小泄露的密码有效的时间窗。

### 使用第三方操作

工作流程中的个别作业可以与其他作业相互作用（和妥协）。 例如，查询以后作业使用的环境变量，将文件写入以后作业处理的共享目录，或者更直接地与 Docker 套接字接交互，以及检查其他正在运行的容器并执行其中的命令。

这意味着工作流程中单一操作的泄露可能很严重，因为这个泄露的操作可以访问您仓库中配置的所有密码， 并且可以使用 `GITHUB_TOKENN` 写入仓库。 因此，从 {% data variables.product.prodname_dotcom %} 上的第三方仓库获取操作的风险很大。 您可以遵循以下良好做法来帮助降低此风险：

* **将操作固定到全长提交 SHA**

  将操作固定到全长提交 SHA 是当前将操作用作不可变版本的唯一方法。 固定到特定 SHA 有助于降低恶意执行者向操作仓库添加后门的风险，因为他们需要为有效的 Git 对象负载生成 SHA-1 冲突。

  {% warning %}

  **警告** 提交 SHA 的简短版本不安全，绝不可用于指定操作的 Git 引用。 由于仓库网络的工作方式，任何用户都可以复刻仓库，将精心编写的提交推送到与短 SHA 冲突的仓库。 这会导致该 SHA 上的后续克隆失败，因为它成为不明确的提交。 因此，使用缩短的 SHA 的任何工作流程将立即失败。

  {% endwarning %}
* **审核操作的源代码**

  确保操作按照预期处理仓库和密码的内容。 例如，确认密码未发送到非预期主机，或者没有被无意中记录。

* **仅当您信任创建者时，才将操作固定到标记**

  尽管固定到提交 SHA 是最安全的选项，但指定标记更方便，而且被广泛使用。 如果要指定标记，请确保信任该操作的创建者。 {% data variables.product.prodname_marketplace %} 上的“已验证创建者”徽章是一个有用的信号，因为它表示该操作是由其身份已被 {% data variables.product.prodname_dotcom %} 验证的团队编写的。 请注意，即使您信任作者，这种方法也存在风险，因为如果恶意执行者获得对存储操作的仓库的访问权限，便可移动或删除标记。

### 考虑跨仓库访问

{% data variables.product.product_name %} 的范围有意设为每次一个仓库。 工作流程环境中使用的 `GITHUB_TOKEN` 授予与具有写入权限的用户相同的访问级别，因为任何具有写入权限的用户都可通过创建或修改工作流程文件来访问此令牌。 用户对每个仓库都有特定权限，因此，如果不谨慎实施，一个仓库的 `GITHUB_TOKEN` 库授予对另一个仓库的访问权限将会影响 {% data variables.product.prodname_dotcom %} 权限模型。 同样，在向工作流程环境添加 {% data variables.product.prodname_dotcom %} 授权令牌时也必须谨慎，因为这也会因无意中向协作者授予一般权限而影响 {% data variables.product.prodname_dotcom %} 权限模型。

我们已经[制定 {% data variables.product.prodname_dotcom %} 路线图](https://github.com/github/roadmap/issues/74)，以支持允许在 {% data variables.product.product_name %} 内跨仓库访问的流程，但这还不是一项受支持的功能。 目前，执行特权跨仓库交互的唯一方法就是将 {% data variables.product.prodname_dotcom %} 身份验证令牌或 SSH 密钥作为工作流程环境中的密码。 由于许多身份验证令牌类型不允许对特定资源进行细致的访问，因此使用错误的令牌类型存在很大风险，因为它可以授予比预期范围更广泛的访问。

此列表描述建议用于在工作流程中访问仓库数据的方法，按优先顺序降序排列：

1. **工作流程环境中的 `GITHUB_TOKEN`**
    -  此令牌的范围有意设为调用工作流程的单个仓库，并且具有与仓库具有写入权限的用户的访问级别相同。 令牌在每个作业开始之前创建，在作业完成时过期。 更多信息请参阅“[使用 GITHUB_TOKEN 验证身份](/actions/configuring-and-managing-workflows/authenticating-with-the-github_token)”。
    - 应尽可能使用 `GITHUB_TOKEN`。
2. **仓库部署密钥**
    - 部署密钥是唯一授予对单个存储库的读取或写入访问权限的凭据类型之一，可用于与工作流程中的另一个仓库进行交互。 更多信息请参阅“[管理部署密钥](/developers/overview/managing-deploy-keys#deploy-keys)”。
    - 请注意，部署密钥只能使用 Git 克隆和推送到仓库，不能用于与 REST 或 GraphQL API 进行交互，因此它们可能不适合您的要求。
3. **{% data variables.product.prodname_github_app %} 令牌**
    - {% data variables.product.prodname_github_apps %} 可以安装在选择的仓库上，甚至可以对其中的资源设置细致的访问权限。 您可以创建组织内部的 {% data variables.product.prodname_github_app %}，将其安装在工作流程中您需要访问的仓库上，并在工作流程中验证为安装以访问这些仓库。
4. **个人访问令牌**
    - 切勿使用您自己帐户的个人访问令牌。 这些令牌授予您访问组织中您有权访问的所有仓库，以及您的用户帐户中的所有个人仓库。 这间接地向所有能写入工作流程所在仓库的用户授予广泛访问权限。 此外，如果您以后离开组织，使用此令牌的工作流程将立即中断，而且调试此问题可能具有挑战性。
    - 如果使用个人访问令牌，应是为新帐户生成的令牌，该帐户仅被授予对工作流程所需的特定仓库的访问权限。 请注意，此方法不可扩展，应避免采用其他方法，例如部署密钥。
5. **用户帐户上的 SSH 密钥**
    - 工作流程不应使用用户帐户上的 SSH 密钥。 与个人访问令牌类似，它们授予对所有个人仓库以及通过组织成员资格访问的所有仓库的读/写权限。  这间接地向所有能写入工作流程所在仓库的用户授予广泛访问权限。 如果您打算使用 SSH 密钥，因为您只需要执行仓库克隆或推送，并且不需要与公共 API 交互，则应该使用单独的部署密钥。

### 自托管运行器的强化

**{% data variables.product.prodname_dotcom %} 托管的**运行程序在临时和干净的隔离虚拟机中执行代码，这意味着无法持续破坏此环境，可以访问的信息不会超过引导过程中此环境中存在的信息。

{% data variables.product.product_name %} 上**自托管**的运行器不能保证在临时干净的虚拟机中运行，并且可能会持续受到工作流程中不受信任的代码的损害。

因此，自托管的运行器几乎[永远不能用于 {% data variables.product.product_name %} 上的公共仓库](/actions/hosting-your-own-runners/about-self-hosted-runners#self-hosted-runner-security-with-public-repositories)，因为任何用户都可以打开针对仓库的拉取请求并破坏环境。 同样，在私有仓库上使用自托管运行器时也要小心，因为任何可以复刻仓库并打开 PR 的人（通常是对仓库具有读取权限的人）都能够破坏自托管运行器环境，包括访问密码以及可授予仓库写入权限的特权 `GITHUB_TOKEN` 。

您还应考虑自托管运行器机器的环境：
- 配置为自托管运行器的计算机上存储哪些敏感信息？ 例如，私有 SSH 密钥、API 访问令牌等。
- 计算机是否可通过网络访问敏感服务？ 例如，Azure 或 AWS 元数据服务。 此环境中的敏感信息量应保持在最低水平，您应该始终注意，任何能够调用工作流程的用户都有权访问此环境。
