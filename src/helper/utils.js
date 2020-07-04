export function getFormBody(params) {
  //params ->data from login form
  let formBody = [];

  for (let property in params) {
    const encodedKey = encodeURIComponent(property); // 'user name'=>'user&20name' (to convert it back)
    const encodedValue = encodeURIComponent(params[property]); // 'kr 123'=>'kr&20123' (to convert it back)

    formBody = [encodedKey + '=' + encodedValue]; //formBody=["username=krishan" "password=123"]
  }

  return formBody.join('&'); // "username=krishan&password=123"
}
