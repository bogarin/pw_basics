describe('Post', () => {

  beforeEach(async () => {
    await page.goto('https://react-redux.realworld.io/#/login')
  })
  
  afterEach(async () => {
    page.close()
  })
  
  test('Sign_In', async () => {
    
    const title = await page.title()
    expect(title).toBe('Conduit')

    await page.fill('input[type = "email"]', 'qacamp.acad@gmail.com')
    await page.press('input[type = "email"]', 'Tab')
    await page.type('input[type = "password"]', 'test1234')

    await Promise.all([
      page.waitForNavigation(),
      await page.click('form >> "Sign in"') // should pass
    ])
  })
})
