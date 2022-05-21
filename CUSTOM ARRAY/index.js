function myArray() {
    Object.defineProperty(this, "length", {
      value: 0,
      writable: true,
      enumerable: false,
    });
  
    this.length = arguments.length;
  
    for (let i = 0; i < arguments.length; i++) {
      this[i] = arguments[i];
      
    }
  }
  let arr1=new myArray(2,4,6,8,9)
  // console.log(Object.values(arr1))
  
  myArray.prototype.push=function(value){
      this[this.length]=value;
      this.length++
  }
  
  arr1.push(12)
  console.log(Object.values(arr1))
  
  
  
  myArray.prototype.pop=function(){
      delete this[this.length-1]
      this.length--
  }
   arr1.pop()
   arr1.pop()
   console.log(Object.values(arr1))
  
   
  myArray.prototype.top=function(){
    console.log(this[this.length-1])  
  }
  arr1.top()
  
  
   myArray.prototype.प्रिंट = function () {
     console.log(Object.values(this));
   };
  arr1.प्रिंट()
  
  myArray.prototype.printReverse = function(){
    console.log(Object.values(this).reverse())
  }
  arr1.printReverse()
  
  
  myArray.prototype.size=function(){
      console.log(this.length)  
  }
  arr1.size()