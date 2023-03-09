const { getPeople } = require('./service')

/* 
const item = {
   name: "Adrian",
   idade: 22
}
const { name } = item
console.log(name)
*/

async function main(){
  try {
    const { results } = await getPeople('a')

    const familyLars = results.filter(item => {
      //por padrão retorna um booleano
      // para informar se deve manter ou removar da lista
      // false -> remove
      // true -> mantém
      // não achou = -1
      // se achou = posição do array
      const result = item.name.toLowerCase().indexOf('lars') !== -1
      return result
    })

    const names = familyLars.map( person => person.name)
    console.log(names)
  } catch (error) {
      console.error('erro:', error)
  }
}

main()