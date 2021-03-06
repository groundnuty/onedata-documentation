
<a name="filemetadata"></a>
### FileMetadata
File or directory metadata.


|Name|Description|Schema|
|---|---|---|
|**atime**  <br>*optional*|Last access timestamp.|integer|
|**ctime**  <br>*optional*|Creation timestamp.|integer|
|**is_scope**  <br>*optional*|True only when this is a space folder.|boolean|
|**mode**  <br>*optional*|POSIX file permissions in decimal format|integer|
|**mtime**  <br>*optional*|Last modification timestamp.|integer|
|**name**  <br>*optional*|File or directory path.|string|
|**scope**  <br>*optional*|ID of the space in which this file is contained.|string|
|**size**  <br>*optional*|Size of the file in bytes.|integer|
|**type**  <br>*optional*|Determines whether this a regular file or a folder.|enum (reg, dir, lnk)|
|**uid**  <br>*optional*|ID of the owner of this file|string|
|**version**  <br>*optional*|Version of the current file snaphost.|integer|
|**xattrs**  <br>*optional*||< [FileAttribute](FileAttribute.md#fileattribute) > array|

**Example**
```
{
  "type" : "reg",
  "mode" : 511,
  "atime" : 1464958683054,
  "mtime" : 1464958683051,
  "ctime" : 1464958681054,
  "uid" : "16cc75ea-7fc4-4cd1-9cc8-12fa31595c50",
  "size" : 1024,
  "version" : 1,
  "is_scope" : false,
  "scope" : "4db2db29-7b96-4eda-954b-8bc43b0e1d5e",
  "xattrs" : [ {
    "name" : "mime_type",
    "value" : "application/text"
  }, {
    "name" : "dc.language",
    "value" : "en"
  }, {
    "name" : "dc.identifier",
    "value" : "doi:10.1002/0470123"
  } ]
}
```



