1. Click **Remove**.
1. You will see instructions for removing the self-hosted runner. Complete either of the following steps to remove the runner, depending on whether it is still accessible:

    - **If you have access to the runner machine:** Follow the on-screen instructions for your machine's operating system to run the removal command. The instructions include the required URL and an automatically-generated, time-limited token.

        The removal command does the following tasks:

        - Removes the runner from {% data variables.product.product_name %}.
        - Removes any self-hosted runner application configuration files on the machine.
        - Removes any services configured if not running in interactive mode.

    - **If you don't have access to the machine:** Click **Force remove this runner** to force {% data variables.product.product_name %} to remove the runner.
