const { getPeople } = require('./service')

async function main(){
  try {
    const { results } = await getPeople('a')
    const heights = results.map(item => parseInt(item.height))
    console.log('pesos', heights)
    // pegar todos os pesos e somalos
    const total = heights.reduce((previous, next) => {
      return previous + next
    })

    console.log('total', total)

  } catch (error) {
      console.error('erro:', error)
  }
}

main()