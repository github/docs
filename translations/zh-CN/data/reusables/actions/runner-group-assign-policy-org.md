1. 输入运行程序组的名称，并分配组织访问策略。

    You can configure a runner group to be accessible to a specific list of organizations, or all organizations in the enterprise.{% ifversion ghec or ghes %} By default, only private repositories can access runners in a runner group, but you can override this. 如果配置企业共享的组织的运行组，则不能覆盖此设置。{% endif %}
