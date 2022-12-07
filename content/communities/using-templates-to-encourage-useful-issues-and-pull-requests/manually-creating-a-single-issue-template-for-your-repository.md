---
title: Manually creating a single issue template for your repository
intro: 'When you add a manually-created issue template to your repository, project contributors will automatically see the template''s contents in the issue body.'
redirect_from:
  - /articles/creating-an-issue-template-for-your-repository
  - /articles/manually-creating-a-single-issue-template-for-your-repository
  - /github/building-a-strong-community/manually-creating-a-single-issue-template-for-your-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Create an issue template
---

{% data reusables.repositories.legacy-issue-template-tip %}

You can create an *ISSUE_TEMPLATE/* subdirectory in any of the supported folders to contain multiple issue templates, and use the `template` query parameter to specify the template that will fill the issue body. For more information, see "[About automation for issues and pull requests with query parameters](/articles/about-automation-for-issues-and-pull-requests-with-query-parameters)."

You can add YAML frontmatter to each issue template to pre-fill the issue title, automatically add labels and assignees, and give the template a name and description that will be shown in the template chooser that people see when creating a new issue in your repository.

Here is example YAML front matter.

```yaml
---
name: Tracking issue
about: Use this template for tracking new features.
title: "[DATE]: [FEATURE NAME]"
labels: tracking issue, needs triage
assignees: octocat
---
```
{% note %}

**Note:** If a front matter value includes a YAML-reserved character such as `:` , you must put the whole value in quotes. For example, `":bug: Bug"` or `":new: triage needed, :bug: bug"`.

{% endnote %}

{% ifversion fpt or ghec %}

{% data reusables.repositories.valid-community-issues %}

{% endif %}

{% ifversion fpt or ghes or ghec %}

{% data reusables.repositories.default-issue-templates %}

{% endif %}

## Adding an issue template

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.files.add-file %}
3. In the file name field:
    -  To make your issue template visible in the repository's root directory, type the name of your *issue_template*. For example, `issue_template.md`.
  ![New issue template name in root directory](/assets/images/help/repository/issue-template-file-name.png)
    - To make your issue template visible in the repository's `docs` directory, type *docs/* followed by the name of your *issue_template*. For example, `docs/issue_template.md`,
  ![New issue template in docs directory](/assets/images/help/repository/issue-template-file-name-docs.png)
    - To store your file in a hidden directory, type *.github/* followed by the name of your *issue_template*. For example, `.github/issue_template.md`.
  ![New issue template in hidden directory](/assets/images/help/repository/issue-template-hidden-directory.png)
    - To create multiple issue templates and use the `template` query parameter to specify a template to fill the issue body, type *.github/ISSUE_TEMPLATE/*, then the name of your issue template. For example, `.github/ISSUE_TEMPLATE/issue_template.md`. You can also store multiple issue templates in an `ISSUE_TEMPLATE` subdirectory within the root or `docs/` directories. For more information, see "[About automation for issues and pull requests with query parameters](/articles/about-automation-for-issues-and-pull-requests-with-query-parameters)."
  ![New multiple issue template in hidden directory](/assets/images/help/repository/issue-template-multiple-hidden-directory.png)
4. In the body of the new file, add your issue template. This could include:
    - YAML frontmatter
    - Expected behavior and actual behavior
    - Steps to reproduce the problem
    - Specifications like the version of the project, operating system, or hardware
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose_commit_branch %} Templates are available to collaborators when they are merged into the repository's default branch.
{% data reusables.files.propose_new_file %}

## Further reading

- "[About issue and pull request templates](/articles/about-issue-and-pull-request-templates)"
- "[Configuring issue templates for your repository](/articles/configuring-issue-templates-for-your-repository)"
- "[About automation for issues and pull requests with query parameters](/articles/about-automation-for-issues-and-pull-requests-with-query-parameters)"
- "[Creating an issue](/articles/creating-an-issue)"
# Aviator
[![GoDoc](https://godoc.org/github.com/JulzDiverse/aviator/cockpit?status.svg)](https://godoc.org/github.com/JulzDiverse/aviator/cockpit)
Aviator is a tool to template & merge YAML files in a convenient fashion based on a configuration file called `aviator.yml`. Aviator utilizes [Spruce](https://github.com/geofffranks/spruce) for templating and merging and therefore enables you to use all the Spruce operators in your YAML files.
If you have to handle rather complex YAML files (for Kubernetes, Concourse, or Bosh), you just provide the flight plan (`aviator.yml`), the Aviator flies you there.
**Reads:**
- [Using Aviator for Concourse Pipelines](https://medium.com/@julian.skupnjak/create-a-concourse-pipeline-for-your-cloud-foundry-apps-with-ease-98ceaa055be7)
- [Using Aviator as a alternitive to Helm](https://medium.com/@julian.skupnjak/an-alternative-to-helm-aviator-7099d50f2d28)
## Installation
### OS X

```
$ wget -O /usr/local/bin/aviator https://github.com/JulzDiverse/aviator/releases/download/v1.7.0/aviator-darwin-amd64 && chmod +x /usr/local/bin/aviator
$ wget -O /usr/local/bin/aviator https://github.com/JulzDiverse/aviator/releases/download/v1.8.0/aviator-darwin-amd64 && chmod +x /usr/local/bin/aviator
```

**Via Homebrew**
```
$ brew tap julzdiverse/tools  
$ brew install aviator
```
### Linux

```
$ wget -O /usr/bin/aviator https://github.com/JulzDiverse/aviator/releases/download/v1.7.0/aviator-linux-amd64 && chmod +x /usr/bin/aviator
$ wget -O /usr/bin/aviator https://github.com/JulzDiverse/aviator/releases/download/v1.8.0/aviator-linux-amd64 && chmod +x /usr/bin/aviator
```

### Windows (NOT TESTED)

```
https://github.com/JulzDiverse/aviator/releases/download/v1.7.0/aviator-win
https://github.com/JulzDiverse/aviator/releases/download/v1.8.0/aviator-win
```

## Usage
To run Aviator navigate to a directory that contains an `aviator.yml` and run:
```
$ aviator
```
OR
Specify an AVIATOR YAML file  with the [--file|-f] option:
```
$ aviator -f myAviatorFile.yml
```
## Configure an `aviator.yml`
- [Configure an `aviator.yml`](#configure-an-aviatoryml)
	- [Spruce Section](#spruce-section)
		- [Base (`string`)](#base-string)
		- [Prune (`Array`)](#prune-array)
		- [cherry_pick (`array`)](#cherrypick-array)
		- [go_patch (`bool`)](#gopatch-bool)
		- [Merge (`Array`)](#merge-array)
		- [skip_eval (`bool`)](#skipeval-bool)
		- [To (`string`)](#to-string)
		- [ForEach](#foreach)
		- [Read From and Write To Internal Data Store](#read-from-and-write-to-internal-datastore)
		- [Environment Variables](#environment-variables)
		- [Variables](#variables)
		- [Modifier](#modifier)
	- [Squash Section](#squash-section)
		- [Squashing specific files](#squashing-specific-files)
		- [Squash files from a directory](#squash-files-from-a-directory)
	- [Executors](#executors)
		- [The `kubectl` executor](#kubectl-executor)
		- [The `fly` executor](#fly-executor)
		- [The Generic Executor](#generic-executor)
	- [CLI Options](#cli-options)
		- [`--curly-braces`](#--curly-braces)
		- [`--silent`](#--silent)
		- [`--verbose`](#--verbose)
		- [`--dry-run`](#--dry-run)
		- [`--var`](#--var)
- [Development](#development)
Aviator provides a verbose style of configuration. It is the result of configuring a spruce merge plan and optionally an execution plan (e.g `fly`).
Example for a simple aviator file:
```yaml
spruce:
- base: path/to/base.yml
  merge:
  - with:
    files:
    - top.yml
  to: result.yml
```
### Spruce Section
The `spruce` section is an array of merge steps. It provides different parameters to provide high flexibility when merging YAML files. You can:
- specify specific files to include into your merge
- specify a specific directory to include into your merge
- specify a specific directory including all subdirectories to include into your merge
However, this is not enough. Additionally you can use *regular expressions*, *environment-variables*, and more. Read about all parameters and what they do in this section.
#### Base (`string`)
The `base` property specifies the path to the base YAML file. All other YAML files will be merged on top of this YAML file.
---
#### Prune (`Array`)
`prune` defines YAML properties which will be pruned during the merge. For more information check the `spruce` [merge semantics](https://github.com/geofffranks/spruce/blob/master/doc/merging.md#order-of-operations).
Example:
```yaml
spruce:
- base: base.yml
  prune:
  - meta
  - properties
  merge:
  - with:
      files:
      - top.yml
  to: result.yml
```
In this case `meta` and `properties` will be pruned during merge.
#### cherry_pick (`array`)
Enables [Spruce](https://github.com/geofffranks/spruce/blob/master/doc/merging.md#order-of-operations) `cherry pick` option: With the `cherry_pick` property you can specify specific YAML subtrees you want to have in your restulting YAML file (opposite of `prune`)  
Example:
```yaml
spruce:
- base: path/to/base.yml
  cherry_pick:
  - properties
  merge:
  - with_in: path/to/dir/
  - with:
      files:
      - top.yml
  regexp: ".*.(yml)"
  skip_eval: true
  to: result.yml
```
---
#### go_patch (`bool`)
To use spruce in conjuction with the `go-patch` format it can be enabled within the aviator `spruce` section as a toplevel bool property:
```
spruce:
- base: some.yml
   go_patch: true
   merge:
   - with:
        files:
        - some/ops/file.yml
   to: result.yml
```
Read more about it [here](https://github.com/geofffranks/spruce/blob/master/doc/merging-go-patch-files.md)
---
#### Merge (`Array`)
You can configure three different merge types inside the `merge` section: `with`, `with_in`, `with_all_in`:
**with**
`with` specifies specific files you want to include into the merge.
- `files` (required): List of paths to YAML files
- `in_dir` (optional): If all of the files you want to include into the merge are in one specific directory, you can specify the directoyr path and list only file names in the `files` list. _Note: Whenever a directory is defined, the path requires a trailing "/"!!!_
- `skip_non_existing` (optional): Setting this property to `true` will skip non existing files that are specified in the `files` list rather then returning an error. This is useful, if a file is not necessarely there.
Example:
```yaml
spruce:
- base: path/to/base.yml
  merge:
  - with:
    files:
    - top.yml
    - top2.yml
    - top3.yml
    in_dir: path/to/
    skip_non_existing: true
  to: result.yml
```
**with_in** (`string`)
`with_in` specifies a path (do not forget the trailing "/") to a directory. All files  within this directory (but not subdirectories) will be included in the merge.
Example:
```yaml
spruce:
- base: path/to/base.yml
  merge:
  - with_in: path/to/dir/
  to: result.yml
```
`except` (`array`)
With `except` you can specify a list of files you want to exclude from the path specified in `with_in`
Example:
```yaml
spruce:
- base: path/to/base.yml
  merge:
  - with_in: path/to/dir/
    except:
    - file1
    - file2
  to: result.yml
```
This will exclude `path/to/dir/file1` and `path/to/dir/file2` from the merge.
**with_all_in**
`with_all_in` specifies a path (do not forget the trailing "/") to a directory. All files within this directory -including all subdirectories - will be included in the merge.
Example:
```yaml
spruce:
- base: path/to/base.yml
  merge:
  - with_all_in: path/to/dir/
    except:
    - someFiles.yml
    - youWant.yml
    - toExclude.yml
  to: result.yml
```
*NOTE: `except` also works for `with_all_in`*
**regexp** (`string`(quoted))
Only files matching the regular expression will be included in the merge. It can be specified for all three merge types `with`, `with_in`, and `with_all_in`. This could be required if the target directory contains other then only YAML files.
Example:
```yaml
spruce:
- base: path/to/base.yml
  merge:
  - with_in: path/to/dir/
    regexp: ".*.(yml)"
  - with:
      files:
      - top.yml
    regexp: ".*.(yml)"
  - with_all_in: path/to/another/dir/
    regexp: ".*.(yml)"
  to: result.yml
```
---
#### skip_eval (`bool`)
Enabling this skip-eval will merge without resolve spruce expressions. For more information check [Spruce doc](https://github.com/geofffranks/spruce/blob/master/doc/merging.md#order-of-operations)
Example:
```yaml
spruce:
- base: path/to/base.yml
  merge:
  - with_in: path/to/dir/
  - with:
      files:
      - top.yml
  regexp: ".*.(yml)"
  skip_eval: true
  to: result.yml
```
---
#### To (`string`)
`to` specifies the target file, where the merged files should be saved to. It can be used only in combination with the basic merge types `files`, `with_in`, and `with_all_in`.
---
#### ForEach
On top of the basic `merge` you can do more complex merges with `for_each`. More precisely, you can execute the basic `merge` for multiple files specified in `for_each`. When specifying files with `for_each` you need to use `to_dir` instead of `to` to specify a target directory instead of a target file.    
**files**
`files` specifies a list of files that will be included in your merge seperately.
Example:
```yaml
spruce:
- base: path/to/base.yml
  merge:
  - with:
      files:
      - top.yml
    regexp: ".*.(yml)"
  for_each:
    files:
    - env.yml
    - env2.yml
  to_dir: results/
```
This merge step will execute two merges and generate two files. It will merge `base.yml` and `top.yml` with `env.yml`, write it to `results/` and do the same with `env2.yml`.
**in**
`in` is basically the same as `files` with the difference that it will merge all files for a given path sperately
Example:
```yaml
spruce:
- base: path/to/base.yml
  merge:
  - with:
      files:
      - top.yml
    regexp: ".*.(yml)"
  for_each:
    in: path/to/dir/
  to_dir: results/
```
**Except**
`except` works in combination with `in`: list of files that you want to exclude from the merge.
Example:
```yaml
spruce:
- base: path/to/base.yml
  merge:
  - with:
      files:
      - top.yml
  regexp: ".*.(yml)"
  for_each_in: path/to/dir/
  except:
  - some.yml
  to_dir: results/
```
**include_sub_dirs**
`include_sub_dirs` includes all files including files in all subdirectories of a directory into the merge seperately.
```yaml
spruce:
- base: path/to/base.yml
  merge:
  - with:
      files:
      - top.yml
  regexp: ".*.(yml)"
  for_each:
    in: path/to/dir
    include_sub_dirs: true
    enable_matching: true
    copy_parents: true
  to_dir: results/
```
When `include_sub_dirs` is defined you can specify further properties:
- `enable_matching`: this will only include files in the merge, that contains the same substring as the parent directory.
- `copy_parents`: setting this property to `true` (default `false`) will copy the parent folder of a file to the target directory (in the above example `results/`)
**regexp**
The `regexp` property can also be set in combination with `for_each`, `for_each_in`, and `walk_through` to only include files matching the regular expression.
```yaml
spruce:
- base: path/to/base.yml
  merge:
  - with:
      files:
      - top.yml
  regexp: ".*.(yml)"
  for_each:
    in: path/to/dir
    include_sub_dirs: true
    enable_matching: true
    copy_parents: true
    regexp: ".*.(yml)"
  to_dir: results/
```
---
#### Read From and Write To Internal Datatsore
Sometimes it is required to do more than one merge step, which creates intermediate YAML files. In this case you can save merge results to internal datastore/cache which you can write/read by surrounding your location with double courly braces `{{file|dir}}`. Internal cache also work as directories and can be used with `to_dir`.
Example:
```yaml
spruce:
- base: path/to/base.yml
  merge:
  - with_in: path/to/dir/
  to: {{result}}
- base: {{result}}
  merge:
  - with_in: another/path/
  to: final.yml
```
#### Environment Variables
Aviator supports to read _Environment Variables_. Environment variables can be set with `$VAR` or `${VAR}` at an arbitrary place in the `aviator.yml`.
Example:
```yaml
spruce:
- base: $BASE_PATH/app-${NUMBER}.yml
  merge:
  - with_in: path/to/dir/
  to: {{result}}
- base: {{result}}
  merge:
  - with_in: $TARGET_PATH
  to: $RESULT_YAML
```
Executing `aviator` as follows:
```
$ BASE_PATH=/tmp/ NUMBER=1 RESULT_YAML=result.yml aviator
```
will resolve:
```yaml
spruce:
- base: /tmp/app-1.yml
  merge:
  - with_in: path/to/dir/
  to: {{result}}
- base: {{result}}
  merge:
  - with_in: $TARGET_PATH
  to: result.yml
```
#### Variables
You can provide variables to aviator files using the `--var` flag. Basic CLI usage:
`$ aviator --var key=value`
In you aviator file you need to specify the name of the variable you want to interpolate. The syntax for a variable is the following `(( varName ))` (note the space before and after the variable name!)
Example:
```yaml
---
spruce:
- base: (( key ))
  ...
```
In this example the variable `key` will be replaced by the value `value`. So the result would look like this:
```yaml
---
spruce:
- base: value
  ...
```
Values for aviator variables can be multi-line
#### Modifier
With modifier you can modify the resulting (merged) YAML file. You can either delete, set, or update a property. The modifier will always be applied on the result. If you use `for_each` it will be applied on each `for_each` merge step.
Consider a resulting YAML from a merge process `result.yml`, which has a property `person.name`:
```yaml
---
person:
  name: Julz
```
1. the property can be deleted
  ```yaml
  spruce:
  - base: base.yml
    merge:
    - with:
        files:
        - top.yml
    modify:
      delete:
      - "person.name"
    to: result.yml
  ```
  It deletes a property only if it exists. There will be no error if a proerty does NOT exist.
2. the property can be updated:
  ```yaml
  spruce:
  - base: base.yml
    merge:
    - with:
        files:
        - top.yml
    modify:
      update:
      - path: person.name
        value: newName
    to: result.yml
  ```
  Using update will update existing properties only.
3. Other properties can be added/updated with set:
  ```yaml
  spruce:
  - base: base.yml
    merge:
    - with:
        files:
        - top.yml
    modify:
      set:
      - path: person.name
        value: NewName
    to: result.yml
  ```
  Set updates or adds a property to an array. If a property exists it will be overwritten, if the property does not exist it will be added (works only for maps not arrays).
Aviator uses [goml](https://github.com/JulzDiverse/goml) as YAML modifier. If you want to read more about `update`, `delete`, and `set`, check the README.
---
### Squash Section
You can squash multiple files into one single YAML file using the `squash` section.
#### Squashing specific files
```yaml
squash:
  contents:
  - files:
    - deployment.yml
    - service.yml
  to: app.yml
```
#### Squash files from a directory
```yaml
squash:
  contents:
  - dir: my/dir/
  to: app.yml
```
### Executors
Executors execute executables installed on the OS that Aviator is running on. The following three executors are currently supported by Aviator:
- `kubectl` Executor
- `fly` Executor
- Generic Executor: Runs an any specified executable. 
#### `kubectl` executor 
Execute `kubectl apply` with the following options: 
*Supported flags*
- **file**: Name of the file to `kubectl apply`
- **force**: calls `kubectl apply` with the `--force` flag
- **dry_run**: calls `kubectl apply` with the `--dry-run` flag
- **overwrite**: calls `kubectl apply` with the `--overwrite` flag
- **recursive**: calls the `kubectl apply` with the `--recursive` flag
- **output**: calls the `kubectl apply` with the `--output=<desired-ouput>` parameter
- **kustomize**: calls the `kubectl apply` with the `--kustomazation/-k` flag rather than with `--filename/-f`.
  - Read more about `kubectl apply` + kustomization [here](https://github.com/kubernetes-sigs/kustomize) and [here](https://kubectl.docs.kubernetes.io/pages/app_management/apply.html)
You can read about the details of the flags of `kubectl apply` [here](https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#apply)
Example:
```yaml
kubectl
  apply:
    file: deployment.yml
    force: true
    dry_run: true
    overwrite: true
    recursive: true
    output: yaml
```
**Kustomize Example:**
When `kustomize` flag in aviator is set to true it will call `kubectl apply` with the `--kustomization/-k` flag, which expects a directory path. The directory paht needs to be specified in the `file` property of `kubectl.apply`:
```yaml
kubectl:
  apply:
    file: kustomization/path/
    kustomize: true
```
#### Fly Executor
An executor for the Concourse Fly CLI. The supported commands are `set-pipeline`, `validate-pipeline`, `format-pipeline`, and `expose-pipeline/hide-pipeline`.
The `set-pipeline` and `hide-pipeline` commands are executed by default. Here is the list of commands and flags that can be used with `aviator`:
- **name**: Name of the pipeline
- **target**: Target short name (`fly` target)
- **config (string):** the pipeline config file (yml)
- **load_vars_from (array):** List of all property files (-l)
- **vars (map):** Map of variables (--var)
- **non_interactive (bool):** Enables non-interactive mode (-n)
- **expose (bool):** Exposes the pipeline (expose-pipeline)
- **validate_pipeline (bool):** Validate local pipeline configuration (failes on errors)
- **strict (bool):** causes `validate_pipeline` to fail on errors AND warnings
- **format_pipeline (bool):** format a pipeline config in a "canonical" form (prints to stdout).
- **write:** update the formatted pipeline config file in-place.
- **team_name (string):** the team name to fly for set-pipeline
More detailed description of the flags can be found [here](https://concourse-ci.org/pipelines.html)
Example - set-pipeline:
```yaml
fly:
  name: myPipelineName
  target: myFlyTarget
  team_name: concourse-team
  config: pipeline.yml
  non_interactive: true
  check_creds: true
  load_vars_from:
  - credentials.yml
  vars:
    var1: myvar
    var2: myvar2
  expose: true
```
Example - validate-pipeline:
```yaml
fly:
  config: myconfig.yml
  validate_pipeline: true
  strict: true
```
Example - format-pipeline:
```yaml
fly:
  config: myconfig.yml
  format_pipeline: true
  write: true
```
_NOTE: You will need to fly login first, before executing `aviator`_
#### Generic Executor
The Generic Executor executes any specified executable. Here is how to define an Generic Executor in the `aviator.yml`:
```yaml
exec:
- executable: some-executable # required
  global_options: # optional
  - name: --option
    value: option-value
  command: # optional
    name: command-name
    options:
    - name: --command-option
      value: command-option-value
  args:
  - arg1
  - arg2
```
This will executed as `$ some-executable --option option-value command-name --command-option command-option-value arg1 arg2`
Example: `cp`
```yaml
exec:
- executable: cp
  global_options:
  - name: -r
  args:
  - dir/
  - destination/
```
This calls `cp` as follows: `$ cp -r dir/ destination/`
---
### CLI Options
#### `--curly-braces`
Some YAML based tools (like concourse in the past) are using `{{}}` sytnax. This is not YAML conform. Using the `--curly-braces` option you can allow this syntax.
#### `--silent`
This option will output no infromation to stdout.
#### `--verbose`
This option prints which files are excluded from a merge.
#### `--dry-run`
This option prints contents to `stdout` rather than writing it to files. This flag also omits any defined executor.
#### `--var`
You can provide variables to the aviator file.
---
# Development
```
$ go get github.com/JulzDiverse/aviator
```
## Build Aviator
To build the aviator binary you can navigate to `cmd/aviator`:
```
$ cd ./cmd/aviator`
 name: Upload a Build Artifact
  uses: actions/upload-artifact@v3.1.1
  with:
    # Artifact name
    name: # optional, default is artifact
    # A file, directory or wildcard pattern that describes what to upload
    path: 
    # The desired behavior if no files are found using the provided path.
Available Options:
  warn: Output a warning but do not fail the action
  error: Fail the action with an error message
  ignore: Do not output any warnings or errors, the action does not fail

    if-no-files-found: # optional, default is warn
    # Duration after which artifact will expire in days. 0 means using default retention.
Minimum 1 day. Maximum 90 days unless changed from the repository settings page.

    retention-days: # optional           					EIN	61-1767919																																																				
	                                                                        	88-1303491																																																									
	INTERNAL REVENUE SERVICE,                                                                        																																																										
	PO BOX 1214,                                                                        						ID:		Ssn: 		DoB:  																																																
	CHARLOTTE, NC 28201-1214                                                                        																																																										
	                                                                        																																																										
	ZACHRY WOOD                                                                        		633441725		34622																																	       																					
	15																																																										
	For Disclosure, Privacy Act, and Paperwork Reduction Act Notice, see separate instructions.                                                                        																																																										
	Cat. No. 11320B                                                                        																																																										
	Form 1040 (2021)                                                                        						        Tax Form-#	             Period 	                Total	    SS Tax	    Medicare Withholding																																																
	Reported Normalized and Operating Income/Expense Supplemental Section                                                   Fed-941 Corporate	     Sunday, September 17, 2001	66986.66	28841.48	6745.18	 31400																																														
	Total Revenue as Reported, Supplemental                                                                        			Fed-941 West-Subsidiary	 Sunday, September 17, 2001	17115.41	7369.14	    1723.42	 8022.85																																															
	Total Operating Profit/Loss as Reported, Supplemental                                                                   Fed-941 South-Subsidiary Sunday, September 17, 2001	23906.09	10292.9	    2407.21	 11205.98																																															
	Reported Effective Tax Rate                                                                        						Fed-941 East-Subsidiary	 Sunday, September 17, 2001	11247.64	4842.74	    1132.57	 5272.33																																															
	Reported Normalized Income                                                                        						Fed-941 Corp-Pay,        Sunday, September 17, 2001	27198.5	    11710.47	2738.73	 12749.3																																											
	Reported Normalized Operating Profit                                                                        			Fed-940 AnnualUnemp-Corp Sunday, September 17, 2001	17028.05																																																		
	Other Adjustments to Net Income Available to Common Stockholders                                                                        																																																										
	Discontinued Operations                                                                        	Q12022	Q42021	Q32021	Q22021	Q12021	Q42020	Q32020	Q22020	Q12020	Q42019	Q32019																																															
	Basic EPS                                                                        																																																										
	Basic EPS from Continuing Operations                                                                        	1.46698E+11	42337000000	37497000000	35653000000	31211000000	30818000000	25056000000	19744000000	22177000000	25055000000	22931000000																																															
	Basic EPS from Discontinued Operations                                                                        	2.57637E+11	75325000000	65118000000	61880000000	55314000000	56898000000	46173000000	38297000000	41159000000	46075000000	40499000000																																															
	Diluted EPS                                                                        	75325000000	65118000000	61880000000	55314000000	56898000000	46173000000	38297000000	41159000000	64133000000	34071000000																																																
	Diluted EPS from Continuing Operations                                                                        											6428000000																																															
	Diluted EPS from Discontinued Operations                                                                        	-1.10939E+11	-32988000000	-27621000000	-26227000000	-24103000000	-26080000000	-21117000000	-18553000000	-18982000000	-21020000000	-17568000000																																															
	Basic Weighted Average Shares Outstanding                                                                        	-1.10939E+11	-32988000000	-27621000000	-26227000000	-24103000000	-26080000000	-21117000000	-18553000000	-18982000000	-21020000000	-17568000000																																															
	Diluted Weighted Average Shares Outstanding                                                                        	-67984000000	-20452000000	-16466000000	-16292000000	-14774000000	-15167000000	-13843000000	-13361000000	-14200000000	-15789000000	-13754000000																																															
	Reported Normalized Diluted EPS                                                                        	-36422000000	-11744000000	-8772000000	-8617000000	-7289000000	-8145000000	-6987000000	-6486000000	-7380000000	-8567000000	-7200000000																																															
	Basic EPS                                                                        	-13510000000	-4140000000	-3256000000	-3341000000	-2773000000	-2831000000	-2756000000	-2585000000	-2880000000	-2829000000	-2591000000																																															
	Diluted EPS                                                                        	-22912000000	-7604000000	-5516000000	-5276000000	-4516000000	-5314000000	-4231000000	-3901000000	-4500000000	-5738000000	-4609000000																																															
	Basic WASO                                                                        	-31562000000	-8708000000	-7694000000	-7675000000	-7485000000	-7022000000	-6856000000	-6875000000	-6820000000	-7222000000	-6554000000																																															
	Diluted WASO                                                                        	78714000000	21885000000	21031000000	19361000000	16437000000	15651000000	11213000000	6383000000	7977000000	9266000000	9177000000																																															
	Fiscal year end September 28th., 2022. | USD                                                                        	12020000000	2517000000	2033000000	2624000000	4846000000	3038000000	2146000000	1894000000	-220000000	1438000000	-549000000																																															
	                                                                        	1153000000	261000000	310000000	313000000	269000000	333000000	412000000	420000000	565000000	604000000	608000000																																															
	For Paperwork Reduction Act Notice, see the seperate Instructions. 	1153000000	261000000	310000000	313000000	269000000	333000000	412000000	420000000	565000000	604000000	608000000																																															
																																																											
	Interest Expense Net of Capitalized Interest	-346000000	-117000000	-77000000	-76000000	-76000000	-53000000	-48000000	-13000000	-21000000	-17000000	-23000000																																															
	Interest Income	1499000000	378000000	387000000	389000000	345000000	386000000	460000000	433000000	586000000	621000000	631000000																																															
	Net Investment Income	12364000000	2364000000	2207000000	2924000000	4869000000	3530000000	1957000000	1696000000	-809000000	899000000	-1452000000																																															
	Gain/Loss on Investments and Other Financial Instruments	12270000000	2478000000	2158000000	2883000000	4751000000	3262000000	2015000000	1842000000	-802000000	399000000	-1479000000																																															
	Income from Associates, Joint Ventures and Other Participating Interests	334000000	49000000	188000000	92000000	5000000	355000000	26000000	-54000000	74000000	460000000	-14000000																																															
	Gain/Loss on Foreign Exchange	-240000000	-163000000	-139000000	-51000000	113000000	-87000000	-84000000	-92000000	-81000000	40000000	41000000																																															
	Irregular Income/Expenses	0	0				0	0	0	0	0	0																																															
	Other Irregular Income/Expenses	0	0				0	0	0	0	0	0																																															
	Other Income/Expense, Non-Operating	-1497000000	-108000000	-484000000	-613000000	-292000000	-825000000	-223000000	-222000000	24000000	-65000000	295000000																																															
	Pretax Income	90734000000	24402000000	23064000000	21985000000	21283000000	18689000000	13359000000	8277000000	7757000000	10704000000	8628000000																																															
	Provision for Income Tax	-14701000000	-3760000000	-4128000000	-3460000000	-3353000000	-3462000000	-2112000000	-1318000000	-921000000	-33000000	-1560000000																																															
	Net Income from Continuing Operations	76033000000	20642000000	18936000000	18525000000	17930000000	15227000000	11247000000	6959000000	6836000000	10671000000	7068000000																																															
	Net Income after Extraordinary Items and Discontinued Operations	76033000000	20642000000	18936000000	18525000000	17930000000	15227000000	11247000000	6959000000	6836000000	10671000000	7068000000																																															
	Net Income after Non-Controlling/Minority Interests	76033000000	20642000000	18936000000	18525000000	17930000000	15227000000	11247000000	6959000000	6836000000	10671000000	7068000000																																															
	Net Income Available to Common Stockholders	76033000000	20642000000	18936000000	18525000000	17930000000	15227000000	11247000000	6959000000	6836000000	10671000000	7068000000																																															
	Diluted Net Income Available to Common Stockholders	76033000000	20642000000	18936000000	18525000000	17930000000	15227000000	11247000000	6959000000	6836000000	10671000000	7068000000																																															
	Income Statement Supplemental Section																																																										
	Reported Normalized and Operating Income/Expense Supplemental Section																																																										
	Total Revenue as Reported, Supplemental	2.57637E+11	75325000000	65118000000	61880000000	55314000000	56898000000	46173000000	38297000000	41159000000	46075000000	40499000000																																															
	Total Operating Profit/Loss as Reported, Supplemental	78714000000	21885000000	21031000000	19361000000	16437000000	15651000000	11213000000	6383000000	7977000000	9266000000	9177000000																																															
	Reported Effective Tax Rate	0.162		0.179	0.157	0.158		0.158	0.159	0.119		0.181																																															
	Reported Normalized Income									6836000000																																																	
	Reported Normalized Operating Profit									7977000000																																																	
	Other Adjustments to Net Income Available to Common Stockholders																																																										
	Discontinued Operations																																																										
	Basic EPS	113.88	31.15	28.44	27.69	26.63	22.54	16.55	10.21	9.96	15.49	10.2																																															
	Basic EPS from Continuing Operations	113.88	31.12	28.44	27.69	26.63	22.46	16.55	10.21	5748783316	7200210400	5397506832																																															
	Basic EPS from Discontinued Operations									5826744201	7264011080	5462632264																																															
	Diluted EPS	112.2	30.69	27.99	27.26	26.29	22.3	16.4	10.13	5904705086	7327811761	5527757696																																															
	Diluted EPS from Continuing Operations	112.2	30.67	27.99	27.26	26.29	22.23	16.4	10.13	5982665971	7391612442	5592883128																																															
	Diluted EPS from Discontinued Operations									6060626856	7455413122	5658008560																																															
	Basic Weighted Average Shares Outstanding	667650000	662664000	665758000	668958000	673220000	675581000	679449000	681768000	6138587741	7519213803	5723133992																																															
	Diluted Weighted Average Shares Outstanding	677674000	672493000	676519000	679612000	682071000	682969000	685851000	687024000	6216548625	7583014484	5788259424																																															
	Reported Normalized Diluted EPS									6294509510	7646815164	5853384856																																															
	Basic EPS	113.88	31.15	28.44	27.69	26.63	22.54	16.55	10.21	6372470395	7710615845	5918510288																																															
	Diluted EPS	112.2	30.69	27.99	27.26	26.29	22.3	16.4	10.13	6450431280	7774416525	5983635720																																															
	Basic WASO	667650000	662664000	665758000	668958000	673220000	675581000	679449000	681768000	6528392165	7838217206	6048761151																																															
	Diluted WASO	677674000	672493000	676519000	679612000	682071000	682969000	685851000	687024000	6606353050	7902017887	6113886583																																															
	Fiscal year end September 28th., 2022. | USD									6684313934	7965818567	6179012015																																															
																																																											
																																																											
	316221839	``
