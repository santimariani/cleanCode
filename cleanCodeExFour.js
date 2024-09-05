// side-effect expected
function connectDatabase() {
    const didConnect = database.connect(); //here
    if (didConnect) {
      return true;
    } else {
      console.log('Could not connect to database!'); //here
      return false;
    }
  }

  // side-effect NOT expected
  function determineSupportAgent(ticket) {
    let agent;
    if (ticket.requestType === 'unknown') {
      agent = findStandardAgent();
    }
    agent = findAgentByRequestType(ticket.requestType);
    return agent;
  }
  
  function createUser(email, password) {
    if (!IsValid(email, pasword)) {
        console.log('Invalid input!');
    }
  }
  function IsValid(email, password) {
    if (!email.includes('@') || password.length < 7) {
      return false;
    }
    return true;
  }