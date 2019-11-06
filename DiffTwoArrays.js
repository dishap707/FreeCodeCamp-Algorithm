function diffArray(arr1, arr2) {
var arr3 = arr1.concat(arr2);
for (i=0; i < arr3.length; i++){
for (j=0; j< arr2.length; j++){
for (k=0; k<arr1.length; k++){
if (arr1[k] === arr3[i] && arr2[j] === arr3[i]){
delete arr3[i];
}
}
}
} 
return arr3;
}
diffArray([1, 2, 3, 4], [1, 2, 3, 4, 5]);
