1. In AWS, create a policy that allows {% data variables.product.company_short %} to write to the bucket by copying the following JSON and replacing `EXAMPLE-BUCKET` with the name of your bucket. {% data variables.product.prodname_dotcom %} requires only the permissions in this JSON.

   ```json
   {
      "Version": "2012-10-17",
      "Statement": [
         {
            "Sid": "VisualEditor0",
            "Effect": "Allow",
            "Action": [
               "s3:PutObject"
            ],
            "Resource": "arn:aws:s3:::EXAMPLE-BUCKET/*"
        }
      ]
   }
   ```

   For more information, see [Creating IAM policies](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_create.html) in the AWS documentation.
