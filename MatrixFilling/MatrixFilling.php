<?php

//Matrix
$fillable = [];

//Size of columns and rows
$rows = 8; //строка
$cols = 6; //колонка

//Elements in matrix
$elements_count = $rows * $cols;

//Directions queue
$directions = [ 'right', 'bottom',  'left',  'top', ];

//Started col and row
$col = 0;
$row = 0;

$direction_index = 0;

//Started number for filling
$filling_index = 1;
$direction = $directions[$direction_index];

for($i = 0; $i < $elements_count; $i++){
    $fillable[$row][$col] = $filling_index++;

    if (
        ($col == $cols-1 && $row == 0) ||
        ($row == $rows-1 && $col == $cols-1) ||
        ($col == 0 && $row == $rows-1) ||
        ($direction == 'right' && isset($fillable[$row][$col+1]) && $fillable[$row][$col+1] > 0) ||
        ($direction == 'left' && isset($fillable[$row][$col-1]) && $fillable[$row][$col-1] > 0) ||
        ($direction == 'bottom' && isset($fillable[$row+1][$col]) && $fillable[$row+1][$col] > 0) ||
        ($direction == 'top' && isset($fillable[$row-1][$col]) && $fillable[$row-1][$col] > 0)
    ) {
        $direction_index++;
        $direction_index = $direction_index % 4;
    }
    $direction = $directions[$direction_index];
    switch($direction){
        case 'right':
            $col++;
            break;
        case 'left':
            $col--;
            break;
        case 'top':
            $row--;
            break;
        case 'bottom':
            $row++;
            break;
    }
}


//Echo matrix to display
echo "\n\n";
for ($i = 0; $i<$rows; $i++) {
    for ($j = 0; $j < $cols; $j++) {
        echo $fillable[$i][$j] . " ,";
    }
    echo "\n";
}
