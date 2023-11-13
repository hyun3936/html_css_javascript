let s = 'Hello Javascript!';

console.log('문자열 =', s)
console.log('문자열길이 =', s.length)
console.log('첫번째문자 =', s[0])
console.log('5문자 추출 =', s.substring(0,5))
console.log('5문자 추출 =', s.slice(0,6))
console.log('마지막문자 추출 =', s.slice(-1))

let result = '';
for(let c of s){
    // console.log(c) ;
    if (c >= 'a' && c <= 'z') result = result + c.toUpperCase();
    else result = result + c.toLowerCase() ;
}
console.log("대소문자 변환 = ", result)

// s='12';
// isNaN(s) : 숫자로 이루어진 문자열은 false
console.log('숫자확인 = ', isNaN(s));
console.log('대문자 변환 =', s.toUpperCase())
console.log('소문자 변환 =', s.toLowerCase())

console.log('J의 위치 = ', s.indexOf('J'))
console.log('X의 위치 = ', s.indexOf('X')) // 찾는게 없으면 -1 이 나옴.
console.log('J의 유무 = ', s.includes('J'))
console.log('X의 유무 = ', s.includes('X'))



console.log('회문확인')
console.log('숫자합계')
console.log('취소')