By default, {% data variables.product.prodname_actions %} workflows will not run automatically when {% data variables.product.prodname_copilot_short %} pushes changes to a pull request.

{% data variables.product.prodname_actions %} workflows can be privileged and have access to sensitive secrets. {% data reusables.actions.workflows.inspect-proposed-changes %}

To allow {% data variables.product.prodname_actions %} workflows to run, click the **Approve and run workflows** button in the pull request's merge box.

![Screenshot of the merge box on a pull request from {% data variables.product.prodname_copilot_short %} with the "Approve and run workflows" button.](/assets/images/help/copilot/cloud-agent/approve-and-run-workflows.png)

Optionally, you can configure {% data variables.copilot.copilot_cloud_agent %} to allow {% data variables.product.prodname_actions %} workflows to run without human intervention.