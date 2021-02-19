{% if enterpriseServerVersions contains currentVersion %}
作为优化配置的一部分，LDAP 同步不会传输您的嵌套团队结构。 要创建子团队与父团队的关系，必须手动重新创建嵌套团队结构并将其与相应的 LDAP 组同步。 更多信息请参阅“[创建团队](/enterprise/{{ currentVersion }}/admin/guides/user-management/creating-teams/#creating-teams-with-ldap-sync-enabled)”。
{% endif %}