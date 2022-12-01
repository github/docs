# Content style guide for GitHub Docs <!-- omit in toc -->

Welcome to the content style guide for [GitHub Docs](https://docs.github.com/).

These guidelines are specific to GitHub’s documentation. For general style questions or guidance on topics not covered here, see the [Microsoft Style Guide](https://docs.microsoft.com/style-guide/welcome/). For markup specific to source content on docs.github.com, see our [markup reference guide](content-markup-reference.md). For any questions about the GitHub brand, see our "[GitHub Brand Guide](https://brand.github.com)"

Use table of contents icon <img src="../assets/images/table-of-contents.png" width="25" height="25" /> on the top left corner of this document to get to a specific section of this guide quickly.
Coda API
Search...
Introduction
Getting Started
Using the API
DOCS
Docs
Permissions
Publishing
DOC STRUCTURE
Pages
Automations
TABLES AND VIEWS
Tables
Columns
Rows
GET
List table rows
POST
Insert/upsert rows
DEL
Delete multiple rows
GET
Get a row
PUT
Update row
DEL
Delete row
POST
Push a button
FORMULAS & CONTROLS
Formulas
Controls
MISCELLANEOUS
Account
Analytics
Miscellaneous
Documentation Powered by Redocly
Coda API (1.3.2)
API Support: help+api@coda.io
URL: https://coda.io
Terms of Service
Introduction
The Coda API is a RESTful API that lets you programmatically interact with Coda docs:

List and search Coda docs
Create new docs and copy existing ones
Share and publish docs
Discover pages, tables, formulas, and controls
Read, insert, upsert, update, and delete rows
As we update and release newer versions of the API, we reserve the right to remove older APIs and functionality with a 3-month deprecation notice. We will post about such changes as well as announce new features in the Developers Central section of our Community, and update the API updates doc.

Getting Started
Our Getting Started Guide helps you learn the basic of working with the API and shows a few ways you can use it. Check it out, and learn how to:

Read data from Coda tables and write back to them
Build a one-way sync from one Coda doc to another
Automate reminders
Sync your Google Calendar to Coda
Using the API
Coda's REST API is designed to be straightforward to use. You can use the language and platform of your choice to make requests. To get a feel for the API, you can also use a tool like Postman or Insomnia.

API Endpoint
This API uses a base path of https://coda.io/apis/v1.

Resource IDs and Links
Each resource instance retrieved via the API has the following fields:

id: The resource's immutable ID, which can be used to refer to it within its context
type: The type of resource, useful for identifying it in a heterogenous collection of results
href: A fully qualified URI that can be used to refer to and get the latest details on the resource
Most resources can be queried by their name or ID. We recommend sticking with IDs where possible, as names are fragile and prone to being changed by your doc's users.

List Endpoints
Endpoints supporting listing of resources have the following fields:

items: An array containing the listed resources, limited by the limit or pageToken query parameters
nextPageLink: If more results are available, an API link to the next page of results
nextPageToken: If more results are available, a page token that can be passed into the pageToken query parameter
The maximum page size may change at any time, and may be different for different endpoints. Please do not rely on it for any behavior of your application. If you pass a limit parameter that is larger than our maximum allowed limit, we will only return as many results as our maximum limit. You should look for the presence of the nextPageToken on the response to see if there are more results available, rather than relying on a result set that matches your provided limit.

To fetch a subsequent page of results, pass the pageToken parameter. Set this parameter to the value given to you as the nextPageToken in a page response. If no value is provided, there are no more results available. You only need to pass the pageToken to get the next page of results, you don't need to pass any of the parameters from your original request, as they are all implied by the pageToken. Any other parameters provided alongside a pageToken will be ignored.

Doc IDs
While most object IDs will have to be discovered via the API, you may find yourself frequently wanting to get the ID of a specific Coda doc.

Here's a handy tool that will extract it for you. (See if you can find the pattern!)

Doc ID Extractor
Paste in a Coda doc URL
 Your doc ID is:    
Rate Limiting
The Coda API sets a reasonable limit on the number of requests that can be made per minute. Once this limit is reached, calls to the API will start returning errors with an HTTP status code of 429.

Consistency
While edits made in Coda are shared with other collaborators in real-time, it can take a few seconds for them to become available via the API. You may also notice that changes made via the API, such as updating a row, are not immediate. These endpoints all return an HTTP 202 status code, instead of a standard 200, indicating that the edit has been accepted and queued for processing. This generally takes a few seconds, and the edit may fail if invalid. Each such edit will return a requestId in the response, and you can pass this requestId to the #getMutationStatus endpoint to find out if it has been applied.

Similarly, when you get doc data from the API (rows, pages, columns, etc), the data you receive comes from the most recent "snapshot" of the doc, which might be slightly stale relative to the data you observe in your browser. If you want to ensure that the data you receive is up to date and are ok getting an error if not, you can pass this header in your request: X-Coda-Doc-Version: latest. If the API's view of the doc is not up to date, the API will return an HTTP 400 response.

Volatile Formulas
Coda exposes a number of "volatile" formulas, as as Today(), Now(), and User(). When used in a live Coda doc, these formulas affect what's visible in realtime, tailored to the current user.

Such formulas behave differently with the API. Time-based values may only be current to the last edit made to the doc. User-based values may be blank or invalid.

Free and Paid Workspaces
We make the Coda API available to all of our users free of charge, in both free and paid workspaces. However, API usage is subject to the role of the user associated with the API token in the workspace applicable to each API request. What this means is:

For the #createDoc endpoint specifically, the owner of the API token must be a Doc Maker (or Admin) in the workspace. If the "Any member can create docs" option in enabled in the workspace settings, they can be an Editor and will get auto-promoted to Doc Maker upon using this endpoint. Lastly, if in addition, the API key owner matches the "Approved email domains" setting, they will be auto-added to the workspace and promoted to Doc Maker upon using this endpoint
This behavior applies to the API as well as any integrations that may use it, such as Zapier.

Examples
To help you get started, this documentation provides code examples in Python, Unix shell, and Google Apps Script. These examples are based on a simple doc that looks something like this:



Python examples
These examples use Python 3.6+. If you don't already have the requests module, use pip or easy_install to get it.

Shell examples
The shell examples are intended to be run in a Unix shell. If you're on Windows, you will need to install WSL.

These examples use the standard cURL utility to pull from the API, and then process it with jq to extract and format example output. If you don't already have it, you can either install it or run the command without it to see the raw JSON output.

Google Apps Script examples


Google Apps Script makes it easy to write code in a JavaScript-like syntax and easily access many Google products with built-in libraries. You can set up your scripts to run periodically, which makes it a good environment for writing tools without maintaining your own server.

Coda provides a library for Google Apps Script. To use it, go into Resources -> Libraries... and enter the following library ID: 15IQuWOk8MqT50FDWomh57UqWGH23gjsWVWYFms3ton6L-UHmefYHS9Vl. If you want to see the library's source code, it's available here.

Google provides autocomplete for API functions as well as generated docs. You can access these docs via the Libraries dialog by clicking on the library name. Required parameters that would be included in the URL path are positional arguments in each of these functions, followed by the request body, if applicable. All remaining parameters can be specified in the options object.

OpenAPI/Swagger Spec
In an effort to standardize our API and make it accessible, we offer an OpenAPI 3.0 specification:

OpenAPI 3.0 spec - YAML
OpenAPI 3.0 spec - JSON
Swagger 2.0
We also offer a downgraded Swagger 2.0 version of our specification. This may be useful for a number of tools that haven't yet been adapted to OpenAPI 3.0. Here are the links:

Swagger 2.0 spec - YAML
Swagger 2.0 spec - JSON
Postman collection
To get started with prototyping the API quickly in Postman, you can use one of links above to import the Coda API into a collection. You'll then need to set the appropriate header and environment variables.

Client libraries
We do not currently support client libraries apart from Google Apps Script. To work with the Coda API, you can either use standard network libraries for your language, or use the appropriate Swagger Generator tool to auto-generate Coda API client libraries for your language of choice. We do not provide any guarantees that these autogenerated libraries are compatible with our API (e.g., some libraries may not work with Bearer authentication).

OpenAPI 3.0
Swagger Generator 3 (that link takes you to the docs for the generator API) can generate client libraries for these languages. It's relatively new and thus only has support for a limited set of languages at this time.

Swagger 2.0
Swagger Generator takes in a legacy Swagger 2.0 specification, but can generate client libraries for more languages. You can also use local CLI tools to generate these libraries.

Third-party client libraries
Some members of our amazing community have written libraries to work with our API. These aren't officially supported by Coda, but are listed here for convenience. (Please let us know if you've written a library and would like to have it included here.)

PHP by Daniel Stieber
Node-RED by Mori Sugimoto
NodeJS by Parker McMullin
Ruby by Carlos Muñoz at Getro
Python by Mikhail Beliansky
Go by Artur Safin
Docs
Coda docs are foundational, top-level collaborative projects that contain pages. The API lets you list and search your docs to obtain basic metadata like titles and ownership information.

List available docs
Returns a list of Coda docs accessible by the user. These are returned in the same order as on the docs page: reverse chronological by the latest event relevant to the user (last viewed, edited, or shared).

AUTHORIZATIONS:
Bearer
QUERY PARAMETERS
isOwner	
boolean
Show only docs owned by the user.

isPublished	
boolean
Show only published docs.

query	
string
Example: query=Supercalifragilisticexpialidocious
Search term used to filter down results.

sourceDoc	
string
Show only docs copied from the specified doc ID.

isStarred	
boolean
If true, returns docs that are starred. If false, returns docs that are not starred.

inGallery	
boolean
Show only docs visible within the gallery.

workspaceId	
string
Show only docs belonging to the given workspace.

folderId	
string
Show only docs belonging to the given folder.

limit	
integer >= 1
Default: 25
Example: limit=10
Maximum number of results to return in this query.

pageToken	
string
Example: pageToken=eyJsaW1pd
An opaque token used to fetch the next page of results.

Responses
200 List of Coda docs matching the query.
401 The API token is invalid or has expired.
403 The API token does not grant access to this resource.
404 The resource could not be located with the current API token.
429 The client has sent too many requests.

GET
/docs

Request samples
Python 3.7ShellGoogle Apps Script

Copy
import requests

headers = {'Authorization': 'Bearer <your API token>'}
uri = 'https://coda.io/apis/v1/docs'
params = {
  'isOwner': True,
  'query': 'New',
}
res = requests.get(uri, headers=headers, params=params).json()

print(f'First doc is: {res["items"][0]["name"]}')
# => First doc is: New Document
Response samples
200401403404429
Content type
application/json

Copy
Expand allCollapse all
{
"items": [
{}
],
"href": "https://coda.io/apis/v1/docs?limit=20",
"nextPageToken": "eyJsaW1pd",
"nextPageLink": "https://coda.io/apis/v1/docs?pageToken=eyJsaW1pd"
}
Create doc
Creates a new Coda doc, optionally copying an existing doc. Note that creating a doc requires you to be a Doc Maker in the applicable workspace (or be auto-promoted to one).

AUTHORIZATIONS:
Bearer
REQUEST BODY SCHEMA: application/json
Parameters for creating the doc.

title	
string
Title of the new doc. Defaults to 'Untitled'.

sourceDoc	
string
An optional doc ID from which to create a copy.

timezone	
string
The timezone to use for the newly created doc.

folderId	
string
The ID of the folder within which to create this doc. Defaults to your "My docs" folder in the oldest workspace you joined; this is subject to change. You can get this ID by opening the folder in the docs list on your computer and grabbing the folderId query parameter.

Responses
201 Info about the created doc.
400 The request parameters did not conform to expectations.
401 The API token is invalid or has expired.
403 The API token does not grant access to this resource.
429 The client has sent too many requests.

POST
/docs

Request samples
PayloadPython 3.7ShellGoogle Apps Script
Content type
application/json

Copy
{
"title": "Project Tracker",
"sourceDoc": "iJKlm_noPq",
"timezone": "America/Los_Angeles",
"folderId": "fl-ABcdEFgHJi"
}
Response samples
201400401403429
Content type
application/json

Copy
Expand allCollapse all
{
"id": "AbCDeFGH",
"type": "doc",
"href": "https://coda.io/apis/v1/docs/AbCDeFGH",
"browserLink": "https://coda.io/d/_dAbCDeFGH",
"icon": {
"name": "string",
"type": "string",
"browserLink": "https://cdn.coda.io/icons/png/color/icon-32.png"
},
"name": "Product Launch Hub",
"owner": "user@example.com",
"ownerName": "Some User",
"docSize": {
"totalRowCount": 31337,
"tableAndViewCount": 42,
"pageCount": 10,
"overApiSizeLimit": false
},
"sourceDoc": {
"id": "AbCDeFGH",
"type": "doc",
"href": "https://coda.io/apis/v1/docs/AbCDeFGH",
"browserLink": "https://coda.io/d/_dAbCDeFGH"
},
"createdAt": "2018-04-11T00:18:57.946Z",
"updatedAt": "2018-04-11T00:18:57.946Z",
"published": {
"description": "Hello World!",
"browserLink": "https://coda.io/@coda/hello-world",
"imageLink": "string",
"discoverable": true,
"earnCredit": true,
"mode": "view",
"categories": []
},
"folder": {
"id": "fl-1Ab234",
"type": "folder",
"browserLink": "https://coda.io/docs?folderId=fl-1Ab234",
"name": "My docs"
},
"workspace": {
"id": "ws-1Ab234",
"type": "workspace",
"organizationId": "org-2Bc456",
"browserLink": "https://coda.io/docs?workspaceId=ws-1Ab234",
"name": "My workspace"
},
"workspaceId": "ws-1Ab234",
"folderId": "fl-1Ab234",
"requestId": "abc-123-def-456"
}
Get info about a doc
Returns metadata for the specified doc.

AUTHORIZATIONS:
Bearer
PATH PARAMETERS
docId
required
string
Example: AbCDeFGH
ID of the doc.

Responses
200 Basic Coda doc metadata.
401 The API token is invalid or has expired.
403 The API token does not grant access to this resource.
404 The resource could not be located with the current API token.
429 The client has sent too many requests.

GET
/docs/{docId}

Request samples
Python 3.7ShellGoogle Apps Script

Copy
import requests

headers = {'Authorization': 'Bearer <your API token>'}
uri = f'https://coda.io/apis/v1/docs/<doc ID>'
res = requests.get(uri, headers=headers).json()

print(f'The name of the doc is {res["name"]}')
# => The name of the doc is New Document
Response samples
200401403404429
Content type
application/json

Copy
Expand allCollapse all
{
"id": "AbCDeFGH",
"type": "doc",
"href": "https://coda.io/apis/v1/docs/AbCDeFGH",
"browserLink": "https://coda.io/d/_dAbCDeFGH",
"icon": {
"name": "string",
"type": "string",
"browserLink": "https://cdn.coda.io/icons/png/color/icon-32.png"
},
"name": "Product Launch Hub",
"owner": "user@example.com",
"ownerName": "Some User",
"docSize": {
"totalRowCount": 31337,
"tableAndViewCount": 42,
"pageCount": 10,
"overApiSizeLimit": false
},
"sourceDoc": {
"id": "AbCDeFGH",
"type": "doc",
"href": "https://coda.io/apis/v1/docs/AbCDeFGH",
"browserLink": "https://coda.io/d/_dAbCDeFGH"
},
"createdAt": "2018-04-11T00:18:57.946Z",
"updatedAt": "2018-04-11T00:18:57.946Z",
"published": {
"description": "Hello World!",
"browserLink": "https://coda.io/@coda/hello-world",
"imageLink": "string",
"discoverable": true,
"earnCredit": true,
"mode": "view",
"categories": []
},
"folder": {
"id": "fl-1Ab234",
"type": "folder",
"browserLink": "https://coda.io/docs?folderId=fl-1Ab234",
"name": "My docs"
},
"workspace": {
"id": "ws-1Ab234",
"type": "workspace",
"organizationId": "org-2Bc456",
"browserLink": "https://coda.io/docs?workspaceId=ws-1Ab234",
"name": "My workspace"
},
"workspaceId": "ws-1Ab234",
"folderId": "fl-1Ab234"
}
Delete doc
Deletes a doc.

AUTHORIZATIONS:
Bearer
PATH PARAMETERS
docId
required
string
Example: AbCDeFGH
ID of the doc.

Responses
202 A result indicating that the doc was deleted.
401 The API token is invalid or has expired.
403 The API token does not grant access to this resource.
404 The resource could not be located with the current API token.
429 The client has sent too many requests.

DELETE
/docs/{docId}

Request samples
Python 3.7ShellGoogle Apps Script

Copy
import requests

headers = {'Authorization': 'Bearer <your API token>'}
uri = f'https://coda.io/apis/v1/docs/<doc ID>'
res = requests.delete(uri, headers=headers).json()
Response samples
202401403404429
Content type
application/json

Copy
{ }
Permissions
This API lets you manage sharing and permissions for your docs.

Get sharing metadata
Returns metadata associated with sharing for this Coda doc.

AUTHORIZATIONS:
Bearer
PATH PARAMETERS
docId
required
string
Example: AbCDeFGH
ID of the doc.

Responses
200 Metadata associated with sharing perssions for a doc.
401 The API token is invalid or has expired.
403 The API token does not grant access to this resource.
404 The resource could not be located with the current API token.
429 The client has sent too many requests.

GET
/docs/{docId}/acl/metadata

Request samples
Python 3.7ShellGoogle Apps Script

Copy
import requests

headers = {'Authorization': 'Bearer <your API token>'}
uri = f'https://coda.io/apis/v1/docs/<doc ID>/acl/metadata'
res = requests.get(uri, headers=headers).json()

print(f'Can I share this doc with others? {res["canShare"]}')
# => Can I share this doc with others? true
Response samples
200401403404429
Content type
application/json

Copy
{
"canShare": true,
"canShareWithOrg": true,
"canCopy": true
}
List permissions
Returns a list of permissions for this Coda doc.

AUTHORIZATIONS:
Bearer
PATH PARAMETERS
docId
required
string
Example: AbCDeFGH
ID of the doc.

QUERY PARAMETERS
limit	
integer >= 1
Default: 25
Example: limit=10
Maximum number of results to return in this query.

pageToken	
string
Example: pageToken=eyJsaW1pd
An opaque token used to fetch the next page of results.

Responses
200 List of permissions for a doc.
401 The API token is invalid or has expired.
403 The API token does not grant access to this resource.
404 The resource could not be located with the current API token.
429 The client has sent too many requests.

GET
/docs/{docId}/acl/permissions

Request samples
Python 3.7ShellGoogle Apps Script

Copy
import requests

headers = {'Authorization': 'Bearer <your API token>'}
uri = f'https://coda.io/apis/v1/docs/<doc ID>/acl/permissions'
res = requests.get(uri, headers=headers).json()

print(f'First user with access is {res["items"][0]["principal"]["email"]}')
# => First user with access is foo@bar.com
Response samples
200401403404429
Content type
application/json

Copy
Expand allCollapse all
{
"items": [
{}
],
"href": "https://coda.io/apis/v1/docs/AbCDeFGH/acl?limit=20",
"nextPageToken": "eyJsaW1pd",
"nextPageLink": "https://coda.io/apis/v1/docs/AbCDeFGH/acl?pageToken=eyJsaW1pd"
}
Add permission
Adds a new permission to the doc.

AUTHORIZATIONS:
Bearer
PATH PARAMETERS
docId
required
string
Example: AbCDeFGH
ID of the doc.

REQUEST BODY SCHEMA: application/json
Parameters for adding the new permission.

access
required
string (AccessTypeNotNone)
Enum: "readonly" "write" "comment"
Type of access (excluding none).

principal
required
any (Principal)
Metadata about a principal.

suppressEmail	
boolean
When true suppresses email notification

Responses
200 Confirmation that the request was applied.
400 The request parameters did not conform to expectations.
401 The API token is invalid or has expired.
403 The API token does not grant access to this resource.
404 The resource could not be located with the current API token.
429 The client has sent too many requests.

POST
/docs/{docId}/acl/permissions

Request samples
PayloadPython 3.7ShellGoogle Apps Script
Content type
application/json

Copy
Expand allCollapse all
{
"access": "readonly",
"principal": {
"type": "email",
"email": "example@domain.com"
},
"suppressEmail": true
}
Response samples
200400401403404429
Content type
application/json

Copy
{ }
Delete permission
Deletes an existing permission.

AUTHORIZATIONS:
Bearer
PATH PARAMETERS
docId
required
string
Example: AbCDeFGH
ID of the doc.

permissionId
required
string
Example: AbCDeFGH
ID of a permission on a doc.

Responses
200 Confirmation that the request was applied.
400 The request parameters did not conform to expectations.
401 The API token is invalid or has expired.
403 The API token does not grant access to this resource.
404 The resource could not be located with the current API token.
429 The client has sent too many requests.

DELETE
/docs/{docId}/acl/permissions/{permissionId}

Request samples
Python 3.7ShellGoogle Apps Script

Copy
import requests

headers = {'Authorization': 'Bearer <your API token>'}
uri = f'https://coda.io/apis/v1/docs/<doc ID>/acl/permissions/<permission ID>'
res = requests.delete(uri, headers=headers, json=payload)

# => Revoke access to the doc
Response samples
200400401403404429
Content type
application/json

Copy
{ }
Publishing
Coda docs can be published publicly and associated with categories to help the world discover them. This API lets you manage the publishing settings of your docs.

Get doc categories
Gets all available doc categories.

AUTHORIZATIONS:
Bearer
Responses
200 List of doc categories
401 The API token is invalid or has expired.
404 The resource could not be located with the current API token.
429 The client has sent too many requests.

GET
/categories

Request samples
Python 3.7ShellGoogle Apps Script

Copy
import requests

headers = {'Authorization': 'Bearer <your API token>'}
uri = f'https://coda.io/apis/v1/categories'
res = requests.get(uri, headers=headers).json()

print(f'Category count: {res["categories"].length}')
# => Category count: 10
Response samples
200401404429
Content type
application/json

Copy
Expand allCollapse all
{
"items": [
"Project Management"
]
}
Publish doc
Update publish settings for a doc.

AUTHORIZATIONS:
Bearer
PATH PARAMETERS
docId
required
string
Example: AbCDeFGH
ID of the doc.

REQUEST BODY SCHEMA: application/json
Parameters for changing publish settings.

slug	
string
Slug for the published doc.

discoverable	
boolean
If true, indicates that the doc is discoverable.

earnCredit	
boolean
If true, new users may be required to sign in to view content within this document. You will receive Coda credit for each user who signs up via your doc.

categoryNames	
Array of strings
The names of categories to apply to the document.

mode	
string (DocPublishMode)
Enum: "view" "play" "edit"
A time unit used as part of a duration value.

Responses
202 Confirmation that the publish request was accepted.
400 The request parameters did not conform to expectations.
401 The API token is invalid or has expired.
403 The API token does not grant access to this resource.
404 The resource could not be located with the current API token.
429 The client has sent too many requests.

PUT
/docs/{docId}/publish

Request samples
PayloadPython 3.7ShellGoogle Apps Script
Content type
application/json

Copy
Expand allCollapse all
{
"slug": "my-doc",
"discoverable": true,
"earnCredit": true,
"categoryNames": [
"Project management"
],
"mode": "view"
}
Response samples
202400401403404429
Content type
application/json

Copy
{
"requestId": "abc-123-def-456"
}
Unpublish doc
Unpublishes a doc.

AUTHORIZATIONS:
Bearer
PATH PARAMETERS
docId
required
string
Example: AbCDeFGH
ID of the doc.

Responses
200 A result indicating that the doc was unpublished.
401 The API token is invalid or has expired.
403 The API token does not grant access to this resource.
404 The resource could not be located with the current API token.
429 The client has sent too many requests.

DELETE
/docs/{docId}/publish

Request samples
Python 3.7ShellGoogle Apps Script

Copy
import requests

headers = {'Authorization': 'Bearer <your API token>'}
uri = f'https://coda.io/apis/v1/docs/<doc ID>/publish'
res = requests.unpublishDoc(uri, headers=headers).json()
Response samples
200401403404429
Content type
application/json

Copy
{ }
Pages
Pages in Coda offer canvases containing rich text, tables, controls, and other objects. At this time, this API lets you list and access pages in a doc.

List pages
Returns a list of pages in a Coda doc.

AUTHORIZATIONS:
Bearer
PATH PARAMETERS
docId
required
string
Example: AbCDeFGH
ID of the doc.

QUERY PARAMETERS
limit	
integer >= 1
Default: 25
Example: limit=10
Maximum number of results to return in this query.

pageToken	
string
Example: pageToken=eyJsaW1pd
An opaque token used to fetch the next page of results.

Responses
200 List of pages.
401 The API token is invalid or has expired.
403 The API token does not grant access to this resource.
404 The resource could not be located with the current API token.
429 The client has sent too many requests.

GET
/docs/{docId}/pages

Request samples
Python 3.7ShellGoogle Apps Script

Copy
import requests

headers = {'Authorization': 'Bearer <your API token>'}
uri = f'https://coda.io/apis/v1/docs/<doc ID>/pages'
res = requests.get(uri, headers=headers).json()

print(f'The name of the first page is {res["items"][0]["name"]}')
# => The name of the first page is Page 1
Response samples
200401403404429
Content type
application/json

Copy
Expand allCollapse all
{
"items": [
{}
],
"href": "https://coda.io/apis/v1/docs/AbCDeFGH/pages?limit=20",
"nextPageToken": "eyJsaW1pd",
"nextPageLink": "https://coda.io/apis/v1/docs/AbCDeFGH/pages?pageToken=eyJsaW1pd"
}
Get a page
Returns details about a page.

AUTHORIZATIONS:
Bearer
PATH PARAMETERS
docId
required
string
Example: AbCDeFGH
ID of the doc.

pageIdOrName
required
string
Example: canvas-IjkLmnO
ID or name of the page. Names are discouraged because they're easily prone to being changed by users. If you're using a name, be sure to URI-encode it. If you provide a name and there are multiple pages with the same name, an arbitrary one will be selected.

Responses
200 Info about a page.
401 The API token is invalid or has expired.
403 The API token does not grant access to this resource.
404 The resource could not be located with the current API token.
410 The resource has been deleted.
429 The client has sent too many requests.

GET
/docs/{docId}/pages/{pageIdOrName}

Request samples
Python 3.7ShellGoogle Apps Script

Copy
import requests

headers = {'Authorization': 'Bearer <your API token>'}
uri = f'https://coda.io/apis/v1/docs/<doc ID>/pages/<page ID>'
res = requests.get(uri, headers=headers).json()

print(f'The name of this page is {res["name"]}')
# => The name of this page is Page 1
Response samples
200401403404410429
Content type
application/json

Copy
Expand allCollapse all
{
"id": "canvas-IjkLmnO",
"type": "page",
"href": "https://coda.io/apis/v1/docs/AbCDeFGH/pages/canvas-IjkLmnO",
"browserLink": "https://coda.io/d/_dAbCDeFGH/Launch-Status_sumnO",
"name": "Launch Status",
"subtitle": "See the status of launch-related tasks.",
"icon": {
"name": "string",
"type": "string",
"browserLink": "https://cdn.coda.io/icons/png/color/icon-32.png"
},
"image": {
"browserLink": "https://codahosted.io/docs/nUYhlXysYO/blobs/bl-lYkYKNzkuT/3f879b9ecfa27448",
"type": "string",
"width": 800,
"height": 600
},
"parent": {
"id": "canvas-IjkLmnO",
"type": "page",
"href": "https://coda.io/apis/v1/docs/AbCDeFGH/pages/canvas-IjkLmnO",
"browserLink": "https://coda.io/d/_dAbCDeFGH/Launch-Status_sumnO",
"name": "Launch Status"
},
"children": [
{}
],
"authors": [
{}
],
"createdAt": "2018-04-11T00:18:57.946Z",
"createdBy": {
"@context": "http://schema.org/",
"@type": "ImageObject",
"additionalType": "string",
"name": "Alice Atkins",
"email": "alice@atkins.com"
},
"updatedAt": "2018-04-11T00:18:57.946Z",
"updatedBy": {
"@context": "http://schema.org/",
"@type": "ImageObject",
"additionalType": "string",
"name": "Alice Atkins",
"email": "alice@atkins.com"
}
}
Update a page
Update properties for a page.

AUTHORIZATIONS:
Bearer
PATH PARAMETERS
docId
required
string
Example: AbCDeFGH
ID of the doc.

pageIdOrName
required
string
Example: canvas-IjkLmnO
ID or name of the page. Names are discouraged because they're easily prone to being changed by users. If you're using a name, be sure to URI-encode it. If you provide a name and there are multiple pages with the same name, an arbitrary one will be selected.

REQUEST BODY SCHEMA: application/json
Parameters for updating a page.

name	
string
Name of the page.

subtitle	
string
Subtitle of the page.

iconName	
string
Name of the icon.

imageUrl	
string
Url of the image to use.

Responses
202 A result indicating that the update was queued for processing.
400 The request parameters did not conform to expectations.
401 The API token is invalid or has expired.
403 The API token does not grant access to this resource.
404 The resource could not be located with the current API token.
429 The client has sent too many requests.

PUT
/docs/{docId}/pages/{pageIdOrName}

Request samples
PayloadPython 3.7ShellGoogle Apps Script
Content type
application/json

Copy
{
"name": "Launch Status",
"subtitle": "See the status of launch-related tasks.",
"iconName": "rocket",
"imageUrl": "https://example.com/image.jpg"
}
Response samples
202400401403404429
Content type
application/json

Copy
{
"requestId": "abc-123-def-456",
"id": "canvas-tuVwxYz"
}
Automations
This API allows you to trigger automations.

Trigger automation
Triggers webhook-invoked automation

AUTHORIZATIONS:
Bearer
PATH PARAMETERS
docId
required
string
Example: AbCDeFGH
ID of the doc.

ruleId
required
string
Example: grid-auto-b3Jmey6jBS
ID of the automation rule.

REQUEST BODY SCHEMA: application/json
Payload for webhook

property name*
additional property
any
Responses
202 A result indicating that the automation trigger was queued for processing.
400 The request parameters did not conform to expectations.
401 The API token is invalid or has expired.
403 The API token does not grant access to this resource.
404 The resource could not be located with the current API token.
422 Unable to process the request.
429 The client has sent too many requests.

POST
/docs/{docId}/hooks/automation/{ruleId}

Request samples
Payload
Content type
application/json

Copy
{
"message": "The doc that brings words, data, & teams together."
}
Response samples
202400401403404422429
Content type
application/json

Copy
{
"requestId": "abc-123-def-456"
}
Tables
List tables
Returns a list of tables in a Coda doc.

AUTHORIZATIONS:
Bearer
PATH PARAMETERS
docId
required
string
Example: AbCDeFGH
ID of the doc.

QUERY PARAMETERS
limit	
integer >= 1
Default: 25
Example: limit=10
Maximum number of results to return in this query.

pageToken	
string
Example: pageToken=eyJsaW1pd
An opaque token used to fetch the next page of results.

sortBy	
string (SortBy)
Value: "name"
Example: sortBy=name
Determines how to sort the given objects.

tableTypes	
Array of strings (TableType)
Items Enum: "table" "view"
Example: tableTypes=table,view
Comma-separated list of table types to include in results. If omitted, includes both tables and views.

Responses
200 List of tables or views in a doc.
401 The API token is invalid or has expired.
403 The API token does not grant access to this resource.
404 The resource could not be located with the current API token.
429 The client has sent too many requests.

GET
/docs/{docId}/tables

Request samples
Python 3.7ShellGoogle Apps Script

Copy
import requests

headers = {'Authorization': 'Bearer <your API token>'}
uri = f'https://coda.io/apis/v1/docs/<doc ID>/tables'
res = requests.get(uri, headers=headers).json()

print(f'The name of the first table is {res["items"][0]["name"]}')
# => The name of the first table is To-do List
Response samples
200401403404429
Content type
application/json

Copy
Expand allCollapse all
{
"items": [
{}
],
"href": "https://coda.io/apis/v1/docs/AbCDeFGH/tables?limit=20",
"nextPageToken": "eyJsaW1pd",
"nextPageLink": "https://coda.io/apis/v1/docs/AbCDeFGH/tables?pageToken=eyJsaW1pd"
}
Get a table
Returns details about a specific table or view.

AUTHORIZATIONS:
Bearer
PATH PARAMETERS
docId
required
string
Example: AbCDeFGH
ID of the doc.

tableIdOrName
required
string
Example: grid-pqRst-U
ID or name of the table. Names are discouraged because they're easily prone to being changed by users. If you're using a name, be sure to URI-encode it.

QUERY PARAMETERS
useUpdatedTableLayouts	
boolean
Return "detail" and "form" for the layout field of detail and form layouts respectively (instead of "masterDetail" for both)

Responses
200 Info about a table.
401 The API token is invalid or has expired.
403 The API token does not grant access to this resource.
404 The resource could not be located with the current API token.
429 The client has sent too many requests.

GET
/docs/{docId}/tables/{tableIdOrName}

Request samples
Python 3.7ShellGoogle Apps Script

Copy
import requests

headers = {'Authorization': 'Bearer <your API token>'}
uri = f'https://coda.io/apis/v1/docs/<doc ID>/tables/<table ID>'
res = requests.get(uri, headers=headers).json()

print(f'Table {res["name"]} has {res["rowCount"]} rows')
# => Table To-do List has 2 rows
Response samples
200401403404429
Content type
application/json

Copy
Expand allCollapse all
{
"id": "grid-pqRst-U",
"type": "table",
"tableType": "table",
"href": "https://coda.io/apis/v1/docs/AbCDeFGH/tables/grid-pqRst-U",
"browserLink": "https://coda.io/d/_dAbCDeFGH/#Teams-and-Tasks_tpqRst-U",
"name": "Tasks",
"parent": {
"id": "canvas-IjkLmnO",
"type": "page",
"href": "https://coda.io/apis/v1/docs/AbCDeFGH/pages/canvas-IjkLmnO",
"browserLink": "https://coda.io/d/_dAbCDeFGH/Launch-Status_sumnO",
"name": "Launch Status"
},
"parentTable": {
"id": "grid-pqRst-U",
"type": "table",
"tableType": "table",
"href": "https://coda.io/apis/v1/docs/AbCDeFGH/tables/grid-pqRst-U",
"browserLink": "https://coda.io/d/_dAbCDeFGH/#Teams-and-Tasks_tpqRst-U",
"name": "Tasks",
"parent": {}
},
"displayColumn": {
"id": "c-tuVwxYz",
"type": "column",
"href": "https://coda.io/apis/v1/docs/AbCDeFGH/tables/grid-pqRst-U/columns/c-tuVwxYz"
},
"rowCount": 130,
"sorts": [
{}
],
"layout": "default",
"filter": {
"valid": true,
"isVolatile": false,
"hasUserFormula": false,
"hasTodayFormula": false,
"hasNowFormula": false
},
"createdAt": "2018-04-11T00:18:57.946Z",
"updatedAt": "2018-04-11T00:18:57.946Z"
}
Columns
While columns in Coda have user-friendly names, they also have immutable IDs that are used when reading and writing rows. These endpoints let you query the columns in a table and get basic information about them.

List columns
Returns a list of columns in a table.

AUTHORIZATIONS:
Bearer
PATH PARAMETERS
docId
required
string
Example: AbCDeFGH
ID of the doc.

tableIdOrName
required
string
Example: grid-pqRst-U
ID or name of the table. Names are discouraged because they're easily prone to being changed by users. If you're using a name, be sure to URI-encode it.

QUERY PARAMETERS
limit	
integer >= 1
Default: 25
Example: limit=10
Maximum number of results to return in this query.

pageToken	
string
Example: pageToken=eyJsaW1pd
An opaque token used to fetch the next page of results.

visibleOnly	
boolean
Example: visibleOnly=true
If true, returns only visible columns for the table. This parameter only applies to base tables, and not views.

Responses
200 List of columns in the table.
401 The API token is invalid or has expired.
403 The API token does not grant access to this resource.
404 The resource could not be located with the current API token.
429 The client has sent too many requests.

GET
/docs/{docId}/tables/{tableIdOrName}/columns

Request samples
Python 3.7ShellGoogle Apps Script

Copy
import requests

headers = {'Authorization': 'Bearer <your API token>'}
uri = f'https://coda.io/apis/v1/docs/<doc ID>/tables/<table ID>/columns'
res = requests.get(uri, headers=headers).json()

print(f'This table\'s columns: {", ".join(c["name"] for c in res["items"])}')
# => This table's columns: Task, Duration (hr), Duration (min)
Response samples
200401403404429
Content type
application/json

Copy
Expand allCollapse all
{
"items": [
{}
],
"href": "https://coda.io/apis/v1/docs/AbCDeFGH/tables/grid-pqRst-U/columns?limit=20",
"nextPageToken": "eyJsaW1pd",
"nextPageLink": "https://coda.io/apis/v1/docs/AbCDeFGH/tables/grid-pqRst-U/columns?pageToken=eyJsaW1pd"
}
Get a column
Returns details about a column in a table.

AUTHORIZATIONS:
Bearer
PATH PARAMETERS
docId
required
string
Example: AbCDeFGH
ID of the doc.

tableIdOrName
required
string
Example: grid-pqRst-U
ID or name of the table. Names are discouraged because they're easily prone to being changed by users. If you're using a name, be sure to URI-encode it.

columnIdOrName
required
string
Example: c-tuVwxYz
ID or name of the column. Names are discouraged because they're easily prone to being changed by users. If you're using a name, be sure to URI-encode it.

Responses
200 Info about a column.
401 The API token is invalid or has expired.
403 The API token does not grant access to this resource.
404 The resource could not be located with the current API token.
429 The client has sent too many requests.

GET
/docs/{docId}/tables/{tableIdOrName}/columns/{columnIdOrName}

Request samples
Python 3.7ShellGoogle Apps Script

Copy
import requests

headers = {'Authorization': 'Bearer <your API token>'}
uri = f'https://coda.io/apis/v1/docs/<doc ID>/tables/<table ID>/columns/<column ID>'
res = requests.get(uri, headers=headers).json()

is_default = res.get("display", False)
print(f'Column {res["name"]} {"is" if is_default else "is not"} the display column')
# => Column Task is the display column
Response samples
200401403404429
Content type
application/json

Copy
Expand allCollapse all
{
"id": "c-tuVwxYz",
"type": "column",
"href": "https://coda.io/apis/v1/docs/AbCDeFGH/tables/grid-pqRst-U/columns/c-tuVwxYz",
"name": "Completed",
"display": true,
"calculated": true,
"formula": "thisRow.Created()",
"defaultValue": "Test",
"format": {
"type": "text",
"isArray": true,
"label": "Click me",
"disableIf": "False()",
"action": "OpenUrl(\"www.google.com\")"
},
"parent": {
"id": "grid-pqRst-U",
"type": "table",
"tableType": "table",
"href": "https://coda.io/apis/v1/docs/AbCDeFGH/tables/grid-pqRst-U",
"browserLink": "https://coda.io/d/_dAbCDeFGH/#Teams-and-Tasks_tpqRst-U",
"name": "Tasks",
"parent": {}
}
}
Rows
You'll likely use this part of the API the most. These endpoints let you retrieve row data from tables in Coda as well as create, upsert, update, and delete them. Most of these endpoints work for both base tables and views, but for inserting/upsering rows, you must use a base table.

List table rows
Returns a list of rows in a table.

Value results
The valueFormat parameter dictates in what format the API should return values for individual cells.

simple (default): Returns cell values as the following JSON values: string, number, or boolean. Array values (like multiselects) are returned as comma-delimited strings.
simpleWithArrays: Singleton values are returned as simple. Array values are returned as JSON arrays and the values within are simple values (including nested arrays).
rich: If applicable, returns many values with further encoding, allowing API users to have lossless access to data in Coda.
For text values, returns data in Markdown syntax. If the text field is simple text (e.g. has no formatting), the field will be fully escaped with triple-ticks. E.g ```This is plain text```
For currency, lookup, image, person and hyperlink values, the value will be encoded in JSON-LD format.
  // Currency
  {
    "@context": "http://schema.org",
    "@type": "MonetaryAmount",
    "currency": "USD",
    "amount": 42.42
  }

  // Lookup
  {
    "@context": "http://schema.org",
    "@type": "StructuredValue",
    "additionalType": "row",
    "name": "Row Name",
    "rowId": "i-123456789",
    "tableId": "grid-123456789",
    "tableUrl": "https://coda.io/d/_d123456789/grid-123456789",
    "url": "https://coda.io/d/_d123456789/grid-123456789#_r42",
  }

  // Hyperlink
  {
    "@context": "http://schema.org",
    "@type": "WebPage",
    "name": "Coda",
    "url": "https://coda.io"
  }

  // Image
  {
    "@context": "http://schema.org",
    "@type": "ImageObject",
    "name": "Coda logo",
    "url": "https://coda.io/logo.jpg"
  }

  // People
  {
    "@context": "http://schema.org",
    "@type": "Person",
    "name": "Art Vandalay",
    "email": "art@vandalayindustries.com"
  }
AUTHORIZATIONS:
Bearer
PATH PARAMETERS
docId
required
string
Example: AbCDeFGH
ID of the doc.

tableIdOrName
required
string
Example: grid-pqRst-U
ID or name of the table. Names are discouraged because they're easily prone to being changed by users. If you're using a name, be sure to URI-encode it.

QUERY PARAMETERS
query	
string
Example: query=c-tuVwxYz:"Apple"
Query used to filter returned rows, specified as <column_id_or_name>:<value>. If you'd like to use a column name instead of an ID, you must quote it (e.g., "My Column":123). Also note that value is a JSON value; if you'd like to use a string, you must surround it in quotes (e.g., "groceries").

sortBy	
string (RowsSortBy)
Enum: "createdAt" "natural" "updatedAt"
Specifies the sort order of the rows returned. If left unspecified, rows are returned by creation time ascending. "UpdatedAt" sort ordering is the order of rows based upon when they were last updated. This does not include updates to calculated values. "Natural" sort ordering is the order that the rows appear in the table view in the application. This ordering is only meaningfully defined for rows that are visible (unfiltered). Because of this, using this sort order will imply visibleOnly=true, that is, to only return visible rows. If you pass sortBy=natural and visibleOnly=false explicitly, this will result in a Bad Request error as this condition cannot be satisfied.

useColumnNames	
boolean
Example: useColumnNames=true
Use column names instead of column IDs in the returned output. This is generally discouraged as it is fragile. If columns are renamed, code using original names may throw errors.

valueFormat	
string (ValueFormat)
Enum: "simple" "simpleWithArrays" "rich"
The format that cell values are returned as.

visibleOnly	
boolean
Example: visibleOnly=true
If true, returns only visible rows and columns for the table.

limit	
integer >= 1
Default: 25
Example: limit=10
Maximum number of results to return in this query.

pageToken	
string
Example: pageToken=eyJsaW1pd
An opaque token used to fetch the next page of results.

syncToken	
string
Example: syncToken=eyJsaW1pd
An opaque token returned from a previous call that can be used to return results that are relevant to the query since the call where the syncToken was generated.

Responses
200 List of rows in the table.
400 The request parameters did not conform to expectations.
401 The API token is invalid or has expired.
403 The API token does not grant access to this resource.
404 The resource could not be located with the current API token.
429 The client has sent too many requests.

GET
/docs/{docId}/tables/{tableIdOrName}/rows

Request samples
Python 3.7ShellGoogle Apps Script

Copy
import requests

headers = {'Authorization': 'Bearer <your API token>'}
uri = f'https://coda.io/apis/v1/docs/<doc ID>/tables/<table ID>/rows'
params = {
  'query': '<column ID>:"Work out"',
}
req = requests.get(uri, headers=headers, params=params)
req.raise_for_status() # Throw if there was an error.
res = req.json()

print(f'Matching rows: {len(res["items"])}')
# => Matching rows: 1
Response samples
200400401403404429
Content type
application/json

Copy
Expand allCollapse all
{
"items": [
{}
],
"href": "https://coda.io/apis/v1/docs/AbCDeFGH/tables/grid-pqRst-U/rows?limit=20",
"nextPageToken": "eyJsaW1pd",
"nextPageLink": "https://coda.io/apis/v1/docs/AbCDeFGH/tables/grid-pqRst-U/rows?pageToken=eyJsaW1pd",
"nextSyncToken": "eyJsaW1pd"
}
Insert/upsert rows
Inserts rows into a table, optionally updating existing rows if any upsert key columns are provided. This endpoint will always return a 202, so long as the doc and table exist and are accessible (and the update is structurally valid). Row inserts/upserts are generally processed within several seconds. Note: this endpoint only works for base tables, not views. When upserting, if multiple rows match the specified key column(s), they will all be updated with the specified value.

AUTHORIZATIONS:
Bearer
PATH PARAMETERS
docId
required
string
Example: AbCDeFGH
ID of the doc.

tableIdOrName
required
string
Example: grid-pqRst-U
ID or name of the table. Names are discouraged because they're easily prone to being changed by users. If you're using a name, be sure to URI-encode it.

QUERY PARAMETERS
disableParsing	
boolean
Example: disableParsing=true
If true, the API will not attempt to parse the data in any way.

REQUEST BODY SCHEMA: application/json
Rows to insert or upsert.

rows
required
Array of objects (RowEdit)
keyColumns	
Array of strings
Optional column IDs, URLs, or names (fragile and discouraged), specifying columns to be used as upsert keys.

Responses
202 A result indicating that the upsert was queued for processing.
400 The request parameters did not conform to expectations.
401 The API token is invalid or has expired.
403 The API token does not grant access to this resource.
404 The resource could not be located with the current API token.
429 The client has sent too many requests.

POST
/docs/{docId}/tables/{tableIdOrName}/rows

Request samples
PayloadPython 3.7ShellGoogle Apps Script
Content type
application/json

Copy
Expand allCollapse all
{
"rows": [
{}
],
"keyColumns": [
"c-bCdeFgh"
]
}
Response samples
202400401403404429
Content type
application/json

Copy
Expand allCollapse all
{
"requestId": "abc-123-def-456",
"addedRowIds": [
"i-bCdeFgh",
"i-CdEfgHi"
]
}
Delete multiple rows
Deletes the specified rows from the table or view. This endpoint will always return a 202. Row deletions are generally processed within several seconds.

AUTHORIZATIONS:
Bearer
PATH PARAMETERS
docId
required
string
Example: AbCDeFGH
ID of the doc.

tableIdOrName
required
string
Example: grid-pqRst-U
ID or name of the table. Names are discouraged because they're easily prone to being changed by users. If you're using a name, be sure to URI-encode it.

REQUEST BODY SCHEMA: application/json
Rows to delete.

rowIds
required
Array of strings
Row IDs to delete.

Responses
202 A result indicating that the delete was queued for processing.
400 The request parameters did not conform to expectations.
401 The API token is invalid or has expired.
403 The API token does not grant access to this resource.
404 The resource could not be located with the current API token.
429 The client has sent too many requests.

DELETE
/docs/{docId}/tables/{tableIdOrName}/rows

Request samples
PayloadPython 3.7ShellGoogle Apps Script
Content type
application/json

Copy
Expand allCollapse all
{
"rowIds": [
"i-bCdeFgh",
"i-CdEfgHi"
]
}
Response samples
202400401403404429
Content type
application/json

Copy
Expand allCollapse all
{
"requestId": "abc-123-def-456",
"rowIds": [
"i-bCdeFgh",
"i-CdEfgHi"
]
}
Get a row
Returns details about a row in a table.

AUTHORIZATIONS:
Bearer
PATH PARAMETERS
docId
required
string
Example: AbCDeFGH
ID of the doc.

tableIdOrName
required
string
Example: grid-pqRst-U
ID or name of the table. Names are discouraged because they're easily prone to being changed by users. If you're using a name, be sure to URI-encode it.

rowIdOrName
required
string
Example: i-tuVwxYz
ID or name of the row. Names are discouraged because they're easily prone to being changed by users. If you're using a name, be sure to URI-encode it. If there are multiple rows with the same value in the identifying column, an arbitrary one will be selected.

QUERY PARAMETERS
useColumnNames	
boolean
Example: useColumnNames=true
Use column names instead of column IDs in the returned output. This is generally discouraged as it is fragile. If columns are renamed, code using original names may throw errors.

valueFormat	
string (ValueFormat)
Enum: "simple" "simpleWithArrays" "rich"
The format that cell values are returned as.

Responses
200 Info about a row. If this row was retrieved by name, only one matching row will be returned, with no guarantees as to which one it is.
401 The API token is invalid or has expired.
403 The API token does not grant access to this resource.
404 The resource could not be located with the current API token.
429 The client has sent too many requests.

GET
/docs/{docId}/tables/{tableIdOrName}/rows/{rowIdOrName}

Request samples
Python 3.7ShellGoogle Apps Script

Copy
import requests

headers = {'Authorization': 'Bearer <your API token>'}
uri = f'https://coda.io/apis/v1/docs/<doc ID>/tables/<table ID>/rows/<row ID>'
req = requests.get(uri, headers=headers)
req.raise_for_status() # Throw if there was an error.
res = req.json()

print(f'Row values are: {", ".join(str(v) for v in res["values"].values())}')
# => Row values are: Get groceries, 1, 60
Response samples
200401403404429
Content type
application/json

Copy
Expand allCollapse all
{
"id": "i-tuVwxYz",
"type": "row",
"href": "https://coda.io/apis/v1/docs/AbCDeFGH/tables/grid-pqRst-U/rows/i-RstUv-W",
"name": "Apple",
"index": 7,
"browserLink": "https://coda.io/d/_dAbCDeFGH#Teams-and-Tasks_tpqRst-U/_rui-tuVwxYz",
"createdAt": "2018-04-11T00:18:57.946Z",
"updatedAt": "2018-04-11T00:18:57.946Z",
"values": {
"c-tuVwxYz": "Apple",
"c-bCdeFgh": []
},
"parent": {
"id": "grid-pqRst-U",
"type": "table",
"tableType": "table",
"href": "https://coda.io/apis/v1/docs/AbCDeFGH/tables/grid-pqRst-U",
"browserLink": "https://coda.io/d/_dAbCDeFGH/#Teams-and-Tasks_tpqRst-U",
"name": "Tasks",
"parent": {}
}
}
Update row
Updates the specified row in the table. This endpoint will always return a 202, so long as the row exists and is accessible (and the update is structurally valid). Row updates are generally processed within several seconds. When updating using a name as opposed to an ID, an arbitrary row will be affected.

AUTHORIZATIONS:
Bearer
PATH PARAMETERS
docId
required
string
Example: AbCDeFGH
ID of the doc.

tableIdOrName
required
string
Example: grid-pqRst-U
ID or name of the table. Names are discouraged because they're easily prone to being changed by users. If you're using a name, be sure to URI-encode it.

rowIdOrName
required
string
Example: i-tuVwxYz
ID or name of the row. Names are discouraged because they're easily prone to being changed by users. If you're using a name, be sure to URI-encode it. If there are multiple rows with the same value in the identifying column, an arbitrary one will be selected.

QUERY PARAMETERS
disableParsing	
boolean
Example: disableParsing=true
If true, the API will not attempt to parse the data in any way.

REQUEST BODY SCHEMA: application/json
Row update.

row
required
object (RowEdit)
An edit made to a particular row.

Responses
202 A result indicating that the update was queued for processing.
400 The request parameters did not conform to expectations.
401 The API token is invalid or has expired.
403 The API token does not grant access to this resource.
404 The resource could not be located with the current API token.
429 The client has sent too many requests.

PUT
/docs/{docId}/tables/{tableIdOrName}/rows/{rowIdOrName}

Request samples
PayloadPython 3.7ShellGoogle Apps Script
Content type
application/json

Copy
Expand allCollapse all
{
"row": {
"cells": []
}
}
Response samples
202400401403404429
Content type
application/json

Copy
{
"requestId": "abc-123-def-456",
"id": "i-tuVwxYz"
}
Delete row
Deletes the specified row from the table or view. This endpoint will always return a 202, so long as the row exists and is accessible (and the update is structurally valid). Row deletions are generally processed within several seconds. When deleting using a name as opposed to an ID, an arbitrary row will be removed.

AUTHORIZATIONS:
Bearer
PATH PARAMETERS
docId
required
string
Example: AbCDeFGH
ID of the doc.

tableIdOrName
required
string
Example: grid-pqRst-U
ID or name of the table. Names are discouraged because they're easily prone to being changed by users. If you're using a name, be sure to URI-encode it.

rowIdOrName
required
string
Example: i-tuVwxYz
ID or name of the row. Names are discouraged because they're easily prone to being changed by users. If you're using a name, be sure to URI-encode it. If there are multiple rows with the same value in the identifying column, an arbitrary one will be selected.

Responses
202 A result indicating that the deletion was queued for processing.
401 The API token is invalid or has expired.
403 The API token does not grant access to this resource.
404 The resource could not be located with the current API token.
429 The client has sent too many requests.

DELETE
/docs/{docId}/tables/{tableIdOrName}/rows/{rowIdOrName}

Request samples
Python 3.7ShellGoogle Apps Script

Copy
import requests

headers = {'Authorization': 'Bearer <your API token>'}
uri = f'https://coda.io/apis/v1/docs/<doc ID>/tables/<table ID>/rows/<row ID>'
req = requests.delete(uri, headers=headers)
req.raise_for_status() # Throw if there was an error.
res = req.json()

print(f'Deleted row {res["id"]}')
# => Deleted row <row ID>
Response samples
202401403404429
Content type
application/json

Copy
{
"requestId": "abc-123-def-456",
"id": "i-tuVwxYz"
}
Push a button
Pushes a button on a row in a table. Authorization note: This action is available to API tokens that are authorized to write to the table. However, the underlying button can perform any action on the document, including writing to other tables and performing Pack actions.

AUTHORIZATIONS:
Bearer
PATH PARAMETERS
docId
required
string
Example: AbCDeFGH
ID of the doc.

tableIdOrName
required
string
Example: grid-pqRst-U
ID or name of the table. Names are discouraged because they're easily prone to being changed by users. If you're using a name, be sure to URI-encode it.

rowIdOrName
required
string
Example: i-tuVwxYz
ID or name of the row. Names are discouraged because they're easily prone to being changed by users. If you're using a name, be sure to URI-encode it. If there are multiple rows with the same value in the identifying column, an arbitrary one will be selected.

columnIdOrName
required
string
Example: c-tuVwxYz
ID or name of the column. Names are discouraged because they're easily prone to being changed by users. If you're using a name, be sure to URI-encode it.

Responses
202 A result indicating that the push button action was queued for processing.
400 The request parameters did not conform to expectations.
401 The API token is invalid or has expired.
403 The API token does not grant access to this resource.
404 The resource could not be located with the current API token.
429 The client has sent too many requests.

POST
/docs/{docId}/tables/{tableIdOrName}/rows/{rowIdOrName}/buttons/{columnIdOrName}

Request samples
Python 3.7ShellGoogle Apps Script

Copy
import requests

headers = {'Authorization': 'Bearer <your API token>'}
uri = f'https://coda.io/apis/v1/docs/<doc ID>/tables/<table ID>/rows/<row ID>/buttons/<column ID>'
req = requests.post(uri, headers=headers)
req.raise_for_status() # Throw if there was an error.
res = req.json()
print(f'Pushed button')
# => Pushed button
Response samples
202400401403404429
Content type
application/json

Copy
{
"requestId": "abc-123-def-456",
"rowId": "i-tuVwxYz",
"columnId": "i-tuVwxYz"
}
Formulas
Formulas can be great for performing one-off computations, or used with tables and other formulas to compute a single value. With this API, you can discover formulas in a doc and obtain computed results.

List formulas
Returns a list of named formulas in a Coda doc.

AUTHORIZATIONS:
Bearer
PATH PARAMETERS
docId
required
string
Example: AbCDeFGH
ID of the doc.

QUERY PARAMETERS
limit	
integer >= 1
Default: 25
Example: limit=10
Maximum number of results to return in this query.

pageToken	
string
Example: pageToken=eyJsaW1pd
An opaque token used to fetch the next page of results.

sortBy	
string (SortBy)
Value: "name"
Example: sortBy=name
Determines how to sort the given objects.

Responses
200 List of formulas that have names in a doc.
401 The API token is invalid or has expired.
403 The API token does not grant access to this resource.
404 The resource could not be located with the current API token.
429 The client has sent too many requests.

GET
/docs/{docId}/formulas

Request samples
Python 3.7ShellGoogle Apps Script

Copy
import requests

headers = {'Authorization': 'Bearer <your API token>'}
uri = f'https://coda.io/apis/v1/docs/<doc ID>/formulas'
res = requests.get(uri, headers=headers).json()

print(f'This doc\'s formulas are: {", ".join(i["name"] for i in res["items"])}')
# => This doc's formulas are: Total Duration, Time Now
Response samples
200401403404429
Content type
application/json

Copy
Expand allCollapse all
{
"items": [
{}
],
"href": "https://coda.io/apis/v1/docs/AbCDeFGH/formulas?limit=20",
"nextPageToken": "eyJsaW1pd",
"nextPageLink": "https://coda.io/apis/v1/docs/AbCDeFGH/formulas?pageToken=eyJsaW1pd"
}
Get a formula
Returns info on a formula.

AUTHORIZATIONS:
Bearer
PATH PARAMETERS
docId
required
string
Example: AbCDeFGH
ID of the doc.

formulaIdOrName
required
string
Example: f-fgHijkLm
ID or name of the formula. Names are discouraged because they're easily prone to being changed by users. If you're using a name, be sure to URI-encode it.

Responses
200 Details about a formula.
401 The API token is invalid or has expired.
403 The API token does not grant access to this resource.
404 The resource could not be located with the current API token.
429 The client has sent too many requests.

GET
/docs/{docId}/formulas/{formulaIdOrName}

Request samples
Python 3.7ShellGoogle Apps Script

Copy
import requests

headers = {'Authorization': 'Bearer <your API token>'}
uri = f'https://coda.io/apis/v1/docs/<doc ID>/formulas/<formula ID>'
res = requests.get(uri, headers=headers).json()

print(f'It will take {res["value"]} hours to complete everything')
# => It will take 3 hours to complete everything
Response samples
200401403404429
Content type
application/json

Copy
Expand allCollapse all
{
"id": "f-fgHijkLm",
"type": "formula",
"href": "https://coda.io/apis/v1/docs/AbCDeFGH/formulas/f-fgHijkLm",
"name": "Sum of expenses",
"parent": {
"id": "canvas-IjkLmnO",
"type": "page",
"href": "https://coda.io/apis/v1/docs/AbCDeFGH/pages/canvas-IjkLmnO",
"browserLink": "https://coda.io/d/_dAbCDeFGH/Launch-Status_sumnO",
"name": "Launch Status"
},
"value": "$12.34"
}
Controls
Controls provide a user-friendly way to input a value that can affect other parts of the doc. This API lets you list controls and get their current values.

List controls
Returns a list of controls in a Coda doc.

AUTHORIZATIONS:
Bearer
PATH PARAMETERS
docId
required
string
Example: AbCDeFGH
ID of the doc.

QUERY PARAMETERS
limit	
integer >= 1
Default: 25
Example: limit=10
Maximum number of results to return in this query.

pageToken	
string
Example: pageToken=eyJsaW1pd
An opaque token used to fetch the next page of results.

sortBy	
string (SortBy)
Value: "name"
Example: sortBy=name
Determines how to sort the given objects.

Responses
200 List of controls in a doc.
401 The API token is invalid or has expired.
403 The API token does not grant access to this resource.
404 The resource could not be located with the current API token.
429 The client has sent too many requests.

GET
/docs/{docId}/controls

Request samples
Python 3.7ShellGoogle Apps Script

Copy
import requests

headers = {'Authorization': 'Bearer <your API token>'}
uri = f'https://coda.io/apis/v1/docs/<doc ID>/controls'
res = requests.get(uri, headers=headers).json()

print(f'Controls here are: {", ".join(i["name"] for i in res["items"])}')
# => Controls here are: Control 1, Control 2
Response samples
200401403404429
Content type
application/json

Copy
Expand allCollapse all
{
"items": [
{}
],
"href": "https://coda.io/apis/v1/docs/AbCDeFGH/controls?limit=20",
"nextPageToken": "eyJsaW1pd",
"nextPageLink": "https://coda.io/apis/v1/docs/AbCDeFGH/controls?pageToken=eyJsaW1pd"
}
Get a control
Returns info on a control.

AUTHORIZATIONS:
Bearer
PATH PARAMETERS
docId
required
string
Example: AbCDeFGH
ID of the doc.

controlIdOrName
required
string
Example: ctrl-cDefGhij
ID or name of the control. Names are discouraged because they're easily prone to being changed by users. If you're using a name, be sure to URI-encode it.

Responses
200 Details about a control.
401 The API token is invalid or has expired.
403 The API token does not grant access to this resource.
404 The resource could not be located with the current API token.
429 The client has sent too many requests.

GET
/docs/{docId}/controls/{controlIdOrName}

Request samples
Python 3.7ShellGoogle Apps Script

Copy
import requests

headers = {'Authorization': 'Bearer <your API token>'}
uri = f'https://coda.io/apis/v1/docs/<doc ID>/controls/<control ID>'
res = requests.get(uri, headers=headers).json()

print(f'The control is a {res["controlType"]}')
# => The control is a slider
Response samples
200401403404429
Content type
application/json

Copy
Expand allCollapse all
{
"id": "ctrl-cDefGhij",
"type": "control",
"href": "https://coda.io/apis/v1/docs/AbCDeFGH/controls/ctrl-cDefGhij",
"name": "Cost",
"parent": {
"id": "canvas-IjkLmnO",
"type": "page",
"href": "https://coda.io/apis/v1/docs/AbCDeFGH/pages/canvas-IjkLmnO",
"browserLink": "https://coda.io/d/_dAbCDeFGH/Launch-Status_sumnO",
"name": "Launch Status"
},
"controlType": "slider",
"value": "$12.34"
}
Account
At this time, the API exposes some limited information about your account. However, /whoami is a good endpoint to hit to verify that you're hitting the API correctly and that your token is working as expected.

Get user info
Returns basic info about the current user.

AUTHORIZATIONS:
Bearer
Responses
200 Info about the current user.
401 The API token is invalid or has expired.
429 The client has sent too many requests.

GET
/whoami

Request samples
Python 3.7ShellGoogle Apps Script

Copy
import requests

headers = {'Authorization': 'Bearer <your API token>'}
uri = 'https://coda.io/apis/v1/whoami'
res = requests.get(uri, headers=headers).json()

print(f'Your name is {res["name"]}')
# => Your name is John Doe
Response samples
200401429
Content type
application/json

Copy
Expand allCollapse all
{
"name": "John Doe",
"loginId": "user@example.com",
"type": "user",
"pictureLink": "https://cdn.coda.io/avatars/default_avatar.png",
"scoped": false,
"tokenName": "My API token",
"href": "https://coda.io/apis/v1beta/whoami",
"workspace": {
"id": "ws-1Ab234",
"type": "workspace",
"organizationId": "org-2Bc456",
"browserLink": "https://coda.io/docs?workspaceId=ws-1Ab234",
"name": "My workspace"
}
}
Analytics
This API offers analytics data for your docs and Packs over time.

List doc analytics
Returns analytics data for available docs per day.

AUTHORIZATIONS:
Bearer
QUERY PARAMETERS
docIds	
Array of strings
List of docIds to fetch.

workspaceId	
string
Example: workspaceId=ws-1Ab234
ID of the workspace.

query	
string
Example: query=Supercalifragilisticexpialidocious
Search term used to filter down results.

isPublished	
boolean
Limit results to only published items.

sinceDate	
string <date>
Example: sinceDate=2020-08-01
Limit results to activity on or after this date.

untilDate	
string <date>
Example: untilDate=2020-08-05
Limit results to activity on or before this date.

scale	
string (AnalyticsScale)
Enum: "daily" "cumulative"
Example: scale=daily
Quantization period over which to view analytics. Defaults to daily.

pageToken	
string
Example: pageToken=eyJsaW1pd
An opaque token used to fetch the next page of results.

orderBy	
string (DocAnalyticsOrderBy)
Enum: "date" "docId" "title" "createdAt" "publishedAt" "likes" "copies" "views" "sessionsDesktop" "sessionsMobile" "sessionsOther" "totalSessions"
Use this parameter to order the doc analytics returned.

direction	
string (SortDirection)
Enum: "ascending" "descending"
Direction to sort results in.

limit	
integer [ 1 .. 5000 ]
Default: 1000
Example: limit=10
Maximum number of results to return in this query.

Responses
200 List of Coda doc analytics.
401 The API token is invalid or has expired.
429 The client has sent too many requests.

GET
/analytics/docs

Request samples
Python 3.7Shell

Copy
import requests

headers = {'Authorization': 'Bearer <your API token>'}
uri = 'https://coda.io/apis/v1/analytics/docs'
params = {
  'limit': 10,
}
res = requests.get(uri, headers=headers, params=params).json()

print(f'First doc is: {res["items"][0]["doc"]["title"]}')
# => First doc is: New Document
Response samples
200401429
Content type
application/json

Copy
Expand allCollapse all
{
"items": [
{}
],
"nextPageToken": "eyJsaW1pd",
"nextPageLink": "https://coda.io/apis/v1/analytics/docs?pageToken=xyz"
}
List page analytics
Returns analytics data for a given doc within the day. This method will return a 401 if the given doc is not in a Team or Enterprise workspace.

AUTHORIZATIONS:
Bearer
PATH PARAMETERS
docId
required
string
Example: AbCDeFGH
ID of the doc.

QUERY PARAMETERS
sinceDate	
string <date>
Example: sinceDate=2020-08-01
Limit results to activity on or after this date.

untilDate	
string <date>
Example: untilDate=2020-08-05
Limit results to activity on or before this date.

pageToken	
string
Example: pageToken=eyJsaW1pd
An opaque token used to fetch the next page of results.

limit	
integer [ 1 .. 5000 ]
Default: 1000
Example: limit=10
Maximum number of results to return in this query.

Responses
200 List of page analytics for the given Coda doc.
401 The API token is invalid or has expired.
429 The client has sent too many requests.

GET
/analytics/docs/{docId}/pages

Request samples
Python 3.7Shell

Copy
import requests

headers = {'Authorization': 'Bearer <your API token>'}
uri = 'https://coda.io/apis/v1/analytics/docs/abcdefghi/pages'
params = {
  'limit': 10,
}
res = requests.get(uri, headers=headers, params=params).json()

print(f'First page is: {res["items"][0]["page"]["name"]}')
# => First page is: My Page
Response samples
200401429
Content type
application/json

Copy
Expand allCollapse all
{
"items": [
{}
],
"nextPageToken": "eyJsaW1pd",
"nextPageLink": "https://coda.io/apis/v1/analytics/docs/DOC_ID/pages?pageToken=xyz"
}
Get doc analytics summary
Returns summarized analytics data for available docs.

AUTHORIZATIONS:
Bearer
QUERY PARAMETERS
isPublished	
boolean
Limit results to only published items.

sinceDate	
string <date>
Example: sinceDate=2020-08-01
Limit results to activity on or after this date.

untilDate	
string <date>
Example: untilDate=2020-08-05
Limit results to activity on or before this date.

workspaceId	
string
Example: workspaceId=ws-1Ab234
ID of the workspace.

Responses
200 Response of Coda doc summary analytics.
401 The API token is invalid or has expired.
429 The client has sent too many requests.

GET
/analytics/docs/summary

Response samples
200401429
Content type
application/json

Copy
{
"totalSessions": 1337
}
List Pack analytics
Returns analytics data for Packs the user can edit.

AUTHORIZATIONS:
Bearer
QUERY PARAMETERS
packIds	
Array of integers
Which Pack IDs to fetch.

workspaceId	
string
Example: workspaceId=ws-1Ab234
ID of the workspace.

query	
string
Example: query=Supercalifragilisticexpialidocious
Search term used to filter down results.

sinceDate	
string <date>
Example: sinceDate=2020-08-01
Limit results to activity on or after this date.

untilDate	
string <date>
Example: untilDate=2020-08-05
Limit results to activity on or before this date.

scale	
string (AnalyticsScale)
Enum: "daily" "cumulative"
Example: scale=daily
Quantization period over which to view analytics. Defaults to daily.

pageToken	
string
Example: pageToken=eyJsaW1pd
An opaque token used to fetch the next page of results.

orderBy	
string (PackAnalyticsOrderBy)
Enum: "date" "packId" "name" "createdAt" "docInstalls" "workspaceInstalls" "numFormulaInvocations" "numActionInvocations" "numSyncInvocations" "numMetadataInvocations" "docsActivelyUsing" "docsActivelyUsing7Day" "docsActivelyUsing30Day" "docsActivelyUsing90Day" "docsActivelyUsingAllTime" "workspacesActivelyUsing" "workspacesActivelyUsing7Day" "workspacesActivelyUsing30Day" "workspacesActivelyUsing90Day" "workspacesActivelyUsingAllTime" "workspacesWithActiveSubscriptions" "workspacesWithSuccessfulTrials" "revenueUsd"
Use this parameter to order the Pack analytics returned.

direction	
string (SortDirection)
Enum: "ascending" "descending"
Direction to sort results in.

isPublished	
boolean
Limit results to only published items. If false or unspecified, returns all items including published ones.

limit	
integer [ 1 .. 5000 ]
Default: 1000
Example: limit=10
Maximum number of results to return in this query.

Responses
200 Response of Coda Pack analytics.
401 The API token is invalid or has expired.
429 The client has sent too many requests.

GET
/analytics/packs

Request samples
Python 3.7Shell

Copy
import requests

headers = {'Authorization': 'Bearer <your API token>'}
uri = 'https://coda.io/apis/v1/analytics/packs'
params = {
  'limit': 10,
}
res = requests.get(uri, headers=headers, params=params).json()

print(f'First Pack is: {res["items"][0]["pack"]["name"]}')
# => First Pack is: New Pack
Response samples
200401429
Content type
application/json

Copy
Expand allCollapse all
{
"items": [
{}
],
"nextPageToken": "eyJsaW1pd",
"nextPageLink": "https://coda.io/apis/v1/analytics/packs?pageToken=xyz"
}
Get Pack analytics summary
Returns summarized analytics data for Packs the user can edit.

AUTHORIZATIONS:
Bearer
QUERY PARAMETERS
packIds	
Array of integers
Which Pack IDs to fetch.

workspaceId	
string
Example: workspaceId=ws-1Ab234
ID of the workspace.

isPublished	
boolean
Limit results to only published items. If false or unspecified, returns all items including published ones.

sinceDate	
string <date>
Example: sinceDate=2020-08-01
Limit results to activity on or after this date.

untilDate	
string <date>
Example: untilDate=2020-08-05
Limit results to activity on or before this date.

Responses
200 Response of Coda Pack summary analytics.
401 The API token is invalid or has expired.
429 The client has sent too many requests.

GET
/analytics/packs/summary

Response samples
200401429
Content type
application/json

Copy
{
"totalDocInstalls": 0,
"totalWorkspaceInstalls": 0,
"totalInvocations": 0
}
List Pack formula analytics
Returns analytics data for Pack formulas.

AUTHORIZATIONS:
Bearer
PATH PARAMETERS
packId
required
integer >= 1
Example: 123
ID of a Pack

QUERY PARAMETERS
packFormulaNames	
Array of strings
Example: packFormulaNames=SquareRoot,CubeRoot
A list of Pack formula names (case-sensitive) for which to retrieve analytics.

packFormulaTypes	
Array of strings (PackFormulaType)
Items Enum: "action" "formula" "sync" "metadata"
Example: packFormulaTypes=action,formula
A list of Pack formula types corresponding to the packFormulaNames. If specified, this must have the same length as packFormulaNames.

sinceDate	
string <date>
Example: sinceDate=2020-08-01
Limit results to activity on or after this date.

untilDate	
string <date>
Example: untilDate=2020-08-05
Limit results to activity on or before this date.

scale	
string (AnalyticsScale)
Enum: "daily" "cumulative"
Example: scale=daily
Quantization period over which to view analytics. Defaults to daily.

pageToken	
string
Example: pageToken=eyJsaW1pd
An opaque token used to fetch the next page of results.

orderBy	
string (PackFormulaAnalyticsOrderBy)
Enum: "date" "formulaName" "formulaType" "formulaInvocations" "medianLatencyMs" "medianResponseSizeBytes" "errors" "docsActivelyUsing" "docsActivelyUsing7Day" "docsActivelyUsing30Day" "docsActivelyUsing90Day" "docsActivelyUsingAllTime" "workspacesActivelyUsing" "workspacesActivelyUsing7Day" "workspacesActivelyUsing30Day" "workspacesActivelyUsing90Day" "workspacesActivelyUsingAllTime"
Use this parameter to order the Pack formula analytics returned.

direction	
string (SortDirection)
Enum: "ascending" "descending"
Direction to sort results in.

limit	
integer [ 1 .. 5000 ]
Default: 1000
Example: limit=10
Maximum number of results to return in this query.

Responses
200 Response of Coda Pack formula analytics.
401 The API token is invalid or has expired.
429 The client has sent too many requests.

GET
/analytics/packs/{packId}/formulas

Response samples
200401429
Content type
application/json

Copy
Expand allCollapse all
{
"items": [
{}
],
"nextPageToken": "eyJsaW1pd",
"nextPageLink": "https://coda.io/apis/v1/analytics/packs/:packId/formulas?pageToken=xyz"
}
Get analytics last updated day
Returns days based on Pacific Standard Time when analytics were last updated.

AUTHORIZATIONS:
Bearer
Responses
200 Response of analytics last updated days.
429 The client has sent too many requests.

GET
/analytics/updated

Response samples
200429
Content type
application/json

Copy
{
"docAnalyticsLastUpdated": "2022-05-01",
"packAnalyticsLastUpdated": "2022-05-01",
"packFormulaAnalyticsLastUpdated": "2022-05-01"
}
Miscellaneous
These endpoints wouldn't fit anywhere else, but you may find them useful when working with Coda.

Resolve browser link
Given a browser link to a Coda object, attempts to find it and return metadata that can be used to get more info on it. Returns a 400 if the URL does not appear to be a Coda URL or a 404 if the resource cannot be located with the current credentials.

AUTHORIZATIONS:
Bearer
QUERY PARAMETERS
url
required
string <url>
Example: url=https://coda.io/d/_dAbCDeFGH/Launch-Status_sumnO
The browser link to try to resolve.

degradeGracefully	
boolean
Example: degradeGracefully=true
By default, attempting to resolve the Coda URL of a deleted object will result in an error. If this flag is set, the next-available object, all the way up to the doc itself, will be resolved.

Responses
200 Metadata for the resolved resource.
400 The request parameters did not conform to expectations.
401 The API token is invalid or has expired.
403 The API token does not grant access to this resource.
404 The resource could not be located with the current API token.
429 The client has sent too many requests.

GET
/resolveBrowserLink

Request samples
Python 3.7ShellGoogle Apps Script

Copy
import requests

headers = {'Authorization': 'Bearer <your API token>'}
uri = 'https://coda.io/apis/v1/resolveBrowserLink'
params = {
  'url': 'https://coda.io/d/Some-Doc_d<doc ID>/#To-do-List_tu<table ID>',
}
res = requests.get(uri, headers=headers, params=params).json()
resolved_uri = res["resource"]["href"]

res = requests.get(resolved_uri, headers=headers).json()
print(f'This link points to a {res["type"]} named {res["name"]}')
# => This link points to a table named To-do List
Response samples
200400401403404429
Content type
application/json

Copy
Expand allCollapse all
{
"type": "apiLink",
"href": "https://coda.io/apis/v1/resolveBrowserLink?url=https%3A%2F%2Fcoda.io%2Fd%2F_dAbCDeFGH%2FLaunch-Status_sumnO",
"browserLink": "https://coda.io/d/_dAbCDeFGH/Launch-Status_sumnO",
"resource": {
"type": "aclMetadata",
"id": "canvas-IjkLmnO",
"name": "My Page",
"href": "https://coda.io/apis/v1/docs/AbCDeFGH/pages/canvas-IjkLmnO"
}
}
Get mutation status
Get the status for an asynchronous mutation to know whether or not it has been completed. Each API endpoint that mutates a document will return a request id that you can pass to this endpoint to check the completion status. Status information is not guaranteed to be available for more than one day after the mutation was completed. It is intended to be used shortly after the request was made.

AUTHORIZATIONS:
Bearer
PATH PARAMETERS
requestId
required
string
Example: abc-123-def-456
ID of the request.

Responses
200 Info about the mutation.
401 The API token is invalid or has expired.
404 The resource could not be located with the current API token.
429 The client has sent too many requests.

GET
/mutationStatus/{requestId}

Request samples
Python 3.7ShellGoogle Apps Script

Copy
import requests

headers = {'Authorization': 'Bearer <your API token>'}
uri = 'https://coda.io/apis/v1/mutationStatus/some-request-id'
res = requests.get(uri, headers=headers).json()

print(f'Request has completed? {res["completed"]}')
# => Request has completed? false
Response samples
200401404429
Content type
application/json

Copy
{
"completed": true
}

## The GitHub Docs approach to style

- Our style guide aims for simplicity. Guidelines should be easy to apply to a range of scenarios.
- Decisions aren’t about what’s right or wrong according to the rules of grammar or the style guide, but about what’s best for our users. We're flexible and open to change while maintaining consistency.
- To scale the style guide as our team and documentation sets grow, and to create high-quality, meaningful content that serves users, we focus our attention on high-impact, high-value scenarios rather than attempting to comprehensively cover every style question.
- Consistency and grammatical correctness are important, but not as important as clarity and meaning.
- When making a style or structure decision, we consider the flow of information within the unit of content and the context of the information.
- When a question specific to help documentation isn’t covered by the style guide, we think it through using these principles, then make a decision. If a reviewer asks about it, we're prepared to discuss the decision.

## Callouts

Callouts highlight important information that customers need to know. We use standard formatting and colors for different types of callouts across doc sets.

Use callouts sparingly for high-value information - do not include general information, permissions, or prerequisites in callouts. Do not include more than two bullet points in a callout.

There are three types of in-content callouts: notes, warnings, and danger notices.

### Formatting callouts

Each callout starts with text indicating the type of callout (e.g. **Warning**:) to orient the reader (whether accessing the site visually or with a screen reader) and helps every user gauge the importance and necessity of the information in the callout.

Notes are rendered in blue `{% note %}` tags.
- Notes provide useful information or reminders for the user, but the information is not required to follow. Notes may not be relevant or necessary to every user.
- Precede note content with `**Note:**`.

Warnings and danger notices are rendered in red `{% warning %}` tags.
- Warnings are potentially dangerous actions that a user should heed before continuing with a task. They are often non-optional steps.
  - Precede content with `**Warning:**`.
- Danger notices are dangerous actions that a user should exercise extreme caution before performing. They often involve the potential for data loss or other destructive actions.
  - Precede content with `**Danger:**`.

For more information on formatting callouts, see “Callouts” in the [markup reference guide](content-markup-reference.md).

## Code

### Code blocks

Keep lines in code samples to about 60 characters, to avoid requiring readers to scroll horizontally in the code block. Locate explanatory text before the code block, rather than using comments inside the code block.

Within code blocks:
- Do not use markup before the command output.
- Only use `$` before the command itself if you’re showing the command’s output in the same block.
- If your code example includes `{` or `}` that should render, wrap that section in `{% raw %}` `{% endraw %}` to disable Liquid processing for that section.
  - **Use**:

    ```
    GITHUB_TOKEN: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
    ```

  - **Avoid**:

    ```
    GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
    ```

### Commands

Use inline code blocks to refer to short command names.
- **Use:** To check the status of a running cluster, use the `ghe-cluster-status` command.

Use command blocks for longer or more complex commands.
- **Use:** Enable maintenance mode according to your scheduled window by connecting to the administrative shell of any cluster node and running:

  ```
  ghe-cluster-maintenance -s
  ```

Avoid inline links in command names.

### Examples

When code examples refer to a larger file, show the relevant section of the file, so that users understand how to edit their own code in context.
- **Use:**

```
on:
  schedule:
    - cron:  "40 19 * * *"
```

- **Avoid:**

```
schedule:
  - cron:  "40 19 * * *"
```

### File and directory names

Use inline codeblocks to refer to file and directory names. If a file type generally follows a specific capitalization convention, such as all caps for README files, use the established convention.

- **Use:** In your `README.md` file, add info about your repository.
- **Use:** In your `.github/workflows/` directory, create the `example-workflow.yml` file.
- **Avoid:** In your _.github/workflows/_ directory, create the `example-workflow.yml` file.
- **Avoid:** Delete the **example.js** file.

### Indentation

In YAML examples, such as actions and workflow files, use two spaces to indent lines within nested lists and block sequences.

- **Use:**

```yaml
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Setup Python
        uses: {% data reusables.actions.action-setup-python %}
        with:
          python-version: {% raw %}${{ matrix.python }}{% endraw %}
```

### Scheduled workflows

Workflow runs are delayed when too many workflows run at once. Since many users copy code from the GitHub docs, we should use examples that guide users away from congested times.

- Do not use examples that run on the hour. (The Actions team reports that times at the start of the hour, especially UTC midnight, are disproportionately overloaded.)
- Do not use examples that run more frequently than necessary. For example, instead of running every 5 minutes, consider if the example makes sense to run every 30 minutes instead.
- Use a different time for each example.

## Headers

Use H2 for headers, and H3 for subheaders. When referring to headers, surround the header name with quotation marks.
- **Use:** Under “User licenses”, view your total licenses.

Our guidelines for writing titles also apply to writing headers. For more information, see the [content model](/contributing/content-model.md#titles).

To orient readers and help them understand if the section is relevant to them, include introductory content after a header - don’t locate a subheader directly following a header.

## Images

### Alt text

Every image must include an alt attribute that provides a complete description of the image for the user. For more information, see “[Accessibility guidelines for images and videos](https://review.docs.microsoft.com/en-us/help/contribute/contribute-accessibility-multimedia)” in the Microsoft Docs Contributor Guide. Note that you'll need to be logged on to your Microsoft account to be able access this Microsoft resource.

### Filenames

Be descriptive when naming image files: include the name, action, and UI element in the filename. Mirror product language. Use kebab case. Do not use Liquid conditionals in filenames. If replacing an image, use the exact filename.
- **Use:** `data-pack-purchase-button.png`
- **Avoid:** `purchase_button.png`
- **Avoid:** `purchase-button{% ifversion ghes > 3.2 %}-for-admins{% endif %}.png`

### Screenshots

To learn about creating and versioning images, see "[Creating and updating screenshots](./images-and-versioning.md)."

## Inclusive language

As home to the largest developer community in the world, GitHub is committed to promoting diversity and inclusion in every aspect of what we do. It is critical that all of our documentation is inclusive and respectful of our audience, which consists of people in widely varying circumstances from all over the planet. When we write our documentation, we use words that are inclusive, anti-racist, and accessible.

Individual words might be small, but together they can create community, belonging, and equity. Be empathetic in all word and style choices. Be accurate when referring to people and communities.

| Use | Avoid |
| --- | --- |
| Allowlist | Whitelist |
| Denylist | Blacklist |
| Default/Main branch | Master branch |

### Resources about inclusive language

The Microsoft Style Guide offers resources on bias-free communication, accessibility terms, and writing for all abilities:
- [Bias-free communication](https://docs.microsoft.com/style-guide/bias-free-communication)
- [Writing for all abilities](https://docs.microsoft.com/style-guide/accessibility/writing-all-abilities)
- [Accessibility terms](https://docs.microsoft.com/style-guide/a-z-word-list-term-collections/term-collections/accessibility-terms)

More resources for learning about inclusive and accessible language and style:
- [18F Content Guide on Inclusive Language](https://content-guide.18f.gov/inclusive-language/)
- MailChimp Content Style Guide:
  - [Writing About People](https://styleguide.mailchimp.com/writing-about-people/)
  - [Writing for Accessibility](https://styleguide.mailchimp.com/writing-for-accessibility/)
- [Readability Guidelines](https://readabilityguidelines.co.uk/)
- [Conscious Style Guide](https://consciousstyleguide.com/)

## Keyboard shortcuts

For presenting keyboard shortcuts, follow the [Microsoft Style Guide](https://docs.microsoft.com/en-us/style-guide/a-z-word-list-term-collections/term-collections/keys-keyboard-shortcuts), **except for the following differences**:

- Use the HTML `<kbd>` tag for each individual key.

  - **Use:** `<kbd>Command</kbd>+<kbd>B</kbd>`
  - **Avoid:** `Command+B`
- Use full words instead of symbols for Apple modifier keys.

  - **Use:** `Command`
  - **Avoid:** `⌘`
- Use symbols for keys of special character, not full words.

  - **Use:** `.`, `,`, and `→`.
  - **Avoid:** `Period`, `Comma`, and `Right arrow`.

### Usage highlights

Below are some usage highlights for how we present keyboard shortcuts in our documentation:

- The basic syntax is to show keys with `+` between key combinations, without any spaces.

  - **Use:** `<kbd>Command</kbd>+<kbd>B</kbd>`, which is rendered as <kbd>Command</kbd>+<kbd>B</kbd>.
  - **Avoid:** `<kbd>Command</kbd> + <kbd>B</kbd>` or `<kbd>Command + B</kbd>` which are  rendered as <kbd>Command</kbd> + <kbd>B</kbd> or <kbd>Command + B</kbd>.
- Always capitalize letter keys for general references and keyboard shortcuts.

  - **Use:** <kbd>Command</kbd>+<kbd>B</kbd>
  - **Avoid:** <kbd>Command</kbd>+<kbd>b</kbd>.
- Use the correct modifier keys for the each operating system.

  **Note:** Windows and Linux have <kbd>Ctrl</kbd> abbreviated, whereas on Mac it is spelled in full: <kbd>Control</kbd>.

  - For Windows and Linux:
  
    - **Use:** <kbd>Ctrl</kbd>, <kbd>Alt</kbd>.
    - **Avoid:** <kbd>Control</kbd>
  - For Mac:
  
    - **Use:** <kbd>Command</kbd>, <kbd>Option</kbd>, <kbd>Control</kbd>.
    - **Avoid:** <kbd>Cmd</kbd>, <kbd>⌘</kbd>, <kbd>Opt</kbd>, <kbd>⌥</kbd>, <kbd>Ctrl</kbd>, <kbd>⌃</kbd>
- Don't confuse key combinations with keys in a sequence.

  - <kbd>Command</kbd>+<kbd>B</kbd> indicates that the user should hold down the <kbd>Command</kbd> key and press the <kbd>B</kbd> key.
  - <kbd>G</kbd> <kbd>I</kbd> indicates that the user should press the <kbd>G</kbd> key, then press the <kbd>I</kbd> key.
- When describing a keyboard shortcut for multiple operating systems, append the operating system in brackets after the shortcut. Describe the Mac shortcut first, then Windows/Linux.

  - **Use:** `<kbd>Command</kbd>+<kbd>B</kbd> (Mac) or <kbd>Ctrl</kbd>+<kbd>B</kbd> (Windows/Linux)`, presented as:
  
     <kbd>Command</kbd>+<kbd>B</kbd> (Mac) or <kbd>Ctrl</kbd>+<kbd>B</kbd> (Windows / Linux)
  - **Avoid:** `<kbd>Ctrl</kbd>+<kbd>B</kbd> or <kbd>Command</kbd>+<kbd>B</kbd>`, presented as:

    <kbd>Ctrl</kbd>+<kbd>B</kbd> or <kbd>Command</kbd>+<kbd>B</kbd>

## Linebreaks

For plain text, use linebreaks to separate paragraphs in the source (two consecutive linebreaks), rather than to create visual space in the source. Avoid unneeded linebreaks, especially in lists.

## Links

Introduce links consistently using a standard format that clearly indicates where we’re linking.
For links to other articles in the GitHub docs: `For more information, see "[Page or article title]()."`
For links to another section in the same article: `For more information, see "[Header text]()."`
For links to specific sections in other articles in the GitHub docs: `For more information, see "[Article title]()."`
For links to an article with a specific tool selected: `For more information, see the TOOLNAME documentation in "[ARTICLE TITLE](/PATH/TO/ARTICLE?tool=TOOLNAME).`
For links to external documentation: `For more information, see [Page or article title]() in the X documentation.`
Do not include quotation marks within a hyperlink.

Links should be meaningful and provide high value to the user’s journey - link out carefully. Move links that are helpful but not necessary to an article’s further reading section. Do not repeat the same link more than once in the same article or under the same H2 header.

For accessibility and readability, avoid inline or midsentence links.
- **Use:** OAuth2 tokens can be acquired programmatically for applications that are not websites. For more information, see "[Setting up and registering OAuth Apps](https://developer.github.com/apps/building-integrations/setting-up-and-registering-oauth-apps/)" and "[Create a new authorization](https://docs.github.com/en/enterprise-server@2.22/rest/reference/oauth-authorizations/#create-a-new-authorization)."
- **Avoid:** Read [more about OAuth2.](https://developer.github.com/apps/building-integrations/setting-up-and-registering-oauth-apps/) Note that OAuth2 tokens can be [acquired programmatically](https://docs.github.com/en/enterprise-server@2.22/rest/reference/oauth-authorizations/#create-a-new-authorization), for applications that are not websites.

For more information on links and accessibility, see “[Links](https://readabilityguidelines.co.uk/content-design/links/)” in the Readability Guidelines project.

### Links between versions

Sometimes, you need to link from one version of GitHub Docs to another. For example, the Free, Pro, & Team version of "[Managing the publication of GitHub Pages sites for your organization](https://docs.github.com/en/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)" might link to the Enterprise Cloud version of the same article like this:

>You can choose to allow or disallow the publication of GitHub Pages sites.
>
>Organizations that use GitHub Enterprise Cloud can choose to allow publicly published sites, privately published sites, both, or neither. For more information, see [the GitHub Enterprise Cloud documentation](/enterprise-cloud@latest/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization).

To link to a different article in a different version, use this format:

> For more information, see "[ARTICLE TITLE]()" in the VERSION documentation.

To link to the same article in a different version, use this format:

> For more information, see [the VERSION documentation]().

To link to a specific version, you must include the version in the path (e.g., `/enterprise-cloud@latest/admin/overview/about-enterprise-accounts`).

### Links to specific sections of articles

When we link to specific sections of articles, we want to make sure the link is descriptive enough so that someone knows they are in the correct spot after following a link.

To link to a specific header in the same article, use this format:
> For more information, see "[HEADER TITLE](#HEADER-TITLE)."

To link to a specific header in a different article, use this format:
> For more information, see "[ARTICLE TITLE](path-to-article#HEADER-TITLE)."

### Links to a specific tool

When we link to content with a specific tool selected, we want to make sure that someone knows that they will be looking at content relevant to a specific tool even if they do not view the tool switcher tabs in the article.

> For more information, see the TOOLNAME documentation in "[ARTICLE TITLE](/PATH/TO/ARTICLE?tool=TOOLNAME).

### Links to learning paths

Use this format to link to a learning path.

> For more information, follow the "[LEARNING PATH TITLE]()" learning path.

### Links to external resources

When linking to an external site, choose the most useful resource for the context of the link - you can link to a whole site if it's a general reference or to a specific page if that would be more helpful.

It's not necessary to link to an external product’s website when we mention an external product.

## Lists

Capitalize the first letter in each line of a list. Use periods at the end of lines in a list only if the line contains a complete sentence.

When writing a list of items that consist of primary and secondary text, such as a `term` and its definition, use a colon delimiter. The secondary text should be capitalized as if it was the beginning of the line. For example:
* `foo`: Something that provides bar.
* `bar`: Something provided by foo.

Formatting unordered lists:
- If the order of items in the list is not important, alphabetize the list items.
- If the order is important, then order the list by the importance to the reader (for example, moving from broadest audience and applicability to a more specialized audience).

When introducing a list, avoid phrasing like “the following” or “these”, terms which are difficult to localize. Instead, be descriptive, yet general enough to allow a list to scale or change without having to update the description.

## Procedural steps

Procedures give readers a set of sequential steps to follow to complete a task. Always use numbered lists for procedures. Give readers all of the prerequisites or conceptual information they’ll need to complete the task before the procedure, rather than including it within a specific step.

Each step must include an action. You can also choose to include whether a step is optional, explain the reason or result of the step, and orient the reader by describing the location of the action, before guiding them to complete the action.

Use a consistent order to present information within each step.
1. If the step is optional, indicate that first.
2. When needed for clarity, or to reinforce the severity of a destructive or confusing action, explain the reason for or result of the step.
3. Describe the location the user will find the action in.
4. Action.

**Use:** Optionally, to [REASON], in [LOCATION], take [ACTION].

Examples:
- Click **Payment information**.
- Under your organization name, click **Settings**.
- To confirm your change, click **Remove credit card**.
- Optionally, to see your plan’s details, click **Show details**.
- Under "GitHub Sponsors", to the right of the sponsored open source contributor, click [down arrow octicon] next to your sponsored amount, then click **Change tier**.

## Product names

Use full product names. Do not abbreviate or shorten product names unless directly reproducing content from the product (e.g. UI copy or API responses).

Use product name variables to render product names - do not write product names in plain text. This makes product name changes easier to implement across the site and avoids typos in our product names. For more information about product name variables, see “Reusables and variables” in this document and the data directory of the github/docs repository.

Product names are always singular.
- **Use:** GitHub Actions helps you automate your software development workflows.
- **Avoid:** GitHub Actions help you automate your software development workflows.

Take care to distinguish between product names and product elements.

| Product | Element |
| --- | --- |
| GitHub Actions | an action |
| GitHub Codespaces | a codespace |
| GitHub Packages | a package |
| GitHub Pages | a GitHub Pages site |

## Product-specific conventions

This section describes additional conventions that are specific to GitHub products.

### GitHub Actions

#### Reusables for first-party actions

Code examples that use first-party actions must use the respective reusable for that action. This makes action version updates (e.g from `v1` to `v2`) easier to manage for products like GitHub Enterprise Server, which might not have the same action version available until a future Enterprise Server release.

Action reusables are located in `/data/reusables/actions/` and have a filename like `action-<action_name>.md`

For example, to use the `actions/checkout` action in an example, use its reusable:

```yaml
steps:
  - name: Checkout
    uses: {% data reusables.actions.action-checkout %}
```

For GitHub Docs purposes, a first-party action is any action that has the `actions/`, `github/` or `octo-org/` prefix. For example, this is a first-party action:

```
steps:
  - uses: actions/checkout@main
```

#### Disclaimers for third-party actions

Code examples that use third-party actions must include the following disclaimer as part of the code block:

```
# This workflow uses actions that are not certified by GitHub.
# They are provided by a third-party and are governed by
# separate terms of service, privacy policy, and support
# documentation.
```
To insert this disclaimer, use the `{% data reusables.actions.actions-not-certified-by-github-comment %}` reusable. If the code block is indented, you must use `indented_data_reference` along with the reusable. For example:

```
{% indented_data_reference reusables.actions.actions-not-certified-by-github-comment spaces=4 %}
```

For GitHub Docs purposes, a third-party action is any action that doesn't have the `actions/`, `github/` or `octo-org/` prefix. For example, this is a first-party action:

```
steps:
  - uses: actions/checkout@main
```

This is an example of a third-party action:

```
steps:
    - uses: google-github-actions/setup-gcloud@daadedc81d5f9d3c06d2c92f49202a3cc2b919ba
```

Examples:
- See the code block in "[Publishing to package registries](https://docs.github.com/en/actions/guides/building-and-testing-python#publishing-to-package-registries)"

#### Pinning version numbers to SHA

Code examples that use third-party actions must always pin to a full length commit SHA, instead of the version number or branch:

```
steps:
    - uses: google-github-actions/setup-gcloud@daadedc81d5f9d3c06d2c92f49202a3cc2b919ba
```

For GitHub Docs purposes, a third-party action is any action that doesn't have one of the following prefixes: `actions/`, `github/`, and `octo-org/`. For example, this is a first-party action:

```
steps:
  - uses: actions/javascript-action@main
```

For more information, see "[Using SHAs](https://docs.github.com/en/actions/learn-github-actions/finding-and-customizing-actions#using-shas)"

### GitHub Codespaces

When referring to the product GitHub Codespaces, always include "GitHub", except in these circumstances:
* In the `shortTitle` front matter (i.e. the abbreviated version of the article title).
* In subheadings within an article, if "GitHub Codespaces" has already been used anywhere in the article prior to the subheading.

Variables: `{% data variables.product.prodname_github_codespaces %}` ("GitHub Codespaces") and `{% data variables.product.prodname_codespaces %}` ("Codespaces").

When referring to instances of remote working environments created with this technology, refer to these as "codespaces" (lowercase c). For example, "to delete your codespace" or "to list your codespaces."

Always use "dev container" (or, where clarification is needed, its longer form "development container") and not "devcontainer" (one word), except in file/path names. The single word could form could be considered a brand, which we want to avoid, and we also want to be consistent with the two-word form used in [the Visual Studio Code documentation](https://code.visualstudio.com/docs/remote/create-dev-container#_path-to-creating-a-dev-container).

Use "development container configuration files" to refer to all of the files in the `.devcontainer` directory (plus the `.devcontainer.json` if that's being used rather than `devcontainer.json` in the `.devcontainer` directory). Don't refer to these as "development container files" or "devcontainer files" to avoid this being taken as referring to `devcontainer.json` files. "Development container configuration files" refers to all of the files that can be used to configure a dev container, including `Dockerfile` and `docker-compose.yml` files. Don't use "the development container configuration file" (singular) when referring specifically to a `devcontainer.json` file. Instead refer to this file by its name.

### Personal access tokens

GitHub has two types of personal access tokens:

- Fine-grained personal access tokens: Offer granular control over repository access and permissions
- Personal access tokens (classic): Use scopes and grant access to all repositories that the token owner can access

You should use variables to refer to these types of tokens, as well as to personal access tokens in general:

- Use `{% data variables.product.pat_generic %}`or `{% data variables.product.pat_generic_caps %}` to refer to personal access tokens in general. Use `{% data variables.product.pat_generic_title_case %}` if the phrase should be in title case ("Personal Access Token") in order to match UI text.
- Use `{% data variables.product.pat_v2 %}` or `{% data variables.product.pat_v2_caps %}` to refer to fine-grained personal access tokens.
- Use `{% data variables.product.pat_v1 %}`, `{% data variables.product.pat_v1_plural %}`, `{% data variables.product.pat_v1_caps %}`, or `{% data variables.product.pat_v1_caps_plural %}` to refer to personal access tokens (classic).

For more information about GitHub's personal access tokens, see "[Creating a personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token#about-personal-access-tokens)."

## Punctuation

Follow standard American English punctuation rules. For more guidance, see “[Punctuation](https://docs.microsoft.com/style-guide/punctuation)” in the Microsoft Style Guide.

## Reusables and variables
Use reusable strings for individual nouns (e.g. product names) or for complete sentences or paragraphs. Sentence fragments and phrases should not be contained in reusable strings as they can cause problems when content is localized. For more information, see the [data directory](../data) in the github/docs repository and the “[Product names](#product-names)” section of this document.

## Tables

A table’s contents should be clear from the preceding content - avoid unneeded descriptions. If you must describe a table, use complete sentences closed with a period.
- **Use:** Nothing or a clear header.
- **Avoid:** “The table below shows what kind of migration data is exported:”

## Titles

Use quotation marks around article titles, whether the article is hosted on GitHub Docs or elsewhere. Do not include quotation marks around the names of external sites.

For further guidance, see “[Formatting titles](https://docs.microsoft.com/style-guide/text-formatting/formatting-titles)” in Microsoft’s Style Guide.

## Short titles
We use short titles to populate the sidebar navigation. They should give users contextual understanding of the article, but align to the following standards:

- Short titles are 2-3 words long, yet should still convey the full meaning of the title.
- To help cut words, look at the title in context:
  - Are there words in the breadcrumb that you can omit in the short title?
  - Remove repeated words possible
- Don’t introduce new words in short titles that aren’t in the full title
- Short titles should be parallel to short titles for similar content
  - **Use:**
    - Organizations and teams
    - Enterprise accounts
- Short titles should still mimic format of the full title
  - For task-based titles, if there’s a preposition or object or it’s otherwise awkward to shorten, try to find a verb but you can use a nouns when needed
  
| Instead of | Use |
|---|---|
| Authenticating to GitHub | Authentication |
| Installing and configuring GHE Server | Installation and configuration |

## User interface elements

### Boldface

Use bold to describe UI elements that can be interacted with.
- In the left sidebar, click **Billing**.
- Look in the merge box at the bottom of the pull request's **Conversation** tab.
- Next to **Title**, add a descriptive label for your new key.

### Branch names

Use code formatting for branch names.
- `main`
- `<username>.github.io`

### Buttons

Format button names in bold and, whenever possible, omit the word “button.” To describe using a button, write “click”, not push or press.
- **Use:** Click **Pull request**.
- **Avoid:** Press the Pull request button.

### Checkboxes

Format checkbox names in bold and omit the word “checkbox.” To describe choosing or clearing a checkbox, use “select” or “deselect.”
- **Use:** Select **Enable for all new repositories**.
- **Avoid:** Check the “Enable for all new repositories” checkbox.

### Dynamic text

Use capital letters to indicate text that changes in the user interface or that the user needs to supply in a command or code snippet.
- **Use:** Click **Add USERNAME to REPONAME**.

### Lists and list items

Format lists and clickable list items in bold. To describe interacting with a list, such as a dropdown menu or UI element that expands, regardless of whether the list name is a word or an octicon, write "select." To describe choosing a list item, write "click."
- **Use:** Select the **Backup email addresses** dropdown menu and click **Only allow primary email**.
- **Avoid:** Click the "Backup email addresses" dropdown menu and click **Only allow primary email**.

### Location

Describe a user interface element’s location with standard terms.
- Under or above
- Next to
- Upper-left, upper-right, lower-left, lower-right
- Top of the page, bottom of the page, right side of the page, left side of the page

### Radio buttons

Format radio button labels in bold and omit the words “radio button” or any other descriptor. To describe using a radio button, write "select."

### Repository names

Use a standard format to refer to repositories. Link to repositories when helpful.
- **Use:** in the [account-name/repository-name](URL) repository

### User interface text

When referencing text in the user interface, reproduce the text exactly. Use quotation marks to surround UI text that cannot be interacted with.
- **Use:** Under “IP allow list”, click **Edit**.

### More resources
Microsoft Style Guide:
- [Formatting text in instructions](https://docs.microsoft.com/style-guide/procedures-instructions/formatting-text-in-instructions)

## Voice and tone

Use clear, simple language that’s approachable and accessible for a wide range of readers. To learn more about writing approachable content, see “[Microsoft's brand voice: Above all, simple and human](https://docs.microsoft.com/style-guide/brand-voice-above-all-simple-human) and “[Top 10 tips for Microsoft style and voice](https://docs.microsoft.com/style-guide/top-10-tips-style-voice).”

## Word choice and terminology

For general guidance and GitHub-specific terms, see our "[Glossary](https://docs.github.com/en/get-started/quickstart/github-glossary)". For more detailed guidance, see the “[A-Z word list](https://docs.microsoft.com/style-guide)” in Microsoft’s style guide.

### Abbreviations

Spell out words except when referring to a word that’s explicitly shortened in the product itself.
- **Use:** Repository
- **Avoid:** Repo
- **Use:** Administrator, people with admin permissions
- **Avoid:** Admins

Do not use symbols or octicons that aren’t used in GitHub’s user interface.
- **Use:** Click **File**, then click **Edit**.
- **Avoid:** Click **File > Edit**.

### Accounts

#### Product names and accounts

To avoid ambiguity and confusion, do not use product names as adjectives to describe accounts in any of our products. Instead, clarify the account type and choose clearer phrasing that avoids conflating accounts and products. When talking about accounts, only refer to the product name when needed to disambiguate between products. For more information about types of accounts available in GitHub's products, see "[Types of GitHub accounts](https://docs.github.com/en/get-started/learning-about-github/types-of-github-accounts)."
- **Use:** Your organization on GitHub Enterprise Cloud
- **Avoid:** Your GitHub Enterprise Cloud account
- **Avoid:** Your GitHub Enterprise Server organization
- **Use:** You can highlight your work on GitHub Enterprise Server by sending the contribution counts to your GitHub.com profile.

#### Individual people's accounts on GitHub

We refer to an account that an individual person signs into in various ways depending on the context.

Unless the content is about administering an enterprise product, describe an individual person's account on GitHub as a "personal account." This creates consistency with the UI and prevents readers from being confused by seeing two terms that mean the same thing.

- **Use:** Managing scheduled reminders for your personal account
- **Avoid:** Managing scheduled reminders for your user account

#### Accounts for enterprise products

With GitHub's enterprise products, administrators manage an enterprise account. An enterprise account can own multiple organizations, and people's user accounts can be members of the organizations. For more information, see the "Roles in an enterprise" article for each product.

- [GitHub Enterprise Cloud](https://docs.github.com/en/enterprise-cloud@latest/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise)
- [GitHub Enterprise Server](https://docs.github.com/en/enterprise-server/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise)
- [GitHub AE](https://docs.github.com/en/github-ae@latest/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise)

If the reader manages an enterprise account, and you're describing the people's accounts that they manage, use "user account." This applies to the following products.

- GitHub Enterprise Cloud with Enterprise Managed Users
  - **Use:** With Enterprise Managed Users, you can create and manage user accounts for your enterprise members.
  - **Avoid:** With Enterprise Managed Users, you can create and manage the personal accounts for your enterprise members.
- GitHub Enterprise Server
  - **Use:** If you need to temporarily take over a user account...
  - **Avoid:** If you need to temporarily take over a personal account...
- GitHub AE
  - **Use:** Authorized users can access your enterprise from any IP address.
  - **Avoid:** Authorized personal accounts can access your enterprise from any IP address.

The following documentation should reference "user accounts."

- The "[Enterprise administrators](https://docs.github.com/en/enterprise-cloud@latest/admin)" product
- Enterprise-specific billing documentation, like "[About billing for your enterprise](https://docs.github.com/en/enterprise-cloud@latest/billing/managing-billing-for-your-github-account/about-billing-for-your-enterprise)"
- Content within other products that's intended for an administrative audience, like "[Best practices for securing accounts](https://docs.github.com/en/enterprise-cloud@latest/code-security/supply-chain-security/end-to-end-supply-chain/securing-accounts)" in the "Code security" product or "[Setting up a trial of GitHub Enterprise Cloud](https://docs.github.com/en/enterprise-cloud@latest/get-started/signing-up-for-github/setting-up-a-trial-of-github-enterprise-cloud)" in the "Get started" product
- Enterprise-specific API content, like the "[GitHub Enterprise administration](https://docs.github.com/en/enterprise-cloud@latest/rest/reference/enterprise-admin)" REST API reference documentation

For enterprises on GitHub Enterprise Cloud that don't use Enterprise Managed Users, use "personal account" when describing members of organizations owned by the enterprise.

- **Use:** If you configure SAML SSO, members of your organization will continue to sign into their personal accounts on GitHub.com.
- **Avoid:** If you configure SAML SSO, members of your organization will continue to sign into their user accounts on GitHub.com.

Documentation that describes GitHub Enterprise Cloud without Enterprise Managed Users is generally in the "[Managing SAML single sign-on for your organization](https://docs.github.com/en/enterprise-cloud@latest/organizations/managing-saml-single-sign-on-for-your-organization)" category.

#### People's accounts for other services

When you describe a person's account for a service other than GitHub, such as an integration or authentication provider, use "user account."
### Acronyms

Spell out acronyms the first time they’re used in an article, except in titles or headers.

### Apps

Use "apps" or "applications" in general content.
- **Use:** Publish and list your apps in GitHub Marketplace

Use "Apps" when referring to specific apps or types of apps.
- **Use:** GitHub App, OAuth App

GitHub Apps is always capitalized, because it’s a feature name.

### Currency

When referring to dollars, cents, amounts of currency or using the `$` sign, ensure the currency used is defined even if the amount is zero. Use the [ISO standard currency name](https://www.iso.org/iso-4217-currency-codes.html), and the [ISO standard currency code](https://www.six-group.com/en/products-services/financial-information/data-standards.html#scrollTo=currency-codes) where possible.

Use lowercase for currency names, but capitalize the reference to the country or region.
- **Use:** US dollar.
- **Avoid:** US Dollar, $USD dollar.

Use uppercase for currency codes.
- **Use:** USD.

Where there is only one reference in an article, use the currency name without a `$` sign preceding the amount.
- **Use:** `10 US dollars` for a single reference to currency.

Where an article contains several references to the same currency, ensure that the first reference uses the currency name without a `$` sign preceding the amount and includes the currency code in parentheses following the currency name.

For subsequent references to currency in an article or where appropriate (such as when space is a consideration, or when several amounts are presented in a table or list), include the `$` sign preceding the amount and use the ISO standard currency code following the amount.
- **Use:** `10 US dollars (USD)` for the first reference, and `$0.25 USD` for subsequent references.
- **Avoid:** `$10 US dollars (USD)`, `USD$0.25`.

Where the first reference concerns `cents` or a non-dollar amount, capitalize the reference to the country or region of the currency used in parentheses immediately after the first reference. Subsequent currency references are treated using the guidelines above.

- **Use:** `99 cents (US currency)` for the first reference, and `99 cents` for subsequent references.
- **Avoid:** `$0.99 (US currency)`, `$0.99 USD cents`, `USD$0.99 cents`.

### Inclusive language

See the “Inclusive language” section of this guide.

### Permissions

A **permission** is the ability to perform a specific action. For example, the ability to delete an issue is a permission.

A **role** is a set of permissions that can be assigned to a user. Roles exist at different levels.

- Accounts (e.g., organization owner, billing manager for an enterprise account)
- Resources (e.g., "Write" for a repository, "Admin" for a security advisory)
- Teams (e.g., "team maintainer")

A person's **access** refers generally to all the abilities the person has in a particular context, regardless of which roles or individual permissions those abilities come from.

Only use **permission** or **role** when the distinction between the two is important. Otherwise, use **access**.

- **Use:** `To create a custom repository role, you choose an inherited role and then add individual permissions.`
- **Use:** `Managing a team's access to your organization's repository`
- **Use:** `If your team membership gives you a different level of access than your role as organization owner...`
- **Use:** `People with write access can...`
- **Avoid:** `People with the write role can...`
- **Avoid:** `People with write permissions can...`
- **Avoid:** `People with write privileges can...`

When specifying the access required to take an action, refer only to the role at the same level as the action. For example, you need admin access to a repository, which is a repository-level role, to configure protected branches. You can get admin access to a repository by being an organization owner, an organization-level role, but the repository-level role is what actually governs your ability to take the action, so that is the only role that should be mentioned.

- **Use:** `People with write access to a repository can do X to the repository.`
- **Avoid:** `Organization owners and people with write access can do X to the repository.`

For more information about word choice for permissions statements, see "[Permissions statements](/contributing/content-model.md#permissions-statements)" in the content model.

### Prepositions

Avoid ending a sentence with a preposition unless the rewritten sentence would sound awkward or too formal.

### Product names

See the “[Product names](#product-names)” section of this guide.

### Terms to use or avoid

| Use | Avoid |
| --- | --- |
| person | user, customer |
| terminal | shell |
| username | login |
| sign in  | log in, login |
| sign up | signup |
| recommended limit | soft limit |
| email | e-mail |
| on GitHub | on a remote repository |
| press (a key) | hit, tap |
| type (in the user interface) | enter (in the user interface) |
| enter (in the command line) | type (in the command line) |

## Word order

### Strings of nouns

Avoid stacked modifiers (strings of nouns), which can lead to incorrect translations because translations may not be able to tell which word is modifying the other. You can rephrase the string of nouns using a preposition. If using a stacked modifier is essential, make sure the background information and context are clear so that readers and the translator can understand what is being modified.
- **Use:** Default source settings for public repositories
- **Avoid:** Public repository default source settings
