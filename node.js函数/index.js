function say(world) {
    console.log(world);
}

function execute(someFunction, value) {
    someFunction(value);
}

execute(say, 'hello world')

// 匿名函数
execute(function (world){
    console.log(world)
}, "hello 匿名函数")
