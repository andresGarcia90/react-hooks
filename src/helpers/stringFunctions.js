export const reduceString = (str, rplStr = '...', limit = 10) => {
  return str.length > limit 
  ? str.substring(0,limit) + rplStr
  : str;
}