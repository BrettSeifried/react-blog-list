import { client, checkError } from './client';

export async function getBlogs() {
  //   const { data, error } = await client.from('blogs').select();
  //   console.log(data);
  //   console.log(error);

  //   return data;

  const response = await client.from('blogs').select('*, authors( name )');
  //   console.log(response);
  return checkError(response);
}
