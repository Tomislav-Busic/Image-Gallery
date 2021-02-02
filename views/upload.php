<?php
$newImageSubmited = isset($_POST['new-image']);
if($newImageSubmited){
    $output = upload();
} else {
    $output = include_once "views/upload-form.php";
}
return $output;

function upload(){
    include_once "classes/Uploader.class.php";

    $uploader = new Uploader("image-data");
    $uploader->saveIn("img");
    $fileUploaded = $uploader->save();
    if($fileUploaded){
        $out = "new file uploaded";
    } else{
        $out = "something went wrong";
    }
    return $out;
}