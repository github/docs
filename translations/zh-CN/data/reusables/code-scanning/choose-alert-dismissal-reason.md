从下拉菜单中选择合适的原因很重要，因为这可能会影响到是否继续将查询纳入未来的分析。
{% ifversion comment-dismissed-code-scanning-alert %}（可选）您可以对取消进行注释，以记录警报解除的上下文。 取消注释将添加到警报时间线中，并可在审核和报告期间用作理由。 您可以使用代码扫描 REST API 检索或设置注释。 注释包含在 `alerts/{alert_number}` 端点的 `dismissed_comment` 中。 更多信息请参阅“[代码扫描](/rest/code-scanning#update-a-code-scanning-alert)”。
{% endif %}
