const API_URL = "https://fakestoreapi.com";

export default async function GetProducts() { 
  try {
    const response = await fetch(`${API_URL}/products`);
    const data = await response.json();
    console.log(data)
    return data; 
  } catch (error) {console.error(error)}
}
