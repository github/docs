---
title: Learn GitHub Actions
shortTitle: Learn GitHub Actions
intro: 'Whether you are new to {% data variables.product.prodname_actions %} or interested in learning all they have to offer, this guide will help you use {% data variables.product.prodname_actions %} to accelerate your application development workflows.'
redirect_from:
  - /articles/about-github-actions
  - /actions/getting-started-with-github-actions
  - /actions/getting-started-with-github-actions/about-github-actions
  - /actions/getting-started-with-github-actions/overview
  - /actions/getting-started-with-github-actions/getting-started-with-github-actions
  - /articles/getting-started-with-github-actions
  - /github/automating-your-workflow-with-github-actions/about-github-actions
  - /actions/automating-your-workflow-with-github-actions/about-github-actions
  - /github/automating-your-workflow-with-github-actions/getting-started-with-github-actions
  - /actions/automating-your-workflow-with-github-actions/getting-started-with-github-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
children:
  - /understanding-github-actions
  - /finding-and-customizing-actions
  - /essential-features-of-github-actions
  - /expressions
  - /contexts
  - /environment-variables
  - /usage-limits-billing-and-administration
---
_Configure

# Create the runner and start the configuration experience

$ ./config.cmd --url https://github.com/Swixecoin-funds/wiki-curly --token AXSJJTS2BUNLVI6XPT2C2LDCFF4YM# Run it!

$ ./run.cmd

Using your self-hosted runner

# Use this YAML in your workflow file for each job

runs-on: self-hosted

## Create a folder under the drive root

$ mkdir actions-runner; cd actions-runner# Download the latest runner package

$ Invoke-WebRequest -Uri https://github.com/actions/runner/releases/download/v2.288.1/actions-runner-win-x64-2.288.1.zip -OutFile actions-runner-win-x64-2.288.1.zip# Optional: Validate the hash

$ if((Get-FileHash -Path actions-runner-win-x64-2.288.1.zip -Algorithm SHA256).Hash.ToUpper() -ne '1b952ec1cd214f3836de39f83e7366623ef012b1d08b60506c56d11186fcb5a1'.ToUpper()){ throw 'Computed checksum did not match' }# Extract the installer

$ Add-Type -AssemblyName System.IO.Compression.FileSystem ; [System.IO.Compression.ZipFile]::ExtractToDirectory("$PWD/actions-runner-win-x64-2.288.1.zip", "$PWD")

Configure

# Create the runner and start the configuration experience

$ ./config.cmd --url https://github.com/Swixecoin-funds/wiki-curly --token AXSJJTS2BUNLVI6XPT2C2LDCFF4YM# Run it!

$ ./run.cmd

Using your self-hosted runner

# Use this YAML in your workflow file for each job

runs-on: self-hosted

