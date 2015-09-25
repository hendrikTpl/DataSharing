<?php
function toCsv(){

    //Date Format
    $date=date("M-d-Y, \a\\t g.i a", time());
    //URI API Endpoint
    //$uri="https://data.cityofchicago.org/resource/t2qc-9pjd.json";
    $uri= $_POST['input_uri'];
    //Time interval
    //$interval= $_POST['set_timer'];
    //Named File
    $file_name= $_POST['file_name'];
    //Get File JSON
    $json=file_get_contents($uri);

    $filecsv = fopen("dataset/csv/dataset-".$file_name."-".$date.".csv", "w") or die("Unable to open file!");
    $array = json_decode($json, true);
    $firstLineKeys = false;
    foreach ($array as $line)
    {
        if (empty($firstLineKeys))
        {
            $firstLineKeys = array_keys($line);
            fputcsv($filecsv, $firstLineKeys);
            $firstLineKeys = array_flip($firstLineKeys);
        }

        fputcsv($filecsv, array_merge($firstLineKeys, $line));

    }    
    
    
}

toCsv();


header('location:index.html');

?>