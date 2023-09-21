{% data reusables.audit_log.category-operation-notation %}

Each audit log entry shows applicable information about an event, such as:

- The {% ifversion ghec or ghes or ghae %}enterprise or {% endif %}organization an action was performed in
- The user (actor) who performed the action
- The user affected by the action
- Which repository an action was performed in
- The action that was performed
- Which country the action took place in
- The date and time the action occurred
{%- ifversion enterprise-audit-log-ip-addresses %}
- Optionally, the source IP address for the user (actor) who performed the action
{%- endif %}
