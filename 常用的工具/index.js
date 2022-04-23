var util = require("util");

function fn () {
    return new Promise((resolve, reject) => {
        if(Math.random() > 0.5) {
            resolve("成功")
        } else {
            reject("失败")
        }
    })
}

fn().then(res=> {
    console.log(res)
}).catch((err) => {
    console.log(err)
})

const callbackFunction = util.callbackify(fn);

callbackFunction((err, res) => {
    if(err) {
        console.log(err);
    } else {
        console.log(res);
    }
})