<?php

$doc = new DomDocument;

// We need to validate our document before refering to the id
$doc->validateOnParse = true;
$doc->Load('ttest.php');

echo  $doc->getElementById('php-basics')->innerHTML;

?>