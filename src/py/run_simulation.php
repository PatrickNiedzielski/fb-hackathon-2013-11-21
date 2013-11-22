<?php
error_reporting(E_ALL);
$level = $_GET['level'];
$code1 = $_GET['code1'];
$code2 = $_GET['code2'];
$lines1 = substr_count($code1, "\n")+1;
$lines2 = substr_count($code2, "\n")+1;
$levelfile = "level$level".".py";
$rand = rand(1,1000000);
$filename = 'tmp' . $rand . '.py';
file_put_contents($filename, file_get_contents('lib.py').file_get_contents($levelfile).file_get_contents('run.py'));


$descriptorspec = array(
   0 => array("pipe", "r"),  // stdin is a pipe that the child will read from
   1 => array("pipe", "w"),  // stdout is a pipe that the child will write to
   2 => array("file", "/tmp/error-output.txt", "a") // stderr is a file to write to
);

$cwd = '.';
$env = array('some_option' => 'aeiou');

$process = proc_open('python '.$filename, $descriptorspec, $pipes, $cwd, $env);

if (is_resource($process)) {
    // $pipes now looks like this:
    // 0 => writeable handle connected to child stdin
    // 1 => readable handle connected to child stdout
    // Any error output will be appended to /tmp/error-output.txt

    fwrite($pipes[0], "$lines1\n$code1\n$lines2\n$code2\n");
    fclose($pipes[0]);

    echo stream_get_contents($pipes[1]);
    fclose($pipes[1]);

    // It is important that you close any pipes before calling
    // proc_close in order to avoid a deadlock
    $return_value = proc_close($process);

    echo '{"rv": "'.$return_value.'"}';
} else {
    echo "Nope";
}
?>
