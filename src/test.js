// transformToObjects()
// 당신의 임무는 숫자 목록을 JavaScript 개체 목록으로 변환해야 하는 함수 에 누락된 논리를 추가하는 것입니다 .

// val새로 반환된 배열에서 모든 객체는 키와 입력 배열의 숫자를 값으로 가져야 합니다 .

// 예를 들어 제공된 입력에 대해 [1, 2, 3]함수 transformToObjects([1, 2, 3])는 를 반환해야 합니다 [{val: 1}, {val: 2}, {val: 3}].


function transformToObjects(numberArray) {
  let object = []
  for (let i = 0; i < numberArray.length; i++) {
    let obj = { let: numberArray[i] };
    object.push(obj);
  }
  console.log(object);
}

transformToObjects([1, 2, 3]);