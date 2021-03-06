
<a name="replicate_file"></a>
#### Replicate file or folder by path
```
POST /replicas/{path}
```


##### Description
Replicates a file to a specified provider. This operation is asynchronous as it can take a long time depending on the size of the data to move. 

If the `path` parameter specifies a folder, entire folder is replicated to requested provider.

***Example cURL requests***

**Replicate file by path to any provider**
```bash
curl --tlsv1.2 -X POST -H "X-Auth-Token: $TOKEN" \
"https://$HOST:8443/api/v3/oneprovider/replicas/MySpace1/MyFile1.txt"


{ "transferId": "4f674576-4c63-443b-b3d5-2f74a40724a0" }
```

**Replicate file by path to specific storage provider with URL callback**
```bash
curl --tlsv1.2 -X POST -H "X-Auth-Token: $TOKEN" \
-H 'Content-type: application/json' -d '{ "url": "http://example.com/transfer_complete" }' \
"https://$HOST:8443/api/v3/oneprovider/replicas/MySpace1/MyFile1.txt?provider_id=7a0d2c4d-aa00-43df-9e96-cac98b2816bb"


{ "transferId": "b3c85b99-44db-4277-8c66-2ccd50888565" }
```


##### Parameters

|Type|Name|Description|Schema|Default|
|---|---|---|---|---|
|**Path**|**path**  <br>*required*|File path (e.g. '/My Private Space/testfiles/file1.txt')|string|--|
|**Query**|**provider_id**  <br>*optional*|The ID of the provider to which the file should be replicated. By default the file will be replicated to the provided handling this REST call.|string|--|
|**Body**|**callback**  <br>*optional*|This parameter allows the user to specify a REST callback URL, which will be called when the transfer is complete|[Callback](../definitions/Callback.md#callback)|--|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|The replication request was accepted and the result is the transfer ID, which can be used for monitoring of the transfer status.|[Response 200](#replicate_file-response-200)|
|**400**|Invalid request.|[Error](../definitions/Error.md#error)|
|**403**|Forbidden request.|[Error](../definitions/Error.md#error)|
|**404**|Oneprovider REST API not available.|[Error](../definitions/Error.md#error)|
|**500**|Internal server error.|[Error](../definitions/Error.md#error)|

<a name="replicate_file-response-200"></a>
**Response 200**

|Name|Description|Schema|
|---|---|---|
|**transferId**  <br>*optional*|Transfer ID.|string|


##### Produces

* `application/json`


##### Example HTTP request

###### Request path
```
json :
"/replicas/string"
```


###### Request query
```
json :
{
  "provider_id" : "string"
}
```


###### Request body
```
json :
{
  "url" : "http://monitoring.example.com:8080/notifications"
}
```


##### Example HTTP response

###### Response 200
```
json :
"object"
```


###### Response 400
```
json :
{
  "error" : "invalid_token",
  "error_description" : "Provided token could not be validated."
}
```


###### Response 403
```
json :
{
  "error" : "invalid_token",
  "error_description" : "Provided token could not be validated."
}
```


###### Response 404
```
json :
{
  "error" : "invalid_token",
  "error_description" : "Provided token could not be validated."
}
```


###### Response 500
```
json :
{
  "error" : "invalid_token",
  "error_description" : "Provided token could not be validated."
}
```



