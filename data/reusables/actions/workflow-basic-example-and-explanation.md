## Create an example workflow

{% data variables.product.prodname_actions %} uses YAML syntax to define the workflow.  Each workflow is stored as a separate YAML file in your code repository, in a directory named `.github/workflows`.

You can create an example workflow in your repository that automatically triggers a series of commands whenever code is pushed. In this workflow, {% data variables.product.prodname_actions %} checks out the pushed code, installs the [bats](https://www.npmjs.com/package/bats) testing framework, and runs a basic command to output the bats version: `bats -v`.

1. In your repository, create the `.github/workflows/` directory to store your workflow files.
1. In the `.github/workflows/` directory, create a new file called `learn-github-actions.yml` and add the following code.

   ```yaml
   name: learn-github-actions
   on: [push]
   jobs:
     check-bats-version:
       runs-on: ubuntu-latest
       steps:
         - uses: {% data reusables.actions.action-checkout %}
         - uses: {% data reusables.actions.action-setup-node %}
           with:
             node-version: '14'
         - run: npm install -g bats
         - run: bats -v
   ```
1. Commit these changes and push them to your {% data variables.product.prodname_dotcom %} repository.

Your new {% data variables.product.prodname_actions %} workflow file is now installed in your repository and will run automatically each time someone pushes a change to the repository. To see the details about a workflow's execution history, see "[Viewing the activity for a workflow run](#viewing-the-activity-for-a-workflow-run)."

## Understanding the workflow file

To help you understand how YAML syntax is used to create a workflow file, this section explains each line of the introduction's example:

<table>
<tr>
<td>

  ```yaml
  name: learn-github-actions
  ```
</td>
<td>
  <em>Optional</em> - The name of the workflow as it will appear in the Actions tab of the {% data variables.product.prodname_dotcom %} repository.
</td>
</tr>
<tr>
<td>

  ```yaml
  on: [push]
  ```
</td>
<td>
Specifies the trigger for this workflow. This example uses the <code>push</code> event, so a workflow run is triggered every time someone pushes a change to the repository or merges a pull request.  This is triggered by a push to every branch; for examples of syntax that runs only on pushes to specific branches, paths, or tags, see "<a href="/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore">Workflow syntax for {% data variables.product.prodname_actions %}</a>."
</td>
</tr>
<tr>
<td>

  ```yaml
  jobs:
  ```
</td>
<td>
 Groups together all the jobs that run in the <code>learn-github-actions</code> workflow.
</td>
</tr>
<tr>
<td>

  ```yaml
  check-bats-version:
  ```
</td>
<td>
Defines a job named <code>check-bats-version</code>. The child keys will define properties of the job.
</td>
</tr>
<tr>
<td>

  ```yaml
    runs-on: ubuntu-latest
  ```
</td>
<td>
  Configures the job to run on the latest version of an Ubuntu Linux runner. This means that the job will execute on a fresh virtual machine hosted by GitHub. For syntax examples using other runners, see "<a href="/actions/reference/workflow-syntax-for-github-actions#jobsjob_idruns-on">Workflow syntax for {% data variables.product.prodname_actions %}</a>."
</td>
</tr>
<tr>
<td>

  ```yaml
    steps:
  ```
</td>
<td>
  Groups together all the steps that run in the <code>check-bats-version</code> job. Each item nested under this section is a separate action or shell script.
</td>
</tr>
<tr>
<td>

  ```yaml
      - uses: {% data reusables.actions.action-checkout %}
  ```
</td>
<td>
The <code>uses</code> keyword specifies that this step will run <code>v3</code> of the <code>actions/checkout</code> action. This is an action that checks out your repository onto the runner, allowing you to run scripts or other actions against your code (such as build and test tools). You should use the checkout action any time your workflow will run against the repository's code.
</td>
</tr>
<tr>
<td>

  ```yaml
      - uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: '14'
  ```
</td>
<td>
  This step uses the <code>{% data reusables.actions.action-setup-node %}</code> action to install the specified version of the Node.js (this example uses v14). This puts both the <code>node</code> and <code>npm</code> commands in your <code>PATH</code>.
</td>
</tr>
<tr>
<td>

  ```yaml
      - run: npm install -g bats
  ```
</td>
<td>
  The <code>run</code> keyword tells the job to execute a command on the runner. In this case, you are using <code>npm</code> to install the <code>bats</code> software testing package.
</td>
</tr>
<tr>
<td>

  ```yaml
      - run: bats -v
  ```
</td>
<td>
  Finally, you'll run the <code>bats</code> command with a parameter that outputs the software version.
</td>
</tr>
</table>

### Visualizing the workflow file

In this diagram, you can see the workflow file you just created and how the {% data variables.product.prodname_actions %} components are organized in a hierarchy. Each step executes a single action or shell script. Steps 1 and 2 run actions, while steps 3 and 4 run shell scripts. To find more prebuilt actions for your workflows, see "[Finding and customizing actions](/actions/learn-github-actions/finding-and-customizing-actions)."

![Workflow overview](/assets/images/help/images/overview-actions-event.png)

## Viewing the activity for a workflow run

When your workflow is triggered, a _workflow run_ is created that executes the workflow. After a workflow run has started, you can see a visualization graph of the run's progress and view each step's activity on {% data variables.product.prodname_dotcom %}.

{% data reusables.repositories.navigate-to-repo %}
1. Under your repository name, click **Actions**.

   ![Navigate to repository](/assets/images/help/images/learn-github-actions-repository.png)
1. In the left sidebar, click the workflow you want to see.

   ![Screenshot of workflow results](/assets/images/help/images/learn-github-actions-workflow.png)
1. Under "Workflow runs", click the name of the run you want to see.

   ![Screenshot of workflow runs](/assets/images/help/images/learn-github-actions-run.png)
1. Under **Jobs** or in the visualization graph, click the job you want to see.

   ![Select job](/assets/images/help/images/overview-actions-result-navigate.png)
1. View the results of each step.

   ![Screenshot of workflow run details](/assets/images/help/images/overview-actions-result-updated-2.png)
