
<a name="delete_space_group"></a>
#### Remove group from space
```
DELETE /spaces/{id}/groups/{gid}
```


##### Description
Removes a specific group from space.

This operation requires `space_remove_group` privilege or 
`remove_member_from_space` privilege.

***Example cURL requests***

**Get space group details**
```bash
curl -k -u username:password -X DELETE \
https://$HOST:8443/api/v3/onezone/spaces/HUUPOMNGzikwiLXHaFYcE8-qxDtKmt1Gb3v5OnF9UNE/groups/HwUpk8jrwxKOe45uzLFX2GVC8lKEasj4q253sptVqF8
```


##### Parameters

|Type|Name|Description|Schema|Default|
|---|---|---|---|---|
|**Path**|**gid**  <br>*required*|Group ID.|string|--|
|**Path**|**id**  <br>*required*|Space ID.|string|--|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|A space has been removed from group.|No Content|
|**400**|Invalid request.|[Error](../definitions/Error.md#error)|
|**401**|Authentication error.|[Error](../definitions/Error.md#error)|
|**403**|Authorization error.|[Error](../definitions/Error.md#error)|
|**404**|Resource not found.|[Error](../definitions/Error.md#error)|
|**500**|Internal server Error.|[Error](../definitions/Error.md#error)|


##### Example HTTP request

###### Request path
```
json :
"/spaces/string/groups/string"
```


##### Example HTTP response

###### Response 400
```
json :
{
  "error" : "invalid_token",
  "error_description" : "Provided token could not be validated."
}
```


###### Response 401
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



