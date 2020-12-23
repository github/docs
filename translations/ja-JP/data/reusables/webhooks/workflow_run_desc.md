
This event occurs when a workflow run is requested or completed, and allows you to execute a workflow based on the finished result of another workflow. For example, if your `pull_request` workflow generates build artifacts, you can create a new workflow that uses `workflow_run` to analyze the results and add a comment to the original pull request.

The workflow started by the `workflow_run` event is able to access the secrets and write tokens used by the original workflow.
