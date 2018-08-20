<?php

class Emitter
{
    private $events;

    public function on($event, $handler)
    {
        if (is_callable($handler)){
            $this->events[$event] = $handler;
        } else {
            echo "Hamdler should be callable function";
            //throw new Exception("Hamdler $handler must be callable function");
        }
    }

    public function emit($event, $data)
    {
        if (isset($this->events[$event])) {
            $this->events[$event]($data);
        } else {
            echo "Undefined event $event";
            //throw new Exception("Undefined event $event");
        }
    }
}

$emitter = new Emitter();

$emitter->on("connect",function($data){
    echo "We have been connected to " . $data . PHP_EOL;
});

$emitter->on("disconnect",function($data){
    echo "We have been disconnected from " . $data . PHP_EOL;
});

$emitter->emit('connect','http-server');
$emitter->emit('connect','websocket');
$emitter->emit('disconnect','websocket');
$emitter->emit('disconnect','http-server');
