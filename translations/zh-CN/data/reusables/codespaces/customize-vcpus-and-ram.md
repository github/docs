您可以通过调整 vCPU 和 RAM 的数量、[添加 dotfiles 以个性化环境](/codespaces/setting-up-your-codespace/personalizing-codespaces-for-your-account)或者修改安装的工具和脚本来自定义代码空间。

{% data variables.product.prodname_codespaces %} 使用名为 `devcontainer.json` 的文件来配置在代码空间中工作时使用的开发容器。 每个存储库可以包含一个或多个  `devcontainer.json` 文件，以便为您提供在代码空间中处理代码所需的开发环境。

启动时，{% data variables.product.prodname_codespaces %} 使用 `devcontainer.json` 文件以及构成开发容器配置的任何依赖文件来安装工具和运行时，并执行项目所需的其他设置任务。 更多信息请参阅“[开发容器简介](/codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project)”。
