function prime(){
let count=1;
for(let i=0;i<num;i++){
if(num%i==1){
count++;
}
}
let result=prime()
if(count==3){
console.log("Prime");
}else{
console.log("Not a prime");
}