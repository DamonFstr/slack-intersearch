formatSearch = function (id, outputOption) {
        
  if(outputOption == 'user'){
    console.log("3");
    return 'https://app.intercom.io/a/apps/' + process.env.app_id + '/users/' + id + '/all-conversations';
  }
  else if(outputOption == 'lead'){
    console.log("3");
    return 'https://app.intercom.io/a/apps/' + process.env.app_id + '/users/' + id + '/all-conversations';
  }
  else{
    console.log("3");
    return 'I cannot find that person';
  }

}
