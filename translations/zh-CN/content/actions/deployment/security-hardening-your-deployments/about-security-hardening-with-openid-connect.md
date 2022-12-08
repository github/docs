---
title: 关于使用 OpenID Connect 进行安全强化
shortTitle: Security hardening with OpenID Connect
intro: OpenID Connect 允许您的工作流程直接从云提供商交换短期令牌。
miniTocMaxHeadingLevel: 4
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>=3.5'
type: tutorial
topics:
  - Security
ms.openlocfilehash: 90a2f8c6cb2114f060bfbd0f422cb1ef6dbca604
ms.sourcegitcommit: 4f08a208a0d2e13dc109678750a962ea2f67e1ba
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 12/06/2022
ms.locfileid: '148192029'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## OpenID Connect 概述

{% data variables.product.prodname_actions %} 工作流程通常设计为访问云提供商（如 AWS、Azure、GCP 或 HashiCorp Vault），以便部署软件或使用云的服务。 在工作流程可以访问这些资源之前，它将向云提供商提供凭据（如密码或令牌）。 这些凭据通常作为机密存储在 {% data variables.product.prodname_dotcom %} 中，工作流程在每次运行时都会将此机密呈现给云提供商。 

但是，使用硬编码的机密需要在云提供商中创建凭据，然后在 {% data variables.product.prodname_dotcom %} 中将其复制为机密。 

借助 OpenID Connect (OIDC)，您可以采用不同的方法，将工作流程配置为直接从云提供商请求短期访问令牌。 您的云提供商还需要在其终端上支持 OIDC，并且您必须配置信任关系，以控制哪些工作流程能够请求访问令牌。 目前支持 OIDC 的提供商包括 Amazon Web Services、Azure、Google Cloud Platform 和 HashiCorp Vault 等。

### 使用 OIDC 的好处

通过更新工作流程以使用 OIDC 令牌，您可以采用以下良好的安全实践：

- 无云机密：无需将云凭据复制为长期 {% data variables.product.prodname_dotcom %} 机密。 相反，您可以在云提供商上配置 OIDC 信任，然后更新您的工作流程，通过 OIDC 向云提供商请求短期访问令牌。 
- 身份验证和授权管理：可以更精细地控制工作流使用凭据的方式，使用云提供商的身份验证 (authN) 和授权 (authZ) 工具来控制对云资源的访问。
- 轮换凭据：借助 OIDC，云提供商会颁发一个仅对单个作业有效的短期访问令牌，然后自动过期。

### 开始使用 OIDC

下图概述了 {% data variables.product.prodname_dotcom %} 的 OIDC 提供商如何与您的工作流程和云提供商集成：

![OIDC 图](/assets/images/help/images/oidc-architecture.png)

1. 在云提供商中，在您的云角色和需要访问云的 {% data variables.product.prodname_dotcom %} 工作流程之间创建 OIDC 信任。
2. 每次作业运行时，{% data variables.product.prodname_dotcom %}的 OIDC 提供商都会自动生成一个 OIDC 令牌。 此令牌包含多个声明，用于建立有关尝试进行身份验证的特定工作流程的经安全强化且可验证的身份。
3. 您可以在作业中包含一个步骤或操作，以从 {% data variables.product.prodname_dotcom %} 的 OIDC 提供商请求此令牌，并将其提供给云提供商。
4. 云提供商成功验证令牌中提供的声明后，将提供仅在作业期间可用的短期云访问令牌。

## 通过云配置 OIDC 信任

将云配置为信任 {% data variables.product.prodname_dotcom %} 的 OIDC 提供商时，必须添加筛选传入请求的条件，使不受信任的存储库或工作流无法为云资源请求访问令牌：

- 在授予访问令牌之前，云提供商会检查用于在其信任设置中设置条件的 [`subject`](https://openid.net/specs/openid-connect-core-1_0.html#StandardClaims) 和其他声明是否与请求的 JSON Web 令牌 (JWT) 中的声明匹配。 因此，必须注意正确定义云提供商中的主题和其他条件。
- OIDC 信任配置步骤和为云角色设置条件的语法（使用主题和其他声明）会因所使用的云提供商而异。 有关一些示例，请参阅“[示例主题声明](#example-subject-claims)”。
 
### 了解 OIDC 令牌

每个作业都从 {% data variables.product.prodname_dotcom %} 的 OIDC 提供商请求一个 OIDC 令牌，提供商使用自动生成的 JSON Web 令牌 (JWT) 进行响应，该令牌对于生成它的每个工作流程作业都是唯一的。 当作业运行时，OIDC 令牌将呈现给云提供商。 要验证令牌，云提供商会检查 OIDC 令牌的主题和其他声明是否与云角色的 OIDC 信任定义上预配置的条件匹配。

以下示例 OIDC 令牌使用主题 (`sub`)，该主题引用 `octo-org/octo-repo` 存储库中名为 `prod` 的作业环境。

```yaml
{
  "typ": "JWT",
  "alg": "RS256",
  "x5t": "example-thumbprint",
  "kid": "example-key-id"
}
{
  "jti": "example-id",
  "sub": "repo:octo-org/octo-repo:environment:prod",
  "environment": "prod",
  "aud": "{% ifversion ghes %}https://HOSTNAME{% else %}https://github.com{% endif %}/octo-org",
  "ref": "refs/heads/main",
  "sha": "example-sha",
  "repository": "octo-org/octo-repo",
  "repository_owner": "octo-org",
  "actor_id": "12",
  "repository_visibility": private,
  "repository_id": "74",
  "repository_owner_id": "65",
  "run_id": "example-run-id",
  "run_number": "10",
  "run_attempt": "2",
  "actor": "octocat",
  "workflow": "example-workflow",
  "head_ref": "",
  "base_ref": "",
  "event_name": "workflow_dispatch",
  "ref_type": "branch",
  "job_workflow_ref": "octo-org/octo-automation/.github/workflows/oidc.yml@refs/heads/main",
  "iss": "{% ifversion ghes %}https://HOSTNAME/_services/token{% else %}https://token.actions.githubusercontent.com{% endif %}",
  "nbf": 1632492967,
  "exp": 1632493867,
  "iat": 1632493567
}
```

要查看 {% data variables.product.prodname_dotcom %} 的 OIDC 提供商支持的所有声明，请查看 {% ifversion ghes %}`https://HOSTNAME/_services/token/.well-known/openid-configuration`{% else %} https://token.actions.githubusercontent.com/.well-known/openid-configuration{% endif %} 处的 `claims_supported` 条目。

令牌包括标准受众、颁发者和主题声明：

|    声明    | 说明            |
| ----------- | ---------------------- |
| `aud`| （受众）默认情况下，这是存储库所有者（例如拥有存储库的组织）的 URL。 这是唯一可以自定义的声明。 可以使用工具包命令设置自定义受众：[`core.getIDToken(audience)`](https://www.npmjs.com/package/@actions/core/v/1.6.0)          | 
| `iss`| （颁发者）OIDC 令牌的颁发者：{% ifversion ghes %}`https://HOSTNAME/_services/token`{% else %}`https://token.actions.githubusercontent.com`{% endif %}                   | 
| `sub`| （主题）定义要由云提供商验证的主题声明。 此设置对于确保仅以可预测的方式分配访问令牌至关重要。|

OIDC 令牌还包括其他标准声明：

|    声明    | 说明            |
| ----------- | ---------------------- |
| `alg`| （算法）OIDC 提供商使用的算法。                    | 
| `exp`| （过期时间）标识 JWT 的过期时间。                    | 
| `iat`| （发布时间）JWT 的发布时间。                   | 
| `jti`| （JWT 令牌标识符）OIDC 令牌的唯一标识符。                   | 
| `kid`| （密钥标识符）OIDC 令牌的唯一密钥。                   | 
| `nbf`| （生效时间）JWT 在此时间之前不可使用。                   | 
| `typ`| （类型）描述令牌的类型。 这是 JSON Web 令牌 (JWT)。                   | 

令牌还包括 {% data variables.product.prodname_dotcom %} 提供的自定义声明：

|    声明    | 说明            |
| ----------- | ---------------------- |
| `actor`| 发起工作流运行的个人帐户。                   | 
| `actor_id`| 发起工作流运行的个人帐户的 ID。             |
| `base_ref`| 工作流程运行中拉取请求的目标分支。                   | 
| `environment`| 作业使用的环境的名称。                    | 
| `event_name`| 触发工作流程运行的事件的名称。                    | 
| `head_ref`| 工作流程运行中拉取请求的来源分支。                   | 
| `job_workflow_ref`| 这是此作业使用的可重用工作流程的引用路径。 有关详细信息，请参阅“[将 OpenID Connect 与可重用工作流结合使用’](/actions/deployment/security-hardening-your-deployments/using-openid-connect-with-reusable-workflows)”。                  | 
| `ref`| （参考）触发工作流运行的 git ref。                   | 
| `ref_type`| `ref` 的类型，例如：“branch”。                  | 
| `repository_visibility` | 运行工作流的存储库的可见性。 可接受以下值：`internal`、`private` 或 `public`。                   | 
| `repository`| 运行工作流程的存储库。                   | 
| `repository_id`| 运行工作流的存储库的 ID。  |
| `repository_owner`| 存储 `repository` 的组织的名称。                   | 
| `repository_owner_id`| 存储 `repository` 的组织的 ID。            |
| `run_id`| 触发工作流程的工作流程运行的 ID。                   | 
| `run_number`| 此工作流程已运行的次数。                   | 
| `run_attempt`| 此工作流程运行的重试次数。                    | 
| `workflow`| 工作流的名称。                   | 

### 使用 OIDC 声明定义云角色的信任条件

借助 OIDC，{% data variables.product.prodname_actions %} 工作流程需要令牌才能访问云提供商中的资源。 工作流程从云提供商请求访问令牌，以检查 JWT 提供的详细信息。 如果 JWT 中的信任配置匹配，则云提供商将通过向工作流程颁发临时令牌来做出响应，然后可以使用该令牌访问云提供商中的资源。 您可以将云提供商配置为仅响应来自特定组织的存储库的请求；您还可以指定其他条件，如下所述。

在云角色/资源上设置条件以限定其对 GitHub 工作流程的访问范围时，受众和主题声明通常结合使用。
- 受众：此值默认使用组织或存储库所有者的 URL。 这可用于设置只有特定组织中的工作流程才能访问云角色的条件。
- 主题：默认情况下具有预定义格式，是有关工作流的一些关键元数据的串联，例如 {% data variables.product.prodname_dotcom %} 组织、存储库、分支或关联的 [`job`](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idenvironment) 环境。 请参阅[主题声明示例](#example-subject-claims)，了解主题声明是如何从连接的元数据中组合而成的。

如果需要更精细的信任条件，可以自定义 JWT 中包含的颁发者 (`iss`) 和主题 (`sub`) 声明。 有关详细信息，请参阅“[自定义令牌声明](#customizing-the-token-claims)”。

OIDC 令牌中还支持许多其他声明，这些声明可用于设置这些条件。 此外，云提供商可以允许你为访问令牌分配角色，从而允许你指定更精细的权限。

{% note %}

注意：要控制云提供商颁发访问令牌的方式，必须至少定义一个条件，使不受信任的存储库无法为云资源请求访问令牌 。

{% endnote %}

### 示例主题声明

以下示例演示如何使用“主题”作为条件，并说明如何从串联的元数据汇编“主题”。 [主题](https://openid.net/specs/openid-connect-core-1_0.html#StandardClaims)使用来自 [`job` 上下文](/actions/learn-github-actions/contexts#job-context)的信息，并指示云提供商只能为来自特定分支、环境中运行的工作流的请求授予访问令牌请求。 以下各节介绍了您可以使用的一些常见主题。

#### 筛选特定环境

当作业引用环境时，主题声明包括环境名称。

可以配置用于筛选特定[环境](/actions/deployment/using-environments-for-deployment)名称的主题。 在此示例中，工作流运行必须源自 `octo-org` 组织拥有的名为 `octo-repo` 的存储库中，一个具有名为 `Production` 的环境的作业：

|        |             |
| ------ | ----------- |
| 语法： | `repo:<orgName/repoName>:environment:<environmentName>`      | 
| 例如：| `repo:octo-org/octo-repo:environment:Production`       |

#### 筛选 `pull_request` 事件

当工作流由拉取请求事件触发时，主题声明包含 `pull_request` 字符串，但前提是作业未引用环境。

可以配置筛选 [`pull_request`](/actions/learn-github-actions/events-that-trigger-workflows#pull_request) 事件的主题。 在此示例中，工作流运行必须由 `octo-org` 组织拥有的名为 `octo-repo` 的存储库中的 `pull_request` 事件触发：

|        |             |
| ------ | ----------- |
| 语法： | `repo:<orgName/repoName>:pull_request`      | 
| 例如：| `repo:octo-org/octo-repo:pull_request`      |

#### 筛选特定分支

主题声明包括工作流程的分支名称，但前提是作业未引用环境，并且工作流程不是由拉取请求事件触发的。

您可以配置筛选特定分支名称的主题。 在此示例中，工作流运行必须源自 `octo-org` 组织拥有的名为 `octo-repo` 的存储库中，一个名为 `demo-branch` 的分支：

|        |             |
| ------ | ----------- |
| 语法： | `repo:<orgName/repoName>:ref:refs/heads/branchName`      | 
| 例如：| `repo:octo-org/octo-repo:ref:refs/heads/demo-branch`      |

#### 筛选特定标记

主题声明包括工作流程的标记名称，但前提是作业未引用环境，并且工作流程不是由拉取请求事件触发的。

您可以创建筛选特定标记的主题。 在此示例中，工作流运行必须源自 `octo-org` 组织拥有的名为 `octo-repo` 的存储库中，一个名为 `demo-tag` 的标记：

|        |             |
| ------ | ----------- |
| 语法： | `repo:<orgName/repoName>:ref:refs/tags/<tagName>`      | 
| 例如：| `repo:octo-org/octo-repo:ref:refs/tags/demo-tag`      |

### 在云提供商中配置主题

要在云提供商的信任关系中配置主题，必须将主题字符串添加到其信任配置中。 以下示例演示了不同的云提供商如何以不同的方式接受同一 `repo:octo-org/octo-repo:ref:refs/heads/demo-branch` 主题：

|        |             |
| ------ | ----------- |
| Amazon Web Services | `"{% ifversion ghes %}HOSTNAME/_services/token{% else %}token.actions.githubusercontent.com{% endif %}:sub": "repo:octo-org/octo-repo:ref:refs/heads/demo-branch"`      | 
| Azure| `repo:octo-org/octo-repo:ref:refs/heads/demo-branch`      |
| Google Cloud Platform| `(assertion.sub=='repo:octo-org/octo-repo:ref:refs/heads/demo-branch')`      |
| HashiCorp Vault| `bound_subject="repo:octo-org/octo-repo:ref:refs/heads/demo-branch" `      |

有关详细信息，请参阅“[为云提供商启用 OpenID Connect](#enabling-openid-connect-for-your-cloud-provider)”中列出的指南。

## 更新用于 OIDC 的操作

要更新自定义操作以使用 OIDC 进行身份验证，可以使用 Actions 工具包中的 `getIDToken()` 从 {% data variables.product.prodname_dotcom %} 的 OIDC 提供商请求 JWT。 有关详细信息，请参阅 [npm 包文档](https://www.npmjs.com/package/@actions/core/v/1.6.0)中的“OIDC 令牌”。

还可以使用 `curl` 命令通过以下环境变量请求 JWT：

|        |             |
| ------ | ----------- |
| `ACTIONS_ID_TOKEN_REQUEST_URL` | {% data variables.product.prodname_dotcom %} 的 OIDC 提供商的 URL。      | 
| `ACTIONS_ID_TOKEN_REQUEST_TOKEN` | 向 OIDC 提供商发出请求的持有者令牌。      |


例如：

```shell{:copy}
curl -H "Authorization: bearer $ACTIONS_ID_TOKEN_REQUEST_TOKEN" "$ACTIONS_ID_TOKEN_REQUEST_URL&audience=api://AzureADTokenExchange"
```

### 添加权限设置

{% data reusables.actions.oidc-permissions-token %}

{% ifversion actions-oidc-hardening-config %}
## 自定义令牌声明

可以通过自定义 JWT 中包含的声明来增强 OIDC 配置的安全性。 通过这些自定义，可以在允许工作流访问云中托管的资源时，对云角色定义更精细的信任条件：

{% ifversion ghec %} - 若要获得额外的安全层，可以追加带有企业数据域的 `issuer` url。 这使你可以对颁发者 (`iss`) 声明设置条件，将其配置为仅接受来自必须包含企业数据域的唯一 `issuer` URL 的 JWT 令牌。{% endif %}
- 可以对主题 (`sub`) 声明设置条件以要求 JWT 令牌源自特定存储库、可重用工作流或其他源，从而实现 OIDC 配置标准化。
- 可以使用其他 OIDC 令牌声明（例如 `repository_id` 和 `repository_visibility`）定义精细 OIDC 策略。 有关详细信息，请参阅“[了解 OIDC 令牌](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#understanding-the-oidc-token)”。

若要自定义这些声明格式，组织和存储库管理员可以使用以下部分中介绍的 REST API 终结点。

{% ifversion ghec %}

### 切换到唯一令牌 URL

默认情况下，JWT 由 {% data variables.product.prodname_dotcom %} 的 OIDC 提供程序在 `https://token.actions.githubusercontent.com` 上颁发。 此路径在 JWT 中使用 `iss` 值提供给云提供商。

企业管理员可以在 `https://token.actions.githubusercontent.com/<enterpriseSlug>` 处将企业配置为从唯一 URL 接收令牌，从而增强其 OIDC 配置的安全性。 将 `<enterpriseSlug>` 替换为企业的数据域值。 

此配置意味着企业会从唯一 URL 接收 OIDC 令牌，因而可以将云提供商配置为仅接受来自该 URL 的令牌。 这有助于确保只有企业存储库才能使用 OIDC 访问云资源。

若要为企业激活此设置，企业管理员必须使用 `/enterprises/{enterprise}/actions/oidc/customization/issuer` 终结点并在请求正文中指定 `"include_enterprise_slug": true`。 有关详细信息，请参阅“[为企业设置 {% data variables.product.prodname_actions %} OIDC 自定义颁发者策略](/rest/actions/oidc#set-the-github-actions-oidc-custom-issuer-policy-for-an-enterprise)”。

应用此设置后，JWT 会包含更新的 `iss` 值。 在以下示例中，`iss` 键将 `octocat-inc` 用作其 `enterpriseSlug` 值：

```json
{
  "jti": "6f4762ed-0758-4ccb-808d-ee3af5d723a8"
  "sub": "repo:octocat-inc/private-server:ref:refs/heads/main"
  "aud": "http://octocat-inc.example/octocat-inc"
  "enterprise": "octocat-inc"
  "iss": "https://token.actions.githubusercontent.com/octocat-inc",
  "bf": 1755350653,
  "exp": 1755351553,
  "iat": 1755351253
}
```

{% endif %}

### 为组织或存储库自定义主题声明

若要帮助提高安全性、合规性和标准化，可以自定义标准声明以满足所需的访问条件。 如果云提供商对主题声明支持条件，则可以创建一个条件，用于检查 `sub` 值是否与可重用工作流的路径匹配，例如 `"job_workflow_ref: "octo-org/octo-automation/.github/workflows/oidc.yml@refs/heads/main""`。 确切格式因云提供商的 OIDC 配置而异。 若要在 {% data variables.product.prodname_dotcom %} 上配置匹配条件，可以使用 REST API 要求 `sub` 声明必须始终包含特定自定义声明，例如 `job_workflow_ref`。 可以使用 [OIDC REST API](/rest/actions/oidc) 为 OIDC 使用者声明应用自定义模板；例如，可以要求 OIDC 令牌中的 `sub` 声明必须始终包含特定的自定义声明，例如 `job_workflow_ref`。

{% note %}

注意：应用组织模板时，它不会影响任何已使用 OIDC 的现有存储库中的任何工作流。 对于现有存储库以及应用模板后创建的任何新存储库，存储库所有者需要选择加入才能接收此配置，或者也可以应用特定于存储库的不同配置。 有关详细信息，请参阅“[为存储库设置 OIDC 主题声明的自定义模板](/rest/actions/oidc#set-the-customization-template-for-an-oidc-subject-claim-for-a-repository)”。

{% endnote %}

自定义声明会导致整个 `sub` 声明采用新格式，这会替换“[示例主题声明](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#example-subject-claims)”所述令牌中的默认预定义 `sub` 格式。

以下示例模板演示了自定义主题声明的各种方法。 为了在 {% data variables.product.prodname_dotcom %} 上配置这些设置，管理员会使用 REST API 指定必须在主题 (`sub`) 声明中包含的声明列表。 

{% data reusables.actions.use-request-body-api %}

若要自定义使用者声明，应首先在云提供商的 OIDC 配置中创建匹配条件，然后使用 REST API 自定义配置。 配置完成后，每次运行新作业时，在该作业期间生成的 OIDC 令牌都会遵循新的自定义模板。 如果在作业运行之前，云提供商的 OIDC 配置中不存在匹配条件，则云提供商可能不会接受生成的令牌，因为云条件可能未同步。

#### 示例：基于可见性和所有者允许存储库

此示例模板允许 `sub` 声明具有使用 `repository_owner` 和 `repository_visibility` 的新格式：

```json
{
   "include_claim_keys": [
       "repository_owner",
       "repository_visibility"
   ]
}
```

在云提供商的 OIDC 配置中，将 `sub` 条件配置为要求声明必须包含 `repository_owner` 和 `repository_visibility` 的特定值。 例如： `"repository_owner: "monalisa":repository_visibility:private"`。 通过此方法，可以将云角色限制为只能访问组织或企业中的专用存储库。

#### 示例：允许访问具有特定所有者的所有存储库

此示例模板使 `sub` 声明具有只包含 `repository_owner` 值的新格式。 

{% data reusables.actions.use-request-body-api %}

```json
{
   "include_claim_keys": [
       "repository_owner"
   ]
}

```

在云提供商的 OIDC 配置中，将 `sub` 条件配置为要求声明必须包含 `repository_owner` 的特定值。 例如： `"repository_owner: "monalisa""`

#### 示例：需要可重用工作流

此示例模板允许 `sub` 声明具有包含 `job_workflow_ref` 声明值的新格式。 这使企业能够使用[可重用工作流](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#example-subject-claims)在其组织和存储库中实施一致的部署。

{% data reusables.actions.use-request-body-api %}

```json
  {
     "include_claim_keys": [
         "job_workflow_ref"
     ]
  }
```

在云提供商的 OIDC 配置中，将 `sub` 条件配置为要求声明必须包含 `job_workflow_ref` 的特定值。 例如： `"job_workflow_ref: "octo-org/octo-automation/.github/workflows/oidc.yml@refs/heads/main""`。

#### 示例：需要可重用工作流和其他声明

以下示例模板将特定可重用工作流要求与其他声明相结合。

{% data reusables.actions.use-request-body-api %}

此示例还演示如何使用 `"context"` 定义条件。 这是采用[默认 `sub` 格式](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#example-subject-claims)的存储库后面的部分。 例如，当作业引用环境时，上下文包含：`environment:<environmentName>`。

```json
{
   "include_claim_keys": [
       "repo",
       "context",
       "job_workflow_ref"
   ]
}
```

在云提供商的 OIDC 配置中，将 `sub` 条件配置为要求声明必须包含 `repo`、`context` 和 `job_workflow_ref` 的特定值。

此自定义模板要求 `sub` 使用以下格式：`repo:<orgName/repoName>:environment:<environmentName>:job_workflow_ref:<reusableWorkflowPath>`。 例如： `"sub": "repo:octo-org/octo-repo:environment:prod:job_workflow_ref:octo-org/octo-automation/.github/workflows/oidc.yml@refs/heads/main"`

#### 示例：授予对特定存储库的访问权限

此示例模板使你可以跨所有分支/标记和环境向云授予对特定存储库中的所有工作流的访问权限。 若要帮助提高安全性，请将此模板与“[为企业自定义令牌 URL](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#customizing-the-token-url-for-an-enterprise)”中所述的自定义颁发者 URL 相结合。 

{% data reusables.actions.use-request-body-api %}

```json
{
   "include_claim_keys": [
       "repo"
   ]
}
```

在云提供商的 OIDC 配置中，将 `sub` 条件配置为需要与所需值匹配的 `repo` 声明。

#### 示例：使用系统生成的 GUID

此示例模板使用系统生成的 GUID 实现可预测的 OIDC 声明，这些 GUID 不会在实际的重命名（例如重命名存储库）之间更改。 

{% data reusables.actions.use-request-body-api %}

```json
  {
     "include_claim_keys": [
         "repository_id"
     ]
  }
```

在云提供商的 OIDC 配置中，将 `sub` 条件配置为需要与所需值匹配的 `repository_id` 声明。

或：

```json
{
   "include_claim_keys": [
       "repository_owner_id"
   ]
}
```

在云提供商的 OIDC 配置中，将 `sub` 条件配置为需要与所需值匹配的 `repository_owner_id` 声明。

#### 重置自定义

此示例模板将主题声明重置为默认格式。 此模板实际上会选择退出任何组织级自定义策略。

{% data reusables.actions.use-request-body-api %}

```json
{
   "include_claim_keys": [
       "repo",
       "context"
   ]
}
```

在云提供商的 OIDC 配置中，将 `sub` 条件配置为要求声明必须包含 `repo` 和 `context` 的特定值。

#### 使用默认主题声明

对于可从其组织接收主题声明策略的存储库，存储库所有者可以在以后选择退出，改用默认 `sub` 声明格式。 这意味着存储库不会使用组织的自定义模板。 

若要将存储库配置为使用默认的 `sub` 声明格式，存储库管理员必须在“[为存储库的 OIDC 主题声明设置自定义模板](/rest/actions/oidc#set-the-customization-template-for-an-oidc-subject-claim-for-a-repository)”中使用 REST API 终结点，并包含以下请求正文：

```json
{
   "use_default": true
}
```

#### 示例：将存储库配置为使用组织模板

存储库管理员可以将其存储库配置为使用其组织管理员创建的模板。

为了将存储库配置为使用组织模板，存储库管理员必须在“[为存储库的 OIDC 主题声明设置自定义模板](/rest/actions/oidc#set-the-customization-template-for-an-oidc-subject-claim-for-a-repository)”中使用 REST API 终结点，并包含以下请求正文：

```json
{
   "use_default": false
}
```

{% endif %}

## 更新 OIDC 的工作流程

现在，您可以更新 YAML 工作流程，以使用 OIDC 访问令牌而不是机密。 常用的云提供商已发布其官方登录操作，使您可以轻松开始使用 OIDC。 有关更新工作流的详细信息，请参阅下面“[为云提供商启用 OpenID Connect](#enabling-openid-connect-for-your-cloud-provider)”中列出的特定于云的指南。


## 为云提供商启用 OpenID Connect

要为您的特定云提供商启用和配置 OIDC，请参阅以下指南：

- [在 Amazon Web Services 中配置 OpenID Connect](/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-amazon-web-services)
- [在 Azure 中配置 OpenID Connect](/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-azure)
- [在 Google Cloud Platform 中配置 OpenID Connect](/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-google-cloud-platform)
- [在 Hashicorp Vault 中配置 OpenID Connect](/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-hashicorp-vault)

要为其他云提供商启用和配置 OIDC，请参阅以下指南：

- [在云提供商中配置 OpenID Connect](/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-cloud-providers)
