
<a name="delete_nested_group"></a>
#### Remove subgroup
```
DELETE /groups/{id}/nested/{nid}
```


##### Description
Removes a specific subgroup with {nid} from parent group with {id}.

This operation requires `group_remove_group` privilege.

***Example cURL requests***

**Remove subgroup**
```bash
curl -k  -u username:password -X DELETE \
https://$HOST:8443/api/v3/onezone/groups/KoiO-QKqmYZRjPVdtR30FrdIEA1JF9f3TznAr9BDjA4/nested/Qi4QT2oalnfQu0SzTK1HgXxKuUrlRppb68rr_UhwC50
```


##### Parameters

|Type|Name|Description|Schema|Default|
|---|---|---|---|---|
|**Path**|**id**  <br>*required*|Group ID.|string|--|
|**Path**|**nid**  <br>*required*|Nested group ID.|string|--|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**202**|A subgroup will be removed.|No Content|
|**400**|Invalid request.|[Error](../definitions/Error.md#error)|
|**401**|Authentication error.|[Error](../definitions/Error.md#error)|
|**403**|Authorization error.|[Error](../definitions/Error.md#error)|
|**404**|Resource not found.|[Error](../definitions/Error.md#error)|
|**500**|Internal server Error.|[Error](../definitions/Error.md#error)|


##### Example HTTP request

###### Request path
```
json :
"/groups/string/nested/string"
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



