
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

export default { adminAction, userAction };