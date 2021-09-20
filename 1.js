const countries = [
    'ALBANIA',
    'BOLIVIA',
    'CANADA',
    'DENMARK',
    'ETHIOPIA',
    'FINLAND',
    'GERMANY',
    'HUNGARY',
    'IRELAND',
    'JAPAN',
    'KENYA'
  ]
for (let i=0; i < countries.length;i++)
{
    const len =countries[i].length;
    const code = countries[i].slice(0,3);
    const city =countries[i];
    console.log([city,code,len])
}  