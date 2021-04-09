---
title: GitHub 容器注册表的核心概念
intro: '以下是我们在网站和文档中使用的 {% data variables.product.prodname_github_container_registry %} 常见术语列表。'
product: '{% data reusables.gated-features.packages %}'
versions:
  free-pro-team: '*'
---

{% data reusables.package_registry.container-registry-beta %}

### {% data variables.product.prodname_github_container_registry %}

{% data variables.product.prodname_github_container_registry %} 是支持 Docker 映像的容器的注册表。 更多信息请参阅“[关于 {% data variables.product.prodname_github_container_registry %}](/packages/getting-started-with-github-container-registry/about-github-container-registry)”。

### 包

包是一个自包含且可重用的软件，它包括代码和元数据，开发人员可将它们捆绑在一个位置供他人使用。 包的元数据可能包括版本号、名称和代码的依赖项。 包简化了针对常见问题的使用和分发解决方案，例如需要使用框架来开发或测试项目、进行语法检查以提高代码质量，或引入行业标准的机器学习工具来强化您的应用程序。 包存在于许多生态系统中。 例如，您可以打包 Node.js 和 Java 代码或容器映像。

### 容器

容器是一个软件单元，设计为在任何平台上以标准化的方式可靠地部署软件。 容器作为独立的虚拟环境或实例运行，可在与操作系统相同的主机内核上运行各种软件包和组件。 容器使用的资源比虚拟机少，因为它们不需要自带虚拟硬件即可运行。 容器是使用容器映像文件（如 Dockerfile）和容器客户端或运行时程序创建的。

### 容器映像

容器映像是一种包存档类型，用于指定从容器运行应用程序的软件要求。 容器映像通常包括应用程序的代码、库和运行时指令。 为确保在部署和运行映像的所有地方使用相同的映像详细信息，容器映像将自动进行版本管理，并且在容器中生成容器映像后无法更改。

### Docker 容器

Docker 容器是一种在 Docker 平台上构建的开源容器类型。 Docker 的原始映像格式已成为 OCI（开放容器计划）映像规范。 更多信息请参阅 [Docker 文档](https://docs.docker.com/get-started/overview/)。
