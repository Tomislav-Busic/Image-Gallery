<?php
error_reporting( E_ALL);
ini_set("display_errors", 1);
include_once "classes/Page_Data.class.php";
$pageData = new Page_Data();
$pageData->title = "Dynamic image Gallery";
$pageData->addCSS('css/style.css');
$pageData->addCSS('css/navigation.css');
$pageData->content = include_once "views/navigation.php";
$userClicked = isset($_GET['page']);
if ($userClicked){
    $fileToLoad = $_GET['page'];
} else {
    $fileToLoad = "gallery";
}
$pageData->content .= include_once "views/$fileToLoad.php";
$pageData->addJS('JS/lightbox.js');
$page = include_once "templates/page.php";
echo $page;