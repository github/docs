O nome para cada entrada de log de auditoria é composto pela ação `objeto` ou qualificador de categoria, seguida por um tipo de operação. Por exemplo, a entrada `repo.create` refere-se à operação `criar` na categoria `repositório`.

Cada entrada do log de auditoria mostra informações aplicáveis sobre um evento, como:

- A empresa {% ifversion ghec or ghes or ghae %}ou a organização {% endif %}em que uma ação foi realizada
- O usuário (ator) que realizou a ação
- O usuário afetado pela ação
- Em qual repositório uma ação foi executada
- A ação que foi executada
- Em que país a ação foi executada
- A data e a hora que a ação foi executada
{%- ifversion enterprise-audit-log-ip-addresses %}
- Opcionalmente, o endereço IP de origem para o usuário (ator) que executou a ação
{%- endif %}
