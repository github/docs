---
ms.openlocfilehash: 9e47cc05dec3bbdef729dfc6a06eff8056dd9502
ms.sourcegitcommit: 80842b4e4c500daa051eff0ccd7cde91c2d4bb36
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/12/2022
ms.locfileid: "145100412"
---
### 持续集成工作流程中的打包

打包步骤是持续集成或持续交付工作流程的常见部分。 在持续集成工作流程结束时创建包有助于拉取请求的代码审查。

构建并测试代码后，打包步骤可以生成可运行或可部署的构件。 根据您构建的应用程序类型，此包可本地下载以进行手动测试、可供用户下载或部署到暂存或生产环境。

例如，Java 项目的连续集成工作流可能运行 `mvn package` 来生成 JAR 文件。 或者，Node.js 应用程序的 CI 工作流程可能会创建 Docker 容器。

现在，在审查拉取请求时，您将能够查看工作流程运行并下载生成的构件。

![下载构件下拉菜单](/assets/images/help/repository/artifact-drop-down-updated.png)

这将允许您在计算机上运行拉取请求中的代码，有助于调试或测试拉取请求。

### 发布包的工作流程

除了上传打包构件以测试持续集成工作流程之外， 您还可以创建工作流程来构建项目并发布包到软件包注册表。

* 发布包到 {% data variables.product.prodname_registry %}  
  {% data variables.product.prodname_registry %} 可以作为多种类型包的包托管服务。 您可以选择与所有 {% data variables.product.prodname_dotcom %} 共享您的软件包，或者与合作者或组织共享私有软件包。 有关详细信息，请参阅“[GitHub 包简介](/packages/learn-github-packages/introduction-to-github-packages)”。

  每次推送到默认分支，您可能想将软件包发布到 {% data variables.product.prodname_registry %}。 这可让项目开发者始终能够通过从 {% data variables.product.prodname_registry %} 安装，很容易地运行和测试默认分支中的最新构建版本。

* 将包发布到包注册表  
  对于许多项目，每当发布项目的新版本时，都会执行发布到包注册表。 例如，生成 JAR 文件的项目可能会将新版本上传到 Maven Central 仓库。 或者，.NET 项目可能会生成一个微件包并上传到 Nuget Gallery。

  您可以创建一个工作流程来自动执行此操作，在每次创建版本时将软件包发布到软件包注册表。 有关详细信息，请参阅“[创建版本](/github/administering-a-repository/creating-releases)”。
