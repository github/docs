1. Select the operating system image and architecture of your self-hosted runner machine.
1. You will see instructions showing you how to download the runner application and install it on your self-hosted runner machine.

   Open a shell on your self-hosted runner machine and run each shell command in the order shown.

   {% note %}

   **Note:** On Windows, if you want to install the self-hosted runner application as a service, you must open a shell with administrator privileges. We also recommend that you use `C:\actions-runner` as the directory for the self-hosted runner application so that Windows system accounts can access the runner directory.

   {% endnote %}

   The instructions walk you through completing these tasks:
   - Downloading and extracting the self-hosted runner application.
   - Running the `config` script to configure the self-hosted runner application and register it with {% data variables.product.prodname_actions %}. The `config` script requires the destination URL and an automatically-generated time-limited token to authenticate the request.
     - On Windows, the `config` script also asks if you would like to install the self-hosted runner application as a service. For Linux and macOS, you can install a service after you finish adding the runner. For more information, see "[Configuring the self-hosted runner application as a service](/actions/automating-your-workflow-with-github-actions/configuring-the-self-hosted-runner-application-as-a-service)."
   - Running the self-hosted runner application to connect the machine to {% data variables.product.prodname_actions %}.
{% ifversion fpt or ghec or ghes > 3.2 %}
     - If you are setting up a cluster of runners, you can install another tool to automatically scale your runners.  For more information, see "[Autoscaling with self-hosted runners](/actions/hosting-your-own-runners/autoscaling-with-self-hosted-runners)."
{% endif %}
