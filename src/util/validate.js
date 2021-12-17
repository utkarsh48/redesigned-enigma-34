export function validateUsername(username){
  return /^\w+@\w+\.\w+$/i.test(username);
}

export function validatePassword(password){
  return [/\w+|@*/ig, /[A-Z]+/ig, /[0-9]+/ig].reduce((acc, next)=>acc = acc && next.test(password), true);
}