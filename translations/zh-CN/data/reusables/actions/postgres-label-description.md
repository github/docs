工作流程用 `postgres` 标签配置服务容器。 所有服务必须在容器中运行，因此每个服务都需要指定容器`映像`。 此示例使用 `postgres` 容器映像，提供默认 PostgreSQL 密码，并包括状态检查选项以确保服务正在运行。 更多信息请参阅 Docker Hub 上的 [postgres 映像](https://hub.docker.com/_/postgres)。
