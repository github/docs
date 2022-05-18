### Self review

You should always review your own PR first.

For content changes, make sure that you:

- [ ] Confirm that the changes meet the user experience and goals outlined in the content design plan (if there is one).
- [ ] Compare your pull request's source changes to staging to confirm that the output matches the source and that everything is rendering as expected. This helps spot issues like typos, content that doesn't follow the style guide, or content that isn't rendering due to versioning problems. Remember that lists and tables can be tricky.
- [ ] Review the content for technical accuracy.
- [ ] Review the entire pull request using the [localization checklist](localization-checklist.md).
- [ ] Copy-edit the changes for grammar, spelling, and adherence to the [style guide](https://github.com/github/docs/blob/main/contributing/content-style-guide.md).
- [ ] Check new or updated Liquid statements to confirm that versioning is correct.
- [ ] If there are any failing checks in your PR, troubleshoot them until they're all passing.
string containerName = "...";
BlobContainerClient container = new BlobContainerClient(connectionString, containerName);

var blobs = container.GetBlobs();
foreach (var blob in blobs)
{
    Console.WriteLine($"{blob.Name} --> Created On: {blob.Properties.CreatedOn:YYYY-MM-dd HH:mm:ss}  Size: {blob.Properties.ContentLength}");
}const containerName = '...';
const containerClient = blobServiceClient.getContainerClient(containerName);

let blobs = containerClient.listBlobsFlat();
for await (const blob of blobs) {
  console.log(`${blob.name} --> Created: ${blob.properties.createdOn}   Size: ${blob.properties.contentLength}`);
}GET https://[url-for-service-account]/?comp=list&include=metadata
