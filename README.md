# Download-Artifact v2

This downloads artifacts from your build

See also [upload-artifact](https://github.com/actions/upload-artifact).

# What's new

- Download all artifacts at once
- Output parameter for the download path
- Port entire action to typescript from a runner plugin so it is easier to collaborate and accept contributions

Refer [here](https://github.com/actions/download-artifact/tree/v1) for the previous version

# Usage

See [action.yml](action.yml)

# Download a Single Artifact

Basic (download to the current working directory):
```yaml
steps:
- uses: actions/checkout@v2

- uses: actions/download-artifact@v2
  with:
    name: my-artifact
    
- name: Display structure of downloaded files
  run: ls -R
```

Download to a specific directory:
```yaml
steps:
- uses: actions/checkout@v2

- uses: actions/download-artifact@v2
  with:
    name: my-artifact
    path: path/to/artifact
    
- name: Display structure of downloaded files
  run: ls -R
  working-directory: path/to/artifact
```

## Compatibility between `v1` and `v2`

When using `download-artifact@v1`, a directory denoted by the name of the artifact would be created if the `path` input was not provided. All of the contents would be downloaded to this directory.
```
   current/working/directory/
      my-artifact/
          ... contents of my-artifact
```

With `v2`, there is no longer an extra directory that is created if the `path` input is not provided. All the contents are downloaded to the current working directory.
```
   current/working/directory/
      ... contents of my-artifact
```

To maintain the same behavior for `v2`, you can set the `path` to the name of the artifact so an extra directory gets created.
```
- uses: actions/download-artifact@v2
  with:
    name: my-artifact
    path: my-artifact
```


# Download All Artifacts

If the `name` input parameter is not provided, all artifacts will be downloaded. **To differentiate between downloaded artifacts, a directory denoted by the artifacts name will be created for each individual artifact.**
Example, if there are two artifacts `Artifact-A` and `Artifact-B`, and the directory is `etc/usr/artifacts/`, the directory structure will look like this:
```
  etc/usr/artifacts/
      Artifact-A/
          ... contents of Artifact-A
      Artifact-B/
          ... contents of Artifact-B
```

Download all artifacts to a specific directory
```yaml
steps:
- uses: actions/checkout@v2

- uses: actions/download-artifact@v2
  with:
    path: path/to/artifacts
    
- name: Display structure of downloaded files
  run: ls -R
  working-directory: path/to/artifacts
```

Download all artifacts to the current working directory
```yaml
steps:
- uses: actions/checkout@v2

- uses: actions/download-artifact@v2

- name: Display structure of downloaded files
  run: ls -R
```

# Download path output

The `download-path` step output contains information regarding where the artifact was downloaded to. This output can be used for a variety of purposes such as logging or as input to other actions. Be aware of the extra directory that is created if downloading all artifacts (no name specified).

```yaml
steps:
- uses: actions/checkout@v2

- uses: actions/download-artifact@v2
  id: download
  with:
    name: 'my-artifact'
    path: path/to/artifacts

- name: 'Echo download path'
  run: echo ${{steps.download.outputs.download-path}}
```

> Note: The `id` defined in the `download/artifact` step must match the `id` defined in the `echo` step (i.e `steps.[ID].outputs.download-path`)

# @actions/artifact package

Internally the [@actions/artifact](https://github.com/actions/toolkit/tree/master/packages/artifact) NPM package is used to interact with artifacts. You can find additional documentation there along with all the source code related to artifact download.


# License

The scripts and documentation in this project are released under the [MIT License](LICENSE)
