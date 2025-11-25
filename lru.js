class lru {
  constructor(capacity) {
    this.capacity = capacity;
    this.map = new Map();
  }
getIndex(key) {
  let i = 0;
  for (const k of this.map.keys()) {
    if (k === key) return i;
    i++;
  }
  return -1;
}
put(key,value) {
if (!this.map.has(key)) {this.map.set(key,value) }else {this.map.delete(key)
this.map.set(key,value)}
if (this.map.size > this.capacity) this.map.delete(this.map.keys().next().value)
}    
get(key) {
if (this.map.has(key)) {
const v = this.map.get(key)
this.map.delete(key)
this.map.set(key,v)
return v
}
}
}
const l = new lru(2)
l.put("a",1)
l.put("b",2)
l.put("c",3)
l.put("d",4)
l.put("e",5)
console.log(l.get("c"))