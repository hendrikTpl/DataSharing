<?php

set_time_limit(0);

//Time interval
$interval= $_POST['input_interval'];

while (true){
    
    $now=time();
    //include("the_script.php");
   
    //Date Format
    $date=date("M-d-Y, \a\\t g.i a", time());
    //URI API Endpoint
    //$uri="https://data.cityofchicago.org/resource/t2qc-9pjd.json";
    $uri= $_POST['input_uri'];    
    //Named File
    $file_name= $_POST['input_file_name'];
    $finish= $_POST['input_finish'];
    //Get File JSON
    $json=file_get_contents($uri);
    $filejson = fopen("dataset/json/dataset-".$file_name."-".$date.".json", "w") or die("Unable to open file!");
    fwrite($filejson, $json);
    fclose($filejson);
    
    
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
   
   
    sleep($interval*60-(time()-$now));
    
}


?>