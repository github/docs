
It is not possible nor advisable to re-set any of the default environment variables (especially those named `GITHUB_*` and `RUNNER_*`) listed in [default environment variables](/actions/learn-github-actions/environment-variables#default-environment-variables) using `GITHUB_ENV`.

At the time of this note, the `CI` variable could be overwritten, but that is not guaranteed.
