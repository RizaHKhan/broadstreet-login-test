import { Selector } from 'testcafe'

fixture `Broadstreet Login`
  .page `http://ondeck.broadstreetads.com/login`

test('Sign Up Test', async t => {

  const signupButton = await Selector('.single-sign-on').find('a')

  await t
    .click(signupButton)
    .typeText('#user_name', 'Tester')
    .typeText('#user_email', 'test@gtest.com')
    .typeText('#user_password', 'Testing123!')
    .click('#human_valid')
    .click('.pull-right')
})
