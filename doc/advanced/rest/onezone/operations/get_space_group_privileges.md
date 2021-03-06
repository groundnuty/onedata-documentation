
<a name="get_space_group_privileges"></a>
#### Get group privileges to space
```
GET /spaces/{id}/groups/{gid}/privileges
```


##### Description
Returns privileges for a group to a specific space.

This operation requires `space_view_data` privilege.

***Example cURL requests***

**Get space group privileges**
```bash
curl -k -u admin:password -X GET \
https://$HOST:8443/api/v3/onezone/spaces/9ueUeoZA6KXxNgzlvqmmrbzqE_BQiaHEEDC21sY1Kuc/groups/T5x_HhFYOnILOCUf9OqgExw00RwaU2MXT5122oWk_sM/privileges

{
  "privileges": ["space_view_data"]
}
```


##### Parameters

|Type|Name|Description|Schema|Default|
|---|---|---|---|---|
|**Path**|**gid**  <br>*required*|Group ID.|string|--|
|**Path**|**id**  <br>*required*|Space ID.|string|--|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|The list of group privileges in a space.|[SpacePrivileges](../definitions/SpacePrivileges.md#spaceprivileges)|
|**400**|Invalid request.|[Error](../definitions/Error.md#error)|
|**401**|Authentication error.|[Error](../definitions/Error.md#error)|
|**403**|Authorization error.|[Error](../definitions/Error.md#error)|
|**404**|Resource not found.|[Error](../definitions/Error.md#error)|
|**500**|Internal server Error.|[Error](../definitions/Error.md#error)|


##### Produces

* `application/json`


##### Example HTTP request

###### Request path
```
json :
"/spaces/string/groups/string/privileges"
```


##### Example HTTP response

###### Response 200
```
json :
{
  "privileges" : [ "space_invite_user", "space_remove_user", "space_invite_group", "space_remove_group", "space_set_privileges", "space_remove", "space_add_provider", "space_remove_provider", "space_change_data", "space_view_data" ]
}
```


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



