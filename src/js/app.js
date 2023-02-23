export default class Team {
// class Team {
  constructor(characterAll) {
    this.characterAll = characterAll;
  }

  * [Symbol.iterator]() {
    const { length } = this.characterAll;
    for (let index = 0; index < length; index += 1) {
      yield this.characterAll[index];
    }
  }
}


// const characterAll = [];
// characterAll.push(new Character('Лучник', 'Bowman', 50, 1, 40, 10));
// characterAll.push(new Character('Мечник', 'Magician', 60, 2, 30, 20));
// console.log(characterAll.length);
// const team = new Team(characterAll);
// console.log(team);
// for (const i of team) {
//   console.log(i);
// }
