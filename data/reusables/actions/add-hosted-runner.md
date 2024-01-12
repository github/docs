1. Click **New runner**, then click **{% octicon "mark-github" aria-label="New hosted runner" %} New {% data variables.product.prodname_dotcom %}-hosted runner**.
1. Complete the required details to configure your new runner:

    - **Name**: Enter a name for your new runner. For easier identification, this should indicate its hardware and operating configuration, such as `ubuntu-20.04-16core`.
    - **Runner image**: Choose an operating system from the available options. Once you've selected an operating system, you will be able to choose a specific version.
    - **Runner size**: Choose a hardware configuration from the drop-down list of available options.
    - **Auto-scaling**: Choose the maximum number of jobs that can be active at any time.
    - **Runner group**: Choose the group that your runner will be a member of. This group will host multiple instances of your runner, as they scale up and down to suit demand. {% ifversion ghec %}
    - **Networking**: Choose whether static IP address ranges will be assigned to instances of the {% data variables.actions.hosted_runner %}. You can use up to 10 {% data variables.actions.hosted_runner %}s with static IP addresses in total. {% endif %}

1. Click **Create runner**.
