---
title: Metadata syntax for GitHub Actions
shortTitle: Metadata syntax
intro: You can create actions to perform tasks in your repository. Actions require a metadata file that uses YAML syntax.
redirect_from:
  - /articles/metadata-syntax-for-github-actions
  - /github/automating-your-workflow-with-github-actions/metadata-syntax-for-github-actions
  - /actions/automating-your-workflow-with-github-actions/metadata-syntax-for-github-actions
  - /actions/building-actions/metadata-syntax-for-github-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: reference
miniTocMaxHeadingLevel: 4
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## About YAML syntax for {% data variables.product.prodname_actions %}

All actions require a metadata file. The metadata filename must be either `action.yml` or `action.yaml`. The data in the metadata file defines the inputs, outputs, and runs configuration for your action.

Action metadata files use YAML syntax. If you're new to YAML, you can read "[Learn YAML in five minutes](https://www.codeproject.com/Articles/1214409/Learn-YAML-in-five-minutes)."

## `name`

**Required** The name of your action. {% data variables.product.prodname_dotcom %} displays the `name` in the **Actions** tab to help visually identify actions in each job.

## `author`

**Optional** The name of the action's author.

## `description`

**Required** A short description of the action.

## `inputs`

**Optional** Input parameters allow you to specify data that the action expects to use during runtime. {% data variables.product.prodname_dotcom %} stores input parameters as environment variables. Input ids with uppercase letters are converted to lowercase during runtime. We recommended using lowercase input ids.

### Example: Specifying inputs

This example configures two inputs: numOctocats and octocatEyeColor. The numOctocats input is not required and will default to a value of '1'. The octocatEyeColor input is required and has no default value. Workflow files that use this action must use the `with` keyword to set an input value for octocatEyeColor. For more information about the `with` syntax, see "[Workflow syntax for {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions/#jobsjob_idstepswith)."

```yaml
inputs:
  numOctocats:
    description: 'Number of Octocats'
    required: false
    default: '1'
  octocatEyeColor:
    description: 'Eye color of the Octocats'
    required: true
```

When you specify an input in a workflow file or use a default input value, {% data variables.product.prodname_dotcom %} creates an environment variable for the input with the name `INPUT_<VARIABLE_NAME>`. The environment variable created converts input names to uppercase letters and replaces spaces with `_` characters.

If the action is written using a [composite](/actions/creating-actions/creating-a-composite-action), then it will not automatically get `INPUT_<VARIABLE_NAME>`. If the conversion doesn't occur, you can change these inputs manually. 

To access the environment variable in a Docker container action, you must pass the input using the `args` keyword in the action metadata file. For more information about the action metadata file for Docker container actions, see "[Creating a Docker container action](/articles/creating-a-docker-container-action#creating-an-action-metadata-file)."

For example, if a workflow defined the `numOctocats` and `octocatEyeColor` inputs, the action code could read the values of the inputs using the `INPUT_NUMOCTOCATS` and `INPUT_OCTOCATEYECOLOR` environment variables.

### `inputs.<input_id>`

**Required** A `string` identifier to associate with the input. The value of `<input_id>` is a map of the input's metadata. The `<input_id>` must be a unique identifier within the `inputs` object. The `<input_id>` must start with a letter or `_` and contain only alphanumeric characters, `-`, or `_`.

### `inputs.<input_id>.description`

**Required** A `string` description of the input parameter.

### `inputs.<input_id>.required`

**Optional** A `boolean` to indicate whether the action requires the input parameter. Set to `true` when the parameter is required.

### `inputs.<input_id>.default`

**Optional** A `string` representing the default value. The default value is used when an input parameter isn't specified in a workflow file.

### `inputs.<input_id>.deprecationMessage`

**Optional** If the input parameter is used, this `string` is logged as a warning message. You can use this warning to notify users that the input is deprecated and mention any alternatives.

## `outputs` for Docker container and JavaScript actions

**Optional** Output parameters allow you to declare data that an action sets. Actions that run later in a workflow can use the output data set in previously run actions.  For example, if you had an action that performed the addition of two inputs (x + y = z), the action could output the sum (z) for other actions to use as an input.

{% data reusables.actions.output-limitations %}

If you don't declare an output in your action metadata file, you can still set outputs and use them in a workflow. For more information on setting outputs in an action, see "[Workflow commands for {% data variables.product.prodname_actions %}](/actions/reference/workflow-commands-for-github-actions/#setting-an-output-parameter)."

### Example: Declaring outputs for Docker container and JavaScript actions

```yaml
outputs:
  sum: # id of the output
    description: 'The sum of the inputs'
```

### `outputs.<output_id>`

**Required** A `string` identifier to associate with the output. The value of `<output_id>` is a map of the output's metadata. The `<output_id>` must be a unique identifier within the `outputs` object. The `<output_id>` must start with a letter or `_` and contain only alphanumeric characters, `-`, or `_`.

### `outputs.<output_id>.description`

**Required** A `string` description of the output parameter.

## `outputs` for composite actions

**Optional** `outputs` use the same parameters as `outputs.<output_id>` and `outputs.<output_id>.description` (see "[`outputs` for Docker container and JavaScript actions](#outputs-for-docker-container-and-javascript-actions)"), but also includes the `value` token.

{% data reusables.actions.output-limitations %}

### Example: Declaring outputs for composite actions

{% raw %}
```yaml
outputs:
  random-number:
    description: "Random number"
    value: ${{ steps.random-number-generator.outputs.random-id }}
runs:
  using: "composite"
  steps:
    - id: random-number-generator
      run: echo "::set-output name=random-id::$(echo $RANDOM)"
      shell: bash
```
{% endraw %}

### `outputs.<output_id>.value`

**Required** The value that the output parameter will be mapped to. You can set this to a `string` or an expression with context. For example, you can use the `steps` context to set the `value` of an output to the output value of a step.

For more information on how to use context syntax, see "[Contexts](/actions/learn-github-actions/contexts)."

## `runs`

**Required** Specifies whether this is a JavaScript action, a composite action, or a Docker container action and how the action is executed.

## `runs` for JavaScript actions

**Required** Configures the path to the action's code and the runtime used to execute the code.

### Example: Using Node.js {% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %}v16{% else %}v12{% endif %}

```yaml
runs:
  using: {% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %}'node16'{% else %}'node12'{% endif %}
  main: 'main.js'
```

### `runs.using`

**Required** The runtime used to execute the code specified in [`main`](#runsmain).  

- Use `node12` for Node.js v12.{% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %}
- Use `node16` for Node.js v16.{% endif %}

### `runs.main`

**Required** The file that contains your action code. The runtime specified in [`using`](#runsusing) executes this file.

### `runs.pre`

**Optional** Allows you to run a script at the start of a job, before the `main:` action begins. For example, you can use `pre:` to run a prerequisite setup script. The runtime specified with the [`using`](#runsusing) syntax will execute this file. The `pre:` action always runs by default but you can override this using [`runs.pre-if`](#runspre-if).

In this example, the `pre:` action runs a script called `setup.js`:

```yaml
runs:
  using: {% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %}'node16'{% else %}'node12'{% endif %}
  pre: 'setup.js'
  main: 'index.js'
  post: 'cleanup.js'
```

### `runs.pre-if`

**Optional** Allows you to define conditions for the `pre:` action execution. The `pre:` action will only run if the conditions in `pre-if` are met. If not set, then `pre-if` defaults to `always()`. In `pre-if`, status check functions evaluate against the job's status, not the action's own status.

Note that the `step` context is unavailable, as no steps have run yet.

In this example, `cleanup.js` only runs on Linux-based runners:

```yaml
  pre: 'cleanup.js'
  pre-if: runner.os == 'linux'
```

### `runs.post`

**Optional** Allows you to run a script at the end of a job, once the `main:` action has completed. For example, you can use `post:` to terminate certain processes or remove unneeded files. The runtime specified with the [`using`](#runsusing) syntax will execute this file.

In this example, the `post:` action runs a script called `cleanup.js`:

```yaml
runs:
  using: {% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %}'node16'{% else %}'node12'{% endif %}
  main: 'index.js'
  post: 'cleanup.js'
```

The `post:` action always runs by default but you can override this using `post-if`.

### `runs.post-if`

**Optional** Allows you to define conditions for the `post:` action execution. The `post:` action will only run if the conditions in `post-if` are met. If not set, then `post-if` defaults to `always()`. In `post-if`, status check functions evaluate against the job's status, not the action's own status.

For example, this `cleanup.js` will only run on Linux-based runners:

```yaml
  post: 'cleanup.js'
  post-if: runner.os == 'linux'
```

## `runs` for composite actions

**Required** Configures the path to the composite action.

### `runs.using`

**Required** You must set this value to `'composite'`.

### `runs.steps`

{% ifversion fpt or ghes > 3.2 or ghae or ghec %}
**Required** The steps that you plan to run in this action. These can be either `run` steps or `uses` steps.
{% else %}
**Required** The steps that you plan to run in this action.
{% endif %}

#### `runs.steps[*].run`

{% ifversion fpt or ghes > 3.2 or ghae or ghec %}
**Optional** The command you want to run. This can be inline or a script in your action repository:
{% else %}
**Required** The command you want to run. This can be inline or a script in your action repository:
{% endif %}

{% raw %}
```yaml
runs:
  using: "composite"
  steps:
    - run: ${{ github.action_path }}/test/script.sh
      shell: bash
```
{% endraw %}

Alternatively, you can use `$GITHUB_ACTION_PATH`:

```yaml
runs:
  using: "composite"
  steps:
    - run: $GITHUB_ACTION_PATH/script.sh
      shell: bash
```

For more information, see "[`github context`](/actions/reference/context-and-expression-syntax-for-github-actions#github-context)".

#### `runs.steps[*].shell`

{% ifversion fpt or ghes > 3.2 or ghae or ghec %}
**Optional** The shell where you want to run the command. You can use any of the shells listed [here](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepsshell). Required if `run` is set.
{% else %}
**Required** The shell where you want to run the command. You can use any of the shells listed [here](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepsshell). Required if `run` is set.
{% endif %}

{% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %}
#### `runs.steps[*].if`

**Optional** You can use the `if` conditional to prevent a step from running unless a condition is met. You can use any supported context and expression to create a conditional.

{% data reusables.actions.expression-syntax-if %} For more information, see "[Expressions](/actions/learn-github-actions/expressions)."

**Example: Using contexts**

 This step only runs when the event type is a `pull_request` and the event action is `unassigned`.

 ```yaml
steps:
  - run: echo This event is a pull request that had an assignee removed.
    if: {% raw %}${{ github.event_name == 'pull_request' && github.event.action == 'unassigned' }}{% endraw %}
```

**Example: Using status check functions**

The `my backup step` only runs when the previous step of a composite action fails. For more information, see "[Expressions](/actions/learn-github-actions/expressions#status-check-functions)."

```yaml
steps:
  - name: My first step
    uses: octo-org/action-name@main
  - name: My backup step
    if: {% raw %}${{ failure() }}{% endraw %}
    uses: actions/heroku@1.0.0
```
{% endif %}

#### `runs.steps[*].name`

**Optional** The name of the composite step.

#### `runs.steps[*].id`

**Optional** A unique identifier for the step. You can use the `id` to reference the step in contexts. For more information, see "[Contexts](/actions/learn-github-actions/contexts)."

#### `runs.steps[*].env`

**Optional**  Sets a `map` of environment variables for only that step. If you want to modify the environment variable stored in the workflow, use `echo "{name}={value}" >> $GITHUB_ENV` in a composite step.

#### `runs.steps[*].working-directory`

**Optional**  Specifies the working directory where the command is run.

{% ifversion fpt or ghes > 3.2 or ghae or ghec %}
#### `runs.steps[*].uses`

**Optional**  Selects an action to run as part of a step in your job. An action is a reusable unit of code. You can use an action defined in the same repository as the workflow, a public repository, or in a [published Docker container image](https://hub.docker.com/).

We strongly recommend that you include the version of the action you are using by specifying a Git ref, SHA, or Docker tag number. If you don't specify a version, it could break your workflows or cause unexpected behavior when the action owner publishes an update.
- Using the commit SHA of a released action version is the safest for stability and security.
- Using the specific major action version allows you to receive critical fixes and security patches while still maintaining compatibility. It also assures that your workflow should still work.
- Using the default branch of an action may be convenient, but if someone releases a new major version with a breaking change, your workflow could break.

Some actions require inputs that you must set using the [`with`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepswith) keyword. Review the action's README file to determine the inputs required.

```yaml
runs:
  using: "composite"
  steps:
    # Reference a specific commit
    - uses: actions/checkout@a81bbbf8298c0fa03ea29cdc473d45769f953675
    # Reference the major version of a release
    - uses: {% data reusables.actions.action-checkout %}
    # Reference a specific version
    - uses: {% data reusables.actions.action-checkout %}.2.0
    # Reference a branch
    - uses: actions/checkout@main
    # References a subdirectory in a public GitHub repository at a specific branch, ref, or SHA
    - uses: actions/aws/ec2@main
    # References a local action
    - uses: ./.github/actions/my-action
    # References a docker public registry action
    - uses: docker://gcr.io/cloud-builders/gradle
    # Reference a docker image published on docker hub
    - uses: docker://alpine:3.8
```

#### `runs.steps[*].with`

**Optional**  A `map` of the input parameters defined by the action. Each input parameter is a key/value pair. For more information, see [Example: Specifying inputs](#example-specifying-inputs).

```yaml
runs:
  using: "composite"
  steps:
    - name: My first step
      uses: actions/hello_world@main
      with:
        first_name: Mona
        middle_name: The
        last_name: Octocat  
```
{% endif %}

{% ifversion ghes > 3.5 or ghae > 3.5 %}

#### `runs.steps[*].continue-on-error`

**Optional**  Prevents the action from failing when a step fails. Set to `true` to allow the action to pass when this step fails.

{% endif %}

## `runs` for Docker container actions

**Required** Configures the image used for the Docker container action.

### Example: Using a Dockerfile in your repository

```yaml
runs:
  using: 'docker'
  image: 'Dockerfile'
```

### Example: Using public Docker registry container

```yaml
runs:
  using: 'docker'
  image: 'docker://debian:stretch-slim'
```

### `runs.using`

**Required** You must set this value to `'docker'`.

### `runs.pre-entrypoint`

**Optional** Allows you to run a script before the `entrypoint` action begins. For example, you can use `pre-entrypoint:` to run a prerequisite setup script. {% data variables.product.prodname_actions %} uses `docker run` to launch this action, and runs the script inside a new container that uses the same base image. This means that the runtime state is different from the main `entrypoint` container, and any states you require must be accessed in either the workspace, `HOME`, or as a `STATE_` variable. The `pre-entrypoint:` action always runs by default but you can override this using [`runs.pre-if`](#runspre-if).

The runtime specified with the [`using`](#runsusing) syntax will execute this file.

In this example, the `pre-entrypoint:` action runs a script called `setup.sh`:

```yaml
runs:
  using: 'docker'
  image: 'Dockerfile'
  args:
    - 'bzz'
  pre-entrypoint: 'setup.sh'
  entrypoint: 'main.sh'
```

### `runs.image`

**Required** The Docker image to use as the container to run the action. The value can be the Docker base image name, a local `Dockerfile` in your repository, or a public image in Docker Hub or another registry. To reference a `Dockerfile` local to your repository, the file must be named `Dockerfile` and you must use a path relative to your action metadata file. The `docker` application will execute this file.

### `runs.env`

**Optional** Specifies a key/value map of environment variables to set in the container environment.

### `runs.entrypoint`

**Optional** Overrides the Docker `ENTRYPOINT` in the `Dockerfile`, or sets it if one wasn't already specified. Use `entrypoint` when the `Dockerfile` does not specify an `ENTRYPOINT` or you want to override the `ENTRYPOINT` instruction. If you omit `entrypoint`, the commands you specify in the Docker `ENTRYPOINT` instruction will execute. The Docker `ENTRYPOINT` instruction has a _shell_ form and _exec_ form. The Docker `ENTRYPOINT` documentation recommends using the _exec_ form of the `ENTRYPOINT` instruction.

For more information about how the `entrypoint` executes, see "[Dockerfile support for {% data variables.product.prodname_actions %}](/actions/creating-actions/dockerfile-support-for-github-actions/#entrypoint)."

### `runs.post-entrypoint`

**Optional**  Allows you to run a cleanup script once the `runs.entrypoint` action has completed. {% data variables.product.prodname_actions %} uses `docker run` to launch this action. Because  {% data variables.product.prodname_actions %} runs the script inside a new container using the same base image, the runtime state is different from the main `entrypoint` container. You can access any state you need in either the workspace, `HOME`, or as a `STATE_` variable. The `post-entrypoint:` action always runs by default but you can override this using [`runs.post-if`](#runspost-if).

```yaml
runs:
  using: 'docker'
  image: 'Dockerfile'
  args:
    - 'bzz'
  entrypoint: 'main.sh'
  post-entrypoint: 'cleanup.sh'
```

### `runs.args`

**Optional** An array of strings that define the inputs for a Docker container. Inputs can include hardcoded strings. {% data variables.product.prodname_dotcom %} passes the `args` to the container's `ENTRYPOINT` when the container starts up.

The `args` are used in place of the `CMD` instruction in a `Dockerfile`. If you use `CMD` in your `Dockerfile`, use the guidelines ordered by preference:

{% data reusables.actions.dockerfile-guidelines %}

If you need to pass environment variables into an action, make sure your action runs a command shell to perform variable substitution. For example, if your `entrypoint` attribute is set to `"sh -c"`, `args` will be run in a command shell. Alternatively, if your `Dockerfile` uses an `ENTRYPOINT` to run the same command (`"sh -c"`), `args` will execute in a command shell.

For more information about using the `CMD` instruction with {% data variables.product.prodname_actions %}, see "[Dockerfile support for {% data variables.product.prodname_actions %}](/actions/creating-actions/dockerfile-support-for-github-actions/#cmd)."

#### Example: Defining arguments for the Docker container

{% raw %}
```yaml
runs:
  using: 'docker'
  image: 'Dockerfile'
  args:
    - ${{ inputs.greeting }}
    - 'foo'
    - 'bar'
```
{% endraw %}

## `branding`

**Optional** You can use a color and [Feather](https://feathericons.com/) icon to create a badge to personalize and distinguish your action. Badges are shown next to your action name in [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace?type=actions).

### Example: Configuring branding for an action

```yaml
branding:
  icon: 'award'  
  color: 'green'
```

### `branding.color`

The background color of the badge. Can be one of: `white`, `yellow`, `blue`, `green`, `orange`, `red`, `purple`, or `gray-dark`.

### `branding.icon`

The name of the v4.28.0 [Feather](https://feathericons.com/) icon to use. Brand icons are omitted as well as the following:

<table>
<tr>
<td>coffee</td>
<td>columns</td>
<td>divide-circle</td>
<td>divide-square</td>
</tr>
<tr>
<td>divide</td>
<td>frown</td>
<td>hexagon</td>
<td>key</td>
</tr>
<tr>
<td>meh</td>
<td>mouse-pointer</td>
<td>smile</td>
<td>tool</td>
</tr>
<tr>
<td>x-octagon</td>
<td></td>
<td></td>
<td></td>
</tr>
</table>

Here is an exhaustive list of all currently supported icons:

<!-- 
  This table should match the icon list in `app/models/repository_actions/icons.rb` in the internal github repo.
  To support a new icon, update `app/models/repository_actions/icons.rb` and add the svg to `/static/images/icons/feather` in the internal github repo. 
-->

<table>
<tr>
<td>activity</td>
<td>airplay</td>
<td>alert-circle</td>
<td>alert-octagon</td>
</tr>
<tr>
<td>alert-triangle</td>
<td>align-center</td>
<td>align-justify</td>
<td>align-left</td>
</tr>
<tr>
<td>align-right</td>
<td>anchor</td>
<td>aperture</td>
<td>archive</td>
</tr>
<tr>
<td>arrow-down-circle</td>
<td>arrow-down-left</td>
<td>arrow-down-right</td>
<td>arrow-down</td>
</tr>
<tr>
<td>arrow-left-circle</td>
<td>arrow-left</td>
<td>arrow-right-circle</td>
<td>arrow-right</td>
</tr>
<tr>
<td>arrow-up-circle</td>
<td>arrow-up-left</td>
<td>arrow-up-right</td>
<td>arrow-up</td>
</tr>
<tr>
<td>at-sign</td>
<td>award</td>
<td>bar-chart-2</td>
<td>bar-chart</td>
</tr>
<tr>
<td>battery-charging</td>
<td>battery</td>
<td>bell-off</td>
<td>bell</td>
</tr>
<tr>
<td>bluetooth</td>
<td>bold</td>
<td>book-open</td>
<td>book</td>
</tr>
<tr>
<td>bookmark</td>
<td>box</td>
<td>briefcase</td>
<td>calendar</td>
</tr>
<tr>
<td>camera-off</td>
<td>camera</td>
<td>cast</td>
<td>check-circle</td>
</tr>
<tr>
<td>check-square</td>
<td>check</td>
<td>chevron-down</td>
<td>chevron-left</td>
</tr>
<tr>
<td>chevron-right</td>
<td>chevron-up</td>
<td>chevrons-down</td>
<td>chevrons-left</td>
</tr>
<tr>
<td>chevrons-right</td>
<td>chevrons-up</td>
<td>circle</td>
<td>clipboard</td>
</tr>
<tr>
<td>clock</td>
<td>cloud-drizzle</td>
<td>cloud-lightning</td>
<td>cloud-off</td>
</tr>
<tr>
<td>cloud-rain</td>
<td>cloud-snow</td>
<td>cloud</td>
<td>code</td>
</tr>
<tr>
<td>command</td>
<td>compass</td>
<td>copy</td>
<td>corner-down-left</td>
</tr>
<tr>
<td>corner-down-right</td>
<td>corner-left-down</td>
<td>corner-left-up</td>
<td>corner-right-down</td>
</tr>
<tr>
<td>corner-right-up</td>
<td>corner-up-left</td>
<td>corner-up-right</td>
<td>cpu</td>
</tr>
<tr>
<td>credit-card</td>
<td>crop</td>
<td>crosshair</td>
<td>database</td>
</tr>
<tr>
<td>delete</td>
<td>disc</td>
<td>dollar-sign</td>
<td>download-cloud</td>
</tr>
<tr>
<td>download</td>
<td>droplet</td>
<td>edit-2</td>
<td>edit-3</td>
</tr>
<tr>
<td>edit</td>
<td>external-link</td>
<td>eye-off</td>
<td>eye</td>
</tr>
<tr>
<td>fast-forward</td>
<td>feather</td>
<td>file-minus</td>
<td>file-plus</td>
</tr>
<tr>
<td>file-text</td>
<td>file</td>
<td>film</td>
<td>filter</td>
</tr>
<tr>
<td>flag</td>
<td>folder-minus</td>
<td>folder-plus</td>
<td>folder</td>
</tr>
<tr>
<td>gift</td>
<td>git-branch</td>
<td>git-commit</td>
<td>git-merge</td>
</tr>
<tr>
<td>git-pull-request</td>
<td>globe</td>
<td>grid</td>
<td>hard-drive</td>
</tr>
<tr>
<td>hash</td>
<td>headphones</td>
<td>heart</td>
<td>help-circle</td>
</tr>
<tr>
<td>home</td>
<td>image</td>
<td>inbox</td>
<td>info</td>
</tr>
<tr>
<td>italic</td>
<td>layers</td>
<td>layout</td>
<td>life-buoy</td>
</tr>
<tr>
<td>link-2</td>
<td>link</td>
<td>list</td>
<td>loader</td>
</tr>
<tr>
<td>lock</td>
<td>log-in</td>
<td>log-out</td>
<td>mail</td>
</tr>
<tr>
<td>map-pin</td>
<td>map</td>
<td>maximize-2</td>
<td>maximize</td>
</tr>
<tr>
<td>menu</td>
<td>message-circle</td>
<td>message-square</td>
<td>mic-off</td>
</tr>
<tr>
<td>mic</td>
<td>minimize-2</td>
<td>minimize</td>
<td>minus-circle</td>
</tr>
<tr>
<td>minus-square</td>
<td>minus</td>
<td>monitor</td>
<td>moon</td>
</tr>
<tr>
<td>more-horizontal</td>
<td>more-vertical</td>
<td>move</td>
<td>music</td>
</tr>
<tr>
<td>navigation-2</td>
<td>navigation</td>
<td>octagon</td>
<td>package</td>
</tr>
<tr>
<td>paperclip</td>
<td>pause-circle</td>
<td>pause</td>
<td>percent</td>
</tr>
<tr>
<td>phone-call</td>
<td>phone-forwarded</td>
<td>phone-incoming</td>
<td>phone-missed</td>
</tr>
<tr>
<td>phone-off</td>
<td>phone-outgoing</td>
<td>phone</td>
<td>pie-chart</td>
</tr>
<tr>
<td>play-circle</td>
<td>play</td>
<td>plus-circle</td>
<td>plus-square</td>
</tr>
<tr>
<td>plus</td>
<td>pocket</td>
<td>power</td>
<td>printer</td>
</tr>
<tr>
<td>radio</td>
<td>refresh-ccw</td>
<td>refresh-cw</td>
<td>repeat</td>
</tr>
<tr>
<td>rewind</td>
<td>rotate-ccw</td>
<td>rotate-cw</td>
<td>rss</td>
</tr>
<tr>
<td>save</td>
<td>scissors</td>
<td>search</td>
<td>send</td>
</tr>
<tr>
<td>server</td>
<td>settings</td>
<td>share-2</td>
<td>share</td>
</tr>
<tr>
<td>shield-off</td>
<td>shield</td>
<td>shopping-bag</td>
<td>shopping-cart</td>
</tr>
<tr>
<td>shuffle</td>
<td>sidebar</td>
<td>skip-back</td>
<td>skip-forward</td>
</tr>
<tr>
<td>slash</td>
<td>sliders</td>
<td>smartphone</td>
<td>speaker</td>
</tr>
<tr>
<td>square</td>
<td>star</td>
<td>stop-circle</td>
<td>sun</td>
</tr>
<tr>
<td>sunrise</td>
<td>sunset</td>
<td>tablet</td>
<td>tag</td>
</tr>
<tr>
<td>target</td>
<td>terminal</td>
<td>thermometer</td>
<td>thumbs-down</td>
</tr>
<tr>
<td>thumbs-up</td>
<td>toggle-left</td>
<td>toggle-right</td>
<td>trash-2</td>
</tr>
<tr>
<td>trash</td>
<td>trending-down</td>
<td>trending-up</td>
<td>triangle</td>
</tr>
<tr>
<td>truck</td>
<td>tv</td>
<td>type</td>
<td>umbrella</td>
</tr>
<tr>
<td>underline</td>
<td>unlock</td>
<td>upload-cloud</td>
<td>upload</td>
</tr>
<tr>
<td>user-check</td>
<td>user-minus</td>
<td>user-plus</td>
<td>user-x</td>
</tr>
<tr>
<td>user</td>
<td>users</td>
<td>video-off</td>
<td>video</td>
</tr>
<tr>
<td>voicemail</td>
<td>volume-1</td>
<td>volume-2</td>
<td>volume-x</td>
</tr>
<tr>
<td>volume</td>
<td>watch</td>
<td>wifi-off</td>
<td>wifi</td>
</tr>
<tr>
<td>wind</td>
<td>x-circle</td>
<td>x-square</td>
<td>x</td>
</tr>
<tr>
<td>zap-off</td>
<td>zap</td>
<td>zoom-in</td>
<td>zoom-out</td>
</tr>
</table>
