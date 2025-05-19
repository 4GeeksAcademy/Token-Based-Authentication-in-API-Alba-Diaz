export const initialStore=()=>{
  return{
    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'logout':
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      return{
        ...store,
        user: null

      }
    case 'getUserInfo':
      return{
        ...store,
        user: action.payload
      }
    
    default:
      throw Error('Unknown action.');
  }    
}
