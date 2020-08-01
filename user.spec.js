import User from './user'
describe('User', () => {
  test('name returns full name', () => {
    const user = new User({ firstname: 'Jane', lastname: 'Done'})
    expect(user.name).toBe('Jane Done')
  })
})
