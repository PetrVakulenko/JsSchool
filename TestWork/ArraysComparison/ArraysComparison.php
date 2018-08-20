<?php

//Test arrays
$arr1 = [11, 22, 48, 54];
$arr2 = [11, 48, 54, 22];
$arr3 = [11, 12, 48, 54];

//Function implemented in php
function check_arrays($a1, $a2)
{
    return count(array_diff($a1, $a2)) == 0;
}


//Search index of element and delete this index
function check_arrays1($a1, $a2)
{
    foreach($a1 as $elem1) {
        unset($a2[array_search($elem1, $a2)]);
    }

    return count($a2) == 0;
}

//Check elements of arrays
function check_arrays2($a1, $a2)
{
    foreach($a1 as $elem1) {
        foreach($a2 as $key2 => $elem2) {
            if ($elem1 == $elem2){
                unset($a2[$key2]);
                break;
            }
        }
    }

    return count($a2) == 0;
}

//Example of last check_arrays function.
var_dump(check_arrays2($arr1,$arr2));
var_dump(check_arrays2($arr1,$arr3));
