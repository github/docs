## Troubleshooting

If you encounter issues while using the {% data variables.product.github %} MCP server, there are a few common troubleshooting steps you can take.

### Authorization issues

If you are having trouble authorizing the MCP server, ensure that:

* You are signed in to {% data variables.product.github %} in your choice of IDE.

If you are authenticating with a {% data variables.product.pat_generic %} (PAT), ensure that:
* Your GitHub PAT is valid and has the necessary scopes for the actions you want to perform.
* You have entered the correct PAT.

### Copilot agent mode problems

If you are having trouble with the {% data variables.copilot.copilot_chat_short %} agent mode, ensure that:
* You have selected the correct agent in the {% data variables.copilot.copilot_chat_short %} box.
* You have configured the MCP server correctly in your IDE.
* You have the necessary permissions to perform the actions you are trying to execute.

### General tips

If you are experiencing other issues with the {% data variables.product.github %} MCP server, here are some general tips to help you troubleshoot:

* Check the output logs of the MCP server for any error messages.
* If you are running the MCP server locally, ensure that your local environment is set up correctly for running Docker containers.
* Try restarting the MCP server or your IDE.
