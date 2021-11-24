// export function validateEmail(Email) {
//   const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   if (Email.match(re)){
// return true;
// }
// return false;
// }


export function validateName(Name) {
  const checkName = /^[A-Za-z][\w\s]{2,78}$/;
  if (Name.match(checkName)){
    return true;
    }
    return false;
}



export function validateEmail(email) {
  const cemail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-z]{2,3})$/;
  if (email.match(cemail)) {
    return true;
  }
  return false;
}

export function validateContactName(input) {
  const cname = /^[A-Za-z][\w\s]{2,78}$/;
  if (input.match(cname)) {
    return true;
  }
  return false;
}


