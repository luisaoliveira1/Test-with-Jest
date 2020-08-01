// Snapshot is a representation of data in the string format
// O snapshot deverá ir no repositório do git junto com o código.
// para atualizar um snapshot, é necessário passar um yarn test nomeDoSpec -u
const user = {
  name: 'Luisa Oliveia',
  age: 24,
  job:'Frontend Developer'
}

test( 'user matches', () => {

  expect(user).toMatchSnapshot()
})