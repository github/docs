{% data variables.product.prodname_codespaces %} 根据其计算和存储使用情况以美元 (USD) 计费。

### 计算运算使用率
运算使用率定义为 {% data variables.product.prodname_github_codespaces %} 实例处于活动状态的正常运行时间总分钟数。 运算使用率是通过对所有代码空间使用的实际分钟数求和来计算的。 这些总计每天报告给计费服务，并按月计费。

正常运行时间是通过停止代码空间来控制的，这可以手动完成，也可以在开发人员指定的非活动期后自动完成。 更多信息请参阅“[关闭或停止代码空间](/codespaces/getting-started/deep-dive#closing-or-stopping-your-codespace)”。

### 计算存储使用率
出于 {% data variables.product.prodname_github_codespaces %} 计费目的，这包括您帐户中所有代码空间使用的所有存储空间。 这包括代码空间使用的任何文件，例如克隆的存储库、配置文件和扩展等。 这些总计每天报告给计费服务，并按月计费。 到月底，{% data variables.product.prodname_dotcom %} 会将您的存储量舍入到最接近的 MB。 
