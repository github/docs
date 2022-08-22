工作流程运行由一个或多个 `jobs`组成，这些作业在默认情况下并行运行。 要按顺序运行作业，您可以使用 `<job_id>needs` 关键词在其他作业上定义依赖项。

每个作业在 `runs-on` 指定的运行器环境中运行。

在工作流程的使用限制之内可运行无限数量的作业。 更多信息请参阅 {% ifversion fpt or ghec or ghes %}“[使用限制和计费](/actions/reference/usage-limits-billing-and-administration)”（对于 {% data variables.product.prodname_dotcom %} 托管的运行器）和 {% endif %}“[关于自托管的运行器](/actions/hosting-your-own-runners/about-self-hosted-runners/#usage-limits){% ifversion fpt or ghec or ghes %}”（对于自托管运行器使用限制）。{% elsif ghae %}。”{% endif %}

如果需要查找在工作流程运行中运行的作业的唯一标识符，可以使用 {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API。 更多信息请参阅“[工作流程作业](/rest/reference/actions#workflow-jobs)”。
