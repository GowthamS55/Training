(1)

function largestword(str){
    let word = str.split(" ");
    let count =0;
    for (let i=0;i<word.length;i++){
        if(word[i].length > count){
            count = word[i].length;
        }
    }
    console.log(count);
}
largestword('I am Gowtham Gowtham');


(2)

function replacename(str){
    let result = str.split(" ");
    for (let i=0;i<result.length;i++){
        if(result.indexOf(i)!=i){
            result[i]="CHANGED";
        }
    }
    console.log(result);
}
replacename('John Mary John Alex Mary');



(3)

function replaceword(str){
    let word = str.split(" ");
    return word.map((word,index) => index % 2 == 0 ? "EVEN" : word).join(" ");
}
console.log(replaceword("Gowtham gowtham goe goetham"));


(4)
function removeDuplicates(str) {
    let result = ""; 
    for (let i = 0; i < str.length; i++) {
        if (!result.includes(str[i])) {
            result += str[i]; 
        }
    }

    return result;
}
console.log(removeDuplicates("Hello world"));
