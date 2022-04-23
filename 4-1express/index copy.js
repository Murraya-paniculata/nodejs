function Node(value) {
    this.next = null;
    this.value = value;
  }
  
  const a = new Node("a");
  const b = new Node("b");
  const c = new Node("c");
  const d = new Node("d");
  
  a.next = b
  b.next = c;
  c.next = d;
  
  console.log(a);

  function print(node) {
    if(!node) {
        return;
    }
    console.log(node.value);
    print(node.next);
  }
  print(a);

  // 获取链表的长度
  function getLength(node){
    if(!node){
      return 0;
    }
    return 1 + getLength(node.next);
  }

  // 通过下标获取链表中的某个数据
  function getValue(node, index){
    if(!node || index < 0){
      return '参数有误';
    }
    function _getValue(currentNode, currentIndex){
      if(!currentNode){
        return null;
      } else if (index === currentIndex) {
        return currentNode.value;
      }
      return _getValue(currentNode.next, currentIndex+1);
    }
    return _getValue(node, 0)
  }

  console.log(getValue(c, 1));


   // 通过下标获取链表中的某个数据
   function setValue(node, index, newValue){
    if(!node || index < 0){
      return '参数有误';
    }
    function _setValue(currentNode, currentIndex, newValue){
      if(!currentNode){
        return null;
      } else if (index === currentIndex) {
        return currentNode.value = newValue;
      }
      return _setValue(currentNode.next, currentIndex+1, newValue);
    }
    return _setValue(node, 0, newValue)
  }

  setValue(b, 10, 'c被改了');
  console.log(a);

  function addNode(node, value) {
    if(!node || !value) {
       return '参数错误'
    }
    if(node.next) {
        addNode(node.next, value);
    } else {
        const newNode = new Node("新节点")
        node.next = newNode;
    }
  }

  addNode(a, 'e');
  console.log(a);

function deleteNode(node, deleteValue) {
    //
    if(!node) {
        return null
    }
    if (node.value === deleteValue) {
        
    }
}
