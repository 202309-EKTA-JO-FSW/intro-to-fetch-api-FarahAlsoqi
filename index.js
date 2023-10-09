// Please read the README.md to understand what to do. Happy Coding !
async function fetchUserData() {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const userData = await res.json();
  
      const newdata = userData.map(user => {
        const { name, username, email, address, phone, website, company } = user;
        const newdata = {
          name,
          username,
          email,
          address: address.street,
          phone,
          website,
          company: company.name
        };
        return newdata;
      });
  
      console.log(newdata);

    const filterResult = newdata.filter(newdata => newdata.email == `.biz`)
    console.log(filterResult)
  
    const sortResult = newdata.sort(function (a, b) {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });
      console.log('sort Names' , sortResult);

      
    } catch (error) {
      console.error('Error', error);
    }
  }

  fetchUserData();
  