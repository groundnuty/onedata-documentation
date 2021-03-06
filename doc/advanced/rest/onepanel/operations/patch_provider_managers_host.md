
<a name="patch_provider_managers_host"></a>
#### Start/stop provider manager
```
PATCH /provider/managers/{host}
```


##### Description
Starts or stops cluster manager service on selected hosts in the  local deployment.


##### Parameters

|Type|Name|Description|Schema|Default|
|---|---|---|---|---|
|**Path**|**host**  <br>*required*|The name of a host for which cluster manager service  status should be changed.|string|--|
|**Query**|**started**  <br>*optional*|Defines the intended state of the cluster manager service.  The service will be started or stopped in order to match the  requested state.|boolean|`"true"`|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**204**|Databases service state changed successfully.|No Content|
|**400**|Invalid request.|[Error](../definitions/Error.md#error)|
|**403**|Forbidden request.|No Content|
|**404**|Cluster manager service has not been deployed on selected host.|No Content|
|**500**|Internal server error.|No Content|


##### Example HTTP request

###### Request path
```
json :
"/provider/managers/string"
```


###### Request query
```
json :
{
  "started" : true
}
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



