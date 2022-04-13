The name for each audit log entry is composed of the `action` object or category qualifier, followed by an operation type. For example, the `repo.create` entry refers to the `create` operation on the `repo` category.

每个审核日志条目都显示有关事件的适用信息，例如：

- The {% ifversion ghec or ghes or ghae %}enterprise or {% endif %}organization an action was performed in
- The user (actor) who performed the action
- The user affected by the action
- 执行操作的仓库
- 执行的操作内容
- 发生操作的国家/地区
- 操作发生的日期和时间
