# classes

multiple inheritance

## usage

```javascript
import classes from "multi-inherit";

class A {
  a() {
    console.log("a");
  }
}

class B {
  b() {
    console.log("b");
  }
}

class C extends classes(A, B) {}

const c = new C();

c.a(); //a
c.b(); //b

```
