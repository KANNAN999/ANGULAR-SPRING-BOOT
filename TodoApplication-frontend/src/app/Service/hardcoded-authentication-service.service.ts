import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationServiceService {

  constructor() { }

authenticate(userName,password) : boolean{
  if(userName==="kannan" && password==="123"){
    sessionStorage.setItem("authenticatedUser",userName);
    return true;
  }
  else{
    return false;
  }
}

isUserLoggedIn(){
  let user=sessionStorage.getItem("authenticatedUser");
  return !(user===null);
}

isUserLoggedOut(){
  sessionStorage.removeItem("authenticatedUser");
}


}
