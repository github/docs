The name for each audit log entry is composed of the `action` object or category qualifier, followed by an operation type. For example, the `repo.create` entry refers to the `create` operation on the `repo` category.

Cada entrada do log de auditoria mostra informações aplicáveis sobre um evento, como:

- The {% ifversion ghec or ghes or ghae %}enterprise or {% endif %}organization an action was performed in
- The user (actor) who performed the action
- The user affected by the action
- Em qual repositório uma ação foi executada
- A ação que foi executada
- Em que país a ação foi executada
- A data e a hora que a ação foi executada
