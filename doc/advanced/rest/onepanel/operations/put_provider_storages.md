
<a name="put_provider_storages"></a>
#### Configure storage
```
PUT /provider/storages
```


##### Description
Adds a storage to the provider deployment.


##### Parameters

|Type|Name|Description|Schema|Default|
|---|---|---|---|---|
|**Body**|**clusterStoragesList**  <br>*required*|The list of configuration details of storages to be added to the provider deployment.|[ClusterStoragesList](../definitions/ClusterStoragesList.md#clusterstorageslist)|--|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**204**|The storage has been successfully added to the provider deployment.|No Content|
|**400**|Invalid request.|[Error](../definitions/Error.md#error)|
|**403**|Forbidden request.|No Content|
|**500**|Internal server error.|No Content|


##### Consumes

* `application/json`


##### Example HTTP request

###### Request path
```
json :
"/provider/storages"
```


###### Request body
```
json :
{ }
```


##### Example HTTP response

###### Response 400
```
json :
{
  "error" : "Authentication Error",
  "description" : "Invalid username or password."
}
```



