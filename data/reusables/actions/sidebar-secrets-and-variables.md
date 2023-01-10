{% ifversion fpt or ghec or ghes > 3.4 or ghae > 3.4 -%}
1. In the "Security" section of the sidebar, select {% ifversion actions-configuration-variables %}**{% octicon "key-asterisk" aria-label="The key-asterisk icon" %} Secrets and variables**, {% else %}**{% octicon "key-asterisk" aria-label="The key-asterisk icon" %} Secrets**, {% endif %}then click **Actions**.
{%- else %}
1. In the left sidebar, click **Secrets**.
{%- endif %}
