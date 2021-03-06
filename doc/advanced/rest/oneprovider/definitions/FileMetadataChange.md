
<a name="filemetadatachange"></a>
### FileMetadataChange
File metadata record


|Name|Description|Schema|
|---|---|---|
|**changes**  <br>*optional*|The list of changes representing current status of the file metadata. If only 1 change is in the list, then it represents the current metadata state. If more than 1 change is present, it means there is a conflict which needs to be resolved.|< [FileMetadata](FileMetadata.md#filemetadata) > array|
|**deleted**  <br>*optional*|If true, it means the file has been already deleted.|boolean|
|**file_id**  <br>*optional*|Unique ID of the file.|string|
|**file_path**  <br>*optional*|Absolute path to the file (starting with the Space name).|string|
|**seq**  <br>*optional*|Sequence number (version) of the metadata document.|string|

**Example**
```
{
  "seq" : 123,
  "file_id" : "4efc4a0c-0a61-4766-8fe9-c3d7fb414da8",
  "file_path" : "/Space1/folder2/file1.txt",
  "name" : "file1.txt",
  "deleted" : false,
  "changes" : [ {
    "type" : "reg",
    "mode" : 511,
    "atime" : 1464958683054,
    "mtime" : 1464958683051,
    "ctime" : 1464958681054,
    "uid" : "f986246a-4d95-46ae-b3b9-e00172767e88",
    "size" : 1024,
    "version" : 1,
    "is_scope" : false,
    "scope" : "a0274289-6f8a-482f-86f8-4a518760749c",
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
  } ]
}
```



