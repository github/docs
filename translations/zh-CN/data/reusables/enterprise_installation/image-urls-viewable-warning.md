{% warning %}

**警告：**如果您在拉取请求或议题评论中添加了图像附件，则任何人都可以查看匿名图像 URL，无需身份验证{% if enterpriseServerVersions contains currentVersion %}，即使该拉取请求位于私有仓库中或者启用了私有模式。 为防止未经授权而访问映像，请确保限制从网络访问提供映像的系统，包括 {% data variables.product.product_location %}{% endif %}。{% if currentVersion == "github-ae@latest" %}为防止未经授权而访问 {% data variables.product.product_name %} 上的映像 URL，请考虑限制到企业的网络流量。 更多信息请参阅“[限制到企业的网络流量](/admin/configuration/restricting-network-traffic-to-your-enterprise)”。{% endif %}

{% endwarning %}
