const userServices = {};

const url = import.meta.env.VITE_BACKEND_URL;

userServices.register = async (formData) => {
  try {
    const resp = await fetch(url + "/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (!resp.ok) throw Error("Something went wrong");
    const data = await resp.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

userServices.login = async (formData) => {
  try {
    const resp = await fetch(url + "/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (!resp.ok) throw Error("Something went wrong");
    const data = await resp.json();
    console.log(data);
    localStorage.setItem('token', data.token)
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

userServices.getUserInfo = async() => {

  try {
    const resp = await fetch(url + "/api/private", {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    });
    if (!resp.ok) throw Error("Something went wrong");
    const data = await resp.json();
    console.log(data);
    localStorage.setItem('user', JSON.stringify(data.user))

    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};


export default userServices;
