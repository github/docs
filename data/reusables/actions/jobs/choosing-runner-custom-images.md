You can use `jobs.<job_id>.snapshot` to generate a custom image.

Add the snapshot keyword to the job, using either the string syntax or mapping syntax as shown in [Generating a custom image](/actions/how-tos/manage-runners/larger-runners/use-custom-images#generating-a-custom-image).

Each job that includes the snapshot keyword creates a separate image. To generate only one image or image version, include all workflow steps in a single job. Each successful run of a job that includes the snapshot keyword creates a new version of that image.

For more information, see [AUTOTITLE](/actions/how-tos/manage-runners/larger-runners/use-custom-images).
