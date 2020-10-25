如果您依赖于使用私有仓库的复刻，您可以配置策略来控制用户如何在 `pull_request` 事件上运行工作流程。 （仅适用于私有仓库）您可以为企业、组织或仓库配置这些策略设置。 对于企业，该策略将应用到所有组织中的所有仓库。

- **Run workflows from fork pull requests（从复刻拉取请求运行工作流程）** - 允许用户使用具有只读权限、没有密码访问权限的 `GITHUB_TOKEN`从复刻拉取请求运行工作流程。
- **Send write tokens to workflows from pull requests（从拉取请求向工作流程发送写入令牌）** - 允许从复刻拉取请求以使用具有写入权限的 `GITHUB_TOKEN`。
- **Send secrets to workflows from pull requests（从拉取请求向工作流程发送密码）** - 使所有密码可用于拉取请求。
