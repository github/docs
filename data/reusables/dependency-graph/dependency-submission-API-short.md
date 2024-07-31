{% ifversion dependency-graph-repository-view-update %}
Dependencies submitted to a project using the {% data variables.dependency-submission-api.name %} will show which detector was used for their submission and when they were submitted.
{% elsif ghes %}
The dependency graph will display the submitted dependencies grouped by ecosystem, but separately from the dependencies parsed from manifest or lock files.
{% else %}{% endif %}
