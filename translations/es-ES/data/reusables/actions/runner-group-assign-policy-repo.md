1. Assign a policy for repository access.

    You can configure a runner group to be accessible to a specific list of repositories, or to all repositories in the organization.{% ifversion ghec or ghes %} By default, only private repositories can access runners in a runner group, but you can override this. Esta configuración no puede anularse si se configura un grupo ejecutor de la organización que haya compartido una empresa.{% endif %}
