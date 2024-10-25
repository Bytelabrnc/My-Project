const m_hero = ["thor", "ironman", "spiderman"]
const d_hero = ["superman", "flash", "batman"]

// m_hero.push(d_hero)
// console.log(m_hero);

// const my_hero = m_hero.concat(d_hero)
// console.log(my_hero);


const all_hero = [...m_hero, ...d_hero]
// console.log(all_hero);

const new_ary = [1,2,3, [4,5,6],7,[6,7, [4,5] ]]
const new_ary1 = new_ary.flat(Infinity)
console.log(new_ary1);
