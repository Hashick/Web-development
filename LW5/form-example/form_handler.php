<?php

if (isset($_POST["%name%"]) && isset($_POST["%state%"])) {

    $name = $_POST["%name%"];
    $state = $_POST["%state%"];

    $fname =  $name . '.txt';
    $fp = fopen($fname, 'w');

    $text = $name . PHP_EOL . $state;

    $ok = fwrite($fp, $text);
    if ($ok) {
        echo 'Данные успешно записаны.';
    }
    else {
        echo 'Ошибка при записи в файл.';
    }
    fclose($fp);
}


