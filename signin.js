import { Selector } from 'testcafe'

fixture `Broadstreet Login`
  .page `http://ondeck.broadstreetads.com/login`

test('Sign Up Test', async t => {

  await t
    .typeText('#session_email', 'test@gtest.com')
    .typeText('#session_password', 'Testing123!')
    .click('.btn')
})
