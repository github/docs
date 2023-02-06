  '' '#'Skip to content
Search or jump to…
Pull requests
Issues
Codespaces
Marketplace
Explore
 
@mowjoejoejoejoe 
Your account has been flagged.
Because of that, your profile is hidden from the public. If you believe this is a mistake, contact support to have your account status reviewed.
awsdocs
/
aws-doc-sdk-examples
Public
Fork your own copy of awsdocs/aws-doc-sdk-examples
Code
Issues
268
Pull requests
18
Actions
Projects
Wiki
Security
Insights
Renamed .rust_alpha directory as rust_dev_preview
 main
@Doug-AWS
Doug-AWS committed on Nov 22, 2021 
1 parent 52d6167 commit 3e2a1b1d7c0f60f0663afe5f1f0d5ecef0597b4d
Show file tree Hide file tree
Showing 216 changed files with 82 additions and 82 deletions.
Filter changed files
  2  
.doc_gen/metadata/api-gateway_metadata.yaml
@@ -170,7 +170,7 @@ api-gateway_GetRestApis:
    Rust:	    Rust:
      versions:	      versions:
        - sdk_version: 1	        - sdk_version: 1
          github: .rust_alpha/apigateway	          github: rust_dev_preview/apigateway
          sdkguide:	          sdkguide:
          excerpts:	          excerpts:
            - description: Displays the Amazon API Gateway REST APIs in the Region.	            - description: Displays the Amazon API Gateway REST APIs in the Region.
  2  
.doc_gen/metadata/application-auto-scaling_metadata.yaml
@@ -8,7 +8,7 @@ application-autoscaling_DescribeScalingPolicies:
    Rust:	    Rust:
      versions:	      versions:
        - sdk_version: 1	        - sdk_version: 1
          github: .rust_alpha/applicationautoscaling	          github: rust_dev_preview/applicationautoscaling
          sdkguide:	          sdkguide:
          excerpts:	          excerpts:
            - description:	            - description:
  8  
.doc_gen/metadata/autoscaling_metadata.yaml
@@ -8,7 +8,7 @@ auto-scaling_CreateAutoScalingGroup:
    Rust:	    Rust:
      versions:	      versions:
        - sdk_version: 1	        - sdk_version: 1
          github: .rust_alpha/autoscaling	          github: rust_dev_preview/autoscaling
          excerpts:	          excerpts:
            - description:	            - description:
              snippet_tags:	              snippet_tags:
@@ -24,7 +24,7 @@ auto-scaling_DeleteAutoScalingGroup:
    Rust:	    Rust:
      versions:	      versions:
        - sdk_version: 1	        - sdk_version: 1
          github: .rust_alpha/autoscaling	          github: rust_dev_preview/autoscaling
          excerpts:	          excerpts:
            - description:	            - description:
              snippet_tags:	              snippet_tags:
@@ -40,7 +40,7 @@ auto-scaling_DescribeAutoScalingGroups:
    Rust:	    Rust:
      versions:	      versions:
        - sdk_version: 1	        - sdk_version: 1
          github: .rust_alpha/autoscaling	          github: rust_dev_preview/autoscaling
          excerpts:	          excerpts:
            - description:	            - description:
              snippet_tags:	              snippet_tags:
@@ -56,7 +56,7 @@ auto-scaling_UpdateAutoScalingGroup:
    Rust:	    Rust:
      versions:	      versions:
        - sdk_version: 1	        - sdk_version: 1
          github: .rust_alpha/autoscaling	          github: rust_dev_preview/autoscaling
          excerpts:	          excerpts:
            - description:	            - description:
              snippet_tags:	              snippet_tags:
  2  
.doc_gen/metadata/batch_metadata.yaml
@@ -8,7 +8,7 @@ batch_DescribeComputeEnvironments:
    Rust:	    Rust:
      versions:	      versions:
        - sdk_version: 1	        - sdk_version: 1
          github: .rust_alpha/batch	          github: rust_dev_preview/batch
          excerpts:	          excerpts:
            - description:	            - description:
              snippet_tags:	              snippet_tags:
  2  
.doc_gen/metadata/cognito-identity-provider_metadata.yaml
@@ -8,7 +8,7 @@ cognito-identity-provider_ListUserPools:
    Rust:	    Rust:
      versions:	      versions:
        - sdk_version: 1	        - sdk_version: 1
          github: .rust_alpha/cognitoidentityprovider	          github: rust_dev_preview/cognitoidentityprovider
          excerpts:	          excerpts:
            - description:	            - description:
              snippet_tags:	              snippet_tags:
  2  
.doc_gen/metadata/cognito-sync_metadata.yaml
@@ -8,7 +8,7 @@ cognito-sync_ListIdentityPoolUsage:
    Rust:	    Rust:
      versions:	      versions:
        - sdk_version: 1	        - sdk_version: 1
          github: .rust_alpha/cognitosync	          github: rust_dev_preview/cognitosync
          excerpts:	          excerpts:
            - description:	            - description:
              snippet_tags:	              snippet_tags:
  14  
.doc_gen/metadata/dynamodb_metadata.yaml
@@ -29,7 +29,7 @@ dynamodb_CreateTable:
    Rust:	    Rust:
      versions:	      versions:
        - sdk_version: 1	        - sdk_version: 1
          github: .rust_alpha/dynamodb	          github: rust_dev_preview/dynamodb
          excerpts:	          excerpts:
            - description:	            - description:
              snippet_tags:	              snippet_tags:
@@ -136,7 +136,7 @@ dynamodb_DeleteTable:
    Rust:	    Rust:
      versions:	      versions:
        - sdk_version: 1	        - sdk_version: 1
          github: .rust_alpha/dynamodb	          github: rust_dev_preview/dynamodb
          excerpts:	          excerpts:
            - description:	            - description:
              snippet_tags:	              snippet_tags:
@@ -173,7 +173,7 @@ dynamodb_PutItem:
    Rust:	    Rust:
      versions:	      versions:
        - sdk_version: 1	        - sdk_version: 1
          github: .rust_alpha/dynamodb	          github: rust_dev_preview/dynamodb
          excerpts:	          excerpts:
            - description:	            - description:
              snippet_tags:	              snippet_tags:
@@ -268,7 +268,7 @@ dynamodb_DeleteItem:
    Rust:	    Rust:
      versions:	      versions:
        - sdk_version: 1	        - sdk_version: 1
          github: .rust_alpha/dynamodb	          github: rust_dev_preview/dynamodb
          excerpts:	          excerpts:
            - description:	            - description:
              snippet_tags:	              snippet_tags:
@@ -302,7 +302,7 @@ dynamodb_ListTables:
    Rust:	    Rust:
      versions:	      versions:
        - sdk_version: 1	        - sdk_version: 1
          github: .rust_alpha/dynamodb	          github: rust_dev_preview/dynamodb
          excerpts:	          excerpts:
            - description:	            - description:
              snippet_tags:	              snippet_tags:
@@ -342,7 +342,7 @@ dynamodb_Query:
    Rust:	    Rust:
      versions:	      versions:
        - sdk_version: 1	        - sdk_version: 1
          github: .rust_alpha/dynamodb	          github: rust_dev_preview/dynamodb
          excerpts:	          excerpts:
            - description: Find the movies made in the specified year.	            - description: Find the movies made in the specified year.
              snippet_tags:	              snippet_tags:
@@ -376,7 +376,7 @@ dynamodb_Scan:
    Rust:	    Rust:
      versions:	      versions:
        - sdk_version: 1	        - sdk_version: 1
          github: .rust_alpha/dynamodb	          github: rust_dev_preview/dynamodb
          excerpts:	          excerpts:
            - description:	            - description:
              snippet_tags:	              snippet_tags:
  6  
.doc_gen/metadata/ebs_metadata.yaml
@@ -8,7 +8,7 @@ ebs_StartSnapshot:
    Rust:	    Rust:
      versions:	      versions:
        - sdk_version: 1	        - sdk_version: 1
          github: .rust_alpha/ebs	          github: rust_dev_preview/ebs
          excerpts:	          excerpts:
            - description:	            - description:
              snippet_tags:	              snippet_tags:
@@ -24,7 +24,7 @@ ebs_PutSnapshotBlock:
    Rust:	    Rust:
      versions:	      versions:
        - sdk_version: 1	        - sdk_version: 1
          github: .rust_alpha/ebs	          github: rust_dev_preview/ebs
          excerpts:	          excerpts:
            - description:	            - description:
              snippet_tags:	              snippet_tags:
@@ -40,7 +40,7 @@ ebs_CompleteSnapshot:
    Rust:	    Rust:
      versions:	      versions:
        - sdk_version: 1	        - sdk_version: 1
          github: .rust_alpha/ebs	          github: rust_dev_preview/ebs
          excerpts:	          excerpts:
            - description:	            - description:
              snippet_tags:	              snippet_tags:
  18  
.doc_gen/metadata/ec2_metadata.yaml
@@ -95,7 +95,7 @@ ec2_StartInstances:
    Rust:	    Rust:
      versions:	      versions:
        - sdk_version: 1	        - sdk_version: 1
          github: .rust_alpha/ec2	          github: rust_dev_preview/ec2
          excerpts:	          excerpts:
            - description:	            - description:
              snippet_tags:	              snippet_tags:
@@ -129,7 +129,7 @@ ec2_StopInstances:
    Rust:	    Rust:
      versions:	      versions:
        - sdk_version: 1	        - sdk_version: 1
          github: .rust_alpha/ec2	          github: rust_dev_preview/ec2
          excerpts:	          excerpts:
            - description:	            - description:
              snippet_tags:	              snippet_tags:
@@ -341,7 +341,7 @@ ec2_DeleteSnapshot:
    Rust:	    Rust:
      versions:	      versions:
        - sdk_version: 1	        - sdk_version: 1
          github: .rust_alpha/ebs	          github: rust_dev_preview/ebs
          excerpts:	          excerpts:
            - description:	            - description:
              snippet_tags:	              snippet_tags:
@@ -357,7 +357,7 @@ ec2_DescribeSnapshots:
    Rust:	    Rust:
      versions:	      versions:
        - sdk_version: 1	        - sdk_version: 1
          github: .rust_alpha/ebs	          github: rust_dev_preview/ebs
          excerpts:	          excerpts:
            - description: Shows the state of a snapshot.	            - description: Shows the state of a snapshot.
              snippet_tags:	              snippet_tags:
@@ -423,7 +423,7 @@ ec2_DescribeInstances:
    Rust:	    Rust:
      versions:	      versions:
        - sdk_version: 1	        - sdk_version: 1
          github: .rust_alpha/ec2	          github: rust_dev_preview/ec2
          excerpts:	          excerpts:
            - description:	            - description:
              snippet_tags:	              snippet_tags:
@@ -439,7 +439,7 @@ ec2_DescribeRegions:
    Rust:	    Rust:
      versions:	      versions:
        - sdk_version: 1	        - sdk_version: 1
          github: .rust_alpha/ec2	          github: rust_dev_preview/ec2
          excerpts:	          excerpts:
            - description:	            - description:
              snippet_tags:	              snippet_tags:
@@ -455,7 +455,7 @@ ec2_DescribeInstanceStatus:
    Rust:	    Rust:
      versions:	      versions:
        - sdk_version: 1	        - sdk_version: 1
          github: .rust_alpha/ec2	          github: rust_dev_preview/ec2
          excerpts:	          excerpts:
            - description:	            - description:
              snippet_tags:	              snippet_tags:
@@ -471,7 +471,7 @@ ec2_MonitorInstances:
    Rust:	    Rust:
      versions:	      versions:
        - sdk_version: 1	        - sdk_version: 1
          github: .rust_alpha/ec2	          github: rust_dev_preview/ec2
          excerpts:	          excerpts:
            - description:	            - description:
              snippet_tags:	              snippet_tags:
@@ -487,7 +487,7 @@ ec2_RebootInstances:
    Rust:	    Rust:
      versions:	      versions:
        - sdk_version: 1	        - sdk_version: 1
          github: .rust_alpha/ec2	          github: rust_dev_preview/ec2
          excerpts:	          excerpts:
            - description:	            - description:
              snippet_tags:	              snippet_tags:
  2  
.doc_gen/metadata/iam_metadata.yaml
@@ -553,7 +553,7 @@ iam_CreateRole:
    Rust:	    Rust:
      versions:	      versions:
        - sdk_version: 1	        - sdk_version: 1
          github: .rust_alpha/iam	          github: rust_dev_preview/iam
          excerpts:	          excerpts:
            - description:	            - description:
              snippet_tags:	              snippet_tags:
  4  
.doc_gen/metadata/iot_metadata.yaml
@@ -8,7 +8,7 @@ iot_DescribeEndpoint:
    Rust:	    Rust:
      versions:	      versions:
        - sdk_version: 1	        - sdk_version: 1
          github: .rust_alpha/iot	          github: rust_dev_preview/iot
          excerpts:	          excerpts:
            - description:	            - description:
              snippet_tags:	              snippet_tags:
@@ -24,7 +24,7 @@ iot_ListThings:
    Rust:	    Rust:
      versions:	      versions:
        - sdk_version: 1	        - sdk_version: 1
          github: .rust_alpha/iot	          github: rust_dev_preview/iot
          excerpts:	          excerpts:
            - description:	            - description:
              snippet_tags:	              snippet_tags:
  10  
.doc_gen/metadata/kinesis_metadata.yaml
@@ -27,7 +27,7 @@ kinesis_CreateStream:
    Rust:	    Rust:
      versions:	      versions:
        - sdk_version: 1	        - sdk_version: 1
          github: .rust_alpha/kinesis	          github: rust_dev_preview/kinesis
          excerpts:	          excerpts:
            - description:	            - description:
              snippet_tags:	              snippet_tags:
@@ -53,7 +53,7 @@ kinesis_DescribeStream:
    Rust:	    Rust:
      versions:	      versions:
        - sdk_version: 1	        - sdk_version: 1
          github: .rust_alpha/kinesis	          github: rust_dev_preview/kinesis
          excerpts:	          excerpts:
            - description:	            - description:
              snippet_tags:	              snippet_tags:
@@ -69,7 +69,7 @@ kinesis_ListStreams:
    Rust:	    Rust:
      versions:	      versions:
        - sdk_version: 1	        - sdk_version: 1
          github: .rust_alpha/kinesis	          github: rust_dev_preview/kinesis
          excerpts:	          excerpts:
            - description:	            - description:
              snippet_tags:	              snippet_tags:
@@ -104,7 +104,7 @@ kinesis_DeleteStream:
    Rust:	    Rust:
      versions:	      versions:
        - sdk_version: 1	        - sdk_version: 1
          github: .rust_alpha/kinesis	          github: rust_dev_preview/kinesis
          excerpts:	          excerpts:
            - description:	            - description:
              snippet_tags:	              snippet_tags:
@@ -139,7 +139,7 @@ kinesis_PutRecord:
    Rust:	    Rust:
      versions:	      versions:
        - sdk_version: 1	        - sdk_version: 1
          github: .rust_alpha/kinesis	          github: rust_dev_preview/kinesis
          excerpts:	          excerpts:
            - description:	            - description:
              snippet_tags:	              snippet_tags:
  16  
.doc_gen/metadata/kms_metadata.yaml
@@ -26,7 +26,7 @@ kms_CreateKey:
    Rust:	    Rust:
      versions:	      versions:
        - sdk_version: 1	        - sdk_version: 1
          github: .rust_alpha/kms	          github: rust_dev_preview/kms
          excerpts:	          excerpts:
            - description:	            - description:
              snippet_tags:	              snippet_tags:
@@ -51,7 +51,7 @@ kms_Decrypt:
    Rust:	    Rust:
      versions:	      versions:
        - sdk_version: 1	        - sdk_version: 1
          github: .rust_alpha/kms	          github: rust_dev_preview/kms
          excerpts:	          excerpts:
            - description:	            - description:
              snippet_tags:	              snippet_tags:
@@ -76,7 +76,7 @@ kms_Encrypt:
    Rust:	    Rust:
      versions:	      versions:
        - sdk_version: 1	        - sdk_version: 1
          github: .rust_alpha/kms	          github: rust_dev_preview/kms
          excerpts:	          excerpts:
            - description:	            - description:
              snippet_tags:	              snippet_tags:
@@ -92,7 +92,7 @@ kms_GenerateDataKey:
    Rust:	    Rust:
      versions:	      versions:
        - sdk_version: 1	        - sdk_version: 1
          github: .rust_alpha/kms	          github: rust_dev_preview/kms
          excerpts:	          excerpts:
            - description:	            - description:
              snippet_tags:	              snippet_tags:
@@ -108,7 +108,7 @@ kms_GenerateDataKeyWithoutPlaintext:
    Rust:	    Rust:
      versions:	      versions:
        - sdk_version: 1	        - sdk_version: 1
          github: .rust_alpha/kms	          github: rust_dev_preview/kms
          excerpts:	          excerpts:
            - description:	            - description:
              snippet_tags:	              snippet_tags:
@@ -124,7 +124,7 @@ kms_GenerateRandom:
    Rust:	    Rust:
      versions:	      versions:
        - sdk_version: 1	        - sdk_version: 1
          github: .rust_alpha/kms	          github: rust_dev_preview/kms
          excerpts:	          excerpts:
            - description:	            - description:
              snippet_tags:	              snippet_tags:
@@ -158,7 +158,7 @@ kms_ListKeys:
    Rust:	    Rust:
      versions:	      versions:
        - sdk_version: 1	        - sdk_version: 1
          github: .rust_alpha/kms	          github: rust_dev_preview/kms
          excerpts:	          excerpts:
            - description:	            - description:
              snippet_tags:	              snippet_tags:
@@ -174,7 +174,7 @@ kms_ReEncrypt:
    Rust:	    Rust:
      versions:	      versions:
        - sdk_version: 1	        - sdk_version: 1
          github: .rust_alpha/kms	          github: rust_dev_preview/kms
          excerpts:	          excerpts:
            - description:	            - description:
              snippet_tags:	              snippet_tags:
  2  
.doc_gen/metadata/medialive_metadata.yaml
@@ -8,7 +8,7 @@ medialive_ListInputs:
    Rust:	    Rust:
      versions:	      versions:
        - sdk_version: 1	        - sdk_version: 1
          github: .rust_alpha/medialive	          github: rust_dev_preview/medialive
          excerpts:	          excerpts:
            - description: List your &EML; input names and ARNs in the Region.	            - description: List your &EML; input names and ARNs in the Region.
              snippet_tags:	              snippet_tags:
  4  
.doc_gen/metadata/mediapackage_metadata.yaml
@@ -8,7 +8,7 @@ mediapackage_ListChannels:
    Rust:	    Rust:
      versions:	      versions:
        - sdk_version: 1	        - sdk_version: 1
          github: .rust_alpha/mediapackage	          github: rust_dev_preview/mediapackage
          excerpts:	          excerpts:
            - description: List channel ARNs and descriptions.	            - description: List channel ARNs and descriptions.
              snippet_tags:	              snippet_tags:
@@ -24,7 +24,7 @@ mediapackage_ListOriginEndpoints:
    Rust:	    Rust:
      versions:	      versions:
        - sdk_version: 1	        - sdk_version: 1
          github: .rust_alpha/mediapackage	          github: rust_dev_preview/mediapackage
          excerpts:	          excerpts:
            - description: List your endpoint descriptions and URLs.	            - description: List your endpoint descriptions and URLs.
              snippet_tags:	              snippet_tags:
  8  
.doc_gen/metadata/polly_metadata.yaml
@@ -8,7 +8,7 @@ polly_DescribeVoices:
    Rust:	    Rust:
      versions:	      versions:
        - sdk_version: 1	        - sdk_version: 1
          github: .rust_alpha/polly	          github: rust_dev_preview/polly
          excerpts:	          excerpts:
            - description:	            - description:
              snippet_tags:	              snippet_tags:
@@ -24,7 +24,7 @@ polly_ListLexicons:
    Rust:	    Rust:
      versions:	      versions:
        - sdk_version: 1	        - sdk_version: 1
          github: .rust_alpha/polly	          github: rust_dev_preview/polly
          excerpts:	          excerpts:
            - description:	            - description:
              snippet_tags:	              snippet_tags:
@@ -40,7 +40,7 @@ polly_PutLexicon:
    Rust:	    Rust:
      versions:	      versions:
        - sdk_version: 1	        - sdk_version: 1
          github: .rust_alpha/polly	          github: rust_dev_preview/polly
          excerpts:	          excerpts:
            - description:	            - description:
              snippet_tags:	              snippet_tags:
@@ -56,7 +56,7 @@ polly_SynthesizeSpeech:
    Rust:	    Rust:
      versions:	      versions:
        - sdk_version: 1	        - sdk_version: 1
          github: .rust_alpha/polly	          github: rust_dev_preview/polly
          excerpts:	          excerpts:
            - description:	            - description:
              snippet_tags:	              snippet_tags:
  4  
.doc_gen/metadata/qldb_metadata.yaml
@@ -8,7 +8,7 @@ qldb_CreateLedger:
    Rust:	    Rust:
      versions:	      versions:
        - sdk_version: 1	        - sdk_version: 1
          github: .rust_alpha/qldb	          github: rust_dev_preview/qldb
          excerpts:	          excerpts:
            - description:	            - description:
              snippet_tags:	              snippet_tags:
@@ -24,7 +24,7 @@ qldb_ListLedgers:
    Rust:	    Rust:
      versions:	      versions:
        - sdk_version: 1	        - sdk_version: 1
          github: .rust_alpha/qldb	          github: rust_dev_preview/qldb
          excerpts:	          excerpts:
            - description:	            - description:
              snippet_tags:	              snippet_tags:
  2  
.doc_gen/metadata/rds-data_metadata.yaml
@@ -8,7 +8,7 @@ rds-data_ExecuteStatement:
    Rust:	    Rust:
      versions:	      versions:
        - sdk_version: 1	        - sdk_version: 1
          github: .rust_alpha/rdsdata	          github: rust_dev_preview/rdsdata
          excerpts:	          excerpts:
            - description:	            - description:
              snippet_tags:	              snippet_tags:
  16  
.doc_gen/metadata/s3_metadata.yaml
@@ -41,7 +41,7 @@ s3_CreateBucket:
    Rust:	    Rust:
      versions:	      versions:
        - sdk_version: 1	        - sdk_version: 1
          github: .rust_alpha/s3	          github: rust_dev_preview/s3
          excerpts:	          excerpts:
            - description:	            - description:
              snippet_tags:	              snippet_tags:
@@ -140,7 +140,7 @@ s3_DeleteObject:
    Rust:	    Rust:
      versions:	      versions:
        - sdk_version: 1	        - sdk_version: 1
          github: .rust_alpha/s3	          github: rust_dev_preview/s3
          excerpts:	          excerpts:
            - description:	            - description:
              snippet_tags:	              snippet_tags:
@@ -201,7 +201,7 @@ s3_DeleteObjects:
    Rust:	    Rust:
      versions:	      versions:
        - sdk_version: 1	        - sdk_version: 1
          github: .rust_alpha/S3	          github: rust_dev_preview/S3
          excerpts:	          excerpts:
            - description:	            - description:
              snippet_tags:	              snippet_tags:
@@ -459,7 +459,7 @@ s3_ListObjects:
    Rust:	    Rust:
      versions:	      versions:
        - sdk_version: 1	        - sdk_version: 1
          github: .rust_alpha/s3	          github: rust_dev_preview/s3
          excerpts:	          excerpts:
            - description:	            - description:
              snippet_tags:	              snippet_tags:
@@ -489,7 +489,7 @@ s3_ListObjectVersions:
    Rust:	    Rust:
      versions:	      versions:
        - sdk_version: 1	        - sdk_version: 1
          github: .rust_alpha/s3	          github: rust_dev_preview/s3
          excerpts:	          excerpts:
            - description:	            - description:
              snippet_tags:	              snippet_tags:
@@ -531,7 +531,7 @@ s3_PutObject:
    Rust:	    Rust:
      versions:	      versions:
        - sdk_version: 1	        - sdk_version: 1
          github: .rust_alpha/s3	          github: rust_dev_preview/s3
          excerpts:	          excerpts:
            - description:	            - description:
              snippet_tags:	              snippet_tags:
@@ -895,7 +895,7 @@ s3_ListBuckets:
    Rust:	    Rust:
      versions:	      versions:
        - sdk_version: 1	        - sdk_version: 1
          github: .rust_alpha/s3	          github: rust_dev_preview/s3
          excerpts:	          excerpts:
            - description:	            - description:
              snippet_tags:	              snippet_tags:
@@ -1173,7 +1173,7 @@ s3_GetBucketLocation:
    Rust:	    Rust:
      versions:	      versions:
        - sdk_version: 1	        - sdk_version: 1
          github: .rust_alpha/s3	          github: rust_dev_preview/s3
          excerpts:	          excerpts:
            - description:	            - description:
              snippet_tags:	              snippet_tags:
  4  
.doc_gen/metadata/sagemaker_metadata.yaml
@@ -8,7 +8,7 @@ sagemaker_ListNotebookInstances:
    Rust:	    Rust:
      versions:	      versions:
        - sdk_version: 1	        - sdk_version: 1
          github: .rust_alpha/sagemaker	          github: rust_dev_preview/sagemaker
          excerpts:	          excerpts:
            - description:	            - description:
              snippet_tags:	              snippet_tags:
@@ -24,7 +24,7 @@ sagemaker_ListTrainingJobs:
    Rust:	    Rust:
      versions:	      versions:
        - sdk_version: 1	        - sdk_version: 1
          github: .rust_alpha/sagemaker	          github: rust_dev_preview/sagemaker
          excerpts:	          excerpts:
            - description:	            - description:
              snippet_tags:	              snippet_tags:
  12  
.doc_gen/metadata/sesv2_metadata.yaml
@@ -8,7 +8,7 @@ sesv2_CreateContactList:
    Rust:	    Rust:
      versions:	      versions:
        - sdk_version: 1	        - sdk_version: 1
          github: .rust_alpha/ses	          github: rust_dev_preview/ses
          excerpts:	          excerpts:
            - description:	            - description:
              snippet_tags:	              snippet_tags:
@@ -24,7 +24,7 @@ sesv2_CreateContact:
    Rust:	    Rust:
      versions:	      versions:
        - sdk_version: 1	        - sdk_version: 1
          github: .rust_alpha/ses	          github: rust_dev_preview/ses
          excerpts:	          excerpts:
            - description:	            - description:
              snippet_tags:	              snippet_tags:
@@ -40,7 +40,7 @@ sesv2_GetEmailIdentity:
    Rust:	    Rust:
      versions:	      versions:
        - sdk_version: 1	        - sdk_version: 1
          github: .rust_alpha/ses	          github: rust_dev_preview/ses
          excerpts:	          excerpts:
            - description: Determines whether an email address has been verified.	            - description: Determines whether an email address has been verified.
              snippet_tags:	              snippet_tags:
@@ -56,7 +56,7 @@ sesv2_ListContactLists:
    Rust:	    Rust:
      versions:	      versions:
        - sdk_version: 1	        - sdk_version: 1
          github: .rust_alpha/ses	          github: rust_dev_preview/ses
          excerpts:	          excerpts:
            - description:	            - description:
              snippet_tags:	              snippet_tags:
@@ -72,7 +72,7 @@ sesv2_ListContacts:
    Rust:	    Rust:
      versions:	      versions:
        - sdk_version: 1	        - sdk_version: 1
          github: .rust_alpha/ses	          github: rust_dev_preview/ses
          excerpts:	          excerpts:
            - description:	            - description:
              snippet_tags:	              snippet_tags:
@@ -88,7 +88,7 @@ sesv2_SendEmail:
    Rust:	    Rust:
      versions:	      versions:
        - sdk_version: 1	        - sdk_version: 1
          github: .rust_alpha/ses	          github: rust_dev_preview/ses
          excerpts:	          excerpts:
            - description: Sends a message to all members of the contact list.	            - description: Sends a message to all members of the contact list.
              snippet_tags:	              snippet_tags:
  8  
.doc_gen/metadata/sns_metadata.yaml
@@ -197,7 +197,7 @@ sns_ListTopics:
    Rust:	    Rust:
      versions:	      versions:
        - sdk_version: 1	        - sdk_version: 1
          github: .rust_alpha/sns	          github: rust_dev_preview/sns
          excerpts:	          excerpts:
            - snippet_tags:	            - snippet_tags:
                - sns.rust.list-topics	                - sns.rust.list-topics
@@ -538,7 +538,7 @@ sns_CreateTopic:
    Rust:	    Rust:
      versions:	      versions:
        - sdk_version: 1	        - sdk_version: 1
          github: .rust_alpha/sns	          github: rust_dev_preview/sns
          excerpts:	          excerpts:
            - snippet_tags:	            - snippet_tags:
                - sns.rust.create-topic	                - sns.rust.create-topic
@@ -699,7 +699,7 @@ sns_Publish:
    Rust:	    Rust:
      versions:	      versions:
        - sdk_version: 1	        - sdk_version: 1
          github: .rust_alpha/sns	          github: rust_dev_preview/sns
          excerpts:	          excerpts:
            - snippet_tags:	            - snippet_tags:
                - sns.rust.sns-hello-world	                - sns.rust.sns-hello-world
@@ -881,7 +881,7 @@ sns_Subscribe:
    Rust:	    Rust:
      versions:	      versions:
        - sdk_version: 1	        - sdk_version: 1
          github: .rust_alpha/sns	          github: rust_dev_preview/sns
          excerpts:	          excerpts:
            - snippet_tags:	            - snippet_tags:
                - sns.rust.sns-hello-world	                - sns.rust.sns-hello-world
  6  
.doc_gen/metadata/sqs_metadata.yaml
@@ -143,7 +143,7 @@ sqs_ListQueues:
    Rust:	    Rust:
      versions:	      versions:
        - sdk_version: 1	        - sdk_version: 1
          github: .rust_alpha/sqs	          github: rust_dev_preview/sqs
          excerpts:	          excerpts:
            - description:	            - description:
              snippet_tags:	              snippet_tags:
@@ -262,7 +262,7 @@ sqs_SendMessage:
    Rust:	    Rust:
      versions:	      versions:
        - sdk_version: 1	        - sdk_version: 1
          github: .rust_alpha/sqs	          github: rust_dev_preview/sqs
          excerpts:	          excerpts:
            - description:	            - description:
              snippet_tags:	              snippet_tags:
@@ -353,7 +353,7 @@ sqs_ReceiveMessage:
    Rust:	    Rust:
      versions:	      versions:
        - sdk_version: 1	        - sdk_version: 1
          github: .rust_alpha/sqs	          github: rust_dev_preview/sqs
          excerpts:	          excerpts:
            - description:	            - description:
              snippet_tags:	              snippet_tags:
  4  
.doc_gen/metadata/ssm_metadata.yaml
@@ -8,7 +8,7 @@ ssm_DescribeParameters:
    Rust:	    Rust:
      versions:	      versions:
        - sdk_version: 1	        - sdk_version: 1
          github: .rust_alpha/ssm	          github: rust_dev_preview/ssm
          excerpts:	          excerpts:
            - description:	            - description:
              snippet_tags:	              snippet_tags:
@@ -24,7 +24,7 @@ ssm_PutParameter:
    Rust:	    Rust:
      versions:	      versions:
        - sdk_version: 1	        - sdk_version: 1
          github: .rust_alpha/ssm	          github: rust_dev_preview/ssm
          excerpts:	          excerpts:
            - description:	            - description:
              snippet_tags:	              snippet_tags:
  2  
README.rst
@@ -79,7 +79,7 @@ We also have code examples for two SDKs currently in alpha,
**DO NOT USE THIS EXAMPLE CODE IN PRODUCTION**:	**DO NOT USE THIS EXAMPLE CODE IN PRODUCTION**:


* **.kotlin_alpha** for the alpha version of the AWS SDK for Kotlin.	* **.kotlin_alpha** for the alpha version of the AWS SDK for Kotlin.
* **.rust_alpha** for the alpha version of the AWS SDK for Rust.	* **rust_dev_preview** for the developer preview version of the AWS SDK for Rust.


Code examples for older AWS SDK versions are archived in this repository but no longer maintained. These include:	Code examples for older AWS SDK versions are archived in this repository but no longer maintained. These include:


 0  
.rust_alpha/.gitignore → rust_dev_preview/.gitignore
File renamed without changes.
 0  
.rust_alpha/README.md → rust_dev_preview/README.md
File renamed without changes.
 0  
.rust_alpha/apigateway/Cargo.toml → rust_dev_preview/apigateway/Cargo.toml
File renamed without changes.
 0  
.rust_alpha/apigateway/README.md → rust_dev_preview/apigateway/README.md
File renamed without changes.
 0  
...alpha/apigateway/src/bin/get_rest_apis.rs → ...eview/apigateway/src/bin/get_rest_apis.rs
File renamed without changes.
 0  
...t_alpha/applicationautoscaling/Cargo.toml → ...preview/applicationautoscaling/Cargo.toml
File renamed without changes.
 0  
.rust_alpha/applicationautoscaling/README.md → ..._preview/applicationautoscaling/README.md
File renamed without changes.
 0  
...ling/src/bin/describe-scaling-policies.rs → ...ling/src/bin/describe-scaling-policies.rs
File renamed without changes.
 0  
.rust_alpha/autoscaling/Cargo.toml → rust_dev_preview/autoscaling/Cargo.toml
File renamed without changes.
 0  
.rust_alpha/autoscaling/README.md → rust_dev_preview/autoscaling/README.md
File renamed without changes.
 0  
...aling/src/bin/create-autoscaling-group.rs → ...aling/src/bin/create-autoscaling-group.rs
File renamed without changes.
 0  
...aling/src/bin/delete-autoscaling-group.rs → ...aling/src/bin/delete-autoscaling-group.rs
File renamed without changes.
 0  
...caling/src/bin/list-autoscaling-groups.rs → ...caling/src/bin/list-autoscaling-groups.rs
File renamed without changes.
 0  
...aling/src/bin/update-autoscaling-group.rs → ...aling/src/bin/update-autoscaling-group.rs
File renamed without changes.
 0  
.rust_alpha/batch/Cargo.toml → rust_dev_preview/batch/Cargo.toml
File renamed without changes.
 0  
.rust_alpha/batch/README.md → rust_dev_preview/batch/README.md
File renamed without changes.
 0  
...t_alpha/batch/src/bin/batch-helloworld.rs → ...preview/batch/src/bin/batch-helloworld.rs
File renamed without changes.
 0  
.rust_alpha/cloudformation/Cargo.toml → rust_dev_preview/cloudformation/Cargo.toml
File renamed without changes.
 0  
.rust_alpha/cloudformation/README.md → rust_dev_preview/cloudformation/README.md
File renamed without changes.
 0  
...ha/cloudformation/src/bin/create-stack.rs → ...ew/cloudformation/src/bin/create-stack.rs
File renamed without changes.
 0  
...ha/cloudformation/src/bin/delete-stack.rs → ...ew/cloudformation/src/bin/delete-stack.rs
File renamed without changes.
 0  
.../cloudformation/src/bin/describe-stack.rs → .../cloudformation/src/bin/describe-stack.rs
File renamed without changes.
 0  
...pha/cloudformation/src/bin/list-stacks.rs → ...iew/cloudformation/src/bin/list-stacks.rs
File renamed without changes.
 0  
.rust_alpha/cognitoidentity/Cargo.toml → rust_dev_preview/cognitoidentity/Cargo.toml
File renamed without changes.
 0  
.rust_alpha/cognitoidentity/README.md → rust_dev_preview/cognitoidentity/README.md
File renamed without changes.
 0  
...dentity/src/bin/describe-identity-pool.rs → ...dentity/src/bin/describe-identity-pool.rs
File renamed without changes.
 0  
...toidentity/src/bin/list-identity-pools.rs → ...toidentity/src/bin/list-identity-pools.rs
File renamed without changes.
 0  
...oidentity/src/bin/list-pool-identities.rs → ...oidentity/src/bin/list-pool-identities.rs
File renamed without changes.
 0  
..._alpha/cognitoidentityprovider/Cargo.toml → ...review/cognitoidentityprovider/Cargo.toml
File renamed without changes.
 0  
...t_alpha/cognitoidentityprovider/README.md → ...preview/cognitoidentityprovider/README.md
File renamed without changes.
 0  
...entityprovider/src/bin/list-user-pools.rs → ...entityprovider/src/bin/list-user-pools.rs
File renamed without changes.
 0  
.rust_alpha/cognitosync/Cargo.toml → rust_dev_preview/cognitosync/Cargo.toml
File renamed without changes.
 0  
.rust_alpha/cognitosync/README.md → rust_dev_preview/cognitosync/README.md
File renamed without changes.
 0  
...osync/src/bin/list-identity-pool-usage.rs → ...osync/src/bin/list-identity-pool-usage.rs
File renamed without changes.
 0  
.rust_alpha/config/Cargo.toml → rust_dev_preview/config/Cargo.toml
File renamed without changes.
 0  
.rust_alpha/config/README.md → rust_dev_preview/config/README.md
File renamed without changes.
 0  
...alpha/config/src/bin/config-helloworld.rs → ...eview/config/src/bin/config-helloworld.rs
File renamed without changes.
 0  
.../src/bin/delete-configuration-recorder.rs → .../src/bin/delete-configuration-recorder.rs
File renamed without changes.
 0  
...config/src/bin/delete-delivery-channel.rs → ...config/src/bin/delete-delivery-channel.rs
File renamed without changes.
 0  
.rust_alpha/config/src/bin/enable-config.rs → ...v_preview/config/src/bin/enable-config.rs
File renamed without changes.
 0  
...g/src/bin/list-configuration-recorders.rs → ...g/src/bin/list-configuration-recorders.rs
File renamed without changes.
 0  
.../config/src/bin/list-delivery-channels.rs → .../config/src/bin/list-delivery-channels.rs
File renamed without changes.
 0  
.rust_alpha/config/src/bin/list-resources.rs → ..._preview/config/src/bin/list-resources.rs
File renamed without changes.
 0  
...a/config/src/bin/show-resource-history.rs → ...w/config/src/bin/show-resource-history.rs
File renamed without changes.
 0  
.rust_alpha/cross_service/README.md → rust_dev_preview/cross_service/README.md
File renamed without changes.
 0  
...pha/cross_service/detect_faces/Cargo.toml → ...iew/cross_service/detect_faces/Cargo.toml
File renamed without changes.
 0  
...ha/cross_service/detect_faces/src/main.rs → ...ew/cross_service/detect_faces/src/main.rs
File renamed without changes.
 0  
...ha/cross_service/detect_labels/Cargo.toml → ...ew/cross_service/detect_labels/Cargo.toml
File renamed without changes.
 0  
...a/cross_service/detect_labels/src/main.rs → ...w/cross_service/detect_labels/src/main.rs
File renamed without changes.
 0  
..._alpha/cross_service/telephone/Cargo.toml → ...review/cross_service/telephone/Cargo.toml
File renamed without changes.
 0  
...alpha/cross_service/telephone/src/main.rs → ...eview/cross_service/telephone/src/main.rs
File renamed without changes.
 0  
.rust_alpha/custom_retries/Cargo.toml → rust_dev_preview/custom_retries/Cargo.toml
File renamed without changes.
 0  
...custom_retries/src/bin/disable_retries.rs → ...custom_retries/src/bin/disable_retries.rs
File renamed without changes.
 0  
...pha/custom_retries/src/bin/set_retries.rs → ...iew/custom_retries/src/bin/set_retries.rs
File renamed without changes.
 0  
.rust_alpha/dynamodb/Cargo.toml → rust_dev_preview/dynamodb/Cargo.toml
File renamed without changes.
 0  
.rust_alpha/dynamodb/README.md → rust_dev_preview/dynamodb/README.md
File renamed without changes.
 0  
.rust_alpha/dynamodb/src/bin/README.md → rust_dev_preview/dynamodb/src/bin/README.md
File renamed without changes.
 0  
.rust_alpha/dynamodb/src/bin/add-item.rs → ..._dev_preview/dynamodb/src/bin/add-item.rs
File renamed without changes.
 0  
.rust_alpha/dynamodb/src/bin/create-table.rs → ..._preview/dynamodb/src/bin/create-table.rs
File renamed without changes.
 0  
.rust_alpha/dynamodb/src/bin/crud.rs → rust_dev_preview/dynamodb/src/bin/crud.rs
File renamed without changes.
 0  
.rust_alpha/dynamodb/src/bin/data.json → rust_dev_preview/dynamodb/src/bin/data.json
File renamed without changes.
 0  
.rust_alpha/dynamodb/src/bin/delete-item.rs → ...v_preview/dynamodb/src/bin/delete-item.rs
File renamed without changes.
 0  
.rust_alpha/dynamodb/src/bin/delete-table.rs → ..._preview/dynamodb/src/bin/delete-table.rs
File renamed without changes.
 0  
...alpha/dynamodb/src/bin/docker-compose.yml → ...eview/dynamodb/src/bin/docker-compose.yml
File renamed without changes.
 0  
...a/dynamodb/src/bin/dynamodb-helloworld.rs → ...w/dynamodb/src/bin/dynamodb-helloworld.rs
File renamed without changes.
 0  
.rust_alpha/dynamodb/src/bin/list-items.rs → ...ev_preview/dynamodb/src/bin/list-items.rs
File renamed without changes.
 0  
.rust_alpha/dynamodb/src/bin/list-tables.rs → ...v_preview/dynamodb/src/bin/list-tables.rs
File renamed without changes.
 0  
.rust_alpha/dynamodb/src/bin/movies.rs → rust_dev_preview/dynamodb/src/bin/movies.rs
File renamed without changes.
 0  
.rust_alpha/ebs/Cargo.toml → rust_dev_preview/ebs/Cargo.toml
File renamed without changes.
 0  
.rust_alpha/ebs/README.md → rust_dev_preview/ebs/README.md
File renamed without changes.
 0  
.rust_alpha/ebs/src/bin/create-snapshot.rs → ...ev_preview/ebs/src/bin/create-snapshot.rs
File renamed without changes.
 0  
.rust_alpha/ebs/src/bin/delete-snapshot.rs → ...ev_preview/ebs/src/bin/delete-snapshot.rs
File renamed without changes.
 0  
...t_alpha/ebs/src/bin/get-snapshot-state.rs → ...preview/ebs/src/bin/get-snapshot-state.rs
File renamed without changes.
 0  
.rust_alpha/ebs/src/bin/list-snapshots.rs → ...dev_preview/ebs/src/bin/list-snapshots.rs
File renamed without changes.
 0  
.rust_alpha/ec2/Cargo.toml → rust_dev_preview/ec2/Cargo.toml
File renamed without changes.
 0  
.rust_alpha/ec2/README.md → rust_dev_preview/ec2/README.md
File renamed without changes.
 0  
...t_alpha/ec2/src/bin/describe-instances.rs → ...preview/ec2/src/bin/describe-instances.rs
File renamed without changes.
 0  
.rust_alpha/ec2/src/bin/ec2-helloworld.rs → ...dev_preview/ec2/src/bin/ec2-helloworld.rs
File renamed without changes.
 0  
...a/ec2/src/bin/list-all-instance-events.rs → ...w/ec2/src/bin/list-all-instance-events.rs
File renamed without changes.
 0  
.rust_alpha/ec2/src/bin/monitor-instance.rs → ...v_preview/ec2/src/bin/monitor-instance.rs
File renamed without changes.
 0  
.rust_alpha/ec2/src/bin/reboot-instance.rs → ...ev_preview/ec2/src/bin/reboot-instance.rs
File renamed without changes.
 0  
.rust_alpha/ec2/src/bin/start-instance.rs → ...dev_preview/ec2/src/bin/start-instance.rs
File renamed without changes.
 0  
.rust_alpha/ec2/src/bin/stop-instance.rs → ..._dev_preview/ec2/src/bin/stop-instance.rs
File renamed without changes.
 0  
.rust_alpha/iam/Cargo.toml → rust_dev_preview/iam/Cargo.toml
File renamed without changes.
 0  
.rust_alpha/iam/README.md → rust_dev_preview/iam/README.md
File renamed without changes.
 0  
.rust_alpha/iam/src/bin/create-role.rs → rust_dev_preview/iam/src/bin/create-role.rs
File renamed without changes.
 0  
.rust_alpha/iot/Cargo.toml → rust_dev_preview/iot/Cargo.toml
File renamed without changes.
 0  
.rust_alpha/iot/README.md → rust_dev_preview/iot/README.md
File renamed without changes.
 0  
.rust_alpha/iot/src/bin/describe-endpoint.rs → ..._preview/iot/src/bin/describe-endpoint.rs
File renamed without changes.
 0  
.rust_alpha/iot/src/bin/list-things.rs → rust_dev_preview/iot/src/bin/list-things.rs
File renamed without changes.
 0  
.rust_alpha/kinesis/Cargo.toml → rust_dev_preview/kinesis/Cargo.toml
File renamed without changes.
 0  
.rust_alpha/kinesis/README.md → rust_dev_preview/kinesis/README.md
File renamed without changes.
 0  
.rust_alpha/kinesis/src/bin/create-stream.rs → ..._preview/kinesis/src/bin/create-stream.rs
File renamed without changes.
 0  
.rust_alpha/kinesis/src/bin/delete-stream.rs → ..._preview/kinesis/src/bin/delete-stream.rs
File renamed without changes.
 0  
..._alpha/kinesis/src/bin/describe-stream.rs → ...review/kinesis/src/bin/describe-stream.rs
File renamed without changes.
 0  
.rust_alpha/kinesis/src/bin/list-streams.rs → ...v_preview/kinesis/src/bin/list-streams.rs
File renamed without changes.
 0  
.rust_alpha/kinesis/src/bin/put-record.rs → ...dev_preview/kinesis/src/bin/put-record.rs
File renamed without changes.
 0  
.rust_alpha/kms/Cargo.toml → rust_dev_preview/kms/Cargo.toml
File renamed without changes.
 0  
.rust_alpha/kms/README.md → rust_dev_preview/kms/README.md
File renamed without changes.
 0  
.rust_alpha/kms/src/bin/create-key.rs → rust_dev_preview/kms/src/bin/create-key.rs
File renamed without changes.
 0  
.rust_alpha/kms/src/bin/decrypt.rs → rust_dev_preview/kms/src/bin/decrypt.rs
File renamed without changes.
 0  
.rust_alpha/kms/src/bin/encrypt.rs → rust_dev_preview/kms/src/bin/encrypt.rs
File renamed without changes.
 0  
...in/generate-data-key-without-plaintext.rs → ...in/generate-data-key-without-plaintext.rs
File renamed without changes.
 0  
.rust_alpha/kms/src/bin/generate-data-key.rs → ..._preview/kms/src/bin/generate-data-key.rs
File renamed without changes.
 0  
.rust_alpha/kms/src/bin/generate-random.rs → ...ev_preview/kms/src/bin/generate-random.rs
File renamed without changes.
 0  
.rust_alpha/kms/src/bin/kms-helloworld.rs → ...dev_preview/kms/src/bin/kms-helloworld.rs
File renamed without changes.
 0  
.rust_alpha/kms/src/bin/list-keys.rs → rust_dev_preview/kms/src/bin/list-keys.rs
File renamed without changes.
 0  
.rust_alpha/kms/src/bin/reencrypt-data.rs → ...dev_preview/kms/src/bin/reencrypt-data.rs
File renamed without changes.
 0  
.rust_alpha/lambda/Cargo.toml → rust_dev_preview/lambda/Cargo.toml
File renamed without changes.
 0  
.rust_alpha/lambda/README.md → rust_dev_preview/lambda/README.md
File renamed without changes.
 0  
...pha/lambda/src/bin/change-java-runtime.rs → ...iew/lambda/src/bin/change-java-runtime.rs
File renamed without changes.
 0  
...t_alpha/lambda/src/bin/invoke-function.rs → ...preview/lambda/src/bin/invoke-function.rs
File renamed without changes.
 0  
...bda/src/bin/list-all-function-runtimes.rs → ...bda/src/bin/list-all-function-runtimes.rs
File renamed without changes.
 0  
.rust_alpha/lambda/src/bin/list-functions.rs → ..._preview/lambda/src/bin/list-functions.rs
File renamed without changes.
 0  
.rust_alpha/logging/logger/Cargo.toml → rust_dev_preview/logging/logger/Cargo.toml
File renamed without changes.
 0  
.rust_alpha/logging/logger/src/main.rs → rust_dev_preview/logging/logger/src/main.rs
File renamed without changes.
 0  
.rust_alpha/logging/tracing/Cargo.toml → rust_dev_preview/logging/tracing/Cargo.toml
File renamed without changes.
 0  
.rust_alpha/logging/tracing/src/main.rs → rust_dev_preview/logging/tracing/src/main.rs
File renamed without changes.
 0  
.rust_alpha/medialive/Cargo.toml → rust_dev_preview/medialive/Cargo.toml
File renamed without changes.
 0  
.rust_alpha/medialive/README.md → rust_dev_preview/medialive/README.md
File renamed without changes.
 0  
...medialive/src/bin/medialive-helloworld.rs → ...medialive/src/bin/medialive-helloworld.rs
File renamed without changes.
 0  
.rust_alpha/mediapackage/Cargo.toml → rust_dev_preview/mediapackage/Cargo.toml
File renamed without changes.
 0  
.rust_alpha/mediapackage/README.md → rust_dev_preview/mediapackage/README.md
File renamed without changes.
 0  
...ha/mediapackage/src/bin/list-endpoints.rs → ...ew/mediapackage/src/bin/list-endpoints.rs
File renamed without changes.
 0  
...ackage/src/bin/mediapackage-helloworld.rs → ...ackage/src/bin/mediapackage-helloworld.rs
File renamed without changes.
 0  
.rust_alpha/polly/Cargo.toml → rust_dev_preview/polly/Cargo.toml
File renamed without changes.
 0  
.rust_alpha/polly/README.md → rust_dev_preview/polly/README.md
File renamed without changes.
 0  
.rust_alpha/polly/src/bin/describe-voices.rs → ..._preview/polly/src/bin/describe-voices.rs
File renamed without changes.
 0  
.rust_alpha/polly/src/bin/list-lexicons.rs → ...ev_preview/polly/src/bin/list-lexicons.rs
File renamed without changes.
 0  
...t_alpha/polly/src/bin/polly-helloworld.rs → ...preview/polly/src/bin/polly-helloworld.rs
File renamed without changes.
 0  
.rust_alpha/polly/src/bin/put-lexicon.rs → ..._dev_preview/polly/src/bin/put-lexicon.rs
File renamed without changes.
 0  
..._alpha/polly/src/bin/synthesize-speech.rs → ...review/polly/src/bin/synthesize-speech.rs
File renamed without changes.
 0  
.rust_alpha/qldb/Cargo.toml → rust_dev_preview/qldb/Cargo.toml
File renamed without changes.
 0  
.rust_alpha/qldb/README.md → rust_dev_preview/qldb/README.md
File renamed without changes.
 0  
.rust_alpha/qldb/src/bin/create-ledger.rs → ...dev_preview/qldb/src/bin/create-ledger.rs
File renamed without changes.
 0  
.rust_alpha/qldb/src/bin/list-ledgers.rs → ..._dev_preview/qldb/src/bin/list-ledgers.rs
File renamed without changes.
 0  
.rust_alpha/qldb/src/bin/qldb-helloworld.rs → ...v_preview/qldb/src/bin/qldb-helloworld.rs
File renamed without changes.
 0  
.rust_alpha/rds/Cargo.toml → rust_dev_preview/rds/Cargo.toml
File renamed without changes.
 0  
.rust_alpha/rds/README.md → rust_dev_preview/rds/README.md
File renamed without changes.
 0  
.rust_alpha/rds/src/bin/rds-helloworld.rs → ...dev_preview/rds/src/bin/rds-helloworld.rs
File renamed without changes.
 0  
.rust_alpha/rdsdata/Cargo.toml → rust_dev_preview/rdsdata/Cargo.toml
File renamed without changes.
 0  
.rust_alpha/rdsdata/README.md → rust_dev_preview/rdsdata/README.md
File renamed without changes.
 0  
...pha/rdsdata/src/bin/rdsdata-helloworld.rs → ...iew/rdsdata/src/bin/rdsdata-helloworld.rs
File renamed without changes.
 0  
.rust_alpha/route53/Cargo.toml → rust_dev_preview/route53/Cargo.toml
File renamed without changes.
 0  
.rust_alpha/route53/README.md → rust_dev_preview/route53/README.md
File renamed without changes.
 0  
...pha/route53/src/bin/route53-helloworld.rs → ...iew/route53/src/bin/route53-helloworld.rs
File renamed without changes.
 0  
.rust_alpha/s3/Cargo.toml → rust_dev_preview/s3/Cargo.toml
File renamed without changes.
 0  
.rust_alpha/s3/README.md → rust_dev_preview/s3/README.md
File renamed without changes.
 0  
.rust_alpha/s3/src/bin/create-bucket.rs → rust_dev_preview/s3/src/bin/create-bucket.rs
File renamed without changes.
 0  
.rust_alpha/s3/src/bin/delete-object.rs → rust_dev_preview/s3/src/bin/delete-object.rs
File renamed without changes.
 0  
.rust_alpha/s3/src/bin/delete-objects.rs → ..._dev_preview/s3/src/bin/delete-objects.rs
File renamed without changes.
 0  
.rust_alpha/s3/src/bin/list-buckets.rs → rust_dev_preview/s3/src/bin/list-buckets.rs
File renamed without changes.
 0  
..._alpha/s3/src/bin/list-object-versions.rs → ...review/s3/src/bin/list-object-versions.rs
File renamed without changes.
 0  
.rust_alpha/s3/src/bin/list-objects.rs → rust_dev_preview/s3/src/bin/list-objects.rs
File renamed without changes.
 0  
.rust_alpha/s3/src/bin/s3-helloworld.rs → rust_dev_preview/s3/src/bin/s3-helloworld.rs
File renamed without changes.
 0  
.rust_alpha/sagemaker/Cargo.toml → rust_dev_preview/sagemaker/Cargo.toml
File renamed without changes.
 0  
.rust_alpha/sagemaker/README.md → rust_dev_preview/sagemaker/README.md
File renamed without changes.
 0  
...a/sagemaker/src/bin/list-training-jobs.rs → ...w/sagemaker/src/bin/list-training-jobs.rs
File renamed without changes.
 0  
...sagemaker/src/bin/sagemaker-helloworld.rs → ...sagemaker/src/bin/sagemaker-helloworld.rs
File renamed without changes.
 0  
.rust_alpha/secretsmanager/Cargo.toml → rust_dev_preview/secretsmanager/Cargo.toml
File renamed without changes.
 0  
.rust_alpha/secretsmanager/README.md → rust_dev_preview/secretsmanager/README.md
File renamed without changes.
 0  
...a/secretsmanager/src/bin/create-secret.rs → ...w/secretsmanager/src/bin/create-secret.rs
File renamed without changes.
 0  
...ecretsmanager/src/bin/get-secret-value.rs → ...ecretsmanager/src/bin/get-secret-value.rs
File renamed without changes.
 0  
...ha/secretsmanager/src/bin/list-secrets.rs → ...ew/secretsmanager/src/bin/list-secrets.rs
File renamed without changes.
 0  
.rust_alpha/ses/Cargo.toml → rust_dev_preview/ses/Cargo.toml
File renamed without changes.
 0  
.rust_alpha/ses/README.md → rust_dev_preview/ses/README.md
File renamed without changes.
 0  
..._alpha/ses/src/bin/create-contact-list.rs → ...review/ses/src/bin/create-contact-list.rs
File renamed without changes.
 0  
.rust_alpha/ses/src/bin/create-contact.rs → ...dev_preview/ses/src/bin/create-contact.rs
File renamed without changes.
 0  
.rust_alpha/ses/src/bin/is-email-verified.rs → ..._preview/ses/src/bin/is-email-verified.rs
File renamed without changes.
 0  
...t_alpha/ses/src/bin/list-contact-lists.rs → ...preview/ses/src/bin/list-contact-lists.rs
File renamed without changes.
 0  
.rust_alpha/ses/src/bin/list-contacts.rs → ..._dev_preview/ses/src/bin/list-contacts.rs
File renamed without changes.
 0  
.rust_alpha/ses/src/bin/send-email.rs → rust_dev_preview/ses/src/bin/send-email.rs
File renamed without changes.
 0  
.rust_alpha/snowball/Cargo.toml → rust_dev_preview/snowball/Cargo.toml
File renamed without changes.
 0  
.rust_alpha/snowball/README.md → rust_dev_preview/snowball/README.md
File renamed without changes.
 0  
..._alpha/snowball/src/bin/create-address.rs → ...review/snowball/src/bin/create-address.rs
File renamed without changes.
 0  
...ha/snowball/src/bin/describe-addresses.rs → ...ew/snowball/src/bin/describe-addresses.rs
File renamed without changes.
 0  
.rust_alpha/snowball/src/bin/list-jobs.rs → ...dev_preview/snowball/src/bin/list-jobs.rs
File renamed without changes.
 0  
.rust_alpha/sns/Cargo.toml → rust_dev_preview/sns/Cargo.toml
File renamed without changes.
 0  
.rust_alpha/sns/README.md → rust_dev_preview/sns/README.md
File renamed without changes.
 0  
.rust_alpha/sns/src/bin/create-topic.rs → rust_dev_preview/sns/src/bin/create-topic.rs
File renamed without changes.
 0  
.rust_alpha/sns/src/bin/list-topics.rs → rust_dev_preview/sns/src/bin/list-topics.rs
File renamed without changes.
 0  
.rust_alpha/sns/src/bin/sns-hello-world.rs → ...ev_preview/sns/src/bin/sns-hello-world.rs
File renamed without changes.
 0  
.rust_alpha/sqs/Cargo.toml → rust_dev_preview/sqs/Cargo.toml
File renamed without changes.
 0  
.rust_alpha/sqs/README.md → rust_dev_preview/sqs/README.md
File renamed without changes.
 0  
.rust_alpha/sqs/src/bin/sqs-hello-world.rs → ...ev_preview/sqs/src/bin/sqs-hello-world.rs
File renamed without changes.
 0  
.rust_alpha/ssm/Cargo.toml → rust_dev_preview/ssm/Cargo.toml
File renamed without changes.
 0  
.rust_alpha/ssm/README.md → rust_dev_preview/ssm/README.md
File renamed without changes.
 0  
.rust_alpha/ssm/src/bin/create-parameter.rs → ...v_preview/ssm/src/bin/create-parameter.rs
File renamed without changes.
 0  
..._alpha/ssm/src/bin/describe-parameters.rs → ...review/ssm/src/bin/describe-parameters.rs
File renamed without changes.
  2  
scripts/README.md
@@ -144,7 +144,7 @@ To run this script, you must have the following installed:


You must also set the following environment variables:	You must also set the following environment variables:


- ``RustRoot`` is the fully-qualified path to the **.rust_alpha** directory on your computer.	- ``RustRoot`` is the fully-qualified path to the **rust_dev_preview** directory on your computer.
- ``FromVersion`` is the version number of the previous SDK crates.	- ``FromVersion`` is the version number of the previous SDK crates.
- ``ToVersion`` is the version number of the SDK crates for the current release.	- ``ToVersion`` is the version number of the SDK crates for the current release.


  2  
scripts/testRust.sh
@@ -60,7 +60,7 @@ vetService () {
}	}


# We need three environment variables:	# We need three environment variables:
# RustRoot is where we can find aws-doc-sdk-examples/.rust_alpha locally	# RustRoot is where we can find aws-doc-sdk-examples/rust_dev_preview locally
if [[ -z "${RustRoot}" ]]; then	if [[ -z "${RustRoot}" ]]; then
    echo You must define the environment variable RustRoot	    echo You must define the environment variable RustRoot
    exit 1	    exit 1
0 comments on commit 3e2a1b1
@mowjoejoejoejoe
 
Add heading textAdd bold text, <Ctrl+b>Add italic text, <Ctrl+i>
Add a quote, <Ctrl+Shift+.>Add code, <Ctrl+e>Add a link, <Ctrl+k>
Add a bulleted list, <Ctrl+Shift+8>Add a numbered list, <Ctrl+Shift+7>Add a task list, <Ctrl+Shift+l>
Directly mention a user or team
Reference an issue, pull request, or discussion
Add saved reply
Leave a comment
No file chosen
Attach files by dragging & dropping, selecting or pasting them.
Styling with Markdown is supported
 You’re not receiving notifications from this thread.
Footer
© 2023 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
Renamed .rust_alpha directory as rust_dev_preview · awsdocs/aws-doc-sdk-examples@3e2a1b1---
title: About releases
intro: 'You can create a release to package software, along with release notes and links to binary files, for other people to use.'
redirect_from:
  - /articles/downloading-files-from-the-command-line
  - /articles/downloading-files-with-curl
  - /articles/about-releases
  - /articles/getting-the-download-count-for-your-releases
  - /github/administering-a-repository/getting-the-download-count-for-your-releases
  - /github/administering-a-repository/about-releases
  - /github/administering-a-repository/releasing-projects-on-github/about-releases
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
---
## About releases

{% ifversion fpt or ghec or ghes or ghae > 3.3 %}
![An overview of releases](/assets/images/help/releases/refreshed-releases-overview-with-contributors.png)
{% else %}
![An overview of releases](/assets/images/help/releases/releases-overview.png)
{% endif %}

Releases are deployable software iterations you can package and make available for a wider audience to download and use.

Releases are based on [Git tags](https://git-scm.com/book/en/Git-Basics-Tagging), which mark a specific point in your repository's history. A tag date may be different than a release date since they can be created at different times. For more information about viewing your existing tags, see "[Viewing your repository's releases and tags](/github/administering-a-repository/viewing-your-repositorys-releases-and-tags)."

You can receive notifications when new releases are published in a repository without receiving notifications about other updates to the repository. For more information, see "[Viewing your subscriptions](/github/managing-subscriptions-and-notifications-on-github/viewing-your-subscriptions)."

Anyone with read access to a repository can view and compare releases, but only people with write permissions to a repository can manage releases. For more information, see "[Managing releases in a repository](/github/administering-a-repository/managing-releases-in-a-repository)."

{% ifversion fpt or ghec or ghes or ghae > 3.3 %}
You can manually create release notes while managing a release. Alternatively, you can automatically generate release notes from a default template, or customize your own release notes template. For more information, see "[Automatically generated release notes](/repositories/releasing-projects-on-github/automatically-generated-release-notes)."
{% endif %}

{% ifversion fpt or ghec or ghes > 3.5 or ghae > 3.6 %}
When viewing the details for a release, the creation date for each release asset is shown next to the release asset.
{% endif %}

{% ifversion fpt or ghec %}
People with admin permissions to a repository can choose whether {% data variables.large_files.product_name_long %} ({% data variables.large_files.product_name_short %}) objects are included in the ZIP files and tarballs that {% data variables.product.product_name %} creates for each release. For more information, see "[Managing {% data variables.large_files.product_name_short %} objects in archives of your repository](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-git-lfs-objects-in-archives-of-your-repository)."

If a release fixes a security vulnerability, you should publish a security advisory in your repository. {% data variables.product.prodname_dotcom %} reviews each published security advisory and may use it to send {% data variables.product.prodname_dependabot_alerts %} to affected repositories. For more information, see "[About GitHub Security Advisories](/github/managing-security-vulnerabilities/about-github-security-advisories)."

You can view the **Dependents** tab of the dependency graph to see which repositories and packages depend on code in your repository, and may therefore be affected by a new release. For more information, see "[About the dependency graph](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)."
{% endif %}

You can also use the Releases API to gather information, such as the number of times people download a release asset. For more information, see "[Releases](/rest/reference/releases)."

{% ifversion fpt or ghec %}
## Storage and bandwidth quotas

 Each file included in a release must be under {% data variables.large_files.max_file_size %}. There is no limit on the total size of a release, nor bandwidth usage.

{% endif %}
