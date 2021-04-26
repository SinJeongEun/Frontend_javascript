let persons = [
    { name: "홍길동", age: 16 },
    { name: "임꺽정", age: 18 },
    { name: "전우치", age: 19 }  // 참조가 사라짐
  ];
  console.log(persons);
  
  persons[2] = persons[1];  //1의 참조를 가지므로
  persons[1].age = 25;    //둘 다 값이 변경딤
  console.log(persons);
  