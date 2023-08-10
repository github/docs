{% ifversion dependency-graph-repository-view-update %}
Dependencies submitted to a project using the Dependency submission API (beta) will show which detector was used for their submission and when they were submitted.
{% elsif ghes > 3.6 or ghae > 3.6 %}
The dependency graph will display the submitted dependencies grouped by ecosystem, but separately from the dependencies parsed from manifest or lock files.
{% else %}{% endif %}
