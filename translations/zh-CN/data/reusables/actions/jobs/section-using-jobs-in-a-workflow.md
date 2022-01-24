A workflow run is made up of one or more `jobs`, which run in parallel by default. 要按顺序运行作业，您可以使用 `<job_id>needs` 关键词在其他作业上定义依赖项。

每个作业在 `runs-on` 指定的运行器环境中运行。

在工作流程的使用限制之内可运行无限数量的作业。 For more information, see {% ifversion fpt or ghec or ghes %}"[Usage limits and billing](/actions/reference/usage-limits-billing-and-administration)" for {% data variables.product.prodname_dotcom %}-hosted runners and {% endif %}"[About self-hosted runners](/actions/hosting-your-own-runners/about-self-hosted-runners/#usage-limits){% ifversion fpt or ghec or ghes %}" for self-hosted runner usage limits.{% elsif ghae %}."{% endif %}

If you need to find the unique identifier of a job running in a workflow run, you can use the {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API. 更多信息请参阅“[工作流程作业](/rest/reference/actions#workflow-jobs)”。
