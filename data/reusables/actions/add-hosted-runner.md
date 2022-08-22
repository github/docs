1. Click **New runner**, then click **{% octicon "mark-github" aria-label="New hosted runner" %} New Github-hosted runner**.
1. Complete the required details to configure your new runner:

    - **Name**: Enter a name for your new runner. For easier identification, this should indicate its hardware and operating configuration, such as `runner-16-core-ubuntu-20-04`.
    - **Runner image**: Choose an operating system from the available options. Once you've selected an operating system, you will be able to choose a specific version.
    - **Runner size**: Choose a hardware configuration from the drop-down list of available options.
    - **Auto-scaling**: Choose the maximum number of runners that can be active at any time.
    - **Runner group**: Choose the group that your runner will be a member of. This group will host multiple instances of your runner, as they scale up and down to suit demand.
    - **Labels**: Choose the labels that you want to apply to your runner. For easier identification, this should indicate its hardware and operating configuration, such as `16-core-ubuntu-20-04`.
    - **Networking**: Choose the static IP address range that will be assigned to instances of the hosted runner.

1. Click **Create runner**.