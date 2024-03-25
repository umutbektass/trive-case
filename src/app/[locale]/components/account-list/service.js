
export const  getTodos = async()=> {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users?_limit=10' , {
        next:{
            revalidate:0
        }
      });
      const data = await response.json();
      if(response.ok){
        return data;
      }
      return data;
    } catch (error) {
      console.error('Veri alınamadı:', error);
      return null;
    }
  }

  