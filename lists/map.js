const service = require('./service')

async function main(){
  try {
    const response = await service.getPeople('a')
    //const names = []
    // response.results.forEach(item => 
    //     names.push(item.name)
    // );
    const names = response.results.map(person => person.name)
    
    console.log('names', names)
  } catch (error) {
    console.error('erro', error)
  }
}

main()