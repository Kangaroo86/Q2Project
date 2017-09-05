function array.find(searchFunction)
{
  for (int i = 0; i < array.length; i++)
  {
    if (searchFunction(array[i]) == true)
      return array[i];
  }

  return undefined
}
