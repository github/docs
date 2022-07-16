每个审核日志条目的名称由 `action` 对象或类别限定符组成，后跟操作类型。 例如， `repo.create` 条目引用 `repo` 类别上的 `create` 操作。

每个审核日志条目都显示有关事件的适用信息，例如：

- 执行了操作的{% ifversion ghec or ghes or ghae %}企业或 {% endif %}组织
- 执行操作的用户（参与者）
- 受操作影响的用户
- 执行操作的仓库
- 执行的操作内容
- 发生操作的国家/地区
- 操作发生的日期和时间
{%- ifversion enterprise-audit-log-ip-addresses %}
- （可选）执行操作的用户（参与者）的源 IP 地址
{%- endif %}
