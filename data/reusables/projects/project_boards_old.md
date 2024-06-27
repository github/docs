{% ifversion projects-v1-can-create %}

{% ifversion projects-v2 %}

>[!NOTE]
>* {% data variables.product.prodname_projects_v2 %}, the all-new projects experience, is now available. For more information about {% data variables.product.prodname_projects_v2 %}, see "[AUTOTITLE](/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects)."
>* You can only create a new {% data variables.projects.projects_v1_board %} for an organization{% ifversion projects-v1-create-repo-project %}, repository, {% endif %} or user that already has at least one {% data variables.projects.projects_v1_board %}. {% ifversion projects-v1-create-repo-project %}{% else %} You cannot create new {% data variables.projects.projects_v1_boards %} for repositories. {% endif %} If you're unable to create a {% data variables.projects.projects_v1_board %}, create a project instead.

{% endif %}

{% else %}

>[!NOTE]
{% data reusables.projects.sunset_notice_content %}

{% endif %}
