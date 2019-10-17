## Filter
This will return a new array containing containing all elements that pass a given prediacate function.
In the example below, the returned array will contain each value but the 2.
```js
a = [1,2,3,4]

const b = a.filter((value) => {
  retun value!=2
});
```
### Output 
b will be [1,3,4]
