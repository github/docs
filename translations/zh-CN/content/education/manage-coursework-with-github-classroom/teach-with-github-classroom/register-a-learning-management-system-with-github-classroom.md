---
title: 在 GitHub Classroom 注册一个学习管理系统
intro: '可以使用 {% data variables.product.prodname_classroom %} 配置符合 LTI 的学习管理系统 (LMS)。'
versions:
  fpt: '*'
permissions: 'Organization owners who are admins for a classroom can connect learning management systems to {% data variables.product.prodname_classroom %}.'
shortTitle: Register an LMS
ms.openlocfilehash: e1c1abed5ce4ebf82c19b29fef9a005fbe4c7a02
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106851'
---
## 关于将 LMS 注册到课堂

在将 LMS 连接到课堂之前，LMS 实例的管理员需要将 LMS 配置为允许 {% data variables.product.prodname_classroom %}，然后在 {% data variables.product.prodname_classroom %} 注册 LMS 以启动 OAuth 握手。 管理员只需执行一次注册过程，那么任何使用 LMS 实例的教师均可将其 LMS 课程同步到课堂。 有关将 LMS 课程连接到课堂的详细信息，请参阅“[将学习管理系统课程连接到课堂](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/connect-a-learning-management-system-course-to-a-classroom)”。

{% note %}

注意：{% data reusables.classroom.google-classroom-note %}

{% endnote %}

## 支持的 LMSes

{% data reusables.classroom.supported-lmses %}

## 为 {% data variables.product.prodname_classroom %} 配置画布

可以在 {% data variables.product.prodname_classroom %} 注册 Canvas 安装，让教师能够将名单数据导入其教室。 有关 Canvas 的详细信息，请参阅 [Canvas 网站](https://www.instructure.com/canvas/)。

### 1. 在 Canvas 中注册 {% data variables.product.prodname_classroom %} 开发人员密钥

1. 登录到 [Canvas](https://www.instructure.com/canvas/#login)。
2. 在主页的左侧栏中，单击“管理员”，然后单击“网站”管理员 。
3. 单击“开发人员密钥”。
4. 在“开发人员密钥”下，单击“+ 开发人员密钥”按钮，然后从下拉菜单中选择“+LTI 密钥” 。
5. 在“密钥设置”配置屏幕上，将字段设置为以下值： 

    | Canvas 应用程序配置中的字段 | 值或设置 |
    | :- | :- |
    | **方法** | `Manual Entry` |
    | **标题** | `GitHub Classroom` <br/><br/>注意：可以使用任何名称，但如果将此名称设置为其他名称，请确保让教师知晓。  |
    | **说明** | `Sync Canvas course rosters to GitHub Classroom`（或类似） |
    | **目标链接 URI** | `https://classroom.github.com/context-link` |
    | **OpenID Connect 初始化 URL** | `https://classroom.github.com/lti1p3/openid-connect/auth` |
    | **JWK 方法** | `Public JWK URL` |
    | **公共 JWK URL** | `https://classroom.github.com/.well-known/jwks.json` |
    | **重定向 URI** | `https://classroom.github.com/lti1p3/openid-connect/redirect` |
    | “LTI 优势服务”下拉列表 | 选中“可以检索与工具所安装的上下文关联的用户数据”复选框。 |
    | “其他设置”下拉列表 | 在“隐私级别”下，选择 `Public` |
    | **放置** | 选择 `Course Settings Sub Navigation`。 <br/><br/>注意：如果将“放置”设置为其他位置，则必须让教师知晓。 本文档会预先假定这是按钮的放置位置。 |
6. 单击“ **保存**”。
7. 在“开发人员密钥”页的表中，在 GitHub Classroom 开发人员密钥的行中，记下“详细信息”列中客户端 ID 的值 -- 这必须告知教师，以便他们完成设置。 
8. 在“开发人员密钥”页上的“状态”列中，将密钥的状态切换为“打开”。

### 2. 在 {% data variables.product.prodname_classroom %} 注册开发人员密钥

1. 转到 https://classroom.github.com/register-lms。 
2. 填充以下信息：
   - 在“LMS 类型”下，从下拉菜单中选择“画布”。 
   - “颁发者标识符”：`https://canvas.instructure.com`
   - “域”：画布实例的基 URL
   - “客户端 ID”：创建的开发人员密钥中“详细信息”下的“客户端 ID”
   - “OIDC 授权终结点”：Canvas 实例的基 URL，其末尾添加了 `/login/oauth2/token`。
   - “OAuth 2.0 令牌检索 URL”：Canvas 实例的基 URL，其末尾添加了 `/api/lti/authorize_redirect`。
   - “密钥集 UEL”：Canvas 实例的基 URL，其末尾添加了 `/api/lti/security/jwks`。

  ![使用 GitHub Classroom 注册 Canvas 实例](/assets/images/help/classroom/register-canvas-with-github-classroom.png)

3. 单击“注册”。 
4. 应会在屏幕上方看到“成功注册 LMS”的横幅，这意味着已注册了 LMS 实例，教师现在可以链接他们的教室。

## 为 {% data variables.product.prodname_classroom %} 配置 Moodle

可以在 {% data variables.product.prodname_classroom %} 注册 Moodle 安装，让教师能够将名单数据导入其教室。 有关 Moodle 的详细信息，请参阅 [Moodle 网站](https://moodle.org)。

您必须使用 Moodle 版本 3.0 或更高版本。

### 1. 在 Moodle 中启用“发布为 LTI 工具”

1. 登录到 [Moodle](https://moodle.org/login/)。
2. 单击顶级菜单中的“站点管理”选项卡。
3. 在“站点管理”页上，单击“插件”选项卡，然后向下滚动到“身份验证”部分，然后单击“管理身份验证”。
4. 在“LTI”字段旁边，单击切换按钮以启用 LTI。
5. 再次单击“插件”选项卡，然后向下滚动到“登记”，然后单击“管理登记插件”。
6. 在“发布为 LTI 工具”字段旁边，单击切换按钮以启用“发布为 LTI 工具”。
7. 点击顶级菜单中的“站点管理”选项卡返回“站点管理”页面，然后向下滚动到“安全”部分，单击“HTTP 安全性”。
8. 在“允许帧嵌入”旁边，选中用于启用帧嵌入的复选框，然后单击“保存更改”。

### 2. 将 {% data variables.product.prodname_classroom %} 注册为外部工具

1. 单击顶级菜单中的“网站管理”选项卡，返回到 Moodle“网站管理”页面。 
2. 单击“插件”选项卡，然后在“活动模块”部分旁边，“外部工具”下方，单击“管理工具”。
3. 单击“手动配置工具”。 
4. 在各字段中输入以下值：

    | Moodle 应用程序配置中的字段 | 值或设置 |
    | :- | :- |
    | **工具名称** | `GitHub Classroom` <br/><br/>注意：可以使用任何名称，但如果将此名称设置为其他名称，请确保让教师知晓。 |
    | 工具 URL | `https://classroom.github.com` |
    | LTI 版本 | `LTI 1.3` |
    | **公钥类型** | `Keyset URL` |
    | **公钥集** | `https://classroom.github.com/.well-known/jwks.json` |
    | **启动登录 URL** | `https://classroom.github.com/lti1p3/openid-connect/auth` |
    | **重定向 URL** | `https://classroom.github.com/lti1p3/openid-connect/redirect` |
    | 默认启动容器 | `New window` |

5. 选中“支持深层链接（内容项消息）”复选框。
6. 在“服务”下拉列表的“IMS LTI 名称和角色预配”旁边，从下拉菜单中选择“使用此服务根据隐私设置检索成员的信息”。 
7. 单击“保存更改”。  
8. 现已将 GitHub Classroom 注册为外部工具。 在“工具”下的“GitHub Classroom”框中，单击菜单图标以查看“工具配置详细信息”界面。 此界面包含需要在以下（在 {% data variables.product.prodname_classroom %} 上注册实例）最后一步中要输入的重要信息。 

### 3. 在 {% data variables.product.prodname_classroom %} 上注册 Moodle 实例

1. 转到 https://classroom.github.com/register-lms。 
2. 填充以下信息：
   - 在“LMS 类型”下，从下拉菜单中选择“Moodle”。 
   - “颁发者标识符”：在 Moodle 中创建的外部工具“工具配置详细信息”中的“平台 ID”
   - “域”：Moodle 实例的基 URL
   - “客户端 ID”：在 Moodle 中创建的外部工具“工具配置详细信息”中的“客户端 ID”
   - “身份验证请求 URL”：在 Moodle 中创建的外部工具“工具配置详细信息”中的“身份验证请求 URL”
   - “访问令牌 URL”：在 Moodle 中创建的外部工具“工具配置详细信息”中的“访问令牌 URL”
   - “密钥集 URL”：在 Moodle 中创建的外部工具“工具配置详细信息”中的“公共密钥集 URL”
  
  ![使用 GitHub Classroom 注册 Moodle 实例](/assets/images/help/classroom/register-moodle-with-github-classroom.png)

3. 单击“注册”。
4. 应会在屏幕上方看到“成功注册 LMS”的横幅，这意味着已注册了 LMS 实例，教师现在可以链接他们的教室。

## 为 {% data variables.product.prodname_classroom %} 配置 Sakai

### 1. 将 {% data variables.product.prodname_classroom %} 注册为外部工具

1. 转到 Sakai 并登录。
2. 转到“管理工作区”，在左侧边栏中选择“外部工具”。 
3. 单击“安装 LTI 1.x 工具”。
4. 在各字段中输入以下值：

    | Sakai 应用配置中的字段 | 值或设置 |
    | :- | :- |
    | **工具名称** | GitHub Classroom - [课程名称] <br/><br/>注意：可以使用任何名称，但如果将此名称设置为其他名称，请确保让教师知晓。 |
    | **按钮文本**（工具菜单中的文本） | 教师会在用于启动到 {% data variables.product.prodname_classroom %} 的按钮上看到的内容。 例如，此值可以是 `sync`。 |
    | **启动 URL** | `https://classroom.github.com/context-link` |
    | **将用户名发送到外部工具** | 选中此复选框。 |
    | **向外部工具提供名单** | 选中此复选框。 |
    | **工具支持 LTI 1.3** | 选中此复选框。 |
    | **LTI 1.3 工具密钥集 URL** | `https://classroom.github.com/.well-known/jwks.json` |
    | **LTI 1.3 工具 OpenID Connect/初始化终结点** | `https://classroom.github.com/lti1p3/openid-connect/auth` |
    | **LTI 1.3 工具重定向终结点** | `https://classroom.github.com/lti1p3/openid-connect/redirect` |
5. 提交后，Sakai 将显示你需要的信息，以便在 {% data variables.product.prodname_classroom %} 注册 Sakai 实例。

### 2. 在 {% data variables.product.prodname_classroom %} 注册 Sakai 实例

1. 转到 https://classroom.github.com/register-lms。
2. 填充以下信息：
   - 在“LMS 类型”下，从下拉菜单中选择“Sakai”。 
   - “LTI 1.3 平台颁发者”：Sakai 提供的“LTI 1.3 平台颁发者”字段
   - “域”：Sakai 实例的基 URL
   - “LTI 1.3 客户端 ID”：Sakai 提供的“LTI 1.3 客户端 ID”字段
   - “LTI 1.3 平台 OIDC 身份验证 URL”：Sakai 提供的“LTI 1.3 平台 OIDC 身份验证 URL”字段
   - “LTI 1.3 平台 OAuth2 持有者令牌检索 URL”：Sakai 提供的“LTI 1.3 平台 OAuth2 持有者令牌检索 URL”字段
   - “LTI 1.3 平台 OAuth2 已知/密钥集 URL”：Sakai 提供的“LTI 1.3 平台 OAuth2 已知/密钥集 URL”字段
  
  ![在 GitHub Classroom 注册 Sakai 实例](/assets/images/help/classroom/register-sakai-with-github-classroom.png)

3. 单击“注册”。 
4. 应会在屏幕上方看到“成功注册 LMS”的横幅，这意味着已注册了 LMS 实例，教师现在可以链接他们的教室。
