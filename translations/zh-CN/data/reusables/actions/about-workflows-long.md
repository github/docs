工作流程是一个可配置的自动化过程，它将运行一个或多个作业。 工作流程由签入到存储库的 YAML 文件定义，并在存储库中的事件触发时运行，也可以手动触发，或按定义的时间表触发。

Workflows are defined in the `.github/workflows` directory in a repository, and a repository can have multiple workflows, each of which can perform a different set of tasks. 例如，您可以有一个工作流程来构建和测试拉取请求，另一个工作流程用于在每次创建发布时部署应用程序，还有一个工作流程在每次有人打开新议题时添加标签。
