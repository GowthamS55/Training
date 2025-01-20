(1)

    const employees = [ 
        { name: 'John', age: 28 }, 
        { name: 'Anna', age: 22 }, 
        { name: 'Mike', age: 32 },
        ];
        const ans = employees.sort((a,b)=> a.age - b.age );
        console.log(ans);
    
(2)

function evenodd(nums){
    const even =[];
    const odd =[];
    for (let i=0;i<nums.length;i++){
        if(nums[i]% 2==0){
            even.push(nums[i]);
        }
        else{
            odd.push(nums[i]);
        }
    }
    return {even,odd};
}
const result = evenodd([1, 2, 3, 4, 5, 6]);
console.log(result.even);
console.log(result.odd);

(3)


const items = [
    { id: 1, name: 'A' },
    { id: 2, name: 'B' },
    { id: 1, name: 'C' }
];
const unique = [];
const ids = [];
items.forEach(item => {
    if (!ids.includes(item.id)) {
        ids.push(item.id);
        unique.push(item);
    }
});
console.log(unique);

(4)

function findFrequent(arr) {
    return arr.sort((a, b) =>
        arr.filter( el=> el == b).length - arr.filter(el => el == a).length)[0];
}
const ans1 = findFrequent([1, 2, 3, 3, 3]);
console.log(ans1); 



(5)

const arr1 = [1, 2, 3];
const arr2 = [2, 3, 4];

const commonnumber= arr1.filter(num => arr2.includes(num));
console.log(commonnumber);

(6)

  const arr = [
    { id: 1, name: 'A' },
    { id: 2, name: 'B' }
];

const pairs = Object.fromEntries(arr.map(el => [el.id, el.name]));
console.log(pairs);




(7)

const array = [1, 2, 2, 3, 4, 4, 5];

const uniqueElements = array.filter(el => array.filter(x => x == el).length == 1);

console.log(uniqueElements); 

(8)
const obj = {a :1 ,b:2};
const key = Object.entries(obj);
console.log(key);

(9)


const obj1 = { a: 1, b: 2, c: 3 };
const keys = ["a", "b"];
const required = Object.fromEntries(
  Object.entries(obj1).filter(([key]) => keys.includes(key))
);
console.log(required);




(10)

let a = [1, 2, 3, 5];
let b = [4, 7];
let c = 6;
let mergedArray = [];
function addUnique(value) {
    if (!mergedArray.includes(value)) {
        mergedArray.push(value);
    }
}
for (let i = 0; i < arr.length; i++) {
    addUnique(a[i]);
}
for (let j = 0; j < b.length; j++) {
    addUnique(b[j]);
}
addUnique(c);
console.log(mergedArray);





