
function adminAction(){
  return(
    {
      type: 'ADMIN'
    }
  )
}

function userAction(){
  return(
    {
      type: 'USER'
    }
  )
}

module.exports = { adminAction, userAction };