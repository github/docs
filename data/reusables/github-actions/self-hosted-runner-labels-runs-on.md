To specify a self-hosted runner for your job, configure `runs-on` in your workflow file with self-hosted runner labels.

All self-hosted runners have the `self-hosted` label, and you can select any self-hosted runner by providing only the `self-hosted` label. Alternatively, you can use `self-hosted` in an array with additional labels, such as labels for a specific operating system or system architecture, to select only the runner types you specify.
