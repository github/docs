当您为现有仓库启用一个或多个安全和分析功能时，您将在几分钟内看到 {% data variables.product.prodname_dotcom %} 上显示的任何结果：

- 所有现有仓库将具有选定的配置。
- 如果启用了新仓库的复选框，则新仓库将遵循所选配置。{% ifversion fpt or ghec %}
- 我们使用权限扫描清单文件以应用相关服务。
- 如果启用，您将在依赖关系图中看到依赖项信息。
- If enabled, {% data variables.product.prodname_dotcom %} will generate {% data variables.product.prodname_dependabot_alerts %} for vulnerable dependencies.{% endif %}{% ifversion fpt or ghec or ghes > 3.2 %}
- If enabled, {% data variables.product.prodname_dependabot %} security updates will create pull requests to upgrade vulnerable dependencies when {% data variables.product.prodname_dependabot_alerts %} are triggered.{% endif %}
