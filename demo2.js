var events = require("events");

var eventEmitter = new events.EventEmitter();

eventEmitter.on("connect", () => {
    console.log("连接成功");
    eventEmitter.emit("data_received11", "file_data");
});

eventEmitter.on("data_received", () => {
    console.log("发送数据1")
});
eventEmitter.on("data_received2", () => {
    console.log("发送数据2")
});
eventEmitter.on("data_received3", () => {
    console.log("发送数据3")
});
eventEmitter.on("data_received4", () => {
    console.log("发送数据4")
});
eventEmitter.on("data_received5", () => {
    console.log("发送数据5")
});
eventEmitter.on("data_received6", () => {
    console.log("发送数据6")
});
eventEmitter.on("data_received7", () => {
    console.log("发送数据7")
});
eventEmitter.on("data_received8", () => {
    console.log("发送数据8")
});
eventEmitter.on("data_received9", () => {
    console.log("发送数据9")
});
eventEmitter.on("data_received10", () => {
    console.log("发送数据10")
});

eventEmitter.on("data_received11", () => {
    console.log("发送数据10")
});

eventEmitter.addListener("data_received11", () => {
    console.log(8989);
})

eventEmitter.emit("connect");

console.log(eventEmitter.listenerCount("data_received11"))

console.log("程序执行完成")
