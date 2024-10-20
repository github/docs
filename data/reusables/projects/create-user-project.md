{% data reusables.profile.access_profile %}
1. On your profile, click {% octicon "table" aria-hidden="true" %} **Projects**.

   ![Screenshot showing profile tabs. The 'Projects' tab is highlighted with an orange outline.](/assets/images/help/projects-v2/tab-projects.png)

1. Click **New project**.
{%- ifversion projects-v2-org-templates-GA-updates %}
1. Select which type of project or template you want to use.
   * To create a blank project, under "Start from scratch", click **Table**, **Roadmap**, or **Board**.
   * To create a project from a template, click the built-in template that you want to use.
1. Optionally, if you selected a template, review the fields, views, workflows, and insights that will be created.
1. In the text box under "Project name", type a name for your new project.
1. Click **Create project**.
{%- else %}
1. Optionally, in the text box under "Project name", type a name for your new project.

   ![Screenshot showing the template selection modal. The title field is highlighted with an orange outline.](/assets/images/help/projects-v2/projects-select-template-title.png)

1. Click a {% ifversion projects-v2-org-templates %}built-in template, a template from your organization{% else %}template{% endif %} or, to start with an empty project, click **Table**, **Roadmap**, or **Board**.
1. Click **Create**.
{%- endif %}
