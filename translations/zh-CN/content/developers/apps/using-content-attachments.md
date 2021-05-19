---
title: 使用内容附件
intro: 内容附件允许 GitHub 应用程序在 GitHub 中为链接到注册域的 URL 提供更多信息。 GitHub 可渲染应用程序在正文或者议题或拉取请求注释中的 URL 下提供的信息。
redirect_from:
  - /apps/using-content-attachments
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - GitHub Apps
---

{% data reusables.pre-release-program.content-attachments-public-beta %}

### 关于内容附件

GitHub 应用程序可以注册将触发 `content_reference` 事件的域。 当有人在正文或者议题或拉取请求的注释中包含链接到注册域的 URL 时，应用程序会收到 [`content_reference` web 挂钩](/webhooks/event-payloads/#content_reference)。 您可以使用内容附件直观地为添加到议题或拉取请求的 URL 提供更多的上下文或数据。 URL 必须是完全合格的 URL，以 `http://` 或 `https://` 开头。 作为 Markdown 链接一部分的 URL 将被忽略，不会触发 `content_reference` 事件。

在使用 {% data variables.product.prodname_unfurls %} API 之前，您需要为 GitHub 应用程序配置内容引用：
* 为应用程序提供对“内容引用”的 `Read & write` 权限。
* 配置“内容引用”权限时，注册最多 5 个有效且可公开访问的域。 配置内容引用域时不要使用 IP 地址。 您可以注册域名 (example.com) 或子域 (subdomain.example.com)。
* 让应用程序订阅“内容引用”事件。

将应用程序安装到仓库中后，仓库中包含注册域 URL 的议题或拉取请求注释将生成内容引用事件。 应用程序必须在发布内容引用 URL 后六小时内创建内容附件。

内容附件不会追溯更新 URL。 只有在您根据上述要求配置了应用程序，并且有人在其仓库中安装应用程序之后，它才会更新添加到议题或拉取请求中的 URL。

有关配置 GitHub 应用程序权限和事件订阅所需的步骤，请参阅“[创建 GitHub 应用程序](/apps/building-github-apps/creating-a-github-app/)”或“[编辑 GitHub 应用程序的权限](/apps/managing-github-apps/editing-a-github-app-s-permissions/)”。

### 实现内容附件流程

内容附件流程向您显示议题或拉取请求中的 URL、`content_reference` web 挂钩事件以及使用额外信息更新议题或拉取请求所需调用的 REST API 端点之间的关系。

**步骤 1.** 使用[关于内容附件](#about-content-attachments)中的指南设置应用程序。 您也可以根据 [Probot 应用程序示例](#example-using-probot-and-github-app-manifests)开始使用内容附件。

**步骤 2.** 将注册域的 URL 添加到议题或拉取请求。 必须使用以 `http://` 或 `https://` 开头的完全合格 URL。

![添加到议题的 URL](/assets/images/github-apps/github_apps_content_reference.png)

**步骤 3.**应用程序将收到带有操作 `created` 的 [`content_reference` web 挂钩](/webhooks/event-payloads/#content_reference)。

``` json
{
  "action": "created",
  "content_reference": {
    "id": 17,
    "node_id": "MDE2OkNvbnRlbnRSZWZlcmVuY2UxNjA5",
    "reference": "errors.ai"
  },
  "repository": {...},
  "sender": {...},
  "installation": {
    "id": 371641,
    "node_id": "MDIzOkludGVncmF0aW9uSW5zdGFsbGF0aW9uMzcxNjQx"
  }
}
```

**步骤 4.** 应用程序使用 `content_reference` `id`，以使用 REST API [创建内容附件](/rest/reference/apps#create-a-content-attachment)。 您还需要 `installation` `id` 以验证为 [GitHub 应用程序安装设施](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation)。

{% data reusables.pre-release-program.corsair-preview %}
{% data reusables.pre-release-program.api-preview-warning %}

`body` 参数可包含 Markdown：

    ```shell
    curl -X POST \
      https://api.github.com/content_references/1512/attachments \
      -H 'Accept: application/vnd.github.corsair-preview+json' \
      -H 'Authorization: Bearer $INSTALLATION_TOKEN' \
      -d '{
        "title": "[A-1234] Error found in core/models.py file",
        "body": "You have used an email that already exists for the user_email_uniq field.\n ## DETAILS:\n\nThe (email)=(Octocat@github.com) already exists.\n\n The error was found in core/models.py in get_or_create_user at line 62.\n\n self.save()"
    }'
    ```

有关创建和安装令牌的更多信息，请参阅“[验证为 GitHub 应用程序](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation)”。

**步骤 5.** 在拉取请求或议题注释中，您将看到新的内容附件显示在链接下：

![附加到议题引用的内容](/assets/images/github-apps/content_reference_attachment.png)

### 在 GraphQL 中使用内容附件
我们在 [`content_reference` web 挂钩](/webhooks/event-payloads/#content_reference)中提供 `node_id`，以便您可以在 GraphQL API 中引用 `createContentAttachment` 突变。

{% data reusables.pre-release-program.corsair-preview %}
{% data reusables.pre-release-program.api-preview-warning %}

例如：

``` graphql
mutation {
  createContentAttachment(input: {
    contentReferenceId: "MDE2OkNvbnRlbnRSZWZlcmVuY2UxNjA1",
    title: "[A-1234] Error found in core/models.py file",
    body:"You have used an email that already exists for the user_email_uniq field.\n ## DETAILS:\n\nThe (email)=(Octocat@github.com) already exists.\n\n The error was found in core/models.py in get_or_create_user at line 62.\n\n self.save()"
  }) {
    contentAttachment {
      ... on ContentAttachment {
        id
        title
        body
      }
    }
  }
}
```
示例 cURL：

```shell
curl -X "POST" "https://api.github.com/graphql" \
     -H 'Authorization: Bearer $INSTALLATION_TOKEN' \
     -H 'Accept: application/vnd.github.corsair-preview+json' \
     -H 'Content-Type: application/json; charset=utf-8' \
     -d $'{
  "query": "mutation {\\n  createContentAttachment(input:{contentReferenceId: \\"MDE2OkNvbnRlbnRSZWZlcmVuY2UxNjA1\\", title:\\"[A-1234] Error found in core/models.py file\\", body:\\"You have used an email that already exists for the user_email_uniq field.\n ## DETAILS:\n\nThe (email)=(Octocat@github.com) already exists.\n\n The error was found in core/models.py in get_or_create_user at line 62.\n\n\self.save()\\"}) {\\n    contentAttachment {\\n      id,\\n      title,\\n      body\\n    }\\n  }\\n}"
}'
```

有关 `node_id` 的更多信息，请参阅“[使用全局节点 ID](/graphql/guides/using-global-node-ids)”。

### 使用 Probot 和 GitHub 应用程序清单的示例

要快速设置可使用 {% data variables.product.prodname_unfurls %} API 的 GitHub 应用程序，您可以使用 [Probot](https://probot.github.io/)。 要了解 Probot 如何使用 GitHub 应用程序清单，请参阅“[从清单创建 GitHub 应用程序](/apps/building-github-apps/creating-github-apps-from-a-manifest/)”。

要创建 Probot 应用程序，请按照以下步骤操作：

1. [生成新的 GitHub 应用程序](https://probot.github.io/docs/development/#generating-a-new-app)。
2. 打开您创建的项目，自定义 `app.yml` 文件中的设置。 订阅 `content_reference` 事件并启用 `content_references` 写入权限：

   ``` yml
    default_events:
      - content_reference
    # The set of permissions needed by the GitHub App. The format of the object uses
    # the permission name for the key (for example, issues) and the access type for
    # the value (for example, write).
    # Valid values are `read`, `write`, and `none`
    default_permissions:
      content_references: write

    content_references:
      - type: domain
        value: errors.ai
      - type: domain
        value: example.org
   ```

3. 将此代码添加到 `index.js` 文件以处理 `content_reference` 事件并调用 REST API：

    ``` javascript
    module.exports = app => {
      // Your code here
      app.log('Yay, the app was loaded!')
       app.on('content_reference.created', async context => {
        console.log('Content reference created!', context.payload)
         // Call the "Create a content reference" REST endpoint
        await context.github.request({
          method: 'POST',
          headers: { accept: 'application/vnd.github.corsair-preview+json' },
          url: `/content_references/${context.payload.content_reference.id}/attachments`,
          // Parameters
          title: '[A-1234] Error found in core/models.py file',
          body: 'You have used an email that already exists for the user_email_uniq field.\n ## DETAILS:\n\nThe (email)=(Octocat@github.com) already exists.\n\n The error was found in core/models.py in get_or_create_user at line 62.\n\nself.save()'
        })
      })
    }
    ```

4. [在本地运行 GitHub 应用程序](https://probot.github.io/docs/development/#running-the-app-locally)。 导航到 `http://localhost:3000`， 然后单击 **Register GitHub App（注册 GitHub 应用程序）**按钮：

   ![注册 Probot GitHub 应用程序](/assets/images/github-apps/github_apps_probot-registration.png)

5. 在测试仓库中安装应用程序。
6. 在测试仓库中创建议题。
7. 将注释添加到您打开的议题，包括您在 `app.yml` 文件中配置的 URL。
8. 查看议题注释，您将看到如下所示的更新：

   ![附加到议题引用的内容](/assets/images/github-apps/content_reference_attachment.png)
