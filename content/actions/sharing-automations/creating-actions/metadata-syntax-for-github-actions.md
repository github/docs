---
title: Metadata syntax for GitHub Actions
shortTitle: Metadata syntax
intro: You can create actions to perform tasks in your repository. Actions require a metadata file that uses YAML syntax.
redirect_from:
  - /articles/metadata-syntax-for-github-actions
  - /github/automating-your-workflow-with-github-actions/metadata-syntax-for-github-actions
  - /actions/automating-your-workflow-with-github-actions/metadata-syntax-for-github-actions
  - /actions/building-actions/metadata-syntax-for-github-actions
  - /actions/creating-actions/metadata-syntax-for-github-actions
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
type: reference
---

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

**Optional** Input parameters allow you to specify data that the action expects to use during runtime. {% data variables.product.prodname_dotcom %} stores input parameters as environment variables. Input ids with uppercase letters are converted to lowercase during runtime. We recommend using lowercase input ids.

### Example: Specifying inputs

This example configures two inputs: `num-octocats` and `octocat-eye-color`. The `num-octocats` input is not required and will default to a value of `1`. `octocat-eye-color` is required and has no default value.

{% note %}

**Note:** Workflows using `required: true` will not automatically return an error if the input is not specified for events that automatically trigger workflow runs. If you set `required: true` in your workflow file and are using `workflow_dispatch` to manually run the workflow, you will be required to specify inputs on {% data variables.product.prodname_dotcom %}. For more information, see "[AUTOTITLE](/actions/using-workflows/events-that-trigger-workflows)."

{% endnote %}

Workflow files that use this action can use the `with` keyword to set an input value for `octocat-eye-color`. For more information about the `with` syntax, see "[AUTOTITLE](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepswith)."

```yaml
inputs:
  num-octocats:
    description: 'Number of Octocats'
    required: false
    default: '1'
  octocat-eye-color:
    description: 'Eye color of the Octocats'
    required: true
```

When you specify an input in a workflow file or use a default input value, {% data variables.product.prodname_dotcom %} creates an environment variable for the input with the name `INPUT_<VARIABLE_NAME>`. The environment variable created converts input names to uppercase letters and replaces spaces with `_` characters.

If the action is written using a [composite](/actions/creating-actions/creating-a-composite-action), then it will not automatically get `INPUT_<VARIABLE_NAME>`. If the conversion doesn't occur, you can change these inputs manually.

To access the environment variable in a Docker container action, you must pass the input using the `args` keyword in the action metadata file. For more information about the action metadata file for Docker container actions, see "[AUTOTITLE](/actions/creating-actions/creating-a-docker-container-action#creating-an-action-metadata-file)."

For example, if a workflow defined the `num-octocats` and `octocat-eye-color` inputs, the action code could read the values of the inputs using the `INPUT_NUM-OCTOCATS` and `INPUT_OCTOCAT-EYE-COLOR` environment variables.

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

If you don't declare an output in your action metadata file, you can still set outputs and use them in a workflow. For more information on setting outputs in an action, see "[AUTOTITLE](/actions/using-workflows/workflow-commands-for-github-actions#setting-an-output-parameter)."

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
      run: echo "random-id=$(echo $RANDOM)" >> $GITHUB_OUTPUT
      shell: bash
```

{% endraw %}

### `outputs.<output_id>.value`

**Required** The value that the output parameter will be mapped to. You can set this to a `string` or an expression with context. For example, you can use the `steps` context to set the `value` of an output to the output value of a step.

For more information on how to use context syntax, see "[AUTOTITLE](/actions/learn-github-actions/contexts)."

## `runs`

**Required** Specifies whether this is a JavaScript action, a composite action, or a Docker container action and how the action is executed.

## `runs` for JavaScript actions

**Required** Configures the path to the action's code and the runtime used to execute the code.

### Example: Using Node.js {% ifversion actions-node20-support %}v20{% else %}v16{% endif %}

```yaml
runs:
  using: {% ifversion actions-node20-support %}'node20'{% else %}'node16'{% endif %}
  main: 'main.js'
```

### `runs.using` for JavaScript actions

**Required** The runtime used to execute the code specified in [`main`](#runsmain).

* Use {% ifversion actions-node20-support %}`node20` for Node.js v20{% else %}`node16` for Node.js v16{% endif %}.

### `runs.main`

**Required** The file that contains your action code. The runtime specified in [`using`](#runsusing-for-javascript-actions) executes this file.

### `runs.pre`

**Optional** Allows you to run a script at the start of a job, before the `main:` action begins. For example, you can use `pre:` to run a prerequisite setup script. The runtime specified with the [`using`](#runsusing-for-javascript-actions) syntax will execute this file. The `pre:` action always runs by default but you can override this using [`runs.pre-if`](#runspre-if).

In this example, the `pre:` action runs a script called `setup.js`:

```yaml
runs:
  using: {% ifversion actions-node20-support %}'node20'{% else %}'node16'{% endif %}
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

**Optional** Allows you to run a script at the end of a job, once the `main:` action has completed. For example, you can use `post:` to terminate certain processes or remove unneeded files. The runtime specified with the [`using`](#runsusing-for-javascript-actions) syntax will execute this file.

In this example, the `post:` action runs a script called `cleanup.js`:

```yaml
runs:
  using: {% ifversion actions-node20-support %}'node20'{% else %}'node16'{% endif %}
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

### `runs.using` for composite actions

**Required** You must set this value to `'composite'`.

### `runs.steps`

**Required** The steps that you plan to run in this action. These can be either `run` steps or `uses` steps.

#### `runs.steps[*].run`

**Optional** The command you want to run. This can be inline or a script in your action repository:

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

For more information, see "[AUTOTITLE](/actions/learn-github-actions/contexts#github-context)".

#### `runs.steps[*].shell`

**Optional** The shell where you want to run the command. You can use any of the shells listed in "[AUTOTITLE](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsshell)." Required if `run` is set.

#### `runs.steps[*].if`

**Optional** You can use the `if` conditional to prevent a step from running unless a condition is met. You can use any supported context and expression to create a conditional.

{% data reusables.actions.expression-syntax-if %} For more information, see "[AUTOTITLE](/actions/learn-github-actions/expressions)."

**Example: Using contexts**

This step only runs when the event type is a `pull_request` and the event action is `unassigned`.

```yaml
steps:
  - run: echo This event is a pull request that had an assignee removed.
    if: {% raw %}${{ github.event_name == 'pull_request' && github.event.action == 'unassigned' }}{% endraw %}
```

**Example: Using status check functions**

The `my backup step` only runs when the previous step of a composite action fails. For more information, see "[AUTOTITLE](/actions/learn-github-actions/expressions#status-check-functions)."

```yaml
steps:
  - name: My first step
    uses: octo-org/action-name@main
  - name: My backup step
    if: {% raw %}${{ failure() }}{% endraw %}
    uses: actions/heroku@1.0.0
```

#### `runs.steps[*].name`

**Optional** The name of the composite step.

#### `runs.steps[*].id`

**Optional** A unique identifier for the step. You can use the `id` to reference the step in contexts. For more information, see "[AUTOTITLE](/actions/learn-github-actions/contexts)."

#### `runs.steps[*].env`

**Optional**  Sets a `map` of environment variables for only that step. If you want to modify the environment variable stored in the workflow, use `echo "{name}={value}" >> $GITHUB_ENV` in a composite step.

#### `runs.steps[*].working-directory`

**Optional**  Specifies the working directory where the command is run.

#### `runs.steps[*].uses`

**Optional**  Selects an action to run as part of a step in your job. An action is a reusable unit of code. You can use an action defined in the same repository as the workflow, a public repository, or in a [published Docker container image](https://hub.docker.com/).

We strongly recommend that you include the version of the action you are using by specifying a Git ref, SHA, or Docker tag number. If you don't specify a version, it could break your workflows or cause unexpected behavior when the action owner publishes an update.
* Using the commit SHA of a released action version is the safest for stability and security.
* Using the specific major action version allows you to receive critical fixes and security patches while still maintaining compatibility. It also assures that your workflow should still work.
* Using the default branch of an action may be convenient, but if someone releases a new major version with a breaking change, your workflow could break.

Some actions require inputs that you must set using the [`with`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepswith) keyword. Review the action's README file to determine the inputs required.

```yaml
runs:
  using: "composite"
  steps:
    # Reference a specific commit
    - uses: actions/checkout@8f4b7f84864484a7bf31766abe9204da3cbe65b3
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

{% ifversion ghes %}

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

### `runs.using` for Docker container actions

**Required** You must set this value to `'docker'`.

### `runs.pre-entrypoint`

**Optional** Allows you to run a script before the `entrypoint` action begins. For example, you can use `pre-entrypoint:` to run a prerequisite setup script. {% data variables.product.prodname_actions %} uses `docker run` to launch this action, and runs the script inside a new container that uses the same base image. This means that the runtime state is different from the main `entrypoint` container, and any states you require must be accessed in either the workspace, `HOME`, or as a `STATE_` variable. The `pre-entrypoint:` action always runs by default but you can override this using [`runs.pre-if`](#runspre-if).

The runtime specified with the [`using`](#runsusing-for-docker-container-actions) syntax will execute this file.

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

For more information about how the `entrypoint` executes, see "[AUTOTITLE](/actions/creating-actions/dockerfile-support-for-github-actions#entrypoint)."

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

For more information about using the `CMD` instruction with {% data variables.product.prodname_actions %}, see "[AUTOTITLE](/actions/creating-actions/dockerfile-support-for-github-actions#cmd)."

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

The background color of the badge. Can be one of: `white`, `black`, `yellow`, `blue`, `green`, `orange`, `red`, `purple`, or `gray-dark`.

### `branding.icon`

The name of the v4.28.0 [Feather](https://feathericons.com/) icon to use.

#### Omitted icons

Brand icons, and all the following icons, are omitted.

<ul style="-webkit-column-count: 4; -moz-column-count: 4; column-count: 4;">
<li>coffee</li>
<li>columns</li>
<li>divide-circle</li>
<li>divide-square</li>
<li>divide</li>
<li>frown</li>
<li>hexagon</li>
<li>key</li>
<li>meh</li>
<li>mouse-pointer</li>
<li>smile</li>
<li>tool</li>
<li>x-octagon</li>
</ul>

#### Exhaustive list of all currently supported icons

<!--
  This list should match the icon list in `app/models/repository_actions/icons.rb` in the internal github repo.
  To support a new icon, update `app/models/repository_actions/icons.rb` and add the svg to `/static/images/icons/feather` in the internal github repo.
-->

<ul style="-webkit-column-count: 4; -moz-column-count: 4; column-count: 4;">
<li>activity</li>
<li>airplay</li>
<li>alert-circle</li>
<li>alert-octagon</li>
<li>alert-triangle</li>
<li>align-center</li>
<li>align-justify</li>
<li>align-left</li>
<li>align-right</li>
<li>anchor</li>
<li>aperture</li>
<li>archive</li>
<li>arrow-down-circle</li>
<li>arrow-down-left</li>
<li>arrow-down-right</li>
<li>arrow-down</li>
<li>arrow-left-circle</li>
<li>arrow-left</li>
<li>arrow-right-circle</li>
<li>arrow-right</li>
<li>arrow-up-circle</li>
<li>arrow-up-left</li>
<li>arrow-up-right</li>
<li>arrow-up</li>
<li>at-sign</li>
<li>award</li>
<li>bar-chart-2</li>
<li>bar-chart</li>
<li>battery-charging</li>
<li>battery</li>
<li>bell-off</li>
<li>bell</li>
<li>bluetooth</li>
<li>bold</li>
<li>book-open</li>
<li>book</li>
<li>bookmark</li>
<li>box</li>
<li>briefcase</li>
<li>calendar</li>
<li>camera-off</li>
<li>camera</li>
<li>cast</li>
<li>check-circle</li>
<li>check-square</li>
<li>check</li>
<li>chevron-down</li>
<li>chevron-left</li>
<li>chevron-right</li>
<li>chevron-up</li>
<li>chevrons-down</li>
<li>chevrons-left</li>
<li>chevrons-right</li>
<li>chevrons-up</li>
<li>circle</li>
<li>clipboard</li>
<li>clock</li>
<li>cloud-drizzle</li>
<li>cloud-lightning</li>
<li>cloud-off</li>
<li>cloud-rain</li>
<li>cloud-snow</li>
<li>cloud</li>
<li>code</li>
<li>command</li>
<li>compass</li>
<li>copy</li>
<li>corner-down-left</li>
<li>corner-down-right</li>
<li>corner-left-down</li>
<li>corner-left-up</li>
<li>corner-right-down</li>
<li>corner-right-up</li>
<li>corner-up-left</li>
<li>corner-up-right</li>
<li>cpu</li>
<li>credit-card</li>
<li>crop</li>
<li>crosshair</li>
<li>database</li>
<li>delete</li>
<li>disc</li>
<li>dollar-sign</li>
<li>download-cloud</li>
<li>download</li>
<li>droplet</li>
<li>edit-2</li>
<li>edit-3</li>
<li>edit</li>
<li>external-link</li>
<li>eye-off</li>
<li>eye</li>
<li>fast-forward</li>
<li>feather</li>
<li>file-minus</li>
<li>file-plus</li>
<li>file-text</li>
<li>file</li>
<li>film</li>
<li>filter</li>
<li>flag</li>
<li>folder-minus</li>
<li>folder-plus</li>
<li>folder</li>
<li>gift</li>
<li>git-branch</li>
<li>git-commit</li>
<li>git-merge</li>
<li>git-pull-request</li>
<li>globe</li>
<li>grid</li>
<li>hard-drive</li>
<li>hash</li>
<li>headphones</li>
<li>heart</li>
<li>help-circle</li>
<li>home</li>
<li>image</li>
<li>inbox</li>
<li>info</li>
<li>italic</li>
<li>layers</li>
<li>layout</li>
<li>life-buoy</li>
<li>link-2</li>
<li>link</li>
<li>list</li>
<li>loader</li>
<li>lock</li>
<li>log-in</li>
<li>log-out</li>
<li>mail</li>
<li>map-pin</li>
<li>map</li>
<li>maximize-2</li>
<li>maximize</li>
<li>menu</li>
<li>message-circle</li>
<li>message-square</li>
<li>mic-off</li>
<li>mic</li>
<li>minimize-2</li>
<li>minimize</li>
<li>minus-circle</li>
<li>minus-square</li>
<li>minus</li>
<li>monitor</li>
<li>moon</li>
<li>more-horizontal</li>
<li>more-vertical</li>
<li>move</li>
<li>music</li>
<li>navigation-2</li>
<li>navigation</li>
<li>octagon</li>
<li>package</li>
<li>paperclip</li>
<li>pause-circle</li>
<li>pause</li>
<li>percent</li>
<li>phone-call</li>
<li>phone-forwarded</li>
<li>phone-incoming</li>
<li>phone-missed</li>
<li>phone-off</li>
<li>phone-outgoing</li>
<li>phone</li>
<li>pie-chart</li>
<li>play-circle</li>
<li>play</li>
<li>plus-circle</li>
<li>plus-square</li>
<li>plus</li>
<li>pocket</li>
<li>power</li>
<li>printer</li>
<li>radio</li>
<li>refresh-ccw</li>
<li>refresh-cw</li>
<li>repeat</li>
<li>rewind</li>
<li>rotate-ccw</li>
<li>rotate-cw</li>
<li>rss</li>
<li>save</li>
<li>scissors</li>
<li>search</li>
<li>send</li>
<li>server</li>
<li>settings</li>
<li>share-2</li>
<li>share</li>
<li>shield-off</li>
<li>shield</li>
<li>shopping-bag</li>
<li>shopping-cart</li>
<li>shuffle</li>
<li>sidebar</li>
<li>skip-back</li>
<li>skip-forward</li>
<li>slash</li>
<li>sliders</li>
<li>smartphone</li>
<li>speaker</li>
<li>square</li>
<li>star</li>
<li>stop-circle</li>
<li>sun</li>
<li>sunrise</li>
<li>sunset</li>
<li>table</li>
<li>tablet</li>
<li>tag</li>
<li>target</li>
<li>terminal</li>
<li>thermometer</li>
<li>thumbs-down</li>
<li>thumbs-up</li>
<li>toggle-left</li>
<li>toggle-right</li>
<li>trash-2</li>
<li>trash</li>
<li>trending-down</li>
<li>trending-up</li>
<li>triangle</li>
<li>truck</li>
<li>tv</li>
<li>type</li>
<li>umbrella</li>
<li>underline</li>
<li>unlock</li>
<li>upload-cloud</li>
<li>upload</li>
<li>user-check</li>
<li>user-minus</li>
<li>user-plus</li>
<li>user-x</li>
<li>user</li>
<li>users</li>
<li>video-off</li>
<li>video</li>
<li>voicemail</li>
<li>volume-1</li>
<li>volume-2</li>
<li>volume-x</li>
<li>volume</li>
<li>watch</li>
<li>wifi-off</li>
<li>wifi</li>
<li>wind</li>
<li>x-circle</li>
<li>x-square</li>
<li>x</li>
<li>zap-off</li>
<li>zap</li>
<li>zoom-in</li>
<li>zoom-out</li>
</ul>
