Based on your user license count, we recommend the following instance types.

{% if enterpriseServerVersions contains currentVersion %}
| User licenses  | Recommended type |
| :- | -: |
| Trial, demo, or 10 light users      | r4.large |
| 10 - 3000    | r4.xlarge |
| 3000 - 5000   | r4.2xlarge |
| 5000 - 8000   | r4.4xlarge |
| 8000 - 10000+ | r4.8xlarge |
{% endif %}
