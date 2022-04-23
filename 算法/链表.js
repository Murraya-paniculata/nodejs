//////////////////////
// 1 链表的遍历
//////////////////////
function Node(value) {
    this.value = value;
    this.next = null;
}

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const node5 = new Node(5);
const node6 = new Node(6);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
node6.next = null;

// 递归遍历
// function bianliLink(root) {
//     if(!root) return;
//     console.log(root.value);
//     if(!root.next) {
//         return
//     };
//     bianliLink(root.next);
// }

// 循环遍历
function bianliLink(root) {
    let temp = root;
    if(!temp) return;
    while(true) {
        if(temp !== null) {
            console.log(temp.value)
        } else {
            break;
        }
        temp = temp.next;
    }
}


// bianliLink(node1);


//////////////////////
// 2. 链表的逆置
//////////////////////
// - 先找到最后一个链表
function reverseLink(root) {
     if(root.next.next === null) { // 当前是倒数第二个节点
        console.log('执行la', root.next.next)
        root.next.next = root;
        return root.next;
     } else {
         var result = reverseLink(root.next); // 第一次会得到倒数第二个节点
         console.log('执行', root)  // 这行及以下的代码是先入后出的栈调用顺序
        root.next.next = root;
        root.next = null;
        return result;
     }
}
bianliLink(reverseLink(node1));

