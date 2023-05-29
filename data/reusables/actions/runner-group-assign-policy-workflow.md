{%- ifversion restrict-groups-to-workflows %}
1. Assign a policy for workflow access.

   You can configure a runner group to be accessible to a specific list of workflows, or to all workflows. This setting can't be overridden if you are configuring an organization's runner group that was shared by an enterprise. If you specify what workflow can access the runner group, you must use the full path to the workflow, including the repository name and owner, and you must pin the workflow to a branch, tag, or full SHA. For example: `octo-org/octo-repo/.github/workflows/build.yml@v2, octo-org/octo-repo/.github/workflows/deploy.yml@d6dc6c96df4f32fa27b039f2084f576ed2c5c2a5, monalisa/octo-test/.github/workflows/test.yml@main`. 
   
   Only jobs directly defined within the selected workflows will have access to the runner group.{%- endif %}
